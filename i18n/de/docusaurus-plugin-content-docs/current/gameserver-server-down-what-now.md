---
id: gameserver-server-down-what-now
title: 'Gameserver: Server down – Was jetzt?'
description: "Lerne, wie du Gameserver-Abstürze durch Analyse der Logdateien diagnostizierst, Fehler findest und effektive Lösungen entdeckst → Jetzt mehr erfahren"
sidebar_label: Servercrash – Was tun?
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Wenn dein Gameserver down ist, kann das viele Gründe haben. **Wichtig ist, dass du nicht sofort versuchst, ihn neu zu starten, sondern zuerst einen Blick in die Logdatei wirfst. Dort stehen meistens **Fehlermeldungen**, die genau beschreiben, warum der Server abgestürzt ist. **Wenn du den Server direkt neu startest, wird die Logdatei neu erstellt und die alte gelöscht. Dann kannst du leider keine Fehler mehr sehen.**

<InlineVoucher />

## Logdatei ansehen

Die Logdatei kannst du ganz easy über das Menü links öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/rTMjGQPGoijMCXQ/preview)

Anschließend kannst du sie über das grüne Auge anschauen. **Wichtig ist, dass du immer die aktuellste Logdatei öffnest.  
Erkennbar ist sie am Datum oder am Namen.**

![](https://screensaver01.zap-hosting.com/index.php/s/Hc4cYQSj3c9Enpi/preview)

Wenn du sie geöffnet hast, musst du sie auf Fehler prüfen (**Fehler enthalten meistens Wörter wie "Error", "Cant find", "Couldnt load"**)

Im folgenden Screenshot siehst du ein Beispiel eines FivemServers mit einem falschen Server-Lizenzschlüssel.

![](https://screensaver01.zap-hosting.com/index.php/s/pAwzNkHZBTtHds9/preview)

Diesen Fehler kannst du dann z.B. bei Google eingeben und schauen, ob er bekannt ist. Meist findest du so schnell den Grund für den Fehler.

Wenn du nichts zum Fehler findest, kannst du im Live Chat den Fehler als Text oder Screenshot einsenden.

## Logdatei ohne Inhalt

Das kann leider auch passieren. Wenn die Logdatei leer ist, konnte sie nicht erstellt werden, weil der Server direkt abgestürzt ist oder durch einen Neustart gelöscht wurde. In dem Fall kannst du nur versuchen, den Server neu zu starten in der Hoffnung, dass der Fehler wieder auftaucht oder der Server wieder läuft.

## Keine Lösung im Live Chat

Wenn du weder bei Google noch im Live Chat eine Lösung gefunden hast, gibt es 2 Möglichkeiten. Die erste wäre, ein Ticket zu öffnen und den Server so zu lassen, damit der Support ihn genauer prüfen kann.

Die zweite Lösung wäre, ein Backup einzuspielen oder den Server neu zu installieren.

### Variante 1 – Backup wiederherstellen

Um ein Backup wiederherzustellen, geh einfach links auf Backups und importiere das neueste Backup über den grünen Pfeil. Danach sollte dein Server wieder wie gewohnt laufen.

![](https://screensaver01.zap-hosting.com/index.php/s/j9C396QXtq8Pytx/preview)

### Variante 2 – Server neu installieren

Die Neuinstallation startest du unter „Einstellungen“ links. Danach wird der komplette Server auf den ersten Tag zurückgesetzt (zusätzlich können die Einstellungen auch zurückgesetzt werden "**Alle Optionen zurücksetzen**").

![](https://screensaver01.zap-hosting.com/index.php/s/2edwoTrn3We67SB/preview)

## Neuinstallation ohne Erfolg

Das ist leider der Worst Case. Dann bleibt leider nur, den Server per Chat oder Ticket prüfen zu lassen, denn dann liegt ein ernsteres Problem vor. Wir geben natürlich alles, um das Problem so schnell wie möglich zu lösen, damit du deinen Service wie gewohnt nutzen kannst.

<InlineVoucher />