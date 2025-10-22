---
id: dedicated-linux-rescue
title: "Dedicated Server: Dateien mit SystemRescue retten"
description: "Entdecke, wie du Daten von einem nicht startenden Server mit der SystemRescue ISO wiederherstellst und Backups erstellst → Jetzt mehr erfahren"
sidebar_label: System Rescue (Backup)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Dein Server startet nicht mehr? Du bist ausgesperrt oder willst vor Änderungen noch ein Backup machen?  
Indem du deinen Server mit der **SystemRescue ISO** bootest, kannst du trotzdem auf deine Laufwerke zugreifen, wichtige Dateien retten und lokal Backups erstellen. Das funktioniert sogar, wenn das ursprüngliche Betriebssystem nicht mehr erreichbar ist.

Um die geretteten Daten sicher zu übertragen, kannst du **SFTP (Secure File Transfer Protocol)** nutzen. Damit kopierst du Dateien vom Rescue-System auf deinen lokalen Rechner oder einen anderen Server über eine sichere und verschlüsselte Verbindung.

<InlineVoucher />

## Vorbereitung

Für das Backup nutzt du die **SystemRescue ISO Version 12.01**.  
Starte, indem du im Interface deines Dedicated Servers zum Bereich **Erstinstallation** gehst.

Wähle die **SystemRescue 12.01** ISO aus den verfügbaren Optionen aus. Nach der Auswahl klickst du auf **Boot from ISO**, um den Bootvorgang zu starten. Sobald der Server von der ISO gebootet hat, verbinde dich über die [iLO-Schnittstelle](dedicated-ilo.md), um weiterzumachen.

![img](https://screensaver01.zap-hosting.com/index.php/s/L35tCT8zJ4riTko/preview)

Im **iLO Management Interface** öffnest du die **HTML-Konsole**, um die Remote-Anzeige deines Servers zu sehen. Sobald die Konsole aktiv ist, erscheint das Bootmenü der **SystemRescue ISO**. Wähle hier die Option, mit den **Standardparametern** zu booten.

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
- Den Dateisystemtyp (falls erkannt).

Im Beispiel hat das Laufwerk `/dev/sda` drei Partitionen: `/dev/sda1`, `/dev/sda2` und `/dev/sda3`. Achte darauf, die richtige Partition zum Mounten auszuwählen. Die Ausgabe von `fdisk -l` hilft dir, Fehler zu vermeiden, indem sie klar zeigt, welche Daten auf welchem Laufwerk liegen. Beispiel:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device        Boot   Start       End   Sectors   Size Type
/dev/sda1      *       2048   1050623   1048576   512M EFI System
/dev/sda2           1050624   3147775   2097152     1G Linux filesystem
/dev/sda3           3147776 234440703 231292928   110G Linux LVM
```

Hast du die richtige Partition gefunden, erstellst du als nächstes ein Verzeichnis, das als Mountpunkt dient – also der Ort, an dem die Partition zugänglich gemacht wird. Dann mountest du die gewünschte Partition in dieses Verzeichnis. Es empfiehlt sich, das Laufwerk im **Read-Only-Modus** zu mounten, um die Daten sicher zu lesen.

Für das Erstellen des Mountpunkts und das Mounten nutzt du diese Befehle:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Ersetze `/dev/sdaX` durch die korrekte Partition, die du mit `fdisk -l` gefunden hast. Im Beispiel wäre das `/dev/sda2`.

## Firewall konfigurieren

SystemRescue aktiviert standardmäßig aus Sicherheitsgründen die Firewall. Das bedeutet, alle eingehenden Verbindungen werden blockiert, um das System vor unbefugtem Zugriff zu schützen.

Du musst aber eine Verbindung von deinem lokalen Rechner zum SFTP-Server auf SystemRescue erlauben. Dafür kannst du entweder die Firewall so konfigurieren, dass SFTP-Verkehr erlaubt wird, oder sie vorübergehend deaktivieren.

Wenn du dich in einem vertrauenswürdigen Netzwerk befindest, ist die schnellste Lösung, den Firewall-Dienst in SystemRescue mit folgendem Befehl zu stoppen:

```
systemctl stop iptables
```

## Root-Passwort setzen

Der SFTP-Client muss sich mit Benutzername und Passwort authentifizieren, um auf die Daten des SFTP-Servers zugreifen zu können. Dafür wird das System-Root-Konto genutzt, damit der Client auf alle Dateien zugreifen kann, die in SystemRescue sichtbar sind. Standardmäßig ist die Anmeldung als Root in SystemRescue nicht erlaubt. Du musst also ein Passwort setzen, damit sich der Client authentifizieren kann. Definiere ein Passwort mit folgendem Befehl:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```

## Datenübertragung

Jetzt bist du bereit, deine Daten zu sichern. Öffne dazu einfach deinen bevorzugten FTP-Client und stelle eine Verbindung zu deinem Server her. Achte darauf, `SFTP` als Übertragungsprotokoll auszuwählen. Als Hostname gibst du die `IP-Adresse` deines Servers ein, nutzt Port `21` und meldest dich mit dem Benutzernamen `root` und dem zuvor gesetzten `Passwort` an.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

Wenn du dich zum ersten Mal per **SFTP** mit einem Server verbindest, zeigt WinSCP diese Sicherheitsabfrage. Die Warnung erscheint, weil der **Host-Schlüssel** des Servers noch nicht im lokalen Cache gespeichert ist.

Wenn du sicher bist, dass die IP-Adresse stimmt und du die Verbindung absichtlich herstellst, **kannst du dem Server bedenkenlos vertrauen**. Klicke einfach auf **"Ja"**, um zu bestätigen. Damit wird der Schlüssel im Cache gespeichert und du wirst bei zukünftigen Verbindungen zu diesem Server nicht mehr gefragt.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Sobald du verbunden bist, navigiere zum zuvor erstellten **rescue-Verzeichnis**. Dort hast du Zugriff auf deine Dateien und kannst sie auf deinen lokalen Rechner herunterladen. Durchsuche einfach die Ordner, wähle die Daten aus, die du sichern möchtest, und übertrage sie sicher per SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Fazit

Du hast jetzt erfolgreich deine wichtigen Dateien gerettet und gesichert.  
Deine Daten sind damit sicher und können jederzeit wiederhergestellt werden. Nun kannst du weitere Schritte angehen, wie die Neuinstallation deines Servers, Systemreparaturen oder die Migration deiner Daten in eine neue Umgebung.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />