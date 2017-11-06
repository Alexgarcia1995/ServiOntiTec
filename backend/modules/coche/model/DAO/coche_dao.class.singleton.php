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

    public function create_coche_DAO($db, $arrArgument) {
        $Tipo = $arrArgument['Tipo'];
        $marca = $arrArgument['marca'];
        $matricula = $arrArgument['matricula'];
        $title_date = $arrArgument['title_date'];
        $Potencia = $arrArgument['Potencia'];
        $Combustible = $arrArgument['Combustible'];
        $kilometraje = $arrArgument['kilometraje'];
        $Descripcion = $arrArgument['Descripcion'];
        //$en_lvl = $arrArgument['en_lvl'];
        $interests = $arrArgument['interests'];
        $avatar = $arrArgument['avatar'];

        $abs = 0;
        $dsc = 0;
        $esp = 0;
        $direccion = 0;

        foreach ($interests as $indice) {
            if ($indice === 'ABS')
                $abs = 1;
            if ($indice === 'DSC')
                $dsc = 1;
            if ($indice === 'ESP')
                $esp = 1;
            if ($indice === 'Direccion_asistida')
                $direccion = 1;
        }

        $sql = "INSERT INTO vehiculo (Tipo,marca,Matricula,Fecha_compra,Potencia,Combustible,
        kilometraje,Descripcion,ABS,DSC,ESP,Direccion_asistida,avatar)
        VALUES ('$Tipo', '$marca', '$matricula',
          '$title_date', '$Potencia', '$Combustible', '$kilometraje',
          '$Descripcion', '$abs', '$dsc', '$esp', '$direccion', '$avatar')";

        return $db->ejecutar($sql);
    }
    public function obtain_countries_DAO($url){
          $ch = curl_init();
          curl_setopt ($ch, CURLOPT_URL, $url);
          curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
          curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, 5);
          $file_contents = curl_exec($ch);

          $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
          curl_close($ch);
          $accepted_response = array(200, 301, 302);
          if(!in_array($httpcode, $accepted_response)){
            return FALSE;
          }else{
            return ($file_contents) ? $file_contents : FALSE;
          }
    }

    public function obtain_provinces_DAO(){
          $json = array();
          $tmp = array();
          
          $provincias = simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/Servidor_2DAW/Exercici_Alta_Dropdowns/resources/provinciasypoblaciones.xml');
          $result = $provincias->xpath("/lista/provincia/nombre | /lista/provincia/@id");
          for ($i=0; $i<count($result); $i+=2) {
            $e=$i+1;
            $provincia=$result[$e];

            $tmp = array(
              'id' => (string) $result[$i], 'nombre' => (string) $provincia
            );
            array_push($json, $tmp);
          }
              return $json;

    }

    public function obtain_cities_DAO($arrArgument){
          $json = array();
          $tmp = array();

          $filter = (string)$arrArgument;
          $xml = simplexml_load_file($_SERVER['DOCUMENT_ROOT'].'/Servidor_2DAW/Exercici_Alta_Dropdowns/resources/provinciasypoblaciones.xml');
          $result = $xml->xpath("/lista/provincia[@id='$filter']/localidades");

          for ($i=0; $i<count($result[0]); $i++) {
              $tmp = array(
                'poblacion' => (string) $result[0]->localidad[$i]
              );
              array_push($json, $tmp);
          }
          return $json;
    }
}
