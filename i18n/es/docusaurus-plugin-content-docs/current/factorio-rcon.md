---
id: factorio-rcon
title: "Factorio: RCON"
description: "Descubre cómo gestionar y controlar remotamente tu servidor de juegos Factorio para una administración eficiente y ajustes en la jugabilidad → Aprende más ahora"
sidebar_label: RCON
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

RCON (Remote Console) es un protocolo de red usado para controlar servidores de juegos de forma remota. Permite acceder a la consola del servidor sin interactuar directamente con el entorno del servidor. Esto hace posible ejecutar comandos administrativos, ajustar parámetros de configuración o recuperar información sobre el estado del servidor.

En Factorio, RCON se usa para ejecutar comandos del lado del servidor, como gestionar jugadores, cambiar configuraciones de juego o acceder a salidas de diagnóstico. La conexión está protegida por una contraseña y opera a través de un puerto específico, accesible mediante clientes RCON compatibles.

Una ventaja clave de RCON es que permite la gestión del servidor **sin necesidad de estar conectado al juego como jugador**. Los administradores pueden monitorear y controlar Factorio desde herramientas externas, interfaces de línea de comandos o paneles web, ofreciendo flexibilidad y comodidad para la operación remota.

<InlineVoucher />

## Configuración

Antes de poder usar RCON, debe ser habilitado y configurado. Esto se puede hacer directamente en la administración del servidor de juegos. En la sección **Configuración**, hay una opción llamada **RCON** que debe activarse. Se debe establecer una contraseña segura.

El puerto asignado para RCON se encuentra al final de la página de configuración en el **Resumen de puertos**. 



## Conexión vía RCON

Para conectarte al servidor de Factorio vía RCON, se usa la herramienta de línea de comandos **rcon-cli**. Puedes descargarla desde el [repositorio oficial en GitHub](https://github.com/gorcon/rcon-cli). Tras descargar e instalar la herramienta en tu PC, puedes establecer la conexión usando la dirección IP del servidor, el puerto RCON y la contraseña RCON.

El puerto asignado se encuentra en el **Resumen de puertos** al final de la página de configuración en la administración del servidor de juegos. La contraseña y el puerto deben coincidir con los valores configurados en el panel o archivo de configuración. Usa el siguiente comando para conectar y ejecutar un comando directamente:

```bash
rcon-cli -a <IP>:<PUERTO> -p <CONTRASEÑA> comando
```



## Comandos RCON

Una vez conectado vía RCON, se pueden ejecutar varios comandos administrativos y de diagnóstico en el servidor de Factorio. Los comandos disponibles dependen del motor del juego, pero normalmente incluyen acciones para gestión de jugadores, consultas de estado y control del servidor.

| Comando                          | Descripción                                            |
|----------------------------------|--------------------------------------------------------|
| `/help`                          | Muestra todos los comandos disponibles                 |
| `/players`                       | Lista todos los jugadores conectados                   |
| `/kick <jugador>`                | Expulsa a un jugador del servidor                       |
| `/ban <jugador>`                 | Prohíbe permanentemente a un jugador                    |
| `/unban <jugador>`               | Quita la prohibición a un jugador previamente baneado  |
| `/admins`                        | Muestra la lista de administradores del servidor       |
| `/promote <jugador>`             | Otorga derechos de administrador a un jugador           |
| `/demote <jugador>`              | Revoca los derechos de administrador de un jugador      |
| `/save`                         | Guarda el estado actual del mundo                        |
| `/server-save`                  | Ejecuta un guardado manual del servidor                  |



## Conclusión

RCON es una herramienta clave para la administración remota de servidores de juegos Factorio. Permite un acceso rápido y directo a funcionalidades administrativas, ofreciendo control de acceso mediante autenticación por contraseña. Una configuración adecuada y segura es fundamental para garantizar la estabilidad del servidor y protegerlo contra accesos no autorizados.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />