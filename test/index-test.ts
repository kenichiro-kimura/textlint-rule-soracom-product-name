import TextLintTester from 'textlint-tester';
import * as lint from '../src/index';

const report = lint.default.fixer;
const tester = new TextLintTester();

const productsWithPrefix = [
  'Air',
  'Arc',
  'Beam',
  'Canal',
  'CLI',
  'Door',
  'Direct',
  'Endorse',
  'Funnel',
  'Funk',
  'Flux',
  'Gate',
  'Harvest',
  'Interstellar',
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
  'User Group',
];

/**
 * Test for products with prefix
 * - Capital and lower case check
 * - Hyphenate check
 * - Camel case check
 */
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

/**
 * Test for special words
 * - Capital and lower case check
 */
const productsWithoutPrefix = ['LoRaWAN', 'Sigfox'];

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

/**
 * Test for products with space
 * - Capital and lower case check
 * - Hyphenate check
 * - Camel case check
 * - VPG Types check
 */
const productsWithSpace = [
  'Virtual Private Gateway',
  'Unified Endpoint',
  'SORACOM Access Management',
  'SORACOM User Group',
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
        text: `${product.replace(/ /g, '')}`,
        errors: [
          {
            message: `${product.replace(/ /g, '')} => ${product}`,
          },
        ],
      },
      {
        text: `${product.replace(/ /g, '-')}`,
        errors: [
          {
            message: `${product.replace(/ /g, '-')} => ${product}`,
          },
        ],
      },
    ],
  });
});

const vpgTypes = ['E', 'F', 'G', 'F2'];

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

/**
 * Test for products , special case and avairable typos
 */
tester.run('SORACOM Arc', report, {
  invalid: [
    {
      text: 'SORACOM Ark',
      errors: [
        {
          message: 'SORACOM Ark => SORACOM Arc',
        },
      ],
    },
  ],
});

tester.run('SORACOM Beam', report, {
  invalid: [
    {
      text: 'SORACOM Beem',
      errors: [
        {
          message: 'SORACOM Beem => SORACOM Beam',
        },
      ],
    },
  ],
});

tester.run('SORACOM Door', report, {
  invalid: [
    {
      text: 'SORACOM Dorr',
      errors: [
        {
          message: 'SORACOM Dorr => SORACOM Door',
        },
      ],
    },
  ],
});

tester.run('SORACOM Endorse', report, {
  invalid: [
    {
      text: 'SORACOM Endorce',
      errors: [
        {
          message: 'SORACOM Endorce => SORACOM Endorse',
        },
      ],
    },
  ],
});

tester.run('SORACOM Funnel', report, {
  invalid: [
    {
      text: 'SORACOM Funel',
      errors: [
        {
          message: 'SORACOM Funel => SORACOM Funnel',
        },
      ],
    },
  ],
});

tester.run('SORACOM Funk', report, {
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

tester.run('SORACOM Harvest', report, {
  invalid: [
    {
      text: 'SORACOM Hervest',
      errors: [
        {
          message: 'SORACOM Hervest => SORACOM Harvest',
        },
      ],
    },
    {
      text: 'SORACOM Harbest',
      errors: [
        {
          message: 'SORACOM Harbest => SORACOM Harvest',
        },
      ],
    },
  ],
});

tester.run('SORACOM Interstellar', report, {
  invalid: [
    {
      text: 'SORACOM Interstelar',
      errors: [
        {
          message: 'SORACOM Interstelar => SORACOM Interstellar',
        },
      ],
    },
    {
      text: 'SORACOM Intersteller',
      errors: [
        {
          message: 'SORACOM Intersteller => SORACOM Interstellar',
        },
      ],
    },
    {
      text: 'SORACOM Intersterrar',
      errors: [
        {
          message: 'SORACOM Intersterrar => SORACOM Interstellar',
        },
      ],
    },
  ],
});

tester.run('SORACOM Inventory', report, {
  invalid: [
    {
      text: 'SORACOM Inventry',
      errors: [
        {
          message: 'SORACOM Inventry => SORACOM Inventory',
        },
      ],
    },
    {
      text: 'SORACOM Inbentory',
      errors: [
        {
          message: 'SORACOM Inbentory => SORACOM Inventory',
        },
      ],
    },
  ],
});

tester.run('SORACOM Krypton', report, {
  invalid: [
    {
      text: 'SORACOM Klypton',
      errors: [
        {
          message: 'SORACOM Klypton => SORACOM Krypton',
        },
      ],
    },
  ],
});

tester.run('SORACOM Lagoon', report, {
  invalid: [
    {
      text: 'SORACOM Lagon',
      errors: [
        {
          message: 'SORACOM Lagon => SORACOM Lagoon',
        },
      ],
    },
    {
      text: 'SORACOM Laggon',
      errors: [
        {
          message: 'SORACOM Laggon => SORACOM Lagoon',
        },
      ],
    },
  ],
});
const lagoonVersions = ['2', '3'];

lagoonVersions.forEach((version) => {
  tester.run(`SORACOM Lagoon ${version}`, report, {
    valid: [`SORACOM Lagoon ${version}`],
    invalid: [
      {
        text: `SORACOM Lagoon${version}`,
        errors: [
          {
            message: `SORACOM Lagoon${version} => SORACOM Lagoon ${version}`,
          },
        ],
      },
      {
        text: `SORACOM Lagoon-${version}`,
        errors: [
          {
            message: `SORACOM Lagoon-${version} => SORACOM Lagoon ${version}`,
          },
        ],
      },
    ],
  });
});

tester.run('SORACOM Mosaic', report, {
  invalid: [
    {
      text: 'SORACOM Mozaic',
      errors: [
        {
          message: 'SORACOM Mozaic => SORACOM Mosaic',
        },
      ],
    },
    {
      text: 'SORACOM Mosaik',
      errors: [
        {
          message: 'SORACOM Mosaik => SORACOM Mosaic',
        },
      ],
    },
  ],
});

tester.run('SORACOM Napter', report, {
  invalid: [
    {
      text: 'SORACOM Nepter',
      errors: [
        {
          message: 'SORACOM Nepter => SORACOM Napter',
        },
      ],
    },
    {
      text: 'SORACOM Naptar',
      errors: [
        {
          message: 'SORACOM Naptar => SORACOM Napter',
        },
      ],
    },
  ],
});

tester.run('SORACOM Peek', report, {
  invalid: [
    {
      text: 'SORACOM Peak',
      errors: [
        {
          message: 'SORACOM Peak => SORACOM Peek',
        },
      ],
    },
    {
      text: 'SORACOM Peeek',
      errors: [
        {
          message: 'SORACOM Peeek => SORACOM Peek',
        },
      ],
    },
  ],
});

tester.run('SORACOM Query', report, {
  invalid: [
    {
      text: 'SORACOM Querry',
      errors: [
        {
          message: 'SORACOM Querry => SORACOM Query',
        },
      ],
    },
    {
      text: 'SORACOM Quely',
      errors: [
        {
          message: 'SORACOM Quely => SORACOM Query',
        },
      ],
    },
  ],
});

tester.run('SORACOM Relay', report, {
  invalid: [
    {
      text: 'SORACOM Rely',
      errors: [
        {
          message: 'SORACOM Rely => SORACOM Relay',
        },
      ],
    },
    {
      text: 'SORACOM Reley',
      errors: [
        {
          message: 'SORACOM Reley => SORACOM Relay',
        },
      ],
    },
    {
      text: 'SORACOM Reray',
      errors: [
        {
          message: 'SORACOM Reray => SORACOM Relay',
        },
      ],
    },
  ],
});

/**
 * Test for products with non-capitalized prefix
 * - Capital and lower case check
 * - Hyphenate check
 * - Camel case check
 */
const nonCapitalizedProductsWithSpace = [
  'Cloud SMS Delivery',
  'Cloud MFA',
  'Cloud Camera Services',
];

const nonCapitalizedProducts = ['Mobile', ...nonCapitalizedProductsWithSpace];

nonCapitalizedProducts.forEach((product) => {
  tester.run(`Soracom ${product}`, report, {
    valid: [`Soracom ${product}`],
    invalid: [
      {
        text: `SORACOM ${product}`,
        errors: [
          {
            message: `SORACOM ${product} => Soracom ${product}`,
          },
        ],
      },
      {
        text: `soracom ${product}`,
        errors: [
          {
            message: `soracom ${product} => Soracom ${product}`,
          },
        ],
      },
      {
        text: `Soracom-${product}`,
        errors: [
          {
            message: `Soracom-${product} => Soracom ${product}`,
          },
        ],
      },
      {
        text: `Soracom ${product.toLowerCase()}`,
        errors: [
          {
            message: `Soracom ${product.toLowerCase()} => Soracom ${product}`,
          },
        ],
      },
    ],
  });
});

nonCapitalizedProductsWithSpace.forEach((product) => {
  tester.run(`Soracom ${product}`, report, {
    invalid: [
      {
        text: `Soracom ${product.replace(/ /, '-')}`,
        errors: [
          {
            message: `Soracom ${product.replace(/ /, '-')} => Soracom ${product}`,
          },
        ],
      },
    ],
  });
});

/**
 * Test for plural form
 */
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
  ],
});

/**
 * Test for subscription plans
 */
const subscriptions = ['planX1', 'planX2', 'planX3', 'planP1'];

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

const bundle300MBs = ['D', 'K2'];

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

const duBundles = ['10GB', '50GB', '100GB'];

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
