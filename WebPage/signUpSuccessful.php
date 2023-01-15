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

  <style>
    article {
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: stretch;
    }
  </style>

  <script src='../JS/functions.js'></script>

  <title>F2L</title>
</head>
<body>

  <?php include '../connect.php' ?>
  <?php include 'DynamicPage/header.php' ?>
  <?php include '../DAO/User_DAO.php' ?>

  <main>
    <h1>Thank you for joining our page!</h1>
    <article>
      <p>You can leave this page now</p>
      <br>
    </article>
  </main>
    
  <?php include "DynamicPage/footer.php" ?>

</body>

</html>