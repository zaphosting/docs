---
id: palworld-change-death-penalty
title: "Palworld: Todesstrafe ändern"
description: "Erfahre, wie du die Todesstrafe in Palworld durch Bearbeiten der Server-Konfig änderst, inklusive DeathPenalty-Werten und Neustart-Schritten. -> Jetzt mehr erfahren"
sidebar_label: "Todesstrafe ändern"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In Palworld kannst du steuern, was Spieler beim Tod verlieren, indem du die Server-Einstellung `DeathPenalty` änderst. In dieser Anleitung lernst du, wie du die richtige Konfigurationsdatei im ZAP-Hosting Webinterface bearbeitest und die Änderung korrekt anwendest.



## Vorbereitung

Bevor du startest, stelle sicher, dass:

- du Zugriff auf deinen Palworld Gameserver im ZAP-Hosting Webinterface hast
- dein Server offline ist oder du bereit bist, ihn nach der Änderung neu zu starten
- du weißt, welches Todesverhalten du für deine Spieler einstellen möchtest

:::info Zugriff auf die Konfigurationsdatei
Bei Palworld-Servern von ZAP-Hosting kannst du die relevanten Einstellungen über die Gameserver-Verwaltung unter **Configs** bearbeiten.
:::

## Öffne die Palworld-Konfigurationsdatei

Um die Todesstrafe zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

### Datei im ZAP-Hosting Interface finden

Melde dich zuerst im ZAP-Hosting Webinterface an und öffne deinen Palworld Gameserver. Navigiere dann in der Gameserver-Verwaltung zum Bereich **Configs** und öffne die Datei namens `PalWorldSettings.ini`.

Diese Datei enthält die wichtigsten Gameplay-Konfigurationswerte für deinen Palworld-Server, inklusive des Verhaltens bei Tod.

:::note Manuelle Konfigurationsänderungen
Die Einstellung zur Todesstrafe wird direkt in der Konfigurationsdatei gespeichert. Du musst den Wert manuell anpassen, da es keine separate Schnell-Einstellung gibt, sofern dein Interface nicht explizit eine anbietet.
:::

## Ändere den DeathPenalty-Wert

In der Datei `PalWorldSettings.ini` findest du den Abschnitt `OptionSettings`, in dem Gameplay-Einstellungen definiert sind. Suche dort den Eintrag `DeathPenalty` und ändere den Wert auf die gewünschte Option.

### Unterstützte DeathPenalty-Werte

Folgende Werte werden aktuell von Palworld für die Einstellung `DeathPenalty` verwendet:

| Wert | Effekt |
| --- | --- |
| `None` | Spieler verlieren beim Tod nichts |
| `Item` | Spieler verlieren Items, behalten aber Ausrüstung |
| `ItemAndEquipment` | Spieler verlieren Items und Ausrüstung |
| `All` | Spieler verlieren Items, Ausrüstung und alle Pals im Team |

:::tip Die richtige Einstellung wählen
Für ein entspannteres Spielerlebnis sind `None` oder `Item` meist die beste Wahl. Für das klassische Survival-Erlebnis nutze `All`.
:::

### Beispiel für einen Konfigurationseintrag

In den meisten Palworld-Server-Konfigurationen erscheint die Einstellung als Teil einer längeren `OptionSettings`-Zeile. Zum Beispiel:

```ini
OptionSettings=(DeathPenalty=All)
```

Um die Todesstrafe komplett zu deaktivieren, ändere sie zu:

```ini
OptionSettings=(DeathPenalty=None)
```

Wenn deine Datei bereits viele Einstellungen im gleichen `OptionSettings=(...)`-Block enthält, ändere nur den Wert von `DeathPenalty` und lasse die anderen Einträge unverändert. Zum Beispiel:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DeathPenalty=ItemAndEquipment,bEnablePlayerToPlayerDamage=False)
```

In diesem Fall ersetzt du nur `ItemAndEquipment` durch deinen gewünschten Wert.

:::caution Syntax beibehalten
Entferne keine Kommas, Klammern oder andere bestehende Einstellungen im `OptionSettings=(...)`-Block. Eine falsche Syntax kann verhindern, dass der Server die Konfiguration korrekt lädt.
:::

## Änderungen speichern und anwenden

Nachdem du den `DeathPenalty`-Wert geändert hast, speichere die Datei `PalWorldSettings.ini`.

### Server neu starten

Starte deinen Palworld-Server im ZAP-Hosting Webinterface neu. Ein Neustart ist notwendig, damit der Server die aktualisierte Konfiguration lädt.

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Server neu starten | Ja |
| Zusätzliche Konsolenbefehle ausführen | Nein |

:::info Neustart erforderlich
Palworld liest diese Einstellung aus der Serverkonfiguration. Das neue Todesverhalten wird erst nach einem vollständigen Serverneustart aktiv.
:::

## Neue Todesstrafe überprüfen

Nachdem der Server neu gestartet ist, verbinde dich und teste das Verhalten im Spiel, um die Änderung zu bestätigen.

### Was du prüfen solltest

Je nach gewähltem Wert überprüfe, ob Spieler:

- nach dem Tod alle Items behalten
- nur Inventar-Items verlieren
- Inventar-Items und Ausrüstung verlieren
- Inventar-Items, Ausrüstung und Team-Pals verlieren

Wenn die Einstellung nicht geändert zu sein scheint, öffne `PalWorldSettings.ini` erneut und prüfe, ob:

- der `DeathPenalty`-Wert exakt richtig geschrieben ist
- die Änderung erfolgreich gespeichert wurde
- der Server nach der Änderung neu gestartet wurde

:::danger Exakte Wertnamen verwenden
Die Einstellung `DeathPenalty` ist in der Praxis case-sensitive. Verwende immer die genauen Wertnamen `None`, `Item`, `ItemAndEquipment` oder `All`.
:::

## Fazit

Glückwunsch, du hast die Todesstrafe in Palworld erfolgreich geändert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂