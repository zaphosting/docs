---
id: dedicated-linux-docker
title: "Dedicated Server: Installation von Docker"
description: Informationen, wie du Docker auf deinen Dedicated Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Docker installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Einführung

Docker ist eine leichtgewichtige Open-Source-Virtualisierungssoftware, um Dienste oder Anwendungen isoliert auf einem einzelnen System bereitzustellen. Im Gegensatz zu echten virtuellen Maschinen wird hierfür kein zusätzliches Betriebssystem emuliert oder gehostet, sondern nur eine Anwendungsumgebung innerhalb des Hostsystems. Dies spart nicht nur generell Ressourcen, sondern verursacht gleichzeitig einen geringen Overhead im Vergleich zur Vollvirtualisierung. In dieser Anleitung behandeln wir den Prozess der Installation von Docker auf deinem Server.

<InlineVoucher />

## Vorbereitung

Zu Beginn musst du dich über SSH mit deinem Linux-Server verbinden. Bitte schau dir unsere Anleitung [Erstzugriff (SSH)](vserver-linux-ssh.md) an, wenn du dabei Hilfe benötigst. In dieser Anleitung verwenden wir Ubuntu als Linux-Distribution.

### Docker-Kompatibilität aktivieren

Du musst die **Docker-Kompatibilität** auf deiner Weboberfläche aktivieren, damit Docker-Container funktionieren. Andernfalls erhältst du die Fehlermeldung `Permission Denied` (Berechtigung verweigert).

Gehe zum Abschnitt **Einstellungen** auf der Weboberfläche deines Servers, aktiviere die Option **Docker-Kompatibilität** und speichere.

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

Stelle nach dem Speichern sicher, dass du deinen Server neu startest, bevor du fortfährst.

## Installation

Jetzt, da du mit deinem Linux-Server verbunden bist, kannst du mit den Installationsmethoden fortfahren. Wähle eines der folgenden Linux-Repositorys aus, um die entsprechenden Installationsschritte anzuzeigen.

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

Zu Beginn musst du das Docker-Paket mithilfe von `apt` hinzufügen und einrichten. Dadurch kannst du Docker in Zukunft einfach über das Repository installieren und aktualisieren.

Füge mit den folgenden Befehlen den offiziellen GPG-Schlüssel von Docker zu deiner Repository-Liste hinzu.
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Sobald diese eingerichtet wurden, musst du das Repository mit dem folgenden Befehl zu den `apt`-Quellen hinzufügen.
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Nachdem du das Docker-Repository zu deinen Quellen hinzugefügt hast, führe den Befehl `apt-get` update aus, um die Änderungen abzurufen.
```
sudo apt-get update
```

Zu diesem Zeitpunkt hast du das Docker-`apt`-Repository erfolgreich eingerichtet. Als letzten Schritt musst du die Docker-Pakete installieren. Du kannst die neueste Version mit dem folgenden Befehl installieren.
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

Zu Beginn solltest du das Paket `dnf-plugins-core` installieren, das bei der Verwaltung von Repositorys hilft.
```
sudo dnf -y install dnf-plugins-core
```

Nachdem das Paket installiert wurde, solltest du das Docker-Repository hinzufügen und es mit dem folgenden Befehl installieren.
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

Docker sollte nun installiert sein. Als letzten Schritt musst du es starten und aktivieren, damit es funktioniert.
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

Um zu überprüfen, ob die Installation erfolgreich war, versuche, das **hello-world**-Image mit dem folgenden Befehl auszuführen.
```
sudo docker run hello-world
```

Bei Erfolg sollte im Chat eine nützliche Hallo-Nachricht mit einigen grundlegenden Informationen angezeigt werden. Wenn du Fehlermeldungen wie `Permission Denied` erhältst, stelle bitte sicher, dass du die Option **Docker Compatibility** auf deiner Weboberfläche aktiviert und den Server neu gestartet hast, wie im Abschnitt [Preparation](#vorbereitung) beschrieben.

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

Du hast Docker erfolgreich auf deinem Linux-Server installiert.

## Einrichtung nach der Installation

Nachdem Docker nun auf deinem Server installiert ist, kannst du einige zusätzliche Einstellungen vornehmen, um sudo bei der Ausführung von Docker-Befehlen zu entfernen und Docker beim Server-Start zu starten.

### Docker ohne sudo verwalten

Du kannst das Präfix `sudo` vor allen Docker-bezogenen Befehlen entfernen, indem du eine neue Docker-Gruppe erstellst und deine Benutzer dieser Gruppe hinzufügst. Dies erhöht den Komfort, aber sei vorsichtig, dass du dem Benutzer dadurch indirekt Root-Rechte gewährst.

Erstelle die Gruppe `docker` und füge deinen aktuellen Benutzer mit den folgenden Befehlen zur Gruppe hinzu.
```
# Docker-Gruppe erstellen
sudo groupadd docker

# Füge den aktuellen Benutzer zur Docker-Gruppe hinzu
sudo usermod -aG docker $USER
```

Danach empfehlen wir, den Server neu zu starten, um sicherzustellen, dass die Gruppenmitgliedschaft vom Server neu bewertet wird. Alternativ kannst du dazu auch `newgrp docker` verwenden.

Überprüfe nun, ob du Docker-Befehle ohne `sudo`-Berechtigungen ausführen kannst, indem du den Befehl `docker run hello-world` erneut ausführst.

:::tip
Manchmal kann es zu Fehlermeldungen bezüglich einer Konfigurationsdatei kommen, wenn du den Befehl zuvor mit `sudo`-Berechtigungen ausgeführt hast. Um dieses Problem zu beheben, lösche einfach das Docker-Verzeichnis mit dem Befehl `rmdir ~/.docker/`, das bei der nächsten Verwendung des Befehls automatisch neu erstellt wird.
:::

Wenn der Befehl wie erwartet ausgeführt wird, bedeutet dies, dass du Docker erfolgreich so eingerichtet hast, dass es ohne `sudo`-Berechtigungen ausgeführt werden kann.

### Docker beim Booten starten

Du kannst Docker so einrichten, dass es beim Server-Boot automatisch startet, indem du `systemd` verwendest, das von den meisten Linux-Distributionen verwendet wird.

:::tip
Sowohl bei Ubuntu als auch bei Debian ist Docker standardmäßig so eingestellt, dass es beim Booten automatisch startet. Wenn du diese beiden Distributionen verwendest, musst du nichts weiter tun.
:::

Du kannst den Docker-Dienst so aktivieren, dass er beim Booten ausgeführt wird, indem du einfach die folgenden Befehle ausführst.
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

Um den Dienst beim Booten zu deaktivieren, ersetze `enable` durch `disable`. Du kannst den Dienst auch mit einer Vielzahl von `systemctl`-Unterbefehlen verwalten, zu denen die folgenden gehören.
```
sudo systemctl start [deine_service]
sudo systemctl stop [deine_service]
sudo systemctl restart [deine_service]
```

## Abschluss

Herzlichen Glückwunsch, du hast Docker erfolgreich auf deinem Linux-Server installiert und konfiguriert! Bei weiteren Fragen oder Problemen wende dich bitte an unser Support-Team, das dir täglich zur Verfügung steht!