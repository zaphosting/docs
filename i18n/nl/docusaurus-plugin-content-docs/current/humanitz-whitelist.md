---
id: humanitz-whitelist
title: "HumanitZ: Whitelist Beheer"
description: "Leer hoe je de whitelist beheert en de toegang tot je HumanitZ-server regelt → Ontdek het nu"
sidebar_label: "Whitelist"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introductie

Met een whitelist bepaal je precies wie er op jouw HumanitZ-server kan joinen. Als deze aanstaat, kunnen alleen spelers met een Steam ID die in het toegestane spelersbestand staat, verbinding maken.

<InlineVoucher />



## Configuratie

De whitelist-functie wordt geregeld in het bestand `GameServerSettings.ini`. Je vindt dit bestand in je serverbeheer paneel onder **Configs**. Om de whitelist-modus aan te zetten, zoek je de volgende parameter en zet je deze op:

```
OnlyAllowedPlayers=1
```

- `OnlyAllowedPlayers=1` – Zet whitelist-modus aan. Alleen spelers op de lijst mogen joinen.
- `OnlyAllowedPlayers=0` – Zet whitelist-modus uit. Iedereen mag joinen.

Nadat je whitelist-modus hebt ingeschakeld, moet je het whitelist-bestand handmatig aanmaken.

Verbind met je server via [FTP](gameserver-ftpaccess.md) met je favoriete FTP-client. Navigeer naar de hoofdmap van de server en maak een nieuw bestand aan met de naam `F_MVPAccess.txt`. Vul in dit bestand per regel één **unieke Steam ID** in van elke speler die je wilt toelaten.

```
76561198000000001
76561198000000002
```

Sla het bestand op nadat je de Steam IDs hebt toegevoegd.



## Speler Activiteit Monitoren

HumanitZ biedt extra bestanden om spelersverbindingen bij te houden. `F_ConnectedPlayers.txt` toont de spelers die momenteel verbonden zijn en `PlayerConnectedLog.txt` logt alle verbindingen en disconnecties, inclusief Steam naam en unieke Steam ID met tijdstempels.

Deze bestanden zijn handig om Steam IDs te identificeren en de serveractiviteit te monitoren. Na het aanpassen van whitelist- of ban-bestanden, sla je deze op en herstart je de server zodat de wijzigingen goed worden doorgevoerd.

## Conclusie

Gefeliciteerd! Door whitelist-modus aan te zetten en de bestanden `F_MVPAccess.txt` en `F_BannedPlayers.txt` te beheren, heb je succesvol de toegang tot je HumanitZ-server geregeld.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />