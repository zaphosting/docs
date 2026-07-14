---
id: palworld-faster-egg-hatching
title: "Palworld: Sneller Eieren Uitbroeden"
description: "Leer hoe je de uitbroedtijd van eieren in Palworld kunt verkorten door de serverinstelling voor het uitbroeden van eieren aan te passen voor snellere resultaten. -> Leer nu meer"
sidebar_label: Palworld: Sneller Eieren Uitbroeden
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

In Palworld wordt de uitbroedtijd van eieren geregeld via een serverconfiguratie. In deze gids leer je hoe je de uitbroedtijd op jouw ZAP-Hosting Palworld-server kunt verkorten door het juiste configuratiebestand aan te passen en de wijziging correct toe te passen.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Voorbereiding

Zorg voordat je begint dat:

- je toegang hebt tot de webinterface van je ZAP-Hosting game server
- je Palworld-server beschikbaar is in de game server administratie
- je bestanden kunt bewerken onder de **Configs** sectie

:::info Toegang tot Configuratiebestand
Voor Palworld bij ZAP-Hosting kunnen de relevante serverinstellingen worden aangepast via de game server administratie onder **Configs**. Voor deze taak moet je het bestand `PalWorldSettings.ini` wijzigen.
:::

## Begrijpen van de Uitbroedinstelling

Palworld gebruikt de instelling `PalEggDefaultHatchingTime` om de basis uitbroedtijd van eieren in uren te bepalen. Een lagere waarde betekent dat eieren sneller uitkomen.

Volgens de huidige Palworld serverconfiguratie is de standaardwaarde `72`, wat staat voor `72` uur voor een Groot Ei. Andere eiertypes schalen ook vanaf deze basiswaarde.

| Config key | Standaardwaarde | Beschrijving |
| --- | --- | --- |
| `PalEggDefaultHatchingTime` | `72.000000` | Basis uitbroedtijd van eieren in uren |

:::note Hoe de Instelling Werkt
Deze waarde beïnvloedt het algemene uitbroedproces op je server. Als je deze verlaagt, komen eieren sneller uit voor alle spelers die incubators gebruiken.
:::

## Open het Palworld Configuratiebestand

Je moet eerst het juiste configuratiebestand openen in de ZAP-Hosting interface.

### Navigeer naar de Configs Sectie

Open de game server administratie van je Palworld-server en ga naar de **Configs** sectie. Zoek daar het bestand met de naam:

```ini
PalWorldSettings.ini
```

Dit is het bestand dat de gameplay-configuratie bevat voor je Palworld-server, inclusief de uitbroedtijd van eieren.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Pas de Uitbroedtijd aan

Als je `PalWorldSettings.ini` hebt geopend, zoek dan naar de regel met `OptionSettings`. Palworld slaat veel gameplay-instellingen op in deze sectie.

### Wijzig de Vereiste Configuratiesleutel

Zoek de volgende regel:

```ini
PalEggDefaultHatchingTime=72.000000
```

Verlaag de waarde om het uitbroeden van eieren te versnellen.

Bijvoorbeeld:

```ini
PalEggDefaultHatchingTime=24.000000
```

Dit zou de basis uitbroedtijd van `72` uur naar `24` uur verlagen.

### Voorbeeldwaarden

Je kunt verschillende waarden gebruiken, afhankelijk van hoe snel je het uitbroeden op je server wilt laten verlopen.

| Waarde | Resultaat |
| --- | --- |
| `72.000000` | Standaard uitbroedtijd |
| `48.000000` | Langzamere verlaging, meer gebalanceerde gameplay |
| `24.000000` | Veel snellere uitbroedtijd |
| `12.000000` | Zeer snelle uitbroedtijd |
| `1.000000` | Extreem snelle uitbroedtijd |

:::caution Gebruik Realistische Waarden
Zeer lage waarden kunnen de gameplay-balans flink verstoren. Voor een natuurlijkere progressie kun je het beste beginnen met een gematigde waarde zoals `24.000000` of `48.000000`.
:::

### Voorbeeld Configuratiesnippet

Afhankelijk van je huidige configuratie verschijnt de instelling binnen het `OptionSettings` blok. Een typisch voorbeeld ziet er zo uit:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=24.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,BaseCampMaxNumInGuild=4)
```

:::tip Bewerk de Juiste Instelling
Als de sleutel `PalEggDefaultHatchingTime` al bestaat, pas dan de bestaande waarde aan in plaats van een dubbele invoer toe te voegen. Dubbele waarden in hetzelfde `OptionSettings` blok kunnen ervoor zorgen dat instellingen worden genegeerd of overschreven.
:::

## Sla de Wijzigingen Op en Pas ze Toe

Nadat je de waarde hebt aangepast, sla je het bestand `PalWorldSettings.ini` op in de ZAP-Hosting interface.

### Herstart de Server

Start je Palworld-server opnieuw op zodat de nieuwe uitbroedtijd wordt geladen.

:::info Herstart Vereist
De bijgewerkte configuratie wordt pas toegepast nadat de server opnieuw is opgestart.
:::

## Belangrijk Gedrag voor Bestaande Eieren

Als eieren al aan het uitbroeden zijn, wordt de nieuwe uitbroedwaarde niet betrouwbaar bijgewerkt voor die actieve incubatietimers. In de praktijk moet je het uitbroedproces van die eieren stoppen en opnieuw starten zodat de nieuwe snelheid wordt toegepast.

| Situatie | Vereiste actie |
| --- | --- |
| Nieuwe eieren geplaatst na de wijziging | Geen extra actie nodig na herstart |
| Eieren die al aan het uitbroeden waren voor de wijziging | Incubatie van die eieren opnieuw starten |

:::note Bestaande Incubatietimers
Als je de uitbroedtijd hebt aangepast maar het verwachte resultaat niet ziet, controleer dan of het ei al aan het uitbroeden was vóór de configuratiewijziging.
:::

## Conclusie

Gefeliciteerd, je hebt de uitbroedtijd van eieren op je Palworld-server succesvol verkort. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂