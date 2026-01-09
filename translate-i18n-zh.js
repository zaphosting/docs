const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function translateText(text, context = '') {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are a professional translator for UI/UX strings. Translate the following text to Simplified Chinese (zh-CN).

Important rules:
- Keep technical terms like "VPS", "API", "DDoS", "IPv4", "FTP", "SSH" unchanged
- Keep product names unchanged (e.g., "ZAP-Hosting", "TeamSpeak", "Discord", "Minecraft")
- Keep placeholders like {voucherValue}, {marketingSite}, {language}, {count} unchanged
- Keep emoji unchanged
- For "Gameserver" translate as "游戏服务器"
- For "VPS" keep as "VPS" or translate as "虚拟专用服务器" if it makes sense in context
- Maintain the same tone (formal/informal)

Return ONLY the translated text, no explanations.`
        },
        {
          role: 'user',
          content: context ? `Context: ${context}\n\nText to translate: ${text}` : text
        }
      ],
      temperature: 0.1
    });
    
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error(`Translation error: ${error.message}`);
    return text;
  }
}

async function translateI18nFile(filePath, referenceFilePath = null) {
  console.log(`\nProcessing: ${filePath}`);
  
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let referenceData = null;
  
  if (referenceFilePath && fs.existsSync(referenceFilePath)) {
    referenceData = JSON.parse(fs.readFileSync(referenceFilePath, 'utf8'));
    console.log(`  Using reference: ${referenceFilePath}`);
  }
  
  let translatedCount = 0;
  let skippedCount = 0;
  let totalCount = 0;
  
  for (const [key, value] of Object.entries(data)) {
    totalCount++;
    
    if (!value.message) {
      console.log(`  Skipping ${key} (no message field)`);
      skippedCount++;
      continue;
    }
    
    // Check if already translated (not English-like or same as German)
    const isEnglish = /^[a-zA-Z0-9\s\-_.,!?(){}[\]<>:;'"/\\@#$%^&*+=|~`]+$/.test(value.message);
    if (!isEnglish && referenceData && referenceData[key] && value.message !== referenceData[key].message) {
      console.log(`  Already translated: ${key}`);
      skippedCount++;
      continue;
    }
    
    // Skip if message contains only technical terms or placeholders
    if (value.message.match(/^[\{\}a-zA-Z0-9\-_\/:\s]+$/) && !value.message.match(/[a-z]{4,}/i)) {
      console.log(`  Skipping technical: ${key}`);
      skippedCount++;
      continue;
    }
    
    console.log(`  Translating: ${key} = "${value.message.substring(0, 50)}..."`);
    
    const context = value.description || '';
    const translatedMessage = await translateText(value.message, context);
    
    data[key].message = translatedMessage;
    translatedCount++;
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log(`  Total: ${totalCount}, Translated: ${translatedCount}, Skipped: ${skippedCount}`);
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  ✓ Saved: ${filePath}`);
}

async function main() {
  console.log('Starting translation of Chinese i18n files...\n');
  
  const files = [
    {
      zh: 'i18n/zh/code.json',
      de: 'i18n/de/code.json'
    },
    {
      zh: 'i18n/zh/docusaurus-theme-classic/navbar.json',
      de: 'i18n/de/docusaurus-theme-classic/navbar.json'
    },
    {
      zh: 'i18n/zh/docusaurus-theme-classic/footer.json',
      de: 'i18n/de/docusaurus-theme-classic/footer.json'
    },
    {
      zh: 'i18n/zh/docusaurus-plugin-content-docs/current.json',
      de: 'i18n/de/docusaurus-plugin-content-docs/current.json'
    }
  ];
  
  for (const filePair of files) {
    if (fs.existsSync(filePair.zh)) {
      await translateI18nFile(filePair.zh, filePair.de);
    } else {
      console.log(`File not found: ${filePair.zh}`);
    }
  }
  
  console.log('\n✓ All i18n files have been translated!');
}

main().catch(console.error);

