---
id: windrose-manage-worlds
title: "Windrose: Welten verwalten"
description: "Lerne, wie du mehrere Windrose-Welten verwaltest, zwischen Weltsaves wechselst und deine Welteinstellungen auf einem Dedicated Server mit der richtigen Weltstruktur konfigurierst. -> Jetzt mehr erfahren"
sidebar_label: Welten verwalten
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Windrose unterstützt mehrere Welten auf einem einzigen Dedicated Server, wobei jede Welt ihre eigenen Speicherdaten und eine `WorldDescription.json`-Konfiguration verwendet. In dieser Anleitung lernst du, wie du neue Welten erstellst, zwischen bestehenden Welten wechselst, Backups anlegst und Welten sicher löschst.

## Vorbereitung

Bevor du beginnst, stelle sicher, dass du Zugriff auf deinen Windrose Gameserver über das ZAP-Hosting Webinterface hast und dein Server zum Ändern von Saves oder Konfigurationen aktuell offline ist.

:::info Erforderlicher Zugriff
Du benötigst Zugriff auf die ZAP-Hosting Gameserver-Verwaltung, insbesondere auf die Bereiche **Dateimanager**, **Configs** und **Backups**, um deine Windrose-Welten sicher zu verwalten.
:::

:::caution Server zuerst stoppen
Stoppe deinen Server immer, bevor du `ServerDescription.json` oder `WorldDescription.json` bearbeitest, Weltordner erstellst oder Speicherdaten löschst. So verhinderst du Datenkorruption und unvollständige Weltschreibvorgänge.
:::

## Die Windrose-Weltstruktur verstehen

Windrose speichert alle Weltdaten im Verzeichnis des Speicherprofils. Die erste Welt wird automatisch erstellt, wenn du den Server zum ersten Mal startest.

Die relevante Struktur sieht so aus:

```text
R5/Saved/SaveProfiles/Default
ServerDescription.json
RocksDB
<game_version>
Worlds
World_1_ID
WorldDescription.json
World_2_ID
```

In der Praxis befinden sich die Weltordner hier:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[deine_spielversion]/Worlds/
```

Jeder Weltordner ist nach seiner einzigartigen `IslandId` benannt. Der Server nutzt diese ID intern, um zu bestimmen, welche Welt geladen wird.

| Datei oder Ordner | Zweck |
| --- | --- |
| `ServerDescription.json` | Definiert die aktive Serverkonfiguration inklusive der aktuell geladenen Welt |
| `RocksDB/[deine_spielversion]/Worlds/` | Speichert alle verfügbaren Weltsave-Ordner |
| `[deine_welt_id]/WorldDescription.json` | Speichert die Konfiguration einer bestimmten Welt |
| `WorldIslandId` | Wert in `ServerDescription.json`, der dem Server sagt, welche Welt geladen werden soll |

:::danger Weltordner nicht umbenennen
Du darfst einen Weltordner niemals manuell umbenennen. Windrose verwendet den Ordnernamen als interne `IslandId` in der RocksDB-Datenbank. Ein Umbenennen kann die Welt beschädigen oder unbrauchbar machen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Die aktive Welt finden

Bevor du Welten wechselst oder erstellst, ist es hilfreich zu wissen, welche Welt aktuell aktiv ist.

### Serverkonfiguration prüfen

Öffne den Bereich **Configs** in deiner Gameserver-Verwaltung und suche die Datei `ServerDescription.json`. Falls die Datei dort nicht gelistet ist, öffne sie im **Dateimanager** im Root-Verzeichnis.

Suche nach folgendem Eintrag:

```json
"WorldIslandId": "[deine_welt_id]"
```

Dieser Wert definiert, welche Welt der Server beim Start lädt.

### Eine Welt-ID prüfen

Um eine bestimmte gespeicherte Welt zu identifizieren, öffne die Datei `WorldDescription.json` im jeweiligen Weltordner und suche den Wert `IslandId`.

Beispiel:

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "World_Example_ID",
    "WorldName": "Meine Welt",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

Die `IslandId` in dieser Datei muss exakt mit dem Ordnernamen übereinstimmen.

## Zwischen Welten wechseln

Wenn du bereits mehrere Welten auf deinem Server gespeichert hast, kannst du zwischen ihnen wechseln, indem du die aktive `WorldIslandId` änderst.

### Zielwelt aktualisieren

Stoppe zuerst deinen Server über das ZAP-Hosting Webinterface.

Öffne dann `ServerDescription.json` im Bereich **Configs** oder über den **Dateimanager** im Root-Verzeichnis der Serverdateien.

Finde diesen Eintrag:

```json
"WorldIslandId": "PASTE_TARGET_WORLD_ID_HERE"
```

Ersetze den Wert durch die `IslandId` der Welt, die du laden möchtest. Diese ID findest du in der `WorldDescription.json` der Zielwelt.

### Speichern und Server neu starten

Speichere die Datei und starte deinen Server neu. Windrose lädt nun die ausgewählte Welt.

:::tip Welt-ID sorgfältig prüfen
Wenn die `WorldIslandId` nicht exakt mit einem existierenden Weltordner und dessen `IslandId` übereinstimmt, kann der Server die gewünschte Welt nicht laden und stattdessen eine neue generieren.
:::

## Neue Welt erstellen

Wenn du mehrere Spielwelten auf einem Server hosten möchtest, kannst du manuell eine neue Welt anlegen.

### Weltordner erstellen

Stoppe zuerst deinen Server.

Öffne den **Dateimanager** und navigiere zu:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[deine_spielversion]/Worlds/
```

Erstelle einen neuen Ordner mit einem eindeutigen Namen. Dieser Ordnername wird zur `IslandId` der neuen Welt.

Beispiel:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[deine_spielversion]/Worlds/MeineZweiteWelt
```

### WorldDescription-Datei erstellen

Erstelle im neuen Ordner eine Datei namens `WorldDescription.json` und füge diese Vorlage ein:

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "DEINE_NEUE_WELT_ID",
    "WorldName": "Meine zweite Welt",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

Ersetze `DEINE_NEUE_WELT_ID` durch deine gewählte Welt-ID.

:::caution IDs müssen übereinstimmen
Die `IslandId` in `WorldDescription.json` muss exakt mit dem Ordnernamen übereinstimmen. Schon kleine Unterschiede wie Groß-/Kleinschreibung oder Leerzeichen verhindern das Laden der Welt.
:::

### Neue Welt als aktiv setzen

Öffne nun `ServerDescription.json` und aktualisiere den Wert `WorldIslandId`, sodass er auf deine neue Welt-ID zeigt.

Beispiel:

```json
"WorldIslandId": "MeineZweiteWelt"
```

Speichere die Datei und starte den Server. Windrose generiert die neue Welt beim Start frisch.

## Welt sichern (Backup)

Bevor du Welten wechselst, Daten löschst oder neue Einstellungen testest, solltest du ein Backup deiner Welt anlegen.

### ZAP-Hosting Backup-Funktion nutzen

Stoppe zuerst deinen Server.

Öffne im Panel die **Backups**-Sektion und erstelle ein neues Backup. Das ist die sicherste Methode, um den kompletten Serverzustand später wiederherzustellen.

### Welt-Dateien manuell herunterladen

Wenn du nur eine direkte Kopie der Speicherdaten möchtest, öffne den **Dateimanager** und lade den gesamten `RocksDB/`-Ordner per Zip- oder Download-Option herunter.

Relevanter Pfad:

```text
R5/Saved/SaveProfiles/Default/RocksDB/
```

| Backup-Methode | Empfohlene Verwendung |
| --- | --- |
| Panel-Backup | Beste Option für vollständige Serverwiederherstellung |
| Manueller `RocksDB/`-Download | Beste Option für direkte Weltsave-Archivierung |
| Beide Methoden | Ideal für wichtige Welten oder vor einem Wipe |

:::note Backup-Empfehlung
Wenn du mehrere Welten verwaltest, bietet es dir die größte Flexibilität, sowohl ein Panel-Backup als auch eine manuelle Kopie von `RocksDB/` zu behalten, um später gezielt einzelne Welten wiederherstellen zu können.
:::

## Welt löschen (Wipe)

Wenn du eine Welt komplett zurücksetzen möchtest, kannst du ihren Speicherordner löschen und den Server eine neue Welt generieren lassen.

### Weltsave löschen

Stoppe deinen Server.

Öffne den **Dateimanager** und navigiere zu:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[deine_spielversion]/Worlds/
```

Lösche den Ordner der Welt, die du zurücksetzen möchtest.

### Welt neu generieren

Stelle sicher, dass `ServerDescription.json` weiterhin auf die gelöschte Welt-ID im Feld `WorldIslandId` zeigt.

Wenn du den Server neu startest, erkennt Windrose, dass der Zielweltordner fehlt, und generiert eine frische Welt für diese ID.

:::danger Vor dem Löschen Ordner prüfen
Das Löschen des falschen Weltordners entfernt dauerhaft die Speicherdaten dieser Welt, sofern kein Backup vorhanden ist. Überprüfe Ordnername und `IslandId` sorgfältig, bevor du fortfährst.
:::

## Welteinstellungen verwalten

Jede Welt hat ihre eigene `WorldDescription.json`, sodass du für verschiedene Welten auf demselben Server separate Einstellungen pflegen kannst.

### Beispiel Weltkonfiguration

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "MeineZweiteWelt",
    "WorldName": "Meine zweite Welt",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

### Wichtige Werte

| Schlüssel | Beschreibung |
| --- | --- |
| `Version` | Verwendete Konfigurationsversion der Datei |
| `IslandId` | Interne Welt-ID, muss mit dem Ordnernamen übereinstimmen |
| `WorldName` | Anzeigename der Welt |
| `WorldPresetType` | Preset-Typ für die Welterstellung |
| `WorldSettings` | Weitere welt-spezifische Einstellungen, falls unterstützt |

:::info Konfigurationsverwaltung im Panel
Windrose-Konfigurationsdateien kannst du in deiner Gameserver-Verwaltung unter **Configs** bearbeiten. Falls eine Datei dort nicht verfügbar ist, nutze den **Dateimanager** für die direkte Bearbeitung.
:::

## Best Practices für mehrere Welten

Das Verwalten mehrerer Welten auf einem Server ist praktisch für Tests, Events oder unterschiedliche Spielergruppen. Damit alles übersichtlich bleibt, beachte diese Tipps:

- Verwende klare und eindeutige Welt-IDs wie `[deine_pvp_welt]` oder `[deine_bau_welt]`
- Halte Ordnername und `IslandId` exakt identisch
- Erstelle vor jedem Wechsel oder Wipe ein Backup
- Vermeide Änderungen an Dateien während der Server läuft
- Dokumentiere, welche `WorldIslandId` zu welchem Welt-Namen gehört

So vermeidest du Verwirrung, besonders wenn du viele Welten über längere Zeit pflegst.

## Fazit

Glückwunsch, du hast erfolgreich Windrose-Welten auf deinem Server verwaltet. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂