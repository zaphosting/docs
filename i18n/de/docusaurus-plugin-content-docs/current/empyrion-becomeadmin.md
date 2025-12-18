---
id: empyrion-becomeadmin
title: "Empyrion: Admin werden"
description: "Lerne, wie du Administratorrechte vergibst, um volle Kontrolle über deinen Server zu haben und Spiel-Funktionen effektiv zu managen → Jetzt mehr erfahren"
sidebar_label: Admin werden
services:
  - gameserver-empyrion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Vergabe von Administratorrechten ermöglicht dir eine einfache und umfassende Verwaltung mit voller Kontrolle über deinen Server. Als Administrator kannst du alle verfügbaren Optionen und Funktionen, die das Spiel bietet, direkt im Spiel nutzen. Alle Schritte, die du zur Vergabe von Administratorrechten für deinen Server durchführen musst, werden im Folgenden beschrieben.  
<InlineVoucher />

## Steam64ID finden

Zuerst musst du deine Steam64ID herausfinden.  
Dafür kannst du das folgende Tool nutzen: [SteamID Lookup](https://steamid.io/lookup).  
Die ID wird später in der Konfigurationsdatei eingetragen.

Hier ein Beispiel, wie du deine SteamID bekommst, indem du deinen Profil-Link eingibst:

![](https://screensaver01.zap-hosting.com/index.php/s/3LQXKFg58qXCCHw/preview)

## adminconfig konfigurieren

Die Datei "**adminconfig.yaml**", die du bearbeiten musst, befindet sich im Verzeichnis "**Saves**".  
Um dieses Verzeichnis zu öffnen, folge bitte der Anleitung zum [Zugriff via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/XtfdjdgoxcqXsWx/preview)

Folgende Werte sind standardmäßig eingetragen:

![](https://screensaver01.zap-hosting.com/index.php/s/Tpf23riFnGfZAsP/preview)

Die zuvor ermittelte Steam64ID muss jetzt hinter "**Id:**" eingetragen werden.

![](https://screensaver01.zap-hosting.com/index.php/s/RHEr44CGsaLQWyY/preview)

Mit "**Permission**" wird der Rang bestimmt, der dem Nutzer zugewiesen werden soll.  
Die Ränge sind wie folgt vergeben:

Permission | Rang
-----|-------
3 | Gamemaster
6 | Moderator
9 | Admin


## Fazit

Glückwunsch, du hast die Administratorrechte erfolgreich konfiguriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />