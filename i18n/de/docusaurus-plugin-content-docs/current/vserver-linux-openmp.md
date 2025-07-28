---
id: vserver-linux-openmp
title: "vServer: Open.mp Dedicated Server Linux Setup"
description: Informationen zur Einrichtung eines open.mp Dedicated Servers auf einem Linux VPS von ZAP-Hosting – ZAP-Hosting.com-Dokumentation
sidebar_label: Open.mp
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du einen Linux VPS oder Root-Server und möchtest den open.mp Dedicated Server Service darauf installieren? Dann bist du hier richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server installierst. In den Beispielen verwenden wir Ubuntu, aber der Prozess sollte bei anderen Distributionen sehr ähnlich sein.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem VPS oder Root-Server installieren kannst? Damit kannst du mit nur wenigen Klicks Gameserver-Dienste einrichten, die direkt in dein ZAP-Hosting-Dashboard integriert sind! Erfahre mehr über das [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst über SSH mit deinem VPS oder Root-Server. Verwende unseren [Erstzugriff (SSH)](vserver-linux-ssh.md), wenn du dabei Hilfe benötigst.

### Benutzer anlegen

Wir empfehlen dringend, einen separaten Benutzer zu erstellen, auf dem alle deine dedizierten Spielserverdienste ausgeführt werden. Die Ausführung auf dem Root-Benutzer wird, wie bei den meisten Dingen, aus verschiedenen Gründen nicht empfohlen. Wenn du bereits einen Benutzer hast, fahre mit den Installationsschritten fort.

Verwende den folgenden Befehl, um einen Benutzer namens `gameservers` mit einem optionalen Passwort deiner Wahl zu erstellen.

```
sudo useradd -m gameservers
sudo passwd gameservers # Optionales Passwort
```

Sobald du auf deinen Server zugegriffen hast und einen Benutzer bereit hast, fahre mit den Installationsschritten fort.

## Installation

Melde dich zunächst als Benutzer `gameservers` an und wechsle zum Stammverzeichnis des Benutzers `home/gameservers`, um die Dinge organisiert zu halten.
```
sudo -u gameservers -s
cd ~
```

Um die Dinge organisiert zu halten, verwende den folgenden Befehl, um einen neuen Ordner für deinen open.mp-Server zu erstellen und öffne ihn.
```
mkdir OpenMP-Server && cd OpenMP-Server
```

Jetzt musst du die neueste Version aus dem [open.mp GitHub Repository](https://github.com/openmultiplayer/open.mp/releases) herunterladen. Klicke auf der Seite mit der rechten Maustaste auf die **linux-x86** Version und kopiere den Link. Führe den folgenden Befehl aus, um die neueste Linux-Version herunterzuladen, und ersetze dabei `[link]` durch den kopierten Link.
```
wget [link]
```

Dadurch wird die `.zip`-Datei an den aktuellen Speicherort heruntergeladen, der sich in deinem neuen `OpenMP-Server`-Ordner befinden sollte. Fahren Sie mit dem folgenden Befehl fort, um die Dateien im Ordner zu entpacken und zu extrahieren.
```
tar -xvzf open.mp-linux-x86.tar.gz
```

Auf deine Dateien sollte nun im Ordner **Server** zugegriffen werden können. Rufe ihn auf, indem du `cd Server` ausführst. Verwende `ls`, um den Inhalt des Ordners jederzeit anzuzeigen. Der Server ist nun bereit. Fahre mit dem folgenden Abschnitt fort, um die Parameter zu konfigurieren.

## Konfiguration

Zu diesem Zeitpunkt hast du die Einrichtung deines open.mp-Servers abgeschlossen. Du kannst weitere Serverkonfigurationen über eine Konfigurationsdatei im Verzeichnis deines Servers vornehmen.

Du kannst die Kernkonfigurationsparameter bearbeiten, indem du die **config.json**-Konfigurationsdatei öffnest.
```
nano /home/gameservers/OpenMP-Server/Server/config.json
```

In unserem Open.mp [Server Konfiguration](openmp-configuration.md)-Anleitung findest du alle verfügbaren Optionen und ihre jeweilige Funktion.

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe zum Hauptverzeichnis des Spiels und führe die **omp-server**-Shell-Datei aus.
```
/home/gameservers/OpenMP-Server/Server/omp-server
```

In deiner Eingabeaufforderung sollten nun Protokolle angezeigt werden, einschließlich Netzwerkprotokollen, was darauf hinweist, dass der Startvorgang erfolgreich war. Wenn alles wie erwartet abläuft, ist dein Server über Direct Connect erreichbar und in der Serverliste sichtbar. Alternativ kannst du dich direkt über: `[deine_ip_address]:7777` verbinden.

## Abschluss

Herzlichen Glückwunsch, du hast den open.mp-Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir einen Blick in unsere Anleitung [Linux Dienst einrichten](vserver-linux-create-gameservice.md), in der du deinen neuen dedizierten Gameserver als Dienst einrichten kannst. Dies bietet verschiedene Vorteile, wie z. B. den automatischen Start des Servers beim Hochfahren, automatische Server-Updates, einfache Verwaltung und Zugriff auf Logs und vieles mehr!

Wenn du weitere Fragen oder Probleme hast, wende dich bitte an unser Support-Team, das dir jeden Tag zur Verfügung steht!