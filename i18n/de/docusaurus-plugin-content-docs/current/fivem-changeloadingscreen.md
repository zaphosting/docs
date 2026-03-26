---
id: fivem-changeloadingscreen
title: "FiveM: Eigene Loading Screen installieren"
description: "Entdecke, wie du deinen FiveM Loading Screen individuell anpasst für ein einzigartiges Spielerlebnis und verbesserte Server-Optik → Jetzt mehr erfahren"
sidebar_label: Eigene Loading Screen installieren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Du willst deinen eigenen, individuellen Loading Screen statt dem Standard-FiveM Loading Screen nutzen? Hier erklären wir dir, wie das geht und welche Schritte du dafür befolgen musst!

<InlineVoucher />



## Vorbereitung

Um deinen eigenen Loading Screen zu installieren, brauchst du zuerst eine passende Resource. Eine große Auswahl findest du auf der offiziellen [Cfx.re Webseite](https://forum.cfx.re/c/releases/7). Lade dir die Resource runter und entpacke sie auf deinem PC.

![img](https://screensaver01.zap-hosting.com/index.php/s/zZKWWMWCJPqKonj/preview)



## Installation

Die Installation des Loading Screens erfolgt per FTP. Verbinde dich dazu mit deinem Gameserver via FTP. Falls du noch nicht weißt, wie FTP funktioniert, schau dir gerne unsere [FTP-Zugang](gameserver-ftpaccess.md) Anleitung an.

Sobald du per FTP verbunden bist, navigiere zum Resource-Ordner. Je nach installiertem Framework findest du den Resource-Ordner unter folgender Struktur: `/gXXXXXX/fivem/YOUR_FRAMEWORK/resources`

Lade den Ordner deiner Resource, den du zuvor auf deinem PC entpackt hast, an diese Stelle hoch.

![img](https://screensaver01.zap-hosting.com/index.php/s/qkYBKoMox94EEWK/download)



Nachdem die Loading Screen Resource erfolgreich hochgeladen wurde, muss sie noch in der Server-Konfigurationsdatei `server.cfg` eingetragen werden. Logge dich dazu in die txAdmin-Oberfläche ein und öffne den CFG Editor.

Füge dann deine Resource mit dem Befehl `start resourcename` hinzu. In unserem Beispiel wäre das `start loadingscreen`. Speichere die Änderungen und starte den Server neu.

![img](https://screensaver01.zap-hosting.com/index.php/s/gxniiKj3HmLGeEE/preview)







## Abschluss

Wenn du alle Schritte befolgt hast, solltest du nach dem nächsten Server-Neustart deinen neuen Loading Screen sehen. Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂 

<InlineVoucher />