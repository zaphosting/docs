---
id: dedicated-linux-steamcmd
title: "Servidor Dedicado: Configuración de SteamCMD en Linux"
description: "Descubre cómo configurar SteamCMD en servidores Linux para instalar servidores de juegos dedicados de forma eficiente → Aprende más ahora"
sidebar_label: Configurar SteamCMD
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

SteamCMD es una herramienta esencial necesaria para instalar servidores dedicados para una gran variedad de juegos, incluyendo Palworld, Enshrouded y más. En esta guía, exploraremos el proceso de configuración inicial para instalar SteamCMD en tu servidor Linux. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar para otras distribuciones.

## Preparación

Para comenzar, conéctate a tu servidor dedicado vía SSH. Usa nuestra [guía de acceso inicial SSH](vserver-linux-ssh.md) si necesitas ayuda para hacerlo.

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
- SteamCMD es una herramienta de 32 bits, por lo que se debe añadir la arquitectura **i386**, para que el software adecuado se instale en tu sistema y lo soporte.
- Dado que SteamCMD es propietario, también necesitas el paquete **multiverse** o **non-free** dependiendo de tu distro Linux, ya que normalmente no están incluidos en el repositorio por defecto.

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian y otras distros no Debian
sudo apt-add-repository non-free
```

Ahora ejecuta el comando de actualización para asegurarte de que los cambios en los paquetes se lean e instalen en tu sistema:

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

Con todo preparado e instalado, puedes proceder al siguiente paso, que implica instalar el servidor dedicado usando SteamCMD.

## Creando Usuario

Recomendamos encarecidamente crear un usuario separado para usar SteamCMD. Ejecutar como root, como en la mayoría de los casos, no es recomendable por varias razones.

Usa el siguiente comando para crear un usuario llamado `steam` con una contraseña opcional de tu elección.

```
sudo useradd -m steam
sudo passwd steam # Contraseña opcional
```

Una vez creado el usuario, necesitarás ajustar el archivo `.bashrc` para dar acceso a la ruta `/usr/games` donde está SteamCMD. Esto se hace añadiendo una variable de entorno PATH extra.

Abre el archivo con el editor nano ejecutando:

```
sudo nano /home/steam/.bashrc
```

Ahora baja hasta el final del archivo usando las flechas y añade la siguiente variable de entorno PATH:

```
export PATH="/usr/games/:$PATH"
```

Guarda el archivo y sal de nano usando `CTRL + X`, luego `Y` para confirmar y finalmente `ENTER`.

## Conclusión

Ahora has configurado con éxito la funcionalidad básica de SteamCMD en tu servidor Linux. Ya puedes proceder a instalar contenido de Steam usando el usuario `steam`.

Te recomendamos revisar las otras guías en esta sección, que cubren la instalación de juegos específicos usando SteamCMD, que ya tienes configurado.