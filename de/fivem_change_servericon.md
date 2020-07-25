---
id: fivem_change_servericon
title: Server Icon Ändern
sidebar_label: Server Icon Ändern
---

## Bild Vorbereiten

Damit dein Servericon auch korrekt angezeigt wird, muss dieses eine PNG Datei sein, welche 96x96 Pixel groß ist, andere Formate werden von FiveM nicht unterstützt.

## Mit FTP verbinden

Bevor Resourcen installiert werden können, muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/ekYw27nA4cgiNAk/preview)

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/omjKDgFcn64rRMF/preview)


## Bild Einfügen

Navigiere in den Ordner gXXXX/gta-fivem/Server-data/ und lade dort deine Server Icon Datei hoch.

![](https://screensaver01.zap-hosting.com/index.php/s/Ds3gNEtsBM9smgM/preview)

Kopiere dir den Dateinamen des Icons und öffne die Server.cfg Datei, welche du auch im Server-data Ordner oder über den Reiter "Configs" im Webinterface finden kannst.

Nun solltest du die Zeile "load_Server_icon zap96x96.png" in der Server.cfg finden, dort musst du dann zap96x96.png mit dem Dateinamen deines Logos ersetzen.

![](https://screensaver01.zap-hosting.com/index.php/s/534HWfqiZRP778P/preview)

Sobald du den Server neu gestartet hast, solltest du das logo nun in der Server liste oder über Direct Connect sehen können.