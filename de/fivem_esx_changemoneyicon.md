---
id: fivem_esx_changemoneyicon
title: Geldicon Ändern
sidebar_label: Geldicon Ändern
---

## Mit FTP verbinden

Zuerst muss der [FTP-Zugang](gameserver_ftpaccess.md) eingerichtet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/ekYw27nA4cgiNAk/preview)

Nachdem dieser eingerichtet wurde, kann sich nun verbunden werden und der Server Ordner geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/MHt37AFEeZYgs97/preview)

Hier öffnen wir im `server-data` Ordner die server.cfg Datei

## Config Editieren

Nun fügen wir über der `start essentialmode` Zeile Folgendes ein:

```Lua
set es_moneyIcon "$"
```

Hier können wir nun das $ mit unserem eigenen Icon ersetzen, so sollte das Endresultat aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/xEkwonYzkFDoHYw/preview)

Nach einem Serverneustart wird das Geldicon Ingame Sichtbar sein.