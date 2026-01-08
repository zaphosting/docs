---
id: terraria-whitelist
title: "Terraria: Whitelist"
description: "Info om hur du whitelistar din Terraria-server från ZAP-Hosting → Lär dig mer nu"
sidebar_label: Whitelist
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En whitelist är en accesslista som begränsar vem som kan ansluta till din server. För Terraria-hosting är det vanligaste sättet att köra en TShock-server och aktivera dess whitelist-funktion, som hanteras via en whitelist-fil och kommandon.

<InlineVoucher />

## Aktivera Whitelist

Anslut till din server via FTP och kontrollera att din server kör TShock. Leta sedan upp TShock-konfigurationsfilen `tshock/config.json` och aktivera whitelist-inställningen:

```
"EnableWhitelist": true
```

Spara filen och starta om servern. TShock kommer nu kräva whitelist-godkännande för inkommande anslutningar.

## Hantera Whitelistade Spelare

För att lägga till en spelare, öppna Live Console i ZAP-Hostings gameserver-hantering och använd whitelist-kommandot med spelarens IP-adress.

```text
whitelist 203.0.113.25
```

TShock sparar listan i `tshock/whitelist.txt`. För att ta bort en spelare, anslut via FTP, öppna filen, ta bort IP-raden, spara och starta om servern.

```txt
203.0.113.25
198.51.100.10
```

## Kontrollera att Whitelist Fungerar

Efter omstart, försök ansluta från en IP-adress som inte finns med i listan. Access ska nekas. Testa sedan att ansluta från en whitelistad IP.

Om spelare fortfarande kan ansluta utan att vara listade, dubbelkolla att `EnableWhitelist` är satt till true i `config.json` och att servern verkligen startade som TShock.

## Sammanfattning

Om du följt alla steg ovan korrekt är din whitelist nu aktiv och du kan styra exakt vilka som får ansluta till servern. Om access fortfarande inte fungerar som förväntat, starta om servern en gång till och dubbelkolla filen eller kommandoutdata för att bekräfta att ändringen har trätt i kraft.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂



<InlineVoucher />