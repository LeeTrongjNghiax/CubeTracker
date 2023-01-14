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
    form {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    form div {
      width: 100%;
      display: grid;
      flex-grow: 1;
      grid-template-columns: 1fr 2fr;
      align-items: center;
      margin: 1vw;
    }
    form div input {
      padding: 1vh;
    }
    form div input[type=submit] {
      background-color: rgb(0 200 0);
      border-color: rgb(0 100 0);
    }
  </style>

  <script src='../JS/functions.js'></script>

  <title>F2L</title>
</head>
<body>

  <?php include '../connect.php' ?>
  <?php include 'DynamicPage/header.php' ?>
  <?php include '../DAO/User_DAO.php' ?>

  <?php
    $name = $email = $birthday = $username = $password = $confirmPassword = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = test_input($_POST["name"]);
      $email = test_input($_POST["email"]);
      $birthday = test_input($_POST["birthday"]);
      $username = test_input($_POST["username"]);
      $password = test_input($_POST["password"]);
      $confirmPassword = test_input($_POST["confirmPassword"]);
      
      $date = date('siHdmY');
      addUser($conn, $date, $name, $username, $password);

      header("Location: signUpSuccessful.php");
      exit();
    }

    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
  ?>
  
  <main>
    <h1>Sign up and dive into the cube!</h1>
    <article>
      <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
        <div class="row">
          <label for="name">Name: </label>
          <input type="text" name="name" id="name" 
            pattern="(\p{Lu}\p{Ll}*)(\s\p{Lu}\p{Ll}*)*" 
            title="Name must start with uppercase character and have at least one word" 
          required>
        </div>
        <div class="row">
          <label for="email">Email: </label>
          <input type="email" name="email" id="email" 
            pattern="([a-zA-Z])(\w)*@gmail\.com" 
            title="Email must not start with digit and have '@gmail.com' at the end" 
          required>
        </div>
        <div class="row">
          <label for="birthday">Birthday: </label>
          <input type="date" name="birthday" id="birthday" value="2002-07-03" required>
        </div>
        <div class="row">
          <label for="username">Username: </label>
          <input type="text" name="username" id="username" 
            pattern="([a-zA-Z])(\w)+" 
            title="Username must not start with digit and have at least one character" 
          required>
        </div>
        <div class="row">
          <label for="password">Password: </label>
          <input type="password" name="password" id="password" 
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
          required>
        </div>
        <div class="row">
          <label for="confirmPassword">Confirm Password: </label>
          <input type="password" name="confirmPassword" id="confirmPassword" 
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
          required>
        </div>
        <div class="row">
          <label for="submit">Done filling your information?: </label>
          <input type="submit" name="submit" id="submit" value="Submit here!">
        </div>
      </form>
    </article>
  </main>
    
  <?php include "DynamicPage/footer.php" ?>

</body>

</html>