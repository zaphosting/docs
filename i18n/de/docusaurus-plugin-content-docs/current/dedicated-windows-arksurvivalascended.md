---
id: dedicated-windows-arksurvivalascended
title: "Dedicated Server: ARK Survival Ascended Dedicated Server Windows Setup"
description: "Entdecke, wie du einen ARK: Survival Ascended Dedicated Server auf deinem Windows VPS oder Dedicated Server schnell und einfach einrichtest → Jetzt mehr erfahren"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Windows VPS oder Dedicated Server und möchtest darauf den ARK: Survival Ascended Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server installierst.

<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/RpJWENYeqgTQaee/preview" title="ARK: Survival Ascended Dedicated Server Setup auf Windows VPS" description="Lernst du besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich erklärt. Egal ob du es eilig hast oder einfach lieber auf die spannendste Art und Weise Infos aufsaugst!"/>



## Vorbereitung

Zuerst verbinde dich per Remote Desktop (RDP) mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung.

Sobald du auf deinem Server bist, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien herunterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und das Tool, mit dem du einfach verschiedene Steam Workshop- und Dedicated Server-Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Webseite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Beispiel nennen wir ihn `steamcmd`. Gehe in deinen Downloads-Ordner, finde die gerade heruntergeladene **steamcmd.zip** und verschiebe sie in den `steamcmd`-Ordner. Entpacke die Datei jetzt per Rechtsklick mit der Windows-eigenen Entpackfunktion oder mit Programmen wie 7zip oder Winrar. Danach solltest du eine **steamcmd.exe** Datei entpackt haben.

Starte einfach **steamcmd.exe** und warte, bis der Installationsprozess vollständig abgeschlossen ist.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des ARK: Survival Ascended Dedicated Servers im nächsten Abschnitt weitermachen.

## Installation

Nach der Installation solltest du im **steamcmd.exe** Kommandozeilenfenster Befehle ausführen können. Melde dich zuerst mit dem Benutzer **anonymous** an, indem du folgenden Befehl eingibst: `login anonymous`

Sobald du eingeloggt bist, kannst du mit dem Download der Dateien starten.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen, wobei du `[Pfad]` durch den gewünschten Pfad für deinen Server ersetzt. Zum Beispiel: 
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

Starte nun den Download mit dem Befehl `app_update 2430930`. Die App-ID **2430930** steht für die **ARK: Survival Ascended Dedicated Server** Anwendung.

![](https://github.com/zaphosting/docs/assets/42719082/98d7c643-04be-488b-8831-86606363f98c)

:::info
Bitte unterbrich den Prozess nicht vor Abschluss, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

### Startdatei erstellen

Nachdem der Download erfolgreich abgeschlossen ist, navigiere in das Verzeichnis, in dem du die Installation durchgeführt hast, und gehe in den folgenden Unterordner:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

In diesem Unterordner musst du deine Startdatei erstellen, die zum Starten des Dedicated Servers benötigt wird. Erstelle eine Datei mit dem Namen: `start-ark.bat`. Du kannst zuerst ein Textdokument erstellen und es anschließend in `.bat` umbenennen.

:::info
Stelle sicher, dass in deinem Datei-Explorer die Option "Dateinamenerweiterungen anzeigen" aktiviert ist, damit die richtige Dateiendung verwendet wird.
:::

Öffne die Datei mit einem Texteditor (z.B. Notepad++) und füge folgenden Inhalt ein:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Ersetze in diesem Befehl `[server_name]`, `[admin_password]` und `[max_players]` durch deine gewünschten Werte.

Wenn du auch ein Passwort für normale Spieler einrichten möchtest, die deinem Server beitreten, kannst du `?ServerPassword=[join_password]` zum Befehl hinzufügen. Dann sieht der Befehl so aus:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerPassword=[join_password]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Stelle sicher, dass du die Variablen gesetzt hast und speichere die Datei, bevor du sie schließt.

Dein Server ist jetzt lokal über `127.0.0.1:7777` erreichbar, sobald du die Startdatei ausführst und der Server online ist. Damit dein Server aber öffentlich erreichbar ist, musst du noch Windows Firewall Portfreigaben einrichten, was im nächsten Abschnitt erklärt wird.

### Ports für deinen Server freigeben

Damit dein Server öffentlich erreichbar ist, musst du Portfreigaben für die Ports einrichten, die der Dedicated Server nutzt. Das kannst du entweder direkt über Powershell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Klicke mit Rechts und wähle **Als Administrator ausführen**, damit die nötigen Berechtigungen vorhanden sind und alles korrekt funktioniert.

:::info
Stelle sicher, dass du Powershell im Administrator-Modus ausführst, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge nun folgende Befehle in die Powershell ein:
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein Ark: Survival Ascended Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall-Seite öffnest, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen Ark: Survival Ascended Server anlegen. Klicke dazu auf Eingehende und Ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 27020
- UDP eingehend und ausgehend: 27015
- UDP eingehend und ausgehend: 7777-7778

Falls du dabei Hilfe brauchst, nutze unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung.

</TabItem>
</Tabs>

Nachdem du diese Regeln hinzugefügt hast, ist dein Server öffentlich erreichbar. Du kannst dich dann über die IP-Adresse deines Servers verbinden, indem du in der Ark: Survival Ascended Ingame-Konsole `open [deine_ip_adresse]:7777` eingibst.

Wir empfehlen dir, zuerst die Servereinstellungen zu konfigurieren, bevor du dich mit dem Server verbindest.

## Konfiguration

Bis hierhin hast du die Einrichtung deines Ark: Survival Ascended Dedicated Servers abgeschlossen. Weitere Serverkonfigurationen kannst du über zwei Konfigurationsdateien vornehmen, die im Serververzeichnis liegen.

Navigiere dazu in folgende Verzeichnisse:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

Hier findest du die Dateien **DefaultGameUserSettings.ini** und **GameUserSettings.ini**. In diesen Dateien kannst du viele Variablen und Optionen für deinen Server anpassen.


:::warning[CROSSPLAY SUPPORT]
Seit dem 18. November 2023 müssen Serverbetreiber manuell die Zertifikatswiderrufsliste installieren, die du unter https://dev.epicgames.com/ (oder direkt unter http://crl.r2m02.amazontrust.com/r2m02.crl) herunterladen kannst. Die heruntergeladene r2m02.crl Datei muss installiert werden (Rechtsklick auf die Datei) und dabei "Alle Zertifikate in folgendem Speicher ablegen" auswählen und "Vertrauenswürdige Stammzertifizierungsstellen" wählen. Ein Neustart des Systems kann erforderlich sein.

Falls vor dem 18. November 2023 die r2m02.cer Zertifikatsdatei installiert wurde und der Server nicht angezeigt wird, muss dieses Zertifikat entfernt werden, damit die Server wieder sichtbar sind. Öffne dazu (Windows + R) certmgr.msc und suche unter Vertrauenswürdige Stammzertifizierungsstellen nach Amazon RSA 2048 M02. Dasselbe gilt für certlm.msc. Abschließend kann ein Neustart des Systems nötig sein.
:::





## Server starten & verbinden

Jetzt wird es Zeit, deinen Server zu starten. Damit der Server erfolgreich startet, musst du vorher das [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) auf deinem Windows VPS installieren.

:::info
Du musst das [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) auf deinem Windows VPS installieren, bevor du versuchst, den Server zu starten, falls es noch nicht installiert ist, da es eine Abhängigkeit ist. Ohne diese Installation kann dein Server möglicherweise nicht starten.
:::

Nachdem du das installiert hast, kannst du den Server starten, indem du die zuvor erstellte **start-ark.bat** Datei ausführst.

Das öffnet die Server-Konsole in einem Kommandozeilenfenster und startet den Server. Wenn alles wie erwartet läuft, wird dein Server in der Serverliste angezeigt. Alternativ kannst du dich direkt verbinden, indem du in der Ingame-Konsole `open [deine_ip_adresse]:7777` eingibst.

Du hast Ark: Survival Ascended erfolgreich auf deinem Windows Dedicated Server installiert.