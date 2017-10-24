<?php
class controller_listcoches{
        function __construct() {
            //include(FUNCTIONS_LISTCOCHE . "functions_coches.inc.php");
            //include(UTILS . "common.inc.php");
            include(UTILS . "upload.php");
            $_SESSION['module'] = "listcoches";
        }
        /*
        function start_list(){
            require_once(VIEW_PATH_INC . "header.php");
            require_once(VIEW_PATH_INC . "menu.php");
            loadView('modules/listcoches/view/', 'list_coches.php');
            require_once(VIEW_PATH_INC . "footer.php");
        }
        function details_coches(){
            require_once(VIEW_PATH_INC . "header.php");
            require_once(VIEW_PATH_INC . "menu.php");
            loadView('modules/listcoches/view/', 'details_coches.php');
            require_once(VIEW_PATH_INC . "footer.php");
        }
        */
    function load_list(){
    //////////////////////////////////////////////////////////////// load
    //if (isset($_GET["load_coches"]) && $_GET["load_coches"] == true) {
        $arrValue = loadModel(MODEL_LISTCOCHE, "coche_model", "list_coches");
        
        echo json_encode($arrValue);
        exit;
    //}
}

    function scroll(){
    $jsondata=array();
    $jsondata["valor"]=1;
    echo json_encode($jsondata);
    exit;
    }


    function redirect_details(){
        $id = $_GET["aux"];
        $callback = "../../listcoches/details_coches/";
        $arrValue = loadModel(MODEL_LISTCOCHE, "coche_model", "list_coche",$id);   
        $_SESSION["id"] = $arrValue;
        
        if ($arrValue) {
        $jsondata = array();
        $jsondata["data"] = $arrValue;
        $jsondata["success"] = true;
        $jsondata["redirect"] = $callback;
        echo json_encode($jsondata);
        exit;
        }
        }
    function detailcoche(){
        $datos= $_SESSION["id"];
        echo json_encode($datos);
        exit;
    }
}

    /*///////////////////////////////////////////////////////////// Scroll
    if (isset($_GET["scroll"]) && $_GET["scroll"] == true) {
        $jsondata=array();
        $jsondata["valor"]=1;
        echo json_encode($jsondata);
        exit;
    }
    ////////////////////// Details
    if (isset($_GET["load_coche"]) && $_GET["load_coche"] != "") {
        //$path_model = $_SERVER['DOCUMENT_ROOT'] . '/Servidor_2DAW/Exercici_List_Detail/modules/List_Coches/model/model/';
        //$arrValue = loadModel($path_model, "coche_model", "list_coches");
        //echo $_GET["load_coche"];
        $_SESSION["id"] = $_GET["load_coche"];
        exit;
    }
    else {
      $jsondata = array();
      $jsondata["id"] = $_SESSION["id"];
      $path_model = $_SERVER['DOCUMENT_ROOT'] . '/Servidor_2DAW/Exercici_List_Detail/modules/List_Coches/model/model/';
      $arrValue = loadModel($path_model, "coche_model", "list_coche",$jsondata["id"]);
      echo json_encode($arrValue);
      exit;
    }
    
    ///////////// close_session
    function close_session() {
        unset($_SESSION['user']);
        unset($_SESSION['msje']);
        $_SESSION = array(); // Destruye todas las variables de la sesión
        session_destroy(); // Destruye la sesión
    }
    
    /////////////////////////////////////////////////// load_data
    if ((isset($_GET["load_data"])) && ($_GET["load_data"] == true)) {
        $jsondata = array();
    
        if (isset($_SESSION['user'])) {
            $jsondata["user"] = $_SESSION['user'];
            echo json_encode($jsondata);
            exit;
        } else {
            $jsondata["user"] = "";
            echo json_encode($jsondata);
            exit;
        }
    }
    
    if(  (isset($_GET["load_country"])) && ($_GET["load_country"] == true)  ){
            $json = array();
    
            $url = 'http://www.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfCountryNamesByName/JSON';
            $path_model=$_SERVER['DOCUMENT_ROOT'] . '/Servidor_2DAW/Exercici_Alta_Dropdowns/modules/Coches/model/model/';
            $json = loadModel($path_model, "coche_model", "obtain_countries", $url);
    
            if($json){
                echo $json;
                exit;
            }else{
                $json = "error";
                echo $json;
                exit;
            }
        }
    
    /////////////////////////////////////////////////// load_provinces
    if(  (isset($_GET["load_provinces"])) && ($_GET["load_provinces"] == true)  ){
            $jsondata = array();
            $json = array();
    
            $path_model=$_SERVER['DOCUMENT_ROOT'] . '/Servidor_2DAW/Exercici_Alta_Dropdowns/modules/Coches/model/model/';
            $json = loadModel($path_model, "coche_model", "obtain_provinces");
    
            if($json){
                $jsondata["provinces"] = $json;
                echo json_encode($jsondata);
                exit;
            }else{
                $jsondata["provinces"] = "error";
                echo json_encode($jsondata);
                exit;
            }
        }
    
    /////////////////////////////////////////////////// load_cities
    if(  isset($_POST['idPoblac']) ){
            $jsondata = array();
            $json = array();
    
            $path_model=$_SERVER['DOCUMENT_ROOT'] . '/Servidor_2DAW/Exercici_Alta_Dropdowns/modules/Coches/model/model/';
            $json = loadModel($path_model, "coche_model", "obtain_cities", $_POST['idPoblac']);
    
            if($json){
                $jsondata["cities"] = $json;
                echo json_encode($jsondata);
                exit;
            }else{
                $jsondata["cities"] = "error";
                echo json_encode($jsondata);
                exit;
            }
        }
    
}
