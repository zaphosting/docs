---
id: fivem-installeup
title: "FiveM: Instalar EUP (Emergency Uniform Pack)"
description: "Descubre cómo configurar Emergency Uniform Pack para personajes en modo libre con suscripción a Element Club requerida → Aprende más ahora"
sidebar_label: Instalar EUP
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

**EUP**, también conocido como Emergency Uniform Pack, te permite tener uniformes de servicios de emergencia en un personaje de modo libre. A continuación te explicamos en detalle cómo puedes instalarlo exactamente. 

:::warning Se requiere suscripción a Element Club
Para instalar y usar EUP, es necesaria una suscripción a Element Club. ¡Consigue tu suscripción en el [Portal Cfx.re](https://portal.cfx.re/subscriptions/element-club)! 
:::

<InlineVoucher />



## Preparación

Para comenzar la instalación de **EUP**, primero debes hacer algunas preparaciones. Para ello, debes descargar y descomprimir en tu propio ordenador [EUP](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599) y [NativeUI](https://github.com/FrazzIe/NativeUILua/archive/master.zip). Una vez descargados los archivos, deberías tener los siguientes archivos ZIP:

- `eup-ui.7z`
- `eup-stream.7z` 
- `NativeUI-master.zip`

Ahora descomprime estos archivos localmente en tu ordenador. Deberían contener un `__resource.lua` o `fxmanifest.lua` y archivos/carpetas de scripts.

**eup-ui**
![](https://screensaver01.zap-hosting.com/index.php/s/PjXPtC49ZAkiD87/preview)

**eup-stream**
![](https://screensaver01.zap-hosting.com/index.php/s/y4HNTngCjkg8n44/preview)

**NativeUI**
![](https://screensaver01.zap-hosting.com/index.php/s/EwdgkfA5qjWNAYj/preview)

:::info
Para NativeUI, primero debes abrir la carpeta "NativeUI-master", ahí encontrarás los scripts correctos. Si no es así, pueden estar en una subcarpeta, normalmente con el mismo nombre.
:::

## Instalación
Ahora estás listo para comenzar la instalación. Para ello, conéctate a tu servidor vía [FTP](gameserver-ftpaccess.md) y sube los archivos. Los archivos/carpetas deben subirse al directorio `resources`. Encontrarás este directorio bajo la siguiente estructura:

```
/gxxxxxx/fivem/YourFramework/resources/
```

![](https://screensaver01.zap-hosting.com/index.php/s/qFtS6sJHy67Y773/preview)



## Configuración

Para que los recursos instalados se carguen, deben especificarse en el archivo de configuración del servidor. Para ello, inicia sesión en la interfaz de txAdmin y navega al Editor CFG. 

![img](https://screensaver01.zap-hosting.com/index.php/s/xQgkC5npHji4ArM/download)



## Conclusión

Has instalado con éxito EUP en tu servidor de FiveM. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂


<InlineVoucher />