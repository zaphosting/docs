---
id: scpservermod-uploadplugins
title: "SCP Secret Laboratory: Instalando plugins en el servidor"
description: "Descubre cómo instalar y configurar plugins SMOD para tu servidor SCP y mejorar la jugabilidad y funciones del servidor → Aprende más ahora"
sidebar_label: Instalar Plugins
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Guía Archivada
Este documento ha sido archivado. Los documentos se archivan cuando ya no son relevantes, son incorrectos o están desactualizados. Ha sido archivado por las siguientes razones:

Razón: La extensión Servermod para SCP ha sido abandonada y por lo tanto ya no se mantendrá. Recomendamos cambiar a **[SCP:EXILED](exiled-plugins.md)** en su lugar. 
::::

<InlineVoucher />

## Conectar al FTP

Antes de poder instalar plugins, debes configurar el [Acceso vía FTP](gameserver-ftpaccess.md).

Una vez configurado, puedes conectarte y abrir la siguiente carpeta del servidor:
`/g#####/scp/sm_plugins`

![](https://screensaver01.zap-hosting.com/index.php/s/2Fid5MKq57YDCNj/preview)

## Instalando Plugins

### Encontrar Plugins

Primero, tendrás que localizar plugins compatibles con SMOD.

El mejor lugar para conseguirlos es directamente en su [discord](https://discord.gg/T9aurNf)

:::info
Este es solo uno de los lugares donde puedes encontrarlos. También podrían estar en otros sitios. Es importante verificar que sean compatibles con tu versión de SMOD. 
:::

En este ejemplo, usaremos el siguiente plugin:

![](https://screensaver01.zap-hosting.com/index.php/s/bEEQP3cm33fgMFi/preview)

### Subir Plugins

Una vez que tengas los plugins que quieres, los subirás a tu servidor vía FTP. Puedes subirlos con **arrastrar y soltar** en la carpeta **sm_plugins.**

![](https://screensaver01.zap-hosting.com/index.php/s/HzRKJXFyENqK4N8/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/kSSMs23E6g4PfwN/preview)

:::info
Nota: Después de instalar cualquier plugin, tendrás que **reiniciar tu servidor** para que los cambios **se apliquen.**
:::

### Configurar Plugins

Dependiendo del plugin, puede que tengas que añadir varias configuraciones en tu archivo config_gameplay.txt.

En nuestro plugin de ejemplo, se definen las siguientes configuraciones.

![](https://screensaver01.zap-hosting.com/index.php/s/5PrLzeCQaFamGRn/preview)

Para añadirlas, editamos el config_gameplay.txt.

Puedes encontrarlo usando la pestaña **Configs** a la izquierda.

![](https://screensaver01.zap-hosting.com/index.php/s/mMck39x2mEnLtLY/preview)

Luego buscamos el archivo **config_gameplay.txt**

![](https://screensaver01.zap-hosting.com/index.php/s/SGLpBYM5DAWRRzN/preview)

:::info
Las configuraciones pueden escribirse en cualquier parte, pero para mejores prácticas, las pondremos bajo '#Misc gameplay settings' en el archivo config_gameplay.txt.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/JMK542jpCj472ag/preview)

:::info
NOTA: Dependiendo del plugin, tus configuraciones serán diferentes. Siempre asegúrate de leer las instrucciones del plugin para añadir las configuraciones correctamente.
:::

Después de definir las configuraciones, reinicia tu servidor (o enciéndelo) y verifica directamente en el juego.  

<InlineVoucher />