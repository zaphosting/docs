---
id: humanitz-rcon
title: "HumanitZ: RCON"
description: "Aprende a gestionar remotamente tu servidor de HumanitZ usando RCON y rcon-cli → Descubre más ahora"
sidebar_label: RCON
services:
- gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

RCON (Remote Console) es un protocolo de red usado para controlar servidores de juegos de forma remota. Permite a los administradores ejecutar comandos en el servidor sin necesidad de conectarse directamente al juego. Esto hace posible gestionar jugadores, ajustar configuraciones o monitorear la actividad del servidor desde fuera.

En **HumanitZ**, RCON se puede usar para ejecutar comandos administrativos como expulsar jugadores, enviar mensajes o controlar el comportamiento del servidor. El acceso está protegido mediante una contraseña y un puerto dedicado.

Una gran ventaja de RCON es que permite la administración del servidor **sin estar conectado como jugador dentro del juego**, facilitando una gestión remota flexible y eficiente.

<InlineVoucher />

## Configuración

Antes de poder usar RCON, debe estar habilitado en la configuración del servidor. Abre la página de ajustes de tu servidor y activa la opción rcon. También puedes configurarlo a través de los archivos de configuración. Abre el panel de gestión de tu servidor de juegos, navega a Configs y localiza el archivo `GameServerSettings.ini`.

Agrega o ajusta las siguientes entradas:

```
RCONEnabled=true
RCONPassword=tu_contraseña_segura
RCONPort=XXXXX
```

El puerto RCON asignado lo puedes encontrar en la **visión general de puertos** dentro de la administración de tu servidor. Asegúrate de que la contraseña y el puerto coincidan con tu configuración.

Después de hacer los cambios, guarda el archivo y **reinicia el servidor** para que los ajustes tengan efecto.

## Conexión vía RCON

Para conectarte a tu servidor de HumanitZ vía RCON, puedes usar la herramienta de línea de comandos **rcon-cli**. Está disponible en el repositorio oficial de GitHub:
https://github.com/gorcon/rcon-cli

Una vez instalado, puedes conectarte a tu servidor usando el siguiente comando:

```bash
rcon-cli -a <IP>:<PUERTO> -p <CONTRASEÑA> comando
```

Sustituye los marcadores por la dirección IP de tu servidor, el puerto RCON y la contraseña.

Este comando te permite ejecutar comandos RCON directamente desde tu sistema local sin necesidad de una sesión interactiva.

## Comandos RCON

Una vez conectado vía RCON, puedes ejecutar varios comandos administrativos en tu servidor de HumanitZ. Los comandos disponibles dependen de la implementación del juego, pero comúnmente incluyen gestión de jugadores y control del servidor.

| Comando | Descripción |
|----------------------------------|------------------------------------------|
| `broadcast <mensaje>`| Envía un mensaje a todos los jugadores |
| `kick <nombrejugador>`| Expulsa a un jugador del servidor |
| `ban <nombrejugador>` | Prohíbe a un jugador |
| `unban <nombrejugador>` | Quita la prohibición a un jugador |
| `save` | Guarda el estado actual del juego |
| `restart`| Reinicia el servidor |
| `shutdown` | Apaga el servidor |
| `whitelist add <steamid>`| Añade un jugador a la lista blanca |
| `whitelist remove <steamid>` | Elimina un jugador de la lista blanca |

## Conclusión

¡Felicidades! Has configurado y usado con éxito **RCON para tu servidor de HumanitZ**. Esto te permite gestionar tu servidor remotamente, ejecutar comandos administrativos y mantener el control sin necesidad de entrar al juego.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />