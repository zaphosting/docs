---
id: palworld-troubleshooting
title: "Palworld: Solución de Problemas"
description: "Soluciona problemas comunes del servidor de Palworld como errores de actualización en Steam, tiempos de espera de conexión y errores de Steam en tu servidor de juegos. -> Aprende más ahora"
sidebar_label: Palworld: Solución de Problemas
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los servidores dedicados de Palworld pueden presentar problemas de actualización, inicio y conexión, especialmente después de una actualización de Steam o al instalar modificaciones de terceros. En esta guía, aprenderás a identificar problemas comunes, qué archivos o configuraciones revisar en la administración de tu servidor de juegos ZAP-Hosting y qué acciones tomar para restaurar el funcionamiento normal.



## Preparación

Antes de comenzar con la solución de problemas, asegúrate de tener acceso a la administración de tu servidor de juegos Palworld y poder abrir la consola del servidor y la sección `Configs`.

:::info Acceso Requerido
Necesitas acceso a la interfaz web de ZAP-Hosting para tu servidor Palworld para poder detener, iniciar, reinstalar y editar archivos de configuración si es necesario.
:::

:::note Sobre Archivos de Configuración
La mayoría de los problemas en esta guía no se solucionan solo cambiando configuraciones de juego. Sin embargo, si necesitas revisar o ajustar manualmente la configuración del servidor Palworld, el archivo relevante suele estar disponible en la sección `Configs` de la administración de tu servidor de juegos.
:::

## Encuentra el Archivo de Configuración Relevante

Para servidores dedicados Palworld, la configuración principal del servidor normalmente se guarda en el siguiente archivo:

```ini
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

En la administración del servidor de juegos ZAP-Hosting, normalmente puedes acceder a este archivo a través de la sección `Configs`.

### Para Qué Sirve Este Archivo

`PalWorldSettings.ini` contiene la línea principal `OptionSettings` con valores del servidor como:

- nombre del servidor
- contraseña
- contraseña de administrador
- límites de jugadores
- multiplicadores de juego
- configuraciones de PvP y asaltos

Una estructura típica se ve similar a esta:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="[your_server_name]",ServerDescription="[your_server_description]",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]")
```

:::caution Edita la Sintaxis con Cuidado
Palworld usa una única estructura `OptionSettings=(...)` para muchas configuraciones. Si eliminas por error una coma, comilla o paréntesis, tu servidor podría no iniciarse correctamente.
:::

### Cuándo Necesitas Editarlo

Solo debes editar `PalWorldSettings.ini` cuando:

- necesites corregir una contraseña de servidor o administrador incorrecta
- quieras eliminar valores inválidos tras un cambio manual fallido
- estés probando si un problema de inicio es causado por una entrada de configuración dañada

Después de guardar los cambios en este archivo, debes reiniciar el servidor para que se apliquen las nuevas configuraciones.

## Solución de Problemas de Errores de Actualización

Uno de los problemas más comunes en servidores de Palworld es una actualización fallida en Steam.

### Error: `app '2394010' state is 0x6 after update job`

Este error generalmente indica que los archivos del juego no se actualizaron correctamente a través de Steam.

### Cómo Solucionar el Error

1. Detén completamente tu servidor Palworld.
2. Abre la administración de tu servidor de juegos en la interfaz web de ZAP-Hosting.
3. Ve a la sección donde están disponibles las acciones de reinstalación o reparación.
4. Inicia una reinstalación o verificación de integridad de los archivos del servidor.
5. Espera hasta que el proceso termine completamente.
6. Inicia el servidor nuevamente.

:::info Por Qué Esto Ayuda
La verificación de archivos o reinstalación fuerza al servidor a descargar nuevamente los archivos de Steam de Palworld que falten o estén dañados. Esta es la solución más confiable para el error de estado de actualización `0x6`.
:::

### ¿Necesitas Editar un Archivo de Configuración?

Normalmente no se requiere ningún cambio de configuración para este error.

| Problema | Archivo de configuración requerido | Acción adicional |
| --- | --- | --- |
| `app '2394010' state is 0x6 after update job` | No | Detener servidor, verificar o reinstalar archivos, luego iniciar servidor |

## Solución de Problemas de Tiempos de Espera de Conexión

Si los jugadores ven `Connection timed out`, la causa suele ser un fallo en el inicio, una configuración de mods dañada o un problema en el método de conexión.

### Verifica Si el Servidor Está Realmente En Línea

Primero, confirma que el servidor se haya iniciado correctamente.

Puedes comprobarlo:

- viendo el estado del servidor en la interfaz web de ZAP-Hosting
- abriendo la consola y buscando la salida normal de inicio
- verificando si el servidor responde a comandos de consola si están disponibles

Si el servidor muestra muy poca actividad y no responde normalmente, puede haberse bloqueado durante el inicio.

### Revisa Cambios Recientes en la Configuración

Si editaste `PalWorldSettings.ini` poco antes de que comenzara el problema, abre el archivo nuevamente en `Configs` y revisa:

- comas faltantes
- comillas rotas
- valores duplicados
- IP o contraseñas inválidas

Ejemplos de entradas para revisar:

```ini
ServerName="[your_server_name]"
ServerPassword="[your_server_password]"
AdminPassword="[your_admin_password]"
PublicPort=8211
PublicIP="[your_server_ip]"
```

Si no estás seguro de si el problema es causado por la configuración, revierte los cambios más recientes y reinicia el servidor.

### Revisa Problemas con Mods o UE4SS

Si Palworld acaba de recibir una actualización y usas mods o `UE4SS`, el servidor puede que ya no sea compatible.

En este caso, debes:

1. Detener el servidor.
2. Crear una copia de seguridad si está disponible en la gestión del producto.
3. Eliminar o actualizar los mods instalados.
4. Iniciar el servidor nuevamente y probar la conexión.

:::caution Compatibilidad de Mods Tras Actualizaciones
Las actualizaciones de Steam para Palworld pueden romper modificaciones del lado del servidor. Si el problema comenzó justo después de una actualización, los mods son una de las primeras cosas que debes revisar.
:::

### Usa IP Directa en Lugar de Servidores Recientes

Los clientes de Palworld pueden fallar al conectarse correctamente a través de la lista de `Recent Servers` en el juego.

En su lugar, conéctate directamente usando la IP y puerto de tu servidor.

Usa el siguiente formato:

```text
[your_server_ip]:8211
```

Reemplaza `[your_server_ip]` con la dirección IP real de tu servidor de juegos.

### Problemas Relacionados con Gremios en el Mundo

Un tiempo de espera también puede ocurrir en algunas situaciones del estado del mundo, por ejemplo, si un miembro del gremio se va mientras otros están desconectados.

Las posibles soluciones incluyen:

- que el jugador afectado vuelva a unirse al gremio
- reiniciar el mundo
- restaurar desde una copia de seguridad si el mundo sigue inutilizable

:::danger Riesgo de Datos del Mundo
Si sospechas corrupción en el mundo o guardado, evita cambios manuales repetidos sin copia de seguridad. Crea o restaura una copia de seguridad antes de hacer cambios destructivos.
:::

## Solución de Problemas de Errores de Conectividad con Steam

Los problemas de conectividad relacionados con Steam pueden impedir que tu servidor Palworld se actualice o sea accesible.

### Error: `Connecting anonymously to Steam Public...Retrying`

Este mensaje suele estar relacionado con un problema temporal del servicio Steam más que con una configuración rota de Palworld.

### Qué Debes Hacer

- espera entre `5` y `10` minutos y vuelve a intentarlo
- verifica si Steam está en mantenimiento o tiene una caída
- evita reinicios repetidos durante una caída temporal de Steam

El mantenimiento de Steam suele ocurrir los martes, por lo que son posibles interrupciones breves.

### Actualizaciones Automáticas Durante Caídas de Steam

Si tu servidor intenta actualizar repetidamente durante una caída de Steam, puede permanecer inaccesible hasta que Steam responda normalmente.

Si tu producto incluye una opción de actualización automática en la administración, puedes desactivarla temporalmente hasta que termine la caída.

:::tip Manejo Temporal de Caídas de Steam
Si el servidor funcionaba antes y de repente muestra reintentos de conexión a Steam, suele ser mejor esperar un poco en lugar de cambiar archivos de configuración inmediatamente.
:::

### ¿Necesitas Editar un Archivo de Configuración?

Normalmente no se requiere cambiar ningún archivo de configuración para este problema.

| Problema | Archivo de configuración requerido | Acción adicional |
| --- | --- | --- |
| `Connecting anonymously to Steam Public...Retrying` | No | Esperar, verificar estado de Steam, opcionalmente desactivar actualizaciones automáticas temporalmente |

## Solución de Problemas de Errores de Incompatibilidad de Versión

Si ves un mensaje que indica que la partida está usando una versión incompatible del juego, la versión del servidor y del cliente no coinciden.

### Cómo Solucionarlo

1. Reinicia el servidor Palworld.
2. Espera a que el servidor complete el inicio.
3. Actualiza tu cliente local de Palworld a través de Steam si es necesario.
4. Intenta conectarte nuevamente.

Si el servidor sigue reportando una versión incompatible, puede que la actualización no se haya aplicado correctamente. En ese caso, repite el proceso de verificación o reinstalación de archivos descrito anteriormente.

### Revisa la Configuración del Servidor Tras una Actualización

Una incompatibilidad de versión normalmente no es causada por `PalWorldSettings.ini`, pero si el servidor falla tras actualizar, vale la pena confirmar que el archivo de configuración es válido y no ha cambiado.

## Entiende los Mensajes Normales de Inicio de Steam

Algunos mensajes de inicio parecen críticos aunque son comportamiento esperado.

### Mensaje: `steamclient.so: cannot open shared object file: No such file or directory`

Este mensaje suele aparecer durante el inicio y generalmente es inofensivo para servidores dedicados Palworld en este contexto.

Normalmente no necesitas editar ningún archivo ni ejecutar comandos adicionales solo por este mensaje.

:::note Seguro Ignorar en la Mayoría de Casos
Si el servidor inicia normalmente y los jugadores pueden conectarse, este mensaje de la librería Steam se puede ignorar.
:::

## Referencia de Configuración

La siguiente tabla resume las comprobaciones más relevantes para la solución de problemas en Palworld.

| Problema | Archivo a revisar | Ruta en archivos del servidor | Cambios manuales requeridos | Reinicio requerido |
| --- | --- | --- | --- | --- |
| Error de actualización `0x6` | Ninguno normalmente | No requerido | No | Sí |
| Tiempo de espera tras editar configuración | `PalWorldSettings.ini` | `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini` | Sí, revisar valores en `OptionSettings` | Sí |
| Tiempo de espera tras actualización de mods | Archivos de mods, no configuración estándar | Varía | Eliminar o actualizar mods incompatibles | Sí |
| Bucle de reintentos de Steam | Ninguno normalmente | No requerido | No | A veces, pero se recomienda esperar primero |
| Versión de juego incompatible | Ninguno normalmente | No requerido | No | Sí |
| Advertencia `steamclient.so` | Ninguno | No requerido | No | No, si el servidor funciona normalmente |

## Orden Recomendado para Solución de Problemas

Si no sabes por dónde empezar, sigue este orden:

1. Confirma que el servidor está en línea.
2. Intenta conectarte con IP directa en lugar de `Recent Servers`.
3. Verifica si Palworld o Steam tuvieron una actualización reciente.
4. Elimina o actualiza mods si los usas.
5. Revisa `PalWorldSettings.ini` en `Configs` por sintaxis inválida.
6. Reinicia el servidor.
7. Verifica o reinstala los archivos del juego si los errores de actualización continúan.

Este enfoque te ayuda a descartar las causas más comunes primero sin hacer cambios innecesarios.

## Conclusión

Felicitaciones, has solucionado con éxito problemas comunes del servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂