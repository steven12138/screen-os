<?php

include_once("./error.php");
include_once("./connect.php");

function checkValue($value)
{
    if (!preg_match("/^((?!DELETE).)*$/", $value)) {
        echoMessage(ILLEAGAL_PATTERN, "NONONO1");
        exit;
    }
    if (!preg_match("/^((?!SELECT).)*$/", $value)) {
        echoMessage(ILLEAGAL_PATTERN, "NONONO2");
        exit;
    }
    if (!preg_match("/^((?!QUERY).)*$/", $value)) {
        echoMessage(ILLEAGAL_PATTERN, "NONONO3");
        exit;
    }
    if (!preg_match("/^((?!WHERE).)*$/", $value)) {
        echoMessage(ILLEAGAL_PATTERN, "NONONO");
        exit;
    }
    if (!preg_match("/^((?!UPDATE).)*$/", $value)) {
        echoMessage(ILLEAGAL_PATTERN, "NONONO");
        exit;
    }
    //---
    if (!preg_match("/^((?!delete).)*$/", $value)) {
        echoMessage(ILLEAGAL_PATTERN, "NONONO");
        exit;
    }
    if (!preg_match("/^((?!select).)*$/", $value)) {
        echoMessage(ILLEAGAL_PATTERN, "NONONO");
        exit;
    }
    if (!preg_match("/^((?!query).)*$/", $value)) {
        echoMessage(ILLEAGAL_PATTERN, "NONONO");
        exit;
    }
    if (!preg_match("/^((?!where).)*$/", $value)) {
        echoMessage(ILLEAGAL_PATTERN, "NONONO");
        exit;
    }
    if (!preg_match("/^((?!update).)*$/", $value)) {
        echoMessage(ILLEAGAL_PATTERN, "NONONO");
        exit;
    }
    return $value;
}
