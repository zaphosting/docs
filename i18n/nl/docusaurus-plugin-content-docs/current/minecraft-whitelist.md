---
id: minecraft-whitelist
title: "Minecraft: Server Whitelist activeren en bewerken"
description: "Ontdek hoe je jouw Minecraft-server beveiligt door spelers toegang te geven via whitelist-functies en bescherm je gameplay → Leer het nu"
sidebar_label: Whitelist
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
De **Minecraft Whitelist** is een optie om je server te beschermen door alleen geselecteerde spelers op de lijst toe te laten. Standaard biedt Minecraft geen serverwachtwoord-optie zoals andere games dat doen.

![](https://screensaver01.zap-hosting.com/index.php/s/zbbRQdonbZPTeib/preview)

<YouTube videoId="nyor26XxwLY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oSWCcxscEcDzrq7/preview" title="Hoe je de WHITELIST activeert op je Minecraft Server" description="Snap je het beter als je dingen in actie ziet? Wij fixen het voor je! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>

<InlineVoucher />

## Whitelist activeren



### Activeren (Config)

Om de whitelist te activeren, moet de waarde van de command in de **server.properties** Config op **true** worden gezet. Een server restart is nodig om de wijziging door te voeren.

```
white-list=true
```



### Activeren (Chat)

Je kunt de whitelist-optie ook in-game of via de live console aanzetten:

```
/whitelist on			(Whitelist inschakelen)
/whitelist off			(Whitelist uitschakelen)
```



Om de whitelist via de game te activeren, heb je operatorrechten nodig! Anders kan dit ook via de live console (interface). Let op: de commands moeten daar zonder het **/** teken worden uitgevoerd.


![](https://screensaver01.zap-hosting.com/index.php/s/rxsCnTeEarycfR7/preview)



## Whitelist beheren



### Spelers toevoegen / verwijderen



**Chat**

Je kunt spelers toevoegen of verwijderen van de whitelist met de volgende commands:

```
/whitelist add SpelerNaam
/whitelist remove SpelerNaam
```



**white-list.json**

Als je de UUID van de speler weet, kun je de speler ook handmatig toevoegen via het **white-list.json** bestand. Dit bestand is te bereiken en aan te passen via FTP. Hier vind je instructies voor FTP-toegang: [Toegang via FTP](gameserver-ftpaccess.md)

```
[
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Speler1"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Speler2"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Speler3"
  }
]
```



### Lijst updaten

Als je spelers handmatig toevoegt, moet je de whitelist in-game herladen. Dit kan ook met een command, zodat je de server niet hoeft te herstarten:

```
 /whitelist reload
```



### Lijst bekijken

Wil je niet elke keer het whitelist-bestand via FTP openen? Dan kun je ook alle spelers op de whitelist tonen met dit command:

```
/whitelist list
```


<InlineVoucher />