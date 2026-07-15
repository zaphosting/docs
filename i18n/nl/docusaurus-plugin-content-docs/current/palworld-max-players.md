---
id: palworld-max-players
title: "Palworld: Max Players"
description: "Learn how to change the Palworld max players setting on your Palworld game server by editing the correct config file in the ZAP interface. -> Learn more now"
sidebar_label: "Max Players"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld laat je bepalen hoeveel spelers er tegelijk op je server kunnen spelen. In deze gids leer je hoe je handmatig het maximale aantal spelers aanpast door het juiste configuratiebestand in je ZAP-Hosting game server beheer te bewerken.



## Preparation

Voordat je begint, zorg dat je toegang hebt tot het Palworld game server beheer in de ZAP-Hosting webinterface.

:::info Toegang tot Configuratiebestand
Je moet de serverconfiguratie handmatig aanpassen via het **Configs** gedeelte van je game server beheer. Als je nog niet weet hoe je toegang krijgt tot je game server, open deze dan eerst via de ZAP-Hosting webinterface.
:::

## Locate the Palworld Configuration File

Om het maximale aantal spelers te wijzigen, moet je het bestand `PalWorldSettings.ini` bewerken.

In je ZAP-Hosting game server beheer:

1. Open je **Palworld** server
2. Ga naar **Configs**
3. Open het bestand met de naam `PalWorldSettings.ini`

Dit bestand bevat de belangrijkste gameplay- en serverinstellingen, inclusief het maximaal toegestane aantal spelers.

:::note Juiste Bestand
Voor deze wijziging moet je alleen `PalWorldSettings.ini` aanpassen. Als je server extra bestanden bevat, verander dan geen andere waarden tenzij je precies weet wat ze doen.
:::

## Change the Maximum Player Count

In `PalWorldSettings.ini` zoek je de sectie `OptionSettings` en vind je de invoer `ServerPlayerMaxNum`.

De relevante instelling is:

| Config key | Beschrijving | Standaardwaarde |
| --- | --- | --- |
| `ServerPlayerMaxNum` | Bepaalt het maximale aantal spelers dat op de server kan joinen | `32` |

Een typische invoer ziet er zo uit:

```ini
ServerPlayerMaxNum=32
```

Pas de waarde aan naar je gewenste spelerslimiet. Bijvoorbeeld, om 16 spelers toe te staan:

```ini
ServerPlayerMaxNum=16
```

Of om de standaard 32 spelers te behouden:

```ini
ServerPlayerMaxNum=32
```

:::caution Gebruik Ondersteunde Waarden
Palworld dedicated servers gebruiken meestal `32` als standaard maximum. Als je een veel hogere waarde instelt, kan dit de serverstabiliteit of prestaties beïnvloeden afhankelijk van je plan en de huidige gameversie. Als je twijfelt, begin dan met een lagere waarde en test je server eerst.
:::

## Example Configuration

Afhankelijk van de opmaak van je bestand kan de instelling binnen een langere `OptionSettings` regel staan. In dat geval hoef je alleen de waarde van `ServerPlayerMaxNum` aan te passen.

Voorbeeld:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=16,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

Als je bestand dit formaat gebruikt, verwijder dan geen komma’s, haakjes of aanhalingstekens van andere invoeren. Vervang alleen het getal achter `ServerPlayerMaxNum=`.

## Save and Apply the Changes

Na het aanpassen van de waarde:

1. Sla het bestand `PalWorldSettings.ini` op
2. Herstart je Palworld server

Een herstart is nodig voordat het nieuwe maximale aantal spelers actief wordt.

| Actie | Vereist |
| --- | --- |
| Opslaan van `PalWorldSettings.ini` | Ja |
| Extra console commando’s uitvoeren | Geen geverifieerde extra commando’s nodig |
| Server herstarten | Ja |

:::tip Herstart Vereist
Configuratiewijzigingen aan `ServerPlayerMaxNum` worden niet direct toegepast terwijl de server draait. Je moet de server herstarten zodat Palworld de nieuwe instellingen laadt.
:::

## Verify the New Player Limit

Na de herstart zou je server het nieuwe maximale aantal spelers moeten gebruiken.

Je kunt dit controleren door:

- de serverdetails te bekijken in je game server beheer als die daar getoond worden
- met meerdere spelers op de server te joinen
- de huidige configuratie opnieuw te bekijken in `PalWorldSettings.ini`

Als de instelling niet werkt, open dan het bestand opnieuw en controleer of:

- `ServerPlayerMaxNum=[your_value]` aanwezig is
- de bestandsopmaak niet beschadigd is
- de server volledig is herstart na het opslaan

:::caution Configuratie Syntax
Als je per ongeluk een komma, haakje of andere waarde uit de `OptionSettings` regel verwijdert, kan de server de instelling negeren of de configuratie niet correct laden. Bewerk het bestand zorgvuldig en wijzig alleen de benodigde waarde.
:::

## Conclusion

Gefeliciteerd, je hebt het maximale aantal spelers op je Palworld server succesvol aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂