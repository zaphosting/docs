---
id: factorio-whitelist
title: "Factorio: Whitelist"
description: "Info om hur du whitelistar din Factorio-server från ZAP-Hosting → Lär dig mer nu"
sidebar_label: Whitelist
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En whitelist är en accesslista som begränsar serveråtkomst till godkända Factorio-konton. På de flesta hostade servrar aktiveras whitelist så fort minst en spelare har lagts till, och den sparas i en fil som heter `server-whitelist.json`.

<InlineVoucher />

## Aktivera Whitelist

Öppna Live Console i ZAP-Hostings gameserver-hantering och lägg till den första spelaren i whitelist. Att lägga till det första namnet aktiverar oftast whitelist direkt.

```text
/whitelist add PlayerName
```

Om din host har ett explicit kommando för att aktivera whitelist kan du även köra det innan du lägger till användare.

```text
/whitelist enable
```

En omstart krävs vanligtvis inte för att ändringen ska träda i kraft, men att starta om en gång efter första setupen säkerställer att whitelist-filen skrivs och laddas vid uppstart.

## Hantera Whitelistade Spelare

För att lägga till fler spelare, kör add-kommandot igen med deras Factorio-användarnamn.

```text
/whitelist add AnotherPlayer
```

För att ta bort en spelare, använd remove-kommandot.

```text
/whitelist remove PlayerName
```

För att visa den aktuella whitelistan, använd get-kommandot.

```text
/whitelist get
```

## Kontrollera att Whitelist Fungerar

Efter att ha lagt till minst en spelare, testa att ansluta med ett konto som inte finns med på listan. Anslutningen ska nekas. Testa sedan att ansluta med ett whitelistat konto för att bekräfta att det funkar.

Om servern fortfarande tillåter alla, dubbelkolla att kommandona kördes på rätt server och starta om en gång för att säkerställa att whitelist-filen laddas vid uppstart.

## Sammanfattning

Om du följt alla steg ovan korrekt är din whitelist nu aktiv och du kan styra exakt vilka som får ansluta till servern. Om åtkomsten fortfarande inte fungerar som den ska, starta om servern en gång till och kontrollera filen eller kommandoutdata för att bekräfta att ändringen har tillämpats.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />