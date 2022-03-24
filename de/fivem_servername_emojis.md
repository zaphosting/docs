---
id: fivem_servername_emojis
title: FiveM: Emojis im Servernamen anzeigen lassen
description: Informationen, wie die Emojis im Servernamen deines FiveM-Servers in der Serverliste anzeigen lassen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Emojis in Server Name
---

## Vorbereitung
Um Emojis im Server Namen zu haben, muss zunächst der Server Name in den Einstellungen deaktiviert werden.

![image](https://user-images.githubusercontent.com/13604413/159168639-2e96f4fe-d1c1-422f-899f-56a544189f4b.png)

![image](https://user-images.githubusercontent.com/13604413/159168641-a8ebf28e-b9cb-4e43-8fa9-9d3e78d6fe92.png)

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

![image](https://user-images.githubusercontent.com/13604413/159168654-e08bda54-504a-4617-887f-60e046018c4b.png)

Nachdem beides gesetzt wurde, kann der sets sv_projectName Parameter eingestellt werden:

![image](https://user-images.githubusercontent.com/13604413/159168656-cc64bbcd-86d6-4c18-8153-4ccfb58b167a.png)



<!--Visual Studio Code-->
<br>
Um die Emojis mit VSCode einzufügen, muss nach dem öffnen der Datei die Encodierung geändert werden, dies machen wir indem wir F1 drücken und Folgendes eingeben:

```
>Change File Encoding
```

![image](https://user-images.githubusercontent.com/13604413/159168674-01a3e10d-12e2-493c-b864-1c582afc0a0e.png)

Nun Drücken wir Enter und wählen "Save with Encoding", danach wählen wir UTF8 aus:

![image](https://user-images.githubusercontent.com/13604413/159168676-2e031ffa-64bb-4e29-b446-acfcbcf00671.png)

Nachdem es gesetzt wurde, kann der sets sv_projectName Parameter eingestellt werden:

![image](https://user-images.githubusercontent.com/13604413/159168678-e60292ba-53cf-497b-830c-d6fa96fd9561.png)

<!--END_DOCUSAURUS_CODE_TABS-->

Fertig! Nun speichern wir die Datei ab und laden sie wieder über FTP hoch, nach einem Serverrestart ist der Emoji sichtbar:

![image](https://user-images.githubusercontent.com/13604413/159168680-29178995-1450-40c8-974e-2d6f0992bfc3.png)


