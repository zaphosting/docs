---
id: dedicated-windows-vrising
title: "Dedicated Server: V-Rising Dedicated Server Windows Setup"
description: "Entdecke, wie du einen V Rising Dedicated Windows Server für optimale Gaming-Performance und Serververwaltung einrichtest → Jetzt mehr erfahren"
sidebar_label: V-Rising
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/yCRYqJAjTTp4YFf/preview" title="How to setup a V RISING Dedicated Windows Server!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich erklärt. Egal ob du es eilig hast oder einfach lieber auf die spannendste Art lernst!"/>



## Grundlegende Infos: 
Ein Server basierend auf Windows Server 2016/2019 mit mindestens 4x 2,4 GHz CPU (AMD/Intel) und mindestens 4GB RAM (DDR3/4) sowie 6GB freiem Speicherplatz (SSD oder besser, bevorzugt) wird benötigt. Der Server muss auf 64-Bit-Architektur laufen. 

## Schritt 1 Erstelle einen Ordner für V-Rising

Zuerst musst du dich per [Initial Access (RDP)](vserver-windows-userdp.md) mit deinem Server verbinden. Sobald du verbunden bist, erstellst du einen neuen Ordner auf deinem Server, in dem die Dateien für V-Rising installiert werden.
In diesem Beispiel erstellen wir einen neuen Ordner auf unserem Desktop.
Das geht mit einem Rechtsklick.
Dann wählst du "Neu -> Ordner".

![](https://screensaver01.zap-hosting.com/index.php/s/SzB3TgsSkHRAaAB/preview)

Du kannst ihn nennen, wie du willst. In unserem Beispiel nennen wir ihn "VRising".

## Schritt 2 Lade SteamCMD auf deinen Windows Server

Öffne den Browser und gehe zum [Link](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Damit lädst du SteamCMD für Windows auf deinen Server herunter.

![](https://screensaver01.zap-hosting.com/index.php/s/oHSse2fToxxTpCt/preview)

Die Datei wird dann heruntergeladen und sollte im Download-Verzeichnis liegen. (Das Download-Verzeichnis kann variieren)

![](https://screensaver01.zap-hosting.com/index.php/s/35r8Dm49xcdwfq4/preview)

Zur besseren Übersicht kopieren wir die steamcmd.zip Datei in den VRising-Ordner, den wir vorher auf dem Desktop erstellt haben.
Dafür klickst du auf die Datei und drückst die Tastenkombination "STRG+C".
Dann öffnest du den VRising-Ordner auf dem Desktop und drückst "STRG+V".
Jetzt siehst du die Datei im VRising-Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/kKGt3gy2yDQXSLx/preview)

Mach jetzt einen Rechtsklick auf die steamcmd.zip Datei und wähle "Alle extrahieren". Bestätige die folgende Meldung mit Klick auf den Extrahieren-Button.

![](https://screensaver01.zap-hosting.com/index.php/s/SHsNeRy4RbEenDX/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/y5ef3ncPgYMTzFw/preview)

Sobald das erledigt ist, mach einen Doppelklick auf die steamcmd Datei.
Ein neues Fenster öffnet sich und installiert die SteamCMD-Dateien.

![](https://screensaver01.zap-hosting.com/index.php/s/TC2KAbWaCHEeZiF/preview)

## Schritt 3 Lade die V Rising Dateien herunter

Nachdem die SteamCMD-Dateien installiert wurden, siehst du dieses Fenster.

![](https://screensaver01.zap-hosting.com/index.php/s/GAb4TgCNbpiW2F2/preview)

Jetzt gibst du den Ort an, an dem die Dateien heruntergeladen werden sollen.
Das machst du mit dem Befehl "force_install_dir".
Der komplette Befehl in unserem Beispiel lautet:
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/DeNFAWGLLnKq7pr/preview)

Danach musst du dich als anonymer User einloggen.
Dafür gibst du "login anonymous" ein.

![](https://screensaver01.zap-hosting.com/index.php/s/pq74iCW6E2k8Sid/preview)

Sobald das erledigt ist, kannst du endlich die Dateien herunterladen.
Dafür nutzt du diesen Befehl:
app_update 1829350 validate

Die Dateien werden jetzt heruntergeladen.
Das kann ein paar Minuten dauern.

![](https://screensaver01.zap-hosting.com/index.php/s/6XX8wtekd89PJec/preview)

Wenn der Vorgang abgeschlossen ist, findest du alle Dateien im VRising-Ordner auf deinem Server.

![](https://screensaver01.zap-hosting.com/index.php/s/y9Gx9ANEpgbpESy/preview)

## Schritt 4 Starte und konfiguriere den V Rising Server

Du kannst die start_server_example.bat Datei bearbeiten, um ein paar Einstellungen zu ändern.
Dafür machst du einen Rechtsklick auf die Datei und wählst "Bearbeiten".
Du kannst den Namen des Servers und den Pfad, in dem der Prozess gespeichert werden soll, anpassen.

![](https://screensaver01.zap-hosting.com/index.php/s/zpEw92o7eQG9P2a/preview)

Weitere Änderungen kannst du in den Konfigurationsdateien vornehmen.
Diese findest du im Verzeichnis VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/9TtQm6Yp8g3y5HH/preview)

In der ServerHostSettings.json Datei kannst du allgemeine Einstellungen vornehmen.
Zum Beispiel Ports definieren, eine Serverbeschreibung, das SaveInterval und das Gameserver-Passwort.
Ich habe dort den Servernamen auf "ZAP-Hosting Test Server" geändert.

Um den Server zu starten, machst du einen Doppelklick auf die start_server_example.bat Datei.

![](https://screensaver01.zap-hosting.com/index.php/s/gzs85C4HRy9MPTy/preview)

Der Startvorgang dauert eine Weile.
Wenn die Ports im nächsten Schritt korrekt freigegeben wurden, findest du den Server in der Serverliste.

![](https://screensaver01.zap-hosting.com/index.php/s/S9mM8KNzsFARmQW/preview)

## Schritt 5 Ports in der Firewall freigeben

Der Server sollte natürlich öffentlich erreichbar sein, um mit Freunden zu zocken. Dafür müssen die Ports des Servers in der Windows-Firewall freigegeben werden. Die Ports 9876 und 9877 müssen für das Protokoll TCP UND UDP freigegeben werden. 9876 ist der Gameserver-Port und 9877 der Query-Port.
Wie du Ports unter Windows freigibst: [Portfreigabe (Firewall)](vserver-windows-port.md). 

Nach der Portfreigabe ist der Server öffentlich erreichbar, sofern er gestartet wurde. 


