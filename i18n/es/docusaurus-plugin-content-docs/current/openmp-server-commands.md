---
id: openmp-server-commands
title: "Open.mp: Comandos del Servidor Open.mp"
description: "Descubre cómo gestionar los comandos del servidor Open.mp de forma segura con acceso RCON y mejora el control de tu servidor → Aprende más ahora"
sidebar_label: Comandos del Servidor
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los servidores Open.mp vienen con un conjunto de comandos útiles integrados que puedes usar tanto dentro del juego como desde la consola de tu servidor. En esta guía, exploraremos muchos de estos comandos, proporcionando descripciones y ejemplos de uso para cada uno.

<InlineVoucher />

## Configurando el acceso (RCON)

Para poder ejecutar comandos del servidor dentro del juego, tendrás que activar la función RCON. Debes acceder a tu archivo de configuración `config.json` y ajustar los parámetros necesarios para activar la función y añadir una contraseña. Usa nuestra [guía de Configuración del Servidor](openmp-configuration.md) para acceder al archivo de configuración de tu servidor.

Una vez tengas el archivo listo, busca los siguientes parámetros; activa la función y establece una contraseña para RCON.

| Nombre del Parámetro          | Ejemplo                                | Descripción                                                                                   |
| ----------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------- | 
| rcon.enable                   | true                                  | Activa o desactiva la función RCON                                                           |
| rcon.password                 | ZAP-IS-AWESOME                        | Establece una contraseña que se debe usar para acceder a RCON desde los clientes             |

:::info
Asegúrate de haber configurado una contraseña RCON en tu configuración. De lo contrario, podrías tener problemas y RCON será accesible para cualquiera, lo cual es muy inseguro.
:::

Después de hacer los cambios, guarda el archivo donde corresponda y reinicia tu servidor. La próxima vez que arranque, RCON debería estar accesible y listo para usarse.

:::tip
Si quieres saber más sobre RCON, no dudes en consultar nuestra [guía de RCON](openmp-rcon.md) que entra en más detalles.
:::

## Comandos Disponibles

La tabla a continuación muestra una variedad de comandos importantes para servidores Open.mp, junto con ejemplos de uso y descripciones. Puedes usarlos dentro del juego, desde la consola del servidor o mediante un programa RCON. Si quieres ver todos los comandos actuales, te recomendamos leer la [guía de control de servidor de open.mp](https://www.open.mp/docs/server/ControllingServer) que presenta todos los comandos disponibles.

:::tip
Cuando ejecutes comandos directamente desde la consola o mediante un programa RCON, no necesitas usar el prefijo `/rcon`. Solo debes usarlo cuando ejecutes los comandos **dentro del juego**.
:::

:::note
Asegúrate de que RCON esté activado, de lo contrario estos comandos no funcionarán ni dentro del juego ni a través de un programa RCON.
:::

### Comandos Generales

| Sintaxis del Comando          | Valores Aceptados | Descripción                                                        | 
| ----------------------------- | ----------------- | ------------------------------------------------------------------ | 
| /rcon cmdlist                 | -                 | Devuelve una lista con todos los comandos del servidor            | 
| /rcon varlist                 | -                 | Devuelve una lista con todas las variables actuales del servidor  | 
| /rcon exit                    | -                 | Apaga el servidor                                                  | 
| /rcon echo [texto]            | Cadena            | Envía un mensaje a la consola del servidor (no se muestra en juego) | 
| /rcon say [texto]             | Cadena            | Envía un mensaje a todos los jugadores en juego (aparece como "Admin: [texto]") | 
| /rcon players                 | -                 | Proporciona información sobre todos los jugadores conectados      |
| /rcon reloadlog               | -                 | Recarga el archivo de registro del servidor                        |

### Comandos de Moderación

| Sintaxis del Comando          | Valores Aceptados | Descripción                                                        | 
| ----------------------------- | ----------------- | ------------------------------------------------------------------ | 
| /rcon kick [id]               | Entero            | Expulsa al jugador objetivo del servidor                           | 
| /rcon ban [id]                | Entero            | Prohíbe al jugador objetivo el acceso al servidor                  | 
| /rcon banip [ip]              | Cadena            | Prohíbe una dirección IP en el servidor                            | 
| /rcon unbanip [ip]            | Cadena            | Quita la prohibición a una dirección IP en el servidor            | 
| /rcon reloadbans              | -                 | Recarga el archivo de prohibiciones                                |

<InlineVoucher />