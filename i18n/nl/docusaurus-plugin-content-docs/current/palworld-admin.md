---
id: palworld-admin
title: "Palworld: Admin Instellen"
description: "Ontdek hoe je jouw Palworld-server beveiligt met een admin-wachtwoord en vertrouwde spelers effectief beheert → Leer het nu"
sidebar_label: Admin Instellen
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


##Introductie
In deze gids bekijken we hoe je je server configureert met een admin-wachtwoord en jezelf toevoegt als admin in-game. Dit wachtwoord kun je delen met vertrouwde spelers om ze toegang te geven tot verschillende admin-commando’s. Meer weten over deze servercommando’s? Check dan onze [Server Commands](palworld-server-commands.md) gids.
<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ramgExKNxeLeDdL/preview" title="Palworld server in slechts ÉÉN MINUUT instellen!" description="Snap je het beter als je dingen in actie ziet? Wij fixen het voor je! Duik in onze video die alles helder uitlegt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>

<InlineVoucher />

## Je Admin-wachtwoord instellen

Eerst moet je bij je configuratie-instellingen komen. Er zijn een paar manieren om dit te doen, we zetten ze hieronder op een rijtje inclusief instructies voor het instellen van het wachtwoord. Wij raden de **Webinterface** optie aan, omdat dit het makkelijkst is. Zodra je je admin-wachtwoord hebt ingesteld, kun je door naar de volgende stap.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

De meest gebruiksvriendelijke manier is via de **Instellingen** sectie in de webinterface van je game server.

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Zoek in het **Instellingen** gedeelte naar de optie **Game server password**. Vul hier het wachtwoord in dat je wilt gebruiken.

![](https://screensaver01.zap-hosting.com/index.php/s/aQYQDYMP34NnNXr/preview)

:::info
Heb je een wachtwoord gekozen? Scroll dan naar boven en klik op de groene **Opslaan** knop om het te bevestigen.

![](https://screensaver01.zap-hosting.com/index.php/s/YG5MZ6Jt8SdFy4A/preview)
:::

</TabItem>

<TabItem value="configs" label="Via WI Config-bestand">

#### Via WI Config-bestand

:::note
De server moet uitstaan voordat je het config-bestand kunt aanpassen. Als je het bestand aanpast en daarna de server herstart, worden je wijzigingen ongedaan gemaakt.
:::

Voor wie liever direct het ruwe bestand bewerkt: ga naar de **Configs** sectie in de webinterface van je game server en klik op de blauwe knop om het bestand te bewerken, zoals hieronder:

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

Er opent dan een teksteditor op de site waarmee je het bestand kunt aanpassen. Zoek de optie **AdminPassword** in het bestand (gebruik `CTRL+F` om te zoeken) en pas deze aan naar het admin-wachtwoord dat je wilt instellen. Sla daarna het bestand op en start je server.

![](https://screensaver01.zap-hosting.com/index.php/s/gpBjxxmdsWKD4t2/preview)

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
De server moet uitstaan voordat je het config-bestand kunt aanpassen. Als je het bestand aanpast en daarna de server herstart, worden je wijzigingen ongedaan gemaakt.
:::

De laatste manier om het ruwe bestand te bereiken is via FTP. Als je niet bekend bent met FTP, raden we je aan onze [Toegang via FTP](gameserver-ftpaccess.md) gids te bekijken. Deze methode duurt wat langer en als je het bestand direct wilt aanpassen, raden we aan gewoon de **Configs** sectie in de webinterface te gebruiken zoals hierboven beschreven.

</TabItem>
</Tabs>

## Jezelf als admin instellen

Als je admin-wachtwoord staat, moet je jezelf als admin toevoegen. Start Palworld en verbind met je server. Hulp nodig? Check dan onze [Connect to Server](palworld-connect.md) gids.

Open in-game de chat met `Enter`. Typ dan het volgende commando, waarbij je `[password]` vervangt door het admin-wachtwoord dat je net hebt ingesteld:

```
/AdminPassword [password]
```

![](https://screensaver01.zap-hosting.com/index.php/s/75D5ejaWNM6oYNX/preview)

Je krijgt een succesmelding in de chat als het klopt. Krijg je een foutmelding? Check dan of het admin-wachtwoord dat je hebt ingevoerd precies hetzelfde is als dat wat je in de vorige stap hebt ingesteld.

<InlineVoucher />