---
id: dedicated-windows-fs-22-epic
title: "Dedicated Server: Farming Simulator 2022 (Epic Games) Dedicated Server Windows Setup"
description: "Entdecke, wie du einen Dedicated Server für Farming Simulator 22 Epic Games Version mit optimierter Performance und speziellen Anforderungen einrichtest → Jetzt mehr erfahren"
sidebar_label: Farming Simulator 2022 (Epic Games)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Einrichtung eines Servers für die Farming Simulator 22 Epic Games Version unterscheidet sich leicht vom Standardserver-Prozess. Diese Anleitung führt dich Schritt für Schritt durch den Prozess und legt den Fokus auf die Besonderheiten der Epic Games Version.

## Vorbereitung

Bevor du startest, stelle sicher, dass dein Setup folgende Anforderungen erfüllt:
- **Betriebssystem:** Windows Server 2016/2019 (64-bit)
- **CPU:** Mindestens 4x 2,4 GHz (AMD/Intel)
- **RAM:** Mindestens 4GB (DDR3/4)
- **Festplattenspeicher:** Mindestens 50GB frei (SSD oder besser empfohlen)
- **Epic Games Account:** Ein Epic Games Account mit Farming Simulator 22.

:::info
Beim Betrieb des Servers kannst du nicht denselben Epic Games Account zum Hosten und Spielen verwenden. Das heißt, du brauchst eine zweite Kopie des Spiels auf einem anderen Account, wenn du auf dem Server spielen möchtest.
:::

## Schritt 1: Vorbereitung der Server-Installation
Verbinde dich zunächst per Remote Desktop (RDP) mit deinem Server. Falls du Hilfe dabei brauchst, schau dir unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung an.

Nach der Verbindung musst du eine wichtige Voraussetzung installieren: Microsoft Visual C++ Redistributable, das du auf der [Microsoft-Webseite](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170) herunterladen kannst. Folge nach dem Download den Anweisungen auf dem Bildschirm, um die Installation abzuschließen.

:::tip
Es kann sein, dass die C++ Redistributable Tools bereits installiert sind. In dem Fall kann der Installer eine Fehlermeldung anzeigen. Diese kannst du bedenkenlos ignorieren und weitermachen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9kjW9QdoWtwRAbW/preview.png)

Jetzt musst du den Epic Games Launcher installieren, den du auf der [Epic Games Webseite](https://store.epicgames.com/en-US/download) herunterladen kannst. Folge auch hier den Anweisungen auf dem Bildschirm.

![](https://screensaver01.zap-hosting.com/index.php/s/msGyRYr5cxoSti5/preview.png)

Nach der Installation wird der Launcher wahrscheinlich noch einige zusätzliche Dateien und Updates herunterladen, bevor er startet.

![](https://screensaver01.zap-hosting.com/index.php/s/Bzya5Tzj8sY7RY2/preview)

Sobald der Launcher geöffnet ist, melde dich mit deinem Epic Games Account an, der Farming Simulator 2022 in der Spielebibliothek besitzt.

## Schritt 2: Farming Simulator 2022 herunterladen

Im Epic Games Launcher klickst du auf den **Bibliothek**-Tab und suchst Farming Simulator 22. Klicke auf den **Installieren**-Button und wähle den Speicherort, an dem du das Spiel herunterladen möchtest.

![](https://screensaver01.zap-hosting.com/index.php/s/s9SxMgLtQHtwTPQ/preview)

Jetzt musst du warten, bis der Download und die Installation abgeschlossen sind. Die Downloadgeschwindigkeit hängt von der Bandbreite deines Servers ab.

## Schritt 3: Startoptionen einrichten

Nachdem das Spiel installiert ist, geh zurück zum **Bibliothek**-Tab im Epic Games Launcher. Finde Farming Simulator 22, klicke auf die drei Punkte daneben und wähle **Verwalten**.

![](https://screensaver01.zap-hosting.com/index.php/s/t63G5XzxwpaLje9/preview)

Scrolle runter zum Abschnitt **Startoptionen** und aktiviere ihn. Gib im erscheinenden Textfeld `-server` ein und schließe das Menü.

![](https://screensaver01.zap-hosting.com/index.php/s/HLAXkbdpanAFfbS/preview)

## Schritt 4: Server starten

Du kannst jetzt Farming Simulator 2022 über deinen Epic Games Launcher oder die Desktop-Verknüpfung starten. Das Spiel sollte nun über eine Eingabeaufforderung (CMD) im Dedicated Server Modus starten. Falls das nicht der Fall ist, überprüfe, ob du die Startoption korrekt gesetzt hast.

![](https://screensaver01.zap-hosting.com/index.php/s/Bf5LX72LWNwSFib/preview)

## Schritt 5: Webinterface aktivieren (optional)

Farming Simulator 22 Dedicated Server bieten ein Webinterface, das du für deinen Server aktivieren kannst. Das ist optional, aber sehr praktisch, um Einstellungen anzupassen und viele weitere Infos zu erhalten. Wir empfehlen daher, es zu aktivieren.

Bevor du weitermachst, stelle sicher, dass du den Server durch Schließen der Eingabeaufforderung stoppst. So verhinderst du, dass Änderungen in diesem Schritt überschrieben werden.

Navigiere zum Installationspfad deines Spiels, normalerweise ist das `C:\Program Files\Epic Games\FarmingSimulator22`, wenn du den Standardordner gewählt hast.

![](https://screensaver01.zap-hosting.com/index.php/s/yoqHoDAFZFkP2Ps/preview)

Finde die Datei `dedicatedServer.xml` im Hauptverzeichnis und öffne sie mit einem Texteditor wie Notepad.

Setze den Benutzernamen und das Passwort für den Admin, indem du die entsprechenden Felder anpasst:
```xml
  <initial_admin>
    <username>admin</username> //Benutzername
    <passphrase>dein_passwort</passphrase> //Passwort
  </initial_admin>
```

![](https://screensaver01.zap-hosting.com/index.php/s/gks4Pswpyc3Wcix/preview)

Speichere die Datei und schließe sie. Starte dann die `dedicatedServer.exe` im selben Verzeichnis.

![](https://screensaver01.zap-hosting.com/index.php/s/KjNeS5E8BLEgnnH/preview)

Du solltest jetzt das Webinterface erreichen können, indem du in deinem Browser `http://[deine_serverip]:8080` aufrufst. Ersetze `[deine_serverip]` durch die IP-Adresse deines Servers. Wenn du direkt auf dem Server bist, kannst du auch `http://127.0.0.1:8080` nutzen.

![](https://screensaver01.zap-hosting.com/index.php/s/n96fcAxyxBnfjyL/preview)

:::info
Aufgrund der speziellen Einrichtung der Epic Games Version kann es sein, dass das Webinterface nicht vollständig nutzbar ist. Du kannst zwar Einstellungen ändern und den Server stoppen, aber z.B. nicht über das Webinterface starten.

Wenn Probleme auftreten, stoppe zuerst `dedicatedServer.exe`, starte dann Farming Simulator 22 direkt, um sicherzugehen, dass der Server läuft. Danach kannst du `dedicatedServer.exe` starten, um das Webinterface zu aktivieren.

Wichtig: Starte den Server **zuerst** und das Webinterface **danach**, sonst erkennt Epic Games beide als dieselbe Datei und verhindert, dass der Hauptserver startet.
:::

## Schritt 6: Portweiterleitung

Damit dein Server öffentlich erreichbar ist, musst du die Portweiterleitungsregeln für die Ports anpassen, die der Dedicated Server nutzt. Das kannst du entweder direkt per PowerShell machen, was einfacher ist, oder über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne die Windows-Suche und suche nach **PowerShell**. Rechtsklicke darauf und wähle **Als Administrator ausführen**, damit die nötigen Berechtigungen vorhanden sind.

:::info
Stelle sicher, dass du PowerShell im Administrator-Modus startest, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge nun folgende Befehle in die PowerShell ein und führe sie aus:
```
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein Farming Simulator 22 Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Erstelle neue Regeln für deinen Farming Simulator 22 Server. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 3724, 27015
- UDP eingehend und ausgehend: 3724, 27015

Falls du weitere Hilfe brauchst, nutze unsere [Portweiterleitung (Firewall)](vserver-windows-port.md) Anleitung.

</TabItem>
</Tabs>

## Schritt 7: Verbindung zum Server herstellen
Starte das Spiel und gehe ins Mehrspieler-Menü. Suche nach dem Servernamen, den du im Webinterface findest und anpassen kannst.

Klicke auf den Server, um dich zu verbinden. Falls ein Passwort abgefragt wird, findest du es ebenfalls im Webinterface.

Du hast Farming Simulator 22 (Epic Games Version) erfolgreich auf deinem Windows Dedicated Server installiert.