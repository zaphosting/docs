---
id: vserver_linux_docker
title: vServer: Docker auf Server installieren
description: Informationen, wie du Docker auf deinen vServer von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Docker
---

## Was ist Docker überhaupt?

Docker ist eine leichtgewichtige Open-Source Virtualisierungssoftware um Dienste bzw. Anwendungen isoliert auf einem einzelnen System bereitzustellen. Im Gegensatz zu richtigen Virtuellen Maschinen wird hierfür kein extra Betriebssystem emuliert bzw. gehostet, sondern explizit nur eine Anwendungsumgebung innerhalb des Hostsystemes. Das ist nicht nur allgemein Ressourcen sparend, sondern verursacht gleichzeitig im Vergleich zur Voll Virtualisierung einen niedrigen Overhead.

## Wie installiere ich Docker auf meinem Linux Server?

> In diesem Beispiel setzen wir Docker auf einem Debian 9 System auf und installieren es via Paketquellen. Es kann bei einem anderen Betriebssystem Abweichungen geben!

Schritt 1: Verbinde dich mit Putty mit deinem Server.

Schritt 2: Soweit du mit deinem Server via Putty verbunden bist, muss am Anfang der GPG-Key, also die Schlüsseldatei von Docker, zu unserem System hinzufügt werden:
```
apt-key adv –keyserver hkp://p80.pool.sks-keyservers.net:80 –recv-keys 58118E89F3A912897C070ADBF76221572C52609D
```

Anschließend fügen wir Docker zu unseren Paketquellen hinzu, sodass wir das Paket via apt-get installieren können.
```
echo "deb https://apt.dockerproject.org/repo debian-jessie main" >> /etc/apt/sources.list.d/docker.list 
```

Schritt 3: Nun können wir Docker herunterladen. 
**Wichtig** ist, dass wir noch apt-get ermöglichen, Pakete von HTTP(S) Seiten herunterzuladen. 
Dazu einmal den Befehl: 
```
apt-get -y install apt-transport-https ca-certificates 
```
eingeben und durchlaufen lassen. Danach folgende Befehle eingeben + ausführen: 
```
apt-get update && apt-get -y install docker-engine
systemctl start docker
systemctl enable docker
```

## Überprüfen ob die Installation von Docker erfolgreich war

Wenn das alles erledigt wurde, können wir schauen ob Docker läuft: 
```
systemctl status docker 
```

![](https://screensaver01.zap-hosting.com/index.php/s/492kc5RBqcHf5qF/preview)

Wenn das so aussieht und bei der Ausgabe "**Active (running)**" steht, wurde Docker komplett ohne Probleme Installiert. 
Mit einem **docker run hello-world** kann man dann checken ob Docker auch korrekt ausgeführt wird.
Die Ausgabe sollte so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/gbFj5W2rnrYzdom/preview)

Die Installation von Docker war erfolgreich.
Nun kannst du los legen und Docker verwenden!
