<?php
    function enviar_email($arr) {
        alert($arr);
        $html = '';
        $subject = '';
        $body = '';
        $ruta = '';
        $return = '';
        
        switch ($arr['type']) {
            case 'alta':
                $subject = 'Tu Alta en Rural_Shop';
                $ruta = "<a href='" . amigable("?module=login&function=activar&aux=A" . $arr['token'], true) . "'>aqu&iacute;</a>";
                $body = 'Gracias por unirte a nuestra aplicaci&oacute;n<br> Para finalizar el registro, pulsa ' . $ruta;
                break;
    
            case 'modificacion':
                $subject = 'Tu Nuevo Password en Rural_Shop<br>';
                $ruta = '<a href="' . amigable("?module=login&function=activar&aux=F" . $arr['token'], true) . '">aqu&iacute;</a>';
                $body = 'Para recordar tu password pulsa ' . $ruta;
                break;
                
            case 'contact':
                $subject = 'Tu Petici&oacute;n a Rural_Shop ha sido enviada<br>';
                $ruta = '<a href=' . 'https://php-mvc-oo-yomogan.c9.io/3_Framework/4_framework_contact/'. '>aqu&iacute;</a>';
                $body = 'Para visitar nuestra web, pulsa ' . $ruta;
                break;
    
            case 'admin':
                $subject = $arr['inputSubject'];
                $body = 'inputName: ' . $arr['inputName']. '<br>' .
                'inputEmail: ' . $arr['inputEmail']. '<br>' .
                'inputSubject: ' . $arr['inputSubject']. '<br>' .
                'inputMessage: ' . $arr['inputMessage'];
                break;
        }
        
        $html .= "<html>";
        $html .= "<body>";
	       $html .= "<h4>". $subject ."</h4>";
	       $html .= $body;
	       $html .= "<br><br>";
	       $html .= "<p>Sent by RURAL_SHOP</p>";
		$html .= "</body>";
		$html .= "</html>";

   //     set_error_handler('ErrorHandler');
        require_once(EMAIL . "email.class.singleton.php");
        try{
          
            $mail = email::getInstance();
            $mail->name = $arr['inputName'];
            if ($arr['type'] === 'admin')
                $mail->address = 'ruralshoponti@gmail.com';
            else
                $mail->address = $arr['inputEmail'];
            $mail->subject = $subject;
            $mail->body = $html;
        } catch (Exception $e) {
			$return = 0;
		}
	//	restore_error_handler();

        /*
        if ($mail->enviar()) {
            $return = 1;
        } else {
            $return = 0;
        }
        */
        $return = $mail->enviar();
        return $return;
    }
