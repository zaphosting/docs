---
id: fivem-esx-changerespawnpoint
title: "FiveM: Respawnpoint setzen"
description: Informationen, wie den Respwanpunkt auf deinem FiveM-Server mit ESX von ZAP-Hosting setzen/ändern kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Respawnpoint setzen
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
ESX muss installiert sein
:::

<InlineVoucher />

📔 Vorbereitungen

Um die Koordinaten herausfinden zu können brauchen wir ein Coords Script wie dieses hier:
[CoordsScript](https://github.com/qalle-fivem/qalle_coords)
Installiert dieses wie in der [Ressourcen installieren](fivem-installresources.md)
Haben wir dieses Script installiert. Drücken wir Ingame */coords*
Damit erhalten wir dann die Koordinaten.

📑 Config bearbeiten

Haben wir unsere Koordinaten, gehen wir in den Config TAB

![image](https://screensaver01.zap-hosting.com/index.php/s/m8nBzFw8naxNS87/preview)

Hier drücken wir dann **STR + F** und suchen nach **ambulance**. Diese Datei öffnen wir dann. Hier scrollen wir dann nach unten, bis wir **Config_RespawnPoint** finden.

![image](https://screensaver01.zap-hosting.com/index.php/s/QBBTFEtBidMrfY3/preview)

Diese bearbeiten wir nun und ersetzen die Koordinaten. Danach nur noch auf Speichern und das wars.

![image](https://screensaver01.zap-hosting.com/index.php/s/kMTNStgri9FgXHk/preview)

:::info
Nach einem Serverneustart, werden die Änderungen übernommen.
:::
