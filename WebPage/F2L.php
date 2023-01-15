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
  <link rel="stylesheet" href="../CSS/F2L.css">
  <link rel="stylesheet" href="../CSS/footer.css">

  <script src='../JS/eventListener.js' defer></script>
  <script src='../JS/functions.js'></script>

  <title>F2L</title>
</head>
<body>
  
  <?php include '../connect.php' ?>
  <?php include '../DAO/Algorithm_DAO.php' ?>
  <?php include '../DAO/Image_DAO.php' ?>
  <?php include 'DynamicPage/function.php' ?>
  <?php include 'DynamicPage/header.php' ?>
  <?php $tag = "F2L" ?>
  
  <main>
    <h1>F2L Algorithms</h1>
    <article>
    
  </article>
  </main>
    
  <?php include "DynamicPage/loadAlgorithms.php" ?>
  <?php include "DynamicPage/footer.php" ?>

  <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $result = getImageByContent($conn, $_POST['image']);

      if ( !empty($result) ) { 
        $date = date('siHdmY');
        addAlgorithm($conn, $date, 'u45121201012002', $result['id'], $_POST['algorithm']);
      } else {
        echo '<script>alert("Image does not exists");</script>';
      }
    }
  ?>

</body>

</html>