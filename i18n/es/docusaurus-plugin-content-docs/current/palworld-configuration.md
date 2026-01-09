---
id: palworld-configuration
title: "Palworld: Configuración del Servidor Palworld"
description: "Descubre cómo personalizar los ajustes del servidor Palworld para una experiencia de juego a tu medida y optimiza tu partida → Aprende más ahora"
sidebar_label: Configuración del Servidor
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Los servidores de Palworld vienen con un montón de parámetros de configuración que puedes personalizar a tu gusto. En esta guía, exploraremos todos los parámetros disponibles actualmente y explicaremos cada uno con más detalle.
<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/LsRSG5MHK9PyQZF/preview" title="¡Configura tu servidor Palworld en solo UN MINUTO!" description="¿Te gusta entender mejor cuando ves las cosas en acción? ¡Aquí te tenemos! Sumérgete en nuestro video que lo explica todo. Ya sea que tengas prisa o prefieras absorber la info de la forma más entretenida posible."/>

<InlineVoucher />

## Accediendo a tu Archivo de Configuración

Primero, tendrás que acceder a tu archivo de configuración para poder editar cualquier parámetro. Hay varias formas de editar este archivo.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Vía Webinterface" default>

#### Vía Webinterface

El método más amigable es ir a la sección **Settings** en el panel web de tu servidor de juegos y buscar los ajustes correspondientes, como se muestra a continuación:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Vía archivo de Configuración en WI">

#### Vía archivo de Configuración en WI

:::note
El servidor debe estar detenido antes de editar la configuración, editar el archivo y reiniciar el servidor hará que los cambios se deshagan.
:::

Alternativamente, para usuarios que quieran editar el archivo directamente, pueden acceder a él yendo a la sección **Configs** en el panel web de tu servidor de juegos y pulsando el botón azul de editar archivo, como se ve aquí:

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

Esto abrirá un editor de texto directamente en la web para que puedas modificarlo.

</TabItem>

<TabItem value="ftp" label="Vía FTP">


#### Vía FTP

:::note
El servidor debe estar detenido antes de editar la configuración, editar el archivo y reiniciar el servidor hará que los cambios se deshagan.
:::

El último método para acceder al archivo es a través de FTP. Si no estás familiarizado con FTP, te recomendamos echar un vistazo a la [guía de Acceso vía FTP](gameserver-ftpaccess.md). Sin embargo, este método es más lento y si quieres editar el contenido directamente, te recomendamos usar la sección **Configs** en el panel web de tu servidor de juegos como mencionamos antes.

</TabItem>
</Tabs>

## Opciones de Configuración del Servidor

### Activar soporte Crossplay

Los servidores dedicados de Palworld soportan el uso de múltiples plataformas, así que puedes usar crossplay. La plataforma Steam está configurada por defecto. Si quieres activar soporte para Xbox, PS5 y Mac, puedes hacerlo en la administración del servidor de juegos bajo los ajustes.

![img](https://screensaver01.zap-hosting.com/index.php/s/nD5kBoNH2JBfoxF/preview)

:::info
El crossplay entre las versiones de Steam y Microsoft Store/Xbox aún no es posible. Tu servidor puede estar configurado para funcionar con Steam o con Microsoft Store/Xbox, no ambos.
:::

:::info
En consolas Xbox no puedes conectarte directamente vía dirección IP, por lo que si planeas jugar en Xbox, tendrás que hacer tu servidor dedicado público.

También deberías poner un nombre de servidor fácil de encontrar, consulta nuestra [guía de Configuración del Servidor](palworld-configuration.md) para saber cómo hacerlo.
:::

### Ajustes Importantes del Servidor

Estas son opciones de configuración esenciales para personalizar el listado de tu servidor, protegerlo con contraseñas y otros ajustes internos.

:::tip
No recomendamos cambiar los valores de Puerto o IP, ya que estos se configuran automáticamente por el servidor de juegos. Cambiar IP/Puerto puede romper tu servidor de juegos.
:::

| Nombre del Parámetro           | Ejemplo                               | Descripción                                               |
| ------------------------------ | ------------------------------------- | --------------------------------------------------------- | 
| ServerPlayerMaxNum             | 4                                     | Máximo número de jugadores que pueden unirse al servidor (máx 32) |
| ServerName                     | ZAP-Hosting Docs Test                 | Nombre de tu servidor                                     |
| ServerDescription              | Este es un servidor de prueba         | Descripción de tu servidor                                |
| AdminPassword                  | ctRQvhPAWVHq                        | Contraseña de administrador para comandos admin          |
| ServerPassword                 | iLoveZAP!2024                       | Bloquea el servidor con contraseña (privado)             |
| PublicPort                     | 8211 (por defecto)                  | Puerto público en el que corre el servidor                |
| PublicIP                       | 123.123.123.123                     | IP pública en la que corre el servidor                     |
| RCONEnabled                    | true                                | Activa o desactiva el uso de RCON                          |
| RCONPort                       | 8222                                | Puerto usado para RCON                                     |

Cuando termines de hacer cambios, asegúrate de guardar el archivo donde corresponda y reiniciar tu servidor. La próxima vez que arranque, usará los ajustes que configuraste.

### Ajustes de Configuración de Gameplay

Estas son opciones menos críticas, principalmente para modificar la jugabilidad, progresión, así como el mapa y mundo en el que juegas.

| Nombre del Parámetro             | Descripción                                      | 
| -------------------------------- | ------------------------------------------------ | 
| DayTimeSpeedRate                 | Velocidad del tiempo durante el día              |
| NightTimeSpeedRate               | Velocidad del tiempo durante la noche            |
| ExpRate                        | Velocidad a la que ganas experiencia (XP)         |
| PalCaptureRate                 | Velocidad para capturar Pals                      |
| PalSpawnNumRate                | Frecuencia de aparición de Pals                   |
| PalDamageRateAttack            | Multiplicador de daño de los pals                 |
| PalDamageRateDefense           | Multiplicador de daño recibido por los pals      |
| PlayerDamageRateAttack         | Multiplicador de daño del jugador                  |
| PlayerDamageRateDefense        | Multiplicador de daño recibido por el jugador     |
| PlayerStomachDecreaceRate      | Velocidad de disminución del hambre del jugador   |
| PlayerStaminaDecreaceRate      | Velocidad de reducción de la stamina del jugador  |
| PlayerAutoHPRegeneRate         | Velocidad de regeneración automática de HP jugador|
| PlayerAutoHpRegeneRateInSleep  | Regeneración de HP del jugador mientras duerme    |
| PalStomachDecreaceRate         | Velocidad de disminución del hambre de los pals   |
| PalStaminaDecreaceRate         | Velocidad de reducción de stamina de los pals     |
| PalAutoHPRegeneRate            | Velocidad de regeneración automática de HP de pals|
| PalAutoHpRegeneRateInSleep     | Regeneración de HP de pals mientras duermen (en Palbox) |
| BuildObjectDamageRate          | Multiplicador de daño a estructuras                |
| BuildObjectDeteriorationDamageRate | Velocidad de deterioro de estructuras           |
| CollectionDropRate             | Multiplicador de ítems recolectables               |
| CollectionObjectHpRate         | Multiplicador de HP de objetos recolectables       |
| CollectionObjectRespawnSpeedRate | Intervalo de reaparición de objetos recolectables |
| EnemyDropItemRate              | Multiplicador de ítems que sueltan enemigos        |
| DeathPenalty                   | Penalización por muerte (Ninguna/Ítem)             |
| GuildPlayerMaxNum              | Máximo número de jugadores en un gremio            |
| PalEggDefaultHatchingTime      | Tiempo (h) para incubar huevo masivo               |

Cuando termines de hacer cambios, asegúrate de guardar el archivo donde corresponda y reiniciar tu servidor. La próxima vez que arranque, usará los ajustes que configuraste.

<InlineVoucher />