---
id: valheim_plus
title: Valheim: Valheim Plus-Server
description: Informationen zu Valheim-Serven von ZAP-Hosting, auf denen die Valheim Plus Mod vorinstalliert ist - ZAP-Hosting.com Dokumentationen
sidebar_label: Valheim Plus
---

## 📋 Vorwort

> Valheim Plus ist eine Clientseitige Modifikation. Sie ermöglicht es einige Änderungen am Spiel vorzunehmen.

## 🖥️ Valheim Plus Installation auf dem Client

Zuerst muss der Valheim Ordner auf dem PC geöffnet werden. 
Dafür bei Steam in der Bibliothek 'Rechtsklick' auf Valheim, bei den Optionen dann auf "***Verwalten***" und dort auf "***Lokale Dateien durchsuchen***".

![image](https://user-images.githubusercontent.com/13604413/159180035-ac9c6116-bbf9-44c2-9927-7c31cbebbf4c.png)

Sobald dieser Ordner geöffnet wurde, muss nun die "***WindowsClient.zip***" heruntergeladen werden. 
Die "***WindowsClient.zip***" kann [hier](https://github.com/valheimPlus/ValheimPlus/releases) (runterscrollen bis "Assets") heruntergeladen werden.


![image](https://user-images.githubusercontent.com/13604413/159180038-9eb609a1-3e14-461b-b7ae-5afb5d3bbc89.png)

Im Anschluss muss nur noch der Inhalt der "***WindowsClient.zip***" in den vorher geöffneten Valheim Server entpackt werden

![image](https://user-images.githubusercontent.com/13604413/159180041-de775b09-a531-4d37-b232-7bf06e3f8130.png)

Dann kann Valheim gestartet werden und die Einrichtung bei dem Client ist beendet.

## ➕ Valheim Plus Installation Server

Um das Spiel zu wechseln, öffnen wir zuerst das Spiele-Tab auf unserem Server:

![image](https://user-images.githubusercontent.com/26007280/189885529-009cc0c7-356c-4ab9-83f0-e4c69533df23.png)

Hier suchen wir unter "Verfügbare Spiele" nun nach Valheim Plus und klicken auf den Download Button:

![image](https://user-images.githubusercontent.com/26007280/189885558-f233535b-8cde-4efa-896f-13b9a82cd857.png)

Danach wird der Server neu installiert. Nach der Neuinstallation hat man die Möglichkeit das Passwort bei "**Configs**" zu entfernen und man kann nun auf mehr Slots upgraden.

## ⬆️ Slots Upgrade

Um nun ein Slotupgrade durchführen zu können, muss die "**UP- und Downgrade**" Funktion im Gameserver Dashboard geöffnet werden.

![image](https://user-images.githubusercontent.com/26007280/189885583-b4086c3d-4891-4d22-9ba6-8bec12118916.png)

Bei der Upgrade-Seite wählt man nun die gewünschte Anzahl an Slots aus. 

> Hierbei muss nur der "**Aufpreis**" bezahlt werden, dieser berechnet sich für die noch verbliebene Laufzeit

![image](https://user-images.githubusercontent.com/13604413/159180047-0089d7b6-3a2f-4ce1-9c6f-daa2eb5acc64.png)

Um das Upgrade abzuschließen, muss auf der Seite ganz unten nun die Bezahlmethode ausgewählt werden.
Sobald ausgewählt drückt man den "***Upgrade durchführen***" Button und das Upgrade wird durchgeführt

![image](https://user-images.githubusercontent.com/13604413/159180050-43c2fe91-48a5-413d-ac17-f451858bed7d.png)

## 🔧 Valheim Plus Config

Um die Konfigurationsdatei zu öffnen, muss im Gameserver Interface die "**Configs**" Seite geöffnet werden, bei dieser ist dann die "*ValheimPlus: valheim_plus.cfg*" zu sehen.
Diese kann über das blaue Icon geöffnet werden, welches sich neben der Konfigurationsdatei befindet.

![image](https://user-images.githubusercontent.com/13604413/159180059-4d68cc14-b0d9-4a6e-8804-4c48647f503a.png)

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

Eine Liste der möglichen Tasten wäre [hier](https://docs.unity3d.com/ScriptReference/KeyCode.html) zu sehen.

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
