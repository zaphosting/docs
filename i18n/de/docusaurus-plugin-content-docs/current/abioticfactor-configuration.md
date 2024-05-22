---
id: abioticfactor-configuration
title: "Abiotic Factor: Server-Konfiguration"
description: Informationen zur Konfiguration eines Abiotic Factor-Spielservers von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Server-Konfiguration
---

Abiotic Factor Server werden mit einer Vielzahl von Konfigurationsparametern geliefert, die du nach deinen Wünschen anpassen kannst. In dieser Anleitung gehen wir auf alle derzeit verfügbaren Konfigurationsparameter ein und erklären sie genauer.

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
Der Server muss gestoppt werden, bevor die Konfigurationsdatei bearbeitet werden kann. Wenn die Konfigurationsdatei erst bearbeitet und der Server neu gestartet wird, werden sämtliche Änderungen rückgängig gemacht.
:::

Wenn du die Rohdatei direkt bearbeiten möchtest, kannst du dies auch tun, indem du im Webinterface deines Spieleservers den Bereich **Configs** aufrufst und auf die blaue Schaltfläche Datei bearbeiten klickst (siehe unten):

![image](https://screensaver01.zap-hosting.com/index.php/s/r63pEw5AArgCspZ/preview)

Dadurch wird ein Texteditor direkt auf der Seite geöffnet, mit dem du die Datei bearbeiten kannst.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Über FTP

:::note
Der Server muss gestoppt werden, bevor die Konfigurationsdatei bearbeitet werden kann. Wenn die Konfigurationsdatei erst bearbeitet und der Server neu gestartet wird, werden sämtliche Änderungen rückgängig gemacht.
:::

Die letzte Methode, um auf die Rohdatei zuzugreifen, ist über FTP. Wenn du dich mit der Verwendung von FTP nicht auskennst, empfehlen wir dir, einen Blick in die Anleitung [FTP file access](gameserver-ftpaccess.md) zu werfen. Diese Methode dauert jedoch länger und wenn du den Inhalt der Datei direkt bearbeiten möchtest, empfehlen wir dir, wie bereits erwähnt, den Bereich **Configs** im Webinterface deines Spieleservers zu verwenden.

</TabItem>
</Tabs>

## Server-Konfigurationsoptionen

In den folgenden Abschnitten findest du Tabellen mit Informationen zu einer Vielzahl von Konfigurationsoptionen, die für Abiotic Factor Dedicated Server verfügbar sind.

### Wichtige Server-Einstellungen

Diese Einstellungen können nur direkt über das Webinterface deines Gameservers im Bereich **Einstellungen** vorgenommen werden.

| Parametername | Beispiel | Beschreibung |
| ------------------ | ------------------------ | -------------------------------------------------------------------------- | 
| Server Name | ZAP-Hosting Docs Test | Setze den Namen für deinen Server |
| Password | iLoveZAP!2024 | Lege ein Passwort für deinen Server fest oder lass es leer, wenn du keins angeben möchtest |

Nachdem du deine Änderungen vorgenommen hast, speichere die Datei an der richtigen Stelle und starte deinen Server neu. Wenn dein Server das nächste Mal startet, verwendet er die Einstellungen, die du vorgenommen hast.

### Einstellungen für die Spielkonfiguration

Abiotic Factor enthält eine Vielzahl von Konfigurationsoptionen für das Spiel, die **Sandbox Settings** genannt werden. Eine Datei mit dem Namen **SandboxSettings.ini** sollte im Hauptordner "Welt" zu finden sein, wenn du über FTP auf deinen Server zugreifst.

Wenn du diese Datei nicht siehst, erstelle diese Datei lokal auf deinem System und kopiere den folgenden Inhalt: [Abiotic Factor Default SandboxSettings.ini GitHub](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

Du kannst die Werte nun nach Belieben anpassen. Sobald du fertig bist, lade diese Datei per FTP in den Hauptordner `world` hoch, und zwar unter folgendem Pfad:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

In der folgenden Tabelle fassen wir einige wichtige Spieleinstellungen zusammen, die in der Datei **SandboxSettings.ini** zu finden sind. Wenn du alle verfügbaren Optionen sehen möchtest, schau auf der [Offiziellen GitHub-Seite](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini) nach.

| Parametername | Beispiel | Beschreibung |
| ---------------------------- | ---------- | ----------------------------------------------------------------------- | 
| LootRespawnEnabled | true/false | Schaltet um, ob Beute auf der Karte spawnen soll |
| PowerSocketsOffAtNight | true/false | Schaltet um, ob der Strom während der Nacht ausgeschaltet sein soll |
| DayNightCycleSpeedMultiplier | 1.0 | Setzt den Geschwindigkeitsmultiplikator für den Tag- und Nachtzyklus |
| EnemySpawnRate | 1.0 | Legt die Häufigkeit fest, mit der Feinde spawnen |
| EnemyHealthMultiplier | 1.0 | Setzt einen Multiplikator für die gegnerische Gesundheit |
| EnemyPlayerDamageMultiplier | 1.0 | Setzt einen Multiplikator für den Schaden, den Feinde den Spielern zufügen |
| DetectionSpeedMultiplier | 1.0 | Setzt einen Multiplikator für die Geschwindigkeit, mit der Feinde Spieler entdecken/entdecken können.
| PlayerXPGainMultiplier | 1.0 | Setzt einen Multiplikator für die von Spielern erhaltenen EP
| ItemStackSizeMultiplier | 1.0 | Setzt einen Multiplikator dafür, wie viele Gegenstände in einem Inventarplatz gestapelt werden können.
| ItemDurabilityMultiplier | 1.0 | Setzt einen Multiplikator für die Haltbarkeit von Gegenständen |
| ShowDeathMessages | true/false | Schaltet um, ob Spieler über den Tod von Entitäten informiert werden sollen |
| AllowRecipeSharing | true/false | Schaltet um, ob Spieler Rezepte für Gegenstände teilen können |

Nachdem du deine Änderungen vorgenommen hast, speichere die Datei an den entsprechenden Stellen und starte deinen Server neu. Wenn dein Server das nächste Mal startet, werden die von dir vorgenommenen Einstellungen verwendet.
