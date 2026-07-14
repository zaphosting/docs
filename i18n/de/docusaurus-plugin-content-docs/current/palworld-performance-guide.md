---
id: palworld-performance-guide
title: "Palworld: Performance Anleitung"
description: "Verbessere die Palworld Gameserver-Performance, reduziere Performance-Einbrüche und verringere die Serverlast durch manuelle Konfigurationsänderungen. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Performance Anleitung
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Die Palworld Gameserver-Performance kann mit der Zeit abnehmen, besonders bei aktiven Servern mit vielen Basen, Arbeitern, liegengebliebenen Items und wilden Pals. In dieser Anleitung lernst du, wie du die `PalWorldSettings.ini` im ZAP-Hosting Webinterface optimierst, um die Serverlast zu reduzieren und die Gesamtperformance zu verbessern.

## Preparation

Bevor du startest, brauchst du Zugriff auf deine Palworld Gameserver-Verwaltung und die Berechtigung, Konfigurationsdateien zu bearbeiten.

:::info Erforderlicher Zugriff
Du benötigst Zugriff auf deinen Palworld Gameserver im ZAP-Hosting Gameserver-Administrationspanel. Die benötigte Konfigurationsdatei findest du unter `Configs`.
:::

:::caution Backup vorher erstellen
Performance-Tuning kann das Gameplay deutlich verändern. Erstelle vor der Bearbeitung unbedingt ein Backup, damit du bei Bedarf deine vorherigen Einstellungen wiederherstellen kannst.
:::

## Palworld-Konfigurationsdatei öffnen

Um deinen Server zu optimieren, musst du die Hauptkonfigurationsdatei des Palworld Servers bearbeiten.

1. Melde dich im ZAP-Hosting Webinterface an.
2. Öffne deine **Palworld** Gameserver-Verwaltung.
3. Navigiere zu **Configs**.
4. Öffne die Datei `PalWorldSettings.ini`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note Wo die Änderungen gemacht werden
Die performance-relevanten Einstellungen sind in der Datei `PalWorldSettings.ini` gespeichert. Du musst die vorhandenen Optionswerte in dieser Datei manuell anpassen.
:::

## Die relevanten Einstellungen verstehen

Mehrere Palworld-Einstellungen beeinflussen direkt die Server-Performance. Einige Werte reduzieren CPU-, Speicher- und Weltsimulationslast, andere helfen, die Ansammlung von inaktiven Spielern oder zu vielen Welt-Entitäten zu begrenzen.

### Haupt-Performance-Einstellungen

Die folgenden Einstellungen sind am wichtigsten, wenn du Performance-Einbrüche auf einem stark genutzten Server reduzieren möchtest.

| Einstellung | Standard | Empfohlene Änderung | Wirkung |
|---|---:|---|---|
| `BuildObjectDeteriorationDamageRate` | `1.0` | Bei `0.1` oder höher belassen | Höhere Abnutzung entfernt verlassene Strukturen schneller |
| `bAutoResetGuildNoOnlinePlayers` | `False` | Bei Bedarf auf `True` setzen | Entfernt inaktive Gildenbasen nach der konfigurierten Schonfrist |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Nach Bedarf anpassen | Definiert die Inaktivitätszeit in Stunden vor dem Gilden-Reset |
| `PalSpawnNumRate` | `1.0` | Verringern | Spawnt weniger wilde Pals und reduziert Simulationslast |
| `DropItemMaxNum` | `3000` | Verringern | Begrenzt die Anzahl der liegengelassenen Items in der Welt |
| `DropItemAliveMaxHours` | `1.0` | Verringern | Entfernt liegengelassene Items schneller |
| `BaseCampMaxNumInGuild` | `4` | Verringern | Reduziert die Anzahl der Gildenbasen |
| `ServerReplicatePawnCullDistance` | `15000.0` | Verringern | Verringert die Synchronisationsdistanz der Pals und reduziert Netzwerk-/Serverlast |
| `BaseCampWorkerMaxNum` | `15` | Verringern | Begrenzt die Anzahl der Arbeiter-Pals pro Basis |
| `MaxBuildingLimitNum` | `0` | Wert setzen | Begrenzt die Gesamtanzahl der Gebäude pro Spieler |
| `bEnableInvaderEnemy` | `True` | Auf `False` setzen | Deaktiviert Raid-artige Angreifer und reduziert Last |
| `bEnableFastTravel` | `True` | Bei Bedarf auf `False` setzen | Kann Einfrierungen durch Schnellreise-Events reduzieren |
| `bIsPvP` | `False` | Bei Bedarf `False` belassen | PvP kann die Serverlast bei aktiven Umgebungen erhöhen |

### Sekundäre Performance-Einstellungen

Diese Einstellungen können ebenfalls helfen, besonders auf größeren öffentlichen Servern.

| Einstellung | Standard | Empfohlene Änderung | Wirkung |
|---|---:|---|---|
| `BaseCampMaxNum` | `128` | Verringern | Reduziert die Gesamtanzahl der Basen auf dem Server |
| `AutoSaveSpan` | `240` | Erhöhen | Verringert die Häufigkeit automatischer Speicherungen |

:::tip Erst konservative Änderungen vornehmen
Ändere am besten nur wenige Werte gleichzeitig und teste dann das Serververhalten. So findest du leichter heraus, welche Einstellung die Performance verbessert und welche das Gameplay zu stark beeinflusst.
:::

## Die Konfiguration bearbeiten

Palworld speichert Serveroptionen im Abschnitt `OptionSettings` in der Datei `PalWorldSettings.ini`. Du musst die relevanten Einträge manuell anpassen.

### Beispiel für eine optimierte Konfiguration

Das folgende Beispiel zeigt eine konservative, performanceorientierte Konfiguration. Ersetze nur die Werte, die du tatsächlich für deinen Server verwenden möchtest.

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=0.800000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=False,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=2000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=64,BaseCampWorkerMaxNum=10,DropItemAliveMaxHours=0.500000,bAutoResetGuildNoOnlinePlayers=True,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=False,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,ServerReplicatePawnCullDistance=10000.000000,bEnableGuildPlayerSelect=False,BanListURL="https://api.palworldgame.com/api/banlist.txt",bAutoResetGuildNoOnlinePlayers=True,BaseCampMaxNumInGuild=3)
```

:::caution Vorhandene Einträge prüfen
Das Konfigurationsformat von Palworld kann sich mit Updates ändern. Achte vor dem Speichern darauf, dass du die vorhandene `OptionSettings`-Zeile bearbeitest und keine doppelten oder widersprüchlichen Einträge erzeugst.
:::

### Empfohlene Wertanpassungen

Wenn du nicht die ganze Zeile ersetzen möchtest, kannst du auch nur die relevanten Werte in deiner bestehenden Konfiguration anpassen.

| Eintrag | Beispielwert | Warum ändern? |
|---|---:|---|
| `PalSpawnNumRate` | `0.8` | Reduziert wilde Pal-Spawns |
| `DropItemMaxNum` | `2000` | Verringert Item-Müll |
| `DropItemAliveMaxHours` | `0.5` | Entfernt liegengelassene Items schneller |
| `BaseCampMaxNum` | `64` | Reduziert die Gesamtanzahl der Basen |
| `BaseCampMaxNumInGuild` | `3` | Begrenzt die Gildenbasis-Ausbreitung |
| `BaseCampWorkerMaxNum` | `10` | Verringert die Last durch KI-Arbeiter |
| `ServerReplicatePawnCullDistance` | `10000.0` | Verringert die Replikationsdistanz |
| `bEnableInvaderEnemy` | `False` | Deaktiviert raid-bezogene Last |
| `bEnableFastTravel` | `False` | Vermeidet Einfrierungen durch Schnellreise |
| `bAutoResetGuildNoOnlinePlayers` | `True` | Räumt inaktive Gildenbasen auf |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Setzt die Schonfrist für Inaktivität |
| `MaxBuildingLimitNum` | `[your_limit]` | Begrenzt übermäßiges Bauen |
| `bIsPvP` | `False` | Verhindert zusätzlichen PvP-Overhead |
| `AutoSaveSpan` | `[your_value]` | Verringert Speicherfrequenz, falls unterstützt |

:::danger Inaktiver Gilden-Reset löscht Basen
Wenn du `bAutoResetGuildNoOnlinePlayers=True` aktivierst, können inaktive Gilden nach der in `AutoResetGuildTimeNoOnlinePlayers` eingestellten Zeit automatisch aufgelöst werden. Dabei können Basen und Strukturen inaktiver Spieler dauerhaft gelöscht werden.
:::

## Änderungen speichern und anwenden

Nach der Bearbeitung musst du die Konfiguration speichern und den Server neu starten, damit die neuen Einstellungen geladen werden.

1. Speichere die Änderungen in `PalWorldSettings.ini`.
2. Gehe zurück zur Gameserver-Verwaltung.
3. Starte den Palworld Server neu.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info Neustart erforderlich
Nach Änderungen an `PalWorldSettings.ini` ist ein Neustart erforderlich. Ohne Neustart verwendet der Server weiterhin die alten Einstellungen.
:::

## Best Practices für langfristige Performance

Manuelle Konfigurationsänderungen helfen, sind aber nur ein Teil der Gesamtoptimierung.

### Automatische tägliche Neustarts nutzen

Ein täglicher Neustart ist eine bewährte Methode für Palworld Server, da sich Ressourcenverbrauch mit der Zeit aufbauen kann.

- Erstelle im ZAP-Hosting Gameserver-Panel einen automatischen Neustartplan
- Wähle eine Zeit mit geringer Spieleraktivität
- Informiere deine Spieler rechtzeitig, wenn deine Community aktiv ist

### Weltwachstum begrenzen

Der häufigste Grund für Performance-Einbrüche auf lang laufenden Palworld Servern ist meist die Komplexität der Welt.

Um das zu reduzieren:

- Basislimits senken
- Arbeiteranzahl verringern
- Ansammlung von liegengelassenen Items reduzieren
- Wilde Pal-Spawns verringern
- Inaktive Gilden vorsichtig aufräumen
- Baulimit mit `MaxBuildingLimitNum` setzen

### Änderungen schrittweise testen

Wende keine extremen Reduzierungen sofort an, außer dein Server ist bereits instabil.

Ein guter Ablauf ist:

1. Zuerst Spawn- und Itemwerte senken
2. Danach Basis- und Arbeiterlimits reduzieren
3. Optional hochbelastende Features deaktivieren
4. Nach jeder Änderung neu starten und Performance beobachten

:::tip Performance und Gameplay ausbalancieren
Die besten Einstellungen hängen von deinem Servertyp ab. Ein kleiner privater Server kann meist höhere Werte behalten, während ein großer öffentlicher Community-Server oft strengere Limits braucht, um Performance-Einbrüche zu vermeiden.
:::

## Conclusion

Glückwunsch, du hast die Performance deines Palworld Gameservers erfolgreich optimiert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂