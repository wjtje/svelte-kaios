<script lang="ts">
  import AppWindow from "../lib/appWindow/appWindow.svelte";
  import Header from "../lib/header/Header.svelte";
  import List from "../lib/list/List.svelte";
  import SoftwareKey from "../lib/softwareKey/SoftwareKey.svelte";
  import StatusBar from "../lib/statusBar/StatusBar.svelte";
  import { ORANGE } from "../lib/style/colors.svelte";
</script>

<AppWindow>
  <StatusBar color={ORANGE} />
  <Header color={ORANGE}>
    <h1>Svelte</h1>
  </Header>

  <List />

  <SoftwareKey>
    <h5 slot="left">Left</h5>
    <h5 slot="center">Select</h5>
    <h5 slot="right">Right</h5>
  </SoftwareKey>
</AppWindow>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap");
  @import "../lib/style/functions";

  :global(body) {
    background-color: KaiOS_color(GS00);
    width: 100vw;
    height: 100vh;
    margin: 0;
  }
</style>
