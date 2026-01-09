const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const SOURCE_DIR = 'docs';
const TARGET_LANGUAGES = ['de', 'fr', 'es', 'ar', 'pt', 'th', 'pl', 'ja', 'it', 'sv', 'nl', 'zh'];

const CONCURRENCY = 5;

let totalPromptTokens = 0;
let totalCompletionTokens = 0;
let totalTokens = 0;

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

function buildSystemPrompt(targetLang) {
  const fromSecret = process.env.TRANSLATION_PROMPT;

  if (!fromSecret || !fromSecret.trim()) {
    throw new Error("TRANSLATION_PROMPT secret is missing or empty!");
  }
  return fromSecret.replaceAll("${targetLang}", targetLang) + buildGlossary(targetLang);
}

function getChangedMarkdownFiles() {
  try {
    const output = execSync('git diff --name-only origin/master...HEAD', { encoding: 'utf8' });
    return output
      .split('\n')
      .filter(file => file.startsWith(SOURCE_DIR) && file.endsWith('.md') && fs.existsSync(file));
  } catch (error) {
    return getAllMarkdownFiles();
  }
}

function getAllMarkdownFiles() {
  const output = execSync(
    `find ${SOURCE_DIR} -name "*.md" -not -path "./node_modules/*" -not -path "./.git/*"`,
    { encoding: 'utf8' }
  );
  return output.split('\n').filter(file => file.trim() !== '');
}

async function translateContent(content, targetLang) {
  const systemPrompt = buildSystemPrompt(targetLang);

  const response = await openai.chat.completions.create({
    model: 'gpt-4.1-mini',
    messages: [
      {
        role: 'system',
        content: systemPrompt
      },
      {
        role: 'user',
        content: content
      }
    ],
    temperature: 0.1
  });

  if (response.usage) {
    totalPromptTokens += response.usage.prompt_tokens || 0;
    totalCompletionTokens += response.usage.completion_tokens || 0;
    totalTokens += response.usage.total_tokens || 0;
  }

  return response.choices[0].message.content;
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
  const changedFiles = getChangedMarkdownFiles();
  console.log(`Found ${changedFiles.length} markdown files to translate`);

  const tasks = [];

  for (const file of changedFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relPath = path.relative(SOURCE_DIR, file);

    for (const lang of TARGET_LANGUAGES) {
      tasks.push({
        file,
        relPath,
        lang,
        content
      });
    }
  }

  console.log(`Created ${tasks.length} translation tasks`);
  console.log(`Running with concurrency = ${CONCURRENCY}`);

  await runWithConcurrency(
    tasks,
    async ({ file, relPath, lang, content }) => {
      console.log(`Translating ${file} to ${lang}...`);
      try {
        const translatedContent = await translateContent(content, lang);

        const outputFile = path.join(
          'i18n',
          lang,
          'docusaurus-plugin-content-docs/current',
          relPath
        );

        fs.mkdirSync(path.dirname(outputFile), { recursive: true });
        fs.writeFileSync(outputFile, translatedContent);
      } catch (error) {
        console.error(`Error translating ${file} to ${lang}:`, error);
      }
    },
    CONCURRENCY
  );

  console.log('\n--- Translation Token Usage ---');
  console.log(`Prompt tokens:     ${totalPromptTokens}`);
  console.log(`Completion tokens: ${totalCompletionTokens}`);
  console.log(`Total tokens:      ${totalTokens}`);
}

main().catch(console.error);
