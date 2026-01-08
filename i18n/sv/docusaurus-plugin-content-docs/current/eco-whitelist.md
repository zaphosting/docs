---
id: eco-whitelist
title: "ECO: Whitelist"
description: "Info om hur du whitelistar din ECO-server från ZAP-Hosting→ Lär dig mer nu"
sidebar_label: Whitelist
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En whitelist är en accesslista som begränsar vem som kan ansluta till din server. I ECO sparas whitelist i konfigurationsfilen `Users.eco` och aktiveras automatiskt så fort minst en SteamID64 finns med.

## Aktivera Whitelist

Anslut till din server via FTP och hitta filen `Users.eco`. Öppna den och leta upp sektionen `WhiteList`. Lägg till SteamID64-värden inuti `$values`.

```json
"WhiteList": {
  "System.String": {
"$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
"$values": [
  "76561198000000000"
]
  }
}
```

Spara filen och starta om servern för att den nya accesslistan ska börja gälla.

## Hantera Whitelistade Spelare

Du kan också lägga till spelare via Live Console i ZAP-Hostings gameserverhantering om du har rätt behörighet i spelet. Använd whitelist-kommandot med spelarens namn.

```text
/whitelist PlayerName
```

För att ta bort spelare måste du redigera `Users.eco`. Ta bort SteamID64 från `$values`, spara och starta om servern eftersom det inte finns något serverkommando för att ta bort poster.

## Kontrollera att Whitelist Fungerar

Efter omstart, försök ansluta med ett konto som inte finns i `$values`. Access ska nekas. Testa sedan att ansluta med ett konto som finns på whitelist.

Om access fortfarande är öppen, dubbelkolla att minst en SteamID64 finns och att `Users.eco`-filen du redigerade är den som används av den aktiva serverinstansen.

## Sammanfattning

Om du följt alla steg ovan korrekt är din whitelist nu aktiv och du kan styra exakt vilka som får gå med på servern. Om access fortfarande inte funkar som den ska, starta om servern en gång till och dubbelkolla filen eller kommandoutdata för att bekräfta att ändringen har trätt i kraft.

<InlineVoucher />