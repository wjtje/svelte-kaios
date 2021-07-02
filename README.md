# Svelte-KaiOS

![Version](https://img.shields.io/npm/v/@skui/types)
![Build](https://img.shields.io/github/workflow/status/wjtje/svelte-kaios/CI)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
![License](https://img.shields.io/github/license/wjtje/svelte-kaios)

Make good looking KaiOS apps with svelte.

> This is project is in alpha, expect things to break

## Index

- Getting started
- Packages
- Notes

## Getting started with the example

### On a local machine

```bash
npm install
cd example
npm install
npm run dev
```

### On a real device

Change the script line in the public/index.html file

```bash
npm install
cd example
npm install
npm run build && npm start -- --host
```

## Packages

- [appWindow](https://github.com/wjtje/svelte-kaios/tree/main/packages/appWindow#readme)
- [header](https://github.com/wjtje/svelte-kaios/tree/main/packages/header#readme)
- [list](https://github.com/wjtje/svelte-kaios/tree/main/packages/list#readme)
- [separator](https://github.com/wjtje/svelte-kaios/tree/main/packages/separator#readme)
- [softwareKey](https://github.com/wjtje/svelte-kaios/tree/main/packages/softwareKey#readme)
- [statusbar](https://github.com/wjtje/svelte-kaios/tree/main/packages/statusbar#readme)
- [style](https://github.com/wjtje/svelte-kaios/tree/main/packages/style#readme)
- [types](https://github.com/wjtje/svelte-kaios/tree/main/packages/types#readme)

## Notes

- The dev build isn't working on a physical device, please use the production build if you are testing it on a physical device.
- The status bar component doesn't work on a physical device, this component is only intendent as a development tool. DO NOT USE THIS IN PRODUCTION.

## License

MIT License

Copyright (c) 2021 Wouter van der Wal
