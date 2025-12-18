---
id: csgo-gotv
title: "CSGO: Información sobre GOTV"
description: "Descubre cómo GOTV permite transmisiones en vivo y grabaciones de repeticiones para mejorar la experiencia de los espectadores en CS:GO y juegos similares → Aprende más ahora"
sidebar_label: GOTV
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Guía Archivada
Este documento ha sido archivado. Los documentos se archivan cuando ya no son relevantes, son incorrectos o están desactualizados. Ha sido archivado por las siguientes razones:

Razón: CS:GO ya no se ofrece activamente ni se está desarrollando. CS2 es la continuación de CS:GO. Recomendamos cambiar a CS2.
::::



## ¿Qué es GOTV?


GOTV ofrece la posibilidad de transmitir partidas en vivo con un pequeño retraso. Esto significa que personas externas que no están involucradas en la partida también pueden seguir lo que sucede en el servidor. Esta tecnología también se usa en los conocidos torneos de Counter-Strike para que los espectadores puedan disfrutar del espectáculo. Además, las transmisiones pueden guardarse automáticamente para que puedas verlas después.

![](https://screensaver01.zap-hosting.com/index.php/s/qcewrMDCF2nzyie/preview)

<InlineVoucher />

## ¿Cómo usar GOTV?

Si la función está activada en el servidor, el acceso es posible a través de la dirección IP y el puerto GOTV asignado en el servidor. Para conectarte, necesitas la consola dentro del juego. Ahí puedes conectarte con el siguiente comando:

```
connect SERVERIP:27020
```


Las demos grabadas manual y automáticamente se almacenan en el directorio principal (gxxxxx / csgo / csgo /) del servidor de CS:GO. Estas pueden descargarse mediante el acceso FTP proporcionado. Si aún no sabes cómo acceder vía FTP, encontrarás instrucciones aquí: [Acceso vía FTP](gameserver-ftpaccess.md).


![](https://screensaver01.zap-hosting.com/index.php/s/enbMKLwNaeqdzxm/preview)



Con la reproducción de demos desde el juego, puedes seleccionar la demo descargada a través de **Cargar** y comenzar con el botón **Reproducir**.



## Instalación del servidor maestro GOTV

Para activar el servidor maestro GOTV, hay que añadir comandos faltantes en el archivo **server.cfg**. Estos son los siguientes comandos:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```



Los comandos anteriores son obligatorios para que el servidor maestro GOTV se active y sea accesible. Sin embargo, hay otros comandos para configuraciones avanzadas:

|            Comando            |                         Descripción                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Los espectadores pueden tomar el control como camarógrafos        |
| tv_allow_static_shots "0\|1" |    Usa cámaras con orientación fija para las tomas    |
|     tv_autorecord "0\|1"     | Graba automáticamente todas las partidas como demos GOTV. Todas las partidas se graban automáticamente, el formato del archivo demo es auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Intenta reconectar tras un timeout de red |
| tv_chattimelimit "segundos"  | Limita a los espectadores a escribir solo cada x segundos |
|       tv_debug "0\|1"        |             Muestra información de depuración de GOTV             |
|   tv_delaymapchange "0\|1"   | Retrasa el cambio de mapa hasta que la transmisión esté completa |
|      tv_maxclients "n"       |          Número máximo de clientes en el servidor GOTV           |
|        tv_maxrate "n"        | Ancho de banda máximo permitido para espectadores GOTV, 0 == ilimitado |
|        tv_msg "texto"         |           Envía un mensaje a todos los espectadores           |
|        tv_name "nombre"        | Nombre de host GOTV. Define el nombre GOTV que aparece en el navegador de servidores y en la barra de estado |
|       tv_nochat "0\|1"       |           Activa/Desactiva el chat de GOTV           |
|    tv_password "contraseña"    |       Protege la transmisión GOTV con contraseña        |
|     tv_record "nombrearchivo"     |             Inicia la grabación de una demo GOTV             |
|           tv_stop            |                 Detiene la transmisión GOTV                  |
|        tv_stoprecord         |            Detiene la grabación de una demo GOTV              |
|           tv_title           |           Define el nombre de la transmisión GOTV           |

<InlineVoucher />