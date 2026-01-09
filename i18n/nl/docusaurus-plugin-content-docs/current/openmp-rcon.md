---
id: openmp-rcon
title: "Open.mp: Server met RCON gebruiken"
description: "Ontdek hoe je game servers op afstand beheert met RCON voor efficiënte servercontrole en veiligheid → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wat is RCON?

RCON is een interface in verschillende programma’s, zoals game servers, waarmee je op afstand onderhoud en beheer kunt uitvoeren. Met deze interface kun je servers beheren die al draaien en bereikbaar zijn. Je krijgt toegang tot de interface via een speciaal remote beheerprogramma en kunt zo de server aansturen.

<InlineVoucher />

## Toegang tot je Configuratiebestand

Om RCON te gebruiken, moet je eerst toegang krijgen tot de configuratie van je server en deze functie inschakelen. Je kunt het configuratiebestand bewerken via de webinterface van je server of direct via FTP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="configs" label="Via WI Config bestand">

#### Via Webinterface Config Bestand

We raden deze methode aan omdat het het makkelijkst is.

:::note
De server moet gestopt zijn voordat je de config kunt aanpassen. Als je de config bewerkt en daarna de server herstart, worden je wijzigingen ongedaan gemaakt.
:::

Ga simpelweg naar de **Configs** sectie in de webinterface van je game server en klik op de blauwe knop om het bestand te bewerken, zoals hieronder:

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

Er opent een teksteditor waarin je het bestand direct kunt aanpassen. Zoek in het bestand naar de `rcon` sectie. Zet hier de `enable` parameter op `true`, bijvoorbeeld: `"enable":true`. Gebruik `CTRL+F` om de zoekfunctie van je browser te openen, dat helpt bij het vinden.

In dezelfde sectie stel je ook een wachtwoord in voor je RCON toegang door de `password` parameter aan te passen. Dit voorkomt ongeautoriseerde toegang en moet privé blijven.

![](https://screensaver01.zap-hosting.com/index.php/s/WPPbd6C7k6m5Ja7/preview)

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
De server moet gestopt zijn voordat je de config kunt aanpassen. Als je de config bewerkt en daarna de server herstart, worden je wijzigingen ongedaan gemaakt.
:::

Een andere manier om je configuratiebestand te bewerken is via FTP. Als je niet bekend bent met FTP, raden we je aan onze [Toegang via FTP](gameserver-ftpaccess.md) gids te bekijken. Deze methode duurt wat langer en als je het bestand direct wilt aanpassen, raden we aan gewoon de **Configs** sectie in de webinterface te gebruiken zoals hierboven beschreven.

Als je verbonden bent met je server via FTP, ga dan naar de volgende map:
```
..g[zap_id]/gta-openmp/
```

In deze map vind je het `config.json` bestand. Dit is het configuratiebestand van de server dat je moet aanpassen.

Zoek in het bestand naar de `rcon` sectie. Zet de `enable` parameter op `true` en stel een wachtwoord in voor je RCON interface via de `password` parameter.

</TabItem>
</Tabs>

:::info
Vergeet niet je server te herstarten nadat je de configuratie hebt aangepast.
:::

## RCON gebruiken

Nu je RCON hebt ingeschakeld in de configuratie van je server, kun je via de poort die in het bestand staat Open.mp’s RCON interface bereiken.

Je hebt een RCON programma nodig om verbinding te maken. Wij raden [RCON Console](https://sourceforge.net/projects/rconconsole/) aan, omdat het open-source is.

In het RCON programma van jouw keuze voer je het IP-adres en de poort van je server in. Zorg dat je game server online en actief is.

Als de verbinding lukt, kun je nu commando’s sturen naar je Palworld server via het RCON Console programma dat je hebt gekozen.

:::tip
Check onze [Server Commando’s](openmp-server-commands.md) om alle beschikbare commando’s te zien die je via RCON kunt uitvoeren.
:::

Je hebt RCON succesvol ingeschakeld op je Palworld server.

<InlineVoucher />