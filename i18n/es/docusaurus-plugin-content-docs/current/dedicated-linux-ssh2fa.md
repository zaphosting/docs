---
id: dedicated-linux-ssh2fa
title: "Servidor dedicado: Autenticación SSH de dos factores"
description: "Descubre cómo mejorar la seguridad SSH con Google Authenticator 2FA para un acceso más seguro a tu servidor Linux VPS → Aprende más ahora"
sidebar_label: 2FA (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El servicio de autenticación SSH de dos factores (2FA) de Google, conocido como **Google Authenticator SSH**, mejora la seguridad del acceso SSH (Secure Shell) añadiendo una segunda capa de autenticación. Aunque SSH ya proporciona un método seguro para establecer una conexión cifrada a un servidor remoto, la integración del 2FA aumenta el nivel de seguridad al requerir que los usuarios ingresen no solo su contraseña, sino también un código de verificación de un solo uso generado por Google Authenticator. En esta guía, exploraremos el proceso de instalación y configuración del servicio **Google Authenticator SSH** en un servidor Linux.

## Instalación

Primero necesitas instalar Google Authenticator en tu VPS Linux. Ejecuta el siguiente comando:

```
sudo apt install libpam-google-authenticator
```

Luego se te pedirá que escribas "Y" para instalar el paquete, escríbelo, presiona Enter y ¡Google Authenticator se instalará!

![](https://screensaver01.zap-hosting.com/index.php/s/mtqePXTr5KdoHkm/preview)

Inicia Google Authenticator escribiendo 'google-authenticator'. Asegúrate de que el tamaño de tu ventana sea suficiente para el código QR, de lo contrario presiona "CTRL+C" y ejecútalo de nuevo.

![](https://screensaver01.zap-hosting.com/index.php/s/agW9EHjs5Aimc43/preview)

Ahora se te preguntará si quieres ejecutarlo, escribe "Y" para aceptar. Verás un código QR. Abre tu app Authenticator en tu smartphone y escanea el código QR. Para este ejemplo usamos Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/CmQERELXNotsgZB/preview)

Asegúrate de copiar los códigos de respaldo, cada uno puede usarse una vez en caso de que pierdas tu autenticador.

![](https://screensaver01.zap-hosting.com/index.php/s/pkKM2SANJbEejFD/preview)

Ahora la app ya te muestra los códigos que necesitarás para iniciar sesión más adelante. En este caso se ve así:

![](https://screensaver01.zap-hosting.com/index.php/s/QnBxLbR8Grf2GL4/preview)

Las siguientes preguntas aparecerán:

1. ¿Quieres guardar la configuración de Google Authenticator?
2. ¿Quieres solo un inicio de sesión cada 30 segundos?
3. ¿Debería aumentarse el tiempo en que un código es válido?
4. ¿Deberían permitirse solo tres inicios de sesión cada 30 segundos? (Protección contra fuerza bruta)

Por razones de seguridad, recomendamos responder Sí a todas.

![](https://screensaver01.zap-hosting.com/index.php/s/A9RmFA6nWgKzSF6/preview)

## Configuración

Ahora tenemos que ajustar Google Authenticator para que se use. Esto requiere dos ajustes.

### /etc/ssh/sshd_config

Activa los módulos necesarios en `/etc/ssh/sshd_config`. Abre el archivo `/etc/ssh/sshd_config` escribiendo:

```
sudo nano /etc/ssh/sshd_config
```

Estarás en un editor de texto. Puedes moverte con las flechas, borrar texto libremente y luego presionar 'CTRL + X', luego 'Y' y finalmente 'Enter' para guardar el archivo.

Asegúrate de que las dos líneas 'UsePAM' y 'ChallengeResponseAuthentication' estén configuradas en 'yes'. Así:

![](https://screensaver01.zap-hosting.com/index.php/s/f5a9G5Wif9HcwQq/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/qdf4JCqLgZ85nia/preview)

Guarda el archivo con 'CTRL + X', luego 'Y' y finalmente 'Enter'. Después reinicia SSH con el siguiente comando:

```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

Ahora añadimos Google Authenticator al login en `/etc/pam.d/sshd`. Abre el archivo `/etc/pam.d/sshd` escribiendo:

```
sudo nano /etc/pam.d/sshd
```

El último paso es desplazarte hasta el final del archivo y añadir la línea:

```
auth required pam_google_authenticator.so
```

![](https://screensaver01.zap-hosting.com/index.php/s/Mgw8tJJtTbkg7T3/preview)

Guarda el archivo con 'CTRL + X', luego 'Y' y finalmente 'Enter'.

## Prueba de acceso

Ahora es momento de iniciar sesión por primera vez con 2FA. Después de seguir los pasos anteriores, solo necesitas reiniciar tu conexión SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/RwaymAzjGjMgbYL/preview)

Ingresa tu contraseña como siempre. Luego se te pedirá un código, simplemente introduce el código 2FA actual.

![](https://screensaver01.zap-hosting.com/index.php/s/w7BFMMTMdcwXj2x/preview)

¡Y listo, ya estás dentro!

## Conclusión

¡Felicidades, has configurado exitosamente 2FA para tu acceso SSH! Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte 🙂