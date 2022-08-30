---
id: ark_configuration
title: ARK: Server Konfiguration bei ZAP-Hosting
description: Informationen zu den Konfigurationsoptionen im Web Interface deines ARK-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentationen
sidebar_label: Server Konfiguration

---

## Server Konfiguration

Die Konfiguration eines **ARK Gameservers** mag bei dem einen oder anderen für Verwirrung und Ratlosigkeit sorgen. Allerdings geschieht das nicht ohne Grund. ARK bietet bei seinem Spiel sehr viele Konfigurationsmöglichkeiten an. Dazu kommt noch, dass die Konfiguration über verschiedene Konfigurationsdateien stattfindet, bei denen ebenfalls aufgepasst werden muss, in welche Datei welche Befehle gehören. In dieser Anleitung versuchen wir dir einen besseren Überblick über die Funktionsweise der Konfiguration eines ARK Gameservers zu vermitteln. 

![image](https://user-images.githubusercontent.com/13604413/159179441-19eea1bc-fe87-4c31-ab2f-c44b45e8a130.png)



## Unterschiede bei den Konfigurationsdateien 

Die Konfiguration des **ARK Gameservers** findet über die Konfigurationsdateien **GameUserSettings.ini** und **Game.ini** statt. Diese kannst du sowohl über unser **Webinterface** unter **Configs** als auch per **FTP** bearbeiten. 


| Konfigurationsdatei  | Webinterface                                                 | FTP                                     |
| -------------------- | ------------------------------------------------------------ | --------------------------------------- |
| GameUserSettings.ini | `Gameserver Administration -> Configs ->GameUserSettings.ini` | `ShooterGame/Saved/Config/LinuxServer/` |
| Game.ini             | `Gameserver Administration -> Configs ->Game.ini`            | `ShooterGame/Saved/Config/LinuxServer/` |

Die Konfigurationsdatei **GameUserSettings.ini** enthält Optionen sowohl für den Spiele-Client als auch für den Spiele-Server. Optionen für den Spiel-Client werden vom Server nicht verwendet. Serveroptionen werden im Abschnitt **[ServerSettings]** angegeben, der sich normalerweise am Ende der Datei befindet. Für erweiterte Modifikationen, wie z. B. das Ändern von Engrammpunkten oder XP, die pro Stufe belohnt werden, das Deaktivieren bestimmter Inhalte oder die Anpassung an den Geschmack der Spieler, wird die Konfigurationsdatei **Game.ini** verwendet.



## Konfiguration

Im folgenden gehen wir nun auf die beiden Konfigurationsdateien ein. Dabei gehen wir auf die gängigsten Befehle ein und erklären deren Funktionsweise. 



## Konfiguration: Karte

ARK bietet verschiedene Karten an die gespielt werden können. Im Webinterface in der Gameserver Verwaltung unter Einstellungen kann die gewünschte Karte gesetzt werden, welche gespielt werden soll. 

| Maps           | Veröffentlicht | Befehlsname       |
| -------------- | -------------- | ----------------- |
| The Island     | 02.06.2015     | `TheIsland`       |
| The Center     | 17.05.2016     | `TheCenter`       |
| Scorched Earth | 01.09.2016     | `ScorchedEarth_P` |
| Ragnarok       | 12.06.2017     | `Ragnarok`        |
| Aberration     | 12.12.2017     | `Aberration_P`    |
| Extinction     | 06.11.2018     | `Extinction`      |
| Valguero       | 18.06.2019     | `Valguero_P`      |
| Genesis        | 25.02.2020     | `Genesis`         |
| Crystal Isles  | 11.06.2020     | `CrystalIsles`    |



Trage dafür den Befehlsname der Map einfach in das Feld **Karte / Map** ein und schon wird die Map beim nächsten Startvorgang deines Servers geladen.



![](https://screensaver01.zap-hosting.com/index.php/s/LsGT3Q47qr5m7Js/preview)







## Konfiguration: Gameusersettings.ini



### [ServerSettings]



**allowThirdPersonPlayer**

Dieser Befehl legt fest, ob die 3rd Person Perpektive aktiviert werden soll oder nicht. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Boolean  |      0       |     0/1      |

**AllowCaveBuildingPvE**

Dieser Befehl legt fest, ob der Bau von Strukturen in Höhlen (bei aktiven PVE Modus) erlaubt werden soll oder nicht. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Boolean  |      0       |     0/1      |

**alwaysNotifyPlayerJoined**

Dieser Befehl legt fest, ob die Spieler eine Benachrichtigung bekommen, wenn ein Spiele den Server betritt. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Boolean  |      0       |     0/1      |

**alwaysNotifyPlayerLeft**

Dieser Befehl legt fest, ob die Spieler eine Benachrichtigung bekommen, wenn ein Spiele den Server verlässt. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Boolean  |      0       |     0/1      |

**bAllowFlyerCarryPvE**

Dieser Befehl legt fest, ob das Aufnehmen von Dinus Spielern mit einem Flugsaurier erlaubt wird oder nicht. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Boolean  |      0       |     0/1      |

**bDisableStructureDecayPvE**

Dieser Befehl legt fest, ob das Aufnehmen von Dinus Spielern mit einem Flugsaurier erlaubt wird oder nicht. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Boolean  |      0       |     0/1      |

**DayCycleSpeedScale**

Dieser Befehl bestimmt den Skalierungsfaktor für den Zeitablauf in ARK fest und steuert, wie oft der Tag in die Nacht und die Nacht in den Tag übergeht. Der Standardwert 1 sorgt für die gleiche Zyklusgeschwindigkeit wie im Einzelspielermodus (und auf den offiziellen öffentlichen Servern). Werte kleiner als 1 verlangsamen den Zyklus, höhere Werte beschleunigen ihn. 1 Minute Realzeit bedeutet circa 28 Minuten Spielzeit. Für einen ungefähren 24-Stunden-Tag/Nacht-Zyklus im Spiel sollte also der Wert .035 verwendet werden.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**DayTimeSpeedScale**

Dieser Befehl bestimmt den Skalierungsfaktor für den Ablauf der Zeit in ARK während des Tages. Bestimmt den Skalierungsfaktor für den Ablauf der Zeit in ARK während des Tages. Der Wert bestimmt die Länge jedes Tages, relativ zur Länge jeder Nacht (wie durch NightTimeSpeedScale festgelegt. Durch Verringern dieses Wertes wird die Länge jedes Tages erhöht.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**NightTimeSpeedScale**

Dieser Befehl bestimmt den Skalierungsfaktor für den Ablauf der Zeit in ARK während der Nachtzeit. Der Wert bestimmt die Länge jeder Nacht, im Verhältnis zu der Länge jedes Tages (wie durch DayTimeSpeedScale festgelegt. Durch Verringern dieses Wertes wird die Länge jeder Nacht erhöht.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**DinoCharacterFoodDrainMultiplier**

Dieser Befehl bestimmt den Essensverbrauch eines Dinosaurier.  Ein höherer Wert erhöht den Nahrungsverbrauch (die Dinosaurier werden schneller hungrig). Er wirkt sich auch auf die Zähmungszeiten aus. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**DinoCharacterHealthRecoveryMultiplier**

Dieser Befehl bestimmt die Gesundheitsregeneration eines Dinosaurier. Ein höherer Wert erhöht die Geschwindigkeit der Regeneration und ein niedriger Wert macht diese wiederum langsamer.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**DinoCharacterStaminaDrainMultiplier**

Dieser Befehl bestimmt wie schnell ein Dinosaurier müde wird. Ein höherer Wert erhöht die Geschwindigkeit der Regeneration und ein niedriger Wert macht dies wiederum langsamer.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**DinoCountMultiplier**

Dieser Befehl bestimmt, wie viele Dinosaurier spawnen sollen. Ein höherer Wert sorgt für eine größere Chance das Dinosaurier auf der Karte spawnen  und ein niedriger wiederum das weniger spawnen. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**DinoDamageMultiplier**

Dieser Befehl bestimmt, wie viel Schaden ein Dinosaurier anrichtet. Ein höherer Wert erhöht den Schaden und ein niedriger Wert macht wiederum weniger Schaden.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**DinoResistanceMultiplier**

Dieser Befehl bestimmt die Widerstandskraft eines Dinosaurier. Ein höherer Wert erhöht die Widerstandskraft eines Dinosaurier.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**globalVoiceChat**

Dieser Befehl bestimmt, ob der globale Sprachchat auf dem Server aktiviert sein soll oder nicht. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Boolean  |      0       |     0/1      |

**HarvestAmountMultiplier**

Dieser Befehl legt die Menge an Ressourcen fest, welche beim Ernten gefarmt werden. Ein höherer Wert sorgt für mehr gefarmte Resourcen und ein niedriger wiederum für weniger. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**HarvestHealthMultiplier**

Dieser Befehl bestimmt den Gesundheits von Ressourcen, die beim Sammeln von Resourcen (abgebaut) wird. Eine höhere Gesundheit führt zu höheren Ausbeuten beim Farmen.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**HarvestAmountMultiplier**

Dieser Befehl legt die Menge an Ressourcen fest, welche beim Ernten gefarmt werden. Ein höherer Wert sorgt für mehr gefarmte Resourcen und ein niedriger wiederum für weniger. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**noTributeDownloads**

Dieser Befehl ermöglicht das Herunterladen von Spielcharakteren des Servers zu verbieten. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**PreventDownloadSurvivors**

Dieser Befehl ermöglicht das Herunterladen von Spielcharakteren des Servers zu verhindern. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**PreventDownloadItems**

Dieser Befehl ermöglicht das Herunterladen von Gegenständen des Servers zu verhindern..


| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**PreventDownloadDinos**

Dieser Befehl ermöglicht das Herunterladen von Dinosaurier des Servers zu verhindern.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**PlayerCharacterFoodDrainMultiplier**

Dieser Befehl bestimmt, wie schnell ein Spieler hungrig wird. Das Erhöhen des Wertes sorgt für eine schnelleren Hunger und das Reduzieren wiederum für eine langsamere Hunger. Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**PlayerCharacterHealthRecoveryMultiplier**

Dieser Befehl bestimmt, wie schnell ein Spieler sich heilt. Das Erhöhen des Wertes sorgt für eine schnellere Heilung und das Reduzieren wiederum für eine langsamere Heilung. Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**PlayerCharacterStaminaDrainMultiplier**

Dieser Befehl bestimmt, wie schnell ein Spieler müde wird. Das Erhöhen des Wertes sorgt für eine schnellere Müdigkeit und das Reduzieren wiederum für eine langsamere Müdigkeit. Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**PlayerCharacterWaterDrainMultiplier**

Dieser Befehl bestimmt, wie schnell ein Spieler durstig wird. Das Erhöhen des Wertes sorgt für eine schnellere Durstigkeit und das Reduzieren wiederum für eine langsamere Durstigkeit. Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**PlayerDamageMultiplier**

Dieser Befehl bestimmt, wie viel schaden ein Spieler macht. Das Erhöhen des Wertes sorgt für mehr Schaden und das Reduzieren wiederum für weniger Schaden. Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**PlayerResistanceMultiplier**

Dieser Befehl bestimmt die Widerstandskraft eines Spielers. Das Erhöhen des Wertes sorgt für eine größere Widerstandskraft und das Reduzieren wiederum für geringere Widerstandskraft. Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**proximityChat**

Dieser Befehl bestimmt, ob der lokale Chat auf dem Server aktiviert werden soll oder nicht. 

| Datentyp |  Standardwert   | Wertebereich |
| :------: | :-------------: | :----------: |
| Boolean  | 0 (Deaktiviert) |     0/1      |

**ResourceNoReplenishRadiusPlayers**

Dieser Befehl bestimmt, die Entfernung zwischen Spielern und Ressourcen, in der keine Ressourcen mehr nachwachsen sollen. Das Erhöhen des Wertes sorgt für einen größeren Radius und das Reduzieren wiederum für einen geringeren Radius. Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**ResourceNoReplenishRadiusStructures**

Dieser Befehl bestimmt, die Entfernung zwischen Strukturen und Ressourcen, in der keine Ressourcen mehr nachwachsen sollen. Das Erhöhen des Wertes sorgt für einen größeren Radius und das Reduzieren wiederum für einen geringeren Radius. Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**ResourcesRespawnPeriodMultiplier**

Dieser Befehl bestimmt, die Entfernung zwischen Spielern und Ressourcen, in der keine Ressourcen mehr nachwachsen sollen. Das Erhöhen des Wertes sorgt für einen größeren Radius und das Reduzieren wiederum für einen geringeren Radius. Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**ServerAdminPassword**

Dieser Befehl bestimmt das Passwort zum einloggen als Admin. Mehr dazu findest du in unserer Anleitung:  [ARK - Admin werden](https://zap-hosting.com/guides/docs/de/ark_becomeadmin/)

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  String  |     N/A      |   Beliebig   |

**ServerCrosshair**

Dieser Befehl bestimmt, ob dem Spieler ein Fadenkreuz angezeigt werden soll oder nicht. 

| Datentyp |  Standardwert   | Wertebereich |
| :------: | :-------------: | :----------: |
| Boolean  | 0 (Deaktiviert) |     0/1      |

**serverForceNoHud**

Dieser Befehl bestimmt, ob dem Spieler Ingame-Bedienelemente angezeigt werden soll oder nicht. 

| Datentyp |  Standardwert   | Wertebereich |
| :------: | :-------------: | :----------: |
| Boolean  | 0 (Deaktiviert) |     0/1      |

**serverHardcore**

Dieser Befehl bestimmt, ob der Hardcore Modus (wenn ein Spieler stirbt, muss er von vorne beginnen) aktiviert werden soll oder nicht.

| Datentyp |  Standardwert   | Wertebereich |
| :------: | :-------------: | :----------: |
| Boolean  | 0 (Deaktiviert) |     0/1      |

**ServerPassword**

Dieser Befehl bestimmt das Passwort zum einloggen beim Server. Wenn nur bestimmte Personen Zugriff bekommen sollen, dann hat man die Möglichkeit ein Passwort zu setzen. Standardmäßig ist die Option deaktiviert und wird aktiviert durch das Setzen eines Passworts. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  String  |     N/A      |   Beliebig   |

**serverPVE**

Dieser Befehl bestimmt, ob PVP auf dem Server aktiviert sein soll oder nicht. Wenn PVP deaktiviert ist, dann ist nur PVE möglich. 

| Datentyp |  Standardwert   | Wertebereich |
| :------: | :-------------: | :----------: |
| Boolean  | 0 (Deaktiviert) |     0/1      |

**ShowMapPlayerLocation**

Dieser Befehl bestimmt, ob Spieler auf der Karte mittels Marker angezeigt werden sollen oder nicht. - [Beispiel](https://screensaver01.zap-hosting.com/index.php/s/XgKByRZpzgqCZif/preview)

| Datentyp |  Standardwert   | Wertebereich |
| :------: | :-------------: | :----------: |
| Boolean  | 0 (Deaktiviert) |     0/1      |

**StructureDamageMultiplier**

Dieser Befehl bestimmt, wie viel Widerstandskraft eine Struktur hat. Das Erhöhen des Wertes sorgt für eine größere Widerstandskraft und das Reduzieren wiederum für eine geringere Widerstandskraft. Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**StructureResistanceMultiplier**

Dieser Befehl bestimmt, wie viel schaden eine Struktur erhält, wenn sie angegriffen wird. Das Erhöhen des Wertes sorgt für einen größeren Schaden und das Reduzieren wiederum für einen geringeren Schaden. Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**TamedDinoDamageMultiplier**

Dieser Befehl bestimmt den Schaden eines gezähmten Dinos beim Angriff. Das Erhöhen des Wertes sorgt für einen größeren Schaden und das Reduzieren wiederum für einen geringeren Schaden. Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**TamedDinoResistanceMultiplier**

Dieser Befehl bestimmt die Widerstandskraft eines gezähmten Dinosaurier. Das Erhöhen des Wertes sorgt für eine größere Widerstandskraft und das Reduzieren wiederum für eine geringere Widerstandskraft. Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**TamingSpeedMultiplier**

Dieser Befehl bestimmt die Geschwindigkeit des Zähmens. Das Erhöhen des Wertes sorgt für eine schnellere Zähmgeschwindigkeit und das Reduzieren wiederum für eine geringere Zähmgeschwindigkeit. Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**XPMultiplier**

Dieser Befehl bestimmt die Erfahrungspunkte die ein Spieler erhält. Das Erhöhen des Wertes sorgt für mehr Erfahrungspunkte und das Reduzieren wiederum für weniger Erfahrungspunkte. Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**EnablePVPGamma**

Dieser Befehl bestimmt, ob das Nutzen von Gamma auf einem PVP Server erlaubt ist oder nicht. 

| Datentyp |  Standardwert   | Wertebereich |
| :------: | :-------------: | :----------: |
| Boolean  | 0 (Deaktiviert) |     0/1      |

**EnablePVEGamma**

Dieser Befehl bestimmt, ob das Nutzen von Gamma auf einem PVE Server erlaubt ist oder nicht. 

| Datentyp |  Standardwert   | Wertebereich |
| :------: | :-------------: | :----------: |
| Boolean  | 0 (Deaktiviert) |     0/1      |

**SpectatorPassword**

Dieser Befehl bestimmt das Passwort, dass ein Nicht-Admin eingeben muss, um sich in den Beobachtermodus versetzen zu können.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  String  |     N/A      |   Beliebig   |

**DifficultyOffset**

Dieser Befehl bestimmt den Schwierigkeitsgrad des Servers. Um die maximale Kreaturenstufe für einen bestimmten Schwierigkeitswert zu berechnen, multipliziere einfach mit 30 (dies funktioniert, weil die maximale Kreaturenstufe linear mit dem Schwierigkeitswert skaliert und ein Schwierigkeitswert von 1,0 eine maximale Kreaturenstufe von 30 ergibt). Um einen Schwierigkeitsversatz für einen maximalen Kreaturenwert zu ermitteln, verwenden diese Formel: 

```
DifficultyOffset = (Maximum Creature Level / 30 - 0.5) / (Official Difficulty - 0.5)
```

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  String  |   0.50000    |   Beliebig   |

**PvEStructureDecayPeriodMultiplier**

Dieser Befehl bestimmt den Zeitraum in dem Gebäude anfangen zu zerfallen. Das Erhöhen des Wertes sorgt für eine längere Verfallzeit und das Reduzieren wiederum für eine langsamere Verfallzeit. Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**PvEStructureDecayDestructionPeriod**

Dieser Befehl bestimmt, ab wann Strukturen von anderen Spielen auf einem PVE Server zerstört werden können. Das Erhöhen des Wertes sorgt für eine längere Wartezeit und das Reduzieren wiederum für eine langsamere Wartezeit . Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**PvEStructureDecayDestructionPeriod**

Dieser Befehl bestimmt, ab wann Strukturen von anderen Spielen auf einem PVE Server zerstört werden können. Das Erhöhen des Wertes sorgt für eine längere Wartezeit und das Reduzieren wiederum für eine langsamere Wartezeit . Ein Wert von 2.0 verdoppelt den Standardwert, ein Wert von 0.5 halbiert den Standardwert. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**PvPStructureDecay**

Dieser Befehl bestimmt, ob der automatische Verfall von Gebäuden auf einem PVP Server aktiviert oder deaktiviert werden soll.  

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Boolean  |      0       |     0/1      |

**DisableDinoDecayPvE**

Dieser Befehl deaktiviert das automatische Unclaimen von Dinos (true) oder aktiviert es (false).

| Datentyp |  Standardwert   | Wertebereich |
| :------: | :-------------: | :----------: |
| Boolean  | 0 (Deaktiviert) |     0/1      |

**PvEDinoDecayPeriodMultiplier**

Dieser Befehl bestimmt  den Multiplikatorwert für die Schnellkeit bis ein Dino unclaimed gesetzt wird (höher = schneller, niedriger = langsamer)

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**AdminLogging**

Dieser Befehl aktiviert die Ausgabe von Admin-Cheat-Befehlen im Chat, sofern diese von einem Admin im Spiel benutzt werden.

| Datentyp |  Standardwert   | Wertebereich |
| :------: | :-------------: | :----------: |
| Boolean  | 0 (Deaktiviert) |     0/1      |

**MaxTamedDinos**

Dieser Befehl bestimmt den Wert der maximal zähmbaren Dinos auf der Insel. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Integer  |     8300     |      ∞       |

**MaxNumbersofPlayersInTribe**

Dieser Befehl legt die maximale Spieleranzahl je Tribe fest.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Integer  |      2       |      ∞       |

**KickIdlePlayersPeriod**

Dieser Befehl bestimmt die Zeitspanne bis ein inaktiver Spieler vom Server gekickt wird. 

| Datentyp |  Standardwert   | Wertebereich |
| :------: | :-------------: | :----------: |
| Integer  | 1800 (Sekunden) |      ∞       |

**PerPlatformMaxStructuresMultiplier**

Dieser Befehl bestimmt den Anzahl-Multiplikator für Strukturen auf der Sattelplattform fest (Vorsichtig einstellen, zu hohe Werte führen zu massiven Performanceeinbußen).

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |   1.00000    |      ∞       |

**StructureDamageRepairCooldown**

Dieser Befehl bestimmt  die Zeitspanne, nach deren Ablauf eine zuvor beschädigte Struktur wieder repariert werden darf. (0 erlaubt eine Reparatur ohne Countdown)

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Integer  |     180      |      ∞       |

**bForceAllStructureLocking**

Dieser Befehl bestimmt, ob alle Arten von Behältnissen abschließbar gemacht werden können. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Boolean  |      1       |     0/1      |

**bUseVSync**

Dieser Befehl bestimmt, ob VSync aktiviert werden soll oder nicht (kann bei einigen Grafikkarten die Probleme minimieren)

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Boolean  |      0       |     0/1      |

**MaxPlatformSaddleStructureLimit**

Dieser Befehl bestimmt die Zeitspanne, nach deren Ablauf eine zuvor beschädigte Struktur wieder repariert werden darf. (0 erlaubt eine Reparatur ohne Countdown)

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Integer  |     100      |      ∞       |

**RCONPort**

Dieser Befehl bestimmt den zu verwendenden RCON Port mit dem du dich per RCON-Konsole einloggen kannst. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Integer  |     100      |      ∞       |

**AutoSavePeriodMinutes**

Dieser Befehl bestimmt, in welchem Abstand (in Minuten) der Server automatisch speichern soll.

> Dieser Wert ist auf 30 Minuten gesetzt und kann nicht verändert werden. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Integer  |      30      |      ∞       |

**RCONServerGameLogBuffer**

Dieser Befehl bestimmt, wie viele Chat-Zeilen im RCON-Programm aufgelistet werden sollen.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Integer  |     600      |      ∞       |

**PreventOfflinePvPInterval**

Dieser Befehl bestimmt, wie viele Sekunden ein Spieler offline sein muss, damit er tatsächlich als offline markiert wird.

| Datentyp | Standardwert  | Wertebereich |
| :------: | :-----------: | :----------: |
| Integer  | 60 (Sekunden) |      ∞       |

**bPvPDinoDecay**

Dieser Befehl bestimmt, ob im aktivierten Offline Raid Schutz ebenfalls die Dinosaurier des Stammes/Spielers geschützt sind.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Boolean  |      1       |     0/1      |

**bPvPStructureDecay**

Dieser Befehl bestimmt,  ob im aktivierten Offline Raid Schutz die Strukturen des Stammes/Spielers geschützt sind

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Boolean  |      1       |     0/1      |

**DisableImprintDinoBuff**

Dieser Befehl bestimmt, ob der zusätzliche Bonswert deaktiviert werden soll, den man als Person bekommt, sofern man ein Dinobaby selbst aufgezogen hat.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Boolean  |      1       |     0/1      |

**AllowAnyoneBabyImprintCuddle**

Dieser Befehl bestimmt, ob jeder Spieler Dinosaurierbabys zu knuddeln. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Boolean  |      1       |     0/1      |

**OverrideOfficialDifficulty**

Dieser Befehl überschreibt den Schwierigkeitsgrad.	

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Integer  |      1       |     0/1      |

**TheMaxStructuresInRange**

Dieser Befehl bestimmt  die maximal erlaubte Anzahl von Strukturen in der unmittelbaren  Umgebung.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Integer  |    10500     |      ∞       |

**PvEAllowStructuresAtSupplyDrops**

Dieser Befehl bestimmt, ob der Bau von Strukturen in der Nähe von Supplykisten erlaubt ist oder nicht.

| Datentyp |  Standardwert   | Wertebereich |
| :------: | :-------------: | :----------: |
| Boolean  | 0 (Deaktiviert) |     0/1      |

**AutoDestroyDecayedDinos**

Dieser Befehl bestimmt, ob Dinos statt claimbar zu werden, direkt zerstört werden sollen.

| Datentyp |  Standardwert   | Wertebereich |
| :------: | :-------------: | :----------: |
| Boolean  | 0 (Deaktiviert) |     0/1      |

**ClampItemSpoilingTimes**

Dieser Befehl bestimmt alle Verfallszeiten der Items und werden hiermit auf die maximalen Verfallszeiten hochgesetzt. 

| Datentyp |  Standardwert   | Wertebereich |
| :------: | :-------------: | :----------: |
| Boolean  | 0 (Deaktiviert) |     0/1      |

**AllowCrateSpawnsOnTopOfStructures**

Dieser Befehl bestimmt, ob Supplykisten auf Strukturen landen können.

| Datentyp |  Standardwert   | Wertebereich |
| :------: | :-------------: | :----------: |
| Boolean  | 0 (Deaktiviert) |     0/1      |

**PreventOfflinePvP**

Dieser Befehl bestimmt, ob die "Offline Raid Protection" auf PVE/PVP Servern aktiviert werden soll oder nicht. 

| Datentyp | Standardwert  | Wertebereich |
| :------: | :-----------: | :----------: |
| Boolean  | 1 (Aktiviert) |     0/1      |



| Datentyp |  Standardwert   | Wertebereich |
| :------: | :-------------: | :----------: |
| Boolean  | 0 (Deaktiviert) |     0/1      |

**AllowMultipleAttachedC4**

Dieser Befehl erlaubt das mehrfache Anbringen von C4 Sprengstoffen an Sauriern.

| Datentyp | Standardwert  | Wertebereich |
| :------: | :-----------: | :----------: |
| Boolean  | 1 (Aktiviert) |     0/1      |

**bPvEDisableFriendlyFire**

Dieser Befehl bestimmt, ob das Friendly Fire gegebüber PVE deaktiviert werden soll oder nicht. 

| Datentyp | Standardwert  | Wertebereich |
| :------: | :-----------: | :----------: |
| Boolean  | 1 (Aktiviert) |     0/1      |

**ServerAutoForceRespawnWildDinosInterval**

Dieser Befehl bestimmt die  Zeit in Sekunden bis ein Respawn aller wilden Dinos erzwungen wird. So bedeutet z.B. ein Wert von 86400 einen erzwungenen Respawn nach einem Tag.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| Integer  |    86400     |     0/1      |

**DisableWeatherFog**

Dieser Befehl bestimmt, ob der Nebel auf der Map aktiviert oder deaktiviert werden soll. 

| Datentyp | Standardwert  | Wertebereich |
| :------: | :-----------: | :----------: |
| Boolean  | 0 (Aktiviert) |     0/1      |



### **[/script/engine.gamesession]**

**MaxPlayers**

Dieser Befehl bestimmt, wie viele Spieler gleichzeitig auf dem Server spielen können.

| Datentyp |                         Standardwert                         | Wertebereich |
| :------: | :----------------------------------------------------------: | :----------: |
|  Float   | Abhängig von der Slotauswahl bei der Bestellung (Wird fest gesetzt!) |    10-130    |



### **[SessionSettings]**

**SessionName**

Dieser Befehl setzt den Servername fest, welcher im Server-Browser, im Spiel, etc. angezeigt wird. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   | ARK #XXXXXX  |      ∞       |



### **[**MessageOfTheDay]

**Duration**

Dieser Befehl bestimmt die wie lange die Willkommensnachricht nach dem verbinden angezeigt werden soll.

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
| integer  |   1.00000    |     X-X      |

**Message**

Dieser Befehl bestimmt die Willkommensnachricht, welche beim verbinden dem Server im Anschluss angezeigt wird. 

| Datentyp | Standardwert | Wertebereich |
| :------: | :----------: | :----------: |
|  Float   |    "..."     |      /       |









## Konfiguration: Game.ini

Wie bereits im Voraus erwähnt werden über die Game.ini umfangreichere Modifikationen vorgenommen. Dazu gehört zum Beispiel das Ändern von Engrammpunkten oder XP, die pro Stufe belohnt werden. Auf diese gehen wir nun im Folgenden ein.

### Levelgrenze

Es besteht die Möglichkeit das maximal zu erreichende Level von Spielern und Dinosaurier zu erhöhen. Dafür wird die Funktion `LevelExperienceRampOverrides` verwendet. Diese wurde mit der v194 Version implementiert. Genauere Informationen und Beispiele dazu gibt es seitens der Entwickler im Steam Forum:  [Extended Game Options: How to Configure your Custom ARK server](https://steamcommunity.com/app/346110/discussions/10/530646715633129364/)

Der Befehl wird hierbei zweifach angewendet. Beim ersten handelt es sich um das Spielerlevel und beim zweiten um das Dinosaurierlevel. Die Syntax dafür sieht wie folgt aus:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=(
ExperiencePointsForLevel[<LEVELWERT>]=<Points>,
ExperiencePointsForLevel[<LEVELWERT>]=<Points>,
ExperiencePointsForLevel[<LEVELWERT>]=<Points>)
```

In den eckigen Klammern werden die jeweiligen Level (**LEVELWERT**) definiert und hinter dem Gleichzeichen wird definiert, wie viel XP (**XPWERT**) für das Erreichen des jeweiligen Levels benötigt wird.

Wenn man also zum Beispiel 500 Level als Levelgrenze haben möchte, dann könnte das zum Beispiel folgendermaßen aussehen:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=( 
ExperiencePointsForLevel[0]=100, 
ExperiencePointsForLevel[1]=200, 
ExperiencePointsForLevel[2]=300, 
ExperiencePointsForLevel[3]=400, 
ExperiencePointsForLevel[4]=500, 
ExperiencePointsForLevel[5]=600,
... // Abgekürzt fürVeranschaulichungszwecken
ExperiencePointsForLevel[499]=50000)
```



### Engram Punkte

Bei jedem **Level-Up** erhält man **Engram Punkte**. Die Anzahl an **Engram Punkte** die pro Level bekommt können ebenfalls seit der v193 Version verändert werden. Die Syntax dafür sieht wie folgt aus:

```
OverridePlayerLevelEngramPoints=
```

Für jedes Level muss eine Befehlszeile hinzugefügt werden. Wenn man beispielsweise 10 Level definiert und für jedes Level **5 Engram Punkte** mehr bekommt, dann würde das folgendermaßen aussehen:

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

Die Anzahl der Befehlszeilen hängt generell von der vorher definierten Levelgrenze ab. 


> Ark ist ein schnelllebiges Spiel und bringt daher auch in regelmäßigen Abständen viele Änderungen mit sich. Das betrifft ebenfalls die Konfiguration eines Servers. Wir empfehlen daher einen Blick in die offizielle Dokumentation für weitere und ausführlichere Informationen zu werfen: https://ark.fandom.com/wiki/Server_configuration
