<script lang="ts">
  import Header from "../lib/header/Header.svelte";
  import StatusBar from "../lib/status_bar/StatusBar.svelte";
  import { ORANGE } from "../lib/style/colors.svelte";
</script>

<main>
  <StatusBar color={ORANGE} />
  <Header title="Svelte" color={ORANGE} />
</main>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap");
  @import "../lib/style/functions";

  main {
    background-color: KaiOS_color(GS00);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: 0px;
  }
</style>
