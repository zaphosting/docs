---
id: valheim_plus
title: Valheim Plus
sidebar_label: Valheim Plus
---

## Vorwort

Bei Valheim Plus handelt es sich um eine Clientseitige Modifikation ~~sämtliche Änderungen müssen daher vom Client ebenfalls im Spielverzeichnis vorgenommen werden.
Sofern enforceConfiguration bei den Server deaktiviert wurde kann jeder Client mit jeder Konfiguration auf den Server verbinden. Dadurch wäre es auch möglich, dass Personen mit verschiedenstens Konfigurationen zu den Server verbinden können. Wodurch Spieler unterschiedliche Geschwindigkeiten zu Fertigungen und Ausdauerwerten Clientseitig einstellen könnten.~~

~~Um dies zu verhindern un ein faires Spielerlebnis zu bieten muss enforceConfiguration auf "**true**" gesetzt werden. Anschließend müsste der Server owner seine bei "**Configs**" gesetzte "**valheim_plus.cfg**" raus kopieren und an jeden Spieler versenden.
Diese Spieler müssen dann exakt die gleiche "**valheim_plus.cfg**" Datei wie auf dem Server eingestellt ist, in den "**BepInEx\config**" Pfad einfügen.~~

> ~~Eine Erklärung wie man zu der "**valheim_plus.cfg**" gelangt und dort die entsprechenden Konfigurationen einstellt ist bei "**Valheim Plus Config**" gegeben.~~
> ~~Wie man zu dem "**BepInEx\config**" Pfad gelangt ist bei ***Valheim Plus Installation auf dem Client*** erklärt.~~

~~Erst dann wäre eine valide Verbindung zum Server möglich.~~

Seit Version 0.9 bekommt der Spieler nun vollautomatisch beim Verbinden zu dem Server die Config. Die Config muss also vorher nicht mehr vom Server heruntergeladen und an alle Spieler geschickt werden!

## Valheim Plus Installation auf dem Client

Zuerst muss der Valheim Ordner auf dem PC geöffnet werden. 
Dafür bei Steam in der Bibliothek 'Rechtsklick' auf Valheim, bei den Optionen dann auf "***Verwalten***" und dort auf "***Lokale Dateien durchsuchen***".

![](https://screensaver01.zap-hosting.com/index.php/s/47cHNZKijzaawbL/preview)

Sobald dieser Ordner geöffnet wurde, muss nun die "***WindowsClient.zip***" heruntergeladen werden. 
Die "***WindowsClient.zip***" kann ![hier](https://github.com/nxPublic/ValheimPlus/releases/tag/0.8) heruntergeladen werden.

![](https://screensaver01.zap-hosting.com/index.php/s/dPxaH3m4to25igt/preview)

Im Anschluss muss nur noch der Inhalt der "***WindowsClient.zip***" in den vorher geöffneten Valheim Server entpackt werden

![](https://screensaver01.zap-hosting.com/index.php/s/EftHnQeiB8GSpS4/preview)

Dann kann Valheim gestartet werden und die Einrichtung bei dem Client ist beendet.

~~### Inkompatible Version~~

~~Sofern beim verbinden zu dem Server der Fehler "**Inkompatible Version**" zu sehen ist muss sichergestellt werden, dass Clientseitig die gleiche "**valheim_plus.cfg**" genutzt wird wie auf dem Server eingestellt. Da der *enforceConfiguration* Serverseitig auf "**true**" gesetzt wurde.~~

~~Das bedeutet, du musst als Server Admin deine "**valheim_plus.cfg**" mit deinen Spielern teilen, damit sie sich die Config in den Valheim Steam Ordner und dann in den Unterordner *BepInEx\config\valheim_plus.cfg* ziehen können.~~

~~Nur wenn Server- und Client Config syncron sind, ist ein Verbinden möglich. Wenn du hingegen *enforceConfiguration* auf *false* setzt, kann jeder Spieler verbinden. Dann hast du jedoch ein unfaires Spielerlebnis, weil die Configs deiner Spieler ggf. "bessere" Werte haben als die der anderen Spieler. Stelle also sicher, dass du deinen Spieler zwingst, die gleiche Config wie der Server zu benutzen~~

~~Die Config kannst du im Webinterface unter "**Configs**" herunterladen und "**deinen Spielern schicken**":~~

Seit Version 0.9 bekommt der Spieler nun vollautomatisch beim Verbinden zu dem Server die Config. Die Config muss also vorher nicht mehr vom Server heruntergeladen und an alle Spieler geschickt werden!

## Valheim Plus Installation Server

Um das Spiel zu wechseln, öffnen wir zuerst das Spiele-Tab auf unserem Server:

![](https://screensaver01.zap-hosting.com/index.php/s/BbBAmKHto6mrSDx/preview)

Hier suchen wir unter "Verfügbare Spiele" nun nach Valheim Plus und klicken auf den Download Button:

![](https://screensaver01.zap-hosting.com/index.php/s/xArgW7EcCxyXxKb/preview)

![]()

Danach wird der Server neu installiert. Nach der Neuinstallation hat man die Möglichkeit das Passwort bei "**Configs**" zu entfernen und man kann nun auf mehr Slots upgraden.

## Slots Upgrade

Um nun ein Slotupgrade durchführen zu können, muss die "**UP- und Downgrade**" Funktion im Gameserver Dashboard geöffnet werden.

![](https://screensaver01.zap-hosting.com/index.php/s/gmZMnEgTNfg9eYB/preview)

Bei der Upgrade-Seite wählt man nun die gewünschte Anzahl an Slots aus. 

> Hierbei muss nur der "**Aufpreis**" bezahlt werden, dieser berechnet sich für die noch verbliebene Laufzeit

![](https://screensaver01.zap-hosting.com/index.php/s/eH5mKpSzLGAM3qf/preview)

Um das Upgrade abzuschließen, muss auf der Seite ganz unten nun die Bezahlmethode ausgewählt werden.
Sobald ausgewählt drückt man den "***Upgrade durchführen***" Button und das Upgrade wird durchgeführt

![](https://screensaver01.zap-hosting.com/index.php/s/G6k56YGNsGQ6Kjf/preview)

## Valheim Plus Config

Um die Konfigurationsdatei zu öffnen, muss im Gameserver Interface die "**Configs**" Seite geöffnet werden, bei dieser ist dann die "*ValheimPlus: valheim_plus.cfg*" zu sehen.
Diese kann über das blaue Icon geöffnet werden, welches sich neben der Konfigurationsdatei befindet.

![](https://screensaver01.zap-hosting.com/index.php/s/W7wQncJXEaj6pzZ/preview)

Eine Liste sämtlicher in der Konfigurationsdatei nutzbaren Befehle:

### [Player]

|  Befehl   |           Werte          |                  Funktion               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   enabled     |        true / false      |     aktiviert bzw. deaktiviert Änderungen am Spieler    |
|   baseMegingjordBuff      |        150 (float)      |     erhöht Tragegewicht um 150    |
|   baseMaximumWeight    |        300 (float)           |     setzt das Maximale Gewicht auf 300 |
|   baseAutoPickUpRange   |           2 (float)              |  setzt die Reichweite zum aufheben von Items auf 2  |
|   disableCameraShake   |           true / false               |  aktiviert bzw. deaktiviert Kamera schütteln   |
|   experienceGainedNotifications   |           true / false               |  aktiviert bzw. deaktiviert die Anzeige für die erhaltene Erfahrungspunkte in der oberen linken Ecke    |

### [Food]

|  Befehl   |           Werte          |                  Funktion               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   enabled     |        true / false      |     aktiviert bzw. deaktiviert Änderungen am Essen   |
|   foodDuration      |        0-100%      |     verändert die Essensdauer um den gesetzten Prozentwert    |

### [Fermenter]

|  Befehl   |           Werte          |                  Funktion               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   enabled     |        true / false      |     aktiviert bzw. deaktiviert Änderungen am Fermenter    |
|   fermenterDuration      |        2400 (float) entspricht 48 ingame Stunden     |    setzt die Fertigungsdauer im Fermenter, je geringer der Wert desto schneller ist die Fertigung  |
|   fermenterItemsProduced      |        6 (integer)     |     setzt die Items welche im Fermenter produzierter werden können    |

### [Furnace]

|  Befehl   |           Werte          |                  Funktion               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   enabled     |        true / false      |     aktiviert bzw. deaktiviert Änderungen am Ofen    |
|   maximumOre      |        10 (integer)     |    setzt die maximale Anzahl an Erzen im Ofen  |
|   maximumCoal      |        20 (integer)     |     setzt die maximale Anzahl an Kohle im Ofen   |
|   productionSpeed      |        30 (float)     |     setzt die Fertigungsdauer im Ofen, je geringer der Wert desto schneller ist die Fertigung   |
|   coalUsedPerProduct      |        2 (integer)     |     setzt die Anzahl an Kohle welche für ein Produkt verwendet wird   |

### [Kiln]

|  Befehl   |           Werte          |                  Funktion               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   enabled     |        true / false      |     aktiviert bzw. deaktiviert Änderungen am Kiln    |
|   productionSpeed      |        15 (float)     |    setzt die Fertigungsdauer im Kiln, je geringer der Wert desto schneller ist die Fertigung   |
|   maximumWood      |        25 (integer)     |     setzt die maximale Anzahl an Holz im Kiln   |

### [Items]

|  Befehl   |           Werte          |                  Funktion               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   enabled     |        true / false      |     aktiviert bzw. deaktiviert Änderungen am Items    |
|   noTeleportPrevention      |        true / false     |    verhindert die Nutzung von Teleport  |
|   baseItemWeight      |        0 (float)     |     setzt das Gewicht von Items, -50% = weniger Item Gewicht, +50% = mehr Item Gewicht   |
|   itemStackMultiplier      |        0 (float)     |     setzt die maximale Anzahl an Items welche gestackt werden können, nur positive Werte erlaubt. 50 = 50% mehr maximal Stackbare Items. *Warnung* wenn du dies reduzierst wird alles was du mehr hast gelöscht   |

### [Building]

|  Befehl   |           Werte          |                  Funktion               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   enabled     |        true / false      |     aktiviert bzw. deaktiviert Änderungen am Gebäuden    |
|   noInvalidPlacementRestriction      |        true / false     |    entfert die *ungültige Platzierung* Beschränkung  |
|   noWeatherDamage      |       true / false      |    entfernt Schaden an Gebäuden welcher durch das Wetter entstehen würde (z.B. Regen)    |
|   maximumPlacementDistance      |        5 (float)     |    setzt die maximale Platzierung Distanz    |

### [Beehive]

|  Befehl   |           Werte          |                  Funktion               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   enabled     |        true / false      |     aktiviert bzw. deaktiviert Änderungen am Beehive    |
|   maximumHoneyPerBeehive      |        4 (integer)     |    setzt die maximale Anzahl an Honig aus dem Beehive  |
|   honeyProductionSpeed      |       1200 (float)  entspricht 24 ingame Stunden    |   setzt die Fertigungsdauer von Honig, je geringer der Wert desto schneller ist die Fertigung  |

### [Server]

|  Befehl   |           Werte          |                  Funktion               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   enabled     |      true / false      |     aktiviert bzw. deaktiviert Änderungen am Server    |
|   maxPlayers      |      10 (int)     |    setzt die Slots, wird durch den bestellten Wert bei UP- und Downgrades gesetzt  |
|   disableServerPassword      |     true / false      |    entfernt das Serverpasswort vom Server   |
|   enforceConfiguration      |      true / false     |    wenn aktiviert dürfen nur Spieler mit gleicher Konfiguration auf den Server joinen    |
|   enforceMod      |      true / false     |    wenn aktiviert dürfen nur Spieler mit gleicher Mod auf den Server joinen    |

### [Map]

|  Befehl   |           Werte          |                  Funktion               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   enabled     |      true / false      |     aktiviert bzw. deaktiviert Änderungen an der Map    |
|   exploreRadius      |      100 (float)     |    setzt den Radius um jeden Spieler, bei welchem die Map aufgedeckt wird  |
|   shareMapProgression      |     true / false      |    wenn aktiviert wird für jeden Spieler das Aufdecken der Map geteilt, nur Spieler die Sichtbar gestellt sind tragen dazu bei  |

### [Hotkeys]

Eine Liste der möglichen Tasten wäre ![hier](https://docs.unity3d.com/ScriptReference/KeyCode.html) zu sehen.

|  Befehl   |           Werte          |                  Funktion               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   rollForwards     |      F9      |     rolle nach vorne    |
|   rollBackwards      |      F10     |    rolle nach hinten  |
|   enterAdvancedBuildingMode      |     F1      |    friert Objekte ein und erlaubt die Nutzung von der erweiterten Steuerung   |
|   exitAdvancedBuildingMode      |      F3     |    stoppt den Modus der erweiterten Steuerung und entfriert die Objekte    |
|   enterAdvancedEditingMode      |      Keypad0     |    das angeschaute Objekt wird ausgewählt und mit AEM modifiziert    |
|   confirmPlacementOfAdvancedEditingMode      |     KeypadEnter      |    bestätigt die Änderung aller ausgewählten und modifizierten Objekte   |
|   resetAdvancedEditingMode      |      F7     |    setzt die Position und Rotation der ausgewählten Objekte mit AEM zurück    |
|   abortAndExitAdvancedEditingMode      |      F8     |    setzt die Position und Rotation der ausgewählten Objekte mit AEM zurück und beendet den AEM Modus  |

### [AdvancedBuildingMode]

|  Befehl   |           Werte          |                  Funktion               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   enabled     |      true / false      |     aktiviert bzw. deaktiviert Änderungen an dem erweiterten Baumodus    |

### [AdvancedEditingMode]

|  Befehl   |           Werte          |                  Funktion               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   enabled     |      true / false      |     aktiviert bzw. deaktiviert Änderungen an dem  erweiterter Bearbeitungsmodus |

### [Stamina]

|  Befehl   |           Werte          |                  Funktion               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   enabled     |      true / false      |     aktiviert bzw. deaktiviert Änderungen an der Ausdauer    |
|   dodgeStaminaUsage      |     10 (float)      |   setzt die Anzahl an Ausdauer für das Ausweichen   |
|   encumberedStaminaDrain      |     10 (float)      |   setzt die Anzahl an Ausdauer für den Ausdauerentzug bei Belastung  |
|   sneakStaminaDrain      |     5 (float)      |   setzt die Anzahl an Ausdauer für den Ausdauerentzug  beim Schleichen  |
|   runStaminaDrain      |     10 (float)      |   setzt die Anzahl an Ausdauer für den Ausdauerentzug beim Rennen |
|   staminaRegenDelay      |      1 (float)     |   setzt die Verzögerung für das Regenerieren von Ausdauer  |
|   staminaRegen      |      5 (float)     |   setzt die Anzahl an Ausdauer welche regeneriert wird  |
|   swimStaminaDrain      |     5 (float)      |   setzt die Anzahl an Ausdauer für den Ausdauerentzug beim Schwimmen   |
|   jumpStaminaUsage      |      10 (float)     |   setzt die Anzahl an Ausdauer für den Ausdauerentzug beim Springen   |

