---
id: gameserver-restartplaner
title: 'Gameserver: Restartplaner – Server-Restarts automatisch durchführen'
description: "Entdecke, wie du tägliche Gameserver-Restarts automatisierst für bessere Performance und Verfügbarkeit → Jetzt mehr erfahren"
sidebar_label: Restartplaner
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Der Restartplaner ist ein Feature für Gameserver, mit dem du automatische Neustarts einrichten kannst, die den Server jeden Tag zur gleichen Zeit neu starten.

<YouTube videoId="bcsAePevPnY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pNsgKBQQGEC3tPj/preview" title="Wie du einen RESTARTPLANER für deinen Server einrichtest!" description="Lernst du besser, wenn du Dinge in Aktion siehst? Kein Problem! Unser Video erklärt dir alles Schritt für Schritt. Egal ob du es eilig hast oder lieber auf die unterhaltsamste Art lernst!"/>

:::info
Dieses Feature ist nur für Gameserver verfügbar.
:::

Das Feature findest du im Interface deines Gameservers.

![](https://screensaver01.zap-hosting.com/index.php/s/doBQoGw3kTj8o6r/preview)

<InlineVoucher />

## Neue Einträge erstellen

:::info
***Hinweis:*** Änderungen am Restartplaner werden erst nach einem Serverneustart aktiv.
:::

Wenn du einen automatischen Neustart hinzufügen möchtest, klickst du auf den grauen "**+**"-Button.

Im nächsten Fenster kannst du zwischen wöchentlichen und täglichen Neustarts wählen. In unserem Beispiel wollen wir vier Neustarts pro Tag im 6-Stunden-Takt. Deshalb wählen wir "**Täglich**" und setzen "**06:00**". Bestätige den Eintrag mit "**Speichern**".

Diesen Vorgang wiederholst du für jeden gewünschten automatischen Neustart. Wenn du "**24:00**" eingibst, zeigt das System eine Fehlermeldung an. Um das zu vermeiden, musst du stattdessen "**00:00**" verwenden.

![](https://screensaver01.zap-hosting.com/index.php/s/j4nyS4efsKTinBS/preview)

### Offline-Server starten

Wenn diese Option aktiviert ist, wird ein gestoppter Server zu diesem Zeitpunkt automatisch gestartet. Ist die Option deaktiviert, wird der Gameserver nur neu gestartet, wenn er vorher "**Online**" war.

## Befehlsoption

Die Befehlsoption bei den automatischen Neustarts dient dazu, kurz vor dem Neustart automatisch Befehle auszuführen. Wie viele Befehle verfügbar sind, hängt vom Spiel ab. Nicht alle Spiele bieten diese Möglichkeit.

Wenn du Spieler vorher warnen möchtest, kannst du in Minecraft den *say*-Befehl verwenden.

![](https://screensaver01.zap-hosting.com/index.php/s/bcRJQprM2BFeR75/preview)

### Verzögerung

Das Feld Verzögerung definiert das Zeitintervall zwischen der Ausführung des Befehls und dem Neustart des Servers. Diese Verzögerung wird in **Sekunden** angegeben. Wenn du z.B. eine Verzögerung von 5 Minuten einstellen möchtest, musst du hier den Wert 300 eintragen.

<InlineVoucher />