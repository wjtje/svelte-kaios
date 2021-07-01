# Svelte-KaiOS

Make good looking KaiOS apps with svelte.

> This is project is in alpha, expect things to break

## Index

- Getting started
- Things that are 'working'
- Things that are currently being worked on
- Notes

## Getting started

### On a local machine

```
npm i
npm run dev
```

### On a real device

Change the script line in the public/index.html file

```
npm i
npm run build && npm start -- --host
```

## Things that are 'working'

- Color palette
- Fonts
- Header
- Status bar
- AppWindow
- List

## Notes

- The dev build isn't working on a physical device, please use the production build if you are testing it on a physical device.
- The status bar component doesn't work on a physical device, this component is only intendent as a development tool. DO NOT USE THIS IN PRODUCTION.
