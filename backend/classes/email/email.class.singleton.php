<?php
    require(LIBS . 'PHPMailer_v5.1/class.phpmailer.php');
    require(LIBS . 'PHPMailer_v5.1/class.smtp.php');
    
    class email {
        private $body;
        private $address;
        private $subject;
        private $mail;
        private $name;
        static $_instance;
    
        private function __construct() {
            try {
                //$this->mail = new PHPMailer();
                $this->mail = new phpmailer();
                $this->mail->IsSMTP();
    
                $cnfg = parse_ini_file("email.ini");
    
                $this->mail->SMTPAuth = $cnfg['auth'];
                $this->mail->SMTPSecure = $cnfg['secure'];
                $this->mail->Host = $cnfg['host'];
                $this->mail->Port = $cnfg['port'];
                $this->mail->Username = $cnfg['email'];
                $this->mail->Password = $cnfg['pass'];
                $this->mail->AddReplyTo($cnfg['email'], $cnfg['defaultsubject']);
                $this->mail->SetFrom($cnfg['email'], $cnfg['defaultsubject']);
                $this->mail->addAttachment(IMG_RURAL_SHOP);
                
                $this->subject="RURAL_SHOP";
    
            } catch (phpmailerException $e) {
                //echo $e->errorMessage();
                $log = log::getInstance();
			    $log->add_log_general("error construct email.class.singleton.php", $_GET['module'], "response ".http_response_code()); 
			    $log->add_log_user("error construct email.class.singleton.php", "", $_GET['module'], "response ".http_response_code()); 
	
                throw new Exception();
            } catch (Exception $e) {
                //echo $e->getMessage();
                $log = log::getInstance();
			    $log->add_log_general("error construct email.class.singleton.php", $_GET['module'], "response ".http_response_code()); 
			    $log->add_log_user("error construct email.class.singleton.php", "", $_GET['module'], "response ".http_response_code());
	
                throw new Exception();
            }
        }
    
        public static function getInstance() {
            if (!(self::$_instance instanceof self))
                self::$_instance = new self();
            return self::$_instance;
        }
    
        public function __set($name, $value) {
            $this->$name = $value;
        }
    
        public function __get($name) {
            return $this->$name;
        }
    
        public function enviar() {
            try {
                $this->mail->Subject = $this->subject;
                $this->mail->MsgHTML($this->body);
                $this->mail->AddAddress($this->address, $this->name);
                $this->mail->IsHTML(true);
                
                $result = $this->send_mailgun($this->address);
                return $result;
                /*
                if($this->mail->Send()){
                    return 1;
                }else{
                    return 0;
                }
                */
            } catch (phpmailerException $e) {
                $log = log::getInstance();
			    $log->add_log_general("error enviar email.class.singleton.php", $_GET['module'], "response ".http_response_code()); 
			    $log->add_log_user("error enviar email.class.singleton.php", "", $_GET['module'], "response ".http_response_code());
			    
                return 0;
            } catch (Exception $e) {
                $log = log::getInstance();
			    $log->add_log_general("error enviar email.class.singleton.php", $_GET['module'], "response ".http_response_code()); 
			    $log->add_log_user("error enviar email.class.singleton.php", "", $_GET['module'], "response ".http_response_code());
			    
                return 0;
            }
        }
        
        public function send_mailgun($email){
        	$config = array();
            //$config['api_key'] = "key-0d32063a19d690be82da3bfeb69a9e3b"; //API Key
            //$config['api_key'] = "key-f8dfbcd3eced9cf4b65aea488565d3f9"; //API Key
            //$config['api_url'] = "https://api.mailgun.net/v2/sandbox1811da627e3e450ebabe2e836ed20a3a.mailgun.org/messages"; //API Base URL
            $config = array();
            $config['api_key'] = "key-eca8007a22c61d8ce7aa5d2a53e247ba"; //API Key
            $config['api_url'] = "https://api.mailgun.net/v3/sandbox41e60784f3ba4f1f90cf3a76d9e1a483.mailgun.org/messages"
            
            $message = array();
            $message['from'] = "alexgarciasanz1995@gmail.com";
            $message['to'] = $email;
            $message['h:Reply-To'] = "alexgarciasanz1995@gmail.com";
            $message['subject'] = $subject;
            $message['html'] = $body;
         
        	$ch = curl_init();
        	curl_setopt($ch, CURLOPT_URL, $config['api_url']);
        	curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        	curl_setopt($ch, CURLOPT_USERPWD, "api:{$config['api_key']}");
        	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
        	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        	curl_setopt($ch, CURLOPT_POST, true); 
        	curl_setopt($ch, CURLOPT_POSTFIELDS,$message);
        	$result = curl_exec($ch);
        	curl_close($ch);
        	return $result;
        }
    }
