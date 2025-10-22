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

<InlineVoucher />

## Vorbereitung
Verbinde dich zunächst per Remote Desktop (RDP) mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [Erstanmeldung (RDP)](vserver-windows-userdp.md) Anleitung.

Sobald du Zugriff auf deinen Server hast, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien herunterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und das Tool, mit dem du einfach verschiedene Steam Workshop- und Dedicated Server Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Webseite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Beispiel nennen wir ihn `steamcmd`. Gehe in deinen Downloads-Ordner, finde die gerade heruntergeladene **steamcmd.zip** Datei und verschiebe sie in deinen `steamcmd` Ordner. Entpacke die Datei jetzt per Rechtsklick mit der Windows-Entpackfunktion oder einem Programm wie 7zip oder WinRAR. Dadurch wird die **steamcmd.exe** Datei entpackt.

Starte einfach **steamcmd.exe** und warte, bis der Installationsprozess vollständig abgeschlossen ist.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des MOE Dedicated Servers im nächsten Abschnitt starten.

## Installation

Nach der Installation solltest du Befehle im **steamcmd.exe** Kommandozeilenfenster ausführen können. Melde dich zuerst mit dem Benutzer **anonymous** an, indem du folgenden Befehl eingibst: `login anonymous`

Nach dem Login kannst du mit dem Herunterladen der Dateien beginnen.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen, wobei du `[Pfad]` durch den gewünschten Pfad für deinen Server ersetzt. Zum Beispiel: 
```
force_install_dir C:\MOE-Server
```
:::
 
Starte nun den Download mit dem Befehl `app_update 1794810`. Die App-ID **1794810** steht für die **MOE** Anwendung.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Bitte unterbrich den Prozess nicht vor Abschluss, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

Nach erfolgreichem Download öffne das Verzeichnis, in das alle Serverdateien geladen wurden.

### Zugriff auf das PrivateServerTool

Im Gegensatz zu typischen SteamCMD-Installationen benötigt MOE, dass du einen Ordner aus deiner lokalen Steam-Spielinstallation kopierst, um den Server unter Windows starten zu können.

Öffne Steam auf deinem System, klicke mit der rechten Maustaste auf dein **Myth of Empires** Spiel und wähle **Lokale Dateien durchsuchen** unter dem Menüpunkt **Verwalten**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Im geöffneten Hauptordner findest du den Ordner **PrivateServerTool**. Diesen Ordner musst du auf deinen Server kopieren. Das geht ganz einfach mit `STRG+C` auf deinem lokalen PC und `STRG+V` auf deinem Windows Server via RDP. Achte darauf, ihn im Hauptverzeichnis deines Dedicated Servers einzufügen.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

Im nächsten Schritt kümmern wir uns um das Portforwarding und die Konfiguration deines Servers.

### Portfreigabe für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du Portfreigabe-Regeln für die Ports einrichten, die der Dedicated Server nutzt. Das kannst du entweder direkt über Powershell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Klicke mit der rechten Maustaste und wähle **Als Administrator ausführen**, damit die nötigen Berechtigungen vorhanden sind und alles reibungslos funktioniert.

:::info
Stelle sicher, dass du Powershell im Administrator-Modus startest, sonst werden die Einstellungen möglicherweise nicht korrekt übernommen.
:::

Füge nun folgende Befehle in die Powershell ein:
```
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein MOE Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall-Seite öffnest, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Erstelle neue Regeln für deinen MOE Server. Klicke dazu auf die eingehenden und ausgehenden Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 11888, 12888
- UDP eingehend und ausgehend: 11888, 12888

Falls du dabei Hilfe brauchst, nutze unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung.

</TabItem>
</Tabs>

Bevor du deinen Server startest, geht’s weiter mit der Konfiguration.

## Konfiguration

Jetzt nutzt du das Server-Tool aus dem Ordner, den du zuvor aus deinen Spieldateien kopiert hast, um deine Konfigurationsdatei und die Start-`.bat`-Datei zu erstellen, mit der du deinen Server startest.

Navigiere in folgendes Verzeichnis (der Ordner, den du kopiert hast):
```
../MOE/PrivateServerTool
```

Starte in diesem Ordner die **PrivateServerTool.exe**. Mit diesem Tool kannst du die Serveroptionen nach deinen Wünschen einstellen, inklusive Mods, Spieleinstellungen und mehr.

Wir empfehlen, zumindest die Grundparameter wie **Servername** einzustellen, bevor du weitermachst.

Wenn du fertig bist, wechsle im Tool zum Tab **Start Console**, klicke auf **Save Config** und danach auf **Start Server**. Dadurch wird die `StartPrivateServer.bat` Datei erstellt, mit der du deinen Server startest.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

Wir empfehlen, eine Verknüpfung zur `StartPrivateServer.bat` Datei zu erstellen, indem du mit Rechtsklick darauf klickst und **Verknüpfung erstellen** wählst. So kannst du den Server später leichter starten.

:::note
Möglicherweise musst du den Pfad zu deinem Spielordner in der automatisch generierten `StartPrivateServer.bat` Datei anpassen. Öffne die Datei einfach mit einem Editor wie Notepad und überprüfe, ob der Pfad am Anfang der Datei mit dem Pfad deines Servers übereinstimmt.

Falls der Pfad nicht stimmt, kannst du im Explorer im Root-Ordner deines MOE Servers oben in der Adressleiste doppelklicken, um den Pfad zu kopieren, und ihn dann an der passenden Stelle in der Datei einfügen.
:::

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Gehe in das Verzeichnis deines Myth of Empires Servers und starte die **StartPrivateServer.bat** (oder die Verknüpfung, falls du eine erstellt hast). Dadurch öffnet sich die Server-Konsole in einem Kommandozeilenfenster und der Startvorgang beginnt. Du kannst dich jetzt direkt mit deinem Server verbinden, indem du im Spiel den Tab **Custom Server** öffnest und deinen Server über die Suchfunktion findest.

:::tip
Falls du Verbindungsprobleme hast, öffne deine `StartPrivateServer.bat` Datei mit einem Editor wie Notepad und überprüfe, ob die beiden IP-Parameter mit der IP deines Windows Servers übereinstimmen. Das sollte eigentlich automatisch vom Tool gesetzt werden, ist aber ein guter Troubleshooting-Schritt.
:::

Du hast Myth of Empires erfolgreich auf deinem Windows Dedicated Server installiert.

<InlineVoucher />