---
id: fivem_notlisted
title: FiveM Server: Server erscheint nicht in der Serverliste
description: Informationen, was du tun kannst, wenn dein FiveM-Server von ZAP-Hosting nicht auf der Serverliste erscheint - ZAP-Hosting.com Dokumentationen
sidebar_label: Server nicht in Serverliste
---

Wenn der Server nicht in der Serverliste angezeigt wird, kann dies mehrere Gründe haben, falls dieser Guide das Problem nicht behebt, würden wir dich bitten, unseren [Support](https://zap-hosting.com/en/customer/support/) zu Kontaktieren.

## Konfigurationsfehler

Oftmals sind es simple Konfigurationsfehler, welches dieses Problem verursacht, zuerst sollten wir prüfen, ob unser Server das Listing deaktiviert hat, hierzu prüfen wir die `sv_master1` Zeile:

![](https://screensaver01.zap-hosting.com/index.php/s/KzMWGaFH6dETF6w/preview)

> Diese Zeile sollte **immer** mit einem # auskommentiert werden, wenn dies nicht der Fall ist, wird der Server nicht gelistet.


Ebenfalls sollte der Servername (`sv_hostname`) geprüft werden:

![](https://screensaver01.zap-hosting.com/index.php/s/sk2ZpQomYniYPyG/preview)

In diesem Fall fehlt das Anführungszeichen am Ende der Zeile, bei manchen Servernamen kann es auch durch Formatierung Probleme geben, wir würden in diesem Fall empfehlen, z. B. [DE], Sonderzeichen wie ä, ü, ö zu entfernen.


## Serverversion Veraltet

Wenn deine Serverversion stark veraltet ist, wird FiveM den Server nicht mehr in der Serverliste anzeigen, wir würden daher immer empfehlen, den Server auf der neusten Version zu haben und automatische Updates zu Aktivieren:

![](https://screensaver01.zap-hosting.com/index.php/s/YNr6s59bpWSxseQ/preview)


## Problematische Resourcen

Es können auch Resourcen verhindern, dass der Server gelistet wurde, in diesem Fall empfehlen wir zuletztinstallierte Resourcen wieder zu entfernen und danach den Server für ~1h online zu lassen, in den meisten fällen sollte er dann wieder angezeigt werden.


## Neuinstallation

Falls nichts davon abhilfe bringt, ist eine Neuinstallation empfehlenswert, damit werden alle Serverdateien auf Standard zurückgesetzt.

> Gehe sicher, dass vor der Neuinstallation ein Backup erstellt wird, ansonsten werden die Daten auf dem Server verloren gehen.
