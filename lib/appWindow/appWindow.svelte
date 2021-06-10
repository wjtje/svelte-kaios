<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  // Define softkey actions
  const softKeyActions = writable({
    left: () => {
      console.log("KaiUI-svelte (AppWindow): Default left action");
    },
    center: () => {
      console.log("KaiUI-svelte (AppWindow): Default center action");
    },
    right: () => {
      console.log("KaiUI-svelte (AppWindow): Default right action");
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
