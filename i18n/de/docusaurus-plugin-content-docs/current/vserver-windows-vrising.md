---
id: vserver-windows-vrising
title: "vServer: V-Rising Dedicated Server Windows Setup"
description: "Entdecke, wie du einen V Rising Dedicated Windows Server für optimale Gaming-Performance und reibungsloses Server mieten einrichtest → Jetzt mehr erfahren"
sidebar_label: V-Rising
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qnEwRNpMmo3JzQq/preview" title="How to setup a V RISING Dedicated Windows Server!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Tauche ein in unser Video, das alles für dich erklärt. Egal ob du es eilig hast oder Infos am liebsten auf die spannendste Art aufsaugst!"/>
<InlineVoucher />

## Grundlegende Infos:  
Ein Server basierend auf Windows Server 2016/2019 mit mindestens 4x 2,4 GHz CPU (AMD/Intel) und mindestens 4GB RAM (DDR3/4) sowie 6GB freiem Speicher (SSD oder besser, bevorzugt) wird benötigt. Der Server muss auf 64-Bit-Architektur laufen.

## Schritt 1: Erstelle einen Ordner für V-Rising

Zuerst musst du dich per [Initial Access (RDP)](vserver-windows-userdp.md) mit deinem Server verbinden. Sobald du verbunden bist, erstellst du einen neuen Ordner auf deinem Server, in dem die Dateien für V-Rising installiert werden.
In diesem Beispiel erstellen wir den Ordner auf dem Desktop.
Das geht mit einem Rechtsklick.
Dann wählst du "Neu -> Ordner".

![](https://screensaver01.zap-hosting.com/index.php/s/wgf8ckdTgiQ9wAq/preview)

Du kannst den Ordner beliebig benennen. Wir nennen ihn hier "VRising".

## Schritt 2: Lade SteamCMD auf deinen Windows Server herunter

Öffne den Browser und gehe zum [Link](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Damit lädst du SteamCMD für Windows auf deinen Server.

![](https://screensaver01.zap-hosting.com/index.php/s/7HE5smMXq6mEetw/preview)

Die Datei wird dann heruntergeladen und sollte im Download-Ordner liegen. (Der Download-Ordner kann variieren)

![](https://screensaver01.zap-hosting.com/index.php/s/eEsyPe9J8KWGRMs/preview)

Zur besseren Übersicht kopieren wir die steamcmd.zip Datei in den VRising-Ordner, den wir zuvor auf dem Desktop erstellt haben.
Dafür klickst du die Datei an und drückst "STRG+C".
Dann öffnest du den VRising-Ordner auf dem Desktop und drückst "STRG+V".
Jetzt siehst du die Datei im VRising-Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/rNCZB7NDYkqDxrm/preview)

Mach jetzt einen Rechtsklick auf die steamcmd.zip Datei und wähle "Alle extrahieren". Bestätige die Meldung mit Klick auf "Extrahieren".

![](https://screensaver01.zap-hosting.com/index.php/s/RSQReHkc3SYbzNS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yaw87p2bcmFe9z6/preview)

Wenn das erledigt ist, mach einen Doppelklick auf die steamcmd Datei.
Ein neues Fenster öffnet sich und installiert die SteamCMD-Dateien.

![](https://screensaver01.zap-hosting.com/index.php/s/R7Xm4tSLfEBqboD/preview)

## Schritt 3: Lade die V Rising Dateien herunter

Sobald die SteamCMD-Dateien installiert sind, siehst du dieses Fenster.

![](https://screensaver01.zap-hosting.com/index.php/s/DjaZjaqM8tFZzCj/preview)

Jetzt gibst du den Pfad an, wo die Dateien heruntergeladen werden sollen.
Das machst du mit dem Befehl "force_install_dir".
Der komplette Befehl in unserem Beispiel lautet:
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/EFdLWdJ5Ypym3Ym/preview)

Danach musst du dich als anonymer User einloggen.
Dafür gibst du "login anonymous" ein.

![](https://screensaver01.zap-hosting.com/index.php/s/SN8qqRPezLDEF3Q/preview)

Jetzt kannst du endlich die Dateien herunterladen.
Dafür nutzt du diesen Befehl:
app_update 1829350 validate

Die Dateien werden jetzt geladen.
Das kann ein paar Minuten dauern.

![](https://screensaver01.zap-hosting.com/index.php/s/S5cwykrPq6bYyrG/preview)

Wenn der Prozess abgeschlossen ist, findest du alle Dateien im VRising-Ordner auf deinem Server.

![](https://screensaver01.zap-hosting.com/index.php/s/8PwswWgB8BxwECL/preview)

## Schritt 4: Starte und konfiguriere den V Rising Server

Du kannst die start_server_example.bat Datei bearbeiten, um ein paar Einstellungen zu ändern.
Dafür machst du einen Rechtsklick auf die Datei und wählst "Bearbeiten".
Du kannst den Servernamen und den Pfad, wo der Prozess gespeichert werden soll, anpassen.

![](https://screensaver01.zap-hosting.com/index.php/s/PFDkyayBtSBoEFa/preview)

Weitere Änderungen kannst du in den Konfigurationsdateien vornehmen.
Die findest du im Verzeichnis VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/jQWy34tbPTEtcc9/preview)

In der ServerHostSettings.json Datei kannst du allgemeine Einstellungen machen.
Zum Beispiel Ports definieren, eine Serverbeschreibung, das SaveInterval und das Gameserver-Passwort.
Ich habe den Servernamen dort auf "ZAP-Hosting Test Server" geändert.

Um den Server zu starten, machst du einen Doppelklick auf die start_server_example.bat Datei.

![](https://screensaver01.zap-hosting.com/index.php/s/nSqbQQb3pHXnWmZ/preview)

Der Startvorgang dauert eine Weile.
Wenn die Ports richtig weitergeleitet wurden, findest du den Server in der Serverliste.

![](https://screensaver01.zap-hosting.com/index.php/s/TajWHXtRCLEeRKf/preview)

## Schritt 5: Ports in der Firewall freischalten

Der Server sollte natürlich öffentlich erreichbar sein, um mit Freunden zu zocken. Dafür müssen die Ports des Servers in der Windows-Firewall freigegeben werden. Die Ports 9876 und 9877 müssen für das Protokoll TCP UND UDP freigegeben werden. 9876 ist der Gameserver-Port und 9877 der Query-Port.
Wie du Ports unter Windows freigibst, erfährst du in unserer Anleitung [Port Forwarding (Firewall)](vserver-windows-port.md).

Nach der Portfreigabe ist der Server öffentlich erreichbar, sofern er gestartet wurde.

## Fazit

Glückwunsch, du hast V-Rising erfolgreich auf deinem VPS installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Seite und hilft dir gerne weiter!

<InlineVoucher />