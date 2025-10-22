---
id: vserver-linux-jitsi
title: "VPS: Instalación de Jitsi Meet"
description: "Descubre cómo montar tu propio servidor seguro y fácil de usar de videoconferencias Jitsi Meet en Debian para reuniones online sin complicaciones → Aprende más ahora"
sidebar_label: Instalar Jitsi Meet
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Jitsi Meet es un software de videoconferencia open source con el que puedes montar tus propias videoconferencias en tu servidor. Una gran ventaja de Jitsi Meet es su manejo sencillo: solo necesitas un navegador (en móviles la app de Jitsi) y no tienes que iniciar sesión en servicios externos. Cada videoconferencia tiene su propia URL para unirse. Jitsi Meet es perfecto para videoconferencias incluso con gente que no tiene mucha experiencia.
Atención: Sin configuraciones adicionales, cualquiera que acceda al servidor de Jitsi Meet puede iniciar sus propias videoconferencias en el servidor.

<InlineVoucher />

## Instalar Jitsi Meet en un servidor Debian

A continuación te mostramos cómo instalar un servidor Jitsi Meet en un servidor Debian. Básicamente Jitsi Meet funciona en otros servidores Linux, por ejemplo Ubuntu, y la instalación es muy similar.

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

Si no tienes firewall instalado en el servidor, puedes instalar uno, por ejemplo UFW:
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

Tras instalar el paquete, se descarga la clave GPG de Jitsi y se añade:
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

En el editor añade la siguiente línea. Luego guarda y cierra el editor:
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

![](https://screensaver01.zap-hosting.com/index.php/s/oBEDBDx6GqzAoFa/preview)


Confirma con "Ok". Se abrirá una ventana nueva preguntando si quieres crear un certificado TLS autofirmado o usar uno existente. Selecciona la opción "Generar un nuevo certificado autofirmado":

![](https://screensaver01.zap-hosting.com/index.php/s/jcr84boZHiakNDS/preview)


La instalación de Jitsi Meet ya está completa y solo falta obtener el certificado TLS.
Instala el paquete Certbot:
```
$	apt apt install certbot
```

Ejecuta el script para instalar el certificado TLS:
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

Durante la ejecución te pedirán que introduzcas una dirección de correo electrónico que se enviará a letsencrypt.org. Introduce un email y confirma escribiendo.


Después de esto, Jitsi Meet debería estar completamente instalado y activo en tu servidor. Para probar si Jitsi Meet se instaló correctamente, solo tienes que poner el subdominio que configuraste en la barra de direcciones de tu navegador. En este tutorial es:
```
https://meet.zap-testdomain.de
```



## Conclusión

¡Felicidades, has instalado y configurado Jitsi con éxito! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, que está disponible para ayudarte todos los días.

<InlineVoucher />