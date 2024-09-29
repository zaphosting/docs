---
id: gameserver-server-down-what-now
title: 'Gameserver: Server down - Was nun?'
description: Informationen, was du tun kannst, wenn dein Gameserver von ZAP-Hosting abgestürzt oder down ist - ZAP-Hosting.com Dokumentation
sidebar_label: Server down - Was nun?
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Wenn dein Gameserver down ist, kann das viel Gründe haben. **Wichtig** ist, dass du erstmal nicht direkt versucht diesen neu zu starten, sondern erst einen Blick in die **Log-Datei** wirfst. Dort sind in der Regel **Fehlermeldungen**, die beschreiben, warum genau der Server abgestürzt ist. **Solltest du den Server direkt neu starten, so wird die Log neu generiert und die alte gelöscht. Dann kann man leider keine Fehler mehr einsehen.**

<InlineVoucher />

## Einblick in die Log-Datei

Die Log-Datei kann einfach links über das Menü aufgerufen werden.

![](https://screensaver01.zap-hosting.com/index.php/s/9XRNoSA7EqxocXE/preview)

Im Anschluss kannst du diese über das grüne Auge einsehen. **Wichtig ist dabei, dass du immer die neuste Log öffnet.**
Diese kannst du am Datum oder dem Namen erkennen.

![](https://screensaver01.zap-hosting.com/index.php/s/cYXBo3JQ6zcFjJs/preview)

Wenn du diese dann geöffnet hast, musst du sie auf Fehler prüfen.(**Fehler enthalten meistens etwas wie "Error" "Cant find" "Couldnt load"**)

Im folgenden Screenshot habe ich ein Beispiel eines FivemServers mit falschem Server Lizenz Key.

![](https://screensaver01.zap-hosting.com/index.php/s/tqFaSRqiAT8YmN2/preview)

Diesen Fehler könntest du dann z.B. bei Google eingeben und schauen, ob dieser bekannt ist. In der Regel findet man dort recht schnell den Grund, der diesen Fehler ausgelöst hat.

Solltest du zu dem Fehler nichts finden, dann kannst du am besten in den Live Chat gehen und dort diesen Fehler als Text oder Screenshot einschicken.

## Log-Datei ohne Inhalt

Das kann bedauerlicherweise ebenfalls passieren. Wenn die Log-Datei leer ist, dann konnte sie nicht erstellt werden, da der Server direkt down gegangen ist oder wurde aufgrund eines Neustarts gelöscht. In dem Fall kannst du nur versuchen ihn neu zu starten in der Hoffnung, dass der Fehler erneut generiert wird oder der Server wieder läuft.

## Keine Lösung im Chat

Wenn du bei Google und im Chat keine Lösung gefunden hast, dann gibt es 2 Möglichkeiten. Die erste wäre ein Ticket zu öffnen und den Server so zu lassen wie er ist, damit der Support dies genauer prüfen kann.

Die zweite Lösung wäre es ein Backup einzuspielen oder den Server neu zu installieren.

### Variante 1 - Backup einspielen

Um ein Backup einzuspielen, musst du lediglich links auf Backups gehen und dort dann das neuste Backup über den grünen Pfeil einspielen. Im Anschluss sollte dein Server wieder wie gewohnt laufen.

![](https://screensaver01.zap-hosting.com/index.php/s/zbctK7rzcL3g2SG/preview)

### Variante 2 - Server neu installieren

Die Neuinstallation kann unter "Einstellungen" auf der linken Seite gestartet werden. Im Anschluss wird der komplette Server wieder auf den ersten Tag zurückgesetzt.(zusätzlich können die Einstellungen auch zurückgesetzt werden "**Alle Optionen zurücksetzen**")

![](https://screensaver01.zap-hosting.com/index.php/s/8AFBNbGjWDQ7AFe/preview)



## Neuinstallation ohne Erfolg

Das ist leider der schlimmste Fall, der eintreten kann. Dann ist es bedauerlicherweise nur noch möglich den Server über den Chat oder ein Ticket prüfen zu lassen, da es dann ein schwerwiegenderes Problem ist. In dem Fall werden wir unser Bestes geben das Problem so schnell es geht für dich zu lösen, damit du deinen Dienst wieder wie gewohnt nutzen kannst.
