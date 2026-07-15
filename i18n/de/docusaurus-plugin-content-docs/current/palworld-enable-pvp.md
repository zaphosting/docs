---
id: palworld-enable-pvp
title: "Palworld: PvP aktivieren"
description: "Lerne, wie du PvP in Palworld aktivierst, das Basis-Kampfverhalten konfigurierst und empfohlene PvP-Einstellungen auf deinem Server anwendest. -> Jetzt mehr erfahren"
sidebar_label: "PvP aktivieren"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld bietet einen PvP-Modus, der es Spielern ermöglicht, gegeneinander zu kämpfen und das Basis-Kampf- sowie Gildenverhalten auf deinem Server verändert. In dieser Anleitung lernst du, wie du PvP manuell aktivierst, indem du die richtige Konfigurationsdatei im ZAP-Hosting Gameserver-Admin bearbeitest und die erforderlichen Einstellungen vornimmst.

:::caution Trial Feature Hinweis
PvP in Palworld wird vom Entwickler als Trial-Feature betrachtet. Konfigurationsoptionen und Gameplay-Verhalten können sich mit zukünftigen Updates ändern.
:::

## Vorbereitung

Bevor du startest, stelle sicher, dass:

- Du Zugriff auf deinen Palworld Gameserver im ZAP-Hosting Webinterface hast
- Dein Server aktuell gestoppt ist oder nach den Änderungen neu gestartet werden kann
- Du verstehst, dass PvP das Gameplay stark verändert, insbesondere im Bereich Spieler-Kampf, Basisverteidigung und Item-Verlust beim Tod

:::info Zugriff auf Konfiguration
Für ZAP-Hosting Palworld Server kannst du die relevante Konfigurationsdatei über die Gameserver-Verwaltung unter `Configs` öffnen.
:::

## Öffne die Palworld-Konfigurationsdatei

Um PvP zu aktivieren, musst du die Datei `PalWorldSettings.ini` bearbeiten.

### Datei im ZAP-Hosting Interface finden

1. Melde dich im ZAP-Hosting Webinterface an.
2. Öffne deinen Palworld Gameserver.
3. Navigiere in der Gameserver-Verwaltung zu `Configs`.
4. Öffne die Datei `PalWorldSettings.ini`.



:::note Konfigurationsformat
Palworld Server-Einstellungen werden typischerweise im Abschnitt `OptionSettings=(...)` in der Datei `PalWorldSettings.ini` gespeichert. Du musst die erforderlichen Schlüssel innerhalb dieses Blocks hinzufügen oder anpassen.
:::

## Aktiviere die erforderlichen PvP-Einstellungen

Um PvP zu aktivieren, müssen die folgenden drei Einstellungen in `PalWorldSettings.ini` auf `True` gesetzt sein.

### Erforderliche PvP-Schlüssel

| Einstellung | Erforderlicher Wert | Beschreibung |
|---|---|---|
| `bIsPvP` | `True` | Aktiviert den PvP-Modus auf dem Server |
| `bEnablePlayerToPlayerDamage` | `True` | Erlaubt direkten Schaden zwischen Spielern |
| `bEnableDefenseOtherGuildPlayer` | `True` | Erlaubt defensive Interaktionen mit Spielern anderer Gilden |

### Beispielkonfiguration

Füge diese Werte in deine `OptionSettings=(...)`-Zeile ein oder ändere vorhandene Werte entsprechend:

```ini
bIsPvP=True,
bEnablePlayerToPlayerDamage=True,
bEnableDefenseOtherGuildPlayer=True
```

:::tip Doppelte Schlüssel vermeiden
Wenn eine Einstellung bereits in `PalWorldSettings.ini` existiert, ändere den vorhandenen Wert, anstatt denselben Schlüssel erneut hinzuzufügen. Doppelte Einträge können unerwartetes Verhalten verursachen oder die Fehlersuche erschweren.
:::

## Empfohlene PvP-Einstellungen

Sobald PvP aktiviert ist, kannst du weitere Einstellungen anpassen, um ein ausgewogeneres PvP-Erlebnis zu schaffen. Die folgenden Werte werden häufig für PvP-orientierte Server empfohlen.

### Vorgeschlagene Werte

| Einstellung | Empfohlener Wert | Beschreibung |
|---|---|---|
| `bAllowEnhanceStat_Health` | `False` | Verhindert die Zuweisung von HP-Stat |
| `bAllowEnhanceStat_Attack` | `False` | Verhindert die Zuweisung von Angriffs-Stat |
| `bEnableFastTravel` | `True` | Aktiviert Schnellreise |
| `bEnableFastTravelOnlyBaseCamp` | `True` | Beschränkt Schnellreise auf Basiscamps |
| `bExistPlayerAfterLogout` | `True` | Spieler bleiben nach Logout in der Welt |
| `bEnableAimAssistPad` | `False` | Deaktiviert Controller-Zielhilfe |
| `DeathPenalty` | `All` | Lässt alle Items und Pals beim Tod fallen |
| `bCanPickupOtherGuildDeathPenaltyDrop` | `True` | Erlaubt das Plündern von Items anderer Spieler |
| `bInvisibleOtherGuildBaseCampAreaFX` | `False` | Zeigt Basiscamps anderer Gilden an |
| `bBuildAreaLimit` | `True` | Verhindert Bauen in eingeschränkten Bereichen |
| `GuildPlayerMaxNum` | `4` | Begrenzt die Gildengröße |
| `BaseCampMaxNumInGuild` | `2` | Begrenzt die Anzahl der Basen pro Gilde |
| `MaxBuildingLimitNum` | `1000` | Begrenzt Strukturen pro Spieler |
| `GuildRejoinCooldownMinutes` | `60` | Cooldown für Wiedereintritt in Gilde |
| `BlockRespawnTime` | `5.0` | Verzögerung für Respawn der Basis |
| `RespawnPenaltyDurationThreshold` | `1800.0` | Zeit bis Respawn-Strafe zurückgesetzt wird |
| `RespawnPenaltyTimeScale` | `2.0` | Multiplikator für Respawn-Strafe bei wiederholtem Tod |

### Beispiel PvP-Einstellungsblock

Wenn du die empfohlenen PvP-Werte verwenden möchtest, füge folgende Einträge in deinen `OptionSettings=(...)`-Abschnitt ein:

```ini
bAllowEnhanceStat_Health=False,
bAllowEnhanceStat_Attack=False,
bEnableFastTravel=True,
bEnableFastTravelOnlyBaseCamp=True,
bExistPlayerAfterLogout=True,
bEnableAimAssistPad=False,
DeathPenalty=All,
bCanPickupOtherGuildDeathPenaltyDrop=True,
bInvisibleOtherGuildBaseCampAreaFX=False,
bBuildAreaLimit=True,
GuildPlayerMaxNum=4,
BaseCampMaxNumInGuild=2,
MaxBuildingLimitNum=1000,
GuildRejoinCooldownMinutes=60,
BlockRespawnTime=5.0,
RespawnPenaltyDurationThreshold=1800.0,
RespawnPenaltyTimeScale=2.0
```

## Optionale PvP-Beschränkungen und Belohnungen

Je nachdem, wie kompetitiv dein PvP-Server sein soll, kannst du auch Technologiebeschränkungen und PvP-Belohnungen konfigurieren.

### Bewegungstechnologien einschränken

Du kannst bestimmte bewegungsbezogene Technologien mit `DenyTechnologyList` einschränken.

| Einstellung | Beispielwert |
|---|---|
| `DenyTechnologyList` | `SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5` |

Beispiel-Eintrag:

```ini
DenyTechnologyList="SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5"
```

:::note Syntax prüfen
Das Format der Palworld-Konfiguration kann je nach Serverversion und Struktur der vorhandenen `OptionSettings=(...)`-Zeile variieren. Stelle vor dem Speichern sicher, dass dein Eintrag zum bereits verwendeten Syntax-Stil passt.
:::

### PvP-Belohnungen konfigurieren

Palworld bietet auch PvP-bezogene Belohnungsoptionen für Spieler-Kills.

| Einstellung | Beschreibung |
|---|---|
| `bAdditionalDropItemWhenPlayerKillingInPvPMode` | Aktiviert zusätzliche Item-Drops bei PvP-Kills |
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Definiert die Item-ID für den Drop |
| `AdditionalDropItemNumWhenPlayerKillingInPvPMode` | Legt die Drop-Menge fest |
| `bDisplayPvPItemNumOnWorldMap_BaseCamp` | Zeigt PvP-Item-Anzahl auf der Weltkarte für Basen an |
| `bDisplayPvPItemNumOnWorldMap_Player` | Zeigt PvP-Item-Anzahl auf der Weltkarte für Spieler an |

Beispielkonfiguration:

```ini
bAdditionalDropItemWhenPlayerKillingInPvPMode=True,
AdditionalDropItemWhenPlayerKillingInPvPMode=PlayerDropItem,
AdditionalDropItemNumWhenPlayerKillingInPvPMode=1,
bDisplayPvPItemNumOnWorldMap_BaseCamp=True,
bDisplayPvPItemNumOnWorldMap_Player=True
```

:::caution Item-ID-Kompatibilität
Wenn du einen eigenen Wert für `AdditionalDropItemWhenPlayerKillingInPvPMode` verwendest, stelle sicher, dass die Item-ID für deine Palworld-Version gültig ist. Ungültige Item-IDs können dazu führen, dass die Einstellung fehlschlägt oder ignoriert wird.
:::

## Was sich durch PvP ändert

Nach der Aktivierung von PvP ändert sich das Gameplay auf deinem Server in mehreren wichtigen Punkten. Basierend auf den aktuell öffentlich verfügbaren Palworld PvP-Infos kannst du im Allgemeinen folgendes erwarten:

- Spieler können sich gegenseitig Schaden zufügen
- Das Betreten einer fremden Basis kann dazu führen, dass die Basis-Pals feindlich werden
- Fliegende Spieler und gerittene Pals nehmen möglicherweise mehr Schaden
- Beschworene Pals und Basis-Pals nehmen eventuell weniger Schaden
- Spieler können auf Truhen anderer Gilden zugreifen
- Nahkampfwaffen verursachen gegen fremde Strukturen möglicherweise weniger Schaden
- Basis-Pals verteidigen einen größeren Bereich
- Der erlaubte Abstand zwischen benachbarten Basen kann größer sein
- Spieler erhalten Benachrichtigungen, wenn ihre Basis angegriffen wird
- Bauen und Reparieren kann während eines Angriffs eingeschränkt sein
- Einige Waffen haben im PvP-Modus veränderte Reichweite oder Schadenswerte

:::danger Auswirkungen auf Gameplay
Die Aktivierung von PvP kann den Spielfortschritt, die Basissicherheit und die Spielerbindung auf deinem Server stark beeinflussen. Bei öffentlichen Servern empfiehlt es sich, die Spieler vor der Änderung zu informieren.
:::

## Datei speichern und Server neu starten

Nachdem du `PalWorldSettings.ini` bearbeitet hast, speichere die Datei im ZAP-Hosting `Configs` Bereich.

### Änderungen übernehmen

Um die neuen PvP-Einstellungen zu aktivieren:

1. Speichere die Änderungen in `PalWorldSettings.ini`.
2. Starte deinen Palworld Server über die ZAP-Hosting Gameserver-Verwaltung neu.

Ein Neustart ist erforderlich, damit die Konfigurationsänderungen wirksam werden.

:::info Kein zusätzlicher Befehl nötig
Nach der Bearbeitung von `PalWorldSettings.ini` ist normalerweise kein weiterer Ingame- oder Konsolenbefehl nötig. Ein kompletter Server-Neustart ist der notwendige Schritt, um die neue PvP-Konfiguration zu übernehmen.
:::

## Prüfe, ob PvP aktiv ist

Nach dem Neustart verbinde dich mit dem Server und teste das Verhalten im Spiel.

### Grundlegende Prüfungen

Du kannst die Einrichtung überprüfen, indem du sicherstellst, dass:

- Spieler sich gegenseitig Schaden zufügen können
- PvP-bezogenes Basisverhalten aktiv ist
- Todesstrafen und Loot-Regeln deinen Einstellungen entsprechen
- Optionale Einschränkungen wie `DenyTechnologyList` wie erwartet funktionieren

Wenn die Änderungen nicht greifen, öffne `PalWorldSettings.ini` erneut und prüfe auf:

- Falsch geschriebene Einstellungsnamen
- Doppelte Schlüssel
- Falsche Kommata oder Formatierung in `OptionSettings=(...)`
- Werte, die vor dem Neustart nicht korrekt gespeichert wurden

## Fazit

Glückwunsch, du hast PvP auf deinem Palworld Server erfolgreich aktiviert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂