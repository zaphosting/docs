---
id: redm-deletecache
title: "RedM: Cache leeren"
description: Informationen, wie du den Cache deines RedM Server von ZAP-Hosting leeren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Cache leeren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Das Leeren des Server-Caches bei einem RedM-Server sorgt dafür, dass temporär gespeicherte Dateien gelöscht werden. Dadurch zwingt man den Server, beim nächsten Start alle benötigten Dateien erneut herunterzuladen oder zu erstellen. Dies hilft dabei, veraltete oder beschädigte Daten zu entfernen, wodurch Performance-Probleme, Script-Fehler, Abstürze oder Probleme beim Laden der Spielwelt behoben werden können.

<InlineVoucher />



## Einfache Methode

Das Löschen des Caches auf deinem RedM Gameserver ist ganz einfach. Rufe zunächst das Webinterface deines Gameservers auf. Öffne den Bereich **Einstellungen** im Webinterface deines Gameservers.

![img](https://screensaver01.zap-hosting.com/index.php/s/x8rFc2ESmq7cRQ4/download)

Scrollen dann zum unteren Ende der Seite, um mehrere Buttons unter dem Unterabschnitt **Aktionen** zu finden. Drücke hier den Button **Cache-Dateien löschen**, um den Cache deines Gameservers zu löschen.

![img](https://screensaver01.zap-hosting.com/index.php/s/xNcrpLnajckRBxc/download)

:::warning Dies führt zu einem sofortigen Neustart deines Servers, um die Cache-Dateien zu leeren, also stelle sicher, dass du darauf vorbereitet bist.
:::

Dein Server wird nun neu gestartet und der Cache gelöscht. Wenn der Server neu gestartet wird, schreibt der Server den Cache neu. Du hast den Cache für deinen RedM Gameserver erfolgreich geleert!

## Alternative Methode

Zunächst musst du dich per FTP mit deinem Server verbinden. Wenn du mit der Verwendung von FTP nicht vertraut bist, empfehlen wir dir, einen Blick in die [FTP-Zugriff](gameserver-ftpaccess.md) Anleitung zu werfen. Im nächsten Schritt musst du den Cache-Ordner finden und ihn löschen. Folge diesem Pfad `/gXXXXXX/redm-txadmin/server-data/cache`, um auf den Cache-Ordner zuzugreifen.

![img](https://screensaver01.zap-hosting.com/index.php/s/BkcqxjZ2dDeeMK2/download)

Jetzt musst du einfach den Cache leeren. Klicken dazu auf den Ordner **Cache** und dann auf **Files**. Nun solltest du alle Ordner markieren, die sich im Ordner **Cache** befinden und sie löschen.

![img](https://screensaver01.zap-hosting.com/index.php/s/sb9Ttc2gEWwAzRP/download)

Starten jetzt deinen RedM Server neu, damit die Änderungen wirksam werden. Beim Neustart des Servers wird der Cache neu beschrieben. 



## Abschluss

Wenn du alle Schritte befolgt hast, hast du deinen Server-Cache erfolgreich geleert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
