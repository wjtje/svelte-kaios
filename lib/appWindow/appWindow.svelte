<div>
  <slot />
</div>

<style lang="scss">
  div {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    & :global(main) {
      flex-grow: 1;
    }
  }
</style>
