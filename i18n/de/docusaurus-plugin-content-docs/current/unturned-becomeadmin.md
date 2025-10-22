---
id: unturned-becomeadmin
title: "Unturned: Werde Server-Admin"
description: "Entdecke, wie du Administratorrechte vergibst für volle Serverkontrolle und verbessertes Ingame-Management → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Admin kannst du alle verfügbaren Optionen und Funktionen, die das Spiel bietet, direkt im Spiel nutzen. Alle Schritte, die du zur Vergabe von Administratorrechten für deinen Server durchführen musst, werden im Folgenden beschrieben.  
<InlineVoucher />

## Vorbereitung

Um Admins auf einem Server hinzufügen zu können, muss eine Konfigurationsdatei bearbeitet werden. Damit es keine Probleme bei der Übernahme der Änderungen gibt, stelle bitte sicher, dass dein Server vorher gestoppt ist!

Außerdem wird die jeweilige Steam ID (64) benötigt, damit der Server den Spieler auch identifizieren kann. Dieses [Tool](https://steamidfinder.com/) kann dafür beispielhaft genutzt werden.  
Auf der Seite des Tools kannst du die benötigten Infos meist einfach durch Eingabe des Namens herausfinden.

![](https://screensaver01.zap-hosting.com/index.php/s/72YkRLBXE77NJQ5/preview)

## Config-Dateien öffnen

Es gibt zwei Wege, die Dateien auf einem Server zu bearbeiten.  
Der eine Weg wäre über den [FTP-Zugang](gameserver-ftpaccess.md).

Der andere Weg ist die Nutzung des Config Editors direkt im Webinterface.  
Hier verwenden wir den eingebauten Editor des Webinterfaces. Dafür muss im linken Sidebar-Menü des Servers unter dem Tab „Einstellungen“ der Menüpunkt „Configs“ geöffnet werden.  
![](https://screensaver01.zap-hosting.com/index.php/s/x872MGFpMLbTBj2/preview)

Das System lädt jetzt alle verfügbaren Configs und listet sie anschließend auf. Hier ist ein bisschen Geduld gefragt, der Vorgang dauert meist ein paar Sekunden. Sobald alle Config-Dateien geladen sind, muss die Datei „commands.dat“ bearbeitet werden. Einfach auf den blauen Button „Datei öffnen“ klicken, dann öffnet sich die Datei im Webeditor.

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)

## Admins hinzufügen

In der Config können jetzt Admins oder der Owner ernannt werden. Beachte bitte, dass der Owner-Rang nur einmal vergeben werden kann!

Dafür muss in einer neuen Zeile folgendes eingetragen werden, wenn der Owner-Rang vergeben werden soll:

`owner Steam64IDReplacedHere //<-- Muss mit deiner eigenen Steam64-ID ersetzt werden`

Für die Vergabe eines Administrators wird „owner“ einfach durch „admin“ ersetzt:

`admin Steam64IDReplacedHere //<-- Muss mit deiner eigenen Steam64-ID ersetzt werden`

![](https://screensaver01.zap-hosting.com/index.php/s/i6PpdsfK6spBECj/preview)

Nachdem alle Ränge in der Config eingetragen wurden, kann die Config mit einem Klick auf „Speichern“ gesichert werden. Der Server kann jetzt neu gestartet werden und alle in der Config eingetragenen Spieler erhalten automatisch ihren Rang.

## Fazit

Glückwunsch, du hast die Administratorrechte erfolgreich konfiguriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />