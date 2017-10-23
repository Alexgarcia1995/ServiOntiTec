<?php
class coche_bll {
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        include(DAO_LISTCOCHE . "coche_dao.class.singleton.php");
        include(MODEL_PATH . "Db.class.singleton.php");
        $this->dao = cocheDAO::getInstance();
        $this->db = Db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }

    public function list_coches_BLL() {
        return $this->dao->list_coches_DAO($this->db);
    }
    public function list_coche_BLL($data) {
        return $this->dao->list_coche_DAO($this->db,$data);
    }

}
