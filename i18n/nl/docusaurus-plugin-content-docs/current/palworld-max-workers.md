---
id: palworld-max-workers
title: "Palworld: Max Workers"
description: "Learn how to change the Palworld max workers setting by editing BaseCampWorkerMaxNum, including the default max and safe vanilla limits for workers per base. -> Learn more now"
sidebar_label: "Max Workers"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld laat je het maximale aantal werkende Pals per basis kamp op je server aanpassen. In deze gids leer je hoe je het juiste configuratiebestand in de ZAP-Hosting webinterface bewerkt, de waarde van `BaseCampWorkerMaxNum` aanpast en de wijziging correct toepast.



## Preparation

Voordat je begint, zorg dat je toegang hebt tot je Palworld game server via het ZAP-Hosting game server beheerpaneel.

:::info Toegang tot Configuratie Vereist
Je hebt toegang nodig tot de webadministratie van je server zodat je de sectie **Configs** kunt openen en de Palworld configuratiebestanden handmatig kunt bewerken.
:::

## Understanding the Max Workers Setting

De Palworld instelling die verantwoordelijk is voor het maximale aantal workers is `BaseCampWorkerMaxNum`. Deze optie bepaalt hoeveel Pals er per individuele basis kunnen werken.

| Instelling | Configuratiebestand | Doel | Standaardwaarde | Vanilla maximum |
| --- | --- | --- | --- | --- |
| `BaseCampWorkerMaxNum` | `PalWorldSettings.ini` | Bepaalt het maximale aantal werkende Pals per basis kamp | `15` | `50` |

:::note Vanilla Limiet Informatie
De huidige publieke documentatie geeft aan dat het normale maximale aantal in-game `50` is. Waarden boven `50` vereisen meestal modding en maken geen deel uit van de standaard vanilla serverconfiguratie.
:::

:::caution Impact op Performance
Het verhogen van het aantal workers kan het CPU- en geheugengebruik verhogen omdat er meer Pals actief zijn op je bases. Gebruik je een hoge waarde, houd dan de serverprestaties goed in de gaten na de wijziging.
:::

## Open het Palworld Configuratiebestand

Om de max workers instelling te wijzigen, moet je het bestand `PalWorldSettings.ini` bewerken.

### Vind het bestand in de ZAP-Hosting interface

Open de beheersomgeving van je Palworld game server en navigeer naar:

- `Configs`
- `PalWorldSettings.ini`

Dit is het configuratiebestand waar de gameplay-instellingen voor je Palworld server in staan.



## Bewerk de BaseCampWorkerMaxNum Waarde

Als je `PalWorldSettings.ini` hebt geopend, zoek dan de regel met `OptionSettings`. Palworld serverinstellingen worden meestal opgeslagen als komma-gescheiden key-value paren binnen deze sectie.

### Wijzig de configuratie-invoer

Zoek de volgende sleutel:

```ini
BaseCampWorkerMaxNum=15
```

Verander de waarde naar het gewenste aantal. Bijvoorbeeld, om `20` werkende Pals per basis toe te staan, gebruik je:

```ini
BaseCampWorkerMaxNum=20
```

### Voorbeeldconfiguratie

Afhankelijk van je huidige bestand verschijnt de instelling meestal binnen een langere `OptionSettings` regel zoals deze:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=20,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,bHardcore=False,bPalLost=False,bRawData=False)
```

:::tip Bewerk Alleen de Nodige Waarde
Wijzig alleen `BaseCampWorkerMaxNum` tenzij je bewust andere gameplay-instellingen wilt aanpassen. Dit voorkomt per ongeluk configuratiefouten.
:::

## Aanbevolen Waarden

Je kunt elke waarde kiezen die bij jouw speelstijl past, zolang deze binnen de ondersteunde vanilla limieten blijft.

| Waarde | Resultaat | Aanbeveling |
| --- | --- | --- |
| `15` | Standaard Palworld worker limiet | Beste voor standaard gameplay |
| `20` tot `30` | Verhoogde basisautomatisering | Goede balans voor de meeste private servers |
| `40` tot `50` | Zeer hoog aantal workers | Alleen gebruiken als je server genoeg resources heeft |
| Boven `50` | Niet standaard vanilla gedrag | Vereist meestal mods en wordt niet aanbevolen zonder testen |

## Sla de Wijzigingen Op en Pas ze Toe

Na het bewerken van de waarde, sla je het bestand `PalWorldSettings.ini` op in de ZAP-Hosting configuratie-editor.

### Herstart de server

Zodra het bestand is opgeslagen, herstart je je Palworld server zodat de nieuwe max workers instelling wordt geladen.

:::info Herstart Vereist
Wijzigingen in `PalWorldSettings.ini` worden niet direct toegepast terwijl de server draait. Je moet de server herstarten na het opslaan van het bestand.
:::

## Controleer de Nieuwe Worker Limiet

Na het herstarten van de server, join je je Palworld server en controleer je een van je basis kampen. Je zou nu werkende Pals moeten kunnen toewijzen tot aan de nieuwe limiet die je hebt ingesteld.

Als de wijziging niet lijkt te werken, controleer dan het volgende:

| Controle | Wat te verifiëren |
| --- | --- |
| Correct bestand | Je hebt `PalWorldSettings.ini` bewerkt |
| Correcte sleutel | `BaseCampWorkerMaxNum` staat erin en is correct gespeld |
| Geldige syntax | De omliggende `OptionSettings` regel is niet verbroken |
| Herstart voltooid | De server is volledig herstart na het opslaan |
| Waarde bereik | De waarde ligt binnen de normale vanilla limiet van `50` |

:::caution Configuratie Syntax
Palworld configuratie-invoer is gevoelig voor formatting. Als je per ongeluk komma’s, haakjes of andere delen van de `OptionSettings` regel verwijdert, kan de server de instelling negeren of niet correct laden.
:::

## Conclusion

Gefeliciteerd, je hebt succesvol het maximale aantal workers per basis kamp op je Palworld server aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂