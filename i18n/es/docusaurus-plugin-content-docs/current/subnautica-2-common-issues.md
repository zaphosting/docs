---
id: subnautica-2-common-issues
title: "Subnautica 2: Problemas comunes"
description: "Descubre problemas comunes en servidores de juegos Subnautica 2, problemas de conexión y soluciones de rendimiento para mantener tu juego en línea y estable -> Aprende más ahora"
sidebar_label: "Problemas comunes"
services:
  - gameserver-subnautica-2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los problemas en servidores de juegos Subnautica 2 pueden variar desde fallos al iniciar y cierres inesperados hasta lag, problemas de conexión y bajo rendimiento en el juego. En esta guía, aprenderás a identificar problemas comunes en tu servidor de juegos Subnautica 2 y aplicar soluciones prácticas para que tu juego vuelva a estar en línea y funcione sin problemas.

:::info Cambios en Acceso Anticipado
Si el software del servidor Subnautica 2 aún está en desarrollo activo, algunos comportamientos, archivos de configuración o funciones disponibles pueden variar entre versiones. Si notas diferencias en tu servidor, siempre compáralas con la versión instalada actualmente en tu panel web de ZAP-Hosting.
:::

<InlineVoucher />

## Problemas y soluciones

Los problemas en el servidor no siempre son causados por un solo fallo. En muchos casos, el problema está relacionado con archivos desactualizados, configuraciones incorrectas, recursos insuficientes o condiciones temporales de red. Las secciones a continuación te ayudarán a solucionar los problemas más comunes paso a paso.

### Problemas generales

Los problemas generales suelen afectar la disponibilidad básica del servidor, su visibilidad o el comportamiento al iniciar. Estos son los primeros chequeos que debes realizar antes de investigar causas más avanzadas.

<details>
  <summary>Servidor no visible en el juego</summary>

Si tu servidor Subnautica 2 no es visible, puede que no haya iniciado correctamente o que no haya completado su proceso de inicialización. Esto puede ocurrir por valores de configuración inválidos, archivos de instalación incompletos o errores al iniciar.

Comienza revisando lo siguiente:

- Verifica que el servidor aparezca como activo en tu panel web de ZAP-Hosting
- Revisa la consola del servidor para detectar errores al iniciar
- Consulta los archivos de registro para detectar archivos faltantes o fallos en la inicialización
- Confirma que estás usando los filtros de búsqueda correctos en el navegador de servidores dentro del juego
- Espera unos minutos después del inicio, ya que algunos servidores necesitan tiempo adicional antes de aparecer públicamente

Si el servidor aún no aparece, reinícialo una vez y monitorea la consola desde el inicio del proceso.

</details>

<details>
  <summary>El servidor no inicia</summary>

Si el servidor no inicia en absoluto, la causa suele estar relacionada con archivos corruptos, una actualización incompleta o una configuración inválida.

Debes revisar estos puntos:

| Revisión | Por qué es importante |
| --- | --- |
| Salida de la consola del servidor | Muestra el error exacto al iniciar si está disponible |
| Cambios recientes en la configuración | Un solo valor inválido puede impedir el inicio |
| Subidas o modificaciones recientes de archivos | Archivos modificados manualmente pueden estar incompletos o ser incompatibles |
| Versión actual del juego | Archivos del servidor desajustados pueden causar fallo inmediato al iniciar |

Si cambiaste archivos de configuración recientemente, revierte los últimos cambios y prueba de nuevo. Si el problema comenzó tras una actualización o modificación manual, restaurar una copia de seguridad puede ahorrarte tiempo.

:::tip Usa copias de seguridad antes de cambios importantes
Antes de editar archivos importantes o actualizar tu servidor, crea una copia de seguridad para poder revertir rápidamente si aparece un nuevo problema.
:::

</details>

<details>
  <summary>La contraseña o ajustes de acceso no funcionan como se espera</summary>

Si los jugadores no pueden unirse aunque el servidor aparezca en línea, revisa cuidadosamente tus ajustes relacionados con el acceso. Una contraseña incorrecta, información guardada obsoleta en el cliente o una discrepancia entre configuraciones públicas y privadas pueden bloquear el acceso.

Debes verificar:

- Que la contraseña ingresada por los jugadores coincida exactamente con la contraseña actual del servidor
- Que el servidor haya sido reiniciado después de cambiar los ajustes de acceso
- Que no se esté reutilizando información de conexión guardada antigua en el cliente
- Que cualquier configuración privada o de lista blanca esté configurada según lo previsto, si está disponible en tu versión actual del servidor

Si no estás seguro si la causa es la configuración, simplifica temporalmente el setup y prueba con restricciones mínimas.

</details>

### Problemas de cierres inesperados

Los cierres inesperados interrumpen la partida y pueden causar pérdida de datos si ocurren repetidamente. Las causas más comunes son archivos del servidor desactualizados, modificaciones incompatibles o recursos sobrecargados.

<details>
  <summary>Mantén tu servidor actualizado</summary>

Ejecutar la versión más reciente disponible del servidor Subnautica 2 es importante para la estabilidad, compatibilidad y seguridad. Las versiones antiguas pueden contener errores ya corregidos o pueden no funcionar correctamente con el cliente actual del juego.

Un servidor desactualizado puede causar:

- fallos al iniciar
- cierres aleatorios
- errores por desajuste de versión
- comportamiento inestable en el juego

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Si tu servidor comenzó a fallar después de una actualización del juego, primero verifica si hay una versión más nueva del servidor disponible en tu panel web. Después de actualizar, reinicia el servidor y prueba de nuevo.

</details>

<details>
  <summary>Mods o contenido adicional defectuoso o incompatible</summary>

Si Subnautica 2 soporta mods u otro contenido adicional del lado del servidor en tu versión actual, estos pueden ser una fuente común de cierres inesperados. El contenido incompatible o desactualizado puede cargarse parcialmente, pero provocar errores más adelante durante la partida.

Los signos típicos incluyen:

- el servidor se cierra después de iniciar
- el servidor se cierra cuando un jugador se une
- el servidor se congela durante la carga del mundo
- aparecen errores tras añadir nuevo contenido

Para aislar la causa, sigue este proceso:

1. Detén el servidor
2. Elimina o desactiva el contenido añadido recientemente
3. Inicia el servidor con la configuración mínima posible
4. Prueba la estabilidad
5. Vuelve a activar el contenido uno por uno

Este método te ayuda a identificar exactamente qué archivo o paquete está causando el problema.

:::caution Compatibilidad de versiones
Usa solo mods, frameworks u otras extensiones que estén confirmadas como compatibles con tu versión actual del servidor Subnautica 2. Incluso un solo componente desactualizado puede causar cierres repetidos.
:::

</details>

<details>
  <summary>Mundo o datos guardados corruptos</summary>

Si el servidor se cierra mientras carga el mundo o poco después de que los jugadores se conectan, los datos guardados pueden estar dañados. Esto puede ocurrir tras apagados forzados, escrituras interrumpidas o cierres repetidos.

Indicadores posibles incluyen:

- el servidor se cierra en la misma etapa de carga cada vez
- un mundo nuevo inicia correctamente, pero el existente no
- la consola reporta errores al cargar guardados o el mundo

Si sospechas corrupción en los guardados, prueba con una copia de seguridad o un mundo nuevo si está disponible. Si un mundo nuevo inicia sin problemas, el problema probablemente esté relacionado con los datos guardados existentes.

:::danger Riesgo de pérdida de datos
No elimines tus archivos de mundo existentes inmediatamente. Primero crea una copia de seguridad para poder intentar una recuperación más tarde si es necesario.
:::

</details>

### Problemas de rendimiento

Los problemas de rendimiento suelen manifestarse como lag, acciones retrasadas, carga lenta del mundo o juego inestable. Estos problemas suelen ser causados por configuraciones, recursos de hardware insuficientes o contenido adicional pesado.

<details>
  <summary>Mala configuración del servidor</summary>

Valores de configuración incorrectos pueden aumentar la carga de CPU, memoria o almacenamiento y reducir el rendimiento general del servidor. Si tu servidor Subnautica 2 se siente lento o inestable, revisa tus ajustes cuidadosamente.

En particular, verifica si:

- los límites relacionados con jugadores son realistas para tu paquete
- las configuraciones del mundo no son más exigentes de lo necesario
- se cambiaron recientemente ajustes experimentales o no predeterminados
- el servidor fue reiniciado después de aplicar cambios

Normalmente puedes gestionar tu configuración en la sección **Settings** o a través de los archivos disponibles en **Configs** en tu panel web de ZAP-Hosting.

</details>

<details>
  <summary>El paquete del servidor no cumple con los requisitos del proyecto</summary>

Un servidor demasiado pequeño para tu proyecto puede causar tartamudeos, tiempos de carga largos e inestabilidad. Esto se nota más al aumentar la cantidad de jugadores, usar contenido adicional o ejecutar un mundo grande y activo.

ZAP-Hosting ofrece configuraciones recomendadas durante el proceso de compra para ayudarte a elegir recursos adecuados para tu juego.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Usa la siguiente tabla como referencia general para solucionar problemas:

| Síntoma | Causa posible | Acción recomendada |
| --- | --- | --- |
| Picos frecuentes de lag | Recursos de CPU demasiado limitados | Reduce la carga o mejora tu paquete |
| Tiempos de carga lentos | Cuello de botella en almacenamiento o memoria | Revisa el uso y considera más recursos |
| Cierres bajo carga de jugadores | Capacidad general insuficiente | Reduce la carga o escala el servidor |
| Buen rendimiento vacío, mal rendimiento con jugadores | Paquete demasiado pequeño para uso activo | Mejora según la actividad esperada de jugadores |

:::note Recomendaciones mínimas
Los tamaños de paquete recomendados son solo un punto de partida. Si tu servidor de juegos Subnautica 2 usa un mundo más grande, más jugadores o contenido adicional, puede que necesites más recursos desde el inicio.
:::

</details>

<details>
  <summary>Alto uso de recursos por mods o contenido adicional</summary>

Aunque el contenido adicional no cause cierres, puede generar problemas serios de rendimiento. Contenido mal optimizado puede aumentar el uso de CPU, consumir demasiada memoria o provocar procesos en segundo plano repetidos.

Un buen método para solucionar problemas es comparar el rendimiento con y sin el contenido añadido. Si el servidor funciona normalmente con una configuración mínima, vuelve a introducir el contenido gradualmente hasta que el problema reaparezca.

Este enfoque es especialmente útil cuando:

- el lag comenzó tras instalar nuevo contenido
- el servidor se vuelve inestable con el tiempo
- el rendimiento baja solo en ciertas áreas o situaciones
- el uso aumenta sin cambios evidentes en la configuración

</details>

<details>
  <summary>Mundo grande o guardado de larga duración causa lentitud</summary>

A medida que un mundo de servidor crece y se acumula más actividad de jugadores, el rendimiento puede disminuir. Esto es común en servidores que llevan mucho tiempo con gran cantidad de datos guardados.

Si notas que el rendimiento fue bueno al principio pero empeoró después, considera lo siguiente:

- prueba si una copia de seguridad más reciente funciona mejor
- revisa si hay demasiados jugadores activos simultáneamente
- elimina contenido adicional innecesario
- verifica si el problema aparece solo en un mundo específico

Si un mundo de prueba nuevo funciona significativamente mejor, la lentitud puede estar relacionada con el tamaño del mundo o la complejidad del guardado.

</details>

### Problemas de red

Los problemas relacionados con la red afectan cómo los jugadores se conectan e interactúan con tu servidor. Estos problemas pueden manifestarse como ping alto, rubberbanding, desconexiones o inaccesibilidad total.

<details>
  <summary>Picos de ping, lag y retraso en la red</summary>

Los picos de ping y el retraso en la red suelen ser causados por una combinación de carga del servidor y condiciones de enrutamiento. Aunque el juego esté en línea, hardware sobrecargado o gran distancia geográfica pueden generar una mala experiencia.

Causas comunes incluyen:

- la ubicación del servidor está lejos de la base de jugadores
- el servidor está bajo alta carga de CPU o memoria
- muchos jugadores conectados simultáneamente
- tareas en segundo plano u otros procesos consumen recursos
- problemas temporales de enrutamiento o pérdida de paquetes entre jugadores y servidor

Para mejorar la calidad de la red, revisa lo siguiente:

| Revisión | Resultado |
| --- | --- |
| Elige una ubicación cercana a tus jugadores | Menor latencia promedio |
| Reduce la carga innecesaria del servidor | Menos picos de lag durante el juego |
| Mantén el servidor actualizado | Mejor estabilidad y compatibilidad |
| Prueba en diferentes horarios | Ayuda a identificar problemas temporales de enrutamiento |

Si el problema afecta solo a un jugador, puede ser un problema en la conexión de ese jugador. Si afecta a todos, la causa probablemente sea del lado del servidor o de la ruta.

</details>

<details>
  <summary>Jugadores se desconectan aleatoriamente</summary>

Las desconexiones aleatorias pueden ser causadas por enrutamiento inestable, recursos del servidor sobrecargados o inestabilidad temporal del software. Si los jugadores son expulsados sin razón clara en el juego, compara el momento de las desconexiones con mensajes en la consola y picos de rendimiento.

Debes revisar:

- si las desconexiones ocurren en momentos de carga máxima
- si el servidor se reinicia o se congela brevemente
- si todos los jugadores se desconectan a la vez o solo usuarios individuales
- si el problema comenzó tras una actualización o cambio de configuración reciente

Si todos los jugadores se desconectan simultáneamente, el problema suele estar relacionado con el servidor o la ruta de red. Si solo un jugador se desconecta, la causa suele ser local para ese jugador.

</details>

<details>
  <summary>Ataques DDoS y otras amenazas de red</summary>

Los servidores de juegos pueden ser objetivo ocasional de tráfico malicioso, incluyendo ataques de Denegación de Servicio Distribuida (DDoS). Estos ataques pueden causar lag, fallos de conexión o caídas temporales.

ZAP-Hosting ofrece protección DDoS para los servicios alojados, lo que ayuda a reducir el impacto de patrones de ataque comunes y avanzados. Sin embargo, si sospechas que tu servidor Subnautica 2 está siendo atacado, debes contactar al soporte y proporcionar tantos detalles como sea posible, como:

- cuándo comenzó el problema
- si todos los jugadores están afectados
- si el servidor se vuelve completamente inaccesible
- si el problema se repite en horarios específicos

:::info Protección integrada
La mitigación de DDoS se maneja a nivel de infraestructura. Si sospechas tráfico malicioso, normalmente no necesitas cambiar configuraciones del servidor primero. En su lugar, recopila síntomas y contacta al soporte.
:::

</details>

### Problemas relacionados con la jugabilidad

Algunos problemas no son cierres directos o fallos de red, pero afectan si el juego funciona correctamente para los jugadores.

<details>
  <summary>Desajuste de versión entre cliente y servidor</summary>

Si los jugadores no pueden unirse tras una actualización del juego, el servidor y el cliente pueden estar ejecutando versiones diferentes. Esto es común justo después de parches.

Para resolverlo:

1. Confirma que el servidor ha sido actualizado
2. Reinicia el servidor después de la actualización
3. Asegúrate de que los jugadores hayan actualizado su cliente
4. Prueba la conexión de nuevo

Si solo algunos jugadores pueden unirse, compara primero su versión del juego con la del servidor.

</details>

<details>
  <summary>Los cambios no se aplican tras editar la configuración</summary>

Si cambiaste valores de configuración pero no ves diferencias en el juego, el servidor puede estar usando datos en caché o sin cambios, o el archivo editado puede no ser el activo.

Revisa lo siguiente:

- que el archivo correcto fue editado
- que los valores se guardaron correctamente
- que el servidor fue reiniciado completamente después
- que el ajuste cambiado es compatible con tu versión instalada

Si el comportamiento exacto de la configuración no está claro para tu versión actual de Subnautica 2, evita adivinar y prueba los cambios uno a uno para identificar claramente qué se aplica.

</details>

## Medidas preventivas

Prevenir problemas suele ser más fácil que solucionarlos después de que afecten a tus jugadores. Algunos pasos regulares de mantenimiento pueden mejorar significativamente la estabilidad.

### Lista recomendada de mantenimiento

Usa esta lista para reducir la probabilidad de problemas futuros:

| Tarea | Por qué deberías hacerla |
| --- | --- |
| Crear copias de seguridad regulares | Protege tu mundo y configuración contra pérdida de datos |
| Actualizar el servidor con cuidado | Reduce errores y problemas de desajuste de versión |
| Probar cambios uno a uno | Facilita la solución de problemas si algo falla |
| Monitorear rendimiento tras cambios | Ayuda a detectar aumento de uso de CPU o memoria temprano |
| Mantener solo contenido necesario instalado | Reduce riesgos de compatibilidad y rendimiento |

### Usa copias de seguridad regularmente

Las copias de seguridad regulares pueden ahorrarte mucho tiempo y evitar pérdida permanente de datos. Si un cambio de configuración, actualización o problema del mundo causa fallos, puedes restaurar un estado conocido en lugar de reconstruir todo manualmente.

Puedes usar la [solución de copias de seguridad](gameserver-backups.md) disponible para crear copias manuales o programadas para tu servidor de juegos.

:::tip Copia de seguridad antes de cambios riesgosos
Crea una copia de seguridad antes de actualizar el servidor, editar archivos importantes o añadir nuevos mods y contenido. Esto te da un punto seguro para revertir si aparecen problemas nuevos.
:::

<InlineVoucher />

## Conclusión

Felicitaciones, has solucionado con éxito problemas comunes en tu servidor de juegos Subnautica 2. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible diariamente para ayudarte! 🙂