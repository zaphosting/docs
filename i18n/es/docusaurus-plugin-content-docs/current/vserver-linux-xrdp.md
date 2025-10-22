---
id: vserver-linux-xrdp
title: "VPS: Instalación de xRDP (Escritorio Remoto)"
description: "Descubre cómo configurar el acceso de escritorio remoto en servidores Ubuntu y Debian para una gestión y control más fácil → Aprende más ahora"
sidebar_label: Instalar xRDP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En Linux, normalmente hay una consola SSH por defecto para gestionar el servidor. En algunos casos puede ser más fácil usar una conexión de escritorio remoto, similar a Windows.  
Es posible hacer una post-instalación para la mayoría de las distribuciones Linux. En esta guía se explica para Ubuntu y Debian.  
<InlineVoucher />

:::info
Importante: Se debe usar al menos Ubuntu 18.04.X LTS (Bionic Beaver) o Debian 10 (Buster) como sistema operativo. Se recomiendan versiones más recientes. 
:::

## Instalando xRDP

Primero, el servidor debe actualizarse: 
```
// Debian
sudo apt update; sudo apt upgrade -y

// Ubuntu
sudo apt update; sudo apt upgrade -y
```

Después de la actualización, se instalarán los paquetes necesarios: 
```
// Debian
sudo apt install xfce4 xfce4-goodies xorg dbus-x11 x11-xserver-utils -y

// Ubuntu
sudo apt install ubuntu-desktop -y
```

Luego se puede instalar xRDP: 
```
// Debian
sudo apt install xrdp

// Ubuntu
sudo apt install xrdp
```

Después de la instalación, el estado debería mostrar "active": 
```
// Debian
sudo systemctl status xrdp

// Ubuntu
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/P3G4ztqbYjZZMGR/preview)

Si el estado está bien, aún hay que crear un usuario. Luego hay que reiniciar el servicio xRDP: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

Al terminar la configuración, puedes conectarte al root o al usuario correspondiente del servidor vía Escritorio Remoto.  
El puerto por defecto es: 3389

## Conexión

La conexión se puede hacer con cualquier herramienta RDP, conectando con IP:PUERTO.  
Al conectar te pedirá los datos de acceso: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/GHzrDz6Ct3TGDN2/preview)

Después de iniciar sesión con éxito verás el escritorio.  
Con Ubuntu se ve un poco diferente que con Debian:

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/tgkAEyQxXnrk3Qr/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/gtxmQcPACEZJce7/preview)


## Conclusión

¡Felicidades, has instalado XRDP con éxito! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días! 

<InlineVoucher />