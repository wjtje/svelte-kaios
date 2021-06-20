<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { meta } from "tinro";
  import type { Writable } from "svelte/store";
  import type { softKeyType } from "../softwareKey/SoftwareKey.svelte";

  const route = meta();

  // Define softkey actions
  const softKeyActions: Writable<softKeyType> = writable({
    left: () => {
      console.log("KaiUI-svelte (AppWindow): Default left action");
    },
    center: () => {
      console.log("KaiUI-svelte (AppWindow): Default center action");
    },
    right: () => {
      console.log("KaiUI-svelte (AppWindow): Default right action");
    },
    back: (event) => {
      console.log("KaiUI-svelte (AppWindow): Default right action");

      // Go back a page
      event.preventDefault();
      history.back();

      // Close the app if there are no more pages to go back to
      if (route.url === "/") {
        window.close();
      }
    },
  });

  setContext("softKeyActions", softKeyActions);
</script>

<div>
  <slot />
</div>

<style lang="scss">
  div {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    & :global(main) {
      flex-grow: 1;
    }
  }
</style>
