---
id: ark-configuration
title: "ARK: Configuración del servidor"
description: "Descubre cómo optimizar la configuración de tu servidor de juegos ARK para una mejor experiencia y personalización → Aprende más ahora"
sidebar_label: Configuración del Servidor
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Configuración del Servidor

La configuración de un **servidor de juegos ARK** puede generar confusión y sensación de impotencia en algunas personas. Pero hay una razón para ello. ARK ofrece muchas opciones de configuración para el juego. Además, la configuración se realiza en diferentes archivos, donde también debes prestar atención a qué comandos pertenecen a cada archivo. En esta guía queremos darte una mejor visión general de cómo funciona la configuración de un servidor de juegos ARK.

![](https://screensaver01.zap-hosting.com/index.php/s/oQ5BbazkfD3PjgK/preview)

<InlineVoucher />

## Diferencias entre archivos de configuración

La configuración del **servidor de juegos ARK** se realiza a través de los archivos de configuración **GameUserSettings.ini** y **Game.ini**. Puedes modificarlos ya sea mediante nuestro **panel web** en **Configs** o vía **FTP**.

| Archivo de configuración | Panel web                                                  | FTP                                     |
| ----------------------- | ---------------------------------------------------------- | --------------------------------------- |
| GameUserSettings.ini    | `Administración del servidor -> Configs -> GameUserSettings.ini` | `ShooterGame/Saved/Config/LinuxServer/` |
| Game.ini                | `Administración del servidor -> Configs -> Game.ini`       | `ShooterGame/Saved/Config/LinuxServer/` |

El archivo de configuración **GameUserSettings.ini** contiene opciones tanto para el cliente del juego como para el servidor. Las opciones para el cliente no son usadas por el servidor. Las opciones del servidor se especifican en la sección **[ServerSettings]**, que normalmente está al final del archivo. Para modificaciones avanzadas, como cambiar puntos de engrama o XP por nivel, desactivar cierto contenido o personalizar gustos de los jugadores, se usa el archivo de configuración **Game.ini**.

## Configuración

A continuación explicamos los dos archivos de configuración. Te mostraremos los comandos más comunes y cómo funcionan.

## Configuración: Mapa

ARK ofrece diferentes mapas para jugar en el servidor. Puedes elegir el mapa que quieras en el panel web, en la sección de ajustes.

| Mapas          | Fecha de lanzamiento | Nombre del comando  |
| -------------- | -------------------- | ------------------- |
| The Island     | 02.06.2015           | `TheIsland`         |
| The Center     | 17.05.2016           | `TheCenter`         |
| Scorched Earth | 01.09.2016           | `ScorchedEarth_P`   |
| Ragnarok       | 12.06.2017           | `Ragnarok`          |
| Aberration     | 12.12.2017           | `Aberration_P`      |
| Extinction     | 06.11.2018           | `Extinction`        |
| Valguero       | 18.06.2019           | `Valguero_P`        |
| Genesis        | 25.02.2020           | `Genesis`           |
| Crystal Isles  | 11.06.2020           | `CrystalIsles`      |

Simplemente introduce el nombre del comando del mapa en el campo **Map** y se cargará la próxima vez que inicies tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/93JNW5Hbpf35RTJ/preview)

## Configuración: GameUserSettings.ini

### [ServerSettings]

**allowThirdPersonPlayer**

Este comando define si se debe activar la perspectiva en tercera persona o no.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   |         0         |       0/1        |

**AllowCaveBuildingPvE**

Este comando define si se permite construir estructuras en cuevas (cuando el modo PVE está activo) o no.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   |         0         |       0/1        |

**alwaysNotifyPlayerJoined**

Este comando define si los jugadores reciben una notificación cuando alguien entra al servidor.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   |         0         |       0/1        |

**alwaysNotifyPlayerLeft**

Este comando define si los jugadores reciben una notificación cuando alguien sale del servidor.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   |         0         |       0/1        |

**bAllowFlyerCarryPvE**

Este comando define si los jugadores pueden transportar dinosaurios con un dinosaurio volador o no.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   |         0         |       0/1        |

**bDisableStructureDecayPvE**

Este comando desactiva la degradación progresiva de las construcciones de los jugadores.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   |         0         |       0/1        |

**DayCycleSpeedScale**

Este comando define el factor de escala para el paso del tiempo en ARK y controla la frecuencia con la que el día se convierte en noche y viceversa. El valor por defecto 1 ofrece la misma velocidad de ciclo que en modo un jugador (y en los servidores oficiales). Valores menores a 1 ralentizan el ciclo, valores mayores lo aceleran. 1 minuto en tiempo real equivale a unos 28 minutos en el juego. Para un ciclo día/noche aproximado de 24 horas en el juego, se debería usar el valor 0.035.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**DayTimeSpeedScale**

Este comando define el factor de escala para el paso del tiempo durante el día en ARK. Determina la duración relativa del día respecto a la noche (controlada por NightTimeSpeedScale). Disminuir este valor alarga el día.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**NightTimeSpeedScale**

Este comando define el factor de escala para el paso del tiempo durante la noche en ARK. Determina la duración relativa de la noche respecto al día (controlada por DayTimeSpeedScale). Disminuir este valor alarga la noche.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**DinoCharacterFoodDrainMultiplier**

Este comando define el consumo de comida de un dinosaurio. Un valor más alto aumenta el consumo (los dinos tienen más hambre). También afecta los tiempos de domesticación.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**DinoCharacterHealthRecoveryMultiplier**

Este comando define la regeneración de salud de un dinosaurio. Un valor más alto acelera la regeneración, uno más bajo la ralentiza.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**DinoCharacterStaminaDrainMultiplier**

Este comando define qué tan rápido se cansa un dinosaurio. Un valor más alto acelera el cansancio, uno más bajo lo ralentiza.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**DinoCountMultiplier**

Este comando define cuántos dinosaurios deberían aparecer. Un valor más alto aumenta la probabilidad de spawn y uno más bajo la reduce.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**DinoDamageMultiplier**

Este comando define cuánto daño hace un dinosaurio. Un valor más alto aumenta el daño, uno más bajo lo reduce.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**DinoResistanceMultiplier**

Este comando define la resistencia de un dinosaurio. Un valor más alto aumenta la resistencia.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**globalVoiceChat**

Este comando define si el chat de voz global debe estar activado en el servidor o no.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   |         0         |       0/1        |

**HarvestAmountMultiplier**

Este comando define la cantidad de recursos que se obtienen al recolectar. Un valor más alto significa más recursos, uno más bajo menos.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**HarvestHealthMultiplier**

Este comando define la salud de los recursos que pueden ser recolectados. Valores más altos aumentan la cantidad de materiales obtenidos por golpe.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**noTributeDownloads**

Este comando permite prohibir la descarga de personajes del juego desde el servidor.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**PreventDownloadSurvivors**

Este comando permite evitar la descarga de personajes supervivientes desde el servidor.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**PreventDownloadItems**

Este comando permite evitar la descarga de ítems desde el servidor.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**PreventDownloadDinos**

Este comando permite evitar la descarga de dinosaurios desde el servidor.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**PlayerCharacterFoodDrainMultiplier**

Este comando define qué tan rápido un jugador tiene hambre. Aumentar el valor hace que el jugador tenga hambre más rápido, disminuirlo lo hace más lento. Un valor de 2.0 duplica el valor por defecto, 0.5 lo reduce a la mitad.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**PlayerCharacterHealthRecoveryMultiplier**

Este comando define qué tan rápido un jugador se cura. Aumentar el valor acelera la curación, disminuirlo la ralentiza. Un valor de 2.0 duplica el valor por defecto, 0.5 lo reduce a la mitad.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**PlayerCharacterStaminaDrainMultiplier**

Este comando define qué tan rápido se cansa un jugador. Aumentar el valor acelera el cansancio, disminuirlo lo ralentiza. Un valor de 2.0 duplica el valor por defecto, 0.5 lo reduce a la mitad.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**PlayerCharacterWaterDrainMultiplier**

Este comando define qué tan rápido un jugador tiene sed. Aumentar el valor hace que el jugador tenga sed más rápido, disminuirlo más lento. Un valor de 2.0 duplica el valor por defecto, 0.5 lo reduce a la mitad.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**PlayerDamageMultiplier**

Este comando define cuánto daño hace un jugador. Aumentar el valor aumenta el daño, disminuirlo lo reduce. Un valor de 2.0 duplica el valor por defecto, 0.5 lo reduce a la mitad.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**PlayerResistanceMultiplier**

Este comando define la resistencia de un jugador. Aumentar el valor aumenta la resistencia, disminuirlo la reduce. Un valor de 2.0 duplica el valor por defecto, 0.5 lo reduce a la mitad.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**proximityChat**

Este comando define si el chat local en el servidor debe estar activado o no.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 0 (Desactivado)   |       0/1        |

**ResourceNoReplenishRadiusPlayers**

Este comando define la distancia entre jugadores y recursos en la que no deben regenerarse más recursos. Aumentar el valor aumenta el radio, disminuirlo lo reduce. Un valor de 2.0 duplica el valor por defecto, 0.5 lo reduce a la mitad.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**ResourceNoReplenishRadiusStructures**

Este comando define la distancia entre estructuras y recursos en la que no deben regenerarse más recursos. Aumentar el valor aumenta el radio, disminuirlo lo reduce. Un valor de 2.0 duplica el valor por defecto, 0.5 lo reduce a la mitad.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**ResourcesRespawnPeriodMultiplier**

Este comando define el multiplicador para el tiempo de reaparición de recursos. Aumentar el valor alarga el tiempo, disminuirlo lo reduce. Un valor de 2.0 duplica el valor por defecto, 0.5 lo reduce a la mitad.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**ServerAdminPassword**

Este comando define la contraseña para iniciar sesión como administrador. Más info en nuestra guía: [Convertirse en admin](ark-becomeadmin.md)

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    String    |       N/A         |    Cualquiera    |

**ServerCrosshair**

Este comando define si se debe mostrar una mira al jugador o no.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 0 (desactivado)   |       0/1        |

**serverForceNoHud**

Este comando define si se deben mostrar los controles en pantalla al jugador o no.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 0 (desactivado)   |       0/1        |

**serverHardcore**

Este comando define si se activa el modo hardcore (si un jugador muere, debe empezar desde cero) o no.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 0 (desactivado)   |       0/1        |

**ServerPassword**

Este comando establece la contraseña para acceder al servidor. Si solo ciertas personas deben tener acceso, puedes poner una contraseña. Por defecto está desactivado y se activa al poner una contraseña.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    String    |       N/A         |    Cualquiera    |

**serverPVE**

Este comando define si el PVP está activado en el servidor o no. Si está desactivado, solo es posible PVE.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 0 (desactivado)   |       0/1        |

**ShowMapPlayerLocation**

Este comando define si los jugadores deben mostrarse en el mapa con marcadores o no. - [Ejemplo](https://screensaver01.zap-hosting.com/index.php/s/XgKByRZpzgqCZif/preview)

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 0 (desactivado)   |       0/1        |

**StructureDamageMultiplier**

Este comando define cuánta resistencia tiene una estructura. Aumentar el valor aumenta la resistencia, disminuirlo la reduce. Un valor de 2.0 duplica el valor por defecto, 0.5 lo reduce a la mitad.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**StructureResistanceMultiplier**

Este comando define cuánto daño recibe una estructura cuando es atacada. Aumentar el valor causa más daño, disminuirlo menos daño. Un valor de 2.0 duplica el valor por defecto, 0.5 lo reduce a la mitad.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**TamedDinoDamageMultiplier**

Este comando define el daño que hace un dino domesticado al atacar. Aumentar el valor causa más daño, disminuirlo menos daño. Un valor de 2.0 duplica el valor por defecto, 0.5 lo reduce a la mitad.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**TamedDinoResistanceMultiplier**

Este comando define la resistencia de un dinosaurio domesticado. Aumentar el valor aumenta la resistencia, disminuirlo la reduce. Un valor de 2.0 duplica el valor por defecto, 0.5 lo reduce a la mitad.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**TamingSpeedMultiplier**

Este comando define la velocidad de domesticación. Aumentar el valor acelera la domesticación, disminuirlo la ralentiza. Un valor de 2.0 duplica el valor por defecto, 0.5 lo reduce a la mitad.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**XPMultiplier**

Este comando define los puntos de experiencia que recibe un jugador. Aumentar el valor da más XP, disminuirlo menos XP. Un valor de 2.0 duplica el valor por defecto, 0.5 lo reduce a la mitad.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**EnablePVPGamma**

Este comando define si se permite el uso de gamma en un servidor PVP o no.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 0 (desactivado)   |       0/1        |

**EnablePVEGamma**

Este comando define si se permite el uso de gamma en un servidor PVE o no.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 0 (Desactivado)   |       0/1        |

**SpectatorPassword**

Este comando define la contraseña que debe ingresar un no-admin para entrar en modo espectador.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    String    |       N/A         |    Cualquiera    |

**DifficultyOffset**

Este comando define el nivel de dificultad del servidor. Para calcular el nivel máximo de criatura para un valor de dificultad dado, multiplica por 30 (funciona porque el nivel máximo escala linealmente con la dificultad, y un valor de 1.0 da nivel máximo 30). Para calcular un offset de dificultad para un nivel máximo, usa esta expresión:

```
DifficultyOffset = (Maximum Creature Level / 30 - 0.5) / (Official Difficulty - 0.5)
```

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    String    |      0.50000      |    Cualquiera    |

**PvEStructureDecayPeriodMultiplier**

Este comando define el período de tiempo en el que las construcciones comienzan a degradarse. Aumentar el valor alarga el tiempo de degradación, disminuirlo lo reduce. Un valor de 2.0 duplica el valor por defecto, 0.5 lo reduce a la mitad.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**PvEStructureDecayDestructionPeriod**

Este comando define cuándo las estructuras pueden ser destruidas por otros jugadores en un servidor PVE. Aumentar el valor alarga el tiempo de espera, disminuirlo lo reduce. Un valor de 2.0 duplica el valor por defecto, 0.5 lo reduce a la mitad.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**PvPStructureDecay**

Este comando define si se activa o desactiva la degradación automática de construcciones en un servidor PVP.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   |         0         |       0/1        |

**DisableDinoDecayPvE**

Este comando desactiva (true) o activa (false) el des-reclamo automático de dinos.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 0 (Desactivado)   |       0/1        |

**PvEDinoDecayPeriodMultiplier**

Este comando define el multiplicador para la velocidad hasta que un dino es des-reclamado (más alto = más rápido, más bajo = más lento).

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**AdminLogging**

Este comando activa la salida de comandos de cheat de admin en el chat si un admin los usa en el juego.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 0 (Desactivado)   |       0/1        |

**MaxTamedDinos**

Este comando define el máximo número de dinosaurios domesticables en la isla.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Entero     |       8300        |        ∞         |

**MaxNumbersofPlayersInTribe**

Este comando define el máximo número de jugadores por tribu.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Entero     |         2         |        ∞         |

**KickIdlePlayersPeriod**

Este comando define el tiempo hasta que un jugador inactivo es expulsado del servidor.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Entero     | 1800 (segundos)   |        ∞         |

**PerPlatformMaxStructuresMultiplier**

Este comando define el multiplicador para estructuras en plataformas de silla. Úsalo con precaución, valores muy altos pueden causar problemas de rendimiento.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |      1.00000      |        ∞         |

**StructureDamageRepairCooldown**

Este comando define el tiempo antes de que una estructura dañada pueda ser reparada nuevamente. (0 permite reparar sin espera)

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Entero     |        180        |        ∞         |

**bForceAllStructureLocking**

Este comando define si todos los tipos de contenedores pueden ser bloqueables.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   |         1         |       0/1        |

**bUseVSync**

Este comando define si se debe activar VSync o no (puede minimizar problemas con algunas tarjetas gráficas).

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   |         0         |       0/1        |

**MaxPlatformSaddleStructureLimit**

Este comando define el número máximo de estructuras sobre la plataforma de la silla.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Entero     |        100        |        ∞         |

**RCONPort**

Este comando define el puerto RCON para iniciar sesión vía consola RCON.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Entero     |        100        |        ∞         |

**AutoSavePeriodMinutes**

Este comando define el intervalo (en minutos) para que el servidor guarde automáticamente.

:::info
Este valor está fijado en 30 minutos y no puede cambiarse.
:::

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Entero     |         30        |        ∞         |

**RCONServerGameLogBuffer**

Este comando define cuántas líneas de chat se listan en herramientas RCON.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Entero     |        600        |        ∞         |

**PreventOfflinePvPInterval**

Este comando define cuántos segundos debe estar desconectado un jugador para ser marcado como desconectado real.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Entero     | 60 (segundos)     |        ∞         |

**bPvPDinoDecay**

Este comando define si los dinosaurios de la tribu/jugador están protegidos en la protección offline activada.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   |         1         |       0/1        |

**bPvPStructureDecay**

Este comando define si las estructuras de la tribu/jugador están protegidas cuando la protección offline está activada.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   |         1         |       0/1        |

**DisableImprintDinoBuff**

Este comando define si se desactiva el bono adicional que obtienes como jugador si criaste un bebé dino tú mismo.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   |         1         |       0/1        |

**AllowAnyoneBabyImprintCuddle**

Este comando define si cualquier jugador puede acariciar a los bebés dinosaurios.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   |         1         |       0/1        |

**OverrideOfficialDifficulty**

Este comando sobrescribe el nivel de dificultad oficial.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Entero     |         1         |       0/1        |

**TheMaxStructuresInRange**

Este comando define el número máximo permitido de estructuras en un rango cercano.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Entero     |       10500       |        ∞         |

**PvEAllowStructuresAtSupplyDrops**

Este comando define si se permite construir estructuras cerca de cajas de suministros.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 0 (Desactivado)   |       0/1        |

**AutoDestroyDecayedDinos**

Este comando define si los dinos deben ser destruidos directamente en lugar de volverse reclamables.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 0 (Desactivado)   |       0/1        |

**ClampItemSpoilingTimes**

Este comando define que todos los tiempos de caducidad de los ítems se ajusten al máximo permitido.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 0 (Desactivado)   |       0/1        |

**AllowCrateSpawnsOnTopOfStructures**

Este comando define si las cajas de suministros pueden caer sobre estructuras.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 0 (Desactivado)   |       0/1        |

**PreventOfflinePvP**

Este comando define si la "Protección contra raids offline" debe estar activada en servidores PVE/PVP o no.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 1 (Activado)      |       0/1        |

**AllowMultipleAttachedC4**

Este comando permite colocar múltiples explosivos C4 en dinosaurios.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 1 (Activado)      |       0/1        |

**bPvEDisableFriendlyFire**

Este comando define si el fuego amigo está desactivado en PVE o no.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 1 (Activado)      |       0/1        |

**ServerAutoForceRespawnWildDinosInterval**

Este comando define el tiempo en segundos hasta que se fuerza el respawn de todos los dinos salvajes. Por ejemplo, 86400 significa respawn forzado después de un día.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Entero     |       86400       |       0/1        |

**DisableWeatherFog**

Este comando define si la niebla en el mapa debe estar activada o desactivada.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Booleano   | 0 (Activado)      |       0/1        |

### **[/script/engine.gamesession]**

**MaxPlayers**

Este comando define cuántos jugadores pueden jugar simultáneamente en el servidor.

| Tipo de dato |                  Valor por defecto                   | Rango de valores |
| :----------: | :-------------------------------------------------: | :--------------: |
|    Float     | Depende de la selección de slots al ordenar (Slots fijos) |     10-130      |

### **[SessionSettings]**

**SessionName**

Este comando establece el nombre del servidor que se mostrará en el navegador de servidores, juego, etc.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |    ARK #XXXXXX    |        ∞         |

### **[MessageOfTheDay]**

**Duration**

Este comando define cuánto tiempo se muestra el mensaje de bienvenida tras conectarse.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|   Entero     |      1.00000      |       X-X        |

**Message**

Este comando define el mensaje de bienvenida que se muestra al conectar al servidor.

| Tipo de dato | Valor por defecto | Rango de valores |
| :----------: | :---------------: | :--------------: |
|    Float     |       "..."       |        /         |

## Configuración: Game.ini

Como se mencionó antes, modificaciones más extensas se hacen vía Game.ini. Esto incluye, por ejemplo, cambiar puntos de engrama o XP por nivel.

### Límite de nivel

Hay una forma de aumentar el nivel máximo que pueden alcanzar jugadores y dinosaurios. Para ello se usa la función `LevelExperienceRampOverrides`, implementada desde la versión v194. Más info y ejemplos en el foro de Steam: [Extended Game Options: How to Configure your Custom ARK server](https://steamcommunity.com/app/346110/discussions/10/530646715633129364/).

El comando se aplica dos veces: la primera para el nivel del jugador y la segunda para el nivel del dinosaurio. La sintaxis es:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=(
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>)
```

Los corchetes definen los niveles (**LEVELVALUE**) y tras el igual la cantidad de XP (**Points**) necesaria para alcanzar ese nivel.

Por ejemplo, para un límite de 500 niveles:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=( 
ExperiencePointsForLevel[0]=100, 
ExperiencePointsForLevel[1]=200, 
ExperiencePointsForLevel[2]=300, 
ExperiencePointsForLevel[3]=400, 
ExperiencePointsForLevel[4]=500, 
ExperiencePointsForLevel[5]=600,
... // Acortado para ilustración
ExperiencePointsForLevel[499]=50000)
```

### Puntos de Engrama

Con cada **subida de nivel** recibes **puntos de engrama**. La cantidad de puntos por nivel puede cambiarse desde la versión v193. La sintaxis es:

```
OverridePlayerLevelEngramPoints=
```

Debes añadir una línea por cada nivel. Por ejemplo, para 10 niveles y 5 puntos de engrama adicionales por nivel:

```
OverridePlayerLevelEngramPoints=5
OverridePlayerLevelEngramPoints=10
OverridePlayerLevelEngramPoints=15
OverridePlayerLevelEngramPoints=20
OverridePlayerLevelEngramPoints=25
OverridePlayerLevelEngramPoints=30
OverridePlayerLevelEngramPoints=35
OverridePlayerLevelEngramPoints=40
OverridePlayerLevelEngramPoints=45
OverridePlayerLevelEngramPoints=50
```

El número de líneas depende del límite de nivel definido.

:::info
ARK es un juego que evoluciona rápido y por eso incluye muchos cambios frecuentes. Esto también afecta la configuración del servidor. Por eso recomendamos echar un vistazo a la documentación oficial para info más detallada: https://ark.fandom.com/wiki/Server_configuration
:::

<InlineVoucher />