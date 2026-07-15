---
id: palworld-max-workers
title: "Palworld: Máximo de Trabajadores"
description: "Aprende cómo cambiar el ajuste de máximo de trabajadores en Palworld editando BaseCampWorkerMaxNum, incluyendo el máximo predeterminado y los límites seguros vanilla para trabajadores por base. -> Aprende más ahora"
sidebar_label: Palworld: Máximo de Trabajadores
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite cambiar el número máximo de Pals trabajadores asignados a cada campamento base en tu servidor. En esta guía, aprenderás a editar el archivo de configuración correcto en el panel web de ZAP-Hosting, ajustar el valor `BaseCampWorkerMaxNum` y aplicar el cambio correctamente.



## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld a través del panel de administración de servidores de juegos de ZAP-Hosting.

:::info Requisito de Acceso a Configuración
Necesitas acceso a la administración web de tu servidor para poder abrir la sección **Configs** y editar manualmente los archivos de configuración de Palworld.
:::

## Entendiendo el Ajuste de Máximo de Trabajadores

El ajuste de Palworld responsable del valor máximo de trabajadores es `BaseCampWorkerMaxNum`. Esta opción controla cuántos Pals pueden trabajar en cada campamento base individual.

| Ajuste | Archivo de configuración | Propósito | Valor predeterminado | Máximo vanilla |
| --- | --- | --- | --- | --- |
| `BaseCampWorkerMaxNum` | `PalWorldSettings.ini` | Establece el número máximo de Pals trabajadores por campamento base | `15` | `50` |

:::note Información sobre el Límite Vanilla
La documentación pública actual indica que el máximo normal dentro del juego es `50`. Valores superiores a `50` generalmente requieren mods y no forman parte de la configuración estándar de servidores vanilla.
:::

:::caution Impacto en el Rendimiento
Aumentar el número de trabajadores puede incrementar el uso de CPU y memoria porque habrá más Pals activos en tus bases. Si usas un valor alto, monitorea el rendimiento de tu servidor después del cambio.
:::

## Abre el Archivo de Configuración de Palworld

Para cambiar el ajuste de máximo de trabajadores, necesitas editar el archivo `PalWorldSettings.ini`.

### Encuentra el archivo en la interfaz de ZAP-Hosting

Abre la administración de tu servidor de juegos Palworld y navega a:

- `Configs`
- `PalWorldSettings.ini`

Este es el archivo de configuración donde se almacenan los ajustes de jugabilidad para tu servidor Palworld.



## Edita el Valor BaseCampWorkerMaxNum

Una vez abierto `PalWorldSettings.ini`, busca la línea `OptionSettings`. Los ajustes del servidor Palworld suelen almacenarse como pares clave-valor separados por comas dentro de esta sección.

### Cambia la entrada de configuración

Encuentra la siguiente clave:

```ini
BaseCampWorkerMaxNum=15
```

Cambia el valor por la cantidad que prefieras. Por ejemplo, para permitir `20` Pals trabajadores por base, usa:

```ini
BaseCampWorkerMaxNum=20
```

### Ejemplo de configuración

Dependiendo de tu archivo actual, el ajuste normalmente aparecerá dentro de una entrada `OptionSettings` más larga similar a esta:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=20,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,bHardcore=False,bPalLost=False,bRawData=False)
```

:::tip Edita Solo el Valor Necesario
Solo cambia `BaseCampWorkerMaxNum` a menos que quieras ajustar intencionalmente otros ajustes de jugabilidad. Esto ayuda a evitar errores accidentales en la configuración.
:::

## Valores Recomendados

Puedes elegir cualquier valor que se ajuste a tu estilo de juego, siempre que esté dentro de los límites soportados vanilla.

| Valor | Resultado | Recomendación |
| --- | --- | --- |
| `15` | Límite predeterminado de trabajadores en Palworld | Mejor para juego estándar |
| `20` a `30` | Automatización aumentada en la base | Buen equilibrio para la mayoría de servidores privados |
| `40` a `50` | Conteo muy alto de trabajadores | Úsalo solo si tu servidor tiene suficientes recursos |
| Más de `50` | Comportamiento no estándar vanilla | Generalmente requiere mods y no se recomienda sin pruebas |

## Guarda y Aplica los Cambios

Después de editar el valor, guarda el archivo `PalWorldSettings.ini` en el editor de configuración de ZAP-Hosting.

### Reinicia el servidor

Una vez guardado el archivo, reinicia tu servidor Palworld para que se cargue el nuevo ajuste de máximo de trabajadores.

:::info Reinicio Requerido
Los cambios en `PalWorldSettings.ini` no se aplican inmediatamente mientras el servidor está en ejecución. Necesitas reiniciar el servidor después de guardar el archivo.
:::

## Verifica el Nuevo Límite de Trabajadores

Después de que el servidor se haya reiniciado, únete a tu servidor Palworld y revisa uno de tus campamentos base. Ahora deberías poder asignar Pals trabajadores hasta el nuevo límite que configuraste.

Si el cambio no parece funcionar, verifica lo siguiente:

| Verificación | Qué comprobar |
| --- | --- |
| Archivo correcto | Editaste `PalWorldSettings.ini` |
| Clave correcta | `BaseCampWorkerMaxNum` está presente y escrita correctamente |
| Sintaxis válida | La línea `OptionSettings` no fue dañada |
| Reinicio completado | El servidor fue reiniciado completamente después de guardar |
| Rango de valor | El valor está dentro del límite vanilla normal de `50` |

:::caution Sintaxis de Configuración
Las entradas de configuración de Palworld son sensibles al formato. Si accidentalmente eliminas comas, corchetes u otras partes de la línea `OptionSettings`, el servidor puede ignorar el ajuste o no cargarlo correctamente.
:::

## Conclusión

Felicidades, has cambiado con éxito el número máximo de trabajadores por campamento base en tu servidor Palworld. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂