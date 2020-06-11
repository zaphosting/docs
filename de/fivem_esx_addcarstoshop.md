---
id: fivem_esx_addcarstoshop
title: Autos zum Shop hinzufügen
sidebar_label: Autos zum Shop hinzufügen
---
## 📔 Zugriff auf die Datenbank

Zu allererst müssen wir uns mit unserer Datenbank verbinden. Dies tun wir unter dem Reiter "Datenbanken"

![](https://screensaver01.zap-hosting.com/index.php/s/HawSP7eiRRXr7Pf/preview)

Dort klicken wir dann auf das Blaue Icon und Loggen uns dann mit unseren Daten, welche wir auch auf der Seite finden ein.

![](https://screensaver01.zap-hosting.com/index.php/s/6PEx3jEGrLctiyS/preview)

## 📖 Spawnnamen finden

Anschließend müssen wir den Spawnnamen des Autos herrausfinden. Dies können wir durch einfach rumprobieren oder auch durch das durchstöbern von folgender Seite tun:
https://wiki.gtanet.work/index.php?title=Vehicle_Models

## 📑 Neues Fahrzeug hinzufügen

Haben wir uns ein Autos ausgesucht können wir es dann hinzufügen.

> **Wichtig**: Standartmäßig sind sehr viele Autos schon im Fahrzeugshop. Schaut ob euer Auto eventuell schon eingetragen ist.

Zu aller erst kontrollieren wir die Fahrzeugkategorien. Sodass wir wissen welche wir hinterlegen können.
Das machen wir im "vehicle_categories Table

![](https://screensaver01.zap-hosting.com/index.php/s/nN7Hx67j8Gz7BnD/preview)

Hier brauchen wir die "name" Spalte. Diese merken wir uns.
Haben wir das gemacht gehen wir in den "vehicles" Table.
Und gehen dann auf Einfügen

![](https://screensaver01.zap-hosting.com/index.php/s/Y8Kdpn6Y5dWxBne/preview)

Nun fügen wir ein neues Fahrzeug hinzu. Eine kurze Erklärung was für was steht:

**name** Der Name welcher im Shop angezeigt wird
**model** Spawnname (darauf achten dass es klein geschrieben wird)
**price** Preis des Fahrzeugs
**category** Kategorie welche wir gerade rausgesucht haben

Ich habe hier noch ein kleines Beispiel für euch:

![](https://screensaver01.zap-hosting.com/index.php/s/keqnrezZKbYcoqH/preview)
