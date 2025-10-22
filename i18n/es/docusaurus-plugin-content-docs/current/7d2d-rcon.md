---
id: 7d2d-rcon
title: "7 Days to Die: RCON"
description: "Descubre cómo gestionar y controlar servidores de 7 Days to Die de forma remota y segura sin acceso dentro del juego para una administración eficiente → Aprende más ahora"
sidebar_label: RCON
services:
  - gameserver-7d2d
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

RCON (Remote Console) es un protocolo de red usado para controlar servidores de juegos de forma remota. Permite acceder a la consola del servidor sin interactuar directamente con el entorno del servidor. Esto hace posible ejecutar comandos administrativos, ajustar parámetros de configuración o recuperar información del estado del servidor.

En 7 Days to Die, RCON se usa para ejecutar comandos del lado del servidor, como gestionar jugadores, cambiar configuraciones de juego o acceder a salidas de diagnóstico. La conexión está protegida por una contraseña y funciona a través de un puerto específico, accesible mediante clientes RCON compatibles.

Una gran ventaja de RCON es que permite administrar el servidor **sin necesidad de estar conectado al juego como jugador**. Los administradores pueden monitorear y controlar 7 Days to Die desde herramientas externas, interfaces de línea de comandos o paneles web, ofreciendo flexibilidad y comodidad para la operación remota.

<InlineVoucher />

## Configuración

Antes de usar RCON, debe activarse y configurarse. Esto se puede hacer directamente en la administración del servidor de juegos. En la sección **Configuración**, hay una opción llamada **RCON** que debe activarse. Se debe establecer una contraseña segura y definir un puerto válido.

El puerto RCON asignado se encuentra al final de la página de configuración en el **Resumen de puertos**.

Antes de usar RCON, debe activarse y configurarse. Esto se hace editando el archivo de configuración ubicado en **Configs** dentro del panel de administración del servidor de juegos. En el archivo llamado `serverconfig.xml`, se deben agregar o modificar las siguientes entradas:

```cfg
<property name="TelnetPassword" value="define-tu-contraseña-aquí"/>
```
El puerto RCON asignado se encuentra al final de la página de configuración en el Resumen de puertos y debe especificarse allí.



## Conexión vía RCON

Para conectarte al servidor de 7 Days to Die vía RCON, se usa la herramienta de línea de comandos **rcon-cli**. Puedes descargarla desde el [repositorio oficial en GitHub](https://github.com/gorcon/rcon-cli). Tras descargar e instalar la herramienta en tu PC, puedes establecer la conexión usando la dirección IP del servidor, el puerto RCON y la contraseña RCON.

El puerto asignado se encuentra en el **Resumen de puertos** al final de la página de configuración en la administración del servidor de juegos. La contraseña y el puerto deben coincidir con los valores configurados en el panel o archivo de configuración. Usa el siguiente comando para conectar y ejecutar un comando directamente:

```bash
rcon-cli -a <IP>:<PUERTO> -p <CONTRASEÑA> -t telnet comando
```



## Comandos RCON

Una vez conectado vía RCON, se pueden ejecutar varios comandos administrativos y de diagnóstico en el servidor de 7 Days to Die. Los comandos disponibles dependen del motor del juego, pero normalmente incluyen acciones para gestión de jugadores, consultas de estado y control del servidor.

| Comando                | Descripción                                    |
|------------------------|------------------------------------------------|
| `dm` o `debugmenu on`  | Activa el modo desarrollador                    |
| `giveme <ItemName> <count>` | Te da un ítem a ti mismo                     |
| `buffplayer <ID> <buff>` | Otorga un buff a un jugador                      |
| `tele <x> <y> <z>`     | Te teletransporta a coordenadas                  |
| `settime <seconds>`     | Establece la hora actual dentro del juego       |
| `setgameday <day>`      | Establece el día actual del juego                 |
| `spawnentity <ID>`      | Genera una entidad por ID                         |
| `kick <player>`         | Expulsa a un jugador del servidor                 |
| `ban <address>`         | Banea una IP o jugador                            |
| `saveworld`             | Guarda manualmente el estado del mundo           |



## Conclusión

RCON es una herramienta clave para la administración remota de servidores de juegos 7 Days to Die. Permite un acceso rápido y directo a funciones administrativas, ofreciendo control mediante autenticación por contraseña. Una configuración correcta y segura es fundamental para garantizar la estabilidad del servidor y protegerlo contra accesos no autorizados.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />