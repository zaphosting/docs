---
id: arma3-missionfile
title: "Arma 3: Lade deine eigene Mission hoch"
description: "Entdecke, wie du eigene Missionsdateien auf deinem Arma 3 Gameserver hochlädst und lädst für ein personalisiertes Spielerlebnis → Jetzt mehr erfahren"
sidebar_label: Lade deine eigene Mission hoch
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Missionsdatei hochladen

Um deine eigene Missionsdatei hochzuladen, musst du dich vorher per FTP mit deinem Server verbinden: [Zugriff via FTP](gameserver-ftpaccess.md).  
Dort lädst du die Missionsdatei in dein **mpmissions** Verzeichnis hoch, das du unter **/gxxxxxx/arma3/** findest.  
In diesem Beispiel laden wir die Missionsdatei **King_of_the_hill.Altis** auf unseren Server hoch.

![](https://screensaver01.zap-hosting.com/index.php/s/jkfK9X48qj2e7Pn/preview)

<InlineVoucher />

## Missionsdatei auf dem Server laden

Um die Missionsdatei vom Server zu laden, geh in dein Arma 3 Serverinterface und klick im Menü links auf den Reiter **Configs**:

![](https://screensaver01.zap-hosting.com/index.php/s/PD98ATq8xHdjy8Q/preview)

Dort bearbeitest du die Datei **server.cfg** und trägst den Namen deiner Missionsdatei so ein, wie im Bild gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/aG7QESxyTNpATsG/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/6TZ7mc578pcHpbF/preview)

Danach klickst du auf **Speichern** und kannst deinen Server starten. Die neue Missionsdatei wird geladen.

<InlineVoucher />