---
id: dedicated-windows-fs-25
title: "Dedicated Server: Farming Simulator 2025 Dedicated Server Windows Setup"
description: "Entdecke, wie du einen Farming Simulator 2025 Dedicated Server auf Windows einrichtest, um Multiplayer-Games reibungslos zu hosten → Jetzt mehr erfahren"
sidebar_label: Farming Simulator 2025
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows Dedicated Server und möchtest den Farming Simulator Dedicated Server 2025 darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server installierst.



## Vorbereitung

Um einen Farming Simulator 2025 Dedicated Server zu hosten, brauchst du einen Windows Server und eine gültige Spiel-Lizenz, um den Dedicated Server auszuführen.

Bevor du mit der Installation startest, verbinde dich per Remote Desktop (RDP) mit deinem Windows Server. Falls du Hilfe brauchst, schau dir unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung an.

### Spiel-Lizenz

Um den Dedicated Server auf deinem Windows Server zu hosten, musst du eine digitale Version von Farming Simulator 2025 direkt auf der [Farming Simulator](https://www.farming-simulator.com/buy-now.php) Webseite besitzen.

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

Du kannst nicht denselben Lizenzschlüssel verwenden, mit dem du das Spiel spielst. Du musst also eine **zweite** Kopie des Spiels nur für deinen Dedicated Server kaufen.

:::info Steam Spiel-Lizenz
Es ist möglich, eine Steam-Spiel-Lizenz für den Dedicated Server zu nutzen, allerdings ist das ziemlich unpraktisch, da du den Steam-Client ständig im Hintergrund laufen lassen müsstest. Außerdem kannst du mit demselben Steam-Account nicht gleichzeitig auf einem anderen System ein anderes Spiel spielen. Deshalb empfehlen wir dir, lieber einen eigenständigen Key direkt auf der Webseite zu kaufen, um diesen Aufwand zu vermeiden.

Falls du dennoch eine **Steam**-Lizenz verwenden möchtest, solltest du die Dateien wie gewohnt über Steam installieren und direkt zum Abschnitt **Dedicated Server Setup** in dieser Anleitung springen.
:::

Nachdem du die digitale Version auf der Webseite gekauft hast, erhältst du per E-Mail einen Produktcode. Diesen Lizenzschlüssel brauchst du im nächsten Abschnitt, um das Spiel herunterzuladen und deinen Dedicated Server während der Einrichtung zu validieren.

## Installation

### Dateien installieren

Sobald dein Lizenzschlüssel und Windows Server bereit sind, öffne auf deinem Windows Server die [Giants Software Downloads](https://eshop.giants-software.com/downloads.php) Seite und gib den Lizenzschlüssel ein, den du per E-Mail erhalten hast.

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

Nach erfolgreicher Eingabe bekommst du Zugriff auf eine Seite mit verschiedenen Download-Optionen für das Spiel. Suche die Hauptoption für Windows **Farming Simulator 25 (Windows 10/11)** und lade sie herunter.

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

Der Download startet jetzt und kann eine Weile dauern, da das komplette Spiel heruntergeladen wird. Bitte hab Geduld.

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

Nach dem Download findest du die **.img** Datei in deinem Download-Ordner. Öffne sie per Doppelklick, damit das Laufwerk im Datei-Explorer eingebunden wird.

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

Starte jetzt die **Setup.exe** und bestätige die UAC-Abfrage. Folge dem Setup-Menü, akzeptiere die AGB und passe bei Bedarf den Installationspfad an.

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

Bitte warte, bis die Installation komplett abgeschlossen ist. Danach kannst du das Setup-Menü schließen. Wir empfehlen, im Datei-Explorer mit Rechtsklick auf das gemountete **DVD-Laufwerk** zu klicken und **Auswerfen** zu wählen, da es nicht mehr benötigt wird. Die Basisinstallation des Spiels ist jetzt abgeschlossen.

### Spiel aktivieren

Nachdem das Spiel installiert ist, musst du es mindestens einmal starten, um es zu aktivieren. Starte das Spiel über die Desktop-Verknüpfung oder die Windows-Suche.

Beim ersten Start erscheint eine Eingabeaufforderung für den Lizenzschlüssel. Gib den Schlüssel ein, den du per E-Mail erhalten hast, und bestätige. Nach erfolgreicher Aktivierung lädt das Spiel.

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

Du kannst das Spiel jetzt schließen, es wird nicht mehr benötigt. Fahre mit dem nächsten Abschnitt fort, um den Dedicated Server und das dazugehörige Webinterface einzurichten. Falls ein **Video-Treiber**-Fehler erscheint, wähle einfach **Nein**, um den Start abzubrechen.

## Dedicated Server Setup

Das Spiel ist jetzt bereit, du musst noch ein paar Einstellungen für deinen Dedicated Server anpassen. Öffne dazu den Installationsordner des Spiels. Standardmäßig findest du ihn unter `C:\Program Files (x86)\Farming Simulator 2025`, es sei denn, du hast den Pfad bei der Installation geändert.

Suche dort die Datei **dedicatedServer.xml** und öffne sie mit einem Texteditor.

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

Wir empfehlen, die Felder `username` und `passphrase` ganz oben in der Datei auf deine eigenen Werte zu ändern. Diese Zugangsdaten nutzt du später, um dich im Webinterface deines Servers anzumelden. Speichere die Datei und schließe sie.

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### Webinterface aufrufen

Nachdem die Zugangsdaten konfiguriert sind, kannst du den Server starten, indem du die **dedicatedServer.exe** im gleichen Ordner ausführst.

:::info Administratorrechte
Starte die Dedicated Server-Datei unbedingt mit Administratorrechten, sonst kann es zu Problemen beim Starten des Gameservers kommen. Rechtsklick auf die Datei und **Als Administrator ausführen** wählen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

Es öffnet sich ein neues CMD-Fenster, das automatisch Zertifikate generiert, Updates und nötige Tools installiert. Das kann beim ersten Start etwas dauern, also hab bitte Geduld.

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

Sobald alles fertig ist, kannst du das Webinterface über `http://[deine_serverip]:8080` im Browser aufrufen. Melde dich mit den zuvor festgelegten Zugangsdaten an.

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

Im Webinterface kannst du viele Einstellungen an deinem Server vornehmen, wie z.B. Server-Settings ändern, Savegames verwalten, Mods managen und vieles mehr.

### Ports für deinen Server freigeben

Damit dein Server öffentlich erreichbar ist, musst du Port-Weiterleitungen für die Ports einrichten, die der Dedicated Server nutzt. Das kannst du entweder direkt über PowerShell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne die Windows-Suche und suche nach **PowerShell**. Rechtsklick und **Als Administrator ausführen** wählen, damit die nötigen Berechtigungen vorhanden sind.

:::info
Achte darauf, PowerShell im Administrator-Modus zu starten, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge dann folgende Befehle in die PowerShell ein:
```
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein Farming Simulator 2025 Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Erstelle neue Regeln für deinen FS2025 Server. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 8080, 10823
- UDP eingehend und ausgehend: 8080, 10823

Falls du Hilfe brauchst, schau dir unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung an.

</TabItem>
</Tabs>

Nachdem du die Regeln hinzugefügt hast, ist dein Server öffentlich erreichbar. Du kannst jetzt das Webinterface aus dem Internet aufrufen und dich im Spiel mit dem Server verbinden.

### Server starten

Wenn du alle Einstellungen angepasst und die Firewall-Regeln gesetzt hast, öffne die Startseite im Webinterface und klicke auf den **Start**-Button, um den Server zu booten.

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

Nach erfolgreichem Start bootet der Server und du kannst das im Webinterface und im neuen CMD-Fenster sehen, das den Gameserver ausführt. Falls Fehler auftreten, stelle sicher, dass du das Webinterface als Administrator ausführst.

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## Fazit

Glückwunsch, du hast den Farming Simulator 2025 Dedicated Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Wenn du noch Fragen oder Probleme hast, kontaktiere unser Support-Team – wir sind täglich für dich da!