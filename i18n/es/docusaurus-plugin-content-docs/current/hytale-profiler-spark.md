---
id: hytale-profiler-spark
title: "Hytale: Spark Profiler – Identifica Cuellos de Botella en el Rendimiento"
description: "Usa el mod Spark para diagnosticar problemas de rendimiento e identificar las causas del lag en tu servidor de Hytale → Aprende más ahora"
sidebar_label: Spark Profiler
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Button from '@site/src/components/Button';

## Introducción

Problemas de rendimiento como bajo TPS (ticks por segundo), picos de lag o tartamudeos pueden afectar mucho la experiencia de juego en un servidor de Hytale. Identificar la causa de estos problemas manualmente es complicado sin diagnósticos detallados.

![img](https://screensaver01.zap-hosting.com/index.php/s/E4o3SDSRr3RpBBA/preview)

El mod **Spark** profiler le da a los dueños de servidores una herramienta potente para analizar el rendimiento del servidor. Una vez instalado, Spark puede recopilar datos sobre uso de CPU, tiempos de tick, métricas de salud del servidor y más, y generar reportes detallados que ayudan a localizar exactamente dónde están ocurriendo los problemas de rendimiento. Esto lo convierte en una herramienta esencial para solucionar problemas y optimizar, especialmente en mundos de Hytale grandes o con mucha actividad.

<InlineVoucher />

## Qué hace Spark

Spark ofrece múltiples capacidades de perfilado:

- **Perfilado de rendimiento** – registra la actividad del servidor e identifica ticks lentos o alto uso de CPU  
- **Métricas de salud del servidor** – incluye duración de ticks, TPS, uso de CPU y memoria  
- **Reportes interactivos** – genera un reporte web que se puede ver en el navegador  
- **Ligero y fácil de usar** – diseñado para tener un impacto mínimo mientras recopila datos útiles  

## Instalando Spark

Spark se distribuye vía CurseForge y se instala como un mod. Puedes instalar mods ya sea con nuestro Instalador de Mods o vía FTP. Más info en nuestra [guía de Instalación de Mods](http://localhost:3000/guides/docs/hytale-mods). Después de la instalación, reinicia el servidor de Hytale.

<Button label="Descargar Spark" link="https://www.curseforge.com/hytale/mods/spark" block />

## Ejecutando el profiler

Después de instalar Spark y arrancar tu servidor, abre la pestaña **Consola en Vivo** en el panel de control de tu servidor de juegos o usa el chat dentro del juego si tienes los permisos necesarios. Para comenzar a recopilar datos de rendimiento, inicia el profiler con el siguiente comando:

```
/spark profiler start
```

![](https://screensaver01.zap-hosting.com/index.php/s/4fwJk5wtkGK7Yqy/download)

Una vez iniciado, Spark comienza a registrar la actividad detallada del servidor como duración de ticks, uso de CPU y ejecución de hilos. El profiler debe correr mientras el servidor está experimentando el problema que quieres analizar, por ejemplo durante la máxima actividad de jugadores o cuando ocurren picos de lag. Dejar correr el profiler al menos 30 a 60 segundos suele proporcionar datos suficientes para un análisis significativo.

Mientras el profiler está activo, ya puedes ver resultados en vivo ejecutando:

```
/spark profiler open
```

Este comando genera un enlace web en la consola o en el chat. Abrir ese enlace en tu navegador muestra una vista en vivo de los datos del perfilado, incluyendo gráficos de ticks y distribución de carga.

Cuando hayas recopilado suficiente información, detén el profiler con:

```
/spark profiler stop
```

Al detenerlo, Spark genera un enlace con el reporte final. Este reporte contiene el conjunto completo de datos de la sesión de perfilado y puede abrirse en un navegador o compartirse para análisis adicionales.

Si necesitas descartar la sesión actual y empezar de nuevo, puedes resetear el profiler con:

```
/spark profiler cancel
/spark profiler start
```

Esto borra los datos existentes y comienza una nueva sesión de perfilado inmediatamente.

## Analizando los resultados del profiler

El reporte del profiler Spark ofrece un desglose detallado de cómo se están usando los recursos del servidor. Una de las áreas más importantes para revisar es la línea de tiempo de ticks, que muestra cuánto tarda cada tick en completarse. Ticks consistentemente largos suelen indicar cargas pesadas que impactan directamente el TPS y la fluidez del juego.

![img](https://screensaver01.zap-hosting.com/index.php/s/zToJEdffQ75EgXH/preview)

El reporte del profiler Spark ofrece un desglose detallado de cómo se usan los recursos del servidor. Una de las áreas clave para revisar es la línea de tiempo de ticks, que muestra cuánto tarda cada tick en completarse. Ticks largos y constantes suelen indicar cargas pesadas que afectan el TPS y la jugabilidad.

El profiler también resalta **puntos calientes**, mostrando qué funciones o sistemas consumen más recursos. Estos insights facilitan determinar si los problemas de rendimiento son causados por mods específicos, comportamiento de jugadores, mecánicas del mundo o configuración del servidor.

Los reportes de Spark están diseñados para ser compartidos. Cuando pidas ayuda a soporte o a otros admins, proporcionar el enlace del profiler permite que revisen los datos directamente y den recomendaciones precisas.

## Conclusión

El mod Spark profiler para Hytale es una herramienta valiosa para diagnosticar problemas de rendimiento e identificar las causas raíz del lag en el servidor. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />