---
id: fivem-changeloadingscreen
title: "FiveM: Installation eines individuellen Loading Screen"
description: Informationen, wie du ein individuellen Loading screens auf deinem FiveM Server von ZAP-Hosting installierst - ZAP-Hosting.com Dokumentation
sidebar_label: Individuellen Loading Screen installieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Möchtest du statt dem Standard FiveM Loading Screen einen eigenen individuellen verwenden? Im Folgenden erläutern wir dir, wie du das umsetzt und welche Schritte dafür notwendig sind!

<InlineVoucher />

## Vorbereitung

Um einen eigenen Loading Screen zu installieren, musst du zunächst eine für dich passende Ressource heraussuchen. Eine große Auswahl an Ressourcen findest du auf der offiziellen Seite von [Cfx.re webseite](https://forum.cfx.re/c/releases/7). Lade anschließend die Ressource herunter und entpacke sie auf deinem Computer.

![img](https://screensaver01.zap-hosting.com/index.php/s/zZKWWMWCJPqKonj/preview)



## Installation

Die Installation des Loading Screens erfolgt per FTP. Verbinde dich dementsprechend per FTP mit deinem Gameserver. Solltest du noch nicht wissen, wie du FTP verwendest, dann schaue dir unsere [FTP-Zugriff](gameserver-ftpaccess.md) Anleitung an. 

Sobald du per FTP verbunden bist, navigiere in das Ressource-Verzeichnis. Abhängig von dem installierten Framework findest du deinen Ressourcenordner unter der folgenden Verzeichnisstruktur: `/gXXXXXX/fivem/YOUR_FRAMEWORK/resources`

Lade in dem Verzeichnis nun den Ordner von deiner Ressource hoch, die du zuvor heruntergeladen und auf deinem Computer entpackt hast.

![img](https://screensaver01.zap-hosting.com/index.php/s/qkYBKoMox94EEWK/download)



Nachdem die Loading Screen Ressource erfolgreich hochgeladen wurde, muss diese noch in der Server Konfigurationsdatei `server.cfg` eingetragen werden. Logge dich dazu im txAdmin Interface ein und öffne den CFG Editor. 

Trage nun in der Config deine Ressource hinzu. Das kannst du mit dem Befehl `start resourcename` machen. In diesem Beispiel wäre es also `start loadingscreen`. 

![img](https://screensaver01.zap-hosting.com/index.php/s/gxniiKj3HmLGeEE/preview)



## Abschluss

Vorausgesetzt, dass du alle Schritte befolgt hast, solltest du nach dem nächsten Neustart deines Servers deinen neuen Loading Screen sehen. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
