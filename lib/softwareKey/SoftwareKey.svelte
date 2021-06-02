<script lang="ts"></script>

<!-- svelte-ignore a11y-missing-content -->
<div>
  <slot name="left">
    <h5 />
  </slot>

  <slot name="center">
    <h5 />
  </slot>

  <slot name="right">
    <h5 />
  </slot>
</div>

<style lang="scss">
  @import "../style/functions";

  div {
    width: 100%;
    height: 30px;
    padding: 0 6px;
    overflow: hidden;
    box-sizing: border-box;

    background-color: KaiOS_color(GS20);

    display: flex;
    align-items: center;

    // All keys
    & :global(h5) {
      @include KaiOS_font(H5);
      overflow: hidden;
      width: 33.3333333333%;
    }

    // Left key
    & :global(h5:nth-child(1)) {
      text-align: left;
    }

    // Center key
    & :global(h5:nth-child(2)) {
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 16px;
    }

    // Right key
    & :global(h5:nth-child(3)) {
      text-align: right;
    }
  }
</style>
