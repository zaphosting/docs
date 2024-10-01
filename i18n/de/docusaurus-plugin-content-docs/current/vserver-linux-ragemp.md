---
id: vserver-linux-ragemp
title: "VPS: RageMP Dedicated Server Linux Setup"
description: Informationen zur Einrichtung eines RageMP Dedicated Servers auf einem Linux VPS von ZAP-Hosting – ZAP-Hosting.com-Dokumentation
sidebar_label: RageMP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du einen Linux VPS oder Root-Server und möchtest den RageMP Dedicated Server Service darauf installieren? Dann bist du hier richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server installierst. In den Beispielen verwenden wir Ubuntu, aber der Prozess sollte bei anderen Distributionen sehr ähnlich sein.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem VPS oder Root-Server installieren kannst? Damit kannst du mit nur wenigen Klicks Gameserver-Dienste einrichten, die direkt in dein ZAP-Hosting-Dashboard integriert sind! Erfahre mehr über das [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst über SSH mit deinem VPS oder Root-Server. Verwende unseren [Erstzugriff (SSH)](vserver-linux-ssh.md), wenn du dabei Hilfe benötigst.

### Benutzer erstellen

Wir empfehlen dringend, einen separaten Benutzer zu erstellen, auf dem alle deine dedizierten Spielserverdienste ausgeführt werden. Die Ausführung auf dem Root-Benutzer wird, wie bei den meisten Dingen, aus verschiedenen Gründen nicht empfohlen. Wenn du bereits einen Benutzer hast, fahre mit den Installationsschritten fort.

Verwende den folgenden Befehl, um einen Benutzer namens `gameservers` mit einem optionalen Passwort deiner Wahl zu erstellen.

```
sudo useradd -m gameservers
sudo passwd [your_password] # Optionales Passwort
```

Sobald du auf deinen Server zugegriffen hast und einen Benutzer bereit hast, fahre mit den Installationsschritten fort.

## Installation

Melde dich zunächst als Benutzer `gameservers` an und wechsle zum Stammverzeichnis des Benutzers `home/gameservers`, um die Dinge organisiert zu halten.
```
sudo -u gameservers -s
cd ~
```

Um die Dinge organisiert zu halten, verwende den folgenden Befehl, um einen neuen Ordner für deinen RageMP-Server zu erstellen und öffne ihn.
```
mkdir RageMP-Server && cd RageMP-Server
```

Jetzt musst du die neueste Version von der RageMP-Website herunterladen. Verwende den folgenden Befehl, um sie direkt herunterzuladen.
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

Dadurch wird die `.zip`-Datei an den aktuellen Speicherort heruntergeladen, der sich in deinem neuen Ordner `RageMP-Server` befinden sollte. Fahre mit dem folgenden Befehl fort, um die Dateien im Ordner zu entpacken und zu extrahieren.
```
tar -xvzf linux_x64.tar.gz
```

Deine Dateien sollten nun im Ordner **ragemp-srv** verfügbar sein. Rufe ihn mit `cd ragemp-srv` auf. Verwende `ls`, um den Inhalt des Ordners jederzeit anzuzeigen. Der Server ist nun bereit. Fahre mit dem folgenden Abschnitt fort, um die Parameter zu konfigurieren.

## Konfiguration

Zu diesem Zeitpunkt hast du die Einrichtung deines RageMP-Servers abgeschlossen. Du kannst weitere Serverkonfigurationen über eine Konfigurationsdatei vornehmen, die sich im Verzeichnis deines Servers befindet.

:::tip
Möglicherweise musst du den Server mindestens einmal ausführen, bevor die Konfigurationsdateien erstellt werden. Dies kannst du tun, indem du die Shell-Datei `/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server` ausführst. Drücke anschließend `CTRL+C`, um den Server zu schließen.
:::

Du kannst die Kernkonfigurationsparameter bearbeiten, indem du die **conf.json**-Konfigurationsdatei öffnest.
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe zum Hauptverzeichnis des Spiels und führe die **rage-mp-server**-Shell-Datei aus.
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

In deiner Eingabeaufforderung sollten nun Protokolle angezeigt werden, einschließlich Netzwerkprotokollen, was darauf hinweist, dass der Startvorgang erfolgreich war. Wenn alles wie erwartet abläuft, ist dein Server über Direct Connect erreichbar und in der Serverliste sichtbar. Alternativ kannst du dich direkt über: `[deine_ip_address]:22005` verbinden.

## Abschluss

Herzlichen Glückwunsch, du hast den RageMP-Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir einen Blick in unsere Anleitung [Linux Dienst einrichten](vserver-linux-create-gameservice.md), in der du deinen neuen dedizierten Spieleserver als Dienst einrichten kannst. Dies bietet verschiedene Vorteile, wie z. B. den automatischen Start des Servers beim Hochfahren, automatische Server-Updates, einfache Verwaltung und Zugriff auf Logs und vieles mehr!

Wenn du weitere Fragen oder Probleme hast, wende dich bitte an unser Support-Team, das dir jeden Tag zur Verfügung steht!