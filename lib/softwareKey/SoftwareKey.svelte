<script lang="ts" context="module">
  export interface softKeyType {
    left: () => void;
    center: () => void;
    right: () => void;
  }
</script>

<script lang="ts">
  import { getContext, onMount } from "svelte";
  import type { Writable } from "svelte/store";

  // Get access to the current software key status
  const softKeyActionsWritable =
    getContext<Writable<softKeyType>>("softKeyActions");
  let softKeyActions: softKeyType;

  softKeyActionsWritable.subscribe((actions) => {
    softKeyActions = actions;
  });

  // Handle the correct softwareKey
  function handleKeyEvent(event: KeyboardEvent) {
    switch (event.key) {
      case "SoftLeft":
        console.log(`KaiUI-svelte (SoftwareKey): keycode: ${event.key}`);
        softKeyActions?.left();
        break;
      case "SoftRight":
        console.log(`KaiUI-svelte (SoftwareKey): keycode: ${event.key}`);
        softKeyActions?.right();
        break;
      case "Enter":
        console.log(`KaiUI-svelte (SoftwareKey): keycode: ${event.key}`);
        softKeyActions?.center();
        break;
    }
  }

  onMount(() => {
    // Add the event listener
    console.log(`KaiUI-svelte (SoftwareKey): Adding event listener`);
    document.body.addEventListener("keydown", handleKeyEvent);

    return () => {
      // Remove the event listener
      console.log(`KaiUI-svelte (SoftwareKey): Removing event listener`);
      document.body.removeEventListener("keydown", handleKeyEvent);
    };
  });
</script>

<!-- svelte-ignore a11y-missing-content -->
<div>
  <slot name="left">
    <h5 />
  </slot>

  <slot name="center">
    <h5 />
  </slot>

  <slot name="right">
    <h5 />
  </slot>
</div>

<style lang="scss">
  @import "../style/functions";

  div {
    width: 100%;
    height: 30px;
    padding: 0 6px;
    overflow: hidden;
    box-sizing: border-box;
    flex-shrink: 0;

    background-color: KaiOS_color(GS20);

    display: flex;
    align-items: center;

    // All keys
    & :global(h5) {
      @include KaiOS_font(H5);
      overflow: hidden;
      width: 33.3333333333%;
    }

    // Left key
    & :global(h5:nth-child(1)) {
      text-align: left;
    }

    // Center key
    & :global(h5:nth-child(2)) {
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 16px;
    }

    // Right key
    & :global(h5:nth-child(3)) {
      text-align: right;
    }
  }
</style>
