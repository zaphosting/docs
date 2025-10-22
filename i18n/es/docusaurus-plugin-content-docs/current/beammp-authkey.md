---
id: beammp-authkey
title: "BeamMP: Crear una Auth Key"
description: "Descubre cómo generar y aplicar una Auth Key para listar tu servidor públicamente y gestionar el acceso de forma efectiva → Aprende más ahora"
sidebar_label: Crear una Auth Key
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ¿Por qué necesito una key?

Se requiere una Auth Key si quieres que el servidor aparezca en la lista de servidores, de lo contrario solo estará disponible mediante conexión directa.

<InlineVoucher />

## Preparación
Para crear tu propia authkey, primero iniciamos sesión en https://beammp.com/keymaster, lo cual requiere una cuenta de Discord.
Después de iniciar sesión, hacemos clic en "Keys" en la izquierda, lo que nos lleva a la vista general de Licensekey:

![](https://screensaver01.zap-hosting.com/index.php/s/Zp72q2WR85pxJgq/preview)

Aquí hacemos clic en el botón azul "here" para crear la key:

![](https://screensaver01.zap-hosting.com/index.php/s/ARqCQyEbF6BYnH4/preview)


## Especificar datos

Ahora podemos completar los datos de la siguiente manera:

- **Nombre del servidor:** Un nombre para tu servidor, no tiene que ser el mismo que el nombre en la configuración.
- **IP del servidor:** La IP de tu servidor, sin el puerto.


### Especificar IP

La IP debe indicarse sin el puerto, puedes encontrarla en la parte superior de nuestra interfaz:

![](https://screensaver01.zap-hosting.com/index.php/s/8MJeXxm87EdLykg/preview)

## Crear Key

Ahora hacemos clic en "Create", se generará una key.

![](https://screensaver01.zap-hosting.com/index.php/s/Ebyk5tPCHnppcWC/preview)

## Configurar Key

Ahora abrimos la configuración de nuestro servidor de juegos y bajamos hasta abajo, aquí podemos introducir nuestra propia key en "Auth Key", el resultado final debería verse así.

![](https://screensaver01.zap-hosting.com/index.php/s/5p7LdSDCJzrxKDy/preview)

Guardamos la configuración y reiniciamos el servidor.

¡Listo! La key ya está aplicada y el servidor debería aparecer en la lista en breve.

<InlineVoucher />