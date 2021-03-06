# @skui/list

All the components you need to build your own list

## Index

- [Basic usage](#basic-usage)
- [List component](#list-component)
- [ListItem component](#listitem-component)
- [ListItemContent component](#listitemcontent-component)
- [ListItemImage component](#listitemimage-component)

## Basic usage

This is an example of how a list is build

```svelte
<script lang="ts">
  import { List, ListItem, ListItemContent, ListItemImage } from "@skui/list";
</script>

<List>
  <ListItem>
    <ListItemContent primary="Hello World" />
  </ListItem>
  <ListItem>
    <ListItemContent
      primary="This is a basic list"
      secondary="With multi line support"
    />
  </ListItem>
  <ListItem>
    <ListItemImage src="https://via.placeholder.com/32" alt="Placeholder" />
    <ListItemContent primary="With image support" />
  </ListItem>
</List>
```

![Example](https://github.com/wjtje/svelte-kaios/raw/main/packages/list/screenshots/example.png)

## List component

This is the base of any list, it will handle the key inputs and scroll to the correct item. It is expected to use [ListItem](#listitem-component) or [Separator](https://github.com/wjtje/svelte-kaios/tree/main/packages/separator#readme) as it children.

```svelte
<script lang="ts">
  import { List } from "@skui/list";
</script>

<List />
```

## ListItem component

This component represents a single item inside a list, it will handle all the different states that the item can be in like normal and hover mode and handle all the events.

```svelte
<script lang="ts">
  import { ListItem } from "@skui/list";
</script>

<ListItem />
```

![ListItem component example](https://github.com/wjtje/svelte-kaios/raw/main/packages/list/screenshots/listitem.png)

### Props

| Name        | Type                                                                                 | Description                                                                                                                           | Documentation                                                                         |
| ----------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| onClick     | () => void                                                                           | This function will be executed wheneven the user selects this item                                                                    |
| onHover     | () -> void                                                                           | This function will be executed whenever the user hovers on this item for `onHoverTime`                                                |                                                                                       |
| onHoverTime | number                                                                               | This defines how long the user needs to hover over this item before the `onHover` function will be called, It defaults to 3000ms (3s) |                                                                                       |
| hoverColor  | [KaiOS_color](https://github.com/wjtje/svelte-kaios/tree/main/packages/types#readme) | This defines the hover color of the listItem, it defaults to PURPLE                                                                   | [@skui/styles](https://github.com/wjtje/svelte-kaios/tree/main/packages/style#colors) |

## ListItemContent component

This component defines the layout of text inside a [ListItem](#listitem-component). It has support for single and multi-line text and can be used in combination with a [ListItemImage](#listitemimage-component) to add an image to a [ListItem](#listitem-component).

```svelte
<script lang="ts">
  import { ListItem, ListItemContent } from "@skui/list";
</script>

<ListItem>
  <ListItemContent primary="ListItemContent" />
</ListItem>
<ListItem>
  <ListItemContent
    primary="ListItemContent"
    secondary="With multi line support"
  />
</ListItem>
```

![ListItemContent component example](https://github.com/wjtje/svelte-kaios/raw/main/packages/list/screenshots/listitemcontent.png)

### Props

| Name      | Type             | Description        |
| --------- | ---------------- | ------------------ |
| primary   | string \| number | The primary line   |
| secondary | string \| number | The secondary line |

## ListItemImage component

This component allows you to add an image to a [ListItem](#listitem-component).

```svelte
<script lang="ts">
  import { ListItem, ListItemContent, ListItemImage } from "@skui/list";
</script>

<ListItem>
  <ListItemImage src="https://via.placeholder.com/32" alt="Placeholder" />
  <ListItemContent primary="ListItemImage" secondary="Just add an image" />
</ListItem>
```

![ListItemImage component example](https://github.com/wjtje/svelte-kaios/raw/main/packages/list/screenshots/listitemimage.png)

### props

| Name | Type   | Description               |
| ---- | ------ | ------------------------- |
| src  | string | The src of the image      |
| alt  | string | The alt text of the image |

## License

MIT License

Copyright (c) 2021 Wouter van der Wal
