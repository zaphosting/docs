---
id: projectzomboid-whitelist
title: "Project Zomboid: Whitelist"
description: "Informatie over hoe je jouw Project Zomboid-server whitelist bij ZAP-Hosting → Leer het nu"
sidebar_label: Whitelist
services:
  - gameserver-projectzomboid
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een whitelist is een toegangscontrole waarbij je expliciet gebruikersaccounts moet aanmaken voordat ze kunnen joinen. In Project Zomboid doe je dit meestal door open registratie uit te schakelen in de serverconfig en vervolgens gebruikers toe te voegen via console-commando’s.

<InlineVoucher />


## Whitelist activeren

Verbind met je server via FTP en open je serverinstellingenbestand. Dit vind je meestal onder `Zomboid/Server/` en het bestand heet zoals je server, bijvoorbeeld `servertest.ini` of `<ServerName>.ini`. Zoek de `Open` instelling en zet deze op false.

```ini
Open=false
```

Sla het bestand op en herstart de server. Met open registratie uitgeschakeld kunnen alleen accounts die jij aanmaakt joinen.

## Whitelisted spelers beheren

Open de Live Console in het ZAP-Hosting gameserverbeheer en maak accounts aan voor toegestane spelers. Gebruik het adduser-commando met een gebruikersnaam en wachtwoord.

```text
/adduser "username" "password"
```

Wil je iemand toegang ontzeggen? Verwijder diegene dan van de whitelist met het speciale commando.

```text
/removeuserfromwhitelist "username"
```

Als je eerder open registratie had en bestaande verbonden accounts wilt omzetten naar whitelist-accounts, gebruik dan het commando dat alle momenteel verbonden gebruikers aan de whitelist toevoegt.

```text
/addalltowhitelist
```

## Controleren of de whitelist werkt

Na het activeren van `Open=false` zou een nieuwe gebruiker die niet met `/adduser` is toegevoegd niet moeten kunnen joinen. Test dit met een whitelisted account om toegang te bevestigen.

Kunnen niet-whitelisted gebruikers toch joinen? Check dan of je het juiste actieve `<ServerName>.ini` bestand hebt aangepast en de server hebt herstart.

## Conclusie

Als je alle stappen hierboven hebt gevolgd, is je whitelist nu actief en bepaal jij precies wie er op de server mag. Werkt toegang toch niet zoals verwacht? Herstart de server nogmaals en controleer het bestand of de command output om zeker te zijn dat de wijziging is doorgevoerd.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />