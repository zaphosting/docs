---
id: valheim-plus
title: "Valheim: Valheim Plus Server"
description: "Entdecke, wie du dein Valheim-Erlebnis mit Valheim Plus durch verbesserte Features und Server-Upgrades auf das nächste Level bringst → Jetzt mehr erfahren"
sidebar_label: Valheim Plus
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

:::info
Valheim Plus ist eine clientseitige Modifikation. Sie ermöglicht dir Änderungen am Grundspiel.
:::

<InlineVoucher />

## Valheim Plus Installation Client

Zuerst musst du den Valheim-Ordner auf deinem PC öffnen.  
Dazu klickst du in deiner Steam-Bibliothek mit der rechten Maustaste auf Valheim, wählst "***Verwalten***" und dann "***Lokale Dateien durchsuchen***".

![](https://screensaver01.zap-hosting.com/index.php/s/oXaiLGR55Z9fH92/preview)

Nachdem der Ordner geöffnet ist, musst du die Datei "***WindowsClient.zip***" herunterladen.  
Die "***WindowsClient.zip***" kannst du [hier](https://github.com/valheimPlus/ValheimPlus/releases) herunterladen (unter "Assets").

![](https://screensaver01.zap-hosting.com/index.php/s/ZDsabTk4eMfQcFM/preview)

Danach entpackst du den Inhalt der "***WindowsClient.zip***" in den zuvor geöffneten Valheim-Server-Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/wiTfFmLetr9TmJX/preview)

Jetzt kannst du Valheim starten und die Einrichtung auf dem Client ist abgeschlossen.

## Valheim Plus Installation Server

Um das Spiel zu ändern, öffnest du zuerst den Spiele-Tab in deinem Server-Dashboard:

![](https://screensaver01.zap-hosting.com/index.php/s/YE2xKnqfrZfWE4J/preview)

Hier suchst du jetzt unter "Verfügbare Spiele" nach Valheim Plus und klickst auf den Download-Button:

![](https://screensaver01.zap-hosting.com/index.php/s/GF6Na4EPGiNQSDZ/preview)

Anschließend wird der Server neu installiert. Nach Abschluss der Neuinstallation kannst du unter "**Configs**" das Passwort entfernen und hast jetzt die Möglichkeit, auf mehr Slots upzugraden.

## Slots Upgrade

Um ein Slot-Upgrade durchzuführen, musst du die Funktion "**UP and Downgrade**" im Gameserver-Dashboard öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/SpAxfojkxY5wmsE/preview)

Wähle nun auf der UP and Downgrade-Seite die gewünschte Slot-Anzahl aus.

:::info
Hier musst du nur den "**Aufpreis**" zahlen, der für die verbleibende Laufzeit berechnet wird.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/jyZGRaKAZ7n5GkR/preview)

Um das Upgrade abzuschließen, wähle unten auf der Seite die Zahlungsmethode aus.  
Nach der Auswahl drückst du den "***Upgrade durchführen***"-Button und das Upgrade wird ausgeführt.

![](https://screensaver01.zap-hosting.com/index.php/s/3eB9FtgLzxBpPgB/preview)

## Valheim Plus Config

Um die Konfigurationsdatei zu öffnen, musst du die Seite "**Configs**" im Gameserver-Interface öffnen, wo du die "*ValheimPlus: valheim_plus.cfg*" findest.  
Diese kannst du über das blaue Icon neben der Konfigurationsdatei öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/grjGPr64RSs69xN/preview)

Eine Liste aller Befehle, die in der Konfigurationsdatei verwendet werden können:

### [Player]

| Befehl | Werte | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiviert oder deaktiviert Spieleränderungen |
| baseMegingjordBuff | 150 (float) | erhöht das Traggewicht um 150 |
| baseMaximumWeight | 300 (float) | setzt das maximale Gewicht auf 300 |
| baseAutoPickUpRange | 2 (float) | legt die Reichweite zum Aufnehmen von Items auf 2 fest |
| disableCameraShake | true / false | aktiviert oder deaktiviert Kamerawackeln |
| experienceGainedNotifications | true / false | aktiviert oder deaktiviert die Anzeige der erhaltenen Erfahrungspunkte oben links |

### [Food]

| Befehl | Werte | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiviert oder deaktiviert Änderungen am Essen |
| foodDuration | 0-100% | ändert die Dauer der Nahrung um den angegebenen Prozentwert |

### [Fermenter]

| Befehl | Werte | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiviert oder deaktiviert Änderungen am Fermenter |
| fermenterDuration | 2400 (float) entspricht 48 Ingame-Stunden | legt die Produktionszeit im Fermenter fest, je niedriger der Wert, desto schneller die Produktion |
| fermenterItemsProduced | 6 (integer) | legt die Anzahl der im Fermenter produzierten Items fest |

### [Furnace]

| Befehl | Werte | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiviert oder deaktiviert Änderungen am Ofen |
| maximumOre | 10 (integer) | legt die maximale Anzahl an Erzen im Ofen fest |
| maximumCoal | 20 (integer) | legt die maximale Anzahl an Kohle im Ofen fest |
| productionSpeed | 30 (float) | legt die Produktionszeit im Ofen fest, je niedriger der Wert, desto schneller die Produktion |
| coalUsedPerProduct | 2 (integer) | legt die Menge Kohle fest, die pro Produkt verbraucht wird |

### [Kiln]

| Befehl | Werte | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiviert oder deaktiviert Änderungen am Brennofen |
| productionSpeed | 15 (float) | legt die Produktionszeit im Brennofen fest, je niedriger der Wert, desto schneller die Produktion |
| maximumWood | 25 (integer) | legt die maximale Menge Holz im Brennofen fest |

### [Items]

| Befehl | Werte | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiviert oder deaktiviert Änderungen an Items |
| noTeleportPrevention | true / false | verhindert die Nutzung von Teleport |
| baseItemWeight | 0 (float) | legt das Gewicht von Items fest, -50% = weniger Itemgewicht, +50% = mehr Itemgewicht |
| itemStackMultiplier | 0 (float) | legt die maximale Stapelgröße von Items fest, nur positive Werte erlaubt. 50 = 50% mehr maximal stapelbare Items. *Achtung* wenn du diesen Wert verringerst, werden alle Items darüber gelöscht |

### [Building]

| Befehl | Werte | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiviert oder deaktiviert Änderungen am Bauen |
| noInvalidPlacementRestriction | true / false | entfernt die *ungültige Platzierung*-Beschränkung |
| noWeatherDamage | true / false | entfernt Wetterschäden an Gebäuden (z.B. durch Regen) |
| maximumPlacementDistance | 5 (float) | legt die maximale Platzierungsdistanz fest |

### [Beehive]

| Befehl | Werte | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiviert oder deaktiviert Änderungen am Bienenstock |
| maximumHoneyPerBeehive | 4 (integer) | legt die maximale Honigmenge pro Bienenstock fest |
| honeyProductionSpeed | 1200 (float) entspricht 24 Ingame-Stunden | legt die Produktionszeit für Honig fest, je niedriger der Wert, desto schneller die Produktion |

### [Server]

| Befehl | Werte | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiviert oder deaktiviert Änderungen am Server |
| maxPlayers | 10 (int) | legt die Slots fest, wird durch den bestellten Wert bei UP- und Downgrades gesetzt |
| disableServerPassword | true / false | entfernt das Serverpasswort vom Server |
| enforceConfiguration | true / false | wenn aktiviert, dürfen nur Spieler mit derselben Konfiguration dem Server beitreten |
| enforceMod | true / false | wenn aktiviert, dürfen nur Spieler mit derselben Mod dem Server beitreten |

### [Map]

| Befehl | Werte | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiviert oder deaktiviert Änderungen an der Karte |
| exploreRadius | 100 (float) | legt den Radius um jeden Spieler fest, in dem die Karte aufgedeckt wird |
| shareMapProgression | true / false | wenn aktiviert, wird das Aufdecken der Karte für alle Spieler geteilt, nur sichtbare Spieler tragen dazu bei |

### [Hotkeys]

Eine Liste möglicher Steuerungen findest du [hier](https://docs.unity3d.com/ScriptReference/KeyCode.html).

| Befehl | Werte | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| rollForwards | F9 | vorwärts rollen |
| rollBackwards | F10 | rückwärts rollen |
| enterAdvancedBuildingMode | F1 | friert Objekte ein und erlaubt erweiterte Steuerung |
| exitAdvancedBuildingMode | F3 | beendet den erweiterten Steuerungsmodus und taut Objekte auf |
| enterAdvancedEditingMode | Keypad0 | das betrachtete Objekt wird ausgewählt und mit AEM bearbeitet |
| confirmPlacementOfAdvancedEditingMode | KeypadEnter | bestätigt die Änderung aller ausgewählten und bearbeiteten Objekte |
| resetAdvancedEditingMode | F7 | setzt Position und Rotation der ausgewählten Objekte mit AEM zurück |
| abortAndExitAdvancedEditingMode | F8 | setzt Position und Rotation der ausgewählten Objekte mit AEM zurück und verlässt den AEM-Modus |

### [AdvancedBuildingMode]

| Befehl | Werte | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiviert oder deaktiviert Änderungen am erweiterten Baumodus |

### [AdvancedEditingMode]

| Befehl | Werte | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiviert oder deaktiviert Änderungen am erweiterten Bearbeitungsmodus |

### [Stamina]

| Befehl | Werte | Funktion |
| :--------: | :--------------------------: | :---------------------------------:  |
| enabled | true / false | aktiviert oder deaktiviert Änderungen an der Ausdauer |
| dodgeStaminaUsage | 10 (float) | legt die Ausdauer fest, die für Ausweichmanöver verbraucht wird |
| encumberedStaminaDrain | 10 (float) | legt die Ausdauer fest, die beim Tragen von Last verbraucht wird |
| sneakStaminaDrain | 5 (float) | legt die Ausdauer fest, die beim Schleichen verbraucht wird |
| runStaminaDrain | 10 (float) | legt die Ausdauer fest, die beim Laufen verbraucht wird |
| staminaRainDelay | 1 (float) | legt die Verzögerung für die Ausdauerregeneration fest |
| staminaRain | 5 (float) | legt die Menge der regenerierten Ausdauer fest |
| swimStaminaDrain | 5 (float) | legt die Ausdauer fest, die beim Schwimmen verbraucht wird |
| jumpStaminaUsage | 10 (float) | legt die Ausdauer fest, die beim Springen verbraucht wird |


<InlineVoucher />