<?php
define("INVALID_JWT", 103);
define("CONNECTION_FAILED", 502);
define("SUCCESS", 200);
define("POST_NOT_SET", 401);
define("USERNAME_NOT_EXISTED", 404);
define("LOGIN_ERROR", 403);
define("ACCESS_DENIED", 203);
define("COOKIE_INVALID", 201);
define("QUERY_ERROR", 510);
define("MULTIPLE_SID", 202);
define("NO_RESULT", 500);
define("FILE_ERROR", 504);
define("FILE_TYPE_ERROR", 505);
define("FILE_SAVE_ERROR", 506);
define("EMPTY_TABLE", 412);
define("INVALID_SIGNUP", 240);
define("TIME_INVALID", 251);
define("WRONG_OLD_PASS", 525);
define("ILLEAGAL_PATTERN", 13);
define("SK_SUCCESS", 15);
define("IT_SUCCESS", 16);
define("ALL_SUCCESS", 17);

function echoMessage($errorCode, $des)
{ //返回一个信息
    $ret = array('ret' => $errorCode, 'des' => $des);
    echo json_encode($ret);
}
//Written By XBY