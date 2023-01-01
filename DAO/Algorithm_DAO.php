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

?>