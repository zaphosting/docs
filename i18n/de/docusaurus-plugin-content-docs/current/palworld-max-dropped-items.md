---
id: palworld-max-dropped-items
title: "Palworld: Max. Anzahl gefallener Items"
description: "Erfahre, wie du die Limits für gefallene Items und das Verschwinden von Items auf deinem Palworld-Server durch Bearbeiten der richtigen Konfigurationswerte änderst. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Max. Anzahl gefallener Items
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld ermöglicht dir, zu steuern, wie viele gefallene Items gleichzeitig in deiner Welt existieren können und wie lange diese Items bleiben, bevor sie verschwinden. In dieser Anleitung lernst du, wie du die richtige Konfigurationsdatei im ZAP-Hosting Interface bearbeitest, die Einstellungen für gefallene Items anpasst und die Änderungen sicher übernimmst.



## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver im ZAP-Hosting Webinterface hast und die Berechtigung, die Konfigurationsdateien zu bearbeiten.

:::info Manuelle Konfiguration erforderlich
Diese Einrichtung erfolgt manuell durch Bearbeiten der Palworld Server-Konfiguration. Die benötigte Datei findest du in der Gameserver-Verwaltung unter `Configs`.
:::

## Öffne die Palworld Konfigurationsdatei

Um das Limit für gefallene Items zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

Im ZAP-Hosting Gameserver-Interface:

1. Öffne deinen Palworld Server
2. Navigiere zu `Configs`
3. Öffne die Datei `PalWorldSettings.ini`

Diese Datei enthält die wichtigsten Gameplay-Konfigurationswerte für deinen Palworld Server, inklusive des Verhaltens gefallener Items.

## Ändere die Einstellungen für gefallene Items

Die Einstellungen für gefallene Items werden über Einträge in der Datei `PalWorldSettings.ini` gesteuert. Du musst die relevanten Werte in der aktiven Einstellungslinie oder im Abschnitt der Datei anpassen.

### Relevante Konfigurationsschlüssel

Verwende die folgenden Konfigurationsschlüssel, um gefallene Items zu steuern:

| Konfig-Schlüssel | Standardwert | Beschreibung |
| --- | --- | --- |
| `DropItemMaxNum` | `3000` | Maximale Anzahl gefallener Items, die gleichzeitig in der Welt existieren dürfen |
| `DropItemAliveMaxHours` | `1.0` | Zeit in Stunden, bis gefallene Items automatisch verschwinden |

### Beispielkonfiguration

Je nach aktuellem Inhalt deiner Datei sind diese Werte meist Teil des Eintrags für Palworld Optionseinstellungen. Zum Beispiel:

```ini
OptionSettings=(DropItemMaxNum=3000,DropItemAliveMaxHours=1.000000)
```

Wenn diese Schlüssel bereits in deinem `OptionSettings`-Eintrag vorhanden sind, ändere nur die Werte. Zum Beispiel:

```ini
OptionSettings=(DropItemMaxNum=2000,DropItemAliveMaxHours=0.500000)
```

In diesem Beispiel:

- `DropItemMaxNum=2000` begrenzt die Welt auf `2000` gefallene Items
- `DropItemAliveMaxHours=0.500000` lässt gefallene Items nach `0,5` Stunden, also `30` Minuten, verschwinden

:::note Wertformat
Palworld Server-Einstellungen verwenden oft Dezimalwerte mit mehreren Nachkommastellen, z. B. `1.000000`. Behalte das bestehende Format in deiner Datei möglichst bei.
:::

## Wähle passende Werte

Die richtigen Werte hängen von deiner Spielerzahl, Serveraktivität und Loot-Generierung ab.

### Empfohlene Anwendungsfälle

| Szenario | `DropItemMaxNum` | `DropItemAliveMaxHours` |
| --- | --- | --- |
| Kleiner privater Server | `3000` | `1.000000` |
| Viel frequentierter Multiplayer-Server | `2000` | `0.500000` |
| Performance-orientierte Konfiguration | `1000` bis `1500` | `0.250000` bis `0.500000` |

### Performance-Aspekte

Niedrigere Limits für gefallene Items können die Serverleistung verbessern, besonders wenn:

- viele Spieler gleichzeitig aktiv sind
- deine Welt viele Items generiert
- Spieler häufig farmen, bauen oder Loot auf dem Boden liegen lassen

:::tip Performance verbessern mit niedrigeren Item-Limits
Wenn du Lag oder reduzierte Serverreaktionszeiten bemerkst, kann das Senken von maximalen gefallenen Items und der Verschwindezeit helfen, die Welt sauberer zu halten und die Stabilität zu erhöhen.
:::

:::caution Vermeide zu niedrige Werte
Wenn du die Werte zu niedrig setzt, könnten Items zu schnell verschwinden oder das Limit schneller erreicht werden als erwartet. Teste Änderungen daher sorgfältig nach dem Anwenden.
:::

## Speichere und übernehme die Änderungen

Nachdem du `PalWorldSettings.ini` bearbeitet hast, speichere die Datei im ZAP-Hosting Interface.

Starte anschließend deinen Palworld Server neu, damit die neuen Einstellungen für gefallene Items geladen werden.

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Server neu starten | Ja |
| Zusätzlicher Konsolenbefehl | Nein |

:::info Neustart erforderlich
Änderungen an `PalWorldSettings.ini` werden erst nach einem Neustart des Palworld Servers wirksam.
:::

## Überprüfe die neuen Einstellungen

Nach dem Neustart verbinde dich mit deinem Server und beobachte, wie sich gefallene Items im normalen Spielverlauf verhalten.

Prüfe, ob:

- die Anzahl gefallener Items wie erwartet kontrolliert wird
- Items für die vorgesehene Zeit auf dem Boden bleiben
- sich die Serverleistung nach Reduzierung der Item-Anzahl oder Lebensdauer verbessert

Falls nötig, kehre zu `PalWorldSettings.ini` zurück und passe die Werte weiter an.

## Fazit

Glückwunsch, du hast erfolgreich die maximale Anzahl gefallener Items und den Verschwinde-Timer auf deinem Palworld Server konfiguriert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂