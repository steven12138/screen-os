<?php
include_once("error.php");
class database{
    private string $server = "localhost";//服务器地址，此处为本地回溯
    private string $dbUsername = "root";//数据库用户名
    private string $dbPassword = "1CSN9t2bJgaNdQ2I";//数据库密码
    private string $dbName = "ScreenOS";
    private mysqli $con;
    function __construct(){
        $this->con = new mysqli($this->server,$this->dbUsername,$this->dbPassword,$this->dbName);
        if($this->con->connect_error){
            echoMessage(CONNECTION_FAILED,$this->con->connect_error);
            $this->con->close();
            exit;
        }
    }
    function __destruct(){
        $this->con->close();
    }
    public function query($sql){
        return $this->con->query($sql);
    }
}
//Written By XBY