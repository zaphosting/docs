---
id: valheim-plus
title: "Valheim: Servidor Valheim Plus"
description: "Descubre cómo mejorar la experiencia de Valheim con Valheim Plus para funciones mejoradas y upgrades en tu servidor → Aprende más ahora"
sidebar_label: Valheim Plus
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

:::info
Valheim Plus es una modificación del lado del cliente. Te permite hacer cambios en el juego básico.
:::

<InlineVoucher />

## Instalación del Cliente Valheim Plus

Primero tienes que abrir la carpeta de Valheim en tu PC.  
Para hacerlo, haz clic derecho en Valheim en la biblioteca de Steam, selecciona "***Administrar***" en las opciones y luego "***Explorar archivos locales***".

![](https://screensaver01.zap-hosting.com/index.php/s/oXaiLGR55Z9fH92/preview)

Una vez abierta esta carpeta, tienes que descargar el archivo "***WindowsClient.zip***".  
El "***WindowsClient.zip***" se puede descargar [aquí](https://github.com/valheimPlus/ValheimPlus/releases) (ve a "Assets").

![](https://screensaver01.zap-hosting.com/index.php/s/ZDsabTk4eMfQcFM/preview)

Después, el contenido del "***WindowsClient.zip***" debe descomprimirse en la carpeta del servidor Valheim que abriste antes.

![](https://screensaver01.zap-hosting.com/index.php/s/wiTfFmLetr9TmJX/preview)

Luego puedes iniciar Valheim y la configuración del cliente estará lista.

## Instalación del Servidor Valheim Plus

Para modificar el juego primero abrimos la pestaña de juegos en nuestro servidor:

![](https://screensaver01.zap-hosting.com/index.php/s/YE2xKnqfrZfWE4J/preview)

Aquí buscamos Valheim Plus en "Juegos disponibles" y hacemos clic en el botón de descarga:

![](https://screensaver01.zap-hosting.com/index.php/s/GF6Na4EPGiNQSDZ/preview)

Después el servidor se reinstalará. Cuando termine la reinstalación, podrás quitar la contraseña en "**Configs**" y ahora puedes hacer un upgrade para más slots.

## Upgrade de Slots

Para poder hacer un upgrade de slots, tienes que abrir la función "**UP and Downgrade**" en el panel del servidor de juegos.

![](https://screensaver01.zap-hosting.com/index.php/s/SpAxfojkxY5wmsE/preview)

Ahora selecciona la cantidad deseada de slots en la página de UP and Downgrade.

:::info
Aquí solo tienes que pagar el "**recargo**", que se calcula por el tiempo restante de tu contrato.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/jyZGRaKAZ7n5GkR/preview)

Para completar el upgrade, selecciona el método de pago en la parte inferior de la página.  
Una vez seleccionado, pulsa el botón "***Realizar upgrade***" y el upgrade se ejecutará.

![](https://screensaver01.zap-hosting.com/index.php/s/3eB9FtgLzxBpPgB/preview)

## Configuración de Valheim Plus

Para abrir el archivo de configuración tienes que ir a la página "**Configs**" en la interfaz del servidor de juegos, donde verás el archivo "*ValheimPlus: valheim_plus.cfg*".  
Puedes abrirlo haciendo clic en el icono azul que está al lado del archivo de configuración.

![](https://screensaver01.zap-hosting.com/index.php/s/grjGPr64RSs69xN/preview)

Aquí tienes una lista de todos los comandos que puedes usar en el archivo de configuración:

### [Player]

| Comando | Valores | Función |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | activa o desactiva cambios en el jugador |
| baseMegingjordBuff | 150 (float) | aumenta el peso que puedes cargar en 150 |
| baseMaximumWeight | 300 (float) | establece el peso máximo en 300 |
| baseAutoPickUpRange | 2 (float) | establece el rango para recoger objetos en 2 |
| disableCameraShake | true / false | activa o desactiva el movimiento de cámara |
| experienceGainedNotifications | true / false | activa o desactiva la notificación de experiencia ganada en la esquina superior izquierda |

### [Food]

| Comando | Valores | Función |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | activa o desactiva cambios en la comida |
| foodDuration | 0-100% | cambia la duración de la comida según el porcentaje establecido |

### [Fermenter]

| Comando | Valores | Función |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | activa o desactiva cambios en el fermentador |
| fermenterDuration | 2400 (float) equivale a 48 horas en el juego | establece el tiempo de producción en el fermentador, mientras más bajo el valor, más rápida la producción |
| fermenterItemsProduced | 6 (integer) | establece los ítems que se pueden producir en el fermentador |

### [Furnace]

| Comando | Valores | Función |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | activa o desactiva cambios en el horno |
| maximumOre | 10 (integer) | establece la cantidad máxima de mineral en el horno |
| maximumCoal | 20 (integer) | establece la cantidad máxima de carbón en el horno |
| productionSpeed | 30 (float) | establece el tiempo de producción en el horno, mientras más bajo el valor, más rápida la producción |
| coalUsedPerProduct | 2 (integer) | establece la cantidad de carbón usado por producto |

### [Kiln]

| Comando | Valores | Función |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | activa o desactiva cambios en el horno de leña |
| productionSpeed | 15 (float) | establece el tiempo de producción en el horno de leña, mientras más bajo el valor, más rápida la producción |
| maximumWood | 25 (integer) | establece la cantidad máxima de madera en el horno de leña |

### [Items]

| Comando | Valores | Función |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | activa o desactiva cambios en los ítems |
| noTeleportPrevention | true / false | previene el uso de teletransporte |
| baseItemWeight | 0 (float) | establece el peso de los ítems, -50% = menos peso, +50% = más peso |
| itemStackMultiplier | 0 (float) | establece la cantidad máxima de ítems apilables, solo valores positivos. 50 = 50% más ítems apilables. *cuidado* si reduces esto, todo lo que tengas de más será borrado |

### [Building]

| Comando | Valores | Función |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | activa o desactiva cambios en la construcción |
| noInvalidPlacementRestriction | true / false | elimina la restricción de *colocación inválida* |
| noWeatherDamage | true / false | elimina el daño a construcciones causado por el clima (ej. lluvia) |
| maximumPlacementDistance | 5 (float) | establece la distancia máxima para colocar objetos |

### [Beehive]

| Comando | Valores | Función |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | activa o desactiva cambios en la colmena |
| maximumHoneyPerBeehive | 4 (integer) | establece la cantidad máxima de miel por colmena |
| honeyProductionSpeed | 1200 (float) equivale a 24 horas en el juego | establece el tiempo de producción de miel, mientras más bajo el valor, más rápida la producción |

### [Server]

| Comando | Valores | Función |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | activa o desactiva cambios en el servidor |
| maxPlayers | 10 (int) | establece los slots, se ajusta según el valor ordenado en UP- y Downgrades |
| disableServerPassword | true / false | elimina la contraseña del servidor |
| enforceConfiguration | true / false | si está activado, solo jugadores con la misma configuración pueden unirse al servidor |
| enforceMod | true / false | si está activado, solo jugadores con el mismo mod pueden unirse al servidor |

### [Map]

| Comando | Valores | Función |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | activa o desactiva cambios en el mapa |
| exploreRadius | 100 (float) | establece el radio alrededor de cada jugador en el que el mapa se descubre |
| shareMapProgression | true / false | si está activado, el descubrimiento del mapa se comparte entre todos los jugadores, solo los jugadores visibles contribuyen |

### [Hotkeys]

Una lista de controles posibles está [aquí](https://docs.unity3d.com/ScriptReference/KeyCode.html).

| Comando | Valores | Función |
| :--------: | :--------------------------: | :---------------------------------:  |
| rollForwards | F9 | rodar hacia adelante |
| rollBackwards | F10 | rodar hacia atrás |
| enterAdvancedBuildingMode | F1 | congela objetos y permite usar controles avanzados |
| exitAdvancedBuildingMode | F3 | detiene el modo avanzado y descongela objetos |
| enterAdvancedEditingMode | Keypad0 | selecciona y modifica el objeto visto con AEM |
| confirmPlacementOfAdvancedEditingMode | KeypadEnter | confirma los cambios de todos los objetos seleccionados y modificados |
| resetAdvancedEditingMode | F7 | resetea la posición y rotación de los objetos seleccionados con AEM |
| abortAndExitAdvancedEditingMode | F8 | resetea la posición y rotación de los objetos seleccionados con AEM y sale del modo AEM |

### [AdvancedBuildingMode]

| Comando | Valores | Función |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | activa o desactiva cambios en el modo de construcción avanzado |

### [AdvancedEditingMode]

| comando | valores | función |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | activa o desactiva cambios en el modo de edición avanzado |

### [Stamina]

| comando | valores | función |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | activa o desactiva cambios en la stamina |
| dodgeStaminaUsage | 10 (float) | establece la cantidad de stamina usada para esquivar |
| encumberedStaminaDrain | 10 (float) | establece la cantidad de stamina que se gasta cuando estás cargado |
| sneakStaminaDrain | 5 (float) | establece la cantidad de stamina que se gasta al sigilo |
| runStaminaDrain | 10 (float) | establece la cantidad de stamina que se gasta al correr |
| staminaRainDelay | 1 (float) | establece el retraso para regenerar stamina |
| staminaRain | 5 (float) | establece la cantidad de stamina que se regenera |
| swimStaminaDrain | 5 (float) | establece la cantidad de stamina que se gasta al nadar |
| jumpStaminaUsage | 10 (float) | establece la cantidad de stamina que se gasta al saltar |


<InlineVoucher />