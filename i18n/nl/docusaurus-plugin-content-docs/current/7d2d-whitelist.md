---
id: 7d2d-whitelist
title: "7 Days To Die: Whitelist"
description: "Informatie over hoe je jouw 7 Days To Die-server whitelist bij ZAP-Hosting → Leer het nu"
sidebar_label: Whitelist
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een whitelist is een toegangs lijst die bepaalt wie er op jouw server kan joinen. In 7 Days To Die wordt dit meestal geregeld in het bestand serveradmin.xml, waar de whitelisted Steam-accounts worden opgeslagen. Zodra het is ingeschakeld, kunnen alleen spelers die daar staan verbinden.

<InlineVoucher />


## Whitelist activeren

Verbind via FTP met je server en zoek het bestand `serveradmin.xml`. Bij de meeste hosted installaties staat dit in de save-map, meestal onder een pad zoals `7-days-to-die/Saves/<WorldName>/<SaveName>/serveradmin.xml` of direct in `7-days-to-die/Saves/serveradmin.xml`, afhankelijk van de provider. Open het bestand en zoek de sectie `<whitelist>` binnen `<adminTools>`.

Voeg minimaal één SteamID64 toe aan de whitelist. Het onderstaande formaat volgt de standaard structuur die het spel gebruikt.

```xml
<whitelist>
  <user steamID="76561198021925107" name="PlayerName" permission_level="1000" />
</whitelist>
```

Sla het bestand op en herstart de server zodat de nieuwe whitelist wordt geladen. Als je bestand alleen voorbeelden bevat die zijn uitgecommentarieerd, zorg er dan voor dat jouw `<user ... />` regel niet binnen een XML-commentaar staat.

## Whitelisted spelers beheren

Om een speler toe te voegen, herhaal je dezelfde wijziging in `serveradmin.xml` door een extra `<user ... />` regel toe te voegen binnen `<whitelist>`. Gebruik de SteamID64 van de speler voor `steamID`.

Om een speler te verwijderen, verwijder je de bijbehorende `<user ... />` regel uit de `<whitelist>` sectie, sla op en herstart de server.

Als je liever commands gebruikt, open dan de Live Console in het ZAP-Hosting gameserverbeheer en gebruik de ingebouwde whitelist-commands om spelers toe te voegen of te verwijderen. Wijzigingen via commands worden ook opgeslagen in dezelfde whitelist-data die de server bij een herstart gebruikt.

## Whitelist functionaliteit controleren

Probeer na de herstart te verbinden met een account dat niet op de whitelist staat. De join poging zou geweigerd moeten worden. Probeer daarna met een whitelisted account om te bevestigen dat toegang werkt.

Als de server nog steeds niet-whitelisted spelers binnenlaat, controleer dan opnieuw of je whitelist-regels niet uitgecommentarieerd zijn en of je het juiste `serveradmin.xml` bestand hebt aangepast voor de actieve save.

## Conclusie

Als je alle stappen hierboven correct hebt gevolgd, is je whitelist nu actief en kun je precies bepalen wie er op de server mag joinen. Werkt de toegang toch niet zoals verwacht, herstart dan de server nogmaals en controleer het bestand of de command output om te bevestigen dat de wijziging is doorgevoerd.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />