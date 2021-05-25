---
id: vserver_windows_port
title: vServer: Ports bei Windows Servern freigeben
description: Informationen, wie du Ports bei deinem Windows vServer von ZAP-Hosting freigeben kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Port freigeben
---

## 📝 Port Freigabe

Eine Firewall kontrolliert den ein- und ausgehenden Verkehr zwischen Server und Internet.
Geöffnete Ports können ein Sicherheitsrisiko darstellen, aufgrund dessen wird nicht automatisch jeder Port geöffnet.

Wenn geblockte Ports für einen Spiele Server oder bestimmte Applikationen benötigt werden, muss eine Portfreigabe durchgeführt werden.

## 🔓 Port in der Windows-Firewall freigeben

Zu Beginn muss die "**Windows Defender Firewall mit erweiterter Sicherheit**" geöffnet werden.
Diese kann nach einem Klick auf das Windows Logo gesucht werden

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/HEP3S6odP6Ns2D6?x=1600&y=439&a=true&file=ApplicationFrameHost_AODliwqeB0.png&scalingup=0)

Bei der eingehenden Regel werden die Ports für Anwendungen freigegeben welche von außen versuchen mit dem Server zu kommunizieren.
Bei der ausgehenden Regel werden die Ports für Anwendungen freigegeben welche vom Server nach außen kommunizieren möchten.

Die Portfreigabe für die "**Ausgehende Regel**" funktioniert auf gleichem Wege wie für die "**Eingehende Regel**", wir zeigen in diesem Beispiel daher nur die Freigabe eines Ports für die "**Eingehende Regel**".

Sobald in der Firewall Verwaltung die "**Eingehende Regel**" oder "**Ausgehende Regel**" ausgewählt wurde, muss bei diesem eine "**Neue Regel**" erstellt werden.

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/rqskQbAodSyP9XA?x=1600&y=439&a=true&file=ApplicationFrameHost_4WMoW2MuyA.png&scalingup=0)

Bei dieser neuen Regel wird als "**Regeltyp**" der "**Port**" gewählt und mit "**Weiter >**" bestätigt

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/MSGYz6r2xYoJ6jt?x=1600&y=439&a=true&file=ApplicationFrameHost_gROrMf74OM.png&scalingup=0)

Je nach Anwendung muss nun "**TCP**" oder "**UDP**" gewählt werden. 
Sobald herausgefunden und ausgewählt wurde welches der Beiden für die gewünschte Anwendung genutzt werden soll, muss nun bei "**Bestimmte lokale Ports:**" der Port eingetragen werden welcher freigegeben werden soll.
Dies wird erneut mit dem "**Weiter >**" bestätigt.

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/WLLyPRnaoEaKcrR?x=1920&y=562&a=true&file=ApplicationFrameHost_YMRsNuK0K7.png&scalingup=0)

Nun kann gewählt werden ob der Server die Verbindung mit dem Port zulassen, nur unter bestimmten Voraussetzungen zulassen oder blockieren soll.
Dies wird erneut mit dem "**Weiter >**" bestätigt.

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/rYLWwDG4gsEFa6j?x=1920&y=562&a=true&file=ApplicationFrameHost_toEEUaSbEi.png&scalingup=0)

In dem "**Profil**" kann nun gewählt werden, ob diese Regel nur für bestimmte Netzwerke oder alle aktiv sein soll. 
Dies wird erneut mit dem "**Weiter >**" bestätigt.

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/MieGpgXiwdnDyHC?x=1920&y=562&a=true&file=ApplicationFrameHost_MxGG9O9Tqe.png&scalingup=0)

Bei "**Name**" muss nur noch ein Name für diese neue "**Regel**" eingetragen werden, dieser ist frei wählbar.

> Hierbei sollte ein Name gewählt werden der noch ungenutzt und eindeutig ist, damit dieser unter "**Eingehende Regel**" bzw. "**Ausgehende Regel**" wiedergefunden werden kann.

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/iS3MyjM2wfe2scs?x=1920&y=562&a=true&file=ApplicationFrameHost_bi4C03LP7e.png&scalingup=0)

Sobald mit dem Button "**Fertig stellen**" bestätigt, wird die Regel aktiviert und der Port ist freigegeben.

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/Mg8Dm9dmjEasG8R?x=1920&y=562&a=true&file=ApplicationFrameHost_n6AiQeBlHU.png&scalingup=0)
