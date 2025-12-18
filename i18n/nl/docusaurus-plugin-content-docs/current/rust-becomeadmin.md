---
id: rust-becomeadmin
title: "Rust: Word admin op je eigen server"
description: "Ontdek hoe je administratorrechten toekent voor volledige servercontrole en je game effectief beheert → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toewijzen van administratorrechten geeft je eenvoudige en uitgebreide controle over je server. Als admin kun je alle beschikbare opties en functies van het spel direct in de game gebruiken. Hieronder leggen we stap voor stap uit hoe je administratorrechten aan jouw server toekent.  
<InlineVoucher />

## Admin worden via RCON

Met RCON kun je een commando uitvoeren om jezelf admin te maken.  
Eerst moet je [verbinden via RCON](rust-connectrcon.md).

Als je verbonden bent, ga je naar de plek waar je consolecommando’s kunt invoeren. In ons voorbeeld gebruiken we RustAdmin.

![](https://screensaver01.zap-hosting.com/index.php/s/zpJH32AHCySP8qT/preview)

Daar voer je het volgende commando in:  
`ownerid Steam64ID`

:::info
Vervang **Steam64ID** door je eigen Steam64ID. Je kunt je Steam64ID vinden met deze [tool](https://steamid.io/)
:::

Je bent nu direct admin.

:::info
Als je ingame bent wanneer je dit doet, moet je even uit- en opnieuw inloggen op de server.
:::

Gefeliciteerd, je bent nu administrator! :)

## Admin worden via FTP

Je kunt jezelf ook admin maken via FTP.  
Verbind eerst via [FTP-toegang](gameserver-ftpaccess.md).

Als je verbonden bent, navigeer je naar de volgende map:

`/g#####/rust/server/<your_server_save>/cfg`

Maak hier een **nieuw bestand** aan met de naam **users.cfg**

In dit bestand voeg je je entries toe in dit formaat:

`<role> <Steam64ID> <reden/gebruikersnaam>`

:::info
Vervang **Steam64ID** door je eigen Steam64ID. Je kunt je Steam64ID vinden met deze [tool](https://steamid.io/)
:::

Een voorbeeld van zo’n entry:

```
ownerid 76561198114248380 "Je kunt hier een referentie noteren"
moderatorid 76561198114248380 "Testpersoon"
```
:::info
Je moet je server herstarten voordat de wijzigingen actief worden.
:::

## Conclusie

Gefeliciteerd, je hebt succesvol administratorrechten ingesteld. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />