<script lang="ts">
  import { page } from "$app/stores";
  import { route } from "$lib/ROUTES";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"
  />
  <title>FR Defis</title>
</svelte:head>

<a href={route("/")}>Accueil</a> |
<a href={route("/001")}>Defi 1</a> |
<a href={route("/003")}>Defi 3</a>

<hr />

<slot />

<style>
  :global(html, body) {
    max-width: 100%;
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>
