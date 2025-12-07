---
id: valheim-plus
title: "Valheim: Valheim Plus Server"
description: "Upptäck hur du förbättrar Valheim-spelupplevelsen med Valheim Plus för bättre funktioner och serveruppgraderingar → Lär dig mer nu"
sidebar_label: Valheim Plus
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

:::info
Valheim Plus är en klientbaserad modifikation. Den låter dig göra ändringar i grundspelet.
:::

<InlineVoucher />

## Installation av Valheim Plus-klient

Först måste du öppna Valheim-mappen på din dator.  
Gör detta genom att högerklicka på Valheim i Steam-biblioteket, välj "***Hantera***" i menyn och sedan "***Bläddra i lokala filer***".

![](https://screensaver01.zap-hosting.com/index.php/s/oXaiLGR55Z9fH92/preview)

När mappen är öppen, ladda ner filen "***WindowsClient.zip***".  
"***WindowsClient.zip***" kan laddas ner [här](https://github.com/valheimPlus/ValheimPlus/releases) (gå till "Assets").

![](https://screensaver01.zap-hosting.com/index.php/s/ZDsabTk4eMfQcFM/preview)

Packa sedan upp innehållet i "***WindowsClient.zip***" i den tidigare öppnade Valheim-servermappen.

![](https://screensaver01.zap-hosting.com/index.php/s/wiTfFmLetr9TmJX/preview)

Starta sedan Valheim och klientinstallationen är klar.

## Installation av Valheim Plus-server

För att ändra spelet öppnar vi först fliken för spel på vår server:

![](https://screensaver01.zap-hosting.com/index.php/s/YE2xKnqfrZfWE4J/preview)

Här söker vi nu efter Valheim Plus under "Tillgängliga spel" och klickar på nedladdningsknappen:

![](https://screensaver01.zap-hosting.com/index.php/s/GF6Na4EPGiNQSDZ/preview)

Efter det kommer servern att ominstalleras. När ominstallationen är klar kan du ta bort lösenordet under "**Konfigurationer**" och du kan nu uppgradera till fler slots.

## Uppgradering av slots

För att kunna göra en slot-uppgradering måste funktionen "**Upp- och nedgradering**" i spelserverns kontrollpanel öppnas.

![](https://screensaver01.zap-hosting.com/index.php/s/SpAxfojkxY5wmsE/preview)

Välj nu önskat antal slots på sidan för Upp- och nedgradering.

:::info
Här betalar du endast "**påslaget**", som räknas ut för den återstående tiden
:::

![](https://screensaver01.zap-hosting.com/index.php/s/jyZGRaKAZ7n5GkR/preview)

För att slutföra uppgraderingen måste betalningsmetod väljas längst ner på sidan.  
När du valt, tryck på knappen "***Utför uppgradering***" så genomförs uppgraderingen.

![](https://screensaver01.zap-hosting.com/index.php/s/3eB9FtgLzxBpPgB/preview)

## Valheim Plus-konfiguration

För att öppna konfigurationsfilen måste du gå till sidan "**Konfigurationer**" i spelservergränssnittet, där du hittar "*ValheimPlus: valheim_plus.cfg*".  
Den öppnas via den blå ikonen bredvid konfigurationsfilen.

![](https://screensaver01.zap-hosting.com/index.php/s/grjGPr64RSs69xN/preview)

Här är en lista på alla kommandon som kan användas i konfigurationsfilen:

### [Player]

| Kommando | Värden | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiverar eller inaktiverar spelarändringar |
| baseMegingjordBuff | 150 (float) | ökar bärvikten med 150 |
| baseMaximumWeight | 300 (float) | sätter maxvikt till 300 |
| baseAutoPickUpRange | 2 (float) | sätter räckvidden för att plocka upp föremål till 2 |
| disableCameraShake | true / false | aktiverar eller inaktiverar kameraskakning |
| experienceGainedNotifications | true / false | aktiverar eller inaktiverar visning av erfarenspunkter uppe till vänster |

### [Food]

| Kommando | Värden | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiverar eller inaktiverar ändringar av mat |
| foodDuration | 0-100% | ändrar matens varaktighet med angiven procent |

### [Fermenter]

| Kommando | Värden | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiverar eller inaktiverar ändringar av fermenteraren |
| fermenterDuration | 2400 (float) motsvarar 48 speltimmar | sätter produktionstiden i fermenteraren, lägre värde = snabbare produktion |
| fermenterItemsProduced | 6 (integer) | sätter antalet föremål som kan produceras i fermenteraren |

### [Furnace]

| Kommando | Värden | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiverar eller inaktiverar ändringar av ugnen |
| maximumOre | 10 (integer) | sätter max antal malm i ugnen |
| maximumCoal | 20 (integer) | sätter max antal kol i ugnen |
| productionSpeed | 30 (float) | sätter produktionstiden i ugnen, lägre värde = snabbare produktion |
| coalUsedPerProduct | 2 (integer) | sätter antal kol som används per produkt |

### [Kiln]

| Kommando | Värden | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiverar eller inaktiverar ändringar av torkugnen |
| productionSpeed | 15 (float) | sätter produktionstiden i torkugnen, lägre värde = snabbare produktion |
| maximumWood | 25 (integer) | sätter max mängd ved i torkugnen |

### [Items]

| Kommando | Värden | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiverar eller inaktiverar ändringar av föremål |
| noTeleportPrevention | true / false | förhindrar användning av teleport |
| baseItemWeight | 0 (float) | sätter vikt på föremål, -50% = mindre vikt, +50% = mer vikt |
| itemStackMultiplier | 0 (float) | sätter max antal föremål som kan staplas, endast positiva värden. 50 = 50% fler stapelbara föremål. *varning* om du minskar detta tas allt över bort |

### [Building]

| Kommando | Värden | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiverar eller inaktiverar ändringar av byggnader |
| noInvalidPlacementRestriction | true / false | tar bort *ogiltig placering*-begränsningen |
| noWeatherDamage | true / false | tar bort väderskador på byggnader (t.ex. regn) |
| maximumPlacementDistance | 5 (float) | sätter max placeringsavstånd |

### [Beehive]

| Kommando | Värden | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiverar eller inaktiverar ändringar av bikupan |
| maximumHoneyPerBeehive | 4 (integer) | sätter max mängd honung från bikupan |
| honeyProductionSpeed | 1200 (float) motsvarar 24 speltimmar | sätter produktionstiden för honung, lägre värde = snabbare produktion |

### [Server]

| Kommando | Värden | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiverar eller inaktiverar ändringar av servern |
| maxPlayers | 10 (int) | sätter slots, styrs av beställt värde vid upp- och nedgraderingar |
| disableServerPassword | true / false | tar bort serverlösenordet från servern |
| enforceConfiguration | true / false | om aktiverat tillåts endast spelare med samma konfiguration att ansluta |
| enforceMod | true / false | om aktiverat tillåts endast spelare med samma mod att ansluta |

### [Map]

| Kommando | Värden | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiverar eller inaktiverar ändringar av kartan |
| exploreRadius | 100 (float) | sätter radien runt varje spelare där kartan avslöjas |
| shareMapProgression | true / false | om aktiverat delas kartavslöjandet mellan spelare, endast synliga spelare bidrar |

### [Hotkeys]

En lista över möjliga kontroller finns [här](https://docs.unity3d.com/ScriptReference/KeyCode.html).

| Kommando | Värden | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| rollForwards | F9 | rulla framåt |
| rollBackwards | F10 | rulla bakåt |
| enterAdvancedBuildingMode | F1 | fryser objekt och tillåter avancerad kontroll |
| exitAdvancedBuildingMode | F3 | avslutar avancerat byggläge och låser upp objekt |
| enterAdvancedEditingMode | Keypad0 | markerar och modifierar visat objekt med AEM |
| confirmPlacementOfAdvancedEditingMode | KeypadEnter | bekräftar ändring av alla markerade och modifierade objekt |
| resetAdvancedEditingMode | F7 | återställer position och rotation för markerade objekt med AEM |
| abortAndExitAdvancedEditingMode | F8 | återställer position och rotation för markerade objekt med AEM och avslutar AEM-läget |

### [AdvancedBuildingMode]

| Kommando | Värden | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiverar eller inaktiverar ändringar i avancerat byggläge |

### [AdvancedEditingMode]

| kommando | värden | funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiverar eller inaktiverar ändringar i avancerat redigeringsläge |

### [Stamina]

| kommando | värden | funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiverar eller inaktiverar ändringar av uthållighet |
| dodgeStaminaUsage | 10 (float) | sätter mängden uthållighet som används vid undvikande |
| encumberedStaminaDrain | 10 (float) | sätter mängden uthållighet som förbrukas när man är tungt lastad |
| sneakStaminaDrain | 5 (float) | sätter mängden uthållighet som förbrukas vid smygande |
| runStaminaDrain | 10 (float) | sätter mängden uthållighet som förbrukas vid löpning |
| staminaRainDelay | 1 (float) | sätter fördröjningen för uthållighetsåterhämtning |
| staminaRain | 5 (float) | sätter mängden uthållighet som återhämtas |
| swimStaminaDrain | 5 (float) | sätter mängden uthållighet som förbrukas vid simning |
| jumpStaminaUsage | 10 (float) | sätter mängden uthållighet som förbrukas vid hopp |

<InlineVoucher />