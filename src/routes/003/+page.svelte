<script>
  import { page } from "$app/stores";
  import { route } from "$lib/ROUTES";
</script>

<h1>Defi 03</h1>

<div style="width: 400px; margin-left: auto; margin-right: auto;">
  Prochain joueur : {$page.url.searchParams.get("joueur") ?? "0"}
  <br />
  <br />
  {#each { length: 3 } as row, r}
    <div class="inside">
      {#each { length: 3 } as col, c}
        <a
          href={route("/003", {
            r0c0: $page.url.searchParams.get("r0c0") ?? undefined,
            r0c1: $page.url.searchParams.get("r0c1") ?? undefined,
            r0c2: $page.url.searchParams.get("r0c2") ?? undefined,
            r1c0: $page.url.searchParams.get("r1c0") ?? undefined,
            r1c1: $page.url.searchParams.get("r1c1") ?? undefined,
            r1c2: $page.url.searchParams.get("r1c2") ?? undefined,
            r2c0: $page.url.searchParams.get("r2c0") ?? undefined,
            r2c1: $page.url.searchParams.get("r2c1") ?? undefined,
            r2c2: $page.url.searchParams.get("r2c2") ?? undefined,
            joueur:
              // 2/ encore un tricheur... on ne change pas de joueur si la case est deja remplie
              $page.url.searchParams.get(`r${r}c${c}`) === null
                ? $page.url.searchParams.get("joueur") === "X"
                  ? "O"
                  : "X"
                : $page.url.searchParams.get("joueur") ?? undefined,
            [`r${r}c${c}`]:
              // 1/ On ne peut pas reecrire une case deja remplie ! espece de tricheur !!!
              $page.url.searchParams.get(`r${r}c${c}`) === null
                ? $page.url.searchParams.get("joueur") === "X"
                  ? "X"
                  : "O"
                : $page.url.searchParams.get(`r${r}c${c}`),
          })}
        >
          {#if $page.url.searchParams.get(`r${r}c${c}`) === "X"}
            X
          {:else if $page.url.searchParams.get(`r${r}c${c}`) === "O"}
            O
          {:else}
            _
          {/if}
        </a>
      {/each}
    </div>
  {/each}
  <br />
  <br />
  <br />
  <button
    on:click={() =>
      // import { goto } from "$app/navigation";
      // Normalement un petit goto...
      (window.location.href = route("/003"))}
  >
    Refaire une partie?</button
  >
</div>

<style>
  .inside {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-items: center;
    align-items: end;
    height: 3rem;
    width: 15rem;
  }
  a {
    font-size: xx-large;
  }
</style>
