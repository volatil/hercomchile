<?php
$routes = [
    "/"                       => "Tienda@index",
    // "/tienda"                 => "Tienda@tienda",
    // "/buscar"                 => "Tienda@buscar",
    // "/carro"                  => "Tienda@carro",
    // "/direccion"              => "Tienda@direccion",
    // "/seguimiento-de-pedido"  => "Tienda@seguimientodepedido",
    // "/preguntas-frecuentes"   => "Tienda@preguntasfrecuentes",
    // "/contactanos"            => "Tienda@contactanos",
    // "/error404"               => "Tienda@error404",
    // "/pedido-finalizado"      => "Tienda@pedidofinalizado",
    // "/opiniones-de-clientes"  => "Tienda@opinionesdeclientes",
    // "/terminos-y-condiciones" => "Tienda@terminosycondiciones",
    
    "/cerebro"                 => "Cerebro@index",
    // "/cerebro/cerrarsesion"    => "Cerebro@cerrarsesion",
    // "/cerebro/loginHandler"    => "Cerebro@loginHandler",
    // "/cerebro/paginas"         => "Cerebro@paginas",
    // "/cerebro/formularios"     => "Cerebro@formularios",
    // "/cerebro/error404"        => "Cerebro@error404",
    // "/cerebro/configuraciones" => "Cerebro@configuraciones",
    // "/cerebro/ventas"          => "Cerebro@ventas",
    // "/cerebro/productos"       => "Cerebro@productos",
    // "/cerebro/compras"         => "Cerebro@compras",
];

// APIS TIENDA
// $routes["/producto/get"]     = "Tienda@api_get_producto_by_id";

return $routes;