---
id: vserver-rescue
title: "VPS: Dateien mit SystemRescue retten"
description: "Entdecke, wie du Daten sicher von einem nicht bootfähigen Server mit SystemRescue ISO wiederherstellst und Backups erstellst → Jetzt mehr erfahren"
sidebar_label: System Rescue (Backup)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Dein Server startet nicht mehr? Du bist ausgesperrt oder willst vor Änderungen noch schnell ein Backup machen?  
Wenn du deinen Server mit der **SystemRescue ISO** bootest, kannst du trotzdem auf deine Laufwerke zugreifen, wichtige Dateien retten und lokal Backups erstellen. Das klappt sogar, wenn das ursprüngliche Betriebssystem nicht mehr erreichbar ist.

Um die geretteten Daten sicher zu übertragen, kannst du **SFTP (Secure File Transfer Protocol)** nutzen. So kopierst du Dateien vom Rescue-System auf deinen lokalen Rechner oder einen anderen Server über eine sichere, verschlüsselte Verbindung.

<InlineVoucher />



## Vorbereitung

Für das Backup nutzt du die **SystemRescue ISO Version 12.01**.  
Logg dich zuerst in das Interface deines VPS ein und navigiere zum Bereich **ISOs**.

Wähle dort die passende ISO aus. Nach der Auswahl klickst du auf **Bootreihenfolge anpassen** und dann auf den **Neustart**-Button, um den Bootvorgang zu starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/pGXka7wkrsBe9XY/preview)



Sobald der Server von der ISO gestartet ist, verbinde dich über die [VNC-Konsole](vserver-vnc.md), um weiterzumachen. Wenn die Konsole aktiv ist, siehst du das Bootmenü der **SystemRescue** ISO. Wähle hier die Option, mit den **Standardparametern** zu booten.

So startet SystemRescue mit der empfohlenen Standardkonfiguration und bietet dir eine stabile, einsatzbereite Umgebung für Systemwartung oder Daten-Backups.

![img](https://screensaver01.zap-hosting.com/index.php/s/sw4jLc5AxwtMT5P/preview)


## Laufwerk(e) einbinden

Bevor du ein Laufwerk mountest, solltest du dir einen Überblick über die verfügbaren Speichergeräte und deren Partitionen verschaffen. Das geht mit folgendem Befehl:

```
fdisk -l
```

Dieser Befehl listet alle erkannten Laufwerke samt Partitionen auf. Die Ausgabe zeigt:

- Angeschlossene Speichergeräte (z.B. `/dev/sda`, `/dev/sdb`),
- Die Größe der Laufwerke,
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

Wenn du die richtige Partition gefunden hast, erstellst du als nächstes ein Verzeichnis, das als Mountpunkt dient – also der Ort, an dem die Partition zugänglich gemacht wird. Danach mountest du die gewünschte Partition in dieses Verzeichnis. Es empfiehlt sich, das Laufwerk im **Nur-Lese-Modus** zu mounten, um die Daten sicher zu halten.

Für das Erstellen des Mountpunkts und das Einbinden der Partition nutzt du diese Befehle:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Ersetze `/dev/sdaX` durch die korrekte Partition, die du mit `fdisk -l` ermittelt hast. Im Beispiel wäre das `/dev/sda2`.



## Netzwerk konfigurieren

Das Netzwerk wird nicht automatisch eingerichtet. Um eine Verbindung herzustellen, musst du die grundlegenden Netzwerkparameter manuell setzen. Bevor du eine IP-Adresse vergibst, solltest du den Namen des Netzwerkadapters prüfen. Meist heißt der Adapter **ens18**, kann aber variieren. Prüfe das mit:

```
ip a
```

Wenn du den richtigen Adapter kennst, kannst du eine IP-Adresse manuell zuweisen. Beispiel für eine Adresse im lokalen Subnetz:

```
ip addr add <IP>/24 dev <adapter>
```

Ersetze `<IP>` mit der gewünschten Adresse und `<adapter>` mit dem ermittelten Gerätenamen, meist `ens18`. Damit das System den Traffic richtig routet, musst du außerdem ein Standard-Gateway hinzufügen:

```
ip route add default via <gateway>
```

Ersetze `<gateway>` mit der gültigen Gateway-Adresse deines Netzwerks. Nach diesen Schritten ist die Netzwerkkonfiguration aktiv und du kannst die Verbindung z.B. mit einem Ping auf einen externen Host testen.



## Firewall konfigurieren

Aus Sicherheitsgründen aktiviert SystemRescue standardmäßig seine Firewall. Das bedeutet, alle eingehenden Verbindungen werden blockiert, um das System vor unbefugtem Zugriff zu schützen.

In deinem Fall musst du aber eine Verbindung von deinem lokalen Rechner zum SFTP-Server auf SystemRescue erlauben. Dafür kannst du entweder die Firewall so konfigurieren, dass SFTP-Verkehr erlaubt ist, oder sie vorübergehend deaktivieren.

Wenn du in einem vertrauenswürdigen Netzwerk bist, ist die schnellste Lösung, den Firewall-Dienst in SystemRescue mit folgendem Befehl zu stoppen:

```
systemctl stop iptables
```



## Root-Passwort setzen

Der SFTP-Client muss sich mit Benutzername und Passwort authentifizieren, um auf die Daten des SFTP-Servers zugreifen zu können. Dafür wird das System-Root-Konto genutzt, damit der Client auf alle Dateien zugreifen kann, die in SystemRescue sichtbar sind. Standardmäßig ist die Anmeldung als Root in SystemRescue nicht erlaubt. Du musst also ein Passwort setzen, damit die Authentifizierung klappt. Das machst du so:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```



## Datenübertragung

Jetzt kannst du deine Daten sichern. Öffne dazu einfach deinen bevorzugten FTP-Client und stelle eine Verbindung zu deinem Server her. Achte darauf, `SFTP` als Übertragungsprotokoll auszuwählen. Als Hostname gibst du die `IP-Adresse` deines Servers ein, nutzt Port `21` und meldest dich mit dem Benutzernamen `root` und dem zuvor gesetzten `Passwort` an.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

Wenn du dich das erste Mal per **SFTP** mit einem Server verbindest, zeigt WinSCP diese Sicherheitsabfrage. Die Warnung erscheint, weil der **Host-Key** des Servers noch nicht im lokalen Cache gespeichert ist.

Wenn du sicher bist, dass die IP-Adresse stimmt und du die Verbindung absichtlich herstellst, **kannst du dem Server bedenkenlos vertrauen**. Klick einfach auf **"Ja"**, um zu bestätigen. Damit wird der Schlüssel im Cache gespeichert und du wirst bei zukünftigen Verbindungen zu diesem Server nicht mehr gefragt.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Sobald du verbunden bist, navigiere in das zuvor erstellte **rescue-Verzeichnis**. Dort hast du Zugriff auf deine Dateien und kannst sie auf deinen lokalen Rechner herunterladen. Einfach durch die Ordner browsen, die Daten auswählen, die du sichern willst, und sicher per SFTP übertragen.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Fazit

Du hast jetzt erfolgreich deine wichtigen Dateien gerettet und gesichert.  
Deine Daten sind damit sicher und können jederzeit wiederhergestellt werden. Jetzt kannst du weitere Schritte angehen, wie z.B. den Server neu installieren, das System reparieren oder deine Daten in eine neue Umgebung migrieren.

Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />