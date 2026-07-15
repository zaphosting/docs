---
id: palworld-enable-predator-pals
title: "Palworld: Activar Predator Pals"
description: "Aprende cómo activar o desactivar los predator pals en tu servidor de Palworld, solucionar que no aparezcan y configurar la opción correcta manualmente. -> Aprende más ahora"
sidebar_label: Palworld: Activar Predator Pals
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

*Predator Pals* son Pals poderosos tipo jefe que pueden aparecer en todo el mundo de Palworld. En esta guía, aprenderás cómo activar o desactivar los predator pals en tu servidor de juegos Palworld de ZAP-Hosting editando manualmente el archivo de configuración correcto.



## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting y permiso para gestionar sus archivos de configuración.

:::info Acceso al archivo de configuración
Para esta configuración, necesitas editar manualmente la configuración de tu servidor a través de la sección **Configs** en la administración de tu servidor de juegos.
:::

## Abrir la configuración de Palworld

Para cambiar si los predator pals pueden aparecer, debes editar el archivo `PalWorldSettings.ini`.

### Encuentra el archivo correcto en la interfaz de ZAP

Primero, abre tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting. Luego navega a la sección **Configs** de la administración de tu servidor y abre el archivo `PalWorldSettings.ini`.

Este es el archivo principal de configuración usado para ajustes relacionados con la jugabilidad, incluyendo el comportamiento de los predator boss pals.

:::note Edición manual requerida
Esta opción debe cambiarse manualmente en el archivo de configuración. Si tu interfaz no muestra un interruptor dedicado para esta opción, editar directamente `PalWorldSettings.ini` es el método correcto.
:::

## Editar la configuración de Predator Pals

Dentro de `PalWorldSettings.ini`, busca la sección `OptionSettings`. La clave de configuración relevante es `EnablePredatorBossPal`.

### Valor de configuración

Usa uno de los siguientes valores según el resultado que desees:

| Configuración | Valor | Resultado |
| --- | --- | --- |
| Activar predator pals | `True` | Los predator boss Pals pueden aparecer en el mundo |
| Desactivar predator pals | `False` | Los predator boss Pals no aparecerán en el mundo |

### Ejemplo de entrada

Si la configuración ya existe, cambia su valor. Si falta, agrégala dentro de la lista de configuración `OptionSettings`.

```ini
EnablePredatorBossPal=True
```

Para desactivar los predator pals, usa:

```ini
EnablePredatorBossPal=False
```

:::tip Revisa la sintaxis existente primero
Las configuraciones del servidor Palworld suelen almacenarse como parte de una línea más larga `OptionSettings` en `PalWorldSettings.ini`. Si tu archivo ya contiene esta estructura, añade o modifica `EnablePredatorBossPal=True` o `EnablePredatorBossPal=False` dentro de esa lista de configuraciones existente en lugar de crear una sección separada no relacionada.
:::

## Guardar y aplicar los cambios

Después de editar el archivo, guarda los cambios en la sección **Configs**.

### Reiniciar el servidor

Una vez guardado el archivo, reinicia tu servidor Palworld para que la nueva configuración se cargue correctamente.

| Acción | Requerido |
| --- | --- |
| Guardar `PalWorldSettings.ini` | Sí |
| Reiniciar el servidor | Sí |
| Comando adicional en consola | No |

:::caution Reinicio obligatorio
La nueva configuración de predator pals no se aplicará hasta que el servidor haya sido reiniciado. Si los predator pals no aparecen después del cambio, confirma que el archivo se guardó correctamente y que el reinicio del servidor se completó con éxito.
:::

## Verificar la configuración

Después del reinicio, únete a tu servidor y verifica si los predator pals se comportan como esperas.

Si los activaste y no aparecen, revisa nuevamente la entrada en `PalWorldSettings.ini` y asegúrate de que el valor esté escrito exactamente como `True` o `False`. También confirma que la configuración esté colocada correctamente dentro de la sintaxis existente del servidor.

:::note Comportamiento de aparición
Esta configuración controla si los predator boss Pals pueden aparecer en el mundo. No proporciona un mapa de ubicación de predator pals, no cambia puntos de aparición individuales ni garantiza encuentros inmediatos en un área específica.
:::

## Referencia de configuración

| Archivo | Ubicación en ZAP-Hosting | Clave | Valores posibles | Comportamiento por defecto | Reinicio requerido |
| --- | --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | Administración del servidor de juegos → **Configs** | `EnablePredatorBossPal` | `True`, `False` | `True` | Sí |

## Conclusión

Felicidades, has activado o desactivado con éxito los predator pals en tu servidor de Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para ayudarte! 🙂