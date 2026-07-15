---
id: palworld-faster-egg-hatching
title: "Palworld: Incubación de Huevos Más Rápida"
description: "Aprende cómo reducir el tiempo de incubación de huevos en Palworld editando la configuración del servidor para obtener resultados de incubación más rápidos. -> Aprende más ahora"
sidebar_label: Palworld: Incubación de Huevos Más Rápida
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En Palworld, el tiempo de incubación de huevos se controla mediante un valor de configuración del servidor. En esta guía, aprenderás cómo reducir el tiempo de incubación de huevos en tu servidor de juegos Palworld de ZAP-Hosting editando el archivo de configuración correcto y aplicando el cambio adecuadamente.



## Preparación

Antes de comenzar, asegúrate de que:

- tienes acceso a la interfaz web de tu servidor de juegos de ZAP-Hosting
- tu servidor Palworld está disponible en la administración del servidor de juegos
- puedes editar archivos en la sección **Configs**

:::info Acceso al Archivo de Configuración
Para Palworld en ZAP-Hosting, las configuraciones relevantes del servidor se pueden editar a través de la administración del servidor de juegos en **Configs**. Para esta tarea, necesitas modificar el archivo `PalWorldSettings.ini`.
:::

## Entendiendo la Configuración de Incubación de Huevos

Palworld usa la configuración `PalEggDefaultHatchingTime` para definir el tiempo base de incubación de huevos en horas. Un valor más bajo significa que los huevos eclosionan más rápido.

Según las referencias actuales de configuración del servidor Palworld, el valor predeterminado es `72`, que representa `72` horas para un Huevo Grande. Otros tipos de huevo también se escalan desde este valor base.

| Clave de configuración | Valor predeterminado | Descripción |
| --- | --- | --- |
| `PalEggDefaultHatchingTime` | `72.000000` | Tiempo base de incubación de huevos en horas |

:::note Cómo Funciona la Configuración
Este valor afecta el proceso general de incubación de huevos en tu servidor. Si lo reduces, la incubación será más rápida para todos los jugadores que usen incubadoras.
:::

## Abre el Archivo de Configuración de Palworld

Primero, necesitas acceder al archivo de configuración correcto en la interfaz de ZAP-Hosting.

### Navega a la Sección Configs

Abre la administración de tu servidor de juegos Palworld y ve a la sección **Configs**. Allí, localiza y abre el archivo llamado:

```ini
PalWorldSettings.ini
```

Este es el archivo que contiene las entradas de configuración del gameplay para tu servidor Palworld, incluyendo la configuración del tiempo de incubación de huevos.



## Edita el Tiempo de Incubación de Huevos

Una vez abierto `PalWorldSettings.ini`, busca la línea `OptionSettings`. Palworld almacena muchas configuraciones de gameplay dentro de esta sección.

### Cambia la Clave de Configuración Requerida

Encuentra la siguiente entrada:

```ini
PalEggDefaultHatchingTime=72.000000
```

Cambia el valor a un número más bajo para que la incubación de huevos sea más rápida.

Por ejemplo:

```ini
PalEggDefaultHatchingTime=24.000000
```

Esto reduciría el tiempo base de incubación de huevos de `72` horas a `24` horas.

### Valores de Ejemplo

Puedes usar diferentes valores dependiendo de qué tan rápido quieras que sea la incubación en tu servidor.

| Valor | Resultado |
| --- | --- |
| `72.000000` | Tiempo de incubación predeterminado |
| `48.000000` | Reducción más lenta, gameplay más equilibrado |
| `24.000000` | Incubación de huevos mucho más rápida |
| `12.000000` | Incubación de huevos muy rápida |
| `1.000000` | Incubación extremadamente rápida |

:::caution Usa Valores Realistas
Valores muy bajos pueden cambiar significativamente el equilibrio del gameplay. Si quieres una progresión más natural, comienza con un valor moderado como `24.000000` o `48.000000`.
:::

### Fragmento de Configuración de Ejemplo

Dependiendo de tu configuración actual, la configuración aparecerá dentro del bloque `OptionSettings`. Un ejemplo típico se ve así:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=24.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,BaseCampMaxNumInGuild=4)
```

:::tip Edita la Entrada Correcta
Si la clave `PalEggDefaultHatchingTime` ya existe, edita el valor existente en lugar de agregar una entrada duplicada. Valores duplicados en el mismo bloque `OptionSettings` pueden causar que la configuración sea ignorada o sobrescrita.
:::

## Guarda y Aplica los Cambios

Después de editar el valor, guarda el archivo `PalWorldSettings.ini` en la interfaz de ZAP-Hosting.

### Reinicia el Servidor

Una vez guardado el archivo, reinicia tu servidor Palworld para que se cargue el nuevo tiempo de incubación de huevos.

:::info Reinicio Requerido
La configuración actualizada no se aplicará hasta que el servidor haya sido reiniciado.
:::

## Comportamiento Importante para Huevos Existentes

Si los huevos ya están incubando, el nuevo valor de incubación no se actualiza de forma confiable para esos temporizadores activos. En la práctica, deberías eliminar y reiniciar el proceso de incubación de los huevos afectados para que se aplique la nueva tasa.

| Situación | Acción requerida |
| --- | --- |
| Huevos nuevos colocados después del cambio | No se requiere acción adicional tras el reinicio |
| Huevos ya incubando antes del cambio | Reiniciar la incubación de esos huevos |

:::note Temporizadores de Incubación Existentes
Si cambias el tiempo de incubación y no ves el resultado esperado, verifica si el huevo ya estaba incubando antes del cambio de configuración.
:::

## Conclusión

Felicitaciones, has reducido con éxito el tiempo de incubación de huevos en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂