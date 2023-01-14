<?php include '../../connect.php' ?>
<?php include '../../DAO/Image_DAO.php' ?>
<?php include '../../DAO/Algorithm_DAO.php' ?>

<?php  
  $imageId = getImageByContent($conn, $_GET["image"]);
  
  if ( checkAllAlgorithmByContent($conn, $_GET["algorithm"]) == 1) {
    addAlgorithm(
      $conn, 
      $_GET["date"], 
      'u45121201012002', 
      $imageId["id"], 
      $_GET["algorithm"]
    );
  } else {
    echo '<script>
      alert("This algorithm already have in database!");
    </script>';
  }

  header("Location: ../F2L.php");
  exit();
?>