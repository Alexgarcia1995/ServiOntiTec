<?php
class controller_coche {
    function __construct() {
        include(FUNCTIONS_USERS . "functions_coches.inc.php");
        //include(UTILS . "common.inc.php");
        include(UTILS . "upload.php");
        $_SESSION['module'] = "coche";
    }

    function form_coches() {
        require_once(VIEW_PATH_INC . "header.php");
        require_once(VIEW_PATH_INC . "menu.php");
        loadView('modules/coche/view/', 'create_coches.php');
        require_once(VIEW_PATH_INC . "footer.php");
    }
    function results_coches() {
        require_once(VIEW_PATH_INC . "header.php");
        require_once(VIEW_PATH_INC . "menu.php");
        loadView('modules/coche/view/', 'results_coches.php');
        require_once(VIEW_PATH_INC . "footer.php");
    }

function upload_coches() {
    if ((isset($_POST["upload"])) && ($_POST["upload"] == true)) {
        $result_avatar = upload_files();
        $_SESSION['result_avatar'] = $result_avatar;
        //echo debugPHP($_SESSION['result_avatar']); // show it   in alert(response) dropzone
    }
}
function alta_coches() {
    if ((isset($_POST['alta_users_json']))) {
        $jsondata = array();
        $usersJSON = json_decode($_POST["alta_users_json"], true);
        $result = validate_user($usersJSON);
    
        if (empty($_SESSION['result_avatar'])) {
            $_SESSION['result_avatar'] = array('resultado' => true, 'error' => "", 'datos' => '/Servidor_2DAW/Exercici_Alta_Dropdowns/media/default-avatar.png');
        }
        $result_avatar = $_SESSION['result_avatar'];
    
        if (($result['resultado']) && ($result_avatar['resultado'])) {
            $arrArgument = array(
                'Tipo' => ucfirst($result['datos']['Tipo']),
                'marca' => ucfirst($result['datos']['marca']),
                'matricula' => $result['datos']['matricula'],
                'title_date' => $result['datos']['title_date'],
                'Potencia' => $result['datos']['potencia'],
                'Combustible' => $result['datos']['combustible'],
                'kilometraje' => $result['datos']['kilometraje'],
                'Descripcion' => strtoupper($result['datos']['descripcion']),
                'interests' => $result['datos']['interests'],
                'avatar' => $result_avatar['datos']
            );
    
            /////////////////insert into BD////////////////////////
            $arrValue = false;

            $arrValue = loadModel(MODEL_USERS, "coche_model", "create_coche", $arrArgument);
            //echo json_encode($arrValue);
            //die();
    
            if ($arrValue)
                $mensaje = "Su registro se ha efectuado correctamente, para finalizar compruebe que ha recibido un correo de validacion y siga sus instrucciones";
            else
                $mensaje = "No se ha podido realizar su alta. Intentelo mas tarde";

            $_SESSION['user'] = $arrArgument;
            $_SESSION['msje'] = $mensaje;
            $callback = "../../coche/results_coches";
            $jsondata["success"] = true;
            $jsondata["redirect"] = $callback;
            echo json_encode($jsondata);
            exit;
        } else {
            //$error = $result['error'];
            //$error_avatar = $result_avatar['error'];
            $jsondata["success"] = false;
            $jsondata["error"] = $result['error'];
            $jsondata["error_avatar"] = $result_avatar['error'];
    
            $jsondata["success1"] = false;
            if ($result_avatar['resultado']) {
                $jsondata["success1"] = true;
                $jsondata["img_avatar"] = $result_avatar['datos'];
            }
            header('HTTP/1.0 400 Bad error', true, 404);
            echo json_encode($jsondata);
            //exit;
        }
     }
    
}

/////////////////////////////////////////////////// delete
function delete_coches(){
if (isset($_GET["delete"]) && $_GET["delete"] == true) {
    $_SESSION['result_avatar'] = array();
    $result = remove_files();
    if ($result === true) {
        echo json_encode(array("res" => true));
    } else {
        echo json_encode(array("res" => false));
    }
}
}
//////////////////////////////////////////////////////////////// load
function load_coches(){
//if (isset($_GET["load"]) && $_GET["load"] == true) {
    $jsondata = array();
    if (isset($_SESSION['user'])) {
        //echo ($_SESSION['user']);
        $jsondata["user"] = $_SESSION['user'];
    }
    if (isset($_SESSION['msje'])) {
        //echo $_SESSION['msje'];
        $jsondata["msje"] = $_SESSION['msje'];
    }
    echo json_encode($jsondata);
    exit;
}
//}
function close_session() {
    unset($_SESSION['user']);
    unset($_SESSION['msje']);
    $_SESSION = array(); // Destruye todas las variables de la sesión
    session_destroy(); // Destruye la sesión
}

/////////////////////////////////////////////////// load_data

function load_data_coches() {
    if ((isset($_POST["load_data"])) && ($_POST["load_data"] == true)) {
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
}

function load_countries_coches() {
    if ((isset($_POST["load_country"])) && ($_POST["load_country"] == true)) {
        $json = array();
        $url = 'http://www.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfCountryNamesByName/JSON';

        try {
            //throw new Exception();
            $json = loadModel(MODEL_USERS, "users_model", "obtain_countries", $url);
        } catch (Exception $e) {
            $json = array();
        }

        if ($json) {
            echo $json;
            exit;
        } else {
            $json = "error";
            echo $json;
            exit;
        }
    }
}

function load_provinces_coches() {
    if ((isset($_POST["load_provinces"])) && ($_POST["load_provinces"] == true)) {
        $jsondata = array();
        $json = array();

        try {
            $json = loadModel(MODEL_USERS, "users_model", "obtain_provinces");
        } catch (Exception $e) {
            $json = array();
        }

        if ($json) {
            $jsondata["provinces"] = $json;
            echo json_encode($jsondata);
            exit;
        } else {
            $jsondata["provinces"] = "error";
            echo json_encode($jsondata);
            exit;
        }
    }
}

function load_towns_coches() {
    if (isset($_POST['idPoblac'])) {
        $jsondata = array();
        $json = array();

        try {
            $json = loadModel(MODEL_USERS, "users_model", "obtain_towns", $_POST['idPoblac']);
        } catch (Exception $e) {
            showErrorPage(2, "ERROR - 503 BD", 'HTTP/1.0 503 Service Unavailable', 503);
        }

        if ($json) {
            $jsondata["towns"] = $json;
            echo json_encode($jsondata);
            exit;
        } else {
            $jsondata["towns"] = "error";
            echo json_encode($jsondata);
            exit;
        }
    }
}

}
