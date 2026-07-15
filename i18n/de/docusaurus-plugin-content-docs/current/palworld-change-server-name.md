---
id: palworld-change-server-name
title: "Palworld: Servername ändern"
description: "Lerne, wie du den Servernamen deines Palworld Gameservers änderst und den im Serverbrowser angezeigten Namen durch manuelles Bearbeiten der richtigen Konfigurationsdatei aktualisierst. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Servername ändern
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld verwendet eine Konfigurationsdatei, um den im Ingame-Serverbrowser angezeigten Servernamen festzulegen. In dieser Anleitung lernst du, wie du den angezeigten Servernamen manuell im ZAP-Hosting Webinterface änderst und die Änderung korrekt anwendest.



## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld Gameserver im ZAP-Hosting Webinterface hast und die Berechtigung besitzt, dessen Konfigurationsdateien zu bearbeiten.

:::info Manuelle Konfiguration erforderlich
Diese Änderung erfolgt durch manuelles Bearbeiten der Palworld Serverkonfiguration. Die relevante Datei findest du in der Serververwaltung unter `Configs`.
:::

## Öffne die Palworld Konfigurationsdatei

Um den Servernamen zu ändern, musst du die Datei `PalWorldSettings.ini` bearbeiten.

Im ZAP-Hosting Webinterface:

1. Öffne deinen **Palworld** Gameserver.
2. Gehe in der Serververwaltung auf **Configs**.
3. Öffne die Datei `PalWorldSettings.ini`.

:::note Speicherort der Konfigurationsdatei
Bei Palworld Dedicated Servern werden die relevanten Einstellungen meist in `PalWorldSettings.ini` gespeichert. Im ZAP-Hosting Interface solltest du diese Datei über den Bereich `Configs` bearbeiten und nicht manuell Pfade ändern.
:::

## Bearbeite den Servernamen

In der Datei `PalWorldSettings.ini` findest du den Abschnitt `OptionSettings`. Der Serverbrowser-Name wird über den Eintrag `ServerName` gesteuert.

Optional kannst du auch eine Serverbeschreibung mit `ServerDescription` festlegen.

### Beispielkonfiguration

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Deine Palworld Serverbeschreibung")
```

Wenn deine Datei bereits eine längere `OptionSettings=(...)`-Zeile enthält, musst du nur die Werte für `ServerName` und optional `ServerDescription` ändern.

### Werte, die du ändern musst

| Konfig-Schlüssel | Beschreibung | Beispielwert |
| --- | --- | --- |
| `ServerName` | Der im Palworld Serverbrowser angezeigte Name | `"zaphosting"` |
| `ServerDescription` | Optionale Beschreibung, die mit dem Server angezeigt wird | `"Öffentlicher Survival-Server"` |

:::caution Bestehende Einstellungen beibehalten
`OptionSettings` enthält oft viele weitere Servereinstellungen in einer einzigen Zeile. Ändere nur die Werte für `ServerName` und `ServerDescription`, sofern du nicht bewusst andere Optionen anpassen möchtest.
:::

## Speichere die Änderungen

Nach dem Bearbeiten der Werte:

1. Speichere die Datei `PalWorldSettings.ini` im Bereich **Configs**.
2. Prüfe, dass Anführungszeichen und Kommata korrekt formatiert bleiben.

### Beispiel einer bestehenden Zeile

Wenn deine Datei eine Zeile ähnlich dem folgenden Beispiel enthält, aktualisiere nur den relevanten Text:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="Öffentlicher Survival-Server",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

## Starte den Server neu

Nachdem du die Konfiguration gespeichert hast, musst du deinen Palworld Server neu starten, damit der neue Name geladen wird.

### Neue Konfiguration anwenden

Nutze die Neustart-Funktion in der Serververwaltung deines ZAP-Hosting Gameservers.

| Aktion | Erforderlich |
| --- | --- |
| `PalWorldSettings.ini` speichern | Ja |
| Server neu starten | Ja |
| Zusätzliche Konsolenbefehle ausführen | Nein |

:::tip Verzögerung bei der Serverbrowser-Aktualisierung
Nach dem Neustart wird der aktualisierte Servername nicht sofort bei allen Spielern im Serverbrowser angezeigt. Warte bei Bedarf ein paar Minuten und aktualisiere die Serverliste.
:::

## Überprüfe den neuen Servernamen

Sobald der Server neu gestartet ist:

1. Öffne Palworld.
2. Öffne den Multiplayer-Serverbrowser.
3. Suche nach dem Namen, den du in `ServerName` eingetragen hast.

Wenn der alte Name noch angezeigt wird, öffne `PalWorldSettings.ini` erneut und prüfe, ob:
- der Wert für `ServerName` korrekt geändert wurde
- die Datei erfolgreich gespeichert wurde
- der Server nach der Änderung vollständig neu gestartet wurde

## Fazit

Glückwunsch, du hast erfolgreich den Servernamen deines Palworld Gameservers geändert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 🙂