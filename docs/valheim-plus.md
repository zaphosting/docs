---
id: valheim-plus
title: Valheim Plus Server
description: Information about Valheim-Servers from ZAP-Hosting, on which the Valheim Plus Mod is preinstalled - ZAP-Hosting.com documentation
sidebar_label: Valheim Plus
---

## Introduction

:::info
Valheim Plus is a client sided moficiation. It allows you to do changes on the basic game.
:::

## Valheim Plus Installation Client

First you have to open the Valheim folder on your PC. 
To do this, right-click on Valheim in the Steam library, select "***Manage***" in the options and then "***Browse local files***".

![image](https://user-images.githubusercontent.com/13604413/159180035-ac9c6116-bbf9-44c2-9927-7c31cbebbf4c.png)

Once this folder has been opened, the "***WindowsClient.zip***" has to be downloaded. 
The "***WindowsClient.zip***" can be downloaded [here](https://github.com/valheimPlus/ValheimPlus/releases) (go to "Assets").

![image](https://user-images.githubusercontent.com/13604413/159180038-9eb609a1-3e14-461b-b7ae-5afb5d3bbc89.png)

Afterwards the content of the "***WindowsClient.zip***" has to be unzipped into the previously opened Valheim server folder.

![image](https://user-images.githubusercontent.com/13604413/159180041-de775b09-a531-4d37-b232-7bf06e3f8130.png)

Then Valheim can be started and the setup at the client is finished.

## Valheim Plus Installation Server

To change the game we first open the games tab on our server:

![image](https://user-images.githubusercontent.com/13604413/159180043-551c13d9-8c8c-4e92-8a71-3af7dd5264cc.png)

Here we now search for Valheim Plus under "Available games" and click on the download button:

![image](https://user-images.githubusercontent.com/26007280/189885700-bf87dac6-fb20-4f03-beac-fd8aa5de2348.png)

After that the server will be reinstalled. After the reinstallation is finished you have the possibility to remove the password at "**Configs**" and you can now upgrade to more slots.

## Slots Upgrade

To be able to perform a slot upgrade now, the "**UP and Downgrade**" function in the game server dashboard has to be opened.

![image](https://user-images.githubusercontent.com/26007280/189885731-8e160ced-dabd-472d-b72a-8b1b48a0f7e1.png)

Now select the desired number of slots on the UP and Downgrade page.

:::info
Here only the "**surcharge**" has to be paid, this is calculated for the remaining runtime
:::

![image](https://user-images.githubusercontent.com/13604413/159180047-0089d7b6-3a2f-4ce1-9c6f-daa2eb5acc64.png)

To complete the upgrade, the payment method must be selected at the bottom of the page.
Once selected, press the "***Perform upgrade***" button and the upgrade will be performed.

![image](https://user-images.githubusercontent.com/13604413/159180050-43c2fe91-48a5-413d-ac17-f451858bed7d.png)

## Valheim Plus Config

To open the configuration file you have to open the "**Configs**" page in the game server interface, where you can see the "*ValheimPlus: valheim_plus.cfg*".
This can be opened via the blue icon which is located next to the configuration file.

![image](https://user-images.githubusercontent.com/13604413/159180059-4d68cc14-b0d9-4a6e-8804-4c48647f503a.png)

A list of all commands that can be used in the configuration file:

### [Player]

| Command | Values | Function |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | enables or disables player changes |
| baseMegingjordBuff | 150 (float) | increases carrying weight by 150 |
| baseMaximumWeight | 300 (float) | sets the maximum weight to 300 |
| baseAutoPickUpRange | 2 (float) | sets the range to pick up items to 2 |
| disableCameraShake | true / false | enables or disables camera shake |
| experienceGainedNotifications | true / false | enables or disables the display for the gained experience points in the upper left corner |

### [Food]

| Command | Values | Function |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | enables or disables changes to the food |
| foodDuration | 0-100% | changes the food duration by the set percentage value |

### [Fermenter]

| Command | Values | Function |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | enables or disables changes to the fermenter |
| fermenterDuration | 2400 (float) equals 48 ingame hours | sets the production time in the fermenter, the lower the value the faster the production |
| fermenterItemsProduced | 6 (integer) | sets the items which can be produced in the fermenter |

### [Furnace]

| Command | Values | Function |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | enables or disables changes to the furnace |
| maximumOre | 10 (integer) | sets the maximum number of ores in the furnace |
| maximumCoal | 20 (integer) | sets the maximum number of coals in the furnace |
| productionSpeed | 30 (float) | sets the production time in the furnace, the lower the value the faster the production |
| coalUsedPerProduct | 2 (integer) | sets the number of coal used for a product |

### [Kiln]

| Command | Values | Function |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | enables or disables changes to the Kiln |
| productionSpeed | 15 (float) | sets the production time in the Kiln, the lower the value the faster the production |
| maximumWood | 25 (integer) | sets the maximum amount of wood in the kiln |

### [Items]

| Command | Values | Function |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | enables or disables changes to the item |
| noTeleportPrevention | true / false | prevents the use of teleport |
| baseItemWeight | 0 (float) | sets the weight of items, -50% = less item weight, +50% = more item weight |
| itemStackMultiplier | 0 (float) | sets the maximum number of items which can be stacked, only positive values allowed. 50 = 50% more maximum stackable items. *warning* if you reduce this everything you have more will be deleted |

### [Building]

| Command | Values | Function |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | enables or disables changes to the building |
| noInvalidPlacementRestriction | true / false | removes the *invalid placement* restriction |
| noWeatherDamage | true / false | removes damage to buildings that would be caused by weather (e.g. rain) |
| maximumPlacementDistance | 5 (float) | sets the maximum placement distance |

### [Beehive]

| Command | Values | Function |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | enables or disables changes to the beehive |
| maximumHoneyPerBeehive | 4 (integer) | sets the maximum amount of honey from the beehive |
| honeyProductionSpeed | 1200 (float) equals 24 ingame hours | sets the production time of honey, the lower the value the faster the production |

### [Server]

| Command | Values | Function |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | enables or disables changes to the server |
| maxPlayers | 10 (int) | sets the slots, will be set by the ordered value on UP- and Downgrades |
| disableServerPassword | true / false | removes the server password from the server |
| enforceConfiguration | true / false | if enabled only players with the same configuration are allowed to join the server |
| enforceMod | true / false | if enabled only players with the same mod are allowed to join the server |

### [Map]

| Command | Values | Function |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | enables or disables changes to the map |
| exploreRadius | 100 (float) | sets the radius around each player at which the map is uncovered |
| shareMapProgression | true / false | if enabled the uncovering of the map is shared for each player, only players who are visible contribute to this |

### [Hotkeys]

A list of possible controls would be [here](https://docs.unity3d.com/ScriptReference/KeyCode.html).

| Command | Values | Function |
| :--------: | :--------------------------: | :---------------------------------:  |
| rollForwards | F9 | roll forward |
| rollBackwards | F10 | roll backwards |
| enterAdvancedBuildingMode | F1 | freezes objects and allows use of advanced control |
| exitAdvancedBuildingMode | F3 | stops the advanced control mode and unfreezes objects |
| enterAdvancedEditingMode | Keypad0 | the viewed object is selected and modified with AEM |
| confirmPlacementOfAdvancedEditingMode | KeypadEnter | confirms the change of all selected and modified objects |
| resetAdvancedEditingMode | F7 | resets the position and rotation of the selected objects with AEM |
| abortAndExitAdvancedEditingMode | F8 | resets the position and rotation of the selected objects with AEM and exits the AEM mode |

### [AdvancedBuildingMode]

| Command | Values | Function |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | enables or disables changes to the advanced building mode |

### [AdvancedEditingMode]

| command | values | function |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | enables or disables changes to the advanced editing mode |

### [Stamina]

| command | values | function |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | enables or disables changes to stamina |
| dodgeStaminaUsage | 10 (float) | sets the amount of stamina for dodge |
| encumberedStaminaDrain | 10 (float) | sets the amount of stamina to drain when loaded |
| sneakStaminaDrain | 5 (float) | sets the amount of stamina drain for sneaking |
| runStaminaDrain | 10 (float) | sets the amount of stamina drain for running |
| staminaRainDelay | 1 (float) | set the delay for regenerating stamina |
| staminaRain | 5 (float) | sets the amount of stamina that is regenerated |
| swimStaminaDrain | 5 (float) | set the amount of stamina drained when swimming |
| jumpStaminaUsage | 10 (float) | sets the number of stamina drains for jumping |

