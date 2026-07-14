---
id: palworld-technology-ids
title: "Palworld: Technologie-IDs"
description: "Erfahre, wie du Palworld-Technologie-IDs verwaltest, bestimmte Technologien deaktivierst und die benötigten Konfigurationswerte auf deinem Server verstehst -> Jetzt mehr erfahren"
sidebar_label: Palworld: Technologie-IDs
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld nutzt *Technologie-IDs*, um freischaltbare Technologien und bestimmte itembezogene Einstellungen zu identifizieren. In dieser Anleitung lernst du, wie du auf deinem ZAP-Hosting Palworld-Gameserver bestimmte Technologien durch manuelles Bearbeiten des richtigen Konfigurationseintrags deaktivierst.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld-Gameserver im ZAP-Hosting Webinterface hast und die Berechtigung zum Bearbeiten der Server-Konfigurationsdateien besitzt.

:::info Erforderlicher Zugriff
Du benötigst Zugriff auf die Palworld-Serververwaltung und den Bereich `Configs` im ZAP-Hosting Panel, um diese Einrichtung abzuschließen.
:::

:::note Quellen für Technologie-IDs
Palworld-Technologie-IDs sind interne, vom Spiel definierte Strings wie `GrapplingGun` oder `SkillUnlock_JetDragon`. Eine offizielle Ingame-Liste im ZAP-Hosting Panel gibt es nicht, daher musst du eine verlässliche externe Referenz für gültige IDs nutzen.
:::

## Verständnis der Technologie-IDs

Technologie-IDs sind interne Bezeichner, die Palworld für freischaltbare Technologien verwendet. Statt des sichtbaren Ingame-Namens erwartet die Serverkonfiguration den exakten ID-String.

Zum Deaktivieren von Technologien nutzt Palworld die Einstellung `DenyTechnologyList`. Dieser Wert akzeptiert eine kommaseparierte Liste von Technologie-IDs.

### Was `DenyTechnologyList` bewirkt

Wenn du gültige Technologie-IDs zu `DenyTechnologyList` hinzufügst, werden diese Technologien auf deinem Server blockiert. Das ist nützlich, wenn du den Spielfortschritt einschränken, bestimmte Mobilitätswerkzeuge entfernen oder die Spielregeln für deine Community anpassen möchtest.

### Unterstütztes Werteformat

Der Wert muss als kommaseparierte Liste ohne zusätzliche Erklärungen eingetragen werden.

| Konfigurationsschlüssel | Zweck | Format | Beispiel |
|---|---|---|---|
| `DenyTechnologyList` | Deaktiviert ausgewählte Technologien | Kommaseparierte Technologie-ID-Strings | `GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon` |

:::caution Exakte ID-Übereinstimmung
Technologie-IDs müssen exakt mit dem internen Wert des Spiels übereinstimmen. Ist eine ID falsch geschrieben oder für die aktuelle Palworld-Version nicht mehr gültig, funktioniert die Einstellung möglicherweise nicht wie erwartet.
:::

## Öffne die richtige Konfigurationsdatei

Bei ZAP-Hosting erfolgt diese Änderung durch manuelles Bearbeiten der Palworld-Konfigurationsdatei.

### Zu bearbeitende Datei

Du musst folgende Datei bearbeiten:

```ini
PalWorldSettings.ini
```

### Wo du sie im ZAP-Hosting Interface findest

Öffne die Palworld-Serververwaltung und navigiere zu:

```text
Configs
```

Dort öffnest du `PalWorldSettings.ini`.

:::tip Speicherort der Konfiguration bei ZAP-Hosting
Falls dein Server mehrere bearbeitbare Dateien anbietet, achte darauf, `PalWorldSettings.ini` auszuwählen, da diese Datei für gameplay-relevante Servereinstellungen wie `DenyTechnologyList` verwendet wird.
:::

## Bearbeite die Technologie-ID-Einstellung

Nachdem du `PalWorldSettings.ini` geöffnet hast, suche die Server-Optionsliste und füge den Eintrag `DenyTechnologyList` hinzu oder ändere ihn.

### Technologie-IDs zu `DenyTechnologyList` hinzufügen

Nutze eine kommaseparierte Liste der Technologien, die du deaktivieren möchtest.

Beispiel:

```ini
DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon"
```

Dieses Beispiel deaktiviert:

| Technologie-ID | Bedeutung |
|---|---|
| `GrapplingGun` | Greifhaken |
| `GrapplingGun2` | Greifhaken höherer Stufe |
| `SkillUnlock_JetDragon` | JetDragon-Freischaltung |

:::note Anführungszeichen-Format
Je nachdem, wie dein bestehender `PalWorldSettings.ini`-Eintrag aufgebaut ist, kann der Wert innerhalb eines größeren Optionsblocks stehen. Behalte den bereits verwendeten Syntaxstil in deiner Datei bei und ändere nur den Wert für `DenyTechnologyList`.
:::

### Beispiel innerhalb eines Optionsblocks

Bei vielen Palworld-Servern werden Einstellungen in einer größeren `OptionSettings`-Zeile gespeichert. Dann sieht der Eintrag etwa so aus:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon")
```

Falls `DenyTechnologyList` noch nicht vorhanden ist, füge es innerhalb desselben `OptionSettings=(...)`-Blocks hinzu und trenne es mit einem Komma von anderen Einträgen.

:::caution Bestehende Syntax erhalten
Entferne keine anderen Einstellungen aus `OptionSettings`. Ein fehlendes Komma, eine fehlende Klammer oder ein fehlendes Anführungszeichen kann dazu führen, dass die Konfiguration nicht korrekt geladen wird.
:::

## Wähle gültige Technologie-IDs

Du musst gültige interne Technologie-IDs verwenden, nicht die im Spiel angezeigten Namen.

### Beispiel-Technologie-IDs

Folgende IDs sind bekannte Beispiele, die Palworld verwendet:

| Technologie-ID | Beispielbedeutung |
|---|---|
| `AIcore` | AI Core |
| `GrapplingGun` | Greifhaken |
| `GrapplingGun2` | Greifhaken-Variante |
| `GrapplingGun3` | Greifhaken-Variante |
| `GrapplingGun4` | Greifhaken-Variante |
| `GrapplingGun5` | Greifhaken-Variante |
| `SkillUnlock_JetDragon` | JetDragon-Freischaltung |
| `SkillUnlock_IceHorse` | Ice Horse-Freischaltung |
| `PALBOX` | Palbox-bezogene Technologie |
| `RepairBench` | Reparaturbank |

Da Palworld Updates erhält, kann sich die vollständige Liste der IDs im Laufe der Zeit ändern. Für eine umfassendere Referenz überprüfe die IDs vor der Anwendung anhand einer aktuellen und verlässlichen Quelle.

### Verwandte Verwendung von IDs in anderen Einstellungen

Technologie-ähnliche interne IDs können auch in anderen Palworld-Konfigurationsoptionen genutzt werden. Ein bekanntes Beispiel ist:

| Konfigurationsschlüssel | Zweck |
|---|---|
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Legt einen benutzerdefinierten Item-Drop für PvP-Kills fest |

:::info Verwandte PvP-Einstellung
Wenn du IDs für die Anpassung von PvP-Item-Drops verwenden möchtest, stelle sicher, dass der von `AdditionalDropItemWhenPlayerKillingInPvPMode` geforderte ID-Typ zum Item passt. Diese Anleitung konzentriert sich speziell auf `DenyTechnologyList`.
:::

## Speichern und Server neu starten

Nach dem Bearbeiten der Datei speichere deine Änderungen im ZAP-Hosting Interface.

Um die neue Konfiguration anzuwenden, starte deinen Palworld-Server neu.

### Erforderliche Schritte nach der Bearbeitung

| Aktion | Erforderlich |
|---|---|
| `PalWorldSettings.ini` speichern | Ja |
| Server neu starten | Ja |
| Zusätzliche Konsolenbefehle ausführen | Kein bestätigter Befehl erforderlich |

Ein Neustart ist notwendig, da Palworld diese Servereinstellungen beim Start lädt. Ohne Neustart greifen deine neuen Technologie-Beschränkungen nicht.

:::tip Test nach Neustart
Nachdem der Server neu gestartet ist, verbinde dich und überprüfe, ob die ausgewählten Technologien wie gewünscht nicht mehr verfügbar sind. So kannst du sicherstellen, dass IDs und Syntax korrekt eingetragen wurden.
:::

## Fehlerbehebung

Wenn die Technologien nach dem Neustart noch verfügbar sind, prüfe folgende Punkte.

### Überprüfe die Schreibweise der IDs

Stelle sicher, dass jede Technologie-ID exakt richtig geschrieben ist, inklusive Groß- und Kleinschreibung.

### Prüfe die Konfigurationssyntax

Wenn du den `OptionSettings=(...)`-Block bearbeitet hast, kontrolliere, dass:

- jede Einstellung durch ein Komma getrennt ist
- Anführungszeichen korrekt geöffnet und geschlossen sind
- Klammern vollständig sind
- `DenyTechnologyList` im richtigen Einstellungsblock steht

### Bestätige, dass der Server erfolgreich neu gestartet wurde

Wenn der Server nicht richtig neu gestartet wurde, wurde die aktualisierte Konfiguration möglicherweise nicht geladen.

:::danger Risiko durch ungültige Konfiguration
Eine falsch formatierte `PalWorldSettings.ini` kann verhindern, dass Einstellungen korrekt geladen werden. Falls das passiert, stelle die vorherige funktionierende Version der Datei wieder her und wende die Änderung sorgfältig erneut an.
:::

## Conclusion

Glückwunsch, du hast erfolgreich bestimmte Technologien auf deinem Palworld-Server mit Technologie-IDs deaktiviert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂