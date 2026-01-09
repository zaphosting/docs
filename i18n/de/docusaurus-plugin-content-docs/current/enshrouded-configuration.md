---
id: enshrouded-configuration
title: "Enshrouded: Enshrouded Server Konfiguration"
description: "Entdecke, wie du die Enshrouded Server-Einstellungen für optimales Gameplay und Serververwaltung anpasst → Jetzt mehr erfahren"
sidebar_label: Server Konfiguration
services:
  - gameserver-enshrouded
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Enshrouded bietet zum Launch einige Konfigurationsparameter, die du ganz nach deinem Geschmack anpassen kannst. In dieser Anleitung schauen wir uns alle aktuell verfügbaren Konfigurationsparameter an und erklären sie dir im Detail.

<YouTube videoId="wgvfvQdtwN4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/tc7mcyZqk8Wyafa/preview" title="Enshrouded Server in nur 60 Sekunden einrichten!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich aufschlüsselt. Egal ob du es eilig hast oder einfach lieber auf die spannendste Art lernst!"/>

<InlineVoucher />

## Zugriff auf deine Konfigurationsdatei

Zuerst musst du auf deine Konfigurationsdatei zugreifen, um irgendwelche Parameter zu bearbeiten. Es gibt mehrere Wege, diese Datei zu editieren.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Über Webinterface" default>

#### Über Webinterface

Die benutzerfreundlichste Methode ist, im **Einstellungen**-Bereich deines Gameservers im Webinterface nach den passenden Einstellungen zu suchen, wie hier gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

</TabItem>

<TabItem value="configs" label="Über WI Konfigurationsdatei">

#### Über WI Konfigurationsdatei

:::note
Der Server muss gestoppt sein, bevor die Konfig bearbeitet werden kann. Änderungen an der Konfig und ein Neustart des Servers ohne Speichern führen dazu, dass Änderungen verloren gehen.
:::

Alternativ, wenn du die rohe Datei direkt bearbeiten möchtest, kannst du das über den **Configs**-Bereich im Webinterface deines Gameservers machen und dort den blauen „Datei bearbeiten“-Button drücken, wie hier zu sehen:

![](https://screensaver01.zap-hosting.com/index.php/s/jPep5HzYtWnJTxT/preview)

Das öffnet einen Texteditor direkt auf der Seite, mit dem du die Datei bearbeiten kannst.

</TabItem>

<TabItem value="ftp" label="Über FTP">


#### Über FTP

:::note
Der Server muss gestoppt sein, bevor die Konfig bearbeitet werden kann. Änderungen an der Konfig und ein Neustart des Servers ohne Speichern führen dazu, dass Änderungen verloren gehen.
:::

Die letzte Möglichkeit, auf die rohe Datei zuzugreifen, ist über FTP. Falls du mit FTP nicht vertraut bist, empfehlen wir dir, einen Blick in die [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung zu werfen. Diese Methode dauert allerdings länger und wenn du die Datei direkt bearbeiten willst, empfehlen wir dir einfach den **Configs**-Bereich im Webinterface deines Gameservers zu nutzen, wie oben beschrieben.

</TabItem>
</Tabs>

## Server Konfigurationsoptionen

Das sind die aktuell verfügbaren Server-Konfigurationsoptionen, die das Spiel bereitstellt, um deinen Server anzupassen – vor allem Servername, Passwort und einige interne Einstellungen.

:::tip
Wir empfehlen nicht, den Port, die IP oder Verzeichnis-Einstellungen zu ändern, da diese automatisch vom Gameserver konfiguriert werden. Änderungen hier können deinen Gameserver kaputt machen!
:::

| Parameter Name | Beispiel                              | Beschreibung                                               |
| -------------- | ----------------------------------- | --------------------------------------------------------- | 
| name           | ZAP-Hosting Docs Test                | Der Name deines Servers                                   |
| password       | iLoveZAP!2024                       | Sperre den Server mit einem Passwort (privat)             |
| saveDirectory  | ./savegame (Standard)                | Verzeichnis, in dem deine Speicherstände abgelegt werden  |
| logDirectory   | ./logs (Standard)                    | Verzeichnis, in dem deine Logs gespeichert werden         |
| ip             | 123.123.123.123                     | Öffentliche IP, auf der der Server läuft                   |
| gamePort       | 15636 (Standard)                    | Öffentlicher Port, auf dem der Server läuft                |
| queryPort      | 15637 (Standard)                    | Öffentlicher Port, über den der Server erreichbar ist      |
| slotCount      | 4                                   | Max. Anzahl an Spielern, die auf den Server joinen können (max. 16) |

Nachdem du deine Änderungen gemacht hast, speichere die Datei an der richtigen Stelle und starte deinen Server neu. Beim nächsten Start verwendet dein Server dann die von dir angegebenen Einstellungen.

<InlineVoucher />