---
id: vserver-linux-ssh2fa
title: "VPS: Autenticación de dos factores SSH"
description: "Descubre cómo mejorar la seguridad SSH con 2FA de Google Authenticator para un acceso más seguro a tu servidor y protege tu entorno Linux → Aprende más ahora"
sidebar_label: 2FA (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El servicio de autenticación de dos factores (2FA) para SSH de Google, conocido como **Google Authenticator SSH**, mejora la seguridad del acceso SSH (Secure Shell) añadiendo una segunda capa de autenticación. Aunque SSH ya ofrece un método seguro para establecer una conexión cifrada a un servidor remoto, la integración del 2FA eleva el nivel de seguridad al requerir que los usuarios ingresen no solo su contraseña, sino también un código de verificación de un solo uso generado por Google Authenticator. En esta guía, exploraremos el proceso de instalación y configuración del servicio **Google Authenticator SSH** en un servidor Linux.

<InlineVoucher />

## Instalación

Primero necesitas instalar Google Authenticator en tu VPS Linux. Ejecuta el siguiente comando:

```
sudo apt install libpam-google-authenticator
```

Luego se te pedirá que escribas "Y" para instalar el paquete, escríbelo, presiona Enter y ¡Google Authenticator se instalará!

![](https://screensaver01.zap-hosting.com/index.php/s/AnKdPXEzKdB5xWS/preview)

Inicia Google Authenticator escribiendo 'google-authenticator'. Asegúrate de que el tamaño de tu ventana sea suficiente para el código QR, si no, presiona "CTRL+C" y ejecútalo de nuevo.

![](https://screensaver01.zap-hosting.com/index.php/s/8w9aDz5ZbSmNPZ9/preview)

Ahora se te preguntará si quieres ejecutarlo, escribe "Y" para aceptar. Verás un código QR. Abre tu app Authenticator en tu smartphone y escanea el código QR. Para este ejemplo usamos Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/J5CL6mjzPRMSiap/preview)

Asegúrate de copiar los códigos de respaldo, cada uno puede usarse una vez en caso de que pierdas tu autenticador.

![](https://screensaver01.zap-hosting.com/index.php/s/itdjPyGrFb7Wq39/preview)

Ahora la app ya te muestra los códigos que necesitarás para iniciar sesión más adelante. En este caso se ve así:

![](https://screensaver01.zap-hosting.com/index.php/s/TW24xBe26TbgCqE/preview)

Se te harán las siguientes preguntas:

1. ¿Quieres guardar la configuración de Google Authenticator?
2. ¿Quieres permitir solo un inicio de sesión cada 30 segundos?
3. ¿Debería aumentarse el tiempo en que un código es válido?
4. ¿Solo deberían permitirse tres inicios de sesión cada 30 segundos? (Protección contra ataques de fuerza bruta)

Por razones de seguridad, recomendamos responder Sí a todas.

![](https://screensaver01.zap-hosting.com/index.php/s/bdYRncwk7ssQyYJ/preview)

## Configuración

Ahora tenemos que ajustar Google Authenticator para que se use realmente. Esto requiere dos cambios.

### /etc/ssh/sshd_config

Activa los módulos necesarios en `/etc/ssh/sshd_config`. Abre el archivo `/etc/ssh/sshd_config` escribiendo 
```
sudo nano /etc/ssh/sshd_config
```

Estarás en un editor de texto. Puedes moverte con las flechas, borrar texto libremente y escribir. Para guardar, presiona 'CTRL + X', luego 'Y' y finalmente 'Enter'.

Asegúrate de que las líneas 'UsePAM' y 'ChallengeResponseAuthentication' estén configuradas en 'yes'. Quedaría así:

![](https://screensaver01.zap-hosting.com/index.php/s/n8MzX8724T2GFAF/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/zLk98HrkF4jk4Jf/preview)

Guarda el archivo con 'CTRL + X', luego 'Y' y finalmente 'Enter'. Después reinicia SSH con el siguiente comando:
```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

Ahora añadimos Google Authenticator al login en `/etc/pam.d/sshd`. Abre el archivo `/etc/pam.d/sshd` con `sudo nano /etc/pam.d/sshd`. El último paso es desplazarte hasta el final del archivo y añadir la línea `auth required pam_google_authenticator.so`.

![](https://screensaver01.zap-hosting.com/index.php/s/xwodXzPifANsQAM/preview)

Guarda el archivo con 'CTRL + X', luego 'Y' y finalmente 'Enter'.

## Prueba de acceso

Ahora es momento de iniciar sesión por primera vez con 2FA. Después de seguir los pasos anteriores, solo tienes que reiniciar tu conexión SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/cN3x3aFbtfxdi7M/preview)

Ingresa tu contraseña como siempre. Luego te pedirá un código, simplemente introduce el código 2FA actual.

![](https://screensaver01.zap-hosting.com/index.php/s/y3dgYXezL8sDbJe/preview)

¡Y listo, ya estás dentro!

## Conclusión

¡Felicidades, has activado y configurado con éxito 2FA para SSH! Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!

<InlineVoucher />