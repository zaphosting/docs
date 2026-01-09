---
id: dedicated-windows-mythofempires
title: "Dedicated Server: Myth of Empires Dedicated Server Windows Setup"
description: "Entdecke, wie du schnell und einfach einen Myth of Empires Dedicated Server auf deinem Windows VPS einrichtest → Jetzt mehr erfahren"
sidebar_label: MOE Dedicated Server Setup
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Windows VPS und möchtest darauf einen MOE Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server einrichtest.

<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/T3jP36eWcQgTmNy/preview" title="How To Setup Myth Of Empires Server on Windows VPS!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich erklärt. Egal ob du es eilig hast oder einfach lieber auf die spannendste Art lernst!"/>



## Vorbereitung
Verbinde dich zunächst per Remote Desktop (RDP) mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung.

Sobald du Zugriff auf deinen Server hast, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien herunterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und das Tool, mit dem du einfach verschiedene Steam Workshop- und Dedicated Server-Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Seite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Beispiel nennen wir ihn `steamcmd`. Gehe in deinen Downloads-Ordner, finde die gerade heruntergeladene **steamcmd.zip** Datei und verschiebe sie in deinen `steamcmd` Ordner. Entpacke die Datei jetzt per Rechtsklick mit der Windows-eigenen Entpackfunktion oder mit Programmen wie 7zip oder WinRAR. Am Ende solltest du eine **steamcmd.exe** Datei entpackt haben.

Starte einfach **steamcmd.exe** und warte, bis der Installationsprozess vollständig abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des MOE Dedicated Servers im nächsten Abschnitt starten.

## Installation

Nach der Installation solltest du Befehle im **steamcmd.exe** Kommandozeilenfenster ausführen können, das du zuvor gestartet hast. Du musst dich zuerst anmelden, bevor du irgendwas machen kannst, und zwar als **anonymous** User mit dem Befehl: `login anonymous`

Nach dem Login kannst du jetzt mit dem Download der Dateien beginnen.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen, wobei du `[Pfad]` durch den gewünschten Pfad für deinen Server ersetzt. Zum Beispiel: 
```
force_install_dir C:\MOE-Server
```
:::
 
Führe nun den Befehl `app_update 1794810` aus, um den Download zu starten. Die App-ID **1794810** steht für die **MOE** Anwendung.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Bitte unterbrich den Prozess nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

Nach erfolgreichem Download gehst du in das Verzeichnis, in das alle Serverdateien geladen wurden.

### Zugriff auf das PrivateServerTool

Im Gegensatz zu typischen SteamCMD-Installationen benötigt MOE, dass du einen Ordner aus deiner lokalen Steam-Spielinstallation kopierst, um den Server unter Windows starten zu können.

Öffne Steam auf deinem System, klicke mit der rechten Maustaste auf dein **Myth of Empires** Spiel und wähle **Lokale Dateien durchsuchen** im Bereich **Verwalten**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Im geöffneten Hauptordner findest du den Ordner **PrivateServerTool**. Diesen Ordner musst du auf deinen Server kopieren. Das geht ganz einfach mit `STRG+C` auf deinem lokalen PC und `STRG+V` auf deinem Windows Server via RDP. Achte darauf, ihn im Root-Verzeichnis deines Dedicated Servers einzufügen.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

Als Nächstes geht’s weiter mit dem Portforwarding und der Serverkonfiguration.

### Portfreigabe für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du Portfreigabe-Regeln für die Ports anlegen, die der Dedicated Server nutzt. Das kannst du entweder direkt per Powershell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Klicke mit Rechts und wähle **Als Administrator ausführen**, damit die nötigen Rechte vorhanden sind und alles reibungslos funktioniert.

:::info
Stelle sicher, dass du die Powershell im Administrator-Modus startest, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge nun die folgenden Befehle in die Powershell ein:
```
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein MOE Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall-Seite siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Du musst neue Regeln für deinen MOE Server anlegen. Klicke dazu auf die eingehenden und ausgehenden Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 11888, 12888
- UDP eingehend und ausgehend: 11888, 12888

Falls du dabei Hilfe brauchst, schau dir unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung an.

</TabItem>
</Tabs>

Bevor du deinen Server startest, geht’s weiter mit der Konfiguration.

## Konfiguration

Jetzt nutzt du das Server-Tool aus dem Ordner, den du zuvor aus deinen Spieldateien kopiert hast, um deine Konfigurationsdatei und die Start-`.bat` Datei zu erstellen, mit der du deinen Server startest.

Navigiere in folgendes Verzeichnis (den Ordner, den du kopiert hast):
```
../MOE/PrivateServerTool
```

Starte in diesem Ordner die **PrivateServerTool.exe**. Mit diesem Tool kannst du die Serveroptionen nach deinen Wünschen einstellen, inklusive Mods, Spieleinstellungen und mehr.

Wir empfehlen, zumindest die Grundparameter wie **Servername** einzustellen, bevor du weitermachst.

Wenn du fertig bist, geh einfach zum Tab **Start Console** im Tool und klicke zuerst auf **Save Config** und danach auf **Start Server**. Dadurch wird die `StartPrivateServer.bat` Datei generiert, mit der du deinen Server startest.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

Wir empfehlen, eine Verknüpfung zur `StartPrivateServer.bat` Datei zu erstellen, indem du mit Rechts klickst und **Verknüpfung erstellen** wählst. So kannst du den Server später leichter starten.

:::note
Möglicherweise musst du den Pfad zu deinem Spielordner in der automatisch generierten `StartPrivateServer.bat` Datei anpassen. Öffne die Datei einfach mit einem Editor wie Notepad und überprüfe, ob der Pfad am Anfang der Datei mit dem Pfad deines Servers übereinstimmt.

Falls der Pfad nicht stimmt, kannst du im Root-Ordner deines MOE Dedicated Servers oben in der Adressleiste doppelklicken, um den aktuellen Pfad zu kopieren, und ihn dann an der richtigen Stelle in der Datei einfügen.
:::

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Gehe in das Verzeichnis deines Myth of Empires Servers und starte die **StartPrivateServer.bat** (oder die Verknüpfung, falls du eine erstellt hast). Dadurch öffnet sich die Server-Konsole in einem Kommandozeilenfenster und der Startvorgang beginnt. Du kannst dich jetzt direkt mit deinem Server verbinden, indem du im Spiel auf den Tab **Custom Server** gehst und deinen Server über die Suchfunktion findest.

:::tip
Falls du Probleme hast, dich mit dem Server zu verbinden, öffne die `StartPrivateServer.bat` Datei mit einem Editor wie Notepad und überprüfe, ob die beiden IP-Parameter mit der IP deines Windows Servers übereinstimmen. Das sollte eigentlich automatisch vom Tool gesetzt werden, ist aber ein guter Troubleshooting-Schritt.
:::

Du hast Myth of Empires erfolgreich auf deinem Windows Dedicated Server installiert.