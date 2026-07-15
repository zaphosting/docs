---
id: palworld-max-players
title: "Palworld: Max Spieler"
description: "Erfahre, wie du die maximale Spieleranzahl bei deinem Palworld Gameserver änderst, indem du die richtige Konfigurationsdatei im ZAP-Interface bearbeitest. -> Jetzt mehr erfahren"
sidebar_label: "Max Spieler"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld ermöglicht dir, die Anzahl der Spieler zu steuern, die gleichzeitig auf deinem Server spielen können. In dieser Anleitung lernst du, wie du die maximale Spieleranzahl manuell änderst, indem du die richtige Konfigurationsdatei in deiner ZAP-Hosting Gameserver-Verwaltung bearbeitest.



## Preparation

Bevor du startest, stelle sicher, dass du Zugriff auf die Palworld Gameserver-Verwaltung im ZAP-Hosting Webinterface hast.

:::info Zugriff auf die Konfigurationsdatei
Du musst die Serverkonfiguration manuell über den Bereich **Configs** in deiner Gameserver-Verwaltung bearbeiten. Falls du noch nicht weißt, wie du deinen Gameserver öffnest, öffne ihn zuerst im ZAP-Hosting Webinterface.
:::

## Finde die Palworld Konfigurationsdatei

Um die maximale Spieleranzahl zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

In deiner ZAP-Hosting Gameserver-Verwaltung:

1. Öffne deinen **Palworld** Server
2. Gehe zu **Configs**
3. Öffne die Datei mit dem Namen `PalWorldSettings.ini`

Diese Datei enthält die wichtigsten Gameplay- und Servereinstellungen, inklusive der maximal erlaubten Spieleranzahl.

:::note Richtige Datei
Für diese Änderung solltest du nur `PalWorldSettings.ini` bearbeiten. Falls dein Server weitere Dateien enthält, ändere keine anderen Werte, außer du weißt genau, was sie bewirken.
:::

## Ändere die maximale Spieleranzahl

In der Datei `PalWorldSettings.ini` suche den Abschnitt `OptionSettings` und finde den Eintrag `ServerPlayerMaxNum`.

Die relevante Einstellung ist:

| Konfig-Schlüssel | Beschreibung | Standardwert |
| --- | --- | --- |
| `ServerPlayerMaxNum` | Legt die maximale Anzahl an Spielern fest, die dem Server beitreten können | `32` |

Ein typischer Eintrag sieht so aus:

```ini
ServerPlayerMaxNum=32
```

Ändere den Wert auf dein gewünschtes Spielerlimit. Zum Beispiel für 16 Spieler:

```ini
ServerPlayerMaxNum=16
```

Oder um die Standard-Einstellung mit 32 Spielern beizubehalten:

```ini
ServerPlayerMaxNum=32
```

:::caution Unterstützte Werte verwenden
Palworld Dedicated Server verwenden üblicherweise `32` als Standard-Maximalwert. Ein deutlich höherer Wert kann je nach Tarif und aktueller Spielversion die Serverstabilität oder Performance beeinträchtigen. Wenn du unsicher bist, starte mit einem niedrigeren Wert und teste deinen Server zuerst.
:::

## Beispielkonfiguration

Je nach Formatierung deiner Datei kann die Einstellung innerhalb einer längeren `OptionSettings`-Zeile stehen. In diesem Fall musst du nur den Wert von `ServerPlayerMaxNum` ändern.

Beispiel:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=16,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

Wenn deine Datei dieses Format nutzt, entferne keine Kommas, Klammern oder Anführungszeichen bei anderen Einträgen. Ersetze nur die Zahl hinter `ServerPlayerMaxNum=`.

## Speichere und übernehme die Änderungen

Nachdem du den Wert geändert hast:

1. Speichere die Datei `PalWorldSettings.ini`
2. Starte deinen Palworld Server neu

Ein Neustart ist erforderlich, damit die neue maximale Spieleranzahl übernommen wird.

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Zusätzliche Konsolenbefehle ausführen | Kein bestätigter zusätzlicher Befehl erforderlich |
| Server neu starten | Ja |

:::tip Neustart erforderlich
Änderungen an `ServerPlayerMaxNum` werden nicht sofort angewendet, solange der Server läuft. Du musst den Server neu starten, damit Palworld die aktualisierten Einstellungen lädt.
:::

## Überprüfe das neue Spielerlimit

Nach dem Neustart sollte dein Server die neue maximale Spieleranzahl verwenden.

Du kannst das überprüfen durch:

- Kontrolle der Serverdetails in deiner Gameserver-Verwaltung, falls dort angezeigt
- Mehrere Spieler, die dem Server beitreten
- Erneutes Prüfen der aktuellen Konfiguration in `PalWorldSettings.ini`

Falls die Einstellung nicht übernommen wurde, öffne die Datei erneut und prüfe, ob:

- `ServerPlayerMaxNum=[dein_wert]` vorhanden ist
- die Dateiformatierung nicht beschädigt wurde
- der Server nach dem Speichern vollständig neu gestartet wurde

:::caution Syntax der Konfiguration
Wenn du versehentlich ein Komma, eine Klammer oder einen anderen Wert aus der `OptionSettings`-Zeile entfernst, kann der Server die Einstellung ignorieren oder die Konfiguration nicht korrekt laden. Bearbeite die Datei sorgfältig und ändere nur den erforderlichen Wert.
:::

## Conclusion

Glückwunsch, du hast die maximale Spieleranzahl auf deinem Palworld Server erfolgreich geändert. Für weitere Fragen oder Hilfe steht dir unser Support-Team täglich zur Verfügung! 🙂