---
id: fivem-esx-addcarstoshop
title: "FiveM: Autos zum Shop hinzufügen"
description: "Entdecke, wie du Fahrzeuge in deiner Datenbank verwaltest und hinzufügst für ein individuelles Auto-Shop-Erlebnis → Jetzt mehr erfahren"
sidebar_label: Autos zum Autohaus hinzufügen
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Zugriff auf die Datenbank

Zuerst müssen wir uns mit unserer Datenbank verbinden. Das machen wir unter dem Reiter „Datenbanken“.

![](https://screensaver01.zap-hosting.com/index.php/s/8NYJC6Qq5inG5yk/preview)

Dort klicken wir auf das blaue Icon und loggen uns mit unseren Daten ein, die wir auch auf der Seite finden.

![](https://screensaver01.zap-hosting.com/index.php/s/XK5CLoeckxxHk8w/preview)

## Spawn-Namen finden

Als Nächstes müssen wir den Spawn-Namen des Autos herausfinden. Das geht entweder durch Ausprobieren oder indem du auf folgender Seite nachschaust:
https://wiki.gtanet.work/index.php?title=Vehicle_Models

## Neues Fahrzeug hinzufügen

Sobald wir ein Auto ausgewählt haben, können wir es zur Liste hinzufügen.

:::info
Standardmäßig sind schon viele Autos im Autohaus vorhanden. Check also erstmal, ob dein Auto nicht schon gelistet ist.
:::

Zuerst checken wir die Fahrzeugkategorien, damit wir wissen, welche wir hinzufügen können.
Das machen wir in der Tabelle „vehicle_categories“.

![](https://screensaver01.zap-hosting.com/index.php/s/PYSt6anrdXs8QLY/preview)

Hier brauchen wir die Spalte „name“. Die merken wir uns.

![](https://screensaver01.zap-hosting.com/index.php/s/CnrQJcGbf3SPdtg/preview)

Danach gehen wir zur Tabelle „vehicles“.
Und klicken dann auf „Insert“.

![](https://screensaver01.zap-hosting.com/index.php/s/eN5x9o724a6tKwf/preview)

Jetzt fügen wir ein neues Fahrzeug hinzu. Hier eine kurze Erklärung, was was bedeutet:

**name** Der Name, der im Shop angezeigt wird  
**model** Spawn-Name (achte darauf, dass er in Kleinbuchstaben geschrieben ist)  
**price** Preis des Fahrzeugs  
**category** Die Kategorie, die wir gerade rausgesucht haben

Hier noch ein kleines Beispiel für euch:

![](https://screensaver01.zap-hosting.com/index.php/s/cFrrLYKTALmCnFP/preview)

<InlineVoucher />