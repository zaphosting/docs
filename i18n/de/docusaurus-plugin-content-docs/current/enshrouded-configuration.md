---
id: enshrouded-configuration
title: "Enshrouded: Enshrouded Server-Konfiguration"
description: Informationen zur Konfiguration eines Enshrouded Gameservers von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Server Konfiguration
---

Zum Start von Enshrouded gibt es ein paar Konfigurationsparameter, die du nach deinen Wünschen anpassen kannst. In dieser Anleitung gehen wir auf alle derzeit verfügbaren Konfigurationsparameter ein und erklären sie im Detail.

<iframe width="560" height="315" src="https://www.youtube.com/embed/wgvfvQdtwN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Zugriff auf deine Konfigurationsdatei

Zunächst musst du auf deine Konfigurationsdatei zugreifen, um die Parameter zu bearbeiten. Es gibt mehrere Möglichkeiten, diese Datei zu bearbeiten.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Über Webinterface" default>

#### Über Webinterface

Die benutzerfreundlichste Methode ist es, im Webinterface deines Gameservers in den Bereich **Einstellungen** zu gehen und dort nach den entsprechenden Einstellungen zu suchen, wie unten zu sehen:

![image](https://github.com/zaphosting/docs/assets/42719082/98f19443-9e84-42b6-b4e8-a35ae6b802fc)

</TabItem>

<TabItem value="configs" label="Über die WI-Konfigurationsdatei">

#### Über die WI-Konfigurationsdatei

:::note
Der Server muss gestoppt werden, bevor die Konfigurationsdatei bearbeitet werden kann. Wenn die Konfigurationsdatei erst bearbeitet und der Server neu gestartet wird, werden sämtliche Änderungen rückgängig gemacht.
:::

Wenn du die Rohdatei direkt bearbeiten möchtest, kannst du dies auch tun, indem du im Webinterface deines Gameservers in den Bereich **Configs** gehst und auf die blaue Schaltfläche "Datei bearbeiten" klickst, wie unten zu sehen:

![image](https://github.com/zaphosting/docs/assets/42719082/6a440e57-01a5-4ec3-838c-7c83cebbb8b9)

Dadurch wird ein Texteditor direkt auf der Seite geöffnet, mit dem du die Datei bearbeiten kannst.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Über FTP

:::note
Der Server muss gestoppt werden, bevor die Konfigurationsdatei bearbeitet werden kann. Wenn die Konfigurationsdatei erst bearbeitet und der Server neu gestartet wird, werden sämtliche Änderungen rückgängig gemacht.
:::

Die letzte Methode, um auf die Rohdatei zuzugreifen, ist über FTP. Wenn du dich mit der Verwendung von FTP nicht auskennst, empfehlen wir dir, einen Blick in die Anleitung [FTP-Dateizugriff](gameserver-ftpaccess.md) zu werfen. Diese Methode dauert jedoch länger und wenn du den Inhalt der Datei direkt bearbeiten möchtest, empfehlen wir dir, wie bereits erwähnt, den Bereich **Configs** im Webinterface deines Gameservers zu verwenden.

</TabItem>
</Tabs>

## Server-Konfigurationsoptionen

Dies sind die derzeit verfügbaren Serverkonfigurationsoptionen, die das Spiel zur Anpassung deines Servers bereitstellt, insbesondere der Servername, das Passwort sowie einige interne Einstellungen.

:::tip
Wir raten davon ab, die Einstellungen für Port, IP oder Verzeichnis zu ändern, da diese automatisch vom Gameserver konfiguriert werden. Wenn du diese Werte änderst, kann es passieren, dass dein Gameserver kaputt geht!
:::

| Parametername  | Beispiel                                | Beschreibung                                                                 |
| -------------- | --------------------------------------- | ---------------------------------------------------------------------------- | 
| name           | ZAP-Hosting Docs Test                   | Name deines Servers                                                          |
| password       | iLoveZAP!2024                           | Sperre den Server hinter einem Passwort (privat)                             |
| saveDirectory  | ./savegame (default)                    | Lege ein Verzeichnis fest, in dem deine Spielstände gespeichert werden solle |
| logDirectory   | ./logs (default)                        | Lege ein Verzeichnis fest, in dem deine Logs gespeichert werden sollen       |
| ip             | 123.123.123.123                         | The public port the server runs on                                           |
| gamePort       | 15636 (default)                         | Der öffentliche Port, über den der Server läuft                              |
| queryPort      | 15637 (default)                         | Der öffentliche Port, über den auf den Server zugegriffen werden kann        |
| slotCount      | 4                                       | Die maximale Anzahl der Spieler, die dem Server beitreten können (max. 16)   |

Nachdem du deine Änderungen vorgenommen hast, speichere die Datei an den entsprechenden Stellen und starte deinen Server neu. Wenn dein Server das nächste Mal startet, verwendet er die Einstellungen, die du angegeben hast.