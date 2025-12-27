---
id: account-backup-storage
title: "Backup-Speicher: Backups speichern, wiederherstellen und herunterladen"
description: "Entdecke, wie du deine Backups sicher mit skalierbaren Speicheroptionen verwaltest – für einfache Wiederherstellung und Zugriff → Jetzt mehr erfahren"
sidebar_label: Backup-Speicher
---

## Einführung

Der Backup-Speicher bietet dir einen zentralen Ort, um Backups deiner Services zu speichern. So kannst du deine Backup-Dateien sicher aufbewahren, direkt auf deine Services zurückspielen oder lokal herunterladen.

Jeder Account enthält 10 GB kostenlosen Backup-Speicherplatz. Wenn du mehr Kapazität brauchst, kannst du den Speicherplatz gegen Aufpreis auf bis zu 200 GB erweitern.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZBy57k2pbTcteKg/preview)



## Funktionen des Backup-Speichers

Backups werden direkt über die Weboberfläche des jeweiligen Services erstellt. Sobald ein Backup generiert wurde, wird es automatisch im Backup-Speicher abgelegt. Gespeicherte Backups kannst du auf zwei Arten nutzen:

- Direkt über die Backup-Funktion des Services wiederherstellen
- Vom Backup-Speicher herunterladen und lokal verwenden



## Zugriff auf Backup-Dateien

Backup-Dateien stehen im Backup-Speicher sofort nach der Erstellung zur Verfügung. Neben der Wiederherstellung über die Service-Oberfläche kannst du auch per FTP auf die Dateien zugreifen.



## Verbindung zum Backup-Speicher via FTP

Um per FTP auf den Backup-Speicher zuzugreifen, installiere einen FTP-Client wie FileZilla für dein Betriebssystem und öffne die Anwendung nach der Installation. Nach dem Start siehst du die FileZilla-Oberfläche:

![img](https://screensaver01.zap-hosting.com/index.php/s/4CrofjFEe7TxYCR/preview)

Um die Verbindung herzustellen, gib die FTP-Zugangsdaten in die Felder oben in FileZilla ein. Die benötigten Verbindungsdaten findest du im Webinterface auf der Backup-Speicher-Seite. Öffne den Bereich Backup-Speicher und klicke auf das Icon oben in der Menüleiste.

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

Auf der Backup-Speicher-Seite werden die FTP-Zugangsdaten im markierten Bereich angezeigt. Trage folgende Infos in FileZilla ein:

- **Server**: IP-Adresse
- **Benutzername**: FTP-Benutzername
- **Passwort**: FTP-Passwort

Der Port muss nicht angegeben werden, wenn er auf **21** steht. Klicke auf **Verbinden**, um die Verbindung herzustellen. Nach erfolgreichem Verbindungsaufbau siehst du die von deinen Services erstellten Backups in den entsprechenden Verzeichnissen.

Trage die IP-Adresse in FileZilla ins Feld **Server**, den Benutzer ins Feld **Benutzername** und das Passwort ins Feld **Passwort** ein. Den Port musst du nicht angeben, wenn er *21* ist. Klicke dann auf **Verbinden**. 
Wenn die Verbindung klappt, findest du die Backups deiner Services in den jeweiligen Ordnern.

![img](https://screensaver01.zap-hosting.com/index.php/s/9PAFpxWHiJx9LnT/preview)



## Backup-Meldungen und Logs

Der Bereich **Meldungen** in der Sidebar zeigt dir ein Protokoll aller Backup-bezogenen Aktionen. Hier siehst du, welche Backup-Ereignisse ausgelöst wurden, für welchen Service oder welches Paket und zu welcher Uhrzeit.

![img](https://screensaver01.zap-hosting.com/index.php/s/nFfDMfQBNeE4Jt4/preview)
