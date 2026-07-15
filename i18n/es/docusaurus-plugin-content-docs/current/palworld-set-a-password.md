---
id: palworld-set-a-password
title: "Palworld: Establecer una Contraseña"
description: "Aprende a establecer una contraseña para tu servidor de Palworld editando manualmente la configuración del juego y aplicando correctamente el cambio de contraseña. -> Aprende más ahora"
sidebar_label: Palworld: Establecer una Contraseña
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite proteger tu servidor con una contraseña para que solo jugadores autorizados puedan unirse. En esta guía, aprenderás cómo establecer o cambiar manualmente la contraseña del servidor en la configuración de tu servidor de juegos Palworld en ZAP-Hosting y aplicar la contraseña correctamente.



## Preparación

Antes de comenzar, asegúrate de que:

- tu servidor de juegos Palworld esté en línea en la interfaz web de ZAP-Hosting
- tengas acceso a la administración del servidor de juegos
- conozcas la contraseña que deseas usar para el acceso al servidor

:::info Configuración Manual Requerida
Para Palworld, la contraseña se puede configurar manualmente a través de los archivos de configuración del servidor. En la interfaz de ZAP-Hosting, puedes acceder a estos archivos desde la administración de tu servidor de juegos en la sección `Configs`.
:::

## Abrir el Archivo de Configuración de Palworld

Para establecer una contraseña en tu servidor Palworld, necesitas editar el archivo `PalWorldSettings.ini`.

### Encontrar el archivo en la interfaz de ZAP-Hosting

1. Inicia sesión en la interfaz web de ZAP-Hosting.
2. Abre la administración de tu servidor de juegos **Palworld**.
3. Navega a **Configs**.
4. Abre el archivo `PalWorldSettings.ini`.

Este archivo contiene la configuración principal del servidor Palworld, incluyendo la entrada que controla si se requiere una contraseña para unirse.

:::note Propósito del Archivo de Configuración
El archivo `PalWorldSettings.ini` almacena las opciones del servidor en una sola línea de configuración, usualmente dentro de la sección `OptionSettings=(...)`. Debes editar el valor de `ServerPassword` allí.
:::

## Editar la Contraseña del Servidor

Una vez abierto `PalWorldSettings.ini`, busca la entrada `ServerPassword`.

### Entrada de configuración requerida

Usa el siguiente valor:

```ini
ServerPassword="[your_password]"
```

Reemplaza `[your_password]` con la contraseña que quieres que los jugadores ingresen para unirse a tu servidor.

Si la contraseña está deshabilitada actualmente, el valor puede verse así:

```ini
ServerPassword=""
```

Un valor vacío significa que no hay contraseña establecida para unirse.

### Ejemplo de configuración

En Palworld, esta configuración suele formar parte del bloque `OptionSettings=(...)`. Puede verse similar a esto:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="[your_password]",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Mantén el Formato Existente Intacto
Solo cambia el valor dentro de `ServerPassword="..."`. No elimines comas, comillas, corchetes u otras entradas en la línea `OptionSettings=(...)`, ya que esto puede impedir que el servidor cargue la configuración correctamente.
:::

## Referencia de Configuración

La siguiente tabla muestra la configuración relevante para este cambio de contraseña:

| Configuración | Valor de ejemplo | Propósito |
| --- | --- | --- |
| `ServerPassword` | `ServerPassword="[your_password]"` | Requiere que los jugadores ingresen una contraseña antes de unirse al servidor |

### Recomendaciones para la contraseña

Al elegir una contraseña, ten en cuenta estos puntos:

| Recomendación | Explicación |
| --- | --- |
| Usa una contraseña única | Evita reutilizar contraseñas de otras cuentas o servicios |
| Evita palabras muy simples | Las contraseñas fáciles son más fáciles de adivinar |
| Compártela solo con jugadores de confianza | Cualquiera con la contraseña puede intentar unirse |
| Guárdala de forma segura | Un gestor de contraseñas puede ayudarte a mantenerla segura |

:::tip Elige una Contraseña Fuerte
Si planeas administrar un servidor privado de Palworld para amigos o una comunidad restringida, usa una contraseña fuerte en lugar de una palabra simple o el nombre del servidor. Esto ayuda a reducir intentos no deseados de ingreso.
:::

## Guarda los Cambios y Reinicia el Servidor

Después de editar la contraseña, guarda el archivo en la sección `Configs`.

### Aplica la nueva contraseña

Para que el cambio de contraseña sea efectivo:

1. Guarda los cambios en `PalWorldSettings.ini`.
2. Reinicia tu servidor de juegos Palworld.

Es necesario reiniciar porque Palworld lee la configuración del servidor desde el archivo durante el inicio. Sin reiniciar, la nueva contraseña puede no aplicarse.

:::info Reinicio Requerido
Después de cambiar `ServerPassword`, debes reiniciar el servidor manualmente desde la administración del servidor de juegos en ZAP-Hosting para que se cargue la nueva configuración.
:::

## Verifica la Contraseña

Una vez completado el reinicio, prueba la configuración intentando unirte al servidor desde el juego Palworld.

### Qué verificar

Al conectarte, confirma que:

- el servidor ahora solicita una contraseña antes de unirse
- la contraseña configurada funciona correctamente
- los jugadores sin la contraseña no pueden acceder al servidor

Si el servidor no pide contraseña, vuelve a abrir `PalWorldSettings.ini` y verifica que:

- `ServerPassword` esté presente en la sección `OptionSettings=(...)`
- el valor no esté vacío
- el archivo se haya guardado correctamente
- el servidor se haya reiniciado después del cambio

:::note Visibilidad de la Contraseña
La contraseña se almacena en texto plano en el archivo de configuración. Asegúrate de compartir el acceso a la administración del servidor solo con usuarios de confianza.
:::

## Conclusión

Felicitaciones, has establecido correctamente una contraseña para tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂