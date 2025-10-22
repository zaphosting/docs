---
id: cs2-cstv
title: "CS2: CSTV "
description: "Descubre cómo transmitir partidas en vivo con retraso y grabación automática para espectadores y revive los partidos cuando quieras → Aprende más ahora"
sidebar_label: CSTV
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

CSTV ofrece la posibilidad de transmitir partidas en vivo con un pequeño retraso. Esto significa que personas externas que no están involucradas en el juego también pueden seguir lo que sucede en el servidor. Esta tecnología también se usa en los conocidos torneos de Counter-Strike para que los espectadores puedan disfrutar del espectáculo. Además, las transmisiones pueden guardarse automáticamente para que puedas verlas después cuando quieras.

<InlineVoucher />

## Activación

La activación del servicio CSTV se realiza a través del archivo de configuración **server.cfg**. Los comandos necesarios deben añadirse allí:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```

## Configuración

Los comandos anteriores son obligatorios para que el servidor maestro CSTV se active y sea accesible. Sin embargo, hay otros comandos para configuraciones avanzadas:

|            Comando            |                         Descripción                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Los espectadores pueden tomar el control como camarógrafos        |
| tv_allow_static_shots "0\|1" |    Usa cámaras con orientación fija para las tomas    |
|     tv_autorecord "0\|1"     | Graba automáticamente todas las partidas como demos CSTV. Todas las partidas se graban automáticamente, el formato del archivo demo es auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Intenta reconectar tras un timeout de red |
| tv_chattimelimit "segundos"  | Restringe a los espectadores a escribir solo cada x segundos |
|       tv_debug "0\|1"        |             Muestra información de depuración CSTV             |
|   tv_delaymapchange "0\|1"   | Retrasa el cambio de mapa hasta que la transmisión termine |
|      tv_maxclients "n"       |          Número máximo de clientes en el servidor CSTV          |
|        tv_maxrate "n"        | Ancho de banda máximo permitido para espectadores CSTV, 0 == ilimitado |
|        tv_msg "texto"        |           Envía un mensaje a todos los espectadores           |
|        tv_name "nombre"      | Nombre de host CSTV. Define el nombre CSTV que aparece en el navegador de servidores y en la barra de estado |
|       tv_nochat "0\|1"       |           Activa/Desactiva el chat CSTV           |
|    tv_password "contraseña"  |       Protege la transmisión CSTV con una contraseña       |
|     tv_record "nombrearchivo" |             Inicia la grabación de una demo CSTV             |
|           tv_stop            |                 Detiene la transmisión CSTV                 |
|        tv_stoprecord         |            Detiene la grabación de una demo CSTV             |
|           tv_title           |           Define el nombre de la transmisión CSTV           |

## Establecer la conexión

Si la función está activada en el servidor, el acceso es posible a través de la dirección IP y el puerto CSTV asignado en el servidor. Para conectarte, necesitas la consola dentro del juego. Allí puedes conectarte con el siguiente comando:

```
connect SERVERIP:27020
```

Las demos grabadas manual y automáticamente se almacenan en el directorio principal /gxxxxx/cs2/game/csgo) del servidor CS: GO. Estas se pueden descargar mediante el acceso FTP proporcionado. Si aún no sabes cómo acceder vía FTP, encontrarás instrucciones aquí: [Acceso vía FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)

Con la reproducción de demos desde el juego, la demo descargada se puede seleccionar mediante **Cargar** y comenzar con el botón **Reproducir**.

<InlineVoucher />