---
id: ark-configuration
title: "ARK: Server-Konfiguration"
description: "Entdecke, wie du deine ARK Gameserver-Einstellungen für besseres Gameplay und mehr Anpassung optimierst → Jetzt mehr erfahren"
sidebar_label: Server-Konfiguration
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Server-Konfiguration

Die Konfiguration eines **ARK Gameservers** kann bei manchen Leuten für Verwirrung und Hilflosigkeit sorgen. Aber das hat auch seinen Grund. ARK bietet eine Menge Konfigurationsmöglichkeiten fürs Spiel. Außerdem erfolgt die Konfiguration in verschiedenen Dateien, bei denen du auch darauf achten musst, welche Befehle in welche Datei gehören. In dieser Anleitung wollen wir dir einen besseren Überblick geben, wie die Konfiguration eines ARK Gameservers funktioniert.

![](https://screensaver01.zap-hosting.com/index.php/s/oQ5BbazkfD3PjgK/preview)

<InlineVoucher />

## Unterschiede zwischen den Konfigurationsdateien

Die Konfiguration des **ARK Gameservers** erfolgt über die Konfigurationsdateien **GameUserSettings.ini** und **Game.ini**. Du kannst sie entweder über unser **Webinterface** unter **Configs** oder via **FTP** anpassen.

| Konfigurationsdatei  | Webinterface                                                  | FTP                                     |
| -------------------- | ------------------------------------------------------------- | --------------------------------------- |
| GameUserSettings.ini | `Gameserver Administration -> Configs -> GameUserSettings.ini` | `ShooterGame/Saved/Config/LinuxServer/` |
| Game.ini             | `Gameserver Administration -> Configs -> Game.ini`            | `ShooterGame/Saved/Config/LinuxServer/` |

Die Konfigurationsdatei **GameUserSettings.ini** enthält Optionen sowohl für den Game-Client als auch für den Server. Optionen für den Game-Client werden vom Server nicht genutzt. Server-Optionen sind im Abschnitt **[ServerSettings]** definiert, der meist am Ende der Datei steht. Für erweiterte Anpassungen, wie das Ändern von Engrammpunkten oder XP pro Level, das Deaktivieren bestimmter Inhalte oder das Anpassen von Spielerpräferenzen, wird die **Game.ini** verwendet.

## Konfiguration

Im Folgenden erklären wir dir die beiden Konfigurationsdateien. Wir zeigen dir die gängigsten Befehle und wie sie funktionieren.

## Konfiguration: Map

ARK bietet verschiedene Maps, die auf dem Server gespielt werden können. Du kannst im Webinterface unter Einstellungen auswählen, welche Map du spielen möchtest.

| Maps           | Veröffentlichungsdatum | Befehlsname       |
| -------------- | --------------------- | ----------------- |
| The Island     | 02.06.2015            | `TheIsland`       |
| The Center     | 17.05.2016            | `TheCenter`       |
| Scorched Earth | 01.09.2016            | `ScorchedEarth_P` |
| Ragnarok       | 12.06.2017            | `Ragnarok`        |
| Aberration     | 12.12.2017            | `Aberration_P`    |
| Extinction     | 06.11.2018            | `Extinction`      |
| Valguero       | 18.06.2019            | `Valguero_P`      |
| Genesis        | 25.02.2020            | `Genesis`         |
| Crystal Isles  | 11.06.2020            | `CrystalIsles`    |

Gib einfach den Befehlsnamen der Map im Feld **Map** ein, und sie wird beim nächsten Serverstart geladen.

![](https://screensaver01.zap-hosting.com/index.php/s/93JNW5Hbpf35RTJ/preview)

## Konfiguration: GameUserSettings.ini

### [ServerSettings]

**allowThirdPersonPlayer**

Dieser Befehl legt fest, ob die 3rd-Person-Perspektive aktiviert sein soll oder nicht.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**AllowCaveBuildingPvE**

Legt fest, ob das Bauen von Strukturen in Höhlen erlaubt ist (wenn PVE-Modus aktiv ist).

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**alwaysNotifyPlayerJoined**

Legt fest, ob Spieler eine Benachrichtigung erhalten, wenn ein Spieler dem Server beitritt.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**alwaysNotifyPlayerLeft**

Legt fest, ob Spieler eine Benachrichtigung erhalten, wenn ein Spieler den Server verlässt.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**bAllowFlyerCarryPvE**

Legt fest, ob Spieler Dinosaurier mit einem fliegenden Dinosaurier aufnehmen dürfen.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**bDisableStructureDecayPvE**

Deaktiviert den progressiven Verfall von Spielergebäuden.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**DayCycleSpeedScale**

Legt den Skalierungsfaktor für den Zeitablauf in ARK fest und steuert, wie oft Tag zu Nacht und Nacht zu Tag wird. Der Standardwert 1 entspricht der gleichen Zyklusgeschwindigkeit wie im Singleplayer (und auf offiziellen Servern). Werte unter 1 verlangsamen den Zyklus, höhere Werte beschleunigen ihn. 1 Minute Echtzeit entspricht etwa 28 Minuten Spielzeit. Für einen ungefähr 24-Stunden-Tag/Nacht-Zyklus im Spiel sollte der Wert 0,035 verwendet werden.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**DayTimeSpeedScale**

Legt den Skalierungsfaktor für den Zeitablauf während des Tages fest. Bestimmt die Länge des Tages relativ zur Nacht (definiert durch NightTimeSpeedScale). Ein niedrigerer Wert verlängert den Tag.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**NightTimeSpeedScale**

Legt den Skalierungsfaktor für den Zeitablauf während der Nacht fest. Bestimmt die Länge der Nacht relativ zum Tag (definiert durch DayTimeSpeedScale). Ein niedrigerer Wert verlängert die Nacht.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**DinoCharacterFoodDrainMultiplier**

Legt den Nahrungsverbrauch eines Dinosauriers fest. Ein höherer Wert erhöht den Verbrauch (Dinos werden hungriger). Beeinflusst auch die Zähmzeiten.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**DinoCharacterHealthRecoveryMultiplier**

Legt die Gesundheitsregeneration eines Dinosauriers fest. Ein höherer Wert erhöht die Regenerationsgeschwindigkeit, ein niedrigerer Wert verlangsamt sie.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**DinoCharacterStaminaDrainMultiplier**

Legt fest, wie schnell ein Dinosaurier müde wird. Ein höherer Wert erhöht die Erschöpfungsgeschwindigkeit, ein niedrigerer Wert verlangsamt sie.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**DinoCountMultiplier**

Legt fest, wie viele Dinosaurier spawnen sollen. Ein höherer Wert erhöht die Spawnchance, ein niedrigerer Wert verringert sie.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**DinoDamageMultiplier**

Legt fest, wie viel Schaden ein Dinosaurier verursacht. Ein höherer Wert erhöht den Schaden, ein niedrigerer Wert verringert ihn.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**DinoResistanceMultiplier**

Legt die Widerstandskraft eines Dinosauriers fest. Ein höherer Wert erhöht die Resistenz.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**globalVoiceChat**

Legt fest, ob der globale Voicechat auf dem Server aktiviert sein soll.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**HarvestAmountMultiplier**

Legt die Menge der Ressourcen fest, die beim Ernten gewonnen werden. Ein höherer Wert bedeutet mehr Ressourcen, ein niedrigerer Wert weniger.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**HarvestHealthMultiplier**

Legt die Gesundheit der Ressourcen fest, die geerntet werden können. Höhere Werte erhöhen die Menge der Materialien pro Schlag.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**noTributeDownloads**

Erlaubt es, das Herunterladen von Spielcharakteren vom Server zu verbieten.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PreventDownloadSurvivors**

Verhindert das Herunterladen von Überlebenden-Charakteren vom Server.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PreventDownloadItems**

Verhindert das Herunterladen von Items vom Server.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PreventDownloadDinos**

Verhindert das Herunterladen von Dinosauriern vom Server.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PlayerCharacterFoodDrainMultiplier**

Legt fest, wie schnell ein Spieler hungrig wird. Ein höherer Wert lässt den Spieler schneller Hunger bekommen, ein niedrigerer Wert verlangsamt das. Ein Wert von 2.0 verdoppelt den Standardwert, 0.5 halbiert ihn.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PlayerCharacterHealthRecoveryMultiplier**

Legt fest, wie schnell ein Spieler heilt. Ein höherer Wert beschleunigt die Heilung, ein niedrigerer Wert verlangsamt sie. 2.0 verdoppelt, 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PlayerCharacterStaminaDrainMultiplier**

Legt fest, wie schnell Spieler müde werden. Ein höherer Wert erhöht die Erschöpfungsgeschwindigkeit, ein niedrigerer Wert verlangsamt sie. 2.0 verdoppelt, 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PlayerCharacterWaterDrainMultiplier**

Legt fest, wie schnell ein Spieler durstig wird. Ein höherer Wert lässt Spieler schneller Durst bekommen, ein niedrigerer Wert verlangsamt das. 2.0 verdoppelt, 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PlayerDamageMultiplier**

Legt fest, wie viel Schaden ein Spieler verursacht. Ein höherer Wert erhöht den Schaden, ein niedrigerer Wert verringert ihn. 2.0 verdoppelt, 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PlayerResistanceMultiplier**

Legt die Widerstandskraft eines Spielers fest. Ein höherer Wert erhöht die Resistenz, ein niedrigerer Wert verringert sie. 2.0 verdoppelt, 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**proximityChat**

Legt fest, ob der lokale Chat auf dem Server aktiviert sein soll.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-------------: | :---------: |
|  Boolean  | 0 (Deaktiviert) |     0/1     |

**ResourceNoReplenishRadiusPlayers**

Legt den Abstand zwischen Spielern und Ressourcen fest, in dem keine Ressourcen nachwachsen. Ein höherer Wert vergrößert den Radius, ein niedrigerer Wert verkleinert ihn. 2.0 verdoppelt, 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**ResourceNoReplenishRadiusStructures**

Legt den Abstand zwischen Strukturen und Ressourcen fest, in dem keine Ressourcen nachwachsen. Ein höherer Wert vergrößert den Radius, ein niedrigerer Wert verkleinert ihn. 2.0 verdoppelt, 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**ResourcesRespawnPeriodMultiplier**

Legt den Multiplikator für die Respawn-Zeit von Ressourcen fest. Ein höherer Wert verlängert die Zeit, ein niedrigerer Wert verkürzt sie. 2.0 verdoppelt, 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**ServerAdminPassword**

Legt das Passwort fest, um sich als Admin einzuloggen. Mehr Infos dazu findest du in unserer Anleitung: [Admin werden](ark-becomeadmin.md)

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  String   |      N/A      |  Beliebig   |

**ServerCrosshair**

Legt fest, ob ein Fadenkreuz für den Spieler angezeigt wird.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (deaktiviert) |     0/1     |

**serverForceNoHud**

Legt fest, ob Ingame-Steuerungen für den Spieler angezeigt werden.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (deaktiviert) |     0/1     |

**serverHardcore**

Legt fest, ob der Hardcore-Modus aktiviert ist (wenn ein Spieler stirbt, muss er von vorne anfangen).

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (deaktiviert) |     0/1     |

**ServerPassword**

Setzt das Passwort für den Serverzugang. Wenn nur bestimmte Leute Zugriff haben sollen, kannst du hier ein Passwort setzen. Standardmäßig ist die Option deaktiviert und wird durch das Setzen eines Passworts aktiviert.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  String   |      N/A      |  Beliebig   |

**serverPVE**

Legt fest, ob PVP auf dem Server aktiviert ist oder nicht. Wenn PVP deaktiviert ist, ist nur PVE möglich.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (deaktiviert) |     0/1     |

**ShowMapPlayerLocation**

Legt fest, ob Spieler auf der Map durch Marker angezeigt werden. - [Beispiel](https://screensaver01.zap-hosting.com/index.php/s/XgKByRZpzgqCZif/preview)

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (deaktiviert) |     0/1     |

**StructureDamageMultiplier**

Legt fest, wie viel Widerstandskraft eine Struktur hat. Ein höherer Wert erhöht die Resistenz, ein niedrigerer Wert verringert sie. 2.0 verdoppelt, 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**StructureResistanceMultiplier**

Legt fest, wie viel Schaden eine Struktur bei Angriffen erhält. Ein höherer Wert erhöht den Schaden, ein niedrigerer Wert verringert ihn. 2.0 verdoppelt, 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**TamedDinoDamageMultiplier**

Legt den Schaden eines gezähmten Dinos bei Angriffen fest. Ein höherer Wert erhöht den Schaden, ein niedrigerer Wert verringert ihn. 2.0 verdoppelt, 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**TamedDinoResistanceMultiplier**

Legt die Widerstandskraft eines gezähmten Dinosauriers fest. Ein höherer Wert erhöht die Resistenz, ein niedrigerer Wert verringert sie. 2.0 verdoppelt, 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**TamingSpeedMultiplier**

Legt die Geschwindigkeit des Zähmens fest. Ein höherer Wert beschleunigt das Zähmen, ein niedrigerer Wert verlangsamt es. 2.0 verdoppelt, 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**XPMultiplier**

Legt die Erfahrungspunkte fest, die ein Spieler erhält. Ein höherer Wert erhöht die XP, ein niedrigerer Wert verringert sie. 2.0 verdoppelt, 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**EnablePVPGamma**

Legt fest, ob die Nutzung von Gamma auf einem PVP-Server erlaubt ist.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (deaktiviert) |     0/1     |

**EnablePVEGamma**

Legt fest, ob die Nutzung von Gamma auf einem PVE-Server erlaubt ist.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (deaktiviert) |     0/1     |

**SpectatorPassword**

Legt das Passwort fest, das ein Nicht-Admin eingeben muss, um den Zuschauermodus zu betreten.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  String   |      N/A      |  Beliebig   |

**DifficultyOffset**

Legt den Schwierigkeitsgrad des Servers fest. Um das maximale Kreaturenlevel für einen Schwierigkeitswert zu berechnen, multipliziere einfach mit 30 (da das maximale Kreaturenlevel linear mit dem Schwierigkeitswert skaliert, und ein Wert von 1.0 ein maximales Level von 30 ergibt). Für einen Schwierigkeitsoffset gilt:

```
DifficultyOffset = (Maximum Creature Level / 30 - 0.5) / (Official Difficulty - 0.5)
```

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  String   |    0.50000    |  Beliebig   |

**PvEStructureDecayPeriodMultiplier**

Legt den Zeitraum fest, nach dem Gebäude zu verfallen beginnen. Ein höherer Wert verlängert die Verfallszeit, ein niedrigerer Wert verkürzt sie. 2.0 verdoppelt, 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PvEStructureDecayDestructionPeriod**

Legt fest, wann Strukturen auf einem PVE-Server von anderen Spielern zerstört werden können. Ein höherer Wert verlängert die Wartezeit, ein niedrigerer Wert verkürzt sie. 2.0 verdoppelt, 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PvPStructureDecay**

Legt fest, ob der automatische Verfall von Gebäuden auf einem PVP-Server aktiviert oder deaktiviert ist.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**DisableDinoDecayPvE**

Deaktiviert (true) oder aktiviert (false) das automatische Freigeben von Dinos.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (deaktiviert) |     0/1     |

**PvEDinoDecayPeriodMultiplier**

Legt den Multiplikator für die Geschwindigkeit fest, bis ein Dino freigegeben wird (höher = schneller, niedriger = langsamer).

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**AdminLogging**

Aktiviert die Ausgabe von Admin-Cheatbefehlen im Chat, wenn sie von einem Admin im Spiel genutzt werden.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (deaktiviert) |     0/1     |

**MaxTamedDinos**

Legt die maximale Anzahl zähmbarer Dinosaurier auf der Insel fest.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Integer  |     8300      |      ∞      |

**MaxNumbersofPlayersInTribe**

Legt die maximale Anzahl an Spielern pro Tribe fest.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Integer  |       2       |      ∞      |

**KickIdlePlayersPeriod**

Legt die Zeitspanne fest, nach der ein inaktiver Spieler vom Server gekickt wird.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Integer  | 1800 (Sekunden) |      ∞      |

**PerPlatformMaxStructuresMultiplier**

Legt den Multiplikator für Strukturen auf Sattelplattformen fest. Bitte vorsichtig verwenden – zu hohe Werte können massive Performance-Probleme verursachen.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**StructureDamageRepairCooldown**

Legt die Zeitspanne fest, bevor eine zuvor beschädigte Struktur wieder repariert werden darf. (0 erlaubt Reparatur ohne Wartezeit)

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Integer  |      180      |      ∞      |

**bForceAllStructureLocking**

Legt fest, ob alle Arten von Containern abschließbar gemacht werden können.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  |       1       |     0/1     |

**bUseVSync**

Legt fest, ob VSync aktiviert sein soll (kann Probleme mit manchen Grafikkarten minimieren).

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**MaxPlatformSaddleStructureLimit**

Legt die maximale Anzahl an Strukturen auf der Sattelplattform fest.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Integer  |      100      |      ∞      |

**RCONPort**

Legt den RCON-Port fest, der für die Anmeldung via RCON-Konsole genutzt wird.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Integer  |      100      |      ∞      |

**AutoSavePeriodMinutes**

Legt das Intervall (in Minuten) fest, in dem der Server automatisch speichert.

:::info
Dieser Wert ist auf 30 Minuten festgelegt und kann nicht geändert werden.
:::

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Integer  |      30       |      ∞      |

**RCONServerGameLogBuffer**

Legt fest, wie viele Chatzeilen in RCON-Tools angezeigt werden.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Integer  |      600      |      ∞      |

**PreventOfflinePvPInterval**

Legt fest, wie viele Sekunden ein Spieler getrennt sein muss, um als tatsächlich offline markiert zu werden.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Integer  | 60 (Sekunden)  |      ∞      |

**bPvPDinoDecay**

Legt fest, ob die Dinosaurier des Tribes/Spielers auch im aktivierten Offline-Raid-Schutz geschützt sind.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  |       1       |     0/1     |

**bPvPStructureDecay**

Legt fest, ob die Strukturen des Tribes/Spielers im aktivierten Offline-Raid-Schutz geschützt sind.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  |       1       |     0/1     |

**DisableImprintDinoBuff**

Legt fest, ob der zusätzliche Bonus deaktiviert wird, den du als Spieler bekommst, wenn du ein Dino-Baby selbst aufgezogen hast.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  |       1       |     0/1     |

**AllowAnyoneBabyImprintCuddle**

Legt fest, ob jeder Spieler Baby-Dinosaurier kuscheln darf.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  |       1       |     0/1     |

**OverrideOfficialDifficulty**

Überschreibt den Schwierigkeitsgrad.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Integer  |       1       |     0/1     |

**TheMaxStructuresInRange**

Legt die maximal erlaubte Anzahl an Strukturen im Nahbereich fest.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Integer  |     10500     |      ∞      |

**PvEAllowStructuresAtSupplyDrops**

Legt fest, ob das Bauen von Strukturen in der Nähe von Versorgungskisten erlaubt ist.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (deaktiviert) |     0/1     |

**AutoDestroyDecayedDinos**

Legt fest, ob Dinos direkt zerstört werden sollen, anstatt beanspruchbar zu werden.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (deaktiviert) |     0/1     |

**ClampItemSpoilingTimes**

Legt alle Verfallszeiten von Items auf die maximalen Verfallszeiten fest.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (deaktiviert) |     0/1     |

**AllowCrateSpawnsOnTopOfStructures**

Legt fest, ob Versorgungskisten auf Strukturen landen können.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (deaktiviert) |     0/1     |

**PreventOfflinePvP**

Legt fest, ob der "Offline Raid Schutz" auf PVE/PVP-Servern aktiviert sein soll.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  | 1 (aktiviert)  |     0/1     |

**AllowMultipleAttachedC4**

Erlaubt es, C4-Explosivstoffe mehrfach an Dinosauriern anzubringen.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  | 1 (aktiviert)  |     0/1     |

**bPvEDisableFriendlyFire**

Legt fest, ob Friendly Fire in PVE deaktiviert sein soll.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  | 1 (aktiviert)  |     0/1     |

**ServerAutoForceRespawnWildDinosInterval**

Legt die Zeit in Sekunden fest, bis ein Respawn aller wilden Dinos erzwungen wird. Zum Beispiel bedeutet 86400 einen erzwungenen Respawn nach einem Tag.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Integer  |     86400     |      ∞      |

**DisableWeatherFog**

Legt fest, ob der Nebel auf der Map aktiviert oder deaktiviert wird.

| Datentyp | Standardwert    | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (aktiviert)  |     0/1     |

### **[/script/engine.gamesession]**

**MaxPlayers**

Legt fest, wie viele Spieler gleichzeitig auf dem Server spielen können.

| Datentyp |                        Standardwert                        | Wertebereich |
| :-------: | :---------------------------------------------------------: | :---------: |
|   Float   | Abhängig von der Slot-Auswahl bei der Bestellung (Fixe Slots) |   10-130    |

### **[SessionSettings]**

**SessionName**

Legt den Servernamen fest, der im Serverbrowser, Spiel usw. angezeigt wird.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |  ARK #XXXXXX  |      ∞      |

### **[MessageOfTheDay]**

**Duration**

Legt fest, wie lange die Willkommensnachricht nach dem Verbinden angezeigt wird.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|  Integer  |    1.00000    |     X-X     |

**Message**

Legt die Willkommensnachricht fest, die angezeigt wird, wenn ein Spieler sich mit dem Server verbindet.

| Datentyp | Standardwert | Wertebereich |
| :-------: | :-----------: | :---------: |
|   Float   |     "..."     |      /      |

## Konfiguration: Game.ini

Wie bereits erwähnt, können umfangreichere Anpassungen über die Game.ini vorgenommen werden. Dazu gehört z.B. das Ändern von Engrammpunkten oder XP pro Level.

### Level-Limit

Es gibt eine Möglichkeit, das maximale Level von Spielern und Dinosauriern zu erhöhen. Dafür wird die Funktion `LevelExperienceRampOverrides` genutzt. Sie wurde mit Version v194 eingeführt. Mehr Infos und Beispiele findest du im Steam-Forum: [Extended Game Options: How to Configure your Custom ARK server](https://steamcommunity.com/app/346110/discussions/10/530646715633129364/).

Der Befehl wird zweimal angewendet: einmal für das Spielerlevel und einmal für das Dinosaurierlevel. Die Syntax sieht so aus:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=(
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>)
```

Die eckigen Klammern definieren die jeweiligen Level (**LEVELVALUE**), und hinter dem Gleichheitszeichen wird die Menge an XP (**Points**) definiert, die benötigt wird, um das jeweilige Level zu erreichen.

Wenn du z.B. 500 Level als Limit möchtest, sieht das so aus:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=( 
ExperiencePointsForLevel[0]=100, 
ExperiencePointsForLevel[1]=200, 
ExperiencePointsForLevel[2]=300, 
ExperiencePointsForLevel[3]=400, 
ExperiencePointsForLevel[4]=500, 
ExperiencePointsForLevel[5]=600,
... // Aus Platzgründen gekürzt
ExperiencePointsForLevel[499]=50000)
```

### Engrammpunkte

Mit jedem **Level-Up** erhältst du **Engrammpunkte**. Die Anzahl der **Engrammpunkte** pro Level kann seit Version v193 ebenfalls angepasst werden. Die Syntax sieht so aus:

```
OverridePlayerLevelEngramPoints=
```

Für jedes Level musst du eine Befehlszeile hinzufügen. Wenn du z.B. 10 Level definierst und für jedes Level **5 Engrammpunkte** mehr bekommst, sieht das so aus:

```
OverridePlayerLevelEngramPoints=5
OverridePlayerLevelEngramPoints=10
OverridePlayerLevelEngramPoints=15
OverridePlayerLevelEngramPoints=20
OverridePlayerLevelEngramPoints=25
OverridePlayerLevelEngramPoints=30
OverridePlayerLevelEngramPoints=35
OverridePlayerLevelEngramPoints=40
OverridePlayerLevelEngramPoints=45
OverridePlayerLevelEngramPoints=50
```

Die Anzahl der Befehlszeilen hängt generell vom zuvor definierten Level-Limit ab.

:::info
ARK ist ein schnelllebiges Spiel und erhält daher regelmäßig viele Änderungen. Das betrifft auch die Server-Konfiguration. Wir empfehlen dir deshalb, einen Blick in die offizielle Dokumentation für weitere und detailliertere Infos zu werfen: https://ark.fandom.com/wiki/Server_configuration
:::

<InlineVoucher />