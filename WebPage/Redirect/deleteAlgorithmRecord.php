<?php include '../../connect.php' ?>
<?php include '../../DAO/AlgorithmRecord_DAO.php' ?>

<?php
  deleteAlgorithmRecord($conn, $_GET['id']);

  header("Location: ../AlgorithmTimer.php?user=" . $_GET['user'] . "&algorithm=" . $_GET['algorithm'] . "&image=" . $_GET['image'] . "&date=" . $_GET['date'] . "&record=" . $_GET['record'] . "");
  exit();
?>