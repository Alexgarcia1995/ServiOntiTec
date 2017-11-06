<?php
class controller_Home {

    function __construct() {
        //include(UTILS . "common.inc.php");
    }

    function begin() {
        require_once(VIEW_PATH_INC . "header.php");
        require_once(VIEW_PATH_INC . "menu.php");

        loadView('modules/Home/view/', 'home.php');

        require_once(VIEW_PATH_INC . "footer.php");
    }

}

