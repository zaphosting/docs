---
id: dedicated-windows-port
title: "Dedicated Server: Windows Defender Firewall Regels Beheren"
description: "Ontdek hoe je Windows Defender Firewall regels effectief beheert en port forwarding optimaliseert voor veilige servercommunicatie → Leer het nu"
sidebar_label: Port Forwarding (Firewall)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Windows OS heeft z’n eigen Windows Defender Firewall die het inkomende en uitgaande verkeer tussen je server en internet regelt. In deze gids nemen we je mee door het beheren van firewallregels en geven we handige tips voor port forwarding.

## Windows Defender Firewall openen

Windows OS bevat de **Windows Defender Firewall met Geavanceerde Beveiliging** als standaard systeemapp, waarmee je makkelijk al je firewallregels op één plek beheert.

Je opent deze simpel door te zoeken in de Windows zoekbalk of door op de Windows-toets/icoon te drukken en via het startmenu te zoeken.

![](https://screensaver01.zap-hosting.com/index.php/s/MEdQwo2do8zA84m/preview)

## Regels beheren

De meeste apps en processen, vooral diegene die via internet bereikbaar moeten zijn zoals game- of webservers, hebben port forwarding nodig zodat clients met jouw server (de host) kunnen communiceren.

:::info
Standaard opent Windows alleen de firewall voor apps die het nodig hebben, en houdt alle andere poorten dicht. Dit voorkomt onnodige blootstelling van poorten en verkleint het risico. Daarom zie je bijvoorbeeld soms UAC-meldingen bij het voor het eerst starten van games, om een nieuwe firewallregel te bevestigen.
:::

In Windows beheer je regels op twee manieren: door regels te maken voor programma’s of door regels te maken voor poorten (waardoor elke app of proces die poort gebruikt, wordt toegestaan).

Er zijn twee soorten regels:
- Inkomende regel: regelt inkomend verkeer (van internet naar jouw server).
- Uitgaande regel: regelt uitgaand verkeer (van jouw server naar internet).

Meestal moet je bij port forwarding beide regels aanmaken om communicatie met clients toe te staan. Dit hangt echter af van jouw specifieke situatie en setup.

![](https://screensaver01.zap-hosting.com/index.php/s/a8HCX6ZyWfemQtN/preview)

### Programma Regels

Een Programma regel maken is meestal de beste keuze, omdat je hiermee communicatie beperkt tot een specifiek programma of proces, in plaats van een hele poort open te zetten waar elk programma gebruik van kan maken.

Je gaat nu twee Programma Regels maken: een Uitgaande en een Inkomende regel die beide verbindingen toestaan.

In het voorbeeld hieronder maak je alleen de **Inkomende** regel aan. De stappen zijn exact hetzelfde, dus herhaal ze ook voor de Uitgaande regel.

Begin met rechtsklikken op **Inbound Rules** in de zijbalk en kies **New Rules...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

Selecteer in het eerste scherm de optie **Program** als type regel.

![](https://screensaver01.zap-hosting.com/index.php/s/NPm9ae8BsD78An9/preview)

Selecteer nu het programma waarvoor je de forwardingregel wilt maken via de browse-knop. In dit voorbeeld is Mozilla Firefox gekozen als voorbeeldapp.

![](https://screensaver01.zap-hosting.com/index.php/s/XsS2iTa4JjXF8j5/preview)

Kies bij actie de optie **Allow the Connection**.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Laat in het profiel-scherm alle opties aangevinkt en ga door naar het laatste scherm. Hier geef je de regel een handige naam die je makkelijk onthoudt, en eventueel een beschrijving.

Klik op **Finish** om de regel aan te maken.

![](https://screensaver01.zap-hosting.com/index.php/s/dpWEYFYGtWQYkw3/preview)

Je hebt nu succesvol je eigen Programma Regel voor je Windows server aangemaakt. Herhaal dit om ook een **Uitgaande Regel** te maken, maar dan onder de Outbound Rules.

### Poort Regels

Een algemene Poort Regel maken kan ook handig zijn voor veel situaties en werkt ongeveer hetzelfde.

Je gaat nu twee Poort Regels maken: een Uitgaande en een Inkomende regel die beide verbindingen toestaan.

In het voorbeeld hieronder maak je alleen de **Inkomende** regel aan. De stappen zijn exact hetzelfde, dus herhaal ze ook voor de Uitgaande regel.

Begin met rechtsklikken op **Inbound Rules** in de zijbalk en kies **New Rules...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

Selecteer in het eerste scherm de optie **Port** als type regel.

![](https://screensaver01.zap-hosting.com/index.php/s/eobA3wzbwQSqjpK/preview)

Geef nu het poorttype op (TCP of UDP) en de poort(en) die je wilt forwarden. Wil je zowel TCP als UDP forwarden, maak dan twee aparte regels, één per poorttype.

In dit voorbeeld is poort 25565 (TCP) gebruikt, de standaard Minecraft poort.

![](https://screensaver01.zap-hosting.com/index.php/s/yMco5L6ERWiLEHk/preview)

Kies bij actie de optie **Allow the Connection**.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

Laat in het profiel-scherm alle opties aangevinkt en ga door naar het laatste scherm. Hier geef je de regel een handige naam die je makkelijk onthoudt, en eventueel een beschrijving.

Klik op **Finish** om de regel aan te maken.

![](https://screensaver01.zap-hosting.com/index.php/s/Ro5k6JgTF73exoH/preview)

Je hebt nu succesvol je eigen Poort Regel voor je Windows server aangemaakt. Herhaal dit om ook een **Uitgaande Regel** te maken, maar dan onder de Outbound Rules.