---
id: fivem-esx-changerespawnpoint
title: "FiveM: Respawnpoint setzen"
description: Informationen, wie den Respwanpunkt auf deinem FiveM-Server mit ESX von ZAP-Hosting setzen/ändern kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Respawnpoint setzen
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Archivierte Anleitung
Dieses Dokument wurde archiviert. Dokumente werden archiviert, wenn sie nicht mehr relevant, nicht mehr korrekt oder nicht mehr auf dem neuesten Stand sind. Es wurde aus den folgenden Gründen archiviert:

**Grund**: Die Methode zur Umsetzung ist für eine veraltete ESX-Version. Dieser Ansatz kann nicht für die aktuelle ESX-Version verwendet werden, da sich die Struktur verändert hat.
::::



:::info
ESX muss installiert sein
:::

<InlineVoucher />

📔 Vorbereitungen

Um die Koordinaten herausfinden zu können brauchen wir ein Coords Script wie dieses hier:
[CoordsScript](https://github.com/qalle-fivem/qalle_coords)
Installiere diese wie in der [Ressourcen installieren](fivem-installresources.md) Anleitung beschrieben. 
Haben wir dieses Script installiert. Drücken wir Ingame */coords*
Damit erhalten wir dann die Koordinaten.

📑 Config bearbeiten

Haben wir unsere Koordinaten, gehen wir in den Config TAB

![](https://screensaver01.zap-hosting.com/index.php/s/m8nBzFw8naxNS87/preview)

Hier drücken wir dann **STR + F** und suchen nach **ambulance**. Diese Datei öffnen wir dann. Hier scrollen wir dann nach unten, bis wir **Config_RespawnPoint** finden.

![](https://screensaver01.zap-hosting.com/index.php/s/QBBTFEtBidMrfY3/preview)

Diese bearbeiten wir nun und ersetzen die Koordinaten. Danach nur noch auf Speichern und das wars.

![](https://screensaver01.zap-hosting.com/index.php/s/kMTNStgri9FgXHk/preview)

:::info
Nach einem Serverneustart, werden die Änderungen übernommen.
:::

<InlineVoucher />
