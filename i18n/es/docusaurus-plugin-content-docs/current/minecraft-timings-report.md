---
id: minecraft-timings-report
title: "Minecraft: Identifica problemas del servidor con el informe de timings"
description: "Descubre cómo analizar problemas de rendimiento del servidor usando informes de timings para detectar lag y optimizar tu servidor → Aprende más ahora"
sidebar_label: Informe de Timings
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Explicación

### ¿Qué es un informe de timings?

Los informes de timings son muy parecidos al administrador de tareas de tu computadora, que te permite encontrar el problema especialmente en caso de lag. Un informe de timings registra todas las actividades del servidor y las muestra visualmente.

## Informe de timings

## Crear informe de timings

Dependiendo del software del servidor, el informe de timings se crea de forma diferente. Básicamente tienes que iniciar la grabación primero con el siguiente comando (excepto para **Paper Spigot** (si no se han cambiado los ajustes)

`/timings start`

Mientras grabas, asegúrate de usar el servidor como siempre lo haces, para que los problemas respectivos puedan ser registrados y luego analizados con más detalle. La duración de la grabación debería ser de **mín. 10 minutos** o más si es posible.

## Exportar informe de timings

Para crear y exportar el informe de Timings tienes que usar el siguiente comando:

`/timings paste`

Después de unos segundos aparecerá un mensaje indicando que la exportación fue exitosa. El informe de Timings se puede abrir haciendo clic en el enlace.

![](https://screensaver01.zap-hosting.com/index.php/s/wpmB2jr2XCibHtY/preview)

## Análisis

### ↔️ Acotar valores

Una vez que el informe de Timings ha sido exportado y abierto como se describió arriba, debería aparecer una ventana similar a esta:

![](https://screensaver01.zap-hosting.com/index.php/s/9xMMtpr2jePk7B5/preview)

Primero, echa un vistazo más de cerca al gráfico para poder revisar valores aproximados de los puntos individuales de grabación moviendo el ratón sobre cada punto.

Para obtener los valores más precisos posibles, que se refieren a un posible problema en el servidor, primero deberías acotar el periodo problemático con los deslizadores de abajo, como se muestra en el gráfico:

![](https://screensaver01.zap-hosting.com/index.php/s/yfkbfqJdcQwbsiB/preview)

### Investigar valores del servidor

Hay 3 columnas en total. Como puedes ver en la captura de pantalla abajo, el recuadro número 1 muestra qué porcentaje (%) de un tick (20 ticks es un segundo) necesita el proceso principal. Entre otras cosas, también puedes ver cuántas veces se ejecutó este proceso durante la grabación.

En el recuadro número 2 puedes ver valores más precisos en milisegundos, pero ten en cuenta que el tiempo nunca debería ser mayor a 50ms. Si esto pasa, causaría una reacción en cadena y todos los procesos posteriores se acumularían un poco, lo que eventualmente llevaría a lag porque el servidor solo puede manejar los procesos con retraso.

:::info
El **Full Server Tick** generalmente se puede ignorar, ya que los valores siempre están en la zona roja, pero esto no es un gran problema.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/gLkFeTek6yR5tME/preview)

En cualquier caso, siempre deberías investigar más de cerca los valores resaltados en color.

En este ejemplo, echamos un vistazo al proceso para todas las entidades (animales, monstruos, ítems, etc.), ya que los valores ya están en naranja. De esto podrías concluir directamente que hay un problema con demasiadas entidades en el servidor.
Posiblemente hay granjas de mobs en el servidor, o se están generando masas de mobs nuevos. Si tienes problemas con demasiadas entidades, puedes reducir la tasa de spawn en los ajustes o instalar plugins que limiten el número de entidades y las eliminen automáticamente si es necesario.

Como se describió arriba, la lista básicamente siempre muestra el proceso principal. Al hacer clic en un proceso, podemos ver más de cerca procesos individuales para cada tipo de entidad e investigarlos. También presta atención a las columnas 2 y 3 mencionadas antes.

Notarás que **Minecraft::tickEntity - nms.EntitySkeleton** ha ejecutado muchos procesos. De nuevo, las granjas de mobs pueden ser el problema.

![](https://screensaver01.zap-hosting.com/index.php/s/fZzeemocpsNfxXL/preview)

Otro proceso con valores ya en naranja son los bloques en espera. Los bloques que esperan pueden ser particularmente ineficientes porque el servidor tiene que revisar el estado de cada bloque en espera en cada tick. Por ejemplo, esto sería arena, grava voladora o incluso lava y agua.

Si se usa mucha agua, por ejemplo en una granja grande, esto puede causar muchos problemas, entre otras cosas. El problema también puede surgir si se generan nuevos chunks y se crean fuentes de agua en estos chunks en una montaña. El servidor tiene que calcular el estado cada vez para que el agua fluya suavemente. Además, el servidor debe crear y cargar los chunks, lo cual también es un proceso muy intenso.

![](https://screensaver01.zap-hosting.com/index.php/s/GWz98fTiknCkWZW)

Todas las investigaciones adicionales también se pueden realizar de la misma manera, ya que los pasos son exactamente los mismos para cualquier otro proceso. Si aún necesitas ayuda con la evaluación, ¡siempre estamos disponibles para ti!

### Revisar plugins

En algunos casos, los problemas también son causados por plugins. Para determinar si un plugin es posiblemente la causa, puedes eliminar temporalmente los plugins instalados del servidor y revisar el estado actual del sistema nuevamente.

Si existe un problema con plugins, esto también se puede investigar en la sección "Plugins". Los valores también se listan en tres columnas, que tienen exactamente la misma estructura que los valores normales del servidor arriba. La diferencia es que ya no se muestra un proceso principal. En cambio, se muestra el plugin en sí. Sin embargo, aún podemos revisar todos los procesos haciendo clic en ellos e investigar los valores más de cerca.

![](https://screensaver01.zap-hosting.com/index.php/s/CzitKykWC2dzExD)

<InlineVoucher />