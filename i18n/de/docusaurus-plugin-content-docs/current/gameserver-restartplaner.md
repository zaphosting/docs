---
id: gameserver-restartplaner
title: "'Gameserver: Restartplaner - Server-Neustarts automatisch durchführen"
description: Informationen, wie du mit dem Restartplaner deinen Gameserver von ZAP-Hosting.com automatisch in festgelegten Intervallen neu starten lassen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Restartplaner
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Bei dem Restartplaner handelt es sich um eine bei Gameservern angebotene Funktion. Mit dieser kann im Vorfeld ein automatischer Restart erstellt, damit der Server täglich zur selben Zeit automatisch neugestartet werden kann.

<YouTube videoId="bcsAePevPnY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/C5QaLsaHmSyKHxK/preview" title="How to setup a RESTART PLANNER for your Server!" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst? Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

:::info
Diese Funktion ist nur für Gameserver eingebunden
:::

Auffinden kann man diese Funktion daher in dem Gameserver Interface von dem bestellten Gameserver.

![](https://screensaver01.zap-hosting.com/index.php/s/TcTCFpzeqq6pPby/preview)

<InlineVoucher />

## Neue Einträge erstellen

:::info
Die Änderungen vom Restartplaner werden nur bei einem Neustart des Servers übernommen. Nach Fertigstellung aller gewünschten automatischen Neustarts sollte der Server einmal gestoppt und wieder gestartet werden.
:::
Alternativ können die Änderungen auch direkt bei gestopptem Server durchgeführt werden, diese wären dann nach einem Start aktiv.

Um einen automatischen Neustart einzutragen, muss auf das graue "**+**" Icon geklickt werden. In dem neuen Fenster kann nun zwischen wöchentlichen und täglichen Restart gewählt werden.

In unserem Beispiel wollen wir vier Neustarts pro Tag in einem Abstand von 6 Stunden.
Deswegen wählen wir "**täglich**" und tragen "**06:00**" ein.
Die Eingabe bestätigen wir mit "**Speichern**"


Dieser Vorgang wird jetzt für jeden gewünschten automatischen Neustart wiederholt.
Bei "**24:00**" wird von dem System eine Fehlermeldung angezeigt. Um diesen Fehler zu vermeiden, muss dort stattdessen "**00:00**" genutzt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/TdJwPbpwz3kbTo7/preview)

###  Offline Server starten

Ist diese Funktion aktiviert, dann wird auch ein gestoppter Server automatisch zum festgelegten Zeitpunkt gestartet. Bleibt diese Funktion deaktiviert, so wird ein Gameserver von unserem System nur zum festgelegten Zeitpunkt neu gestartet, wenn dieser auch vorher "**Online**" war.

## Befehl Funktion

Die Befehle unter den festgelegten automatischen Neustarts, sollen dafür genutzt werden Befehle automatisch durchzuführen kurz bevor der Neustart erfolgt. Die möglichen Befehle welche genutzt werden können, hängen von dem Spiel ab und was die Spieleentwickler dort für Befehle bereitstellen.

Diese Funktion würde den Befehl so wie er dort eingetragen wird, an die Konsole weiterleiten. Sollen Spieler vorgewarnt werden, kann bei Minecraft der *say* Befehl genutzt werden

![](https://screensaver01.zap-hosting.com/index.php/s/Crt5ZPSgqXB2b23/preview)

### Verzögerung

Die Verzögerung bei dem Befehl ist die Zeit, in welcher der Befehl vor dem Server Neustart an die Konsole weitergegeben wird. Diese Verzögerung wird in **Sekunden** gesetzt. Sollte daher eine Verzögerung von **5** Minuten vor dem Neustart gewünscht sein, muss eine Verzögerung von **300** Sekunden eingetragen werden.

<InlineVoucher />
