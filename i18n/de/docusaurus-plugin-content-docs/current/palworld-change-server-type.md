---
id: palworld-change-server-type
title: "Palworld: Servertyp ändern"
description: "Lerne, wie du deinen Palworld-Gameserver zwischen Linux und Windows wechselst, den richtigen Config-Pfad aktualisierst und die Änderung korrekt anwendest, damit Mods funktionieren. -> Jetzt mehr erfahren"
sidebar_label: Palworld: Servertyp ändern
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Palworld-Gameserver können mit verschiedenen Servertypen laufen, meist Linux oder Windows, je nach deinem Hosting-Setup und Modding-Anforderungen. In dieser Anleitung lernst du, wie du den Servertyp im ZAP-Hosting Interface änderst, den korrekten Konfigurationspfad findest und die Änderung richtig anwendest.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vorbereitung

Bevor du startest, stelle sicher, dass du Zugriff auf deinen Palworld-Gameserver im ZAP-Hosting Webinterface hast und die Berechtigung, den Server zu stoppen und neu zu starten.

:::info Wichtige Infos zu Servertyp-Änderungen
Das Ändern des Servertyps von Linux zu Windows oder umgekehrt kann Dateipfade, Mod-Kompatibilität und bestehende Konfigurationsorte beeinflussen. Der Windows-Servertyp wird oft für bestimmte UE4SS-basierte Mod-Setups benötigt.
:::

:::caution Prüfe, ob eine Neuinstallation nötig ist
Je nach Deployment deines Palworld-Produkts kann das Ändern des Servertyps eine Neuinstallation oder ein erneutes Deployment der Software erfordern. Falls die Option in deinem Interface nicht direkt verfügbar ist, kontaktiere bitte den Support, bevor du fortfährst.
:::

## Verstehen, was sich beim Wechsel des Servertyps ändert

Das Ändern des Servertyps bedeutet normalerweise nicht, dass du einen Wert in der Palworld-Gameplay-Konfiguration selbst änderst. Hauptsächlich ändert sich die zugrundeliegende Server-Softwareumgebung, was auch den Speicherort der aktiven Konfigurationsdateien beeinflusst.

Für Palworld ist die Hauptkonfigurationsdatei typischerweise:

- `PalWorldSettings.ini`

Der Ordner, der diese Datei enthält, hängt vom gewählten Servertyp ab.

| Servertyp | Config-Ordnerpfad | Haupt-Konfigurationsdatei |
| --- | --- | --- |
| Linux | `Pal/Saved/Config/LinuxServer/` | `PalWorldSettings.ini` |
| Windows | `Pal/Saved/Config/WindowsServer/` | `PalWorldSettings.ini` |

:::note Warum das wichtig ist
Wenn du die Linux-Konfigurationsdatei bearbeitest, dein Server aber aktuell als Windows-Server läuft, werden deine Änderungen möglicherweise nicht angewendet, da der Server den Windows-spezifischen Pfad liest.
:::

## Server stoppen

Bevor du den Servertyp änderst, solltest du den Server stoppen, um Dateikonflikte und unvollständige Änderungen zu vermeiden.

1. Melde dich im ZAP-Hosting Gameserver-Webinterface an.
2. Öffne die Verwaltung deines Palworld-Gameservers.
3. Stoppe den Server über die Serversteuerung.

:::tip Backup vor Änderungen empfohlen
Es ist ratsam, vor dem Ändern des Servertyps ein Backup zu erstellen, besonders wenn du bereits Mods nutzt oder Konfigurationsdateien manuell bearbeitet hast.
:::

## Servertyp im ZAP-Hosting Interface ändern

Die Änderung des Servertyps erfolgt in der Regel über die Produkt- oder Softwareeinstellungen im ZAP-Hosting Interface, nicht durch das Bearbeiten einer Zeile in `PalWorldSettings.ini`.

1. Gehe in der Palworld-Serververwaltung zum Bereich für Server-Software oder Spieleinstellungen.
2. Suche die Option, die den installierten Servertyp oder die Softwarevariante steuert.
3. Ändere die Einstellung von `Linux` auf `Windows` oder umgekehrt, je nach gewünschtem Setup.
4. Speichere die Änderung.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info Servertyp-Option nicht gefunden?
Die genaue Bezeichnung und Position dieser Einstellung kann je nach ZAP-Hosting Interface oder Produktgeneration variieren. Wenn kein Servertyp-Auswahlfeld sichtbar ist, kann die Änderung eine Neuinstallation oder Support-Hilfe erfordern.
:::

## Die richtige Konfigurationsdatei bearbeiten

Nach dem Ändern des Servertyps musst du sicherstellen, dass du die aktive Konfigurationsdatei im korrekten Ordner bearbeitest.

### Öffne den Configs-Bereich

Im ZAP-Hosting Gameserver-Interface:

1. Öffne deinen Palworld-Server.
2. Gehe zu `Configs`.
3. Navigiere in den Ordner, der deinem gewählten Servertyp entspricht.

Verwende einen der folgenden Pfade:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

Öffne dann:

- `PalWorldSettings.ini`

### Einstellungen prüfen oder erneut anwenden

Wenn du zuvor Einstellungen im anderen Servertyp bearbeitet hast, existieren diese Änderungen möglicherweise nur im alten Ordner. Vergleiche beide Versionen von `PalWorldSettings.ini` und übertrage nötige Werte in die jetzt aktive Datei.

| Was prüfen | Warum es wichtig ist |
| --- | --- |
| Bestehende individuelle Einstellungen | Diese könnten nur im vorherigen Servertyp-Ordner vorhanden sein |
| Mod-bezogene Einstellungen | Windows-Servertyp wird oft für UE4SS-Mod-Support genutzt |
| Gameplay-Werte | Der Server liest nur die Datei aus dem aktiven OS-spezifischen Pfad |

:::caution Nicht davon ausgehen, dass beide Dateien synchron sind
Die Linux- und Windows-Konfigurationsordner sind getrennt. Das Ändern des Servertyps kopiert deine individuellen Einstellungen nicht automatisch zwischen beiden.
:::

## Konfigurationseinträge prüfen

Der Servertyp wird normalerweise nicht durch eine Zeile in `PalWorldSettings.ini` gesteuert. Nach dem Wechsel solltest du aber sicherstellen, dass deine aktive Konfigurationsdatei die erwarteten Einstellungen enthält.

Eine typische `PalWorldSettings.ini` sieht ungefähr so aus:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,EnablePlayerToPlayerDamage=False,EnableFriendlyFire=False,EnableInvaderEnemy=True,ActiveUNKO=False,EnableAimAssistPad=True,EnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,AutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,IsMultiplay=True,IsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,EnableNonLoginPenalty=True,EnableFastTravel=True,IsStartLocationSelectByMap=True,ExistPlayerAfterLogout=False,EnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="[your_server_name]",ServerDescription="",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

Ersetze Platzhalter wie:

- `[your_server_name]` mit deinem tatsächlichen Servernamen
- `[your_admin_password]` mit deinem Admin-Passwort
- `[your_server_password]` mit deinem Join-Passwort, falls verwendet
- `[your_server_ip]` mit deiner öffentlichen Server-IP, falls dein Setup das erfordert

:::note Kein spezieller Eintrag für den Servertyp nötig
Es ist kein bekannter Eintrag in `PalWorldSettings.ini` vorhanden, der den Servertyp von Linux auf Windows oder umgekehrt umschaltet. Diese Änderung wird durch die installierte Serverumgebung im Hosting-Interface gesteuert.
:::

## Änderung anwenden

Nachdem du den Servertyp geändert und die richtige Konfigurationsdatei bestätigt hast, musst du das neue Setup anwenden.

### Server neu starten

Starte den Server im ZAP-Hosting Webinterface nach dem Speichern deiner Änderungen neu.

In vielen Fällen reicht ein normaler Neustart, wenn der Server-Softwaretyp bereits erfolgreich gewechselt wurde.

### Neuinstallation, falls vom Interface verlangt

Manche Deployments erfordern nach dem Wechsel des Softwaretyps eine Neuinstallation. Wenn dein Interface diese Option anbietet, folge den Anweisungen sorgfältig und überprüfe danach, dass:

- der korrekte Servertyp aktiv ist
- der richtige Config-Pfad verwendet wird
- deine `PalWorldSettings.ini`-Werte noch vorhanden sind

:::danger Neuinstallation kann Dateien überschreiben
Falls eine Neuinstallation nötig ist, können individuelle Dateien oder Mods gelöscht werden, wenn sie nicht vorher gesichert wurden. Prüfe immer deine Save-Daten, Mods und Konfigurationsdateien, bevor du eine Neuinstallation bestätigst.
:::

## Prüfen, ob der neue Servertyp aktiv ist

Nachdem der Server neu gestartet ist, bestätige, dass die Änderung erfolgreich war.

### Über den Config-Pfad prüfen

Öffne erneut `Configs` und kontrolliere, ob der aktive Pfad jetzt deinem gewählten Servertyp entspricht:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

### Mod-Kompatibilität prüfen

Wenn du speziell wegen UE4SS-Modding auf Windows gewechselt bist, überprüfe, ob deine Mod-Dateien und das Setup jetzt zur Windows-Serverumgebung passen.

### Serververhalten überprüfen

Schau, ob der Server normal startet und deine erwarteten Einstellungen korrekt geladen werden.

| Prüfpunkte | Erwartetes Ergebnis |
| --- | --- |
| Server startet erfolgreich | Kein Startfehler nach Typwechsel |
| Richtiger Config-Pfad | Entspricht Linux- oder Windows-Servertyp |
| Individuelle Einstellungen geladen | Server nutzt deine bearbeitete `PalWorldSettings.ini` |
| Mod-Support | Windows-basierte Mod-Anforderungen sind nutzbar, falls relevant |

## Fehlerbehebung

### Servertyp-Option nicht sichtbar

Wenn du keine Einstellung zum Ändern des Servertyps findest, ist diese Option möglicherweise in deinem aktuellen Produktinterface nicht direkt verfügbar. Kontaktiere in dem Fall den ZAP-Hosting Support und frage, ob dein Palworld-Service zwischen Linux- und Windows-Servertyp gewechselt werden kann.

### Meine Einstellungen wurden nach dem Wechsel nicht übernommen

Das passiert meist, wenn der falsche Konfigurationspfad bearbeitet wurde. Prüfe, ob du

- `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`

oder

- `Pal/Saved/Config/WindowsServer/PalWorldSettings.ini`

je nach aktivem Servertyp aktualisiert hast.

### Mods funktionieren trotzdem nicht

Der Wechsel zum Windows-Servertyp allein reicht manchmal nicht für das komplette Mod-Setup. Manche Mods benötigen zusätzliche Dateien, Loader oder manuelle Installationsschritte über den Servertyp-Wechsel hinaus.

## Fazit

Glückwunsch, du hast deinen Palworld-Gameserver erfolgreich auf einen anderen Servertyp umgestellt. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne! 🙂