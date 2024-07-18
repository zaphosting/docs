const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { execSync } = require('child_process');

const defaultBranch = 'master';

const changedFiles = getChangedFiles();
let comment = '';

changedFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  let fileContent = ""

  // Attempt to parse YAML, handle errors
  let metadata;
  try {
    fileContent = fs.readFileSync(filePath, 'utf8');
    metadata = yaml.load(fileContent.split('---')[1]);
  } catch (yamlError) {
    // If YAML parsing fails, capture the error message
    const errorComment = `### YAML Parsing Error in \`${file}\`\n- ${yamlError.message}\n\n`;
    comment += errorComment;
    return; // Skip further validation for this file
  }

  const fileNameWithoutExtension = path.basename(file, '.md');

  let errors = [];

  if (metadata.id !== fileNameWithoutExtension) {
    errors.push(`- id should be \`${fileNameWithoutExtension}\` but is \`${metadata.id}\``);
  }

  if (!metadata.services || metadata.services.length === 0) {
    errors.push('- \`services\` property is missing or empty');
  }

  // Check for YouTube tag and corresponding import statement
  const youtubeTagRegex = /<YouTube\b[^>]*\/>/g;
  const youtubeImportRegex = /import\s+YouTube\s+from\s+'@site\/src\/components\/YouTube\/YouTube';/;

  if (fileContent.match(youtubeTagRegex) && !fileContent.match(youtubeImportRegex)) {
    errors.push('- Missing import statement for YouTube component, please add `import YouTube from \'@site/src/components/YouTube/YouTube\';` to the docs page.');
  }


  // Check for InlineVoucher tag and corresponding import statement
  const inlineVoucherTagRegex = /<InlineVoucher\b[^>]*\/>/g;
  const inlineVoucherImportRegex = /import\s+InlineVoucher\s+from\s+'@site\/src\/components\/InlineVoucher';/;

  if (fileContent.match(inlineVoucherTagRegex) && !fileContent.match(inlineVoucherImportRegex)) {
    errors.push('- Missing import statement for InlineVoucher component, please add `import InlineVoucher from \'@site/src/components/InlineVoucher\';` to the docs page.');
  }

  if (errors.length > 0) {
    comment += `### Found possible issues in \`${file}\`\n` + errors.join('\n') + '\n\n';
  }


  // Check for Tabs & TabItem tag and corresponding import statement
  const tabsTagRegex = /<Tabs\b[^>]*\/>/g;
  const tabsImportRegex = /import\s+Tabs\s+from\s+'@theme\/Tabs';/;

  if (fileContent.match(tabsTagRegex) && !fileContent.match(tabsImportRegex)) {
    errors.push('- Missing import statement for Tabs component, please add `import Tabs from \'@theme/Tabs\';` to the docs page.');
  }

  const tabItemTagRegex = /<TabItem\b[^>]*\/>/g;
  const tabItemImportRegex = /import\s+TabItem\s+from\s+'@theme\/TabItem';/;

  if (fileContent.match(tabItemTagRegex) && !fileContent.match(tabItemImportRegex)) {
    errors.push('- Missing import statement for TabItem component, please add `import TabItem from \'@theme/TabItem\';` to the docs page.');
  }

  if (errors.length > 0) {
    comment += `### Found possible issues in \`${file}\`\n` + errors.join('\n') + '\n\n';
  }
});

if (comment) {
  fs.writeFileSync('.github/scripts/comment.md', comment);
} else {
  fs.writeFileSync('.github/scripts/comment.md', 'Docs metadata validated, no issues found.');
}

function getChangedFiles() {
  try {
    // Use the merge-base command to find the common ancestor and then diff
    const mergeBase = execSync(`git merge-base HEAD origin/${defaultBranch}`).toString().trim();
    const output = execSync(`git diff --name-only ${mergeBase} HEAD`).toString();
    return output.split('\n').filter(file => file.endsWith('.md'));
  } catch (error) {
    console.error('Error getting changed files:', error.message);
    return [];
  }
}
