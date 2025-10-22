---
id: vserver-linux-steamcmd
title: "VPS: Configuración de SteamCMD en Linux"
description: "Descubre cómo configurar SteamCMD en Linux para instalar servidores dedicados de juegos de forma eficiente y optimizar la gestión de tu servidor → Aprende más ahora"
sidebar_label: Configurar SteamCMD
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
SteamCMD es una herramienta esencial necesaria para instalar servidores dedicados de una gran variedad de juegos, incluyendo Palworld, Enshrouded y más. En esta guía, exploraremos el proceso de configuración inicial para instalar SteamCMD en tu servidor Linux. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar en otras distribuciones.

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS vía SSH. Usa nuestra [guía de Acceso Inicial SSH](vserver-linux-ssh.md) si necesitas ayuda para hacerlo.

## Instalando SteamCMD

Una vez que hayas accedido a tu servidor, necesitarás configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión **de línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente una variedad de archivos del taller de Steam y servidores dedicados.

Como es habitual en Linux, lo mejor es primero actualizar el sistema, ejecutando lo siguiente según la distro que uses:
```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

Ahora necesitarás instalar algunos paquetes. Estos se dividen de la siguiente manera:

- El paquete **software-properties-common** facilita la gestión de tu distro y fuentes de software independientes.
- SteamCMD es una herramienta de 32 bits, por lo que debe añadirse la arquitectura **i386** para que el software adecuado se instale en tu sistema y lo soporte.
- Dado que SteamCMD es propietario, esto también significa que necesitas el paquete **multiverse** o **non-free** dependiendo de tu distro Linux, ya que normalmente no están incluidos en el repositorio por defecto.

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian y otras distros no Debian
sudo apt-add-repository non-free
```

Ahora ejecuta el comando de actualización para asegurarte de que los cambios en los paquetes se lean y se instalen en tu sistema:
```
sudo apt update
```

Finalmente, puedes instalar SteamCMD ejecutando lo siguiente. Puede aparecer un aviso de acuerdo de licencia, que simplemente debes aceptar para continuar.
```
sudo apt install steamcmd
```

:::tip
Puedes verificar que la instalación de SteamCMD fue exitosa simplemente ejecutando `steamcmd`. Una vez cargado, el prompt debería mostrar `Steam>`. Puedes escribir `quit` para salir después.
:::

Con todo preparado e instalado, puedes continuar con el siguiente paso que implica instalar el servidor dedicado usando SteamCMD.

## Creando Usuario

Recomendamos mucho crear un usuario separado para usar SteamCMD. Ejecutar como root, como en la mayoría de los casos, no es recomendable por varias razones.

Usa el siguiente comando para crear un usuario llamado `steam` con una contraseña opcional de tu elección.

```
sudo useradd -m steam
sudo passwd steam # Contraseña opcional
```

Una vez creado el usuario, necesitarás ajustar el archivo `.bashrc` para dar acceso a la ruta `/usr/games` donde está SteamCMD. Esto se hace añadiendo una variable de entorno PATH extra.

Abre el archivo usando el editor nano ejecutando:
```
sudo nano /home/steam/.bashrc
```

Ahora baja hasta el final del archivo usando las flechas y añade la siguiente variable de entorno PATH:
```
export PATH="/usr/games/:$PATH"
```

Guarda el archivo y sal de nano usando `CTRL + X`, luego `Y` para confirmar y finalmente `ENTER`.

## Conclusión

Ya has configurado con éxito la funcionalidad básica de SteamCMD para tu servidor Linux. Ahora puedes proceder a instalar contenido de Steam usando el usuario `steam`.

Te recomendamos revisar las otras guías en esta sección que cubren la instalación de juegos específicos usando SteamCMD, que ya tienes configurado.

<InlineVoucher />