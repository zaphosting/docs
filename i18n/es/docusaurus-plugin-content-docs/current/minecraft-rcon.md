---
id: minecraft-rcon
title: "Minecraft: RCON"
description: "Descubre cómo gestionar servidores de juegos Minecraft de forma remota con RCON para un control flexible, seguro y una administración eficiente → Aprende más ahora"
sidebar_label: RCON
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

RCON (Remote Console) es un protocolo de red usado para controlar servidores de juegos de forma remota. Permite acceder a la consola del servidor sin interactuar directamente con el entorno del servidor. Esto hace posible ejecutar comandos administrativos, ajustar parámetros de configuración o recuperar información sobre el estado del servidor.

En Minecraft, RCON se usa para ejecutar comandos del lado del servidor, como gestionar jugadores, cambiar configuraciones de juego o acceder a salidas de diagnóstico. La conexión está protegida por una contraseña y funciona a través de un puerto específico, accesible mediante clientes RCON compatibles.

Una gran ventaja de RCON es que permite administrar el servidor **sin necesidad de estar conectado al juego como jugador**. Los administradores pueden monitorear y controlar Minecraft desde herramientas externas, interfaces de línea de comandos o paneles web, ofreciendo flexibilidad y comodidad para la operación remota.

<InlineVoucher />

## Configuración

Antes de poder usar RCON, debe activarse y configurarse. Esto se hace directamente en la administración del servidor de juegos. En la sección **Ajustes**, hay una opción llamada **RCON** que debe activarse. Se debe establecer una contraseña segura y definir un puerto válido. Esto se realiza editando el archivo de configuración ubicado en **Configs** dentro del panel de administración del servidor de juegos. En el archivo llamado `server.properties`, se deben añadir o modificar las siguientes entradas:

```cfg
enable-rcon=true
rcon.port=<XXXXX>
rcon.password=<define-tu-contraseña>
```
El puerto asignado para RCON se encuentra al final de la página de ajustes en el resumen de puertos y debe especificarse ahí.



## Conexión vía RCON

Para conectarse al servidor Minecraft vía RCON, se usa la herramienta de línea de comandos **rcon-cli**. Puedes descargarla desde el repositorio oficial en [GitHub](https://github.com/gorcon/rcon-cli). Tras descargar e instalar la herramienta en tu PC, puedes establecer la conexión usando la dirección IP del servidor, el puerto RCON y la contraseña RCON.

El puerto asignado lo encuentras en el **resumen de puertos** al final de la página de ajustes en la administración del servidor de juegos. La contraseña y el puerto deben coincidir con los valores configurados en el panel o en el archivo de configuración. Usa el siguiente comando para conectarte y ejecutar un comando directamente:

```bash
rcon-cli -a <IP>:<PUERTO> -p <CONTRASEÑA> comando
```



## Comandos RCON

Una vez conectado vía RCON, puedes ejecutar varios comandos administrativos y de diagnóstico en el servidor Minecraft. Los comandos disponibles dependen del motor del juego, pero normalmente incluyen acciones para gestión de jugadores, consultas de estado y control del servidor.

| Comando               | Descripción                                 |
|------------------------|---------------------------------------------|
| `list`               | Lista los jugadores conectados              |
| `say <mensaje>`       | Envía un mensaje a todos los jugadores      |
| `kick <jugador>`      | Expulsa a un jugador del servidor            |
| `ban <jugador>`       | Prohíbe a un jugador                         |
| `pardon <jugador>`    | Quita la prohibición a un jugador            |
| `op <jugador>`        | Otorga privilegios de operador a un jugador |
| `deop <jugador>`      | Revoca privilegios de operador               |
| `time set <valor>`    | Establece la hora del mundo (ej. día, noche, número) |
| `gamemode <modo> <jugador>` | Cambia el modo de juego de un jugador  |
| `weather <clear/rain/thunder>` | Cambia el clima                      |
| `stop`                | Detiene el servidor de forma segura          |



## Conclusión

RCON es una herramienta clave para la administración remota de servidores de juegos Minecraft. Permite un acceso rápido y directo a funciones administrativas, ofreciendo control de acceso mediante autenticación por contraseña. Una configuración adecuada y segura es fundamental para garantizar la estabilidad del servidor y protegerlo contra accesos no autorizados.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />