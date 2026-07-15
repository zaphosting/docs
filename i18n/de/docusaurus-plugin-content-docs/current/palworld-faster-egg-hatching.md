---
id: palworld-faster-egg-hatching
title: "Palworld: Schnellere Ei-Schlüpfzeit"
description: "Lerne, wie du die Ei-Schlüpfzeit in Palworld verkürzt, indem du die entsprechende Einstellung im Palworld Gameserver änderst, um schnellere Schlüpfergebnisse zu erzielen. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Schnellere Ei-Schlüpfzeit
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In Palworld wird die Ei-Schlüpfzeit über eine Server-Konfiguration gesteuert. In dieser Anleitung lernst du, wie du die Ei-Schlüpfzeit auf deinem ZAP-Hosting Palworld Gameserver durch Bearbeiten der richtigen Konfigurationsdatei verkürzt und die Änderung korrekt anwendest.



## Preparation

Bevor du startest, stelle sicher, dass:

- du Zugriff auf das Webinterface deines ZAP-Hosting Gameservers hast
- dein Palworld Server in der Gameserver-Verwaltung verfügbar ist
- du Dateien im Bereich **Configs** bearbeiten kannst

:::info Zugriff auf die Konfigurationsdatei
Bei Palworld auf ZAP-Hosting kannst du die relevanten Servereinstellungen über die Gameserver-Verwaltung unter **Configs** bearbeiten. Für diese Aufgabe musst du die Datei `PalWorldSettings.ini` anpassen.
:::

## Die Ei-Schlüpfzeit verstehen

Palworld verwendet die Einstellung `PalEggDefaultHatchingTime`, um die Basis-Schlüpfzeit der Eier in Stunden festzulegen. Ein niedrigerer Wert bedeutet, dass die Eier schneller schlüpfen.

Laut aktueller Palworld Server-Konfigurationsreferenz ist der Standardwert `72`, was `72` Stunden für ein Großes Ei entspricht. Andere Eiertypen skalieren ebenfalls von diesem Basiswert.

| Konfig-Schlüssel | Standardwert | Beschreibung |
| --- | --- | --- |
| `PalEggDefaultHatchingTime` | `72.000000` | Basis-Schlüpfzeit der Eier in Stunden |

:::note Funktionsweise der Einstellung
Dieser Wert beeinflusst den allgemeinen Ei-Schlüpfprozess auf deinem Server. Wenn du ihn verringerst, schlüpfen alle Eier schneller, die von Spielern mit Brutapparaten ausgebrütet werden.
:::

## Die Palworld Konfigurationsdatei öffnen

Zuerst musst du die richtige Konfigurationsdatei im ZAP-Hosting Interface öffnen.

### Zum Bereich Configs navigieren

Öffne die Gameserver-Verwaltung deines Palworld Servers und gehe zum Bereich **Configs**. Dort findest du die Datei mit dem Namen:

```ini
PalWorldSettings.ini
```

Diese Datei enthält die Gameplay-Konfigurationen für deinen Palworld Server, inklusive der Einstellung zur Ei-Schlüpfzeit.



## Die Ei-Schlüpfzeit bearbeiten

Nachdem du `PalWorldSettings.ini` geöffnet hast, suche die Zeile mit `OptionSettings`. Palworld speichert viele Gameplay-Einstellungen in diesem Abschnitt.

### Den richtigen Konfig-Schlüssel ändern

Finde den Eintrag:

```ini
PalEggDefaultHatchingTime=72.000000
```

Ändere den Wert auf eine niedrigere Zahl, um die Ei-Schlüpfzeit zu verkürzen.

Zum Beispiel:

```ini
PalEggDefaultHatchingTime=24.000000
```

Das würde die Basis-Schlüpfzeit von `72` Stunden auf `24` Stunden reduzieren.

### Beispielwerte

Je nachdem, wie schnell die Eier auf deinem Server schlüpfen sollen, kannst du verschiedene Werte verwenden.

| Wert | Ergebnis |
| --- | --- |
| `72.000000` | Standard-Schlüpfzeit |
| `48.000000` | Leicht verkürzte Zeit, ausgewogenes Gameplay |
| `24.000000` | Deutlich schnellere Ei-Schlüpfzeit |
| `12.000000` | Sehr schnelle Ei-Schlüpfzeit |
| `1.000000` | Extrem schnelle Schlüpfzeit |

:::caution Realistische Werte verwenden
Sehr niedrige Werte können das Gameplay stark verändern. Für eine natürlichere Progression beginne am besten mit moderaten Werten wie `24.000000` oder `48.000000`.
:::

### Beispiel-Konfigurationsausschnitt

Je nach aktueller Konfiguration findest du die Einstellung im `OptionSettings` Block. Ein typisches Beispiel sieht so aus:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=24.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,BaseCampMaxNumInGuild=4)
```

:::tip Richtigen Eintrag bearbeiten
Falls der Schlüssel `PalEggDefaultHatchingTime` bereits existiert, ändere den vorhandenen Wert, statt einen doppelten Eintrag hinzuzufügen. Doppelte Werte im selben `OptionSettings` Block können dazu führen, dass Einstellungen ignoriert oder überschrieben werden.
:::

## Änderungen speichern und anwenden

Nachdem du den Wert geändert hast, speichere die Datei `PalWorldSettings.ini` im ZAP-Hosting Interface.

### Server neu starten

Starte anschließend deinen Palworld Server neu, damit die neue Ei-Schlüpfzeit geladen wird.

:::info Neustart erforderlich
Die aktualisierte Konfiguration wird erst nach einem Server-Neustart aktiv.
:::

## Wichtiges Verhalten bei bereits schlüpfenden Eiern

Wenn Eier bereits ausgebrütet werden, aktualisiert sich der neue Schlüpfwert nicht zuverlässig für diese aktiven Brut-Timer. In der Praxis solltest du den Brutvorgang der betroffenen Eier entfernen und neu starten, damit die neue Geschwindigkeit angewendet wird.

| Situation | Erforderliche Aktion |
| --- | --- |
| Neue Eier nach der Änderung platziert | Kein zusätzlicher Schritt nach Neustart nötig |
| Eier, die vor der Änderung ausgebrütet wurden | Brutvorgang für diese Eier neu starten |

:::note Bereits laufende Brut-Timer
Wenn du die Ei-Schlüpfzeit änderst und das erwartete Ergebnis nicht siehst, prüfe, ob das Ei schon vor der Konfigurationsänderung ausgebrütet wurde.
:::

## Conclusion

Glückwunsch, du hast die Ei-Schlüpfzeit auf deinem Palworld Server erfolgreich verkürzt. Für weitere Fragen oder Hilfe steht dir unser Support-Team täglich zur Verfügung! 🙂