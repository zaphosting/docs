---
id: hytale-change-day-night-duration
title: "Hytale: Ändra dag-/natttid"
description: "Upptäck hur du teleporteras mellan världar på en Hytale-server → Läs mer nu"
sidebar_label: Ändra dag-/natttid
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Dags- och nattcykeln på en Hytale-server bestämmer hur länge dag- och nattfaserna varar i en värld. Genom att justera längden på dessa cykler kan serverägare påverka speltempot, atmosfären och svårighetsgraden.

Kortare nätter kan skapa en mer avslappnad vibe, medan längre nätter höjer utmaningen och spänningen. Att anpassa dag- och nattlängden låter dig skräddarsy världen efter just din servers spelstil.

:::info Early Access Notice

Hytale släpptes den 13 januari 2026 och finns just nu i Early Access. Eftersom spelet fortfarande är under aktiv utveckling kan serverprogramvara, konfigurationsfiler, modstöd och installationsflöden fortsätta att ändras över tid.

:::

<InlineVoucher />

## Konfiguration

För att ändra dag- och natttiden måste du justera konfigurationen direkt i världens `config.json`-fil som finns här:

```
/gXXXXXXX/hytale/universe/worlds/<world_name>/config.json
```

Om konfigurationsinställningarna för dag- och natttid inte finns ännu måste du lägga till dem manuellt. Scrolla i filen tills du hittar raden:

```
"GameplayConfig":
```

Direkt under den raden lägger du in inställningarna för dag- och natttid:

```
"DaytimeDurationSeconds": 1800,
"NighttimeDurationSeconds": 1000,
```

Dessa värden styr hur länge dag respektive natt varar i sekunder. Exempelvis ger `1800` för dagtid en längre dagfas, medan `1000` för nattid bestämmer hur länge natten varar innan cykeln börjar om. När du gjort ändringarna, spara `config.json` och starta om servern.

## Slutsats

När du gjort denna konfiguration har du full kontroll över hur länge dag och natt varar i varje värld på din Hytale-server. Har du fler frågor eller behöver hjälp är du alltid välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂


<InlineVoucher />