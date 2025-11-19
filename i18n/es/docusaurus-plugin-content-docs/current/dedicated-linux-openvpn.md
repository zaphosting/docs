---
id: dedicated-linux-openvpn
title: "Servidor Dedicado: Instalación de OpenVPN"
description: "Descubre cómo asegurar tu conexión a internet y acceder a contenido restringido usando OpenVPN en servidores Linux → Aprende más ahora"
sidebar_label: Instalar OpenVPN
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

OpenVPN es un software VPN potente y versátil que permite una conexión segura a través de Internet. Es una solución de código abierto que ofrece tecnología VPN robusta y configurable para establecer una conexión cifrada entre tu dispositivo y un servidor VPN. Usando OpenVPN, los usuarios pueden asegurar su conexión a internet, proteger su privacidad en línea y acceder a contenido geo-restringido sin importar dónde estén en el mundo. En esta guía, exploraremos el proceso de instalación y configuración del servicio **OpenVPN** en un servidor Linux.

## Preparación

Primero que nada, el controlador de red **TUN** debe estar activado. Este paso no es necesario para servidores root.  
Para hacerlo, tienes que crear un nuevo archivo llamado **tunscript.sh** en la carpeta **/usr/sbin**.

```
nano /usr/sbin/tunscript.sh 
```

Luego inserta las siguientes líneas:
```
#!/bin/bash
mkdir /dev/net
mknod /dev/net/tun c 10 200
chmod 0666 /dev/net/tun
```

Guarda el archivo presionando `CTRL+O`, luego `Y` y finalmente `Enter`. Para salir del archivo presiona `CTRL+X`. Después ejecuta el siguiente comando:

```
chmod +x /usr/sbin/tunscript.sh
```

Una vez hecho esto, ejecuta ``crontab -e`` y selecciona el **editor nano** [1]. Añade esta línea al final del archivo:
``` @reboot /usr/sbin/tunscript.sh || exit 1 ```

Guarda el archivo presionando `CTRL+O`, luego `Y` y finalmente `Enter`. Para salir del archivo presiona `CTRL+X`. Deberías poder continuar después de un reinicio.

## Instalación

Para instalar OpenVPN, ejecuta el siguiente comando en la consola:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Aparecerá un diálogo preguntando si quieres usar UDP o TCP. Recomendamos UDP, así que escribe `1` y presiona `Enter`. Luego te preguntarán por un puerto para OpenVPN, recomendamos usar el puerto por defecto.

Después, tienes que configurar el servidor DNS. Recomendamos usar Google Public DNS o Cloudflare DNS:
```
8.8.8.8 / 8.8.4.4 - Google Public DNS
1.1.1.1 / 1.0.0.1 - Cloudflare DNS
```

Luego de este paso, debes definir un nombre para el cliente. Puedes poner cualquier nombre que quieras, por ejemplo el nombre de tu dispositivo.

## Configuración

### Añadir más clientes

Si quieres crear múltiples conexiones, es útil crear varias cuentas. Para crear otra cuenta, ejecuta el siguiente comando:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Selecciona `1` y confirma. Ahora debes definir el nombre del cliente.

### Eliminar clientes

Ejecuta el siguiente comando para eliminar un cliente:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Selecciona el número del cliente en tu lista que quieres eliminar. Luego presiona `Enter`. Se te pedirá confirmar la eliminación. Si estás seguro, presiona `Y` y luego `Enter`.  
El cliente debería eliminarse en este punto.

## Desinstalación

Si ya no necesitas OpenVPN, puedes desinstalarlo así:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```
Presiona `3` y confirma. Confirma una vez más y OpenVPN se desinstalará.

## Conectarse a la VPN

Si quieres conectarte a tu VPN, recomendamos usar el **[cliente OpenVPN](https://openvpn.net/community-downloads/)**. Simplemente descárgalo en el dispositivo desde el que quieras conectarte.

Conéctate vía SFTP a tu servidor para descargar el archivo .ovpn creado y luego elimina el archivo en tu servidor. Una vez instalado el cliente, inicia el programa. Haz clic derecho en el icono de OpenVPN en la barra de tareas. Luego haz clic en 'Importar archivo' y selecciona el archivo que descargaste antes y haz clic en 'Abrir'. Para conectarte, haz clic de nuevo en el icono y selecciona "Conectar".

:::info
En caso de que hayas importado varios archivos, debes seleccionar el cliente que quieres usar y luego hacer clic en Conectar.
:::