<script lang="ts">
  import { AppWindow } from "@skui/appwindow";
  import { Header } from "@skui/header";
  import { CYAN } from "@skui/style";
  import { List } from "@skui/list";
  import { SoftwareKey } from "@skui/softwarekey";
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
