<?php
    // include_once( $_SERVER["DOCUMENT_ROOT"] . "/controllers/DB.class.php" );
    // include_once( $_SERVER["DOCUMENT_ROOT"] . "/utils/helpers.php" );
    
    // LOGS DE ERRORES
        date_default_timezone_set('America/Santiago');
        ini_set('log_errors', 'On');
        ini_set('error_log', $_SERVER["DOCUMENT_ROOT"] . "/logs.log");
    // /LOGS DE ERRORES
    
    // CARGAR LAS RUTAS
        $routes = require $_SERVER["DOCUMENT_ROOT"] . '/controllers/routes.php';
    // /CARGAR LAS RUTAS
    
    // OBTENER LA URL SOLICITADA
        $requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    // /OBTENER LA URL SOLICITADA
    
    // NORMALIZAR: QUITAR SLASH FINAL EXCEPTO SI ES SOLO "/"
        if ( $requestUri !== "/" && substr( $requestUri, -1 ) === "/" ) {
            $requestUri = rtrim( $requestUri, "/" );
        }
    // /NORMALIZAR: QUITAR SLASH FINAL EXCEPTO SI ES SOLO "/"
    
    // MANEJO DE ERRORES
        if ( !isset( $routes[ $requestUri ] ) ) {
            require_once( $_SERVER['DOCUMENT_ROOT'] . "/controllers/Tienda.class.php" );
            ( new Tienda() )->error404();
            exit();
        }
    // /MANEJO DE ERRORES
    
    list($controller, $method) = explode('@', $routes[$requestUri]);
    
    // Cargar el controlador
    require_once( $_SERVER['DOCUMENT_ROOT'] . "/controllers/$controller.class.php" );
    ( new $controller() )->$method();
?>