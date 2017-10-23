<?php

class coche_model{
    private $bll;
    static $_instance;

    private function __construct() {
        include(BLL_LISTCOCHE. "coche_bll.class.singleton.php");
        $this->bll = coche_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }

    public function list_coches() {
        return $this->bll->list_coches_BLL();
    }
    public function list_coche($data) {
        return $this->bll->list_coche_BLL($data);
    }
}
