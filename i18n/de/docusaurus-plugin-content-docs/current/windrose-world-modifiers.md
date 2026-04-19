---
id: windrose-world-modifiers
title: "Windrose: Welt-Modifikatoren"
description: "Konfiguriere Windrose Welt-Modifikatoren mit einer vollständigen Parameterübersicht für Float-Werte, Kampf-Einstellungen und Koop-Skalierungsparameter Beispiel -> Jetzt mehr erfahren"
sidebar_label: Welt-Modifikatoren
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Windrose benutzerdefinierte Welt-Modifikatoren ermöglichen dir, Kampf, Seekampf, Erkundung, Quests und Koop-Skalierung im Detail anzupassen. In dieser Anleitung lernst du, wie du die Datei `WorldDescription.json` bearbeitest, jeden Parameter verstehst und individuelle Einstellungen auf deinem Windrose Gameserver anwendest.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vorbereitung

Bevor du startest, stelle sicher, dass du Folgendes hast:

- Einen aktiven Windrose Gameserver bei ZAP-Hosting
- Zugriff auf die Gameserver-Verwaltung
- Deinen Server gestoppt, bevor du Dateien bearbeitest
- Zugriff auf den Bereich **Configs** oder **Dateimanager** in der Gameserver-Verwaltung

:::info Speicherort der Konfigurationsdatei
Benutzerdefinierte Welt-Modifikatoren werden in der Datei `WorldDescription.json` im Block `WorldSettings` gespeichert.
:::

:::caution Server vorher stoppen
Du solltest deinen Server immer stoppen, bevor du `WorldDescription.json` bearbeitest. Das verhindert Dateibeschädigungen oder überschriebenen Änderungen beim Start oder automatischen Speichern.
:::

## Verständnis der Welt-Modifikatoren

Jede benutzerdefinierte Einstellung wird einzeln in `WorldDescription.json` unter `WorldSettings` definiert. Das Spiel trennt Werte nach Typ:

- `float` für numerische Multiplikatoren wie Gesundheit oder Schaden
- `bool` für true- oder false-Optionen
- `tag` für benannte Schwierigkeitswerte wie Kampfschwierigkeit

Diese Struktur ist wichtig, da jeder Parameter im richtigen Abschnitt stehen muss. Wenn du einen `float`-Wert in `bool` setzt oder einen ungültigen Tag verwendest, funktioniert die Einstellung möglicherweise nicht wie erwartet.

:::note Parameter-Typen
Falls dir der Begriff *Parameter* neu ist: Er bezeichnet einfach einen konfigurierbaren Wert, den das Spiel nutzt. In dieser Anleitung steuert jeder Parameter einen Teil der Welt-Schwierigkeit oder des Spielverhaltens.
:::

## Öffne die Welt-Konfigurationsdatei

Um benutzerdefinierte Welt-Modifikatoren anzuwenden, musst du die richtige Welt-Datei bearbeiten.

1. Stoppe deinen Windrose Server in der Gameserver-Verwaltung.
2. Öffne den **Dateimanager**.
3. Navigiere zum folgenden Pfad:

```text
R5/Saved/SaveProfiles/Default/RocksDB/<game_version>/Worlds/<world_id>/WorldDescription.json
```

Ersetze die Platzhalter wie folgt:

| Platzhalter | Bedeutung |
| --- | --- |
| `[your_game_version]` | Dein aktueller Windrose Spielversion-Ordner |
| `[your_world_id]` | Die ID der Welt, die du bearbeiten möchtest |

:::tip Richtige Welt finden
Wenn du mehrere Welten hast, achte darauf, die `WorldDescription.json` im richtigen `[your_world_id]`-Ordner zu bearbeiten. Sonst wirken sich deine Änderungen auf einen anderen Spielstand aus.
:::

## Bearbeite den WorldSettings-Block

In `WorldDescription.json` findest du den Block `WorldSettings`. Füge dort deine individuellen Werte hinzu oder passe sie an.

Verwende folgende Struktur:

```json
"WorldSettings": {
  "bool": {
    "CoopQuests": true,
    "EasyExplore": false
  },
  "float": {
    "MobHealthMultiplier": 1.5,
    "MobDamageMultiplier": 1.2,
    "ShipHealthMultiplier": 1.0,
    "ShipDamageMultiplier": 1.0,
    "BoardingDifficultyMultiplier": 1.0,
    "Coop_StatsCorrectionModifier": 1.0,
    "Coop_ShipStatsCorrectionModifier": 0.5
  },
  "tag": {
    "CombatDifficulty": {
      "TagName": "WDS.Parameter.CombatDifficulty.Hard"
    }
  }
}
```

Speichere die Datei und starte deinen Server anschließend neu.

:::info Verhalten bei Presets
Wenn du einen benutzerdefinierten Wert manuell setzt, ändert sich `WorldPresetType` beim nächsten Serverstart automatisch auf `Custom`. Wenn du stattdessen ein sauberes Preset verwenden möchtest, solltest du die entsprechende Preset-Konfiguration nutzen und nicht beide Methoden mischen.
:::

## Vollständige Parameterübersicht

Die folgenden Tabellen bieten eine komplette Übersicht aller verfügbaren benutzerdefinierten Welt-Modifikatoren.

### Kampf-Parameter

| Parameter | Abschnitt | Standard | Bereich | Wirkung |
| --- | --- | --- | --- | --- |
| `MobHealthMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Multiplikator für Gegnergesundheit |
| `MobDamageMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Multiplikator für Gegner-Schaden |
| `CombatDifficulty` | `tag` | `Normal` | `Easy`, `Normal`, `Hard` | Boss-Aggressivität und Kampfschwierigkeit |

`CombatDifficulty` muss als Tag-Wert geschrieben werden, zum Beispiel:

```json
"tag": {
  "CombatDifficulty": {
    "TagName": "WDS.Parameter.CombatDifficulty.Hard"
  }
}
```

Verfügbare Werte:

| Schwierigkeit | TagName-Wert |
| --- | --- |
| Easy | `WDS.Parameter.CombatDifficulty.Easy` |
| Normal | `WDS.Parameter.CombatDifficulty.Normal` |
| Hard | `WDS.Parameter.CombatDifficulty.Hard` |

### Seekampf-Parameter

| Parameter | Abschnitt | Standard | Bereich | Wirkung |
| --- | --- | --- | --- | --- |
| `ShipHealthMultiplier` | `float` | `1.0` | `0.4 - 5.0` | Multiplikator für Schiffsgesundheit der Gegner |
| `ShipDamageMultiplier` | `float` | `1.0` | `0.2 - 2.5` | Multiplikator für Schiffsschaden der Gegner |
| `BoardingDifficultyMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Anzahl der feindlichen Matrosen bei Entern |

Diese Einstellungen sind nützlich, wenn du Seegefechte für kleinere Crews leichter oder für erfahrene Gruppen deutlich anspruchsvoller machen möchtest.

### Koop-Skalierungs-Parameter

| Parameter | Abschnitt | Standard | Bereich | Wirkung |
| --- | --- | --- | --- | --- |
| `Coop_StatsCorrectionModifier` | `float` | `1.0` | `0.0 - 2.0` | Passt Gegnergesundheit und Haltung basierend auf Spieleranzahl an |
| `Coop_ShipStatsCorrectionModifier` | `float` | `0.0` | `0.0 - 2.0` | Passt Schiffsgesundheit der Gegner basierend auf Spieleranzahl an |

Diese Werte sind besonders für größere Crews praktisch. Sie helfen, den Kampf ausgeglichen zu halten, wenn mehr Spieler in der Welt sind.

### Erkundungs-Parameter

| Parameter | Abschnitt | Standard | Wirkung |
| --- | --- | --- | --- |
| `EasyExplore` | `bool` | `false` | Deaktiviert Kartenmarker für interessante Orte |

:::note EasyExplore Namensgebung
Trotz des Namens macht `EasyExplore` auf `true` die Erkundung schwerer, da Kartenmarker für interessante Orte deaktiviert werden. Das ist effektiv ein immersiver Erkundungsmodus.
:::

### Quest-Parameter

| Parameter | Abschnitt | Standard | Wirkung |
| --- | --- | --- | --- |
| `CoopQuests` | `bool` | `true` | Wenn ein Spieler eine Koop-Quest abschließt, wird sie für alle anderen aktiven Spieler automatisch abgeschlossen |

Diese Einstellung ist praktisch, wenn du den Gruppenfortschritt vereinfachen möchtest oder wenn jeder Spieler Quests einzeln abschließen soll.

## Multiplikator-Skala als Referenz

Falls du unsicher bist, wie ein `float`-Wert das Gameplay verändert, nutze diese schnelle Skala als Orientierung.

| Wert | Wirkung |
| --- | --- |
| `0.5` | `50%` - spürbar leichter |
| `1.0` | `100%` - Standard oder normal |
| `2.0` | `200%` - spürbar schwerer |
| `5.0` | `500%` - extrem schwer |

Diese Tabelle ist ein praktisches Beispiel, um deine Welt zu balancieren. Niedrigere Werte reduzieren die Schwierigkeit, höhere erhöhen sie deutlich.

:::tip Mit kleinen Änderungen starten
Wenn du Balance-Änderungen testest, erhöhe oder verringere jeweils nur einen Parameter. So erkennst du leichter, welche Einstellung das Gameplay beeinflusst hat.
:::

## Beispiel-Konfigurationen

Die folgenden Beispiele helfen dir, dein eigenes Setup zu erstellen.

### Casual Crew

Dieses Setup senkt den Kampfdruck, hält das Teilen von Quests aktiviert und macht das Entern leichter.

```json
"float": {
  "MobHealthMultiplier": 0.6,
  "MobDamageMultiplier": 0.6,
  "BoardingDifficultyMultiplier": 0.5
}
```

### Hardcore Seas

Dieses Setup erhöht die Schwierigkeit an Land und auf See, deaktiviert geteilte Quest-Abschlüsse und aktiviert immersives Erkunden.

```json
"bool": {
  "CoopQuests": false,
  "EasyExplore": true
},
"float": {
  "MobHealthMultiplier": 2.0,
  "MobDamageMultiplier": 1.5,
  "ShipHealthMultiplier": 2.0,
  "ShipDamageMultiplier": 1.5
}
```

### Skalierung für große Gruppen

Dieses Setup ist für größere Gruppen, z.B. 8 Spieler, geeignet, bei denen die Standard-Skalierung zu leicht wirkt.

```json
"float": {
  "MobHealthMultiplier": 1.0,
  "MobDamageMultiplier": 1.0,
  "Coop_StatsCorrectionModifier": 2.0,
  "Coop_ShipStatsCorrectionModifier": 2.0
}
```

## Best Practices beim Werte bearbeiten

### Gültige Bereiche verwenden

Jeder `float`-Parameter unterstützt nur einen definierten Bereich. Innerhalb des dokumentierten Bereichs zu bleiben, vermeidet unerwartetes Verhalten.

| Parameter | Minimum | Maximum |
| --- | --- | --- |
| `MobHealthMultiplier` | `0.2` | `5.0` |
| `MobDamageMultiplier` | `0.2` | `5.0` |
| `ShipHealthMultiplier` | `0.4` | `5.0` |
| `ShipDamageMultiplier` | `0.2` | `2.5` |
| `BoardingDifficultyMultiplier` | `0.2` | `5.0` |
| `Coop_StatsCorrectionModifier` | `0.0` | `2.0` |
| `Coop_ShipStatsCorrectionModifier` | `0.0` | `2.0` |

:::caution Ungültige Werte
Wenn du nicht unterstützte Werte, falsche Formatierung oder Parameter im falschen Abschnitt verwendest, kann das Spiel die Einstellung ignorieren oder nicht korrekt anwenden.
:::

### JSON-Formatierung korrekt halten

Beim Bearbeiten von `WorldDescription.json` achte darauf, dass:

- Alle Schlüssel in doppelten Anführungszeichen bleiben
- Kommas korrekt gesetzt sind
- Klammern `{}` und eckige Klammern `[]` richtig geschlossen sind
- `true` und `false` kleingeschrieben sind
- Dezimalwerte einen Punkt verwenden, z.B. `1.5`

Eine fehlerhafte JSON-Datei kann verhindern, dass die Welt-Konfiguration korrekt geladen wird.

### Nach dem Speichern neu starten

Nachdem du fertig bist:

1. Speichere `WorldDescription.json`
2. Starte deinen Server neu
3. Verbinde dich mit dem Server und teste die Änderungen im Gameplay

Einige Werte lassen sich am besten im Kampf, beim Entern oder in Koop-Sessions überprüfen, nicht sofort beim Login.

## Verwaltung der Konfigurationen im Gameserver-Management

Du kannst Windrose Konfigurationsdateien direkt im ZAP-Hosting Gameserver-Management unter den verfügbaren Config- und Dateioptionen verwalten. Das ist der empfohlene Weg, `WorldDescription.json` zu bearbeiten, wenn du keine externen Tools nutzen möchtest.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Wenn der genaue Config-Eintrag nicht direkt gelistet ist, nutze den **Dateimanager** und navigiere manuell zum oben genannten Welt-Dateipfad.

:::info Config-Verwaltung
Je nach aktuellem Gameserver-Interface und deiner Welt-Konfiguration kann die genaue Dateiansicht variieren. Wenn ein bestimmter Config-Eintrag nicht sichtbar ist, nutze den Dateipfad direkt, anstatt von einer fehlenden Funktion auszugehen.
:::

## Fehlerbehebung

### Änderungen werden nicht übernommen

Wenn deine Modifikatoren nach dem Neustart nicht aktiv sind, prüfe Folgendes:

- Du hast die richtige `WorldDescription.json` bearbeitet
- Der Server war vor der Bearbeitung gestoppt
- Die JSON-Syntax ist gültig
- Jeder Parameter steht im korrekten Abschnitt: `float`, `bool` oder `tag`
- Der Server wurde nach dem Speichern komplett neu gestartet

### Schwierigkeit fühlt sich unverändert an

Manche Modifikatoren sind leichter zu bemerken als andere. Zum Beispiel:

- `MobHealthMultiplier` fällt im normalen Kampf am meisten auf
- `ShipHealthMultiplier` nur im Seekampf
- `Coop_StatsCorrectionModifier` bei mehreren Spielern am sichtbarsten
- `EasyExplore` beeinflusst nur Erkundung und Kartenmarker

### Preset wurde auf Custom geändert

Das ist das erwartete Verhalten, sobald du manuell benutzerdefinierte Werte setzt. Das Spiel wechselt beim nächsten Start automatisch den Welt-Preset-Typ auf `Custom`.

## Fazit

Glückwunsch, du hast erfolgreich Windrose Welt-Modifikatoren konfiguriert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂