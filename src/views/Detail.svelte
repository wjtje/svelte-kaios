<script lang="ts">
  import AppWindow from "../../lib/appWindow/appWindow.svelte";
  import Header from "../../lib/header/Header.svelte";
  import List from "../../lib/list/List.svelte";
  import SoftwareKey from "../../lib/softwareKey/SoftwareKey.svelte";
  import { CYAN } from "../../lib/style/colors.svelte";
</script>

<AppWindow>
  <Header color={CYAN}>
    <h1>Details</h1>
  </Header>

  <List />

  <SoftwareKey>
    <h5 slot="center">Select</h5>
    <h5 slot="right">Options</h5>
  </SoftwareKey>
</AppWindow>
