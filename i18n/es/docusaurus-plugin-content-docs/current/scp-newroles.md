---
id: scp-newroles
title: "SCP Secret Laboratory: Añadir nuevos roles al servidor"
description: "Aprende a crear y personalizar roles en el servidor con permisos específicos para una gestión remota efectiva → Aprende más ahora"
sidebar_label: Añadir nuevos roles
services:
  - gameserver-scp 
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Ver la Configuración
Los nuevos roles se ingresan en el archivo "config_remoteadmin.txt".  
Puedes encontrar este archivo de configuración haciendo clic en "Configs" en la interfaz de tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/7JEE5gLDyF29mZR/preview)

Aquí puedes buscar la Config mencionada y luego hacer clic en el "ojo" a la derecha para abrirla.

## Copiar roles existentes
Si tienes la Config abierta, puedes buscar estas entradas en ella:

![](https://screensaver01.zap-hosting.com/index.php/s/tDBFmR5g44gxpp5/preview)

Estos son roles de ejemplo que ya están ingresados.  
Insertamos una nueva entrada debajo.  
Para ello, copiamos el bloque de uno de los roles anteriores y pegamos esta parte debajo del último rol.  
En nuestro ejemplo, copiamos el rol "Moderator" y lo insertamos abajo:

![](https://screensaver01.zap-hosting.com/index.php/s/ELHDZCDcT6WDydJ/preview)

## Añadir un rol propio
Ahora podemos editar el bloque recién insertado del rol ya existente y poner nuestros propios valores deseados.  
En nuestro ejemplo usamos el nombre "ZAP":

![](https://screensaver01.zap-hosting.com/index.php/s/6gtEmbeBjP5A8zy/preview)

Una vez hecho esto, todavía tenemos que añadir el rol a la lista de roles disponibles.  
Esto también está un poco más abajo en la misma Config.

![](https://screensaver01.zap-hosting.com/index.php/s/qNNKnwYaYSjy2XK/preview)

Por lo tanto, ingresamos nuestro rol debajo del rol "moderator".  
:::info
ATENCIÓN: ¡Fíjate bien en los espacios antes y después del "-"!
:::

## Permisos
Al final del archivo de configuración "config_remoteadmin.txt" podemos ajustar los permisos para los roles respectivos.  
Si queremos asignar un permiso a nuestro rol, podemos ingresar el nombre del rol entre los corchetes.  
Como se muestra en este ejemplo:

![](https://screensaver01.zap-hosting.com/index.php/s/kRSiKjYyWsK2RD3/preview)


<InlineVoucher />