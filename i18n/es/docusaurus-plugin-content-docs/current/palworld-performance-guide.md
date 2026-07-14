---
id: palworld-performance-guide
title: "Palworld: Guía de Rendimiento"
description: "Mejora el rendimiento de tu servidor de Palworld, reduce caídas de rendimiento y disminuye la carga del servidor con cambios manuales en la configuración. -> Aprende más ahora"
sidebar_label: Palworld: Guía de Rendimiento
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El rendimiento del servidor de Palworld puede disminuir con el tiempo, especialmente en servidores activos con muchas bases, trabajadores, objetos caídos y Pals salvajes. En esta guía, aprenderás a optimizar el archivo `PalWorldSettings.ini` en el panel web de ZAP-Hosting para reducir la carga del servidor y mejorar el rendimiento general.

## Preparación

Antes de comenzar, necesitas acceso a la administración de tu servidor de juegos Palworld y permiso para editar archivos de configuración.

:::info Acceso Requerido
Necesitas acceso a tu servidor de Palworld en el panel de administración de servidores de juegos de ZAP-Hosting. El archivo de configuración necesario está disponible bajo `Configs`.
:::

:::caution Crea una Copia de Seguridad Primero
Ajustar el rendimiento puede cambiar significativamente el comportamiento del juego. Antes de editar tu configuración, se recomienda crear una copia de seguridad para poder restaurar tus ajustes anteriores si es necesario.
:::

## Abre el Archivo de Configuración de Palworld

Para optimizar tu servidor, necesitas editar el archivo principal de configuración del servidor de Palworld.

1. Inicia sesión en el panel web de ZAP-Hosting.
2. Abre la administración de tu servidor de juegos **Palworld**.
3. Navega a **Configs**.
4. Abre el archivo `PalWorldSettings.ini`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note Dónde Realizar Cambios
Las configuraciones relacionadas con el rendimiento están almacenadas en `PalWorldSettings.ini`. Debes editar manualmente los valores de las opciones existentes en este archivo.
:::

## Entiende las Configuraciones Relevantes

Varias configuraciones de Palworld afectan directamente el rendimiento del servidor. Algunos valores reducen la carga de CPU, memoria y simulación del mundo, mientras que otros ayudan a limitar la acumulación causada por jugadores inactivos o entidades excesivas en el mundo.

### Configuraciones Principales de Rendimiento

Las siguientes configuraciones son las más relevantes si quieres reducir caídas de rendimiento en un servidor ocupado.

| Configuración | Predeterminado | Cambio Recomendado | Efecto |
|---|---:|---|---|
| `BuildObjectDeteriorationDamageRate` | `1.0` | Mantener en `0.1` o más | Mayor deterioro ayuda a eliminar estructuras abandonadas más rápido |
| `bAutoResetGuildNoOnlinePlayers` | `False` | Poner en `True` si es apropiado | Elimina bases de gremios inactivos tras el período de gracia configurado |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Ajustar según necesidad | Define el tiempo de inactividad en horas antes del reinicio del gremio |
| `PalSpawnNumRate` | `1.0` | Disminuir | Genera menos Pals salvajes y reduce la carga de simulación |
| `DropItemMaxNum` | `3000` | Disminuir | Limita la cantidad de objetos caídos en el mundo |
| `DropItemAliveMaxHours` | `1.0` | Disminuir | Elimina objetos caídos más rápido |
| `BaseCampMaxNumInGuild` | `4` | Disminuir | Reduce el número de bases por gremio |
| `ServerReplicatePawnCullDistance` | `15000.0` | Disminuir | Reduce la distancia de sincronización de Pals y la carga de red/servidor |
| `BaseCampWorkerMaxNum` | `15` | Disminuir | Limita la cantidad de Pals trabajadores por base |
| `MaxBuildingLimitNum` | `0` | Establecer un valor | Limita el total de construcciones por jugador |
| `bEnableInvaderEnemy` | `True` | Poner en `False` | Desactiva enemigos invasores tipo raid y reduce la carga |
| `bEnableFastTravel` | `True` | Poner en `False` si es necesario | Puede reducir congelamientos causados por eventos de viaje rápido |
| `bIsPvP` | `False` | Mantener en `False` a menos que sea necesario | PvP puede aumentar la carga del servidor en entornos activos |

### Configuraciones Secundarias de Rendimiento

Estas configuraciones también pueden ayudar, especialmente en servidores públicos grandes.

| Configuración | Predeterminado | Cambio Recomendado | Efecto |
|---|---:|---|---|
| `BaseCampMaxNum` | `128` | Disminuir | Reduce el número total de bases permitidas en el servidor |
| `AutoSaveSpan` | `240` | Aumentar | Reduce la frecuencia con la que el servidor realiza guardados automáticos |

:::tip Cambios Conservadores Primero
Es mejor cambiar solo unos pocos valores a la vez y luego probar el comportamiento del servidor. Esto facilita identificar qué configuración mejoró el rendimiento y cuál afectó demasiado la jugabilidad.
:::

## Edita la Configuración

Palworld almacena las opciones del servidor en la sección `OptionSettings` dentro de `PalWorldSettings.ini`. Debes ajustar las entradas relevantes manualmente.

### Ejemplo de Configuración Optimizada

El siguiente ejemplo muestra una configuración conservadora enfocada en el rendimiento. Reemplaza solo los valores que realmente quieras usar para tu servidor.

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=0.800000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=False,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=2000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=64,BaseCampWorkerMaxNum=10,DropItemAliveMaxHours=0.500000,bAutoResetGuildNoOnlinePlayers=True,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=False,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,ServerReplicatePawnCullDistance=10000.000000,bEnableGuildPlayerSelect=False,BanListURL="https://api.palworldgame.com/api/banlist.txt",bAutoResetGuildNoOnlinePlayers=True,BaseCampMaxNumInGuild=3)
```

:::caution Verifica las Entradas Existentes
Los formatos de configuración de Palworld pueden cambiar entre actualizaciones. Antes de guardar, asegúrate de estar editando la línea `OptionSettings` ya presente en tu archivo en lugar de crear entradas duplicadas o conflictivas.
:::

### Ajustes Recomendados de Valores

Si no quieres reemplazar toda la línea, puedes editar solo los valores relevantes en tu configuración actual.

| Entrada | Valor de Ejemplo | Por qué Cambiarlo |
|---|---:|---|
| `PalSpawnNumRate` | `0.8` | Reduce la aparición de Pals salvajes |
| `DropItemMaxNum` | `2000` | Disminuye el desorden de objetos |
| `DropItemAliveMaxHours` | `0.5` | Elimina objetos caídos más rápido |
| `BaseCampMaxNum` | `64` | Reduce el total de bases |
| `BaseCampMaxNumInGuild` | `3` | Limita la expansión de bases de gremios |
| `BaseCampWorkerMaxNum` | `10` | Reduce la carga de trabajadores IA |
| `ServerReplicatePawnCullDistance` | `10000.0` | Disminuye la distancia de replicación |
| `bEnableInvaderEnemy` | `False` | Desactiva la carga relacionada con invasores |
| `bEnableFastTravel` | `False` | Evita congelamientos relacionados con viajes rápidos |
| `bAutoResetGuildNoOnlinePlayers` | `True` | Limpia bases de gremios inactivos |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Establece el período de gracia por inactividad |
| `MaxBuildingLimitNum` | `[tu_límite]` | Restringe construcciones excesivas |
| `bIsPvP` | `False` | Evita sobrecarga adicional por PvP |
| `AutoSaveSpan` | `[tu_valor]` | Reduce la frecuencia de guardados si tu formato actual lo soporta |

:::danger El Reinicio de Gremios Inactivos Elimina Bases
Si activas `bAutoResetGuildNoOnlinePlayers=True`, los gremios inactivos pueden disolverse automáticamente tras el tiempo configurado en `AutoResetGuildTimeNoOnlinePlayers`. Esto puede eliminar permanentemente bases y estructuras de jugadores inactivos.
:::

## Guarda y Aplica los Cambios

Después de editar el archivo, debes guardar la configuración y reiniciar el servidor para que se carguen los nuevos ajustes.

1. Guarda los cambios en `PalWorldSettings.ini`.
2. Regresa a la administración de tu servidor de juegos.
3. Reinicia el servidor de Palworld.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info Reinicio Requerido
Se requiere un reinicio después de cambiar `PalWorldSettings.ini`. Sin reiniciar, el servidor seguirá usando la configuración anterior.
:::

## Buenas Prácticas para el Rendimiento a Largo Plazo

Los cambios manuales en la configuración ayudan, pero son solo parte de la optimización general del servidor.

### Usa Reinicios Automáticos Diarios

Un reinicio diario es una práctica común para servidores de Palworld porque el uso de recursos puede acumularse con el tiempo.

- Crea un horario de reinicio automático en la administración de tu servidor ZAP-Hosting
- Elige un horario con poca actividad de jugadores
- Informa a tus jugadores con anticipación si tu comunidad es activa

### Limita el Crecimiento del Mundo

La causa principal de la disminución del rendimiento en servidores de Palworld que llevan mucho tiempo activos suele ser la complejidad del mundo.

Para reducir esto:

- baja los límites de bases
- reduce la cantidad de trabajadores
- disminuye la acumulación de objetos caídos
- reduce la aparición de Pals salvajes
- limpia cuidadosamente los gremios inactivos
- considera establecer un límite de construcciones con `MaxBuildingLimitNum`

### Prueba los Cambios Gradualmente

No apliques reducciones extremas de inmediato a menos que tu servidor ya sea inestable.

Un buen proceso es:

1. Baja primero los valores de aparición y objetos
2. Reduce luego los límites de bases y trabajadores
3. Desactiva funciones opcionales de alta carga si es necesario
4. Reinicia y monitorea el rendimiento después de cada ronda de cambios

:::tip Equilibra Rendimiento y Jugabilidad
Los mejores ajustes dependen del tipo de servidor. Un servidor privado pequeño suele poder mantener valores más altos, mientras que un servidor público grande a menudo necesita límites más estrictos para evitar caídas de rendimiento.
:::

## Conclusión

Felicitaciones, has optimizado con éxito el rendimiento de tu servidor de Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡que está disponible todos los días para ayudarte! 🙂