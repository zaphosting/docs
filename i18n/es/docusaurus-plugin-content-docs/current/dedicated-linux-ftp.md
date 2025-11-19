---
id: dedicated-linux-ftp
title: "Servidor dedicado: El servicio FTP no funciona - Solución de problemas"
description: "Entiende cómo solucionar problemas de acceso FTP en tu VPS para restaurar la conectividad del servidor y gestionar tu servidor de juegos o Teamspeak de forma efectiva → Aprende más no"
sidebar_label: El servicio FTP no funciona
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ¿Qué puedes hacer si el servidor de juegos o el servidor de Teamspeak no son accesibles vía FTP?

:::info
Atención: ¡Los siguientes pasos solo funcionan en tu propio VPS si se ha instalado la interfaz web de ZAP!
:::

Si no puedes acceder al servidor creado vía FTP, en la mayoría de los casos el servicio FTP (ProFTPD) no está activo. En casos raros, esto también puede deberse a una configuración incorrecta o a un puerto ocupado, es decir, el puerto FTP 21 está siendo usado/ocupado por otro programa.



## Revisa el problema con el FTP más a fondo:

### Verificar disponibilidad
Puedes hacerlo fácilmente usando el navegador FTP en la interfaz web. Haz clic en "FTP browser" en el menú bajo Herramientas del servidor correspondiente

![](https://screensaver01.zap-hosting.com/index.php/s/G394GJkDc9WXEzs/preview)

Luego presiona el botón "Direct Connection" una vez.

![](https://screensaver01.zap-hosting.com/index.php/s/KLCmb8A4xSjWmy9/preview)

Ahora probablemente verás la siguiente imagen:

![](https://screensaver01.zap-hosting.com/index.php/s/FFJo8XeEJcX7RTM/preview)

Como ahora está claro que no es posible una conexión vía WebFTP o herramienta FTP, tienes que revisar más a fondo el servicio FTP en el VPS.

### Verificar estado de ProFTPD

Para esto, conéctate a tu servidor vía SSH / Consola y luego ingresa el comando "service proftpd status". El estado se leerá y mostrará así:

![](https://screensaver01.zap-hosting.com/index.php/s/zsg8qwFJsWEAZkA/preview)


Ahí puedes ver que el estado indica "dead", en resumen el servicio está offline y por eso no es accesible.


### Reiniciar servicio FTP
El servicio FTP puede reiniciarse con el siguiente comando:

```
service proftpd start
```

Si no hay respuesta tras ejecutar el comando, normalmente el servicio ya está online/disponible otra vez.

Luego puedes verificarlo de nuevo con el comando "service proftpd status". Debería verse así:

![](https://screensaver01.zap-hosting.com/index.php/s/8QNNnoMFYG4rt2D/preview)

Como el estado ahora es "active" y ya no "dead", puedes intentar la conexión FTP otra vez usando la herramienta FTP y WebFTP.

### Verifica la conexión otra vez
Ahora deberías poder establecer conexión y ver tus datos.

### Problema resuelto
✅ ¡El servicio FTP (ProFTPD) está iniciado/activo de nuevo y nada impide el intercambio de datos!