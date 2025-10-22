---
id: minecraft-addop
title: "Minecraft: Asignar derechos OP en el servidor"
description: "Descubre cómo asignar derechos OP a jugadores y gestionar permisos del servidor de forma efectiva para un mejor control del juego → Aprende más ahora"
sidebar_label: Permisos OP
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Asignar derechos OP

Para poder asignarte derechos OP a ti mismo o a otros jugadores, primero tienes que abrir la consola, siempre que ningún otro jugador tenga suficientes derechos OP hasta ahora, para que la asignación sea posible dentro del juego.

Para abrir la consola, primero debes acceder al servidor correspondiente a través del **panel**. En la interfaz del servidor encontrarás la entrada "Consola en vivo" en el lado izquierdo de la lista bajo la pestaña "INFORMACIÓN".

![](https://screensaver01.zap-hosting.com/index.php/s/PAaZQPXF75aW4Bi/preview)

Ahora deberías ver una ventana oscura que representa la consola del servidor. Debajo, verás un campo de entrada donde se pueden enviar comandos a la consola. Para asignar los derechos OP, debes escribir el comando "op jugador" (sin "/") en el campo de entrada y luego hacer clic en el botón verde "Enviar comando" para enviar el comando a la consola.

![](https://screensaver01.zap-hosting.com/index.php/s/myba237CL5XMfKi/preview)

Después de unos segundos, el comando enviado debería aparecer en la consola, seguido del mensaje "Made player a server operator", lo que indica que la acción fue exitosa. Ahora el jugador respectivo tiene todos los derechos OP y puede, por ejemplo, cambiar el modo de juego.

:::info
La distribución de derechos OP ahora también es posible directamente dentro del juego, por lo que deberías ajustar el nivel de permisos como se explica en el siguiente paso, si así lo deseas.
:::

## Nivel de permisos

Los derechos OP están divididos en cuatro niveles, siendo el nivel 4 el que se asigna por defecto. Cada nivel contiene diferentes permisos, lo que permite dividir los derechos según el tipo de jugador. Los permisos de cada nivel son los siguientes:

| Nivel | Descripción | Permisos |
| :-----: |:-------------:| :-----:|
| 1 | Moderador | Puede hacer cambios dentro del área protegida de spawn. |
| 2 | Gamemaster | Puede colocar y editar bloques de comandos, y ejecutar varios comandos de trampa (ej.: /gamemode). |
| 3 | Admin | Puede expulsar y banear jugadores, además de otros comandos que forman parte de la administración general del servidor. También puede nombrar operadores adicionales. |
| 4 | Propietario | Sin restricciones adicionales. |

:::info
Instalando un plugin de permisos como LuckPerms en tu servidor Bukkit/Spigot, puedes configurar los permisos de forma mucho más específica y detallada. También es posible crear múltiples grupos, lo que facilita la distribución de derechos.
:::

## Asignar nivel de permisos

Para ajustar el nivel de un jugador, primero debe ser nombrado Operador, como se explicó en "Asignar derechos OP". Para modificar el nivel, debes editar el archivo "ops.json" mediante conexión FTP.

Una vez establecida la conexión FTP con el servidor, navega hasta el directorio correspondiente del servidor. En nuestro caso, con FileZilla, haz clic derecho sobre el archivo y selecciona "Ver/Editar" en el menú que aparece.

![](https://screensaver01.zap-hosting.com/index.php/s/TTeL8WqnQfrdEDq/preview)

Ahora debes cambiar el valor de "level" al nivel deseado para el jugador correspondiente, y luego guardar el archivo con **CTRL+S**.

![](https://screensaver01.zap-hosting.com/index.php/s/WKQkAR3oALsSNAc/preview)

Para que los cambios tengan efecto, debes reiniciar el servidor, lo cual puedes hacer manteniendo presionado el botón rojo de Detener en la interfaz del servidor.

<InlineVoucher />