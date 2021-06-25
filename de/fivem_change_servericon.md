---
id: fivem_change_servericon
title: FiveM: Server Icon für Serverliste ändern
description: Informationen, wie du das Servericon für FiveM-Server von ZAP-Hosting ändern kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Server Icon Ändern
---

## Bild Vorbereiten

Damit dein Servericon auch korrekt angezeigt wird, muss dieses eine PNG Datei sein, welche 96x96 Pixel groß ist, andere Formate werden von FiveM nicht unterstützt.

## Mit FTP verbinden

Bevor Resourcen installiert werden können, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden.


## Bild Einfügen

Navigiere in den Ordner gXXXX/gta-fivem/Server-data/ und lade dort deine Server Icon Datei hoch.

![](https://screensaver01.zap-hosting.com/index.php/s/R3ZgqiYN3eByxag/preview)

Kopiere dir den Dateinamen des Icons und öffne die Server.cfg Datei, welche du auch im Server-data Ordner oder über den Reiter "Configs" im Webinterface finden kannst.

Nun solltest du die Zeile "load_Server_icon zap96x96.png" in der Server.cfg finden, dort musst du dann zap96x96.png mit dem Dateinamen deines Logos ersetzen.

![](https://screensaver01.zap-hosting.com/index.php/s/PaCKN95oLdtSkoJ/preview)

Sobald du den Server neu gestartet hast, solltest du das logo nun in der Server liste oder über Direct Connect sehen können.
