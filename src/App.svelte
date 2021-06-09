<script lang="ts">
  import AppWindow from "../lib/appWindow/appWindow.svelte";
  import Header from "../lib/header/Header.svelte";
  import List from "../lib/list/List.svelte";
  import ListItem from "../lib/list/ListItem.svelte";
  import ListItemContent from "../lib/list/ListItemContent.svelte";
  import SoftwareKey from "../lib/softwareKey/SoftwareKey.svelte";
  // import StatusBar from "../lib/statusBar/StatusBar.svelte";
  import { ORANGE } from "../lib/style/colors.svelte";
</script>

<AppWindow>
  <!-- <StatusBar color={ORANGE} /> -->
  <Header color={ORANGE}>
    <h1>Svelte</h1>
  </Header>

  <List>
    <ListItem>
      <ListItemContent primary="Airplane Mode" secondary="Off" />
    </ListItem>
    <ListItem>
      <ListItemContent primary="Mobile network & Data" />
    </ListItem>
    <ListItem>
      <ListItemContent primary="Wi-Fi" secondary="On" />
    </ListItem>
    <ListItem>
      <ListItemContent primary="Bluetooth" secondary="On" />
    </ListItem>
    <ListItem>
      <ListItemContent primary="Geolocation" secondary="On" />
    </ListItem>
    <ListItem>
      <ListItemContent primary="SIM Manager" />
    </ListItem>
    <ListItem>
      <ListItemContent primary="Call" secondary="No SIM card" />
    </ListItem>
    <ListItem>
      <ListItemContent primary="Internet Sharing" secondary="No SIM card" />
    </ListItem>
    <ListItem>
      <ListItemContent primary="Wireless Emergency" secondary="Alerts" />
    </ListItem>
    <ListItem>
      <ListItemContent
        primary="Cell broadcast messages"
        secondary="No SIM card"
      />
    </ListItem>
  </List>

  <SoftwareKey>
    <h5 slot="left">Search</h5>
    <h5 slot="center">Select</h5>
    <h5 slot="right">Options</h5>
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
