---
id: palworld-pal-damage-multiplier
title: "Palworld: Pal Schadensmultiplikator"
description: "Erfahre, wie du den Palworld Pal Schadensmultiplikator änderst, indem du die Schadenseinstellungen für Angriff und Verteidigung auf deinem Server anpasst. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Pal Schadensmultiplikator
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld ermöglicht es dir, den Schaden, den deine Pals verursachen und erhalten, durch Anpassung der Schadensmultiplikator-Einstellungen auf dem Server zu verändern. In dieser Anleitung lernst du, welche Konfigurationsdatei du im ZAP-Hosting Interface bearbeiten musst, welche Werte du ändern solltest und wie du die neuen Einstellungen korrekt anwendest.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver über das ZAP-Hosting Gameserver-Administrationspanel hast.

:::info Manuelle Konfiguration erforderlich
Diese Einrichtung erfolgt durch manuelles Bearbeiten der Palworld-Konfigurationsdatei. Es ist kein separater Ingame-Befehl für diese Änderung notwendig.
:::

## Öffne die richtige Konfigurationsdatei

Um den Pal Schadensmultiplikator zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

Öffne im ZAP-Hosting Gameserver-Administrationspanel den Bereich `Configs` und suche dort die Datei `PalWorldSettings.ini`. Diese Datei enthält die Hauptkonfigurationswerte für Welt und Gameplay deines Palworld Servers.

:::note Speicherort der Konfiguration
Die relevante Datei für diese Anleitung ist `PalWorldSettings.ini`, die du über die Gameserver-Verwaltung unter `Configs` findest.
:::

## Bearbeite die Pal Schadensmultiplikator-Werte

In der Datei `PalWorldSettings.ini` findest du den Abschnitt `OptionSettings`. Die Einstellungen für den Pal Schadensmultiplikator sind als Konfigurationsschlüssel in diesem Abschnitt gespeichert.

Du musst folgende Einträge anpassen:

| Konfigurationsschlüssel | Standardwert | Zweck |
| --- | --- | --- |
| `PalDamageRateAttack` | `1.000000` | Steuert, wie viel Schaden deine Pals verursachen |
| `PalDamageRateDefense` | `1.000000` | Steuert, wie viel Schaden deine Pals erhalten |

### Beispielkonfiguration

Wenn die Schlüssel bereits vorhanden sind, ändere ihre Werte auf den gewünschten Multiplikator. Falls sie fehlen, füge sie innerhalb des `OptionSettings`-Eintrags hinzu.

```ini
PalDamageRateAttack=1.500000
PalDamageRateDefense=0.800000
```

### Bedeutung der Werte

Nutze das folgende Verhalten als Referenz bei der Wahl deiner Multiplikatorwerte:

| Wertänderung | Effekt |
| --- | --- |
| Höherer `PalDamageRateAttack` | Deine Pals verursachen mehr Schaden |
| Niedrigerer `PalDamageRateAttack` | Deine Pals verursachen weniger Schaden |
| Höherer `PalDamageRateDefense` | Deine Pals erhalten eine weniger günstige Verteidigungsbalance und nehmen effektiv mehr Schaden entsprechend dem erhöhten Multiplikator |
| Niedrigerer `PalDamageRateDefense` | Deine Pals erhalten mehr Schaden |

:::caution Werte für Multiplikatoren sorgfältig prüfen
Die Servereinstellungen von Palworld verwenden numerische Multiplikatorwerte. Gib nur gültige Dezimalzahlen wie `0.500000`, `1.000000` oder `2.000000` ein. Ungültige Formatierungen können verhindern, dass der Server die Konfiguration korrekt lädt.
:::

## Speichere die Änderungen

Nachdem du die Werte in `PalWorldSettings.ini` bearbeitet hast, speichere die Datei im ZAP-Hosting Konfigurationseditor.

Wenn du das Balancing für PvE oder kooperatives Gameplay anpasst, empfiehlt es sich, zunächst nur einen Multiplikator zu ändern. So kannst du leichter testen, wie sich der verursachte oder erhaltene Schaden verändert hat.

:::tip Starte mit kleinen Anpassungen
Eine kleine Erhöhung wie `1.200000` für `PalDamageRateAttack` ist oft leichter auszubalancieren als ein großer Sprung wie `3.000000`.
:::

## Starte den Server neu

Nachdem du die aktualisierte Konfiguration gespeichert hast, starte deinen Palworld Server neu, damit die neuen Schadensmultiplikator-Einstellungen geladen werden.

Nach dem Bearbeiten der Datei sind keine zusätzlichen Konsolenbefehle erforderlich. Ein kompletter Serverneustart reicht aus, um die Änderungen anzuwenden.

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Zusätzliche Befehle ausführen | Nein |
| Server neu starten | Ja |

## Überprüfe die neuen Schadenseinstellungen

Nach dem Neustart des Servers verbinde dich mit deinem Palworld Server und teste den Kampf mit deinen Pals. Prüfe, ob:

- deine Pals den erwarteten Schaden verursachen
- deine Pals den erwarteten Schaden erhalten
- das Gameplay-Balancing noch zu deinem Server-Setup passt

Wenn das Ergebnis zu stark oder zu schwach ist, gehe zurück zu `PalWorldSettings.ini`, passe die Multiplikatorwerte erneut an, speichere die Datei und starte den Server erneut.

## Fazit

Glückwunsch, du hast den Pal Schadensmultiplikator auf deinem Palworld Server erfolgreich geändert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂