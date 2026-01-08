---
id: rust-whitelist
title: "Rust: Whitelist"
description: "Informatie over hoe je jouw Rust-server whitelist bij ZAP-Hosting → Leer het nu"
sidebar_label: Whitelist
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een whitelist is een toegangscontrolemechanisme dat bepaalt wie er op jouw server kan joinen. Rust dedicated servers hebben geen ingebouwde whitelist-functie, dus de gebruikelijke aanpak bij hostingproviders is om uMod Oxide te installeren met een whitelist-plugin die verbindingen blokkeert tenzij een speler expliciet is toegestaan.

<InlineVoucher />


## Whitelist activeren

Verbind met je server via FTP en installeer uMod Oxide als deze nog niet aanwezig is. Nadat uMod is geïnstalleerd, upload je het whitelist-pluginbestand `Whitelist.cs` naar de plugins-map, meestal `oxide/plugins/Whitelist.cs`.

Zodra de plugin op zijn plek zit, herstart je de server of laad je de plugins opnieuw zodat hij wordt ingeladen. De whitelist-plugin werkt meestal door een specifieke permissie te vereisen voordat een speler kan verbinden.

## Whitelisted spelers beheren

Open de Live Console in het ZAP-Hosting gameserverbeheer en geef een speler de whitelist-permissie via zijn SteamID64.

```text
oxide.grant user 76561198000000000 whitelist.allow
```

Om toegang in te trekken, verwijder je de permissie.

```text
oxide.revoke user 76561198000000000 whitelist.allow
```

Om te checken welke permissies een gebruiker heeft, vraag je hun permissies op.

```text
oxide.show user 76561198000000000
```

## Whitelist functionaliteit controleren

Probeer te verbinden met een account dat geen whitelist-permissie heeft. De plugin zou de verbinding moeten weigeren. Verbind daarna met een account waaraan je `whitelist.allow` hebt gegeven om toegang te bevestigen.

Als iedereen nog steeds kan joinen, check dan of de plugin geladen is en uMod draait. Een serverherstart na het uploaden van de plugin is de meest betrouwbare manier om zeker te weten dat hij actief is.

## Conclusie

Als je alle stappen hierboven goed hebt gevolgd, is je whitelist nu actief en bepaal jij precies wie er op de server mag joinen. Werkt de toegang toch niet zoals verwacht? Herstart dan de server nogmaals en controleer de bestanden of command output om te bevestigen dat de wijziging is doorgevoerd.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />