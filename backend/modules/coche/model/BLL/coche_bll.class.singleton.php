<?php
class coche_bll {
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        include(DAO_USERS . "coche_dao.class.singleton.php");
        include(MODEL_PATH . "Db.class.singleton.php");
        $this->dao = cocheDAO::getInstance();
        $this->db = Db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }

    public function create_coche_BLL($arrArgument) {
        return $this->dao->create_coche_DAO($this->db, $arrArgument);
    }
    public function obtain_countries_BLL($url){
      return $this->dao->obtain_countries_DAO($url);
    }

    public function obtain_provinces_BLL(){
      return $this->dao->obtain_provinces_DAO();
    }

    public function obtain_cities_BLL($arrArgument){
      return $this->dao->obtain_cities_DAO($arrArgument);
    }
}
