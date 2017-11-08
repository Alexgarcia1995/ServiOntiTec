<?php
//SITE_ROOT
$path = $_SERVER['DOCUMENT_ROOT'] . '/ServiOntiTec/backend/';
define('SITE_ROOT', $path);

//SITE_PATH
define('SITE_PATH', 'http://' . $_SERVER['HTTP_HOST'] . '/ServiOntiTec/backend/');

//CSS
define('CSS_PATH', SITE_PATH . 'view/assets/css/');

//JS
define('JS_PATH', SITE_PATH . 'view/assets/js/');

//IMG
define('IMG_PATH', SITE_PATH . 'view/images/');


define('EMAIL',SITE_ROOT.'classes/email/');

define('LIBS',SITE_ROOT.'libs/');

//log
define('USER_LOG_DIR', SITE_ROOT . 'log/user/Site_User_errors.log');
define('GENERAL_LOG_DIR', SITE_ROOT . 'log/general/Site_General_errors.log');

define('PRODUCTION', true);

//model
define('MODEL_PATH', SITE_ROOT . 'model/');
//view
define('VIEW_PATH_INC', SITE_ROOT . 'view/inc/');
define('VIEW_PATH_INC_ERROR', SITE_ROOT . 'view/inc/templates_error/');
//modules
define('MODULES_PATH', SITE_ROOT . 'modules/');
//resources
define('RESOURCES', SITE_ROOT . 'resources/');
//media
define('MEDIA_PATH', SITE_ROOT . 'media/');
//utils
define('UTILS', SITE_ROOT . 'utils/');

//model users
define('FUNCTIONS_USERS', SITE_ROOT . 'modules/coche/utils/');
define('MODEL_PATH_USERS', SITE_ROOT . 'modules/coche/model/');
define('DAO_USERS', SITE_ROOT . 'modules/coche/model/DAO/');
define('BLL_USERS', SITE_ROOT . 'modules/coche/model/BLL/');
define('MODEL_USERS', SITE_ROOT . 'modules/coche/model/model/');
define('USERS_JS_PATH', SITE_PATH . 'modules/coche/view/js/');

//model products
define('UTILS_LISTCOCHE', SITE_ROOT . 'modules/listcoches/utils/');
define('LISTCOCHE_JS_LIB_PATH', SITE_PATH . 'modules/listcoches/view/lib/');
define('LISTCOCHE_JS_PATH', SITE_PATH . 'modules/listcoches/view/js/');
define('MODEL_PATH_LISTCOCHE', SITE_ROOT . 'modules/listcoches/model/');
define('DAO_LISTCOCHE', SITE_ROOT . 'modules/listcoches/model/DAO/');
define('BLL_LISTCOCHE', SITE_ROOT . 'modules/listcoches/model/BLL/');
define('MODEL_LISTCOCHE', SITE_ROOT . 'modules/listcoches/model/model/');

//model contact
define('CONTACT_JS_PATH', SITE_PATH . 'modules/contact/view/js/');
define('CONTACT_CSS_PATH', SITE_PATH . 'modules/contact/view/css/');
define('CONTACT_LIB_PATH', SITE_PATH . 'modules/contact/view/lib/');
define('CONTACT_IMG_PATH', SITE_PATH . 'modules/contact/view/img/'); 
define('CONTACT_VIEW_PATH', SITE_PATH . 'modules/contact/view/');
//amigables
define('URL_AMIGABLES', TRUE);
//model users
define('UTILS_USER', SITE_ROOT . '/modules/user/utils/');
define('MODEL_USER', SITE_ROOT . '/modules/user/model/model/');
define('BLL_USER', SITE_ROOT . '/modules/user/model/bll/');
define('DAO_USER', SITE_ROOT . '/modules/user/model/dao/');
