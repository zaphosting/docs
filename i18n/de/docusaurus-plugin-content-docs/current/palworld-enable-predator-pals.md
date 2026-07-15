---
id: palworld-enable-predator-pals
title: "Palworld: Predator Pals aktivieren"
description: "Erfahre, wie du Predator Pals auf deinem Palworld-Server aktivierst oder deaktivierst, Probleme mit nicht spawnenden Predator Pals behebst und die richtige Einstellung manuell konfigurierst. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Predator Pals aktivieren
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

*Predator Pals* sind mächtige Boss-Pals, die in der Welt von Palworld spawnen können. In dieser Anleitung lernst du, wie du Predator Pals auf deinem ZAP-Hosting Palworld Gameserver aktivierst oder deaktivierst, indem du die richtige Konfigurationsdatei manuell bearbeitest.



## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver im ZAP-Hosting Webinterface hast und die Berechtigung, die Konfigurationsdateien zu verwalten.

:::info Zugriff auf Konfigurationsdatei
Für diese Einrichtung musst du die Serverkonfiguration manuell über den Bereich **Configs** in der Gameserver-Verwaltung bearbeiten.
:::

## Palworld-Konfiguration öffnen

Um zu ändern, ob Predator Pals spawnen können, musst du die Datei `PalWorldSettings.ini` bearbeiten.

### Die richtige Datei im ZAP-Interface finden

Öffne zuerst deinen Palworld Gameserver im ZAP-Hosting Webinterface. Navigiere dann zum Bereich **Configs** deiner Serververwaltung und öffne die Datei `PalWorldSettings.ini`.

Dies ist die Hauptkonfigurationsdatei für gameplay-relevante Servereinstellungen, einschließlich des Verhaltens der Predator Boss Pals.

:::note Manuelle Bearbeitung erforderlich
Diese Einstellung muss manuell in der Konfigurationsdatei geändert werden. Falls dein Interface keinen eigenen Schalter für diese Option anzeigt, ist die direkte Bearbeitung von `PalWorldSettings.ini` der richtige Weg.
:::

## Predator Pals Einstellung bearbeiten

Suche in der Datei `PalWorldSettings.ini` den Abschnitt `OptionSettings`. Der relevante Konfigurationsschlüssel heißt `EnablePredatorBossPal`.

### Konfigurationswert

Verwende je nach gewünschtem Ergebnis einen der folgenden Werte:

| Einstellung | Wert | Ergebnis |
| --- | --- | --- |
| Predator Pals aktivieren | `True` | Predator Boss Pals können in der Welt spawnen |
| Predator Pals deaktivieren | `False` | Predator Boss Pals spawnen nicht in der Welt |

### Beispiel-Eintrag

Wenn die Einstellung bereits vorhanden ist, ändere den Wert. Falls sie fehlt, füge sie innerhalb der `OptionSettings`-Liste hinzu.

```ini
EnablePredatorBossPal=True
```

Um Predator Pals zu deaktivieren, verwende stattdessen:

```ini
EnablePredatorBossPal=False
```

:::tip Bestehende Syntax zuerst prüfen
Palworld-Servereinstellungen sind oft Teil einer längeren `OptionSettings`-Zeile in `PalWorldSettings.ini`. Wenn deine Datei diese Struktur bereits enthält, füge `EnablePredatorBossPal=True` oder `EnablePredatorBossPal=False` innerhalb dieser bestehenden Liste hinzu, anstatt einen separaten Abschnitt zu erstellen.
:::

## Änderungen speichern und anwenden

Speichere nach der Bearbeitung die Datei im Bereich **Configs**.

### Server neu starten

Starte anschließend deinen Palworld Gameserver neu, damit die neue Einstellung korrekt geladen wird.

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Server neu starten | Ja |
| Zusätzlicher Konsolenbefehl | Nein |

:::caution Neustart erforderlich
Die neue Predator Pals-Einstellung wird erst nach einem Serverneustart wirksam. Wenn Predator Pals nach der Änderung nicht spawnen, überprüfe, ob die Datei korrekt gespeichert wurde und der Neustart erfolgreich war.
:::

## Einstellung überprüfen

Nach dem Neustart verbinde dich mit deinem Server und prüfe, ob sich die Predator Pals wie gewünscht verhalten.

Falls du sie aktiviert hast und keine Predator Pals spawnen, kontrolliere den Eintrag in `PalWorldSettings.ini` erneut und stelle sicher, dass der Wert exakt `True` oder `False` lautet. Vergewissere dich außerdem, dass die Einstellung korrekt innerhalb der bestehenden Serverkonfiguration platziert ist.

:::note Spawn-Verhalten
Diese Einstellung steuert, ob Predator Boss Pals in der Welt spawnen dürfen. Sie liefert keine Karte mit Spawn-Standorten, ändert keine einzelnen Spawnpunkte und garantiert keine sofortigen Begegnungen an bestimmten Orten.
:::

## Konfigurationsübersicht

| Datei | Ort im ZAP-Hosting | Schlüssel | Mögliche Werte | Standardverhalten | Neustart erforderlich |
| --- | --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | Gameserver-Verwaltung → **Configs** | `EnablePredatorBossPal` | `True`, `False` | `True` | Ja |

## Fazit

Glückwunsch, du hast Predator Pals auf deinem Palworld Gameserver erfolgreich aktiviert oder deaktiviert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂