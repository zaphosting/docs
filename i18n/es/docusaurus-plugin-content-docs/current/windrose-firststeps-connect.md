---
id: windrose-firststeps-connect
title: "Windrose: Conectar al servidor"
description: "Aprende cómo conectarte a tu servidor Windrose usando el código de invitación correcto y establece una conexión confiable sin problemas comunes -> Aprende más ahora"
sidebar_label: Conectar al servidor
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿No sabes cómo conectarte a tu servidor **Hytale** o qué necesitas para empezar? No te preocupes, aquí te ayudamos. Te guiaremos por todo lo que necesitas, desde las herramientas e información requeridas hasta el proceso de conexión, junto con consideraciones clave para asegurar una experiencia fluida y sin problemas. Sigue esta guía y estarás conectado en poco tiempo.

## Obtener detalles del servidor
Antes de conectarte, necesitas recopilar la información relevante del servidor desde la interfaz web de tu servidor de juegos ZAP-Hosting. Para Windrose, el dato más importante es el **código de invitación**.

Puedes encontrar el código de invitación en la gestión de tu servidor de juegos, dentro de los archivos de configuración del servidor en `InviteCode.txt`.

:::info Requisito del Código de Invitación
Para Windrose, el código de invitación es el valor clave para conectarte al servidor. Si usas un código incorrecto o desactualizado, la conexión puede fallar.
:::

La siguiente información es útil antes de comenzar:

| Información | Propósito |
| --- | --- |
| Contenido de `InviteCode.txt` | Necesario para conectarse al servidor Windrose |
| Nombre del servidor | Te ayuda a identificar el servidor correcto |
| Contraseña del servidor (opcional) | Puede ser requerida según tu configuración |

![](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

## Establecer conexión con el servidor
Una vez que tengas tu código de invitación, puedes conectarte directamente al servidor Windrose desde el juego.

### Encuentra el código de invitación en la gestión del servidor
Abre la interfaz web de tu servidor de juegos ZAP-Hosting y navega hasta el área de configuración del servidor. Localiza el archivo llamado `InviteCode.txt` y ábrelo.

Dentro de este archivo encontrarás el código de invitación actual para tu servidor. Copia este valor exactamente como aparece.

:::note Valores de marcador de posición
Si ves un valor como `[your_invite_code]` en esta guía, reemplázalo con el código real de tu propio archivo `InviteCode.txt`.
:::

### Únete al servidor en Windrose
Inicia Windrose y abre el menú de conexión al servidor o multijugador del juego. Busca la opción que te permita unirte a un servidor usando un código de invitación.

Introduce el código de invitación de `InviteCode.txt` en el campo requerido y confirma la conexión. Si tu servidor está protegido, también te pueden pedir una contraseña en este paso.

| Campo | Qué ingresar |
| --- | --- |
| Código de invitación | `[your_invite_code]` |
| Contraseña | `[your_server_password]` si está configurada |

Después de enviar el código de invitación, el juego debería establecer la conexión con tu servidor Windrose.

:::tip Copia el código exactamente
Para evitar problemas de conexión, copia y pega el código de invitación directamente desde `InviteCode.txt` si es posible. Incluso un pequeño error puede impedir una conexión exitosa.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/t3R6by5GrswnZsQ/download)

## Problemas potenciales y soluciones
Si la conexión al servidor no funciona de inmediato, puedes revisar las causas más comunes a continuación.

### El código de invitación no funciona
Si el código de invitación es rechazado, primero verifica que copiaste correctamente todo el contenido de `InviteCode.txt`. Asegúrate de que no haya espacios adicionales antes o después del código.

También es posible que el código de invitación haya cambiado tras un reinicio del servidor, actualización o ajuste de configuración. En ese caso, vuelve a abrir `InviteCode.txt` y usa el valor actual.

### El servidor aún no está listo
Si el servidor todavía está iniciándose o no ha completado la inicialización, los jugadores pueden no conectarse aunque el código de invitación sea correcto.

Revisa la consola y los registros del servidor en la gestión de tu servidor de juegos para confirmar que el servidor arrancó correctamente y está completamente en línea.

:::caution Espera a que el servidor esté completamente iniciado
No intentes conectarte mientras el servidor aún está cargando o reiniciándose. Esto puede causar intentos fallidos de conexión incluso si el código de invitación es correcto.
:::

### Problemas de configuración o archivos
Si el servidor sigue inaccesible, puede haber un problema de configuración o archivos corruptos que impiden el arranque correcto. En este caso, revisa los cambios recientes que hiciste en el servidor e inspecciona los registros en busca de errores.

Si es necesario, restaura una copia de seguridad funcional o deshaz los cambios recientes en la configuración.

### Solución faltante o poco útil
Si aún no puedes conectarte después de revisar el código de invitación, el estado del servidor y la configuración, contacta al equipo de soporte de ZAP-Hosting a través de la [página oficial de soporte](https://zap-hosting.com/en/customer/support/).

Al crear una solicitud, incluye tantos detalles como sea posible, como:

- El problema exacto que estás experimentando
- Si el servidor arranca correctamente
- Si el código de invitación en `InviteCode.txt` es visible
- Cualquier mensaje de error relevante de la consola o registros

## Conclusión
Felicidades, te has conectado exitosamente a tu servidor Windrose usando el código de invitación. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para asistirte! 🙂