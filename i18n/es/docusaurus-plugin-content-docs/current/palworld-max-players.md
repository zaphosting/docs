---
id: palworld-max-players
title: "Palworld: Máximo de Jugadores"
description: "Aprende cómo cambiar el ajuste de máximo de jugadores en Palworld en tu servidor de juegos Palworld editando el archivo de configuración correcto en la interfaz de ZAP. -> Aprende más ahora"
sidebar_label: "Máximo de Jugadores"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite controlar cuántos jugadores pueden unirse a tu servidor al mismo tiempo. En esta guía, aprenderás cómo cambiar manualmente el máximo de jugadores editando el archivo de configuración correcto en la administración de tu servidor de juegos ZAP-Hosting.



## Preparación

Antes de comenzar, asegúrate de tener acceso a la administración de tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting.

:::info Acceso al Archivo de Configuración
Necesitas editar la configuración del servidor manualmente a través del área **Configs** en la administración de tu servidor de juegos. Si aún no sabes cómo acceder a tu servidor, primero ábrelo desde la interfaz web de ZAP-Hosting.
:::

## Localiza el Archivo de Configuración de Palworld

Para cambiar el número máximo de jugadores, debes editar el archivo `PalWorldSettings.ini`.

En la administración de tu servidor de juegos ZAP-Hosting:

1. Abre tu servidor **Palworld**
2. Ve a **Configs**
3. Abre el archivo llamado `PalWorldSettings.ini`

Este archivo contiene las configuraciones principales del juego y del servidor, incluyendo el máximo de jugadores permitidos.

:::note Archivo Correcto
Para este cambio, solo debes editar `PalWorldSettings.ini`. Si tu servidor contiene archivos adicionales, no modifiques valores no relacionados a menos que sepas exactamente qué hacen.
:::

## Cambia el Máximo de Jugadores

Dentro de `PalWorldSettings.ini`, busca la sección `OptionSettings` y encuentra la entrada `ServerPlayerMaxNum`.

La configuración relevante es:

| Clave de Configuración | Descripción | Valor por Defecto |
| --- | --- | --- |
| `ServerPlayerMaxNum` | Define el número máximo de jugadores que pueden unirse al servidor | `32` |

Una entrada típica se ve así:

```ini
ServerPlayerMaxNum=32
```

Cambia el valor al límite de jugadores que prefieras. Por ejemplo, para permitir 16 jugadores:

```ini
ServerPlayerMaxNum=16
```

O para mantener la configuración predeterminada de 32 jugadores:

```ini
ServerPlayerMaxNum=32
```

:::caution Usa Valores Soportados
Los servidores dedicados de Palworld comúnmente usan `32` como máximo por defecto. Si configuras un valor mucho más alto, esto puede afectar la estabilidad o el rendimiento del servidor según tu plan y la versión actual del juego. Si no estás seguro, comienza con un valor más bajo y prueba tu servidor primero.
:::

## Ejemplo de Configuración

Dependiendo de cómo esté formateado tu archivo, la configuración puede aparecer dentro de una línea más larga `OptionSettings`. En ese caso, solo necesitas cambiar el valor de `ServerPlayerMaxNum`.

Ejemplo:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=16,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

Si tu archivo usa este formato, no elimines comas, corchetes ni comillas de otras entradas. Solo reemplaza el número después de `ServerPlayerMaxNum=`.

## Guarda y Aplica los Cambios

Después de cambiar el valor:

1. Guarda el archivo `PalWorldSettings.ini`
2. Reinicia tu servidor Palworld

Es necesario reiniciar para que el nuevo máximo de jugadores se aplique.

| Acción | Requerido |
| --- | --- |
| Guardar `PalWorldSettings.ini` | Sí |
| Ejecutar comandos adicionales en consola | No se requiere ningún comando adicional verificado |
| Reiniciar el servidor | Sí |

:::tip Reinicio Necesario
Los cambios en la configuración de `ServerPlayerMaxNum` no se aplican inmediatamente mientras el servidor está en ejecución. Necesitas reiniciar el servidor para que Palworld cargue la configuración actualizada.
:::

## Verifica el Nuevo Límite de Jugadores

Después del reinicio, tu servidor debería usar el nuevo máximo de jugadores.

Puedes verificarlo:

- revisando los detalles del servidor en la administración de tu servidor de juegos si se muestran allí
- uniéndote al servidor con varios jugadores
- revisando la configuración actual nuevamente en `PalWorldSettings.ini`

Si el ajuste no se aplica, abre el archivo otra vez y confirma que:

- `ServerPlayerMaxNum=[tu_valor]` está presente
- el formato del archivo no se haya roto
- el servidor fue reiniciado completamente después de guardar

:::caution Sintaxis de Configuración
Si accidentalmente eliminas una coma, corchete u otro valor de la línea `OptionSettings`, el servidor puede ignorar la configuración o fallar al cargarla correctamente. Edita el archivo con cuidado y cambia solo el valor requerido.
:::

## Conclusión

Felicidades, has cambiado con éxito el número máximo de jugadores en tu servidor Palworld. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡está disponible todos los días para asistirte! 🙂