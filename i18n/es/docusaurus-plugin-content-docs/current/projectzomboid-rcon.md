---
id: projectzomboid-rcon
title: "Project Zomboid: RCON"
description: "Descubre cómo gestionar y controlar servidores de Project Zomboid de forma remota y segura sin acceso dentro del juego → Aprende más ahora"
sidebar_label: RCON
services:
  - gameserver-projectzomboid
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

RCON (Remote Console) es un protocolo de red usado para controlar servidores de juegos de forma remota. Permite acceder a la consola del servidor sin interactuar directamente con el entorno del servidor. Esto hace posible ejecutar comandos administrativos, ajustar parámetros de configuración o recuperar información del estado del servidor.

En Project Zomboid, RCON se usa para ejecutar comandos del lado del servidor, como gestionar jugadores, cambiar configuraciones de juego o acceder a salidas de diagnóstico. La conexión está protegida por una contraseña y funciona a través de un puerto específico, accesible mediante clientes RCON compatibles.

Una gran ventaja de RCON es que permite la gestión del servidor **sin necesidad de estar conectado al juego como jugador**. Los administradores pueden monitorear y controlar Project Zomboid desde herramientas externas, interfaces de línea de comandos o paneles web, ofreciendo flexibilidad y comodidad para la operación remota.

<InlineVoucher />

## Configuración

Antes de usar RCON, debe activarse y configurarse. Esto se hace editando el archivo de configuración ubicado en **Configs** dentro del panel de gestión del servidor de juegos. En el archivo llamado `servertest.ini`, se deben añadir o modificar las siguientes entradas:

```cfg
RCONPort=XXXXX
RCONPassword=define-tu-contraseña
```
El puerto RCON asignado se encuentra al final de la página de configuración en el resumen de Puertos y debe especificarse ahí.



## Conexión vía RCON

Para conectarse al servidor de Project Zomboid vía RCON, se utiliza la herramienta de línea de comandos **rcon-cli**. Puedes descargarla desde el repositorio oficial en [GitHub](https://github.com/gorcon/rcon-cli). Tras descargar e instalar la herramienta en tu PC, puedes establecer la conexión usando la dirección IP del servidor, el puerto RCON y la contraseña RCON.

El puerto asignado se encuentra en el **resumen de Puertos** al final de la página de configuración en la administración del servidor de juegos. La contraseña y el puerto deben coincidir con los valores configurados en el panel o archivo de configuración. Usa el siguiente comando para conectar y ejecutar un comando directamente:

```bash
rcon-cli -a <IP>:<PUERTO> -p <CONTRASEÑA> comando
```



## Comandos RCON

Una vez conectado vía RCON, se pueden ejecutar varios comandos administrativos y de diagnóstico en el servidor de Project Zomboid. Los comandos disponibles dependen del motor del juego, pero normalmente incluyen acciones para gestión de jugadores, consultas de estado y control del servidor.

| Comando                          | Descripción                             |
| -------------------------------- | --------------------------------------- |
| `/grantadmin <usuario>`          | Otorga derechos de administrador a un jugador |
| `/removeadmin <usuario>`         | Revoca derechos de administrador a un jugador |
| `/save`                         | Guarda el mundo manualmente             |
| `/kickuser <usuario>`            | Expulsa a un jugador del servidor       |
| `/banuser <usuario>`             | Prohíbe a un jugador                    |
| `/unbanuser <usuario>`           | Quita la prohibición a un jugador       |
| `/adduser <usuario> <contraseña>` | Crea un nuevo usuario con contraseña    |
| `/godmod <usuario>`              | Activa o desactiva el modo dios para el usuario especificado |
| `/teleport <Nombre1> <Nombre2>` | Teletransporta a Nombre1 hacia Nombre2  |
| `/chopper`                      | Simula un sobrevuelo de helicóptero     |



## Conclusión

RCON es una herramienta clave para la administración remota de servidores de juegos Project Zomboid. Permite un acceso rápido y directo a funciones administrativas, ofreciendo control de acceso mediante autenticación por contraseña. Una configuración correcta y segura es fundamental para garantizar la estabilidad del servidor y protegerlo contra accesos no autorizados.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />