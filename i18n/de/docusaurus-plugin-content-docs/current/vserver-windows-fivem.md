---
id: vserver-windows-fivem
title: "vServer: FiveM Dedicated Server Setup"
description: "Entdecke, wie du deinen eigenen FiveM Dedicated Server auf einem VPS installierst und konfigurierst für nahtloses Multiplayer-Gaming → Jetzt mehr erfahren"
sidebar_label: FiveM
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Einführung

Du hast einen VPS und willst deinen eigenen FiveM Dedicated Server mit txAdmin installieren und betreiben? Dann bist du hier genau richtig! Im Folgenden erklären wir dir alle nötigen Schritte, wie du das installierst und konfigurierst und worauf du achten musst. 


## Vorbereitung

Um einen FiveM Server einzurichten, sind bestimmte Vorbereitungsschritte notwendig, die vor der eigentlichen Einrichtung des FiveM Dedicated Servers erledigt werden müssen.



### Datenbank einrichten

Wenn du Ressourcen nutzen und installieren möchtest, die eine Datenbank benötigen, brauchst du einen zusätzlichen **Datenbankserver**. Es gibt verschiedene Möglichkeiten, so einen Server einzurichten. In unserer [MySQL Installation](vserver-windows-installmysql.md) Anleitung zeigen wir dir, wie du deinen eigenen **Datenbankserver** auf deinem **VPS** installierst.



### FiveM Server Software herunterladen

Der nächste Schritt ist, die FiveM Server Software herunterzuladen. Öffne dazu einen deiner installierten Internetbrowser und navigiere zur [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) von FiveM und lade den aktuellsten FiveM Server Build herunter. 

Entpacke die heruntergeladene Datei im Downloads-Ordner und verschiebe die FiveM Server Dateien am besten in ein separates Verzeichnis. In diesem Beispiel liegt die Server-Software in einem Ordner namens **FiveM** auf dem Desktop. 

:::warning Entpackungsprogramm erforderlich
Um die heruntergeladene FiveM Server Software zu entpacken, benötigst du ein Entpackungsprogramm für die gepackte Datei. In diesem Beispiel wird [7Zip Software](https://7-zip.com/) verwendet. 
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### FiveM Server Lizenzschlüssel erstellen

Jeder FiveM Server benötigt einen eigenen Lizenzschlüssel, der über das neue [Cfx.re Portal](http://portal.cfx.re/) verwaltet wird. Der Lizenzschlüssel ist mit deinem Cfx.re Account verknüpft. Melde dich auf der Webseite an, navigiere zur Kategorie **Server** und klicke auf den Button **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Konfiguration

Jetzt kannst du mit der Installation des FiveM Servers und txAdmin starten. Öffne dazu nochmal dein FiveM Server Verzeichnis und starte die Anwendung `FXServer.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


Sobald die Server-Anwendung gestartet ist, öffnen sich die Server-Konsole und txAdmin. Im txAdmin Interface musst du deinen **Cfx.re Account** mit txAdmin verknüpfen.  


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### txAdmin Einrichtung

Während der txAdmin Einrichtung wird dein eigener FiveM Server in fünf Schritten installiert und konfiguriert. Folge den Anweisungen im txAdmin Interface und definiere zuerst einen **Servernamen**. Wähle dann den gewünschten **Servertyp** aus. Dieses Beispiel zeigt die Installation eines FiveM Servers mit vorinstalliertem QBCore.

Wähle im Schritt **Deployment Type** die Option **Popular Recipes** und dann die **QBCore Framework Template**. Bestätige das gewünschte **Datenverzeichnis** und starte den **Recipe Deployer**, um die Installation abzuschließen.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Während des Recipe Deployers müssen noch die letzten notwendigen Infos ergänzt werden, bevor der Server endlich gestartet werden kann. Gib deinen zuvor erstellten FiveM Lizenzschlüssel im Feld **License Key** ein. Klicke dann auf **Show/Hide Database Options (Advanced)** und gib die Login-Daten deines Datenbankservers ein. In diesem Fall wird nur das zuvor definierte Passwort für den **root**-User benötigt. Alle anderen Einstellungen können unverändert bleiben. Prüfe deine Eingaben und klicke dann auf **Run Recipe**, um den Prozess zu starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### Firewall-Konfiguration
Damit dein Server öffentlich erreichbar ist, musst du Portweiterleitungsregeln für die Ports anpassen, die der Dedicated Server Prozess nutzt. Das kannst du entweder direkt über Powershell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Achte darauf, mit Rechtsklick **Als Administrator ausführen** zu wählen, damit die nötigen Berechtigungen vorhanden sind und alles korrekt funktioniert.

:::info
Stelle sicher, dass du die Powershell im Administrator-Modus ausführst, sonst werden die Einstellungen möglicherweise nicht korrekt übernommen.
:::

Kopiere dann die folgenden Befehle in deine Powershell-Eingabe und führe sie aus:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein FiveM Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Nutze die Windows-Suche, um die **Windows-Firewall mit erweiterter Sicherheit** zu öffnen. Falls du nur die Basis-Firewall-Seite öffnest, musst du eventuell auf **Erweiterte Einstellungen** klicken, um das richtige Fenster zu öffnen.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen FiveM Server anlegen. Klicke dazu auf die eingehenden und ausgehenden Regeln wie unten beschrieben und füge sie für folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 30120
- UDP eingehend und ausgehend: 30120

Wenn du dabei Hilfe brauchst, nutze gerne unsere [Portweiterleitung (Firewall)](vserver-windows-port.md) Anleitung.

</TabItem>
</Tabs>

## Fazit

Du hast erfolgreich einen FiveM Dedicated Server auf deinem VPS installiert und konfiguriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂


<InlineVoucher />