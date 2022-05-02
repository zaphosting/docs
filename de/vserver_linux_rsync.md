---
id: vserver_linux_rsync
title: vServer: Backups von Linux Server mit Rsync anfertigen
description: Informationen, wie du mit Rsync Backups von deinem Linux vServer von ZAP-Hosting anfertigen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Rsync Linux
---

## Rsync:

Mit Hilfe von Rsync können Backups angefertigt werden. 
Sie können auf dem lokalen System selber z.b in ein anderes Verzeichnis/Laufwerk kopiert werden oder auf ein Remote System. 

## Kopieren von Daten in ein anderes lokales Verzeichnis oder Laufwerk:

>Achtung: Der erste Durchgang kann je nach Datenmenge deutlich länger dauern als weitere. Dies liegt daran das Rsync beim ersten mal alle Daten syncronsiert, ab dem zweiten Mal werden nur noch veränderte Daten syncronsiert. 
>Es wird also dann ein inkrementelles Backup erstellt. 

## Schritt 1️⃣:

Rsync kann mit folgendem Befehl installiert werden: 

```
apt install rsync
```

Nachdem es installiert wurde, kann es direkt genutzt werden. 

<!--DOCUSAURUS_CODE_TABS-->
<!--Tägliches Backup in ein lokales Verzeichnis/Laufwerk-->
## Schritt 2️⃣

In diesem Beispiel soll der Ordner "Client" unter /home in den Ordner "Backups" unter /home syncronsiert werden. 

Das kann mit folgendem Befehl gemacht werden: 

```
rsync -arz /home/Client /home/Backup
```
-a=Archivierung, die Attribute werden z.b übernommen
<br>
-r=Rekursiv, Unterordner werden mit syncronisert
<br>
-z=Komprimierung, je nach Datenmengen/Datengrößen wird komprimiert 

Der Ordner wurde erfolgreicht syncronisiert 


Wenn jetzt eine Datei etc. im Client Ordner gelöscht wird, so verbleibt sie weiterhin im Backup Ordner. 
Da die Date aber immer 1:1 syncron sein sollen, kann der rsync Befehl leicht abgeändert werden, diese Änderung sorgt dann dafür das Daten etc. die im Client Ordner nicht mehr vorhanden sind auch im Backup Ordner entfernt werden. 

Der leicht veränderte Befehl lautet: 

```
rsync -arz --delete /home/Client /home/Backup
```
-a=Archivierung, die Attribute werden z.b übernommen
<br>
-r=Rekursiv, Unterordner werden mit syncronisert
<br>
-z=Komprimierung, je nach Datenmengen/Datengrößen wird komprimiert
<br>
--delete= Löscht Daten die in der Quelle nicht mehr vorhanden sind aber im Ziel noch bestehen

## Schritt 3️⃣

Damit der Befehl nicht immer manuell ausgeführt werden muss, kann dieser einfach in ein Cronjob gesetzt werden. 
Es soll z.b täglich um 3 Uhr Morgens ein Backup erstellt werden: 

Crontab -e öffnen: 

![](https://user-images.githubusercontent.com/61839701/166191606-3a05da59-82f7-439f-8f44-b94c4ba9d153.png)

Mit der Ziffer 1 kann "nano" als Editor genutzt werden.
Mit der Ziffer 2 kann "vim" als Editor genutzt werden. 

Nachem die Datei z.b mit Nano geöffnet wurde, kann ein Crontab generiert und eingetragen werden. 
Ein Crontab kann z.b mit diesem [Generator](https://crontab-generator.org/) erstellt werden. 

Der eingetragene Crontab sieht dann wie folgt aus: 

![](https://user-images.githubusercontent.com/61839701/166191631-eb85e52c-a872-441a-8713-dfc730f9a689.png)

Jeden Tag um 3 Uhr morgens wird der Befehl ausgeführt und es wird ein Backup erstellt. 

<!--Tägliches Backup auf ein Remote System-->
## Schritt 2️⃣

In diesem Beispiel soll der Ordner "Client" unter /home in den Ordner "Backups" unter auf einem Remote System syncronsiert werden. Die Verbindung soll via SSH Key erfolgen, damit eine Sicherung ebenfalls automatisiert erfolgen kann.  

>Wichtig: Auf dem Remote Server muss ebenfalls Rsync installiert sein. 
>```
>apt install rsync
>````

Mit folgendem Befehl können z.b die Daten gesichert werden auf den Remote Host (Eigene Anpassung notwendig): 

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=Archivierung, die Attribute werden z.b übernommen
<br>
-r=Rekursiv, Unterordner werden mit syncronisert
<br>
-z=Komprimierung, je nach Datenmengen/Datengrößen wird komprimiert 
<br>
-e=Gibt denn SSH Port 22 an
SSH Key angeben (Pfad)("ssh -i /home/sshkey/keybackup")= ssh -i /<Pfad zum Key>
Zu sicherendes Verzeichnis angeben (/home/Client/)= /<Verzeichnis>
RemoteHost(root@123.123.123.123:)= Login Name des Benutzers auf dem RemoteHost sowie Adresse angeben: name@IP/Domain
Ziel Verzeichnis für die Daten auf dem RemoteHost(:/home/Backup/Home-Server1/)= :/<Pfad-zum-Ziel-Verzeichnis>

Wenn jetzt eine Datei etc. im Client Ordner gelöscht wird, so verbleibt sie weiterhin im Backup Ordner auf dem Remote Host. 
Da die Date aber immer 1:1 syncron sein sollen, kann der rsync Befehl leicht abgeändert werden, diese Änderung sorgt dann dafür das Daten etc. die im Client Ordner nicht mehr vorhanden sind auch im Backup Ordner auf dem Remote Host entfernt werden. 

Der leicht veränderte Befehl lautet: 

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=Archivierung, die Attribute werden z.b übernommen
<br>
-r=Rekursiv, Unterordner werden mit syncronisert
<br>
-z=Komprimierung, je nach Datenmengen/Datengrößen wird komprimiert 
<br>
--delete= Löscht Daten die in der Quelle nicht mehr vorhanden sind aber im Ziel noch bestehen
<br>
-e=Gibt denn SSH Port 22 an
<br>
SSH Key angeben (Pfad)("ssh -i /home/sshkey/keybackup")= ssh -i /<Pfad zum Key>
<br>
Zu sicherendes Verzeichnis angeben (/home/Client/)= /<Verzeichnis>
<br>
RemoteHost(root@123.123.123.123:)= Login Name des Benutzers auf dem RemoteHost sowie Adresse angeben: name@IP/Domain
<br>
Ziel Verzeichnis für die Daten auf dem RemoteHost(:/home/Backup/Home-Server1/)= :/<Pfad-zum-Ziel-Verzeichnis>

## Schritt 3️⃣

Damit der Befehl nicht immer manuell ausgeführt werden muss, kann dieser einfach in ein Cronjob gesetzt werden. 
Es soll z.b täglich um 3 Uhr Morgens ein Backup erstellt werden: 

Crontab -e öffnen: 

![](https://user-images.githubusercontent.com/61839701/166191606-3a05da59-82f7-439f-8f44-b94c4ba9d153.png)

Mit der Ziffer 1 kann "nano" als Editor genutzt werden.
Mit der Ziffer 2 kann "vim" als Editor genutzt werden. 

Nachem die Datei z.b mit Nano geöffnet wurde, kann ein Crontab generiert und eingetragen werden. 
Ein Crontab kann z.b mit diesem [Generator](https://crontab-generator.org/) erstellt werden. 

Der eingetragene Crontab sieht dann wie folgt aus: 

![](https://user-images.githubusercontent.com/61839701/166191631-eb85e52c-a872-441a-8713-dfc730f9a689.png)

Jeden Tag um 3 Uhr morgens wird der Befehl ausgeführt und es wird ein Backup erstellt. 

<!--END_DOCUSAURUS_CODE_TABS-->
