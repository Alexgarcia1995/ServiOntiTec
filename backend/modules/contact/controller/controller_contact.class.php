
<?php   
    class controller_contact { 
        
        public function __construct() {
            $_SESSION['module'] = "contact";
        }

        
		public function process_contact() {
			$prueba = json_decode($_GET["aux"],true);
				//////////////// Send the email to client
				$arrArgument = array(
					'type' => 'contact',
					'token' => '',
					'inputName' => $prueba['inputName'],
					'inputEmail' => $prueba['inputEmail'],
					'inputMessage' => $prueba['inputMessage']
				);
					return send_mailgun($arrArgument);
					//die();
	
	
				//////////////// Send the email to admin of the app web
			// 	$arrArgument = array(
			// 		'type' => 'admin',
			// 		'token' => '',
			// 		'inputName' => $_POST['inputName'],
			// 		'inputEmail' => "joinelderly@gmail.com",
			// 		'inputSubject' => $_POST['inputSubject'],
			// 		'inputMessage' => $_POST['inputMessage']
			// 	);
			// 	set_error_handler('ErrorHandler');
			// 	try {
			// 		/*
			// 		if (enviar_email($arrArgument) && $value) {
			// 			echo "true|Tu mensaje ha sido enviado correctamente ";
			// 		} else {
			// 			echo  "false|Error en el servidor. Intentelo más tarde...";
			// 		}*/
					
			// 		sleep(5);
			// 		enviar_email($arrArgument);
			// 		echo "true|Tu mensaje ha sido enviado correctamente";
					
			// 	} catch (Exception $e) {
			// 		echo "false|Error en el servidor. Intentelo más tarde pecador";
			// 	}
			// 	restore_error_handler();
			// } else {
			// 	echo  "false|Error en el servidor. Intentelo más tarde ministro";
			// }
		}
    }