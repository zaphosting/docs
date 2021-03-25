---
id: csgo_configuration
title: Counter-Strike GO: Server Konfiguration
description: Informationen zu den Einstellungen und Konfigurationsmöglichkeiten deines CS GO-Servers von ZAP-Hosting - ZAP-Hosting.com Dokumentationen
sidebar_label: Server Konfiguration
---

## Server Konfiguration

Counter-Strike Server lassen sich umfangreich konfigurieren. Grundlegende Einstellungen können über die **Server.cfg** Config und über die Einstellungsseite im Webinterface vorgenommen werden. Die erweitere Konfiguration erfolgt über die Gamemode Config-Dateien wie zum Beispiel gamemode_competitive.cfg, gamemode_custom.cfg, gamemode_casual.cfg, gamemode_cooperative.cfg, gamemode_demolition.cfg, usw.

Unter den Einstellungen wird der Gamemode bestimmt der benutzt werden soll. Die Befehle dieser Config werden dann dementsprechend geladen. Diese kannst du entweder in der Gameserver Verwaltung oder manuell via FTP unter **gXXXXX3/csgo/csgo/cfg/** verwaltet werden. 



### Allgemeine Konfiguration im Interface (Einstellungen)

Auf der Einstellungsseite kannst du Basiseinstellungen zum GSL Token, Gametype/Gamemode, Mapgroup, Tickrate und mehr vornehmen. 

![img](https://screensaver01.zap-hosting.com/index.php/s/jKCQC2EXc3byBLy/preview)



**GSL Token**

Gameserver Login Tokens (GSLTs) ist ein Verfahren, welches Steam als Schutzmaßnahme implementiert hat. Um Gameserver von gewissen Steam Games (hauptsächlich Source-Games) zu betreiben ist es zwingend notwendig einen Token zu generieren. Genauere Informationen dazu findest du hier:

[Gameserver Login Token](https://zap-hosting.com/guides/docs/de/source_gsltoken/)



**Gametype**

Es gibt verschiedene Gamemodes. Im folgenden siehst du eine Auflistung der verfügbaren Optionen:

- Classic Casual
- Classic Competitive
- Arms Race
- Demolition
- Deathmatch
- Wingman



**Mapgroup**

Mapgroups sind Gruppen von Maps, welche normalerweise einer bestimmten Kategorie entsprechen. Standardmäßig gibt es die **mg_active, mg_armsrace, mg_demolition, mg_allclassic** Gruppen. Optional kann auch eine eigene erstellt werden. Diese muss dann in der **Gamemodes_server.txt** eingetragen werden. Die Struktur einer solchen Mapgroup ist einfach aufgebaut werden und sieht wie folgt aus:

```
{	 	 	 	 
 	"mg_meine_mapgroup"	 	 	 
 	{	 	 	 
 	 	"name"	"mg_meine_mapgroup"	 
 	 	"maps"	 	 
 	 	{	 	 
 	 	 	"de_map1"	""
 	 	 	"de_map2"	""
 	 	 	"de_map3"	""
 	 	 	"de_map4"	""
 	 	}	 	 
 	}	 	 	 
}
```



**Tickrate**

Die gesetzte Tickrate bestimmt die Frequenz, mit der ein Server die Position eines Spielers an die anderen Spieler übermittelt. Desto höher der Wert ist, umso besser ist das Spielerlebnis. Hierbei können folgende Werte gesetzt werden: 33, 64, 100 und 128 (bester Wert). 



**Startmap**

Über die Startmap wird bestimmt, welche Map beim Startvorgangs geladen werden soll. Hierbei ist es wichtig, dass der Name der Map vollständig und richtig geschrieben. Die Dateiendung muss nicht eingetragen werden. 



**Pingboost**

Pingboost ist eine Methode, welche da Spielgefühl durch verschiedene Methoden verändert und dadurch einen möglichst geringen Ping erzielt.





## Allgemeine Konfiguration (server.cfg)

In der **server.cfg** kannst du Einstellungen bezüglich Servername, Rcon Passwort, Server Passwort einstellen. 

![img](https://screensaver01.zap-hosting.com/index.php/s/RqX6bX7sC8SL7qx/preview)



**hostname**

Über den Hostname wird der Name des Servers definiert. Der Name wird dann in der Serverliste und im Scoreboard angezeigt.



**rcon_password **

Das rcon_password wird benötigt, wenn Server Befehle im Spiel oder per Rcon Tool wie zum Beispiel HLSW ausgeführt werden soll. Das kann dann über die folgenden Befehle gemacht werden:

```
rcon_password DeinPasswort
rcon befehl // Zum Beispiel rcon changelevel de_dust2
```



**sv_password**

Wenn du dein Server privat benutzen möchtest oder nur bestimmte Personen zugriff haben sollen, dann kannst du ein Server Passwort festglegen. Beim Verbindungsaufbau zum Server erfolgt dann die Passwortabfrage.



**sv_cheats**

Gewisse Befehle sind geschützt und können daher nur benutzt werden, wenn Cheats aktiviert sind. Aktiviert oder deaktiviert werden kann der Befehl mit dem Wert 0 (deaktiviert) oder 1 (aktiviert). Zu den geschützten Befehlen gehören zum Beispiel:

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 und viele weitere



## Gamemode spezifische Konfiguration (Competitive, Casual, Custom, ...)

Wie am Anfang beschrieben definierst du im Interface in der Einstellungsseite, welchen Gamemode/Gametype du benutzen möchtest. Danach musst du dich dann richten und die entsprechende Config-Datei bearbeiten. In den Gamemode-Configs können detailierte Änderungen zum Spielgeschehen, Botverhalten usw vorgenommen werden.



### Bot Befehle



**bot_chatter**
Mit diesem Befehl wird festgelegt, was die Bots im Spiel sagen dürfen. Es  kann entweder off, radio, minimal oder normal gesetzt werden.



**bot_difficulty**
Mit diesem Befehl wird festgelegt, wie schwierig die Bots sind. Dabei können folgende Wert gesetzt werden: 

- 0 - easy
- 1 - normal
- 2 - hard
- 3 - expert



**bot_quota**
Mit diesem Befehl wird die maximale Anzahl von Bots festgelegt, die Du auf Deinem Server haben kannst. Der Standardwert ist 10.



**bot_quota_mode**
Mit diesem Befehl wird der Modus definiert, mit dem die Anzahl der Bots gesteuert werden soll. Die Optionen sind: normal, fill und match. Normal ist normales Verhalten. Fill füllt den Server mit so vielen Bots, wie bei "bot_quota" gesetzt ist. Match füllt Spieler Slots auf. Wenn zum Beispiel 3 Spieler verbunden sind und 10 Bots eingestellt sind, dann werden nur 7 Bots eingesetzt.




### Geld Befehle

**cash_player_bomb_defused**
Mit diesem Befehl wird festgelegt, wie viel Geld ein Spieler für das Entschärfen einer Bombe verdient. Dabei kann nicht mehr als der maximale Geldbetrag gegeben werden, den Du auf dem Server erhalten kannst.



**cash_player_bomb_planted**
Mit diesem Befehl wird festgelegt, wie viel Geld ein Spieler für das Platzieren der Bombe erhält.



**cash_player_damage_hostage**
Mit diesem Befehl wird festgelegt, wie viel Geld für die Verletzung einer Geisel abgezogen oder verdient wird. Standardmäßig werden dem Spieler für jedes mal verletzen der Geisel $30 abgezogen.



**cash_player_interact_with_hostage**
Mit diesem Befehl wird das für die Interaktion mit einer Geisel verdiente oder verlorene Geld festgelegt.



**cash_player_killed_enemy_default**
Mit diesem Befehl wird festgelegt, wie viel Geld durch das Töten eines gegnerischen Spielers mit einer Standardwaffe verdient oder verloren wird.



**cash_player_killed_enemy_factor**
Mit diesem Befehl wird festgelegt, wie viel Geld durch das Töten eines feindlichen Spielers mit einer der Hauptwaffen (Standardpistolen, Primärgewehre wie die AK/M4 usw.) verdient wird.



**cash_player_killed_hostage**
Mit diesem Befehl wird festgelegt, wie viel Geld verdient oder verloren wird, wenn ein Spieler eine Geisel tötet.



**cash_player_killed_teammate**
Mit diesem Befehl wird festgelegt, wie viel Geld für das Töten eines Teamkollegen verdient oder verloren wird.



**cash_player_rescued_hostage**
Mit diesem Befehl wird festgelegt, wie viel Geld für die sichere Rettung einer Geisel im Geiselmodus verdient oder verloren wird.



**cash_team_elimination_bomb_map**
Mit diesem Befehl wird festgelegt, wie viel Geld jedes Teammitglied verdient, wenn alle 5 Feinde auf einer Bombenentschärfungskarte wie Mirage oder Dust II getötet werden.



**cash_team_elimination_hostage_map_t**
Mit diesem Befehl wird festgelegt, wie viel Geld jeder Terrorist für den Gewinn einer Runde in einer Geiselkarte durch Eliminierung verdient.



**cash_team_elimination_hostage_map_ct**
Mit diesem Befehl wird festgelegt, wie viel Geld jedes Teammitglied auf der CT-Seite verdient, wenn es alle 5 Terroristen auf einer Geiselkarte eliminiert.



**cash_team_hostage_alive**
Mit diesem Befehl wird festgelegt, wie viel Geld eine Geisel verdient oder verliert, wenn sie die Runde überlebt. 



**cash_team_hostage_interaction**
Mit diesem Befehl wird festgelegt, wie viel Geld für einen Spieler, der mit einer Geisel interagiert, verdient oder verloren wird.



**cash_team_loser_bonus**
Mit diesem Befehl wird das Grundgeld festgelegt, das ein Team für den Verlust einer Runde verdient. Dieser steigt dann in festgelegten Schritten an, was durch einen separaten Befehl gesteuert wird.



**cash_team_loser_bonus_consecutive_rounds**
Mit diesem Befehl wird festgelegt, wie viel Geld für eine Abfolge von Verlusten erhöht werden soll. Wenn dieser Wert bei $500 liegt (Standardeinstellung), bedeutet das, dass jede aufeinander folgende verlorene Runde dem Verliererteam $500 mehr als die vorherige zuspricht und das gilt bis zu 5 verlorene Runden hintereinander.



**cash_team_planted_bomb_but_defused**
Mit diesem Befehl wird der Geldbetrag festgelegt, den das Terroristenteam für das Platzieren einer Bombe verdient, die schlussendlich entschärft wurde. Dieser Betrag wird zusammen mit dem Rundenverlustbonus festgelegt. Der Standardwert ist 800 $.



**cash_team_rescued_hostage**
Mit diesem Befehl wird festgelegt, wie viel Geld das gesamte Team für einen Spieler verdient, der die Geisel rettet.



**cash_team_terrorist_win_bomb**
Mit diesem Befehl wird festgelegt, wie viel Geld jeder Spieler des Terroristen-Teams gewinnt, wenn er eine Runde durch die explodierende Bombe gewinnt.



**cash_team_win_by_defusing_bomb**
Mit diesem Befehl wird festgelegt, wie viel Geld das Counter-Teroristen Team für den Gewinn einer Runde durch das Entschärfen der Bombe verdient.



**cash_team_win_by_hostage_rescue**
Mit diesem Befehl wird festgelegt, wie viel Geld die Teammitglieder gewinnen, wenn sie eine Runde durch die Rettung einer Geisel gewinnen.



**cash_team_win_by_time_running_out_hostage**
Mit diesem Befehl wird festgelegt, wie viel Geld das Team, das die Geiseln bewacht, gewinnt, wenn es die Runde gewinnt, indem es keine Geiseln innerhalb des Zeitlimits befreien lässt.



**cash_team_win_by_time_running_out_bomb**
Mit diesem Befehl wird festgelegt, wie viel Geld die Spieler der Counter-Teroristen mit dem Gewinn einer Runde verdienen, wenn die Zeit abläuft. Das bedeutet, dass die Terroristen in der erforderlichen Zeit keine Bombe platziert oder alle Counter-Terroristen eliminiert haben.



### Gameplay Befehle



**mp_afterroundmoney**
Mit diesem Befehl wird festgelegt, wie viel Geld jedem Spieler jedes Teams am Ende einer Runde unabhängig von Sieg oder Niederlage ausgezahlt wird. Der Standardwert ist 0 (der Gewinn-/Verlustbonus wird mit einem anderen Befehl festgelegt).



**mp_buytime**
Mit diesem Befehl wird die Zeit (in Sekunden) festgelegt, die Spieler nach Beginn einer Runde zum Kauf von Gegenständen haben. 



**mp_buy_anywhere**
Mit diesem Befehl wird festgelegt, ob Spieler außerhalb der Buyzone auf das Kaufmenü zugreifen können oder nicht. Dabei ist zu beachten, dass die Spieler immer noch innerhalb des Kaufzeitraums sein müssen



**mp_death_drop_defuser**
Mit diesem Befehl wird festgelegt, ob Defuse Kits beim Tod fallen gelassen werden oder nicht. 



**mp_death_drop_grenade**
Mit diesem Befehl wird festgelegt, welche Granate (falls vorhanden) fallen gelassen wird, wenn ein Spieler getötet wird.

- Wert: 0 - Es werden keine Granaten fallen gelasse
- Wert: 1 - Die wertvollste Granate soll fallen gelassen werde.



**mp_death_drop_gun**
Mit diesem Befehl wird festgelegt, welche Waffe fallen gelassen werden soll, wenn ein Spieler getötet wird. Die Voreinstellung ist 1 ( die beste). Wählen Sie eine der folgenden Optionen:

- Wert: 0 - Beim Tod werden keine Waffen fallen gelassen
- Wert: 1 Beim Tod wird die beste Waffe fallen gelassen (wertvollste),
- Wert: 2 Wenn der Spieler zum Zeitpunkt des Todes eine Waffe in der Hand hält, dann lässt er diese fallen, ansonsten die wervollste. 



**mp_defuser_allocation**
Mit diesem Befehl wird festgelegt, ob Spieler zu Beginn der Runde kostenlos einen Defuser erhalten sollen oder nicht, und wenn ja, wer die Defuser erhalten soll. 

- Wert: 1 - Keine kostenlosen Defuser
- Wert: 2 - Zufällige Spieler erhalten einen Defuser
- Wert: 3 - Alle Spieler erhalten einen Defuser



**mp_force_pick_time** 

Mit diesem Befehl wird die Spieldauer in Sekunden festgelegt, die ein Spieler für die Auswahl eines Teams zur Verfügung hat. Nach dieser Zeitspanne wird automatisch ein Team ausgewählt. Die Standarddauer beträgt 15 Sekunden.



**mp_forcecamera**

Mit diesem Befehl wird die Reichweite der Zuschauer festgelegt (d. h., welche Spieler zuschauen können, wenn sie sterben).

- Wert: 0 - Die toten Spieler können jedem Spieler zuschauen
- Wert: 1 - Die toten Spieler können ihrem Teammates zuschauen
- Wert: 2 - Das Bild der toten Spieler wird bis zur nächsten Runde schwarz.



**mp_free_armor**

Mit diesem Befehl wird festgelegt, ob ein Spieler zum Anfang der Runde kostenlos eine Rüstung und Helm erhält

- Wert: 0 - Deaktivieren
- Wert: 1 - Aktivieren



**mp_freezetime**

Mit diesem Befehl wird festgelegt, wie lange die Spieler zu Beginn jeder Runde eingefroren werden. In dieser Zeit können die Spieler ihre Ausrüstung kaufen und ihre Taktik besprechen, bevor die Runde beginnt. Die Standardeinstellung beträgt 15 Sekunden.



**mp_friendlyfire**

Mit diesem Befehl kann festgelegt werden, ob Friendly fire aktiviert oder deaktiviert werden soll. Wenn der Beschuss durch die eigenen Spieler aktiviert ist, können die Spieler ihren eigenen Teamkollegen Schaden zufügen. Die Standardeinstellung für diesen Befehl hängt vom Spielmodus ab. Bei Wettbewerbs-Spielmodi ist das Beschuss durch eigene Spieler aktiviert, bei Gelegenheitsspielen ist das nicht der Fall.



**mp_win_panel_display_time**

Mit diesem Befehl wird die Zeitspanne (in Sekunden) festgelegt, in der das Scoreboard zwischen den Runden angezeigt werden soll. Die Standardeinstellung ist 3 Sekunden.



**mp_respawn_immunitytime**

Mit diesem Befehl wird festgelegt, wie viele Sekunden lang Spieler nach ihrem Respawn immun sind. Dieser Befehl wird für den Deathmatch-Spielmodus verwendet.



**mp_halftime**

Mit diesem Befehl wird festgelegt, ob die Teams zur Halbzeit gewechselt werden oder nicht. Die Standardeinstellung ist 1.



**mp_maxmoney**

Mit diesem Befehl wird der maximale Geldbetrag festgelegt, den ein Spieler zu einem Zeitpunkt haben kann. 



**mp_maxrounds**

Mit diesem Befehl wird die maximale Anzahl der Runden festgelegt, die auf dem Server gespielt werden können bis die Map gewechselt wird.



**mp_roundtime**

Mit diesem Befehl wird festgelegt, wie viele Minuten eine Runde maximal dauert, bevor sie gewonnen/verloren wird. Bei Abbruch wird nach Ablauf dieser Zeit der Rundensieg an die Counter-Terroristen übergeben. Die Sekunden werden in Dezimalstellen angegeben, 1,92 = 1m55s.


mp_solid_teammates

Mit diesem Befehl wird festgelegt, ob du mit deinen Teamkameraden kollidieren kannst oder nicht.

- Wert: 0 - Kollision deaktiviert
- Wert: 1: Kollision aktiviert



**mp_startmoney**

Mit diesem Befehl wird festgelegt, wie viel Geld ein Spieler zu Beginn einer Halbzeit erhält. Der Standardwert beträgt 800$.



**mp_timelimit**

Mit diesem Befehl wird die maximale Dauer jedes Spiels in Minuten festgelegt. Standardmäßig ist dies deaktiviert (auf 0 gesetzt).



**mp_warmuptime**

Mit diesem Befehl wird festgelegt, wie lange die Aufwärmphase dauert, bevor das eigentliche Spiel startet. Die Zeit wird in Sekunden angegeben.

**sv_allow_votes**

Mit diesem Befehl wird festgelegt, ob Abstimmungen (z.B. Timeout-Abstimmungen) erlaubt sind oder nicht.

- Wert: 0 - Deaktiviert
- Wert: 1 - Aktiviert



**sv_infinite_ammo**

Mit diesem Befehl wird festgelegt ob Spieler unbegrenzt Munition bekommen.

- Wert: 1 - Unendliche Munition in der Waffe, mit der ewig ohne Nachladen geschossen werden kann.
- Wert: 2 -  Unendliche Anzahl an Munitionsmagazinen. Allerdings muss das Magazin nachgeladen werden, wenn es leer ist.



**ammo_grenade_limit_flashbang**

Mit diesem Befehl wird festgelegt, wie viele Flashgranaten ein Spieler tragen kann.

**ammo_grenade_limit_total**

Mit diesem Befehl wird festgelegt, wie viele Granaten ein Spieler insgesamt tragen kann.





## Esport-Ready Konfiguration (ESL Configs)

Wenn der Server aus E-Sport-Zwecken verwendet werden soll, dann lohnt es sich die Configs von der ESL hochzuladen. Diese kannst du über die offizielle Seite der ESL herunterladen: [Download](https://play.eslgaming.com/download/26251762/)

Die Configs müssen im Anschluss in das **cfg** Verzeichnis hochgeladen werden und können im Spiel mit den folgenden Befehlen ausgeführt werden:

```
rcon_password deinPasswort // Login via Rcon um rcon Befehle auszuführen
rcon exec esl5on5
```

Daraufhin werden alle ESL-Befehlswerte geladen und das Spiel kann gestartet werden!
