---
id: palworld-rcon
title: "Palworld: RCON"
description: "Descubre cómo gestionar servidores de Palworld de forma remota para un control y monitoreo flexibles sin necesidad de entrar al juego → Aprende más ahora"
sidebar_label: RCON
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

RCON (Remote Console) es un protocolo de red usado para controlar servidores de juegos de forma remota. Permite acceder a la consola del servidor sin interactuar directamente con el entorno del servidor. Esto hace posible ejecutar comandos administrativos, ajustar parámetros de configuración o recuperar información del estado del servidor.

En Palworld, RCON se usa para ejecutar comandos del lado del servidor, como gestionar jugadores, cambiar configuraciones de juego o acceder a salidas de diagnóstico. La conexión está protegida por una contraseña y funciona a través de un puerto específico, accesible mediante clientes RCON compatibles.

Una ventaja clave de RCON es que permite la gestión del servidor **sin tener que estar conectado al juego como jugador**. Los administradores pueden monitorear y controlar Palworld desde herramientas externas, interfaces de línea de comandos o paneles web, ofreciendo flexibilidad y comodidad para la operación remota.

<InlineVoucher />

## Configuración

Antes de poder usar RCON, debe activarse y configurarse. Esto se hace editando el archivo de configuración ubicado en **Configs** dentro del panel de gestión del servidor de juegos. En el archivo llamado `PalWorldSettings.ini`, se deben añadir o modificar las siguientes entradas:

```cfg
RCONEnabled=True,
RCONPort=XXXXX,
AdminPassword="define-tu-contraseña"
```
El puerto RCON asignado se encuentra al final de la página de configuración en el resumen de Puertos y debe especificarse ahí.



## Conexión vía RCON

Para conectarte al servidor de Palworld vía RCON, se usa la herramienta de línea de comandos **rcon-cli**. Puedes descargarla desde el [repositorio oficial en GitHub](https://github.com/gorcon/rcon-cli). Tras descargar e instalar la herramienta en tu PC, puedes establecer la conexión usando la dirección IP del servidor, el puerto RCON y la contraseña RCON.

El puerto asignado se encuentra en el **resumen de Puertos** al final de la página de configuración en la administración del servidor de juegos. La contraseña y el puerto deben coincidir con los valores configurados en el panel o archivo de configuración. Usa el siguiente comando para conectar y ejecutar un comando directamente:

```bash
rcon-cli -a <IP>:<PUERTO> -p <CONTRASEÑA> comando
```



## Comandos RCON

Una vez conectado vía RCON, se pueden ejecutar varios comandos administrativos y de diagnóstico en el servidor de Palworld. Los comandos disponibles dependen del motor del juego, pero normalmente incluyen acciones para gestión de jugadores, consultas de estado y control del servidor.

| Comando                                   | Descripción                                                 |
|------------------------------------------|-------------------------------------------------------------|
| `/Shutdown <segundos> <mensaje>`          | Apaga el servidor tras una cuenta regresiva con mensaje     |
| `/DoExit`                                | Detiene el servidor inmediatamente                          |
| `/Broadcast <mensaje>`                   | Envía un mensaje a todos los jugadores conectados           |
| `/KickPlayer <SteamID>`                  | Expulsa a un jugador por SteamID                             |
| `/BanPlayer <SteamID>`                   | Banea permanentemente a un jugador                           |
| `/TeleportToPlayer <SteamID>`            | Te teletransporta al jugador especificado                    |
| `/TeleportToMe <SteamID>`                | Teletransporta al jugador especificado a tu ubicación       |
| `/ShowPlayers`                           | Lista todos los jugadores conectados actualmente             |
| `/Info`                                  | Muestra información básica del servidor                      |
| `/Save`                                  | Guarda el mundo manualmente                                  |



## Conclusión

RCON es una herramienta esencial para la administración remota de servidores de juegos Palworld. Permite un acceso rápido y directo a funciones administrativas, ofreciendo control de acceso mediante autenticación por contraseña. Una configuración correcta y segura es clave para garantizar la estabilidad del servidor y protegerlo contra accesos no autorizados.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />