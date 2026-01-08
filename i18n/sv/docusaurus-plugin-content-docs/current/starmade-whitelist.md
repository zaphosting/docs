---
id: starmade-whitelist
title: "StarMade: Whitelist"
description: "Information om hur du whitelistar din StarMade-server från ZAP-Hosting → Lär dig mer nu"
sidebar_label: Whitelist
services:
  - gameserver-starmade
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En whitelist är en accesslista som begränsar vem som kan gå med på din server. StarMade har en inbyggd whitelist som styrs i `server.cfg` och fylls på via `whitelist.txt`.

<InlineVoucher />

## Aktivera Whitelisten

Anslut till din server via FTP och öppna `server.cfg`. Aktivera autentisering och whitelist.

```cfg
USE_STARMADE_AUTHENTICATION=true
REQUIRE_STARMADE_AUTHENTICATION=true
USE_WHITELIST=true
```

Spara filen. Öppna eller skapa sedan `whitelist.txt` i samma serverkatalog. Lägg till spelare i det format som StarMade använder, en rad per spelare.

```txt
act:-1:PlayerName
act:-1:AnotherPlayer
```

Starta om servern för att ladda den uppdaterade whitelisten.

## Hantera Whitelistade Spelare

För att lägga till en spelare, lägg till en ny rad i `whitelist.txt` med samma format, spara och starta om. För att ta bort en spelare, ta bort deras rad från `whitelist.txt`, spara och starta om.

Om namn innehåller specialtecken, använd exakt det in-game-namn som visas vid inloggning för att undvika felmatchningar.

## Kontrollera att Whitelisten Fungerar

Efter omstart, försök ansluta med ett konto som inte finns i `whitelist.txt`. Access ska nekas. Anslut sedan med ett namn som finns med på listan.

Om listade spelare inte kan gå med, dubbelkolla att StarMade-autentisering är aktiverad och obligatorisk, annars kan namn inte matchas korrekt.

## Sammanfattning

Om alla steg ovan följdes rätt är din whitelist nu aktiv och du kan styra exakt vilka som får gå med på servern. Om access fortfarande inte fungerar som förväntat, starta om servern en gång till och dubbelkolla filen eller kommandoutdata för att bekräfta att ändringen har tillämpats.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />