---
id: unturned-rocketmod-permissions
title: "Unturned: Ajustar permisos del servidor"
description: "Entiende cómo gestionar y personalizar los permisos del servidor de forma efectiva para un mejor control y seguridad → Aprende más ahora"
sidebar_label: Ajustar permisos
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Preparativos
Para que el servidor genere los archivos de configuración necesarios, primero debe iniciarse.
Si el servidor está en línea, puedes detenerlo después.
Porque así se crean todos los archivos necesarios que nosotros o el servidor necesitamos.

## Abre la Configuración
Los permisos se almacenan en el archivo "Permissions.config.xml".
Puedes ver y editar este archivo fácilmente a través de nuestra interfaz.
Solo haz clic en la pestaña "Configs" en la interfaz de tu servidor:

![](https://screensaver01.zap-hosting.com/index.php/s/cGyn9Ry3jaekEdQ/preview)

La configuración se llama "Rocket Permissions" y se puede abrir haciendo clic en el lápiz azul para editar:

![](https://screensaver01.zap-hosting.com/index.php/s/nLd2dHiPLn9eirH/preview)

## Entiende la Configuración
La configuración parece complicada y compleja a primera vista.
¡Te ayudamos a entenderla!
El archivo está dividido en diferentes grupos.
Los grupos se muestran y listan todos en la categoría <groups> </groups>.
Comienza con "<groups>" y termina con "</groups>":

Inicio:

![](https://screensaver01.zap-hosting.com/index.php/s/jzKgXwCa3zkxNds/preview)

Fin:

![](https://screensaver01.zap-hosting.com/index.php/s/apkYpiJjosJ4FCJ/preview)

Los grupos se muestran en medio.
Por ejemplo, todo este bloque representa un grupo:

![](https://screensaver01.zap-hosting.com/index.php/s/ZKMeMb3twTBWrrx/preview)

En el que se asignan todos los parámetros necesarios al grupo.

## Ajusta los permisos
Dentro del grupo también encontrarás la categoría "Permissions".
Como puedes ver en esta captura:

![](https://screensaver01.zap-hosting.com/index.php/s/9cT46tzXYWp6Hrk/preview)

Aquí podemos ajustar los permisos del grupo.
Así como especificar el tiempo de espera para que el comando pueda usarse de nuevo.
Supongamos que queremos darle al grupo el derecho de banear usuarios.
Entonces podemos ingresar lo siguiente:

![](https://screensaver01.zap-hosting.com/index.php/s/LDgWZxJ2YyCc6ac/preview)

Esto significaría que el grupo ahora puede banear personas dentro del juego, y como el "cool down" está en 0 segundos, puede hacerlo sin límite.

Si además queremos darle al grupo el derecho de curarse a sí mismo, se puede ingresar así:

![](https://screensaver01.zap-hosting.com/index.php/s/yjSDbMM9sn7236m/preview)

Sin embargo, el usuario solo podrá usar el comando cada 3600 segundos.
El procedimiento es idéntico para otros permisos.
Pero para algunos permisos se necesitan plugins correspondientes.

## Añade usuarios al grupo
Los grupos ya están creados con los permisos deseados.
Pero ahora hay que asignar usuarios al grupo.
Para esto se necesita el Steam64ID de los usuarios.
Puedes averiguarlo haciendo clic en el siguiente enlace:
https://steamid.io/

Una vez que tengas el Steam64ID, puedes ingresarlo en la Config.
Esto se hace con el parámetro Member:

![](https://screensaver01.zap-hosting.com/index.php/s/WX2CxgZoQBCa4Lr/preview)

Esto se vería en un ejemplo así:

![](https://screensaver01.zap-hosting.com/index.php/s/RqkCrB5gM4jHT2t/preview)

Por lo tanto, siempre es necesario crear una nueva línea para cada usuario nuevo que quieras asignar al grupo.
Cuando hayas ingresado todos los usuarios deseados, guarda la configuración haciendo clic en el botón "Save".
Luego inicia el servidor y ¡ya estarás asignado al grupo dentro del juego!

<InlineVoucher />