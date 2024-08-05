import TextLintTester from 'textlint-tester';
import * as lint from '../src/index';

const report = lint.default.fixer;
const tester = new TextLintTester();

tester.run('SORACOM Air', report, {
  valid: ['SORACOM Air'],
  invalid: [
    {
      text: 'soracom Air',
      errors: [
        {
          message: 'soracom Air => SORACOM Air',
        },
      ],
    },
    {
      text: 'SoracomAir',
      errors: [
        {
          message: 'SoracomAir => SORACOM Air',
        },
      ],
    },
  ],
});
tester.run('LoRaWAN', report, {
  valid: ['LoRaWAN'],
  invalid: [
    {
      text: 'LoRaWan',
      errors: [
        {
          message: 'LoRaWan => LoRaWAN',
        },
      ],
    },
  ],
});
tester.run('Sigfox', report, {
  valid: ['Sigfox'],
  invalid: [
    {
      text: 'sigfox',
      errors: [
        {
          message: 'sigfox => Sigfox',
        },
      ],
    },
  ],
});
tester.run('SORACOM Funk', report, {
  valid: ['SORACOM Funk'],
  invalid: [
    {
      text: 'SORACOM Func',
      errors: [
        {
          message: 'SORACOM Func => SORACOM Funk',
        },
      ],
    },
  ],
});
tester.run('SORACOM Flux', report, {
  valid: ['SORACOM Flux'],
  invalid: [
    {
      text: 'SORACOM Flax',
      errors: [
        {
          message: 'SORACOM Flax => SORACOM Flux',
        },
      ],
    },
    {
      text: 'soracom Flux',
      errors: [
        {
          message: 'soracom Flux => SORACOM Flux',
        },
      ],
    },
  ],
});
tester.run('Soracom Cloud Camera Services', report, {
  valid: ['Soracom Cloud Camera Services'],
  invalid: [
    {
      text: 'Soracom Cloud Camera Service',
      errors: [
        {
          message:
            'Soracom Cloud Camera Service => Soracom Cloud Camera Services',
        },
      ],
    },
    {
      text: 'SORACOM Cloud Camera Service',
      errors: [
        {
          message:
            'SORACOM Cloud Camera Service => Soracom Cloud Camera Services',
        },
      ],
    },
    {
      text: 'SORACOM Cloud Camera Services',
      errors: [
        {
          message:
            'SORACOM Cloud Camera Services => Soracom Cloud Camera Services',
        },
      ],
    },
  ],
});
tester.run('plan-D', report, {
  valid: ['plan-D', 'plan-DU'],
  invalid: [
    {
      text: 'planD',
      errors: [
        {
          message: 'planD => plan-D',
        },
      ],
    },
    {
      text: 'planDU',
      errors: [
        {
          message: 'planDU => plan-DU',
        },
      ],
    },
  ],
});
tester.run('plan-K2', report, {
  valid: ['plan-K', 'plan-K2'],
  invalid: [
    {
      text: 'planK',
      errors: [
        {
          message: 'planK => plan-K',
        },
      ],
    },
    {
      text: 'planK2',
      errors: [
        {
          message: 'planK2 => plan-K2',
        },
      ],
    },
  ],
});
tester.run('plan01s', report, {
  valid: ['plan01s'],
  invalid: [
    {
      text: 'plan-01s',
      errors: [
        {
          message: 'plan-01s => plan01s',
        },
      ],
    },
    {
      text: 'plan01S',
      errors: [
        {
          message: 'plan01S => plan01s',
        },
      ],
    },
  ],
});
