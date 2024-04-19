---
id: fivem-esx-addcarstoshop
title: "FiveM: Autos zum Shop hinzufügen"
description: Informationen, wie du Fahrzeuge um Shop auf deinen FiveM-Server mit ESX von ZAP-Hosting hinzufügen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Autos zum Shop hinzufügen
---
## Zugriff auf die Datenbank

Zuallererst müssen wir uns mit unserer Datenbank verbinden. Dies tun wir unter dem Reiter "Datenbanken"

![image](https://user-images.githubusercontent.com/13604413/172065852-e653eed4-82b2-4adb-b204-401766830be0.png)


Dort klicken wir dann auf das blaue Icon und loggen uns dann mit unseren Daten, welche wir auch auf der Seite finden, ein.

![image](https://user-images.githubusercontent.com/13604413/172065857-ca86be43-dbbd-4045-b2cd-a836c06ddd27.png)


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

![image](https://user-images.githubusercontent.com/13604413/172065895-321b78a5-7952-44e4-a15c-050d80e2aa2a.png)


Hier brauchen wir die "name" Spalte. Diese merken wir uns.

![image](https://user-images.githubusercontent.com/13604413/172065901-53ff6c6a-e671-4ee3-9db9-6e26336f4ac3.png)


Haben wir das gemacht, gehen wir in den "vehicles" Table und gehen dann auf Einfügen

![image](https://user-images.githubusercontent.com/13604413/172065912-157e9132-78ed-4557-827f-d55c4dcb8aa6.png)


Nun fügen wir ein neues Fahrzeug hinzu. Eine kurze Erklärung, was für was steht:

**name** der Name welcher im Shop angezeigt wird
**model** Spawnname (darauf achten, dass es kleingeschrieben wird)
**price** Preis des Fahrzeugs
**category** Kategorie welche wir gerade herausgesucht haben

Hier noch ein Beispiel:

![image](https://user-images.githubusercontent.com/13604413/172065930-4de7949f-b59f-4dd5-a1f0-4773fcfd3c41.png)

