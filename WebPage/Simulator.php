<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="color-scheme" content="dark light">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="../CSS/scrollbar.css">
  <link rel="stylesheet" href="../CSS/globalVar.css">
  <link rel="stylesheet" href="../CSS/header.css">
  <link rel="stylesheet" href="../CSS/section.css">
  <link rel="stylesheet" href="../CSS/footer.css">

  <script src="../JS/functions.js"></script>

  <style>
    body {
      overflow-x: hidden;
    }

    svg {
      width: 80vh;
      height: 80vh;
      background-color: var(--background-color);
    }

    svg g {
      opacity: 1;
      stroke-width: 0;
      stroke-opacity: 0.5;
      stroke-linejoin: round;
    }
  </style>
</head>
<body>

  <?php include 'DynamicPage/header.php' ?>

  <main>
    <div class="img"></div>
    <div class="input">
      <input class="algorithm" type="text" size=60 pattern="(U|D|F|B|R|L|u|d|f|B|r|l|M|E|S|x|y|z)(|'|2)( (U|D|F|B|R|L|u|d|f|B|r|l|M|E|S|x|y|z)(|'|2))*">
      <button class="move">Move!</button>
      <button class="reset">Reset</button>
      <input class="image" type="text" size=60>
      <button class="load">Load Rubik Cube</button>
    </div>
    <div class="step"></div>
  </main>

  <?php include 'DynamicPage/footer.php' ?>

  <script>
    document.querySelector(".algorithm").value = "";

    let cubeImage = '111111111222222222333333333444444444555555555666666666';
    document.querySelector(".img").insertAdjacentHTML( 'beforeend', stringImageTo3DImage( cubeImage.replace(/(_|\|)/g, "") ) );
    document.querySelector(".step").innerHTML = cubeImage;

    document.querySelector(".move").addEventListener("click", (e) => {
      let move = document.querySelector(".algorithm").value;
      cubeImage = turn( cubeImage.replace(/(_|\|)/g, ""), move );
      document.querySelector(".img").removeChild( document.querySelector(".img svg") );
      document.querySelector(".img").insertAdjacentHTML( 'beforeend', stringImageTo3DImage( cubeImage.replace(/(_|\|)/g, "") ) );
      document.querySelector(".step").innerHTML = cubeImage;
    });

    document.querySelector(".reset").addEventListener("click", (e) => {
      cubeImage = '111111111222222222333333333444444444555555555666666666';
      document.querySelector(".img").removeChild( document.querySelector(".img svg") );
      document.querySelector(".img").insertAdjacentHTML( 'beforeend', stringImageTo3DImage( cubeImage.replace(/(_|\|)/g, "") ) );
      document.querySelector(".step").innerHTML = cubeImage;
    });

    document.querySelector(".load").addEventListener("click", (e) => {
      cubeImage = document.querySelector(".image").value;
      document.querySelector(".img").removeChild( document.querySelector(".img svg") );
      document.querySelector(".img").insertAdjacentHTML( 'beforeend', stringImageTo3DImage( cubeImage.replace(/(_|\|)/g, "") ) );
      document.querySelector(".step").innerHTML = cubeImage;
    });
    
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case "Enter":
          document.querySelector(".move").click();
          break;
        case "r":
          document.querySelector(".reset").click();
          break;
        // case "l":
        //   document.querySelector(".load").click();
        //   break;
        case "a":
          document.querySelector(".algorithm").focus();
          break;
        case "i":
          document.querySelector(".image").focus();
          break;
      } 
    });
  </script>
</body>
</html>