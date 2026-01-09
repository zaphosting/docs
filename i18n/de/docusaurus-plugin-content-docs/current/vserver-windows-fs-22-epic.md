---
id: vserver-windows-fs-22-epic
title: "vServer: Farming Simulator 2022 (Epic Games) Dedicated Server Windows Setup"
description: "Entdecke, wie du einen dedizierten Farming Simulator 22 Server für Epic Games einrichtest, um dein Gameplay und Hosting-Erlebnis zu optimieren → Jetzt mehr erfahren"
sidebar_label: Farming Simulator 2022 (Epic Games)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Einrichtung eines Servers für die Epic Games Version von Farming Simulator 22 unterscheidet sich leicht vom Standardprozess. Diese Anleitung führt dich durch die Schritte und legt den Fokus auf die Besonderheiten der Epic Games Version.
<InlineVoucher />

## Vorbereitung

Bevor du startest, stelle sicher, dass dein Setup folgende Anforderungen erfüllt:
- **Betriebssystem:** Windows Server 2016/2019 (64-Bit)
- **CPU:** Mindestens 4x 2,4 GHz (AMD/Intel)
- **RAM:** Mindestens 4GB (DDR3/4)
- **Festplattenspeicher:** Mindestens 50GB frei (SSD oder besser empfohlen)
- **Epic Games Account:** Ein Epic Games Account mit Farming Simulator 22.

:::info
Wenn du den Server betreibst, kannst du nicht mit demselben Epic Games Account gleichzeitig auf dem Server spielen. Du benötigst also eine zweite Kopie des Spiels auf einem anderen Account, falls du auf dem Server mitspielen möchtest.
:::

## Schritt 1: Vorbereitung der Server-Installation
Verbinde dich zuerst per Remote Desktop (RDP) mit deinem Server. Falls du Hilfe brauchst, schau in unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung.

Nach der Verbindung musst du eine wichtige Voraussetzung installieren: Microsoft Visual C++ Redistribute. Lade es von der [Microsoft Webseite](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170) herunter. Folge dann den Anweisungen auf dem Bildschirm, um die Installation abzuschließen.

:::tip
Es kann sein, dass die C++ Redistribute Tools bereits installiert sind. In dem Fall kann der Installer eine Fehlermeldung anzeigen. Diese kannst du bedenkenlos ignorieren und weitermachen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9kjW9QdoWtwRAbW/preview.png)

Jetzt musst du den Epic Games Launcher installieren, den du auf der [Epic Games Webseite](https://store.epicgames.com/en-US/download) findest. Folge auch hier den Anweisungen auf dem Bildschirm.

![](https://screensaver01.zap-hosting.com/index.php/s/msGyRYr5cxoSti5/preview.png)

Nach der Installation wird der Launcher wahrscheinlich noch einige Dateien und Updates herunterladen, bevor er startet.

![](https://screensaver01.zap-hosting.com/index.php/s/Bzya5Tzj8sY7RY2/preview)

Sobald der Launcher geöffnet ist, melde dich mit deinem Epic Games Account an, der Farming Simulator 2022 in der Spielebibliothek besitzt.

## Schritt 2: Farming Simulator 2022 herunterladen

Im Epic Games Launcher klickst du auf den **Bibliothek**-Tab und suchst Farming Simulator 22. Klicke auf den **Installieren**-Button und wähle den Speicherort für den Download aus.

![](https://screensaver01.zap-hosting.com/index.php/s/s9SxMgLtQHtwTPQ/preview)

Jetzt musst du warten, bis der Download und die Installation abgeschlossen sind. Die Downloadgeschwindigkeit hängt von der Bandbreite deines Servers ab.

## Schritt 3: Startoptionen einrichten

Nachdem das Spiel installiert ist, geh zurück zum **Bibliothek**-Tab im Epic Games Launcher. Finde Farming Simulator 22, klicke auf die drei Punkte daneben und wähle **Verwalten**.

![](https://screensaver01.zap-hosting.com/index.php/s/t63G5XzxwpaLje9/preview)

Scrolle runter zum Abschnitt **Startoptionen** und aktiviere ihn. Gib in das erscheinende Textfeld `-server` ein und schließe das Menü.

![](https://screensaver01.zap-hosting.com/index.php/s/HLAXkbdpanAFfbS/preview)

## Schritt 4: Server starten

Du kannst jetzt Farming Simulator 2022 über den Epic Games Launcher oder die Desktop-Verknüpfung starten. Das Spiel sollte nun über eine Eingabeaufforderung (CMD) im Dedicated Server Modus starten. Falls nicht, überprüfe, ob du die Startoption korrekt gesetzt hast.

![](https://screensaver01.zap-hosting.com/index.php/s/Bf5LX72LWNwSFib/preview)

## Schritt 5: Webinterface aktivieren (optional)

Dedizierte Farming Simulator 22 Server haben ein Webinterface, das du für deinen Server aktivieren kannst. Das ist optional, aber sehr praktisch, um Einstellungen anzupassen und viele weitere Infos zu erhalten. Wir empfehlen daher, es zu aktivieren.

Bevor du weitermachst, schließe den Server, indem du die Eingabeaufforderung beendest. So stellst du sicher, dass deine Änderungen nicht überschrieben werden.

Navigiere zum Installationspfad deines Spiels, normalerweise `C:\Program Files\Epic Games\FarmingSimulator22`, wenn du den Standardordner gewählt hast.

![](https://screensaver01.zap-hosting.com/index.php/s/yoqHoDAFZFkP2Ps/preview)

Finde und öffne die Datei `dedicatedServer.xml` im Hauptverzeichnis mit einem Texteditor wie Notepad.

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

Du solltest jetzt das Webinterface erreichen können, indem du in deinem Browser `http://[deine_serverip]:8080` eingibst. Ersetze `[deine_serverip]` durch die IP-Adresse deines Servers. Wenn du direkt auf dem Server bist, kannst du auch `http://127.0.0.1:8080` nutzen.

![](https://screensaver01.zap-hosting.com/index.php/s/n96fcAxyxBnfjyL/preview)

:::info
Aufgrund der speziellen Epic Games Version kann es sein, dass das Webinterface nicht komplett nutzbar ist. Du kannst zwar Einstellungen ändern und den Server stoppen, aber z.B. nicht über das Webinterface starten.

Wenn Probleme auftreten, stoppe zuerst `dedicatedServer.exe`, starte dann Farming Simulator 22 direkt, um sicherzugehen, dass der Server läuft. Danach kannst du `dedicatedServer.exe` starten, um das Webinterface zu aktivieren.

Wichtig: Starte den Server **zuerst** und das Webinterface **danach**, sonst erkennt Epic Games beide als dieselbe Datei und blockiert den Start des Hauptservers.
:::

## Schritt 6: Portfreigabe

Damit dein Server öffentlich erreichbar ist, musst du die Portfreigabe für die Ports des Dedicated Servers anpassen. Das kannst du entweder direkt per PowerShell machen (einfacher) oder über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Per PowerShell" default>

Öffne die Windows-Suche und suche nach **PowerShell**. Rechtsklick und **Als Administrator ausführen** wählen, damit die nötigen Rechte vorhanden sind.

:::info
Achte darauf, PowerShell im Administrator-Modus zu starten, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge dann folgende Befehle in die PowerShell ein:
```
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein Farming Simulator 22 Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Über Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Erstelle neue Regeln für deinen Farming Simulator 22 Server. Klicke dazu auf Eingehende und Ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 3724, 27015
- UDP eingehend und ausgehend: 3724, 27015

Falls du Hilfe brauchst, nutze unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung.

</TabItem>
</Tabs>

## Schritt 7: Verbindung zum Server

Starte das Spiel und gehe ins Mehrspieler-Menü. Suche nach dem Servernamen, den du im Webinterface findest und anpassen kannst.

Wenn du den Server gefunden hast, klicke drauf, um dich zu verbinden. Falls ein Passwort verlangt wird, findest du es ebenfalls im Webinterface.

## Fazit

Glückwunsch, du hast deinen Farming Simulator 2022 Server erfolgreich auf deinem VPS installiert und konfiguriert! Wenn du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />