<script>
  import type { KaiOS_color } from "@skui/types";

  import Header from "../Header.svelte";

  export let color: KaiOS_color;
</script>

<Header {color}>
  <h1 data-testid="slot">Custom title</h1>
</Header>
