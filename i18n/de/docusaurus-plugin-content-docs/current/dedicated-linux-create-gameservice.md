---
id: dedicated-linux-create-gameservice
title: "Dedicated Server: Richte deinen Dedicated Gameserver als Linux Service ein"
description: "Entdecke, wie du Dedicated Gameserver-Services unter Linux einrichtest und verwaltest – für nahtlose Automatisierung und einfache Kontrolle → Jetzt mehr erfahren"
sidebar_label: Linux Service einrichten
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Services sind ein fester Bestandteil von Linux und bezeichnen Prozesse oder Anwendungen, die im Hintergrund laufen – entweder als vordefinierte Aufgabe oder als ereignisbasierte Aufgabe. Das bringt viele Vorteile mit sich, wie automatisches Starten des Servers beim Booten, automatische Server-Updates, einfache Verwaltung und Zugriff auf Logs und vieles mehr! In dieser Anleitung zeigen wir dir, wie du einen Service für deinen Dedicated Gameserver erstellst.

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem Dedicated Server. Falls du dabei Hilfe brauchst, nutze unsere [SSH Initial Access](vserver-linux-ssh.md) Anleitung.

Außerdem solltest du eine unserer Dedicated Gameserver-Anleitungen aus diesem Bereich befolgen, um einen Gameserver auf deinem Linux-System zu installieren und einzurichten. In dieser Anleitung verwenden wir den [Palworld Dedicated Gameserver](dedicated-linux-palworld.md) als Beispiel, aber die Schritte lassen sich auf alle unsere Anleitungen anpassen.

## Service erstellen

Starte damit, eine neue Service-Datei für deinen eingerichteten Dedicated Gameserver zu erstellen. Ersetze `[your_game]` durch einen passenden Namen. Wir empfehlen, den Namen des Spiels zu verwenden, um alles übersichtlich zu halten – hier also `palworld.service`.
```
sudo nano /etc/systemd/system/[your_game].service
```

## Service einrichten

Mit dem geöffneten Nano-Editor kopierst du nun den folgenden Basis-Inhalt, eine Vorlage für die Service-Datei, die du wiederverwenden kannst. Wir haben zwei Versionen: eine für Guides mit SteamCMD und eine für Spiele ohne SteamCMD.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="steamcmd" label="SteamCMD Game" default>

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/[your_server_folder]
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/[your_server_folder]' +login anonymous +app_update [your_game_steamid] +quit
ExecStart=/home/steam/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>

<TabItem value="regular" label="Normales Spiel">

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=gameservers
Group=gameservers
WorkingDirectory=/home/gameservers/[your_server_folder]
ExecStart=/home/gameservers/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>
</Tabs>

Hier eine kurze Erklärung zu den wichtigsten Punkten:
- `Description`: Beliebige Beschreibung, damit du den Zweck des Services schnell erkennst.
- `User`: In unseren Anleitungen richtest du entweder den Nutzer `steam` für SteamCMD oder `gameservers` für Nicht-SteamCMD-Spiele ein. Falls nicht, gib hier den Nutzer an, der den Service ausführen soll.
- `WorkingDirectory`: Pfad zum Hauptverzeichnis, das alle nötigen Dateien für den Service enthält.
- `ExecStartPre` (nur SteamCMD): Hier wird der SteamCMD-Installationsbefehl ausgeführt, der bei jedem Neustart des Servers sicherstellt, dass der Server aktuell ist. Kopiere diesen am besten aus der jeweiligen Dedicated Gameserver-Anleitung oder ersetze die Werte manuell.
- `ExecStart`: Der eigentliche Startbefehl des Servers. Auch hier solltest du den Pfad aus der jeweiligen Anleitung übernehmen oder manuell anpassen.

:::important Wine-Kompatibilität
Für Spiele, die die **Wine** Kompatibilitätsschicht benötigen, solltest du die Befehle **xvfb-run** und **wine** im `ExecStart` Parameter einfügen. Beispiel für V-Rising:
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Stelle außerdem sicher, dass dein `ExecStartPre` SteamCMD-Befehl bei Bedarf den Parameter `+@sSteamCmdForcePlatformType` enthält, um eine Plattformversion zu erzwingen.
:::

Wenn du alle Werte an deinen Dedicated Gameserver angepasst hast, speichere die Datei mit `CTRL + X`, bestätige mit `Y` und drücke `ENTER`, um Nano zu verlassen.

Für unser Palworld-Beispiel sieht die Datei so aus:
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

## Service verwalten

Nachdem deine Service-Datei erstellt ist, musst du sie aktivieren. Im Beispiel `palworld.service` ersetzt du `[your_service]` durch `palworld`.
```
sudo systemctl enable [your_service]
```

:::tip
Wenn du Änderungen an der Service-Datei vornimmst, führe danach immer `systemctl daemon-reload` aus, damit die Änderungen wirksam werden.
:::

Starte den Server mit:
```
sudo systemctl start [your_service]
```
Ebenso kannst du den Server stoppen oder neu starten mit:
```
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

:::tip
Um Details zum Service zu sehen, nutze:
```
systemctl status [your_service]
```
Für Logs zur Fehlersuche kannst du mit folgendem Befehl die neuesten Logs anzeigen:
```
journalctl -u [your_service].service
```
:::

Wenn du möchtest, dass der Service beim Systemstart nicht mehr automatisch startet, kannst du ihn deaktivieren:
```
sudo systemctl disable [your_service]
```

## Fazit

Du hast jetzt erfolgreich einen Service für deinen Dedicated Gameserver eingerichtet. Der Server startet nun automatisch beim Hochfahren des Servers.

Außerdem hast du gelernt, wie die Service-Datei aufgebaut ist und wie du den Service mit verschiedenen Befehlen verwaltest.