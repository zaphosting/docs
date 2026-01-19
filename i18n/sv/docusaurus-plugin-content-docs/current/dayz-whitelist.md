---
id: dayz-whitelist
title: "DayZ: Whitelist"
description: "Information about how to whitelist your DayZ server from ZAP-Hosting → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En whitelist är en accesslista som begränsar vem som kan gå med på din server. DayZ har ett inbyggt whitelist-läge som du kan aktivera och sedan styra per spelare.

<InlineVoucher />


## Aktivera Whitelist

Anslut till din server via FTP och öppna huvudkonfigurationsfilen `serverDZ.cfg`. Hitta whitelist-inställningen och aktivera den.

```cfg
enableWhitelist = 1;
```

Leta sedan upp eller skapa whitelist-filen som din host exponerar, vanligtvis kallad `whitelist.txt` och placerad tillsammans med dina serverkonfigurationsfiler. Lägg till en SteamID64 per rad.

```txt
XXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXX
```

Spara alla filer och starta om servern så att whitelist:en träder i kraft.

## Hantera Whitelistade Spelare

För att lägga till en spelare, lägg till deras SteamID64 i `whitelist.txt`, spara och starta om servern. För att ta bort en spelare, ta bort deras rad från `whitelist.txt`, spara och starta om servern.

Håll filen ren med en ID per rad. Kommentarer stöds inte överallt, så undvik extra text på samma rad om du inte är säker på att din server accepterar det.

## Kontrollera att Whitelist Fungerar

Efter omstart, försök ansluta med ett konto som inte finns i `whitelist.txt`. Access ska nekas. Anslut sedan med ett listat konto för att bekräfta att det fungerar.

Om listade spelare inte kan gå med, kontrollera att du använde SteamID64 och att servern laddar samma `whitelist.txt` som du redigerade.

## Sammanfattning

Om allt ovan följdes korrekt är din whitelist nu aktiv och du kan styra exakt vem som får gå med på servern. Om access fortfarande inte fungerar som förväntat, starta om servern en gång till och dubbelkolla filen eller kommandoutdata för att bekräfta att ändringen har tillämpats.

För fler frågor eller hjälp, tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />