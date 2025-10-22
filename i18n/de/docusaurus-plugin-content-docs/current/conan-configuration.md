---
id: conan-configuration
title: "Conan Exiles: Deinen eigenen Server konfigurieren"
description: "Entdecke, wie du die Einstellungen deines Conan Exiles Servers für optimales Gameplay und Sicherheit anpasst → Jetzt mehr erfahren"
sidebar_label: Server-Konfiguration
services:
  - gameserver-conan
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Server-Konfiguration

Conan Exiles Gameserver lassen sich umfangreich konfigurieren. Die Konfiguration des Servers erfolgt über die Config-Dateien. Du findest sie im Webinterface in der Gameserver-Verwaltung unter Configs. Öffne dazu die **ServerSettings.ini** Config-Datei.



![](https://screensaver01.zap-hosting.com/index.php/s/HSqXbCnS62s9mEx/preview)



Im Folgenden findest du eine kategorisierte Übersicht aller relevanten Befehle, mit denen du deinen Server ganz nach deinen Wünschen frei konfigurieren kannst. Manche Befehle sind standardmäßig nicht in der Config enthalten. Solche Befehle können einfach nachträglich hinzugefügt werden.

<InlineVoucher />

## Allgemein

In den allgemeinen Einstellungen findest du alle relevanten Befehle, um den Servernamen, Passwörter, Anti-Cheat und mehr anzupassen.

| Option                             | Beschreibung                                                  | Config-Befehl                  |
| ---------------------------------- | ------------------------------------------------------------ | ------------------------------- |
| Servername                        | Name deines Servers.                                         | ServerName="..."                |
| Spieleranzahl                    | Maximale Anzahl an Spielern                                  | Paketabhängig                   |
| Message Of The Day               | Nachricht des Tages                                          |                                 |
| Server-Passwort                  | Hier kann das Server-Passwort geändert werden                | ServerMessageOfTheDay="..."     |
| Admin-Passwort                   | Zugang, um Admin zu werden. Mehr dazu in der Anleitung „Admin werden“ | AdminPassword="..."             |
| BattlEye aktiviert              | Aktiviert den BattlEye AntiCheat-Schutz                      | IsBattlEyeEnabled=              |
| PVP aktiviert                   | Aktiviert oder deaktiviert PVP. 1 = aktiviert, 0 = deaktiviert | PVPEnabled=                     |
| Zeitliche PVP-Beschränkung      | Ist diese Option aktiviert, können Kämpfe zwischen Spielern nur in den angegebenen Zeiträumen stattfinden | RestrictPVPTime=                |
| PVP Blitz aktiviert             | Aktiviert oder deaktiviert PVP Blitz. 1 = aktiviert, 0 = deaktiviert (Standard) | PVPBlitzServer=                 |
| Zeitliche PVP-Beschränkung für Gebäudeschaden | Ist diese Option aktiviert, können Spieler nur in den angegebenen Zeiträumen Strukturen anderer Spieler angreifen und zerstören | RestrictPVPBuildingDamageTime=  |
| Community                      | Definiert den Community-Stil: 0=Keine 1=Purist 2=Locker 3=Hardcore 4=Rollenspiel 5=Experimentell | ServerCommunity=                |
| Serverregion                  | Die Auswahl der Serverregion beeinflusst die Filterung deines Servers in der Liste. Bitte wähle deine Region, damit Spieler aus derselben Region deinen Server finden können. 0 = Europa, 1 = Nordamerika, 2 = Asien, 3 = Australien, 4 = Südamerika, 5 = Japan | serverRegion=                   |
| Kein Eigentum                  | Ist diese Option aktiviert, gibt es keine Eigentumsregeln auf dem Server. Das bedeutet, alle Spieler können alle Truhen plündern, alle Maschinen benutzen, alle Gebäude abbauen usw. 1 = aktiviert, 0 = deaktiviert (Standard). | NoOwnership=                    |
| Container ignorieren Eigentum | Sind diese Option aktiviert, sind alle Container für andere Spieler offen. 1 = aktiviert, 0 = deaktiviert | ContainersIgnoreOwnership=      |
| Kann Spielergebäude beschädigen | Ist diese Option aktiviert, können Spieler die Gebäude anderer angreifen und zerstören. 1 = aktiviert, 0 = deaktiviert | CanDamagePlayerOwnedStructures= |
| Spieler können Schaden erleiden | Ist diese Option aktiviert, können Spieler von anderen Spielern verletzt werden. 1 = aktiviert, 0 = deaktiviert | bCanBeDamaged=                  |
| Sandsturm aktivieren          | Aktiviert, dass Sandstürme periodisch über die Verbannten Lande ziehen. | EnableSandStorm=                |
| Max. Clan-Größe               | Legt die maximale Größe von Clans auf dem Server fest. Sobald ein Clan das Limit erreicht, können keine neuen Mitglieder mehr beitreten. | clanMaxSize=                    |
| Maximale Nacktheit            | Legt die maximale Nacktheit auf dem Server fest. Überschreibt die Client-Einstellung. Wenn ein Server auf „Keine Nacktheit“ eingestellt ist, sieht ein Spieler auch bei voller Client-Nacktheit keine Nacktheit. Erlaubt der Server volle Nacktheit und der Spieler hat nur teilweise Nacktheit eingestellt, wird nur teilweise Nacktheit angezeigt. 0 = keine, 1 = teilweise, 2 = voll | MaxNudity=                      |
| Server Voice Chat             | Legt fest, ob Voicechat im Spiel aktiviert sein soll. 1 = aktiviert, 0 = deaktiviert | serverVoiceChat=                |



## Progression

In den Progression-Einstellungen findest du alle relevanten Befehle, um die XP-Erfahrung der Spieler anzupassen.

| Option                       | Beschreibung                                                  | Config-Befehl             |
| ---------------------------- | ------------------------------------------------------------ | -------------------------- |
| Spieler XP Rate Multiplikator | Dieser Multiplikator beeinflusst alle Arten von XP, die Spieler erhalten. So lässt sich der Fortschritt für alle Aktivitäten anpassen. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPRateMultiplier=    |
| Spieler XP Zeit Multiplikator | Conan Exiles gibt Spielern passiv XP über Zeit fürs Überleben. Dieser Befehl multipliziert die Rate, mit der Spieler diese XP erhalten. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPTimeMultiplier=    |
| Spieler XP Kill Multiplikator | Multipliziert die XP, die Spieler für das Töten von Monstern und Spielern erhalten. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPKillMultiplier=    |
| Spieler XP Ernte Multiplikator | Multipliziert die XP, die Spieler für das Ernten erhalten. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPHarvestMultiplier= |
| Spieler XP Craft Multiplikator | Multipliziert die XP, die Spieler fürs Craften erhalten. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPCraftMultiplier=   |



## Zeit

In den Zeit-Einstellungen findest du alle relevanten Befehle, um die Zeit anzupassen. So kannst du Tage und Nächte lang oder kurz einstellen, wie du willst.

| Option               | Beschreibung                                                  | Config-Befehl        |
| -------------------- | ------------------------------------------------------------ | --------------------- |
| Tag-Nacht-Zyklus Geschwindigkeit | Multipliziert die Geschwindigkeit des gesamten 24-Stunden-Tag-Nacht-Zyklus. Einzelne Tagesabschnitte können unten separat angepasst werden. Der Multiplikator wird zusätzlich zu den unten aufgeführten Optionen angewendet. | DayCycleSpeedScale=   |
| Tageszeit Geschwindigkeit | Die Tagesstunden in Conan Exiles sind zwischen 7:00 und 16:59 Spielzeit. Dieser Multiplikator verlängert oder verkürzt die Tageszeit. | DayTimeSpeedScale=    |
| Nachtzeit Geschwindigkeit | Die Nachtstunden sind zwischen 19:00 und 4:59 Spielzeit. Dieser Multiplikator verlängert oder verkürzt die Nachtzeit. | NightTimeSpeedScale=  |
| Dämmerungszeit Geschwindigkeit | Die Dämmerung ist zwischen 5:00 und 6:59 sowie 17:00 und 18:59. Dieser Multiplikator multipliziert die Zeit, die in der Dämmerung verbracht wird. | DawnDuskSpeedScale=   |
| Catch-Up Zeit verwenden | Aktiviert oder deaktiviert die Catch-Up-Timing-Mechanik auf dem Server. true = aktiviert, false = deaktiviert. | UseClientCatchUpTime= |
| Catch-Up Zeit          | Um neuen Spielern einen sanften Start zu ermöglichen, kann der Client gezwungen werden, zu einer bestimmten Tageszeit zu starten, unabhängig von der Serverzeit. Neue Charaktere starten dann zu dieser Zeit und spielen so lange, bis der Server „aufholt“. Wir empfehlen nicht, dies auf Nachtstunden zu setzen. | ClientCatchUpTime=    |



## Überleben

In den Überlebenseinstellungen findest du alle relevanten Befehle, um das Überleben anzupassen. Zum Beispiel, wie viel Leben ein Spieler haben kann, wie schnell er regeneriert und mehr.

| Option                                | Beschreibung                                                  | Config-Befehl                     |
| ------------------------------------- | ------------------------------------------------------------ | ---------------------------------- |
| Spieler Lebensmultiplikator           | Multipliziert direkt den Lebenswert des Spielers. 0.5 = 50 HP, 1.0 = 100 HP (Standard), 1.5 = 150 HP | PlayerHealthMultiplier=            |
| Spieler Lebensregeneration Geschwindigkeit | Multipliziert die passive Lebensregeneration des Spielers. 0.5 = 2,5 HP/s, 1.0 = 5,0 HP/s (Standard), 1.5 = 7,5 HP/s | PlayerHealthRegenSpeedScale=       |
| Spieler Ausdauer Multiplikator        | Multipliziert die Ausdauer des Spielers. 0.5 = 50 Ausdauer, 1.0 = 100 Ausdauer (Standard), 1.5 = 150 Ausdauer | PlayerStaminaMultiplier=           |
| Spieler Sprintgeschwindigkeit         | Definiert die Sprintgeschwindigkeit des Spielers. 0.5 = 1 m/s, 1.0 = 2 m/s (Standard), 1.5 = 3 m/s | PlayerSprintSpeedScale=            |
| Spieler Ausdauer Kosten Multiplikator | Erhöht oder verringert die Ausdauer, die Spieler pro Aktion verbrauchen | PlayerStaminaCostMultiplier=       |
| Spieler Sprint Ausdauer Kosten Multiplikator | Erhöht oder verringert die Ausdauer, die Spieler beim Sprinten verbrauchen | PlayerStaminaCostSprintMultiplier= |
| Spieler Ausdauer Regeneration Geschwindigkeit | Multipliziert die passive Ausdauer-Regeneration. 0 = kein Verlust, 0.5 = 1,0 Wasserverlust/s, 1.0 = 2,0 Wasserverlust/s (Standard), 1.5 = 3,0 Wasserverlust/s | PlayerStaminaRegenSpeedScale=      |
| Spieler Aktiv-Durst-Multiplikator     | Skaliert, wie schnell ein Spieler aktiv Wasser verliert oder aufnimmt. 0 = kein Verlust, 0.5 = 1,0 Wasserverlust/s, 1.0 = 2,0 Wasserverlust/s (Standard), 1.5 = 3,0 Wasserverlust/s | PlayerActiveThirstMultiplier=      |
| Spieler Passiv-Durst-Multiplikator    | Skaliert, wie schnell ein Spieler passiv Wasser verliert oder aufnimmt. 0 = kein Verlust, 0.5 = 1,0 Wasserverlust/s, 1.0 = 2,0 Wasserverlust/s (Standard), 1.5 = 3,0 Wasserverlust/s | PlayerIdleThirstMultiplier=        |
| Spieler Offline-Durst-Multiplikator   | Skaliert, wie schnell ein Spieler Wasser verliert oder aufnimmt, während er offline ist. 0 = kein Verlust, 0.5 = 1,0 Wasserverlust/s, 1.0 = 2,0 Wasserverlust/s (Standard), 1.5 = 3,0 Wasserverlust/s | PlayerOfflineThirstMultiplier=     |
| Spieler Aktiv-Hunger-Multiplikator    | Skaliert, wie schnell ein Spieler aktiv Nahrung verliert oder aufnimmt. 0 = kein Verlust, 0.5 = 1,0 Wasserverlust/s, 1.0 = 2,0 Wasserverlust/s (Standard), 1.5 = 3,0 Wasserverlust/s | PlayerActiveHungerMultiplier=      |
| Spieler Passiv-Hunger-Multiplikator   | Skaliert, wie schnell ein Spieler passiv Nahrung verliert oder aufnimmt. 0 = kein Verlust, 0.5 = 1,0 Wasserverlust/s, 1.0 = 2,0 Wasserverlust/s (Standard), 1.5 = 3,0 Wasserverlust/s | PlayerIdleHungerMultiplier=        |
| Spieler Offline-Hunger-Multiplikator  | Skaliert, wie schnell ein Spieler Nahrung verliert oder aufnimmt, während er offline ist. 0 = kein Verlust, 0.5 = 1,0 Wasserverlust/s, 1.0 = 2,0 Wasserverlust/s (Standard), 1.5 = 3,0 Wasserverlust/s | PlayerOfflineHungerMultiplier=     |
| Ausgeloggte Charaktere bleiben in der Welt | Bei True bleiben Spielerleichen in der Welt in einem unbewussten Zustand, bei False werden sie beim Offlinegehen entfernt. (Standard: True) | LogoutCharactersRemainInTheWorld=  |
| Ausrüstung bei Tod fallen lassen     | Bei True verlieren Spieler beim Tod ihre Ausrüstung beim Respawn. Bei False respawnen sie mit kompletter Ausrüstung. (Standard: True) | DropEquipmentOnDeath=              |
| Schnellzugriffsleiste bei Tod fallen lassen | Bei True verlieren Spieler beim Tod die Items auf der Schnellzugriffsleiste. Bei False respawnen sie mit diesen Items. (Standard: True) | DropShortcutbarOnDeath=            |
| Rucksack bei Tod fallen lassen        | Bei True verlieren Spieler beim Tod den Inhalt ihres Rucksacks. Bei False respawnen sie mit dem Rucksackinhalt. (Standard: True) | DropBackpackOnDeath=               |
| Jeder kann Leiche plündern             | Bei True kann jeder die Leiche eines toten Spielers plündern. Bei False nur der Spieler selbst. (Standard: True) | EverybodyCanLootCorpse=            |
| Thrall-Korruptions-Entfernungs-Multiplikator | Erhöht die Geschwindigkeit, mit der Thrall-Unterhalter Spieler-Korruption entfernen. | ThrallCorruptionRemovalMultiplier= |
| Spieler Korruptionszuwachs Multiplikator | Multipliziert die Korruption, die Spieler erhalten.          | PlayerCorruptionGainMultiplier=    |



## Kampf

In den Kampf-Einstellungen findest du alle relevanten Befehle, um den Schaden anzupassen. Zum Beispiel, wie viel Schaden ein Spieler machen oder einstecken kann.

| Option                          | Beschreibung                                                  | Config-Befehl                 |
| ------------------------------- | ------------------------------------------------------------ | ------------------------------ |
| Spieler Schaden Multiplikator   | Multipliziert den Schaden, den ein Spieler verursacht. 0 = kein Schaden, 0.5 = 10 Schaden, 1.0 = 20 Schaden (Standard), 1.5 = 30 Schaden | PlayerDamageMultiplier=        |
| Spieler erhaltener Schaden Multiplikator | Multipliziert den Schaden, den ein Spieler erhält. 0 = kein Schaden, 0.5 = 10 Schaden, 1.0 = 20 Schaden (Standard), 1.5 = 30 Schaden | PlayerDamageTakenMultiplier=   |
| Minion Schaden Multiplikator    | Multipliziert den Schaden, den Thralls und Pets verursachen. 0 = kein Schaden, 0.5 = 10 Schaden, 1.0 = 20 Schaden (Standard), 1.5 = 30 Schaden | MinionDamageMultiplier=        |
| Minion erhaltener Schaden Multiplikator | Multipliziert den Schaden, den Thralls und Pets erhalten. 0 = kein Schaden, 0.5 = 10 Schaden, 1.0 = 20 Schaden (Standard), 1.5 = 30 Schaden | MinionDamageTakenMultiplier=   |
| NPC Schaden Multiplikator       | Multipliziert den Schaden, den NPCs und Monster verursachen. 0 = kein Schaden, 0.5 = 10 Schaden, 1.0 = 20 Schaden (Standard), 1.5 = 30 Schaden | NPCDamageMultiplier=           |
| NPC erhaltener Schaden Multiplikator | Multipliziert den Schaden, den NPCs und Monster erhalten.    | NPCDamageTakenMultiplier=      |
| NPC Lebensmultiplikator         | Erhöht die Lebenspunkte aller NPCs.                          | NPCHealthMultiplier=           |
| NPC Respawn Multiplikator       | Multipliziert die Respawn-Geschwindigkeit von NPCs nach dem Tod. Viele NPCs respektieren diesen Wert aktuell nicht. 0 = kein Respawn (ungetestet), 0.5 = 15 Sekunden, 1.0 = 30 Sekunden (Standard), 1.5 = 45 Sekunden | NPCRespawnMultiplier=          |
| Haltbarkeits-Schaden Multiplikator | Modifiziert den Haltbarkeitsschaden, den ein Item beim Benutzen oder Beschädigen erleidet. Beeinflusst, wie lange Waffen, Werkzeuge und Rüstungen halten. 0= unverwundbar, 0.5 = 5 Haltbarkeitsverlust pro Treffer, 1.0 = 10 Haltbarkeitsverlust (Standard), 1.5 = 15 Haltbarkeitsverlust | DurabilityMultiplier=          |
| Schild Haltbarkeits Multiplikator | Ändert den Haltbarkeitsschaden, den ein Schild beim Blocken erleidet. 0 = unverwundbar, 0.5 = 5 Haltbarkeitsverluste pro Treffer, 1.0 = 10 Haltbarkeitsverluste (Standard), 1.5 = 15 Haltbarkeitsverluste | ShieldDurabilityMultiplier=    |
| Thrall Aufwachzeit              | Bestimmt, wie lange ein Thrall bewusstlos bleibt. 0 = sofort wach (ungetestet), 300 = 5 Minuten, 600 = 10 Minuten (Standard), 900 = 15 Minuten | UnconsciousTimeSeconds=        |
| Thrall Schaden im Bewusstlos-Zustand | Multipliziert den Schaden, den ein Thrall im Bewusstlos-Zustand erleidet. | ConciousnessDamageMultiplier=  |
| Avatar Lebensdauer             | Bestimmt, wie lange ein Avatar in der Welt leben kann.       | AvatarLifetime=                |
| Avatare deaktivieren          | True: Avatare können auf diesem Server nicht beschworen werden, False: Avatare können beschworen werden. | AvatarsDisabled=               |
| Avatar Beschwörungszeit       | Die Zeit, die benötigt wird, um einen Avatar zu beschwören. | AvatarSummonTime=              |
| Avatar Kuppel Dauer Multiplikator | Bestimmt, wie lange Avatar-Kuppeln halten.                   | AvatarDomeDurationMultiplier=  |
| Landclaim-Benachrichtigung deaktivieren | Deaktiviert Landclaim-Benachrichtigungen. True: Benachrichtigungen aus, False: an | DisableLandclaimNotifications= |



## Ernte

In den Ernte-Einstellungen findest du alle relevanten Befehle, um die Ernte anzupassen. Zum Beispiel, wie schnell etwas geerntet werden kann, wie oft Ressourcen respawnen usw.

| Option                            | Beschreibung                                                  | Config-Befehl                  |
| --------------------------------- | ------------------------------------------------------------ | ------------------------------- |
| Verfallsrate von Items            | Beeinflusst, wie lange Lebensmittel haltbar sind (kleinere Werte = längere Haltbarkeit). 0 = verderben nie, 0.5 = 4 Minuten, 1.0 = 2 Minuten (Standard), 1.5 = 1 Minute | ItemSpoilRateScale=             |
| Erntemenge Multiplikator          | Multipliziert die Menge an Ressourcen, die beim Ernten gesammelt werden. 1.0 = 1 Ressource (Standard), 2.0 = 2 Ressourcen | HarvestAmountMultiplier=        |
| Ressourcen Respawn Geschwindigkeit Multiplikator | Multipliziert die Geschwindigkeit, mit der Ressourcen nach der Ernte respawnen. 0,5 = 7,5 Minuten, 1,0 = 15 Minuten (Standard), 1,5 = 30 Minuten | ResourceRespawnSpeedMultiplier= |
| Landclaim Radius Multiplikator    | Erhöht oder verringert den Radius, in dem Landclaim gilt. Beeinflusst Respawn von Ressourcen und NPCs sowie die Möglichkeit, Land zu claimen. 0.5 = 10 Meter, 1.0 = 20 Meter (Standard), 1.5 = 30 Meter | LandClaimRadiusMultiplier=      |



## Crafting

In den Crafting-Einstellungen findest du alle relevanten Befehle, um das Crafting anzupassen. Zum Beispiel, wie schnell Dinge hergestellt werden können.

| Option                                | Beschreibung                                                  | Config-Befehl                      |
| ------------------------------------- | ------------------------------------------------------------ | ----------------------------------- |
| Crafting Zeit Multiplikator           | Erhöht oder verringert die Dauer, die zum Herstellen von Items benötigt wird. | CraftingTimeMultiplier=             |
| Thrall Crafting Zeit Multiplikator    | Erhöht oder verringert die Zeit, die benötigt wird, um einen Thrall zu trainieren. | ThrallCraftingTimeMultiplier=       |
| Brenndauer Multiplikator              | Erhöht oder verringert die Brenndauer von Brennstoff.        | FuelBurnTimeMultiplier=             |
| Crafting Geschwindigkeit Multiplikator | Multipliziert die Geschwindigkeit, mit der Items hergestellt werden. Das Benutzen eines Wheel of Pain zum Konvertieren von Thralls gilt als Crafting. 0 oder weniger = sofort, 0.5 = 10 Sekunden, 1.0 = 20 Sekunden (Standard), 1.5 = 30 Sekunden | ItemConvertionMultiplier=           |
| Struktur Schaden Multiplikator        | Multipliziert den Schaden, den eine Verteidigungsstruktur (z.B. Palisade) verursacht. 0 = kein Schaden (ungetestet), 0.5 = 10 Schaden, 1.0 = 20 Schaden (Standard), 1.5 = 30 Schaden | StructureDamageMultiplier=          |
| Struktur erhaltener Schaden Multiplikator | Multipliziert den Schaden, den eine Struktur beim Angriff erhält (Wände/Crafting-Stationen extra). 0 = kein Schaden (ungetestet), 0.5 = 10 Schaden, 1.0 = 20 Schaden (Standard), 1.5 = 30 Schaden | StructureDamageTakenMultiplier=     |
| Struktur Lebensmultiplikator          | Multipliziert die Lebenspunkte einer Struktur. 0,5 = 500 HP, 1,0 = 1000 HP (Standard), 1,5 = 1500 HP | StructureHealthMultiplier=          |
| Spieler Traglast Multiplikator        | Multipliziert die Traglast, die ein Item dem Spieler hinzufügt. (0 deaktiviert nicht) 0.5 = 2,5 Gewicht, 1.0 = 5,0 Gewicht (Standard), 1.5 = 7,5 Gewicht | PlayerEncumbranceMultiplier=        |
| Spieler Traglast-Straf Multiplikator  | Multipliziert die Strafen, die ein Spieler bei Überlastung erleidet. (0 deaktiviert nicht) 0.5 = 35 Bewegungseinschränkung bei 99%, 1.0 = 70 Bewegungseinschränkung (Standard), 1.5 = 125 Bewegungseinschränkung | PlayerEncumbrancePenaltyMultiplier= |



## Verfall

In den Verfall-Einstellungen findest du alle relevanten Befehle, um den Verfall von Gebäuden anzupassen.

| Option                         | Beschreibung                                                  | Config-Befehl               |
| ------------------------------ | ------------------------------------------------------------ | ---------------------------- |
| Gebäudeverfall deaktivieren    | Deaktiviert den Verfall von Gebäuden über Zeit, wenn aktiviert. | DisableBuildingAbandonment=  |
| Gebäudeverfall Zeit Multiplikator | Erhöht oder verringert die Zeit, bis Gebäudeteile und Strukturen verfallen. | BuildingDecayTimeMultiplier= |



## Chat

In den Chat-Einstellungen findest du alle relevanten Befehle, um den Chat anzupassen. Zum Beispiel Chat aktivieren, Chat-Radius und maximale Nachrichtenlänge.

| Option             | Beschreibung                                                  | Config-Befehl        |
| ------------------ | ------------------------------------------------------------ | --------------------- |
| Lokaler Chat Radius | Legt fest, in welchem Radius um einen Spieler lokaler Chat übertragen wird (in Zentimetern) | ChatLocalRadius=      |
| Maximale Nachrichtenlänge | Legt die maximale Anzahl an Zeichen in einer Chat-Nachricht fest. | ChatMaxMessageLength= |
| Globaler Chat aktiviert | Erlaubt oder verbietet globalen Chat. Im Spiel gibt es einen globalen Kanal, in dem alle Spieler sprechen können. | ChatHasGlobal=        |



## Purge

In den Purge-Einstellungen findest du alle relevanten Befehle, um die Purge, deren Schritte usw. anzupassen.

| Option                           | Beschreibung                                                  | Config-Befehl                                               |
| -------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Purge aktivieren                 | Deaktiviert diese Option, werden Purge-Events komplett ausgeschaltet | EnablePurge=                                                 |
| Purge-Level                     | Erhöht man diesen Wert, steigt der Schwierigkeitsgrad der Purge. Beispiel: 0 deaktiviert Purges | PurgeLevel=                                                  |
| -                                | Erhöht man diesen Wert, steigt die Anzahl der Purge-Vorgänge pro Tag. Die tatsächliche Anzahl hängt auch von den Optionen unten ab | PurgePeriodicity=                                            |
| -                                | Ist diese Option aktiviert, werden Purges auf bestimmte Zeiten beschränkt | RestrictPurgeTime=                                           |
| -                                | Wert 0000 bedeutet 00:00 Uhr als Wochentags-Endzeit          | PurgeTimeWeekdayEnd=                                         |
| -                                | Wert 0000 bedeutet 00:00 Uhr als Wochentags-Startzeit        | PurgeTimeWeekdayStart=                                       |
| -                                | Wert 0000 bedeutet 00:00 Uhr als Wochenend-Endzeit           | PurgeTimeWeekendEnd=                                         |
| -                                | Wert 0000 bedeutet 00:00 Uhr als Wochenend-Startzeit         | PurgeTimeWeekendStart=                                       |
| -                                | Wert 0830 bedeutet 08:30 Uhr als Wochentags-Endzeit           | PurgeRestrictionWeekdayEnd=                                  |
| -                                | Wert 2200 bedeutet 22:00 Uhr als Wochenend-Endzeit            | PurgeRestrictionWeekdayStart=                                |
| -                                | Wert 1800 bedeutet 18:00 Uhr als Wochenend-Startzeit          | PurgeRestrictionWeekendStart=                                |
| Purge Vorbereitungszeit          | Erhöht die Zeit in Minuten zwischen Purge-Warnung und Purge-Start. | PurgePreparationTime=                                        |
| Purge Dauer                     | Erhöht die maximale Dauer, wie lange eine Purge dauern kann. Wenn alle Wellen getötet werden, endet die Purge früher. | PurgeDuration=                                               |
| Minimale Anzahl Online-Spieler   | Purges finden nur statt, wenn mindestens so viele Spieler online sind. Bei 0 greift die Purge auf jeden Clan über dem Purge-Meter (auch offline) | MinPurgeOnlinePlayers=                                       |
| Bauen erlauben                  | Ist diese Option aktiviert, darf während Purges gebaut werden. | AllowBuilding=                                               |
| Purge Meter Auslösewert          | Erhöht die Anzahl der Aktionen, die Clans oder Spieler ausführen müssen, um für eine Purge infrage zu kommen. Je höher, desto länger dauert es, bis die Purge ausgelöst wird. | ClanPurgeTrigger=                                            |
| Purge Meter Aktualisierungsintervall | Intervall, in dem Purge-Events für Clans zusammengefasst und zum Purge-Meter addiert werden. Kleinere Werte erhöhen das Meter schneller. | ClanScoreUpateFrenquency=                                    |
| -                                | Erhöht den Schaden, den NPCs während einer Purge verursachen. Beispiele: 5.000000, 10.000000, 15.000000, 20.000000, 25.000000 | PurgeNPCBuildingDamageMultiplier=                            |



## Haustiere und Hunger

In den Haustier- und Hunger-Einstellungen findest du alle relevanten Befehle zum Hunger-Verbrauch von Haustieren. Zum Beispiel, wie viel und wie schnell sie fressen.

| Option                              | Beschreibung                                                  | Config-Befehl                   |
| ----------------------------------- | ------------------------------------------------------------ | -------------------------------- |
| Hunger-System für Thralls aktivieren | Schaltet das Hunger-System für Thralls ein oder aus.          | ToggleHungerSystemThralls=       |
| Hunger-System für Haustiere aktivieren | Schaltet das Hunger-System für Haustiere ein oder aus.        | ToggleHungerSystemPets=          |
| Nährwert von Futter                | Die Menge an Nährwert, die Begleiter durch Fressen erhalten. | FoodNutritionValue=              |
| Hungerdauer in Minuten             | Zeit in Minuten, bis der Hungerbalken eines Begleiters von 100 auf 0 fällt. Standard = 10080 | StarvationTimeInMinutes=         |
| Max. Hunger-Schadensstrafe        | Wenn der Hungerbalken 0 erreicht, erleidet der Begleiter Schaden. Dieser Wert bestimmt, wie viel Gesundheit maximal verloren gehen kann (in Prozent, 1 = 100%). | StarvationDamagePenaltyCap=      |
| Crafting-Zeit Multiplikator im Tiergehege | Multipliziert die Crafting-Geschwindigkeit im Tiergehege.    | AnimalPenCraftingTimeMultiplier= |
| Futter-Container Reichweiten Multiplikator | Multipliziert die Reichweite, in der Futter-Container Begleiter füttern können. | FeedBoxRangeMultiplier=          |
| Exklusive Diät                   | Legt fest, ob Begleiter ausschließlich Items aus ihrer Diät fressen. Deaktiviert bedeutet, sie fressen auch andere Items zusätzlich. | ExclusiveDiet=                   |

<InlineVoucher />