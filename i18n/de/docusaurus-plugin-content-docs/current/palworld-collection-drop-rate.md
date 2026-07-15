---
id: palworld-collection-drop-rate
title: "Palworld: Collection Drop Rate"
description: "Erfahre, wie du die Palworld-Sammel-Einstellungen anpasst, gesammelte Ressourcen erhöhst und Respawns auf deinem Palworld-Gameserver beschleunigst. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Collection Drop Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld gibt dir die Kontrolle darüber, wie viele Ressourcen Spieler sammeln und wie schnell sammelbare Objekte zurückkehren. In dieser Anleitung lernst du, wie du die richtige Konfigurationsdatei auf deinem ZAP-Hosting Gameserver manuell bearbeitest, um die Collection Drop Rate und verwandte Ressourceneinstellungen zu ändern.



## Preparation

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld-Gameserver im ZAP-Hosting Webinterface hast und der Server aktuell offline ist oder nach den Änderungen neu gestartet werden kann.

:::info Zugriff auf die Konfigurationsdatei
Für Palworld werden die relevanten Gameplay-Einstellungen in der Datei `PalWorldSettings.ini` gespeichert. Im ZAP-Hosting Gameserver-Adminbereich findest du diese Datei im Bereich `Configs`.
:::

## Öffne die Palworld-Konfigurationsdatei

Um die Sammel-Einstellungen zu ändern, musst du die Hauptkonfigurationsdatei des Palworld-Servers bearbeiten.

### Datei im ZAP-Hosting Interface finden

1. Melde dich im [ZAP-Hosting Webinterface](https://zap-hosting.com) an.
2. Öffne deinen Palworld-Gameserver.
3. Navigiere im Server-Adminbereich zum Abschnitt `Configs`.
4. Öffne die Datei mit dem Namen `PalWorldSettings.ini`.

:::note Richtige Datei
Die in dieser Anleitung beschriebenen sammelbezogenen Einstellungen findest du in `PalWorldSettings.ini`. Falls du die erwarteten Einträge nicht sofort siehst, befinden sie sich meist innerhalb der `OptionSettings`-Konfigurationszeile.
:::

## Bearbeite die Collection-Einstellungen

Palworld speichert viele Gameplay-Optionen als Key-Value-Paare im Abschnitt `OptionSettings` der Datei `PalWorldSettings.ini`. Um gesammelte Ressourcen zu erhöhen oder die Respawn-Geschwindigkeit von Ressourcen zu ändern, musst du dort die entsprechenden Werte anpassen.

### Relevante Konfigurationsschlüssel

Verwende folgende Einstellungen für das Sammelverhalten:

| Konfig-Schlüssel | Standardwert | Beschreibung |
| --- | --- | --- |
| `CollectionDropRate` | `1.000000` | Steuert, wie viele Items Spieler von sammelbaren Ressourcen erhalten. Höhere Werte erhöhen die Menge. |
| `CollectionObjectRespawnSpeedRate` | `1.000000` | Steuert, wie schnell sammelbare Objekte respawnen. Höhere Werte beschleunigen das Zurückkehren der Ressourcen. |
| `CollectionObjectHpRate` | `1.000000` | Steuert die HP von sammelbaren Objekten wie Steinen oder Bäumen. Höhere Werte machen sie meist schwerer zu zerstören. |

### Beispiel-Konfigurationswerte

Wenn du die gesammelten Ressourcen verdoppeln und die Respawn-Zeit der Ressourcen halbieren möchtest, setze beide Werte auf `2.000000`.

```ini
CollectionDropRate=2.000000
CollectionObjectRespawnSpeedRate=2.000000
```

Wenn sammelbare Objekte außerdem leichter zu zerstören sein sollen, kannst du den HP-Multiplikator verringern:

```ini
CollectionObjectHpRate=0.500000
```

:::tip Empfohlene Startwerte
Ein Wert von `2.000000` ist ein gängiger Startpunkt für `CollectionDropRate` und `CollectionObjectRespawnSpeedRate`. Damit erzielst du eine spürbar schnellere Progression, ohne das Palworld-Spiel zu stark zu verändern.
:::

## Änderungen in `PalWorldSettings.ini` anwenden

Nachdem du `PalWorldSettings.ini` geöffnet hast, suche den bestehenden `OptionSettings`-Eintrag und passe die relevanten Schlüssel direkt darin an.

### Beispiel für einen `OptionSettings`-Abschnitt

Je nach aktueller Serverkonfiguration kann die Zeile bereits viele Einstellungen enthalten. Du musst nur die Werte der sammelbezogenen Schlüssel ändern, falls sie vorhanden sind, oder sie hinzufügen, falls sie fehlen.

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=2.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=2.000000,EnemyDropItemRate=1.000000)
```

:::caution Syntax beibehalten
Achte darauf, das bestehende Format der `OptionSettings`-Zeile unverändert zu lassen. Entferne keine Kommata, Klammern oder andere Einstellungen versehentlich, sonst kann der Server die Konfiguration nicht korrekt laden.
:::

## Speichern und Server neu starten

Nachdem du die Datei bearbeitet hast, speichere deine Änderungen im Bereich `Configs`.

### Neustart erforderlich

Palworld übernimmt diese Gameplay-Konfigurationsänderungen nicht sofort, solange der Server läuft. Du musst den Server nach dem Speichern neu starten, damit die neuen Werte geladen werden.

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Server neu starten | Ja |
| Zusätzlicher Konsolenbefehl | Kein bestätigter Befehl erforderlich |

:::info Neustart notwendig
Ein kompletter Serverneustart ist nach Änderungen an `CollectionDropRate`, `CollectionObjectRespawnSpeedRate` oder `CollectionObjectHpRate` erforderlich. Für diese Einstellungen sind keine zusätzlichen Ingame- oder Konsolenbefehle nötig.
:::

## Neue Sammel-Einstellungen überprüfen

Nach dem Neustart kannst du dich auf deinem Server einloggen und einige sammelbare Objekte wie Bäume, Steine oder Erzknoten testen.

### Was du prüfen solltest

- Ob Spieler pro Sammelaktion mehr Materialien erhalten
- Ob zerstörte Ressourcen schneller zurückkehren als vorher
- Ob sammelbare Objekte sich leichter oder schwerer zerstören lassen, falls du `CollectionObjectHpRate` geändert hast

Wenn das Ergebnis zu stark oder zu schwach ist, kehre zurück zu `PalWorldSettings.ini` und passe die Multiplikatoren erneut an.

:::tip Feintuning deines Servers
Für ein ausgewogeneres Palworld-Sammelerlebnis solltest du Werte schrittweise erhöhen, z. B. von `1.000000` auf `1.500000`, bevor du höhere Multiplikatoren setzt.
:::

## Konfigurationsübersicht

Die folgende Tabelle fasst die wichtigsten Werte für diese Palworld-Sammel-Einstellungen zusammen.

| Einstellung | Beispiel | Wirkung |
| --- | --- | --- |
| `CollectionDropRate=1.000000` | Standard | Standardmenge gesammelter Ressourcen |
| `CollectionDropRate=2.000000` | Erhöht | Doppelte Menge gesammelter Ressourcen |
| `CollectionObjectRespawnSpeedRate=1.000000` | Standard | Standard-Respawn-Geschwindigkeit |
| `CollectionObjectRespawnSpeedRate=2.000000` | Erhöht | Schnellere Ressourcenerneuerung |
| `CollectionObjectHpRate=1.000000` | Standard | Standard-HP sammelbarer Objekte |
| `CollectionObjectHpRate=0.500000` | Verringert | Sammelbare Objekte lassen sich schneller zerstören |

## Conclusion

Glückwunsch, du hast die Collection Drop Rate auf deinem Palworld-Server erfolgreich geändert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂