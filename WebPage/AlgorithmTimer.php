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
  <link rel="stylesheet" href="../CSS/footer.css">

  <script src='../JS/eventListener.js' defer></script>
  <script src='../JS/functions.js'></script>

  <style>
    * {
      font-size: 15px;
    }
    main {
      width: 100%;
    }
    article {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    section {
      width: 100%;
      display: grid;
      grid-template-columns: auto 1fr auto;
    }
    #image, #algorithm, #timer {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
    }
    #image {
      background-color: var(--algorithm-background-color);
    }
    #image svg {
      width: 10vw;
      height: 10vw;
      background-color: var(--background-color);
    }
    #image svg g {
      opacity: 1;
      stroke-width: 0;
      stroke-opacity: 0.5;
      stroke-linejoin: round;
    }
    #algorithm {
      background-color: var(--algorithm-background-color);
    }
    #algorithm p {
      font-size: 2rem;
      background-color: var(--algorithm-background-color);
    }
    #algorithm .algorithm {
      padding: 0 1rem;
      text-align: center;
    }
    #timer {
      flex-direction: row;
      padding: 4vw;
      background-color: var(--algorithm-background-color);
    }
    #timer .timer {
      background-color: var(--algorithm-background-color);
    }
    #timer span {
      font-size: 3rem;
      background-color: var(--algorithm-background-color);
    }
    #timer span:nth-child(1)::after {
      content: ':';
    }
    #timer span:nth-child(2)::after {
      content: '.';
    }
    #timerStatistic {
      width: 100%;
      display: block;
      background-color: var(--algorithm-background-color);
    }
    #timerStatistic h1 {
      background-color: var(--algorithm-background-color);
    }
    #timerStatistic div {
      background-color: var(--algorithm-background-color);
    }
    #timerStatistic .timerStatistic {
      display: flex;
      justify-content: space-around;
    }
    #timerStatistic .timerStatistic div {
      background-color: var(--algorithm-background-color);
    }
    #timerStatistic .timerStatistic div h2 {
      font-weight: normal;
      font-size: 2rem;
      text-align: center;
      background-color: var(--algorithm-background-color);
    }
    #timerRecord {
      display: block;
      background-color: var(--algorithm-background-color);
      width: 100%;
    }
    #timerRecord h1 {
      background-color: var(--algorithm-background-color);
    }
    #timerRecord .recordTable {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: var(--algorithm-background-color);
    }
    #timerRecord .recordTable .row {
      display: grid;
      width: 100%;
      text-align: center;
      grid-template-columns: 2fr 6fr 6fr 3fr 3fr;
      align-items: space;
      justify-content: space-between;
      background-color: var(--algorithm-background-color);
    }
    #timerRecord .recordTable .row:first-child div {
      font-size: 2rem;
    }
    #timerRecord .recordTable .row div {
      margin: 1rem 0;
      padding: auto 1rem;
      font-size: 1rem;
      background-color: var(--algorithm-background-color);
    }
    #timerRecord .recordTable .row:not(:first-child) div.delete {
      margin: auto 1rem;
      background-color: red;
      border-radius: 2rem;
    }
    #timerRecord .recordTable .row:not(:first-child) div.state {
      margin: auto 1rem;
      border-radius: 2rem;
    }
    #timerRecord .recordTable .row:not(:first-child) div.state.completed {
      background-color: green;
    }
    #timerRecord .recordTable .row:not(:first-child) div.state.plus2 {
      background-color: orange;
    }
    #timerRecord .recordTable .row:not(:first-child) div.state.dnf {
      background-color: red;
    }
    .ready {
      color: green;
    }
  </style>

  <title>F2L</title>
</head>
<body>
  
  <?php include '../connect.php' ?>
  <?php include '../DAO/Algorithm_DAO.php' ?>
  <?php include '../DAO/AlgorithmRecord_DAO.php' ?>
  <?php include '../DAO/Image_DAO.php' ?>
  <?php include '../JS/function.php' ?>
  <?php include 'DynamicPage/header.php' ?>
  
  <main>
    <h1>Algorithms Timer</h1>
    <article>
      <section>
        <div id="image"></div>
        <div id="algorithm">
          <p>Algorithm:</p>
          <p class="algorithm"></p>
        </div>
        <div id="timer">
          <div class="timer">
            <span class="minute" style="display: none;">00</span>
            <span class="second">00</span>
            <span class="millisecond">00</span>
          </div>
        </div>
      </section>
      <section id="timerRecord" style="overflow-y: scroll; max-height: 30vh;">  
        <h1>Timer record</h1>
        <div class="recordTable">
          <div class="row">
            <div class="no">Number</div>
            <div class="date">Date</div>
            <div class="record">Record</div>
            <div class="state">State</div>
            <div class="delete">Delete</div>
          </div>
        </div>
      </section>
      <section id="timerStatistic">
        <h1>Timer Statistic</h1>
        <div class="timerStatistic">
          <div class="ao5-statistic">
            <h2>AO5</h2>
            <h2 class="ao5"></h2>
          </div>
          <div class="ao12-statistic">
            <h2>AO12</h2>
            <h2 class="ao12"></h2>
          </div>
          <div class="mo5-statistic">
            <h2>MO5</h2>
            <h2 class="mo5"></h2>
          </div>
          <div class="current-time-statistic">
            <h2>Current Time</h2>
            <h2 class="current-time"></h2>
          </div>
          <div class="best-time-statistic">
            <h2>Best Time</h2>
            <h2 class="best-time"></h2>
          </div>
        </div>
      </section>  
    </article>
  </main>

  <?php include "DynamicPage/loadRecord.php" ?>

  <script>
    let minute = second = millisecond = 00;

    timer = () => {
      millisecond++;
      if (millisecond <= 9) document.querySelector(".millisecond").innerHTML = '0' + millisecond;
      if (millisecond > 9) document.querySelector(".millisecond").innerHTML = millisecond;
      if (millisecond > 99) {
        second++;
        document.querySelector(".second").innerHTML = '0' + second;
        millisecond = 0;
        document.querySelector(".millisecond").innerHTML = '0' + millisecond;
      }
      if (second <= 9) document.querySelector(".second").innerHTML = '0' + second;
      if (second > 9) document.querySelector(".second").innerHTML = second;
      if (second > 59) {
        second = 0;
        document.querySelector(".second").innerHTML = '0' + second;
        millisecond = 0;
        document.querySelector(".millisecond").innerHTML = '0' + millisecond;
        minute++;
        document.querySelector(".minute").innerHTML = '0' + minute;
      }
      if (minute <= 9) document.querySelector(".minute").innerHTML = '0' + minute;
      if (minute > 9) document.querySelector(".minute").innerHTML = minute;
    }

    let timerInterval = null;
    let time = 0;

    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case " ":
          time = Date.now();
          // setTimeout(() => {
          //   document.querySelector(".minute").setAttribute("class", "ready");
          //   document.querySelector(".second").setAttribute("class", "ready");
          //   document.querySelector(".millisecond").setAttribute("class", "ready");
          // }, 3000);
          break;
      }
      if(e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
      }
    });

    document.addEventListener('keyup', (e) => {
      switch (e.key) {
        case " ":
          if (timerInterval == null) {
            if (Date.now() - time >= 2) {
              time = 0;
              minute = second = millisecond = 00;
              document.querySelector(".millisecond").innerHTML = '00';
              document.querySelector(".second").innerHTML = '00';
              document.querySelector(".minute").innerHTML = '00';
              timerInterval = setInterval(timer, 10);
            }
          } else {
            clearInterval(timerInterval);
            timerInterval = null;
            console.log(document.querySelector(".minute").innerHTML + " " + document.querySelector(".second").innerHTML + " " + document.querySelector(".millisecond").innerHTML);
            let a = document.createElement("a");
            a.setAttribute("href", `
              <?php echo $_SERVER["PHP_SELF"] ?>?
              user=u45121201012002&
              algorithm=${algorithm}&
              image=${image}&
              date=<?= date('YmdHis'); ?>&
              record=00:${document.querySelector(".minute").innerHTML + ":"
                         + document.querySelector(".second").innerHTML + "."
                         + document.querySelector(".millisecond").innerHTML}
            `);
            a.click();
          }
          break;
      }
    });

    function deleteRecord(e) {
      if (confirm("Do you want to delete this record?")) {
        let a = document.createElement("a");
        a.setAttribute("href", `
          Redirect/deleteAlgorithmRecord.php?
          id=${ e.parentElement.getAttribute("id") }&
          user=u45121201012002&
          algorithm=${algorithm}&
          image=${image}
        `);
        a.click();
      }
    }

    function changeRecordState(e) {
      if (confirm("Do you want to change this record state?")) {
        let a = document.createElement("a");
        a.setAttribute("href", `
          Redirect/changeRecordState.php?
          id=${ e.parentElement.getAttribute("id") }&
          state=${ e.innerHTML }&
          user=u45121201012002&
          algorithm=${algorithm}&
          image=${image}
        `);
        a.click();
      }
    }

  </script>
    
  <?php include "DynamicPage/footer.php" ?>

</body>

</html>