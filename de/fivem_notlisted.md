---
id: fivem_notlisted
title: FiveM Server: Server erscheint nicht in der Serverliste
description: Informationen, was du tun kannst, wenn dein FiveM-Server von ZAP-Hosting nicht auf der Serverliste erscheint - ZAP-Hosting.com Dokumentationen
sidebar_label: Server nicht in Serverliste
---

Wenn der Server nicht in der Serverliste angezeigt wird, kann dies mehrere Gründe haben, falls dieser Guide das Problem nicht behebt, würden wir dich bitten, unseren [Support](https://zap-hosting.com/en/customer/support/) zu Kontaktieren.

## Konfigurationsfehler

Oftmals sind es simple Konfigurationsfehler, welches dieses Problem verursacht, zuerst sollten wir prüfen, ob unser Server das Listing deaktiviert hat, hierzu prüfen wir die `sv_master1` Zeile:

![image](https://user-images.githubusercontent.com/13604413/159138135-be595288-7548-47f6-aef9-877b9cdb06af.png)

> Diese Zeile sollte **immer** mit einem # auskommentiert werden, wenn dies nicht der Fall ist, wird der Server nicht gelistet.


Ebenfalls sollte der Servername (`sv_hostname`) geprüft werden:

![image](https://user-images.githubusercontent.com/13604413/159138144-52856120-f3df-4d37-91ad-a36be4244c13.png)

In diesem Fall fehlt das Anführungszeichen am Ende der Zeile, bei manchen Servernamen kann es auch durch Formatierung Probleme geben, wir würden in diesem Fall empfehlen, z. B. [DE], Sonderzeichen wie ä, ü, ö zu entfernen.


## Problematische Resourcen

Es können auch Resourcen verhindern, dass der Server gelistet wurde, in diesem Fall empfehlen wir zuletztinstallierte Resourcen wieder zu entfernen und danach den Server für ~1h online zu lassen, in den meisten fällen sollte er dann wieder angezeigt werden.


## Neuinstallation

Falls nichts davon abhilfe bringt, ist eine Neuinstallation empfehlenswert, damit werden alle Serverdateien auf Standard zurückgesetzt.

> Gehe sicher, dass vor der Neuinstallation ein Backup erstellt wird, ansonsten werden die Daten auf dem Server verloren gehen.
