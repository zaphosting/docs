---
id: dedicated-linux-jitsi
title: "Configura Jitsi Meet en un Servidor Linux - Hospeda tu Propia Plataforma de Videoconferencias"
description: "Descubre cómo configurar y ejecutar tu propio servidor seguro de videoconferencias Jitsi Meet para reuniones online fáciles y privadas → Aprende más ahora"
sidebar_label: Instalar Jitsi Meet
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Jitsi Meet es un software de videoconferencias open source con el que puedes montar tus propias videoconferencias en tu servidor. Una gran ventaja de Jitsi Meet es su manejo sencillo: solo necesitas un navegador (en móviles la App de Jitsi) y no tienes que iniciar sesión en servicios externos. Cada videoconferencia obtiene su propia URL para unirse a la reunión. Jitsi Meet es perfecto para videoconferencias incluso con personas que no tienen mucha experiencia.
Atención: Sin configuraciones adicionales, cualquiera que acceda al servidor Jitsi Meet puede iniciar sus propias videoconferencias en el servidor.



## Instalar Jitsi Meet en un Servidor Debian

A continuación te mostramos cómo instalar un servidor Jitsi Meet en un servidor Debian. Básicamente Jitsi Meet funciona en otros servidores Linux, por ejemplo con Ubuntu, y la instalación es muy similar.

### Preparativos

Para usar Jitsi Meet correctamente, deberías usar tu propio dominio para acceder al servidor Jitsi. Tiene sentido crear un subdominio propio para el servidor Jitsi Meet. Como ejemplo usamos el dominio meet.zap-testdomain.de.
Para dominios de ZAP-Hosting, tienes que crear una nueva entrada en la administración DNS. Introduce el nombre del subdominio en el campo "Nombre" y la dirección IP de tu servidor en el campo "Valor". En nuestro ejemplo pondremos "meet" en el campo Nombre y la IP del servidor de prueba ZAP donde instalaremos Jitsi Meet en el campo Valor: 185.239.239.49 (introduce la IP de tu servidor, no esta IP de ejemplo)


a un servidor Jitsi Meet vía la dirección IP. Sin embargo, para el certificado SSL se requiere un dominio. Sin dominio, el navegador mostrará una advertencia de seguridad.

Si el subdominio está configurado (puede tardar hasta 24 horas en activarse el cambio), puedes preparar tu servidor para la instalación.
Conéctate a tu servidor vía Putty o WinSCP.
Antes de continuar, asegúrate de que el servidor está actualizado. Si es necesario, cada comando debe ejecutarse con derechos de superusuario. Para ello añade "sudo" antes del comando (ejemplo: "sudo apt-get update")

```
$	apt-get update
```
```
$	apt-get upgrade
```

Si no hay firewall instalado en el servidor, puedes instalar uno, por ejemplo UFW:
```
$	apt install ufw
```

Haz las siguientes configuraciones en el firewall:

```
$	ufw allow OpenSSH
$	ufw allow 80/tcp
$	ufw allow 443/tcp
$	ufw allow 4443/tcp
$	ufw allow 10000/udp
```

Activa el firewall:
```
$	ufw enable
```

Comprueba el estado:
```
$	ufw status
```

### Instalación de Jitsi Meet

Para instalar Jitsi Meet, primero necesitas el paquete gnupg:
```
$	apt install gnupg
```

Después de instalar el paquete, se descarga la clave Jitsi-GPG y se añade la clave GPG:
```
$	wget https://download.jitsi.org/jitsi-key.gpg.key
```
```
$	apt-key add jitsi-key.gpg.key
```

Para instalar Jitsi Meet tienes que añadir el repositorio de Jitsi:
```
$	nano /etc/apt/sources.list.d/jitsi-stable.list
```

En el editor añade la siguiente línea. Luego guarda el cambio y cierra el editor:
```
$	deb https://download.jitsi.org stable/
```

Ahora puedes instalar Jitsi Meet. Se recomienda actualizar todos los paquetes instalados de nuevo:
```
$	apt update
```
```
$	apt install jitsi-meet
```

Durante la instalación te pedirán que introduzcas un nombre de host. Introduce el subdominio que creaste para tu servidor Jitsi Meet. En el ejemplo de nuestro servidor de prueba es: meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/jHEGSQARQrDKLoz/preview)


Confirma con "Ok". Se abrirá una nueva ventana preguntando si quieres crear un certificado TLS autofirmado o usar uno existente. Selecciona la opción "Generar un nuevo certificado autofirmado":

![](https://screensaver01.zap-hosting.com/index.php/s/QWmYp3gdXMnBdnC/preview)


La instalación de Jitsi Meet ya está completa y solo falta obtener el certificado TLS.
Instala el paquete Certbot:
```
$	apt apt install certbot
```

Ejecuta el script para la instalación del certificado TLS:
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

Durante la ejecución te pedirán que introduzcas una dirección de email que se enviará a letsencrypt.org. Introduce un email y confirma escribiendo.


Después de esto, Jitsi Meet debería estar completamente instalado y activo en tu servidor. Para probar si Jitsi Meet se instaló correctamente, simplemente introduce el subdominio que configuraste en la barra de URL de tu navegador. En este tutorial es:
```
https://meet.zap-testdomain.de
```

Si la página carga con Jitsi Meet, ya puedes empezar tu primera videoconferencia.