---
id: palworld-enemy-drop-rate
title: "Palworld: Gegner-Drop-Rate"
description: "Lerne, wie du die Gegner-Drop-Rate in Palworld auf deinem Palworld Gameserver durch Bearbeiten des richtigen Config-Werts für ein besseres Loot-Balancing änderst. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Gegner-Drop-Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

`EnemyDropItemRate` steuert, wie viel Loot Gegner in Palworld fallen lassen. In dieser Anleitung lernst du, wie du die richtige Konfigurationsdatei in deiner ZAP-Hosting Gameserver-Verwaltung manuell bearbeitest und die neue Gegner-Drop-Rate erfolgreich anwendest.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf dein Palworld Gameserver-Administrationspanel hast und die Berechtigung, Server-Konfigurationsdateien zu bearbeiten.

:::info Manuelle Konfiguration erforderlich
Diese Einrichtung erfolgt durch manuelles Bearbeiten der Serverkonfiguration. Die relevante Datei findest du in deiner ZAP-Hosting Gameserver-Verwaltung unter `Configs`.
:::

## Finde die Konfigurationsdatei

Um die Gegner-Drop-Rate zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

### Öffne den Bereich Configs

Melde dich in deiner ZAP-Hosting Gameserver-Verwaltung an und öffne deinen Palworld Server. Navigiere dann zum Bereich `Configs`, wo die verfügbaren Konfigurationsdateien aufgelistet sind.

### Wähle `PalWorldSettings.ini`

Öffne die Datei `PalWorldSettings.ini` im Bereich `Configs`. Diese Datei enthält die wichtigsten Gameplay-Konfigurationswerte für deinen Palworld Gameserver, inklusive Loot- und Drop-bezogener Einstellungen.

:::note Überblick über die Konfigurationsdatei
Auf Palworld Dedicated Servern werden Gameplay-Einstellungen typischerweise in `PalWorldSettings.ini` gespeichert. Der Gegner-Loot-Multiplikator wird dort über den Eintrag `EnemyDropItemRate` konfiguriert.
:::

## Bearbeite die Gegner-Drop-Rate

Nachdem du die richtige Datei geöffnet hast, kannst du den Loot-Drop-Multiplikator anpassen.

### Finde die richtige Einstellung

Suche in der Datei `PalWorldSettings.ini` nach der Zeile `OptionSettings` und finde den folgenden Schlüssel:

```ini
EnemyDropItemRate=1.000000
```

Wenn der Schlüssel bereits vorhanden ist, ändere den Wert auf deinen gewünschten Multiplikator.

### Setze deinen gewünschten Multiplikator

`EnemyDropItemRate` verwendet einen numerischen Multiplikator:

| Config-Schlüssel | Standardwert | Beispielwert | Effekt |
| --- | --- | --- | --- |
| `EnemyDropItemRate` | `1.000000` | `2.000000` | Gegner droppen doppelt so viele Items |
| `EnemyDropItemRate` | `1.000000` | `0.500000` | Gegner droppen weniger Items |
| `EnemyDropItemRate` | `1.000000` | `3.000000` | Gegner droppen dreimal so viele Items |

Um zum Beispiel den Loot von besiegten Gegnern, wilden Pals und Bossen zu verdoppeln, setze:

```ini
EnemyDropItemRate=2.000000
```

Wenn du den kompletten `OptionSettings`-Eintrag bearbeitest, könnte er so aussehen:

```ini
OptionSettings=(EnemyDropItemRate=2.000000)
```

:::caution Bestehende Einstellungen beibehalten
In vielen Palworld Server-Konfigurationen enthält `OptionSettings` viele Werte in einer einzigen Zeile. Ändere nur den Wert von `EnemyDropItemRate` und vermeide es, Kommas, Klammern oder andere bestehende Einstellungen zu entfernen, da dies die Konfiguration zum Scheitern bringen kann.
:::

## Überprüfe verwandte Drop-Limits

Höhere Loot-Multiplikatoren können die Anzahl der auf dem Boden liegenden Items erhöhen. Das kann die Serverleistung beeinträchtigen, besonders bei intensiven Kämpfen oder Bossfights.

### Prüfe `DropItemMaxNum`

Wenn dein Server bereits viele gleichzeitig liegende Items hat, überprüfe die Einstellung `DropItemMaxNum` in derselben Konfigurationsdatei.

| Config-Schlüssel | Zweck |
| --- | --- |
| `EnemyDropItemRate` | Multipliziert den Loot, den besiegte Gegner droppen |
| `DropItemMaxNum` | Begrenzt, wie viele Items gleichzeitig auf dem Boden liegen können |

:::tip Loot und Performance ausbalancieren
Wenn du `EnemyDropItemRate` stark erhöhst, solltest du `DropItemMaxNum` auf einem vernünftigen Wert halten, um unnötige Item-Ansammlungen und Performance-Probleme zu vermeiden.
:::

## Speichere und wende die Änderungen an

Nachdem du die Konfiguration bearbeitet hast, speichere die Datei `PalWorldSettings.ini` im Bereich `Configs`.

### Starte den Server neu

Sobald die Datei gespeichert ist, starte deinen Palworld Server neu, damit die neue Einstellung geladen wird.

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Server neu starten | Ja |
| Zusätzlicher Konsolenbefehl | Kein verifizierter Befehl erforderlich |

:::info Neustart erforderlich
Änderungen an `PalWorldSettings.ini` werden nicht sofort zur Laufzeit angewendet. Du musst den Server nach dem Speichern neu starten.
:::

## Überprüfe die neue Drop-Rate

Nach dem Neustart verbinde dich mit deinem Palworld Server und besiege Gegner, um zu prüfen, ob der neue Loot-Multiplikator wie erwartet funktioniert.

Wenn sich die Drop-Menge nicht ändert, öffne `PalWorldSettings.ini` erneut und überprüfe:

- Ob `EnemyDropItemRate` korrekt geschrieben ist
- Ob der Wert in der richtigen `OptionSettings`-Konfiguration steht
- Ob die Datei erfolgreich gespeichert wurde
- Ob der Server nach der Änderung neu gestartet wurde

## Fazit

Glückwunsch, du hast die Gegner-Drop-Rate auf deinem Palworld Server erfolgreich geändert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂