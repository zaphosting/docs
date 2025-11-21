---
id: vserver-iso-windows
title: "vServer: Installation von Windows X/Windows Server 20XX"
description: "Entdecke, wie du Windows-Installationen mit maßgeschneiderten ISOs anpasst und volle Kontrolle über Setup und Treiber bekommst → Jetzt mehr erfahren"
sidebar_label: "Windows X/WS 20XX installieren"
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Einführung
Die Installation einer eigenen ISO gibt dir volle Kontrolle über die Einrichtung von Windows-Umgebungen wie Windows 10 oder Windows Server 2016/2019/2022/2025. Im Gegensatz zu unseren vorgefertigten Standard-OS-Images kannst du hier ein Installationsmedium verwenden, das genau auf deine Bedürfnisse zugeschnitten ist – zum Beispiel mit speziellen Treibern, vordefinierten Konfigurationen oder zusätzlichen Softwarepaketen.

<InlineVoucher />



## Vorbereitung

Für die Installation und Konfiguration eines Betriebssystems ist es zunächst wichtig, die passende ISO des Betriebssystems einzubinden. Falls du noch nicht weißt, wie man eine ISO mountet, schau am besten in unsere [Eigene ISO](vserver-iso.md) Anleitung rein.



## Installation

Zu Beginn der Windows-Installation wirst du durch die ersten Einrichtungsschritte geführt. Wähle zuerst die gewünschte **Sprache**, dann das **Tastaturlayout** und anschließend die **Installationsmethode**. Zur Veranschaulichung wird hier die Option **Vorherige Setup-Version** genutzt. Im nächsten Schritt wählst du die Edition aus, in diesem Beispiel **Windows Server 2025 Datacenter Desktop Experience**, das die komplette grafische Benutzeroberfläche bietet.



![img](https://screensaver01.zap-hosting.com/index.php/s/7K227dRoaz5Y4py/download)

An dieser Stelle der Installation siehst du, dass keine Partitionen angezeigt werden. Das ist kein Fehler, sondern liegt daran, dass Windows ohne zusätzliche Treiber die virtuellen Laufwerke nicht erkennt. Die wichtigen VirtIO-Treiber sind notwendig, damit die Festplatten erkannt und korrekt angesprochen werden. Diese Treiber müssen jetzt eingebunden und installiert werden, danach erscheinen die Laufwerke und du kannst mit der Partitionierung und der Installation des Betriebssystems fortfahren.



### VirtIO-Treiber

Vor der Installation des Betriebssystems müssen die VirtIO-Treiber eingerichtet werden. Diese Windows-Treiber sind speziell für KVM-basierte Hypervisor optimiert und sorgen dafür, dass Windows-VMs mit maximaler Performance und Kompatibilität laufen.

Dazu musst du das Installationsmedium **temporär** auf die `virtio-win.iso` umstellen. Wähle die VirtIO-ISO aus den verfügbaren ISOs aus und klicke auf **Mounten**. So sind die Treiber während des Setups verfügbar und können installiert werden, bevor du mit der eigentlichen OS-Installation weitermachst.



![img](https://screensaver01.zap-hosting.com/index.php/s/wtZFngf9FofiQ88/download)

:::warning NICHT DEN SERVER NEUSTARTEN
Beim **temporären** Wechsel der ISO auf die VirtIO-ISO darfst du den Server **<u>nicht</u>** neu starten. Es reicht, nur die ISO auszuwählen. Ein Neustart würde den bisherigen Fortschritt löschen. 

:::

Die benötigten Treiber sind in drei Ordnern organisiert: **Balloon**, **NetKVM** und **vioscsi**. Jeder dieser Ordner enthält einen speziellen Treiber, der für den Betrieb einer Windows-VM auf einem KVM-Hypervisor essenziell ist.

- **Balloon:** Dieser Treiber verwaltet dynamisch die Speicherzuweisung, sodass der zugewiesene RAM der VM ohne Neustart vergrößert oder verkleinert werden kann.  
- **NetKVM:** Dieser Treiber stellt eine voll funktionsfähige und optimierte Netzwerkschnittstelle bereit, die stabile und performante Netzwerkverbindungen für die VM garantiert.  
- **Vioscsi:** Ein spezialisierter SCSI-Controller-Treiber, der die korrekte Erkennung und schnellen Zugriff auf virtuelle Festplatten sicherstellt. Er verbessert die I/O-Leistung und sorgt dafür, dass Windows die virtuellen Laufwerke richtig erkennt.  

In jedem dieser Ordner gibt es einen Unterordner, der der Systemarchitektur entspricht. Während der Installation musst du den Unterordner auswählen, der zum Betriebssystem passt, das du installieren möchtest. Verwende dabei immer die amd64-Architektur. <u>Wiederhole den Vorgang für alle drei Treiberordner, wie im Screenshot gezeigt.</u>

![img](https://screensaver01.zap-hosting.com/index.php/s/fisTox5ziW4Y3tt/download)

Sobald die VirtIO-Treiber erfolgreich installiert sind, kannst du mit der eigentlichen Installation des Betriebssystems fortfahren. Wie zuvor musst du das ISO-Image wechseln. Wähle diesmal die originale Installations-ISO des Betriebssystems aus und öffne anschließend die VNC-Konsole neu, um die Installation fortzusetzen.

![img](https://screensaver01.zap-hosting.com/index.php/s/QECit2kf66WQF9R/download)



### Partition erstellen und auswählen

Im nächsten Schritt konfigurierst du die Partitionierung. Lösche zuerst alle noch vorhandenen unbekannten Partitionen. Wähle dann die neu verfügbaren nicht zugeordneten Partitionen als Ziel für die Betriebssysteminstallation aus.

![img](https://screensaver01.zap-hosting.com/index.php/s/tRijdykS6CxyrbA/download)

Klicke danach auf **Weiter**, um fortzufahren. Der Rest der Installation läuft automatisch ab. Am Ende wirst du aufgefordert, die Zugangsdaten für das Administrator-Konto festzulegen.

![img](https://screensaver01.zap-hosting.com/index.php/s/bPzrdmbgYeLGrjJ/download)



## Konfiguration

Nach der erfolgreichen Installation des Betriebssystems sind noch ein paar letzte Konfigurationsschritte nötig, damit das System sicher und zuverlässig genutzt werden kann. Dazu gehört das Aktivieren und Verwalten des Zugriffs über **Remote Desktop (RDP)**, das Einrichten der **Firewall-Regeln** für Schutz und Funktionalität sowie die **Netzwerkkonfiguration**, um den Server korrekt ins Netzwerk einzubinden.

Mit diesen Anpassungen stellst du sicher, dass der Fernzugriff funktioniert, Monitoring und Statuschecks problemlos laufen und der Server mit stabilen, vorhersehbaren Netzwerkparametern in deiner Infrastruktur arbeitet.



### RDP-Konfiguration

Um Remote Desktop (RDP) unter Windows zu aktivieren, ist das Vorgehen bei Windows 10 (Client-Systeme) und Windows Server 2016/2019/2022/2025 ähnlich. Öffne die **Systemsteuerung** oder **Einstellungen**, navigiere zu **System → Remote Desktop** (bei Client-Editionen) oder **Systemeigenschaften → Remote** (bei Server-Editionen) und aktiviere die Option **Remoteverbindungen zu diesem Computer zulassen**. Bei Server-Versionen heißt die Option **Remote Desktop aktivieren**.

![img](https://screensaver01.zap-hosting.com/index.php/s/kcA3bWFHamWRwL8/download)



### Firewall-Konfiguration

Damit der Server vollständig initialisiert ist und Statusprüfungen wie Ping-Tests erfolgreich sind, muss das **ICMP-Protokoll** in der Windows-Firewall erlaubt sein. Ohne diese Regel können Monitoring-Tools und Netzwerktests den Server nicht erreichen, was zu fehlgeschlagenen Gesundheitschecks führt.

![img](https://screensaver01.zap-hosting.com/index.php/s/jyLqA5Ly3iXDPJ5/download)

Um ICMP zu aktivieren, öffne die **Windows-Firewall mit erweiterter Sicherheit** und gehe zum Bereich der eingehenden Regeln. Erstelle eine neue benutzerdefinierte Regel, setze das Protokoll auf „Beliebig“ und wähle **ICMPv4** aus. Konfiguriere die Regel so, dass sie für alle Ports gilt, und wähle die Profile (Domain, Privat, Öffentlich) aus, für die die Regel aktiv sein soll. In den meisten Fällen empfiehlt es sich, alle Profile zu aktivieren. Vergib abschließend einen aussagekräftigen Namen wie *Eingehendes ICMP erlauben* und schließe den Assistenten ab.

Ab diesem Zeitpunkt akzeptiert der Server ICMP-Anfragen, sodass Befehle wie `ping` und Monitoring-Systeme den Server erreichen und seinen Status erfolgreich überprüfen können.



### Netzwerkkonfiguration

Um die Netzwerkeinstellungen in Windows manuell zu konfigurieren, öffne zuerst das **Netzwerk- und Freigabecenter** über die Systemsteuerung oder die Taskleiste. Wähle den entsprechenden Netzwerkadapter (LAN oder WLAN) aus, klicke mit der rechten Maustaste darauf und öffne die **Eigenschaften**. Markiere aus der Liste den Eintrag **Internetprotokoll Version 4 (TCP/IPv4)** und klicke auf **Eigenschaften**.

![img](https://screensaver01.zap-hosting.com/index.php/s/nEGkdE79tDwLszr/download)

Im Dialogfenster ändere die Einstellung von „IP-Adresse automatisch beziehen“ auf „Folgende IP-Adresse verwenden“. Jetzt kannst du die **IP-Adresse**, **Subnetzmaske** und **Standardgateway** für deinen Server eingeben. Darunter stellst du die DNS-Einstellungen auf manuell um und trägst `1.1.1.1` und `8.8.8.8` als primäre und sekundäre **DNS**-Server ein. Bestätige mit **OK**, um die statische Netzwerkkonfiguration zu übernehmen.









## Fazit

Glückwunsch, du hast dein Windows-Betriebssystem erfolgreich installiert und konfiguriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂



<InlineVoucher />