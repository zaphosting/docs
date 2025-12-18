---
id: valheim-plus
title: "Valheim: Valheim Plus Server"
description: "Ontdek hoe je Valheim gameplay verbetert met Valheim Plus voor meer features en server upgrades → Leer het nu"
sidebar_label: Valheim Plus
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

:::info
Valheim Plus is een client-side mod. Hiermee kun je aanpassingen doen aan het basisspel.
:::

<InlineVoucher />

## Valheim Plus Installatie Client

Open eerst de Valheim map op je PC.  
Klik met de rechtermuisknop op Valheim in je Steam bibliotheek, kies "***Beheren***" in het menu en daarna "***Lokale bestanden doorzoeken***".

![](https://screensaver01.zap-hosting.com/index.php/s/oXaiLGR55Z9fH92/preview)

Als deze map geopend is, moet je de "***WindowsClient.zip***" downloaden.  
De "***WindowsClient.zip***" kun je [hier](https://github.com/valheimPlus/ValheimPlus/releases) downloaden (ga naar "Assets").

![](https://screensaver01.zap-hosting.com/index.php/s/ZDsabTk4eMfQcFM/preview)

Pak daarna de inhoud van de "***WindowsClient.zip***" uit in de eerder geopende Valheim server map.

![](https://screensaver01.zap-hosting.com/index.php/s/wiTfFmLetr9TmJX/preview)

Start vervolgens Valheim op en de setup aan de clientkant is klaar.

## Valheim Plus Installatie Server

Om het spel aan te passen open je eerst het games tabblad op je server:

![](https://screensaver01.zap-hosting.com/index.php/s/YE2xKnqfrZfWE4J/preview)

Zoek hier nu naar Valheim Plus onder "Beschikbare games" en klik op de downloadknop:

![](https://screensaver01.zap-hosting.com/index.php/s/GF6Na4EPGiNQSDZ/preview)

Daarna wordt de server opnieuw geïnstalleerd. Na de herinstallatie kun je bij "**Configs**" het wachtwoord verwijderen en nu upgraden naar meer slots.

## Slots Upgrade

Om een slot upgrade uit te voeren, open je de "**UP en Downgrade**" functie in het game server dashboard.

![](https://screensaver01.zap-hosting.com/index.php/s/SpAxfojkxY5wmsE/preview)

Selecteer nu het gewenste aantal slots op de UP en Downgrade pagina.

:::info
Je betaalt hier alleen de "**toeslag**", deze wordt berekend voor de resterende looptijd
:::

![](https://screensaver01.zap-hosting.com/index.php/s/jyZGRaKAZ7n5GkR/preview)

Om de upgrade af te ronden, kies je onderaan de pagina de betaalmethode.  
Druk daarna op de knop "***Upgrade uitvoeren***" en de upgrade wordt verwerkt.

![](https://screensaver01.zap-hosting.com/index.php/s/3eB9FtgLzxBpPgB/preview)

## Valheim Plus Config

Om het configuratiebestand te openen ga je naar de pagina "**Configs**" in de game server interface, waar je "*ValheimPlus: valheim_plus.cfg*" ziet.  
Open dit via het blauwe icoon naast het configuratiebestand.

![](https://screensaver01.zap-hosting.com/index.php/s/grjGPr64RSs69xN/preview)

Een lijst van alle commands die je in het configuratiebestand kunt gebruiken:

### [Player]

| Command | Waarden | Functie |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | schakelt speler-aanpassingen aan of uit |
| baseMegingjordBuff | 150 (float) | verhoogt draaggewicht met 150 |
| baseMaximumWeight | 300 (float) | stelt het maximale gewicht in op 300 |
| baseAutoPickUpRange | 2 (float) | stelt de range in om items op te pakken op 2 |
| disableCameraShake | true / false | schakelt cameratrilling aan of uit |
| experienceGainedNotifications | true / false | toont of verbergt de ervaring die je krijgt linksboven |

### [Food]

| Command | Waarden | Functie |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | schakelt aanpassingen aan voedsel aan of uit |
| foodDuration | 0-100% | past de houdbaarheid van voedsel aan met het percentage |

### [Fermenter]

| Command | Waarden | Functie |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | schakelt aanpassingen aan de fermenter aan of uit |
| fermenterDuration | 2400 (float) = 48 ingame uren | stelt de productietijd in de fermenter in, hoe lager hoe sneller |
| fermenterItemsProduced | 6 (integer) | stelt het aantal items in dat geproduceerd kan worden in de fermenter |

### [Furnace]

| Command | Waarden | Functie |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | schakelt aanpassingen aan de oven aan of uit |
| maximumOre | 10 (integer) | stelt het maximale aantal ertsen in de oven in |
| maximumCoal | 20 (integer) | stelt het maximale aantal kolen in de oven in |
| productionSpeed | 30 (float) | stelt de productietijd in de oven in, hoe lager hoe sneller |
| coalUsedPerProduct | 2 (integer) | stelt het aantal kolen in dat per product gebruikt wordt |

### [Kiln]

| Command | Waarden | Functie |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | schakelt aanpassingen aan de droogoven aan of uit |
| productionSpeed | 15 (float) | stelt de productietijd in de droogoven in, hoe lager hoe sneller |
| maximumWood | 25 (integer) | stelt de maximale hoeveelheid hout in de droogoven in |

### [Items]

| Command | Waarden | Functie |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | schakelt aanpassingen aan items aan of uit |
| noTeleportPrevention | true / false | voorkomt het gebruik van teleport |
| baseItemWeight | 0 (float) | stelt het gewicht van items in, -50% = minder gewicht, +50% = meer gewicht |
| itemStackMultiplier | 0 (float) | stelt het maximale aantal stapelbare items in, alleen positieve waarden toegestaan. 50 = 50% meer stapelbare items. *let op* als je dit verlaagt worden overtollige items verwijderd |

### [Building]

| Command | Waarden | Functie |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | schakelt aanpassingen aan bouwen aan of uit |
| noInvalidPlacementRestriction | true / false | verwijdert de *ongeldige plaatsing* restrictie |
| noWeatherDamage | true / false | verwijdert schade aan gebouwen door weersinvloeden (zoals regen) |
| maximumPlacementDistance | 5 (float) | stelt de maximale plaatsingsafstand in |

### [Beehive]

| Command | Waarden | Functie |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | schakelt aanpassingen aan de bijenkorf aan of uit |
| maximumHoneyPerBeehive | 4 (integer) | stelt de maximale hoeveelheid honing per bijenkorf in |
| honeyProductionSpeed | 1200 (float) = 24 ingame uren | stelt de productietijd van honing in, hoe lager hoe sneller |

### [Server]

| Command | Waarden | Functie |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | schakelt server-aanpassingen aan of uit |
| maxPlayers | 10 (int) | stelt het aantal slots in, wordt ingesteld via UP- en Downgrades |
| disableServerPassword | true / false | verwijdert het serverwachtwoord van de server |
| enforceConfiguration | true / false | als aan, mogen alleen spelers met dezelfde config joinen |
| enforceMod | true / false | als aan, mogen alleen spelers met dezelfde mod joinen |

### [Map]

| Command | Waarden | Functie |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | schakelt aanpassingen aan de map aan of uit |
| exploreRadius | 100 (float) | stelt de radius in rondom elke speler waar de map onthuld wordt |
| shareMapProgression | true / false | als aan, wordt de mapontdekking gedeeld tussen spelers, alleen zichtbare spelers dragen bij |

### [Hotkeys]

Een lijst met mogelijke controls vind je [hier](https://docs.unity3d.com/ScriptReference/KeyCode.html).

| Command | Waarden | Functie |
| :--------: | :--------------------------: | :---------------------------------:  |
| rollForwards | F9 | rol vooruit |
| rollBackwards | F10 | rol achteruit |
| enterAdvancedBuildingMode | F1 | bevriest objecten en activeert geavanceerde bouwbesturing |
| exitAdvancedBuildingMode | F3 | stopt geavanceerde bouwmodus en bevriest objecten niet meer |
| enterAdvancedEditingMode | Keypad0 | selecteert het bekeken object en bewerkt met AEM |
| confirmPlacementOfAdvancedEditingMode | KeypadEnter | bevestigt alle wijzigingen van geselecteerde objecten |
| resetAdvancedEditingMode | F7 | reset positie en rotatie van geselecteerde objecten in AEM |
| abortAndExitAdvancedEditingMode | F8 | reset positie en rotatie van geselecteerde objecten en verlaat AEM |

### [AdvancedBuildingMode]

| Command | Waarden | Functie |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | schakelt aanpassingen aan de geavanceerde bouwmodus aan of uit |

### [AdvancedEditingMode]

| command | waarden | functie |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | schakelt aanpassingen aan de geavanceerde bewerkingsmodus aan of uit |

### [Stamina]

| command | waarden | functie |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | schakelt aanpassingen aan stamina aan of uit |
| dodgeStaminaUsage | 10 (float) | stelt de stamina kosten voor ontwijken in |
| encumberedStaminaDrain | 10 (float) | stelt de stamina drain in bij overbeladen zijn |
| sneakStaminaDrain | 5 (float) | stelt de stamina drain in voor sluipen |
| runStaminaDrain | 10 (float) | stelt de stamina drain in voor rennen |
| staminaRainDelay | 1 (float) | stelt de vertraging in voor stamina regeneratie |
| staminaRain | 5 (float) | stelt de hoeveelheid stamina in die hersteld wordt |
| swimStaminaDrain | 5 (float) | stelt de stamina drain in bij zwemmen |
| jumpStaminaUsage | 10 (float) | stelt de stamina kosten in voor springen |


<InlineVoucher />