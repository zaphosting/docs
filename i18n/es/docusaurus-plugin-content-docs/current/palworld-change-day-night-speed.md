---
id: palworld-change-day-night-speed
title: "Palworld: Cambiar la Velocidad del Ciclo Día y Noche"
description: "Aprende cómo cambiar la velocidad del ciclo día y noche en Palworld editando la configuración del ciclo diurno en tu servidor. -> Aprende más ahora"
sidebar_label: Palworld: Cambiar la Velocidad del Ciclo Día y Noche
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite ajustar la velocidad a la que pasa el ciclo de día y noche en tu servidor. En esta guía, aprenderás cómo cambiar la velocidad del día y la noche editando el archivo de configuración correcto en la administración de tu servidor de juegos ZAP-Hosting y aplicando los cambios correctamente.



## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld a través de la interfaz web de ZAP-Hosting y permiso para editar archivos de configuración del servidor.

:::info Configuración Manual Requerida
Esta configuración se realiza manualmente a través de los archivos de configuración del servidor. Necesitas editar directamente los ajustes de Palworld en lugar de usar comandos automáticos dentro del juego.
:::

## Localiza el Archivo de Configuración

Para cambiar la velocidad del día y la noche, debes editar el archivo `PalWorldSettings.ini`.

En la administración del servidor de juegos ZAP-Hosting, puedes acceder a este archivo a través de la sección **Configs**. Abre tu servidor Palworld en la interfaz web y navega al área de gestión de archivos de configuración.

El archivo relevante es:

```ini
PalWorldSettings.ini
```

:::note Ubicación del Archivo de Configuración
Dependiendo de la plantilla del servidor de juegos y el diseño del panel, el archivo se proporciona a través del área **Configs** en la administración de ZAP-Hosting. Si en tu interfaz se muestra la ruta interna completa, normalmente es el archivo de configuración del servidor Palworld usado para la configuración del juego.
:::

## Edita la Configuración de Velocidad del Día y la Noche

Dentro de `PalWorldSettings.ini`, busca las entradas de configuración del juego para la velocidad del día y la noche.

Debes ajustar los siguientes valores:

| Clave de Configuración | Valor Predeterminado | Descripción |
| --- | --- | --- |
| `DayTimeSpeedRate` | `1.000000` | Controla qué tan rápido pasa el día |
| `NightTimeSpeedRate` | `1.000000` | Controla qué tan rápido pasa la noche |

Valores más altos hacen que el tiempo pase más rápido, mientras que valores más bajos hacen que pase más lento.

### Ejemplo de Configuración

Si quieres que tanto el día como la noche pasen más rápido, puedes establecer valores más altos así:

```ini
DayTimeSpeedRate=2.000000
NightTimeSpeedRate=2.000000
```

Si quieres un día más largo pero una noche más rápida, puedes usar valores diferentes, por ejemplo:

```ini
DayTimeSpeedRate=0.500000
NightTimeSpeedRate=2.000000
```

### Dónde Colocar los Valores

Palworld guarda muchas configuraciones de juego dentro de la sección `OptionSettings` en `PalWorldSettings.ini`. Debes editar las entradas existentes `DayTimeSpeedRate` y `NightTimeSpeedRate` allí en lugar de agregar claves duplicadas en otro lugar.

Una sección típica puede verse así:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

Después de editar, podría verse así:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=2.000000,NightTimeSpeedRate=1.500000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

:::caution Edita las Entradas Existentes con Cuidado
Asegúrate de cambiar solo el valor después de `DayTimeSpeedRate=` y `NightTimeSpeedRate=`. No elimines comas, paréntesis ni otras configuraciones existentes en la línea `OptionSettings`, ya que un formato incorrecto puede impedir que el servidor cargue la configuración correctamente.
:::

## Guarda y Aplica los Cambios

Una vez que hayas actualizado los valores en `PalWorldSettings.ini`, guarda el archivo en el editor de configuración de ZAP-Hosting.

Después de guardar, reinicia tu servidor Palworld para que se carguen los nuevos ajustes del ciclo diurno.

| Acción | Requerido |
| --- | --- |
| Guardar `PalWorldSettings.ini` | Sí |
| Reiniciar el servidor | Sí |
| Ejecutar comandos adicionales en consola | No |

:::tip Reinicio Requerido
Los cambios en la configuración del mundo de Palworld no se aplican de forma confiable hasta que el servidor se reinicia. Siempre reinicia el servidor después de cambiar la velocidad del día o la noche.
:::

## Verifica el Nuevo Ciclo Diurno

Después de que el reinicio haya finalizado, únete a tu servidor y observa la progresión del tiempo dentro del juego.

Ahora deberías notar que:

- el **día** pasa más rápido o más lento según `DayTimeSpeedRate`
- la **noche** pasa más rápido o más lento según `NightTimeSpeedRate`

Si la velocidad no parece cambiar, vuelve a abrir `PalWorldSettings.ini` y verifica que:

- los valores se guardaron correctamente
- el formato de la línea `OptionSettings` sigue siendo válido
- el servidor fue reiniciado después del cambio

## Referencia de Configuración

Usa la siguiente tabla como referencia rápida cuando quieras cambiar la configuración del día más adelante.

| Configuración | Ejemplo | Resultado |
| --- | --- | --- |
| `DayTimeSpeedRate=0.500000` | Día más lento | El día dura más |
| `DayTimeSpeedRate=2.000000` | Día más rápido | El día pasa más rápido |
| `NightTimeSpeedRate=0.500000` | Noche más lenta | La noche dura más |
| `NightTimeSpeedRate=2.000000` | Noche más rápida | La noche pasa más rápido |

:::note Configuraciones Balanceadas
Si quieres una experiencia de juego más natural, evita valores extremadamente altos. Cambios muy rápidos en el día y la noche pueden dificultar la planificación de la agricultura, exploración y gestión de la base.
:::

## Conclusión

Felicidades, has cambiado con éxito la velocidad del ciclo día y noche en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂