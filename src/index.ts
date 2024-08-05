/* eslint-disable import/first */
const fs = require('fs');
const path = require('path');
const prh = require('textlint-rule-prh');
import type { TextlintRuleModule } from '@textlint/types';

export interface Options {
  allows?: string[];
}

const report: TextlintRuleModule<Options> = (context) => {
  const manualCreatedRule = fs.readFileSync(
    path.join(__dirname, '..', 'dict', 'manual-added-rules.yml'),
    'utf-8',
  );

  return prh.default.fixer(context, {
    ruleContents: [manualCreatedRule],
  });
};

export default {
  linter: report,
  fixer: report,
};
