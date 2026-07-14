---
id: palworld-max-dropped-items
title: "Palworld: Máximo de Ítems Caídos"
description: "Aprende a cambiar los límites de ítems caídos y la configuración de desaparición de ítems en tu servidor de Palworld editando los valores correctos en la configuración. -> Aprende más ahora"
sidebar_label: Palworld: Máximo de Ítems Caídos
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite controlar cuántos ítems caídos pueden existir en tu mundo y cuánto tiempo permanecen antes de desaparecer. En esta guía, aprenderás a editar el archivo de configuración correcto en la interfaz de ZAP-Hosting, ajustar los parámetros de los ítems caídos y aplicar los cambios de forma segura.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting y permiso para editar sus archivos de configuración.

:::info Configuración Manual Requerida
Esta configuración se realiza manualmente editando la configuración del servidor Palworld. El archivo necesario se encuentra en la administración de tu servidor de juegos bajo `Configs`.
:::

## Abre el Archivo de Configuración de Palworld

Para cambiar el límite de ítems caídos, necesitas editar el archivo `PalWorldSettings.ini`.

En la administración del servidor de juegos de ZAP-Hosting:

1. Abre tu servidor Palworld  
2. Navega a `Configs`  
3. Abre el archivo `PalWorldSettings.ini`  

Este archivo contiene los valores principales de configuración del gameplay para tu servidor Palworld, incluyendo el comportamiento de los ítems caídos.

## Cambia la Configuración de Ítems Caídos

Los ajustes de ítems caídos se configuran mediante entradas dentro de `PalWorldSettings.ini`. Debes modificar los valores relevantes en la línea o sección activa de configuración del archivo.

### Claves de Configuración Relevantes

Usa las siguientes claves para controlar los ítems caídos:

| Clave de configuración | Valor por defecto | Descripción |
| --- | --- | --- |
| `DropItemMaxNum` | `3000` | Número máximo de ítems caídos que pueden existir simultáneamente en el mundo |
| `DropItemAliveMaxHours` | `1.0` | Tiempo en horas antes de que los ítems caídos desaparezcan automáticamente |

### Ejemplo de Configuración

Dependiendo del contenido actual de tu archivo, estos valores suelen formar parte de la entrada de opciones de Palworld. Por ejemplo:

```ini
OptionSettings=(DropItemMaxNum=3000,DropItemAliveMaxHours=1.000000)
```

Si estas claves ya existen en tu entrada `OptionSettings`, solo cambia los valores. Por ejemplo:

```ini
OptionSettings=(DropItemMaxNum=2000,DropItemAliveMaxHours=0.500000)
```

En este ejemplo:

- `DropItemMaxNum=2000` limita el mundo a `2000` ítems caídos  
- `DropItemAliveMaxHours=0.500000` hace que los ítems desaparezcan después de `0.5` horas, es decir, `30` minutos  

:::note Formato de Valores
Las configuraciones del servidor Palworld suelen usar valores decimales con varios ceros al final, como `1.000000`. Debes mantener el estilo de formato existente en tu archivo siempre que sea posible.
:::

## Elige Valores Adecuados

Los valores correctos dependen de la cantidad de jugadores, la actividad del servidor y la generación de loot.

### Casos de Uso Recomendados

| Escenario | `DropItemMaxNum` | `DropItemAliveMaxHours` |
| --- | --- | --- |
| Servidor privado pequeño | `3000` | `1.000000` |
| Servidor multijugador concurrido | `2000` | `0.500000` |
| Configuración enfocada en rendimiento | `1000` a `1500` | `0.250000` a `0.500000` |

### Consideraciones de Rendimiento

Limitar la cantidad de ítems caídos puede mejorar el rendimiento del servidor, especialmente si:

- muchos jugadores están activos simultáneamente  
- tu mundo genera una gran cantidad de ítems  
- los jugadores farmean, construyen o dejan loot frecuentemente en el suelo  

:::tip Mejora el Rendimiento con Límites Más Bajos
Si notas lag o una respuesta reducida del servidor, bajar tanto el valor máximo de ítems caídos como el temporizador de desaparición puede ayudar a reducir el desorden en el mundo y mejorar la estabilidad.
:::

:::caution Evita Valores Extremadamente Bajos
Si configuras estos valores demasiado bajos, los jugadores pueden notar que los ítems desaparecen muy rápido o que se alcanza el límite de ítems caídos antes de lo esperado. Prueba los cambios cuidadosamente después de aplicarlos.
:::

## Guarda y Aplica los Cambios

Después de editar `PalWorldSettings.ini`, guarda el archivo en la interfaz de ZAP-Hosting.

Una vez guardado, reinicia tu servidor Palworld para que se carguen los nuevos ajustes de ítems caídos.

| Acción | Requerido |
| --- | --- |
| Guardar `PalWorldSettings.ini` | Sí |
| Reiniciar el servidor | Sí |
| Comando adicional en consola | No |

:::info Reinicio Requerido
Los cambios en `PalWorldSettings.ini` no tendrán efecto hasta que reinicies el servidor Palworld.
:::

## Verifica los Nuevos Ajustes

Después del reinicio, únete a tu servidor y observa cómo se comportan los ítems caídos durante el juego normal.

Debes comprobar si:

- la cantidad de ítems caídos se controla como esperas  
- los ítems permanecen en el suelo el tiempo previsto  
- el rendimiento del servidor mejora tras reducir la cantidad o el tiempo de vida de los ítems  

Si es necesario, vuelve a `PalWorldSettings.ini` y ajusta los valores con más precisión.

## Conclusión

Felicitaciones, has configurado con éxito el máximo de ítems caídos y el temporizador de desaparición en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂