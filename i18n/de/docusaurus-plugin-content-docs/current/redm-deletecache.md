---
id: redm-deletecache
title: "RedM: Cache leeren"
description: "Entdecke, wie das Leeren des Caches deines RedM Gameservers die Performance verbessert und Fehler behebt – für ein smootheres Spielerlebnis → Jetzt mehr erfahren"
sidebar_label: Cache löschen
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Das Leeren des Server-Caches auf deinem RedM Gameserver sorgt dafür, dass temporär gespeicherte Dateien gelöscht werden. Beim nächsten Start lädt oder erstellt der Server alle benötigten Dateien neu. So werden veraltete oder beschädigte Daten entfernt, was Performance-Probleme, Script-Fehler, Abstürze oder Ladeprobleme der Spielwelt beheben kann.

<InlineVoucher />

## Einfache Methode

Den Cache auf deinem RedM Gameserver zu löschen ist super easy. Geh zuerst in das Webinterface deines Gameservers. Dort findest du den Bereich **Einstellungen** – öffne ihn.

![img](https://screensaver01.zap-hosting.com/index.php/s/qAiDSjC7jjmAq5B/download)



Scroll dann ganz runter bis zum Abschnitt **Aktionen**. Dort findest du mehrere Buttons. Klick auf **Cache-Dateien löschen**, um den Cache deines Gameservers zu leeren.

![img](https://screensaver01.zap-hosting.com/index.php/s/CW8HcxLbNyrw3Qy/download)

:::warning 
Dadurch wird dein Server sofort neu gestartet, um den Cache zu löschen. Stell also sicher, dass du bereit bist für den Neustart.
:::


## Alternative Methode

Zuerst musst du dich per FTP mit deinem Server verbinden. Falls du FTP noch nicht kennst, schau dir am besten unsere [FTP-Zugang](gameserver-ftpaccess.md) Anleitung an. Im nächsten Schritt suchst du den Cache-Ordner und löschst ihn. Folge diesem Pfad: `/gXXXXXX/redm-txadmin/server-data/cache`, um zum Cache-Ordner zu gelangen.

![img](https://screensaver01.zap-hosting.com/index.php/s/BkcqxjZ2dDeeMK2/download)

Jetzt musst du den Cache einfach leeren. Klick dazu auf den **Cache**-Ordner und dann auf **Dateien**. Markiere alle Ordner, die im **Cache**-Ordner drin sind, und lösche sie.

![img](https://screensaver01.zap-hosting.com/index.php/s/sb9Ttc2gEWwAzRP/download)

Starte danach deinen RedM Gameserver neu, damit die Änderungen wirksam werden. Beim Neustart wird der Cache neu erstellt.



## Fazit

Wenn du alle Schritte befolgt hast, hast du erfolgreich den Cache deines Servers geleert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />