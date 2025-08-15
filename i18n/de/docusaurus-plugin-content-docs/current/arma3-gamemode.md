---
id: arma3-gamemode
title: "Arma 3: Spielmodus ändern"
description: Information, wie du den Spielmodus bei deinem Arma 3 Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Spielmodus ändern
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Festlegen des Spielmodus

Um den Spielmodus auf deinem Arma 3 Server ändern zu können, musst du die für den Spielmodus passende Missionsdatei auf deinen Server hochladen.

Folgende Missionsdateien bieten wir aktuell an, ohne dass du diese hochladen musst:

- Arma 3 Wasteland

Diese liegen bereits in deinem **mpmissions** Verzeichnis.

<InlineVoucher />

## Hochladen der Missionsdatei

Für das Hochladen der Missionsdatei musst du zuvor via FTP auf deinen Server verbinden: [Zugriff per FTP](gameserver-ftpaccess.md).
Dort lädst du nun die entsprechende Missionsdatei in dein **mpmissions** Verzeichnis, welches du unter **/gxxxxxx/arma3/** finden kannst.
In diesem Beispiel laden wir den Spielmodus **King of the Hill** auf unseren Server.

![](https://screensaver01.zap-hosting.com/index.php/s/G5NgqNBMZnrWJfM/preview)


## Laden der Missionsdatei auf dem Server

Damit die Missionsdatei nun vom Server geladen wird, begibst du dich in dein Arma 3 Serverinterface und klickst links im Menü auf den Tab **Configs**:

![](https://screensaver01.zap-hosting.com/index.php/s/srNH4ym9xxECTZM/preview)

Dort bearbeitest du nun die Datei **server.cfg** und trägst dort wie auf dem Bild zu sehen den Namen deiner Missionsdatei ein: 

![](https://screensaver01.zap-hosting.com/index.php/s/QQXQ2NxSpyQAyYC/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/QT6RnFynAJJG6zP/preview)

Danach klickst du auf **Speichern** und kannst deinen Server im Anschluss starten. Die neue Missionsdatei wird dann geladen.