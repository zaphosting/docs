---
id: projectzomboid-whitelist
title: "Project Zomboid: Whitelist"
description: "Info om hur du whitelistar din Project Zomboid-server hos ZAP-Hosting → Läs mer nu"
sidebar_label: Whitelist
services:
  - gameserver-projectzomboid
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En whitelist är ett sätt att styra åtkomst där du måste skapa användarkonton innan någon kan ansluta. I Project Zomboid gör man detta oftast genom att stänga av öppen registrering i serverinställningarna och sedan lägga till användare via konsolkommandon.

<InlineVoucher />


## Aktivera Whitelist

Anslut till din server via FTP och öppna din serverinställningsfil. Den finns vanligtvis under `Zomboid/Server/` och heter efter din server, till exempel `servertest.ini` eller `<ServerName>.ini`. Leta upp inställningen `Open` och sätt den till false.

```ini
Open=false
```

Spara filen och starta om servern. Med öppen registrering avstängd kan bara konton du skapat ansluta.

## Hantera Whitelistade Spelare

Öppna Live Console i ZAP-Hostings gameserverhantering och skapa konton för de spelare som ska få tillgång. Använd kommandot adduser med användarnamn och lösenord.

```text
/adduser "username" "password"
```

Vill du ta bort en användares åtkomst, ta bort dem från whitelist med det dedikerade kommandot.

```text
/removeuserfromwhitelist "username"
```

Om du tidigare tillät öppen registrering och vill konvertera redan anslutna konton till whitelistade, använd kommandot som lägger till alla nuvarande anslutna användare i whitelist.

```text
/addalltowhitelist
```

## Kontrollera att Whitelist Fungerar

När `Open=false` är aktivt ska en ny användare som inte lagts till med `/adduser` inte kunna ansluta. Testa med ett whitelistat konto för att bekräfta åtkomst.

Om användare som inte finns på listan ändå kan ansluta, dubbelkolla att du redigerade rätt `<ServerName>.ini`-fil och startade om servern.

## Sammanfattning

Om du följt alla steg ovan korrekt är din whitelist nu aktiv och du kan styra exakt vilka som får ansluta till servern. Om åtkomsten fortfarande inte funkar som den ska, starta om servern en gång till och dubbelkolla filen eller kommandoutdata för att säkerställa att ändringen trätt i kraft.

Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />