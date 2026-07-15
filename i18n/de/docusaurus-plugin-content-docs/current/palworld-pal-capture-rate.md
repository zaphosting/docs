---
id: palworld-pal-capture-rate
title: "Palworld: Pal Capture Rate"
description: "Learn how to change the Palworld Pal capture rate by editing the PalCaptureRate setting for easier capture results on your server. -> Learn more now"
sidebar_label: "Pal Capture Rate"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld ermöglicht es dir, die Pal-Capture-Rate auf deinem Server über die Hauptwelt-Konfiguration anzupassen. In dieser Anleitung erfährst du, wo du die richtige Konfigurationsdatei im ZAP-Hosting Interface findest, welchen Wert du ändern musst und wie du die neue Capture-Rate anwendest.



## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver über das ZAP-Hosting Webinterface hast und der Server aktuell eingerichtet und online ist.

:::info Zugriff auf die Konfigurationsdatei
Für Palworld Gameserver bei ZAP-Hosting kannst du die relevanten Einstellungen über die Gameserver-Verwaltung unter `Configs` bearbeiten.
:::

## Finde die Palworld Konfigurationsdatei

Um die Pal-Capture-Rate zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

### Öffne den Bereich „Configs“

Melde dich zuerst im ZAP-Hosting Webinterface an und öffne deinen Palworld Gameserver. Navigiere in der Gameserver-Verwaltung zum Bereich `Configs`.

Dort findest du die Datei mit dem Namen:

```ini
PalWorldSettings.ini
```

### Finde die richtige Einstellung

In der Datei `PalWorldSettings.ini` speichert Palworld viele Gameplay-Einstellungen im Abschnitt `OptionSettings`. Die Einstellung, die für die Pal-Capture-Rate relevant ist, lautet:

```ini
PalCaptureRate=[dein_wert]
```

Der Standardwert ist normalerweise:

```ini
PalCaptureRate=1.000000
```

Ein höherer Wert macht das Fangen von Pals einfacher, ein niedrigerer Wert erschwert die Capture-Versuche.

## Ändere die Pal Capture Rate

Nachdem du die richtige Datei geöffnet hast, kannst du die Capture-Rate an dein gewünschtes Gameplay-Balance anpassen.

### Ändere den Konfigurationswert

Suche in der Datei `PalWorldSettings.ini` den Eintrag `PalCaptureRate` und ersetze den Wert durch deinen bevorzugten Multiplikator.

Zum Beispiel:

```ini
PalCaptureRate=2.000000
```

Das würde die Capture-Rate im Vergleich zur Standardeinstellung verdoppeln.

### Beispielwerte

Nutze die folgende Tabelle als grobe Orientierung:

| Wert | Wirkung |
| --- | --- |
| `1.000000` | Standard Pal-Capture-Rate |
| `1.500000` | Etwas einfacheres Fangen |
| `2.000000` | Deutlich einfacheres Fangen |
| `3.000000` | Sehr einfaches Fangen |

:::tip Ausgewogene Einstellung
Wenn du das Fangen erleichtern möchtest, ohne es zu garantiert zu machen, ist ein Wert zwischen `1.500000` und `2.000000` meist ein guter Startpunkt.
:::

## Speichere und wende die Änderungen an

Nachdem du den Wert `PalCaptureRate` geändert hast, speichere die Änderungen im ZAP-Hosting Config-Editor.

### Starte den Server neu

Palworld übernimmt diese Einstellung nicht live. Nach dem Speichern der Datei musst du deinen Gameserver über die ZAP-Hosting Serververwaltung neu starten, damit die neue Capture-Rate geladen wird.

:::caution Neustart erforderlich
Wenn du den Server nach der Bearbeitung von `PalWorldSettings.ini` nicht neu startest, wird die neue Capture-Rate nicht wirksam.
:::

## Konfigurationsübersicht

Die folgende Tabelle fasst die für diese Änderung genutzte Einstellung zusammen:

| Datei | Konfig-Schlüssel | Standardwert | Zweck | Neustart erforderlich |
| --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | `PalCaptureRate` | `1.000000` | Steuert den Multiplikator für die Pal-Capture-Rate | Ja |

## Fehlerbehebung

Falls die neue Capture-Rate nicht zu wirken scheint, prüfe folgende Punkte.

### Überprüfe das Format der Einstellung

Stelle sicher, dass die Zeile korrekt geschrieben ist und einen numerischen Wert verwendet, zum Beispiel:

```ini
PalCaptureRate=2.000000
```

Vermeide zusätzliche Zeichen oder Änderungen an anderen Einträgen in der Datei.

### Bestätige, dass die Datei gespeichert wurde

Nach der Bearbeitung solltest du überprüfen, ob die Änderungen tatsächlich in `PalWorldSettings.ini` im Bereich `Configs` gespeichert wurden.

### Starte den Server bei Bedarf erneut

Wenn der Server nach der Änderung nicht richtig neu gestartet wurde, führe einen weiteren Neustart über die Serververwaltung durch.

:::note Serverseitige Gameplay-Einstellung
`PalCaptureRate` ist eine serverseitige Gameplay-Einstellung, daher merken Spieler die neue Rate erst, nachdem der Server die aktualisierte Konfiguration neu geladen hat.
:::

## Fazit

Glückwunsch, du hast die Pal-Capture-Rate auf deinem Palworld Server erfolgreich geändert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂