<script>
  let images = <?= getAllImagesWithAlgortihmsWithSpecificTag($conn, $tag); ?>;

  images.forEach(element => {
    let algorithms = ``;

    for (let i = 0; i < element.algorithms.length; i++) {
      algorithms += `<div class="algorithm-row">
        <p class="algorithm">${element.algorithms[i].algorithm}</p>
        <p class="vote">${element.algorithms[i].votes}</p>
        <p class="gen">2</p>
        <button data-state="Not Learned" onclick="changeState(this)"></button>
      </div>`;
    }

    document.querySelector("article").insertAdjacentHTML( 'beforeend', 
      `<section>
        <div class="num" data-section="F2L"></div>
        <div class="img" data-root-state='${element.content}' data-current-state='${element.content}' data-rubik-state='3D'>
          ${stringImageTo3DImage(element.content)}
          <div class="btnGroup">
            <button class="changeColorScheme" onclick='changeColorScheme(this)'>Change Color Scheme</button>
            <button class="rotate" onclick='rotate(this, "y")'>Rotate Y</button>
            <button class="toggleState" onclick='toggleState(this)'>Toggle 2D/3D</button>
            <button class="reset" onclick='reset(this)'>Reset</button>
          </div>
        </div>
        
        <div class="algorithms">
          <div class="algorithm-row">
            <p>Algorithms</p>
            <p class="vote">Votes</p>
            <p class="gen">Gen</p>
            <p class="state">State</p>
          </div>
          ${algorithms}
          <div class="algorithm-row">
            Load More!
          </div>
        </div>
      </section>`
    )
  });
</script>