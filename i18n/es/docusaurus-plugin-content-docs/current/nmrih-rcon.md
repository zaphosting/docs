---
id: nmrih-rcon
title: "No More Room In Hell: RCON"
description: "Descubre cómo gestionar remotamente servidores de No More Room In Hell para un control y monitoreo flexible → Aprende más ahora"
sidebar_label: RCON
services:
  - gameserver-nmrih
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

RCON (Remote Console) es un protocolo de red usado para controlar servidores de juegos de forma remota. Permite acceder a la consola del servidor sin interactuar directamente con el entorno del servidor. Esto hace posible ejecutar comandos administrativos, ajustar parámetros de configuración o recuperar información del estado del servidor.

En No More Room In Hell, RCON se usa para ejecutar comandos del lado del servidor, como gestionar jugadores, cambiar configuraciones de juego o acceder a salidas de diagnóstico. La conexión está protegida por una contraseña y funciona a través de un puerto específico, accesible mediante clientes RCON compatibles.

Una gran ventaja de RCON es que permite la gestión del servidor **sin necesidad de estar conectado al juego como jugador**. Los administradores pueden monitorear y controlar No More Room In Hell desde herramientas externas, interfaces de línea de comandos o paneles web, ofreciendo flexibilidad y comodidad para la operación remota.

<InlineVoucher />

## Configuración

Antes de usar RCON, debe habilitarse y configurarse. Esto se hace editando el archivo de configuración ubicado en **Configs** dentro del panel de gestión del servidor de juegos. En el archivo llamado `server.cfg`, se deben añadir o modificar las siguientes entradas:

```cfg
rcon_password "define-tu-contraseña"
```


## Conexión vía RCON

Para conectarte al servidor de No More Room In Hell vía RCON, se usa la herramienta de línea de comandos **rcon-cli**. Puedes descargarla desde el repositorio oficial en [GitHub](https://github.com/gorcon/rcon-cli). Tras descargar e instalar la herramienta en tu PC, puedes establecer la conexión usando la dirección IP del servidor, el puerto RCON y la contraseña RCON.

El puerto asignado lo encuentras en la **Vista general de puertos** al final de la página de configuración en la administración del servidor de juegos. La contraseña y el puerto deben coincidir con los valores configurados en el panel o archivo de configuración. Usa el siguiente comando para conectar y ejecutar un comando directamente:

```bash
rcon-cli -a <IP>:<PUERTO> -p <CONTRASEÑA> comando
```


## Comandos RCON

Una vez conectado vía RCON, puedes ejecutar varios comandos administrativos y de diagnóstico en el servidor de No More Room In Hell. Los comandos disponibles dependen del motor del juego, pero normalmente incluyen acciones para gestión de jugadores, consultas de estado y control del servidor.

| Comando                      | Descripción                                  |
| ---------------------------- | -------------------------------------------- |
| `rcon_password <contraseña>` | Autentica el acceso RCON                      |
| `status`                     | Muestra información del servidor y jugadores |
| `changelevel <mapa>`         | Cambia al mapa especificado                   |
| `mp_timelimit <min>`         | Establece el límite de tiempo por mapa        |
| `mp_roundtime <min>`         | Establece la duración de la ronda             |
| `sv_cheats 0/1`              | Activa/desactiva comandos de trampa (solo admin) |
| `kick <jugador>`             | Expulsa a un jugador del servidor             |
| `banid <duración> <SteamID>` | Banea a un jugador por un tiempo determinado  |
| `exec <archivo.cfg>`         | Ejecuta un archivo de configuración            |
| `say <mensaje>`              | Envía un mensaje a todos los jugadores         |

## Conclusión

RCON es una herramienta clave para la administración remota de servidores de juegos No More Room In Hell. Permite un acceso rápido y directo a funciones administrativas, con control de acceso mediante autenticación por contraseña. Una configuración correcta y segura es fundamental para garantizar la estabilidad del servidor y protegerlo contra accesos no autorizados.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />