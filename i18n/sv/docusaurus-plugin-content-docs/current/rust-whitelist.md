---
id: rust-whitelist
title: "Rust: Whitelist"
description: "Information about how to whitelist your Rust server from ZAP-Hosting → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En whitelist är en åtkomstkontroll som begränsar vem som kan gå med på din server. Rust dedikerade servrar har ingen inbyggd whitelist-funktion, så det vanliga sättet hos hosting-leverantörer är att installera uMod Oxide och ett whitelist-plugin som blockerar anslutningar om inte en spelare uttryckligen är tillåten.

<InlineVoucher />


## Aktivera Whitelist

Anslut till din server via FTP och installera uMod Oxide om det inte redan finns. När uMod är installerat, ladda upp whitelist-plugin-filen `Whitelist.cs` till plugins-mappen, vanligtvis `oxide/plugins/Whitelist.cs`.

När pluginet är på plats, starta om servern eller ladda om plugins så att det aktiveras. Whitelist-pluginet fungerar oftast genom att kräva en specifik behörighet innan en spelare kan ansluta.

## Hantera Whitelistade Spelare

Öppna Live Console i ZAP-Hostings gameserver-hantering och ge whitelist-behörighet till en spelare med deras SteamID64.

```text
oxide.grant user 76561198000000000 whitelist.allow
```

För att ta bort åtkomst, ta bort behörigheten.

```text
oxide.revoke user 76561198000000000 whitelist.allow
```

För att kontrollera vilka behörigheter en användare har, fråga efter deras behörigheter.

```text
oxide.show user 76561198000000000
```

## Kontrollera att Whitelist Fungerar

Försök ansluta med ett konto som inte har whitelist-behörighet. Pluginet ska neka anslutningen. Anslut sedan med ett konto som du gett `whitelist.allow` för att bekräfta åtkomst.

Om alla fortfarande kan ansluta, kontrollera att pluginet är laddat och att uMod körs. En serveromstart efter att pluginet laddats upp är det säkraste sättet att garantera att det är aktivt.

## Sammanfattning

Om alla steg ovan följdes korrekt är din whitelist nu aktiv och du kan styra exakt vem som får gå med på servern. Om åtkomsten fortfarande inte fungerar som förväntat, starta om servern en gång till och dubbelkolla fil- eller kommandoutdata för att bekräfta att ändringen har tillämpats.

Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support – vi finns här för dig varje dag! 🙂

<InlineVoucher />