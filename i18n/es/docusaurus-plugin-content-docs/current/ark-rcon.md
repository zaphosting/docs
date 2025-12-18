---
id: ark-rcon
title: "ARK: Survival Evolved: RCON"
description: "Descubre cómo gestionar y controlar servidores de ARK: Survival Evolved de forma remota y segura sin tener que entrar al juego → Aprende más ahora"
sidebar_label: RCON
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

RCON (Remote Console) es un protocolo de red usado para controlar servidores de juegos de forma remota. Permite acceder a la consola del servidor sin interactuar directamente con el entorno del servidor. Esto hace posible ejecutar comandos administrativos, ajustar parámetros de configuración o recuperar información del estado del servidor.

En ARK: Survival Evolved, RCON se usa para ejecutar comandos del lado del servidor, como gestionar jugadores, cambiar configuraciones del juego o acceder a salidas de diagnóstico. La conexión está protegida por una contraseña y funciona a través de un puerto específico, accesible mediante clientes RCON compatibles.

Una ventaja clave de RCON es que permite la gestión del servidor **sin necesidad de estar conectado al juego como jugador**. Los administradores pueden monitorear y controlar ARK: Survival Evolved desde herramientas externas, interfaces de línea de comandos o paneles web, ofreciendo flexibilidad y comodidad para la operación remota.

<InlineVoucher />

## Configuración

Antes de poder usar RCON, debe activarse y configurarse. Esto se hace editando el archivo de configuración ubicado en **Configs** dentro del panel de gestión del servidor de juegos. En el archivo llamado `GameUserSettings.ini`, se deben añadir o modificar las siguientes entradas:

```cfg
[ServerSettings]
RCONEnabled=True
ServerAdminPassword=define-tu-contraseña
```
El puerto asignado para RCON se encuentra al final de la página de configuración en el resumen de Puertos y debe especificarse allí.



## Conexión vía RCON

Para conectarse al servidor de ARK: Survival Evolved vía RCON, se utiliza la herramienta **ARKon**. Está disponible para descargar desde este [hilo de Steam]([Steam thread](https://steamcommunity.com/app/346110/discussions/2/3417684283223117680/)). Tras descargar e instalar la herramienta en tu PC, debes crear una nueva entrada de servidor con la siguiente información:

- Dirección IP del servidor  
- Puerto RCON
- Contraseña RCON 

Después de guardar el perfil de conexión, puedes seleccionar el servidor de la lista y establecer la conexión. Una vez conectado, los comandos RCON se pueden ejecutar a través de la interfaz gráfica. ARKon también ofrece funciones adicionales específicas para ARK: Survival Evolved, como:

- Lista de jugadores en tiempo real y estado online  
- Monitorización e interacción con el chat dentro del juego  
- Botones de acceso rápido para comandos administrativos comunes  
- Registro de la salida RCON y el historial de comandos



## Comandos RCON

Una vez conectado vía RCON, se pueden ejecutar varios comandos administrativos y de diagnóstico en el servidor de ARK: Survival Evolved. Los comandos disponibles dependen del motor del juego, pero normalmente incluyen acciones para gestión de jugadores, consultas de estado y control del servidor.

| Comando                            | Descripción                                           |
|-----------------------------------|--------------------------------------------------------|
| `EnableCheats <password>`         | Activa el modo administrador en el servidor (comandos admin)     |
| `AdminCheat KickPlayer <Steam64ID>` | Expulsa a un jugador                                     |
| `AdminCheat BanPlayer <Steam64ID>`  | Banea a un jugador                                        |
| `AdminCheat UnbanPlayer <playerName>` | Desbanea a un jugador                                    |
| `AdminCheat Broadcast <message>`   | Envía un mensaje broadcast a todos los jugadores              |
| `AdminCheat SaveWorld`            | Guarda el estado actual del mundo                        |
| `AdminCheat SetTimeOfDay <hh:mm>` | Ajusta la hora dentro del juego                                  |
| `AdminCheat TeleportPlayerIDToMe <playerID>` | Teletransporta a un jugador a tu ubicación         |
| `cheat Slomo <factor>`            | Ajusta la velocidad del juego                                    |
| `AdminCheat GiveItemNum <ItemID> <quantity> <quality> 0` | Genera ítems en tu inventario        |




## Conclusión

RCON es una herramienta esencial para la administración remota de servidores de juegos ARK: Survival Evolved. Permite un acceso rápido y directo a funciones administrativas, ofreciendo control de acceso mediante autenticación por contraseña. Una configuración correcta y segura es clave para garantizar la estabilidad del servidor y protegerlo contra accesos no autorizados.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />