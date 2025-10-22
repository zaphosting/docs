---
id: dayz-becomeadmin
title: "DayZ: Cómo ser Admin"
description: "Descubre cómo obtener control total del servidor asignando derechos de admin y gestionando las opciones del juego de forma efectiva → Aprende más ahora"
sidebar_label: Ser Admin
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Asignar derechos de admin te permite gestionar tu servidor con control total de forma fácil y completa. Como admin, tienes la oportunidad de aplicar todas las opciones y funciones disponibles que ofrece el juego directamente dentro del juego. A continuación te explicamos todos los pasos necesarios para asignar derechos de admin a tu servidor.  
<InlineVoucher />

## Configuración

La configuración de los derechos de admin se realiza a través del archivo de configuración del servidor. Puedes acceder a los archivos de configuración de tu servidor en la gestión del servidor de juegos bajo **Configs**. Una vez ahí, encontrarás un resumen de los archivos de configuración disponibles. Abre el **server.DZ.cfg** haciendo clic en el botón azul.

![](https://screensaver01.zap-hosting.com/index.php/s/n6FSdPnYxxWp4Po/preview)

En el archivo de configuración, deberías encontrar la entrada **passwordAdmin**. Aquí tienes que establecer la contraseña deseada para el acceso. Introduce la contraseña que quieras y haz clic en el botón **Guardar** abajo.

![](https://screensaver01.zap-hosting.com/index.php/s/H3ndjqRYBPXRgRK/preview)

Para aplicar el cambio, es necesario reiniciar el servidor. Después, conéctate a tu servidor y abre el chat dentro del juego. Ejecuta el siguiente comando para iniciar sesión como admin:

```
#login contraseña
```



## Comandos más usados

Aquí tienes una lista con algunos comandos disponibles que puedes usar con tus permisos de administrador: 

| COMANDO                                     | DESCRIPCIÓN                                                  |
| :------------------------------------------ | :----------------------------------------------------------- |
| #login adminpassword                        | Iniciar sesión como Admin del servidor.                      |
| #logout                                     | Cerrar sesión de admin.                                      |
| #mission filename Difficulty                | Selecciona la misión con nombre conocido y establece la dificultad - el parámetro dificultad es opcional y, si no se establece, se mantiene la dificultad actual. |
| #missions                                   | Seleccionar una misión.                                       |
| ##restart                                   | Reiniciar una misión.                                         |
| #reassign                                   | Empezar de nuevo y reasignar roles.                          |
| #shutdown                                   | Apagar el servidor.                                          |
| #restartserver                              | Reiniciar el servidor.                                       |
| #shutdownserveraftermission                 | Apaga el servidor cuando termine la misión.                  |
| #restartserveraftermission                  | Reinicia el servidor cuando termine la misión.               |
| #init                                       | Recarga el archivo de configuración del servidor cargado por las opciones -config. |
| #exec ban Name#exec ban ID#exec ban #Player | Permite banear a un jugador.                                 |
| #kick Name#kick ID#kick #Player             | Permite expulsar a un jugador del servidor.                  |
| #monitor (intervalo en segundos)             | Muestra información del rendimiento del servidor. Si el intervalo es 0, la monitorización se detiene. |
| #monitords (intervalo en segundos)           | Muestra la información de rendimiento en la consola del servidor. Si el intervalo es 0, la monitorización se detiene. |
| #debug off                                  | Desactiva la depuración.                                    |
| #debug (intervalo en segundos)               | El intervalo por defecto es 10 si no se selecciona otro.     |
| #debug (comando) (param)                     | Hay algunos comandos disponibles: JIPQueueuserQueuecheckFiletotalSentuserSentuserInfo Puedes desactivar cada comando añadiendo el parámetro off después de cada comando. Ejemplo: #totalSent off. La salida varía entre estos comandos. Algunos escriben en el archivo de log, otros en pantalla, etc. Ten en cuenta que necesitarás un depurador capaz de capturar OutputDebugString ejecutándose en la máquina cliente. |
| #debug (comando)                            | Cerrar sesión de admin.                                      |
| #logout                                     | Hay dos comandos disponibles: console - Envía lo que está en la consola del servidor al remitente. von - Salida en logFile definido en server.cfg, por ejemplo, el archivo de log podría llamarse “server_console.log” Verás una confirmación de estos comandos en los canales de chat. |


## Conclusión

¡Felicidades, has configurado con éxito los permisos de administrador! Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, que está disponible todos los días para echarte una mano! 🙂

<InlineVoucher />