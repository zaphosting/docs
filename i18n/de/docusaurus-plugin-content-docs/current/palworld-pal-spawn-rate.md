---
id: palworld-pal-spawn-rate
title: "Palworld: Pal Spawn Rate"
description: "Erfahre, wie du die Pal Spawn Rate in Palworld änderst, indem du die Spawn-Einstellung für Pal-Frequenz auf deinem Server anpasst -> Jetzt mehr erfahren"
sidebar_label: "Pal Spawn Rate"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld ermöglicht dir, die Häufigkeit, mit der Pals in deiner Welt spawnen, über eine Server-Konfiguration einzustellen. In dieser Anleitung lernst du, wie du die richtige Konfigurationsdatei in der ZAP-Hosting Gameserver-Verwaltung bearbeitest und sicher eine neue Pal Spawn Rate anwendest.



## Vorbereitung

Bevor du startest, stelle sicher, dass:

- du Zugriff auf deinen Palworld Gameserver im ZAP-Hosting Webinterface hast
- dein Server offline ist oder du bereit bist, ihn nach der Änderung neu zu starten
- du verstehst, dass höhere Spawn-Werte die Serverlast erhöhen und die Performance beeinträchtigen können

:::info Manuelle Konfiguration erforderlich
Diese Änderung erfolgt manuell durch Bearbeiten der Server-Konfigurationsdatei unter **Configs** in deiner Gameserver-Verwaltung. Für diese Einstellung gibt es kein separates Slider-Element im ZAP-Hosting Control Panel.
:::

## Öffne die Palworld Konfigurationsdatei

Um die Pal Spawn Rate zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

In deiner ZAP-Hosting Gameserver-Verwaltung:

1. Öffne deinen **Palworld** Server.
2. Navigiere zu **Configs**.
3. Öffne die Datei `PalWorldSettings.ini`.

Diese Datei enthält die wichtigsten gameplay-bezogenen Servereinstellungen, inklusive des Pal Spawn Multiplikators.

:::note Speicherort der Konfigurationsdatei
Bei ZAP-Hosting Palworld Servern findest du die relevante Datei direkt im Bereich **Configs** der Gameserver-Verwaltung, wie sie im Server-Setup bereitgestellt wird.
:::

## Ändere die Pal Spawn Rate

Die Einstellung, die du brauchst, heißt `PalSpawnNumRate`.

### Was bewirkt `PalSpawnNumRate`

`PalSpawnNumRate` steuert den Multiplikator für die Pal Spawn-Häufigkeit auf deinem Server.

| Konfig-Schlüssel | Standardwert | Beschreibung |
| --- | --- | --- |
| `PalSpawnNumRate` | `1.000000` | Steuert, wie viele Pals in der Welt spawnen. Höhere Werte erhöhen die Spawn-Häufigkeit. |

In Palworld ist dieser Wert typischerweise Teil der `OptionSettings`-Zeile in der Datei `PalWorldSettings.ini`.

### Bearbeite die Einstellung

Öffne `PalWorldSettings.ini` und suche den Abschnitt `OptionSettings=`. Dort findest du den Eintrag `PalSpawnNumRate`.

Wenn der Eintrag bereits vorhanden ist, ändere den Wert. Zum Beispiel:

```ini
PalSpawnNumRate=1.000000
```

Du kannst ihn so erhöhen:

```ini
PalSpawnNumRate=2.000000
```

Dieses Beispiel verdoppelt den Pal Spawn Multiplikator im Vergleich zum Standardwert.

:::tip Empfohlene Startwerte
Beginne mit kleinen Erhöhungen wie `1.500000` oder `2.000000` und teste die Server-Performance, bevor du höhere Werte nutzt.
:::

### Beispiel-Konfigurationsausschnitt

Je nach Inhalt deiner Datei kann die Einstellung in einer langen `OptionSettings`-Zeile so aussehen:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=2.000000)
```

:::caution Syntax beibehalten
Entferne keine Kommas, Klammern oder andere Werte aus der `OptionSettings`-Zeile. Eine falsche Formatierung in `PalWorldSettings.ini` kann verhindern, dass der Server die Konfiguration korrekt lädt.
:::

## Empfohlene Werte und Performance-Auswirkungen

Du kannst verschiedene Werte verwenden, je nachdem, wie du das Gameplay gestalten möchtest.

| Wert | Wirkung |
| --- | --- |
| `1.000000` | Standard Pal Spawn Rate |
| `1.500000` | Leicht erhöhte Spawn-Häufigkeit |
| `2.000000` | Deutlich mehr Pals in der Welt |
| `3.000000` oder höher | Starke Erhöhung der Spawns, kann Performance beeinträchtigen |

Höhere Werte lassen die Welt lebendiger wirken, erhöhen aber auch die Anzahl der Entities, die der Server verarbeiten muss.

:::danger Hohe Spawn-Werte können Stabilität beeinträchtigen
Sehr hohe Spawn-Einstellungen können die Server-Performance negativ beeinflussen, besonders bei stark frequentierten Servern oder in Kombination mit anderen anspruchsvollen Welteinstellungen. Wenn du Lag bemerkst, reduziere den Wert und starte den Server neu.
:::

## Speichern und Server neu starten

Nach der Bearbeitung:

1. Speichere die Änderungen in `PalWorldSettings.ini`.
2. Starte deinen Palworld Server über die ZAP-Hosting Gameserver-Verwaltung neu.

Ein Neustart ist notwendig, damit die neue Pal Spawn Rate wirksam wird.

## Änderung überprüfen

Sobald der Server wieder online ist, verbinde dich mit deinem Palworld Server und beobachte die Aktivität in Bereichen, in denen Pals normalerweise spawnen.

Wenn die Spawn Rate nicht geändert zu sein scheint:

- Öffne `PalWorldSettings.ini` erneut und überprüfe, ob `PalSpawnNumRate` vorhanden ist
- Stelle sicher, dass der Wert im richtigen `OptionSettings`-Abschnitt steht
- Vergewissere dich, dass die Datei erfolgreich gespeichert wurde
- Starte den Server nach der Bestätigung der Änderung erneut

## Konfigurationsübersicht

| Punkt | Wert |
| --- | --- |
| Konfigurationsdatei | `PalWorldSettings.ini` |
| ZAP-Hosting Speicherort | Gameserver-Verwaltung → `Configs` |
| Einstellungsname | `PalSpawnNumRate` |
| Standardwert | `1.000000` |
| Neustart erforderlich | Ja |

## Fazit

Glückwunsch, du hast die Pal Spawn Rate auf deinem Palworld Server erfolgreich geändert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂