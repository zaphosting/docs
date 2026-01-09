---
id: domain-teamspeak-redirect
title: "Dominio: Configurar redirección para TeamSpeak 3"
description: "Descubre cómo simplificar la conexión a tu servidor de TeamSpeak 3 usando dominios o subdominios personalizados para un acceso fácil → Aprende más ahora"
sidebar_label: Redirección TeamSpeak 3
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
¡Ten en cuenta que siempre puede tardar hasta 24 horas antes de que los cambios en las entradas DNS se activen!
:::

## Introducción

Puedes redirigir todo tu dominio o solo un subdominio a tu servidor de TeamSpeak 3.  
Así, nadie tendrá que recordar la complicada dirección IP numérica y podrá conectarse fácilmente a tu servidor de TeamSpeak 3 usando el dominio.

:::note
Por defecto, los servidores de TeamSpeak 3 **nuevos** ahora recibirán un alias `.zap.cloud` con un prefijo aleatorio que se puede usar para conectarse.
:::

<InlineVoucher />

## Uso de la configuración rápida TSDNS

Hemos implementado un nuevo sistema TSDNS para nuestros servidores de TeamSpeak 3, que te permite configurar un subdominio para tu servidor de TeamSpeak 3 en solo unos clics. Si no tienes un dominio con nosotros, salta a la siguiente sección para configurar manualmente los registros DNS.

Simplemente comienza yendo a la sección **Configuración->TSDNS** en la interfaz web de tu TeamSpeak en nuestro sitio web. Aquí podrás elegir un subdominio (prefijo antes del dominio) así como nuestro dominio `zap-ts3.com` o uno de tus propios dominios que tengas con nosotros en tu cuenta de ZAP-Hosting.

:::info
Para esta función de configuración rápida, necesitas [comprar un dominio perfecto directamente con nosotros](https://zap-hosting.com/en/shop/product/domain/) o mover tu propio dominio a tu cuenta de ZAP-Hosting. Estos dominios aparecerán en la sección TSDNS una vez configurados. Alternativamente, puedes usar el dominio estándar `zap-ts3.com` gratis.
:::

En nuestro ejemplo, puedes ver cómo creamos un nuevo subdominio usando el dominio `.zap.cloud`, que nos llevará a nuestro servidor de TeamSpeak 3 cuando se use.

![](https://screensaver01.zap-hosting.com/index.php/s/Mi3wK7cY639Rp3x/preview)

:::note
Ten en cuenta que puede tardar hasta 3 horas para que el dominio se propague y comience a funcionar.
:::

## Configuración DNS regular

Para redirigir la dirección IP, crea un subdominio que apunte a la dirección IP del servidor de TeamSpeak 3, o redirige todo el dominio sin subdominio.  
Esto es suficiente si el servidor de TeamSpeak 3 usa el puerto predeterminado **9987**.  
Sin embargo, si el servidor de TeamSpeak 3 usa un puerto diferente al predeterminado, se debe añadir un **registro SRV** adicional para redirigir el dominio o subdominio al puerto correcto del servidor de TeamSpeak 3.

### Servicio SRV

El nombre del servicio siempre comienza con un **guion bajo**.  
Para un servidor de TeamSpeak 3, el nombre del servicio siempre es **_ts3**, sin excepciones.

### Protocolo SRV

El protocolo especifica el protocolo de Internet usado para la conexión. Aquí están disponibles **UDP** y **TCP**.  
La especificación del protocolo también siempre comienza con un **guion bajo** y es **_udp** o **_tcp**.  
Para un servidor de TeamSpeak 3, siempre se usa **_udp**, sin excepción.

## Redirigir el dominio sin subdominio

Para redirigir tu dominio a un servidor de juegos sin crear un subdominio, primero abre tu dominio desde el panel, luego abre Gestión DNS desde el menú a la izquierda.

![](https://puu.sh/Fuzfa/0927cbb177.png)

![](https://puu.sh/FuzhO/6f4694ab62.png)

Ahí verás todas las entradas DNS existentes para tu dominio.  
Si aún no has creado tus propias entradas, puedes ver todas las entradas existentes haciendo clic en el icono de la papelera roja a la derecha.

![](https://puu.sh/Fuzm8/39f3c72fa6.png)

Luego haz clic en **Nueva entrada** y serás llevado a la creación de un nuevo registro DNS.  
Como **Nombre** elegimos el nombre del dominio, por ejemplo **teamspeak-server.de**, el **tipo es A** y el **valor** es la IP de tu servidor de TeamSpeak 3, en este caso **88.214.57.116**.  
Puedes dejar el campo **TTL** sin modificar.

![](https://screensaver01.zap-hosting.com/index.php/s/cTGTdBFrigs7HDG/preview)

Cuando hayas ingresado todo, haz clic en **Guardar**, la entrada se guardará en la configuración DNS y se mostrará dentro de las próximas 24 horas.

:::info
Siempre puede tardar hasta 24 horas para que las nuevas entradas DNS se activen. Desafortunadamente, nadie puede influir en esto.
:::

## Redirigir el dominio con subdominio

Si quieres crear un subdominio, por ejemplo ts.teamspeak-server.de, lo haces como en el ejemplo anterior,  
pero para **Nombre** no ingresas el nombre del dominio, sino el subdominio.  
Se ve así:

![](https://screensaver01.zap-hosting.com/index.php/s/ocaqgX2DSdspGQ8/preview)

## Redirigir el dominio con puerto (SRV)

Si no se usa el puerto estándar **9987**, se debe crear un **registro SRV** adicional para redirigir no solo el dominio a la IP del servidor de juegos, sino también al puerto correcto.

Primero, crea un **subdominio** como se describió arriba, o redirige el dominio directamente al servidor de TeamSpeak 3, ambas opciones son posibles.

### Redirección sin subdominio

Después de redirigir tu dominio a la IP de tu servidor de TeamSpeak 3 como se describió arriba, haz clic en **Nueva entrada** y crea una entrada que se vea así:

![](https://screensaver01.zap-hosting.com/index.php/s/H3NGmYZHyJsCYnf/preview)

El campo **Nombre** contiene el nombre del servicio, que en este caso es nuestro servidor de TeamSpeak 3, por lo que es **_ts3**. También contiene el tipo de protocolo, en este caso **_udp**, así como el **nombre del dominio**.  
El campo **Tipo** indica qué tipo de entrada es, en este caso es una entrada **SRV**.  
El campo **valor** contiene el puerto del juego y el dominio, en este caso **0 1234 teamspeak-server.de**, donde **1234** es el **puerto del juego** y **teamspeak-server.de** es el dominio al que se hace la redirección.  
El valor **0** ya no es relevante y siempre permanece igual. Los campos **TTL** y **Prio** tampoco se modifican.

Luego puedes hacer clic en **Guardar**.

:::info
¡Es importante que se ponga un **punto** al final del dominio en el campo **valor**!
:::

### Redirección con subdominio

Con un subdominio es casi igual. Primero creas un subdominio como se describió arriba y lo rediriges a la IP de tu servidor de TeamSpeak 3. Luego haz clic en **Nueva entrada** y crea una entrada con el siguiente contenido:

![](https://screensaver01.zap-hosting.com/index.php/s/aEkro3z9WBgWf8g/preview)

El campo **Nombre** contiene el nombre del servicio, que en este caso es nuestro servidor de TeamSpeak 3, por lo que es **_ts3**. También contiene el tipo de protocolo, en este caso **_udp**, así como el **nombre del dominio** junto con el **subdominio**, que es **ts.teamspeak-server.de**.  
El campo **Tipo** indica qué tipo de entrada es, en este caso es una entrada **SRV**.  
El campo **valor** contiene el puerto y el dominio con subdominio, en este caso **0 1234 ts.teamspeak-server.de**, donde **1234** es el **puerto del servidor de TeamSpeak 3** y **ts.teamspeak-server.de** es el dominio con subdominio al que se hace la redirección.  
El valor **0** ya no es relevante y siempre permanece igual. Los campos **TTL** y **Prio** tampoco se modifican.

<InlineVoucher />