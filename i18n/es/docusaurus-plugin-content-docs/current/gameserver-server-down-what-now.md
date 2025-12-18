---
id: gameserver-server-down-what-now
title: 'Servidor de juegos: Servidor caído - ¿Y ahora qué?'
description: "Aprende a diagnosticar caídas de servidores de juegos analizando los archivos de registro para identificar errores y encontrar soluciones efectivas → Aprende más ahora"
sidebar_label: Caída del servidor - ¿Qué hacer?
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Si tu servidor de juegos está caído, puede haber muchas razones. **Es importante que no intentes reiniciarlo directamente, sino que primero eches un vistazo al archivo de registro. Normalmente hay **mensajes de error** que describen exactamente por qué el servidor se cayó. **Si reinicias el servidor directamente, el registro se regenera y el antiguo se borra. Entonces, lamentablemente, ya no podrás ver los errores.**

<InlineVoucher />

## Ver el archivo de registro

El archivo de registro se puede acceder fácilmente desde el menú a la izquierda.

![](https://screensaver01.zap-hosting.com/index.php/s/rTMjGQPGoijMCXQ/preview)

Después puedes verlo haciendo clic en el ojo verde. **Lo importante es que siempre abras el registro más reciente.
Lo puedes reconocer por la fecha o el nombre.

![](https://screensaver01.zap-hosting.com/index.php/s/Hc4cYQSj3c9Enpi/preview)

Una vez abierto, debes revisarlo en busca de errores (**Los errores suelen contener palabras como "Error", "Cant find", "Couldnt load"**)

En la siguiente captura tengo un ejemplo de un servidor Fivem con una clave de licencia incorrecta.

![](https://screensaver01.zap-hosting.com/index.php/s/pAwzNkHZBTtHds9/preview)

Luego podrías buscar este error, por ejemplo, en Google y ver si es conocido. Normalmente puedes encontrar la causa del error bastante rápido.

Si no encuentras nada sobre el error, puedes ir al Live Chat y enviar el error como texto o captura de pantalla.

## Archivo de registro sin contenido

Lamentablemente, esto también puede pasar. Si el archivo de registro está vacío, puede que no se haya creado porque el servidor se cayó directamente o se borró debido a un reinicio. En este caso solo puedes intentar reiniciarlo con la esperanza de que el error se genere de nuevo o que el servidor vuelva a funcionar.

## Sin solución en el live chat

Si no encontraste solución ni en Google ni en el live chat, hay 2 opciones. La primera sería abrir un ticket y dejar el servidor tal cual para que el soporte pueda revisarlo más a fondo.

La segunda opción sería restaurar una copia de seguridad o reinstalar el servidor.

### Variante 1 - Restaurar una copia de seguridad

Para restaurar una copia de seguridad, simplemente ve a Backups en el menú de la izquierda e importa la copia más reciente usando la flecha verde. Después tu servidor debería funcionar como siempre.

![](https://screensaver01.zap-hosting.com/index.php/s/j9C396QXtq8Pytx/preview)

### Variante 2 - Reinstalar el servidor

La reinstalación se puede iniciar en "Configuración" en el menú izquierdo. Después el servidor se reiniciará completamente al estado del primer día (además, también puedes resetear la configuración con "**Resetear todas las opciones**")

![](https://screensaver01.zap-hosting.com/index.php/s/2edwoTrn3We67SB/preview)

## Reinstalación sin éxito

Lamentablemente, este es el peor escenario posible. En ese caso solo queda que el servidor sea revisado vía chat o ticket, porque entonces es un problema más serio. Haremos todo lo posible para resolverlo rápido y que puedas usar tu servicio como siempre.

<InlineVoucher />