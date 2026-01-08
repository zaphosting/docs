---
id: vintagestory-whitelist
title: "Vintage Story: Whitelist"
description: "Information about how to whitelist your Vintage Story server from ZAP-Hosting → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En whitelist är en accesslista som begränsar vem som kan gå med på din server. Vintage Story har ett inbyggt whitelist-läge som du kan aktivera och sedan styra per spelare.

<InlineVoucher />


## Aktivera Whitelist

Öppna konsolen i spelet och ställ in whitelist-läget med serverkonfigurationskommandot. Använd värdet 1 för whitelist-läge för att bara tillåta spelare som finns på whitelist.

```text
/serverconfig whitelistmode 1
```

Starta om servern en gång efter att du aktiverat läget för att säkerställa att inställningen sparas och tillämpas korrekt vid uppstart.

## Hantera Whitelistade Spelare

För att tillåta en spelare, lägg till dem i whitelist med player-kommandot.

```text
/player PlayerName whitelist on
```

För att ta bort åtkomst, stäng av whitelist för den spelaren.

```text
/player PlayerName whitelist off
```

Om du vill kolla serverns nuvarande inställning igen, skriv ut serverkonfigurationen eller kör whitelistmode-kommandot utan att ändra andra värden och bekräfta att det fortfarande är satt till 1.

## Kontrollera att Whitelist Fungerar

Försök ansluta med en spelare som inte finns på whitelist. Anslutningen ska nekas. Testa sedan med en spelare som du satt `whitelist on` för.

Om alla fortfarande kan ansluta, dubbelkolla att `whitelistmode` är satt till 1 och att du körde kommandona på rätt server.

## Sammanfattning

Om du följt alla steg ovan korrekt är din whitelist nu aktiv och du kan styra exakt vilka som får gå med på servern. Om åtkomsten fortfarande inte fungerar som den ska, starta om servern en gång till och kontrollera filen eller kommandoutdata för att bekräfta att ändringen har tillämpats.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />