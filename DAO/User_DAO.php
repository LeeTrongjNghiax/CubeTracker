<?php
  function addUser($conn, $date, $name, $username, $password) {
    $sql = 'INSERT INTO user (id, name, username, password) VALUES 
    ( "u' . $date . '", "' . $name . '", "' . $username . '", "' . $password . '");';

    $result = $conn -> query($sql);

    return $result;
  }
?>