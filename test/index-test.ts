import TextLintTester from 'textlint-tester';
import * as lint from '../src/index';

const report = lint.default.fixer;
const tester = new TextLintTester();

const productsWithPrefix = [
  'Air',
  'Arc',
  'Beam',
  'Canal',
  'Door',
  'Direct',
  'Endorse',
  'Funnel',
  'Funk',
  'Flux',
  'Gate',
  'Harvest',
  'Inventory',
  'Junction',
  'Krypton',
  'Lagoon',
  'Mosaic',
  'Napter',
  'Orbit',
  'Peek',
  'Query',
  'Relay',
  'UG',
  'User Group'
];

productsWithPrefix.forEach((product) => {
  tester.run(`${product}`, report, {
    valid: [`SORACOM ${product}`],
    invalid: [
      {
        text: `soracom ${product}`,
        errors: [
          {
            message: `soracom ${product} => SORACOM ${product}`,
          },
        ],
      },
      {
        text: `SORACOM ${product.toLowerCase()}`,
        errors: [
          {
            message: `SORACOM ${product.toLowerCase()} => SORACOM ${product}`,
          },
        ],
      },
      {
        text: `Soracom${product}`,
        errors: [
          {
            message: `Soracom${product} => SORACOM ${product}`,
          },
        ],
      },
      {
        text: `SORACOM-${product}`,
        errors: [
          {
            message: `SORACOM-${product} => SORACOM ${product}`,
          },
        ],
      },
    ],
  });
});

const productsWithoutPrefix = [
  'LoRaWAN',
  'Sigfox',
];

productsWithoutPrefix.forEach((product) => {
  tester.run(`${product}`, report, {
    valid: [product],
    invalid: [
      {
        text: `${product.toLowerCase()}`,
        errors: [
          {
            message: `${product.toLowerCase()} => ${product}`,
          },
        ],
      },
    ],
  });
});

const productsWithSpace = [
  'Virtual Private Gateway',
  'Unified Endpoint',
  'SORACOM User Group'
];

productsWithSpace.forEach((product) => {
  tester.run(`${product}`, report, {
    valid: [product],
    invalid: [
      {
        text: `${product.toLowerCase()}`,
        errors: [
          {
            message: `${product.toLowerCase()} => ${product}`,
          },
        ],
      },
      {
        text: `${product.replace(/ /g,'')}`,
        errors: [
          {
            message: `${product.replace(/ /g,'')} => ${product}`,
          },
        ],
      },
      {
        text: `${product.replace(/ /g,'-')}`,
        errors: [
          {
            message: `${product.replace(/ /g,'-')} => ${product}`,
          },
        ],
      },
    ],
  });
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

const subscriptions = [
  'planX1',
  'planX2',
  'planX3',
  'planP1', 
];

subscriptions.forEach((subscription) => {
  tester.run(subscription, report, {
    valid: [subscription],
    invalid: [
      {
        text: subscription.toLowerCase(),
        errors: [
          {
            message: `${subscription.toLowerCase()} => ${subscription}`,
          },
        ],
      },
      {
        text: subscription.replace(/plan/g, 'plan-'),
        errors: [
          {
            message: `${subscription.replace(/plan/g, 'plan-')} => ${subscription}`,
          },
        ],
      },
    ],
  });
});

tester.run('planX3 X3-5MB', report, {
  valid: ['planX3 X3-5MB'],
  invalid: [
    {
      text: 'planX3-5MB',
      errors: [
        {
          message: 'planX3-5MB => planX3 X3-5MB',
        },
      ],
    },
    {
      text: 'planX3 5MB',
      errors: [
        {
          message: 'planX3 5MB => planX3 X3-5MB',
        },
      ],
    },
    {
      text: 'planX3 X3 5MB',
      errors: [
        {
          message: 'planX3 X3 5MB => planX3 X3-5MB',
        },
      ],
    },
  ],
});

tester.run('plan01s', report, {
  valid: ['plan01s'],
  invalid: [
    {
      text: 'plan01S',
      errors: [
        {
          message: 'plan01S => plan01s',
        },
      ],
    },
    {
      text: 'plan-01s',
      errors: [
        {
          message: 'plan-01s => plan01s',
        },
      ],
    },
  ],
});

tester.run('plan01s - Low Data Volume', report, {
  valid: ['plan01s - Low Data Volume'],
  invalid: [
    {
      text: 'plan01s Low Data Volume',
      errors: [
        {
          message: 'plan01s Low Data Volume => plan01s - Low Data Volume',
        },
      ],
    },
    {
      text: 'plan01s LowDataVolume',
      errors: [
        {
          message: 'plan01s LowDataVolume => plan01s - Low Data Volume',
        },
      ],
    },
    {
      text: 'plan01s - LowDataVolume',
      errors: [
        {
          message: 'plan01s - LowDataVolume => plan01s - Low Data Volume',
        },
      ],
    },
  ],
});

const subscriptionsForJapan = [
  'plan-D',
  'plan-DU',
  'plan-K',
  'plan-K2',
  'plan-KM1',
];

subscriptionsForJapan.forEach((subscription) => {
  tester.run(subscription, report, {
    valid: [subscription],
    invalid: [
      {
        text: subscription.toLowerCase(),
        errors: [
          {
            message: `${subscription.toLowerCase()} => ${subscription}`,
          },
        ],
      },
      {
        text: subscription.replace(/-/g, ''),
        errors: [
          {
            message: `${subscription.replace(/-/g, '')} => ${subscription}`,
          },
        ],
      },
      {
        text: subscription.replace(/-/g, ' '),
        errors: [
          {
            message: `${subscription.replace(/-/g, ' ')} => ${subscription}`,
          },
        ],
      },
    ],
  });
});

const bundle300MBs = [
  'D',
  'K2',
];

bundle300MBs.forEach((subscription) => {
  tester.run(`plan-${subscription} ${subscription}-300MB`, report, {
    valid: [`plan-${subscription} ${subscription}-300MB`],
    invalid: [
      {
        text: `plan-${subscription}-300MB`,
        errors: [
          {
            message: `plan-${subscription}-300MB => plan-${subscription} ${subscription}-300MB`,
          },
        ],
      },
      {
        text: `plan-${subscription} 300MB`,
        errors: [
          {
            message: `plan-${subscription} 300MB => plan-${subscription} ${subscription}-300MB`,
          },
        ],
      },
      {
        text: `plan-${subscription} ${subscription}300MB`,
        errors: [
          {
            message: `plan-${subscription} ${subscription}300MB => plan-${subscription} ${subscription}-300MB`,
          },
        ],
      },
    ],
  });
});

const duBundles = [
  '10GB',
  '50GB',
  '100GB',
];

duBundles.forEach((bundle) => {
  tester.run(`plan-DU ${bundle}`, report, {
    valid: [`plan-DU DU-${bundle}`],
    invalid: [
      {
        text: `plan-DU-${bundle}`,
        errors: [
          {
            message: `plan-DU-${bundle} => plan-DU DU-${bundle}`,
          },
        ],
      },
      {
        text: `plan-DU ${bundle}`,
        errors: [
          {
            message: `plan-DU ${bundle} => plan-DU DU-${bundle}`,
          },
        ],
      },
      {
        text: `plan-DU DU${bundle}`,
        errors: [
          {
            message: `plan-DU DU${bundle} => plan-DU DU-${bundle}`,
          },
        ],
      },
    ],
  });
});

const vpgTypes = [
  'E',
  'F',
  'G',
  'F2',
];

vpgTypes.forEach((type) => {
  tester.run(`Virtual Private Gateway Type-${type}`, report, {
    valid: [`Virtual Private Gateway Type-${type}`],
    invalid: [
      {
        text: `Virtual Private Gateway Type ${type}`,
        errors: [
          {
            message: `Virtual Private Gateway Type ${type} => Virtual Private Gateway Type-${type}`,
          },
        ],
      },
      {
        text: `Virtual Private Gateway-Type-${type}`,
        errors: [
          {
            message: `Virtual Private Gateway-Type-${type} => Virtual Private Gateway Type-${type}`,
          },
        ],
      },
    ],
  });
});
