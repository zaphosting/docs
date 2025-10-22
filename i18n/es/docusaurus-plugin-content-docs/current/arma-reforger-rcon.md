---
id: arma-reforger-rcon
title: "Arma Reforger: RCON"
description: "Descubre cómo gestionar y controlar remotamente servidores de Arma Reforger de forma segura para una administración y monitoreo flexibles → Aprende más ahora"
sidebar_label: RCON
services:
  - gameserver-arma-reforger
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

RCON (Remote Console) es un protocolo de red usado para controlar servidores de juegos de forma remota. Permite acceder a la consola del servidor sin interacción directa con el entorno del servidor. Esto hace posible ejecutar comandos administrativos, ajustar parámetros de configuración o recuperar información del estado del servidor.

En Arma Reforger, RCON se usa para ejecutar comandos del lado del servidor, como gestionar jugadores, cambiar configuraciones de juego o acceder a salidas de diagnóstico. La conexión está protegida por una contraseña y opera a través de un puerto especificado, accesible mediante clientes RCON compatibles.

Una ventaja clave de RCON es que permite la gestión del servidor **sin necesidad de estar conectado al juego como jugador**. Los administradores pueden monitorear y controlar Arma Reforger desde herramientas externas, interfaces de línea de comandos o paneles web, ofreciendo flexibilidad y comodidad para la operación remota.

<InlineVoucher />

## Configuración

Antes de poder usar RCON, debe ser habilitado y configurado. Esto se hace editando el archivo de configuración ubicado en **Configs** dentro del panel de gestión del servidor de juegos. En el archivo llamado `BEServer_x64.cfg`, se deben agregar o modificar las siguientes entradas:

```cfg
RConPort XXXXX
RConPassword define-your-password
```
El puerto RCON asignado se encuentra al final de la página de configuración en el resumen de Puertos y debe ser especificado allí.



## Conexión vía RCON

Para conectarse al servidor de Arma Reforger vía RCON, se utiliza la herramienta **BattleWarden**. Está disponible para descargar desde la [página oficial](https://www.battlewarden.net). Tras descargar e instalar la herramienta en tu PC, debes crear un nuevo perfil de conexión. Se requieren los siguientes datos:

- Dirección IP del servidor  
- Puerto RCON 
- Contraseña RCON

Una vez establecida la conexión, se pueden ejecutar comandos RCON a través de la interfaz gráfica. La herramienta también ofrece funciones adicionales como listas de jugadores, chat en vivo e historial de comandos, según la integración del juego.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## Comandos RCON

Una vez conectado vía RCON, se pueden ejecutar varios comandos administrativos y de diagnóstico en el servidor de Arma Reforger. Los comandos disponibles dependen del motor del juego, pero normalmente incluyen acciones para gestión de jugadores, consultas de estado y control del servidor.

| Comando                         | Descripción                                        |
|----------------------------------|----------------------------------------------------|
| `#login <password>`             | Iniciar sesión como administrador del servidor    |
| `#logout`                       | Cerrar sesión de administrador                      |
| `#mission <missionName>`       | Inicia una nueva misión en el servidor              |
| `#missions`                    | Lista las misiones disponibles para seleccionar     |
| `#restart`                     | Reinicia la misión actual                            |
| `#reassign`                    | Devuelve a todos los jugadores a la asignación de roles |
| `#kick <playerID>`             | Expulsa a un jugador                                |
| `#exec ban <playerID>`         | Prohíbe a un jugador                                |
| `#exec unban <playerID>`       | Quita la prohibición a un jugador                   |
| `#shutdown`                    | Apaga el servidor                                   |



## Conclusión

RCON es una herramienta fundamental para la administración remota de servidores de juegos Arma Reforger. Permite un acceso rápido y directo a funcionalidades administrativas, ofreciendo control de acceso mediante autenticación por contraseña. Una configuración adecuada y segura es clave para garantizar la estabilidad del servidor y protegerlo contra accesos no autorizados.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />