---
id: palworld-increase-xp
title: "Palworld: XP erhöhen"
description: "Lerne, wie du die XP in Palworld erhöhst, indem du die Palworld-Serverkonfiguration bearbeitest und den XP-Multiplikator richtig anpasst. -> Jetzt mehr erfahren"
sidebar_label: Palworld: XP erhöhen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld ermöglicht es dir, Gameplay-Multiplikatoren über die Serverkonfiguration anzupassen, einschließlich der Menge an XP, die Spieler erhalten. In dieser Anleitung lernst du, wie du die XP-Rate auf deinem ZAP-Hosting Palworld Gameserver erhöhst, indem du die richtige Konfigurationsdatei bearbeitest und die Änderungen korrekt anwendest.



## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver über die ZAP-Hosting Weboberfläche hast und die Berechtigung besitzt, die Konfigurationsdateien zu bearbeiten.

:::info Zugriff auf die Konfiguration erforderlich
Du benötigst Zugriff auf die Server-Webverwaltung, um Konfigurationsdateien im Bereich `Configs` zu bearbeiten. Falls du keinen Zugriff auf die Serververwaltung hast, überprüfe zuerst deine Produktzugriffsrechte im ZAP-Hosting Panel.
:::

## Finde die Konfigurationsdatei

Um die XP auf deinem Palworld Gameserver zu erhöhen, musst du die Datei `PalWorldSettings.ini` bearbeiten.

Im ZAP-Hosting Gameserver-Adminbereich:

1. Öffne deinen Palworld Gameserver.
2. Navigiere zum Bereich `Configs`.
3. Öffne die Datei `PalWorldSettings.ini`.

Diese Datei enthält die wichtigsten Gameplay-Einstellungen, die vom Palworld Dedicated Server verwendet werden, einschließlich des XP-Multiplikators.

## Bearbeite den XP-Multiplikator

Die Einstellung, die für den XP-Gewinn verantwortlich ist, heißt `ExpRate`.

### Finde die richtige Einstellung

Öffne `PalWorldSettings.ini` und suche nach der Zeile `OptionSettings` oder dem Abschnitt, in dem Gameplay-Multiplikatoren definiert sind.

Der relevante Konfigurationseintrag lautet:

```ini
ExpRate=1.000000
```

### Ändere den Wert

Passe den Wert von `ExpRate` auf den Multiplikator an, den du verwenden möchtest.

| Konfig-Schlüssel | Standardwert | Beispielwert | Effekt |
| --- | --- | --- | --- |
| `ExpRate` | `1.000000` | `2.000000` | Doppelte XP |
| `ExpRate` | `1.000000` | `3.000000` | Dreifache XP |

Beispielsweise für doppelte XP:

```ini
ExpRate=2.000000
```

Für dreifache XP:

```ini
ExpRate=3.000000
```

:::tip Empfohlenes Werteformat
Palworld Servereinstellungen verwenden üblicherweise Dezimalwerte wie `1.000000` oder `2.000000`. Das gleiche Format zu verwenden, hält die Konfiguration konsistent und leichter lesbar.
:::

## Beispielkonfiguration

Je nach Inhalt deiner Datei erscheint die Einstellung meist innerhalb des Blocks `OptionSettings`. Zum Beispiel:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=2.000000,PalCaptureRate=1.000000)
```

Wenn `ExpRate` bereits vorhanden ist, ändere nur den Wert. Falls es fehlt, füge `ExpRate=[dein_wert]` innerhalb des bestehenden `OptionSettings=(...)` Blocks hinzu.

:::caution Bestehenden OptionSettings-Block vorsichtig bearbeiten
Erstelle keine mehrfachen `OptionSettings`-Einträge, es sei denn, deine aktuelle Konfiguration erfordert das ausdrücklich. In den meisten Fällen solltest du nur die vorhandene `OptionSettings=(...)`-Zeile bearbeiten und dort den Wert von `ExpRate` ändern.
:::

## Speichern und Server neu starten

Nach der Änderung des XP-Multiplikators:

1. Speichere die Änderungen in `PalWorldSettings.ini`.
2. Starte deinen Palworld Gameserver über die ZAP-Hosting Serververwaltung neu.

Ein Neustart ist notwendig, da Palworld diese Gameplay-Einstellung nicht sofort während des laufenden Servers übernimmt.

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Server neu starten | Ja |
| Zusätzliche Konsolenbefehle ausführen | Nein |

:::note Keine zusätzlichen Befehle nötig
Für diese Einstellung sind normalerweise keine weiteren Ingame- oder Konsolenbefehle erforderlich. Die neue XP-Rate wird nach dem Serverneustart angewendet.
:::

## Überprüfe die neue XP-Rate

Sobald der Server wieder online ist, verbinde dich und führe eine Aktion aus, die XP bringt, z. B. Gegner besiegen, Pals fangen oder normale Gameplay-Aktivitäten abschließen.

Wenn der XP-Gewinn sich nicht ändert:

- Öffne `PalWorldSettings.ini` erneut
- Prüfe, ob `ExpRate` im `OptionSettings`-Block vorhanden ist
- Vergewissere dich, dass der Wert korrekt geschrieben ist, z. B. `2.000000`
- Stelle sicher, dass der Server nach dem Speichern vollständig neu gestartet wurde

:::danger Ungültige Konfigurationssyntax vermeiden
Wenn du versehentlich Kommata, Klammern oder andere Werte aus der `OptionSettings=(...)`-Zeile entfernst, kann der Server die Einstellung ignorieren oder die Konfiguration nicht korrekt laden. Überprüfe die gesamte Zeile vor dem Speichern sorgfältig.
:::

## Fazit

Glückwunsch, du hast erfolgreich die XP-Rate auf deinem Palworld Gameserver erhöht. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂