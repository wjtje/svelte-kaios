# @skui/list

All the components you need to build your own list

## Index

- [Basic usage](https://github.com/wjtje/svelte-kaios/tree/main/packages/list#basic-usage)
- [List component](https://github.com/wjtje/svelte-kaios/tree/main/packages/list#list-component)
- [ListItem component](https://github.com/wjtje/svelte-kaios/tree/main/packages/list#listitem-component)
- [ListItemContent component](https://github.com/wjtje/svelte-kaios/tree/main/packages/list#listitemcontent-component)
- [ListItemImage component](https://github.com/wjtje/svelte-kaios/tree/main/packages/list#listitemimage-component)

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

This is the base of any list, it will handle the key inputs and scroll to the correct item. It is expected to use [ListItem](https://github.com/wjtje/svelte-kaios/tree/main/packages/list#listitem-component) or [Separator](https://github.com/wjtje/svelte-kaios/tree/main/packages/separator#readme) as it children.

```svelte
import {List} from "@skui/list";

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

| Name    | Type       | Description                                                         |
| ------- | ---------- | ------------------------------------------------------------------- |
| onClick | () => void | This function will be executed when even the user selects this item |

## ListItemContent component

This component defines the layout of text inside a [ListItem](https://github.com/wjtje/svelte-kaios/tree/main/packages/list#listitem-component). It has support for single and multi-line text and can be used in combination with a [ListItemImage](https://github.com/wjtje/svelte-kaios/tree/main/packages/list#listitemimage-component) to add an image to a [ListItem](https://github.com/wjtje/svelte-kaios/tree/main/packages/list#listitem-component).

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

This component allows you to add an image to a [ListItem](https://github.com/wjtje/svelte-kaios/tree/main/packages/list#listitem-component).

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
