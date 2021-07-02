# @skui/appWindow

The base of any page

## Index

- [Template](https://github.com/wjtje/svelte-kaios/tree/main/packages/appWindow#template)
- [Props](https://github.com/wjtje/svelte-kaios/tree/main/packages/appWindow#props)

## Template

This is a basic example how this component is used

```svelte
<script lang="ts">
  import { AppWindow } from "@skui/appwindow";
  import { Header } from "@skui/header";
  import { List } from "@skui/list";
  import { ORANGE } from "@skui/style";
  import { SoftwareKey } from "@skui/softwarekey";
</script>

<AppWindow>
  <Header color={ORANGE}>
    <h1>Home</h1>
  </Header>

  <List />

  <SoftwareKey>
    <h5 slot="left">Left</h5>
    <h5 slot="center">Select</h5>
    <h5 slot="right">Right</h5>
  </SoftwareKey>
</AppWindow>
```

![Example](https://github.com/wjtje/svelte-kaios/raw/main/packages/appWindow/screenshots/example.png)

## Props

> This component doesn't have any props

## License

MIT License

Copyright (c) 2021 Wouter van der Wal
