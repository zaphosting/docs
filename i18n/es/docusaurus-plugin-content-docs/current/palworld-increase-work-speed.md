---
id: palworld-increase-work-speed
title: "Palworld: Aumentar la Velocidad de Trabajo"
description: "Aprende cómo aumentar la velocidad de trabajo en Palworld editando el ajuste WorkSpeedRate para que los jugadores y Pals trabajen más rápido en tu servidor. -> Aprende más ahora"
sidebar_label: "Aumentar la Velocidad de Trabajo"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite ajustar la rapidez con la que los jugadores y Pals completan tareas relacionadas con la base cambiando un valor de configuración del servidor. En esta guía, aprenderás cómo aumentar la velocidad de trabajo en tu servidor Palworld de ZAP-Hosting editando el archivo de configuración correcto y aplicando los cambios adecuadamente.



## Preparación

Antes de comenzar, asegúrate de tener acceso a la administración de tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting.

:::info Configuración Manual Requerida
Esta configuración se realiza manualmente a través del editor de configuración. Necesitas editar tú mismo el archivo de configuración del servidor Palworld en la sección `Configs` de la administración de tu servidor de juegos.
:::

## Abrir el Archivo de Configuración de Palworld

Para cambiar la velocidad de trabajo, debes editar el archivo `PalWorldSettings.ini`.

### Dónde encontrar el archivo

1. Inicia sesión en el sitio web de ZAP-Hosting.
2. Abre la administración de tu servidor de juegos **Palworld**.
3. Navega a **Configs**.
4. Abre el archivo llamado `PalWorldSettings.ini`.

Este archivo contiene los ajustes de jugabilidad que controlan las tasas y multiplicadores para tu servidor Palworld.

:::note Ubicación del Archivo de Configuración
En ZAP-Hosting, el archivo relevante para este cambio está disponible directamente en la administración de tu servidor de juegos bajo `Configs`. Si tu servidor muestra varios archivos de configuración, asegúrate de editar `PalWorldSettings.ini`.
:::

## Cambiar el Ajuste de Velocidad de Trabajo

El ajuste que se usa para aumentar la velocidad de trabajo es `WorkSpeedRate`.

### Qué hace el ajuste

`WorkSpeedRate` controla qué tan rápido los jugadores y Pals realizan tareas relacionadas con el trabajo en tu base. El valor predeterminado suele ser `1.0`, lo que significa velocidad normal.

Valores más altos aumentan el multiplicador de velocidad:

| Clave de Configuración | Valor Predeterminado | Valor de Ejemplo | Efecto |
| --- | --- | --- | --- |
| `WorkSpeedRate` | `1.0` | `2.0` | Velocidad de trabajo al doble |
| `WorkSpeedRate` | `1.0` | `10.0` | Velocidad de trabajo muy rápida |

### Editar el valor

Busca la línea `OptionSettings` dentro de `PalWorldSettings.ini`. La entrada `WorkSpeedRate` está dentro de ese bloque de configuración.

Si la entrada ya existe, cambia su valor. Por ejemplo:

```ini
WorkSpeedRate=1.000000
```

Cámbialo a un valor más alto como:

```ini
WorkSpeedRate=2.000000
```

Para un resultado mucho más rápido, puedes usar un multiplicador más alto como:

```ini
WorkSpeedRate=10.000000
```

### Ejemplo de fragmento de configuración

Dependiendo del contenido actual de tu archivo, el ajuste puede aparecer como parte de una línea `OptionSettings` más larga similar a esta:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=2.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Edita la Sintaxis Existente con Cuidado
`PalWorldSettings.ini` usa un formato estricto. Asegúrate de cambiar solo el valor de `WorkSpeedRate` y no eliminar comas, corchetes o comillas de la línea `OptionSettings` que lo rodea.
:::

## Guardar y Reiniciar el Servidor

Después de editar el archivo, necesitas guardar los cambios y reiniciar tu servidor Palworld.

### Aplicar los cambios

1. Guarda el archivo `PalWorldSettings.ini` actualizado.
2. Reinicia tu servidor de juegos Palworld desde la administración del servidor en ZAP-Hosting.

Es necesario reiniciar porque Palworld lee estos ajustes de jugabilidad al iniciar el servidor. El nuevo valor de velocidad de trabajo no se aplicará correctamente hasta que el servidor se haya reiniciado.

| Acción | Requerido |
| --- | --- |
| Guardar `PalWorldSettings.ini` | Sí |
| Reiniciar el servidor | Sí |
| Comando adicional en consola | No |

:::tip Prueba Recomendada
Comienza con un valor moderado como `2.0` y prueba el resultado en el juego. Valores extremadamente altos pueden hacer que la progresión sea mucho más rápida de lo esperado, lo que puede afectar el equilibrio general del juego.
:::

## Verificar la Nueva Velocidad de Trabajo

Una vez que el servidor esté en línea nuevamente, únete a tu servidor Palworld y prueba las actividades relacionadas con el trabajo en tu base.

Deberías notar que los jugadores y Pals completan las tareas más rápido que antes. Si no ves ningún cambio, vuelve a abrir `PalWorldSettings.ini` y confirma que:

- `WorkSpeedRate` está presente
- el valor está configurado correctamente
- el archivo se guardó exitosamente
- el servidor se reinició completamente después de la edición

:::note Equilibrio de Jugabilidad
Aumentar la velocidad de trabajo puede cambiar significativamente qué tan rápido se desarrolla tu base. Si quieres una experiencia equilibrada, aumenta el valor gradualmente en lugar de establecer una velocidad extremadamente alta de inmediato.
:::

## Conclusión

Felicitaciones, has aumentado exitosamente la velocidad de trabajo en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible diariamente para ayudarte! 🙂