<script lang="ts">
  import { router } from "tinro";

  import { AppWindow } from "@skui/appwindow";
  import { Dialog } from "@skui/dialog";
  import { Header } from "@skui/header";
  import { List, ListItem, ListItemContent, ListItemImage } from "@skui/list";
  import { ORANGE } from "@skui/style";
  import { SoftwareKey } from "@skui/softwarekey";
  import { Separator } from "@skui/separator";

  import { getContext, onMount } from "svelte";
  import type { Writable } from "svelte/store";
  import type { softwareKeyFunctions } from "@skui/types";

  const softKeyActionsWritable =
    getContext<Writable<softwareKeyFunctions>>("softKeyActions");

  onMount(() => {
    softKeyActionsWritable.update((current) => ({
      ...current,
    }));
  });
</script>

<Header color={ORANGE}>
  <h1>Home</h1>
</Header>

<List>
  <ListItem>
    <ListItemContent primary="ListItemContent" />
  </ListItem>
  <ListItem>
    <ListItemContent
      primary="ListItemContent"
      secondary="With multi line support"
    />
  </ListItem>

  <Separator title="Subtitle" />

  <ListItem>
    <ListItemImage src="https://via.placeholder.com/32" alt="Placeholder" />
    <ListItemContent primary="ListItemImage" secondary="Just add an image" />
  </ListItem>
</List>

<Dialog>
  <h1>Hello World</h1>
  <p>This is a dialog.</p>
</Dialog>

<SoftwareKey
  onCenterClick={() => {
    console.log("LEFT");
  }}
>
  <h5 slot="left">Options</h5>
  <h5 slot="center">Select</h5>
  <h5 slot="right">Back</h5>
</SoftwareKey>
