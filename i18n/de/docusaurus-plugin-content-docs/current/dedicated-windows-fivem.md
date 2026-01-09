---
id: dedicated-windows-fivem
title: "Dedicated Server: FiveM Dedicated Server Setup"
description: "Entdecke, wie du deinen eigenen FiveM Dedicated Server mit txAdmin für nahtloses Multiplayer-Gaming einrichtest und betreibst → Jetzt mehr erfahren"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Einführung

Du besitzt einen Dedicated Server und möchtest deinen eigenen FiveM Dedicated Server mit txAdmin installieren und betreiben? Dann bist du hier genau richtig! Im Folgenden erklären wir dir alle notwendigen Schritte, wie du ihn installierst und konfigurierst und worauf du achten musst.



:::warning  Betriebssystem ausgewählt und installiert
Es wird vorausgesetzt, dass du bereits ein Betriebssystem für deinen Dedicated Server ausgewählt und installiert hast. Falls du diesen Schritt noch nicht abgeschlossen hast, musst du zuerst die Schritte in der [Ersteinrichtung](dedicated-setup.md) Anleitung für Dedicated Server befolgen.
:::



## Vorbereitung

Um einen FiveM Server einzurichten, sind bestimmte Vorbereitungsschritte notwendig, die vor der eigentlichen Einrichtung des FiveM Dedicated Servers umgesetzt werden müssen.



### Datenbank einrichten

Wenn du Ressourcen nutzen und installieren möchtest, die eine Datenbank benötigen, brauchst du einen zusätzlichen **Datenbankserver**. Es gibt verschiedene Möglichkeiten, so einen Server einzurichten. In unserer [MySQL Installation](dedicated-windows-installmysql.md) Anleitung zeigen wir dir, wie du deinen eigenen **Datenbankserver** auf deinem **Dedicated Server** installierst.



### FiveM Server Software herunterladen

Der nächste Schritt ist, die FiveM Server Software herunterzuladen. Navigiere dazu über einen deiner installierten Internetbrowser auf die [Server Build Liste](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) von FiveM und lade die aktuellste FiveM Server Build herunter.

Entpacke die heruntergeladene Datei im Downloads-Verzeichnis und verschiebe die FiveM Server Dateien am besten in ein separates Verzeichnis. In diesem Beispiel befindet sich die Server-Software in einem Ordner namens **FiveM** auf dem Desktop.

:::warning Entpackungsprogramm erforderlich
Um die heruntergeladene FiveM Server Software zu entpacken, benötigst du ein Entpackungsprogramm für die gepackte Datei. In diesem Beispiel wird die [7Zip Software](https://7-zip.com/) verwendet.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### FiveM Server Lizenzschlüssel erstellen

Jeder FiveM Server benötigt einen eigenen Lizenzschlüssel, der über das neue [Cfx.re Portal](http://portal.cfx.re/) verwaltet wird. Der Lizenzschlüssel ist mit deinem Cfx.re Account verknüpft. Melde dich auf der Webseite an, navigiere zur Kategorie **Server** und klicke auf den Button **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Konfiguration

Jetzt kannst du mit der Installation des FiveM Servers und txAdmin starten. Öffne dazu erneut dein FiveM Server Verzeichnis und starte die Anwendung `FXServer.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


Sobald die Server-Anwendung gestartet wurde, öffnet sich die Server-Konsole und txAdmin. Im txAdmin Interface musst du deinen **Cfx.re Account** mit txAdmin verknüpfen.



![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### txAdmin Einrichtung

Während der txAdmin Einrichtung wird dein eigener FiveM Server in fünf Schritten installiert und konfiguriert. Folge den Anweisungen im txAdmin Interface und definiere zuerst einen **Servernamen**. Wähle dann den gewünschten **Servertyp** aus. Dieses Beispiel zeigt die Installation eines FiveM Servers mit vorinstalliertem QBCore.

Wähle im Schritt **Deployment Type** die Option **Popular Recipes** und dann die **QBCore Framework Template**. Bestätige das gewünschte **Datenverzeichnis** und starte den **Recipe Deployer**, um die Installation abzuschließen.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Während des Recipe Deployers müssen noch die letzten notwendigen Informationen ergänzt werden, bevor der Server endgültig gestartet werden kann. Gib deinen zuvor erstellten FiveM Lizenzschlüssel im Feld **License Key** ein. Klicke dann auf **Show/Hide Database Options (Advanced)** und trage die Zugangsdaten deines Datenbankservers ein. In diesem Fall wird nur das zuvor definierte Passwort für den **root**-Benutzer benötigt. Alle anderen Einstellungen können unverändert bleiben. Prüfe deine Eingaben und klicke dann auf **Run Recipe**, um den Vorgang zu starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### Firewall-Konfiguration
Damit dein Server öffentlich erreichbar ist, musst du Portweiterleitungsregeln für die Ports anpassen, die der Dedicated Server Prozess verwendet. Das kannst du entweder direkt über Powershell-Befehle machen, was einfacher ist, oder regulär über die Windows Defender Firewall.

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Achte darauf, mit Rechtsklick **Als Administrator ausführen** zu wählen, damit die nötigen Berechtigungen vorhanden sind und alles korrekt funktioniert.

:::info
Stelle sicher, dass du die Powershell im Administrator-Modus ausführst, sonst werden die Einstellungen möglicherweise nicht korrekt übernommen.
:::

Kopiere und füge anschließend die folgenden Befehle in deine Powershell-Konsole ein:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch Firewall-Regeln, die notwendig sind, damit dein FiveM Server öffentlich erreichbar ist.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Nutze die Windows-Suche, um die **Windows-Firewall mit erweiterter Sicherheit** zu öffnen. Falls du nur die Basis-Firewall-Seite öffnest, musst du eventuell auf **Erweiterte Einstellungen** klicken, um das nötige Fenster zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Du musst neue Regeln für deinen FiveM Server erstellen. Klicke dazu auf die eingehenden und ausgehenden Regeln wie unten beschrieben und füge sie für die folgenden Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 30120
- UDP eingehend und ausgehend: 30120

Falls du weitere Hilfe benötigst, nutze bitte unsere [Portweiterleitung (Firewall)](vserver-windows-port.md) Anleitung.

</TabItem>
</Tabs>

## Fazit

Du hast erfolgreich einen FiveM Dedicated Server Service auf deinem Dedicated Server installiert und konfiguriert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂



