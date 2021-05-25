<script lang="ts">
  import type { KaiOS_color } from "../style/colors.svelte";

  export let title: string;
  export let color: KaiOS_color;

  $: cssVarStyles = `--background:${color[0]};--foreground:${color[1]};`;
</script>

<header style={cssVarStyles}>
  {title}
</header>

<style lang="scss">
  @import "../style/functions";

  header {
    @include KaiOS_font(H1);

    width: 100%;
    height: 28px;

    background-color: var(--background);
    color: var(--foreground);

    text-align: center;
    line-height: 28px;
  }
</style>
