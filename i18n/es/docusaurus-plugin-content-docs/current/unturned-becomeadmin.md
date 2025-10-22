---
id: unturned-becomeadmin
title: "Unturned: Cómo convertirte en admin del servidor"
description: "Descubre cómo asignar permisos de administrador para tener control total del servidor y mejorar la gestión dentro del juego → Aprende más ahora"
sidebar_label: Convertirse en admin
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Asignar permisos de administrador te permite una administración sencilla y completa con control total de tu servidor. Como administrador, puedes usar todas las opciones y funciones disponibles que ofrece el juego directamente desde dentro del juego. A continuación te explicamos todos los pasos que debes seguir para asignar permisos de administrador en tu servidor.  
<InlineVoucher />

## Preparativos

Para poder añadir admins en un servidor, es necesario editar un archivo de configuración. Para evitar problemas al aplicar los cambios, ¡asegúrate de que tu servidor esté detenido antes de empezar!

Además, se necesita la Steam ID (64) correspondiente para que el servidor pueda identificar al jugador. Puedes usar esta [herramienta](https://steamidfinder.com/) como ejemplo.  
Una vez en la página, normalmente puedes obtener la información requerida introduciendo el nombre del jugador.

![](https://screensaver01.zap-hosting.com/index.php/s/72YkRLBXE77NJQ5/preview)

## Abrir archivos de configuración

Hay dos formas de editar los archivos en un servidor.  
Una opción es usar el [acceso vía FTP](gameserver-ftpaccess.md).

La otra opción es usar el editor de configuración directamente en la interfaz web.  
En este caso, usaremos el editor integrado en la interfaz web. Para ello, abre el menú "Configs" en la barra lateral izquierda del servidor, dentro de la pestaña "Ajustes".  
![](https://screensaver01.zap-hosting.com/index.php/s/x872MGFpMLbTBj2/preview)

El sistema cargará todas las configuraciones disponibles y las listará. Ten un poco de paciencia, este proceso suele tardar unos segundos. Cuando todos los archivos de configuración estén cargados, debes editar el archivo "commands.dat". Solo tienes que hacer clic en el botón azul "Abrir archivo" para que se abra en el editor web.

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)

## Añadir admins

Ahora puedes nombrar admins o propietarios en la configuración. Ten en cuenta que el rango de propietario solo puede asignarse una vez.

Para asignar el rango de propietario, añade la siguiente línea nueva:

`owner Steam64IDReplacedHere //<-- Debe ser reemplazado por tu propia Steam64-ID`

Para añadir un administrador, simplemente reemplaza "owner" por "admin":

`admin Steam64IDReplacedHere //<-- Debe ser reemplazado por tu propia Steam64-ID`

![](https://screensaver01.zap-hosting.com/index.php/s/i6PpdsfK6spBECj/preview)

Después de asignar todos los rangos en la configuración, guarda el archivo haciendo clic en "Guardar". Ahora puedes reiniciar el servidor y todos los jugadores que hayas añadido en la configuración recibirán su rango automáticamente.

## Conclusión

¡Felicidades, has configurado con éxito los permisos de administrador! Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, que está disponible todos los días para asistirte. 🙂

<InlineVoucher />