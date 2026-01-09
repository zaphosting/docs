---
id: vserver-windows-arksurvivalascended
title: "vServer: ARK Survival Ascended Dedicated Server Windows Setup"
description: "Entdecke, wie du einen ARK: Survival Ascended Dedicated Server auf einem Windows VPS für flüssiges Gameplay und volle Serverkontrolle einrichtest → Jetzt mehr erfahren"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Windows VPS und möchtest den ARK: Survival Ascended Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server einrichtest.
<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Sa76nDiSmQKx7x2/preview" title="ARK: Survival Ascended Dedicated Server Setup auf Windows VPS" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich erklärt. Egal ob du es eilig hast oder einfach lieber auf unterhaltsame Weise lernst!"/>
<InlineVoucher />

## Vorbereitung

Zuerst verbinde dich per Remote Desktop (RDP) mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung.

Sobald du Zugriff auf deinen Server hast, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien herunterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und ermöglicht dir, einfach Steam Workshop und Dedicated Server Dateien zu laden. Lade [SteamCMD von der offiziellen Valve-Seite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, wir nennen ihn hier `steamcmd`. Gehe in deinen Downloads-Ordner, finde die gerade heruntergeladene **steamcmd.zip** und verschiebe sie in den `steamcmd`-Ordner. Entpacke die Datei per Rechtsklick mit der Windows-Entpackfunktion oder Tools wie 7zip oder Winrar. Danach solltest du eine **steamcmd.exe** Datei im Ordner haben.

Starte einfach **steamcmd.exe** und warte, bis die Installation komplett abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des ARK: Survival Ascended Dedicated Servers im nächsten Abschnitt weitermachen.

## Installation

Nach der Installation solltest du im **steamcmd.exe** Kommandozeilenfenster Befehle ausführen können. Melde dich zuerst mit dem Benutzer **anonymous** an, indem du folgenden Befehl eingibst: `login anonymous`

Nach dem Login kannst du mit dem Download der Dateien starten.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen, wobei du `[Pfad]` durch den gewünschten Pfad für deinen Server ersetzt. Beispiel:
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

Starte nun den Download mit dem Befehl `app_update 2430930`. Die App-ID **2430930** steht für den **ARK: Survival Ascended Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/DSMpETJYtkciNHT/preview)

:::info
Bitte unterbrich den Vorgang nicht vor Abschluss, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

### Startdatei erstellen

Nach erfolgreichem Download navigiere in das Installationsverzeichnis und öffne folgenden Unterordner:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

Hier musst du eine Startdatei erstellen, die zum Starten des Dedicated Servers benötigt wird. Erstelle eine Datei mit dem Namen: `start-ark.bat`. Du kannst zuerst ein Textdokument anlegen und es dann in `.bat` umbenennen.

:::info
Stelle sicher, dass in deinem Datei-Explorer die Option "Dateinamenerweiterungen anzeigen" aktiviert ist, damit die Datei die richtige Endung bekommt.
:::

Öffne die Datei mit einem Texteditor (z.B. Notepad++) und füge folgenden Inhalt ein:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Ersetze in diesem Befehl `[server_name]`, `[admin_password]` und `[max_players]` durch deine gewünschten Werte.

Wenn du auch ein Passwort für normale Spieler setzen möchtest, füge `?ServerPassword=[join_password]` hinzu. Dann sieht der Befehl so aus:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerPassword=[join_password]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Speichere die Datei nach dem Anpassen der Variablen.

Dein Server ist lokal über `127.0.0.1:7777` erreichbar, sobald du die Startdatei ausführst und der Server online ist. Damit der Server aber öffentlich erreichbar ist, musst du noch Windows Firewall Portfreigaben einrichten, was im nächsten Abschnitt erklärt wird.

### Ports für deinen Server freigeben

Damit dein Server öffentlich erreichbar ist, musst du die Portfreigaben für die vom Dedicated Server genutzten Ports anpassen. Das kannst du entweder direkt per Powershell machen (einfacher) oder über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Per Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Rechtsklick und **Als Administrator ausführen** wählen, damit die nötigen Rechte vorhanden sind.

:::info
Achte darauf, die Powershell im Administrator-Modus zu starten, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge folgende Befehle in die Powershell ein:
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die nötigen Firewall-Regeln, damit dein ARK: Survival Ascended Server öffentlich erreichbar ist.

</TabItem>

<TabItem value="windefender" label="Per Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Erstelle neue Regeln für deinen ARK: Survival Ascended Server. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 27020
- UDP eingehend und ausgehend: 27015
- UDP eingehend und ausgehend: 7777-7778

Falls du Hilfe brauchst, nutze unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung.

</TabItem>
</Tabs>

Nachdem du die Regeln hinzugefügt hast, ist dein Server öffentlich erreichbar. Du kannst dich dann über die IP-Adresse deines Servers verbinden, indem du in der ARK: Survival Ascended Ingame-Konsole `open [deine_ip_adresse]:7777` eingibst.

Wir empfehlen dir, zuerst die Servereinstellungen zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines ARK: Survival Ascended Dedicated Servers abgeschlossen. Weitere Einstellungen kannst du über zwei Konfigurationsdateien im Serververzeichnis vornehmen.

Navigiere dazu in folgende Ordner:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

Hier findest du die Dateien **DefaultGameUserSettings.ini** und **GameUserSettings.ini**. In diesen kannst du viele Variablen und Optionen für deinen Server anpassen.

:::warning[CROSSPLAY SUPPORT]
Seit dem 18. November 2023 müssen Serverbesitzer manuell die Zertifikatswiderrufsliste installieren, die du unter https://dev.epicgames.com/ (oder direkt unter http://crl.r2m02.amazontrust.com/r2m02.crl) herunterladen kannst. Die heruntergeladene r2m02.crl Datei muss installiert werden (Rechtsklick auf die Datei) und dabei "Alle Zertifikate in folgendem Speicher ablegen" auswählen und "Vertrauenswürdige Stammzertifizierungsstellen" wählen. Ein Neustart des Systems kann erforderlich sein.

Falls vor dem 18. November 2023 das Zertifikat r2m02.cer installiert wurde und der Server nicht angezeigt wird, muss dieses Zertifikat entfernt werden, damit die Server wieder sichtbar sind. Öffne dazu (Windows + R) certmgr.msc und suche unter Vertrauenswürdige Stammzertifizierungsstellen nach Amazon RSA 2048 M02. Dasselbe gilt für certlm.msc. Abschließend kann ein Neustart nötig sein.
:::





## Server starten & verbinden

Jetzt kannst du deinen Server starten. Damit der Server erfolgreich startet, musst du vorher [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) auf deinem Windows VPS installieren.

:::info
Installiere unbedingt [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) auf deinem Windows VPS, bevor du versuchst, den Server zu starten. Es ist eine wichtige Abhängigkeit und ohne kann dein Server nicht starten.
:::

Nachdem du das installiert hast, kannst du den Server starten, indem du die zuvor erstellte **start-ark.bat** Datei ausführst.

Das öffnet die Server-Konsole in einem Kommandozeilenfenster und startet den Server. Wenn alles klappt, erscheint dein Server in der Serverliste. Alternativ kannst du dich direkt verbinden, indem du in der Ingame-Konsole `open [deine_ip_adresse]:7777` eingibst.

## Fazit

Glückwunsch, du hast deinen ARK-Survival-Ascended Server erfolgreich auf deinem VPS installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />