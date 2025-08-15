---
id: fivem-serverbanner
title: "FiveM: Konfiguriere dein eigenen Server-Banner"
description: Informationen zur Konfiguration eines eigenen Serverbanners für deinen FiveM Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Server-Banner konfigurieren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Ein individueller  Server-Banner ist eine einfache, aber wirkungsvolle Möglichkeit, deinen FiveM Server hervorzuheben. Es verleiht deinem Server einen einzigartigen Look in der Serverliste und sorgt für einen professionellen Eindruck, wenn Spieler sich verbinden. 

Egal ob du einen eigenen Screenshot oder eine gestaltete Grafik verwendest. Mit einem Banner erkennt deine Community deinen Server sofort und dein Auftritt hinterlässt direkt einen guten ersten Eindruck.

<InlineVoucher />



## Konfiguration

Um einen eigenen Server-Banner für deinen FiveM-Server einzurichten, brauchst du zunächst ein passendes Bild. Wir empfehlen dir, einen Screenshot direkt im Spiel zu machen, der deinen Server gut repräsentiert. Du kannst ganz einfach einen Screenshot erstellen, indem du während des Spiels die **F8**-Taste drückst und den Befehl `screenshot` eingibst.

Sobald du deinen Screenshot hast, lade ihn bei einem Bild-Hosting-Dienst hoch, der dir einen **Direktlink** zur Bilddatei bereitstellt (dieser sollte zum Beispiel mit `.jpg` oder `.png` enden). Achte darauf, dass das Bild über diesen Link öffentlich erreichbar ist.

![img](https://screensaver01.zap-hosting.com/index.php/s/4sCEeKkyGEm3EXd/preview) 

Um den Banner einzufügen, öffne dein txAdmin-Dashboard und gehe zu den Konfigurationseinstellungen deines Servers. Suche nach dem Feld **Server banner URL** und füge dort deinen Direktlink zum Bild ein. Speichere die Änderungen. Dein Banner wird nun in den Serverdetails angezeigt, wenn Spieler deinen Server in der Liste sehen.

```
# Set an optional server info and connecting banner image url.
# Size doesn't matter, any banner sized image will be fine.
sets banner_detail "https://url.to/image.png"
sets banner_connecting "https://url.to/image.png"
```

Ersetze die Beispiel-URLs mit dem Direktlink zu deinem hochgeladenen Bild. Speichere die Datei im CFG Editor und starte deinen Server neu, damit die Änderungen übernommen werden.



## Abschluss

Dein individueller Banner wird nun in der Serverliste und beim Verbinden angezeigt und verleiht deinem Server einen einzigartigen und professionellen Auftritt. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
