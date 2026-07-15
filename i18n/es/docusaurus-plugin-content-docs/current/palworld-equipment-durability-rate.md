---
id: palworld-equipment-durability-rate
title: "Palworld: Tasa de Durabilidad del Equipo"
description: "Aprende cómo cambiar la durabilidad del equipo y ajustar la tasa de durabilidad en tu servidor de Palworld editando el valor correcto en la configuración. -> Aprende más ahora"
sidebar_label: "Tasa de Durabilidad del Equipo"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En Palworld, la tasa de durabilidad del equipo controla qué tan rápido tus herramientas, armas y armaduras pierden durabilidad durante su uso. En esta guía, aprenderás a cambiar manualmente el ajuste `EquipmentDurabilityDamageRate` en la configuración de tu servidor de Palworld en ZAP-Hosting y aplicar el cambio correctamente.



## Preparación

Antes de comenzar, asegúrate de tener acceso a la administración de tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting. También necesitas permiso para editar los archivos de configuración de tu servidor en **Configs**.

:::info Configuración Manual Requerida
Este ajuste debe cambiarse manualmente en el archivo de configuración de Palworld. No existe un comando separado que debas ejecutar dentro del juego para este cambio específico.
:::

## Entendiendo el ajuste de durabilidad

Palworld almacena muchos ajustes de jugabilidad en el archivo de configuración `PalWorldSettings.ini`. El ajuste relevante para la durabilidad del equipo es:

- `EquipmentDurabilityDamageRate`

Este valor actúa como un multiplicador para la pérdida de durabilidad:

| Clave de configuración | Descripción | Valor predeterminado |
| --- | --- | --- |
| `EquipmentDurabilityDamageRate` | Controla qué tan rápido el equipo pierde durabilidad | `1.000000` |

Valores más bajos reducen la pérdida de durabilidad, lo que significa que tu equipo dura más. Un valor de `0.000000` desactiva completamente la pérdida de durabilidad para el equipo.

:::note Qué afecta este ajuste
Este ajuste cambia la tasa de pérdida de durabilidad para equipos como herramientas, armas y armaduras. No aumenta el daño de los objetos, la velocidad de reparación ni la calidad del objeto.
:::

## Abre el archivo de configuración de Palworld

Para cambiar el ajuste, necesitas editar el archivo principal de configuración del servidor de Palworld desde la administración de tu servidor de juegos en ZAP-Hosting.

### Encuentra el archivo en la interfaz de ZAP-Hosting

1. Inicia sesión en el sitio web de ZAP-Hosting.
2. Abre la administración de tu servidor de juegos **Palworld**.
3. Ve a **Configs**.
4. Abre el archivo `PalWorldSettings.ini`.

Este es el archivo donde se almacenan valores de jugabilidad de Palworld como durabilidad, resistencia, daño y otros ajustes del mundo.

## Edita la tasa de durabilidad del equipo

Una vez abierto `PalWorldSettings.ini`, busca la línea `OptionSettings`. Palworld normalmente guarda los ajustes de jugabilidad como entradas separadas por comas dentro de esta sección.

### Añade o cambia la entrada de configuración

Debes asegurarte de que la siguiente entrada exista dentro de `OptionSettings`:

```ini
EquipmentDurabilityDamageRate=1.000000
```

Si la clave ya está presente, reemplaza su valor actual por el que prefieras. Si falta, agrégala dentro del bloque existente `OptionSettings=(...)`.

### Valores de ejemplo

Puedes usar los siguientes valores según el resultado que desees:

| Valor | Efecto |
| --- | --- |
| `1.000000` | Pérdida de durabilidad predeterminada |
| `0.500000` | El equipo dura aproximadamente el doble |
| `0.250000` | El equipo dura aproximadamente cuatro veces más |
| `0.000000` | El equipo se vuelve indestructible |

### Fragmento de configuración de ejemplo

El contenido exacto de tu línea `OptionSettings` puede variar según la configuración de tu servidor, pero el ajuste de durabilidad debería aparecer en la misma lista separada por comas, por ejemplo:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,EquipmentDurabilityDamageRate=0.500000)
```

:::caution Conserva el formato existente
No elimines otros valores de la línea `OptionSettings` al editar el archivo. Palworld espera que estos ajustes permanezcan en el formato correcto separado por comas.
:::

## Guarda y aplica los cambios

Después de editar el archivo de configuración, guarda tus cambios en la interfaz de ZAP-Hosting.

### Reinicia el servidor

Para aplicar el nuevo ajuste de durabilidad, reinicia tu servidor de Palworld desde la administración del servidor de juegos.

Sin un reinicio, la configuración actualizada generalmente no será cargada por el servidor.

| Acción | Requerido |
| --- | --- |
| Guardar `PalWorldSettings.ini` | Sí |
| Reiniciar el servidor | Sí |
| Ejecutar un comando dentro del juego | No |
| Reinstalar el servidor | No |

:::tip Prueba cambios con un ajuste pequeño primero
Si no estás seguro de qué valor de durabilidad se adapta a tu estilo de juego, comienza con `0.500000`. Esto ofrece una mejora notable en la durabilidad sin desactivar completamente la mecánica.
:::

## Solución de problemas

Si el nuevo comportamiento de durabilidad del equipo no se aplica después de reiniciar, verifica los siguientes puntos.

### Verifica la clave de configuración

Asegúrate de que la clave esté escrita exactamente como:

```ini
EquipmentDurabilityDamageRate
```

Las claves de configuración de Palworld son sensibles a mayúsculas y minúsculas para una administración confiable, por lo que debes copiar el nombre exactamente como se muestra.

### Revisa la ubicación en `OptionSettings`

El valor debe estar dentro de la sección `OptionSettings=(...)` del archivo `PalWorldSettings.ini`. Si lo colocas fuera de este bloque, el servidor puede ignorarlo.

### Confirma que el archivo fue guardado

Después de editar en **Configs**, verifica que tus cambios sigan presentes al volver a abrir `PalWorldSettings.ini`. Si no, es posible que el archivo no se haya guardado correctamente.

### Reinicia nuevamente si es necesario

Si había jugadores conectados durante el cambio o el servidor no se reinició correctamente, realiza otro reinicio completo desde el panel de administración del servidor.

## Conclusión

Felicitaciones, has cambiado con éxito la tasa de durabilidad del equipo en tu servidor de Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂