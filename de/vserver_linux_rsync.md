---
id: vserver_linux_rsync
title: Rsync Linux
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
![](https://screensaver01.zap-hosting.com/index.php/s/qJNwcR8yTnXHAbx/preview)

Nachdem es installiert wurde, kann es direkt genutzt werden. 

<!--DOCUSAURUS_CODE_TABS-->
<!--Tägliches Backup in ein lokales Verzeichnis/Laufwerk-->
## Schritt 2️⃣

In diesem Beispiel soll der Ordner "Client" unter /home in den Ordner "Backups" unter /home syncronsiert werden. 

![](https://screensaver01.zap-hosting.com/index.php/s/3QoJJacxBLrj6px/preview)

Das kann mit folgendem Befehl gemacht werden: 

```
rsync -arz /home/Client /home/Backup
```
a=Archivierung, die Attribute werden z.b übernommen
<br>
r=Rekursiv, Unterordner werden mit syncronisert
<br>
z=Komprimierung, je nach Datenmengen/Datengrößen wird komprimiert 

Der Ordner wurde erfolgreicht syncronisiert 

![](https://screensaver01.zap-hosting.com/index.php/s/mcHas3pPoDGrrHk/preview)

Wenn jetzt eine Datei etc. im Client Ordner gelöscht wird, so verbleibt sie weiterhin im Backup Ordner. 
Da die Date aber immer 1:1 syncron sein sollen, kann der rsync Befehl leicht abgeändert werden, diese Änderung sorgt dann dafür das Daten etc. die im Client Ordner nicht mehr vorhanden sind auch im Backup Ordner entfernt werden. 

Der leicht veränderte Befehl lautet: 

```
rsync -arz --delete /home/Client /home/Backup
```
a=Archivierung, die Attribute werden z.b übernommen
<br>
r=Rekursiv, Unterordner werden mit syncronisert
<br>
z=Komprimierung, je nach Datenmengen/Datengrößen wird komprimiert
<br>
--delete= Löscht Daten die in der Quelle nicht mehr vorhanden sind aber im Ziel noch bestehen

## Schritt 3️⃣

Damit der Befehl nicht immer manuell ausgeführt werden muss, kann dieser einfach in ein Cronjob gesetzt werden. 
Es soll z.b täglich um 3 Uhr Morgens ein Backup erstellt werden: 

Crontab -e öffnen: 

![](https://screensaver01.zap-hosting.com/index.php/s/GsPeM9xpWYbnWdZ/preview)

Mit der Ziffer 1 kann "nano" als Editor genutzt werden.
Mit der Ziffer 2 kann "vim" als Editor genutzt werden. 

Nachem die Datei z.b mit Nano geöffnet wurde, kann ein Crontab generiert und eingetragen werden. 
Ein Crontab kann z.b mit diesem [Generator](https://crontab-generator.org/) erstellt werden. 

Der eingetragene Crontab sieht dann wie folgt aus: 

![](https://screensaver01.zap-hosting.com/index.php/s/x3kKAXMxYYKHWqR/preview)

Jeden Tag um 3 Uhr morgens wird der Befehl ausgeführt und es wird ein Backup erstellt. 

<!--Tägliches Backup auf ein Remote System-->
## Schritt 2️⃣

In diesem Beispiel soll der Ordner "Client" unter /home in den Ordner "Backups" unter auf einem Remote System syncronsiert werden. 

![]https://screensaver01.zap-hosting.com/index.php/s/84yY84CAJE83aHo/preview)

>Wichtig: Auf dem Remote Server muss ebenfalls Rsync installiert sein. 

Das kann mit folgendem Befehl gemacht werden: 

```
rsync -arz /home/Client /home/Backup
```
a=Archivierung, die Attribute werden z.b übernommen
<br>
r=Rekursiv, Unterordner werden mit syncronisert
<br>
z=Komprimierung, je nach Datenmengen/Datengrößen wird komprimiert 

Der Ordner wurde erfolgreicht syncronisiert 

![](https://screensaver01.zap-hosting.com/index.php/s/mcHas3pPoDGrrHk/preview)

Wenn jetzt eine Datei etc. im Client Ordner gelöscht wird, so verbleibt sie weiterhin im Backup Ordner. 
Da die Date aber immer 1:1 syncron sein sollen, kann der rsync Befehl leicht abgeändert werden, diese Änderung sorgt dann dafür das Daten etc. die im Client Ordner nicht mehr vorhanden sind auch im Backup Ordner entfernt werden. 

Der leicht veränderte Befehl lautet: 

```
rsync -arz --delete /home/Client /home/Backup
```
a=Archivierung, die Attribute werden z.b übernommen
<br>
r=Rekursiv, Unterordner werden mit syncronisert
<br>
z=Komprimierung, je nach Datenmengen/Datengrößen wird komprimiert
<br>
--delete= Löscht Daten die in der Quelle nicht mehr vorhanden sind aber im Ziel noch bestehen

## Schritt 3️⃣

Damit der Befehl nicht immer manuell ausgeführt werden muss, kann dieser einfach in ein Cronjob gesetzt werden. 
Es soll z.b täglich um 3 Uhr Morgens ein Backup erstellt werden: 

Crontab -e öffnen: 

![](https://screensaver01.zap-hosting.com/index.php/s/GsPeM9xpWYbnWdZ/preview)

Mit der Ziffer 1 kann "nano" als Editor genutzt werden.
Mit der Ziffer 2 kann "vim" als Editor genutzt werden. 

Nachem die Datei z.b mit Nano geöffnet wurde, kann ein Crontab generiert und eingetragen werden. 
Ein Crontab kann z.b mit diesem [Generator](https://crontab-generator.org/) erstellt werden. 

Der eingetragene Crontab sieht dann wie folgt aus: 

![](https://screensaver01.zap-hosting.com/index.php/s/x3kKAXMxYYKHWqR/preview)

Jeden Tag um 3 Uhr morgens wird der Befehl ausgeführt und es wird ein Backup erstellt. 


<!--END_DOCUSAURUS_CODE_TABS-->
