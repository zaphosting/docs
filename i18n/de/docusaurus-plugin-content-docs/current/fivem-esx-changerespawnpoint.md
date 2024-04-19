---
id: fivem-esx-changerespawnpoint
title: "FiveM: Respawnpoint setzen"
description: Informationen, wie den Respwanpunkt auf deinem FiveM-Server mit ESX von ZAP-Hosting setzen/ändern kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Respawnpoint setzen
---

:::info
ESX muss installiert sein
:::

📔 Vorbereitungen

Um die Koordinaten herausfinden zu können brauchen wir ein Coords Script wie dieses hier:
[CoordsScript](https://github.com/qalle-fivem/qalle_coords)
Installiert dieses wie in der [Anleitung](fivem-installresources.md)
Haben wir dieses Script installiert. Drücken wir Ingame */coords*
Damit erhalten wir dann die Koordinaten.

📑 Config bearbeiten

Haben wir unsere Koordinaten, gehen wir in den Config TAB

![image](https://user-images.githubusercontent.com/13604413/159166863-a90b42a2-5eb0-4511-887e-a107a7938aa9.png)

Hier drücken wir dann **STR + F** und suchen nach **ambulance**. Diese Datei öffnen wir dann. Hier scrollen wir dann nach unten, bis wir **Config_RespawnPoint** finden.

![image](https://user-images.githubusercontent.com/13604413/159166865-f1d629e5-7b55-404b-a042-066e4a8414f6.png)

Diese bearbeiten wir nun und ersetzen die Koordinaten. Danach nur noch auf Speichern und das wars.

![image](https://user-images.githubusercontent.com/13604413/159166868-a40a8d42-476e-46a1-bbf7-12bf89ed97e9.png)

:::info
Nach einem Serverneustart, werden die Änderungen übernommen.
:::
