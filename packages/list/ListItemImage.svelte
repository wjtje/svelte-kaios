<script lang="ts">
  let src: string;
  let alt: string;

  export { src, alt };
</script>

<img {src} {alt} />

<style lang="scss">
  img {
    height: 32px;
    width: 32px;

    margin: 0 5px;

    object-fit: cover;
    object-position: center;
    border-radius: 10px;
  }
</style>
