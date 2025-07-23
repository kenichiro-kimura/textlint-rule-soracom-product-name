import TextLintTester from 'textlint-tester';
import * as lint from '../src/index';

const report = lint.default.fixer;
const tester = new TextLintTester();

// Test just Wisora to debug the issue
console.log('Testing Wisora specifically...');

tester.run('Wisora Debug', report, {
  valid: ['SORACOM Wisora'],
  invalid: [
    {
      text: 'soracom Wisora',
      errors: [
        {
          message: 'soracom Wisora => SORACOM Wisora',
        },
      ],
    },
  ],
});