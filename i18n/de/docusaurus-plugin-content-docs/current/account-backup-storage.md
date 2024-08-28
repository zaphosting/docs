---
id: account-backup-storage
title: Backup Storage
description: Anleitung zum Backup Storage von ZAP-Hosting Serven - ZAP-Hosting.com Dokumentation 
sidebar_label: Backup Storage
---

## Was ist ein Backup Storage?
Der Backup Storage bietet unseren Kunden eine Möglichkeit, über ihre Dienste Backups zu erstellen. Jeder Kunde hat grundsätzlich einen kostenlosen Speicherplatz von 10 GB auf seinem Backup Storage, den er voll nutzen kann. Für einen geringen Aufpreis kann jedoch eine Erweiterung des Storage auf bis zu 200 GB gebucht werden.

## Wie komme ich an meine Backupdateien ran?
Die Backupdateien werden auf den Backup Storage gelegt, sobald ein Backup über das Webinterface angelegt wird. Die Dateien können dann entweder über die Backupfunktion des jeweiligen Dienstes auf diesen wieder aufgespielt werden oder per FTP-Verbindung vom Backup Storage heruntergeladen werden.

### Per FTP auf den Backup Storage verbinden
Um über FTP eine Verbindung zum Backup Storage herzustellen, lade dir das Programm [FileZilla](http://www.filezilla.de/download.htm) für dein Betriebssystem herunter und installiere es. Ist die Installation abgeschlossen, öffne bitte das Programm.
Die Oberfläche von FileZilla sollte nun zu sehen sein:

![wd](https://screensaver01.zap-hosting.com/index.php/s/LZTDgxZpb7DWHyw/preview)

Um nun eine Verbindung auf deinen Backup Storage herzustellen, gib nun die Verbindungsdaten oben in die Textfelder ein.
Die Daten dafür findest du, wenn du im Webinterface auf die Seite deines Backup Storage gehst. 
Klicke dafür auf dieses Symbol, oben in der Menüleiste:

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/gZT2CLdkK25Y9Cd/preview)

Auf der Backup Storage Seite findest du dann in der im Bild markierten Box deine Zugangsdaten für die FTP-Verbindung:

![2022-04-08_04-38](https://screensaver01.zap-hosting.com/index.php/s/BQ33jySLP226mb9/preview)

Trage die IP-Adresse in FileZilla in das Feld **Server** ein, den Benutzer in das Feld **Benutzername** und das Passwort in das Feld **Passwort**. Der Port brauch nicht mit angegeben werden, sollte er der Zahl *21* entsprechen. Klicke jetzt auf **Verbinden**. 
Ist die Verbindung erfolgreich hergestellt, findest du in den jeweiligen Ordnern die Backups, die jeweils von deinen Diensten erstellt worden sind.

![2022-04-08_04-39_1](https://screensaver01.zap-hosting.com/index.php/s/wDFxn8WygwLfBdi/preview)

![2022-04-08_04-40](https://screensaver01.zap-hosting.com/index.php/s/JnRZoWb4ee6DnY7/preview)


Die Backups befinden sich in gepackter Form als **\*.tar.gz** Datei in den jeweiligen Ordnern und können mit Programmen, wie WinRAR oder 7-Zip entpackt werden.

## "Transfer connection interrupted" Fehlermeldung

Sollte bei der Verbindung oder auch Übertragung die Fehlermeldung "Transfer connection interrupted: ECCONABORTED - Connection aborted" bestehen, so kann testweise der Übertragungsmodus von *Passive* auf *Active* umgestellt werden.
In den folgenden Schritten wird gezeigt, wie das bei Filezilla in den Einstellungen umgestellt werden kann.

Drücke in deinem Filezilla Client auf "**Bearbeiten**", dort dann direkt die "**Einstellungen...**" öffnen:

![2022-04-08_05-23](https://screensaver01.zap-hosting.com/index.php/s/FJ3bcHRNRXmDGGw/preview)

Im Anschluss daran öffnet sich das "Einstellungen" Fenster. Dort kannst du nun auf "**FTP**" um die Einstellungen für die FTP Verbindung einzusehen.
Bei "**FTP**" angekommen, wird der Standard Übertragungsmodus auf  "Passiv" stehen, dort kannst du den Radio-Button bei "**Aktiv**" auswählen und die Änderung mit "**OK**" bestätigen.

![2022-04-08_05-23_1](https://screensaver01.zap-hosting.com/index.php/s/kiTm6BaKi8X2XLk/preview)

Sobald auch dies getan ist, kann jetzt die FTP Verbindung erneut getestet werden.

## Meldungen
In der Sidebar im Unterpunkt *Meldungen* wird der Log wiedergegeben, welcher anzeigt, unter welchem Auslöser/Grund welche Aktion bei den Backups bei welchem Paket wann ausgeführt wurde.

![2022-04-08_04-43](https://screensaver01.zap-hosting.com/index.php/s/pDYPpYeFd4Fwq96/preview)