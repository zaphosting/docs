---
id: dst-whitelist
title: "Don't Starve Together: Whitelist"
description: "Info om hur du whitelistar din Don't Starve Together-server från ZAP-Hosting → Lär dig mer nu"
sidebar_label: Whitelist
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En whitelist är en accesslista som begränsar vem som kan gå med på din server. I Don't Starve Together är detta implementerat som en tillåtelselista baserad på Klei-användar-ID:n. Den vanliga setupen är en `whitelist.txt`-fil plus `whitelist_slots` i `cluster.ini`.

<InlineVoucher />


## Aktivera Whitelist

Anslut till din server via FTP och hitta din cluster-mapp, vanligtvis något i stil med `DoNotStarveTogether/Cluster_1/` eller en leverantörsspecifik sökväg som innehåller `cluster.ini`. Öppna `cluster.ini` och i `[NETWORK]`-sektionen ställer du in `whitelist_slots`.

För att göra servern strikt whitelistad, sätt `whitelist_slots` lika med värdet för `max_players`.

```ini
[NETWORK]
max_players = 6
whitelist_slots = 6
```

I samma cluster-katalog, skapa eller redigera `whitelist.txt`. Lägg till ett Klei-ID per rad i KU_-format.

```txt
KU_aaaaaaaa
KU_bbbbbbbb
```

Spara filerna och starta om servern. Tillåtelselistan läses in vid uppstart.

## Hantera Whitelistade Spelare

För att lägga till en spelare, lägg till deras KU_-ID i `whitelist.txt`, spara och starta om.

För att ta bort en spelare, ta bort deras KU_-ID från `whitelist.txt`, spara och starta om.

Se till att antalet ID:n i `whitelist.txt` är minst lika många som `whitelist_slots` för att undvika problem med att gå med när reserverade tillåtelselots överstiger antalet listade användare.

## Kontrollera Whitelist-funktionen

Efter omstart, försök gå med med ett konto som inte finns i `whitelist.txt`. Om `whitelist_slots` är lika med `max_players` ska anslutningen nekas. Testa sedan att gå med med ett listat KU_-ID för att bekräfta åtkomst.

Om servern fortfarande tillåter spelare som inte finns med, dubbelkolla att du redigerade rätt cluster-mapp och att `[NETWORK]`-sektionen innehåller raden `whitelist_slots`.

## Slutsats

Om alla steg ovan följdes korrekt är din whitelist nu aktiv och du kan styra exakt vilka som får gå med på servern. Om åtkomsten fortfarande inte fungerar som förväntat, starta om servern en gång till och dubbelkolla filerna eller kommandoutgången för att bekräfta att ändringen har trätt i kraft.

<InlineVoucher />