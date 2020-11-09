<?php
include_once('./connect.php');
$dvc = $_GET["device"];
$db = new database();
$sql = "SELECT * FROM `playlist` WHERE `device`='$dvc' ORDER BY id";
$res = $db->query($sql);
if ($res->num_rows < 1) {
    echo json_encode(array("ret" => SUCCESS, "data" => array()));
    exit;
}
$fin_res = array();
while ($row = $res->fetch_assoc()) {
    array_push($fin_res, array("url"=>$row["url"],"type"=>$row["type"]));
}

echo json_encode(array("ret" => SUCCESS, "data" => $fin_res));
unset($db);
