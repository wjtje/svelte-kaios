<script lang="ts">
  import { router } from "tinro";

  import { AppWindow } from "@skui/appwindow";
  import { Header } from "@skui/header";
  import { List, ListItem, ListItemContent } from "@skui/list";
  import { ORANGE } from "@skui/style";
  import { SoftwareKey } from "@skui/softwarekey";
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
