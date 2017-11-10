<?php
   function send_mailgun($arrArgument){
    $config = array();
    switch ($arrArgument['type']) {
        case 'alta':
            $subject = 'Tu Alta en FarmixShop';
            $ruta = "<a href='http://".$_SERVER['HTTP_HOST']."/ServiOntiTec/#/user/activar/" . $arrArgument['token'] . "'>aqu&iacute;</a>";
            $body = 'Gracias por unirte a nuestra aplicaci&oacute;n. Para finalizar el registro, pulsa ' . $ruta;
            break;
    
        case 'modificacion':
            $subject = 'Tu Nuevo Password en FarmixShop';
            $ruta = "<a href='http://".$_SERVER['HTTP_HOST']."/ServiOntiTec/#/user/cambiarpass/" . $arrArgument['token'] . "'>aqu&iacute;</a>";
            $body = 'Para recordar tu password pulsa ' . $ruta;
            break;
        case 'contact':
            $subject = 'Tu Petici&oacute;n a ServiOntiTec ha sido enviada<br>';
            $ruta = '<a href="http://'.$_SERVER['HTTP_HOST'].'/ServiOntiTec/#/"' .'>aqu&iacute;</a>';
            $body = $arrArgument['inputMessage'].'Para visitar nuestra web, pulsa ' . $ruta;
            break;
    
        case 'admin':
            $subject = $arrArgument['inputSubject'];
            $body = 'inputName: ' . $arr['inputName'] . '<br>' .
                    'inputEmail: ' . $arr['inputEmail'] . '<br>' .
                    'inputSubject: ' . $arr['inputSubject'] . '<br>' .
                    'inputMessage: ' . $arr['inputMessage'];
            break;
    }
  
    $html .= "<html>";
    $html .= "<head>";
    $html .= "<meta charset='utf-8' />
    <style>
            * {
                margin: 0;
                padding: 0;
                text-align: center;
              }

            body {
                margin: 0 auto;
                width: 600px;
                height: 300px;
            }
              
            header {
                padding: 20px;
                background-color: blue;
                color: white;
                padding-left: 20px;
                font-size: 25px;
            }
               
            section {
                padding-top: 50px;
                padding-left: 50px;
                margin-top: 3px;
                margin-bottom: 3px;
                height: 100px;
                background-color: ghostwhite;
              }
              
             footer {
                padding: 5px;
                padding-left: 20px;
                background-color: blue;
                color: white;
              }
        </style>";
    $html .= "</head>";
    $html .= "<body>";
    $html .= "<header>";
    $html .= "<p>" . $subject . "</p>";
    $html .= "</header>";
    $html .= "<section>";
    $html .= $body;
    $html .= "</section>";
    $html .= "<footer>";
    $html .= "<p>Enviado por JOINELDERLY</p>";
    $html .= "</footer>";
    $html .= "</body>";
    $html .= "</html>";
    
    
    $message = array();
    $message['from'] = "alexgarciasanz1995@gmail.com";
    $message['to'] = $arrArgument["inputEmail"];
    $message['h:Reply-To'] = "alexgarciasanz1995@gmail.com";
    $message['subject'] = "";
    $message['html'] = $html;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $config['api_url']);
    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($ch, CURLOPT_USERPWD, "api:{$config['api_key']}");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_POST, true); 
    curl_setopt($ch, CURLOPT_POSTFIELDS,$message);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}
