<?php
  function getAllRecordFromAlgorithm($conn, $algorithmId) {
    $algorithmRecords = array();

    $sql = "SELECT algr.id, algr.time, algr.state FROM algorithmrecord algr JOIN algorithm alg ON algr.algorithmId = alg.id WHERE alg.id = '" . $algorithmId . "' ORDER BY algr.id DESC;";

    $result = $conn -> query($sql);

    if ( $result -> num_rows > 0 ) {
      while ( $row = $result -> fetch_assoc() ) {
        array_push($algorithmRecords, $row);
      }
    }

    return json_encode( $algorithmRecords );
  }

  function addAlgorithmRecord($conn, $date, $user, $algorithmId, $time) {
    if (empty($time)) return 0;
    $sql = 'INSERT INTO algorithmRecord (id, userId, algorithmId, time) VALUES 
    ( "r' . $date . '", "' . $user . '", "' . $algorithmId . '", "' . $time . '");';

	  $result = $conn -> query($sql);
    return $result;
  }

  function deleteAlgorithmRecord($conn, $algorithmRecordId) {
    $sql = 'DELETE FROM algorithmrecord WHERE id = "' . $algorithmRecordId . '";';

	  $result = $conn -> query($sql);
    return $result;
  }

  function changeAlgorithmRecordState($conn, $algorithmRecordId, $state) {
    switch ($state) {
      case "completed":
        $state = "plus2";
        break;
      case "plus2":
        $state = "dnf";
        break;
      case "dnf":
      default:
        $state = "completed";
        break;
    }
    $sql = 'UPDATE algorithmrecord SET state = "' . $state . '" WHERE id = "' . $algorithmRecordId . '"';

	  $result = $conn -> query($sql);
    return $result;
  }

  function getAlgorithmRecordAO($conn, $algorithmRecordId, $ao) {
    $limitQuery = '';
    if ($ao > -1) $limitQuery = 'LIMIT ' . $ao;

    $sql = 'SELECT AVG(allTime.time) AS "ao" FROM ( SELECT time FROM algorithmrecord WHERE time NOT IN (( SELECT MAX(time) FROM algorithmrecord WHERE algorithmid = "' . $algorithmRecordId . '" ), ( SELECT MIN(time) FROM algorithmrecord WHERE algorithmid = "' . $algorithmRecordId . '" )) AND algorithmid = "' . $algorithmRecordId . '" ' . $limitQuery . ') allTime';

	  $result = $conn -> query($sql);
    
    if ( $result -> num_rows > 0 ) {
      while ( $row = $result -> fetch_assoc() ) {
        return $row['ao'];
      }
    }
  }

  function getAlgorithmRecordMO($conn, $algorithmRecordId, $mo) {
    $limitQuery = '';
    if ($mo > -1) $limitQuery = 'LIMIT ' . $mo;

    $sql = 'SELECT AVG(time) AS "mo" FROM algorithmrecord WHERE algorithmid = "' . $algorithmRecordId . '" ' . $limitQuery . ';';

	  $result = $conn -> query($sql);
    
    if ( $result -> num_rows > 0 ) {
      while ( $row = $result -> fetch_assoc() ) {
        return $row['mo'];
      }
    }
  }

  function getCurrentAlgorithmRecord($conn, $algorithmRecordId) {
    $sql = 'SELECT DATE_FORMAT(`time`, "%s.%f") AS `time` FROM algorithmrecord WHERE algorithmid = "' . $algorithmRecordId . '" ORDER BY id DESC LIMIT 1;';

	  $result = $conn -> query($sql);
    
    if ( $result -> num_rows > 0 ) {
      while ( $row = $result -> fetch_assoc() ) {
        return $row['time'];
      }
    }
  }

  function getBestAlgorithmRecord($conn, $algorithmRecordId) {
    $sql = 'SELECT MIN(DATE_FORMAT(`time`, "%s.%f")) AS `time` FROM algorithmrecord WHERE algorithmid = "' . $algorithmRecordId . '";';

	  $result = $conn -> query($sql);
    
    if ( $result -> num_rows > 0 ) {
      while ( $row = $result -> fetch_assoc() ) {
        return $row['time'];
      }
    }
  }
?>