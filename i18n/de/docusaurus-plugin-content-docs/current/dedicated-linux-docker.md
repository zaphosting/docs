---
id: dedicated-linux-docker
title: "Docker auf einem Linux-Server einrichten – Container auf deiner Infrastruktur starten und verwalten"
description: "Entdecke, wie du Docker auf deinem Linux-Server installierst, um isolierte Anwendungen effizient auszuführen und Ressourcen optimal zu nutzen → Jetzt mehr erfahren"
sidebar_label: Docker installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Einführung

Docker ist eine leichte, Open-Source-Virtualisierungssoftware, mit der du Services oder Anwendungen isoliert auf einem einzigen System bereitstellen kannst. Im Gegensatz zu echten virtuellen Maschinen wird dabei kein zusätzliches Betriebssystem emuliert oder gehostet, sondern nur eine Anwendungsumgebung innerhalb des Host-Systems. Das spart nicht nur generell Ressourcen, sondern sorgt gleichzeitig für einen geringen Overhead im Vergleich zur Vollvirtualisierung. In dieser Anleitung zeigen wir dir, wie du Docker auf deinem Server installierst.

## Vorbereitung

Zuerst musst du dich per SSH mit deinem Linux-Server verbinden. Falls du dabei Hilfe brauchst, schau dir unsere [Erstzugang (SSH)](dedicated-linux-ssh.md) Anleitung an. In diesem Guide verwenden wir Ubuntu als Linux-Distribution.

### Docker-Kompatibilität aktivieren

Damit Docker-Container auf deinem Server laufen, musst du in deinem Webinterface die **Docker-Kompatibilität** aktivieren. Ansonsten bekommst du `Permission Denied`-Fehler.

Gehe dazu im Webinterface deines Servers in den Bereich **Einstellungen**, aktiviere die Option **Docker-Kompatibilität** und speichere.

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

Nachdem du gespeichert hast, starte deinen Server unbedingt neu, bevor du weitermachst.

## Installation

Jetzt, wo du mit deinem Linux-Server verbunden bist, kannst du mit der Installation starten. Wähle unten deine Linux-Distribution aus, um die passenden Installationsschritte zu sehen.

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

Zuerst musst du das Docker-Paket über `apt` hinzufügen und einrichten. So kannst du Docker später einfach aus dem Repository installieren und updaten.

Führe die folgenden Befehle aus, um den offiziellen GPG-Schlüssel von Docker zu deiner Repository-Liste hinzuzufügen:
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Nachdem das erledigt ist, musst du das Repository zu den `apt`-Quellen hinzufügen:
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Jetzt, wo das Docker-Repository in deinen Quellen ist, aktualisiere die Paketliste:
```
sudo apt-get update
```

Du hast das Docker-`apt`-Repository erfolgreich eingerichtet. Als letzten Schritt installiere die Docker-Pakete mit diesem Befehl:
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

Zuerst solltest du das Paket `dnf-plugins-core` installieren, das bei der Verwaltung von Repositories hilft:
```
sudo dnf -y install dnf-plugins-core
```

Nachdem das Paket installiert ist, füge das Docker-Repository hinzu und installiere Docker mit:
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

Docker sollte jetzt installiert sein. Als letzten Schritt musst du den Dienst starten und aktivieren, damit er läuft:
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

Um zu prüfen, ob die Installation geklappt hat, teste das **hello-world** Image mit folgendem Befehl:
```
sudo docker run hello-world
```

Wenn alles klappt, bekommst du eine nette Begrüßungsnachricht mit ein paar Basisinfos. Falls du `Permission Denied`-Fehler bekommst, überprüfe nochmal, ob du die **Docker-Kompatibilität** im Webinterface aktiviert und den Server neu gestartet hast, wie im Vorbereitungsteil beschrieben.

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

Herzlichen Glückwunsch, du hast Docker erfolgreich auf deinem Linux-Server installiert!

## Nach der Installation

Jetzt, wo Docker auf deinem Server läuft, kannst du noch ein paar Einstellungen vornehmen, um z.B. Docker-Befehle ohne `sudo` auszuführen und Docker beim Serverstart automatisch zu starten.

### Docker ohne Sudo nutzen

Du kannst dir das ständige Tippen von `sudo` vor Docker-Befehlen sparen, indem du eine neue Docker-Gruppe erstellst und deinen Benutzer hinzufügst. Das macht die Nutzung bequemer, aber sei dir bewusst, dass du damit indirekt Root-Rechte vergibst.

Erstelle die Gruppe `docker` und füge deinen aktuellen Benutzer mit diesen Befehlen hinzu:
```
# Docker-Gruppe erstellen
sudo groupadd docker

# Aktuellen Benutzer zur Docker-Gruppe hinzufügen
sudo usermod -aG docker $USER
```

Danach empfehlen wir, den Server neu zu starten, damit die Gruppenmitgliedschaft neu geladen wird. Alternativ kannst du auch `newgrp docker` ausführen.

Teste jetzt, ob du Docker-Befehle ohne `sudo` ausführen kannst, indem du nochmal `docker run hello-world` startest.

:::tip
Manchmal bekommst du einen Fehler wegen einer Konfigurationsdatei, wenn du den Befehl vorher mit `sudo` ausgeführt hast. Um das zu fixen, lösche einfach das Docker-Verzeichnis mit `rmdir ~/.docker/`. Es wird beim nächsten Befehl automatisch neu erstellt.
:::

Wenn der Befehl ohne Fehler läuft, hast du Docker erfolgreich so eingerichtet, dass kein `sudo` mehr nötig ist.

### Docker beim Systemstart starten

Du kannst Docker so einstellen, dass es automatisch beim Serverstart startet, indem du `systemd` nutzt – das wird von den meisten Linux-Distributionen verwendet.

:::tip
Bei Ubuntu & Debian ist Docker standardmäßig so eingestellt, dass es beim Booten automatisch startet. Wenn du eine dieser Distributionen nutzt, musst du hier nichts weiter machen.
:::

Um Docker beim Booten zu aktivieren, führe einfach diese Befehle aus:
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

Wenn du den automatischen Start deaktivieren willst, ersetze `enable` durch `disable`. Du kannst den Dienst auch mit verschiedenen `systemctl`-Befehlen steuern, z.B.:
```
sudo systemctl start [dein_dienst]
sudo systemctl stop [dein_dienst]
sudo systemctl restart [dein_dienst]
```

## Fazit

Glückwunsch, du hast Docker erfolgreich auf deinem Linux-Server installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!