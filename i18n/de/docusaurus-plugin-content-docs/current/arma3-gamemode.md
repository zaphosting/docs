---
id: arma3-gamemode
title: "Arma 3: Spielmodus ändern"
description: "Entdecke, wie du Spielmodi auf deinem Arma 3 Gameserver einstellst und lädst für ein individuelles Spielerlebnis → Jetzt mehr erfahren"
sidebar_label: Spielmodus ändern
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Spielmodus einstellen

Um den Spielmodus auf deinem Arma 3 Gameserver zu ändern, musst du die passende Missionsdatei für den Spielmodus auf deinen Server hochladen.

Wir bieten aktuell folgende Missionsdateien an, die du nicht selbst hochladen musst:

- Arma 3 Wasteland

Diese findest du bereits in deinem **mpmissions** Verzeichnis.

<InlineVoucher />

## Missionsdatei hochladen

Zum Hochladen der Missionsdatei musst du dich vorher per FTP mit deinem Server verbinden: [Zugriff via FTP](gameserver-ftpaccess.md).  
Dort lädst du die entsprechende Missionsdatei in dein **mpmissions** Verzeichnis hoch, das du unter **/gxxxxxx/arma3/** findest.  
Im Beispiel laden wir den Spielmodus **King of the Hill** auf unseren Server hoch.

![](https://screensaver01.zap-hosting.com/index.php/s/rDS7DsEfQskZ9Y3/preview)


## Missionsdatei auf dem Server laden

Um die Missionsdatei vom Server zu laden, gehst du in dein Arma 3 Serverinterface und klickst im Menü links auf den Reiter **Configs**:

![](https://screensaver01.zap-hosting.com/index.php/s/dxDWHiFJy5e4qYq/preview)

Dort bearbeitest du die Datei **server.cfg** und trägst den Namen deiner Missionsdatei wie im Bild ein:

![](https://screensaver01.zap-hosting.com/index.php/s/7JQED8wC9WGBdYB/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/7jtRK3YRD7wWiij/preview)

Danach klickst du auf **Speichern** und kannst deinen Server starten. Die neue Missionsdatei wird geladen.

<InlineVoucher />