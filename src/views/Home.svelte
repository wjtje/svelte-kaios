<script lang="ts">
  import { router } from "tinro";

  import AppWindow from "../../lib/appWindow/appWindow.svelte";
  import Header from "../../lib/header/Header.svelte";
  import { ORANGE } from "../../lib/style/colors.svelte";
  import List from "../../lib/list/List.svelte";
  import ListItem from "../../lib/list/ListItem.svelte";
  import ListItemContent from "../../lib/list/ListItemContent.svelte";
  import SoftwareKey from "../../lib/softwareKey/SoftwareKey.svelte";
</script>

<AppWindow>
  <Header color={ORANGE}>
    <h1>Home</h1>
  </Header>

  <List>
    <ListItem>
      <ListItemContent primary="Hello" secondary="World" />
    </ListItem>
    <ListItem>
      <ListItemContent primary="KaiOS + Svelte" />
    </ListItem>
    <ListItem
      onClick={() => {
        router.goto("/detail");
      }}
    >
      <ListItemContent primary="Detail" secondary="Yes there is more content" />
    </ListItem>
  </List>

  <SoftwareKey>
    <h5 slot="left">Left</h5>
    <h5 slot="center">Select</h5>
    <h5 slot="right">Right</h5>
  </SoftwareKey>
</AppWindow>
