---
id: palworld-change-server-name
title: "Palworld: Servernaam Wijzigen"
description: "Leer hoe je de servernaam van je Palworld-server wijzigt en de naam in de serverbrowser aanpast door het juiste configuratiebestand handmatig te bewerken. -> Leer nu meer"
sidebar_label: Palworld: Servernaam Wijzigen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld gebruikt een configuratiebestand om de servernaam te bepalen die in de in-game serverbrowser wordt getoond. In deze handleiding leer je hoe je de weergegeven servernaam handmatig wijzigt in de ZAP-Hosting webinterface en de wijziging correct toepast.



## Voorbereiding

Zorg ervoor dat je toegang hebt tot je Palworld-gameserver in de ZAP-Hosting webinterface en dat je toestemming hebt om de configuratiebestanden te bewerken.

:::info Handmatige Configuratie Vereist
Deze wijziging voer je uit door het Palworld-serverconfiguratiebestand handmatig te bewerken. Het relevante bestand is toegankelijk via je game server beheer onder `Configs`.
:::

## Open het Palworld Configuratiebestand

Om de servernaam te wijzigen, moet je het bestand `PalWorldSettings.ini` bewerken.

In de ZAP-Hosting webinterface:

1. Open je **Palworld** gameserver.
2. Ga naar **Configs** in het serverbeheer.
3. Open het bestand `PalWorldSettings.ini`.

:::note Locatie van het Configuratiebestand
Op Palworld dedicated servers worden de relevante instellingen meestal opgeslagen in `PalWorldSettings.ini`. In de ZAP-Hosting interface bewerk je dit bestand via de sectie `Configs` in plaats van handmatig bestandslocaties te wijzigen.
:::

## Bewerk de Servernaam

Zoek in `PalWorldSettings.ini` naar de sectie `OptionSettings`. De naam die in de serverbrowser wordt getoond, wordt geregeld door de invoer `ServerName`.

Je kunt optioneel ook een serverbeschrijving instellen met `ServerDescription`.

### Voorbeeldconfiguratie

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Je Palworld serverbeschrijving")
```

Als je bestand al een langere `OptionSettings=(...)` regel bevat, hoef je alleen de bestaande waarden voor `ServerName` en optioneel `ServerDescription` aan te passen.

### Waarden die je moet aanpassen

| Config key | Beschrijving | Voorbeeldwaarde |
| --- | --- | --- |
| `ServerName` | De naam die in de Palworld serverbrowser wordt getoond | `"zaphosting"` |
| `ServerDescription` | Optionele beschrijvingstekst die bij de server wordt getoond | `"Publieke survival server"` |

:::caution Bestaande Instellingen Ongewijzigd Laten
`OptionSettings` bevat vaak veel andere serverinstellingen in één regel. Pas alleen de waarden voor `ServerName` en `ServerDescription` aan, tenzij je bewust ook andere opties wilt wijzigen.
:::

## Sla de Wijzigingen Op

Na het aanpassen van de waarden:

1. Sla het bestand `PalWorldSettings.ini` op in de sectie **Configs**.
2. Controleer of de aanhalingstekens en komma’s correct blijven staan.

### Voorbeeld van een Bestaande Regel

Als je bestand een regel bevat zoals het onderstaande voorbeeld, pas dan alleen de relevante tekst aan:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="Publieke survival server",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

## Herstart de Server

Na het opslaan van de configuratie moet je je Palworld-server herstarten zodat de nieuwe naam wordt geladen.

### Pas de Nieuwe Configuratie Toe

Gebruik de herstartfunctie in het ZAP-Hosting game server beheer paneel.

| Actie | Vereist |
| --- | --- |
| Opslaan van `PalWorldSettings.ini` | Ja |
| Server herstarten | Ja |
| Extra console-commando’s uitvoeren | Nee |

:::tip Vertraging bij Update Serverbrowser
Na de herstart verschijnt de aangepaste servernaam mogelijk niet direct voor alle spelers in de serverbrowser. Wacht indien nodig een paar minuten en vernieuw de serverlijst.
:::

## Controleer de Nieuwe Servernaam

Zodra de server is herstart:

1. Open Palworld.
2. Ga naar de multiplayer serverbrowser.
3. Zoek op de naam die je hebt ingesteld bij `ServerName`.

Als de oude naam nog steeds verschijnt, open dan opnieuw `PalWorldSettings.ini` en controleer of:
- de waarde van `ServerName` correct is aangepast
- het bestand succesvol is opgeslagen
- de server volledig is herstart na de wijziging

## Conclusie

Gefeliciteerd, je hebt je Palworld servernaam succesvol gewijzigd. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂