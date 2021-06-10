<script lang="ts">
  import { writable } from "svelte/store";
  import { setContext, onMount } from "svelte";

  // Create a writable to store the item count / calculate the tabindex
  const listIndex = writable(1);
  setContext("listIndex", listIndex);

  // Store the elementCount
  let listElementCount = 0;
  listIndex.subscribe((newCount) => {
    listElementCount = newCount;
  });

  // Create a writable to store the current active item
  const activeIndex = writable(1);
  setContext("listActive", activeIndex);

  /**
   * This function will react to a key event
   * @param e KeyEvent
   */
  function handleKeyEvent(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowDown":
        console.log(`KaiUI-svelte (List): keycode: ${e.key}`);
        e.preventDefault();
        activeIndex.update((currentIndex) => {
          return (currentIndex % (listElementCount - 1)) + 1;
        });
        break;
      case "ArrowUp":
        console.log(`KaiUI-svelte (List): keycode: ${e.key}`);
        e.preventDefault();
        activeIndex.update((currentIndex) => {
          return currentIndex - 1 < 1 ? listElementCount - 1 : currentIndex - 1;
        });
        break;
    }
  }

  onMount(() => {
    // Add the event listener
    console.log(`KaiUI-svelte (List): Adding event listener`);
    document.body.addEventListener("keydown", handleKeyEvent);

    return () => {
      // Remove the event listener
      console.log(`KaiUI-svelte (List): Removing event listener`);
      document.body.removeEventListener("keydown", handleKeyEvent);
    };
  });
</script>

<main>
  <slot />
</main>

<style lang="scss">
  main {
    overflow-y: auto;
  }
</style>
