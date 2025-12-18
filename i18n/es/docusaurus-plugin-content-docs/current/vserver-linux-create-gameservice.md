---
id: vserver-linux-create-gameservice
title: "VPS: Configura tu servidor dedicado de juegos como un servicio Linux"
description: "Descubre cómo crear y gestionar servicios Linux para servidores dedicados de juegos y asegurar un arranque automático y mantenimiento sencillo → Aprende más ahora"
sidebar_label: Configurar servicio Linux
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los servicios son una parte fundamental de Linux y se refieren a un proceso o aplicación que se ejecuta en segundo plano, ya sea una tarea predefinida o basada en eventos. Esto ofrece varios beneficios, incluyendo el arranque automático del servidor al iniciar, actualizaciones automáticas, gestión sencilla y acceso a los logs, ¡y mucho más! En esta guía, exploraremos el proceso para crear un servicio para tu servidor dedicado de juegos.

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS vía SSH. Usa nuestra [guía de acceso inicial SSH](vserver-linux-ssh.md) si necesitas ayuda para hacerlo.

También deberías seguir alguna de nuestras guías de servidores dedicados de juegos en esta sección para instalar y configurar un servidor de juegos en tu sistema Linux. En esta guía, usaremos el [servidor dedicado de Palworld](vserver-linux-palworld.md) como ejemplo, pero las instrucciones se pueden adaptar para todas nuestras guías.

## Creando un servicio

Comienza creando un nuevo archivo de servicio para el servidor dedicado de juegos que hayas configurado. Reemplaza `[your_game]` con el nombre que prefieras. Recomendamos usar el nombre del juego para mantener todo organizado, por eso usaremos `palworld.service`.
```
sudo nano /etc/systemd/system/[your_game].service
```

## Configurando el servicio

Con el editor nano abierto, copia el siguiente contenido base del archivo, que es una plantilla de servicio que puedes reutilizar. Tenemos dos versiones, una para guías que usan SteamCMD y otra para juegos que no usan SteamCMD.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="steamcmd" label="Juego con SteamCMD" default>

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/[your_server_folder]
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/[your_server_folder]' +login anonymous +app_update [your_game_steamid] +quit
ExecStart=/home/steam/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>

<TabItem value="regular" label="Juego regular">

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=gameservers
Group=gameservers
WorkingDirectory=/home/gameservers/[your_server_folder]
ExecStart=/home/gameservers/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>
</Tabs>

Vamos a desglosar el contenido del archivo para entenderlo mejor:
- `Description`: Puede ser cualquier cosa, útil para distinguir fácilmente el propósito del servicio.
- `User`: Siguiendo nuestras guías, deberías haber creado un usuario separado `steam` para usar con SteamCMD, o el usuario `gameservers` para juegos sin SteamCMD. Si no, debe ser el usuario que ejecutará el servicio.
- `WorkingDirectory`: Es la ruta al directorio principal que contiene todo lo que el servicio necesita.
- `ExecStartPre` (solo SteamCMD): Aquí configuramos el mismo comando de instalación de SteamCMD que antes, que se ejecutará cada vez que el servidor se reinicie para asegurarse de que esté actualizado. Debes copiarlo de la guía respectiva del servidor dedicado o reemplazar los valores manualmente con los del juego.
- `ExecStart`: Este campo determina la tarea predefinida que debe ejecutarse con el servicio. De nuevo, copia la ruta de la guía respectiva o reemplaza los valores para apuntar al archivo de inicio.

:::important Capa de compatibilidad Wine
Para juegos que requieren la capa de compatibilidad **Wine** para poder ejecutarse, debes incluir los comandos **xvfb-run** y **wine** dentro del parámetro `ExecStart`. Por ejemplo, para V-Rising:
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

También asegúrate de que tu comando de instalación SteamCMD en `ExecStartPre` incluya el parámetro `+@sSteamCmdForcePlatformType` si es necesario para forzar la versión de la plataforma.
:::

Con todos los valores adaptados a tu servidor dedicado de juegos, guarda el archivo y sal de nano usando `CTRL + X`, luego `Y` para confirmar y finalmente `ENTER`.

Usando nuestro ejemplo de Palworld, el archivo quedaría así:
```
[Unit]
Description=Palworld Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/Palworld-Server
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 +quit
ExecStart=/home/steam/Palworld-Server/PalServer.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

## Gestionando el servicio

Con el archivo de servicio creado, necesitas habilitarlo. En el ejemplo `palworld.service`, `[your_service]` se reemplaza por `palworld`.
```
sudo systemctl enable [your_service]
```

:::tip
Si en algún momento haces cambios en el archivo de servicio, asegúrate de ejecutar `systemctl daemon-reload` después para que los cambios tengan efecto.
:::

Ahora puedes iniciar el servidor con el comando `systemctl start`. De igual forma, puedes detener y reiniciar el servidor con comandos similares.
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

:::tip
Para ver detalles sobre el servicio, usa el comando `systemctl status`. Si necesitas logs para depurar, usa `journalctl -u [your_service].service` para ver los logs más recientes del servicio.
:::

Por último, si quieres evitar que el servicio se inicie automáticamente, simplemente deshabilítalo.
```
sudo systemctl disable [your_service]
```

## Conclusión

Ya configuraste con éxito un servicio para tu servidor dedicado de juegos. Ahora el servidor arrancará automáticamente al iniciar el VPS.

También aprendiste sobre el contenido del archivo de servicio y cómo gestionar el servicio con varios comandos.

<InlineVoucher />