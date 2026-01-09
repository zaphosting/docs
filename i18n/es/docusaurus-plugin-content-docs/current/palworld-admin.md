---
id: palworld-admin
title: "Palworld: Configurar Admin"
description: "Descubre cómo proteger tu servidor de Palworld con una contraseña de admin y gestionar jugadores de confianza de forma efectiva → Aprende más ahora"
sidebar_label: Configurar Admin
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


##Introducción
En esta guía, veremos cómo configurar tu servidor con una contraseña de admin y añadirte como admin dentro del juego. Esta contraseña puede compartirse con jugadores de confianza para otorgarles acceso a varios comandos de admin. Puedes aprender más sobre estos comandos de servidor en nuestra [guía de Comandos del Servidor](palworld-server-commands.md).
<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ramgExKNxeLeDdL/preview" title="¡Configura tu servidor de Palworld en solo UN MINUTO!" description="¿Te resulta más fácil entender cuando ves las cosas en acción? ¡Aquí te tenemos! Sumérgete en nuestro video que lo explica todo. Ya sea que tengas prisa o prefieras absorber la info de la forma más entretenida posible."/>

<InlineVoucher />

## Configurando tu contraseña de Admin

Primero, tienes que acceder a la configuración. Hay varias formas de hacerlo, las listamos a continuación con instrucciones para establecer la contraseña. Recomendamos usar la opción **Webinterface** porque es la más amigable. Una vez que hayas configurado tu contraseña de admin, puedes pasar a la siguiente sección.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Vía Webinterface" default>

#### Vía Webinterface

El método más sencillo es ir a la sección **Settings** en el webinterface de tu servidor de juegos.

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

En el área de **Settings**, busca la opción **Game server password**. En este campo, crea la contraseña que quieras usar e introdúcela.

![](https://screensaver01.zap-hosting.com/index.php/s/aQYQDYMP34NnNXr/preview)

:::info
Una vez que tengas la contraseña, desplázate hacia arriba y asegúrate de presionar el botón verde **Save** para confirmar la selección.

![](https://screensaver01.zap-hosting.com/index.php/s/YG5MZ6Jt8SdFy4A/preview)
:::

</TabItem>

<TabItem value="configs" label="Vía archivo de configuración en WI">

#### Vía archivo de configuración en WI

:::note
El servidor debe estar detenido antes de editar la configuración; editar el archivo y reiniciar el servidor hará que los cambios se deshagan.
:::

Alternativamente, para quienes prefieran editar el archivo directamente, pueden acceder a él yendo a la sección **Configs** en el webinterface de tu servidor de juegos y pulsando el botón azul de editar archivo, como se muestra a continuación:

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

Esto abrirá un editor de texto directamente en el sitio para que puedas modificarlo. Busca la opción **AdminPassword** dentro del archivo (usa `CTRL+F` para facilitar la búsqueda) y edítala con la contraseña de admin que quieras establecer. Por último, guarda el archivo y luego puedes iniciar tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/gpBjxxmdsWKD4t2/preview)

</TabItem>

<TabItem value="ftp" label="Vía FTP">

#### Vía FTP

:::note
El servidor debe estar detenido antes de editar la configuración; editar el archivo y reiniciar el servidor hará que los cambios se deshagan.
:::

El último método para acceder al archivo es a través de FTP. Si no estás familiarizado con FTP, te recomendamos echar un vistazo a nuestra guía [Acceso vía FTP](gameserver-ftpaccess.md). Sin embargo, este método es más lento y si quieres editar el contenido del archivo directamente, te recomendamos usar simplemente la sección **Configs** en el webinterface de tu servidor de juegos como mencionamos antes.

</TabItem>
</Tabs>

## Configurarte como admin

Una vez que tu contraseña de admin esté configurada, tendrás que añadirte como admin. Abre Palworld y conéctate a tu servidor. Si necesitas ayuda para esto, echa un ojo a nuestra guía [Conectar al Servidor](palworld-connect.md).

Dentro del juego, abre el chat con `Enter`. Luego, introduce el siguiente comando, reemplazando `[password]` con la contraseña de admin que configuraste antes:

```
/AdminPassword [password]
```

![](https://screensaver01.zap-hosting.com/index.php/s/75D5ejaWNM6oYNX/preview)

Deberías recibir un mensaje de éxito en el chat si fue correcto. Si recibes un error, asegúrate de que la contraseña de admin que ingresaste es la correcta y coincide con la que configuraste en el paso anterior.

<InlineVoucher />