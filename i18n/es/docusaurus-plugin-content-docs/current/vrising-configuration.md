---
id: vrising-configuration
title: "V Rising: Configuración del Servidor"
description: "Descubre cómo personalizar los ajustes del servidor de V Rising para un gameplay óptimo y controla tu entorno de servidor → Aprende más ahora"
sidebar_label: Configuración del Servidor
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los servidores de V Rising vienen con un montón de parámetros de configuración que puedes personalizar a tu gusto. En esta guía, exploraremos todos los parámetros disponibles actualmente y explicaremos cada uno con más detalle.

<InlineVoucher />

## Accediendo a tu Archivo de Configuración

Primero, tendrás que acceder a tu archivo de configuración para poder editar cualquier parámetro. Hay varias formas de editar este archivo.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Vía Webinterface" default>

#### Vía Webinterface

El método más amigable es ir a la sección **Settings** en el webinterface de tu servidor de juegos y buscar los ajustes correspondientes, como se muestra a continuación:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Vía archivo de Configuración WI">

#### Vía archivo de Configuración WI

:::note
El servidor debe estar detenido antes de editar la configuración, editar el archivo y reiniciar el servidor hará que los cambios se deshagan.
:::

Alternativamente, para usuarios que quieran editar directamente el archivo en crudo, puedes acceder a él yendo a la sección **Configs** en el webinterface de tu servidor de juegos y pulsando el botón azul de editar archivo, como se muestra a continuación:

![](https://screensaver01.zap-hosting.com/index.php/s/3Dg6NCtN9akx8bg/preview)

Esto abrirá un editor de texto directamente en el sitio para que puedas editarlo.

</TabItem>

<TabItem value="ftp" label="Vía FTP">

#### Vía FTP

:::note
El servidor debe estar detenido antes de editar la configuración, editar el archivo y reiniciar el servidor hará que los cambios se deshagan.
:::

El último método para acceder al archivo en crudo es a través de FTP. Si no estás familiarizado con el uso de FTP, te recomendamos echar un vistazo a la [guía de Acceso vía FTP](gameserver-ftpaccess.md). Sin embargo, este método es más lento y si quieres editar directamente el contenido del archivo, te recomendamos usar simplemente la sección **Configs** en el webinterface de tu servidor de juegos como mencionamos antes.

</TabItem>
</Tabs>

## Opciones de Configuración del Servidor

En las secciones siguientes, presentamos tablas con información sobre las opciones de configuración disponibles, tanto para el servidor en sí como para la configuración del gameplay.

:::tip
No recomendamos cambiar los ajustes de Puerto, ya que estos son configurados automáticamente por el servidor de juegos. ¡Cambiar los valores de Puerto puede romper tu servidor de juegos!
:::

### Ajustes Importantes del Servidor

Esta sección resume los ajustes más importantes del servidor, que se encuentran dentro del archivo de configuración **ServerHostSettings.json**. Para la lista completa de opciones de configuración, consulta la [guía oficial en GitHub del juego](https://github.com/StunlockStudios/vrising-dedicated-server-instructions/blob/master/1.0.x/INSTRUCTIONS.md).

| Nombre del Parámetro | Ejemplo                  | Descripción                                                                |
| -------------------- | ------------------------ | -------------------------------------------------------------------------- | 
| Name                 | ZAP-Hosting Docs Test    | Establece el nombre de tu servidor                                         |
| Description          | ZAP is the best!         | Establece la descripción de tu servidor                                    |
| Port                 | 9876 (por defecto)       | Establece el puerto de red que usará el juego                              |
| QueryPort            | 9877 (por defecto)       | Establece el puerto de consulta usado para devolver info del servidor en la lista de servidores |
| MaxConnectedUsers    | 10                       | Establece la cantidad máxima de jugadores que pueden estar en el servidor a la vez |
| MaxConnectedAdmins   | 4                        | Establece la cantidad de admins que pueden unirse a un servidor lleno      |
| ServerFps            | 30 (recomendado por defecto) | Establece la tasa de frames por segundo para tu servidor, recomendamos dejarlo por defecto |
| SaveName             | ZAPDocsTest              | Establece el nombre del guardado del mundo                                 |
| Password             | iLoveZAP!2024            | Establece una contraseña para tu servidor, o déjalo vacío para ninguno     |
| ListOnMasterServer   | true/false               | Activa o desactiva si tu servidor debe aparecer listado en la lista de servidores |
| AutoSaveCount        | 15                       | Decide cuántos guardados antiguos se deben almacenar                       |
| AutoSaveInterval     | 600                      | Establece el intervalo entre cada guardado automático                      |
| RCON Enabled         | true/false               | Activa o desactiva RCON                                                    |
| RCON Port            | 25575                    | Establece el puerto de RCON                                                |
| RCON Password        | iLoveZAP!2024            | Establece la contraseña para tu conexión RCON                             |

Después de completar tus cambios, asegúrate de guardar el archivo donde corresponda y reiniciar tu servidor. La próxima vez que tu servidor arranque, usará los ajustes que hayas configurado.

### Ajustes Clave de Configuración del Gameplay

V Rising tiene un montón de parámetros y opciones de configuración para ajustar el gameplay. Por eso, en esta sección resumimos los más importantes, que se encuentran dentro del archivo de configuración **ServerGameSettings.json**.

| Nombre del Parámetro       | Ejemplo                       | Descripción                                                                                          |
| -------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------- | 
| GameDifficulty             | Normal                        | Establece la dificultad del juego para tu mundo                                                    |
| GameModeType               | PvP, PvE                      | Establece el tipo de modo de juego para tu mundo                                                   |
| CastleDamageMode           | Always, Never, TimeRestricted | Establece cuándo los castillos pueden ser dañados, usando el parámetro VSCastle para seleccionar el tiempo en "TimeRestricted" |
| PlayerDamageMode           | Always, TimeRestricted        | Establece si otros jugadores pueden ser dañados, usando el parámetro VSPlayer para seleccionar el tiempo en "TimeRestricted" |
| PvPProtectionMode          | Short, Medium, Long           | Establece cuánto tiempo los jugadores nuevos son invencibles                                       |
| DeathContainerPermission   | Anyone, ClanMembers           | Establece quién puede saquear los objetos caídos cuando un jugador muere                           |
| CanLootEnemyContainers     | true/false                    | Establece si un jugador puede saquear el cofre de otro jugador que no está en su clan             |
| BloodBoundEquipment        | true/false                    | Establece si conservas tu equipo después de morir                                                  |
| TeleportBoundItems         | true/false                    | Establece si los objetos pueden bloquearte para teletransportarte vía las puertas vampíricas       |
| AllowGlobalChat            | true/false                    | Activa o desactiva el chat global                                                                  |

Después de completar tus cambios, asegúrate de guardar el archivo donde corresponda y reiniciar tu servidor. La próxima vez que tu servidor arranque, usará los ajustes que hayas configurado.

<InlineVoucher />