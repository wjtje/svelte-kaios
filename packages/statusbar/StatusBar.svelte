<script lang="ts">
  import type { KaiOS_color } from "@skui/types";

  import Signal4GIcon from "./icons/4g.svg";
  import SignalIcon from "./icons/signal.svg";
  import BatteryIcon from "./icons/battery.svg";

  export let color: KaiOS_color;

  $: cssVarStyles = `--background:${color[0]};--foreground:${color[1]};`;
</script>

<div style={cssVarStyles}>
  <div class="icons">
    <Signal4GIcon />
    <SignalIcon />
    <BatteryIcon />
  </div>
  <span class="time">10:38 <span class="time-period">AM</span></span>
</div>

<style lang="scss">
  @import "../style/functions";

  div {
    width: 100%;
    height: 26px;
    flex-shrink: 0;

    background-color: var(--background);
    color: var(--foreground);

    display: grid;
    justify-content: end;
    align-content: center;
    grid-auto-flow: column;
    gap: 2px;

    box-sizing: border-box;
    padding: 0 4px;

    div.icons {
      display: grid;
      justify-content: end;
      align-content: center;
      grid-auto-flow: column;
      gap: 6px;
    }

    span.time {
      @include KaiOS_font(H5);

      color: var(--foreground);
      line-height: 26px;

      span.time-period {
        @include KaiOS_font(H5);

        color: var(--foreground);
        font-size: 11px;
        line-height: 26px;
      }
    }
  }
</style>
