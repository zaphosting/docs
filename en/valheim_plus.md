---
id: valheim_plus
title: Valheim Plus
sidebar_label: Valheim Plus
---

## Introduction

Valheim Plus is a client-side modification, so all changes must also be made by the client in the game directory.
If *enforceConfiguration* is disabled on the server, any client with any configuration can connect to the server. This would also allow people with different configurations to connect to the server. This would allow players to set different speeds for crafting and stamina values on the client.

To prevent this and provide a fair gaming experience *enforceConfiguration* must be set to "**true**". Then the server owner would have to copy out the "**valheim_plus.cfg**" set at "**Configs**" and send it to every player.
These players must then paste the exact same "**valheim_plus.cfg**" file as it is set on the server into the "**BepInEx\config**" path.

An explanation of how to get to the "**valheim_plus.cfg**" and set the appropriate configurations there is given at "**Valheim Plus Config**".
How to get to the "**BepInEx\config**" path is explained at ***Valheim Plus Installation on Client***.

Only then a valid connection to the server would be possible.

## Valheim Plus Installation Client

First you have to open the Valheim folder on your PC. 
To do this, right-click on Valheim in the Steam library, select "***Manage***" in the options and then "***Browse local files***".

![](https://screensaver01.zap-hosting.com/index.php/s/JR4CFY7jEdXqDp9/preview)

Once this folder has been opened, the "***WindowsClient.zip***" has to be downloaded. 
The "***WindowsClient.zip***" can be downloaded ![here](https://github.com/nxPublic/ValheimPlus/releases/tag/0.8).

![](https://screensaver01.zap-hosting.com/index.php/s/dPxaH3m4to25igt/preview)

Afterwards the content of the "***WindowsClient.zip***" has to be unzipped into the previously opened Valheim server folder.

![](https://screensaver01.zap-hosting.com/index.php/s/EftHnQeiB8GSpS4/preview)

Then Valheim can be started and the setup at the client is finished.

### Incompatible version

If the error "**incompatible version**" is displayed when connecting to the server, it must be ensured that the same "**valheim_plus.cfg**" is used on the client side as is set on the server. Since the *enforceConfiguration* was set to "**true**" on the server.

![](https://screensaver01.zap-hosting.com/index.php/s/DdQytkte54AYi4D/preview)

That means, you - as a server admin - have to share your "**valheim_plus.cfg**" with your players, so they can drag the config into the Valheim Steam folder and then into the subfolder *BepInEx\config\valheim_plus.cfg*. 

Only if server and client config are syncron, connecting is possible. If you set *enforceConfiguration* to *false*, every player can connect. But then you will have an unfair game experience, because the configs of your players may have "better" values than those of the other players. So make sure that you force your player to use the same config as the server.

You can download the config in the webinterface under "**Configs**" and "**send it to your players**":

![](https://screensaver01.zap-hosting.com/index.php/s/MDBEGB7XCfn5gBt/preview)

## Valheim Plus Installation Server

To change the game we first open the games tab on our server:

![](https://screensaver01.zap-hosting.com/index.php/s/TsoGNq4EYB5Yq3J/preview)

Here we now search for Valheim Plus under "Available games" and click on the download button:

![]()

After that the server will be reinstalled. After the reinstallation is finished you have the possibility to remove the password at "**Configs**" and you can now upgrade to more slots.

## Slots Upgrade

To be able to perform a slot upgrade now, the "**UP and Downgrade**" function in the game server dashboard has to be opened.

![](https://screensaver01.zap-hosting.com/index.php/s/Cewk4E9Fdfj5GDi/preview)

Now select the desired number of slots on the UP and Downgrade page.

> Here only the "**surcharge**" has to be paid, this is calculated for the remaining runtime

![](https://screensaver01.zap-hosting.com/index.php/s/Ma5BccAHWrpJPCK/preview)

To complete the upgrade, the payment method must be selected at the bottom of the page.
Once selected, press the "***Perform upgrade***" button and the upgrade will be performed.

![](https://screensaver01.zap-hosting.com/index.php/s/59sxTd8ZrAYpr4j/preview)

## Valheim Plus Config

To open the configuration file you have to open the "**Configs**" page in the game server interface, where you can see the "*ValheimPlus: valheim_plus.cfg*".
This can be opened via the blue icon which is located next to the configuration file.

![](https://screensaver01.zap-hosting.com/index.php/s/sA8fEWCijpYgQgb/preview)

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

A list of possible controls would be ![here](https://docs.unity3d.com/ScriptReference/KeyCode.html).

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

