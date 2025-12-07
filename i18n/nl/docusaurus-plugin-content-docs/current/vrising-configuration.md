---
id: vrising-configuration
title: "V Rising: Serverconfiguratie"
description: "Ontdek hoe je V Rising serverinstellingen kunt aanpassen voor optimale gameplay en volledige controle over je serveromgeving → Leer nu meer"
sidebar_label: Serverconfiguratie
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

V Rising-servers bieden een breed scala aan configuratieparameters die je helemaal naar eigen wens kunt instellen. In deze gids duiken we in alle beschikbare configuratie-opties en leggen we ze stuk voor stuk uit.

<InlineVoucher />

## Toegang tot je Configuratiebestand

Allereerst moet je toegang krijgen tot je configuratiebestand om parameters aan te passen. Er zijn meerdere manieren om dit bestand te bewerken.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

De meest gebruiksvriendelijke manier is via de **Instellingen** sectie in het webinterface van je game server. Zoek daar naar de juiste instellingen, zoals hieronder te zien is:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via WI Config-bestand">

#### Via WI Config-bestand

:::note
De server moet gestopt zijn voordat je het config-bestand kunt bewerken. Als je het bestand aanpast en de server daarna herstart, worden je wijzigingen ongedaan gemaakt.
:::

Voor wie liever direct het ruwe bestand bewerkt: ga naar de **Configs** sectie in het webinterface van je game server en klik op de blauwe 'bestand bewerken' knop, zoals hieronder:

![](https://screensaver01.zap-hosting.com/index.php/s/3Dg6NCtN9akx8bg/preview)

Er opent dan een teksteditor op de site waarmee je het bestand kunt aanpassen.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
De server moet gestopt zijn voordat je het config-bestand kunt bewerken. Als je het bestand aanpast en de server daarna herstart, worden je wijzigingen ongedaan gemaakt.
:::

De laatste manier om het ruwe bestand te bereiken is via FTP. Ben je niet bekend met FTP? Check dan onze [Toegang via FTP](gameserver-ftpaccess.md) gids. Deze methode duurt wat langer en als je direct het bestand wilt aanpassen, raden we aan gewoon de **Configs** sectie in het webinterface te gebruiken.

</TabItem>
</Tabs>

## Serverconfiguratie-opties

Hieronder vind je tabellen met informatie over de beschikbare configuratie-opties, zowel voor de server zelf als voor gameplay-instellingen.

:::tip
We raden af om de poortinstellingen aan te passen, want die worden automatisch door de game server geregeld. Poortwijzigingen kunnen je server kapot maken!
:::

### Belangrijke Serverinstellingen

Deze sectie vat de belangrijkste serverinstellingen samen, te vinden in het **ServerHostSettings.json** configuratiebestand. Voor de volledige lijst met opties, check de [officiële GitHub gids van de game](https://github.com/StunlockStudios/vrising-dedicated-server-instructions/blob/master/1.0.x/INSTRUCTIONS.md).

| Parameternaam      | Voorbeeld                | Beschrijving                                                              |
| ------------------ | ------------------------ | ------------------------------------------------------------------------- | 
| Name               | ZAP-Hosting Docs Test    | Stel de naam van je server in                                             |
| Description        | ZAP is the best!         | Stel een beschrijving voor je server in                                  |
| Port               | 9876 (standaard)         | Stel de netwerkpoort in die de game gebruikt                             |
| QueryPort          | 9877 (standaard)         | Stel de querypoort in voor serverinformatie in de serverlijst           |
| MaxConnectedUsers  | 10                       | Maximaal aantal spelers dat tegelijk op de server kan                     |
| MaxConnectedAdmins | 4                        | Aantal admins dat kan joinen als de server vol is                        |
| ServerFps          | 30 (aanbevolen standaard)| Stel de framerate van je server in, we raden aan dit op standaard te laten |
| SaveName           | ZAPDocsTest              | Naam van de wereldsave                                                    |
| Password           | iLoveZAP!2024            | Wachtwoord voor je server, leeg laten betekent geen wachtwoord           |
| ListOnMasterServer | true/false               | Zet aan of uit of je server in de serverlijst moet verschijnen           |
| AutoSaveCount      | 15                       | Hoeveel oudere saves bewaard moeten worden                               |
| AutoSaveInterval   | 600                      | Interval tussen automatische saves in seconden                          |
| RCON Enabled       | true/false               | Zet RCON aan of uit                                                       |
| RCON Port          | 25575                    | Stel de RCON-poort in                                                    |
| RCON Password      | iLoveZAP!2024            | Wachtwoord voor je RCON-verbinding                                       |

Als je klaar bent met aanpassen, sla het bestand op en herstart je server. Bij de volgende start gebruikt je server de nieuwe instellingen.

### Belangrijke Gameplay Configuratie-instellingen

V Rising heeft een hoop parameters om gameplay aan te passen. Hieronder een samenvatting van de belangrijkste, te vinden in het **ServerGameSettings.json** configuratiebestand.

| Parameternaam           | Voorbeeld                       | Beschrijving                                                                                          |
| ----------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------- | 
| GameDifficulty          | Normal                         | Stel de moeilijkheidsgraad van je wereld in                                                         |
| GameModeType            | PvP, PvE                       | Kies het type gamemode voor je wereld                                                               |
| CastleDamageMode        | Always, Never, TimeRestricted  | Wanneer kastelen beschadigd kunnen worden, met VSCastle parameter om tijd in te stellen bij "TimeRestricted" |
| PlayerDamageMode        | Always, TimeRestricted         | Of spelers elkaar kunnen beschadigen, met VSPlayer parameter om tijd in te stellen bij "TimeRestricted" |
| PvPProtectionMode       | Short, Medium, Long            | Hoe lang nieuwe spelers onkwetsbaar zijn                                                             |
| DeathContainerPermission| Anyone, ClanMembers            | Wie loot kan pakken als een speler sterft                                                            |
| CanLootEnemyContainers  | true/false                    | Of spelers kisten van anderen kunnen plunderen die niet in hun clan zitten                            |
| BloodBoundEquipment     | true/false                    | Of je je uitrusting behoudt na de dood                                                               |
| TeleportBoundItems      | true/false                    | Of items teleporteren via Vampire Waygates kunnen blokkeren                                          |
| AllowGlobalChat         | true/false                    | Zet de globale chat aan of uit                                                                        |

Als je klaar bent met aanpassen, sla het bestand op en herstart je server. Bij de volgende start gebruikt je server de nieuwe instellingen.

<InlineVoucher />