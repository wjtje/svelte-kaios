<script lang="ts">
  let primary: string | number;
  let secondary: string | number = "";

  export { primary, secondary };
</script>

<div>
  <p class="pri">{primary}</p>
  <p class="sec">{secondary}</p>
</div>

<style lang="scss">
  @import "node_modules/@skui/style/functions";

  div {
    overflow: hidden;
    margin: 0 5px;
    flex-shrink: 1;
  }

  p {
    margin: 4px 0;
  }

  p.pri {
    @include KaiOS_font(PRI);
  }

  p.sec {
    @include KaiOS_font(SEC);
  }
</style>
