---
id: rust-commands
title: "Rust: Comandos de Admin"
description: "Descubre los comandos esenciales de Rust para la gestión del servidor y el control de jugadores para optimizar el gameplay y la administración → Aprende más ahora"
sidebar_label: Comandos de Admin
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Rust tiene una amplia variedad de comandos disponibles para que los propietarios de servidores y jugadores los usen. En esta página, resumimos los más útiles y populares que se usan para configuraciones del servidor, administración de jugadores y control de jugadores.

:::info
Algunos comandos requieren el uso del Steam64 ID de un jugador. Usa el pequeño tutorial a continuación para entender cómo obtener el Steam ID de un jugador.
:::

<InlineVoucher />

## Cómo obtener tu Steam ID
Primero, usa una herramienta como el [Steam ID Finder](https://steamidfinder.com/) para obtener tu Steam64 ID.

Aquí introduces tu URL de Steam:

![](https://screensaver01.zap-hosting.com/index.php/s/wscaNkzWSjzAktf/preview)

Luego presiona `Find Steam ID`. Ahora deberías poder ver tu perfil de Steam, aquí copiamos nuestro "Steam64ID (Dec)".

Y eso es todo, ahora tienes el Steam64 ID y puedes usarlo para los comandos que requieran Steam64 ID más abajo.

## Categorías de Comandos

Usa las pestañas de sección abajo para cambiar entre cada categoría. Las tablas consisten en el comando en sí, los valores aceptados para el comando (si aplica) y una descripción para facilitar su comprensión.

:::info
Cualquier comando mencionado en esta página es para Rust vanilla.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="ServerSettings" label="Configuración del Servidor" default>

| Sintaxis del Comando                  | Valores Aceptados | Descripción | 
| ----------------------- | ---------- | --------- | 
| server.globalchat      | true/false          | Si es true, cualquier mensaje de chat se mostrará a todos los jugadores         | 
| server.stop      | -          | Detiene el servidor         | 
| server.save      | -          | Guarda el servidor         | 
| server.saveinterval "valor"      | Entero (por defecto 60)          | Establece el intervalo de auto-guardado para tu servidor (en segundos)         | 
| server.secure      | true/false          | Si es true, Easy Anti Cheat (EAC) rechazará la conexión de cualquier jugador no registrado o baneado antes de que se conecte         | 
| server.seed "valor"     | Entero (ej. 123456)          | Establece el valor seed para el mundo del servidor         | 
| server.stability      | true/false          | Si es true, se habilita la estabilidad estructural para construcciones         | 
| server.tickrate "rate"      | Entero (por defecto 30)          | Establece la tasa de ticks para tu servidor         | 
| server.writecfg      | -          | Guarda los cambios de configuración que se hayan establecido previamente mediante otros comandos del servidor         | 
| chat.serverlog      | true/false          | Si es true, el chat siempre se registrará en la consola del servidor         | 
| commands.echo "texto"      | Cadena (ej. "¡Hola Mundo!")          | Imprime el mensaje especificado en la consola del servidor         | 
| global.say "mensaje"      | Cadena (ej. "¡Bienvenidos!")          | Envía un mensaje a todos los jugadores en el servidor         | 
| env.time      | Entero (ej. 16)          | Establece la hora del mundo en el juego al valor especificado (en horas)         | 
| server.events      | -          | Si es true, habilita eventos del servidor como airdrops         | 
| commands.find "comando"      | Cadena (ej. "quit")          | Busca un comando o usando "." listará todos los comandos disponibles         | 
| global.quit      | -          | Guarda el servidor y luego lo detiene         | 
| global.init      | -          | Carga archivos de configuración         | 

</TabItem>
<TabItem value="PlayerAdmin" label="Admin de Jugadores">

| Sintaxis del Comando                  | Valores Aceptados | Descripción | 
| ----------------------- | ---------- | --------- | 
| global.ban "nombrejugador" "razón"      | Cadena (ej. "Jacob"), Cadena (ej. "Se portó mal!")          | Banea a un usuario del servidor (con razón opcional)         | 
| global.banid "steam64"      | Entero          | Banea a un usuario mediante su Steam 64 ID         | 
| global.banlistex      | -          | Devuelve una lista de usuarios baneados con su nombre de jugador y razón del baneo         | 
| global.banlist      | -          | Devuelve una lista de jugadores baneados en el chat         | 
| global.unban "steam64"      | Entero          | Desbanea a un usuario mediante su Steam 64 ID         | 
| global.kickall      | -          | Expulsa a todos los jugadores del servidor         | 
| global.kick "steam64 / nombrejugador" "razón"      | Entero/Cadena (ej. "Jacob"), Cadena (ej. "Se portó mal!")         | Expulsa a un usuario del servidor mediante su Steam 64 ID o nombre de jugador (con razón opcional)         | 
| global.ownerid "steam64 / nombrejugador"      | Entero/Cadena (ej. "Jacob")          | Establece al jugador especificado como administrador del servidor mediante su Steam 64 ID o nombre de jugador (Nivel de autorización 2)         | 
| global.removeowner "steam64"      | Entero         | Remueve privilegios de administrador del usuario mediante el Steam 64 ID especificado         | 
| global.moderatorid "steam64 / nombrejugador"      | Entero/Cadena (ej. "Jacob")          | Establece al jugador especificado como moderador del servidor mediante su Steam 64 ID o nombre de jugador (Nivel de autorización 1)         | 
| global.removemoderator "steam64"      | Entero          | Remueve privilegios de moderador del usuario mediante el Steam 64 ID especificado         | 
| global.listid      | -          | Devuelve una lista de usuarios baneados vía Steam 64 ID          | 

</TabItem>
<TabItem value="Player Controls" label="Controles de Jugador">

| Sintaxis del Comando                  | Valores Aceptados | Descripción | 
| ----------------------- | ---------- | --------- | 
| kill      | -          | Mata a tu propio jugador         | 
| global.quit      | -          | Guarda y sale del juego         | 
| global.god      | true/false          | Activa o desactiva el modo Dios para que el jugador no reciba daño (solo admins)          | 
| global.noclip      | true/false          | Activa o desactiva el modo Noclip para que el jugador pueda volar libremente (solo admins)          | 
| global.debugcamera      | true/false          | Activa o desactiva el modo cámara de depuración para que el jugador pueda usar cámara libre (solo admins)          | 
| player.sleep      | -          | Fuerza a tu jugador a dormir         | 
| commands.find "comando"      | Cadena (ej. "quit")          | Busca un comando disponible para el jugador
| chat.say "texto"     | Cadena (ej. "¡Hola Mundo!")          | Envía un mensaje a todos los jugadores en el servidor         | 
| inventory.give "itemID" "cantidad"     | Entero (itemID), Entero (ej. 5)          | Da un ítem a tu inventario         | 
| inventory.giveto "nombrejugador" "itemID" "cantidad"      | Cadena (ej. "Jacob"), Entero (itemID), Entero (ej. 5)          | Da un ítem al inventario del usuario especificado         | 

</TabItem>
</Tabs>

<InlineVoucher />