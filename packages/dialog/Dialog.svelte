<script lang="ts">
</script>

<section>
  <div class="backdrop" />

  <div class="content">
    <slot>
      <h1>Header</h1>
      <p>Lorem Ipsum dolor sitet, sitconsecteur adipiscing amet, tempora?</p>
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
