---
id: gameserver-gameswitch
title: 'Gameserver: Spielumschaltfunktion für Web-Oberfläche'
description: Informationen zur ZAP-Hosting-Spielwechsel-Funktion für Spieleserver und zur Verwaltung und zum Wechsel zwischen verschiedenen Spielen – ZAP-Hosting.com-Dokumentation
sidebar_label: Switch Game
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Mit einem ZAP-Hosting-Spieleserver hast du die Möglichkeit, den Server über dein Webinterface-Panel schnell und einfach zwischen verschiedenen von uns angebotenen Spielen zu wechseln. In dieser Anleitung werden wir unsere Spielwechsel-Funktion vorstellen und erläutern, wie du damit verschiedene Spiele auf deinem Spieleserver verwalten und aktivieren kannst.

<InlineVoucher />

## Zugriff auf das Webinterface

Beginne damit, das Dashboard deines Spielserver-Produkts auf unserer Website aufzurufen. Navigiere dort zum Abschnitt **Einstellungen->Spiele** auf der linken Seite.

Du befindest dich nun im Abschnitt Spielwechsel, in dem du Spielinstallationen verwalten, ein Spiel aktivieren und den Slot-Preis bei Bedarf anpassen kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/FtfaToYMW8szScE/preview)

## Spiele verwalten

Im Abschnitt **Spiele** auf deiner Webschnittstelle siehst du eine Liste der derzeit installierten Spiele. Außerdem siehst du die Spielversion und verschiedene Schaltflächen zum Verwalten der Spielinstallation.

:::info Lifetime Game Servers
Bei unserem Produkt Lifetime Game Server gelten andere Preise für die Spielwechsel-Funktion. Für jedes Spiel, das du dauerhaft auf deinem Lifetime Game Server besitzen möchtest, fällt eine **einmalige** Gebühr von **30 €** pro Spiel an, das du erwerben möchtest. Nach dem Kauf ist das Spiel **dauerhaft** auf diesem bestimmten Lifetime Game Server verfügbar und kann daher jederzeit gewechselt werden.

Abgesehen von den Preisen für lebenslange Spieleserver ist der Spielwechselprozess genau derselbe, nur dass die Spiele gekauft werden und nicht auf die Slot-Preise zurückgegriffen wird.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/LjfzWgWY3rrC87D/preview)

### Neues Spiel installieren

Um ein neues Spiel auf deinem Spieleserver zu installieren, wähle das Dropdown-Menü **Verfügbare Spiele** aus, in dem du verfügbare Spiele durchsuchen kannst, die du ohne zusätzliche Kosten auf deinem Server installieren kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/EHDFJj26fm3Yocz/preview)

In diesem Abschnitt findest du auch das Dropdown-Menü **Weitere Spiele**. Bei unserer großen Spielauswahl können bestimmte Spiele unterschiedliche Slot-Preise haben, was bedeuten kann, dass du das ausgewählte Spiel nicht ohne zusätzliche Kosten installieren kannst. Um dies zu beheben, musst du einen Aufpreis zahlen, um deinen Slot-Preis zu erhöhen. Weitere Informationen findest du im Abschnitt [Slot-Preis ändern](#slot-preis-ändern) der Anleitung.

:::info Mindestanzahl an Slots
Für bestimmte Spiele in unserer Spielesammlung ist eine bestimmte Mindestanzahl an Slots erforderlich, bevor du sie auf deinem Spieleserver installieren kannst. Fahre in solchen Fällen mit der Maus über das Warnsymbol, um mehr zu erfahren. Du solltest die Upgrade-/Downgrade-Funktion nutzen, um deinen Server basierend auf den Informationen zu aktualisieren.

![](https://screensaver01.zap-hosting.com/index.php/s/88r9qDeTfLT7D73/preview)
:::

Sobald du ein Spiel gefunden hast, das du installieren möchtest, klicke auf die grüne Download-Schaltfläche, um mit dem Installationsvorgang fortzufahren.

![](https://screensaver01.zap-hosting.com/index.php/s/RAmpDZoKZFXWHsG/preview)

:::caution Host-Systemwechsel
Je nach Spiel kann es sein, dass du zu einem anderen Host-System wechseln musst, um mit der Installation fortzufahren. Dies liegt in der Regel daran, dass das Spiel, das du installieren möchtest, auf einem anderen Betriebssystem (Linux oder Windows) läuft und daher einen anderen Host erfordert.

Der Hostwechsel ist ein **destruktiver** Vorgang, d. h. alle Daten, die sich derzeit auf dem Server befinden, werden gelöscht. Bitte stelle sicher, dass du alle Dateien oder Speicherstände sicherst, wenn du sie behalten möchtest, bevor du fortfährst.
:::

Kurz nachdem du auf die Schaltfläche zum Herunterladen geklickt hast, solltest du eine Pop-up-Eingabeaufforderung erhalten, in der du die Installation des Spiels bestätigen musst. Akzeptiere die Eingabeaufforderung, um den automatischen Installationsvorgang zu starten. Oben auf der Seite kannst du den Fortschritt der Installation verfolgen.

Nach Abschluss des Vorgangs wird das neue Spiel im Abschnitt „Installierte Spiele“ angezeigt. Du hast erfolgreich ein neues Spiel auf deinem Spieleserver installiert.

### Spiel aktivieren und löschen

Als letzten Schritt vor dem Spielen musst du das Spiel aktivieren, wodurch es zum aktiven Spiel wird, das auf deinem Spielserver läuft.

Dies kannst du ganz einfach tun, indem du den Abschnitt **Installierte Spiele** aufrufst und auf die blaue Schaltfläche Aktivieren klickst. Das derzeit aktivierte Spiel erkennst du am grünen Häkchen. Sobald du auf die Schaltfläche Aktivieren geklickt hast, erscheint eine Aufforderung, die du akzeptieren solltest, um fortzufahren.

![](https://screensaver01.zap-hosting.com/index.php/s/8sftaSqKAGEMmWc/preview)

Dein Server aktiviert das Spiel automatisch und startet den Server während dieses Vorgangs neu. 

Sobald das Spiel bereit ist, wird es aktiviert und du kannst mit dem Spielen deines neuen Spiels beginnen. Du hast ein Spiel auf deinem Spieleserver erfolgreich aktiviert.

### Spiel löschen und neu installieren

Das Löschen und Neuinstallieren eines Spiels ist sehr einfach und kann über den Abschnitt **Installierte Spiele** erfolgen.

Wenn du das gewünschte Spiel gefunden hast, klicke auf die orangefarbene Schaltfläche Neu installieren, um das Spiel neu zu installieren. Dieser Vorgang ist destruktiv und löscht alle Daten, die in diesem bestimmten Spiel gefunden werden, wie z. B. Spielserver oder Konfigurationsoptionen.

![](https://screensaver01.zap-hosting.com/index.php/s/dcRfmJx4q42NqdT/preview)

Wenn du ein Spiel löschen möchtest, kannst du auch jederzeit auf die rote Schaltfläche Löschen neben dem entsprechenden Spiel im Abschnitt **Installierte Spiele** klicken, um es vom Spielserver zu entfernen.

![](https://screensaver01.zap-hosting.com/index.php/s/LDoHPdjT7y2ioqq/preview)

## Slot-Preis ändern

Bestimmte Spiele in unserer Spielesammlung können unterschiedliche Slot-Preise haben, was möglicherweise dazu führt, dass du bestimmte Spiele nicht installieren kannst. In solchen Fällen musst du deinen Slot-Preis erhöhen und einen Aufpreis zahlen, um diese Spiele wieder zur Installation verfügbar zu machen.

Du kannst dies auf zwei Arten tun: Entweder du klickst oben auf der Seite auf die Schaltfläche **Spielplatzpreis ändern** oder du suchst zuerst nach Spielen, um die zugehörigen Spielplatzpreise für nicht verfügbare Spiele zu sehen.

Wir empfehlen, zuerst das Dropdown-Menü **Weitere Spiele** zu verwenden, um Spiele zu finden und ihre Spielplatzpreise einfach zu durchsuchen. Wenn du das Spiel gefunden hast, klicke auf die blaue Schaltfläche Kaufen!

![](https://screensaver01.zap-hosting.com/index.php/s/5kDzyCCcykeHAbA/preview)

Dies öffnet die Eingabeaufforderung für die Anpassung des Spielautomatenpreises, wobei der Spielautomatenpreis für das von dir ausgewählte Spiel bereits ausgefüllt ist. Du kannst den Aufpreis, den du zu diesem Zeitpunkt zahlen musst, sowie den neuen Paketpreis basierend auf der Anpassung des Spielautomatenpreises einsehen. Du kannst hier bei Bedarf auch erneut die Spiele durchsuchen.

![](https://screensaver01.zap-hosting.com/index.php/s/aibdr5yCqp3TK2o/preview)

Wenn du fertig bist, klicke auf die Schaltfläche Weiter, um die Seite zu aktualisieren und eine Zahlungsmethode zur Deckung der Kosten für den Aufpreis auszuwählen. Wähle die Zahlungsmethode aus und klicke auf die Schaltfläche Jetzt kaufen, um die Änderung des Slot-Preises abzuschließen.

![](https://screensaver01.zap-hosting.com/index.php/s/HyoLxct4rH3ac22/preview)

Nach erfolgreicher Änderung sollte der gebuchte Slot-Preis für deinen Spielserver die Anpassung widerspiegeln. Du wirst aufgefordert, deinen Server neu zu starten, um sicherzustellen, dass alles abgeschlossen ist.

Du solltest nun in der Lage sein, zum Abschnitt **Verfügbare Spiele** zurückzukehren und das Spiel wie gewohnt zu installieren. Du hast den gebuchten Slot-Preis für deinen Spielserver erfolgreich geändert.