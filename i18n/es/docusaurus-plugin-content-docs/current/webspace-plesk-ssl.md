---
id: webspace-plesk-ssl
title: "Hosting web: Crear certificado SSL"
description: "Descubre cómo asegurar tu sitio web con cifrado SSL y activar HTTPS para una navegación más segura → Aprende más ahora"
sidebar_label: Crear certificado SSL
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Cifra tu sitio web con SSL

:::info
Se asume que el dominio ya apunta a la dirección IP del hosting web.
:::

Cuando se crea un dominio en el hosting web, siempre está sin cifrar al principio. Esto se puede ver en el panel Plesk:

![](https://screensaver01.zap-hosting.com/index.php/s/kkJ67Pd733pt95i/preview)

Y la notificación en el navegador al abrir el dominio:

![](https://screensaver01.zap-hosting.com/index.php/s/5iwXSgEb4LrY3xf/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/mpmK8TAjAsgY3FW/preview)

Con un certificado SSL, un dominio puede protegerse/cifrarse adecuadamente.

<InlineVoucher />

## Creación del certificado

Paso 1️⃣: Con doble clic en "Certificado SSL/TLS" se abre el siguiente menú:

![](https://screensaver01.zap-hosting.com/index.php/s/g5sr6WC4eawqzoF/preview)

Se puede solicitar un certificado Let's Encrypt gratis.

Paso 2️⃣: Introduce/rellena la información requerida. Para solicitar el certificado, hay que proporcionar datos.

Se debe especificar una dirección de correo y marcar para qué debe ser válido el certificado. Normalmente, cada dominio tiene activo el subdominio "www", por eso también se selecciona si está configurado en el DNS del dominio.

![](https://screensaver01.zap-hosting.com/index.php/s/Mwf3CEWsYRwprS3/preview)

Luego se solicita el certificado haciendo clic en "Obtener gratis".

Paso 3️⃣: El certificado ya está creado, se ve arriba a la derecha. Además, ahora debe activarse el redireccionamiento automático de HTTP a HTTPS, porque si no, no se establece el cifrado:

![](https://screensaver01.zap-hosting.com/index.php/s/YBdGQqmtNeWKdxA/preview)

Si se hace esto, el redireccionamiento está activo. No importa si abres la página con http o https directamente en el navegador, siempre te llevará a https.

Paso 4️⃣: Ahora puedes comprobar en el navegador si el certificado ha sido reconocido:

Debe aparecer el candado:

![](https://screensaver01.zap-hosting.com/index.php/s/DkZoqg9XGgR67EK/preview)

La info del certificado, que se abre haciendo clic en el candado, también debería mostrar el dominio:

![](https://screensaver01.zap-hosting.com/index.php/s/p5H6RZ25HksHsow/preview)

La web ya está protegida/cifrada correctamente.

## Certificados para subdominios

Teóricamente, los mismos pasos se pueden seguir para un subdominio. Pero hay una forma más fácil de cifrar todos los subdominios a la vez, sin importar si ya existen o son nuevos. Se puede usar un "certificado comodín" (wildcard). Para esto se necesita una entrada TXT especial en el DNS del dominio. Una vez disponible, puede emitir un certificado SSL para todos los subdominios.

Paso 1️⃣: Se vuelve a abrir el menú de certificado SSL/TLS.

![](https://screensaver01.zap-hosting.com/index.php/s/X4kFeMomqmz3nGp/preview)

Luego haz clic en "Renovar certificado" arriba a la izquierda.  
Ahora se abre la ventana de solicitud de Let's Encrypt:

![](https://screensaver01.zap-hosting.com/index.php/s/eCcFtaJHxW3XWgF/preview)

Selecciona "Asegurar el dominio comodín":

![](https://screensaver01.zap-hosting.com/index.php/s/5STxWaKf3JWGfZe/preview)

Los subdominios "www" y "webmail" se añaden automáticamente.  
Después se vuelve a hacer clic en "Obtener gratis".

Paso 2️⃣: Aparece un recuadro azul con información importante:

![](https://screensaver01.zap-hosting.com/index.php/s/JHag4cd85Lq6gwx/preview)

Ahí se indica un nombre de dominio y un valor. Esto debe estar disponible permanentemente como un TXT en el DNS del dominio, es la única forma en que Let's Encrypt puede verificar que el dominio es legítimo.

Una entrada en el DNS debería verse así:

![](https://screensaver01.zap-hosting.com/index.php/s/qPCeWj5dJRFfYFB/preview)

:::info
Una entrada DNS puede tardar hasta 24 horas en estar accesible desde cualquier parte del mundo.
:::

Para asegurarte de que la entrada TXT ya está activa, puedes usar la "TXT Lookup SuperTool" de mxtoolbox: https://mxtoolbox.com/SuperTool.aspx:

![](https://screensaver01.zap-hosting.com/index.php/s/CPSSWeQRpTDsagY/preview)

Si la entrada aparece, puedes confirmarlo en el recuadro azul en Plesk haciendo clic en "Recargar". Ahora se comprueba si la entrada DNS está presente, y si es así, tras unos segundos aparecerá "protegido" para el "Certificado SSL/TLS" aka "Certificado comodín":

![](https://screensaver01.zap-hosting.com/index.php/s/AwWiJboz3k6iea8/preview)

Si ahora se crea un subdominio, ya estará protegido:

![](https://screensaver01.zap-hosting.com/index.php/s/XLHzsgkeLmwJ55m/preview)

Ahora toda la transferencia de datos está cifrada, listo.

<InlineVoucher />