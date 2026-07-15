---
id: palworld-supply-drop-settings
title: "Palworld: Configuración de Supply Drop"
description: "Aprende a cambiar la frecuencia de los supply drops en tu servidor de juegos Palworld editando manualmente el ajuste SupplyDropSpan. -> Aprende más ahora"
sidebar_label: "Configuración de Supply Drop"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld incluye supply drops que aparecen a intervalos regulares y pueden contener recursos útiles. En esta guía, aprenderás a cambiar manualmente la frecuencia de los supply drops en tu servidor de juegos Palworld de ZAP-Hosting editando el archivo de configuración correcto y aplicando los cambios adecuadamente.

## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld a través de la interfaz web de ZAP-Hosting y que el servidor esté disponible en tu administración de servidor de juegos.

:::info Configuración Manual Requerida
Esta configuración se realiza editando manualmente la configuración del servidor Palworld. Necesitarás abrir el archivo de configuración desde la sección **Configs** en la administración de tu servidor de juegos.
:::

## Localiza el Archivo de Configuración

Para cambiar el intervalo de los supply drops, debes editar el archivo `PalWorldSettings.ini`.

En la administración de tu servidor de juegos ZAP-Hosting:

1. Abre tu servidor Palworld.
2. Ve a **Configs**.
3. Abre el archivo `PalWorldSettings.ini`.



:::note Ubicación del Archivo de Configuración
En ZAP-Hosting, los ajustes relevantes de Palworld para la jugabilidad suelen gestionarse a través del archivo `PalWorldSettings.ini` en el área **Configs** de la administración de tu servidor. Si tu interfaz es ligeramente diferente, usa la lista de archivos de configuración disponibles y busca específicamente `PalWorldSettings.ini`.
:::

## Edita el Ajuste de Supply Drop

El ajuste que controla la frecuencia de los supply drops es `SupplyDropSpan`.

Este valor define el intervalo entre supply drops en **minutos**.

### Encuentra la Sección Correcta

En `PalWorldSettings.ini`, los ajustes del servidor Palworld suelen estar dentro de la línea `OptionSettings`. Debes localizar el bloque de configuración existente y verificar si `SupplyDropSpan` ya está presente.

Si ya existe, cambia su valor.

Si no existe, agrégalo dentro de la sección `OptionSettings=(...)` junto con los otros ajustes separados por comas.

### Entrada de Configuración

Usa el siguiente formato:

```ini
SupplyDropSpan=[tu_valor]
```

Reemplaza `[tu_valor]` con el número de minutos que deseas usar.

### Valores de Ejemplo

| Ajuste | Significado |
| --- | --- |
| `SupplyDropSpan=180` | Intervalo predeterminado de 3 horas |
| `SupplyDropSpan=60` | Supply drops cada 1 hora |
| `SupplyDropSpan=360` | Supply drops cada 6 horas |
| `SupplyDropSpan=30` | Supply drops muy frecuentes |

Aquí tienes un ejemplo de cómo puede aparecer el ajuste dentro del bloque completo `OptionSettings`:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt",SupplyDropSpan=60)
```

:::caution Mantén la Sintaxis Existente Intacta
No elimines comas, corchetes u otros valores existentes en la línea `OptionSettings`. Un error de formato en esta línea puede impedir que el servidor cargue la configuración correctamente.
:::

## Guarda y Aplica los Cambios

Después de editar el valor:

1. Guarda los cambios en `PalWorldSettings.ini`.
2. Reinicia tu servidor Palworld desde la administración de servidor de juegos ZAP-Hosting.

Es necesario reiniciar porque Palworld no aplica este ajuste de jugabilidad en vivo mientras el servidor está en ejecución.

### ¿Se Requiere un Comando Adicional?

Normalmente no se requiere ningún comando adicional dentro del juego o consola para este cambio específico. Reiniciar el servidor es el paso necesario para cargar el valor actualizado de `SupplyDropSpan`.

| Acción | Requerido |
| --- | --- |
| Editar `PalWorldSettings.ini` | Sí |
| Agregar o cambiar `SupplyDropSpan` | Sí |
| Ejecutar comando extra en consola | No |
| Reiniciar servidor después de guardar | Sí |

## Verifica el Ajuste

Una vez que el servidor se haya reiniciado, el nuevo intervalo de supply drops debería estar activo.

Como este ajuste controla eventos temporizados en el mundo, puede que necesites esperar al siguiente ciclo de aparición para confirmar completamente el cambio en el juego. Si configuras un intervalo más corto como `60` o `30`, la verificación será más rápida.

:::tip Prueba los Cambios Más Rápido
Si quieres confirmar que el ajuste funciona sin esperar varias horas, configura temporalmente `SupplyDropSpan=30`. Después de probar, puedes cambiarlo de nuevo a tu valor preferido a largo plazo.
:::

## Solución de Problemas

### El Ajuste No Se Aplica

Si la frecuencia de supply drops no parece cambiar, verifica lo siguiente:

- Asegúrate de que `SupplyDropSpan` esté escrito exactamente como se muestra
- Confirma que el valor esté dentro de la sección `OptionSettings=(...)`
- Verifica que no haya comas rotas o corchetes faltantes
- Reinicia el servidor después de guardar el archivo

### El Servidor Tiene Errores de Configuración

Si el servidor no arranca después de editar el archivo, restaura la configuración anterior y revisa cuidadosamente la sintaxis.

:::danger Formato INI Incorrecto
Palworld almacena muchos ajustes de jugabilidad en una sola línea `OptionSettings`. Incluso un solo carácter fuera de lugar puede romper la configuración. Siempre revisa tus cambios cuidadosamente antes de guardar.
:::

## Conclusión

Felicitaciones, has cambiado con éxito la configuración de supply drops en Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡que está disponible todos los días para ayudarte! 🙂