<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="color-scheme" content="dark light">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" href="../CSS/scrollbar.css">
  <link rel="stylesheet" href="../CSS/globalVar.css">
  <link rel="stylesheet" href="../CSS/header.css">
  <link rel="stylesheet" href="../CSS/footer.css">

  <script src="../JS/functions.js"></script>

  <script>
    async function paste(input) {
      const text = await navigator.clipboard.readText();
      input.value = text;
    }

    randomInt = (start, stop) => Math.round(Math.random() * (stop - start) + start);

    generateScramble = (length) => {
      let move = ["U", "D", "F", "B", "R", "L", "M", "E", "S"];
      let rotate = ["x", "y", "z"];
      let turnCount = ["", "'", "2"];

      let result = [];

      for (let i = 0; i < length; i++) {
        result.push( move[randomInt(0, move.length - 1)] + turnCount[randomInt(0, turnCount.length - 1)] );
      }

      return result.join(" ");
    }

    addNewMove = () => {
      let moves = [
        ["U", "D", "F", "B", "R", "L", "M", "E", "S"],
        ["U'", "D'", "F'", "B'", "R'", "L'", "M'", "E'", "S'"],
        ["U2", "D2", "F2", "B2", "R2", "L2", "M2", "E2", "S2"],
        ["u", "d", "f", "b", "r", "l", "x", "y", "z"],
        ["u'", "d'", "f'", "b'", "r'", "l'", "x'", "y'", "z'"],
        ["u2", "d2", "f2", "b2", "r2", "l2", "x2", "y2", "z2"],
      ];

      for (let i = 0; i < moves.length; i++) {
        let btnGroup = document.createElement("div");
        btnGroup.setAttribute("class", "btnGroup");
        for (let j = 0; j < moves[i].length; j++) {
          let btn = document.createElement("button");
          btn.innerHTML = moves[i][j];
          btnGroup.appendChild( btn );
          btn.setAttribute("onclick", "move(this)");
          btn.setAttribute("class", "movement");
        }
        document.querySelector(".inp0").appendChild( btnGroup );
      }
    }

    move = (e) => {
      updateCube(turn( document.querySelector(".image").value.replace(/(_|\|)/g, ""), e.innerHTML ));
    }

    updateCube = (move) => {
      if (document.querySelector(".img").dataset.state == "3d")
        func = stringImageTo3DImage;
      else
        func = stringImageTo2DImage;

      document.querySelector(".img").removeChild( document.querySelector(".img svg") );
      document.querySelector(".img").insertAdjacentHTML( 'beforeend', func( move.replace(/(_|\|)/g, "") ) );
      document.querySelector(".image").value = move;
    }
  </script>

  <style>
    body {
      overflow-x: hidden;
    }

    * {
      padding: 0;
      margin: 0;
      font-family: monospace;
      box-sizing: border-box;
      font-size: 3vh;
    }

    main {
      background-color: var(--background-color);
    }

    svg {
      width: 50vh;
      height: 50vh;
      background-color: var(--background-color);
    }

    svg g {
      opacity: 1;
      stroke-width: 0;
      stroke-opacity: 0.5;
      stroke-linejoin: round;
    }

    main {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 1vw;
    }

    main .input {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: auto;
      margin-left: 1vw;
    }

    main .input .inp1, 
    main .input .inp2 {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 1vw;
    }

    main .input .inp0 {
      width: 100%;
      flex-direction: column;
      display: flex;
      align-items: center;
      gap: 1vw;
    }

    main .input .inp1 .inp1BtnGrp, 
    main .input .inp2 .inp2BtnGrp {
      display: flex;
      align-items: center;
      gap: 1vw;
      margin: 0 auto;
    }

    input {
      margin-right: auto;
      box-sizing: border-box;
      padding: 1vw;
      width: 100%;
      border: 0.5vw solid rgb(48 48 48);
      background: rgb(0 0 0);
    }

    button, select {
      user-select: none;
      display: inline-block;
      padding: 1vw;
      margin: 1vw 0vw 1vw 0vw;
      border-radius: 1vw;
      border: 0.5vw solid rgb(100 100 100);
      background-color: var(--background-color);
    }
    .move {
      border: 0.5vw solid rgb(0 100 0);
      background: rgb(0 50 0);
    }
    .reset {
      border: 0.5vw solid rgb(100 0 0);
      background: rgb(50 0 0);
    }
    .reverse {
      border: 0.5vw solid rgb(100 100 100);
      background: rgb(18 18 18);
    }
    .inverse {
      border: 0.5vw solid rgb(100 100 100);
      background: rgb(18 18 18);
    }
    .mirror {
      border: 0.5vw solid rgb(100 100 100);
      background: rgb(18 18 18);
    }
    .rotate  {
      border: 0.5vw solid rgb(100 100 100);
      background: rgb(18 18 18);
    }
    .btnGroup {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1vw;
    }

    .btnGroup button {
      user-select: none;
      flex-grow: 1;
      background-color: var(--header-background-color);
      padding: 0.25vw;
      margin: 0;
    }

    @media (orientation: portrait) {
      svg {
        width: 50vw;
        height: 50vw;
      }
    }

    @media (width <= 1050px) {
      main {
        flex-direction: column;
      }
    }
    @media (width <= 520px) {
      main .input .inp1, main .input .inp2 {
        flex-direction: column;
      }
      main .input .inp1 .inp1BtnGrp button {
        flex-grow: 1;
      }
    }
  </style>

</head>
<body>

  <?php include 'DynamicPage/header.php' ?>

  <main>
    <div class="img" data-state="3d">

    </div>
    <div class="input">
      <div class="inp0">
      </div>
      <div class="inp1">
        <input class="algorithm" type="text" pattern="(U|D|F|B|R|L|u|d|f|B|r|l|M|E|S|x|y|z)(|'|2)( (U|D|F|B|R|L|u|d|f|B|r|l|M|E|S|x|y|z)(|'|2))*">
        <div class="inp1BtnGrp">
          <button class="move">Move!</button>
          <button class="reset">Reset</button>
          <button class="reverse">Reverse Algoritihm</button>
          <button class="inverse">Inverse Algorithm</button>
          <button class="mirror">Mirror Algorithm</button>
          <button class="rotate">Rotate Algorithm</button>
        </div>
      </div>
      <div class="inp2">
        <input class="image" type="text" size=31.5>
        <div class="inp2BtnGrp">
          <button class="load">Load Rubik Cube</button>
          <button class="copy">Copy Rubik Cube</button>
          <select name="rubikType" id="">
            <option value="crossCube">Cross Cube</option>
            <option value="f2lCube">F2L Cube</option>
            <option value="ollCube">OLL Cube</option>
            <option value="solvedCube">Solved Cube</option>
            <option value="randomCube">Random Cube</option>
          </select>
          <select name="direction" id="">
            <option value="x">X</option>
            <option value="y">Y</option>
            <option value="z">Z </option>
          </select>
          <button class="lmao">Lmao</button>
          <button class="toggleState">3D Rubik's Cube</button>
        </div>
      </div>
      <div class="step"></div>
    </div>  
  </main>

  <?php include "DynamicPage/footer.php" ?>

  <script>
    // let cubeImage = '444444444555555555333333333111111111222222222666666666';
    let cubeImage = '111111111222222222333333333444444444555555555666666666';

    document.querySelector(".algorithm").value = "R U R' U R U' R' U' R' F R F'";
    document.querySelector(".img").insertAdjacentHTML( 'beforeend', stringImageTo3DImage( cubeImage.replace(/(_|\|)/g, "") ) );
    document.querySelector(".image").value = cubeImage;

    document.querySelector(".move").addEventListener("click", () => 
      updateCube( turn( document.querySelector(".image").value.replace(/(_|\|)/g, ""), document.querySelector(".algorithm").value ) )
    );

    document.querySelector(".reset").addEventListener("click", () => 
      // updateCube('444444444555555555333333333111111111222222222666666666');
      updateCube('111111111222222222333333333444444444555555555666666666')
    );

    document.querySelector(".reverse").addEventListener("click", () => {
      document.querySelector(".algorithm").value = 
        document.querySelector(".algorithm").value.split(" ").reverse().join(" ");
    });

    document.querySelector(".inverse").addEventListener("click", () => {
      let algorithm = document.querySelector(".algorithm");
      let arr = algorithm.value.split(" ");
      let result = [];

      arr.forEach(elem => {
        if (elem.match(/^\w$/)) result.push(elem + "'");
        else if (elem.match(/^\w'$/)) result.push(elem.replace("'", ""));
        else result.push(elem);
      });

      algorithm.value = result.join(" ");
    });

    document.querySelector(".mirror").addEventListener("click", () => {
      let algorithm = document.querySelector(".algorithm");
      let arr = algorithm.value.split(" ");
      let result = [];

      switch (document.querySelector("select[name=direction]").value) {
        case "x":
          arr.forEach(elem => {
            if (elem.match(/^R$/)) result.push(elem.replace("R", "L'"));
            else if (elem.match(/^L$/)) result.push(elem.replace("L", "R'"));
            else if (elem.match(/^R'$/)) result.push(elem.replace("R'", "L"));
            else if (elem.match(/^L'$/)) result.push(elem.replace("L'", "R"));
            else if (elem.match(/^r$/)) result.push(elem.replace("r", "l'"));
            else if (elem.match(/^l$/)) result.push(elem.replace("l", "r'"));
            else if (elem.match(/^r'$/)) result.push(elem.replace("r'", "l"));
            else if (elem.match(/^l'$/)) result.push(elem.replace("l'", "r"));
            else if (elem.match(/^[MES]['2]?$/)) result.push(elem);
            else if (elem.match(/^\w$/)) result.push(elem + "'");
            else if (elem.match(/^\w'$/)) result.push(elem.replace("'", ""));
            else result.push(elem);
          });
          break;
        case "y":
          arr.forEach(elem => {
            if (elem.match(/^U$/)) result.push(elem.replace("U", "D'"));
            else if (elem.match(/^D$/)) result.push(elem.replace("D", "U'"));
            else if (elem.match(/^U'$/)) result.push(elem.replace("U'", "D"));
            else if (elem.match(/^D'$/)) result.push(elem.replace("D'", "U"));
            else if (elem.match(/^u$/)) result.push(elem.replace("u", "d'"));
            else if (elem.match(/^d$/)) result.push(elem.replace("d", "u'"));
            else if (elem.match(/^u'$/)) result.push(elem.replace("u'", "d"));
            else if (elem.match(/^d'$/)) result.push(elem.replace("d'", "u"));
            else if (elem.match(/^[MES]['2]?$/)) result.push(elem);
            else if (elem.match(/^\w$/)) result.push(elem + "'");
            else if (elem.match(/^\w'$/)) result.push(elem.replace("'", ""));
            else result.push(elem);
          });
          break;
        case "z":
          arr.forEach(elem => {
            if (elem.match(/^F$/)) result.push(elem.replace("F", "B'"));
            else if (elem.match(/^B$/)) result.push(elem.replace("B", "F'"));
            else if (elem.match(/^F'$/)) result.push(elem.replace("F'", "B"));
            else if (elem.match(/^B'$/)) result.push(elem.replace("B'", "F"));
            else if (elem.match(/^f$/)) result.push(elem.replace("f", "b'"));
            else if (elem.match(/^b$/)) result.push(elem.replace("b", "f'"));
            else if (elem.match(/^f'$/)) result.push(elem.replace("f'", "b"));
            else if (elem.match(/^b'$/)) result.push(elem.replace("b'", "f"));
            else if (elem.match(/^[MES]['2]?$/)) result.push(elem);
            else if (elem.match(/^\w$/)) result.push(elem + "'");
            else if (elem.match(/^\w'$/)) result.push(elem.replace("'", ""));
            else result.push(elem);
          });
          break;
      }

      algorithm.value = result.join(" ");
    });

    document.querySelector(".rotate").addEventListener("click", () => {
      let algorithm = document.querySelector(".algorithm");
      let arr = algorithm.value.split(" ");
      let result = [];

      switch (document.querySelector("select[name=direction]").value) {
        case "x":
          arr.forEach(elem => {
            if (elem.match(/^R['2]?$/)) result.push(elem.replace("R", "L"));
            else if (elem.match(/^L['2]?$/)) result.push(elem.replace("L", "R"));
            else if (elem.match(/^r['2]?$/)) result.push(elem.replace("r", "l"));
            else if (elem.match(/^l['2]?$/)) result.push(elem.replace("l", "r"));
            else if (elem.match(/^[MES]'$/)) result.push(elem.replace("'", ""));
            else if (elem.match(/^[MES]$/)) result.push(elem + "'");
            else result.push(elem);
          });
          break;
        case "y":
          arr.forEach(elem => {
            if (elem.match(/^U['2]?$/)) result.push(elem.replace("U", "D"));
            else if (elem.match(/^D['2]?$/)) result.push(elem.replace("D", "U"));
            else if (elem.match(/^u['2]?$/)) result.push(elem.replace("u", "d"));
            else if (elem.match(/^d['2]?$/)) result.push(elem.replace("d", "u"));
            else if (elem.match(/^[MES]'$/)) result.push(elem.replace("'", ""));
            else if (elem.match(/^[MES]$/)) result.push(elem + "'");
            else result.push(elem);
          });
          break;
        case "z":
          arr.forEach(elem => {
            if (elem.match(/^F['2]?$/)) result.push(elem.replace("F", "B"));
            else if (elem.match(/^B['2]?$/)) result.push(elem.replace("B", "F"));
            else if (elem.match(/^f['2]?$/)) result.push(elem.replace("f", "b"));
            else if (elem.match(/^b['2]?$/)) result.push(elem.replace("b", "f"));
            else if (elem.match(/^[MES]'$/)) result.push(elem.replace("'", ""));
            else if (elem.match(/^[MES]$/)) result.push(elem + "'");
            else result.push(elem);
          });
          break;
      }

      algorithm.value = result.join(" ");
    });
    
    document.querySelector(".load").addEventListener("click", () => 
      updateCube(document.querySelector(".image").value)
    );

    document.querySelector(".copy").addEventListener("click", () => {
      navigator.clipboard.writeText(document.querySelector(".image").value);
    });

    document.querySelector("select[name=rubikType]").addEventListener("change", (e) => {
      let cubeImage = '400000000500555550330003333111111111200222220666666000';

      switch (document.querySelector("select").value) {
        case "crossCube": 
          document.querySelector(".image").value = "400000000500005000300000030110101010200002000600600000";
          break;
        case "f2lCube": 
          document.querySelector(".image").value = "400000000500555550330003333111111111200222220666666000";
          break;
        case "ollCube": 
          document.querySelector(".image").value = "444444444500555550330003333111111111200222220666666000";
          break;
        case "solvedCube": 
          // document.querySelector(".image").value = "444444444555555555333333333111111111222222222666666666";
          document.querySelector(".image").value = "111111111222222222333333333444444444555555555666666666";
          break;
        case "randomCube": 
          document.querySelector(".image").value = turn( "444444444555555555333333333111111111222222222666666666", generateScramble(20) );
          break;
      }
    });

    document.querySelector(".lmao").addEventListener("click", () => {
      // paste(document.querySelector(".algorithm"));
      document.querySelector(".inverse").click();
      document.querySelector(".reverse").click();
      document.querySelector(".reset").click();
      document.querySelector(".move").click();
      document.querySelector(".copy").click();
    });

    document.querySelector(".toggleState").addEventListener("click", () => {
      if (document.querySelector(".img").dataset.state == "3d") {
        document.querySelector(".img").dataset.state = "2d";
        document.querySelector(".toggleState").innerText = "2D Rubik's Cube";
      }
      else {
        document.querySelector(".img").dataset.state = "3d";
        document.querySelector(".toggleState").innerText = "3D Rubik's Cube";
      }

      updateCube(document.querySelector(".image").value);
    });

    // document.addEventListener('keydown', (e) => {
    //   switch (e.key) {
    //     case "Enter":
    //       document.querySelector(".move").click();
    //       break;
    //     case "r":
    //       document.querySelector(".reset").click();
    //       break;
    //     case "a":
    //       document.querySelector(".algorithm").focus();
    //       break;
    //     case "i":
    //       document.querySelector(".image").focus();
    //       break;
    //   } 
    // });

    addNewMove();
  </script>
</body>
</html>