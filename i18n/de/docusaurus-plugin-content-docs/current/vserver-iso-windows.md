---
id: vserver-iso-windows
title: "vServer: Installation von Windows X/Windows Server 20XX"
description: "Informationen zur Installation von Windows X/Windows Server 20XX mit einem vServer von ZAP-Hosting – ZAP-Hosting.com Dokumentation"
sidebar_label: "Windows X/WS 20XX installieren"
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Die Installation einer eigenen ISO bietet dir die volle Kontrolle über die Einrichtung von Windows-Umgebungen wie Windows 10 oder Windows Server 2016/2019/2022/2025. Anders als bei unseren vorgefertigten Standard-OS-Images kannst du so ein Installationsmedium verwenden, das genau auf deine Anforderungen zugeschnitten ist, zum Beispiel mit speziellen Treibern, vordefinierten Konfigurationen oder zusätzlichen Softwarepaketen.

<InlineVoucher />



## Vorbereitung

Für die Installation und Konfiguration eines Betriebssystems ist es zunächst wichtig, die entsprechende ISO des Betriebssystems einzubinden. Falls du noch nicht mit dem Einbinden einer ISO-Datei vertraut bist, nutze am besten unsere Anleitung [Eigene ISO](vserver-iso.md).



## Installation

Zu Beginn der Installation des Windows-Betriebssystems wirst du durch die ersten Einrichtungsschritte geführt. Wähle zuerst die gewünschte **Sprache**, konfiguriere anschließend das **Tastaturlayout** und wähle danach die **Setup-Methode**. Für Demonstrationszwecke wird hier die Option **Previous Version of Setup** verwendet. Im nächsten Schritt wählst du die Edition aus; in diesem Beispiel wird **Windows Server 2025 Datacenter Desktop Experience** gewählt, welche die vollständige grafische Benutzeroberfläche bereitstellt.



![img](https://screensaver01.zap-hosting.com/index.php/s/7K227dRoaz5Y4py/download)

An diesem Punkt der Installation fällt auf, dass keine Partitionen angezeigt werden. Das ist kein Fehler, sondern liegt daran, dass Windows ohne zusätzliche Treiber die virtuellen Laufwerke nicht erkennt. Für die Laufwerkerkennung und die korrekte Behandlung sind die essenziellen VirtIO-Treiber erforderlich. Diese Treiber müssen jetzt eingebunden und installiert werden; anschließend erscheinen die Laufwerke und du kannst mit der Partitionierung sowie der Installation des Betriebssystems fortfahren.



### VirtIO-Treiber

Vor der Installation des Betriebssystems müssen die VirtIO-Treiber eingerichtet werden. Diese Windows-Treiber sind für den Einsatz mit KVM-basierten Hypervisoren optimiert und sorgen dafür, dass Windows-VMs mit maximaler Leistung und Kompatibilität laufen.

Hierfür musst du das Installationsmedium **temporär** auf die `virtio-win.iso` umschalten. Wähle die VirtIO-ISO-Datei aus den verfügbaren ISOs und klicke auf **Mount**. Dadurch sind die Treiber während des Setups zugänglich und können installiert werden, bevor die Betriebssysteminstallation fortgesetzt wird.



![img](https://screensaver01.zap-hosting.com/index.php/s/wtZFngf9FofiQ88/download)

:::warning DEN SERVER NICHT NEU STARTEN
Beim **temporären** Umschalten der ISO auf die VirtIO-Variante muss nur die ISO ausgewählt werden. Das System darf **<u>nicht</u>** neu gestartet werden, da sonst der bisherige Fortschritt verloren geht. 
:::

Die benötigten Treiber sind in drei eigenen Ordnern organisiert: **Balloon**, **NetKVM** und **vioscsi**. Jeder dieser Ordner enthält eine spezifische Treiberart, die für den Betrieb einer Windows-VM auf einem KVM-basierten Hypervisor erforderlich ist. 

- **Balloon:** Dieser Treiber verwaltet die Speicherzuweisung dynamisch und ermöglicht es, den der VM zugewiesenen RAM ohne Neustart zu erweitern oder zu verkleinern.  
- **NetKVM:** Dieser Treiber stellt eine voll funktionsfähige und optimierte Netzwerkschnittstelle bereit und sorgt für stabile, leistungsfähige Netzwerkverbindungen der VM.  
- **Vioscsi:** Dabei handelt es sich um einen spezialisierten SCSI-Controller-Treiber, der die korrekte Erkennung und den schnellen Zugriff auf virtuelle Festplatten sicherstellt. Er verbessert die I/O‑Leistung und garantiert, dass Windows die virtuellen Datenträger korrekt erkennt.  

In jedem dieser Ordner befindet sich ein Unterordner, der der Systemarchitektur entspricht. Während der Installation musst du den Unterordner auswählen, der zu dem von dir zu installierenden Betriebssystem passt. Achte darauf, für diesen Prozess stets die Architektur **amd64** zu verwenden. <u>Wiederhole den Vorgang für alle drei Treiberordner wie im Screenshot dargestellt.</u>

![img](https://screensaver01.zap-hosting.com/index.php/s/fisTox5ziW4Y3tt/download)

Sobald die VirtIO-Treiber erfolgreich installiert wurden, kannst du mit der eigentlichen Installation des Betriebssystems fortfahren. Wie zuvor muss die ISO-Datei wieder umgestellt werden. Wähle diesmal die ursprüngliche Installations-ISO des Betriebssystems aus und öffne anschließend die VNC-Konsole erneut, um mit der Installation fortzufahren.

![img](https://screensaver01.zap-hosting.com/index.php/s/QECit2kf66WQF9R/download)



### Partition erstellen und auswählen

Als Nächstes erfolgt die Konfiguration der Partitionierung. Lösche zunächst eventuell vorhandene, unbekannte Partitionen. Wähle anschließend die neu verfügbare, nicht zugewiesene Partition als Ziel für die Betriebssysteminstallation aus. 

![img](https://screensaver01.zap-hosting.com/index.php/s/tRijdykS6CxyrbA/download)

Klicke danach auf **Weiter**, um fortzufahren. Der restliche Installationsprozess läuft automatisch ab. Am Ende wirst du aufgefordert, die Zugangsdaten für das **Administrator**-Konto festzulegen.

![img](https://screensaver01.zap-hosting.com/index.php/s/bPzrdmbgYeLGrjJ/download)



## Konfiguration

Nach Abschluss der Betriebssysteminstallation sind einige finale Konfigurationsschritte erforderlich, um ein sicheres und zuverlässiges System zu gewährleisten. Dazu gehören das Aktivieren und Einrichten des Zugriffs per **Remote Desktop (RDP)**, die Konfiguration der **Firewall-Regeln**, um Schutz und Funktionalität sicherzustellen, sowie das Einrichten der **Netzwerkkonfiguration**, um den Server korrekt ins Netzwerk zu integrieren.

Mit diesen Anpassungen stellst du sicher, dass Remotezugriff möglich ist, Überwachung und Statusprüfungen fehlerfrei funktionieren und der Server in deiner Infrastruktur mit stabilen, vorhersagbaren Netzwerkparametern arbeitet.



### RDP-Konfiguration

Das Aktivieren von Remote Desktop (RDP) unter Windows verläuft bei Windows 10 (Client-Systemen) sowie Windows Server 2016/2019/2022/2025 weitgehend identisch. Öffne die **Systemsteuerung** oder **Einstellungen**, navigiere zu **System → Remotedesktop** (bei Client-Editionen) oder **Systemeigenschaften → Remote** (bei Server-Editionen) und aktiviere die Option **Remoteverbindungen mit diesem Computer zulassen**. In Server-Versionen erscheint dies als **Remote Desktop aktivieren**.

![img](https://screensaver01.zap-hosting.com/index.php/s/kcA3bWFHamWRwL8/download)



### Firewall-Konfiguration

Damit ein Server vollständig initialisiert ist und Statusprüfungen wie Ping-Tests erfolgreich sind, muss das **ICMP-Protokoll** durch die Windows-Firewall erlaubt werden. Ohne diese Regel können Monitoring-Tools und Netzwerktests den Server nicht erreichen, was zu fehlschlagenden Health-Checks führt.

![img](https://screensaver01.zap-hosting.com/index.php/s/jyLqA5Ly3iXDPJ5/download)

Um ICMP zu erlauben, öffne die **Windows-Firewall mit erweiterter Sicherheit** und gehe zum Bereich der eingehenden Regeln. Lege eine neue **benutzerdefinierte Regel** an, setze das Protokoll auf „Any“ und wähle **ICMPv4**. Konfiguriere die Regel so, dass sie für alle Ports gilt, und wähle die Profile (Domäne, Privat, Öffentlich), in denen die Regel aktiv sein soll. In den meisten Fällen empfiehlt es sich, die Regel für alle Profile zu aktivieren. Vergib abschließend einen aussagekräftigen Namen wie *Allow inbound ICMP* und schließe den Assistenten ab.

Ab diesem Zeitpunkt akzeptiert der Server ICMP-Anfragen, sodass Befehle wie `ping` und Monitoringsysteme ihn erreichen und seinen Status erfolgreich prüfen können.



### Netzwerkkonfiguration

Um die Netzwerkeinstellungen in Windows manuell zu konfigurieren, öffne zunächst das **Netzwerk- und Freigabecenter** über die Systemsteuerung oder die Taskleiste. Wähle den relevanten Netzwerkadapter (LAN oder WLAN), klicke mit der rechten Maustaste darauf und öffne die **Eigenschaften**. Markiere in der Liste der Elemente **Internetprotokoll, Version 4 (TCP/IPv4)** und klicke auf **Eigenschaften**.

![img](https://screensaver01.zap-hosting.com/index.php/s/nEGkdE79tDwLszr/download)

Ändere im Dialog die Einstellung von „IP-Adresse automatisch beziehen“ zu „Folgende IP-Adresse verwenden“. Jetzt kannst du **IP-Adresse**, **Subnetzmaske** und **Standardgateway** für deinen Server eintragen. Darunter stellst du die DNS-Einstellungen auf manuell und gibst `1.1.1.1` und `8.8.8.8` als primäre und sekundäre **DNS**-Server an. Bestätige mit **OK**, um die statische Netzwerkkonfiguration zu übernehmen.









## Abschluss

Glückwunsch, du hast dein Windows-Betriebssystem erfolgreich installiert und konfiguriert. Für weitere Fragen oder Unterstützung wende dich bitte an unser Support‑Team, das täglich für dich da ist! 🙂



<InlineVoucher />
