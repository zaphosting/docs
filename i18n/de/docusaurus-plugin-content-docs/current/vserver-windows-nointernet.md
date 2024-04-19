---
id: vserver-windows-nointernet
title: "vServer:  Kein Internet, was nun?"
description: Informationen zur Lösung von Problemen mit nicht vorhandener Internetverbindung unter Windows vRootserver von ZAP-Hosting zeigt keinen Internetzugang - ZAP-Hosting.com Dokumentation
sidebar_label: Kein Internet, was nun?
---



## Einführung

Eine unterbrochene oder fehlerhafte Internetverbindung kann auf unterschiedliche Ursachen zurückzuführen sein, wie beispielsweise falsche Einstellungen der IP-Adresse, Subnetzmaske, Gateway, DNS-Server oder Firewall. Im Folgenden werden wir dir erläutern, wie du diese möglichen Probleme überprüfen, identifizieren und beheben kannst.



## Zugriff ohne Internet

Falls du aufgrund einer nicht funktionalen Internetverbindung keinen RDP-Zugriff hast, bietet sich die Verwendung der VNC-Konsole (Virtual Network Computing) als Alternative an. Diese Option ermöglicht es dir, auf den Dienst zuzugreifen und Probleme zu lösen, selbst wenn die Internetverbindung nicht funktional ist. Du kannst darauf zugreifen, indem du in deinem Dashboard den Bereich **Werkzeuge** öffnest und die **VNC-Konsole** auswählst. Dort kannst du die Konsole aktivieren, indem du den grünen "Webclient öffnen" Button verwendest und dich anschließend mit deinen gewohnten Zugangsdaten einloggst.

![img](https://screensaver01.zap-hosting.com/index.php/s/y3S4Gw7scwZnHwy/preview)



## Problembehebung



### Schritt 1: IP-Adresse, Subnetzmask, Gateway Einstellungen

Wenn die Internetverbindung nicht funktional ist, dann kann dies an einer falschen Konfiguration der IP-Adresse, Subnetzmaske, und Gateway liegen. In dem Fall muss sichergestellt werden, dass die richtigen Informationen eingetragen sind. Die Informationen zu deiner IP-Adresse, Subnetzmaske und Gateway kannst du in deinem Dashboard unter Einstellungen bei IP-Adresses einsehen. 

Öffne nun die Netzwerkeinstellungen bei dem Betriebssystem deines Servers. Diese kannst du unter den Windows Einstellungen bei Netzwerk und Internet -> Adapteroptionen ändern -> Netzwerk Adapter -> Eigenschaften -> Internetprotokoll, Version 4 (TCP/IPv4) aufrufen. 

![img](https://screensaver01.zap-hosting.com/index.php/s/QmcworojD6pMQby/preview)



In den Eigenschaften muss nun sichergestellt werden, dass die korrekten Informationen zur IP-Adresse, Subnetzmaske, und Gateway hinterlegt sind. Gleiche die Informationen dazu mit denen aus dem Webinterface ab und korrigiere diese bei Notwendigkeit. In den Eigenschaften solltest du sicherstellen, dass die richtigen Informationen für die IP-Adresse, Subnetzmaske und das Gateway eingetragen sind. 

In unserem Netzwerk verwenden wir normalerweise die Netzklasse C mit einer Subnetzmaske von 255.255.255.0. Für das Standardgateway verwendest du die Informationen deiner IP-Adresse. Allerdings muss dort noch das letzte Oktett zum Wert 1 (XXX.XXX.XXX.XXX -> XXX.XXX.XXX.1) geändert werden. 



**Beispiel**

Wenn ein Dienst beispielsweise die IP-Adresse "185.223.28.163" besitzt, dann würde die Konfiguration wie folgt aussehen: 

| Einstellung     | Wert           |
| --------------- | -------------- |
| IP-Adresse      | 185.223.28.163 |
| Subnetzmaske    | 255.255.255.0  |
| Standardgateway | 185.223.28.1   |



![img](https://screensaver01.zap-hosting.com/index.php/s/9B7ms2J8nxYzCep/preview)



Klicke im Anschluss auf "Ok", damit die Änderungen übernommen wird. In gewissen Situationen kann es vorkommen, dass zusätzlich ein Neustart des Dienstes notwendig ist, damit die Problembehebung vollständig abgeschlossen werden kann. 



### Schritt 2: DNS-Server Einstellungen

Wenn die Internetverbindung weiterhin nicht funktional ist, dann kann dies ebenfalls auf einen nicht funktionalen DNS-Server zurückzuführen zu sein. Versuche den fehlenden oder bestehenden DNS-Server zu ersetzen, wenn dieser nicht funktional ist. Es stehen verschiedene DNS-Server-Optionen zur Verfügung, darunter beispielsweise die bekannten DNS-Server Lösungen von Google und Cloudflare.  

| DNS-Server | IP-Adresses                            |
| ---------- | -------------------------------------- |
| Google     | Bevorzugt: 8.8.8.8 Alternativ: 8.8.4.4 |
| Cloudflare | Bevorzugt: 1.1.1.1 Alternativ: 1.0.0.1 |

![img](https://screensaver01.zap-hosting.com/index.php/s/frYTimNEFzBjANy/preview)



Klicke im Anschluss auf "Ok", damit die Änderungen übernommen wird. In gewissen Situationen kann es vorkommen, dass zusätzlich ein Neustart des Dienstes notwendig ist, damit die Problembehebung vollständig abgeschlossen werden kann. 



### Schritt 3: Firewall Einstellungen 

Eine weitere Möglichkeit für eine fehlende oder fehlerhafte Internetverbindung kann durch eine inkorrekte Konfiguration der Firewall entstehen. Das lässt sich in der Regel schnell durch die temporäre Deaktivierung der Firewall identifizieren. Sollte die Problematik im Anschluss nicht mehr auftreten, so wird eine spezifische Firewall Regel den notwendigen Austausch der Informationen blockieren. 

![img](https://screensaver01.zap-hosting.com/index.php/s/kSbpgpkNotFgiXL/preview)

In dem Fall musst du sicherstellen, dass du die zuletzt vorgenommenen Änderungen im Detail prüft und behebst. Alternativ kannst du die Windows Firewall Regeln auch zurücksetzen, in dem du bei Aktionen auf Standardrichtlinie wiederherstellen klickst. 



