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
  <link rel="stylesheet" href="../CSS/PLL.css">
  <link rel="stylesheet" href="../CSS/footer.css">

  <script src='../JS/eventListener.js' defer></script>
  <script src='../JS/functions.js'></script>

  <title>PLL</title>
</head>
<body>
  
  <?php include '../connect.php' ?>
  <?php include '../DAO/Algorithm_DAO.php' ?>
  <?php include '../DAO/Image_DAO.php' ?>
  <?php include 'DynamicPage/header.php' ?>
  <?php $tag = "PLL" ?>
  
  <main>
    <h1>PLL Algorithms</h1>
    <article>
      
    </article>
  </main>
    
  <?php include "DynamicPage/footer.php" ?>
  <?php include "DynamicPage/loadAlgorithms.php" ?>

</body>

</html>