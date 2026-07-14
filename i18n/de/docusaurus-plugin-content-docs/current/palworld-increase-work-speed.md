---
id: palworld-increase-work-speed
title: "Palworld: Arbeitstempo erhöhen"
description: "Lerne, wie du das Arbeitstempo in Palworld erhöhst, indem du die Einstellung WorkSpeedRate anpasst, um schnellere Arbeit von Spielern und Pals auf deinem Server zu ermöglichen. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Arbeitstempo erhöhen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In Palworld kannst du einstellen, wie schnell Spieler und Pals Basisarbeiten erledigen, indem du einen Server-Konfigurationswert änderst. In dieser Anleitung lernst du, wie du das Arbeitstempo auf deinem ZAP-Hosting Palworld Gameserver erhöhst, indem du die richtige Konfigurationsdatei bearbeitest und die Änderungen korrekt anwendest.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf die Palworld Gameserver-Verwaltung im ZAP-Hosting Webinterface hast.

:::info Manuelle Konfiguration erforderlich
Diese Einrichtung erfolgt manuell über den Konfigurationseditor. Du musst die Palworld Server-Konfigurationsdatei selbst unter dem Bereich `Configs` in deiner Gameserver-Verwaltung bearbeiten.
:::

## Öffne die Palworld Konfigurationsdatei

Um das Arbeitstempo zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

### Wo du die Datei findest

1. Melde dich auf der ZAP-Hosting Webseite an.
2. Öffne die Verwaltung deines **Palworld** Gameservers.
3. Navigiere zu **Configs**.
4. Öffne die Datei mit dem Namen `PalWorldSettings.ini`.

Diese Datei enthält die Gameplay-Einstellungen, die Raten und Multiplikatoren für deinen Palworld Server steuern.

:::note Speicherort der Konfigurationsdatei
Bei ZAP-Hosting findest du die relevante Datei für diese Änderung direkt in deiner Gameserver-Verwaltung unter `Configs`. Falls dein Server mehrere Konfigurationsdateien anzeigt, stelle sicher, dass du `PalWorldSettings.ini` bearbeitest.
:::

## Ändere die Einstellung für das Arbeitstempo

Die Einstellung, mit der du das Arbeitstempo erhöhst, heißt `WorkSpeedRate`.

### Was die Einstellung bewirkt

`WorkSpeedRate` steuert, wie schnell Spieler und Pals arbeitsbezogene Aufgaben an deiner Basis erledigen. Der Standardwert ist normalerweise `1.0`, was normale Geschwindigkeit bedeutet.

Höhere Werte erhöhen den Geschwindigkeitsmultiplikator:

| Konfig-Schlüssel | Standardwert | Beispielwert | Wirkung |
| --- | --- | --- | --- |
| `WorkSpeedRate` | `1.0` | `2.0` | Doppelte Arbeitstempo |
| `WorkSpeedRate` | `1.0` | `10.0` | Sehr schnelles Arbeitstempo |

### Wert bearbeiten

Suche in der Datei `PalWorldSettings.ini` nach der Zeile mit `OptionSettings`. Der Eintrag `WorkSpeedRate` befindet sich in diesem Einstellungsblock.

Wenn der Eintrag bereits vorhanden ist, ändere seinen Wert. Zum Beispiel:

```ini
WorkSpeedRate=1.000000
```

Ändere ihn auf einen höheren Wert wie:

```ini
WorkSpeedRate=2.000000
```

Für ein deutlich schnelleres Ergebnis kannst du auch einen höheren Multiplikator verwenden, z.B.:

```ini
WorkSpeedRate=10.000000
```

### Beispiel-Konfigurationsausschnitt

Je nach Inhalt deiner Datei kann die Einstellung als Teil einer längeren `OptionSettings`-Zeile erscheinen, ähnlich wie hier:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=2.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Bestehende Syntax vorsichtig bearbeiten
`PalWorldSettings.ini` verwendet ein striktes Format. Ändere nur den Wert von `WorkSpeedRate` und entferne keine Kommas, Klammern oder Anführungszeichen in der umgebenden `OptionSettings`-Zeile.
:::

## Speichern und Server neu starten

Nach der Bearbeitung musst du die Änderungen speichern und deinen Palworld Server neu starten.

### Änderungen anwenden

1. Speichere die aktualisierte Datei `PalWorldSettings.ini`.
2. Starte deinen Palworld Gameserver über die ZAP-Hosting Serververwaltung neu.

Ein Neustart ist notwendig, da Palworld diese Gameplay-Einstellungen nur beim Serverstart einliest. Der neue Arbeitstempo-Wert wird erst nach dem Neustart korrekt angewendet.

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Server neu starten | Ja |
| Zusätzlicher Konsolenbefehl | Nein |

:::tip Empfohlenes Testen
Starte mit einem moderaten Wert wie `2.0` und teste das Ergebnis im Spiel. Extrem hohe Werte können den Spielfortschritt deutlich beschleunigen und das Gameplay aus dem Gleichgewicht bringen.
:::

## Neues Arbeitstempo überprüfen

Sobald der Server wieder online ist, verbinde dich mit deinem Palworld Server und teste arbeitsbezogene Aktivitäten an deiner Basis.

Du solltest bemerken, dass Spieler und Pals Aufgaben schneller erledigen als zuvor. Falls keine Änderung sichtbar ist, öffne `PalWorldSettings.ini` erneut und überprüfe:

- `WorkSpeedRate` ist vorhanden
- der Wert ist korrekt gesetzt
- die Datei wurde erfolgreich gespeichert
- der Server wurde nach der Änderung vollständig neu gestartet

:::note Gameplay-Balance
Das Erhöhen des Arbeitstempos kann die Entwicklung deiner Basis stark beschleunigen. Für ein ausgewogenes Spielerlebnis solltest du den Wert schrittweise erhöhen, statt sofort eine extrem hohe Geschwindigkeit einzustellen.
:::

## Fazit

Glückwunsch, du hast das Arbeitstempo auf deinem Palworld Server erfolgreich erhöht. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂