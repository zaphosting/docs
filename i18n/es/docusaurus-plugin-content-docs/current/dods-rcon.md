---
id: dods-rcon
title: "Day of Defeat: Source: RCON"
description: "Descubre cómo gestionar remotamente servidores de Day of Defeat: Source para un control y monitoreo flexibles → Aprende más ahora"
sidebar_label: RCON
services:
  - gameserver-dods
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

RCON (Remote Console) es un protocolo de red usado para controlar servidores de juegos de forma remota. Permite acceder a la consola del servidor sin interactuar directamente con el entorno del servidor. Esto hace posible ejecutar comandos administrativos, ajustar parámetros de configuración o recuperar información del estado del servidor.

En Day of Defeat: Source, RCON se usa para ejecutar comandos del lado del servidor, como gestionar jugadores, cambiar configuraciones de juego o acceder a salidas de diagnóstico. La conexión está protegida por una contraseña y funciona a través de un puerto específico, accesible mediante clientes RCON compatibles.

Una gran ventaja de RCON es que permite administrar el servidor **sin necesidad de estar conectado al juego como jugador**. Los administradores pueden monitorear y controlar Day of Defeat: Source desde herramientas externas, interfaces de línea de comandos o paneles web, ofreciendo flexibilidad y comodidad para la operación remota.

<InlineVoucher />

## Configuración

Antes de usar RCON, debe activarse y configurarse. Esto se hace directamente en la administración del servidor de juegos. En la sección **Configuración**, hay una opción llamada **RCON** que debe activarse. Se debe establecer una contraseña segura y definir un puerto válido.

El puerto asignado para RCON se encuentra al final de la página de configuración en el **Resumen de puertos**.

También se puede configurar editando el archivo de configuración ubicado en **Configs** dentro del panel de administración del servidor de juegos. En el archivo llamado `server.cfg`, se deben añadir o modificar las siguientes líneas:

```cfg
rcon_password "define-tu-contraseña"
```

## Conexión vía RCON

Para conectarse al servidor de Day of Defeat: Source vía RCON, se utiliza la herramienta de línea de comandos **rcon-cli**. Puedes descargarla desde el [repositorio oficial en GitHub](https://github.com/gorcon/rcon-cli). Tras descargar e instalar la herramienta en tu PC, puedes establecer conexión usando la dirección IP del servidor, el puerto RCON y la contraseña RCON.

El puerto asignado lo encuentras en el **Resumen de puertos** al final de la página de configuración en la administración del servidor de juegos. La contraseña y el puerto deben coincidir con los valores configurados en el panel o en el archivo de configuración. Usa el siguiente comando para conectar y ejecutar un comando directamente:

```bash
rcon-cli -a <IP>:<PUERTO> -p <CONTRASEÑA> comando
```

## Comandos RCON

Una vez conectado vía RCON, puedes ejecutar varios comandos administrativos y de diagnóstico en el servidor de Day of Defeat: Source. Los comandos disponibles dependen del motor del juego, pero normalmente incluyen acciones para gestión de jugadores, consultas de estado y control del servidor.

| Comando                      | Descripción                                  |
| ---------------------------- | -------------------------------------------- |
| `rcon_password <contraseña>` | Autentica el acceso RCON                      |
| `status`                     | Muestra información del servidor y jugadores |
| `changelevel <mapa>`         | Cambia al mapa especificado                   |
| `mp_timelimit <min>`         | Establece el límite de tiempo por mapa        |
| `mp_roundtime <min>`         | Establece la duración de la ronda             |
| `sv_cheats 0/1`              | Activa/desactiva comandos de trampa (solo admin) |
| `kick <jugador>`             | Expulsa a un jugador del servidor              |
| `banid <duración> <SteamID>` | Banea a un jugador por un tiempo determinado   |
| `exec <archivo.cfg>`         | Ejecuta un archivo de configuración             |
| `say <mensaje>`              | Envía un mensaje a todos los jugadores          |

## Conclusión

RCON es una herramienta clave para la administración remota de servidores de Day of Defeat: Source. Permite un acceso rápido y directo a funciones administrativas, con control de acceso mediante autenticación por contraseña. Una configuración correcta y segura es fundamental para garantizar la estabilidad del servidor y protegerlo contra accesos no autorizados.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />