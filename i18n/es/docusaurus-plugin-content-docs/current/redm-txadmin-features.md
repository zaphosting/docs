---
id: redm-txadmin-features
title: "RedM: Interfaz txAdmin"
description: "Descubre cómo gestionar y monitorizar tu servidor de juegos RedM de forma eficiente con el panel web completo de txAdmin → Aprende más ahora"
sidebar_label: Interfaz txAdmin
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

txAdmin es un panel web completamente gratuito y con todas las funciones para gestionar y monitorizar tu servidor de juegos RedM. Ofrece un amplio rango de características diseñadas para que administrar un servidor RedM sea pan comido. En esta guía, te presentamos la interfaz de txAdmin, destacando sus funciones y explicando exactamente qué puedes hacer con ella.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)

<InlineVoucher />



## Navegación

El menú de navegación incluye los siguientes ítems: **Jugadores**, **Historial**, **Whitelist**, **Admins**, **Ajustes** y **Sistema**. Cada uno será explicado con más detalle a continuación.

### Jugadores

La sección Jugadores ofrece una visión general de las estadísticas de los jugadores, incluyendo el número total de jugadores que se han conectado, los jugadores conectados en las últimas 24 horas y los nuevos jugadores conectados en las últimas 24 horas y 7 días. Debajo encontrarás una lista de los jugadores conectados actualmente, junto con su tiempo total de juego, primera conexión y última conexión.

Haz clic en un jugador para acceder a opciones adicionales de gestión. Aquí puedes ver más información, notas, historial (baneos/advertencias), IDs (Identificadores de jugador, IDs de hardware del jugador) y las opciones de baneo.

![](https://screensaver01.zap-hosting.com/index.php/s/wpRc2sW6gZZaN3S/download)





### Historial

La sección Historial lista todas las advertencias y baneos emitidos a jugadores, junto con información detallada sobre el jugador, el motivo y quién emitió o ejecutó la advertencia/baneo, incluyendo fecha y hora. También puedes revocar advertencias y baneos desde aquí.

![](https://screensaver01.zap-hosting.com/index.php/s/qbLwEx39pmpY4sa/preview)

### Whitelist

En la sección Whitelist, tienes la opción de gestionar la función de lista blanca. La whitelist te permite restringir quién tiene acceso al servidor. Si esta opción está activada en los ajustes de txAdmin, se crea automáticamente una solicitud de whitelist cuando un nuevo jugador se conecta por primera vez. Luego puedes gestionar estas solicitudes en esta sección.

![](https://screensaver01.zap-hosting.com/index.php/s/o4K5zgGrz8G7Rqp/preview)

### Admins

En la sección Admins, puedes especificar y gestionar a los administradores. Puedes añadir nuevos admins haciendo clic en el botón **Añadir**. Esto abre una ventana emergente donde puedes crear la cuenta y asignar los permisos correspondientes.

![](https://screensaver01.zap-hosting.com/index.php/s/H7BYP2QqyZD6nSJ/download)

### Ajustes

En la sección Ajustes, puedes configurar un montón de opciones tanto para txAdmin como para el servidor en sí. Debido a la gran cantidad de configuraciones disponibles, están categorizadas en las siguientes secciones: **General**, **FXServer**, **Restarter**, **Player Manager**, **Discord** y **Game**. Cada una será explicada con más detalle a continuación.

![img](https://screensaver01.zap-hosting.com/index.php/s/9r44PictxZLad6c/download)

#### General

En General puedes configurar el nombre del servidor, el idioma de los mensajes de chat/Discord y las plantillas de baneos.

![](https://screensaver01.zap-hosting.com/index.php/s/y3WMSp5PPKyyDC2/preview)



#### FXServer

En FXServer puedes configurar la carpeta de datos del servidor y la ruta del archivo CFG, así como argumentos adicionales como activar modos de juego/DLCs, habilitar/deshabilitar OneSync, Autostart y Quietmode.

![img](https://screensaver01.zap-hosting.com/index.php/s/8s5rBzAN7nsRtqe/preview)



#### Baneos

En la sección Baneos puedes gestionar la función de baneos. Define si las cuentas se revisan activamente para comprobar su estado de baneo y qué mensaje se muestra si la conexión es rechazada por un baneo.

![img](https://screensaver01.zap-hosting.com/index.php/s/fTjM4EFbtB7cw4q/preview)

#### Whitelist

En Whitelist puedes gestionar la función de lista blanca. Define si quieres activar o desactivar la whitelist y qué mensaje se muestra si la conexión es rechazada por no estar en la whitelist.

![img](https://screensaver01.zap-hosting.com/index.php/s/6MyaBwRnroTSHbK/preview)

#### Discord

En Discord puedes activar la integración con Discord, permitiendo que la información se transmita automáticamente al servidor de Discord vinculado. Para activarlo, debes configurar los datos necesarios para el bot de Discord.

![img](https://screensaver01.zap-hosting.com/index.php/s/jSbXE9c23wjiKRf/preview)

#### Game

En Game puedes activar el menú txAdmin para uso dentro del juego, permitiendo que los admins accedan y gestionen el menú usando el comando /tx. También puedes definir opciones de personalización para el diseño, configuración de botones para alternar switches y notificaciones/advertencias.

![img](https://screensaver01.zap-hosting.com/index.php/s/fLo976YMdbYkHts/preview)

### Sistema

En la sección Sistema puedes ver algunas opciones generales importantes e información. Están categorizadas en las siguientes secciones: **Master Actions**, **Diagnósticos**, **Registro de Consola** y **Registro de Acciones**. Cada una será explicada con más detalle a continuación.



#### Master Actions

En Master Actions encontrarás la opción para reiniciar tu FXServer, hacer una copia de seguridad de la base de datos, limpiar la base de datos y definir cuándo eliminar jugadores de una whitelist si han estado inactivos demasiado tiempo.

![](https://screensaver01.zap-hosting.com/index.php/s/3A38EoqELeWMYJ6/download)



#### Diagnósticos

La sección Diagnósticos muestra toda la información relevante sobre el entorno, tiempo de ejecución de txAdmin, reporte de diagnósticos, FXServer /info.json y procesos.

![](https://screensaver01.zap-hosting.com/index.php/s/4Qg9MKwwnqFXwBd/preview)

#### Registro de Consola

El Registro de Consola muestra la salida de txAdmin en el terminal principal, incluyendo los mensajes de depuración que normalmente están ocultos.

![](https://screensaver01.zap-hosting.com/index.php/s/jsCerbambRn5DMy/preview)

#### Registro de Acciones

El Registro de Acciones muestra todas las acciones realizadas por txAdmin o cualquier Admin.

![](https://screensaver01.zap-hosting.com/index.php/s/P65fwKRSfjDZgdo/preview)



## Barra lateral

El menú de la barra lateral incluye los siguientes ítems: **Panel**, **Consola en Vivo**, **Recursos**, **Registro del Servidor** y **Editor CFG**. Cada uno será explicado con más detalle a continuación.



### Panel

El panel muestra toda la información general esencial sobre el servidor. Puedes monitorizar datos en vivo sobre uso y rendimiento a través de las estadísticas. El estado del servidor, ya sea iniciado, online o detenido, es visible en la barra lateral. Desde ahí también puedes iniciar, detener o reiniciar el servidor, expulsar a todos los jugadores con un clic y enviar anuncios. Además, puedes programar reinicios automáticos. En el lado derecho de la barra lateral, puedes ver información sobre los jugadores conectados actualmente.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)



### Consola en Vivo

La Consola en Vivo te ofrece información en tiempo real sobre las actividades del servidor. Aquí puedes ver detalles sobre actividades, advertencias y mensajes de error. Es un punto de referencia valioso para depurar problemas analizando posibles mensajes de error.

![](https://screensaver01.zap-hosting.com/index.php/s/PDyPa7TfsHgTbAD/preview)

### Recursos
En la sección Recursos encontrarás un resumen de todos los recursos, ya sean preinstalados vía plantilla (receta) o añadidos por ti después. También puedes reiniciarlos o detenerlos según necesites.

![](https://screensaver01.zap-hosting.com/index.php/s/QJZnMTCqQpx92EL/preview)

### Registro del Servidor

El registro del servidor te permite monitorizar todas las actividades en el servidor. Por ejemplo, puedes ver detalles como cuándo los jugadores se conectan o desconectan, mensajes de chat, muertes en el juego, acciones en menús, comandos ejecutados y eventos del sistema.

![](https://screensaver01.zap-hosting.com/index.php/s/zgBGMQq3stNkstq/preview)



### Editor CFG

Puedes usar el editor CFG para gestionar y actualizar el archivo de configuración `server.cfg` de tu servidor. Aquí encontrarás todos los comandos de configuración esenciales que controlan los ajustes de tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/jqDBDqp55HoKmNB/preview)


<InlineVoucher />