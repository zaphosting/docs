---
id: openmp-configuration
title: "Open.mp: Open.mp Serverkonfiguration"
description: "Entdecke, wie du die Open.mp Servereinstellungen anpassen kannst, um dein Gameplay-Erlebnis und die Serverperformance zu optimieren → Jetzt mehr erfahren"
sidebar_label: Serverkonfiguration
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Open.mp Gameserver bieten eine Vielzahl von Konfigurationsparametern, die du ganz nach deinem Geschmack anpassen kannst. In dieser Anleitung schauen wir uns alle aktuell verfügbaren Konfigurationsparameter an und erklären sie im Detail.

<InlineVoucher />

## Zugriff auf deine Konfigurationsdatei

Zuerst musst du auf deine Konfigurationsdatei zugreifen, um irgendwelche Parameter zu bearbeiten. Es gibt mehrere Wege, diese Datei zu editieren.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Über Webinterface" default>

#### Über Webinterface

Die benutzerfreundlichste Methode, um die Grundeinstellungen zu bearbeiten, ist der Bereich **Einstellungen** im Webinterface deines Gameservers. Dort kannst du die passenden Einstellungen suchen, wie hier gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Beachte, dass nicht alle Konfigurationsoptionen hier zugänglich sind. Wenn du alles konfigurieren möchtest, nutze den Tab **WI Config File**, um die nötige Datei direkt im Webinterface zu bearbeiten.

</TabItem>

<TabItem value="configs" label="Über WI Config Datei">

#### Über WI Config Datei

:::note
Der Server muss gestoppt sein, bevor die Config bearbeitet wird. Änderungen gehen verloren, wenn du die Config änderst und den Server neu startest, ohne vorher zu stoppen.
:::

Für Nutzer, die die Datei und alle Konfigurationsoptionen direkt bearbeiten wollen, kannst du das über den Bereich **Configs** im Webinterface deines Gameservers machen. Drücke dort den blauen Button zum Bearbeiten der Datei, wie hier gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

Das öffnet einen Texteditor direkt auf der Seite, mit dem du die Datei bearbeiten kannst.

</TabItem>

<TabItem value="ftp" label="Über FTP">


#### Über FTP

:::note
Der Server muss gestoppt sein, bevor die Config bearbeitet wird. Änderungen gehen verloren, wenn du die Config änderst und den Server neu startest, ohne vorher zu stoppen.
:::

Die letzte Möglichkeit, auf die Rohdatei zuzugreifen, ist über FTP. Wenn du mit FTP nicht vertraut bist, empfehlen wir dir, einen Blick in die [Anleitung zum FTP-Zugang](gameserver-ftpaccess.md) zu werfen. Diese Methode dauert allerdings länger. Wenn du die Datei direkt bearbeiten möchtest, empfehlen wir dir, einfach den Bereich **Configs** im Webinterface deines Gameservers zu nutzen, wie oben beschrieben.

Nach dem Login mit deinem FTP-Client navigiere zum folgenden Verzeichnis, wobei du `[zap_id]` durch deine eigene ZAP-ID ersetzt:
```
..g[zap_id]/gta-openmp/
```

Dort findest du die Datei `config.json`. Öffne diese Datei, denn das ist die Serverkonfigurationsdatei, die du bearbeiten solltest.

</TabItem>
</Tabs>

## Serverkonfigurationsoptionen

### Serverdetails

Das sind Konfigurationsoptionen, die die Informationen deines Servers im öffentlichen Serverbrowser anpassen. Du findest diese Optionen in deiner Konfigurationsdatei, was du einfach mit `STRG+F` im Browser oder Editor suchen kannst.

| Parametername                 | Beispiel                               | Beschreibung                                                                       |
| ------------------------------ | ------------------------------------- | --------------------------------------------------------------------------------- |
| name                           | ZAP-Hosting Docs Test                 | Setzt den Hostname deines Servers                                                 |
| language                       | English                             | Sprache, die im Serverbrowser für deinen Server angezeigt wird                    |
| website                        | zap-hosting.com/                    | Füge eine Website hinzu, die Leute besuchen können, um mehr Infos über deinen Server zu bekommen |
| discord.invite                 | discord.gg/zaphosting               | Discord-Server-Link, der im Serverbrowser angezeigt wird                          |
| banners.light                  | zap-hosting.com/lighticon.png       | URL für dein Banner im Light-Theme, das im Serverbrowser angezeigt wird          |
| banners.dark                   | zap-hosting.com/darkicon.png        | URL für dein Banner im Dark-Theme, das im Serverbrowser angezeigt wird           |
| game.map                       | ZAPtastic Stunt Map                 | Der Kartenname, der im Serverbrowser angezeigt wird                              |
| game.mode                      | Survival                            | Der Spielmodus, der im Serverbrowser angezeigt wird                              |
| announce                       | true                                | Schaltet ein, ob dein Server im öffentlichen Serverbrowser angezeigt wird        |
| enable_query                   | true                                | Schaltet ein, ob die Serverinformationen im Serverbrowser angezeigt werden sollen |

Nachdem du deine Änderungen gemacht hast, speichere die Datei und starte deinen Server neu. Beim nächsten Start verwendet dein Server die von dir eingestellten Werte.

### Wichtige Servereinstellungen

Das sind wichtige Konfigurationsoptionen, die die Funktionalität deines Servers anpassen. Du findest diese Optionen in deiner Konfigurationsdatei, was du einfach mit `STRG+F` im Browser oder Editor suchen kannst.

| Parametername                 | Beispiel                               | Beschreibung                                                                                   |
| ------------------------------ | ------------------------------------- | --------------------------------------------------------------------------------------------- | 
| max_players                    | 50 (Standard)                         | Setzt die maximale Anzahl an Spielern, die der Server gleichzeitig halten kann               |
| max_bots                       | 0 (Standard)                          | Setzt die maximale Anzahl an NPCs, die der Server halten kann. Zählt zum max_players dazu    |
| password                       | iLoveZAP!2024                        | Setzt ein Passwort, das Spieler zum Verbinden mit dem Server eingeben müssen                  |
| rcon.enable                    | true                                | Schaltet die RCON-Funktion ein oder aus                                                      |
| rcon.password                  | ZAP-IS-AWESOME                      | Setzt ein Passwort, das für den Zugriff auf RCON von Clients benötigt wird                   |
| logging.enable                 | true                                | Schaltet das Logging ein oder aus                                                             |
| logging.file                   | log.txt                             | Pfad und Dateiname für das Log, falls Logging aktiviert ist                                  |
| logging.log_chat               | true                                | Schaltet ein, ob der Spielerchat in der Serverkonsole angezeigt wird                         |

Nachdem du deine Änderungen gemacht hast, speichere die Datei und starte deinen Server neu. Beim nächsten Start verwendet dein Server die von dir eingestellten Werte.

## Gameplay- & Netzwerk-Einstellungen

Open.mp bietet eine breite Palette an Gameplay- und Netzwerkoptionen, mit denen du deinen Server sehr flexibel anpassen kannst. Hier fassen wir einige der wichtigsten zusammen. Du findest diese Optionen in deiner Konfigurationsdatei, was du einfach mit `STRG+F` im Browser oder Editor suchen kannst.

Wenn du alle Einstellungen anpassen möchtest, empfehlen wir dir, die [open.mp config.json Anleitung](https://www.open.mp/docs/server/config.json) zu lesen, die alle aktuell verfügbaren Konfigurationsoptionen auflistet.

:::tip
Wir empfehlen nicht, die Port- oder IP-Einstellungen zu ändern, da diese automatisch vom Gameserver konfiguriert werden. Änderungen an IP/Port können deinen Gameserver kaputt machen!
:::

| Parametername                 | Beschreibung                                                                                  | 
| ------------------------------ | -------------------------------------------------------------------------------------------- | 
| game.use_chat_radius           | Schaltet den Chat-Radius ein oder aus                                                        |
| game.chat_radius               | Setzt eine Radiusbegrenzung für den Chat                                                    |
| game.time                      | Setzt die globale Zeit, die der Server verwendet                                            |
| game.use_nametags              | Schaltet die Anzeige von Nametags, Gesundheits- und Rüstungsbalken über Spielern ein oder aus |
| game.use_vehicle_friendly_fire | Aktiviert Friendly Fire für Teamfahrzeuge                                                   |
| game.vehicle_respawn_time      | Zeit in Millisekunden, bis Fahrzeuge respawnen                                              |
| game.weather                   | Globales Wetter, das der Server verwendet                                                  |
| network.bind                   | Die IP-Adresse, die der Server nutzen soll (wir empfehlen, diese nicht zu ändern bei Gameservern) |
| network.port                   | Der Port, den der Server nutzen soll (auch hier empfehlen wir, diesen nicht zu ändern bei Gameservern) |
| network.messages_limit         | Maximale Anzahl an Nachrichten, die ein Nutzer pro Sekunde senden kann                      |
| network.player_timeout         | Zeit in Millisekunden, nach der ein Spieler als inaktiv gilt, wenn keine Daten gesendet werden |

Nachdem du deine Änderungen gemacht hast, speichere die Datei und starte deinen Server neu. Beim nächsten Start verwendet dein Server die von dir eingestellten Werte.

<InlineVoucher />