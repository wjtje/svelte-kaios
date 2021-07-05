<script lang="ts">
  import { getContext, onMount } from "svelte";
  import { PURPLE } from "@skui/style";
  import type { Writable } from "svelte/store";
  import type { softwareKeyFunctions, KaiOS_color } from "@skui/types";

  export let hoverColor: KaiOS_color = PURPLE;

  // Default on click handler
  export let onClick = () => {
    console.log(`KaiUI-svelte (ListItem (${index})): Default onClick`);
  };

  // Default on hover handler
  export let onHover = () => {
    console.log(`KaiUI-svelte (ListItem (${index})): Default onHover`);
  };

  export let onHoverTime = 3000;

  let onHoverTimeout: any;

  // Dom element
  let listItemElement: HTMLSelectElement | undefined;

  // Get the index
  const listIndexWritable = getContext<Writable<number>>("listIndex");
  let index = 0;

  listIndexWritable.update((currentIndex) => {
    index = currentIndex;
    return currentIndex + 1;
  });

  // Get the softKeyActions
  const softKeyActionsWritable =
    getContext<Writable<softwareKeyFunctions>>("softKeyActions");

  /**
   * This function will update the selected item
   */
  function updateActive(activeIndex: number) {
    // Scroll to the active element
    if (index === activeIndex && listItemElement !== undefined) {
      const listContainer = listItemElement.parentElement;

      // Keep the active item in the center of the screen
      listContainer?.scrollTo({
        top:
          listItemElement.offsetTop -
          listContainer?.offsetTop -
          (listContainer?.clientHeight - listItemElement.clientHeight) / 2,
      });

      // Change the center action
      softKeyActionsWritable.update((current) => {
        return {
          ...current,
          center: onClick,
        };
      });

      // Set the onHover timeout
      onHoverTimeout = setTimeout(onHover, onHoverTime);
    } else {
      clearTimeout(onHoverTimeout);
    }
  }

  // Listen to changes on the activeIndex
  const activeIndexWritable = getContext<Writable<number>>("listActive");
  let activeIndex = 1;

  activeIndexWritable.subscribe((newActive) => {
    activeIndex = newActive;

    updateActive(activeIndex);
  });

  // Make the first item active
  onMount(() => {
    updateActive(activeIndex);
  });
</script>

<section
  tabindex={index}
  class:focus={index == activeIndex}
  bind:this={listItemElement}
  style={`--hover: ${hoverColor[0]}`}
>
  <slot />
</section>

<style lang="scss">
  @import "node_modules/@skui/style/functions";

  section {
    --hover: KaiOS_color(PURPLE);
    height: 60px;
    padding: 0 5px;
    background-color: KaiOS_color(GS00);
    display: flex;
    align-items: center;

    &.focus {
      background-color: var(--hover);
      color: KaiOS_color(GS00) !important;

      & :global(p) {
        color: KaiOS_color(GS00) !important;
      }
    }
  }
</style>
