# Svelte-KaiOS

Make good looking KaiOS apps with svelte.

> This is project is in alpha, expect things to break

## Index

- Getting started
- Things that are 'working'
- Things that are currently being worked on
- Notes
- Basic app template

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

## Things that are currently being worked on

- List

## Notes

- The dev build isn't working on a physical device, please use the production build if you are testing it on a physical device.
- The status bar component doesn't work on a physical device, this component is only intendent as a development tool. DO NOT USE THIS IN PRODUCTION.

## Basic app template

This a basic template showing a few different components

```html
<script lang="ts">
  import AppWindow from "../lib/appWindow/appWindow.svelte";
  import Header from "../lib/header/Header.svelte";
  import List from "../lib/list/List.svelte";
  import SoftwareKey from "../lib/softwareKey/SoftwareKey.svelte";
  import StatusBar from "../lib/statusBar/StatusBar.svelte";
  import { ORANGE } from "../lib/style/colors.svelte";
</script>

<AppWindow>
  <StatusBar color="{ORANGE}" />
  <header color="{ORANGE}">
    <h1>Svelte</h1>
  </header>

  <List />

  <SoftwareKey>
    <h5 slot="left">Left</h5>
    <h5 slot="center">Select</h5>
    <h5 slot="right">Right</h5>
  </SoftwareKey>
</AppWindow>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap");
  @import "../lib/style/functions";

  :global(body) {
    background-color: KaiOS_color(GS00);
    width: 100vw;
    height: 100vh;
    margin: 0;
  }
</style>
```
