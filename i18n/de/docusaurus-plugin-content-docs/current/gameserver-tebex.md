---
id: gameserver-tebex
title: 'Gameserver: Tebex Monetarisierung einrichten'
description: Informationen wie du mit Tebex mit deinem Gameserver von ZAP-Hosting Geld verdienen kannst und wie du Tebex auf deinem Server einrichtest - ZAP-Hosting.com Dokumentation
sidebar_label: Tebex Monetarisierung
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Tebex ist eine Plattform, die dir erlaubt, mit deinem Gameserver bares Geld zu verdienen,
indem du Spielgegenstände, Ränge und vieles mehr verkaufen kannst. Die Plattform 
stellt dir einen professionellen Webstore zur Verfügung, mit dem du digitale Güter verkaufen
und einige Statistiken zu deinen Verkäufen einsehen kannst. Besuche 
[tebex.io](https://affiliate.tebex.io/r/690a6731-fee1-4054-84e1-30c26729403a)
für weitere Informationen über die Funktionsweise.

<InlineVoucher />

## Welche Spiele werden von Tebex unterstützt?
Die Plattform unterstützt aktuell folgende Spiele: [Hier klicken](https://www.tebex.io/games)

## Wie wird Tebex mit dem ZAP Interface konfiguriert?

Tebex mit ZAP 2.5 einzurichten ist kinderleicht.

### Schritt 1 - Installation eines unterstützten Spiels auf deinem Gameserver
Wähle ein Spiel aus, welches aktuell durch Tebex unterstützt wird und installiere es auf deinem
Gameserver. Klicke hierzu auf "Spiele" in der Seitenleiste. Wähle nun unter "Verfügbare Spiele"
ein unterstütztes Spiel auf und klicke auf den Download-Button, um es zu installieren. Sobald 
dieser Vorgang abgeschlossen ist, kannst du mit Schritt 2 fortfahren.

### Schritt 2 - Sende dir selbst eine Tebex Einladung
Wenn das Spiel, welches du ausgewählt hast, Tebex unterstützt, siehst du jetzt den Tab "Tebex Shop"
in der Seitenleiste. Klicke nach dem Laden der Seite auf das Bild mit dem Tebex Logo. 

![](https://screensaver01.zap-hosting.com/index.php/s/W4M224XdyDDHzsf/preview)

Tebex sendet dir nun eine Einladung an die E-Mail Adresse, die in deinem ZAP-Hosting Kundenaccount hinterlegt
ist. Bitte folge den Schritten in der E-Mail, um deinen Tebex Account zu aktivieren. Du wirst im 
Anschluss durch die Einrichtung deines Webshops durchgeführt.

### Schritt 3 - Installiere das Tebex Plugin auf deinem Gameserver
Dieser Prozess wird in der Regel automatisiert durchgeführt. Wenn wir kein Plugin für 
die automatisierte Installation auf unseren Servern finden können oder das Pingback von 
Tebex fehlt, musst du das Plugin manuell installieren.

#### Schritt 4 - Installiere & konfiguriere das Tebex Plugin
Installiere das passende Plugin für dein Spiel manuell auf deinem Gameserver. Der Prozess
unterscheidet sich von Spiel zu Spiel. Eine grundlegende Schritt für Schritt Anleitung zur 
Installation einiger Plugins findest du [hier](https://docs.tebex.io/store/integrating-with-your-game-server-or-website/minecraft-java-edition).

#### Schritt 5 - Bestätige die erfolgreiche Installation im Webinterface
Zu guter Letzt solltest du noch die erfolgreiche Installation des Plugins bestätigen. 

![](https://screensaver01.zap-hosting.com/index.php/s/zNEp5QbnyeTR3BP/preview)

In einigen Fällen kann es sein, dass du uns noch einmal den Tebex Webstore API Schlüssel 
mitteilen musst, damit wir aus ZAP 2.5 eine Verbindung zu deinem Tebex Shop aufbauen können.

Im Anschluss kannst du dann sehen, dass die Verbindung erfolgreich angelegt wurde:
![](https://screensaver01.zap-hosting.com/index.php/s/SDotycWLniaoHFs/preview)
