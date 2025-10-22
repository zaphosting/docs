---
id: account-backup-storage
title: Backup-Speicher
description: "Entdecke, wie du deine Backups sicher speicherst und verwaltest – mit skalierbaren Speicheroptionen für einfache Wiederherstellung und Zugriff → Jetzt mehr erfahren"
sidebar_label: Backup-Speicher
---

## Was ist Backup-Speicher?
Backup-Speicher bietet unseren Kunden die Möglichkeit, Backups über ihre Services zu erstellen. Jeder Kunde hat einen kostenlosen Speicherplatz von 10GB auf seinem Backup-Speicher, den er vollständig nutzen kann. Für einen kleinen Aufpreis kann der Speicherplatz auf bis zu 200GB erweitert werden.

## Wie greife ich auf meine Backup-Dateien zu?
Backup-Dateien werden auf dem Backup-Speicher abgelegt, sobald ein Backup über die Weboberfläche erstellt wird. Die Dateien können dann entweder über die Backup-Funktion des jeweiligen Services wiederhergestellt oder per FTP-Verbindung vom Backup-Speicher heruntergeladen werden.

### Verbindung zum Backup-Speicher via FTP herstellen
Um dich per FTP mit dem Backup-Speicher zu verbinden, lade dir das Programm [FileZilla](http://www.filezilla.de/download.htm) für dein Betriebssystem herunter und installiere es. Nach der Installation öffnest du das Programm.
Du solltest jetzt die FileZilla-Oberfläche sehen:

![2022-04-08_04-41](https://screensaver01.zap-hosting.com/index.php/s/XHa7gfPBKcGgYj4/preview)

Um dich mit deinem Backup-Speicher zu verbinden, gib die Verbindungsdaten in die Textfelder oben ein.
Diese Daten findest du, wenn du in der Weboberfläche auf die Seite deines Backup-Speichers gehst.
Klicke dazu auf dieses Icon oben in der Menüleiste:

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

Auf der Backup-Speicher-Seite findest du dann deine Zugangsdaten für die FTP-Verbindung in dem im Bild markierten Kasten:

![2022-04-08_04-39](https://screensaver01.zap-hosting.com/index.php/s/pziwNeT9jmFC5Ax/preview)

Trage die IP-Adresse in FileZilla ins Feld **Server**, den Benutzer ins Feld **Benutzername** und das Passwort ins Feld **Passwort** ein. Den Port musst du nicht angeben, wenn er *21* ist. Klicke jetzt auf **Verbinden**.
Wenn die Verbindung erfolgreich ist, findest du die von deinen Services erstellten Backups in den jeweiligen Ordnern.

![2022-04-08_04-41_1](https://screensaver01.zap-hosting.com/index.php/s/K9MZHf8napDMCjT/preview)

![2022-04-08_04-41_2](https://screensaver01.zap-hosting.com/index.php/s/ca7DkJ2T6DpxTFH/preview)

Die Backups liegen gepackt als **\*.tar.gz** Dateien in den jeweiligen Ordnern und können mit Programmen wie WinRAR oder 7-Zip entpackt werden.

## Fehlermeldung "Transfer connection interrupted"

Wenn während der Verbindung oder Übertragung die Fehlermeldung "Transfer connection interrupted: ECCONABORTED - Connection aborted" erscheint, kann der Übertragungsmodus von "**Passiv**" auf "**Aktiv**" geändert werden.
Die folgenden Schritte zeigen, wie du das in den FileZilla-Einstellungen ändern kannst.

Drücke in deinem FileZilla-Client auf "**Bearbeiten**" und öffne dann direkt die "**Einstellungen...**":

![2022-04-08_05-16](https://screensaver01.zap-hosting.com/index.php/s/AgrmP6i5aAEr2kr/preview)

Danach öffnet sich das Fenster "**Einstellungen**". Dort klickst du auf "**FTP**", um die Einstellungen für die FTP-Verbindung zu sehen.
Standardmäßig ist der Übertragungsmodus auf "**Passiv**" eingestellt. Dort kannst du den Radiobutton auf "**Aktiv**" setzen und die Änderung mit "**OK**" bestätigen.

![2022-04-08_05-17](https://screensaver01.zap-hosting.com/index.php/s/REPQieY3Zbm8arM/preview)

Sobald das erledigt ist, kannst du die FTP-Verbindung erneut testen.

## Nachrichten
Im Sidebar-Menü unter dem Unterpunkt *Nachrichten* wird das Log angezeigt, das zeigt, bei welchem Auslöser/Grund welche Aktion während der Backups für welches Paket und wann ausgeführt wurde.

![2022-04-08_04-42](https://screensaver01.zap-hosting.com/index.php/s/GwtGHoDL7d9r3Ds/preview)