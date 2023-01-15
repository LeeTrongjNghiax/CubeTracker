<?php
  if ($_GET['date'] != 'null' && $_GET['record'] != 'null')
    addAlgorithmRecord($conn, $_GET['date'], $_GET['user'], getAlgorithmIdByContent($conn, $_GET['algorithm']), $_GET['record']);
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
    let dateStr = `${records[i].id.substr(11, 4)}-${records[i].id.substr(9, 2)}-${records[i].id.substr(7, 2)} ${records[i].id.substr(5, 2)}:${records[i].id.substr(3, 2)}:${records[i].id.substr(1, 2)}`;
    let date = new Date(dateStr);
    document.querySelector(".recordTable").insertAdjacentHTML( 'beforeend', `<div class="row">
      <div class="no">${i + 1}</div>
      <div class="date">${dateStr}</div>
      <div class="record">${showFromSecond( records[i].time )}</div>
      <div class="state">${records[i].state}</div>
      <div class="delete">Delete</div>
    </div>`);
  }
</script>