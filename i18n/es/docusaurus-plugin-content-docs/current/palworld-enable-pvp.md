---
id: palworld-enable-pvp
title: "Palworld: Activar PvP"
description: "Aprende cómo activar PvP en Palworld, configurar el comportamiento de combate base y aplicar las configuraciones recomendadas de PvP en tu servidor. -> Aprende más ahora"
sidebar_label: Palworld: Activar PvP
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld incluye un modo PvP que permite a los jugadores enfrentarse entre sí y cambia cómo funciona el combate base y la interacción de gremios en tu servidor. En esta guía, aprenderás a activar manualmente el PvP editando el archivo de configuración correcto en la administración del servidor de juegos de ZAP-Hosting y aplicando los ajustes necesarios.

:::caution Aviso de Función en Prueba
El PvP en Palworld es considerado una función en prueba por el desarrollador del juego. Las opciones de configuración y el comportamiento del juego pueden cambiar en futuras actualizaciones.
:::

## Preparación

Antes de comenzar, asegúrate de que:

- Tienes acceso a tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting
- Tu servidor está detenido actualmente o puede reiniciarse después de los cambios
- Entiendes que el PvP cambia significativamente la jugabilidad, especialmente en combate entre jugadores, defensa de bases y pérdida de objetos al morir

:::info Acceso a Configuración
Para servidores Palworld de ZAP-Hosting, el archivo de configuración relevante se puede acceder desde la administración del servidor de juegos en `Configs`.
:::

## Abre el Archivo de Configuración de Palworld

Para activar PvP, necesitas editar el archivo `PalWorldSettings.ini`.

### Encuentra el archivo en la interfaz de ZAP-Hosting

1. Inicia sesión en la interfaz web de ZAP-Hosting.
2. Abre tu servidor de juegos Palworld.
3. Navega a `Configs` en la administración del servidor de juegos.
4. Abre el archivo `PalWorldSettings.ini`.



:::note Formato de Configuración
Las configuraciones del servidor Palworld suelen estar dentro de la sección `OptionSettings=(...)` en `PalWorldSettings.ini`. Debes agregar o ajustar las claves necesarias dentro de ese bloque de configuración.
:::

## Activa las Configuraciones Requeridas para PvP

Para activar PvP, debes asegurarte de que las siguientes tres configuraciones estén en `True` dentro de `PalWorldSettings.ini`.

### Claves requeridas para PvP

| Configuración | Valor requerido | Descripción |
|---|---|---|
| `bIsPvP` | `True` | Activa el modo PvP en el servidor |
| `bEnablePlayerToPlayerDamage` | `True` | Permite daño directo entre jugadores |
| `bEnableDefenseOtherGuildPlayer` | `True` | Permite interacción defensiva con jugadores de otros gremios |

### Ejemplo de configuración

Agrega estos valores a tu línea `OptionSettings=(...)`, o cambia los valores existentes si ya están presentes:

```ini
bIsPvP=True,
bEnablePlayerToPlayerDamage=True,
bEnableDefenseOtherGuildPlayer=True
```

:::tip Evita Claves Duplicadas
Si una configuración ya existe en `PalWorldSettings.ini`, edita el valor existente en lugar de agregar la misma clave dos veces. Entradas duplicadas pueden causar comportamientos inesperados o dificultar la solución de problemas.
:::

## Configuraciones Recomendadas para PvP

Una vez activado el PvP, también puedes ajustar configuraciones adicionales para una experiencia PvP más equilibrada. Los siguientes valores son comúnmente recomendados para servidores enfocados en PvP.

### Valores sugeridos

| Configuración | Valor recomendado | Descripción |
|---|---|---|
| `bAllowEnhanceStat_Health` | `False` | Evita la asignación de puntos de vida (HP) |
| `bAllowEnhanceStat_Attack` | `False` | Evita la asignación de puntos de ataque |
| `bEnableFastTravel` | `True` | Mantiene activado el viaje rápido |
| `bEnableFastTravelOnlyBaseCamp` | `True` | Limita el viaje rápido solo a campamentos base |
| `bExistPlayerAfterLogout` | `True` | Mantiene a los jugadores en el mundo tras desconectarse |
| `bEnableAimAssistPad` | `False` | Desactiva la asistencia de puntería para controladores |
| `DeathPenalty` | `All` | Suelta todos los objetos y Pals al morir |
| `bCanPickupOtherGuildDeathPenaltyDrop` | `True` | Permite saquear objetos caídos de otros jugadores |
| `bInvisibleOtherGuildBaseCampAreaFX` | `False` | Muestra las áreas de bases de otros gremios |
| `bBuildAreaLimit` | `True` | Ayuda a prevenir construcción en áreas restringidas |
| `GuildPlayerMaxNum` | `4` | Limita el tamaño del gremio |
| `BaseCampMaxNumInGuild` | `2` | Limita la cantidad de bases por gremio |
| `MaxBuildingLimitNum` | `1000` | Limita estructuras por jugador |
| `GuildRejoinCooldownMinutes` | `60` | Establece el tiempo de espera para reingresar a un gremio |
| `BlockRespawnTime` | `5.0` | Establece el retraso para reaparecer en base |
| `RespawnPenaltyDurationThreshold` | `1800.0` | Tiempo antes de que la penalización de respawn se reinicie |
| `RespawnPenaltyTimeScale` | `2.0` | Multiplica la penalización de respawn tras muertes repetidas |

### Ejemplo de bloque de configuraciones PvP

Si quieres usar los valores recomendados, incluye las siguientes entradas en tu sección `OptionSettings=(...)`:

```ini
bAllowEnhanceStat_Health=False,
bAllowEnhanceStat_Attack=False,
bEnableFastTravel=True,
bEnableFastTravelOnlyBaseCamp=True,
bExistPlayerAfterLogout=True,
bEnableAimAssistPad=False,
DeathPenalty=All,
bCanPickupOtherGuildDeathPenaltyDrop=True,
bInvisibleOtherGuildBaseCampAreaFX=False,
bBuildAreaLimit=True,
GuildPlayerMaxNum=4,
BaseCampMaxNumInGuild=2,
MaxBuildingLimitNum=1000,
GuildRejoinCooldownMinutes=60,
BlockRespawnTime=5.0,
RespawnPenaltyDurationThreshold=1800.0,
RespawnPenaltyTimeScale=2.0
```

## Restricciones y Recompensas Opcionales de PvP

Dependiendo de qué tan competitivo quieras que sea tu servidor PvP, también puedes configurar restricciones tecnológicas y recompensas PvP.

### Restringir tecnologías de movimiento rápido

Puedes restringir ciertas tecnologías relacionadas con el movimiento configurando `DenyTechnologyList`.

| Configuración | Valor de ejemplo |
|---|---|
| `DenyTechnologyList` | `SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5` |

Ejemplo de entrada:

```ini
DenyTechnologyList="SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5"
```

:::note Verifica la Sintaxis Existente
El formato de configuración de Palworld puede variar según la versión actual del servidor y cómo esté estructurada la línea `OptionSettings=(...)`. Antes de guardar, asegúrate de que tu entrada coincida con el estilo de sintaxis ya usado en tu archivo.
:::

### Configurar recompensas PvP

Palworld también incluye opciones de recompensas relacionadas con PvP para muertes de jugadores.

| Configuración | Descripción |
|---|---|
| `bAdditionalDropItemWhenPlayerKillingInPvPMode` | Activa la caída adicional de objetos en muertes PvP |
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Define el ID del objeto a soltar |
| `AdditionalDropItemNumWhenPlayerKillingInPvPMode` | Establece la cantidad de objetos a soltar |
| `bDisplayPvPItemNumOnWorldMap_BaseCamp` | Muestra la cantidad de objetos PvP en el mapa mundial para bases |
| `bDisplayPvPItemNumOnWorldMap_Player` | Muestra la cantidad de objetos PvP en el mapa mundial para jugadores |

Ejemplo de configuración:

```ini
bAdditionalDropItemWhenPlayerKillingInPvPMode=True,
AdditionalDropItemWhenPlayerKillingInPvPMode=PlayerDropItem,
AdditionalDropItemNumWhenPlayerKillingInPvPMode=1,
bDisplayPvPItemNumOnWorldMap_BaseCamp=True,
bDisplayPvPItemNumOnWorldMap_Player=True
```

:::caution Compatibilidad del ID de Objeto
Si usas un valor personalizado para `AdditionalDropItemWhenPlayerKillingInPvPMode`, asegúrate de que el ID del objeto sea válido para tu versión actual de Palworld. Identificadores inválidos pueden hacer que la configuración falle o sea ignorada.
:::

## Qué Cambia Cuando PvP Está Activado

Después de activar PvP, la jugabilidad en tu servidor cambia en varios aspectos importantes. Según la guía pública actual de PvP de Palworld, puedes esperar generalmente el siguiente comportamiento:

- Los jugadores pueden dañarse entre sí
- Entrar en la base de otro jugador puede hacer que los Pals de esa base se vuelvan hostiles
- Los jugadores voladores y Pals montados pueden recibir más daño
- Los Pals invocados y Pals base pueden recibir menos daño
- Los jugadores pueden acceder a cofres de otros gremios
- El daño de armas cuerpo a cuerpo contra estructuras de otros jugadores puede reducirse
- Los Pals base pueden defender un área más amplia
- La distancia permitida entre bases vecinas puede aumentar
- Los jugadores pueden recibir notificaciones cuando su base está bajo ataque
- La construcción y reparación puede estar restringida durante un ataque a la base
- Algunas armas pueden tener rango o daño modificado en modo PvP

:::danger Advertencia de Impacto en la Jugabilidad
Activar PvP puede cambiar significativamente la progresión, seguridad de bases y retención de jugadores en tu servidor. Si tienes un servidor público, se recomienda informar a tus jugadores antes de aplicar estos cambios.
:::

## Guarda el Archivo y Reinicia el Servidor

Después de terminar de editar `PalWorldSettings.ini`, guarda el archivo en el área `Configs` de ZAP-Hosting.

### Aplica los cambios

Para activar las nuevas configuraciones PvP:

1. Guarda los cambios en `PalWorldSettings.ini`.
2. Reinicia tu servidor Palworld desde la administración del servidor de juegos de ZAP-Hosting.

Es necesario un reinicio para que los cambios de configuración tengan efecto.

:::info No se Requiere Comando Adicional
Normalmente no se requiere ningún comando extra en el juego o consola después de editar `PalWorldSettings.ini`. El paso necesario es un reinicio completo del servidor para aplicar la nueva configuración PvP.
:::

## Verifica que PvP Está Activo

Después de reiniciar el servidor, únete y prueba el comportamiento en el juego.

### Comprobaciones básicas

Puedes verificar la configuración comprobando si:

- Los jugadores pueden dañarse entre sí
- El comportamiento base relacionado con PvP está activo
- Las penalizaciones por muerte y reglas de saqueo coinciden con tus valores configurados
- Restricciones opcionales como `DenyTechnologyList` funcionan como esperas

Si los cambios no se aplican, vuelve a abrir `PalWorldSettings.ini` y revisa:

- Nombres de configuraciones mal escritos
- Claves duplicadas
- Comas o formato incorrecto dentro de `OptionSettings=(...)`
- Valores que no se guardaron correctamente antes del reinicio

## Conclusión

Felicidades, has activado exitosamente el PvP en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂