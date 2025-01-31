---
id: vserver-windows-fivem
title: "vServer: FiveM Dedicated Server Einrichtung"
description: Informationen zum Einrichten eines FiveM Dedicated Servers auf einem Windows vServer von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: FiveM
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Einführung

Besitzt du einen vServerr und möchtest deinen eigenen FiveM Dedicated Server Service mit txAdmin installieren und betreiben? Dann bist du bei uns genau richtig! Im Folgenden erklären wir alle notwendigen Schritte zur Installation und Konfiguration und was es dabei zu beachten gilt. 



## Vorbereitung

Zum Aufsetzen eines FiveM Servers sind gewisse Vorbereitungsschritte notwendig, die umgesetzt werden müssen, bevor mit der eigentlichen Einrichtung des FiveM Dedicated Server begonnen werden kann.



### Datenbank einrichten

Wenn du Ressourcen nutzen und installieren möchtest, die eine Datenbank erfordern, benötigst du einen zusätzlichen **Datenbankserver**. Die Einrichtung eines solchen Servers kann auf verschiedene Weise erfolgen. In unserer Anleitung [ MySQL installieren](vserver-windows-installmysql.md) zeigen wir dir, wie du einen eigenen **Datenbankserver** auf deinem **vServer** installierst.



### FiveM Server Software herunterladen

Als Nächstes muss die FiveM Server Software heruntergeladen werden. Navigiere dazu über einen der installierten Internet Browser deiner Wahl auf die [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) Webseite von FiveM und lade den neusten FiveM Server Build herunter. 

Entpacke im Anschluss die heruntergeladene Datei im Downloads Verzeichnis und verschiebe die FiveM Server-Dateien vorzugsweise in ein eigenes Verzeichnis. In diesem Verzeichnis befindet sich die Server Software in einem Ordner mit dem Namen **FiveM** auf dem Desktop. 

:::warning Entpackungsprogramm benötigt
Für das entpacken der heruntergeladenen FiveM Server Software wird für die gepackte Datei ein Entpackungsprogramm benötigt. In diesem Beispiel wird die [7Zip Software](https://7-zip.com/) verwendet. 
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### FiveM Server Lizensschlüssel erstellen

Jeder FiveM Server benötigt seinen eigenen Lizenzschlüssel, der über das neue [Cfx.re Portal](http://portal.cfx.re/) verwaltet wird. Der Lizenzschlüssel wird mit deinem Cfx.re Account verknüpft. Logge dich auf der Seite ein, navigiere zu der **Server** Kategorie und klicke dort auf den **Generate Key** Button.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Konfiguration

Nun kann mit der Installation des FiveM Server und txAdmin begonnen werden. Um mit diesem Schritt zu starten, rufe erneut dein FiveM Server Verzeichnis auf und führe die `FXServer.exe` Anwendung aus. Nachdem die Serveranwendung ausgeführt wurde, öffnen sich die Server Konsole und die txAdmin-Oberfläche. Dort müssen Sie Ihr CFX-Konto verknüpfen. 

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)



Nachdem die Serveranwendung ausgeführt wurde, öffnen sich die Server Konsole und die txAdmin. In der txAdmin-Oberfläche musst du deinen **Cfx.re Account** mit txAdmin verknüpfen.  

![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### txAdmin Setup

Während des txAdmin-Setups wird dein eigener FiveM Server in fünf Schritten installiert und konfiguriert. Folge den Anweisungen im txAdmin Interface und lege zunächst einen **Servernamen** fest. Danach wählst du die gewünschte **Serverart** aus. In diesem Beispiel wird die Installation eines FiveM Servers mit vorinstalliertem QBCore gezeigt.

Wähle im Schritt **Deployment Type** die Option **Popular Recipes** und anschließend das **QBCore Framework Template**. Bestätige das gewünschte **Datenverzeichnis** und starte den **Recipe Deployer**, um die Installation abzuschließen.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Während des Recipe Deployers müssen die letzten erforderlichen Informationen ergänzt werden, bevor der Server endgültig gestartet werden kann. Trage in das Feld **License Key** deinen zuvor erstellten FiveM-Lizenzschlüssel ein. Klicke anschließend auf **Show/Hide Database Options (Advanced)** und gib die Zugangsdaten deines Datenbankservers ein. In diesem Fall wird lediglich das zuvor festgelegte Passwort für den **root**-Benutzer benötigt. Alle weiteren Einstellungen können unverändert bleiben. Überprüfe deine Eingaben und klicke abschließend auf **Run Recipe**, um den Vorgang zu starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)




### Firewall Konfiguration
Um sicherzustellen, dass dein Server für die Öffentlichkeit zugänglich ist, musst du die Portweiterleitungsregeln für die Ports ändern, die der dedizierte Serverprozess verwendet. Du kannst dies entweder direkt über Powershell-Befehle tun, was einfacher ist, oder regelmäßig über die Windows Defender Firewall-Seite.

<Tabs>
<TabItem value="powershell" label="Über Powershell" default>

Öffne dein Windows-Suchfeld und suche nach **Powershell**. Achte darauf, dass du mit der rechten Maustaste klickst und **Als Administrator ausführen** wählst, damit die Berechtigungen zugänglich sind und alles richtig funktioniert.

:::info
Vergewissere dich, dass du die Powershell im Administratormodus ausführst, sonst werden die Einstellungen möglicherweise nicht korrekt übernommen.
:::

Als nächstes kopierst du die folgenden Befehle und fügst sie in deine Powershell-Eingabeaufforderung ein:

```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

Mit diesen Befehlen werden automatisch Firewall-Regeln erstellt, die notwendig sind, damit dein FiveM Server für die Öffentlichkeit zugänglich ist.

</TabItem>

<TabItem value="windefender" label="Über Windows Defender">

Verwende die Suchfunktion von Windows, um die **Windows Firewall-Einstellungen mit erweiterter Sicherheit** zu öffnen. Es kann sein, dass du auf **Erweiterte Einstellungen** drücken musst, um das entsprechende Fenster zu öffnen, wenn du die Basisseite der Windows Firewall öffnest.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen FiveM-Server erstellen. Klicke dazu wie unten beschrieben auf die eingehenden und ausgehenden Regeln und füge sie für die folgenden Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 27000
- UDP eingehend und ausgehend: 27000, 27003, 27020, 27021

Bitte benutze unsere [Portweiterleitung (Firewall)](vserver-windows-port.md) Anleitung, wenn du weitere Hilfe dabei brauchst.

</TabItem>
</Tabs>




## Abschluss

Du hast auf deinem vServer erfolgreich einen FiveM Dedicated Server Dienst installiert und konfiguriert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

