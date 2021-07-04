# @skui/softwareKey

## Index

- [Basic usage](#basic-usage)
- [Props](#props)
- [Handle events](#handle-events)

## Basic usage

```svelte
<script lang="ts">
  import { SoftwareKey } from "@skui/softwarekey";
</script>

<SoftwareKey>
  <h5 slot="left">Options</h5>
  <h5 slot="center">Select</h5>
  <h5 slot="right">Back</h5>
</SoftwareKey>
```

![Example](https://github.com/wjtje/svelte-kaios/raw/main/packages/header/softwareKey/example.png)

## Props

| Name          | Type                           | Description                                                  |
| ------------- | ------------------------------ | ------------------------------------------------------------ |
| onLeftClick   | (event: KeyboardEvent) => void | The function is run whenever the left key has been pressed   |
| onRightClick  | (event: KeyboardEvent) => void | The function is run whenever the right key has been pressed  |
| onCenterClick | (event: KeyboardEvent) => void | The function is run whenever the center key has been pressed |
| onBackClick   | (event: KeyboardEvent) => void | The function is run whenever the back key has been pressed   |

## Handle events

You have two options of reacting to keyboard event, the first option is to change the softKeyActions context.

```svelte
<script lang="ts">
  import { getContext, onMount } from "svelte";
  import type { Writable } from "svelte/store";
  import type { softwareKeyFunctions } from "@skui/types";

  const softKeyActionsWritable =
    getContext<Writable<softwareKeyFunctions>>("softKeyActions");

  onMount(() => {
    softKeyActionsWritable.update((current) => ({
      ...current,
      center: (event) => {
        console.log("Handle center button press");
      },
    }));
  });
</script>
```

The other options is to define the props on the component

```svelte
<script lang="ts">
  import { SoftwareKey } from "@skui/softwarekey";
</script>

<SoftwareKey
  onCenterClick={(event) => {
    console.log("Handle center button press");
  }}
>
  <h5 slot="left">Options</h5>
  <h5 slot="center">Select</h5>
  <h5 slot="right">Back</h5>
</SoftwareKey>
```

## License

MIT License

Copyright (c) 2021 Wouter van der Wal
