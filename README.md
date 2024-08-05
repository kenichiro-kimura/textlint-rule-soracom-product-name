# textlint-rule-soracom-product-name [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

> [!IMPORTANT]
> This rule is not an official rule of SORACOM

[textlint](https://textlint.github.io/ "textlint official site") rule for SORACOM product names.

This rule inspired by [textlint-rule-azure-service-name](https://github.com/dora56/textlint-rule-azure-product-name).

## Features

- Check SORACOM product names
  - For examples:
    - `SORACOM air` -> `SORACOM Air`
    - `soracom Func` -> `SORACOM Funk`
    - `plan-01s` -> `plan01s`

## Install

Install with [npm](https://www.npmjs.com/):

```bash
npm install textlint-rule-soracom-product-name
```

## Usage

Via `.textlintrc.json`(Recommended)

```json
{
    "rules": {
        "soracom-product-name": true
    }
}
```

Via CLI

```bash
textlint --rule soracom-product-name README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

```bash
npm run build
```

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

```bash
npm test
```

You can also test each test file by running the following.

```bash
# run only test files under test/.
npm run test:lint
# or npm run testLint
```

## License

MIT © kenichiro-kimura