---
id: dedicated-linux-rescue
title: "Dedicated Server: Dateien mit SystemRescue retten"
description: "Entdecke, wie du Daten von einem nicht startenden Server mit dem SystemRescue ISO wiederherstellst und Backups erstellst → Jetzt mehr erfahren"
sidebar_label: System Rescue (Backup)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Dein Server startet nicht mehr? Du bist ausgesperrt oder willst vor Änderungen noch schnell ein Backup machen?  
Wenn du deinen Server mit dem **SystemRescue ISO** bootest, kannst du trotzdem auf deine Laufwerke zugreifen, wichtige Dateien retten und lokal Backups erstellen. Das klappt sogar, wenn das ursprüngliche Betriebssystem nicht mehr erreichbar ist.

Um die geretteten Daten sicher zu übertragen, kannst du **SFTP (Secure File Transfer Protocol)** nutzen. So kopierst du Dateien vom Rescue-System auf deinen lokalen Rechner oder einen anderen Server über eine sichere, verschlüsselte Verbindung.





## Vorbereitung

Für das Backup nutzt du die **SystemRescue ISO Version 12.01**.  
Starte, indem du das Interface deines Dedicated Servers öffnest und zum Bereich **Initial installation** gehst.

Wähle dort die **SystemRescue 12.01** ISO aus den verfügbaren Optionen aus. Nach der Auswahl klickst du auf **Boot from ISO**, um den Bootvorgang zu starten. Sobald der Server vom ISO gebootet hat, verbinde dich über die [iLO-Schnittstelle](dedicated-ilo.md), um weiterzumachen.

![img](https://screensaver01.zap-hosting.com/index.php/s/L35tCT8zJ4riTko/preview)



Im **iLO-Managementinterface** öffnest du die **HTML-Konsole**, um die Remote-Anzeige deines Servers zu sehen. Sobald die Konsole aktiv ist, erscheint das Bootmenü für das **SystemRescue ISO**. Wähle hier die Option, mit den **Standardparametern** zu booten.

So startet SystemRescue mit der empfohlenen Standardkonfiguration und bietet dir eine stabile, einsatzbereite Umgebung für Systemwartung oder Datenbackup.

![img](https://screensaver01.zap-hosting.com/index.php/s/gzLJxw9FWZs4AJ7/download)


## Laufwerk(e) einbinden

Bevor du ein Laufwerk mountest, solltest du dir einen Überblick über die verfügbaren Speichergeräte und deren Partitionen verschaffen. Das geht mit folgendem Befehl:

```
fdisk -l
```

Dieser Befehl listet alle erkannten Laufwerke mit ihren Partitionen auf. Die Ausgabe zeigt:

- Angeschlossene Speichergeräte (z.B. `/dev/sda`, `/dev/sdb`),
- Die Größe jedes Laufwerks,
- Partitionstypen,
- Verfügbare Partitionen (z.B. `/dev/sda1`, `/dev/sda2`, …),
- Den Dateisystemtyp (wenn erkannt).

Im Beispiel hat das Laufwerk `/dev/sda` drei Partitionen: `/dev/sda1`, `/dev/sda2` und `/dev/sda3`. Achte darauf, die richtige Partition zum Mounten auszuwählen. Die Ausgabe von `fdisk -l` hilft dir, Fehler zu vermeiden, indem sie klar zeigt, welche Daten auf welchem Laufwerk liegen. Beispiel:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device        Boot   Start       End   Sectors   Size Type
/dev/sda1      *       2048   1050623   1048576   512M EFI System
/dev/sda2           1050624   3147775   2097152     1G Linux filesystem
/dev/sda3           3147776 234440703 231292928   110G Linux LVM
```

Hast du die richtige Partition gefunden, erstellst du als nächstes ein Verzeichnis, das als Mountpunkt dient. Dort wird die Partition zugänglich gemacht. Danach mountest du die gewünschte Partition in dieses Verzeichnis. Es empfiehlt sich, das Mounten im **Read-Only-Modus** durchzuführen, um die Daten sicher zu lesen.

Nutze dafür diese Befehle:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Ersetze `/dev/sdaX` mit der richtigen Partition, die du mit `fdisk -l` gefunden hast. Im Beispiel wäre das `/dev/sda2`.

## Firewall konfigurieren

Aus Sicherheitsgründen aktiviert SystemRescue standardmäßig seine Firewall. Das bedeutet, alle eingehenden Verbindungen werden blockiert, um das System vor unbefugtem Zugriff zu schützen.

Du musst aber eine Verbindung von deinem lokalen Rechner zum SFTP-Server auf SystemRescue erlauben. Dafür kannst du entweder die Firewall so konfigurieren, dass SFTP-Verkehr erlaubt wird, oder sie vorübergehend deaktivieren.

Wenn du in einem vertrauenswürdigen Netzwerk bist, ist die schnellste Lösung, den Firewall-Dienst in SystemRescue mit folgendem Befehl zu stoppen:

```
systemctl stop iptables
```



## Root-Passwort setzen

Der SFTP-Client muss sich mit Benutzername und Passwort authentifizieren, um auf die Daten des SFTP-Servers zugreifen zu können. Dafür wird das System-Root-Konto genutzt, damit der Client auf alle Dateien zugreifen kann, die in SystemRescue sichtbar sind. Standardmäßig ist die Anmeldung als Root in SystemRescue nicht erlaubt. Du musst also ein Passwort setzen, damit sich der Client authentifizieren kann. Setze das Passwort mit:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```



## Datenübertragung

Jetzt kannst du deine Daten sichern. Öffne dazu einfach einen FTP-Client deiner Wahl und stelle eine Verbindung zu deinem Server her. Wähle als Übertragungsprotokoll `SFTP`. Als Hostname gibst du die `IP-Adresse` deines Servers ein, Port `21` und meldest dich mit dem Benutzernamen `root` und dem zuvor gesetzten `Passwort` an.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

Wenn du dich das erste Mal per **SFTP** verbindest, zeigt WinSCP diese Sicherheitsabfrage. Die Warnung erscheint, weil der **Host-Key** des Servers noch nicht im lokalen Cache gespeichert ist.

Wenn du sicher bist, dass die IP-Adresse stimmt und du die Verbindung absichtlich startest, **kannst du dem Server vertrauen**. Klicke einfach auf **"Ja"**, um zu bestätigen. So wird der Schlüssel im Cache gespeichert und du wirst bei zukünftigen Verbindungen zu diesem Server nicht mehr gefragt.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Sobald du verbunden bist, navigiere in das zuvor erstellte **rescue-Verzeichnis**. Dort hast du Zugriff auf deine Dateien und kannst sie auf deinen lokalen Rechner herunterladen. Einfach durch die Ordner browsen, die Daten auswählen, die du sichern willst, und sie sicher per SFTP übertragen.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Abschluss

Du hast jetzt erfolgreich deine wichtigen Dateien gerettet und gesichert.  
Deine Daten sind damit sicher und können jederzeit wiederhergestellt werden. Jetzt kannst du mit weiteren Schritten weitermachen, z.B. den Server neu installieren, das System reparieren oder deine Daten in eine neue Umgebung migrieren.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂


