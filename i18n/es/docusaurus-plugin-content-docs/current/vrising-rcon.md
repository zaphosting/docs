---
id: vrising-rcon
title: "V Rising: RCON"
description: "Descubre cómo gestionar y controlar servidores de V Rising de forma remota y eficiente sin conexión dentro del juego → Aprende más ahora"
sidebar_label: RCON
services:
  - gameserver-vrising
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

RCON (Remote Console) es un protocolo de red usado para controlar servidores de juegos de forma remota. Permite acceder a la consola del servidor sin interactuar directamente con el entorno del servidor. Esto hace posible ejecutar comandos administrativos, ajustar parámetros de configuración o recuperar información del estado del servidor.

En V Rising, RCON se usa para ejecutar comandos del lado del servidor, como gestionar jugadores, cambiar configuraciones de juego o acceder a salidas de diagnóstico. La conexión está protegida por una contraseña y funciona a través de un puerto específico, accesible mediante clientes RCON compatibles.

Una gran ventaja de RCON es que permite la gestión del servidor **sin necesidad de estar conectado al juego como jugador**. Los administradores pueden monitorear y controlar V Rising desde herramientas externas, interfaces de línea de comandos o paneles web, ofreciendo flexibilidad y comodidad para la operación remota.

<InlineVoucher />

## Configuración

Antes de poder usar RCON, debe activarse y configurarse. Esto se hace editando el archivo de configuración ubicado en **Configs** dentro del panel de gestión del servidor de juegos. En el archivo llamado `ServerHostSettings.json`, se deben agregar o modificar las siguientes entradas:

```cfg
  "Rcon": {
    "Enabled": false,
    "Port": XXXXX,
    "Password": "define-your-password"
  },
```

El puerto RCON asignado se encuentra al final de la página de configuración en el resumen de Puertos y debe especificarse ahí.



## Conexión vía RCON

Para conectar al servidor de V Rising vía RCON se utiliza la herramienta de línea de comandos **rcon-cli**. Se puede descargar desde el [repositorio oficial en GitHub](https://github.com/gorcon/rcon-cli). Tras descargar e instalar la herramienta en tu PC, puedes establecer la conexión usando la dirección IP del servidor, el puerto RCON y la contraseña RCON.

El puerto asignado se encuentra en el **resumen de Puertos** al final de la página de configuración del servidor de juegos. La contraseña y el puerto deben coincidir con los valores configurados en el panel o en el archivo de configuración. Usa el siguiente comando para conectar y ejecutar un comando directamente:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Comandos RCON

Una vez conectado vía RCON, se pueden ejecutar varios comandos administrativos y de diagnóstico en el servidor de V Rising. Los comandos disponibles dependen del motor del juego, pero normalmente incluyen acciones para gestión de jugadores, consultas de estado y control del servidor.

| Comando                                     | Descripción                                                   |
|--------------------------------------------|---------------------------------------------------------------|
| `adminauth`                                | Activa derechos de administrador para tu personaje (solo en juego) |
| `admindeauth`                              | Desactiva derechos de administrador                            |
| `banuser <SteamID>`                        | Prohíbe permanentemente a un jugador                           |
| `unbanuser <SteamID>`                      | Revoca la prohibición a un jugador previamente baneado         |
| `kick <playername>`                        | Expulsa inmediatamente a un jugador del servidor              |
| `give <ItemName> <Amount>`                 | Da ítems directamente a tu inventario                          |
| `teleport <X> <Y>`                         | Teletransporta tu personaje a las coordenadas indicadas        |
| `teleportplayer <name> <X> <Y>`            | Teletransporta a otro jugador a coordenadas específicas        |
| `changehealth <value>`                     | Establece tu salud actual a un valor específico                |
| `spawn <EntityName> <Amount>`              | Genera NPCs, criaturas u otras entidades                        |



## Conclusión

RCON es una herramienta clave para la administración remota de servidores de juegos V Rising. Permite un acceso rápido y directo a funciones administrativas, ofreciendo control de acceso mediante autenticación por contraseña. Una configuración correcta y segura es fundamental para garantizar la estabilidad del servidor y protegerlo contra accesos no autorizados.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />