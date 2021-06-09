<script lang="ts">
  export let primary: string = "";
  export let secondary: string = "";
</script>

<div>
  <p class="pri">{primary}</p>
  <p class="sec">{secondary}</p>
</div>

<style lang="scss">
  @import "../style/functions";

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
