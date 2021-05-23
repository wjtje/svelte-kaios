<main>
  <h1>H1 / Header</h1>
  <h2>Header of body text</h2>
  <h3>Tab text</h3>
  <h4>Separator text</h4>
  <h5>Software key</h5>
  <p class="pri">Primary text</p>
  <p class="sec">Secondary text</p>
  <p class="thi">Tertiary text</p>
  <a href="#/link">Hyperlink</a>
  <p class="btn">Button text</p>
</main>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap");
  @import "../lib/style/functions";

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    @include KaiOS_font(H1);
  }

  h2 {
    @include KaiOS_font(H2);
  }

  h3 {
    @include KaiOS_font(H3);
  }

  h4 {
    @include KaiOS_font(H4);
  }

  h5 {
    @include KaiOS_font(H5);
  }

  p.pri {
    @include KaiOS_font(PRI);
  }

  p.sec {
    @include KaiOS_font(SEC);
  }

  p.thi {
    @include KaiOS_font(THI);
  }

  a {
    @include KaiOS_font(LINK);
  }

  p.btn {
    @include KaiOS_font(BTN);
  }
</style>
