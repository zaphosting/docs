---
id: gameserver-scheduled-tasks
title: "Gameserver: Geplante Aufgaben (Cron)"
description: "Entdecke, wie du Serverprozesse mit geplanten Aufgaben für Backups, Service-Management und Befehle automatisierst → Jetzt mehr erfahren"
sidebar_label: Geplante Aufgaben
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Erstelle geplante Aufgaben, die automatisch zu definierten Zeiten ausgeführt werden. So kannst du verschiedene Prozesse auf deinem Server automatisieren. Du kannst festlegen, ob die Aufgabe nur einmal oder wiederholt ausgeführt werden soll.



## Aufgabentypen

Die geplanten Aufgaben ermöglichen dir, verschiedene Arten von Tasks auszuführen. Folgende Aufgabentypen werden aktuell unterstützt:

- Service starten
- Service stoppen
- Service neu starten
- Server neu starten (nur wenn er online ist)
- Backup erstellen
- Befehl ausführen

Die vordefinierten Typen erlauben dir, deinen Server umfangreich automatisiert zu verwalten. Besonders der Typ **Befehl ausführen** ermöglicht es dir, viele weitere spezifische und individuelle Aufgaben zu erstellen.

:::warning Rate Limits
Bestimmte geplante Aufgaben haben Rate Limits, das heißt, sie können nicht unendlich oft ausgeführt werden und haben stattdessen eine Abklingzeit/Limitierung.
 :::

## Aufgaben erstellen

Navigiere in der Verwaltung deines Gameservers unter Einstellungen zu Geplante Aufgaben. Um eine neue geplante Aufgabe zu erstellen, klicke auf den grünen Button mit dem Plus-Symbol rechts neben der Liste der geplanten Aufgaben. Ein neues Pop-up-Fenster öffnet sich, in dem du deine Aufgabe konfigurieren kannst.

![img](https://screensaver01.zap-hosting.com/index.php/s/TBxP22trRKML3wk/download)





## Aufgaben verwalten

In der Konfiguration einer Aufgabe kannst du festlegen, welchen Aufgabentyp du erstellen möchtest. Vergib einen Namen (optional) und wähle einen der angebotenen Aufgabentypen aus. Dieses Beispiel zeigt, wie du eine geplante Aufgabe erstellst, um den Service regelmäßig neu zu starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Wähle bei Wiederholungstyp die Option `wiederkehrend`. Im Feld Cron-Ausdruck musst du nun die Intervalle angeben, in denen die Aufgabe ausgeführt werden soll. In diesem Fall wird der Service alle drei Stunden neu gestartet.

:::tip Cron-Generator

Kennst du dich mit der Struktur oder Syntax von Cron nicht aus? Nutze einfach den [**Crontab Guru**](https://crontab.guru/). Das ist eine simple Anwendung, mit der du Cron-Ausdrücke mit wenigen Klicks erstellen und kopieren kannst.

:::

Um die Erstellung abzuschließen, wähle aus, von wann bis wann die geplante Aufgabe ausgeführt werden soll, und klicke dann auf Speichern.

## Aufgaben entfernen

Möchtest du bestehende Aufgaben löschen? Entferne Aufgaben in der Liste, indem du auf den roten Papierkorb-Button rechts klickst.

![img](https://screensaver01.zap-hosting.com/index.php/s/6XWMJn2BoAdL6t9/download)



## Fazit

Jetzt weißt du, wie du geplante Aufgaben erstellst, verwaltest und entfernst. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />