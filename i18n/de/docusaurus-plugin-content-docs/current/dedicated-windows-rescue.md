---
id: dedicated-windows-rescue
title: "Dedicated Server: Rette deine Dateien mit SystemRescue"
description: "Entdecke, wie du Daten von einem nicht startbaren Server mit der SystemRescue ISO wiederherstellst und Backups erstellst → Jetzt mehr erfahren"
sidebar_label: System Rescue (Backup)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Dein Server startet nicht mehr? Du bist ausgesperrt oder möchtest vor Änderungen ein Backup erstellen?  
Indem du deinen Server mit der **SystemRescue ISO** bootest, kannst du trotzdem auf deine Laufwerke zugreifen, wichtige Dateien wiederherstellen und lokal Backups anlegen. Das funktioniert sogar, wenn das ursprüngliche Betriebssystem nicht mehr erreichbar ist.

Um die geretteten Daten sicher zu übertragen, kannst du **SFTP (Secure File Transfer Protocol)** nutzen. Damit kannst du Dateien vom Rescue-System über eine sichere und verschlüsselte Verbindung auf deinen lokalen Rechner oder einen anderen Server kopieren.

<InlineVoucher />

## Vorbereitung

Für das Backup nutzt du die **SystemRescue ISO Version 12.01**.  
Starte, indem du im Interface deines Dedicated Servers zum Bereich **Initial installation** gehst.

Wähle dort die **SystemRescue 12.01** ISO aus den verfügbaren Optionen aus. Nach der Auswahl klickst du auf **Boot from ISO**, um den Bootvorgang zu starten. Sobald der Server von der ISO gebootet hat, verbinde dich über die [iLO-Schnittstelle](dedicated-ilo.md), um weiterzumachen.

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
- Die Größe der Laufwerke,
- Partitionstypen,
- Verfügbare Partitionen (z.B. `/dev/sda1`, `/dev/sda2`, …),
- Den Dateisystemtyp (falls erkannt).

Im Beispiel hat das Laufwerk `/dev/sda` drei Partitionen: `/dev/sda1`, `/dev/sda2` und `/dev/sda3`. Achte darauf, die richtige Partition zum Mounten auszuwählen. Die Ausgabe von `fdisk -l` hilft dir, Fehler zu vermeiden, indem sie klar zeigt, welche Daten auf welchem Laufwerk liegen. Beispiel:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device     Boot   Start       End   Sectors  Size Id Type
/dev/sda1  *       2048    206847    204800  100M  7 HPFS/NTFS/exFAT
/dev/sda2        206848 232935855 232728008  111G  7 HPFS/NTFS/exFAT
/dev/sda3     232935856 234373119   1431264  699M 27 Hidden NTFS WinRE
```

Hast du die richtige Partition gefunden, erstellst du als nächstes ein Verzeichnis, das als Mountpunkt dient – also der Ort, an dem die Partition zugänglich gemacht wird. Danach mountest du die gewünschte Partition in dieses Verzeichnis. Es empfiehlt sich, das Laufwerk im **Read-Only-Modus** zu mounten, um die Daten sicher zu lesen.

Nutze dafür diese Befehle:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Ersetze `/dev/sdaX` durch die korrekte Partition, die du mit `fdisk -l` gefunden hast. Im Beispiel wäre das `/dev/sda2`.

:::tip Windows-Partitionen im Ruhezustand

Linux kann Windows-Partitionen, die sich im Ruhezustand (Hibernate) oder im Fast Boot-Modus befinden, nicht sicher öffnen. Um Datenverlust oder Beschädigungen zu vermeiden, solltest du diese Partitionen **immer im Read-Only-Modus** mounten.

:::

## Firewall konfigurieren

Aus Sicherheitsgründen aktiviert SystemRescue standardmäßig seine Firewall. Das bedeutet, alle eingehenden Verbindungen werden blockiert, um das System vor unbefugtem Zugriff zu schützen.

In diesem Fall musst du aber eine Verbindung von deinem lokalen Rechner zum SFTP-Server auf SystemRescue erlauben. Dafür kannst du entweder die Firewall so konfigurieren, dass SFTP-Verkehr erlaubt wird, oder sie vorübergehend deaktivieren.

Wenn du dich in einem vertrauenswürdigen Netzwerk befindest, ist die schnellste Lösung, den Firewall-Dienst in SystemRescue mit folgendem Befehl zu stoppen:

```
systemctl stop iptables
```

## Root-Passwort setzen

Der SFTP-Client muss sich mit Benutzername und Passwort authentifizieren, um auf die Daten des SFTP-Servers zugreifen zu können. Dafür wird das System-Root-Konto verwendet, damit der Client auf alle in SystemRescue sichtbaren Dateien zugreifen kann. Standardmäßig ist die Anmeldung als Root in SystemRescue nicht erlaubt. Du musst also ein Passwort setzen, damit sich der Client authentifizieren kann. Definiere ein Passwort mit diesem Befehl:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```

## Datenübertragung

Jetzt bist du bereit, deine Daten zu sichern. Öffne einfach deinen bevorzugten FTP-Client und stelle eine Verbindung zu deinem Server her. Achte darauf, `SFTP` als Übertragungsprotokoll auszuwählen. Als Hostname gibst du die `IP-Adresse` deines Servers ein, nutzt Port `21` und meldest dich mit dem Benutzernamen `root` und dem zuvor gesetzten `Passwort` an.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

Wenn du dich zum ersten Mal per **SFTP** mit einem Server verbindest, zeigt WinSCP diese Sicherheitsabfrage. Die Warnung erscheint, weil der **Host-Schlüssel** des Servers noch nicht im lokalen Cache gespeichert ist.

Wenn du sicher bist, dass die IP-Adresse korrekt ist und du die Verbindung absichtlich herstellst, **kannst du dem Server vertrauen**. Klicke einfach auf **"Ja"**, um zu bestätigen. Dadurch wird der Schlüssel im Cache gespeichert und du wirst bei zukünftigen Verbindungen zu diesem Server nicht mehr gefragt.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Sobald du verbunden bist, navigiere in das zuvor erstellte **rescue-Verzeichnis**. Dort hast du Zugriff auf deine Dateien und kannst sie auf deinen lokalen Rechner herunterladen. Durchsuche einfach die Ordner, wähle die Daten aus, die du sichern möchtest, und übertrage sie sicher per SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Fazit

Du hast jetzt erfolgreich deine wichtigen Dateien gerettet und gesichert.  
Deine Daten sind damit sicher und können jederzeit wiederhergestellt werden. Nun kannst du weitere Schritte angehen, wie die Neuinstallation deines Servers, Systemreparaturen oder die Migration deiner Daten in eine neue Umgebung.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />