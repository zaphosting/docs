---
id: dedicated-linux-rsync
title: "Dedicated Server: Linux-Server mit Rsync sichern"
description: "Entdecke, wie du effiziente lokale und Remote-Backups mit Rsync erstellst für zuverlässige Datensynchronisation und Schutz → Jetzt mehr erfahren"
sidebar_label: Backups mit Rsync erstellen
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Backups kannst du mit dem Tool Rsync machen. Sie können entweder lokal auf dem System in ein anderes Verzeichnis/Laufwerk kopiert werden oder auf ein Remote-System.  

## Daten in ein anderes lokales Verzeichnis oder Laufwerk kopieren:

:::info
Achtung: Der erste Durchlauf kann je nach Datenmenge deutlich länger dauern als die folgenden, da Rsync beim ersten Mal alle Daten synchronisiert. Ab dem zweiten Mal werden nur noch geänderte Daten übertragen. 
:::
>So entsteht ein inkrementelles Backup.  

## Schritt 1

Rsync kannst du mit folgendem Befehl installieren:

```
apt install rsync
```

Nach der Installation kannst du es direkt nutzen. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Tägliches Backup in ein lokales Verzeichnis/Laufwerk" label="Tägliches Backup in ein lokales Verzeichnis/Laufwerk">
## Schritt 2

In diesem Beispiel soll der Ordner Client unter /home mit dem Ordner Backup unter /home synchronisiert werden. 

Das geht mit folgendem Befehl: 

```
rsync -arz /home/Client /home/Backup
```
-a=Archivmodus, kopiert alle Attribute
<br/>
-r=Rekursiv, Unterordner werden mit synchronisiert
<br/>
-z=Kompression, je nach Datenmenge/-größe wird komprimiert


Der Ordner wurde erfolgreich synchronisiert.

Wenn jetzt eine Datei etc. im Client-Ordner gelöscht wird, bleibt sie im Backup-Ordner erhalten.  
Da die Dateien aber immer 1:1 synchron sein sollen, kann der rsync-Befehl einfach angepasst werden, damit auch Daten, die im Client-Ordner nicht mehr vorhanden sind, aus dem Backup-Ordner entfernt werden.  

Der angepasste Befehl lautet: 

```
rsync -arz --delete /home/Client /home/Backup
```
-a=Archivmodus, kopiert alle Attribute
<br/>
-r=Rekursiv, Unterordner werden mit synchronisiert
<br/>
-z=Kompression, je nach Datenmenge/-größe wird komprimiert
<br/>
--delete= Löscht Daten, die in der Quelle nicht mehr existieren, aber noch im Ziel vorhanden sind

## Schritt 3

Damit du den Befehl nicht immer manuell ausführen musst, kannst du ihn einfach in einen Cronjob packen.  
Zum Beispiel soll täglich um 3 Uhr morgens ein Backup erstellt werden: 

Öffne crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

Mit der Nummer 1 kannst du "nano" als Editor nutzen.
Mit der Nummer 2 kannst du "vim" als Editor nutzen.  

Nachdem die Datei z.B. mit Nano geöffnet wurde, kannst du einen Cronjob erstellen und eintragen.  
Einen Cronjob kannst du mit diesem [Generator](https://crontab-generator.org/) erstellen.  

Der eingetragene Cronjob sieht dann so aus: 

 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Jeden Tag um 3 Uhr morgens wird der Befehl ausgeführt und ein Backup erstellt. 

</TabItem>
<TabItem value="Tägliches Backup auf ein Remote-System" label="Tägliches Backup auf ein Remote-System">

## Schritt 4

In diesem Beispiel soll der Ordner Client unter /home mit dem Ordner Backup auf einem Remote-System synchronisiert werden. Die Verbindung erfolgt per SSH-Key, damit das Backup auch automatisiert werden kann.  
>Wichtig: Rsync muss auch auf dem Remote-Server installiert sein.  
>```
>apt install rsync
>```

Zum Beispiel kannst du folgenden Befehl nutzen, um die Daten auf den Remote-Host zu sichern (Anpassung erforderlich): 

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=Archivmodus, kopiert alle Attribute
<br/>
-r=Rekursiv, Unterordner werden mit synchronisiert
<br/>
-z=Kompression, je nach Datenmenge/-größe wird komprimiert
<br/>
-e=Gibt den SSH-Port an (Standard 22)
<br/>
SSH-Key angeben (Pfad)("ssh -i /home/sshkey/keybackup")= ssh -i /[Pfad zum Key]
<br/>
Zu sicherndes Verzeichnis angeben (/home/client/)= /[Verzeichnis]
<br/>
RemoteHost(root@123.123.123.123:)= Login-Name des Nutzers auf dem RemoteHost und Adresse: name@IP/Domain
<br/>
Zielverzeichnis für die Daten auf dem RemoteHost(:/home/Backup/Home-Server1/)= :/[Pfad zum Zielverzeichnis]

Der Ordner/die Dateien wurden nach Ausführung des Befehls erfolgreich mit dem Remote-Verzeichnis synchronisiert/gesichert.
  

Wenn eine Datei etc. im Client-Ordner gelöscht wird, bleibt sie im Backup-Ordner auf dem Remote-Host erhalten.  
Da die Dateien aber immer 1:1 synchron sein sollen, kann der rsync-Befehl einfach angepasst werden, damit auch Daten, die im Client-Ordner nicht mehr vorhanden sind, aus dem Backup-Ordner auf dem Remote-Host entfernt werden.  

Der angepasste Befehl lautet:

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=Archivmodus, kopiert alle Attribute
<br/>
-r=Rekursiv, Unterordner werden mit synchronisiert
<br/>
-z=Kompression, je nach Datenmenge/-größe wird komprimiert
<br/>
--delete= Löscht Daten, die in der Quelle nicht mehr existieren, aber noch im Ziel vorhanden sind
<br/>
-e=Gibt den SSH-Port an (Standard 22)
<br/>
SSH-Key angeben (Pfad)("ssh -i /home/sshkey/keybackup")= ssh -i /[Pfad zum Key]
<br/>
Zu sicherndes Verzeichnis angeben (/home/client/)= /[Verzeichnis]
<br/>
RemoteHost(root@123.123.123.123:)= Login-Name des Nutzers auf dem RemoteHost und Adresse: name@IP/Domain
<br/>
Zielverzeichnis für die Daten auf dem RemoteHost(:/home/Backup/Home-Server1/)= :/[Pfad zum Zielverzeichnis]

## Schritt 5

Damit du den Befehl nicht immer manuell ausführen musst, kannst du ihn einfach in einen Cronjob packen.  
Zum Beispiel soll täglich um 3 Uhr morgens ein Backup erstellt werden: 

Öffne crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

Mit der Nummer 1 kannst du "nano" als Editor nutzen.
Mit der Nummer 2 kannst du "vim" als Editor nutzen.  

Nachdem die Datei z.B. mit Nano geöffnet wurde, kannst du einen Cronjob erstellen und eintragen.  
Einen Cronjob kannst du mit diesem [Generator](https://crontab-generator.org/) erstellen.  

Der eingetragene Cronjob sieht dann so aus: 
  
  
 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Jeden Tag um 3 Uhr morgens wird der Befehl ausgeführt und ein Backup erstellt. 

</TabItem>
</Tabs>