---
id: dedicated-linux-create-gameservice
title: "Dedicated Server: Erstelle deinen Dedicated Game Server als Linux Service"
description: Informationen zum Einrichten deines dedizierten Spieleservers als Linux Service auf einem Linux Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Linux Dienst einrichten
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Dienste sind ein fester Bestandteil von Linux und bezeichnen einen Prozess oder eine Anwendung, die im Hintergrund läuft, entweder als vordefinierte Aufgabe oder ereignisbasiert. Dies bietet verschiedene Vorteile, z. B. den automatischen Start des Servers beim Booten, automatische Server-Updates, einfache Verwaltung und Zugriff auf Logs und vieles mehr! In diesem Anleitung erfahren wir, wie du einen Dienst für deinen dedizierten Spieleserver erstellst.

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst über SSH mit deinem Dedicated Server. Nutze unsere Anleitung [Erstzugriff (SSH)](vserver-linux-ssh.md), wenn du dabei Hilfe benötigst.

Du solltest auch eine unserer speziellen Anleitungen für Spieleserver in diesem Abschnitt befolgen, um einen Spieleserver auf deinem Linux-System zu installieren und einzurichten. In dieser Anleitung verwenden wir den [Palworld](dedicated-linux-palworld.md) Dedicated Server als Beispiel, aber die Anweisungen können für alle unsere Anleitungen angepasst werden.

## Einen Dienst erstellen

Beginne damit, eine neue Dienstdatei für den dedizierten Spieleserver zu erstellen, den du eingerichtet hast. Ersetze `[dein_spiel]` durch einen Namen deiner Wahl. Wir empfehlen, den Namen des Spiels zu verwenden, damit alles übersichtlich bleibt, also verwenden wir `palworld.service`.
```
sudo nano /etc/systemd/system/[dein_spiel].service
```

## Dienst einrichten

Wenn du den nano-Editor geöffnet hast, kopiere den Inhalt der folgenden Kerndatei, die eine Vorlagedienstdatei ist, die du wiederverwenden kannst.
```
[Unit]
Description=[dein_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/[dein_server_ordner]
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/[dein_server_ordner]' +login anonymous +app_update [dein_game_steamid] +quit
ExecStart=/home/steam/[dein_server_ordner]/[dein_pfad_zur_start_datei]
Restart=always

[Install]
WantedBy=multi-user.target
```

Lass uns den Inhalt der Datei aufschlüsseln, damit wir alles besser verstehen.
- `Description`: Das kann alles Mögliche sein, was nützlich ist, um den Zweck des Dienstes leicht zu erkennen.
- `User`: Wenn du unsere Anleitungen benutzt, solltest du einen separaten `Steam`-Benutzer für die Verwendung mit SteamCMD eingerichtet haben. Wenn nicht, solltest du hier den Benutzer angeben, der den Dienst ausführen soll.
- `WorkingDirectory`: Dies ist der Pfad zum Hauptverzeichnis, das alles enthält, was der Dienst benötigt.
- `ExecStartPre`: In diesem Feld stellen wir im Wesentlichen denselben SteamCMD-Installationsbefehl wie zuvor ein, der bei jedem Neustart des Servers ausgeführt wird, um sicherzustellen, dass er aktuell ist. Du solltest dies aus der jeweiligen Anleitung für den dedizierten Spieleserver kopieren oder die Werte manuell durch die Werte des Spiels ersetzen.
- `ExecStart`: In diesem Feld wird die vordefinierte Aufgabe festgelegt, die mit dem Dienst ausgeführt werden soll. Auch hier solltest du den Pfad aus dem jeweiligen Dedicated Game Server Guide kopieren oder die Werte manuell ersetzen, um zur Startdatei zu navigieren.

:::important Wine-Kompatibilitätsschicht
Für Spiele, die den **Wine**-Kompatibilitätslayer benötigen, solltest du die Befehle **xvfb-run** und **wine** in den `ExecStart`-Parameter aufnehmen. Ein Beispiel für V-Rising:
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Bitte stelle außerdem sicher, dass dein `ExecStartPre` SteamCMD-Installationsbefehl auch den Parameter `+@sSteamCmdForcePlatformType` enthält, wenn du eine Plattformversion erzwingen willst.
:::

Nachdem nun alle Eingabewerte an deinen dedizierten Spieleserver angepasst sind, kannst du die Datei speichern und nano mit `CTRL + X` beenden, gefolgt von `Y` zur Bestätigung und schließlich `ENTER`.

In unserem Palworld-Beispiel würde unsere Datei wie folgt aussehen:
```
[Unit]
Description=Palworld Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/Palworld-Server
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 +quit
ExecStart=/home/steam/Palworld-Server/PalServer.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

## Dienst verwalten

Nachdem du nun deine Dienstdatei erstellt hast, musst du sie aktivieren. Im Beispiel `palworld.service` wird `[dein_service]` durch `palworld` ersetzt.
```
sudo systemctl enable [dein_service]
```

:::tip
Wenn du zu irgendeinem Zeitpunkt Änderungen an deiner Servicedatei vornimmst, stelle sicher, dass du danach `systemctl daemon-reload` ausführst, um sicherzustellen, dass die Änderungen wirksam werden.
:::

Jetzt kannst du den Server mit dem Befehl `systemctl start` starten. Genauso einfach kannst du den Server mit ähnlichen Befehlen anhalten und neu starten.
```
sudo systemctl start [dein_service]
sudo systemctl stop [dein_service]
sudo systemctl restart [dein_service]
```

:::tip
Um Details über den Dienst anzuzeigen, kannst du den Befehl `systemctl status` verwenden. Wenn du die Logs für Debugging-Zwecke benötigst, kannst du den Befehl `journalctl -u [dein_service].service` verwenden, um die letzten Logs des Dienstes einzusehen.
:::

Wenn du nicht möchtest, dass der Dienst beim Start ausgeführt wird, kannst du ihn einfach deaktivieren.
```
sudo systemctl disable [dein_service]
```

## Abschluss

Du hast nun erfolgreich einen Dienst für deinen dedizierten Spieleserver eingerichtet. Der Server wird nun automatisch beim Hochfahren des Servers gestartet.

Außerdem hast du den Inhalt der Servicedatei kennengelernt und erfahren, wie du den Dienst mit verschiedenen Befehlen verwalten kannst.