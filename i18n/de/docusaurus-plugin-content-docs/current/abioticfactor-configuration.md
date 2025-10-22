---
id: abioticfactor-configuration
title: "Abiotic Factor: Server-Konfiguration"
description: "Entdecke, wie du die Abiotic Factor Server-Einstellungen anpassen kannst, um dein Gameplay-Erlebnis und die Server-Performance zu optimieren → Jetzt mehr erfahren"
sidebar_label: Server-Konfiguration
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Abiotic Factor Gameserver bieten eine Vielzahl an Konfigurationsparametern, die du ganz nach deinem Geschmack anpassen kannst. In dieser Anleitung schauen wir uns alle aktuell verfügbaren Konfigurationsparameter an und erklären sie im Detail.

<InlineVoucher />

## Zugriff auf deine Konfigurationsdatei

Zuerst musst du auf deine Konfigurationsdatei zugreifen, um irgendwelche Parameter zu bearbeiten. Es gibt mehrere Wege, diese Datei zu editieren.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Über Webinterface" default>

#### Über Webinterface

Die benutzerfreundlichste Methode ist, im **Einstellungen**-Bereich deines Gameserver-Webinterfaces nach den passenden Einstellungen zu suchen, wie hier gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Über WI Konfigurationsdatei">

#### Über WI Konfigurationsdatei

:::note
Der Server muss gestoppt sein, bevor die Konfig bearbeitet werden kann. Änderungen an der Konfig und ein Neustart des Servers ohne Speichern führen dazu, dass Änderungen verloren gehen.
:::

Alternativ, wenn du die rohe Datei direkt bearbeiten möchtest, kannst du im **Configs**-Bereich deines Gameserver-Webinterfaces auf den blauen „Datei bearbeiten“-Button klicken, wie hier gezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/dPZLs4YMQopCpfd/preview)

Das öffnet einen Texteditor direkt auf der Seite, mit dem du die Datei bearbeiten kannst.

</TabItem>

<TabItem value="ftp" label="Über FTP">

#### Über FTP

:::note
Der Server muss gestoppt sein, bevor die Konfig bearbeitet werden kann. Änderungen an der Konfig und ein Neustart des Servers ohne Speichern führen dazu, dass Änderungen verloren gehen.
:::

Die letzte Möglichkeit, auf die rohe Datei zuzugreifen, ist über FTP. Falls du mit FTP nicht vertraut bist, empfehlen wir dir, einen Blick in die [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung zu werfen. Diese Methode dauert allerdings länger und wenn du die Datei direkt bearbeiten willst, empfehlen wir dir, einfach den **Configs**-Bereich im Gameserver-Webinterface zu nutzen.

</TabItem>
</Tabs>

## Server-Konfigurationsoptionen

In den folgenden Abschnitten findest du Tabellen mit Infos zu einer Vielzahl von Konfigurationsoptionen, die für Abiotic Factor Dedicated Server verfügbar sind.

### Wichtige Server-Einstellungen

Diese Einstellungen kannst du nur direkt über das Webinterface deines Gameservers im Bereich **Einstellungen** setzen.

| Parametername      | Beispiel                | Beschreibung                                                             |
| ------------------ | ----------------------- | ----------------------------------------------------------------------- | 
| Servername         | ZAP-Hosting Docs Test   | Leg den Namen für deinen Server fest                                    |
| Passwort           | iLoveZAP!2024           | Setze ein Passwort für deinen Server oder lass es leer für keines       |

Nachdem du deine Änderungen gemacht hast, speichere die Datei und starte deinen Server neu. Beim nächsten Start verwendet dein Server die von dir angegebenen Einstellungen.

### Gameplay-Konfigurationseinstellungen

Abiotic Factor bietet eine breite Palette an Gameplay-Konfigurationsoptionen, die als **Sandbox Settings** bezeichnet werden. Eine Datei namens **SandboxSettings.ini** sollte im Hauptordner `world` vorhanden sein, wenn du per FTP auf deinen Server zugreifst.

Falls du diese Datei nicht findest, erstelle sie lokal auf deinem System und kopiere den folgenden Inhalt: [Abiotic Factor Default SandboxSettings.ini GitHub](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

Du kannst die Werte dann nach Belieben anpassen. Wenn du fertig bist, lade die Datei per FTP in den Hauptordner `world` hoch, unter folgendem Pfad:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

In der Tabelle unten fassen wir einige wichtige Gameplay-Einstellungen aus der **SandboxSettings.ini** Datei zusammen. Wenn du alle verfügbaren Optionen sehen möchtest, schau auf der [offiziellen GitHub-Seite](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini) vorbei.

| Parametername               | Beispiel    | Beschreibung                                                             |
| --------------------------- | ----------- | ----------------------------------------------------------------------- | 
| LootRespawnEnabled           | true/false  | Leg fest, ob Loot auf der Map respawnen soll                            |
| PowerSocketsOffAtNight       | true/false  | Leg fest, ob der Strom nachts abgeschaltet wird                         |
| DayNightCycleSpeedMultiplier | 1.0         | Setzt den Geschwindigkeitsmultiplikator für den Tag-Nacht-Zyklus       |
| EnemySpawnRate               | 1.0         | Leg die Spawnrate der Gegner fest                                       |
| EnemyHealthMultiplier        | 1.0         | Multiplikator für die Gesundheit der Gegner                             |
| EnemyPlayerDamageMultiplier  | 1.0         | Multiplikator für den Schaden, den Gegner Spielern zufügen              |
| DetectionSpeedMultiplier     | 1.0         | Multiplikator, wie schnell Gegner Spieler entdecken                     |
| PlayerXPGainMultiplier       | 1.0         | Multiplikator für die XP, die Spieler erhalten                          |
| ItemStackSizeMultiplier      | 1.0         | Multiplikator für die Stapelgröße von Items im Inventar                 |
| ItemDurabilityMultiplier     | 1.0         | Multiplikator für die Haltbarkeit von Items                             |
| ShowDeathMessages            | true/false  | Leg fest, ob Spieler über Todesnachrichten von Entities informiert werden |
| AllowRecipeSharing           | true/false  | Leg fest, ob Spieler Item-Rezepte teilen können                         |

Nachdem du deine Änderungen gemacht hast, speichere die Datei und starte deinen Server neu. Beim nächsten Start verwendet dein Server die von dir angegebenen Einstellungen.

<InlineVoucher />