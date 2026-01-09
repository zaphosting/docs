---
id: palworld-configuration
title: "Palworld: Palworld Serverconfiguratie"
description: "Ontdek hoe je Palworld serverinstellingen kunt aanpassen voor een gepersonaliseerde game-ervaring en optimaliseer je gameplay → Leer nu meer"
sidebar_label: Serverconfiguratie
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Palworld-servers bieden een breed scala aan configuratieparameters die je helemaal naar wens kunt aanpassen. In deze gids nemen we alle momenteel beschikbare configuratie-opties door en leggen we ze stuk voor stuk uit.
<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/LsRSG5MHK9PyQZF/preview" title="Palworld server in slechts ÉÉN MINUUT instellen!" description="Snap je het beter als je het in actie ziet? Wij hebben je gedekt! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>

<InlineVoucher />

## Toegang tot je Configuratiebestand

Allereerst moet je toegang krijgen tot je configuratiebestand om parameters te kunnen aanpassen. Er zijn meerdere manieren om dit bestand te bewerken.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

De meest gebruiksvriendelijke manier is door naar de **Instellingen** sectie van de webinterface van je game server te gaan en daar de juiste instellingen te zoeken, zoals hieronder te zien is:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via WI Config bestand">

#### Via WI Config Bestand

:::note
De server moet gestopt zijn voordat je het config-bestand kunt bewerken. Als je het config-bestand aanpast en de server herstart, worden je wijzigingen ongedaan gemaakt.
:::

Voor gebruikers die het ruwe bestand direct willen aanpassen, kun je dit doen via de **Configs** sectie op de webinterface van je game server door op de blauwe 'bestand bewerken' knop te klikken, zoals hieronder te zien is:

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

Dit opent een teksteditor direct op de site zodat je het bestand kunt aanpassen.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
De server moet gestopt zijn voordat je het config-bestand kunt bewerken. Als je het config-bestand aanpast en de server herstart, worden je wijzigingen ongedaan gemaakt.
:::

De laatste manier om het ruwe bestand te bereiken is via FTP. Als je niet bekend bent met FTP, raden we je aan onze [Toegang via FTP](gameserver-ftpaccess.md) gids te bekijken. Deze methode duurt echter langer en als je het bestand direct wilt aanpassen, raden we aan gewoon de **Configs** sectie op de webinterface van je game server te gebruiken zoals hierboven beschreven.

</TabItem>
</Tabs>

## Serverconfiguratie-opties

### Crossplay ondersteuning inschakelen

Palworld dedicated servers ondersteunen meerdere platforms, zodat je crossplay kunt gebruiken. Standaard staat de Steam-platform ingesteld. Wil je ondersteuning voor Xbox, PS5 en Mac activeren? Dat kan via de instellingen in de game server administratie.

![img](https://screensaver01.zap-hosting.com/index.php/s/nD5kBoNH2JBfoxF/preview)

:::info
Crossplay tussen Steam & Microsoft Store/Xbox versies is nog niet mogelijk. Je server kan ingesteld worden om óf voor Steam óf voor Microsoft Store/Xbox te werken.
:::

:::info
Op Xbox consoles kun je niet direct via het IP-adres verbinden. Als je op Xbox wilt spelen, moet je je dedicated server dus openbaar maken.

Zorg er ook voor dat je een servernaam instelt die makkelijk te vinden is. Bekijk onze [Serverconfiguratie](palworld-configuration.md) gids voor hoe je dit doet.
:::

### Belangrijke Serverinstellingen

Dit zijn serverconfiguratie-opties die essentieel zijn om je serverlijst aan te passen, te beveiligen met wachtwoorden en meer interne instellingen.

:::tip
We raden af om de poort- of IP-instellingen te wijzigen, want deze worden automatisch door de game server ingesteld. Het veranderen van IP/poort kan je server kapot maken!
:::

| Parameternaam                 | Voorbeeld                              | Beschrijving                                               |
| ---------------------------- | ------------------------------------ | ---------------------------------------------------------- | 
| ServerPlayerMaxNum            | 4                                    | Maximaal aantal spelers dat kan joinen (max 32)            |
| ServerName                   | ZAP-Hosting Docs Test                 | Naam van je server                                         |
| ServerDescription            | Dit is een server die we testen       | Beschrijving van je server                                 |
| AdminPassword                | ctRQvhPAWVHq                         | Admin wachtwoord voor admin-commando’s                     |
| ServerPassword               | iLoveZAP!2024                       | Wachtwoord om de server af te sluiten (privé)              |
| PublicPort                  | 8211 (standaard)                     | Publieke poort waarop de server draait                      |
| PublicIP                    | 123.123.123.123                     | Publiek IP-adres van de server                              |
| RCONEnabled                 | true                                | Schakel RCON in of uit                                     |
| RCONPort                   | 8222                                | Poortnummer voor RCON                                      |

Na het aanpassen, sla het bestand op en herstart je server. Bij de volgende start gebruikt je server de nieuwe instellingen.

### Gameplay Configuratie-instellingen

Dit zijn minder belangrijke serverconfiguraties, vooral bedoeld om gameplay, progressie, en de map/wereld aan te passen.

| Parameternaam                   | Beschrijving                                      | 
| ------------------------------ | ------------------------------------------------ | 
| DayTimeSpeedRate               | Snelheid van de tijd overdag                      |
| NightTimeSpeedRate             | Snelheid van de tijd ’s nachts                     |
| ExpRate                      | Ervaringspunten (XP) verdieningssnelheid           |
| PalCaptureRate               | Snelheid waarmee je Pals vangt                      |
| PalSpawnNumRate              | Verschijningssnelheid van Pals                      |
| PalDamageRateAttack          | Schade multiplier van Pals bij aanval               |
| PalDamageRateDefense         | Schade multiplier aan Pals bij verdediging          |
| PlayerDamageRateAttack       | Schade multiplier van speler bij aanval              |
| PlayerDamageRateDefense      | Schade multiplier aan speler bij verdediging         |
| PlayerStomachDecreaceRate    | Hongersnelheid van speler                             |
| PlayerStaminaDecreaceRate    | Uithoudingsvermogen vermindering bij speler          |
| PlayerAutoHPRegeneRate       | Automatische HP regeneratie van speler                |
| PlayerAutoHpRegeneRateInSleep | HP regeneratie van speler tijdens slapen             |
| PalStomachDecreaceRate       | Hongersnelheid van Pal                                |
| PalStaminaDecreaceRate       | Uithoudingsvermogen vermindering bij Pal              |
| PalAutoHPRegeneRate          | Automatische HP regeneratie van Pal                    |
| PalAutoHpRegeneRateInSleep   | HP regeneratie van Pal tijdens slapen (in Palbox)     |
| BuildObjectDamageRate        | Schade multiplier aan structuren                       |
| BuildObjectDeteriorationDamageRate | Snelheid van structuurverslechtering               |
| CollectionDropRate           | Multiplicator voor verzamelbare items                  |
| CollectionObjectHpRate       | HP multiplier voor verzamelbare objecten               |
| CollectionObjectRespawnSpeedRate | Respawn snelheid van verzamelbare objecten          |
| EnemyDropItemRate            | Multiplicator voor gedropte items                       |
| DeathPenalty                 | Straf bij dood (Geen/Item)                              |
| GuildPlayerMaxNum            | Maximaal aantal spelers in een guild                    |
| PalEggDefaultHatchingTime    | Tijd (uren) om een groot ei uit te broeden              |

Na het aanpassen, sla het bestand op en herstart je server. Bij de volgende start gebruikt je server de nieuwe instellingen.

<InlineVoucher />