---
id: arma3-rcon
title: "Arma 3: RCON"
description: "Descubre cómo gestionar y controlar servidores de Arma 3 de forma remota y segura sin tener que entrar al juego → Aprende más ahora"
sidebar_label: RCON
services:
  - gameserver-arma3
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

RCON (Remote Console) es un protocolo de red usado para controlar servidores de juegos de forma remota. Permite acceder a la consola del servidor sin interactuar directamente con el entorno del servidor. Esto hace posible ejecutar comandos administrativos, ajustar parámetros de configuración o recuperar información del estado del servidor.

En Arma 3, RCON se usa para ejecutar comandos del lado del servidor, como gestionar jugadores, cambiar configuraciones de juego o acceder a salidas de diagnóstico. La conexión está protegida por una contraseña y funciona a través de un puerto específico, accesible mediante clientes RCON compatibles.

Una gran ventaja de RCON es que permite la gestión del servidor **sin necesidad de estar conectado al juego como jugador**. Los administradores pueden monitorear y controlar Arma 3 desde herramientas externas, interfaces de línea de comandos o paneles web, ofreciendo flexibilidad y comodidad para la operación remota.

<InlineVoucher />

## Configuración

Antes de poder usar RCON, debe activarse y configurarse. Esto se hace directamente en la administración del servidor de juegos. En la sección **Ajustes**, hay una opción llamada **RCON** que debe activarse. Se debe establecer una contraseña segura.

El puerto asignado para RCON se encuentra al final de la página de ajustes en la **Vista general de puertos**. 



## Conexión vía RCON

Para conectarte al servidor de Arma 3 vía RCON, se utiliza la herramienta **BattleWarden**. Está disponible para descargar desde la [web oficial](https://www.battlewarden.net). Tras descargar e instalar la herramienta en tu PC, debes crear un nuevo perfil de conexión. Se requieren los siguientes datos:

- Dirección IP del servidor  
- Puerto RCON 
- Contraseña RCON

Una vez establecida la conexión, puedes ejecutar comandos RCON a través de la interfaz gráfica. La herramienta también ofrece funciones adicionales como listas de jugadores, chat en vivo e historial de comandos, dependiendo de la integración con el juego.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## Comandos RCON

Una vez conectado vía RCON, se pueden ejecutar varios comandos administrativos y de diagnóstico en el servidor de Arma 3. Los comandos disponibles dependen del motor del juego, pero normalmente incluyen acciones para gestión de jugadores, consultas de estado y control del servidor.

| Comando                         | Descripción                                        |
|----------------------------------|----------------------------------------------------|
| `#login <contraseña>`           | Iniciar sesión como administrador del servidor    |
| `#logout`                       | Cerrar sesión de administrador                      |
| `#mission <nombreMisión>`       | Inicia una nueva misión en el servidor              |
| `#missions`                    | Lista las misiones disponibles para seleccionar     |
| `#restart`                     | Reinicia la misión actual                            |
| `#reassign`                    | Devuelve a todos los jugadores a su rol asignado    |
| `#kick <IDjugador>`             | Expulsa a un jugador                                 |
| `#exec ban <IDjugador>`         | Prohíbe a un jugador                                 |
| `#exec unban <IDjugador>`       | Quita la prohibición a un jugador                    |
| `#shutdown`                    | Apaga el servidor                                   |



## Conclusión

RCON es una herramienta clave para la administración remota de servidores de juegos Arma 3. Permite un acceso rápido y directo a funciones administrativas, ofreciendo control de acceso mediante autenticación por contraseña. Una configuración correcta y segura es fundamental para garantizar la estabilidad del servidor y protegerlo contra accesos no autorizados.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />