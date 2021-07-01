<script lang="ts">
  export let content: String;
</script>

<div>
  <h4>{content}</h4>
</div>

<style lang="scss">
  @import "node_modules/@skui/style/functions";

  div {
    height: 28px;
    width: 100%;

    background-color: KaiOS_color(GS10);
    padding: 0 10px;

    box-sizing: border-box;

    h4 {
      @include KaiOS_font(H4);
      line-height: 28px;
    }
  }
</style>
