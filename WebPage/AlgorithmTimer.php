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

  <script src='../JS/eventListener.js' defer></script>
  <script src='../JS/functions.js'></script>

  <style>
    section {
      width: 100vw;
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
    }
    #image, #algorithm, #timer {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
    }
    #image {
      background-color: var(--algorithm-background-color);
    }

    #image svg {
      width: 10rem;
      height: 10rem;
      background-color: var(--background-color);
    }

    #image svg g {
      opacity: 1;
      stroke-width: 0;
      stroke-opacity: 0.5;
      stroke-linejoin: round;
    }

    #algorithm {
      background-color: var(--algorithm-background-color);
    }
    #algorithm p {
      font-size: 2rem;
      background-color: var(--algorithm-background-color);
    }
    #timer {
      background-color: var(--algorithm-background-color);
    }
    #timer p {
      font-size: 5rem;
      background-color: var(--algorithm-background-color);
    }
  </style>

  <title>F2L</title>
</head>
<body>
  
  <?php include '../connect.php' ?>
  <?php include '../DAO/Algorithm_DAO.php' ?>
  <?php include '../DAO/Image_DAO.php' ?>
  <?php include '../JS/function.php' ?>
  <?php include 'DynamicPage/header.php' ?>
  
  <main>
    <h1>Algorithms Timer</h1>
    <article>
      <section>
        <div id="image"></div>
        <div id="algorithm">
          <p>Algorithm:</p>
          <p class="algorithm"></p>
        </div>
        <div id="timer">
          <p class="timer">Start</p>
        </div>
      </section>
    </article>
  </main>

  <script>
    let isAlgorithm = <?= checkAlgorithmByContent($conn, $_GET['algorithm']); ?>;
    let isImage = <?= checkImageByContent($conn, $_GET['image']); ?>;

    if (isAlgorithm == 0) alert("Algorithm does not exist");
    else {
      document.querySelector(".algorithm").innerHTML = "<?= $_GET['algorithm']; ?>";
    }
    if (isImage == 0) alert("Image does not exist");
    else {
      document.querySelector("#image").insertAdjacentHTML('beforeend', stringImageTo3DImage("<?= $_GET['image'] ?>") );
    };
  </script>
    
  <?php include "DynamicPage/footer.php" ?>

</body>

</html>