---
id: foundry-configuration
title: "Foundry: Server-Konfiguration"
description: Informationen zur Konfiguration eines Foundry Gameservers von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Server-Konfiguration
---


## Einführung

Foundry-Server werden mit einer Vielzahl von Konfigurationsparametern geliefert, die du nach deinen Wünschen anpassen kannst. In dieser Anleitung gehen wir auf alle derzeit verfügbaren Konfigurationsparameter ein und erklären sie genauer.

## Zugriff auf deine Konfigurationsdatei

Zunächst musst du auf deine Konfigurationsdatei zugreifen, um die Parameter zu bearbeiten. Es gibt mehrere Möglichkeiten, diese Datei zu bearbeiten.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Einstellungen" label="Über Webinterface" default>

#### Über Webinterface

Die benutzerfreundlichste Methode ist es, im Webinterface deines Gameservers in den Bereich **Einstellungen** zu gehen und dort nach den entsprechenden Einstellungen zu suchen, wie unten zu sehen:

![image](https://screensaver01.zap-hosting.com/index.php/s/cGbSnRp5gfbWnnb/preview)
</TabItem>

<TabItem value="configs" label="Über die WI-Konfigurationsdatei">

#### Über die WI-Konfigurationsdatei

:::note
Der Server muss angehalten werden, bevor die Config bearbeitet werden kann. Wenn du die Config bearbeitest und den Server neu startest, werden alle Änderungen rückgängig gemacht.
:::

Wenn du die Rohdatei direkt bearbeiten möchtest, kannst du dies auch tun, indem du im Webinterface deines Gameservers in den Bereich **Configs** gehst und auf die blaue Schaltfläche Datei bearbeiten klickst, wie unten zu sehen:

![image](https://screensaver01.zap-hosting.com/index.php/s/dEfMcBBiDgZesYG/preview)

Dadurch wird ein Texteditor direkt auf der Seite geöffnet, mit dem du die Datei bearbeiten kannst.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Über FTP

:::note
Der Server muss angehalten werden, bevor die Konfiguration bearbeitet werden kann. Wenn du die Konfiguration bearbeitest und den Server neu startest, werden alle Änderungen rückgängig gemacht.
:::

Die letzte Methode, um auf die Rohdatei zuzugreifen, ist über FTP. Wenn du dich mit der Verwendung von FTP nicht auskennst, empfehlen wir dir, einen Blick in die Anleitung [Zugriff per FTP](gameserver-ftpaccess.md) zu werfen. Diese Methode dauert jedoch länger und wenn du den Inhalt der Datei direkt bearbeiten möchtest, empfehlen wir dir, wie bereits erwähnt, den Bereich **Configs** im Webinterface deines Gameservers zu verwenden.

</TabItem>
</Tabs>

## Server-Konfigurationsoptionen

In der folgenden Tabelle stellen wir wichtige Serverkonfigurationsoptionen vor, die derzeit auf Foundry-Servern verfügbar sind.

:::tip
Wir raten davon ab, die Port-Einstellungen zu ändern, da diese automatisch vom Gameserver konfiguriert werden. Wenn du die Port-Werte änderst, kann es passieren, dass dein Gameserver kaputtgeht!
:::

### Wichtige Servereinstellungen

| Parameter Name | Beispiel | Beschreibung |
| ------------------ | ------------------------- | ------------------------------------------------------------------------------------ | 
| server_world_name | ZAPDocsTest | Lege den Namen der Welt fest, in dem auch die Speicherdateien gespeichert werden |
| server_name | ZAP-Hosting Docs Test | Name, der in der Serverliste für deinen Server erscheint |
| server_password | iLoveZAP!2024 | Lege ein Passwort fest, das benötigt wird, um dem Server beizutreten |
| server_is_public | true/false | Schaltet um, ob der Server im Server-Browser angezeigt wird |
| server_port | 3724 (Standard) | Festlegen des Netzwerkports, der vom Spiel verwendet werden soll |
| server_query_port | 27015 (Standard) | Setzt den Abfrageport, der verwendet wird, um Informationen über den Server in der Serverliste zurückzugeben |
| server_max_players | 32 | Legt die maximale Anzahl von Spielern fest, die gleichzeitig auf dem Server sein können |

### Gameplay-Konfigurationseinstellungen

| Parameter Name | Beispiel | Beschreibung |
| ----------------------- | ----------- | --------------------------------------------------------------------------------- | 
| pause_server_when_empty | true/false | Schaltet um, ob die Fabrik weiterarbeiten soll, wenn keine Spieler online sind |
| map_seed | 42938743982 | Setzt einen eigenen Seed für die Welterzeugung |
| autosave_interval | 300 | Legt fest, wie oft der Server in Sekunden speichert |

Nachdem du deine Änderungen vorgenommen hast, speichere die Datei an den entsprechenden Stellen und starte deinen Server neu. Wenn dein Server das nächste Mal startet, verwendet er die Einstellungen, die du vorgenommen hast.