---
id: palworld-change-server-name
title: "Palworld: Cambiar el Nombre del Servidor"
description: "Aprende cómo cambiar el nombre de tu servidor de Palworld y actualizar el nombre que aparece en el navegador de servidores editando manualmente el archivo de configuración correcto. -> Aprende más ahora"
sidebar_label: Palworld: Cambiar el Nombre del Servidor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld usa un archivo de configuración para definir el nombre del servidor que se muestra en el navegador de servidores dentro del juego. En esta guía, aprenderás cómo cambiar manualmente el nombre mostrado en el panel web de ZAP-Hosting y aplicar el cambio correctamente.



## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld en el panel web de ZAP-Hosting y permiso para editar sus archivos de configuración.

:::info Configuración Manual Requerida
Este cambio se realiza editando manualmente la configuración del servidor Palworld. El archivo relevante se puede acceder desde la administración de tu servidor de juegos en la sección `Configs`.
:::

## Abrir el Archivo de Configuración de Palworld

Para cambiar el nombre del servidor, necesitas editar el archivo `PalWorldSettings.ini`.

En el panel web de ZAP-Hosting:

1. Abre tu servidor de juegos **Palworld**.
2. Ve a **Configs** en la administración del servidor.
3. Abre el archivo `PalWorldSettings.ini`.

:::note Ubicación del Archivo de Configuración
En servidores dedicados de Palworld, las configuraciones relevantes suelen estar en `PalWorldSettings.ini`. En la interfaz de ZAP-Hosting, debes editar este archivo a través de la sección `Configs` en lugar de cambiar rutas de archivos manualmente.
:::

## Editar el Nombre del Servidor

Dentro de `PalWorldSettings.ini`, busca la sección `OptionSettings`. El nombre que aparece en el navegador de servidores está controlado por la entrada `ServerName`.

También puedes opcionalmente establecer una descripción del servidor con `ServerDescription`.

### Ejemplo de Configuración

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Descripción de tu servidor Palworld")
```

Si tu archivo ya contiene una línea larga `OptionSettings=(...)`, solo necesitas cambiar los valores existentes para `ServerName` y opcionalmente `ServerDescription`.

### Valores que Debes Cambiar

| Clave de Configuración | Descripción | Valor de Ejemplo |
| --- | --- | --- |
| `ServerName` | El nombre que se muestra en el navegador de servidores de Palworld | `"zaphosting"` |
| `ServerDescription` | Texto descriptivo opcional que se muestra junto al servidor | `"Servidor público de supervivencia"` |

:::caution Mantén las Configuraciones Existentes
`OptionSettings` suele contener muchas otras configuraciones del servidor en una sola línea. Solo cambia los valores de `ServerName` y `ServerDescription` a menos que quieras modificar intencionadamente otras opciones.
:::

## Guardar los Cambios

Después de editar los valores:

1. Guarda el archivo `PalWorldSettings.ini` en la sección **Configs**.
2. Verifica que las comillas y comas sigan correctamente formateadas.

### Ejemplo de Línea Existente

Si tu archivo contiene una línea similar al ejemplo siguiente, actualiza solo el texto relevante:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="Servidor público de supervivencia",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

## Reiniciar el Servidor

Después de guardar la configuración, necesitas reiniciar tu servidor de Palworld para que se cargue el nuevo nombre.

### Aplicar la Nueva Configuración

Usa la función de reinicio en el panel de administración de tu servidor de juegos en ZAP-Hosting.

| Acción | Requerido |
| --- | --- |
| Guardar `PalWorldSettings.ini` | Sí |
| Reiniciar el servidor | Sí |
| Ejecutar comandos adicionales en consola | No |

:::tip Retraso en la Actualización del Navegador de Servidores
Después del reinicio, el nombre actualizado del servidor puede no aparecer instantáneamente para todos los jugadores en el navegador. Si es necesario, espera unos minutos y actualiza la lista de servidores.
:::

## Verificar el Nuevo Nombre del Servidor

Una vez que el servidor haya reiniciado:

1. Abre Palworld.
2. Revisa el navegador de servidores multijugador.
3. Busca el nombre que configuraste en `ServerName`.

Si aún aparece el nombre antiguo, vuelve a abrir `PalWorldSettings.ini` y confirma que:
- el valor de `ServerName` fue cambiado correctamente
- el archivo se guardó exitosamente
- el servidor fue reiniciado completamente después del cambio

## Conclusión

Felicidades, has cambiado exitosamente el nombre de tu servidor de Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂