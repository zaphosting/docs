---
id: fivem-deletecache
title: "FiveM: Cache leeren"
description: "Entdecke, wie das Leeren des Caches deines FiveM Gameservers die Performance verbessert und Fehler behebt – für ein smootheres Spielerlebnis → Jetzt mehr erfahren"
sidebar_label: Cache löschen
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Das Leeren des Server-Caches auf deinem FiveM Gameserver sorgt dafür, dass temporär gespeicherte Dateien gelöscht werden. Dadurch wird der Server beim nächsten Start gezwungen, alle benötigten Dateien neu herunterzuladen oder zu erstellen. Das hilft, veraltete oder beschädigte Daten zu entfernen, was Performance-Probleme, Script-Fehler, Abstürze oder Ladeprobleme der Spielwelt lösen kann.

<InlineVoucher />

## Einfache Methode

Den Cache auf deinem FiveM Gameserver zu löschen ist super easy. Geh zuerst in das Webinterface deines Gameservers. Such dort den Bereich **Einstellungen** und öffne ihn.



![img](https://screensaver01.zap-hosting.com/index.php/s/nizHMSk7oXCsJS4/download)



Scroll dann ganz nach unten, bis du unter dem Abschnitt **Aktionen** mehrere Buttons findest. Drück hier auf den Button **Cache-Dateien löschen**, um den Cache deines Gameservers zu leeren.

![img](https://screensaver01.zap-hosting.com/index.php/s/A2RiTo8gJiTibGR/download)

:::warning 
Dadurch wird dein Server sofort neu gestartet, um den Cache zu leeren. Sei also sicher, dass du dafür bereit bist.
:::


## Alternative Methode

Zuerst musst du dich per FTP mit deinem Server verbinden. Falls du FTP noch nicht kennst, empfehlen wir dir unsere [FTP-Zugang](gameserver-ftpaccess.md) Anleitung. Im nächsten Schritt suchst du den Cache-Ordner und löschst ihn. Folge dazu dem Pfad `/gXXXXXX/fivem/server-data/cache`, um zum Cache-Ordner zu gelangen.

![img](https://screensaver01.zap-hosting.com/index.php/s/dfpssTy8KL7B3cK/download)

Jetzt musst du einfach den Cache leeren. Klick dazu auf den **Cache**-Ordner und dann auf **Dateien**. Markiere alle Ordner, die im **Cache**-Ordner vorhanden sind, und lösche sie.

![img](https://screensaver01.zap-hosting.com/index.php/s/MnHpWiDmBgHa63B/download)

Starte jetzt deinen FiveM Gameserver neu, damit die Änderungen wirksam werden. Beim Neustart schreibt der Server den Cache neu.



## Fazit

Wenn du alle Schritte befolgt hast, hast du erfolgreich den Cache deines Servers geleert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />