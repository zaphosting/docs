---
id: fivem-esx-changerespawnpoint
title: "FiveM: Respawnpunt instellen"
description: "Ontdek hoe je ambulance respawnpunten in ESX aanpast om de gameplay te personaliseren en serverbeheer te verbeteren → Leer het nu"
sidebar_label: Respawnpunt wijzigen
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Gearchiveerde gids
Dit document is gearchiveerd. Documenten worden gearchiveerd als ze niet meer relevant, onjuist of verouderd zijn. Het is om de volgende reden gearchiveerd:

**Reden**: De methode is voor een verouderde ESX-versie. Deze aanpak werkt niet voor de huidige ESX-versie, omdat de structuur is veranderd.
::::



:::info
ESX moet geïnstalleerd zijn
:::

<InlineVoucher />

📔 Voorbereidingen

Om de coördinaten te vinden hebben we een Coords-script nodig zoals deze:
[CoordsScript](https://github.com/qalle-fivem/qalle_coords)
Installeer dit als volgt: [Resources installeren](fivem-installresources.md)
Hebben we dit script geïnstalleerd? Druk dan in de game op */coords*
Dit geeft ons de coördinaten.

📑 Config bewerken

Als we onze coördinaten hebben, gaan we naar het Config TAB

Hier drukken we op **CTRL + F** en zoeken we naar **ambulance**
We openen dan dit bestand.
Scroll naar beneden tot je **Config_RespawnPoint** vindt.

![](https://screensaver01.zap-hosting.com/index.php/s/6FYfkgfPfEWK6sj/preview)

We passen deze nu aan en vervangen de coördinaten.
Daarna klik je gewoon op Opslaan en dat is het.

![](https://screensaver01.zap-hosting.com/index.php/s/ZEcfQt69SX5if3Q/preview)

:::info
Na een server restart zijn de wijzigingen actief.
:::

<InlineVoucher />