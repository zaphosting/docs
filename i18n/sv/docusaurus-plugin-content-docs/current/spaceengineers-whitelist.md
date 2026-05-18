---
id: spaceengineers-whitelist
title: "Space Engineers: Whitelist"
description: Information about how to whitelist your Space Engineers server from ZAP-Hosting → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En whitelist är en accesslista som begränsar vem som kan ansluta till din server. Space Engineers använder ofta en Steam Group-baserad whitelist, där endast medlemmar i en specifik Steam-grupp kan ansluta.

<InlineVoucher />

## Aktivera Whitelist

Skapa en Steam-grupp för din server och lägg till de spelare du vill tillåta. Anslut sedan till din server via FTP och öppna `SpaceEngineers-Dedicated.cfg`.

Se till att servern är inställd på privat läge och ange grupp-ID längst ner i konfigurationen.

```xml
<ServerType>PRIVATE</ServerType>
<GroupID>XXXXXXXXXXXXXXXXXX</GroupID>
```

Byt ut grupp-ID:t mot ditt eget Steam-grupp-ID. Spara filen och starta om servern.

## Hantera Whitelistade Spelare

För att lägga till någon i whitelist, bjud in dem till Steam-gruppen och se till att de har gått med. De kan ansluta så fort de är gruppmedlemmar.

För att ta bort någon, ta bort dem från Steam-gruppen. När de inte längre är medlemmar kan de inte ansluta. Vill du byta whitelist till en annan grupp, ändra `<GroupID>`-värdet och starta om servern.

## Kontrollera Whitelist-funktionen

Efter omstart, testa att ansluta med ett Steam-konto som inte är med i Steam-gruppen. Servern ska neka anslutningen. Testa sedan med ett konto som är gruppmedlem.

Om åtkomsten fortfarande är öppen, dubbelkolla att servern körs i privat läge och att `<GroupID>` finns i den aktiva `SpaceEngineers-Dedicated.cfg`.

## Sammanfattning

Om du följt alla steg ovan korrekt är din whitelist nu aktiv och du kan styra exakt vilka som får ansluta till servern. Om åtkomsten fortfarande inte fungerar som den ska, starta om servern en gång till och kontrollera filen eller kommandoutdata för att bekräfta att ändringen har tillämpats.

Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support – vi finns här för dig varje dag! 🙂

<InlineVoucher />