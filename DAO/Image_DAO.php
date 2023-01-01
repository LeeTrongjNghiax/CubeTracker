<?php

  function getAllImagesWithAlgortihms($conn) {
    $images = array();

    $sql = "SELECT DISTINCT image.content, image.id FROM image JOIN algorithm alg ON image.id = alg.imageId ORDER BY alg.note";
	  $result = $conn -> query($sql);

    if ( $result -> num_rows > 0 ) {
      while ( $row = $result -> fetch_assoc() ) {
        $image = array();
        $image['content'] = $row['content'];
        $image['algorithms'] = array();

        $sql2 = "SELECT img.id, img.content AS img, alg.content AS alg, alg.votes, alg.note FROM image img JOIN algorithm alg ON img.id = alg.imageId WHERE img.id = '" . $row['id'] . "' ORDER BY alg.votes";
        $result2 = $conn -> query($sql2);

        if ( $result2 -> num_rows > 0 ) 
          while ( $row2 = $result2 -> fetch_assoc() ) {
            $algorithm['algorithm'] = $row2['alg'];
            $algorithm['votes'] = $row2['votes'];
            array_push($image['algorithms'], $algorithm);
          }

        array_push($images, $image);
      }
    }

    return json_encode( $images );
  }

?>