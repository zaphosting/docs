---
id: palworld-max-workers
title: "Palworld: Max Workers"
description: "Erfahre, wie du die maximale Anzahl an Arbeitern in Palworld änderst, indem du BaseCampWorkerMaxNum anpasst, inklusive der Standard- und sicheren Vanilla-Grenzen für Arbeiter pro Basis. -> Jetzt mehr erfahren"
sidebar_label: "Max Workers"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld ermöglicht dir, die maximale Anzahl an arbeitenden Pals pro Basislager auf deinem Server zu ändern. In dieser Anleitung lernst du, wie du die richtige Konfigurationsdatei im ZAP-Hosting Webinterface bearbeitest, den Wert `BaseCampWorkerMaxNum` anpasst und die Änderung korrekt anwendest.



## Preparation

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver über das ZAP-Hosting Gameserver-Administrationspanel hast.

:::info Zugriff auf Konfiguration erforderlich
Du benötigst Zugriff auf die Webadministration deines Servers, um den Bereich **Configs** zu öffnen und die Palworld-Konfigurationsdateien manuell zu bearbeiten.
:::

## Understanding the Max Workers Setting

Die Palworld-Einstellung, die für die maximale Anzahl an Arbeitern zuständig ist, heißt `BaseCampWorkerMaxNum`. Diese Option steuert, wie viele Pals an jedem einzelnen Basislager arbeiten können.

| Einstellung | Konfigurationsdatei | Zweck | Standardwert | Vanilla Maximum |
| --- | --- | --- | --- | --- |
| `BaseCampWorkerMaxNum` | `PalWorldSettings.ini` | Legt die maximale Anzahl an arbeitenden Pals pro Basislager fest | `15` | `50` |

:::note Vanilla-Grenze
Die aktuelle öffentliche Dokumentation zeigt, dass das normale Ingame-Maximum bei `50` liegt. Werte über `50` erfordern meist Modding und sind nicht Teil der Standard-Vanilla-Serverkonfiguration.
:::

:::caution Performance-Auswirkung
Eine Erhöhung der Arbeiterzahl kann CPU- und RAM-Auslastung erhöhen, da mehr Pals an deinen Basen aktiv sind. Verwende hohe Werte nur, wenn du die Serverleistung nach der Änderung im Blick behältst.
:::

## Open the Palworld Configuration File

Um die maximale Arbeiterzahl zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

### Datei im ZAP-Hosting Interface finden

Öffne die Palworld Gameserver-Verwaltung und navigiere zu:

- `Configs`
- `PalWorldSettings.ini`

Dies ist die Konfigurationsdatei, in der die Gameplay-Einstellungen für deinen Palworld Server gespeichert sind.



## Edit the BaseCampWorkerMaxNum Value

Nachdem du `PalWorldSettings.ini` geöffnet hast, suche die Zeile mit `OptionSettings`. Palworld Servereinstellungen sind normalerweise als kommaseparierte Key-Value-Paare in diesem Abschnitt gespeichert.

### Konfigurationseintrag ändern

Finde den folgenden Schlüssel:

```ini
BaseCampWorkerMaxNum=15
```

Ändere den Wert auf deine gewünschte Anzahl. Zum Beispiel, um `20` arbeitende Pals pro Basis zu erlauben, verwende:

```ini
BaseCampWorkerMaxNum=20
```

### Beispielkonfiguration

Je nach deiner aktuellen Datei erscheint die Einstellung meist innerhalb eines längeren `OptionSettings`-Eintrags, ähnlich diesem:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=20,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,bHardcore=False,bPalLost=False,bRawData=False)
```

:::tip Nur den benötigten Wert ändern
Ändere nur `BaseCampWorkerMaxNum`, sofern du nicht absichtlich andere Gameplay-Einstellungen anpassen möchtest. So vermeidest du versehentliche Fehler in der Konfiguration.
:::

## Recommended Values

Du kannst jeden Wert wählen, der zu deinem Spielstil passt, solange er innerhalb der unterstützten Vanilla-Grenzen bleibt.

| Wert | Ergebnis | Empfehlung |
| --- | --- | --- |
| `15` | Standard Palworld Arbeiterlimit | Ideal für normales Gameplay |
| `20` bis `30` | Erhöhte Basisautomatisierung | Guter Kompromiss für die meisten privaten Server |
| `40` bis `50` | Sehr hohe Arbeiterzahl | Nur verwenden, wenn dein Server genug Ressourcen hat |
| Über `50` | Kein Standard-Vanilla-Verhalten | Meist Modding erforderlich, ohne Tests nicht empfohlen |

## Save and Apply the Changes

Nach der Bearbeitung speichere die Datei `PalWorldSettings.ini` im ZAP-Hosting Konfigurationseditor.

### Server neu starten

Nachdem die Datei gespeichert wurde, starte deinen Palworld Server neu, damit die neue maximale Arbeiterzahl geladen wird.

:::info Neustart erforderlich
Änderungen an `PalWorldSettings.ini` werden nicht sofort angewendet, solange der Server läuft. Du musst den Server nach dem Speichern neu starten.
:::

## Verify the New Worker Limit

Nach dem Neustart verbinde dich mit deinem Palworld Server und überprüfe eines deiner Basislager. Du solltest nun bis zur neuen von dir eingestellten Grenze Arbeiter-Pals zuweisen können.

Falls die Änderung nicht wirkt, prüfe Folgendes:

| Prüfung | Was zu überprüfen ist |
| --- | --- |
| Richtige Datei | Du hast `PalWorldSettings.ini` bearbeitet |
| Richtiger Schlüssel | `BaseCampWorkerMaxNum` ist vorhanden und korrekt geschrieben |
| Gültige Syntax | Die umgebende `OptionSettings`-Zeile wurde nicht beschädigt |
| Neustart durchgeführt | Der Server wurde nach dem Speichern vollständig neu gestartet |
| Wertebereich | Der Wert liegt innerhalb des normalen Vanilla-Limits von `50` |

:::caution Konfigurationssyntax
Palworld-Konfigurationseinträge sind formatierungssensitiv. Wenn du versehentlich Kommata, Klammern oder andere Teile der `OptionSettings`-Zeile entfernst, kann der Server die Einstellung ignorieren oder nicht korrekt laden.
:::

## Conclusion

Glückwunsch, du hast erfolgreich die maximale Anzahl an Arbeitern pro Basislager auf deinem Palworld Server geändert. Für weitere Fragen oder Hilfe steht dir unser Support-Team täglich zur Verfügung! 🙂