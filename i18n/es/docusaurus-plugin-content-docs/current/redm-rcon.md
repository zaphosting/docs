---
id: redm-rcon
title: "RedM: RCON"
description: "Descubre cómo gestionar servidores de juegos RedM de forma remota, segura y eficiente sin estar dentro del juego → Aprende más ahora"
sidebar_label: RCON
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

RCON (Remote Console) es un protocolo de red usado para controlar servidores de juegos de forma remota. Permite acceder a la consola del servidor sin interactuar directamente con el entorno del servidor. Esto hace posible ejecutar comandos administrativos, ajustar parámetros de configuración o recuperar información del estado del servidor.

En RedM, RCON se usa para ejecutar comandos del lado del servidor, como gestionar jugadores, cambiar configuraciones de juego o acceder a salidas de diagnóstico. La conexión está protegida por una contraseña y opera a través de un puerto específico, accesible mediante clientes RCON compatibles.

Una ventaja clave de RCON es que permite la gestión del servidor **sin necesidad de estar conectado al juego como jugador**. Los administradores pueden monitorear y controlar RedM desde herramientas externas, interfaces de línea de comandos o paneles web, ofreciendo flexibilidad y comodidad para la operación remota.

![img](https://screensaver01.zap-hosting.com/index.php/s/iEAHnZ6FnQdWn7e/preview)

<InlineVoucher />

## Configuración

Antes de poder usar RCON, debe estar habilitado y configurado. Esto se hace en la sección **Editor CFG** de la administración del servidor de juegos en **txAdmin**. Para ello, asegúrate de que las siguientes líneas estén añadidas o ajustadas en la configuración:

```cfg
ensure rconlog
set rcon_password "tu-contraseña-segura"
```



## Conexión vía RCON

Para conectarte al servidor GameXY vía RCON, se usa la herramienta para Windows **IceCon**. Está disponible para descargar en el [repositorio de GitHub](https://github.com/icedream/icecon). Tras instalar la herramienta en tu PC, crea una nueva conexión con la siguiente información:

- **Dirección IP del servidor**  
- **Puerto del juego**
- **Contraseña RCON**

Una vez establecida la conexión con éxito, IceCon ofrece una interfaz gráfica para enviar comandos RCON al servidor RedM. Puedes emitir comandos RCON estándar y ver la respuesta en tiempo real directamente en la herramienta.

IceCon también incluye funciones adicionales como:

- Historial de comandos y autocompletado  
- Visor de logs del servidor  
- Botones personalizados para comandos  
- Perfiles de conexión para gestionar varios servidores



## Comandos RCON

Una vez conectado vía RCON, se pueden ejecutar varios comandos administrativos y de diagnóstico en el servidor RedM. Los comandos disponibles dependen del motor del juego, pero normalmente incluyen acciones para gestión de jugadores, consultas de estado y control del servidor.

| Comando                   | Descripción                                       |
| ------------------------- | ------------------------------------------------- |
| `say <mensaje>`           | Envía un mensaje a todos los jugadores en el chat|
| `start <nombre-recurso>`  | Inicia un recurso específico del servidor         |
| `stop <nombre-recurso>`   | Detiene un recurso específico del servidor        |
| `restart <nombre-recurso>`| Reinicia un recurso específico del servidor       |
| `ensure <nombre-recurso>` | Inicia el recurso solo si no está ya en ejecución |
| `refresh`                 | Recarga todos los recursos desde el directorio    |
| `clear`                   | Limpia la salida de la consola del servidor       |
| `crash`                   | Fuerza un crash del servidor (para depuración)    |
| `quit`                    | Apaga el servidor de forma limpia                  |



## Conclusión

RCON es una herramienta esencial para la administración remota de servidores de juegos RedM. Permite acceso rápido y directo a funciones administrativas, con control de acceso mediante autenticación por contraseña. Una configuración correcta y segura es clave para garantizar la estabilidad del servidor y protegerlo contra accesos no autorizados.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />