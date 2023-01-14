<?php

  function getAllAlgorithm($conn) {
    $algorithms = array();

    $sql = "SELECT * FROM algorithm";

	  $result = $conn -> query($sql);

    if ( $result -> num_rows > 0 ) {
      while ( $row = $result -> fetch_assoc() ) {
        array_push($algorithms, $row);
      }
    }

    return json_encode( $algorithms );
  }

  function checkAlgorithmByContent($conn, $algorithm) {
    $sql = 'SELECT * FROM algorithm WHERE content = "' . $algorithm . '"';

	  $result = $conn -> query($sql);

    if ( $result -> num_rows > 0 ) {
      return 1;
    } else {
      return 0;
    }
  }

  function getAllAlgorithmByImage($conn, $imageId) {
    $algorithms = array();

    $sql = "SELECT * FROM algorithm WHERE imageId = " . $imageId;

	  $result = $conn -> query($sql);

    if ( $result -> num_rows > 0 ) {
      while ( $row = $result -> fetch_assoc() ) {
        array_push($algorithms, $row);
      }
    }

    return json_encode( $algorithms );
  }

  function addAlgorithm($conn, $date, $user, $imageId, $content) {
    $algorithms = array();

    $sql = 'INSERT INTO algorithm (id, userId, imageId, content, note) VALUES 
    ( "alg' . $date . '", "' . $user . '", "' . $imageId . '", "' . $content . '", "F2L ??" );';

	  $result = $conn -> query($sql);
  }
?>