---
id: source-metamod-installation
title: Instala Source Mod y Meta Mod en tu servidor
description: "Descubre cómo mejorar tu servidor de juegos con motor Source usando Source- y Metamod para una personalización y administración avanzada → Aprende más ahora"
sidebar_label: Instalación
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ¿Qué son SM y MM?

Source- y Metamod son dos extensiones para Half Life 2 que permiten personalizar aún más un servidor de juegos con motor Source (por ejemplo CS: S, CS: GO, DoD: S, TF2, etc.). Esto incluye, por ejemplo, el uso de plugins y una administración extendida de tu servidor.

<InlineVoucher />

## Instalación de SM / MM

### Descarga los archivos

Primero necesitas las extensiones propiamente dichas. Es importante usar siempre las versiones más recientes (**estables**) para que sigan siendo totalmente funcionales y compatibles. Las últimas versiones las puedes descargar en estas webs:

- [Metamod](https://www.sourcemm.net/downloads.php?branch=stable)
- [Sourcemod](https://www.sourcemod.net/downloads.php?branch=stable)
- 
![](https://screensaver01.zap-hosting.com/index.php/s/zb6LsPbnAYJSHap/preview)

:::info
Los servidores de juegos con motor Source en ZAP-Hosting suelen funcionar bajo un sistema operativo Linux. Por eso necesitas la versión Linux de las extensiones.
:::

### Descomprime los archivos

Al descargar las dos extensiones, recibirás dos archivos comprimidos (sourcemod-XXX-gitXXXX-linux.tar / mmsource-XXX-gitXXX-linux.tar) que debes descomprimir antes de subirlos. Puedes usar Winrar, 7zip o programas similares.

![](https://screensaver01.zap-hosting.com/index.php/s/fw8r376kqKr5rgL/preview)

De los archivos extraídos obtendrás las carpetas addons y cfg:

![](https://screensaver01.zap-hosting.com/index.php/s/oJazFjaDWCjt9oP/preview)

### Sube los archivos

Cuando completes los pasos anteriores, empieza la instalación real. Para esto debes conectarte al servidor vía FTP y subir las carpetas de las extensiones.

Los archivos deben subirse al directorio principal. El directorio principal está dentro de esta estructura de carpetas:

| Juego | Carpeta  |
| :-----: |:-------------:| 
| CS: Global Offensive | csgo |
| CS: Source | cstrike |
| Team Fortress 2 | tf2 |
| L4D2 | left4dead2 |

![](https://screensaver01.zap-hosting.com/index.php/s/g384YWYRN8TaPRx/preview)

La estructura de carpetas debería quedar así:

![](https://screensaver01.zap-hosting.com/index.php/s/JTwTwzeXQdZrYY7/preview)

## Verifica tu instalación de SM / MM

Hay dos formas de comprobar si las extensiones se instalaron correctamente:

1. Consola del juego
2. Consola remota (HLSW - RCON)

### Consulta de versión vía comandos

Para comprobar la versión en tu servidor sigue estos pasos:

1. Conéctate al servidor desde el juego
2. Abre la consola y escribe estos comandos:

```
sm version
meta version
```

Deberías ver esta salida:

![](https://screensaver01.zap-hosting.com/index.php/s/qdNywS6PLdJkrnP/preview)

### 📖 Consulta de versión vía RCON

![](https://screensaver01.zap-hosting.com/index.php/s/jZZ6FFxksJgcCSf/preview)

Para comprobar la versión desde tu servidor sigue estos pasos:

1. Introduce la dirección IP arriba en IP / Puerto
2. Ve a Configuración Rcon abajo
3. Escribe tu contraseña Rcon en Contraseña Rcon
4. Abre la consola y escribe estos comandos:

```
sm version
meta version
```

Deberías ver esta salida:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

Descarga HLSW: http://www.hlsw.net/hlsw/download/

<InlineVoucher />