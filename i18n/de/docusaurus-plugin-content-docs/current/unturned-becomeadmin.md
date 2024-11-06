---
id: unturned-becomeadmin
title: "Unturned: Server-Admin werden"
description: Informationen, wie du dich zum Admin auf deinem Unturned Server von ZAP-Hosting machen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. Im folgenden werden dir alle notwendigen Schritte erläutert, die du benötigst, um dir die Administratorberechtigungen für deinen Server zuzuweisen. 
<InlineVoucher />

## Vorbereitungen

Um Admins auf einem Server hinzufügen zu können, muss hierbei eine Konfigurationsdatei bearbeitet werden. Damit es hierbei keine Probleme bei der Übernahme der Änderungen gibt, stelle bitte sicher, dass dein Server hierbei zuvor gestoppt wird!

Zudem wird die jeweilige Steam-ID (64er) benötigt, sodass der Server den Spieler auch identifizieren kann, sobald der Name als Beispiel geändert wird. Hierzu kann als Beispiel [dieses Tool](https://steamidfinder.com/) verwendet werden. Auf der Seite des Tools angekommen, können die benötigen Informationen in der Regel durch die Eingabe des Namens ermittelt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/72YkRLBXE77NJQ5/preview)

## Konfigurationsdateien öffnen

Es gibt zwei Möglichkeiten die Dateien eines Servers bearbeiten zu können.
Zum einen wäre dies via [Zugriff per FTP](gameserver-ftpaccess.md) möglich und einmal durch den Config-Editor im Webinterface selbst.

In diesem Fall verwenden wir den eingebauten Editor des Webinterfaces.
Hierzu muss in der linken Sidebar des Servers unter dem Reiter "Einstellungen" der Menü-Punkt "Configs" geöffnet werden.

![](https://screensaver01.zap-hosting.com/index.php/s/GPTxWpmfYY9CKbd/preview)

Das System lädt nun alle verfügbaren Configs und listet dieses dann auf. Hierbei ist ein wenig Geduld gefragt, dieser Vorgang dauert in der Regel wenige Sekunden.
Sobald alle Konfigurationsdateien geladen wurden, muss die Datei "commands.dat" bearbeitet werden. Hierzu reicht ein Klick auf den blauen Button "Datei öffnen", worauf die Datei im Web-Editor geöffnet wird.

![](https://screensaver01.zap-hosting.com/index.php/s/4BFfETwJFDktBcX/preview)

## Admins ernennen

Es können jetzt Admin oder auch Owner in der Config ernannt werden.
Hierbei ist zu beachten, dass der Owner-Rank nur einmal vergeben werden kann!

Hierzu muss in einer neuen Zeile im Fall für die Vergabe des Owner-Ranges folgendes eingetragen werden:

`owner 0123456789 //<-- Muss durch deine eigene Steam-ID ersetzt werden`

Im Fall von Administratoren wird das "owner" einfach nur durch "admin" ersetzt.

`admin 0123456789 //<-- Muss durch deine eigene Steam-ID ersetzt werden`

![](https://screensaver01.zap-hosting.com/index.php/s/7t4pdGg3Da24aTx/preview)

Nachdem alle Ränge in der Config vergeben worden sind, kann die Config mit einem Klick auf "Speichern" gespeichert werden.
Der Server kann nun wieder gestartet werden und alle in die Config eingetragenen Spieler erhalten ihren Rang automatisch.

## Abschluss

Glückwunsch, du hast erfolgreich die Administratorberechtigungen konfiguriert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
