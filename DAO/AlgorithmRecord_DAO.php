<?php
  function getAllRecordFromAlgorithm($conn, $algorithmId) {
    $algorithmRecords = array();

    $sql = "SELECT algr.id, algr.time, algr.state FROM algorithmrecord algr JOIN algorithm alg ON algr.algorithmId = alg.id WHERE alg.id = '" . $algorithmId . "';";

    $result = $conn -> query($sql);

    if ( $result -> num_rows > 0 ) {
      while ( $row = $result -> fetch_assoc() ) {
        array_push($algorithmRecords, $row);
      }
    }

    return json_encode( $algorithmRecords );
  }

  function addAlgorithmRecord($conn, $date, $user, $algorithmId, $time) {
    $sql = 'INSERT INTO algorithmRecord (id, userId, algorithmId, time) VALUES 
    ( "r' . $date . '", "c' . $user . '", "' . $algorithmId . '", "' . $time . '");';

	  $result = $conn -> query($sql);
    return $result;
  }

  function deleteAlgorithmRecord($conn, $algorithmRecordId) {
    $sql = 'DELETE FROM algorithmrecord WHERE id = "' . $algorithmRecordId . '";';

	  $result = $conn -> query($sql);
    return $result;
  }
?>