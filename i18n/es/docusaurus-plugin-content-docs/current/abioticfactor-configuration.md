---
id: abioticfactor-configuration
title: "Abiotic Factor: Configuración del Servidor"
description: "Descubre cómo personalizar los ajustes del servidor de Abiotic Factor para optimizar tu experiencia de juego y el rendimiento del servidor → Aprende más ahora"
sidebar_label: Configuración del Servidor
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los servidores de Abiotic Factor vienen con una amplia variedad de parámetros de configuración que puedes personalizar a tu gusto. En esta guía, exploraremos todos los parámetros de configuración disponibles actualmente y explicaremos cada uno con más detalle.

<InlineVoucher />

## Accediendo a tu Archivo de Configuración

Primero, tendrás que acceder a tu archivo de configuración para poder editar cualquier parámetro. Hay varias formas de editar este archivo.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="A través del Webinterface" default>

#### A través del Webinterface

El método más amigable es ir a la sección **Settings** en el webinterface de tu servidor de juegos y buscar los ajustes correspondientes allí, como se muestra a continuación:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="A través del archivo de configuración en WI">

#### A través del archivo de configuración en WI

:::note
El servidor debe estar detenido antes de que se pueda editar la configuración; editar la configuración y reiniciar el servidor hará que se deshagan los cambios.
:::

Alternativamente, para usuarios que quieran editar directamente el archivo en bruto, puedes acceder a él yendo a la sección **Configs** en el webinterface de tu servidor de juegos y pulsando el botón azul de editar archivo, como se muestra a continuación:

![](https://screensaver01.zap-hosting.com/index.php/s/dPZLs4YMQopCpfd/preview)

Esto abrirá un editor de texto directamente en el sitio para que puedas editarlo.

</TabItem>

<TabItem value="ftp" label="A través de FTP">

#### A través de FTP

:::note
El servidor debe estar detenido antes de que se pueda editar la configuración; editar la configuración y reiniciar el servidor hará que se deshagan los cambios.
:::

El último método para acceder al archivo en bruto es mediante FTP. Si no estás familiarizado con el uso de FTP, te recomendamos echar un vistazo a la [guía de Acceso vía FTP](gameserver-ftpaccess.md). Sin embargo, este método tarda más y si quieres editar directamente el contenido del archivo, te recomendamos usar simplemente la sección **Configs** en el webinterface de tu servidor de juegos como se mencionó antes.

</TabItem>
</Tabs>

## Opciones de Configuración del Servidor

En las secciones siguientes, presentamos tablas que contienen información sobre una amplia gama de opciones de configuración disponibles para servidores dedicados de Abiotic Factor.

### Ajustes Importantes del Servidor

Estos ajustes solo se pueden configurar directamente a través del panel webinterface de tu servidor de juegos en la sección **Settings**.

| Nombre del Parámetro | Ejemplo                  | Descripción                                                               |
| -------------------- | ------------------------ | ------------------------------------------------------------------------- | 
| Server Name          | ZAP-Hosting Docs Test    | Establece el nombre de tu servidor                                        |
| Password             | iLoveZAP!2024            | Establece una contraseña para tu servidor, o déjalo vacío para ninguna    |

Después de completar tus cambios, asegúrate de guardar el archivo donde corresponda y reiniciar tu servidor. La próxima vez que tu servidor arranque, usará los ajustes que hayas proporcionado.

### Ajustes de Configuración de Juego

Abiotic Factor contiene una amplia variedad de opciones de configuración de juego que se llaman **Sandbox Settings**. Un archivo llamado **SandboxSettings.ini** debería estar presente en la carpeta principal `world` cuando accedes a tu servidor vía FTP.

Si no ves este archivo, créalo localmente en tu sistema y copia el siguiente contenido: [Abiotic Factor Default SandboxSettings.ini GitHub](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

Ahora puedes ajustar los valores como desees. Una vez listo, sube este archivo a la carpeta principal `world` vía FTP, en la siguiente ruta:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

En la tabla a continuación, resumimos algunos ajustes clave de juego que se encuentran en el archivo **SandboxSettings.ini**. Si quieres ver todas las opciones disponibles, consulta la [Página Oficial de GitHub](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

| Nombre del Parámetro         | Ejemplo    | Descripción                                                            |
| ---------------------------- | ---------- | ---------------------------------------------------------------------- | 
| LootRespawnEnabled           | true/false | Activa o desactiva si el loot debe reaparecer alrededor del mapa      |
| PowerSocketsOffAtNight       | true/false | Activa o desactiva si la energía debe estar apagada durante la noche  |
| DayNightCycleSpeedMultiplier | 1.0        | Establece el multiplicador de velocidad del ciclo día y noche         |
| EnemySpawnRate               | 1.0        | Establece la frecuencia con la que aparecen enemigos                  |
| EnemyHealthMultiplier        | 1.0        | Establece un multiplicador para la salud de los enemigos              |
| EnemyPlayerDamageMultiplier  | 1.0        | Establece un multiplicador para el daño que los enemigos hacen a jugadores |
| DetectionSpeedMultiplier     | 1.0        | Establece un multiplicador para la rapidez con la que los enemigos detectan a los jugadores |
| PlayerXPGainMultiplier       | 1.0        | Establece un multiplicador para la XP ganada por los jugadores        |
| ItemStackSizeMultiplier      | 1.0        | Establece un multiplicador para la cantidad de ítems que se pueden apilar en un espacio de inventario |
| ItemDurabilityMultiplier     | 1.0        | Establece un multiplicador para la durabilidad de los ítems           |
| ShowDeathMessages            | true/false | Activa o desactiva si los jugadores deben ser notificados de muertes de entidades |
| AllowRecipeSharing           | true/false | Activa o desactiva si los jugadores pueden compartir recetas de ítems  |

Después de completar tus cambios, asegúrate de guardar el archivo donde corresponda y reiniciar tu servidor. La próxima vez que tu servidor arranque, usará los ajustes que hayas proporcionado.

<InlineVoucher />