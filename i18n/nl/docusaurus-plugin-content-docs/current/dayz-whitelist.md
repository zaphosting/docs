---
id: dayz-whitelist
title: "DayZ: Whitelist"
description: "Informatie over hoe je jouw DayZ-server whitelist bij ZAP-Hosting → Leer nu meer"
sidebar_label: Whitelist
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een whitelist is een toegangs lijst die bepaalt wie er op jouw server kan joinen. DayZ heeft een ingebouwde whitelist-modus die je kunt activeren en per speler kunt aan- of uitzetten.

<InlineVoucher />


## Whitelist activeren

Verbind via FTP met je server en open het hoofdconfiguratiebestand `serverDZ.cfg`. Zoek de whitelist-instelling en zet deze aan.

```cfg
enableWhitelist = 1;
```

Zoek vervolgens het whitelist-bestand dat je host beschikbaar stelt, meestal `whitelist.txt` genoemd en geplaatst naast je serverconfiguratiebestanden. Voeg per regel één SteamID64 toe.

```txt
XXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXX
```

Sla alle bestanden op en herstart de server zodat de whitelist wordt toegepast.

## Whitelisted spelers beheren

Om een speler toe te voegen, voeg je zijn SteamID64 toe aan `whitelist.txt`, sla je op en herstart je de server. Om een speler te verwijderen, verwijder je zijn regel uit `whitelist.txt`, sla je op en herstart je de server.

Houd het bestand netjes met één ID per regel. Comments worden niet overal ondersteund, dus vermijd extra tekst op dezelfde regel tenzij je zeker weet dat jouw server dit accepteert.

## Whitelist functionaliteit controleren

Probeer na de herstart in te loggen met een account dat niet in `whitelist.txt` staat. Toegang moet geweigerd worden. Log daarna in met een account dat wel op de lijst staat om te bevestigen dat het werkt.

Als whitelisted spelers niet kunnen joinen, controleer dan of je SteamID64 gebruikt hebt en dat de server hetzelfde `whitelist.txt` bestand laadt dat jij hebt aangepast.

## Conclusie

Als je alle stappen hierboven hebt gevolgd, is je whitelist nu actief en bepaal jij precies wie er op de server mag komen. Werkt toegang nog niet zoals verwacht? Herstart de server nogmaals en controleer het bestand of de command output om zeker te zijn dat de wijziging is doorgevoerd.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />