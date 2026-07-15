---
id: palworld-increase-work-speed
title: "Palworld: Werktempo Verhogen"
description: "Leer hoe je het werktempo in Palworld verhoogt door de WorkSpeedRate-instelling aan te passen voor sneller werk van spelers en Pals op je server. -> Leer nu meer"
sidebar_label: "Werktempo Verhogen"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld laat je bepalen hoe snel spelers en Pals werk aan de basis afronden door een serverconfiguratie aan te passen. In deze gids leer je hoe je het werktempo verhoogt op je ZAP-Hosting Palworld-server door het juiste configuratiebestand te bewerken en de wijzigingen correct toe te passen.



## Voorbereiding

Zorg ervoor dat je toegang hebt tot de Palworld game server administratie in de ZAP-Hosting webinterface voordat je begint.

:::info Handmatige Configuratie Nodig
Deze aanpassing voer je handmatig uit via de configuratie-editor. Je moet zelf het Palworld serverconfiguratiebestand bewerken onder het kopje `Configs` in je game server administratie.
:::

## Open het Palworld Configuratiebestand

Om het werktempo te veranderen, moet je het bestand `PalWorldSettings.ini` bewerken.

### Waar vind je het bestand

1. Log in op de ZAP-Hosting website.
2. Open de administratie van je **Palworld** game server.
3. Ga naar **Configs**.
4. Open het bestand met de naam `PalWorldSettings.ini`.

Dit bestand bevat de gameplay-instellingen die de snelheden en multipliers voor je Palworld-server regelen.

:::note Locatie van het Configuratiebestand
Bij ZAP-Hosting vind je het relevante bestand direct in je game server administratie onder `Configs`. Als je server meerdere configuratiebestanden toont, zorg er dan voor dat je `PalWorldSettings.ini` bewerkt.
:::

## Pas de Werktempo-instelling aan

De instelling om het werktempo te verhogen heet `WorkSpeedRate`.

### Wat doet deze instelling

`WorkSpeedRate` bepaalt hoe snel spelers en Pals werkgerelateerde taken bij je basis uitvoeren. De standaardwaarde is meestal `1.0`, wat normale snelheid betekent.

Hogere waarden verhogen de snelheidsfactor:

| Config key       | Standaardwaarde | Voorbeeldwaarde | Effect               |
| ---------------- | --------------- | --------------- | -------------------- |
| `WorkSpeedRate`  | `1.0`           | `2.0`           | Dubbel zo snel werk  |
| `WorkSpeedRate`  | `1.0`           | `10.0`          | Zeer snel werk       |

### Pas de waarde aan

Zoek de regel `OptionSettings` in `PalWorldSettings.ini`. De `WorkSpeedRate` staat in dat instellingenblok.

Als de instelling al bestaat, wijzig dan de waarde. Bijvoorbeeld:

```ini
WorkSpeedRate=1.000000
```

Verander dit naar een hogere waarde zoals:

```ini
WorkSpeedRate=2.000000
```

Voor een veel sneller resultaat kun je een hogere multiplier gebruiken, bijvoorbeeld:

```ini
WorkSpeedRate=10.000000
```

### Voorbeeld configuratiefragment

Afhankelijk van de inhoud van je bestand kan de instelling deel uitmaken van een langere `OptionSettings`-regel zoals deze:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=2.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Wees Voorzichtig met het Bewerken van de Syntax
`PalWorldSettings.ini` gebruikt een strikte opmaak. Zorg dat je alleen de waarde van `WorkSpeedRate` aanpast en geen komma’s, haakjes of aanhalingstekens uit de omliggende `OptionSettings`-regel verwijdert.
:::

## Opslaan en Server Herstarten

Na het bewerken van het bestand moet je de wijzigingen opslaan en je Palworld-server herstarten.

### Wijzigingen toepassen

1. Sla het aangepaste `PalWorldSettings.ini` bestand op.
2. Herstart je Palworld game server via de ZAP-Hosting server administratie.

Een herstart is nodig omdat Palworld deze gameplay-instellingen alleen bij het opstarten van de server inleest. De nieuwe werktempo-waarde werkt pas correct na een herstart.

| Actie                  | Nodig   |
| ---------------------- | ------- |
| `PalWorldSettings.ini` opslaan | Ja      |
| Server herstarten      | Ja      |
| Extra console commando | Nee     |

:::tip Aanbevolen Testen
Begin met een gematigde waarde zoals `2.0` en test het resultaat in de game. Extreem hoge waarden kunnen de voortgang veel sneller maken dan bedoeld, wat je gameplay-balans kan beïnvloeden.
:::

## Controleer het Nieuwe Werktempo

Als de server weer online is, join je Palworld-server en test je werkgerelateerde activiteiten bij je basis.

Je zou moeten merken dat spelers en Pals taken sneller afronden dan voorheen. Zie je geen verschil? Open dan `PalWorldSettings.ini` opnieuw en controleer of:

- `WorkSpeedRate` aanwezig is
- de waarde correct is ingesteld
- het bestand succesvol is opgeslagen
- de server volledig is herstart na de wijziging

:::note Gameplay Balans
Het verhogen van het werktempo kan de snelheid van je basisontwikkeling flink veranderen. Voor een gebalanceerde ervaring verhoog je de waarde beter geleidelijk in plaats van meteen een extreem hoge snelheid te kiezen.
:::

## Conclusie

Gefeliciteerd, je hebt het werktempo op je Palworld-server succesvol verhoogd. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂