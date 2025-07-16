---
id: dedicated-windows-rescue
title: "Dedicated Server: Sichere deine Dateien mit der System Rescue"
description: Informationen, wie du deine Dateien mit SystemRescue auf deinem Dedicated Server von ZAP-Hosting sichern kannst - ZAP-Hosting.com Dokumentation
sidebar_label: System Rescue (Backup)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Dein Server bootet nicht mehr? Du hast dich aus deinem System ausgesperrt oder möchtest ein Backup erstellen, bevor du Änderungen vornimmst?
Durch das Booten deines Servers mit der **SystemRescue ISO**, kannst du weiterhin auf deine Laufwerke zugreifen, wichtige Dateien wiederherstellen und Backups lokal erstellen. Dies funktioniert auch, wenn das ursprüngliche Betriebssystem nicht mehr zugänglich ist.

Um die wiederhergestellten Daten sicher zu übertragen, kannst du **SFTP (Secure File Transfer Protocol)** verwenden. Mit dieser Methode kannst du die Dateien vom Rescue-System auf deinen lokalen Computer oder auf einen anderen Server über eine sichere und verschlüsselte Verbindung kopieren.

<InlineVoucher />



## Vorbereitung
Um die Datensicherung durchzuführen, verwenden die **SystemRescue ISO Version 12.01**. Beginne mit dem Zugriff auf die Oberfläche deines Dedicated Servers und navigiere zum Abschnitt **Erstinstallation**.

Wählen die **SystemRescue 12.01** ISO aus den verfügbaren Optionen. Nachdem du die richtige ISO ausgewählt hast, klicke auf **Boot von ISO**, um den Boot-Prozess zu starten. Sobald der Server von der ISO gestartet ist, kannst du dich über das [iLO interface](dedicated-ilo.md) verbinden, um fortzufahren.

![img](https://screensaver01.zap-hosting.com/index.php/s/L35tCT8zJ4riTko/preview)



Öffnen in dem **iLO Management Interface** die **HTML-Konsole**, um auf die Remote-Anzeige deines Servers zuzugreifen. Sobald die Konsole aktiv ist, erscheint das Boot-Menü für das **SystemRescue-ISO**. Wählen hier die Option, mit den **Standardparametern** zu booten.

Dies stellt sicher, dass SystemRescue mit der empfohlenen Standardkonfiguration startet und eine stabile und einsatzbereite Umgebung für die Systemwartung oder Datensicherung bereitstellt.

![img](https://screensaver01.zap-hosting.com/index.php/s/gzLJxw9FWZs4AJ7/download)


## Laufwerk(e) mounten

Bevor du ein Laufwerk mountest, ist es wichtig, dass du dir einen Überblick über die verfügbaren Laufwerke und deren Partitionen verschaffst. Dies kannst du mit dem folgenden Befehl tun:

```
fdisk -l
```

Dieser Befehl listet alle erkannten Laufwerke zusammen mit ihren Partitionsdetails auf. Die Ausgabe umfasst:

- Angeschlossene Speichergeräte (z.B. `/dev/sda`, `/dev/sdb`),
- Die Größe der einzelnen Laufwerke,
- Partitionstypen,
- Verfügbare Partitionen (z.B. `/dev/sda1`, `/dev/sda2`, ...),
- Der Dateisystemtyp (falls erkannt).

In diesem Beispiel hat das Laufwerk `/dev/sda` drei Partitionen: `/dev/sda1`, `/dev/sda2` und `/dev/sda3`. Stelle sicher, dass du die richtige Partition auswählst, bevor du sie einhängst. Die Ausgabe von `fdisk -l` hilft Ihnen, Fehler zu vermeiden, indem sie eindeutig anzeigt, welches Laufwerk welche Daten enthält. Beispiel:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device     Boot   Start       End   Sectors  Size Id Type
/dev/sda1  *       2048    206847    204800  100M  7 HPFS/NTFS/exFAT
/dev/sda2        206848 232935855 232728008  111G  7 HPFS/NTFS/exFAT
/dev/sda3     232935856 234373119   1431264  699M 27 Hidden NTFS WinRE
```

Nachdem du die richtige Partition identifiziert hast, besteht der nächste Schritt darin, ein Verzeichnis zu erstellen, das als Mountpoint dienen wird. Dies ist der Ort, an dem die Partition zugänglich gemacht werden soll. Mounte danach die gewünschte Partition in dieses Verzeichnis. Es wird empfohlen, den Mountvorgang im **Nur-Lese-Modus** durchzuführen, um einen sicheren Zugriff auf die Daten zu gewährleisten. 

Um den Mountpoint zu erstellen und die Partition einzuhängen, benutze die folgenden Befehle:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Ersetze `/dev/sdaX` durch die richtige Partitionskennung, die du mit `fdisk -l` ermittelt hast. In diesem Beispiel wäre `/dev/sda2` die richtige Partition für unsere Festplatte.

:::tip  Windows-Partitionen im Ruhezustand

Linux kann Windows-Partitionen, die sich im Ruhezustand befinden oder von Fast Boot betroffen sind, nicht sicher öffnen. Um Datenverlust oder -beschädigung zu vermeiden, mounten diese Partitionen immer **im Nur-Lese-Modus**.

:::

## Konfigurieren der Firewall

Aus Sicherheitsgründen ist die Firewall von SystemRescue standardmäßig aktiviert. Das bedeutet, dass alle eingehenden Verbindungen blockiert werden, um das System vor unberechtigtem Zugriff zu schützen.

In diesem Fall musst du jedoch eine Verbindung von deinem lokalen Rechner zum SFTP-Server, der auf SystemRescue läuft, zulassen. Dazu musst du entweder die Firewall so konfigurieren, dass sie SFTP-Datenverkehr zulässt oder sie vorübergehend deaktivieren.

Wenn du in einer vertrauenswürdigen Netzwerkumgebung arbeiten, ist die einfachste und schnellste Lösung, den Firewall-Dienst in SystemRescue mit dem folgenden Befehl zu stoppen:

```
systemctl stop iptables
```



## Festlegen des Root-Passworts

Der SFTP-Client muss sich mit einem Benutzernamen und einem Passwort authentifizieren, damit er auf die Daten des SFTP-Servers zugreifen kann. Das System-Root-Konto wird verwendet, damit der Client auf Dateien zugreifen kann, die in SystemRescue sichtbar sind. Standardmäßig ist die Authentifizierung als root-Konto in SystemRescue nicht erlaubt. Ein Passwort muss gesetzt werden, damit sich der Client authentifizieren kann. Definieren ein Passwort mit dem folgenden Befehl:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```

## Datenübertragung

Nun bist du bereit, deine Daten zu sichern. Öffne dazu einfach einen FTP-Client deiner Wahl und stelle eine Verbindung zu deinem Server her. Stelle sicher, dass du `SFTP` als Übertragungsprotokoll auswählst. Gebe als Hostname die `IP-Adresse` deines Servers ein, verwende den Port `21` und melde dich mit dem Benutzernamen ‚root‘ und dem zuvor festgelegten `Passwort` an.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

Wenn du zum ersten Mal eine Verbindung zu einem Server über **SFTP** herstellst, dann zeigt WinSCP diese Sicherheitsabfrage an. Die Warnung erscheint, weil der **Hostschlüssel** des Servers noch nicht in deinem lokalen Cache gespeichert ist.

In dieser Situation, in der du weißt, dass die IP-Adresse korrekt ist und du diese Verbindung absichtlich gestartet hast, **ist es sicher, dem Server zu vertrauen**. Klicken Sie zur Bestätigung einfach auf **„Ja “**. Dadurch wird der Schlüssel des Servers zu deinem Cache hinzugefügt, so dass du in Zukunft nicht mehr nach diesem Server gefragt wirst.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Nachdem du nun verbunden bist, navigiere zu dem **Rescue-Verzeichnis**, das du zuvor erstellt hast. Von dort aus hast du Zugriff auf deine Dateien und kannst damit beginnen, diese auf deinen lokalen Rechner herunterzuladen. Navigiere einfach durch die Ordner, wähle die Daten aus, die du sichern möchtest, und übertrage sie sicher per SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Abschluss

Du hast nun erfolgreich deine wichtigen Dateien gerettet und gesichert. Das heißt, deine Daten sind sicher und bereit, bei Bedarf wiederhergestellt zu werden. Nun kannst du mit weiteren Aktionen fortfahren, z. B. deinen Server neu installieren, das System reparieren oder deine Daten in eine neue Umgebung migrieren.

Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂