---
id: palworld-enemy-drop-rate
title: "Palworld: Tasa de Drop de Enemigos"
description: "Aprende cómo cambiar la tasa de drop de enemigos en tu servidor de juegos Palworld editando el valor correcto de configuración para un mejor balance de loot. -> Aprende más ahora"
sidebar_label: Palworld: Tasa de Drop de Enemigos
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

`EnemyDropItemRate` controla cuánto loot sueltan los enemigos en Palworld. En esta guía, aprenderás a editar manualmente el archivo de configuración correcto en la administración de tu servidor de juegos Palworld en ZAP-Hosting y aplicar con éxito la nueva tasa de drop de enemigos.



## Preparación

Antes de comenzar, asegúrate de tener acceso al panel de administración de tu servidor de juegos Palworld y permiso para editar archivos de configuración del servidor.

:::info Configuración Manual Requerida
Esta configuración se realiza editando manualmente la configuración del servidor. El archivo relevante está disponible en la administración de tu servidor de juegos ZAP-Hosting bajo `Configs`.
:::

## Localiza el Archivo de Configuración

Para cambiar la tasa de drop de enemigos, necesitas editar el archivo `PalWorldSettings.ini`.

### Abre la Sección Configs

Inicia sesión en la administración de tu servidor de juegos ZAP-Hosting y abre tu servidor Palworld. Luego navega a la sección `Configs`, donde se listan los archivos de configuración disponibles.

### Selecciona `PalWorldSettings.ini`

Abre el archivo `PalWorldSettings.ini` desde el área `Configs`. Este archivo contiene los valores principales de configuración del gameplay para tu servidor de juegos Palworld, incluyendo ajustes relacionados con loot y drops.

:::note Resumen del Archivo de Configuración
En servidores dedicados Palworld, los ajustes de gameplay suelen almacenarse en `PalWorldSettings.ini`. El multiplicador de loot de enemigos se configura allí mediante la entrada `EnemyDropItemRate`.
:::

## Edita la Tasa de Drop de Enemigos

Ahora que tienes abierto el archivo correcto, puedes ajustar el multiplicador de loot.

### Encuentra el Ajuste Correcto

Busca dentro de `PalWorldSettings.ini` la línea `OptionSettings` y localiza la siguiente clave:

```ini
EnemyDropItemRate=1.000000
```

Si la clave ya está presente, cambia su valor al multiplicador que prefieras.

### Establece tu Multiplicador Deseado

`EnemyDropItemRate` usa un multiplicador numérico:

| Clave de Configuración | Valor por Defecto | Valor de Ejemplo | Efecto |
| --- | --- | --- | --- |
| `EnemyDropItemRate` | `1.000000` | `2.000000` | Los enemigos sueltan el doble de ítems |
| `EnemyDropItemRate` | `1.000000` | `0.500000` | Los enemigos sueltan menos ítems |
| `EnemyDropItemRate` | `1.000000` | `3.000000` | Los enemigos sueltan tres veces más ítems |

Por ejemplo, para duplicar el loot que sueltan enemigos derrotados, Pals salvajes y jefes, configura:

```ini
EnemyDropItemRate=2.000000
```

Si estás editando la entrada completa `OptionSettings`, puede verse similar a este fragmento:

```ini
OptionSettings=(EnemyDropItemRate=2.000000)
```

:::caution Mantén los Ajustes Existentes
En muchas configuraciones de servidores Palworld, `OptionSettings` contiene muchos valores en una sola línea. Solo cambia el valor de `EnemyDropItemRate` y evita eliminar comas, corchetes u otros ajustes existentes, ya que esto puede causar que la configuración falle.
:::

## Revisa los Límites Relacionados con el Drop

Multiplicadores de loot más altos pueden aumentar la cantidad de ítems caídos en el suelo. Esto puede afectar el rendimiento del servidor, especialmente durante combates intensos o peleas contra jefes.

### Verifica `DropItemMaxNum`

Si tu servidor ya tiene un alto número de ítems caídos simultáneamente, revisa el ajuste `DropItemMaxNum` en el mismo archivo de configuración.

| Clave de Configuración | Propósito |
| --- | --- |
| `EnemyDropItemRate` | Multiplica el loot que sueltan los enemigos derrotados |
| `DropItemMaxNum` | Limita cuántos ítems caídos pueden existir al mismo tiempo |

:::tip Balancea Loot y Rendimiento
Si aumentas significativamente `EnemyDropItemRate`, considera mantener `DropItemMaxNum` en un valor razonable para reducir el riesgo de acumulación innecesaria de ítems y problemas de rendimiento.
:::

## Guarda y Aplica los Cambios

Después de editar la configuración, guarda el archivo `PalWorldSettings.ini` en la sección `Configs`.

### Reinicia el Servidor

Una vez guardado el archivo, reinicia tu servidor Palworld para que se cargue el nuevo ajuste.

| Acción | Requerido |
| --- | --- |
| Guardar `PalWorldSettings.ini` | Sí |
| Reiniciar el servidor | Sí |
| Comando adicional en consola | No se requiere comando verificado |

:::info Reinicio Requerido
Los cambios en `PalWorldSettings.ini` no se aplican inmediatamente durante el runtime. Necesitas reiniciar el servidor después de guardar el archivo.
:::

## Verifica la Nueva Tasa de Drop

Después de que el reinicio haya finalizado, únete a tu servidor Palworld y derrota enemigos para confirmar que el nuevo multiplicador de loot funciona como esperas.

Si la cantidad de drops no parece cambiar, vuelve a abrir `PalWorldSettings.ini` y verifica que:

- `EnemyDropItemRate` esté escrito correctamente
- el valor esté dentro de la configuración correcta de `OptionSettings`
- el archivo se haya guardado exitosamente
- el servidor se haya reiniciado después del cambio

## Conclusión

Felicidades, has cambiado con éxito la tasa de drop de enemigos en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂