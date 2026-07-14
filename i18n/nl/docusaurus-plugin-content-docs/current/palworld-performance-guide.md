---
id: palworld-performance-guide
title: "Palworld: Prestatiehandleiding"
description: "Verbeter de prestaties van je Palworld-server, verminder prestatieproblemen en verlaag de serverbelasting met handmatige configuratiewijzigingen. -> Leer nu meer"
sidebar_label: Palworld: Prestatiehandleiding
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

De prestaties van een Palworld-server kunnen na verloop van tijd afnemen, vooral op actieve servers met veel bases, werkers, gedropte items en wilde Pals. In deze handleiding leer je hoe je het bestand `PalWorldSettings.ini` in de ZAP-Hosting webinterface optimaliseert om de serverbelasting te verminderen en de algehele prestaties te verbeteren.

## Voorbereiding

Voordat je begint, heb je toegang nodig tot de administratie van je Palworld-gameserver en toestemming om configuratiebestanden te bewerken.

:::info Vereiste Toegang
Je hebt toegang nodig tot je Palworld-server in het ZAP-Hosting game server administratiepaneel. Het benodigde configuratiebestand vind je onder `Configs`.
:::

:::caution Maak Eerst een Backup
Prestatieoptimalisatie kan het gameplaygedrag aanzienlijk veranderen. Maak daarom eerst een backup van je configuratie, zodat je indien nodig je vorige instellingen kunt herstellen.
:::

## Open het Palworld Configuratiebestand

Om je server te optimaliseren, moet je het hoofdconfiguratiebestand van de Palworld-server bewerken.

1. Log in op je ZAP-Hosting webinterface.
2. Open de administratie van je **Palworld** gameserver.
3. Ga naar **Configs**.
4. Open het bestand `PalWorldSettings.ini`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note Waar je Wijzigingen Moet Aanbrengen
De prestatiegerelateerde instellingen staan in `PalWorldSettings.ini`. Je moet de bestaande optie-waarden handmatig in dit bestand aanpassen.
:::

## Begrijp de Relevante Instellingen

Verschillende Palworld-instellingen beïnvloeden direct de serverprestaties. Sommige waarden verminderen CPU-, geheugen- en wereldsimulatiebelasting, terwijl andere helpen om ophoping door inactieve spelers of te veel wereldentiteiten te beperken.

### Belangrijkste Prestatie-instellingen

De volgende instellingen zijn het meest relevant als je prestatieproblemen op een drukke server wilt verminderen.

| Instelling | Standaard | Aanbevolen Wijziging | Effect |
|---|---:|---|---|
| `BuildObjectDeteriorationDamageRate` | `1.0` | Houd op `0.1` of hoger | Hogere achteruitgang verwijdert verlaten structuren sneller |
| `bAutoResetGuildNoOnlinePlayers` | `False` | Zet op `True` indien passend | Verwijdert inactieve guildbases na de ingestelde wachttijd |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Pas aan indien nodig | Bepaalt de inactiviteitstijd in uren voor guild reset |
| `PalSpawnNumRate` | `1.0` | Verlaag | Laat minder wilde Pals spawnen en vermindert simulatiebelasting |
| `DropItemMaxNum` | `3000` | Verlaag | Beperkt het aantal gedropte items in de wereld |
| `DropItemAliveMaxHours` | `1.0` | Verlaag | Verwijdert gedropte items sneller |
| `BaseCampMaxNumInGuild` | `4` | Verlaag | Vermindert het aantal guildbases |
| `ServerReplicatePawnCullDistance` | `15000.0` | Verlaag | Verlaagt de synchronisatieafstand van Pals en vermindert netwerk/serverbelasting |
| `BaseCampWorkerMaxNum` | `15` | Verlaag | Beperkt het aantal werkers per basis |
| `MaxBuildingLimitNum` | `0` | Stel een waarde in | Beperkt het totaal aantal gebouwen per speler |
| `bEnableInvaderEnemy` | `True` | Zet op `False` | Schakelt raid-achtige indringers uit en vermindert belasting |
| `bEnableFastTravel` | `True` | Zet op `False` indien nodig | Kan freezes door fast travel gebeurtenissen verminderen |
| `bIsPvP` | `False` | Houd op `False` tenzij nodig | PvP kan de serverbelasting verhogen in actieve omgevingen |

### Secundaire Prestatie-instellingen

Deze instellingen kunnen ook helpen, vooral op grotere publieke servers.

| Instelling | Standaard | Aanbevolen Wijziging | Effect |
|---|---:|---|---|
| `BaseCampMaxNum` | `128` | Verlaag | Vermindert het totaal aantal toegestane bases op de server |
| `AutoSaveSpan` | `240` | Verhoog | Vermindert hoe vaak de server automatische saves uitvoert |

:::tip Begin met Voorzichtige Wijzigingen
Verander bij voorkeur slechts een paar waarden tegelijk en test daarna het servergedrag. Zo zie je makkelijker welke instelling de prestaties verbeterde en welke het gameplaygedrag te veel beïnvloedde.
:::

## Bewerk de Configuratie

Palworld slaat serveropties op in de sectie `OptionSettings` binnen `PalWorldSettings.ini`. Je moet de relevante regels handmatig aanpassen.

### Voorbeeld van een Geoptimaliseerde Configuratie

Het volgende voorbeeld toont een conservatieve, prestatiegerichte configuratie. Vervang alleen de waarden die je daadwerkelijk voor jouw server wilt gebruiken.

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=0.800000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=False,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=2000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=64,BaseCampWorkerMaxNum=10,DropItemAliveMaxHours=0.500000,bAutoResetGuildNoOnlinePlayers=True,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=False,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,ServerReplicatePawnCullDistance=10000.000000,bEnableGuildPlayerSelect=False,BanListURL="https://api.palworldgame.com/api/banlist.txt",bAutoResetGuildNoOnlinePlayers=True,BaseCampMaxNumInGuild=3)
```

:::caution Controleer Bestaande Regels
De configuratieformaten van Palworld kunnen veranderen tussen updates. Zorg ervoor dat je de bestaande `OptionSettings`-regel in je bestand aanpast en geen dubbele of conflicterende regels toevoegt.
:::

### Aanbevolen Waarde-aanpassingen

Als je niet de hele regel wilt vervangen, kun je ook alleen de relevante waarden in je bestaande configuratie aanpassen.

| Regel | Voorbeeldwaarde | Waarom aanpassen |
|---|---:|---|
| `PalSpawnNumRate` | `0.8` | Vermindert het aantal wilde Pal-spawns |
| `DropItemMaxNum` | `2000` | Vermindert item-overlast |
| `DropItemAliveMaxHours` | `0.5` | Verwijdert gedropte items sneller |
| `BaseCampMaxNum` | `64` | Vermindert het totaal aantal bases |
| `BaseCampMaxNumInGuild` | `3` | Beperkt uitbreiding van guildbases |
| `BaseCampWorkerMaxNum` | `10` | Vermindert de belasting door AI-werkers |
| `ServerReplicatePawnCullDistance` | `10000.0` | Verlaagt replicatieafstand |
| `bEnableInvaderEnemy` | `False` | Schakelt raid-gerelateerde belasting uit |
| `bEnableFastTravel` | `False` | Voorkomt freezes door fast travel |
| `bAutoResetGuildNoOnlinePlayers` | `True` | Ruimt inactieve guildbases op |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Stelt de inactiviteitsperiode in |
| `MaxBuildingLimitNum` | `[your_limit]` | Beperkt overmatig bouwen |
| `bIsPvP` | `False` | Voorkomt extra PvP-belasting |
| `AutoSaveSpan` | `[your_value]` | Vermindert de frequentie van saves als ondersteund in jouw configuratie |

:::danger Inactieve Guild Reset Verwijdert Bases
Als je `bAutoResetGuildNoOnlinePlayers=True` inschakelt, kunnen inactieve guilds automatisch worden ontbonden na de tijd ingesteld in `AutoResetGuildTimeNoOnlinePlayers`. Dit kan permanent bases en structuren van inactieve spelers verwijderen.
:::

## Sla de Wijzigingen Op en Pas ze Toe

Na het bewerken van het bestand moet je de configuratie opslaan en de server herstarten zodat de nieuwe instellingen geladen worden.

1. Sla de wijzigingen op in `PalWorldSettings.ini`.
2. Ga terug naar je game server administratie.
3. Herstart de Palworld-server.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info Herstart Vereist
Een herstart is verplicht na het wijzigen van `PalWorldSettings.ini`. Zonder herstart blijft de server de oude instellingen gebruiken.
:::

## Best Practices voor Langdurige Prestaties

Handmatige configuratiewijzigingen helpen, maar zijn slechts een deel van de totale serveroptimalisatie.

### Gebruik Automatische Dagelijkse Herstarts

Een dagelijkse herstart is een gangbare best practice voor Palworld-servers omdat het gebruik van resources na verloop van tijd kan oplopen.

- Stel een automatische herstart in via je ZAP-Hosting server administratie
- Kies een tijd met weinig spelersactiviteit
- Informeer je spelers vooraf als je community actief is

### Beperk Wereldgroei

De grootste oorzaak van prestatieverlies op langlopende Palworld-servers is meestal de complexiteit van de wereld.

Om dit te verminderen:

- verlaag basislimieten
- verlaag het aantal werkers
- verminder de ophoping van gedropte items
- verminder het aantal wilde Pal-spawns
- ruim inactieve guilds zorgvuldig op
- overweeg een bouwlimiet in te stellen met `MaxBuildingLimitNum`

### Test Wijzigingen Geleidelijk

Pas geen extreme verlagingen direct toe, tenzij je server al onstabiel is.

Een goede aanpak is:

1. Verlaag eerst spawn- en itemwaarden
2. Verminder daarna basis- en werkerslimieten
3. Schakel optionele functies met hoge belasting uit indien nodig
4. Herstart en monitor de prestaties na elke wijzigingsronde

:::tip Vind de Juiste Balans tussen Prestaties en Gameplay
De beste instellingen hangen af van je servertype. Een kleine private server kan meestal hogere waarden aanhouden, terwijl een grote publieke communityserver vaak strengere limieten nodig heeft om prestatieproblemen te voorkomen.
:::

## Conclusie

Gefeliciteerd, je hebt de prestaties van je Palworld-server succesvol geoptimaliseerd. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂