---
id: 7d2d-whitelist
title: "7 Days To Die: Whitelist"
description: "Information om hur du whitelistar din 7 Days To Die-server från ZAP-Hosting → Lär dig mer nu"
sidebar_label: Whitelist
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En whitelist är en accesslista som begränsar vem som kan gå med på din server. I 7 Days To Die hanteras detta vanligtvis i filen serveradmin.xml, som sparar whitelisted Steam-konton. När den är aktiverad kan bara spelare som finns med där ansluta.

<InlineVoucher />


## Aktivera Whitelist

Anslut till din server via FTP och hitta filen `serveradmin.xml`. På de flesta hostade installationer ligger den i sparmappen, ofta under en sökväg som `7-days-to-die/Saves/<WorldName>/<SaveName>/serveradmin.xml` eller direkt i `7-days-to-die/Saves/serveradmin.xml` beroende på leverantörens struktur. Öppna filen och leta efter `<whitelist>`-sektionen inuti `<adminTools>`.

Lägg till minst en SteamID64 i whitelist. Formatet nedan följer spelets standardstruktur.

```xml
<whitelist>
  <user steamID="76561198021925107" name="PlayerName" permission_level="1000" />
</whitelist>
```

Spara filen och starta om servern så att den nya whitelist laddas. Om din fil bara innehåller kommenterade exempel, se till att din `<user ... />`-rad inte är inuti en XML-kommentar.

## Hantera Whitelistade Spelare

För att lägga till en spelare, gör samma ändring i `serveradmin.xml` genom att lägga till en ny `<user ... />`-post inom `<whitelist>`. Använd spelarens SteamID64 för `steamID`.

För att ta bort en spelare, ta bort motsvarande `<user ... />`-rad från `<whitelist>`, spara och starta om servern.

Vill du köra via kommandon, öppna Live Console i ZAP-Hostings gameserverhantering och använd de inbyggda whitelist-kommandona för att lägga till eller ta bort spelare. Ändringar via kommandon synkas ändå tillbaka till samma whitelist-data som servern använder vid omstart.

## Kontrollera att Whitelist Fungerar

Efter omstart, testa att ansluta med ett konto som inte finns på whitelist. Anslutningsförsöket ska nekas. Testa sedan med ett whitelistat konto för att bekräfta att åtkomsten funkar.

Om servern fortfarande släpper in icke-whitelistade spelare, dubbelkolla att dina whitelist-poster inte är kommenterade och att du redigerade rätt `serveradmin.xml` för den aktiva sparfilen.

## Sammanfattning

Om du följt alla steg ovan korrekt är din whitelist nu aktiv och du kan styra exakt vilka som får gå med på servern. Om åtkomsten fortfarande inte funkar som den ska, starta om servern en gång till och dubbelkolla filen eller kommandoutdata för att bekräfta att ändringen tillämpades.

Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support – vi finns tillgängliga varje dag för att hjälpa dig! 🙂

<InlineVoucher />