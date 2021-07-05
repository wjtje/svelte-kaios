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
    flex: 1 1;
  }

  p {
    margin: 4px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p.pri {
    @include KaiOS_font(PRI);
  }

  p.sec {
    @include KaiOS_font(SEC);
  }
</style>
