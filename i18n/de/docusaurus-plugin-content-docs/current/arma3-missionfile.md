---
id: arma3-missionfile
title: "Arma 3: Eigene Missionsdatei hochladen"
description: Information, wie du eine eigene Missionsdatei bei deinem Arma 3 Server von ZAP-Hosting hinzufügen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Eigene Missionsdatei hochladen
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Hochladen der Missionsdatei

Für das Hochladen deiner eigenen Missionsdatei musst du zuvor via FTP auf deinen Server verbinden: [Gameserver FTP Verbindung](gameserver-ftpaccess.md).
Dort lädst du nun die entsprechende Missionsdatei in dein **mpmissions** Verzeichnis, welches du unter **/gxxxxxx/arma3/** finden kannst.
In diesem Beispiel laden wir die Missionsdatei **King_of_the_hill.Altis** auf unseren Server.

![image](https://screensaver01.zap-hosting.com/index.php/s/K3tqTsTyZiFKZpr/preview)

<InlineVoucher />

## Laden der Missionsdatei auf dem Server

Damit die Missionsdatei nun vom Server geladen wird, begibst du dich in dein Arma 3 Serverinterface und klickst links im Menü auf den Tab **Configs**:

![image](https://screensaver01.zap-hosting.com/index.php/s/fYYxGQyXFzitC7n/preview)

Dort bearbeitest du nun die Datei **server.cfg** und trägst dort wie auf dem Bild zu sehen den Namen deiner Missionsdatei ein: 

![image](https://screensaver01.zap-hosting.com/index.php/s/oBtCmmgXLYTyZoe/preview)

![image](https://screensaver01.zap-hosting.com/index.php/s/wyppiEcFX9nbyt8/preview)

Danach klickst du auf **Speichern** und kannst deinen Server im Anschluss starten. Die neue Missionsdatei wird dann geladen.