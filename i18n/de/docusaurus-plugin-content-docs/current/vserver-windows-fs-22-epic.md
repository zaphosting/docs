---
id: vserver-windows-fs-22-epic
title: "vServer: Farming Simulator 2022 (Epic Games) Dedicated Server Einrichtung"
description: Informationen zur Installation und Einrichtung eines dedizierten Servers für Farming Simulator 2022 für die Epic Games-Version auf deinem Windows vServer von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Farming Simulator 2022 (Epic Games)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das Einrichten eines Servers für die Epic Games-Version von Farming Simulator 22 unterscheidet sich leicht von dem Prozess für einen Standardserver. Diese Anleitung führt dich durch den Prozess, wobei der Fokus auf den besonderen Aspekten der Epic Games-Version liegt.

<InlineVoucher />

## Voraussetzungen

Bevor du beginnst, stelle sicher, dass deine Einrichtung die folgenden Anforderungen erfüllt:

- **Betriebssystem:** Windows Server 2016/2019 (64-Bit)
- **CPU:** Mindestens 4x 2,4 GHz (AMD/Intel)
- **RAM:** Mindestens 4GB (DDR3/4)
- **Festplattenspeicher:** Mindestens 50GB frei (SSD oder besser bevorzugt)
- **Epic Games-Konto:** Ein Epic Games-Konto mit Farming Simulator 22.

:::info
Wenn du den Server betreibst, kannst du den Server nicht hosten und gleichzeitig auf demselben Epic Games-Konto spielen. Das bedeutet, dass du eine zweite Kopie des Spiels auf einem anderen Konto benötigst, wenn du auf dem Server spielen möchtest.
:::

## Schritt 1: Vorbereitung zur Serverinstallation

Beginne damit, dich über Remote Desktop (RDP) mit deinem Server zu verbinden. Wenn du dabei Hilfe benötigst, sieh dir bitte unsere [RDP-Ersteinrichtungsanleitung](https://zap-hosting.com/guides/docs/vserver-windows-userdp/) an.

Sobald du verbunden bist, musst du ein notwendiges Voraussetzungsprogramm installieren, Microsoft Visual C++ Redistributable, das von [Microsofts Website](https://learn.microsoft.com/de-DE/cpp/windows/latest-supported-vc-redist?view=msvc-170) heruntergeladen werden kann. Nach dem Herunterladen folge den Anweisungen auf dem Bildschirm, um die Installation abzuschließen.

:::tip
Es ist möglich, dass du die C++ Redistributable-Tools bereits heruntergeladen hast. In diesem Fall könnte der Installer einen Fehler zurückgeben. Du kannst diesen sicher ignorieren und fortfahren.
:::

![image](https://screensaver01.zap-hosting.com/index.php/s/2z4YTqFbXiEX2EL/preview)

Nun musst du den Epic Games Launcher installieren, der von [der Website von Epic Games](https://store.epicgames.com/de-DE/download) heruntergeladen werden kann. Befolge erneut die Anweisungen auf dem Bildschirm, um die Installation abzuschließen.
![image](https://screensaver01.zap-hosting.com/index.php/s/WmifDEnZYfoGc26/preview)

Nach der Installation ist es sehr wahrscheinlich, dass der Launcher einige zusätzliche Dateien und Updates herunterladen muss, bevor er gestartet werden kann.

![image](https://screensaver01.zap-hosting.com/index.php/s/Bzya5Tzj8sY7RY2/preview)

Sobald der Launcher geöffnet ist, musst du dich mit deinem Epic Games-Konto anmelden, auf dem Farming Simulator 2022 in der Spielesammlung vorhanden ist.

## Schritt 2: Herunterladen von Farming Simulator 2022 

Im Epic Games Launcher klicke auf den Tab **Bibliothek** und suche Farming Simulator 22. Verwende den **Installieren**-Button und wähle den Ort aus, an den du das Spiel herunterladen möchtest.
![image](https://screensaver01.zap-hosting.com/index.php/s/g8tjpNfJoB47dwf/preview)

Du musst nun auf den Abschluss des Downloads und der Installation warten. Die Downloadgeschwindigkeit hängt von der Bandbreite deines Servers ab.



## Schritt 3: Einrichten der Startoptionen

Sobald das Spiel installiert ist, gehe zurück zum Tab **Bibliothek** im Epic Games Launcher. Finde Farming Simulator 22, klicke auf die drei Punkte daneben und wähle **Verwalten**.


![image](https://screensaver01.zap-hosting.com/index.php/s/NjwctFFxyN7rK8y/preview)

Scrolle nach unten zum Abschnitt **Startoptionen** und aktiviere diesen. In das erscheinende Textfeld gib `-server` ein und schließe das Menü.![image](https://screensaver01.zap-hosting.com/index.php/s/zJQzPtMtZo6XoGf/preview)

## Schritt 4: Server starten

Du kannst jetzt Farming Simulator 2022 über deinen Epic Games Launcher oder das Desktop-Shortcut starten. Das Spiel sollte nun über eine Befehlszeile (CMD) im dedizierten Servermodus starten. Wenn dies nicht der Fall ist, stelle sicher, dass du die Startoption korrekt eingerichtet hast.

![image](https://screensaver01.zap-hosting.com/index.php/s/Bf5LX72LWNwSFib/preview)

## Schritt 5: Aktivieren des Web-Interfaces (optional)

Dedizierte Server von Farming Simulator 22 verfügen über ein Web-Interface, das du für deinen Server aktivieren kannst. Dies ist optional, aber es kann nützlich sein, um Einstellungen und eine Vielzahl anderer Informationen anzupassen, daher empfehlen wir, es zu aktivieren. 

Bevor du fortfährst, stelle sicher, dass du den Server schließt, indem du das Befehlsfenster beendest. Dies stellt sicher, dass die Änderungen, die du in diesem Schritt vornimmst, nicht überschrieben werden.

Navigiere zum Installationspfad deines Spiels, der typischerweise `C:\Program Files\Epic Games\FarmingSimulator22` ist, wenn du im Standardverzeichnis installiert hast.

![image](https://screensaver01.zap-hosting.com/index.php/s/yoqHoDAFZFkP2Ps/preview)

Finde und öffne die Datei `dedicatedServer.xml`, die im Stammverzeichnis gefunden wird, mit einem Texteditor wie Notepad.

Setze den Benutzernamen und das Passwort für den Admin, indem du die entsprechenden Felder änderst.
```xml
  <initial_admin>
    <username>admin</username> //username
    <passphrase>your_password</passphrase> //password
  </initial_admin>
```

![image](https://screensaver01.zap-hosting.com/index.php/s/gks4Pswpyc3Wcix/preview)

Stelle sicher, dass du die Datei speicherst, bevor du sie schließt, und führe die `dedicatedServer.exe` aus, die sich im selben Stammverzeichnis befindet.

![image](https://screensaver01.zap-hosting.com/index.php/s/KjNeS5E8BLEgnnH/preview)

Du solltest jetzt in der Lage sein, auf das Web-Interface zuzugreifen, indem du `http://[deine_serverip]:8080` in deinem Webbrowser aufrufst, wobei `[deine_serverip]` durch die IP-Adresse deines Servers ersetzt wird. Wenn du das Panel direkt auf demselben Server aufrufen möchtest, kannst du es auch einfach über `http://127.0.0.1:8080` erreichen.

![image](https://screensaver01.zap-hosting.com/index.php/s/FzaJyAdBtym4jGH/preview)

:::info 
Aufgrund der besonderen Konfiguration der Epic Games-Version kannst du auf Schwierigkeiten stoßen, das Web-Interface vollständig zu nutzen. Obwohl du Änderungen vornehmen und den Server über das Web-Interface stoppen kannst, kannst du den Server beispielsweise nicht darüber starten. 

Wenn Probleme auftreten, stoppe zuerst dedicatedServer.exe, dann starte Farming Simulator 22 direkt, um sicherzustellen, dass der Server funktioniert. Anschließend führe dedicatedServer.exe aus, um das Web-Interface zu aktivieren.

Es ist wichtig, dass du den Server **zuerst** und das Web-Interface **danach** ausführst, da sonst Epic Games beide als dieselbe Datei erkennen und somit verhindern könnte, dass du den Hauptserver starten kannst.
:::



## Schritt 6: Portweiterleitung 

Um sicherzustellen, dass dein Server öffentlich zugänglich ist, musst du die Portweiterleitungsregeln für die Ports ändern, die der dedizierte Serverprozess verwendet. Du kannst dies entweder direkt über PowerShell-Befehle, was einfacher ist, oder regelmäßig über die Windows Defender-Firewall-Seite tun.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne das Windows-Suchfeld und suche nach **PowerShell**. Stelle sicher, dass du mit der rechten Maustaste klickst und **Als Administrator ausführen** wählst, damit die Berechtigungen zugänglich sind und alles korrekt funktioniert.

:::info
Stelle sicher, dass du deine PowerShell im Administrator-Modus ausführst, sonst werden die Einstellungen möglicherweise nicht korrekt angewendet.
:::

Kopiere als Nächstes die folgenden Befehle in dein PowerShell-Prompt:
```
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch Firewallregeln, die notwendig sind, damit dein Farming Simulator 22 Server öffentlich zugänglich ist.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Verwende die Suchfunktion auf Windows, um die **Windows-Firewall-Einstellungen mit erweiterter Sicherheit** zu öffnen. Möglicherweise musst du auf **Erweiterte Einstellungen** klicken, um das notwendige Fenster zu öffnen, wenn du die Basisseite der Windows-Firewall öffnest.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen Farming Simulator 22 Server erstellen. Um dies zu tun, klicke auf die eingehenden und ausgehenden Regeln, wie unten beschrieben, und füge sie für die folgenden Protokolle und Ports hinzu: 

- TCP eingehend und ausgehend: 3724, 27015 
- UDP eingehend und ausgehend: 3724, 27015 

Bitte verwende unsere [Portweiterleitung (Firewall)](vserver-windows-port.md), wenn du weitere Hilfe dabei benötigst.

</TabItem>
</Tabs>

## Schritt 7: Verbindung zum Server 

Starte das Spiel und navigiere zum Multiplayer-Menü. Suche nach dem Servernamen, der auf dem Web-Interface gefunden und angepasst werden kann. 

Sobald du den Server gefunden hast, klicke darauf, um dich zu verbinden. Wenn du dazu aufgefordert wirst, gib das Passwort ein, das ebenfalls auf dem Web-Interface sichtbar sein wird. 

Du hast erfolgreich Farming Simulator 22 (Epic Games-Version) auf deinem Windows vServer installiert.


## Abschluss

Glückwunsch, du hast den Farming Simulator 2022 Server erfolgreich installiert und konfiguriert! Solltest du noch weitere Fragen oder Probleme haben, dann wende dich gerne an unser Support-Team, welches dir jeden Tag zur Verfügung steht!