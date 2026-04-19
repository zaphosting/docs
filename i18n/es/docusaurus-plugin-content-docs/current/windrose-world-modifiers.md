---
id: windrose-world-modifiers
title: "Windrose: Modificadores del Mundo"
description: "Configura los modificadores del mundo de Windrose con una referencia completa de parámetros para valores float, ajustes de combate y ejemplo de parámetros de escalado cooperativo -> Aprende más ahora"
sidebar_label: Modificadores del mundo
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los modificadores personalizados del mundo en Windrose te permiten ajustar en detalle el combate, combate naval, exploración, misiones y el escalado cooperativo. En esta guía, aprenderás a editar el archivo `WorldDescription.json`, entender cada parámetro y aplicar configuraciones personalizadas a tu servidor de juegos Windrose.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, asegúrate de tener lo siguiente:

- Un servidor de juegos Windrose activo en ZAP-Hosting
- Acceso a la gestión del servidor de juegos
- Tu servidor detenido antes de editar archivos
- Acceso a la sección **Configs** o **Administrador de Archivos** en la gestión del servidor de juegos

:::info Ubicación del archivo de configuración
Los modificadores personalizados del mundo se almacenan en el archivo `WorldDescription.json` dentro del bloque `WorldSettings`.
:::

:::caution Detén el servidor primero
Siempre debes detener tu servidor antes de editar `WorldDescription.json`. Esto ayuda a prevenir corrupción de archivos o que los cambios se sobrescriban durante el inicio o las operaciones de guardado automático.
:::

## Entendiendo los modificadores del mundo

Cada configuración personalizada se define individualmente dentro de `WorldDescription.json` bajo `WorldSettings`. El juego separa los valores por tipo:

- `float` para multiplicadores numéricos como salud o daño
- `bool` para opciones verdadero o falso
- `tag` para valores de dificultad nombrados como dificultad de combate

Esta estructura es importante porque cada parámetro debe colocarse en la sección correcta. Si colocas un valor `float` en `bool`, o usas una etiqueta inválida, la configuración puede no funcionar como esperas.

:::note Tipos de parámetros
Si no estás familiarizado con el término *parámetro*, simplemente significa un valor configurable usado por el juego. En esta guía, cada parámetro controla una parte de la dificultad del mundo o el comportamiento del juego.
:::

## Abre el archivo de configuración del mundo

Para aplicar modificadores personalizados del mundo, necesitas editar el archivo correcto.

1. Detén tu servidor Windrose en la gestión del servidor de juegos.
2. Abre el **Administrador de Archivos**.
3. Navega a la siguiente ruta:

```text
R5/Saved/SaveProfiles/Default/RocksDB/<game_version>/Worlds/<world_id>/WorldDescription.json
```

Sustituye los marcadores de posición así:

| Marcador de posición | Significado |
| --- | --- |
| `[your_game_version]` | La carpeta de la versión actual de tu juego Windrose |
| `[your_world_id]` | El ID del mundo que quieres modificar |

:::tip Encontrar el mundo correcto
Si tienes varios mundos, asegúrate de editar el archivo `WorldDescription.json` dentro de la carpeta correcta `[your_world_id]`. De lo contrario, tus cambios afectarán a una partida guardada diferente.
:::

## Edita el bloque WorldSettings

Dentro de `WorldDescription.json`, localiza el bloque `WorldSettings`. Añade o ajusta tus valores personalizados ahí.

Usa la siguiente estructura:

```json
"WorldSettings": {
  "bool": {
    "CoopQuests": true,
    "EasyExplore": false
  },
  "float": {
    "MobHealthMultiplier": 1.5,
    "MobDamageMultiplier": 1.2,
    "ShipHealthMultiplier": 1.0,
    "ShipDamageMultiplier": 1.0,
    "BoardingDifficultyMultiplier": 1.0,
    "Coop_StatsCorrectionModifier": 1.0,
    "Coop_ShipStatsCorrectionModifier": 0.5
  },
  "tag": {
    "CombatDifficulty": {
      "TagName": "WDS.Parameter.CombatDifficulty.Hard"
    }
  }
}
```

Después de guardar el archivo, inicia tu servidor nuevamente.

:::info Comportamiento del preset
Si configuras cualquier valor personalizado manualmente, `WorldPresetType` cambia automáticamente a `Custom` en el próximo inicio del servidor. Si quieres usar un preset limpio en lugar de valores personalizados, deberías usar la configuración de preset adecuada en lugar de mezclar ambos métodos.
:::

## Referencia completa de parámetros

Las siguientes tablas proporcionan una referencia completa para cada modificador personalizado del mundo disponible.

### Parámetros de combate

| Parámetro | Sección | Predeterminado | Rango | Efecto |
| --- | --- | --- | --- | --- |
| `MobHealthMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Multiplicador de salud de enemigos |
| `MobDamageMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Multiplicador de daño de enemigos |
| `CombatDifficulty` | `tag` | `Normal` | `Easy`, `Normal`, `Hard` | Agresividad de jefes y dificultad de encuentros |

`CombatDifficulty` debe escribirse como un valor tag, por ejemplo:

```json
"tag": {
  "CombatDifficulty": {
    "TagName": "WDS.Parameter.CombatDifficulty.Hard"
  }
}
```

Valores disponibles:

| Dificultad | Valor TagName |
| --- | --- |
| Easy | `WDS.Parameter.CombatDifficulty.Easy` |
| Normal | `WDS.Parameter.CombatDifficulty.Normal` |
| Hard | `WDS.Parameter.CombatDifficulty.Hard` |

### Parámetros de combate naval

| Parámetro | Sección | Predeterminado | Rango | Efecto |
| --- | --- | --- | --- | --- |
| `ShipHealthMultiplier` | `float` | `1.0` | `0.4 - 5.0` | Multiplicador de salud de barcos enemigos |
| `ShipDamageMultiplier` | `float` | `1.0` | `0.2 - 2.5` | Multiplicador de daño de barcos enemigos |
| `BoardingDifficultyMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Número de marineros enemigos a derrotar en abordajes |

Estos ajustes son útiles si quieres hacer las batallas navales más fáciles para tripulaciones pequeñas o mucho más exigentes para grupos experimentados.

### Parámetros de escalado cooperativo

| Parámetro | Sección | Predeterminado | Rango | Efecto |
| --- | --- | --- | --- | --- |
| `Coop_StatsCorrectionModifier` | `float` | `1.0` | `0.0 - 2.0` | Ajusta salud enemiga y pérdida de postura según cantidad de jugadores |
| `Coop_ShipStatsCorrectionModifier` | `float` | `0.0` | `0.0 - 2.0` | Ajusta salud de barcos enemigos según cantidad de jugadores |

Estos valores son especialmente útiles para tripulaciones grandes. Permiten mantener el combate equilibrado a medida que más jugadores se unen al mundo.

### Parámetros de exploración

| Parámetro | Sección | Predeterminado | Efecto |
| --- | --- | --- | --- |
| `EasyExplore` | `bool` | `false` | Desactiva marcadores en el mapa para puntos de interés |

:::note Nombre EasyExplore
A pesar del nombre, configurar `EasyExplore` en `true` hace que la exploración sea más difícil porque desactiva los marcadores en el mapa para puntos de interés. Esto es efectivamente un modo de exploración inmersiva.
:::

### Parámetros de misiones

| Parámetro | Sección | Predeterminado | Efecto |
| --- | --- | --- | --- |
| `CoopQuests` | `bool` | `true` | Cuando un jugador completa una misión cooperativa, se completa automáticamente para todos los demás jugadores que la tengan activa |

Esta configuración es útil si quieres simplificar la progresión en grupo o exigir que cada jugador complete los objetivos individualmente.

## Referencia de escala de multiplicadores

Si no estás seguro de cómo un valor `float` cambia la jugabilidad, usa esta referencia rápida de escala.

| Valor | Efecto |
| --- | --- |
| `0.5` | `50%` - notablemente más fácil |
| `1.0` | `100%` - predeterminado o normal |
| `2.0` | `200%` - notablemente más difícil |
| `5.0` | `500%` - extremadamente difícil |

Esta tabla es un ejemplo práctico de parámetros para balancear tu mundo. Valores más bajos reducen la dificultad, mientras que valores más altos la aumentan significativamente.

:::tip Comienza con ajustes pequeños
Si estás probando cambios de balance, aumenta o disminuye un parámetro a la vez. Esto facilita entender qué configuración causó la diferencia en la jugabilidad.
:::

## Configuraciones de ejemplo

Los siguientes ejemplos pueden ayudarte a construir tu propia configuración personalizada.

### Tripulación casual

Esta configuración reduce la presión del combate, mantiene activado el compartir misiones y facilita los abordajes.

```json
"float": {
  "MobHealthMultiplier": 0.6,
  "MobDamageMultiplier": 0.6,
  "BoardingDifficultyMultiplier": 0.5
}
```

### Mares hardcore

Esta configuración aumenta la dificultad tanto en tierra como en combate naval, desactiva la finalización compartida de misiones y activa la exploración inmersiva.

```json
"bool": {
  "CoopQuests": false,
  "EasyExplore": true
},
"float": {
  "MobHealthMultiplier": 2.0,
  "MobDamageMultiplier": 1.5,
  "ShipHealthMultiplier": 2.0,
  "ShipDamageMultiplier": 1.5
}
```

### Escalado para grupos grandes

Esta configuración es útil para grupos grandes, como 8 jugadores, donde el escalado predeterminado puede sentirse demasiado fácil.

```json
"float": {
  "MobHealthMultiplier": 1.0,
  "MobDamageMultiplier": 1.0,
  "Coop_StatsCorrectionModifier": 2.0,
  "Coop_ShipStatsCorrectionModifier": 2.0
}
```

## Buenas prácticas para editar valores

### Usa rangos válidos

Cada parámetro `float` solo soporta un rango definido. Mantenerse dentro del rango documentado ayuda a evitar comportamientos inesperados.

| Parámetro | Mínimo | Máximo |
| --- | --- | --- |
| `MobHealthMultiplier` | `0.2` | `5.0` |
| `MobDamageMultiplier` | `0.2` | `5.0` |
| `ShipHealthMultiplier` | `0.4` | `5.0` |
| `ShipDamageMultiplier` | `0.2` | `2.5` |
| `BoardingDifficultyMultiplier` | `0.2` | `5.0` |
| `Coop_StatsCorrectionModifier` | `0.0` | `2.0` |
| `Coop_ShipStatsCorrectionModifier` | `0.0` | `2.0` |

:::caution Valores inválidos
Si usas valores no soportados, formato incorrecto o colocas un parámetro en la sección equivocada, el juego puede ignorar la configuración o no aplicarla correctamente.
:::

### Mantén el formato JSON correcto

Al editar `WorldDescription.json`, asegúrate de que:

- Todas las claves estén entre comillas dobles
- Las comas estén colocadas correctamente
- Las llaves `{}` y corchetes estén cerrados correctamente
- `true` y `false` estén en minúsculas
- Los valores decimales usen punto, por ejemplo `1.5`

Un archivo JSON roto puede impedir que la configuración del mundo se cargue correctamente.

### Reinicia después de guardar

Después de terminar de editar:

1. Guarda `WorldDescription.json`
2. Inicia tu servidor nuevamente
3. Únete al servidor y prueba los cambios en la jugabilidad

Algunos valores son más fáciles de verificar en combate, abordajes o sesiones cooperativas que inmediatamente al iniciar sesión.

## Gestión de configuraciones en la gestión del servidor de juegos

Puedes gestionar los archivos de configuración de Windrose directamente en la gestión del servidor de juegos ZAP-Hosting bajo las opciones disponibles de config y archivos. Esta es la forma recomendada de editar `WorldDescription.json` si no quieres usar herramientas externas.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Si la entrada exacta de configuración no aparece listada directamente, usa el **Administrador de Archivos** y navega manualmente a la ruta del archivo del mundo mostrada antes en esta guía.

:::info Gestión de configuraciones
Dependiendo de la interfaz actual del servidor de juegos y tu configuración de mundo existente, la lista exacta de archivos puede variar. Si no ves una entrada específica de configuración, usa la ruta del archivo directamente en lugar de asumir que falta la función.
:::

## Solución de problemas

### Los cambios no se aplican

Si tus modificadores no están activos después de reiniciar, verifica lo siguiente:

- Editaste el archivo correcto `WorldDescription.json`
- El servidor estaba detenido antes de editar
- La sintaxis JSON es válida
- Cada parámetro está en la sección correcta: `float`, `bool` o `tag`
- El servidor se reinició completamente después de guardar

### La dificultad no cambia

Algunos modificadores son más notorios que otros. Por ejemplo:

- `MobHealthMultiplier` es más fácil de notar en combate normal
- `ShipHealthMultiplier` solo se nota durante combate naval
- `Coop_StatsCorrectionModifier` es más visible con varios jugadores
- `EasyExplore` solo afecta el comportamiento de exploración y los marcadores del mapa

### El preset cambió a personalizado

Esto es un comportamiento esperado una vez que configuras valores personalizados manualmente. El juego cambia automáticamente el tipo de preset del mundo a `Custom` en el próximo inicio.

## Conclusión

Felicitaciones, has configurado con éxito los modificadores del mundo en Windrose. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡que está disponible todos los días para ayudarte! 🙂