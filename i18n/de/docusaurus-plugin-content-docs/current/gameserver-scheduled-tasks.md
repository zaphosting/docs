---
id: gameserver-scheduled-tasks
title: "Gameserver: Geplante Aufgaben (Cron)"
description: Erstelle und verwalte geplante Aufgaben (cron) für dein Gameserver Produkt von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Geplante Aufgaben
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Erstellen geplante Aufgaben, die automatisch zu bestimmten Zeiten ausgeführt werden. Damit kannst du verschiedene Prozesse auf deinem Server automatisieren. Du kannst festlegen, ob die Aufgabe nur einmal oder wiederholt ausgeführt werden soll. 



## Aufgabentypen

Mit den geplanten Aufgaben kannst du verschiedene Arten von Aufgaben ausführen. Die folgenden Aufgabentypen werden derzeit unterstützt: 

- Dienst starten
- Dienst stopppen
- Dienst neustarten
- Dienst neustarten (nur wenn er online ist)
- Backup erstellen
- Befehl ausführen

Die vordefinierten Typen ermöglichen es dir, deinen Server weitgehend zu automatisieren. Insbesondere mit dem Typ **Befehl ausführen** kannst du zahlreiche spezifische und individuelle Aufgaben erstellen. 

:::warning Rate limits
Bestimmte geplante Aufgaben haben ein Ratelimit, d. h. sie können nicht unendlich oft ausgeführt werden und haben stattdessen eine Abklingzeit/Limit.
 :::

## Aufgaben erstellen

Navigiere in deiner Gameserver Verwaltung unter Einstellungen zu Geplante Aufgaben. Um eine neue geplante Aufgabe zu erstellen, klicke auf den grünen Button mit dem Plus-Symbol auf der rechten Seite der Liste der geplanten Aufgaben.  Es öffnet sich ein neues Pop-up-Fenster, in dem du deine Aufgabe konfigurieren kannst. 

![img](https://screensaver01.zap-hosting.com/index.php/s/EADnRxe6RArnF4Z/download)





## Aufgaben verwalten

In der Konfiguration einer Aufgabe kannst du festlegen, welche Art von Aufgabe du erstellen möchtest. Lege einen Namen fest (optional) und wählen einen der angebotenen Aufgabentypen aus. Dieses Beispiel zeigt, wie eine geplante Aufgabe erstellt werden kann, um den Dienst regelmäßig neu zu starten. 

![img](https://screensaver01.zap-hosting.com/index.php/s/KtrY8KoaGfjQjpJ/preview)

Wähle für den Wiederholungstyp die Option `Wiederholend`. Im Feld Cron-Ausdruck musst du nun die Intervalle angeben, in denen die Aufgabe ausgeführt werden soll. In diesem Fall wird der Dienst alle drei Stunden neu gestartet. 

:::tip Cron generator
Du bist mit der Struktur oder Syntax von Cron nicht vertraut? Verwenden einfach den [**Crontab Guru**](https://crontab.guru/). Es handelt sich um eine einfache Anwendung, mit der du Cron-Ausdrücke mit ein paar Klicks erstellen und kopieren kannst. 
:::

Um die Erstellung abzuschließen, wähle aus, von wann bis wann die geplante Aufgabe ausgeführt werden soll, und klicke dann auf Speichern.

## Aufgaben entfernen

Möchtest du bestehende Aufgaben entfernen? Lösche bestehende Aufgaben in der Liste, indem du auf den roten Papierkorb Button auf der rechten Seite klickst. 

![img](https://screensaver01.zap-hosting.com/index.php/s/sa4y3LFzHswGDjC/preview)



## Abschluss

Nun weißt du, wie du geplante Aufgaben erstellen, verwalten und entfernen kannst. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
