---
id: palworld-supply-drop-settings
title: "Palworld: Supply Drop Einstellungen"
description: "Lerne, wie du die Supply Drop Frequenz auf deinem Palworld Gameserver manuell änderst, indem du die SupplyDropSpan Einstellung anpasst. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Supply Drop Einstellungen
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld beinhaltet Supply Drops, die in regelmäßigen Abständen erscheinen und nützliche Ressourcen enthalten können. In dieser Anleitung lernst du, wie du die Supply Drop Frequenz auf deinem ZAP-Hosting Palworld Gameserver manuell änderst, indem du die richtige Konfigurationsdatei bearbeitest und die Änderungen korrekt anwendest.

## Preparation

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver über das ZAP-Hosting Webinterface hast und der Server aktuell in deiner Gameserver-Verwaltung verfügbar ist.

:::info Manuelle Konfiguration erforderlich
Diese Einrichtung erfolgt durch manuelles Bearbeiten der Palworld Serverkonfiguration. Du musst die Konfigurationsdatei über den Bereich **Configs** in deiner Gameserver-Verwaltung öffnen.
:::

## Locate the Configuration File

Um das Intervall der Supply Drops zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

In deiner ZAP-Hosting Gameserver-Verwaltung:

1. Öffne deinen Palworld Server.
2. Gehe zu **Configs**.
3. Öffne die Datei `PalWorldSettings.ini`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note Speicherort der Konfigurationsdatei
Bei ZAP-Hosting werden die relevanten Palworld Einstellungen für das Gameplay üblicherweise über die Datei `PalWorldSettings.ini` im Bereich **Configs** deiner Serververwaltung verwaltet. Falls dein Interface leicht abweicht, nutze die Liste der verfügbaren Konfigurationsdateien und suche gezielt nach `PalWorldSettings.ini`.
:::

## Edit the Supply Drop Setting

Die Einstellung für die Supply Drop Frequenz heißt `SupplyDropSpan`.

Dieser Wert definiert das Intervall zwischen Supply Drops in **Minuten**.

### Find the Correct Section

In der Datei `PalWorldSettings.ini` werden Palworld Servereinstellungen meist in der Zeile `OptionSettings` gespeichert. Du musst den bestehenden Einstellungsblock finden und prüfen, ob `SupplyDropSpan` bereits vorhanden ist.

Falls ja, ändere den Wert.

Falls nicht, füge ihn innerhalb des Abschnitts `OptionSettings=(...)` zusammen mit den anderen durch Kommas getrennten Einstellungen hinzu.

### Configuration Entry

Verwende folgendes Format:

```ini
SupplyDropSpan=[dein_wert]
```

Ersetze `[dein_wert]` durch die Anzahl der Minuten, die du verwenden möchtest.

### Example Values

| Einstellung | Bedeutung |
| --- | --- |
| `SupplyDropSpan=180` | Standardintervall von 3 Stunden |
| `SupplyDropSpan=60` | Supply Drops alle 1 Stunde |
| `SupplyDropSpan=360` | Supply Drops alle 6 Stunden |
| `SupplyDropSpan=30` | Sehr häufige Supply Drops |

So könnte die Einstellung innerhalb des kompletten `OptionSettings` Blocks aussehen:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt",SupplyDropSpan=60)
```

:::caution Syntax beibehalten
Entferne keine Kommas, Klammern oder andere bestehende Werte in der `OptionSettings` Zeile. Ein Formatierungsfehler in dieser Zeile kann verhindern, dass der Server die Konfiguration korrekt lädt.
:::

## Save and Apply the Changes

Nachdem du den Wert bearbeitet hast:

1. Speichere die Änderungen in `PalWorldSettings.ini`.
2. Starte deinen Palworld Server über die ZAP-Hosting Gameserver-Verwaltung neu.

Ein Neustart ist erforderlich, da Palworld diese Gameplay-Einstellung nicht live während des laufenden Servers übernimmt.

### Ist ein zusätzlicher Befehl nötig?

Für diese Änderung ist normalerweise kein weiterer Ingame- oder Konsolenbefehl notwendig. Der Neustart des Servers ist der erforderliche Schritt, um den aktualisierten `SupplyDropSpan` Wert zu laden.

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` bearbeiten | Ja |
| `SupplyDropSpan` hinzufügen oder ändern | Ja |
| Zusätzlichen Konsolenbefehl ausführen | Nein |
| Server nach dem Speichern neu starten | Ja |

## Verify the Setting

Nach dem Neustart des Servers sollte das neue Supply Drop Intervall aktiv sein.

Da diese Einstellung zeitgesteuerte Weltereignisse steuert, musst du eventuell auf den nächsten Spawn-Zyklus warten, um die Änderung im Spiel vollständig zu bestätigen. Wenn du ein kürzeres Intervall wie `60` oder `30` eingestellt hast, ist die Überprüfung einfacher.

:::tip Änderungen schneller testen
Wenn du bestätigen möchtest, dass die Einstellung funktioniert, ohne mehrere Stunden zu warten, setze `SupplyDropSpan` vorübergehend auf `30`. Nach dem Test kannst du den Wert wieder auf deinen bevorzugten Langzeitwert ändern.
:::

## Troubleshooting

### Einstellung wird nicht übernommen

Wenn sich die Supply Drop Frequenz nicht zu ändern scheint, prüfe Folgendes:

- Stelle sicher, dass `SupplyDropSpan` genau so geschrieben ist
- Bestätige, dass der Wert innerhalb des Abschnitts `OptionSettings=(...)` steht
- Überprüfe, ob keine Kommas fehlen oder Klammern beschädigt sind
- Starte den Server nach dem Speichern der Datei neu

### Server hat Konfigurationsfehler

Wenn der Server nach der Bearbeitung der Datei nicht startet, stelle die vorherige Konfiguration wieder her und überprüfe die Syntax sorgfältig.

:::danger Falsche INI-Formatierung
Palworld speichert viele Gameplay-Einstellungen in einer einzigen `OptionSettings` Zeile. Schon ein falsch gesetztes Zeichen kann die Konfiguration zerstören. Überprüfe deine Änderungen immer sorgfältig, bevor du speicherst.
:::

## Conclusion

Glückwunsch, du hast die Palworld Supply Drop Einstellungen erfolgreich geändert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂