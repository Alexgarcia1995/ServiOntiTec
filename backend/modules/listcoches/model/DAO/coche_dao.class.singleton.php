<?php
class cocheDAO {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }

    public function list_coches_DAO($db) {
        //echo "Pepe";
        $sql = "SELECT * FROM vehiculo";
        $stmt= $db->ejecutar($sql);
        return $db->listar($stmt);
      }
      public function list_coche_DAO($db,$data) {
          //echo "Pepe";
          //echo $data;
          $sql = "SELECT * FROM vehiculo WHERE Matricula ='$data'"  ;
          $stmt= $db->ejecutar($sql);
          return $db->listar($stmt);
        }
}
