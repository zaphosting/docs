---
id: fivem-esx-changerespawnpoint
title: "FiveM: Respawnpunkt setzen"
description: "Entdecke, wie du Ambulanz-Respawnpunkte in ESX aktualisierst, um das Gameplay anzupassen und die Serververwaltung zu verbessern → Jetzt mehr erfahren"
sidebar_label: Respawnpunkt ändern
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Archivierte Anleitung
Dieses Dokument wurde archiviert. Dokumente werden archiviert, wenn sie nicht mehr relevant, falsch oder veraltet sind. Es wurde aus folgenden Gründen archiviert:

**Grund**: Die Umsetzungs-Methode basiert auf einer veralteten ESX-Version. Dieser Ansatz funktioniert nicht mit der aktuellen ESX-Version, da sich die Struktur geändert hat.
::::



:::info
ESX muss installiert sein
:::

<InlineVoucher />

📔 Vorbereitung

Um die Koordinaten zu finden, brauchen wir ein Coords-Script wie dieses hier:
[CoordsScript](https://github.com/qalle-fivem/qalle_coords)
Installiere es so: [Ressourcen installieren](fivem-installresources.md)
Haben wir das Script installiert, drücken wir ingame */coords*
So erhalten wir die Koordinaten.

📑 Config bearbeiten

Sobald wir unsere Koordinaten haben, gehen wir zum Config TAB

Hier drücken wir **STRG + F** und suchen nach **ambulance**
Dann öffnen wir diese Datei.
Jetzt scrollen wir runter, bis wir **Config_RespawnPoint** finden.

![](https://screensaver01.zap-hosting.com/index.php/s/6FYfkgfPfEWK6sj/preview)

Jetzt bearbeiten wir diese und ersetzen die Koordinaten.
Danach einfach auf Speichern klicken und fertig.

![](https://screensaver01.zap-hosting.com/index.php/s/ZEcfQt69SX5if3Q/preview)

:::info
Nach einem Server-Neustart werden die Änderungen aktiv.
:::

<InlineVoucher />