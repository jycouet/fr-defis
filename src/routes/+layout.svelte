<script lang="ts">
  import mousePosition from "$lib/mousePosition";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"
  />
  <title>FR Defi 01</title>
</svelte:head>

<slot />

<style>
  :global(html, body) {
    max-width: 100%;
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>
