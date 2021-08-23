<script lang="ts">
  import { fly } from "svelte/transition";

  export let header: string | undefined = undefined;
  export let content: string | undefined = undefined;
</script>

<section transition:fly={{ y: 200, duration: 150 }}>
  <div class="backdrop" />
  <!-- TODO: add a fade animation to the backdrop -->

  <div class="content">
    <slot>
      <h1>{header || "Header"}</h1>
      <p>
        {content ||
          "Lorem Ipsum dolor sitet, sitconsecteur adipiscing amet, tempora?"}
      </p>
    </slot>
  </div>
</section>

<style lang="scss">
  @import "node_modules/@skui/style/functions";

  section {
    width: 100vw;
    height: calc(100vh - 30px);

    display: flex;
    flex-flow: column;

    position: absolute;
    bottom: 30px;

    & :global(h1) {
      @include KaiOS_font(H1);

      height: 28px;
      width: 100%;

      line-height: 28px;
      text-align: center;

      background-color: KaiOS_color(GS20);
    }

    & :global(p) {
      @include KaiOS_font(PRI);

      background-color: KaiOS_color(GS00);

      padding: 7px 10px;
    }
  }

  div.backdrop {
    flex: 1;

    background-color: rgba($color: #000000, $alpha: 0.7);
  }
</style>
