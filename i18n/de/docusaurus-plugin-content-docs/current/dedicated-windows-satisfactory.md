---
id: dedicated-windows-satisfactory
title: "Dedicated Server: Satisfactory Dedicated Server Windows Setup"
description: "Lerne, wie du einen Satisfactory Dedicated Server auf deinem Server einrichtest für nahtloses Gameplay und einfache Verwaltung → Jetzt mehr erfahren"
sidebar_label: Satisfactory
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Dedicated Server und willst darauf Gameserver installieren? Zum Beispiel einen Satisfactory Dedicated Server? Dann bist du hier genau richtig! Im Folgenden erklären wir dir Schritt für Schritt, wie du so einen Service auf deinem Server installierst.

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/gp82J4xr9T5Y969/preview" title="Satisfactory Dedicated Server Setup auf Windows VPS" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich aufschlüsselt. Egal ob du es eilig hast oder einfach lieber auf die spannendste Art lernst!"/>



## Vorbereitung

Für die Einrichtung eines Satisfactory Servers wird SteamCMD benötigt. SteamCMD ist die **Kommandozeilen-Version des Steam-Clients**. Mit diesem Tool kannst du schnell und einfach die Dedicated Server-Anwendungen beliebter Steam-Games herunterladen. SteamCMD findest du auf der offiziellen Valve Entwicklerseite: https://developer.valvesoftware.com/wiki/SteamCMD. 

Danach erfolgt der Download. Dieser enthält die **steamcmd.zip** Datei, die zuerst entpackt werden muss. Es empfiehlt sich, einen eigenen Ordner anzulegen, in den du die Datei entpackst. Am Ende solltest du die **steamcmd.exe** sehen. Starte diese und warte, bis der Installationsprozess abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/9EaPpm3NWadXTx5/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des Satisfactory Servers starten.



## Installation

Nach der Installation solltest du Befehle in der **Steam-Kommandozeile (steamcmd.exe)** ausführen können. Dort musst du dich einloggen. Das funktioniert mit dem Benutzer **anonymous**. Führe folgenden Befehl aus: `login anonymous`

Der nächste Schritt ist die Installation. Diese erfolgt mit dem Befehl `app_update 1690800`. Die App ID **1690800** steht für die **Satisfactory Dedicated Server** Anwendung.

![](https://screensaver01.zap-hosting.com/index.php/s/KtzJ3AaYJk7BJEt/preview)



:::info
Bitte unterbrich den Prozess nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::



Navigiere in das Verzeichnis, in dem du die Installation durchgeführt hast, und gehe in den folgenden Unterordner: **../steamapps/common/SatisfactoryDedicatedServer**

Dort musst du die Startdatei erstellen, die zum Ausführen der Server-Software benötigt wird. Erstelle eine Datei mit folgendem Namen: server-start.bat

:::info
Stelle sicher, dass die Option „Dateinamenerweiterungen anzeigen“ aktiviert ist, damit die richtige Dateiendung verwendet wird.
:::

Öffne die Datei, füge folgenden Inhalt ein und speichere die Änderungen:

```
Factoryserver.exe -log -unattended
```



Die Datei wird dann ausgeführt. Beim ersten Start sollte ein Popup erscheinen, das dich darauf hinweist, dass bestimmte Komponenten zum Ausführen des Programms benötigt werden. Das Spiel benötigt die Visual C++ Runtime. Klicke auf Ja und schließe die Installation ab. 

Damit der Server sichtbar und von außen erreichbar ist, müssen die vom Server genutzten Ports in der Firewall freigegeben/weitergeleitet werden. Öffne dazu die Windows-Firewall-Einstellungen.

![](https://screensaver01.zap-hosting.com/index.php/s/dy6AwJsT8XBpdXr/preview)


In den Einstellungen müssen zusätzliche Regeln hinzugefügt werden. Klicke dazu auf die eingehenden und ausgehenden Regeln wie unten beschrieben und füge sie für das UDP-Protokoll und Port 15000 hinzu.



## Konfiguration

Die eigentliche Einrichtung ist damit schon abgeschlossen. Weitere Konfigurationsänderungen kannst du in der **ServerSettings.ini** vornehmen. Dort kannst du z.B. den Servernamen, das Serverpasswort und andere Optionen anpassen. Navigiere dazu in folgendes Verzeichnis: 

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## Spielen

Am Ende der Einrichtung kannst du den Server jetzt starten, indem du die zuvor erstellte **server-start.bat** ausführst. Dadurch öffnet sich die Server-Konsole und der Server-Startprozess beginnt. Wenn alles wie erwartet läuft, sollte der Server nach erfolgreichem Start in der Serverliste sichtbar sein.



