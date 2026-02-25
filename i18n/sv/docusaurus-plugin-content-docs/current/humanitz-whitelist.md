---
id: humanitz-whitelist
title: "HumanitZ: Whitelist-hantering"
description: "Lär dig hur du hanterar whitelist och kontrollerar serveråtkomst på din HumanitZ-server → Läs mer nu"
sidebar_label: "Whitelist"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduktion

En whitelist låter dig styra exakt vilka som kan ansluta till din HumanitZ-server. När den är aktiverad kan endast spelare vars Steam-ID finns i filen för tillåtna spelare ansluta.

<InlineVoucher />



## Konfiguration

Whitelist-funktionen styrs i filen `GameServerSettings.ini`. Du hittar den i din serverhanteringspanel under **Configs**. För att aktivera whitelist-läge, leta upp och sätt följande parameter:

```
OnlyAllowedPlayers=1
```

- `OnlyAllowedPlayers=1` – Aktiverar whitelist-läge. Endast listade spelare kan ansluta.
- `OnlyAllowedPlayers=0` – Avaktiverar whitelist-läge. Alla spelare kan ansluta.

Efter att du aktiverat whitelist-läget måste du skapa whitelist-filen manuellt.

Anslut till din server via [FTP](gameserver-ftpaccess.md) med din favorit FTP-klient. När du är ansluten, navigera till serverns huvudmapp och skapa en ny fil som heter `F_MVPAccess.txt`. I den här filen skriver du in ett **unikt Steam-ID per rad** för varje spelare du vill tillåta.

```
76561198000000001
76561198000000002
```

Spara filen efter att du lagt till Steam-ID:n.



## Övervaka Spelaraktivitet

HumanitZ tillhandahåller även filer för att spåra spelarkopplingar. `F_ConnectedPlayers.txt` visar vilka spelare som är anslutna just nu och `PlayerConnectedLog.txt` loggar alla anslutningar och frånkopplingar, inklusive Steam-namn och unikt Steam-ID med tidsstämplar.

Dessa filer är perfekta för att identifiera Steam-ID:n och hålla koll på serveraktiviteten. Efter att du gjort ändringar i whitelist- eller banlistfilerna, spara och starta om servern för att ändringarna ska träda i kraft.

## Avslutning

Grattis! Genom att aktivera whitelist-läget och hantera filerna `F_MVPAccess.txt` och `F_BannedPlayers.txt` har du nu konfigurerat åtkomstkontrollen på din HumanitZ-server.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />