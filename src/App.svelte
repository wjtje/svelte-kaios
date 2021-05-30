<script lang="ts">
  import Header from "../lib/header/Header.svelte";
  import SoftwareKey from "../lib/softwareKey/SoftwareKey.svelte";
  import StatusBar from "../lib/statusBar/StatusBar.svelte";
  import { ORANGE } from "../lib/style/colors.svelte";
</script>

<main>
  <StatusBar color={ORANGE} />
  <Header color={ORANGE}>
    <h1>Svelte</h1>
  </Header>
  <SoftwareKey>
    <h5 slot="left">Left</h5>
    <h5 slot="center">Select</h5>
    <h5 slot="right">Right</h5>
  </SoftwareKey>
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
