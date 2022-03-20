---
id: vserver_windows_addip
title: vServer: Zusätzliche IPs zu einem Windows Server hinzufügen
description: Informationen, wie du zusätzliche IPs zu deinem Windows vServer von ZAP-Hosting hinzufügen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Zusätzliche IPs hinzufügen
---

## 🆕 Die neuen extra IPs ermitteln
Als erstes musst du in Erfahrung bringen wie deine Extra IP lautet.
Dafür kannst du im Interface von deinem Server auf den Reiter "IP-Adressen" klicken.
Hier werden die alle IPs angezeigt, welche deinem Server zur Verfügung stehen.
Du kannst auch direkt erkennen, welche IP bereits eingetragen ist und welche noch nicht funktioniert.

![image](https://user-images.githubusercontent.com/13604413/159172829-7297f0a3-4678-4690-a303-0a17dda275e6.png)

## 🖥 Verbindung zum Server herstellen
Um die extra IPs deinem Server hinzuzufügen, musst du dich erstmal mit diesen verbinden.
Wie das geht ist hier in unserer separaten Anleitung ausführlich erläutert:
https://docs.zap-hosting.com/docs/de/vserver_windows_userdp/#-remotedesktopverbindung

##  Netzwerk Adapter öffnen
Damit du eigene IPs eintragen kannst, musst du erstmal deinen Adapter auf deinem Server öffnen.
Mache dafür einen Rechtsklick auf das Internetsymbol von deinem Server, welches du unten rechts am Bildschirmrand findest(direkt neben der Uhrzeit):

![image](https://user-images.githubusercontent.com/13604413/159172836-9df0c9b3-cd37-43f0-8ec9-8c10f78ac623.png)

Nun auf die Option "Netzwerk und Interneteinstellungen öffnen" klicken.
Es sollte sich nun folgendes Fenster geöffnet haben:

![image](https://user-images.githubusercontent.com/13604413/159172840-0b856022-81b9-43dc-ac73-9b1823265e61.png)

Hier kannst du auf "Adapteroptionen ändern" klicken.

### Netwerk Adapter editieren
Jetzt öffnet sich ein weiteres Fenster mit deinem Adapter.
Mache einen rechtsklick auf den Adapter und wähle Eigenschaften aus:

![image](https://user-images.githubusercontent.com/13604413/159172842-e2c440a8-1e9f-4862-b6da-543f76dfc426.png)

Hier angekommen musst du nun auf "Internetprotokoll, Version 4(TCP/IPv4) klicken und dann rechts unten auf "Eigenschaften" klicken.
Denn wir möchten ja eine zusätzliche IPv4 Adresse deinem Server zuweisen.

![image](https://user-images.githubusercontent.com/13604413/159172847-c1619f77-3e8e-4ffb-8f19-2d6f60676459.png)

Nun siehst du die bereits eingetragene IP auf deinem Server. Mit welcher du auch aktuell mit deinem Server verbunden bist.
Um nun eine neue IP einzutragen, musst du auf "erweitert" klicken:

![image](https://user-images.githubusercontent.com/13604413/159172853-20154d14-695b-4ddb-87f3-3abf23bd8c82.png)

### Zusätzliche IP dem Adapter zuweisen
Jetzt kannst du bei der Option "IP-Adressen" auf "Hinzufügen.." klicken um deine eigene IP Adresse einzutragen:

![image](https://user-images.githubusercontent.com/13604413/159172855-f47d3c23-6a7d-47d2-888e-61b39f3ef804.png)

Trage nun in das erste Feld die IP von deinem Server ein, welche du im ersten Schritt ermittelt hast.
In das Feld darunter (Subnetzmaske) trägst du "255.255.255.0" ein.
Das ist ein fixer Wert, welcher bei jeder IP identisch ist.
Das sieht dann in unserem Beispiel wie folgt aus:

![image](https://user-images.githubusercontent.com/13604413/159172857-85b4fe79-853f-4438-90ac-7abcbccdda05.png)

Nun klickst du auf "Hinzufügen". Die IP wird dir nun in der Liste der IP Adressen angezeigt.

Im selben Schritt fügen wir bei "Standardgateways" noch unser Gateway hinzu, das Gateway ist immer die selbe IP nur mit 1 hinten.
Beispiel: 11.12.13.14 ist die IP, dann wäre 11.12.13.1 das Gateway.

Klicke nun auf "Ok".

![image](https://user-images.githubusercontent.com/13604413/159172859-3713b40f-cf8e-4cbb-b95d-d797e911770c.png)

Klicke im nächste Fenster ebenfalls auf "Ok", damit die Änderungen übernommen werden:

![image](https://user-images.githubusercontent.com/13604413/159172866-0afd8b75-a90a-49bf-92f4-4447dbcdb697.png)

### ✅ Eigene IP überprüfen
Die IP wurde nun korrekt auf deinem Server hinzugefügt.
Du kannst jetzt den "IP-Adressen" Reiter im Interface von deinem Server aufrufen und nach dem Status der IP-Adresse schauen.
Insofern alles korrekt erledigt wurde, wird die IP nun als "IP erreichbar" angezeigt.
Mit der IP kannst du dich nun beispielsweise auch via RDP mit deinem Server verbinden:

![image](https://user-images.githubusercontent.com/13604413/159172869-04429e1f-96c5-4e68-9add-0c08e22ad714.png)



