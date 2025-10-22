---
id: palworld-server-commands
title: "Palworld: Comandos del Servidor Palworld"
description: "Descubre cómo gestionar servidores de Palworld de forma efectiva usando comandos integrados para control admin y gameplay → Aprende más ahora"
sidebar_label: Comandos del Servidor
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Los servidores de Palworld vienen con un conjunto de comandos útiles integrados que puedes usar tanto en el juego como a través del panel de control de tu servidor. En esta guía, exploraremos muchos de estos comandos, proporcionando descripciones y ejemplos de uso para cada uno.

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/85ennn4gSYBPNYo/preview" title="¡Configura tu servidor PALWORLD en solo un MINUTO!" description="¿Te resulta más fácil entender cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que lo explica todo. Ya sea que tengas prisa o prefieras absorber la info de la forma más entretenida posible."/>

<InlineVoucher />

## Configurar Admin

Primero debes establecer una contraseña de admin para tu servidor Palworld y añadirte como admin en el juego antes de poder acceder a los comandos de admin en la siguiente sección.

Puedes configurar la contraseña de admin de tu servidor desde la pestaña **Settings** en el panel web de tu servidor o mediante el archivo de configuración **PalWorldSettings.ini**. Una vez configurada, puedes usar el comando `/AdminPassword [contraseña]` en el juego para añadirte como admin.

:::tip
Te recomendamos echar un vistazo a nuestra [guía de Configurar Admin](palworld-admin.md), que es una guía dedicada a este tema y ofrece detalles más profundos sobre cómo establecer la contraseña de admin y añadir usuarios como admin.
:::

## Comandos Disponibles

La tabla a continuación muestra varios comandos para el servidor de Palworld, junto con ejemplos de uso y descripciones, que puedes usar tanto en el juego como a través del panel de control del servidor.

Cuando se necesite el parámetro `steamid`, puedes copiar fácilmente el SteamID de un jugador haciendo clic derecho dos veces en la lista de jugadores.

:::info
Debes configurar una Contraseña de Admin y darte permiso usando el comando `/AdminPassword` antes de poder usar estos comandos. Si no, recibirás un error de permisos. Lee la siguiente sección de esta guía para entender cómo hacerlo.
:::

| Sintaxis del Comando           | Valores Aceptados | Descripción                                                           | 
| ------------------------------ | ----------------- | --------------------------------------------------------------------- | 
| /Shutdown [secs] [mensaje]     | Entero, Cadena    | Apaga el servidor después de los segundos especificados, con el mensaje incluido | 
| /DoExit                        | -                 | Fuerza la detención del servidor                                      | 
| /Broadcast                     | Cadena            | Envía un mensaje a todos los jugadores conectados al servidor        | 
| /KickPlayer [steamid]          | Cadena            | Expulsa al jugador objetivo del servidor                              | 
| /BanPlayer [steamid]           | Cadena            | Prohíbe al jugador objetivo del servidor                             | 
| /TeleportToPlayer [steamid]    | Cadena            | Teletransporta a ti hacia el jugador objetivo                        | 
| /TeleportToMe [steamid]        | Cadena            | Teletransporta al jugador objetivo hacia ti                          | 
| /ShowPlayers                   | -                 | Muestra información sobre todos los jugadores conectados actualmente | 
| /Info                          | -                 | Muestra información del servidor                                     | 
| /Save                          | -                 | Guarda los datos actuales del mundo                                  |

:::note
Actualmente no puedes desbanear a una persona desde el juego porque no hay un comando disponible para eso. Tendrías que editar manualmente el archivo `banlist.txt` en el directorio de tu servidor si quieres desbanear a un jugador.
:::

<InlineVoucher />