---
id: vserver_windows_addip
title: Zusätzliche IPs hinzufügen
sidebar_label: Zusätzliche IPs hinzufügen
---

## 🆕 Die neuen extra IPs ermitteln
Als erstes musst du in Erfahrung bringen wie deine Extra IP lautet.
Dafür kannst du im Interface von deinem Server auf den Reiter "IP-Adressen" klicken.
Hier werden die alle IPs angezeigt, welche deinem Server zur Verfügung stehen.
Du kannst auch direkt erkennen, welche IP bereits eingetragen ist und welche noch nicht funktioniert.

![](https://screensaver01.zap-hosting.com/index.php/s/znWitTCmSJfRS6x/preview)

## 🖥 Verbindung zum Server herstellen
Um die extra IPs deinem Server hinzuzufügen, musst du dich erstmal mit diesen verbinden.
Wie das geht ist hier in unserer separaten Anleitung ausführlich erläutert:
https://docs.zap-hosting.com/docs/de/vserver_windows_userdp/#-remotedesktopverbindung

##  Netzwerk Adapter öffnen
Damit du eigene IPs eintragen kannst, musst du erstmal deinen Adapter auf deinem Server öffnen.
Mache dafür einen Rechtsklick auf das Internetsymbol von deinem Server, welches du unten rechts am Bildschirmrand findest(direkt neben der Uhrzeit):

![](https://screensaver01.zap-hosting.com/index.php/s/xD4CwRajgQJB3QG/preview)

Nun auf die Option "Netzwerk und Interneteinstellungen öffnen" klicken.
Es sollte sich nun folgendes Fenster geöffnet haben:

![](https://screensaver01.zap-hosting.com/index.php/s/8H6eK78xzSbjagq/preview)

Hier kannst du auf "Adapteroptionen ändern" klicken.

### Netwerk Adapter editieren
Jetzt öffnet sich ein weiteres Fenster mit deinem Adapter.
Mache einen rechtsklick auf den Adapter und wähle Eigenschaften aus:

![](https://screensaver01.zap-hosting.com/index.php/s/CfYNftFfiDeZSE9/preview)

Hier angekommen musst du nun auf "Internetprotokoll, Version 4(TCP/IPv4) klicken und dann rechts unten auf "Eigenschaften" klicken.
Denn wir möchten ja eine zusätzliche IPv4 Adresse deinem Server zuweisen.

![](https://screensaver01.zap-hosting.com/index.php/s/baDAPZkPSWi9K72/preview)

Nun siehst du die bereits eingetragene IP auf deinem Server. Mit welcher du auch aktuell mit deinem Server verbunden bist.
Um nun eine neue IP einzutragen, musst du auf "erweitert" klicken:

![](https://screensaver01.zap-hosting.com/index.php/s/m7ReFrefziBm4pW/preview)

### Zusätzliche IP dem Adapter zuweisen
Jetzt kannst du bei der Option "IP-Adressen" auf "Hinzufügen.." klicken um deine eigene IP Adresse einzutragen:

![](https://screensaver01.zap-hosting.com/index.php/s/osZsFMc5b9S5mR6/preview)

Trage nun in das erste Feld die IP von deinem Server ein, welche du im ersten Schritt ermittelt hast.
In das Feld darunter (Subnetzmaske) trägst du "255.255.255.0" ein.
Das ist ein fixer Wert, welcher bei jeder IP identisch ist.
Das sieht dann in unserem Beispiel wie folgt aus:

![](https://screensaver01.zap-hosting.com/index.php/s/CFtPaG9zj6Pe6wf/preview)

Nun klickst du auf "Hinzufügen". Die IP wird dir nun in der Liste der IP Adressen angezeigt.
Klicke nun auf "Ok".

![](https://screensaver01.zap-hosting.com/index.php/s/kqkWXtGisTDkS9X/preview)

Klicke im nächste Fenster ebenfalls auf "Ok", damit die Änderungen übernommen werden:

![](https://screensaver01.zap-hosting.com/index.php/s/zjdEnbyXxbSXgoF/preview)

### ✅ Eigene IP überprüfen
Die IP wurde nun korrekt auf deinem Server hinzugefügt.
Du kannst jetzt den "IP-Adressen" Reiter im Interface von deinem Server aufrufen und nach dem Status der IP-Adresse schauen.
Insofern alles korrekt erledigt wurde, wird die IP nun als "IP erreichbar" angezeigt.
Mit der IP kannst du dich nun beispielsweise auch via RDP mit deinem Server verbinden:

![](https://screensaver01.zap-hosting.com/index.php/s/XBErekHMEwD9cZw/preview)



