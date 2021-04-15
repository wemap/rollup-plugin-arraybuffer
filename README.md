[npm]: https://img.shields.io/npm/v/@wemap/rollup-plugin-arraybuffer
[npm-url]: https://www.npmjs.com/package/@wemap/rollup-plugin-arraybuffer
[size]: https://packagephobia.now.sh/badge?p=@wemap/rollup-plugin-arraybuffer
[size-url]: https://packagephobia.now.sh/result?p=@wemap/rollup-plugin-arraybuffer

[![npm][npm]][npm-url]
[![size][size]][size-url]

# @wemap/rollup-plugin-arraybuffer

🍣 A Rollup plugin which convert a binary file to a `Uint8Array`

## Install

Using npm:

    npm install @wemap/rollup-plugin-arraybuffer --save-dev

## Usage

```javascript
import arraybuffer from '@wemap/rollup-plugin-arraybuffer';

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [arraybuffer({ include: '**/*.glb' })]
};
```

## Options

### `exclude`

Type: `String` | `Array[...String]`<br>
Default: `null`

A [minimatch pattern](https://github.com/isaacs/minimatch), or array of patterns, which specifies the files in the build the plugin should _ignore_. By default no files are ignored.

### `include`

Type: `String` | `Array[...String]`<br>
Default: `null`