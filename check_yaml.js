const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

try {
  const yamlContent = fs.readFileSync(
    path.join(__dirname, 'dict', 'manual-added-rules.yml'),
    'utf-8'
  );
  
  console.log('YAML file length:', yamlContent.length);
  
  const parsed = yaml.load(yamlContent);
  console.log('YAML parsed successfully');
  console.log('Number of rules:', parsed.rules.length);
  
  // Find the Wisora rule
  const wisoraRule = parsed.rules.find(rule => rule.expected === 'SORACOM Wisora');
  if (wisoraRule) {
    console.log('\nFound Wisora rule:');
    console.log(JSON.stringify(wisoraRule, null, 2));
  } else {
    console.log('\nWisora rule not found');
  }
  
  // Find the Air rule for comparison
  const airRule = parsed.rules.find(rule => rule.expected === 'SORACOM Air');
  if (airRule) {
    console.log('\nFound Air rule for comparison:');
    console.log(JSON.stringify(airRule, null, 2));
  }
  
} catch (err) {
  console.error('Error:', err);
}