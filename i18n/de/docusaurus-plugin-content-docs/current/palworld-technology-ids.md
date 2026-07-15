---
id: palworld-technology-ids
title: "Palworld: Technologie-IDs"
description: "Erfahre, wie du Palworld Technologie-IDs verwaltest, bestimmte Technologien deaktivierst und die richtige Serverkonfiguration sicher bearbeitest. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Technologie-IDs
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld verwendet *Technologie-IDs*, um freischaltbare Technologien und bestimmte itembezogene Einstellungen in der Serverkonfiguration zu identifizieren. In dieser Anleitung lernst du, wie du bestimmte Technologien deaktivierst, indem du die Einstellung `DenyTechnologyList` in deiner ZAP-Hosting Palworld Serverkonfiguration bearbeitest.



## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver im ZAP-Hosting Webinterface hast und die Berechtigung, die Konfigurationsdateien zu bearbeiten.

:::info Zugriff auf Konfiguration erforderlich
Du benötigst Zugriff auf die Gameserver-Verwaltung und den Bereich `Configs`, um die Datei `PalWorldSettings.ini` bearbeiten zu können.
:::

:::note Quelle der Technologie-IDs
Palworld Technologie-IDs sind stringbasierte Werte, wie z. B. `GrapplingGun`, `GrapplingGun2` oder `SkillUnlock_JetDragon`. Eine aktuelle Drittanbieter-Referenzliste findest du hier: [Game Host Bros - Palworld Technology IDs](https://www.gamehostbros.com/guides/games/palworld/technology-ids).

Da Palworld Updates verfügbare Technologien ändern können, solltest du immer prüfen, ob die IDs in der aktuellen Spielversion noch gültig sind.
:::

## Verständnis der Technologie-IDs

Technologie-IDs sind interne Bezeichner, die Palworld für freischaltbare Technologieeinträge verwendet. Auf Dedicated Servern können diese IDs in bestimmten Konfigurationsoptionen genutzt werden, um das Gameplay-Verhalten zu steuern.

Die wichtigste Einstellung in diesem Zusammenhang ist `DenyTechnologyList`, mit der du ausgewählte Technologien auf deinem Server blockieren kannst.

### Unterstützte Konfigurationsnutzung

Die folgende Tabelle zeigt den relevanten Konfigurationsschlüssel, der in dieser Anleitung behandelt wird:

| Konfig-Schlüssel | Zweck | Werteformat |
| --- | --- | --- |
| `DenyTechnologyList` | Deaktiviert bestimmte Technologien auf dem Server | Kommagetrennte Liste von Technologie-ID-Strings |

### Beispielhafte Technologie-IDs

Die folgenden IDs sind häufig genannte Beispiele:

| Technologie-ID | Beispielbedeutung |
| --- | --- |
| `GrapplingGun` | Enterhaken |
| `GrapplingGun2` | Enterhaken höherer Stufe |
| `SkillUnlock_JetDragon` | Jetragon-bezogener Freischaltcode |
| `SkillUnlock_IceHorse` | Frostallion-bezogener Freischaltcode |
| `PALBOX` | Palbox-bezogene Technologie |
| `RepairBench` | Reparaturbank |
| `AIcore` | KI-Kern |

:::caution Exakte ID-Werte verwenden
Technologie-IDs sind case-sensitive Strings. Wenn du eine falsche ID eingibst, ignoriert Palworld diese möglicherweise und die Technologie wird nicht wie gewünscht deaktiviert.
:::

## Öffne die Palworld Konfigurationsdatei

Um Technologie-IDs auf deinem ZAP-Hosting Server zu konfigurieren, musst du die richtige Palworld Einstellungsdatei manuell bearbeiten.

### Datei im ZAP-Hosting Interface finden

1. Melde dich im ZAP-Hosting Webinterface an.
2. Öffne deinen **Palworld** Gameserver.
3. Gehe in der Gameserver-Verwaltung zu **Configs**.
4. Öffne die Datei `PalWorldSettings.ini`.

Dies ist die Konfigurationsdatei, in der die Einstellung `DenyTechnologyList` gespeichert und bearbeitet wird.



### Relevante Einstellung finden

Suche in `PalWorldSettings.ini` nach dem Server-Optionsblock, der deine Palworld Einstellungen enthält.

Du musst den Eintrag `DenyTechnologyList` finden oder hinzufügen.

:::tip Schnelle Suche in der Datei
Nutze die Suchfunktion deines Browsers mit `STRG` + `F` und suche nach `DenyTechnologyList`, um die Einstellung schneller zu finden.
:::

## `DenyTechnologyList` konfigurieren

Jetzt kannst du festlegen, welche Technologien auf deinem Server blockiert werden sollen.

### Werteformat

`DenyTechnologyList` verwendet eine kommaseparierte Liste von Technologie-IDs.

Beispiel:

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon
```

Jeder Eintrag muss eine gültige Palworld Technologie-ID sein. Füge keine Beschreibungen, Leerzeichen innerhalb der ID oder nicht unterstützte Zeichen hinzu.

### Einstellung hinzufügen oder bearbeiten

Wenn die Einstellung bereits existiert, ersetze den aktuellen Wert durch deine gewünschte Liste.

Falls die Einstellung noch nicht existiert, füge sie im passenden Servereinstellungsabschnitt in `PalWorldSettings.ini` hinzu.

Beispiel:

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,GrapplingGun3,SkillUnlock_JetDragon,PALBOX,RepairBench
```

Dieses Beispiel deaktiviert mehrere Technologien anhand ihrer IDs.

### Beispielhafte Konfigurationsreferenz

| Beispiel-Eintrag | Ergebnis |
| --- | --- |
| `DenyTechnologyList=GrapplingGun` | Deaktiviert nur die Basis-Enterhaken-Technologie |
| `DenyTechnologyList=GrapplingGun,GrapplingGun2` | Deaktiviert mehrere Enterhaken-Technologie-Stufen |
| `DenyTechnologyList=SkillUnlock_JetDragon,SkillUnlock_IceHorse` | Deaktiviert ausgewählte spezielle Freischalt-Technologien |

:::note Verwandte Item-ID-Nutzung
Einige Palworld itembezogene Einstellungen verwenden ebenfalls ID-basierte Werte. Beispielsweise können laut Drittanbieter-Referenzen `AdditionalDropItemWhenPlayerKillingInPvPMode` Palworld ID-Werte für PvP-Item-Drops nutzen. Diese Anleitung konzentriert sich jedoch speziell auf `DenyTechnologyList`.
:::

## Änderungen speichern und anwenden

Nach der Bearbeitung der Konfiguration musst du die Datei speichern und den Server neu starten, damit Palworld die aktualisierten Einstellungen lädt.

### Datei speichern

Nachdem du `PalWorldSettings.ini` bearbeitet hast:

1. Speichere die Änderungen im `Configs`-Editor.
2. Überprüfe den Eintrag noch einmal, um sicherzustellen, dass die IDs korrekt geschrieben sind.

### Server neu starten

Nachdem die Datei gespeichert wurde, starte deinen Palworld Server über die ZAP-Hosting Gameserver-Verwaltung neu.

Dieser Neustart ist notwendig, da Konfigurationsänderungen in `PalWorldSettings.ini` erst nach einem Neustart zuverlässig angewendet werden.

:::info Neustart erforderlich
Ein Server-Neustart ist nach Änderung von `DenyTechnologyList` erforderlich. In der Regel ist kein zusätzlicher Ingame-Befehl nötig, wenn du die Konfigurationsdatei nutzt.
:::

## Überprüfe, ob die Technologien deaktiviert sind

Nach dem Neustart solltest du prüfen, ob die Konfiguration wie gewünscht funktioniert.

### Was prüfen

Du kannst das Ergebnis überprüfen, indem du kontrollierst, ob die ausgewählten Technologien im Spiel noch verfügbar sind.

Nutze die folgende Checkliste:

| Prüfpunkte | Erwartetes Ergebnis |
| --- | --- |
| Server wurde erfolgreich neu gestartet | Server ist normal wieder online |
| `PalWorldSettings.ini` wurde korrekt gespeichert | Dein `DenyTechnologyList`-Eintrag ist noch vorhanden |
| Deaktivierte Technologie im Spiel getestet | Die ausgewählte Technologie ist wie erwartet nicht mehr verfügbar |

### Falls die Einstellung nicht wirkt

Wenn die Technologien weiterhin verfügbar sind, prüfe Folgendes:

| Mögliche Ursache | Was prüfen |
| --- | --- |
| Ungültige ID | Stelle sicher, dass die Technologie-ID exakt zur aktuellen Spielversion passt |
| Formatierungsfehler | Achte darauf, dass die Liste kommasepariert und als reine ID-Strings geschrieben ist |
| Datei nicht gespeichert | Öffne `PalWorldSettings.ini` erneut und bestätige, dass der Wert noch da ist |
| Server nicht neu gestartet | Starte den Server nach dem Speichern der Änderungen erneut |

:::caution Spielupdates können IDs ändern
Palworld erhält laufend Updates, und Technologie-Informationen können sich ändern. Wenn eine zuvor gültige ID nicht mehr funktioniert, vergleiche sie mit einer aktuellen und verlässlichen Referenz, bevor du weiter Fehler suchst.
:::

## Fazit

Glückwunsch, du hast erfolgreich bestimmte Technologien auf deinem Palworld Server mit Technologie-IDs deaktiviert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂