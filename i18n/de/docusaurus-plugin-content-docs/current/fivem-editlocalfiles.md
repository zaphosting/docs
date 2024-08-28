---
id: fivem-editlocalfiles
title: "FiveM: Locales-Dateien bearbeiten"
description: Informationen, wie du die Locales-Dateien deines FiveM-Server von ZAP-Hosting editieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Localesfiles bearbeiten
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Übersicht

Zuallererst müssen wir uns auf den Server verbinden. Hier geht es zur [Anleitung](gameserver-ftpaccess.md)

## Locales Files finden
Haben wir das gemacht, suchen wir nach dem Script, wo wir die Localfiles verändern wollen.

Dort suchen wir dann nach dem Ordner **locales**

![image](https://screensaver01.zap-hosting.com/index.php/s/W7qGXjbHFeJG9tx/preview)

Dort suchen wir uns dann unsere locales Datei. In unserem Fall ist das de.lua

![image](https://screensaver01.zap-hosting.com/index.php/s/eYWtgfLfTGg3iTM/preview)

Diesen öffnen wir dann.

## Locales File bearbeiten

Jetzt können wir die Locales ändern. **Wichtig** immer in den ' Symbol schreiben.

![image](https://screensaver01.zap-hosting.com/index.php/s/gN6siagmMGY2Ckt/preview)

Haben wir alles geändert, was wir ändern wollten, speichern wir die Datei ab und laden sie hoch.

## Config einstellen

Nachdem das alles erledigt ist, müssen wir noch sichergehen, dass in der Config die richtige Locales Datei angegeben ist.

![image](https://screensaver01.zap-hosting.com/index.php/s/3MRAtDP7ejPCknf/preview)

Ist das auch erledigt, laden wir die Datei wieder hoch und starten den Server neu.
