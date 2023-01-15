<!-- <script>
  let images = <?= getAllImagesWithAlgortihmsWithSpecificTag($conn, $tag); ?>;

  images.forEach(element => {
    let algorithms = ``;

    for (let i = 0; i < element.algorithms.length; i++) {
      let flag = 'show';
      let rotate = '';
      let havingRotate = element.algorithms[i].algorithm.match(/^y(\s|'|2)/);
      if (havingRotate != null) {
        flag = 'hide';
        switch (havingRotate[0]) {
          case 'y':
            rotate = 'y';
            break;
          case 'y2':
            rotate = 'y2';
            break;
          case "y'":
            rotate = 'y';
            break;
        }
      }
      algorithms += `<div class="algorithm-row" data-rotate="${rotate}">
        <p class="algorithm">${element.algorithms[i].algorithm}</p>
        <p class="vote">${element.algorithms[i].votes}</p>
        <button data-state="Not Learned" onclick="changeState(this)"></button>
        <a href="/">More Info</a>
      </div>`;
    }

    document.querySelector("article").insertAdjacentHTML( 'beforeend', 
      `<section>
        <div class="num" data-section="F2L"></div>
        <div class="img" data-root-state='${element.content}' data-current-state='${element.content}' data-rubik-state='3D' data-rotate-count='0'>
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
            <p class="state">State</p>
            <p class="info">Info</p>
          </div>
          ${algorithms}
          <div class="algorithm-row">
            <input type="text" pattern="(U|D|F|B|R|L|u|d|f|B|r|l|M|E|S|x|y|z)('|2)*(\s(U|D|F|B|R|L|u|d|f|B|r|l|M|E|S|x|y|z)(|'|2)*)*" size=60>
            <button class="submit" onclick="submit(this)">Submit Algorithm</button>
          </div>
          <form ac>

          </form>
          <div class="algorithm-row">
            Load More!
          </div>
        </div>
      </section>`
    )
  });
</script> -->

<?php
  $images = json_decode( getAllImagesWithAlgortihmsWithSpecificTag($conn, $tag), true );

  foreach ($images as $element) {
    $algorithms = '';

    // foreach ($element["algorithms"] as $elem) {
    //   $flag = "show";
    //   $rotate = "";
    //   $havingRotate = preg_match("/^y(\s|'|2)/", $elem["algorithm"], $matches);

    //   if (count( $matches ) != 0) {
    //     $flag = 'hide';
    //     switch ( $matches[0] ) {
    //       case 'y':
    //         $rotate = 'y';
    //         break;
    //       case 'y2':
    //         $rotate = 'y2';
    //         break;
    //       case "y'":
    //         $rotate = 'y';
    //         break;
    //     }
    //   };

    //   $algorithms = $algorithms . `<div class="algorithm-row" data-rotate="` . $rotate . `">
    //     <p class="algorithm">` . $elem["algorithm"] . `</p>
    //     <p class="vote">` . $elem["votes"] . `</p>
    //     <button data-state="Not Learned" onclick="changeState(this)"></button>
    //     <a href="/">More Info</a>
    //   </div>`;
    // }

    echo '<pre>';
    print_r(stringImageTo3DImage( $element["content"] ));
    echo '</pre>';

    // echo `<section>
    //   <div class="num" data-section="F2L"></div>
    //   <div class="img" data-root-state='` . $element["content"] . `' data-current-state='` . $element["content"] . `' data-rubik-state='3D' data-rotate-count='0'>
    //     ` . stringImageTo3DImage( $element["content"] ) . `
    //     <div class="btnGroup">
    //       <button class="changeColorScheme" onclick='changeColorScheme(this)'>Change Color Scheme</button>
    //       <button class="rotate" onclick='rotate(this, "y")'>Rotate Y</button>
    //       <button class="toggleState" onclick='toggleState(this)'>Toggle 2D/3D</button>
    //       <button class="reset" onclick='reset(this)'>Reset</button>
    //     </div>
    //   </div>
      
    //   <div class="algorithms">
    //     <div class="algorithm-row">
    //       <p>Algorithms</p>
    //       <p class="vote">Votes</p>
    //       <p class="state">State</p>
    //       <p class="info">Info</p>
    //     </div>` . 
    //     $algorithms . 
    //     `<div class="algorithm-row">
    //       <input type="text" pattern="(U|D|F|B|R|L|u|d|f|B|r|l|M|E|S|x|y|z)('|2)*(\s(U|D|F|B|R|L|u|d|f|B|r|l|M|E|S|x|y|z)(|'|2)*)*" size=60>
    //       <button class="submit" onclick="submit(this)">Submit Algorithm</button>
    //     </div>
    //     <form ac>

    //     </form>
    //     <div class="algorithm-row">
    //       Load More!
    //     </div>
    //   </div>
    // </section>`;
  }
?>