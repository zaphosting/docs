---
id: palworld-set-a-password
title: "Palworld: Passwort festlegen"
description: "Lerne, wie du ein Passwort für deinen Palworld-Server manuell in der Palworld-Spielkonfiguration setzt und die Passwortänderung korrekt anwendest. -> Jetzt mehr erfahren"
sidebar_label: "Passwort festlegen"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld ermöglicht es dir, deinen Gameserver mit einem Passwort zu schützen, sodass nur autorisierte Spieler beitreten können. In dieser Anleitung lernst du, wie du das Serverpasswort manuell in der ZAP-Hosting Gameserver-Konfiguration setzt oder änderst und die Änderung korrekt anwendest.



## Vorbereitung

Bevor du startest, stelle sicher, dass:

- dein Palworld Gameserver im ZAP-Hosting Webinterface online ist
- du Zugriff auf die Gameserver-Verwaltung hast
- du das Passwort kennst, das du für den Serverzugang verwenden möchtest

:::info Manuelle Konfiguration erforderlich
Für Palworld kann das Passwort manuell über die Serverkonfigurationsdateien eingestellt werden. Im ZAP-Hosting Interface findest du diese Dateien in deiner Gameserver-Verwaltung unter `Configs`.
:::

## Öffne die Palworld-Konfigurationsdatei

Um ein Passwort für deinen Palworld-Server zu setzen, musst du die Datei `PalWorldSettings.ini` bearbeiten.

### Datei im ZAP-Hosting Interface finden

1. Melde dich im ZAP-Hosting Webinterface an.
2. Öffne deine **Palworld** Gameserver-Verwaltung.
3. Navigiere zu **Configs**.
4. Öffne die Datei `PalWorldSettings.ini`.

Diese Datei enthält die wichtigsten Palworld-Servereinstellungen, inklusive des Eintrags, der steuert, ob ein Passwort zum Beitreten erforderlich ist.

:::note Zweck der Konfigurationsdatei
Die Datei `PalWorldSettings.ini` speichert Serveroptionen in einer einzigen Konfigurationszeile, meist innerhalb des Abschnitts `OptionSettings=(...)`. Dort musst du den Wert `ServerPassword` bearbeiten.
:::

## Serverpasswort bearbeiten

Nachdem du `PalWorldSettings.ini` geöffnet hast, suche den Eintrag `ServerPassword`.

### Erforderlicher Konfigurationseintrag

Verwende folgenden Wert:

```ini
ServerPassword="[dein_passwort]"
```

Ersetze `[dein_passwort]` durch das Passwort, das Spieler beim Beitreten eingeben sollen.

Wenn das Passwort aktuell deaktiviert ist, sieht der Wert möglicherweise so aus:

```ini
ServerPassword=""
```

Ein leerer Wert bedeutet, dass kein Join-Passwort gesetzt ist.

### Beispielkonfiguration

In Palworld ist die Einstellung typischerweise Teil des Blocks `OptionSettings=(...)`. Sie könnte so aussehen:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="[dein_passwort]",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Format beibehalten
Ändere nur den Wert innerhalb von `ServerPassword="..."`. Entferne keine Kommas, Anführungszeichen, Klammern oder andere Einträge in der Zeile `OptionSettings=(...)`, da sonst der Server die Konfiguration nicht korrekt laden kann.
:::

## Konfigurationsübersicht

Die folgende Tabelle zeigt die relevante Einstellung für diese Passwortänderung:

| Einstellung | Beispielwert | Zweck |
| --- | --- | --- |
| `ServerPassword` | `ServerPassword="[dein_passwort]"` | Spieler müssen ein Passwort eingeben, bevor sie dem Server beitreten können |

### Passwort-Empfehlungen

Beachte beim Auswählen eines Passworts folgende Punkte:

| Empfehlung | Erklärung |
| --- | --- |
| Verwende ein einzigartiges Passwort | Vermeide es, ein Passwort von anderen Diensten wiederzuverwenden |
| Vermeide sehr einfache Wörter | Einfache Passwörter sind leichter zu erraten |
| Teile es nur mit vertrauenswürdigen Spielern | Jeder mit dem Passwort kann versuchen, beizutreten |
| Speichere es sicher | Ein Passwortmanager hilft dir, es sicher zu verwalten |

:::tip Starkes Passwort wählen
Wenn du einen privaten Palworld-Server für Freunde oder eine geschlossene Community betreibst, nutze ein starkes Passwort statt eines einfachen Wortes oder Servernamens. So reduzierst du unerwünschte Beitrittsversuche.
:::

## Änderungen speichern und Server neu starten

Nachdem du das Passwort bearbeitet hast, speichere die Datei im Bereich `Configs`.

### Neues Passwort anwenden

Um die Passwortänderung zu aktivieren:

1. Speichere die Änderungen in `PalWorldSettings.ini`.
2. Starte deinen Palworld Gameserver neu.

Ein Neustart ist nötig, weil Palworld die Servereinstellungen beim Start aus der Konfigurationsdatei liest. Ohne Neustart wird das neue Passwort möglicherweise nicht angewendet.

:::info Neustart erforderlich
Nach der Änderung von `ServerPassword` musst du den Server manuell über die ZAP-Hosting Gameserver-Verwaltung neu starten, damit die neue Einstellung geladen wird.
:::

## Passwort überprüfen

Nach dem Neustart teste die Konfiguration, indem du dich aus dem Palworld-Spiel mit dem Server verbindest.

### Was du prüfen solltest

Beim Verbinden solltest du sicherstellen, dass:

- der Server jetzt vor dem Beitritt nach einem Passwort fragt
- das konfigurierte Passwort korrekt funktioniert
- Spieler ohne Passwort keinen Zugang zum Server erhalten

Wenn der Server nicht nach einem Passwort fragt, öffne `PalWorldSettings.ini` erneut und prüfe, ob:

- `ServerPassword` im Abschnitt `OptionSettings=(...)` vorhanden ist
- der Wert nicht leer ist
- die Datei erfolgreich gespeichert wurde
- der Server nach der Änderung neu gestartet wurde

:::note Passwort ist sichtbar
Das Passwort wird im Klartext in der Konfigurationsdatei gespeichert. Achte darauf, den Zugriff auf deine Gameserver-Verwaltung nur vertrauenswürdigen Personen zu erlauben.
:::

## Fazit

Glückwunsch, du hast erfolgreich ein Passwort für deinen Palworld-Server gesetzt. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂