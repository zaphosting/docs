---
id: palworld-supply-drop-settings
title: "Palworld: Supply Drop Instellingen"
description: "Leer hoe je de frequentie van supply drops in Palworld aanpast op je Palworld game server door de SupplyDropSpan instelling handmatig te wijzigen. -> Leer nu meer"
sidebar_label: Palworld: Supply Drop Instellingen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld bevat supply drops die op vaste tijden verschijnen en nuttige resources kunnen bevatten. In deze gids leer je hoe je handmatig de frequentie van supply drops aanpast op je ZAP-Hosting Palworld game server door het juiste configuratiebestand te bewerken en de wijzigingen correct toe te passen.

## Voorbereiding

Voordat je begint, zorg dat je toegang hebt tot je Palworld game server via de ZAP-Hosting webinterface en dat de server beschikbaar is in je game server beheer.

:::info Handmatige Configuratie Vereist
Deze setup voer je uit door handmatig de Palworld serverconfiguratie te bewerken. Je opent het configuratiebestand via de **Configs** sectie in je game server beheer.
:::

## Vind het Configuratiebestand

Om het interval van supply drops te wijzigen, moet je het bestand `PalWorldSettings.ini` bewerken.

In je ZAP-Hosting game server beheer:

1. Open je Palworld server.
2. Ga naar **Configs**.
3. Open het bestand `PalWorldSettings.ini`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note Locatie van het Configuratiebestand
Bij ZAP-Hosting worden de relevante Palworld instellingen voor gameplay meestal beheerd via het bestand `PalWorldSettings.ini` in het **Configs** gedeelte van je serverbeheer. Als je interface iets anders is, gebruik dan de lijst met beschikbare configbestanden en zoek specifiek naar `PalWorldSettings.ini`.
:::

## Bewerk de Supply Drop Instelling

De instelling voor de frequentie van supply drops heet `SupplyDropSpan`.

Deze waarde bepaalt het interval tussen supply drops in **minuten**.

### Vind de Juiste Sectie

In `PalWorldSettings.ini` worden Palworld serverinstellingen meestal opgeslagen binnen de regel `OptionSettings`. Je moet het bestaande instellingenblok vinden en controleren of `SupplyDropSpan` al aanwezig is.

Als het al bestaat, wijzig dan de waarde.

Als het niet bestaat, voeg het dan toe binnen de `OptionSettings=(...)` sectie samen met de andere instellingen, gescheiden door komma’s.

### Configuratie Invoer

Gebruik het volgende formaat:

```ini
SupplyDropSpan=[your_value]
```

Vervang `[your_value]` door het aantal minuten dat je wilt instellen.

### Voorbeeldwaarden

| Instelling | Betekenis |
| --- | --- |
| `SupplyDropSpan=180` | Standaard interval van 3 uur |
| `SupplyDropSpan=60` | Supply drops elke 1 uur |
| `SupplyDropSpan=360` | Supply drops elke 6 uur |
| `SupplyDropSpan=30` | Zeer frequente supply drops |

Hier is een voorbeeld van hoe de instelling eruit kan zien binnen het volledige `OptionSettings` blok:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt",SupplyDropSpan=60)
```

:::caution Bestaande Syntax Niet Veranderen
Verwijder geen komma’s, haakjes of andere bestaande waarden in de `OptionSettings` regel. Een fout in de opmaak kan ervoor zorgen dat de server de configuratie niet correct kan laden.
:::

## Opslaan en Wijzigingen Toepassen

Na het aanpassen van de waarde:

1. Sla de wijzigingen op in `PalWorldSettings.ini`.
2. Herstart je Palworld server via het ZAP-Hosting game server beheer.

Een herstart is nodig omdat Palworld deze gameplay-instelling niet live toepast terwijl de server draait.

### Is een Extra Commando Nodig?

Normaal is er geen extra in-game of console commando nodig voor deze wijziging. Het herstarten van de server is de vereiste stap om de nieuwe `SupplyDropSpan` waarde te laden.

| Actie | Vereist |
| --- | --- |
| `PalWorldSettings.ini` bewerken | Ja |
| `SupplyDropSpan` toevoegen of wijzigen | Ja |
| Extra console commando uitvoeren | Nee |
| Server herstarten na opslaan | Ja |

## Controleer de Instelling

Zodra de server opnieuw is gestart, zou het nieuwe supply drop interval actief moeten zijn.

Omdat deze instelling getimede wereldgebeurtenissen regelt, kan het zijn dat je moet wachten op de volgende spawn-cyclus om de wijziging volledig in-game te bevestigen. Als je een korter interval instelt zoals `60` of `30`, is het makkelijker om te verifiëren.

:::tip Sneller Wijzigingen Testen
Wil je snel bevestigen dat de instelling werkt zonder uren te wachten? Stel dan tijdelijk `SupplyDropSpan=30` in. Na het testen kun je het weer aanpassen naar je gewenste lange termijn waarde.
:::

## Problemen Oplossen

### Instelling Wordt Niet Toegepast

Als de frequentie van supply drops niet lijkt te veranderen, controleer dan het volgende:

- Zorg dat `SupplyDropSpan` precies zo geschreven is
- Controleer dat de waarde binnen de `OptionSettings=(...)` sectie staat
- Kijk of er geen ontbrekende komma’s of haakjes zijn
- Herstart de server na het opslaan van het bestand

### Server Heeft Configuratiefouten

Als de server niet start na het bewerken van het bestand, herstel dan de vorige configuratie en controleer de syntax zorgvuldig.

:::danger Verkeerde INI Opmaak
Palworld slaat veel gameplay instellingen op in één enkele `OptionSettings` regel. Zelfs één verkeerd teken kan de config breken. Controleer je wijzigingen altijd goed voordat je opslaat.
:::

## Conclusie

Gefeliciteerd, je hebt de Palworld supply drop instellingen succesvol aangepast. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂