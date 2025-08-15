---
id: fivem-esx-addcarstoshop
title: "FiveM: Autos zum Shop hinzufügen"
description: Informationen, wie du Fahrzeuge um Shop auf deinen FiveM-Server mit ESX von ZAP-Hosting hinzufügen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Autos zum Shop hinzufügen
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Zugriff auf die Datenbank

Zuallererst müssen wir uns mit unserer Datenbank verbinden. Dies tun wir unter dem Reiter "Datenbanken"

![](https://screensaver01.zap-hosting.com/index.php/s/br9Rbw6EQAdccbP/preview)


Dort klicken wir dann auf das blaue Icon und loggen uns dann mit unseren Daten, welche wir auch auf der Seite finden, ein.

![](https://screensaver01.zap-hosting.com/index.php/s/2QDaDNL4MxCgj2f/preview)


## Spawnnamen finden

Anschließend müssen wir den Spawnnamen des Autos herausfinden. Dies können wir durch einfach herumprobieren oder auch durch das Durchstöbern von folgender Seite tun:
https://wiki.gtanet.work/index.php?title=Vehicle_Models

## Neues Fahrzeug hinzufügen

Haben wir uns ein Auto ausgesucht, so können wir es dann hinzufügen.

:::info
Standardmäßig sind sehr viele Autos schon im Fahrzeugshop. Schaut, ob euer Auto eventuell schon eingetragen ist.
:::

Zu aller erst kontrollieren wir die Fahrzeugkategorien, sodass wir wissen, welche wir hinterlegen können.
Das machen wir im "vehicle_categories Table

![](https://screensaver01.zap-hosting.com/index.php/s/3Eb9JeFiDnJ3YQy/preview)


Hier brauchen wir die "name" Spalte. Diese merken wir uns.

![](https://screensaver01.zap-hosting.com/index.php/s/ADRnRKGE2TikD3F/preview)


Haben wir das gemacht, gehen wir in den "vehicles" Table und gehen dann auf Einfügen

![](https://screensaver01.zap-hosting.com/index.php/s/6dw4tarMHfdYMsM/preview)


Nun fügen wir ein neues Fahrzeug hinzu. Eine kurze Erklärung, was für was steht:

**name** der Name welcher im Shop angezeigt wird
**model** Spawnname (darauf achten, dass es kleingeschrieben wird)
**price** Preis des Fahrzeugs
**category** Kategorie welche wir gerade herausgesucht haben

Hier noch ein Beispiel:

![](https://screensaver01.zap-hosting.com/index.php/s/LHmdSw4ipARcanc/preview)


<InlineVoucher />
