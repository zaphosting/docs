---
id: openmp-configuration
title: "Open.mp: Open.mp Server-Konfiguration"
description: Informationen zur Konfiguration eines Open.mp Gameservers von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Server-Konfiguration
---

Open.mp-Server verfügen über eine Vielzahl von Konfigurationsparametern, die du nach deinen Wünschen anpassen kannst. In dieser Anleitung gehen wir auf alle derzeit verfügbaren Konfigurationsparameter ein und erklären sie genauer.

## Zugriff auf deine Konfigurationsdatei

Zunächst musst du auf deine Konfigurationsdatei zugreifen, um die Parameter zu bearbeiten. Es gibt mehrere Möglichkeiten, diese Datei zu bearbeiten.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Einstellungen" label="Über Webinterface" default>

#### Über das Webinterface

Die benutzerfreundlichste Methode, um die Grundeinstellungen zu bearbeiten, ist es, im Webinterface deines Gameservers in den Bereich **Einstellungen** zu gehen und dort nach den entsprechenden Einstellungen zu suchen, wie unten zu sehen:

![image](https://screensaver01.zap-hosting.com/index.php/s/cGbSnRp5gfbWnnb/preview)

Denke daran, dass nicht alle Konfigurationsoptionen hier zugänglich sind. Wenn du alles konfigurieren möchtest, benutze den Reiter **WI-Konfigurationsdatei**, um die notwendige Datei direkt im Webinterface zu bearbeiten.

</TabItem>

<TabItem value="configs" label="Über die WI-Konfigurationsdatei">

#### Über die WI-Konfigurationsdatei

:::note
Der Server muss angehalten werden, bevor die Config bearbeitet werden kann. Wenn du die Config bearbeitest und den Server neu startest, werden alle Änderungen rückgängig gemacht.
:::

Wenn du die Datei und alle Konfigurationsoptionen direkt bearbeiten möchtest, kannst du dies tun, indem du im Webinterface deines Gameservers in den Bereich **Configs** gehst und auf die blaue Schaltfläche Datei bearbeiten klickst, wie unten zu sehen:

![image](https://github.com/zaphosting/docs/assets/42719082/60a922ab-0ca3-4248-b936-3ce43ba8bd5f)

Dadurch wird ein Texteditor direkt auf der Seite geöffnet, mit dem du die Datei bearbeiten kannst.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Über FTP

:::note
Der Server muss angehalten werden, bevor die Konfiguration bearbeitet werden kann. Wenn du die Konfiguration bearbeitest und den Server neu startest, werden alle Änderungen rückgängig gemacht.
:::

Die letzte Methode, um auf die Rohdatei zuzugreifen, ist über FTP. Wenn du dich mit der Verwendung von FTP nicht auskennst, empfehlen wir dir, einen Blick in die Anleitung [Zugriff per FTP](gameserver-ftpaccess.md) zu werfen. Diese Methode dauert jedoch länger und wenn du die Dateiinhalte direkt bearbeiten möchtest, empfehlen wir dir, wie bereits erwähnt, den Bereich **Configs** im Webinterface deines Gameservers zu verwenden.

Wenn du über deinen FTP-Client eingeloggt bist, gehe in das folgende Verzeichnis und ersetze `[zap_id]` durch deine eigene ZAP-ID:
```
..g[zap_id]/gta-openmp/
```

Unter diesem Pfad findest du die Datei `config.json` und öffnest sie. Dies ist die Serverkonfigurationsdatei, die du bearbeiten solltest.

</TabItem>
</Tabs>

## Server-Konfigurationsoptionen

### Server Details

Dies sind die Serverkonfigurationsoptionen, die die Informationen deines Servers im öffentlichen Serverbrowser anpassen. Du musst diese Optionen in deiner Konfigurationsdatei finden, was du ganz einfach mit der Tastenkombination `CTRL+F` in deinem Browser oder deinem Bearbeitungsprogramm tun kannst.

| Parameter Name | Beispiel | Beschreibung |
| ------------------------------ | --------------------------------------- | ---------------------------------------------------------------------------------- |
| Name | ZAP-Hosting Docs Test | Setzt den Hostnamen für deinen Server |
| Sprache | Englisch | Sprache, die im Server-Browser für deinen Server angezeigt wird |
| Website | https://zap-hosting.com/ | Füge eine Website hinzu, die Leute besuchen können, um mehr Informationen über deinen Server zu erhalten |
| discord.invite | https://discord.gg/zaphosting | Discord-Server-Link, der im Server-Browser erscheint |
| banners.light | https://zap-hosting.com/lighticon.png | Lege eine URL zu deinem Banner mit dem hellen Thema fest, das im Serverbrowser erscheint |
| banners.dark | https://zap-hosting.com/darkicon.png | Setzt eine URL zu eurem Banner mit dem dunklen Thema, das im Serverbrowser erscheint |
| game.map | ZAPtastic Stunt Map | Der Mapname, der im Server-Browser erscheinen soll |
| game.mode | Survival | Der Spielmodus, der im Serverbrowser angezeigt werden soll |
| announce | true | Schalte ein, ob dein Server überhaupt im öffentlichen Serverbrowser angezeigt werden soll |
| enable_query | true | Schalte um, ob die Informationen deines Servers im Serverbrowser angezeigt werden sollen |

Nachdem du deine Änderungen vorgenommen hast, speichere die Datei an den entsprechenden Stellen und starte deinen Server neu. Wenn dein Server das nächste Mal startet, verwendet er die Einstellungen, die du angegeben hast.

### Zentrale Servereinstellungen

Dies sind wichtigere Serverkonfigurationsoptionen, mit denen du die Funktionen deines Servers anpassen kannst. Du musst diese Optionen in deiner Konfigurationsdatei finden, was du ganz einfach mit "STRG+F" in deinem Browser oder deinem Bearbeitungsprogramm tun kannst.

| Parameter Name | Beispiel | Beschreibung |
| ------------------------------ | --------------------------------------- | ----------------------------------------------------------------------------------------------- | 
| max_players | 50 (Standard) | Legt die maximale Anzahl von Spielern fest, die der Server gleichzeitig aufnehmen kann |
| max_bots | 0 (Standard) | Legt die maximale Anzahl von NPCs fest, die der Server aufnehmen kann. Dies trägt zur Gesamtzahl der max_players bei |
| password | iLoveZAP!2024 | Legt ein Passwort fest, das Spieler verwenden müssen, um sich mit dem Server zu verbinden |
| rcon.enable | true | Schaltet um, ob die RCON-Funktion aktiviert oder deaktiviert werden soll |
| rcon.password | ZAP-IS-AWESOME | Legt ein Passwort fest, das verwendet werden muss, um von den Clients auf RCON zugreifen zu können |
| logging.enable | true | Schaltet ein, ob die Protokollierung verwendet werden soll |
| logging.file | log.txt | Pfad und Dateiname, die für die Protokollierung verwendet werden sollen, falls aktiviert |
| logging.log_chat | true | Schaltet ein, ob der Spielerchat in der Serverkonsole angezeigt werden soll |

Nachdem du deine Änderungen vorgenommen hast, speichere die Datei an den entsprechenden Stellen und starte deinen Server neu. Wenn dein Server das nächste Mal startet, verwendet er die Einstellungen, die du angegeben hast.

## Gameplay & Netzwerkeinstellungen

Open.mp verfügt über eine Vielzahl von Gameplay- und Netzwerkoptionen, mit denen du deinen Server in hohem Maße anpassen kannst. Hier fassen wir ein paar der wichtigsten zusammen. Du musst diese Optionen in deiner Konfigurationsdatei finden. Das geht ganz einfach, indem du mit `CTRL+F` in deinem Browser oder deinem Bearbeitungsprogramm suchst.

Wenn du alle Einstellungen vornehmen möchtest, empfehlen wir dir die [open.mp's config.json Anleitung](https://www.open.mp/docs/server/config.json), in dem alle derzeit verfügbaren Konfigurationsoptionen aufgeführt sind.

:::tip
Wir raten davon ab, die Port- oder IP-Einstellungen zu ändern, da diese automatisch vom Gameserver konfiguriert werden. Wenn du die IP/Port-Werte änderst, kann dein Gameserver kaputt gehen!
:::

| Parameter Name | Beschreibung | 
| ------------------------------ | -------------------------------------------------------------------------------------------- | 
| game.use_chat_radius | Schaltet ein, ob der Chat-Radius eingeschaltet sein soll |
| game.chat_radius | Setzt eine Radiusbegrenzung für den Chat |
| game.time | Setzt die globale Zeit, die der Server verwendet |
| game.use_nametags | Schaltet das Zeichnen von Namensschildern, Gesundheits- und Rüstungsbalken über den Spielern ein |
| game.use_vehicle_friendly_fire | Aktiviert Friendly Fire für Teamfahrzeuge |
| game.vehicle_respawn_time | Fahrzeug-Respawnzeit in Millisekunden |
| game.weather | Globales Wetter, das der Server verwendet |
| network.bind | Die IP-Adresse, die der Server verwenden soll (wir empfehlen, diese für Gameserver nicht zu ändern) |
| network.port | Der Port, den der Server verwenden soll (auch hier empfehlen wir, dies für Gameserver nicht zu ändern) |
| network.messages_limit | Maximale Anzahl von Nachrichten, die ein Benutzer pro Sekunde senden kann |
| network.player_timeout | Zeit in Millisekunden, nach der ein Spieler einen Timeout erleidet, wenn keine Daten an den Server gesendet werden |

Nachdem du deine Änderungen vorgenommen hast, speichere die Datei an den entsprechenden Stellen und starte deinen Server neu. Wenn dein Server das nächste Mal startet, verwendet er die von dir angegebenen Einstellungen.