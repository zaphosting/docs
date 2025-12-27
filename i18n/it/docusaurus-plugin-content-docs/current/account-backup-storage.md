---
id: account-backup-storage
title: "Backup Storage: Backup speichern, wiederherstellen und herunterladen"
description: "Entdecke, wie du deine Backups sicher speicherst und verwaltest – mit skalierbaren Speicheroptionen für einfache Wiederherstellung und Zugriff → Jetzt mehr erfahren"
sidebar_label: Backup Storage
---

## Einführung

Das Backup Storage bietet dir einen zentralen Ort, um Backups deiner Services zu speichern. So kannst du deine Backup-Dateien sicher aufbewahren, direkt auf deine Services zurückspielen oder lokal herunterladen.

Jeder Account enthält 10 GB kostenlosen Backup-Speicherplatz. Wenn du mehr brauchst, kannst du den Speicherplatz gegen Aufpreis auf bis zu 200 GB erweitern.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZBy57k2pbTcteKg/preview)



## Funktionen des Backup Storage

Backups erstellst du direkt über die Weboberfläche deines jeweiligen Services. Sobald ein Backup fertig ist, wird es automatisch im Backup Storage abgelegt. Die gespeicherten Backups kannst du auf zwei Arten nutzen:

- Direkt über die Backup-Funktion des Services wiederherstellen
- Aus dem Backup Storage herunterladen und lokal speichern



## Zugriff auf Backup-Dateien

Backup-Dateien sind sofort nach der Erstellung im Backup Storage verfügbar. Neben der Wiederherstellung über die Service-Oberfläche kannst du auch per FTP auf die Dateien zugreifen.



## Verbindung zum Backup Storage via FTP

Um per FTP auf dein Backup Storage zuzugreifen, installiere einen FTP-Client wie FileZilla für dein Betriebssystem und öffne die Anwendung nach der Installation. So sieht die FileZilla-Oberfläche aus:

![img](https://screensaver01.zap-hosting.com/index.php/s/4CrofjFEe7TxYCR/preview)

Gib oben in FileZilla die FTP-Zugangsdaten ein, um die Verbindung herzustellen. Die benötigten Daten findest du in der Weboberfläche auf der Backup Storage-Seite. Öffne den Bereich Backup Storage und klicke auf das Icon oben in der Menüleiste.

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

Auf der Backup Storage-Seite findest du die FTP-Zugangsdaten im markierten Bereich. Trage folgende Infos in FileZilla ein:

- **Server**: IP-Adresse
- **Benutzername**: FTP-Benutzername
- **Passwort**: FTP-Passwort

Der Port muss nicht angegeben werden, wenn er auf **21** steht. Klick auf **Verbinden**, um die Verbindung herzustellen. Nach erfolgreichem Login siehst du die Backups deiner Services in den jeweiligen Ordnern.

Trage die IP-Adresse in FileZilla ins Feld **Server**, den Benutzer ins Feld **Benutzername** und das Passwort ins Feld **Passwort** ein. Den Port kannst du weglassen, wenn er *21* ist. Jetzt klickst du auf **Verbinden**. 
Wenn alles klappt, findest du die Backups deiner Services in den entsprechenden Ordnern.

![img](https://screensaver01.zap-hosting.com/index.php/s/9PAFpxWHiJx9LnT/preview)



## Backup-Meldungen und Logs

Im Bereich **Meldungen** in der Sidebar findest du ein Log aller Backup-Aktionen. Dort siehst du, welche Backup-Events ausgelöst wurden, für welchen Service oder welches Paket und zu welcher Uhrzeit.

![img](https://screensaver01.zap-hosting.com/index.php/s/nFfDMfQBNeE4Jt4/preview)
