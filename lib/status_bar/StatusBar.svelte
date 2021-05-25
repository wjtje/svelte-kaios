<script lang="ts">
  import type { KaiOS_color } from "../style/colors.svelte";

  export let color: KaiOS_color;

  $: cssVarStyles = `--background:${color[0]};--foreground:${color[1]};`;
</script>

<div style={cssVarStyles} />

<style lang="scss">
  @import "../style/functions";

  div {
    width: 100%;
    height: 26px;

    background-color: var(--background);
    color: var(--foreground);
  }
</style>
