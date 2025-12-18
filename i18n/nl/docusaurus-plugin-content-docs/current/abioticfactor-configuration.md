---
id: abioticfactor-configuration
title: "Abiotic Factor: Serverconfiguratie"
description: "Ontdek hoe je de Abiotic Factor serverinstellingen kunt aanpassen om je gameplay-ervaring en serverprestaties te optimaliseren → Leer nu meer"
sidebar_label: Serverconfiguratie
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Abiotic Factor servers bieden een breed scala aan configuratieparameters die je helemaal naar eigen wens kunt aanpassen. In deze gids nemen we alle beschikbare configuratieopties door en leggen we ze stuk voor stuk uit.

<InlineVoucher />

## Toegang tot je Configuratiebestand

Allereerst moet je toegang krijgen tot je configuratiebestand om parameters te kunnen aanpassen. Er zijn meerdere manieren om dit bestand te bewerken.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

De meest gebruiksvriendelijke methode is door naar de **Instellingen** sectie van je gameserver webinterface te gaan en daar de juiste instellingen te zoeken, zoals hieronder te zien is:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via WI Config bestand">

#### Via WI Config Bestand

:::note
De server moet gestopt zijn voordat je het config-bestand kunt bewerken. Als je het bestand aanpast en de server herstart, worden je wijzigingen ongedaan gemaakt.
:::

Voor gebruikers die het ruwe bestand direct willen aanpassen, kun je dit doen via de **Configs** sectie in de webinterface van je gameserver door op de blauwe bewerkknop te klikken, zoals hieronder te zien is:

![](https://screensaver01.zap-hosting.com/index.php/s/dPZLs4YMQopCpfd/preview)

Dit opent een teksteditor direct op de site zodat je het bestand kunt aanpassen.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
De server moet gestopt zijn voordat je het config-bestand kunt bewerken. Als je het bestand aanpast en de server herstart, worden je wijzigingen ongedaan gemaakt.
:::

De laatste manier om het ruwe bestand te bereiken is via FTP. Als je niet bekend bent met FTP, raden we je aan om eerst de [Toegang via FTP](gameserver-ftpaccess.md) gids te bekijken. Deze methode duurt wat langer en als je het bestand direct wilt aanpassen, raden we aan om gewoon de **Configs** sectie in de webinterface te gebruiken zoals hierboven beschreven.

</TabItem>
</Tabs>

## Serverconfiguratie Opties

In de onderstaande secties vind je tabellen met informatie over een breed scala aan configuratieopties die beschikbaar zijn voor Abiotic Factor dedicated servers.

### Belangrijke Serverinstellingen

Deze instellingen kun je alleen direct aanpassen via het webinterface paneel van je gameserver onder de **Instellingen** sectie.

| Parameter Naam    | Voorbeeld               | Beschrijving                                                              |
| ----------------- | ----------------------- | ------------------------------------------------------------------------- | 
| Servernaam        | ZAP-Hosting Docs Test   | Stel de naam van je server in                                             |
| Wachtwoord        | iLoveZAP!2024           | Stel een wachtwoord in voor je server, of laat leeg voor geen wachtwoord |

Nadat je je wijzigingen hebt doorgevoerd, zorg je dat je het bestand opslaat waar nodig en je server herstart. De volgende keer dat je server opstart, gebruikt hij de door jou opgegeven instellingen.

### Gameplay Configuratie Instellingen

Abiotic Factor heeft een breed scala aan gameplay configuratieopties die **Sandbox Settings** worden genoemd. Er zou een bestand genaamd **SandboxSettings.ini** aanwezig moeten zijn in de hoofdmap `world` wanneer je via FTP toegang hebt tot je server.

Als je dit bestand niet ziet, maak het dan lokaal aan op je systeem en kopieer de volgende inhoud: [Abiotic Factor Default SandboxSettings.ini GitHub](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

Je kunt nu de waarden aanpassen zoals je wilt. Als je klaar bent, upload je dit bestand via FTP naar de hoofdmap `world`, op het volgende pad:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

In de onderstaande tabel vind je een samenvatting van een aantal belangrijke gameplay instellingen uit het **SandboxSettings.ini** bestand. Wil je alle opties bekijken, check dan de [Officiële GitHub Pagina](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

| Parameter Naam               | Voorbeeld    | Beschrijving                                                          |
| ---------------------------- | ------------ | -------------------------------------------------------------------- | 
| LootRespawnEnabled           | true/false   | Zet aan of uit of loot op de kaart moet respawnen                    |
| PowerSocketsOffAtNight       | true/false   | Zet aan of uit of de stroom ’s nachts uit moet zijn                  |
| DayNightCycleSpeedMultiplier | 1.0          | Stel de snelheidsfactor in van de dag- en nachtcyclus                |
| EnemySpawnRate               | 1.0          | Stel de frequentie in waarmee vijanden spawnen                       |
| EnemyHealthMultiplier        | 1.0          | Stel een multiplier in voor de gezondheid van vijanden               |
| EnemyPlayerDamageMultiplier  | 1.0          | Stel een multiplier in voor hoeveel schade vijanden aan spelers doen |
| DetectionSpeedMultiplier     | 1.0          | Stel een multiplier in voor hoe snel vijanden spelers kunnen detecteren |
| PlayerXPGainMultiplier       | 1.0          | Stel een multiplier in voor de XP die spelers verdienen              |
| ItemStackSizeMultiplier      | 1.0          | Stel een multiplier in voor hoeveel items in één inventory slot passen |
| ItemDurabilityMultiplier     | 1.0          | Stel een multiplier in voor de duurzaamheid van items                |
| ShowDeathMessages            | true/false   | Zet aan of uit of spelers meldingen krijgen van entiteitendoden      |
| AllowRecipeSharing           | true/false   | Zet aan of uit of spelers recepten kunnen delen                      |

Nadat je je wijzigingen hebt doorgevoerd, zorg je dat je het bestand opslaat waar nodig en je server herstart. De volgende keer dat je server opstart, gebruikt hij de door jou opgegeven instellingen.

<InlineVoucher />