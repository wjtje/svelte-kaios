# @skui/header

## Index

- [Basic usage](https://github.com/wjtje/svelte-kaios/tree/main/packages/header#basic-usage)
- [Props](https://github.com/wjtje/svelte-kaios/tree/main/packages/header#props)

## Basic usage

This is a basic example how this component is used

```svelte
<script lang="ts">
  import { Header } from "@skui/header";
  import { ORANGE } from "@skui/style";
</script>

<Header color={ORANGE}>
  <h1>Home</h1>
</Header>
```

![Example](https://github.com/wjtje/svelte-kaios/raw/main/packages/header/screenshots/example.png)

## Props

| Name  | Type                                                                                 | Description                                                    | Documentation                                                                         |
| ----- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| color | [KaiOS_color](https://github.com/wjtje/svelte-kaios/tree/main/packages/types#readme) | This defines the background and foreground color of the header | [@skui/styles](https://github.com/wjtje/svelte-kaios/tree/main/packages/style#colors) |

## License

MIT License

Copyright (c) 2021 Wouter van der Wal
