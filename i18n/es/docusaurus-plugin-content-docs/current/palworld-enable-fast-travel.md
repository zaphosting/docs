---
id: palworld-enable-fast-travel
title: "Palworld: Activar Viaje Rápido"
description: "Aprende a configurar el viaje rápido en tu servidor de Palworld, incluyendo ajustes para viaje rápido solo desde bases y cambios manuales en la configuración. -> Aprende más ahora"
sidebar_label: Palworld: Activar Viaje Rápido
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite controlar cómo los jugadores usan el viaje rápido en tu servidor mediante la configuración principal del servidor. En esta guía, aprenderás a editar el archivo de configuración correcto en la interfaz de ZAP-Hosting, ajustar las opciones de viaje rápido y aplicar los cambios correctamente.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting y permiso para editar sus archivos de configuración.

:::info Configuración Manual Requerida
Esta configuración se realiza editando manualmente el archivo de configuración del servidor Palworld. Puedes acceder al archivo necesario desde la administración de tu servidor de juegos en `Configs`.
:::

## Localiza el Archivo de Configuración

Para cambiar el comportamiento del viaje rápido, necesitas editar el archivo `PalWorldSettings.ini`.

En la administración del servidor de juegos de ZAP-Hosting:

1. Abre tu servidor Palworld.
2. Navega a `Configs`.
3. Abre el archivo `PalWorldSettings.ini`.

Este archivo contiene las configuraciones relacionadas con la jugabilidad del servidor, incluyendo las opciones de viaje rápido.

:::note Ubicación de la Configuración
Dependiendo del diseño actual del panel, el archivo se gestiona a través del área `Configs` en la administración de tu servidor. Si la ruta exacta no se muestra en la interfaz, aún puedes editar con seguridad los valores necesarios directamente en `PalWorldSettings.ini`.
:::

## Entiende las Opciones de Viaje Rápido

Palworld ofrece dos claves de configuración relevantes para el comportamiento del viaje rápido.

| Clave de configuración | Tipo de valor | Valor por defecto | Función |
| --- | --- | --- | --- |
| `bEnableFastTravel` | `True` / `False` | `True` | Activa o desactiva el viaje rápido completamente |
| `bEnableFastTravelOnlyBaseCamp` | `True` / `False` | `False` | Restringe el viaje rápido para que los jugadores solo puedan viajar entre bases |

Estos valores forman parte de la cadena de opciones del servidor dentro de `PalWorldSettings.ini`.

:::tip Elige la Configuración Correcta
Si quieres una experiencia de juego más inmersiva y exploración, puedes desactivar el viaje rápido por completo. Si quieres mantener el viaje rápido pero limitar la libertad de movimiento, la opción de viaje rápido solo entre bases suele ser la mejor.
:::

## Edita los Valores de Viaje Rápido

Abre `PalWorldSettings.ini` y busca la sección `OptionSettings=`. En Palworld, muchas configuraciones del servidor se almacenan como valores separados por comas dentro de esta entrada.

### Activar Viaje Rápido Normal

Para permitir el viaje rápido estándar, asegúrate de que esté presente el siguiente valor:

```ini
bEnableFastTravel=True
```

Si quieres que los jugadores usen todas las opciones normales de viaje rápido, también asegúrate de que este valor esté así:

```ini
bEnableFastTravelOnlyBaseCamp=False
```

### Desactivar Todo Viaje Rápido

Para desactivar el viaje rápido completamente, configura:

```ini
bEnableFastTravel=False
```

Con esto desactivado, los jugadores deberán viajar manualmente por el mundo.

### Restringir Viaje Rápido Solo a Bases

Si quieres permitir el viaje rápido solo entre campamentos base, usa esta combinación:

```ini
bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True
```

Esta configuración es común en servidores enfocados en PvP porque permite un viaje limitado sin dar movimiento irrestricto a los jugadores.

:::caution Mantén la Sintaxis Existente
No elimines otros valores existentes en la línea `OptionSettings=` a menos que quieras cambiarlos intencionalmente. Palworld almacena muchas configuraciones en una sola entrada separada por comas, por lo que un formato incorrecto puede hacer que las configuraciones no se carguen.
:::

## Ejemplo de Configuración

A continuación, un ejemplo de cómo puede verse la parte relevante de la configuración dentro de `PalWorldSettings.ini`:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True)
```

Reemplaza los valores de viaje rápido en tu configuración existente según la configuración que desees usar.

:::note Configuraciones Existentes del Servidor
Tu línea `OptionSettings=` usualmente contendrá muchos más valores que el ejemplo anterior. Solo necesitas ajustar `bEnableFastTravel` y `bEnableFastTravelOnlyBaseCamp` mientras conservas el resto de la línea.
:::

## Configuraciones Recomendadas

Puedes usar las siguientes combinaciones según el tipo de servidor que quieras administrar:

| Estilo de servidor | `bEnableFastTravel` | `bEnableFastTravelOnlyBaseCamp` | Resultado |
| --- | --- | --- | --- |
| Jugabilidad por defecto | `True` | `False` | Viaje rápido completo activado |
| Enfoque en exploración | `False` | `False` | Viaje rápido completamente desactivado |
| PvP o viaje restringido | `True` | `True` | Viaje rápido solo entre bases |

## Aplica los Cambios

Después de guardar tus cambios en `PalWorldSettings.ini`, necesitas reiniciar el servidor para que se carguen las nuevas configuraciones.

### Reinicia el Servidor

Usa la función de reinicio en la administración de tu servidor de juegos ZAP-Hosting después de guardar el archivo.

Normalmente no se requieren comandos adicionales en el juego o consola para este cambio. La nueva configuración de viaje rápido se aplica cuando el servidor arranca de nuevo.

:::info Reinicio Requerido
Los cambios en `PalWorldSettings.ini` no se aplicarán de forma confiable hasta que el servidor Palworld haya sido reiniciado.
:::

## Verifica el Resultado

Una vez que el servidor esté en línea, únete y prueba el comportamiento del viaje rápido en el juego.

Debes verificar que:

- el viaje rápido completo funcione si está activado
- no haya opciones de viaje rápido si está desactivado
- solo funcione el viaje entre bases si activaste el viaje rápido solo entre bases

:::tip Solución de Problemas por Comportamiento Incorrecto
Si la configuración no se aplica, vuelve a abrir `PalWorldSettings.ini` y revisa errores de formato en la línea `OptionSettings=`, especialmente comas faltantes, claves duplicadas o valores inválidos `True` / `False`.
:::

## Conclusión

Felicidades, has activado o configurado con éxito el viaje rápido en tu servidor de Palworld. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂