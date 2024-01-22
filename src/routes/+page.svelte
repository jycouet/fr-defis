<script lang="ts">
  import mousePosition from "$lib/mousePosition";
  let colors = ["#FF3F00", "transparent"];

  const formCenter = { x: 0, y: 0 };

  const initPos = (node: HTMLElement) => {
    const { width, height, x, y } = node.getBoundingClientRect();
    formCenter.x = width / 2 + x;
    formCenter.y = height / 2 + y;
  };

  // get the angle in deg from the center of the form to the mouse x y
  function getAngle(_: any) {
    const angle =
      Math.atan2(
        $mousePosition.y - formCenter.y,
        $mousePosition.x - formCenter.x
      ) *
      (180 / Math.PI);
    console.log(`angle`, angle);
    return angle - 90;
  }
</script>

<h1>Defi 01</h1>
<main>
  <!-- Mouse position: {$mousePosition.x},{$mousePosition.y} -->

  <div
    use:initPos
    class="box"
    style="--deg: {getAngle(
      $mousePosition
    )}deg; --gradient-1:{colors[0]}; --gradient-2:{colors[1]};"
  >
    <form
      on:submit={() => {
        alert("envoyé!!!");
      }}
    >
      <label for="email">Email d'entreprise</label>
      <input type="email" id="email" name="email" />

      <label for="message">Comment pouvous nous vous aider ?</label>
      <textarea id="message" name="message" />

      <button type="submit">Envoyer</button>
    </form>
  </div>
</main>

<style>
  main {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  .box {
    padding: 0.5rem;
    border-radius: 1rem;
    background: linear-gradient(
      var(--deg),
      var(--gradient-1) 5%,
      var(--gradient-2) 20%
    );
  }

  form {
    border-radius: 1rem;
    background-color: #202b38;
    padding: 1rem;
  }
</style>
