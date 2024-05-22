---
id: vrising-configuration
title: "V Rising: Server-Konfiguration"
description: Informationen zur Konfiguration eines V Rising-Spielservers von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Server-Konfiguration
---

V Rising-Server verfügen über eine Vielzahl von Konfigurationsparametern, die du nach deinen Wünschen anpassen kannst. In dieser Anleitung gehen wir auf alle derzeit verfügbaren Konfigurationsparameter ein und erklären sie genauer.

## Zugriff auf deine Konfigurationsdatei

Zunächst musst du auf deine Konfigurationsdatei zugreifen, um die Parameter zu bearbeiten. Es gibt mehrere Möglichkeiten, diese Datei zu bearbeiten.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Einstellungen" label="Über Webinterface" default>

#### Über Webinterface

Die benutzerfreundlichste Methode ist es, im Webinterface deines Spieleservers in den Bereich **Einstellungen** zu gehen und dort nach den entsprechenden Einstellungen zu suchen, wie unten zu sehen:

![image](https://screensaver01.zap-hosting.com/index.php/s/cGbSnRp5gfbWnnb/preview)
</TabItem>

<TabItem value="configs" label="Über die WI-Konfigurationsdatei">

#### Über die WI-Konfigurationsdatei

:::note
Der Server muss angehalten werden, bevor die Config bearbeitet werden kann. Wenn du die Config bearbeitest und den Server neu startest, werden alle Änderungen rückgängig gemacht.
:::

Wenn du die Rohdatei direkt bearbeiten möchtest, kannst du dies auch tun, indem du im Webinterface deines Spieleservers den Bereich **Configs** aufrufst und auf die blaue Schaltfläche Datei bearbeiten klickst (siehe unten):

![image](https://screensaver01.zap-hosting.com/index.php/s/yF2bWmZwNqmoHmn/preview)

Dadurch wird ein Texteditor direkt auf der Seite geöffnet, mit dem du die Datei bearbeiten kannst.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Über FTP

:::note
Der Server muss angehalten werden, bevor die Konfiguration bearbeitet werden kann. Wenn du die Konfiguration bearbeitest und den Server neu startest, werden alle Änderungen rückgängig gemacht.
:::

Die letzte Methode, um auf die Rohdatei zuzugreifen, ist über FTP. Wenn du dich mit der Verwendung von FTP nicht auskennst, empfehlen wir dir, einen Blick in die Anleitung [FTP file access](gameserver-ftpaccess.md) zu werfen. Diese Methode dauert jedoch länger und wenn du den Inhalt der Datei direkt bearbeiten möchtest, empfehlen wir dir, wie bereits erwähnt, den Bereich **Configs** im Webinterface deines Spieleservers zu verwenden.

</TabItem>
</Tabs>

## Server-Konfigurationsoptionen

In den folgenden Abschnitten findest du Tabellen mit Informationen über die verfügbaren Konfigurationsoptionen, sowohl für den eigentlichen Server als auch für die Spielkonfiguration.

:::tip
Wir raten davon ab, die Port-Einstellungen zu ändern, da diese automatisch vom Spielserver konfiguriert werden. Wenn du die Port-Werte änderst, kann es passieren, dass dein Spieleserver kaputt geht!
:::

### Wichtige Servereinstellungen

Dieser Abschnitt fasst die wichtigsten Servereinstellungen zusammen, die sich in der Konfigurationsdatei **ServerHostSettings.json** befinden. Die vollständige Liste der Konfigurationsoptionen findest du in der [offiziellen GitHub-Anleitung des Spiels](https://github.com/StunlockStudios/vrising-dedicated-server-instructions/blob/master/1.0.x/INSTRUCTIONS.md).

| Parameter Name | Beispiel | Beschreibung |
| ------------------ | ------------------------ | -------------------------------------------------------------------------- | 
| Name | ZAP-Hosting Docs Test | Lege den Namen für deinen Server fest |
| Description | ZAP ist das Beste!         | Beschreibung für deinen Server einstellen |
| Port | 9876 (Standard) | Lege den Netzwerkport fest, der vom Spiel verwendet werden soll |
| QueryPort | 9877 (Standard) | Lege den Abfrageport fest, der verwendet wird, um Informationen über den Server in der Serverliste zurückzugeben |
| MaxConnectedUsers | 10 | Legt die maximale Anzahl von Spielern fest, die sich gleichzeitig auf dem Server befinden können |
| MaxConnectedAdmins | 4 | Legt die Anzahl der Admins fest, die einem vollen Server beitreten können |
| ServerFps | 30 (empfohlene Standardeinstellung) | Legt die Framerate für euren Server fest, wir empfehlen, dies auf der Standardeinstellung zu belassen |
| SaveName | ZAPDocsTest | Lege den Namen des Weltspeichers fest |
| Password | iLoveZAP!2024 | Lege ein Passwort für deinen Server fest, oder lass es leer, wenn du keins möchtest |
| ListOnMasterServer | true/false | Schaltet um, ob dein Server in der Serverliste aufgeführt werden soll |
| AutoSaveCount | 15 | Legt fest, wie viele ältere Spielstände gespeichert werden sollen |
| AutoSaveInterval | 600 | Legt das Intervall zwischen den einzelnen automatischen Speicherungen fest |
| RCON Enabled | true/false | Schaltet um, ob RCON aktiviert ist |
| RCON Port | 25575 | Einstellen des RCON Ports |
| RCON Passwort | iLoveZAP!2024 | Lege das Passwort für deine RCON-Verbindung fest |

Nachdem du deine Änderungen vorgenommen hast, speichere die Datei an der richtigen Stelle und starte deinen Server neu. Wenn dein Server das nächste Mal startet, verwendet er die Einstellungen, die du vorgenommen hast.

### Wichtige Konfigurationseinstellungen für das Spiel

V Rising verfügt über eine Vielzahl von Parametern und Konfigurationsoptionen, mit denen du das Gameplay anpassen kannst. Deshalb fassen wir in diesem Abschnitt die wichtigsten zusammen, die sich in der Konfigurationsdatei **ServerGameSettings.json** befinden.

| Parameter Name | Beispiel | Beschreibung |
| ------------------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------ | 
| GameDifficulty | Normal | Setzt die Spielschwierigkeit für deine Welt |
| GameModeType | PvP, PvE | Setzt die Art des Spielmodus für deine Welt |
| CastleDamageMode | Always, Never, TimeRestricted | Legt fest, wann Burgen beschädigt werden können, wobei der Parameter VSCastle die Zeit für "TimeRestricted" auswählt |
| PlayerDamageMode | Always, TimeRestricted | Legt fest, ob andere Spieler beschädigt werden können, wobei der VSPlayer-Parameter verwendet wird, um die Zeit für "TimeRestricted" auszuwählen |
| PvPProtectionMode | Short, Medium, Long | Legt fest, wie lange neue Spieler unbesiegbar sind |
| DeathContainerPermission | Anyone, ClanMembers | Legt fest, wer fallen gelassene Gegenstände plündern darf, wenn ein Spieler stirbt |
| CanLootEnemyContainers | true/false | Legt fest, ob ein Spieler die Truhen anderer Spieler plündern darf, die nicht zum Clan gehören |
| BloodBoundEquipment | true/false | Legt fest, ob du deine Ausrüstung nach dem Tod behältst |
| TeleportBoundItems | true/false | Legt fest, ob Gegenstände das Teleportieren durch Vampir-Weggates blockieren können |
| AllowGlobalChat | true/false | Schalte den globalen Chat ein |

Nachdem du deine Änderungen vorgenommen hast, speichere die Datei an den entsprechenden Stellen und starte deinen Server neu. Wenn dein Server das nächste Mal startet, verwendet er die Einstellungen, die du vorgenommen hast.