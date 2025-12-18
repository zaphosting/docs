---
id: foundry-configuration
title: "Foundry: Server-Konfiguration"
description: "Entdecke, wie du die Foundry-Servereinstellungen für optimales Gameplay und Servermanagement anpasst → Jetzt mehr erfahren"
sidebar_label: Server-Konfiguration
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Foundry-Server bieten eine Vielzahl an Konfigurationsparametern, die du ganz nach deinem Geschmack anpassen kannst. In dieser Anleitung schauen wir uns alle aktuell verfügbaren Konfigurationsparameter an und erklären sie dir im Detail.

<InlineVoucher />

## Zugriff auf deine Konfigurationsdatei

Zuerst musst du auf deine Konfigurationsdatei zugreifen, um irgendwelche Parameter zu bearbeiten. Es gibt mehrere Wege, diese Datei zu editieren.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Über Webinterface" default>

#### Über Webinterface

Die benutzerfreundlichste Methode ist, im **Settings**-Bereich deines Gameservers im Webinterface nach den passenden Einstellungen zu suchen, wie hier gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Über WI Config-Datei">

#### Über WI Config-Datei

:::note
Der Server muss gestoppt sein, bevor die Config bearbeitet werden kann. Änderungen an der Config und ein anschließender Neustart ohne Speichern führen dazu, dass alle Änderungen verloren gehen.
:::

Alternativ, wenn du die rohe Datei direkt bearbeiten möchtest, kannst du im **Configs**-Bereich deines Gameservers im Webinterface auf den blauen „Datei bearbeiten“-Button klicken, wie hier gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/64bAt9qCqHAdWXH/preview)

Dadurch öffnet sich ein Texteditor direkt auf der Seite, mit dem du die Datei bearbeiten kannst.

</TabItem>

<TabItem value="ftp" label="Über FTP">

#### Über FTP

:::note
Der Server muss gestoppt sein, bevor die Config bearbeitet werden kann. Änderungen an der Config und ein anschließender Neustart ohne Speichern führen dazu, dass alle Änderungen verloren gehen.
:::

Die letzte Möglichkeit, auf die rohe Datei zuzugreifen, ist über FTP. Wenn du mit FTP noch nicht vertraut bist, empfehlen wir dir, einen Blick in die [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung zu werfen. Diese Methode dauert allerdings länger und wenn du die Datei direkt bearbeiten möchtest, empfehlen wir dir, einfach den **Configs**-Bereich im Webinterface deines Gameservers zu nutzen.

</TabItem>
</Tabs>

## Server-Konfigurationsoptionen

In der folgenden Tabelle findest du wichtige Server-Konfigurationsoptionen, die aktuell bei Foundry-Servern verfügbar sind.

:::tip
Wir empfehlen nicht, die Port-Einstellungen zu ändern, da diese automatisch vom Gameserver konfiguriert werden. Änderungen an den Port-Werten können deinen Gameserver beschädigen!
:::

### Wichtige Server-Einstellungen

| Parameter-Name     | Beispiel                  | Beschreibung                                                                        |
| ------------------ | ------------------------- | ---------------------------------------------------------------------------------- | 
| server_world_name  | ZAPDocsTest               | Legt den Namen der Welt fest, in dessen Ordner die Speicherdateien abgelegt werden |
| server_name        | ZAP-Hosting Docs Test     | Name, der in der Serverliste für deinen Server angezeigt wird                      |
| server_password    | iLoveZAP!2024             | Passwort, das zum Betreten des Servers benötigt wird                               |
| server_is_public   | true/false                | Legt fest, ob der Server im Serverbrowser angezeigt wird                           |
| server_port        | 3724 (Standard)           | Legt den Netzwerk-Port fest, den das Spiel verwendet                              |
| server_query_port  | 27015 (Standard)          | Legt den Query-Port fest, der Infos über den Server in der Serverliste zurückgibt |
| server_max_players | 32                        | Legt die maximale Anzahl an Spielern fest, die gleichzeitig auf dem Server sind   |

### Gameplay-Konfigurationseinstellungen

| Parameter-Name          | Beispiel     | Beschreibung                                                                       |
| ----------------------- | ----------- | --------------------------------------------------------------------------------- | 
| pause_server_when_empty | true/false  | Legt fest, ob die Welt auch ohne Spieler online weiterlaufen soll                 |
| map_seed                | 42938743982 | Legt einen individuellen Seed für die Welterzeugung fest                         |
| autosave_interval       | 300         | Legt fest, wie oft der Server in Sekunden automatisch speichert                   |

Nachdem du deine Änderungen abgeschlossen hast, speichere die Datei an der passenden Stelle und starte deinen Server neu. Beim nächsten Start verwendet dein Server dann die von dir angegebenen Einstellungen.

<InlineVoucher />