---
id: hytale-commands
title: "Hytale: Lista de Comandos"
description: "Resumen de comandos disponibles en consola y en el juego para servidores Hytale → Aprende más ahora"
sidebar_label: Lista de Comandos
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los servidores Hytale ofrecen una amplia variedad de comandos que permiten a los administradores gestionar la jugabilidad, jugadores, mundos y la configuración del servidor. Estos comandos se pueden ejecutar tanto a través de la consola en vivo del servidor como directamente en el juego, siempre que se tengan los permisos necesarios.

![](https://screensaver01.zap-hosting.com/index.php/s/2yJ6G3AWCDfAHMj/download)

Esta página ofrece un resumen de los comandos más usados y oficialmente documentados para servidores Hytale.

<InlineVoucher />



## Autenticación

Los comandos de autenticación son necesarios para autorizar el servidor y que pueda aceptar conexiones de jugadores e interactuar con los servicios online de Hytale.

| Comando               | Descripción                                                  |
| --------------------- | ------------------------------------------------------------ |
| `/auth login device`  | Inicia el flujo de autenticación basado en dispositivo. El servidor muestra una URL y un código de dispositivo que debe confirmarse con una cuenta de Hytale. |
| `/auth login browser` | Inicia un flujo de autenticación basado en navegador. Requiere un entorno gráfico en el servidor. |
| `/auth status`        | Muestra el estado actual de autenticación del servidor.      |
| `/auth logout`        | Cierra la sesión del servidor y elimina la sesión de autenticación activa. |



## Jugador & Permisos

Estos comandos controlan el acceso administrativo y la asignación detallada de permisos para usuarios y grupos.

| Comando                                   | Descripción                                             |
| ----- | - |
| `/op add <PlayerName>`                    | Otorga privilegios de operador al jugador especificado.     |
| `/op remove <PlayerName>`                 | Revoca privilegios de operador al jugador especificado.  |
| `/perm user list <uuid>`                  | Muestra todos los permisos asignados directamente al usuario. |
| `/perm user add <uuid> <permission>`      | Asigna uno o más permisos directamente al usuario.   |
| `/perm user remove <uuid> <permission>`   | Elimina permisos específicos del usuario.             |
| `/perm user group list <uuid>`            | Muestra todos los grupos de permisos a los que pertenece el usuario.    |
| `/perm user group add <uuid> <group>`     | Añade al usuario al grupo de permisos especificado.        |
| `/perm user group remove <uuid> <group>`  | Elimina al usuario del grupo de permisos especificado.   |
| `/perm group list <group>`                | Lista todos los permisos asignados a un grupo.              |
| `/perm group add <group> <permission>`    | Añade permisos a un grupo.                            |
| `/perm group remove <group> <permission>` | Elimina permisos de un grupo.                       |



## Lista blanca

Los comandos de lista blanca restringen el acceso al servidor solo a jugadores aprobados.

| Comando                          | Descripción                                      |
| -------------------------------- | ------------------------------------------------ |
| `/whitelist add <playername>`    | Añade al jugador especificado a la lista blanca.      |
| `/whitelist remove <playername>` | Elimina al jugador especificado de la lista blanca. |
| `/whitelist list`                | Muestra todos los jugadores actualmente en la lista blanca.      |
| `/whitelist enable`              | Activa la aplicación de la lista blanca.                   |
| `/whitelist disable`             | Desactiva la lista blanca.                          |
| `/whitelist status`              | Muestra el estado actual de la lista blanca.           |



## Gestión de mundos

Los comandos de mundo controlan la creación, carga, descarga y eliminación de mundos.

| Comando                    | Descripción                                        |
| -- | -- |
| `/world create <name>`     | Crea un nuevo mundo con el nombre especificado.       |
| `/world load <name>`       | Carga un mundo existente y lo activa.       |
| `/world unload <name>`     | Descarga un mundo sin eliminar sus datos.         |
| `/world remove <name>`     | Elimina un mundo y todos sus datos asociados.           |
| `/world setdefault <name>` | Establece el mundo predeterminado que se carga al iniciar el servidor. |



## Jugabilidad y entorno

Estos comandos afectan directamente las reglas de juego y el comportamiento del mundo.

| Comando                    | Descripción                                 |
| -------------------------- | ------------------------------------------- |
| `/list`                    | Muestra todos los jugadores conectados actualmente.   |
| `/tp <player> <target>`    | Teletransporta a un jugador hacia otro jugador.     |
| `/tp <player> <x> <y> <z>` | Teletransporta a un jugador a coordenadas específicas. |



## Teletransporte & Posicionamiento

Comandos usados para gestionar posiciones y visibilidad de jugadores.

| Comando                    | Descripción                                 |
| -- | - |
| `/list`                    | Muestra todos los jugadores conectados actualmente.   |
| `/tp <player> <target>`    | Teletransporta a un jugador hacia otro jugador.     |
| `/tp <player> <x> <y> <z>` | Teletransporta a un jugador a coordenadas específicas. |



## Utilidades y ayuda

Los comandos de utilidad ofrecen ayuda e información del servidor.

| Comando           | Descripción                                          |
| ----- | ---- |
| `/help`           | Muestra una lista de comandos disponibles.               |
| `/help <command>` | Muestra ayuda detallada para un comando específico.       |
| `/status`         | Muestra el estado actual del servidor e información de ejecución. |



## Conclusión

El sistema de comandos de Hytale ofrece herramientas potentes para gestionar servidores, jugadores y el comportamiento del juego. Entendiendo y usando los comandos disponibles, los administradores pueden operar y personalizar su entorno de servidor Hytale de forma eficiente.

Para cualquier duda o asistencia, no dudes en contactar con nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂



<InlineVoucher />