const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const FAQ_DIR = 'data/faqs';
const TARGET_LANGUAGES = ['es', 'fr', 'ar', 'pt', 'th', 'pl', 'ja', 'sv', 'it', 'nl'];
const CONCURRENCY = 3;

let totalPromptTokens = 0;
let totalCompletionTokens = 0;
let totalTokens = 0;

function buildSystemPrompt(targetLang) {
  const fromSecret = process.env.TRANSLATION_PROMPT;
  
  if (!fromSecret || !fromSecret.trim()) {
    return `You are a professional translator. Translate the following text from English to ${targetLang}. Maintain technical terms like "VPS", "Dedicated Server", "FTP", "API", "Docker", "Spigot", "ZAP Coins", etc. Keep the translation natural, accurate, and appropriate for a technical documentation context.`;
  }
  
  return fromSecret.replaceAll("${targetLang}", targetLang);
}

function buildGlossary(targetLang) {
  const glossaryRaw = process.env.TRANSLATION_GLOSSARY;
  if (!glossaryRaw) return "";

  try {
    const glossaryObj = JSON.parse(glossaryRaw);
    if (!glossaryObj[targetLang]) return "";

    const entries = Object.entries(glossaryObj[targetLang])
      .map(([src, tgt]) => `- Translate "${src}" as "${tgt}"`)
      .join("\n");

    return `\n\nGlossary rules for ${targetLang}:\n${entries}`;
  } catch (err) {
    console.error("Glossary parsing failed:", err);
    return "";
  }
}

async function translateText(text, targetLang) {
  if (!text || text.trim() === '') return text;
  
  // Skip if already translated (not equal to English)
  // We'll check this in the main function
  
  const systemPrompt = buildSystemPrompt(targetLang) + buildGlossary(targetLang);

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        {
          role: 'user',
          content: text
        }
      ],
      temperature: 0.1
    });

    if (response.usage) {
      totalPromptTokens += response.usage.prompt_tokens || 0;
      totalCompletionTokens += response.usage.completion_tokens || 0;
      totalTokens += response.usage.total_tokens || 0;
    }

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error(`Translation error for ${targetLang}:`, error.message);
    throw error;
  }
}

async function translateFAQFile(filePath) {
  console.log(`\nProcessing ${filePath}...`);
  const content = fs.readFileSync(filePath, 'utf8');
  const faqs = JSON.parse(content);
  
  let modified = false;
  const tasks = [];
  
  // Collect all translation tasks
  for (let i = 0; i < faqs.length; i++) {
    const faq = faqs[i];
    
    // Translate titles
    if (typeof faq.title === 'object' && faq.title.en) {
      for (const lang of TARGET_LANGUAGES) {
        // Only translate if it's still in English (not already translated)
        if (!faq.title[lang] || faq.title[lang] === faq.title.en) {
          tasks.push({
            type: 'title',
            index: i,
            lang: lang,
            text: faq.title.en
          });
        }
      }
    }
    
    // Translate content
    if (typeof faq.content === 'object' && faq.content.en) {
      for (const lang of TARGET_LANGUAGES) {
        // Only translate if it's still in English (not already translated)
        if (!faq.content[lang] || faq.content[lang] === faq.content.en) {
          tasks.push({
            type: 'content',
            index: i,
            lang: lang,
            text: faq.content.en
          });
        }
      }
    }
  }
  
  console.log(`  Found ${tasks.length} items to translate`);
  
  // Translate with concurrency
  let completed = 0;
  const translations = new Map();
  
  async function processTask(task) {
    const key = `${task.type}-${task.index}-${task.lang}`;
    try {
      console.log(`  [${++completed}/${tasks.length}] Translating ${task.type} ${task.index + 1} to ${task.lang}...`);
      const translated = await translateText(task.text, task.lang);
      translations.set(key, translated);
      await new Promise(resolve => setTimeout(resolve, 100)); // Rate limiting
    } catch (error) {
      console.error(`  Error translating ${key}:`, error.message);
      // Keep original English text on error
      translations.set(key, task.text);
    }
  }
  
  // Process tasks with concurrency
  const workers = [];
  let taskIndex = 0;
  
  async function worker() {
    while (taskIndex < tasks.length) {
      const task = tasks[taskIndex++];
      await processTask(task);
    }
  }
  
  for (let i = 0; i < CONCURRENCY; i++) {
    workers.push(worker());
  }
  
  await Promise.all(workers);
  
  // Apply translations
  for (const task of tasks) {
    const key = `${task.type}-${task.index}-${task.lang}`;
    const translated = translations.get(key);
    
    if (translated && translated !== task.text) {
      if (task.type === 'title') {
        faqs[task.index].title[task.lang] = translated;
      } else {
        faqs[task.index].content[task.lang] = translated;
      }
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, JSON.stringify(faqs, null, 2) + '\n', 'utf8');
    console.log(`  ✓ Updated ${filePath}`);
  } else {
    console.log(`  - No changes needed for ${filePath}`);
  }
}

async function runWithConcurrency(tasks, worker, concurrency) {
  let index = 0;

  async function next() {
    const current = index++;
    if (current >= tasks.length) return;
    const task = tasks[current];
    await worker(task);
    await next();
  }

  const workers = [];
  const workerCount = Math.min(concurrency, tasks.length);
  for (let i = 0; i < workerCount; i++) {
    workers.push(next());
  }
  await Promise.all(workers);
}

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error('ERROR: OPENAI_API_KEY environment variable is not set!');
    console.error('Please set it before running this script.');
    process.exit(1);
  }

  const files = fs.readdirSync(FAQ_DIR)
    .filter(f => f.endsWith('.json'))
    .map(f => path.join(FAQ_DIR, f));
  
  console.log(`Found ${files.length} FAQ files to translate`);
  console.log(`Target languages: ${TARGET_LANGUAGES.join(', ')}`);
  console.log(`Concurrency: ${CONCURRENCY}`);
  
  for (const file of files) {
    await translateFAQFile(file);
  }
  
  console.log('\n--- Translation Token Usage ---');
  console.log(`Prompt tokens:     ${totalPromptTokens}`);
  console.log(`Completion tokens: ${totalCompletionTokens}`);
  console.log(`Total tokens:      ${totalTokens}`);
  console.log('\n✓ All translations completed!');
}

main().catch(console.error);

