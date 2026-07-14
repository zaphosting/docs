---
id: palworld-technology-ids
title: "Palworld: IDs de Tecnología"
description: "Aprende a gestionar los IDs de tecnología de Palworld, desactivar entradas específicas de tecnología y entender los valores de configuración requeridos en tu servidor -> Aprende más ahora"
sidebar_label: Palworld: IDs de Tecnología
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld usa *IDs de tecnología* para identificar tecnologías desbloqueables y ciertos ajustes relacionados con objetos. En esta guía, aprenderás a desactivar tecnologías específicas en tu servidor de juegos Palworld de ZAP-Hosting editando manualmente la entrada de configuración correcta.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting y permiso para editar archivos de configuración del servidor.

:::info Acceso Requerido
Necesitas acceso a la administración de tu servidor Palworld y a la sección `Configs` en el panel de ZAP-Hosting para completar esta configuración.
:::

:::note Fuentes de IDs de Tecnología
Los IDs de tecnología de Palworld son cadenas internas definidas por el juego, como `GrapplingGun` o `SkillUnlock_JetDragon`. No existe una lista oficial dentro del juego ni en el panel de ZAP-Hosting, por lo que debes usar una referencia externa confiable para obtener IDs válidos.
:::

## Entendiendo los IDs de tecnología

Los IDs de tecnología son identificadores internos que Palworld usa para tecnologías desbloqueables. En lugar de usar el nombre visible en el juego, la configuración del servidor espera la cadena exacta del ID.

Para desactivar tecnologías, Palworld usa la configuración `DenyTechnologyList`. Este valor acepta una lista separada por comas de IDs de tecnología.

### Qué hace `DenyTechnologyList`

Cuando agregas IDs de tecnología válidos a `DenyTechnologyList`, esas tecnologías quedan bloqueadas en tu servidor. Esto es útil si quieres restringir el progreso, eliminar herramientas de movilidad específicas o personalizar las reglas de juego para tu comunidad.

### Formato de valor soportado

El valor debe ingresarse como una lista separada por comas sin explicaciones adicionales.

| Clave de Configuración | Propósito | Formato | Ejemplo |
|---|---|---|---|
| `DenyTechnologyList` | Desactiva tecnologías seleccionadas | Cadenas de IDs de tecnología separadas por comas | `GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon` |

:::caution Coincidencia Exacta de ID
Los IDs de tecnología deben coincidir exactamente con el valor interno del juego. Si un ID está mal escrito o ya no es válido para la versión actual de Palworld, la configuración puede no funcionar como esperas.
:::

## Abre el archivo de configuración correcto

En ZAP-Hosting, este cambio se realiza editando manualmente el archivo de configuración de Palworld.

### Archivo a editar

Debes editar el siguiente archivo:

```ini
PalWorldSettings.ini
```

### Dónde encontrarlo en la interfaz de ZAP-Hosting

Abre la administración de tu servidor de juegos Palworld y luego ve a:

```text
Configs
```

Desde ahí, abre `PalWorldSettings.ini`.

:::tip Ubicación de Configuración en ZAP-Hosting
Si tu servidor ofrece varios archivos editables, asegúrate de seleccionar `PalWorldSettings.ini`, ya que es el archivo usado para configuraciones del servidor relacionadas con la jugabilidad como `DenyTechnologyList`.
:::

## Edita la configuración de IDs de tecnología

Una vez abierto `PalWorldSettings.ini`, localiza la lista de opciones del servidor y agrega o modifica la entrada `DenyTechnologyList`.

### Agrega IDs de tecnología a `DenyTechnologyList`

Usa una lista separada por comas de las tecnologías que quieres desactivar.

Ejemplo:

```ini
DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon"
```

Este ejemplo desactiva:

| ID de Tecnología | Significado |
|---|---|
| `GrapplingGun` | Garfio (Grappling Gun) |
| `GrapplingGun2` | Variante de garfio de nivel superior |
| `SkillUnlock_JetDragon` | Desbloqueo relacionado con JetDragon |

:::note Formato con Comillas
Dependiendo de cómo esté estructurada la entrada existente en tu `PalWorldSettings.ini`, el valor puede aparecer dentro de un bloque de opciones más grande. Mantén el estilo de sintaxis que ya usa tu archivo y solo cambia el valor de `DenyTechnologyList`.
:::

### Ejemplo dentro de un bloque de opciones

En muchos servidores Palworld, las configuraciones se almacenan dentro de una línea más grande llamada `OptionSettings`. En ese caso, la entrada puede verse así:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon")
```

Si `DenyTechnologyList` no está presente, agrégalo dentro del mismo bloque `OptionSettings=(...)` y sepáralo de otras entradas con una coma.

:::caution Conserva la Sintaxis Existente
No elimines otras configuraciones dentro de `OptionSettings`. Una coma, paréntesis o comilla faltante puede hacer que la configuración no se cargue correctamente.
:::

## Elige IDs de tecnología válidos

Debes usar IDs internos válidos, no los nombres que se muestran en el juego.

### Ejemplos de IDs de tecnología

Estos son ejemplos conocidos de IDs de tecnología usados por Palworld:

| ID de Tecnología | Significado de ejemplo |
|---|---|
| `AIcore` | Núcleo de IA |
| `GrapplingGun` | Garfio (Grappling Gun) |
| `GrapplingGun2` | Variante de garfio |
| `GrapplingGun3` | Variante de garfio |
| `GrapplingGun4` | Variante de garfio |
| `GrapplingGun5` | Variante de garfio |
| `SkillUnlock_JetDragon` | Desbloqueo JetDragon |
| `SkillUnlock_IceHorse` | Desbloqueo Ice Horse |
| `PALBOX` | Tecnología relacionada con Palbox |
| `RepairBench` | Banco de reparación |

Como Palworld recibe actualizaciones, la lista completa de IDs puede cambiar con el tiempo. Si necesitas una lista más amplia, verifica los IDs con una fuente actual y confiable antes de aplicarlos.

### Uso relacionado de IDs en otras configuraciones

IDs internos similares a los de tecnología también pueden usarse en otras opciones de configuración de Palworld. Un ejemplo conocido es:

| Clave de Configuración | Propósito |
|---|---|
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Define un ítem personalizado que se suelta en muertes PvP |

:::info Configuración PvP Relacionada
Si planeas usar IDs para personalizar ítems que se sueltan en PvP, confirma que el tipo de ID requerido por `AdditionalDropItemWhenPlayerKillingInPvPMode` coincida con el ítem que quieres usar. Esta guía se enfoca específicamente en `DenyTechnologyList`.
:::

## Guarda y reinicia el servidor

Después de editar el archivo, guarda los cambios en la interfaz de ZAP-Hosting.

Para aplicar la nueva configuración, reinicia tu servidor Palworld.

### Acción requerida tras editar

| Acción | Requerido |
|---|---|
| Guardar `PalWorldSettings.ini` | Sí |
| Reiniciar el servidor | Sí |
| Ejecutar comandos adicionales en consola | No se requiere comando confirmado |

Es necesario reiniciar porque Palworld lee estas configuraciones del servidor durante el inicio. Sin reiniciar, las nuevas restricciones de tecnología pueden no aplicarse.

:::tip Prueba tras reiniciar
Después de que el servidor haya reiniciado, conéctate y verifica que las tecnologías seleccionadas ya no estén disponibles como esperas. Esto te ayuda a confirmar que los IDs y la sintaxis fueron ingresados correctamente.
:::

## Solución de problemas

Si las tecnologías siguen disponibles tras reiniciar, revisa los siguientes puntos.

### Verifica la ortografía del ID

Asegúrate de que cada ID de tecnología esté escrito exactamente como se requiere, incluyendo mayúsculas y minúsculas.

### Revisa la sintaxis de la configuración

Si editaste el bloque `OptionSettings=(...)`, confirma que:

- cada configuración esté separada por una coma
- las comillas estén correctamente abiertas y cerradas
- los paréntesis estén completos
- `DenyTechnologyList` esté dentro del bloque correcto

### Confirma que el servidor reinició correctamente

Si el servidor no reinició bien, la configuración actualizada puede no haberse cargado.

:::danger Riesgo de Configuración Inválida
Un `PalWorldSettings.ini` mal formateado puede impedir que las configuraciones se carguen correctamente. Si esto ocurre, restaura la versión anterior que funcionaba y vuelve a aplicar el cambio con cuidado.
:::

## Conclusión

Felicidades, has desactivado con éxito tecnologías específicas en tu servidor Palworld usando IDs de tecnología. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂