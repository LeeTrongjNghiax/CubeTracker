<?php
  $host = "localhost";
  $user = "LeeTrongjNghiax";
  $pass = "Ngh1@x0938225745";
  $dbs = "CubeTracker";

  $conn = mysqli_connect($host, $user, $pass, $dbs);

  if (!$conn) echo mysqli_connect_error();