<script lang="ts">
  import { onMount } from "svelte";
  import { Route, router } from "tinro";
  import Detail from "./views/Detail.svelte";
  import Home from "./views/Home.svelte";

  onMount(() => {
    router.mode.hash();
    router.goto("/");
  });
</script>

<Route path="/"><Home /></Route>
<Route path="/detail"><Detail /></Route>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap");
  @import "../node_modules/@skui/style/functions";

  :global(body) {
    background-color: KaiOS_color(GS00);
    width: 100vw;
    height: 100vh;
    margin: 0;
  }
</style>
