---
id: avorion-rcon
title: "Avorion: RCON"
description: "Descubre cómo gestionar servidores de Avorion remotamente usando RCON para un control flexible y seguro sin necesidad de entrar al juego → Aprende más ahora"
sidebar_label: RCON
services:
  - gameserver-avorion
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

RCON (Remote Console) es un protocolo de red usado para controlar servidores de juegos remotamente. Permite acceder a la consola del servidor sin interactuar directamente con el entorno del servidor. Esto hace posible ejecutar comandos administrativos, ajustar parámetros de configuración o recuperar información del estado del servidor.

En Avorion, RCON se usa para ejecutar comandos del lado del servidor, como gestionar jugadores, cambiar configuraciones de juego o acceder a salidas de diagnóstico. La conexión está protegida por una contraseña y funciona a través de un puerto específico, accesible mediante clientes RCON compatibles.

Una ventaja clave de RCON es que permite la gestión del servidor **sin tener que estar conectado al juego como jugador**. Los administradores pueden monitorear y controlar Avorion desde herramientas externas, interfaces de línea de comandos o paneles web, ofreciendo flexibilidad y comodidad para la operación remota.

<InlineVoucher />

## Configuración

Antes de poder usar RCON, debe activarse y configurarse. Esto se hace directamente en la administración del servidor de juegos. En la sección **Ajustes**, hay una opción llamada **RCON** que debe activarse. Se debe establecer una contraseña segura.

El puerto asignado para RCON se encuentra al final de la página de ajustes en el **Resumen de puertos**. 



## Conexión vía RCON

Para conectarte al servidor de Avorion vía RCON, se usa la herramienta de línea de comandos **rcon-cli**. Puedes descargarla desde el repositorio oficial en [GitHub](https://github.com/gorcon/rcon-cli). Tras descargar e instalar la herramienta en tu PC, puedes establecer conexión usando la dirección IP del servidor, el puerto RCON y la contraseña RCON.

El puerto asignado se encuentra en el **Resumen de puertos** al final de la página de ajustes en la administración del servidor de juegos. La contraseña y el puerto deben coincidir con los valores configurados en el panel o archivo de configuración. Usa el siguiente comando para conectar y ejecutar un comando directamente:

```bash
rcon-cli -a <IP>:<PUERTO> -p <CONTRASEÑA> comando
```



## Comandos RCON

Una vez conectado vía RCON, se pueden ejecutar varios comandos administrativos y de diagnóstico en el servidor de Avorion. Los comandos disponibles dependen del motor del juego, pero normalmente incluyen acciones para gestión de jugadores, consultas de estado y control del servidor.

| Comando                                     | Descripción                                               |
|--------------------------------------------|-----------------------------------------------------------|
| `/save`                                     | Guarda el mundo de juego actual                           |
| `/status`                                   | Muestra el estado del servidor y jugadores               |
| `/kick <nombreJugador>`                      | Expulsa a un jugador del servidor                          |
| `/ban <nombreJugador>`                       | Prohíbe a un jugador el acceso al servidor                |
| `/unban <nombreJugador>`                     | Quita la prohibición a un jugador                          |
| `/teleport <x> <y>`                          | Teletransporta al jugador a las coordenadas del sector    |
| `/tpto <nombreJugador>`                      | Teletransporta hacia otro jugador                          |
| `/sethome`                                  | Establece el sector actual como hogar                      |
| `/home`                                     | Te teletransporta a tu sector hogar                        |
| `/give <nombreObjeto> <cantidad>`            | Te da objetos o recursos                                   |




## Conclusión

RCON es una herramienta clave para la administración remota de servidores de juegos Avorion. Permite acceso rápido y directo a funciones administrativas, ofreciendo control de acceso mediante autenticación por contraseña. Una configuración adecuada y segura es fundamental para garantizar la estabilidad del servidor y protegerlo contra accesos no autorizados.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />