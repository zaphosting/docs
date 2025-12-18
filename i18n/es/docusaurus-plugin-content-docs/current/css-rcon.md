---
id: css-rcon
title: "Counter-Strike: Source: RCON"
description: "Descubre cómo gestionar y controlar remotamente servidores de Counter-Strike: Source de forma segura y eficiente → Aprende más ahora"
sidebar_label: RCON
services:
  - gameserver-css
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

RCON (Remote Console) es un protocolo de red usado para controlar servidores de juegos de forma remota. Permite acceder a la consola del servidor sin interactuar directamente con el entorno del servidor. Esto hace posible ejecutar comandos administrativos, ajustar parámetros de configuración o recuperar información del estado del servidor.

En Counter-Strike: Source, RCON se usa para ejecutar comandos del lado del servidor, como gestionar jugadores, cambiar configuraciones de juego o acceder a salidas de diagnóstico. La conexión está protegida por una contraseña y opera a través de un puerto especificado, accesible mediante clientes RCON compatibles.

Una ventaja clave de RCON es que permite la gestión del servidor **sin necesidad de estar conectado al juego como jugador**. Los administradores pueden monitorear y controlar Counter-Strike: Source desde herramientas externas, interfaces de línea de comandos o paneles web, ofreciendo flexibilidad y comodidad para la operación remota.

<InlineVoucher />

## Configuración

Antes de poder usar RCON, debe estar habilitado y configurado. Esto se hace editando el archivo de configuración ubicado en **Configs** dentro del panel de gestión del servidor de juegos. En el archivo llamado `server.cfg`, se deben agregar o modificar las siguientes entradas:

```cfg
rcon_password "define-tu-contraseña"
```


## Conexión vía RCON

Para conectarte al servidor de Counter-Strike: Source vía RCON, se usa la herramienta de línea de comandos **rcon-cli**. Puedes descargarla desde el repositorio oficial en [GitHub](https://github.com/gorcon/rcon-cli). Tras descargar e instalar la herramienta en tu PC, puedes establecer conexión usando la dirección IP del servidor, el puerto RCON y la contraseña RCON.

El puerto asignado lo encuentras en la **Vista general de puertos** al final de la página de configuración en la administración del servidor de juegos. La contraseña y el puerto deben coincidir con los valores configurados en el panel o en el archivo de configuración. Usa el siguiente comando para conectar y ejecutar un comando directamente:

```bash
rcon-cli -a <IP>:<PUERTO> -p <CONTRASEÑA> comando
```


## Comandos RCON

Una vez conectado vía RCON, puedes ejecutar varios comandos administrativos y de diagnóstico en el servidor de Counter-Strike: Source. Los comandos disponibles dependen del motor del juego, pero típicamente incluyen acciones para gestión de jugadores, consultas de estado y control del servidor.

| Comando                    | Descripción                                      |
|---------------------------|--------------------------------------------------|
| `rcon_password <contraseña>`   | Autenticar como admin RCON                     |
| `status`               | Muestra información de jugadores y servidor            |
| `changelevel <mapa>`   | Cambia el mapa                                    |
| `mp_autoteambalance 0/1` | Activa/desactiva el auto-balanceo de equipos       |
| `mp_timelimit <minutos>` | Establece el límite de tiempo del mapa                           |
| `mp_friendlyfire 0/1`    | Activa/desactiva el fuego amigo                 |
| `mp_freezetime <segundos>` | Establece el tiempo de congelación al inicio de ronda               |
| `sv_cheats 0/1`         | Activa trucos (solo para admins)                |
| `exec <archivo.cfg>`       | Ejecuta un archivo de configuración                         |
| `kick <jugador>`         | Expulsa a un jugador del servidor                |


## Conclusión

RCON es una herramienta clave para la administración remota de servidores de juegos Counter-Strike: Source. Permite un acceso rápido y directo a funciones administrativas, ofreciendo control de acceso mediante autenticación por contraseña. Una configuración adecuada y segura es fundamental para garantizar la estabilidad del servidor y protegerlo contra accesos no autorizados.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />