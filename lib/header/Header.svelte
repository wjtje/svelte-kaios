<script lang="ts">
  import type { KaiOS_color } from "../style/colors.svelte";

  export let color: KaiOS_color;

  $: cssVarStyles = `--background:${color[0]};--foreground:${color[1]};`;
</script>

<header style={cssVarStyles}>
  <slot>
    <h1>Svelte-kaios</h1>
  </slot>
</header>

<style lang="scss">
  @import "../style/functions";

  header {
    width: 100%;
    height: 28px;
    overflow: hidden;

    background-color: var(--background);

    text-align: center;
    line-height: 28px;
  }
  :global(h1) {
    @include KaiOS_font(H1);
    color: var(--foreground);
  }
</style>
