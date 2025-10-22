---
id: empyrion-becomeadmin
title: "Empyrion: Cómo ser Admin"
description: "Aprende a asignar permisos de administrador para tener control total del servidor y gestionar las funciones del juego de forma efectiva → Descúbrelo ahora"
sidebar_label: Ser admin
services:
  - gameserver-empyrion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Asignar permisos de administrador te permite una administración sencilla y completa con control total sobre tu servidor. Como administrador, puedes usar todas las opciones y funciones disponibles que ofrece el juego directamente desde el juego. A continuación, te explicamos todos los pasos que debes seguir para asignar permisos de administrador en tu servidor.  
<InlineVoucher />

## Localiza tu Steam64ID

Primero, necesitas localizar tu Steam64ID.  
Puedes usar esta herramienta: [SteamID Lookup](https://steamid.io/lookup).  
Luego, esta ID se ingresará en el archivo de configuración.

Aquí tienes un ejemplo de cómo obtener tu steamid introduciendo el enlace de tu perfil:

![](https://screensaver01.zap-hosting.com/index.php/s/3LQXKFg58qXCCHw/preview)

## Configura adminconfig

El archivo "**adminconfig.yaml**" que debes editar está ubicado en el directorio "**Saves**".  
Para abrir este directorio, sigue las instrucciones de la [Guía de acceso vía FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/XtfdjdgoxcqXsWx/preview)

Estos son los valores que vienen por defecto:

![](https://screensaver01.zap-hosting.com/index.php/s/Tpf23riFnGfZAsP/preview)

Ahora debes escribir el Steam64ID que seleccionaste antes después de "**Id:**".

![](https://screensaver01.zap-hosting.com/index.php/s/RHEr44CGsaLQWyY/preview)

Con "**Permission**" defines el rango que quieres asignar al usuario.  
Los rangos se asignan así:

Permission | Rango
-----|-------
3 | gamemaster
6 | moderador
9 | admin


## Conclusión

¡Felicidades, has configurado correctamente los permisos de administrador! Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, disponible todos los días para ayudarte. 🙂

<InlineVoucher />