---
id: palworld-troubleshooting
title: "Palworld: Solución de Problemas"
description: "Soluciona problemas comunes del servidor de Palworld, problemas con actualizaciones de Steam para Palworld y errores de conexión a Steam en tu servidor de juegos. -> Aprende más ahora"
sidebar_label: Palworld: Solución de Problemas
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los servidores dedicados de Palworld pueden fallar por varias razones, incluyendo actualizaciones fallidas de Steam, incompatibilidades de versión, conflictos con mods y problemas temporales de conexión a Steam. En esta guía, aprenderás a identificar problemas comunes en servidores de Palworld en ZAP-Hosting y aplicar la solución correcta, incluyendo cuándo editar archivos de configuración, verificar archivos o reiniciar tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar con la solución de problemas, asegúrate de tener acceso a la administración y consola de tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting.

También deberías tener lo siguiente listo:

| Requisito | Por qué es necesario |
| --- | --- |
| Acceso al panel de tu servidor de juegos en ZAP-Hosting | Necesario para detener, iniciar, reinstalar y editar archivos de configuración |
| Acceso a la consola del servidor | Útil para comprobar si el servidor responde |
| Una copia de seguridad reciente | Recomendado antes de cambiar archivos o eliminar mods |
| Dirección IP y puerto directos del servidor | Necesario porque la lista de servidores recientes en el juego puede no funcionar de forma confiable |

:::caution Crea una copia de seguridad primero
Si planeas eliminar mods, reinstalar archivos o restablecer partes de la configuración de tu servidor Palworld, debes crear una copia de seguridad primero para evitar pérdida accidental de datos.
:::

## Accediendo a los Archivos de Configuración de Palworld

Algunos pasos de solución requieren cambios manuales en los archivos de configuración de Palworld. En ZAP-Hosting, puedes acceder a estos archivos a través de la administración de tu servidor de juegos en la sección `Configs`.

Para servidores dedicados de Palworld, la configuración principal del servidor suele estar en el siguiente archivo:

```text
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Si tu servidor usa una plantilla de plataforma diferente, el nombre exacto de la carpeta puede variar, pero en servidores Palworld basados en Linux alojados, la ruta `LinuxServer` es la ubicación estándar.

### Abre el Archivo de Configuración en la Interfaz de ZAP

Para acceder al archivo:

1. Abre tu servidor Palworld en la interfaz web de ZAP-Hosting.
2. Navega a la sección `Configs`.
3. Abre `PalWorldSettings.ini`.
4. Revisa la línea `OptionSettings=(...)`, que contiene la mayoría de las configuraciones relacionadas con el juego y la conexión.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info Archivo de Configuración Principal
La mayoría de las opciones del servidor Palworld se almacenan en `PalWorldSettings.ini`, usualmente dentro de la sección `OptionSettings=(...)`. Si necesitas ajustar configuraciones de juego, contraseñas, límites de jugadores o valores relacionados con la red, normalmente este es el archivo que editarás.
:::

### Guarda y Reinicia Después de Editar

Después de cambiar cualquier valor de configuración:

1. Guarda el archivo en la sección `Configs`.
2. Reinicia el servidor Palworld desde la interfaz de ZAP-Hosting.

Palworld no aplica confiablemente los cambios de configuración en vivo, por lo que es necesario reiniciar después de editar `PalWorldSettings.ini`.

## Solucionando Fallos en Actualizaciones de Steam

Un problema conocido de actualización puede mostrar el siguiente mensaje:

```text
Error! app '2394010' state is 0x6 after update job
```

Esto suele indicar que los archivos del servidor Steam de Palworld no se actualizaron correctamente.

### Solución Recomendada

Para resolverlo:

1. Detén tu servidor Palworld.
2. Abre el área de gestión del servidor en la interfaz de ZAP-Hosting.
3. Usa la función de reinstalación o verificación de archivos.
4. Selecciona la opción para verificar la integridad, así se revisan y descargan nuevamente los archivos si es necesario.
5. Inicia el servidor de nuevo.

:::tip Verifica la integridad para archivos corruptos
La verificación de archivos es generalmente el primer paso más seguro porque repara archivos faltantes o dañados del servidor de juegos Palworld sin que tengas que subir nada manualmente.
:::

### ¿Necesitas editar un archivo de configuración?

Normalmente no se requiere ningún cambio manual en archivos de configuración para este error específico. El problema suele estar relacionado con archivos del juego dañados o incompletos, no con una configuración errónea en `PalWorldSettings.ini`.

## Solucionando "Connection Timed Out"

Si recibes un error de `Connection timed out` al unirte a tu servidor de juegos Palworld, pueden existir varias causas.

## Verifica si el Servidor Está Realmente en Funcionamiento

Primero, confirma que el servidor haya arrancado correctamente.

### Usa la Consola

Abre la consola del servidor en la interfaz de ZAP-Hosting y verifica la actividad normal de inicio. Si la consola está disponible, prueba un comando simple como:

```text
info
```

Si el servidor responde normalmente, probablemente está en funcionamiento. Si no hay respuesta útil o el proceso se detiene repetidamente, el servidor puede estar fallando durante el inicio.

### Revisa el Uso de Recursos

Si el uso de CPU permanece inusualmente bajo durante el inicio y el servidor no responde en la consola, esto puede indicar que el proceso del servidor Palworld se ha bloqueado o no se ha inicializado correctamente.

| Síntoma | Causa probable | Acción recomendada |
| --- | --- | --- |
| Sin respuesta en consola | Bloqueo en inicio o proceso colgado | Reinicia el servidor y revisa cambios recientes |
| Uso muy bajo de CPU durante inicio | Servidor no se inicializa correctamente | Revisa mods, actualizaciones recientes y logs |
| Servidor inicia pero jugadores se desconectan | Problema con método de conexión o versión | Usa IP directa y verifica versiones |

## Conéctate Usando IP Directa en Lugar de Servidores Recientes

Un problema común en Palworld es que unirse a través de la pestaña `Recent Servers` del juego puede fallar aunque el servidor esté en línea.

Usa una conexión directa en su lugar:

1. Copia la IP y puerto de tu servidor desde la interfaz de ZAP-Hosting.
2. En Palworld, conéctate directamente usando esa dirección.
3. Evita depender de la lista `Recent Servers` para pruebas.

:::note La conexión directa es más confiable
Si el navegador de servidores Steam o la lista de servidores recientes de Palworld se comporta de forma inconsistente, la conexión por IP directa es la mejor forma de confirmar si tu servidor es accesible.
:::

## Revisa Problemas con Mods o UE4SS

Si Palworld recibió una actualización reciente y tu servidor usa mods o `UE4SS`, el servidor puede dejar de funcionar hasta que esas modificaciones se actualicen.

### Qué Revisar

Verifica si instalaste recientemente:

- mods de juego
- modificaciones personalizadas del servidor
- `UE4SS`
- otros archivos de terceros que se integran con el servidor de juegos Palworld

Si el problema comenzó justo después de una actualización de Steam para Palworld, estos archivos son una causa probable.

### Solución Recomendada

1. Detén el servidor.
2. Crea una copia de seguridad.
3. Elimina o desactiva mods o `UE4SS` añadidos recientemente.
4. Inicia el servidor de nuevo.
5. Prueba la conexión usando IP directa.

:::caution Compatibilidad de mods tras actualizaciones
Las actualizaciones de Palworld pueden romper mods sin aviso. Si tu servidor funcionaba antes de una actualización y dejó de hacerlo después, siempre prueba sin mods antes de cambiar otras configuraciones.
:::

### ¿Se requieren cambios en la configuración?

Generalmente no. Los tiempos de espera en conexión relacionados con mods suelen ser causados por archivos incompatibles, no por valores dentro de `PalWorldSettings.ini`.

## Solucionando Errores de Conectividad a Steam

Puedes ver el siguiente mensaje al iniciar:

```text
Connecting anonymously to Steam Public...Retrying
```

Esto suele estar relacionado con problemas temporales de conexión a Steam, no con una configuración rota de Palworld.

### Qué Significa Esto

El servidor dedicado de Palworld depende de los servicios de Steam para partes del proceso de inicio y actualización. Si Steam tiene caídas, carga alta o mantenimiento programado, el servidor puede fallar temporalmente al conectar.

Esto es especialmente común durante períodos de alto tráfico o mantenimiento rutinario de Steam, que suele ocurrir los martes.

### Solución Recomendada

Prueba lo siguiente:

1. Espera entre `5` y `10` minutos.
2. Reinicia el servidor.
3. Vuelve a probar después.

Si el problema ocurre durante una caída general de Steam, puede que necesites esperar hasta que los servicios de Steam se recuperen.

### Consideración sobre actualizaciones automáticas

Si tu servidor tiene problemas recurrentes de inicio relacionados con actualizaciones durante caídas de Steam, puedes considerar desactivar las actualizaciones automáticas en la configuración del servidor hasta que Steam esté estable nuevamente.

:::tip Evita ventanas de actualización durante mantenimiento de Steam
Si es posible, evita forzar una actualización de Steam para Palworld durante períodos conocidos de mantenimiento de Steam. Esto puede reducir intentos fallidos de inicio y problemas innecesarios.
:::

### ¿Se requieren cambios en la configuración?

No. Este problema normalmente no se soluciona editando `PalWorldSettings.ini` ni otro archivo de configuración manual.

## Solucionando "Versión Incompatible del Juego"

Si Palworld muestra un mensaje indicando que la partida está usando una versión incompatible del juego, la versión de tu cliente y la del servidor no coinciden.

## Actualiza la Versión del Servidor

Comienza reiniciando el servidor desde la interfaz de ZAP-Hosting. En muchos casos, esto permite aplicar la última actualización del servidor de juegos Palworld.

Si la versión sigue sin coincidir, usa tu flujo normal de actualización del servidor. Si necesitas una guía dedicada para actualizar, sigue la documentación correspondiente de Palworld si está disponible en ZAP-Docs.

### Confirma la Versión del Cliente

Asegúrate de que tu instalación local de Palworld también esté completamente actualizada a través de Steam.

| Componente | Qué revisar |
| --- | --- |
| Servidor Palworld | Reiniciado y actualizado en ZAP-Hosting |
| Juego local Palworld | Actualizado en Steam |
| Mods | Actualizados o eliminados si son incompatibles |

:::info Las incompatibilidades de versión afectan a ambos lados
Este error no siempre significa que el servidor esté desactualizado. Tu cliente local de Palworld también puede ser la versión antigua, así que siempre verifica ambos antes de hacer cambios más profundos.
:::

### ¿Se requieren cambios en la configuración?

Normalmente no se requieren ediciones en archivos de configuración para incompatibilidades de versión.

## Entendiendo Mensajes de Inicio con `steamclient.so`

Durante el inicio, puedes ver mensajes similares a:

```text
steamclient.so: cannot open shared object file: No such file or directory
```

En muchos entornos de hosting para Palworld, estos mensajes relacionados con Steam aparecen incluso cuando el servidor inicia normalmente.

### Qué Debes Hacer

Si el servidor continúa iniciando y es accesible, normalmente puedes ignorar este mensaje.

### Cuándo se vuelve un problema

Solo investiga más si el servidor no inicia completamente y este mensaje aparece junto con errores fatales adicionales.

:::note No todos los mensajes de error de Steam son críticos
Los logs de inicio a menudo contienen advertencias no fatales. Concéntrate en si el servidor termina de arrancar y acepta conexiones, no solo en si aparece una advertencia en la consola.
:::

## Solución de Problemas de Conexión Relacionados con Mundo y Gremio

En algunos casos, los jugadores pueden experimentar problemas de conexión relacionados con el estado del mundo o del gremio, más que con el proceso del servidor en sí.

Un ejemplo reportado es cuando un miembro del gremio se va mientras otros datos de jugadores relacionados con el gremio siguen vinculados a jugadores desconectados. Esto puede causar problemas para unirse.

### Posibles Soluciones

Prueba lo siguiente en orden:

1. Pide al jugador afectado que vuelva a unirse al gremio si es posible.
2. Reinicia el servidor Palworld.
3. Si el problema persiste, restaura una copia de seguridad o investiga cuidadosamente los datos guardados afectados.

:::danger Cambios en datos guardados pueden ser riesgosos
Si sospechas corrupción en el mundo o en los datos guardados, evita hacer cambios manuales aleatorios a menos que tengas una copia de seguridad actual. Ediciones incorrectas pueden dañar permanentemente los datos de tu mundo Palworld.
:::

## Valores de Configuración que Vale la Pena Revisar

Aunque la mayoría de los problemas en esta guía no son causados directamente por configuraciones erróneas, hay algunos valores en `PalWorldSettings.ini` que podrías revisar si los jugadores no pueden unirse como se espera.

Estos valores suelen encontrarse dentro de la sección `OptionSettings=(...)`.

| Clave de configuración | Propósito | Qué revisar |
| --- | --- | --- |
| `ServerName` | Nombre público del servidor | Confirma que esté configurado como deseas |
| `ServerDescription` | Descripción del servidor | Opcional, pero útil para identificación |
| `AdminPassword` | Contraseña de administrador | Asegúrate de que esté correcta si usas comandos admin |
| `ServerPassword` | Contraseña para unirse | Elimínala o corrígela si los jugadores no pueden autenticarse |
| `PublicPort` | Puerto de conexión del juego | Confirma que coincida con el puerto asignado a tu servicio |
| `PublicIP` | IP pública anunciada | Usualmente déjalo sin cambios a menos que tu configuración lo requiera |
| `bIsMultiplay` | Modo multijugador | Debe estar habilitado para uso normal de servidor dedicado |
| `bIsDedicated` | Modo servidor dedicado | Debe estar habilitado para servidores dedicados alojados |

### Ejemplo de estructura

El contenido exacto de tu archivo puede variar, pero las configuraciones relevantes suelen estar en una línea similar a esta:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Palworld Server",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="",bIsMultiplay=True,bIsDedicated=True)
```

Reemplaza los marcadores como `[your_admin_password]` y `[your_server_password]` con tus propios valores.

:::caution No cambies valores desconocidos al azar
Palworld almacena muchas configuraciones en una sola línea `OptionSettings`. Si eliminas comas, comillas o corchetes por error, el servidor puede no leer la configuración correctamente.
:::

## Aplicando Cambios de Configuración de Forma Segura

Si necesitas editar `PalWorldSettings.ini`, sigue este proceso:

1. Detén el servidor si quieres evitar conflictos mientras editas.
2. Abre `Configs` en la interfaz de ZAP-Hosting.
3. Edita `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`.
4. Guarda tus cambios.
5. Inicia o reinicia el servidor.
6. Prueba el servidor usando una conexión por IP directa.

### No se requieren comandos adicionales

Para cambios estándar en la configuración de Palworld, normalmente no es necesario ningún comando extra en consola después de guardar el archivo. El reinicio es el paso final importante.

## Referencia Rápida

| Problema | Edición de archivo de configuración necesaria | Reinicio requerido | Acción adicional |
| --- | --- | --- | --- |
| `app '2394010' state is 0x6 after update job` | No | Sí | Verificar integridad o reinstalar archivos |
| `Connection timed out` | Usualmente no | A menudo sí | Usar IP directa, revisar mods, probar consola |
| `Connecting anonymously to Steam Public...Retrying` | No | Sí | Esperar recuperación de Steam |
| `Incompatible version of the game` | No | Sí | Actualizar servidor y cliente |
| Advertencia `steamclient.so` | No | No, si el servidor inicia normalmente | Usualmente seguro ignorar |
| Problemas para unirse tras cambios en gremio | No | Sí | Reunirse al gremio o restaurar copia si es necesario |

## Conclusión

Felicitaciones, has solucionado con éxito problemas comunes en servidores de Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible diariamente para ayudarte! 🙂