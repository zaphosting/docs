---
id: terraria-whitelist
title: "Terraria: Whitelist"
description: "Information about how to whitelist your Terraria server from ZAP-Hosting → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En whitelist är en accesslista som begränsar vem som kan gå med på din server. För Terraria-hosting är det vanligaste sättet att köra en TShock-server och aktivera dess whitelist-funktion, som hanteras via en whitelist-fil och kommandon.

<InlineVoucher />

## Aktivera Whitelist

Anslut till din server via FTP och kontrollera att din server kör TShock. Leta sedan upp TShock-konfigurationsfilen `tshock/config.json` och aktivera whitelist-inställningen:

```
"EnableWhitelist": true
```

Spara filen och starta om servern. TShock kommer nu kräva whitelist-godkännande för inkommande anslutningar.

## Hantera Whitelistade Spelare

För att lägga till en post, öppna Live Console i ZAP-Hostings gameserver-hantering och använd whitelist-kommandot med spelarens IP-adress.

```text
whitelist 203.0.113.25
```

TShock sparar listan i `tshock/whitelist.txt`. För att ta bort en post, anslut via FTP, öppna filen, ta bort IP-raden, spara och starta om servern.

```txt
203.0.113.25
198.51.100.10
```

## Verifiera Whitelist-funktionen

Efter omstart, försök ansluta från en IP-adress som inte finns med i listan. Åtkomst ska blockeras. Anslut sedan från en whitelistad IP-adress.

Om spelare fortfarande kan gå med utan att vara listade, dubbelkolla att `EnableWhitelist` är satt till true i `config.json` och att servern verkligen startade som TShock.

## Slutsats

Om alla steg ovan följdes korrekt är din whitelist nu aktiv och du kan styra exakt vem som får gå med på servern. Om åtkomsten fortfarande inte fungerar som förväntat, starta om servern en gång till och kontrollera filen eller kommandoutdata för att bekräfta att ändringen har tillämpats.

För fler frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂



<InlineVoucher />