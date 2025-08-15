---
id: empyrion-becomeadmin
title: "Empyrion: Admin werden"
description: Informationen, wie du Admin auf deinem Empyrion-Server bei ZAP-Hosting wirst - ZAP-Hosting.com Dokumentation
sidebar_label: Admin werden
services:
  - gameserver-empyrion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Zuweisung von Administratorberechtigungen ermöglicht dir eine einfache und umfangreiche Verwaltung mit voller Kontrolle deines Servers. Als Administrator hast du die Möglichkeit alle verfügbaren Optionen und Funktionen, die das Spiel bereitstellt, direkt im Spiel anzuwenden. Im folgenden werden dir alle notwendigen Schritte erläutert, die du benötigst, um dir die Administratorberechtigungen für deinen Server zuzuweisen. 
<InlineVoucher />

## Steam64ID lokalisieren

Zuerst müsste die Steam64ID lokalisiert werden.
Dafür kann diese Seite genutzt werden: [SteamID-Lookup](https://steamid.io/lookup).
Die ID wird später in die Konfigurationsdatei eingetragen.

Hier ist ein Beispiel zu sehen, wie die Steam64ID lokalisiert wird.

![](https://screensaver01.zap-hosting.com/index.php/s/i3nGooRzAENRJms/preview)

## Admin Konfig konfigurieren

Die "**adminconfig.yaml**" welche bearbeitet werden muss befindet sich in dem "**Saves**" Verzeichnis.
Um dieses Verzeichnis zu öffnen, muss die Anleitung für die [Zugriff per FTP](gameserver-ftpaccess.md) befolgt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/dqBCQfQ7wjJoC7G/preview)

Standardmäßig stehen dort folgende Werte vorgeschrieben drin:

![](https://screensaver01.zap-hosting.com/index.php/s/kk6Z5xQM3xdbpDP/preview)

Die vorher rausgesuchte Steam64ID muss dort nun hinter "**Id:**" geschrieben werden.

![](https://screensaver01.zap-hosting.com/index.php/s/C6fFxT2Mw3XtWLf/preview)

Mit "**Permission**" wird der Rang bestimmt, welcher dem User gegeben werden soll.
Die Ränge werden wie folgt vergeben:

Permission | Rang
-----|-------
3 | Gamemaster
6 | Moderator
9 | Admin

## Abschluss

Glückwunsch, du hast erfolgreich die Administratorberechtigungen konfiguriert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂