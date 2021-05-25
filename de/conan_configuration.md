---
id: conan_configuration
title: Conan Exiles: den eigenen Server konfigurieren
description: Informationen, wie du deinen Conan Exiles-Server von ZAP-Hosting via dem Web Interface konfigurieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Server Konfiguration

---

## Server Konfiguration

Conan Exiles Server können umfangreich konfiguriert werden. Die Konfiguration des Servers findet über die Config-Dateien statt. Diese findest du im Webinterface in der Gameserver Verwaltung unter Configs. Öffne dazu die **ServerSettings.ini** Config-Datei.



![img](https://screensaver01.zap-hosting.com/index.php/s/YAxj2WR3R9BRwic/preview)



Im Folgenden findest du eine kategorisierte Übersicht aller relevanten Befehle, mit der du deinen Server nach deinen wünschen, beliebig konfigurieren kannst. Gewisse Befehle können in der Config standardmäßig noch nicht vorhanden sein. Diese können einfach im nachhinein noch  an einer freien Stelle hinzugefügt werden. 



## Allgemein

In den allgemeinen Einstellungen findest du alle relevanten Befehle zum Anpassen des Servername, Passwörter, Anti-Cheat. 

| Einstellung                                | Beschreibung                                                 | Config-Befehl                   |
| ------------------------------------------ | ------------------------------------------------------------ | ------------------------------- |
| Servername                                 | Definiert den Namen des Servers                              | ServerName="..."                |
| Spieleranzahl                              | Maximale Spieleranzahl die gleichzeitig verbunden sein kann (abhängig von der gebuchten Slotmenge) | Paketabhängig                   |
| Message Of The Day                         | Willkommensnachricht                                         |                                 |
| Serverpasswort                             | Zugriffsrechte durch das setzen eines Passworts einschränken | ServerMessageOfTheDay="..."     |
| Adminpasswort                              | Zugang zum Admin werden. Siehe mehr dazu in der Admin werden Anleitung | AdminPassword="..."             |
| BattlEye aktivieren                        | Aktiviert den BattlEye-AntiCheat-Schutz                      | IsBattlEyeEnabled=              |
| PVP aktivieren                             | Aktiviert oder deaktiviert PVP. 1 = aktiviert, 0 = deaktiviert | PVPEnabled=                     |
| Zeitbegrenztes PvP                         | Wenn diese Option aktiviert ist, dann ist der Kampf zwischen Spielern nur innerhalb der festgelegten Zeiträume möglich | RestrictPVPTime=                |
| PvP-Blitz aktiviert                        | Aktiviert oder deaktivier PVPBlitz. 1 = aktiviert, 0 = deaktiviert (Standard) | PVPBlitzServer=                 |
| Zeitbegrenzter PvP-Gebäudeschaden          | Wenn diese Option aktiviert ist, dann können die Spieler nur innerhalb der festgelegten Zeiträume die Strukturen anderer Spieler angreifen und zerstören | RestrictPVPBuildingDamageTime=  |
| Community                                  | Definiert den Community Style: 0=None 1=Purist 2=Relaxed 3=Hard Core 4=Role Playing 5=Experimental | ServerCommunity=                |
| Server Region                              | Das Auswählen einer Serverregion wirkt sich auf die Filterung deines Servers in der Liste aus. Bitte wählen deine Region aus, damit Spieler die ebenfalls aus der Region kommen den Server finden können. 0 = Europa, 1 = Nordamerika, 2 = Asien, 3 = Australien, 4 = Südamerika, 5 = Japan | serverRegion=                   |
| Kein Eigentum                              | Wenn diese Option aktiviert ist, dann gibt es keine Eigentumsregeln auf dem Server. Das bedeutet, dass alle Spieler alle Truhen plündern, alle Maschinen benutzen, alle Gebäude abbauen können usw. 1 = aktiviert, 0 = deaktiviert (Standard) | NoOwnership=                    |
| Container ignorieren Eigentumsverhältnisse | Wenn diese Option aktiviert ist, dann sind alle Behälter für andere Spieler offen. 1 = aktiviert, 0 = deaktiviert | ContainersIgnoreOwnership=      |
| Spielereigene Strukturen beschädigen       | Wenn diese Option aktiviert ist, dann können Spieler die Strukturen anderer angreifen und zerstören. 1 = aktiviert, 0 = deaktiviert | CanDamagePlayerOwnedStructures= |
| Spielerschaden                             | Wenn diese Option aktiviert ist, dann können Spieler von anderen Spielern verletzt werden. 1 = aktiviert, 0 = deaktiviert | bCanBeDamaged=                  |
| Sandsturm aktivieren                       | Dies ermöglicht es, dass Sandstürme periodisch über die Verbannten Länder fegen. | EnableSandStorm=                |
| Maximale Clan-Größe                        | Damit wird die maximal zulässige Größe von Clans auf dem Server festgelegt. Sobald ein Clan das Limit erreicht, können keine neuen Mitglieder mehr beitreten. | clanMaxSize=                    |
| Maximale Nacktheit                         | Diese Einstellung bestimmt die maximale Nacktheit auf dem Server. Dadurch wird die Client-Einstellung außer Kraft gesetzt. Wenn also ein Server auf "Keine Nacktheit" eingestellt ist, kann ein Spieler, selbst wenn er seinen Client auf "Volle Nacktheit" einstellt, auf diesem Server keine Nacktheit sehen. Wenn der Server jedoch volle Nacktheit zulässt und ein Spieler seinen Client auf teilweise Nacktheit einstellt, zeigt der Client korrekt nur teilweise Nacktheit an. 0 = keine, 1 = teilweise, 2 = voll | MaxNudity=                      |
| Voice Chat                                 | Legt fest, ob der Voice-Chat im Spiel aktiviert sein soll oder nicht. 1 = aktiviert, 0 = deaktiviert | serverVoiceChat=                |



## Fortschritt (Erfahrung)

In den Fortschritt Einstellungen findest du alle relevanten Befehle zum Anpassen der XP-Erfahrung, welche Spieler erhalten können.

| Einstellung                    | Beschreibung                                                 | Config-Befehl              |
| ------------------------------ | ------------------------------------------------------------ | -------------------------- |
| Spieler XP Rate Multiplikator  | Dieser Multiplikator wirkt sich auf alle Arten von XP aus, die Spieler erhalten. Damit lässt sich der Spielerfortschritt für alle Aktivitäten anpassen. 0.5 = 50 XP, 1.0 = 100 XP,  1.5 = 150 XP | PlayerXPRateMultiplier=    |
| Spieler XP Zeit-Multiplikator  | In Conan Exiles erhalten Spieler XP passiv im Laufe der Zeit, allein für das Überleben. Dieser Befehl vervielfacht die Geschwindigkeit, mit der Spieler diese XP erhalten. 0.5 = 50 XP, 1.0 = 100 XP,  1.5 = 150 XP | PlayerXPTimeMultiplier=    |
| Spieler XP Kill-Multiplikator  | Dies multipliziert die Menge an XP, die Spieler für das Töten von Monstern und Spielern in Conan Exiles erhalten. 0.5 = 50 XP, 1.0 = 100 XP,  1.5 = 150 XP | PlayerXPKillMultiplier=    |
| Spieler-XP Ernte-Multiplikator | Dies multipliziert die Menge an XP, die Spieler für das Ernten in Conan Exiles erhalten. 0.5 = 50 XP, 1.0 = 100 XP,  1.5 = 150 XP | PlayerXPHarvestMultiplier= |
| Spieler-XP Craft-Multiplikator | Dies multipliziert die Menge an XP, die Spieler für das Crafting in Conan Exiles erhalten. 0.5 = 50 XP, 1.0 = 100 XP,  1.5 = 150 XP | PlayerXPCraftMultiplier=   |



## Zeit

In den Zeit Einstellungen findest du alle relevanten Befehle zum Anpassen der Zeit. Dadurch können Tage und Nächste beliebig lang oder kurz konfiguriert werden.

| Einstellung                    | Beschreibung                                                 | Config-Befehl         |
| ------------------------------ | ------------------------------------------------------------ | --------------------- |
| Tages Zyklus Geschwindigkeit   | Hiermit wird die Geschwindigkeit des gesamten 24-Stunden-Tageszyklus vervielfacht. Einzelne Teile des Tages können in den Einstellungen unten angepasst werden. Beachten dabei, dass der Multiplikator zusätzlich zu den unten aufgeführten Änderungen der Einstellungen angewendet wird. | DayCycleSpeedScale=   |
| Tageszeit Geschwindigkeit      | Tagesstunden in Conan Exiles liegen zwischen 7:00 und 16:59 Uhr Spielzeit. Durch Ändern dieses Multiplikators wird die Zeit, die zwischen diesen Tagesstunden liegt, vermehrt. | DayTimeSpeedScale=    |
| Nachtzeit Geschwindigkeit      | Nachtstunden in Conan Exiles liegen zwischen 19:00 und 4:59 Uhr Spielzeit. Durch Ändern dieses Multiplikators wird die Zeit, die zwischen diesen Nachtstunden liegt, vermehrt. | NightTimeSpeedScale=  |
| Dämmerungszeit Geschwindigkeit | Die Dämmerung in Conan Exiles liegt zwischen 5:00 und 6:59 Uhr. Die Abenddämmerung liegt zwischen 17:00 und 18:59 Uhr. Das Ändern dieses Multiplikators multipliziert die Zeit, die im Zeitraum der Dämmerung und der Abenddämmerung verbracht wird. | DawnDuskSpeedScale=   |
| Aufholzeit nutzen              | Aktiviert oder deaktiviert die Verwendung der Catch-up-Zeitmechanik auf dem Server. true = aktiviert, false = deaktiviert | UseClientCatchUpTime= |
| Zeit aufholen                  | Um neuen Spielern einen reibungslosen Start zu ermöglichen, hat Conan Exiles die Möglichkeit, einen Client-PC dazu zu zwingen, zu einer bestimmten Tageszeit zu starten, unabhängig von der Serverzeit. Wenn diese Einstellung angewendet wird, starten neue Charaktere zur angegebenen Zeit und spielen dann zu dieser Tageszeit, bis der Server sie "einholt". Wir empfehlen, dies nicht auf die Nachtstunden einzustellen. | ClientCatchUpTime=    |



## Überleben

In den Überleben Einstellungen findest du alle relevanten Befehle zum Anpassen der Überlebenseinstellungen. Diese beinhaltet zum Beispiel wie viel Leben ein Spieler haben kann, wie schnell er sich regeneriert und vieles mehr. 

| Einstellung                                                  | Beschreibung                                                 | Config-Befehl                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------------------- |
| Spieler-Gesundheitsmultiplikator                             | Dies multipliziert unmittelbar den Gesundheitswert des Spielers. 0,5 = 50 HP, 1.0 = 100 HP (Standard), 1.5 = 150 HP | PlayerHealthMultiplier=            |
| Geschwindigkeit für die Gesundheitsregeneration von Spielern | Multipliziert die passive Gesundheitsregenerationsgeschwindigkeit des Spielers. 0,5 = 2,5 HP / Sekunde, 1.0 = 5.0 HP / Sekunde (Standard), 1.5 = 7.5 HP / Sekunde | PlayerHealthRegenSpeedScale=       |
| Spieler Ausdauer-Multiplikator                               | Multipliziert die Ausdauermenge des Spielers. 0.5 = 50 Ausdauer, 1.0 = 100 Ausdauer (Standard), 1.5 = 150 Ausdauer | PlayerStaminaMultiplier=           |
| Spieler Sprint-Geschwindigkeit                               | Definiert die Sprintgeschwindigkeit des Spielers. 0,5 = 1 m/s, 1,0 = 2 m/s (Standard), 1,5 = 3 m/s | PlayerSprintSpeedScale=            |
| Spieler Ausdauer-Nutzung-Multiplikator                       | Erhöht oder verringert die Menge an Ausdauer, die Spieler pro Aktivität verbrauchen | PlayerStaminaCostMultiplier=       |
| Spieler Ausdauer-Sprint Nutzung-Multiplikator                | Er erhöht oder verringert die Menge an Ausdauer, die Spieler pro Sprint verbrauchen | PlayerStaminaCostSprintMultiplier= |
| Spieler Ausdauer-Regenerationsgeschwindigkeit                | Multipliziert die passive Ausdauerregenerationsgeschwindigkeit des Spielers. 0 = kein Verlust, 0.5 = 1.0 Wasserverlust / Sekunde, 1.0 = 2.0 Wasserverlust / Sekunde (*Standard), 1.5 = 3.0 Wasserverlust / Sekunde | PlayerStaminaRegenSpeedScale=      |
| Spieler Aktiv-Durst-Multiplikator                            | Skaliert die Geschwindigkeit, mit der ein Spieler Wasser aktiv gewinnt oder verliert. 0 = kein Verlust, 0.5 = 1.0 Wasserverlust / Sekunde, 1.0 = 2.0 Wasserverlust / Sekunde (*Standard), 1.5 = 3.0 Wasserverlust / Sekunde | PlayerActiveThirstMultiplier=      |
| Spieler Passiv-Durst-Multiplikator                           | Skaliert die Geschwindigkeit, mit der ein Spieler Wasser passiv gewinnt oder verliert. 0 = kein Verlust, 0.5 = 1.0 Wasserverlust / Sekunde, 1.0 = 2.0 Wasserverlust / Sekunde (Standard), 1.5 = 3.0 Wasserverlust / Sekunde | PlayerIdleThirstMultiplier=        |
| Spieler Offline Durst-Multiplikator                          | Skaliert die Geschwindigkeit, mit der ein Spieler Wasser gewinnt oder verliert, während er offline ist. 0 = kein Verlust, 0.5 = 1.0 Wasserverlust / Sekunde, 1.0 = 2.0 Wasserverlust / Sekunde (Standard), 1.5 = 3.0 Wasserverlust / Sekunde | PlayerOfflineThirstMultiplier=     |
| Spieler Aktiv Hunger-Multiplikator                           | Skaliert die Geschwindigkeit, mit der ein Spieler Nahrung aktiv gewinnt oder verliert. 0 = kein Verlust, 0.5 = 1.0 Wasserverlust / Sekunde, 1.0 = 2.0 Wasserverlust / Sekunde (Standard), 1.5 = 3.0 Wasserverlust / Sekunde | PlayerActiveHungerMultiplier=      |
| Spieler Inaktivität Hunger-Multiplikator                     | Skaliert die Geschwindigkeit, mit der ein Spieler Nahrung passiv gewinnt oder verliert. 0 = kein Verlust, 0.5 = 1.0 Wasserverlust / Sekunde, 1.0 = 2.0 Wasserverlust / Sekunde (Standard), 1.5 = 3.0 Wasserverlust / Sekunde. | PlayerIdleHungerMultiplier=        |
| Spieler Offline Hunger-Multiplikator                         | Skaliert die Geschwindigkeit, mit der ein Spieler Nahrung gewinnt oder verliert, während er offline ist. 0 = kein Verlust, 0.5 = 1.0 Wasserverlust / Sekunde, 1.0 = 2.0 Wasserverlust / Sekunde (Standard), 1.5 = 3.0 Wasserverlust / Sekunde | PlayerOfflineHungerMultiplier=     |
| Ausgeloggte Spieler bleiben in der Welt                      | Wenn diese Option auf True gesetzt ist, verbleiben Spielerkörper in der Welt in einem unbewussten Zustand und bei False werden Spielerkörper aus der Welt entfernt, wenn sie offline sind. (Standard: True) | LogoutCharactersRemainInTheWorld=  |
| Ausrüstung beim Tod verlieren                                | Wenn True, lassen Spieler, die getötet werden, ihre ausgerüsteten Gegenstände fallen, wenn sie respawnen. Wenn False, werden Spieler, die sterben, mit ihrer gesamten Ausrüstung wiederbelebt. (Standardwert True) | DropEquipmentOnDeath=              |
| Elemente der Shortcutleiste beim Tod löschen                 | Wenn True gesetzt ist, dann verlieren Spieler, die getötet werden, die Gegenstände in ihren Quickbars, wenn sie wiederbelebt werden. Wenn False, werden getötete Spieler mit diesen Gegenständen wiederbelebt. (Standardwert True) | DropShortcutbarOnDeath=            |
| Den Rucksack beim Tod verlieren                              | Wenn True, dann verlieren getötete Spieler beim Respawn die Gegenstände in ihrem Rucksack. Wenn False, dann werden Spieler, die sterben, mit dem Inhalt ihres Rucksacks wiederbelebt.  (Standardwert True) | DropBackpackOnDeath=               |
| Jeder kann Leichen plündern                                  | Wenn True, dann kann jeder die Leiche eines toten Spielers plündern. Wenn False, kann nur der Spieler Gegenstände von seiner eigenen Leiche bergen.  (Standardwert True) | EverybodyCanLootCorpse=            |
| Thrall Korruptionsentfernung Multiplikator                   | Das Erhöhen dieses Wertes erhöht die Geschwindigkeit, mit der Sklavenhalter die Korruption von Spielern entfernen. Wenn der Wert gesenkt wird, verringert sich die Geschwindigkeit | ThrallCorruptionRemovalMultiplier= |
| Spieler Korruptionsgewinn-Multiplikator                      | Erhöht die Korruption, die den Spielern gegeben wird um ein Vielfaches. | PlayerCorruptionGainMultiplier=    |



## Kampf

In den Kampf-Einstellungen findest du alle relevanten Befehle zum Anpassen des Schadens. Dies beinhaltet wie viel ein Spieler an Schaden machen kann, wie viel er einstecken kann und vieles mehr. 

| Einstellung                                      | Beschreibung                                                 | Config-Befehl                  |
| ------------------------------------------------ | ------------------------------------------------------------ | ------------------------------ |
| Spieler Schaden-Multiplikator                    | Erhöht den Schaden, den ein Spieler verursacht um ein Vielfaches. 0 = kein Schaden verursacht, 0.5 = 10 zugefügter Schaden, 1.0 = 20 zugefügter Schaden (Standard), 1.5 = 30 zugefügter Schaden | PlayerDamageMultiplier=        |
| Spieler Schaden nehmen Multiplikator             | Erhöht den Schaden, den ein Spieler erleidet um ein Vielfaches. 0 = kein Schaden verursacht, 0.5 = 10 zugefügter Schaden, 1.0 = 20 zugefügter Schaden (Standard), 1.5 = 30 zugefügter Schaden | PlayerDamageTakenMultiplier=   |
| Diener-Schaden-Multiplikator                     | Erhöht den Schaden, den Thralls und Haustiere verursachen um ein Vielfaches. 0 = kein Schaden verursacht, 0.5 = 10 zugefügter Schaden, 1.0 = 20 zugefügter Schaden (Standard), 1.5 = 30 zugefügter Schaden | MinionDamageMultiplier=        |
| Multiplikator für erlittenen Schaden bei Dienern | Erhöht den Schaden, den Thralls und Haustiere erleiden können um ein Vielfaches. 0 = kein Schaden verursacht, 0.5 = 10 zugefügter Schaden, 1.0 = 20 zugefügter Schaden (Standard), 1.5 = 30 zugefügter Schaden | MinionDamageTakenMultiplier=   |
| NPC-Schadensmultiplikator                        | Erhöht den Schaden, den NPCs und Monster verursachen um ein Vielfaches. 0 = kein Schaden verursacht, 0.5 = 10 zugefügter Schaden, 1.0 = 20 zugefügter Schaden (Standard), 1.5 = 30 zugefügter Schaden | NPCDamageMultiplier=           |
| NPC-Multiplikator für erlittenen Schaden         | Erhöht den Schaden, den NPCs und Monster erleiden, um ein Vielfaches. | NPCDamageTakenMultiplier=      |
| NPC-Gesundheitsmultiplikator                     | Erhöht die Gesundheit aller NPCs.                            | NPCHealthMultiplier=           |
| NPC-Respawn-Multiplikator                        | Erhöht die Geschwindigkeit, mit der NPCs nach dem Sterben in der Welt wiederbelebt werden. Zu beachten ist, dass derzeit viele NPCs diesen Wert NICHT beachten. 0 = Never respawn (Untested), 0.5 = 15 seconds, 1.0 = 30 seconds (Default), 1.5 = 45 seconds | NPCRespawnMultiplier=          |
| Langlebigkeit Schadensmultiplikator              | Verändert die Menge des Haltbarkeitsschadens, den ein Gegenstand bei Verwendung oder Beschädigung nimmt. Das Erhöhen oder Verringern dieses Wertes wirkt sich direkt darauf aus, wie lange Waffen, Werkzeuge und Rüstungen halten. 0 = Unverwundbare Waffen/Werkzeuge, 0,5 = 5 Haltbarkeitsverlust pro Treffer, 1,0 = 10 Haltbarkeitsverlust pro Treffer (Standard), 1,5 = 15 Haltbarkeitsverlust pro Treffer | DurabilityMultiplier=          |
| Schild-Haltbarkeitsmultiplikator                 | Ändert die Höhe des Haltbarkeitsschadens, den ein Schild beim Blockieren erleidet. Das Erhöhen oder Verringern dieses Wertes wirkt sich direkt auf die Haltbarkeit von Schilden aus. 0 = Unverwundbare Schilde, 0.5 = 5 Haltbarkeitsverluste pro Treffer, 1.0 = 10 Haltbarkeitsverluste pro Treffer (Standard), 1.5 = 15 Haltbarkeitsverluste pro Treffer | ShieldDurabilityMultiplier=    |
| Thrall-Aufwachzeit                               | Bestimmt die Zeitspanne, die ein Sklave bewusstlos bleibt. 0 = Thralls wachen sofort auf (ungetestet), 300 = Aufwachen nach 5 Minuten, 600 = Aufwachen nach 10 Minuten (Standard), 900 = Aufwachen nach 15 Minuten | UnconsciousTimeSeconds=        |
| Thrall-Schaden bei Bewusstlosigkeit              | Erhöht den Schaden, den ein Sklave erleidet, wenn er bewusstlos ist. | ConciousnessDamageMultiplier=  |
| Avatar-Lebensdauer                               | Bestimmt die Zeitspanne, die ein Avatar in der Welt am Leben bleiben kann. | AvatarLifetime=                |
| Avatare deaktivieren                             | True: Avatare können auf diesem Server nicht beschworen werden, False: Avatare können auf diesem Server beschworen werden. | AvatarsDisabled=               |
| Avatar Beschwörungszeit                          | Die benötigte Zeit, um einen Avatar zu beschwören.           | AvatarSummonTime=              |
| Avatar-Kuppel Dauer-Multiplikator                | Legt fest, wie lange Avatarkuppeln dauern.                   | AvatarDomeDurationMultiplier=  |
| Benachrichtigungen bei Landfehlern deaktivieren  | Benachrichtigungen bei Landfehlern deaktivieren              | DisableLandclaimNotifications= |



## Ernte

In den Ernte-Einstellungen findest du alle relevanten Befehle zum Anpassen der Ernte. Dies beinhaltet wie schnell etwas gefarmt werden kann, wie oft Ressourcen respawnen, etc.

| Einstellung                                     | Beschreibung                                                 | Config-Befehl                   |
| ----------------------------------------------- | ------------------------------------------------------------ | ------------------------------- |
| Item Verderblichkeitsskala                      | Beeinflusst die Zeitspanne, in der Lebensmittel vor dem Verderben haltbar sind. 0 = Nie verderben, 0,5 = 4 Minuten, 1,0 = 2 Minuten (Standard), 1,5 = 1 Minute | ItemSpoilRateScale=             |
| Erntemenge Multiplikator                        | Erhöht die Menge die beim Ernten von Ressourcen gesammelt werden kann. 1.0 = 1 Ressource (Standard), 2.0 = 2 Ressourcen | HarvestAmountMultiplier=        |
| Ressource Respawn Geschwindigkeit Multiplikator | Erhöht die Geschwindigkeit, mit der Ressourcen nach dem Ernten wieder wachsen. 0,5 = 7,5 Minuten, 1,0 = 15 Minuten (Voreinstellung), 1,5 = 30 Minuten | ResourceRespawnSpeedMultiplier= |
| Grundstücksanspruch Radius-Multiplikator        | Erhöht und verringert den Radius, in dem der Landanspruch angewendet wird. Dies beeinflusst das Respawn von Ressourcen und NPCs sowie die Fähigkeit anderer Spieler, Land in der Nähe zu beanspruchen. 0,5 = 10 Meter, 1,0 = 20 Meter (Standard), 1,5 = 30 Meter | LandClaimRadiusMultiplier=      |



## Crafting

In den Crafting-Einstellungen findest du alle relevanten Befehle zum Anpassen des Crafting. Dies beinhaltet wie schnell Dinge gecraftet werden können. 

| Einstellung                                  | Beschreibung                                                 | Config-Befehl                       |
| -------------------------------------------- | ------------------------------------------------------------ | ----------------------------------- |
| Zeitmultiplikator für das Crafting           | Das Erhöhen des Wertes erhöht die Dauer, die für die Herstellung von Gegenständen benötigt wird. Wenn der Wert verringert wird, dann verringert sich die Herstellungszeit | CraftingTimeMultiplier=             |
| Zeitmultiplikator für das Sklavenhandwerk    | Das Erhöhen des Wertes erhöht die Zeit, die für die Ausbildung eines Sklaven benötigt wird. Wenn der Wert verringert wird, dann verringert sich die Trainingszeit | ThrallCraftingTimeMultiplier=       |
| Multiplikator für Kraftstoffverbrennungszeit | Erhöhen des Wertes erhöht die Verbrennungszeit der Brennstoffeinheiten. Wenn der Wert verringert wird, dann verkürzt sich die Brenndauer des Brennstoffs | FuelBurnTimeMultiplier=             |
| Multiplikator für Handwerksgeschwindigkeit   | Hierdurch wird die Geschwindigkeit, mit der Gegenstände hergestellt werden können, vervielfacht. Beachten dabei, dass die Verwendung eines Wheel of Pain zur Umwandlung von Thralls als Handwerk gilt. 0 oder weniger = Sofort, 0,5 = 10 Sekunden, 1,0 = 20 Sekunden (Standard), 1,5 = 30 Sekunden | ItemConvertionMultiplier=           |
| Multiplikator für Strukturschäden            | Erhöht den Schaden, den eine Verteidigungsstruktur (z. B. Palisade) verursachen kann. 0 = kein Schaden (ungetestet), 0.5 = 10 Schaden, 1.0 = 20 Schaden (Standard), 1.5 = 30 Schaden | StructureDamageMultiplier=          |
| Multiplikator für erlittenen Strukturschaden | Erhöht den Schaden, den eine Struktur bei einem Angriff einstecken kann. 0 = kein Schaden (ungetestet), 0.5 = 10 Schaden, 1.0 = 20 Schaden (Standard), 1.5 = 30 Schaden | StructureDamageTakenMultiplier=     |
| Multiplikator Struktur Gesundheit            | Erhöht die Anzahl der Lebenspunkte, die eine Struktur hat. 0,5 = 500 HP, 1,0 = 1000 HP (Standard), 1,5 = 1500 HP | StructureHealthMultiplier=          |
| Spielerbelastung Multiplikator               | Dies erhöht die Belastbarkeit, die ein Gegenstand dem Spieler hinzufügt um ein Vielfaches. 0.5 = 2.5 Gewicht addiert, 1.0 = 5.0 Gewicht addiert (Standard), 1.5 = 7.5 Gewicht addiert | PlayerEncumbranceMultiplier=        |
| Spielerbelastung Strafmultiplikator          | Erhöht die Strafen, die ein Spieler bekommt, wenn er belastet wird. 0,5 = 35 Bewegungsstrafe bei 99 %, 1,0 = 70 Bewegungsstrafe bei 99 % (Standard), 1,5 = 125 Bewegungsstrafe bei 99 % | PlayerEncumbrancePenaltyMultiplier= |



## Verfall

In den Verfall-Einstellungen findest du alle relevanten Befehle zum Anpassen des Verfalls von Gebäuden. 

| Einstellung                        | Beschreibung                                                 | Config-Befehl                |
| ---------------------------------- | ------------------------------------------------------------ | ---------------------------- |
| Verfall von Gebäuden               | Wenn diese Option aktiviert ist, dann wird der Verfall von Gebäuden im Laufe der Zeit deaktiviert | DisableBuildingAbandonment=  |
| Gebäude-Verfallszeit-Multiplikator | Das Erhöhen des Wertes erhöht die Zeit, die Gebäudeteile und Strukturen zum Verfall benötigen. Das Senken des Wertes verringert die Zerfallszeit | BuildingDecayTimeMultiplier= |



## Chat

In den Chat-Einstellungen findest du alle relevanten Befehle zum Anpassen des Chats. Dies beinhaltet das aktivieren des Chats, den Chat Radius und die maximale Nachrichtenlänge. 

| Einstellung               | Beschreibung                                                 | Config-Befehl         |
| ------------------------- | ------------------------------------------------------------ | --------------------- |
| Lokaler Chat-Radius       | Legt fest, in welchem Radius der lokale Chat um einen Spieler herum gesendet wird in Zentimeter | ChatLocalRadius=      |
| Maximale Nachrichtenlänge | Legt die maximale Anzahl von Zeichen in einer Chat-Nachricht fest. | ChatMaxMessageLength= |
| Globaler Chat             | Erlaubt/verbietet den globalen Chat. Der spielinterne Chat hat einen globalen Kanal, in dem alle Spieler sprechen können. | ChatHasGlobal=        |



## Purge

In den Purge-Einstellungen findest du alle relevanten Befehle zum Einstellen der Bereinigung, deren Bereinigungsstrufen etc.

| Einstellung                                      | Beschreibung                                                 | Config-Befehl                                                |
| ------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Bereinigung einschalten                          | Das Deaktivieren dieser Option deaktiviert die Reinigungsereignisse vollständig | EnablePurge=                                                 |
| Bereinigungsstufe                                | Durch Erhöhen des Wertes wird der Schwierigkeitsgrad der Bereinigung erhöht. Beispiel: 0 deaktiviert die Bereinigungen | PurgeLevel=                                                  |
| -                                                | Durch Erhöhen des Wertes wird die Anzahl der Bereinigungsvorgänge innerhalb eines Tages erhöht. Die tatsächliche Anzahl der Bereinigungen ist auch von den verschiedenen Einstellungen unten abhängig | PurgePeriodicity=                                            |
| -                                                | Wenn diese Option aktiviert ist, dann werden die Bereinigungen auf bestimmte Zeiten beschränkt | RestrictPurgeTime=                                           |
| -                                                | Der Wert 0000 bedeutet, dass 00:00 Uhr die Endzeit des Wochentags ist | PurgeTimeWeekdayEnd=                                         |
| -                                                | Der Wert 0000 bedeutet 00:00 Uhr ist die Startzeit des Wochentags | PurgeTimeWeekdayStart=                                       |
| -                                                | Der Wert 0000 bedeutet, dass 00:00 Uhr die Endzeit des Wochenendes ist | PurgeTimeWeekendEnd=                                         |
| -                                                | Der Wert 0000 bedeutet, dass 00:00 Uhr die Startzeit für das Wochenende ist. | PurgeTimeWeekendStart=                                       |
| -                                                | Der Wert 0830 bedeutet, dass 08:30 Uhr die Anfangszeit des Wochentags ist. | PurgeRestrictionWeekdayEnd=                                  |
| -                                                | Der Wert 2200 bedeutet, dass 22:00 Uhr die Endzeit des Wochenendes ist | PurgeRestrictionWeekdayStart=                                |
| -                                                | Der Wert 1800 bedeutet, dass 18:00 Uhr die Startzeit für das Wochenende ist | PurgeRestrictionWeekendStart=                                |
| Bereinigungsvorbereitungszeit                    | Das Erhöhen des Wertes erhöht die Zeit in Minuten zwischen der Bereinigungswarnung und dem Start der Bereinigung. | Das Erhöhen des Wertes erhöht die Zeit in Minuten zwischen der Bereinigungswarnung und dem Start der Bereinigung.PurgePreparationTime= |
| Bereinigungsdauer                                | Das Erhöhen des Wertes erhöht die maximale Zeit, die eine Säuberung dauert. Wenn alle Wellen getötet werden, kann eine Säuberung schneller abgeschlossen werden | PurgeDuration=                                               |
| Mindestanzahl von Online-Spielern                | Das Erhöhen des Wertes bewirkt, dass Säuberungen nur stattfinden, wenn die eingestellte Anzahl von Spielern online ist. Wenn der Wert auf Null gesetzt ist, greift die Säuberung jeden Clan an, der den Schwellenwert für die Säuberungsanzeige überschreitet (Offline-Säuberungen). | MinPurgeOnlinePlayers=                                       |
| Bauen zulassen                                   | Wenn diese Option aktiviert ist, dann ist das Bauen während der Bereinigung erlaubt. | AllowBuilding=                                               |
| Triggerwert des Bereinigungsmessgeräts           | Das Erhöhen dieser Zahl erhöht die Anzahl der verschiedenen ausgewählten Aktionen, die Clans oder Spieler durchführen können, bis sie für die Säuberung in Frage kommen. Im Allgemeinen gilt: Je höher die Zahl, desto länger muss ein Clan aktiv sein, um die Säuberung auszulösen. | ClanPurgeTrigger=                                            |
| Aktualisierungsintervall des Bereinigungszählers | Dies ist das Intervall, in dem Clan-Säuberungsereignisse aggregiert und die Punkte zum Säuberungsmesser addiert werden. Niedrigere Zahlen lassen den Clan-Meter schneller ansteigen. | ClanScoreUpateFrenquency=                                    |
| -                                                | Wenn dieser Wert erhöht wird, dann erhöht sich der Schaden, den NPCs während einer Säuberung verursachen. Beispiele: 5.000000, 10.000000, 15.000000, 20.000000, 25.000000 | PurgeNPCBuildingDamageMultiplier=                            |



## Haustiere und Hunger

In den Haustiere und Hunger-Einstellungen findest du alle relevanten Befehle zum Hungerverbrauch von Haustieren. Dies beinhaltet zum Beispiel wie viel und wie schnell sie es verbrauchen.


| Einstellung                                  | Beschreibung                                                 | Config-Befehl                    |
| -------------------------------------------- | ------------------------------------------------------------ | -------------------------------- |
| Aktivieren des Hungersystems: Sklaven        | Schaltet das Hungersystem für Sklaven ein oder aus.          | ToggleHungerSystemThralls=       |
| Aktivieren des Hungersystems: Haustiere      | Schaltet das Hungersystem für Haustiere ein oder aus         | ToggleHungerSystemPets=          |
| Lebensmittel Nährwert                        | Die Menge an Nährstoffen, die der Begleiter durch die Nahrungsaufnahme erhält. | FoodNutritionValue=              |
| Verhungerungszeit in Minuten                 | Die Anzahl an Minuten, die es benötigt, bis die Hungeranzeige des Begleiters von 100 auf 0 geht. Standard = 10080 | StarvationTimeInMinutes=         |
| Höchstgrenze für Hungerschaden               | Wenn die Hungeranzeige eines Begleiters 0 erreicht, dann verringert sich seine Gesundheit. Dieser Wert bestimmt, wie viel Gesundheit insgesamt abgezogen wird. Die Angabe erfolgt in Prozent, wobei 1 100 % der Gesundheit bedeutet | StarvationDamagePenaltyCap=      |
| Animal Pen Crafting Time Multiplier          | Vervielfacht die Geschwindigkeit des Craftings in Tierställen | AnimalPenCraftingTimeMultiplier= |
| Lebensmittel Container Bereich Multiplikator | Erhöht die Entfernung, über die Nahrungsmittelbehälter Ihre Gefährten füttern können | FeedBoxRangeMultiplier=          |
| Exklusive Diät                               | Legt fest, ob Begleitpersonen ausschließlich Elemente essen, die auf ihrer Diät aufgeführt sind. Deaktiviert bedeutet, dass sie zusätzlich zu ihrer Diät jedes beliebige Nahrungsmittel fressen werden | ExclusiveDiet=                   |























