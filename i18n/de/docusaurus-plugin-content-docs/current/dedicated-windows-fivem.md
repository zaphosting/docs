---
id: dedicated-windows-fivem
title: "FiveM Dedicated Server Einrichtung"
description: "Entdecke, wie du deinen eigenen FiveM Dedicated Server mit txAdmin für nahtloses Multiplayer-Gaming einrichtest und betreibst → Jetzt mehr erfahren"
sidebar_label: FiveM
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du besitzt einen Dedicated Server und möchtest deinen eigenen FiveM Dedicated Server mit txAdmin installieren und betreiben? Dann bist du hier genau richtig! Im Folgenden erklären wir dir alle notwendigen Schritte zur Installation und Konfiguration sowie wichtige Hinweise, die du beachten solltest.

:::warning Betriebssystem ausgewählt und installiert
Es wird vorausgesetzt, dass du bereits ein Betriebssystem für deinen vServer/Dedicated Server ausgewählt und installiert hast. Falls dieser Schritt noch nicht abgeschlossen ist, folge bitte zuerst der Anleitung [Ersteinrichtung](dedicated-setup.md) für Dedicated Server.
:::

## Vorbereitung

Um einen FiveM Server einzurichten, sind einige Vorbereitungsschritte notwendig, die vor der eigentlichen Einrichtung des FiveM Dedicated Servers umgesetzt werden müssen.

### Datenbank einrichten

Wenn du Ressourcen nutzen und installieren möchtest, die eine Datenbank benötigen, brauchst du einen zusätzlichen **Datenbankserver**. Es gibt verschiedene Möglichkeiten, einen solchen Server einzurichten. In unserer Anleitung [MySQL installieren](dedicated-windows-installmysql.md) zeigen wir dir, wie du deinen eigenen **Datenbankserver** auf deinem **Dedicated Server** installierst.

### FiveM Server Software herunterladen

Als nächstes lädst du die FiveM Server Software herunter. Öffne dazu einen der installierten Internetbrowser und navigiere zur [Server Build Liste](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) von FiveM. Lade dort die aktuellste FiveM Server Build herunter.

Entpacke die heruntergeladene Datei im Downloads-Ordner und verschiebe die FiveM Server Dateien am besten in ein separates Verzeichnis. In diesem Beispiel befindet sich die Server-Software in einem Ordner namens **FiveM** auf dem Desktop.

:::warning Entpackungsprogramm erforderlich
Zum Entpacken der heruntergeladenen FiveM Server Software wird ein Entpackungsprogramm für die gepackte Datei benötigt. In diesem Beispiel wird die [7Zip Software](https://7-zip.com/) verwendet.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)

### FiveM Server Lizenzschlüssel erstellen

Jeder FiveM Server benötigt einen eigenen Lizenzschlüssel, der über das neue [Cfx.re Portal](http://portal.cfx.re/) verwaltet wird. Der Lizenzschlüssel ist mit deinem Cfx.re Account verknüpft. Melde dich auf der Webseite an, navigiere zur Kategorie **Server** und klicke auf den Button **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)

## Konfiguration

Jetzt kannst du mit der Installation des FiveM Servers und txAdmin starten. Öffne dazu erneut dein FiveM Server Verzeichnis und starte die Anwendung `cfx-server.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)

Sobald die Server-Anwendung ausgeführt wird, öffnet sich die Server-Konsole und txAdmin. Im txAdmin Interface musst du deinen **Cfx.re Account** mit txAdmin verknüpfen.

![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)

### txAdmin Einrichtung

Während der txAdmin Einrichtung wird dein eigener FiveM Server in fünf Schritten installiert und konfiguriert. Folge den Anweisungen im txAdmin Interface und gib zuerst einen **Servernamen** ein. Wähle anschließend den gewünschten **Servertyp** aus. Dieses Beispiel zeigt die Installation eines FiveM Servers mit vorinstalliertem QBCore.

Wähle im Schritt **Deployment Type** die Option **Popular Recipes** und dann die **QBCore Framework Template** aus. Bestätige das gewünschte **Data Directory** und starte den **Recipe Deployer**, um die Installation abzuschließen.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Während des Recipe Deployers müssen noch letzte Informationen eingegeben werden, bevor der Server gestartet werden kann. Trage deinen zuvor erstellten FiveM Lizenzschlüssel im Feld **License Key** ein. Klicke dann auf **Show/Hide Database Options (Advanced)** und gib die Zugangsdaten deines Datenbankservers ein. In diesem Fall wird nur das zuvor definierte Passwort für den Benutzer **root** benötigt. Alle anderen Einstellungen können unverändert bleiben. Prüfe deine Eingaben und klicke anschließend auf **Run Recipe**, um den Vorgang zu starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)

### Firewall-Konfiguration

Damit dein Server öffentlich erreichbar ist, musst du Portweiterleitungsregeln für die Ports anpassen, die der vServer/Dedicated Server Prozess verwendet. Dies kannst du entweder direkt über Powershell-Befehle erledigen, was einfacher ist, oder regulär über die Windows Defender Firewall.

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Achte darauf, mit der rechten Maustaste zu klicken und **Als Administrator ausführen** zu wählen, damit die nötigen Berechtigungen vorhanden sind und alles korrekt funktioniert.

:::info
Stelle sicher, dass du Powershell im Administrator-Modus ausführst, sonst werden die Einstellungen möglicherweise nicht korrekt übernommen.
:::

Füge dann die folgenden Befehle in die Powershell-Konsole ein:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch Firewall-Regeln, die notwendig sind, damit dein FiveM Server öffentlich erreichbar ist.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Öffne über die Windows-Suche die **Windows Firewall mit erweiterter Sicherheit**. Möglicherweise musst du auf **Erweiterte Einstellungen** klicken, um das nötige Fenster zu öffnen, falls du nur die Basis-Firewall-Seite geöffnet hast.

![](https://screensaver01.zap-hosting.com/index.php/s/woitzXpAAirg9JN/preview)

Du musst neue Regeln für deinen FiveM Server erstellen. Klicke dazu auf die eingehenden und ausgehenden Regeln wie unten beschrieben und füge sie für die folgenden Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 30120
- UDP eingehend und ausgehend: 30120

Wenn du weitere Hilfe benötigst, nutze bitte unsere Anleitung [Portweiterleitung (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

## Fazit

Du hast erfolgreich einen FiveM Dedicated Server auf deinem vServer/Dedicated Server installiert und konfiguriert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂