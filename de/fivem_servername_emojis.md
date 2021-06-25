---
id: fivem_servername_emojis
title: FiveM: Emojis im Servernamen anzeigen lassen
description: Informationen, wie die Emojis im Servernamen deines FiveM-Servers in der Serverliste anzeigen lassen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Emojis in Server Name
---

## Vorbereitung
Um Emojis im Server Namen zu haben, muss zunächst der Server Name in den Einstellungen deaktiviert werden.

![](https://screensaver01.zap-hosting.com/index.php/s/w29qALyaoaxF9NT/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/xdYSaawZwBTDa3n/preview)

Nun richten wir unseren [FTP-Zugang](gameserver_ftpaccess.md) ein.

Hier öffnen wir folgenden pfad: `gta5-fivem/server-data/`

## Konfiguration

Nun öffnen wir die `server.cfg` Datei mit einem Texteditor, wie Notepad++, Atom oder Visual Studio Code

> Wichtig: der Texteditor muss UTF-8 Encodierung unterstützen
> 

<!--DOCUSAURUS_CODE_TABS-->
<!--Notepad++-->
<br>
Um die Emojis mit Notepad++ einzufügen, muss nach dem öffnen der Datei die Encodierung geändert werden:

![](https://screensaver01.zap-hosting.com/index.php/s/BHBntRGHP6xaGQy/preview)

Nachdem beides gesetzt wurde, kann der sv_hostname Parameter eingestellt werden:

![](https://screensaver01.zap-hosting.com/index.php/s/n4LcG6G3fY44tMk/preview)

<!--Visual Studio Code-->
<br>
Um die Emojis mit VSCode einzufügen, muss nach dem öffnen der Datei die Encodierung geändert werden, dies machen wir indem wir F1 drücken und Folgendes eingeben:

```
>Change File Encoding
```

![](https://screensaver01.zap-hosting.com/index.php/s/K4xeYdByYeQYYNC/preview)

Nun Drücken wir Enter und wählen "Save with Encoding", danach wählen wir UTF8 aus:

![](https://screensaver01.zap-hosting.com/index.php/s/MDdg3CENgesRxY4/preview)

Nachdem es gesetzt wurde, kann der sv_hostname Parameter eingestellt werden:

![](https://screensaver01.zap-hosting.com/index.php/s/fNX4Yn8QW6HkGdF/preview)

<!--END_DOCUSAURUS_CODE_TABS-->

Fertig! Nun speichern wir die Datei ab und laden sie wieder über FTP hoch, nach einem Serverrestart ist der Emoji sichtbar:

![](https://screensaver01.zap-hosting.com/index.php/s/eLD8tBMHxrQtbZp/preview)


