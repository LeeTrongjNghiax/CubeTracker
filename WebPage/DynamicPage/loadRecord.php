<?php
  try {
    addAlgorithmRecord($conn, $_GET['date'], $_GET['user'], getAlgorithmIdByContent($conn, $_GET['algorithm']), $_GET['record']);
  } catch (\Throwable $th) {

  }    
?>

<script>
  let algorithm = "<?= $_GET['algorithm'] ?>";
  let algorithmId = "<?= getAlgorithmIdByContent($conn, $_GET['algorithm']) ?>";
  let image = "<?= $_GET['image'] ?>";
  let date = "<?= $_GET['date'] ?>";
  let record = "<?= $_GET['record'] ?>";
  let records = JSON.parse(`<?= getAllRecordFromAlgorithm($conn, getAlgorithmIdByContent($conn, $_GET['algorithm'])) ?>`);
  let isAlgorithm = <?= checkAlgorithmByContent($conn, $_GET['algorithm']); ?>;
  let isImage = <?= checkImageByContent($conn, $_GET['image']); ?>;

  if (isAlgorithm == 0) alert("Algorithm does not exist");
  else document.querySelector(".algorithm").innerHTML = "<?= $_GET['algorithm']; ?>";

  if (isImage == 0) alert("Image does not exist");
  else document.querySelector("#image").insertAdjacentHTML('beforeend', stringImageTo3DImage("<?= $_GET['image'] ?>") );

  for (let i = 0; i < records.length; i++) {
    let dateStr = `${records[i].id.substr(1, 4)}-${records[i].id.substr(5, 2)}-${records[i].id.substr(7, 2)} ${records[i].id.substr(9, 2)}:${records[i].id.substr(11, 2)}:${records[i].id.substr(13, 2)}`;
    document.querySelector(".recordTable").insertAdjacentHTML( 'beforeend', `<div class="row" id="${records[i].id}">
      <div class="no">${i + 1}</div>
      <div class="date">${dateStr}</div>
      <div class="record">${showFromSecond( records[i].time )}</div>
      <div class="state ${records[i].state}" onclick="changeRecordState(this)">${records[i].state}</div>
      <div class="delete" onclick="deleteRecord(this)">Delete</div>
    </div>`);
  }


  let ao5 = "<?= getAlgorithmRecordAO($conn, getAlgorithmIdByContent($conn, $_GET['algorithm']), 5) ?>";
  let ao12 = "<?= getAlgorithmRecordAO($conn, getAlgorithmIdByContent($conn, $_GET['algorithm']), 12) ?>";
  let mo5 = "<?= getAlgorithmRecordMO($conn, getAlgorithmIdByContent($conn, $_GET['algorithm']), 5) ?>";
  let currentTime = "<?= getCurrentAlgorithmRecord($conn, getAlgorithmIdByContent($conn, $_GET['algorithm'])) ?>";
  let bestTime = "<?= getBestAlgorithmRecord($conn, getAlgorithmIdByContent($conn, $_GET['algorithm'])) ?>";

  document.querySelector(".ao5").innerHTML = ao5;
  document.querySelector(".ao12").innerHTML = ao12;
  document.querySelector(".mo5").innerHTML = mo5;
  document.querySelector(".current-time").innerHTML = currentTime;
  document.querySelector(".best-time").innerHTML = bestTime;
  
</script>