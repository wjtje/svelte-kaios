<script lang="ts">
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";

  // Dom element
  let listItemElement: HTMLSelectElement | undefined;

  // Get the index
  const listIndexWritable = getContext<Writable<number>>("listIndex");
  let index = 0;

  listIndexWritable.update((currentIndex) => {
    index = currentIndex;
    return currentIndex + 1;
  });

  // Listen to changes on the activeIndex
  const activeIndexWritable = getContext<Writable<number>>("listActive");
  let activeIndex = 0;

  activeIndexWritable.subscribe((newActive) => {
    activeIndex = newActive;

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
    }
  });
</script>

<section
  tabindex={index}
  class:focus={index == activeIndex}
  bind:this={listItemElement}
>
  <slot />
</section>

<style lang="scss">
  @import "../style/functions";

  section {
    height: 60px;
    padding: 0 10px;
    background-color: KaiOS_color(GS00);
    display: flex;
    align-items: center;

    &.focus {
      background-color: KaiOS_color(PURPLE);
      color: KaiOS_color(GS00) !important;

      & :global(p) {
        color: KaiOS_color(GS00) !important;
      }
    }
  }
</style>
