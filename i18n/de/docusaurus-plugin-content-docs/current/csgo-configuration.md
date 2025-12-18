---
id: csgo-configuration
title: "CSGO: Server-Konfiguration"
description: "Entdecke, wie du Counter-Strike-Server für verschiedene Spielmodi und Einstellungen konfigurierst, um das Gameplay zu optimieren → Jetzt mehr erfahren"
sidebar_label: Server-Konfiguration
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archivierte Anleitung
Dieses Dokument wurde archiviert. Dokumente werden archiviert, wenn sie nicht mehr relevant, fehlerhaft oder veraltet sind. Es wurde aus folgenden Gründen archiviert:

Grund: CS:GO wird nicht mehr aktiv angeboten und nicht weiterentwickelt. CS2 ist der Nachfolger von CS:GO. Wir empfehlen den Wechsel zu CS2.
::::



## Einführung

Counter-Strike-Gameserver können sehr vielfältig konfiguriert werden. Grundlegende Einstellungen lassen sich über die **Server.cfg**-Datei und über die Einstellungsseite im Webinterface vornehmen. Die erweiterte Konfiguration erfolgt über die Gamemode-Config-Dateien wie gamemode_competitive.cfg, gamemode_custom.cfg, gamemode_casual.cfg, gamemode_cooperative.cfg, gamemode_demolition.cfg usw.

Unter den Einstellungen kannst du den gewünschten Spielmodus auswählen. Die Befehle dieser Config werden dann entsprechend geladen. Diese können entweder über die Gameserver-Verwaltung oder manuell per FTP unter **gXXXXXX/csgo/csgo/cfg/** verwaltet werden. 


<InlineVoucher />

## Konfiguration


### Konfiguration über das Interface (Einstellungen)

Auf der Einstellungsseite kannst du grundlegende Einstellungen für den GSL-Token, Spieltyp/-modus, Mapgroup, Tickrate und mehr anpassen.  

![](https://screensaver01.zap-hosting.com/index.php/s/rfHJDH8e4mSQ4Mg/preview)



**GSL Token**

Gameserver Login Tokens (GSLTs) sind ein von Steam implementiertes Schutzverfahren. Um Gameserver für bestimmte Steam-Spiele (hauptsächlich Source-Spiele) zu betreiben, muss ein Token generiert werden. Mehr Infos findest du hier:

[GSL-Token](source-gsltoken.md)



**Spieltyp**

Es gibt verschiedene Spielmodi. Hier eine Liste aller verfügbaren Optionen:

- Classic Casual
- Classic Competitive
- Arms Race
- Demolition
- Deathmatch
- Wingman



**Mapgroup**

Mapgroups sind Gruppen von Maps, die normalerweise einer bestimmten Kategorie entsprechen. Standardmäßig gibt es die Gruppen **mg_active, mg_armsrace, mg_demolition, mg_allclassic**. Optional kannst du eigene erstellen. Diese müssen in der **Gamemodes_server.txt** hinzugefügt werden. Die Struktur einer Mapgroup ist einfach und sieht so aus:

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

Die eingestellte Tickrate bestimmt, wie oft der Server die Position eines Spielers an die anderen Spieler sendet. Je höher der Wert, desto besser das Spielerlebnis. Folgende Werte sind möglich: 33, 64, 100 und 128 (bester Wert). 



**Startmap**

Die Startmap legt fest, welche Map beim Serverstart geladen wird. Wichtig ist, dass der Name der Map vollständig und korrekt geschrieben wird. Die Dateiendung ist nicht notwendig. 



**Pingboost**

Pingboost ist eine Methode, das Spielgefühl durch verschiedene Techniken zu verbessern, um den niedrigstmöglichen Ping zu erreichen.



### Konfiguration über server.cfg

In der **server.cfg** kannst du Einstellungen wie Servername, RCON-Passwort und Serverpasswort ändern. 

![](https://screensaver01.zap-hosting.com/index.php/s/RRyRgMzwaQPTR8b/preview)



**hostname**

Der Hostname definiert den Namen des Servers. Dieser wird in der Serverliste und im Scoreboard angezeigt.



**rcon_password**

Das rcon_password wird benötigt, um Serverbefehle im Spiel oder via Rcon-Tools wie HLSW auszuführen. Das funktioniert mit folgenden Befehlen:

```
rcon_password DeinPasswort
rcon command // Zum Beispiel: rcon changelevel de_dust2
```



**sv_password**

Wenn du deinen Server privat halten möchtest oder nur bestimmten Leuten Zugang geben willst, kannst du ein Serverpasswort setzen. Beim Verbinden zum Server wird dann nach dem Passwort gefragt.



**sv_cheats**

Bestimmte Befehle sind geschützt und können nur genutzt werden, wenn Cheats aktiviert sind. Der Befehl kann mit 0 (deaktiviert) oder 1 (aktiviert) gesetzt werden. Geschützte Befehle sind z.B.:

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 und weitere.



### Gamemode-spezifische Konfiguration

Wie am Anfang beschrieben, kannst du den gewünschten Spielmodus/-typ im Interface auf der Einstellungsseite auswählen. Danach musst du deine Einstellungen anpassen und die entsprechende Config-Datei modifizieren. In den Gamemode-Configs kannst du detaillierte Änderungen am Gameplay, Bot-Verhalten usw. vornehmen.



#### Bot-Befehle



**bot_chatter**
Dieser Befehl definiert, was die Bots im Spiel sagen dürfen. Er kann auf off, radio, minimal oder normal gesetzt werden.



**bot_difficulty**
Dieser Befehl definiert die Schwierigkeit der Bots. Folgende Werte sind möglich:  

- 0 - leicht
- 1 - normal
- 2 - schwer
- 3 - Experte



**bot_quota**
Dieser Befehl definiert die maximale Anzahl an Bots, die auf deinem Server sein können. Der Standardwert ist 10.



**bot_quota_mode**
Dieser Befehl definiert den Modus, mit dem die Anzahl der Bots gesteuert wird. Optionen sind: normal, fill und match. Normal ist das Standardverhalten. Fill füllt den Server mit so vielen Bots, wie bei "bot_quota" eingestellt. Match füllt die Spielerplätze auf. Wenn z.B. 3 Spieler verbunden sind und 10 Bots eingestellt sind, werden nur 7 Bots genutzt.




#### Geld-Befehle

**cash_player_bomb_defused**
Dieser Befehl definiert, wie viel Geld ein Spieler für das Entschärfen einer Bombe erhält. Es kann nicht mehr als der maximale Geldbetrag vergeben werden, der auf dem Server möglich ist.



**cash_player_bomb_planted**
Dieser Befehl definiert, wie viel Geld ein Spieler für das Legen der Bombe bekommt.



**cash_player_damage_hostage**
Dieser Befehl definiert, wie viel Geld abgezogen oder verdient wird, wenn ein Geisel verletzt wird. Standardmäßig werden dem Spieler $30 abgezogen, wenn die Geisel verletzt wird.



**cash_player_interact_with_hostage**
Dieser Befehl definiert, wie viel Geld für die Interaktion mit einer Geisel verdient oder verloren wird.



**cash_player_killed_enemy_default**
Dieser Befehl definiert, wie viel Geld man für das Töten eines Gegners mit einer Standardwaffe bekommt oder verliert.



**cash_player_killed_enemy_factor**
Dieser Befehl definiert, wie viel Geld man für das Töten eines Gegners mit einer Hauptwaffe (Standardpistolen, Primärgewehre wie AK/M4 etc.) bekommt.



**cash_player_killed_hostage**
Dieser Befehl definiert, wie viel Geld man für das Töten einer Geisel bekommt oder verliert.



**cash_player_killed_teammate**
Dieser Befehl definiert, wie viel Geld man für das Töten eines Teamkollegen bekommt oder verliert.



**cash_player_rescued_hostage**
Dieser Befehl definiert, wie viel Geld man für das sichere Retten einer Geisel im Geiselmodus bekommt oder verliert.



**cash_team_elimination_bomb_map**
Dieser Befehl definiert, wie viel Geld jedes Teammitglied bekommt, wenn alle 5 Gegner auf einer Bombenentschärfungskarte wie Mirage oder Dust II getötet werden.



**cash_team_elimination_hostage_map_t**
Dieser Befehl definiert, wie viel Geld jeder Terrorist für den Gewinn einer Runde durch Eliminierung auf einer Geiselkarte bekommt.



**cash_team_elimination_hostage_map_ct**
Dieser Befehl definiert, wie viel Geld jedes CT-Teammitglied bekommt, wenn alle 5 Terroristen auf einer Geiselkarte eliminiert werden.



**cash_team_hostage_alive**
Dieser Befehl definiert, wie viel Geld verdient oder verloren wird, wenn eine Geisel die Runde überlebt. 



**cash_team_hostage_interaction**
Dieser Befehl definiert, wie viel Geld ein Spieler für die Interaktion mit einer Geisel verdient oder verliert.



**cash_team_loser_bonus**
Dieser Befehl definiert das Startgeld, das ein Team für das Verlieren einer Runde erhält. Dieses erhöht sich in festen Schritten, die durch einen separaten Befehl gesteuert werden.



**cash_team_loser_bonus_consecutive_rounds**
Dieser Befehl definiert, um wie viel Geld der Verlustbonus bei aufeinanderfolgenden Niederlagen erhöht wird. Wenn dieser Wert $500 beträgt (Standardeinstellung), bedeutet das, dass jede weitere verlorene Runde dem Verliererteam $500 mehr gibt als die vorherige. Das gilt für bis zu 5 aufeinanderfolgende Runden.



**cash_team_planted_bomb_but_defused**
Dieser Befehl definiert, wie viel Geld das Terroristenteam für das Legen einer Bombe bekommt, die letztlich entschärft wird. Dies **stapelt sich mit dem Rundenverlust-Bonus**. Der Standardwert ist $800.



**cash_team_rescued_hostage**
Dieser Befehl definiert, wie viel Geld **das ganze Team** bekommt, wenn ein Spieler eine Geisel rettet.



**cash_team_terrorist_win_bomb**
Dieser Befehl definiert, wie viel Geld jeder Spieler des Terroristenteams gewinnt, wenn sie eine Runde durch die Explosion der Bombe gewinnen.



**cash_team_win_by_defusing_bomb**
Dieser Befehl definiert, wie viel Geld das CT-Team für den Gewinn einer Runde durch Entschärfen der Bombe bekommt.



**cash_team_win_by_hostage_rescue**
Dieser Cheat-Befehl definiert, wie viel Geld Teammitglieder gewinnen, wenn sie eine Runde durch das Retten einer Geisel gewinnen.



**cash_team_win_by_time_running_out_hostage**
Dieser Befehl definiert, wie viel Geld das Team, das die Geiseln bewacht, gewinnt, wenn sie die Runde gewinnen, weil keine Geiseln innerhalb der Zeit gerettet wurden.



**cash_team_win_by_time_running_out_bomb**
Dieser Befehl definiert, wie viel Geld die CT-Spieler für den Gewinn einer Runde erhalten, wenn die Zeit abläuft. Das bedeutet, dass die Terroristen keine Bombe gelegt oder nicht alle CTs innerhalb der Zeit eliminiert haben.



#### Gameplay-Befehle



**mp_afterroundmoney**
Dieser Befehl definiert, wie viel Geld jeder Spieler am Ende einer Runde erhält, unabhängig von Sieg oder Niederlage. Der Standardwert ist 0 (der Gewinn-/Verlustbonus wird mit einem anderen Befehl gesetzt).



**mp_buytime**
Dieser Befehl definiert die Zeit (in Sekunden), die Spieler nach Rundenstart haben, um Ausrüstung zu kaufen. 



**mp_buy_anywhere**
Dieser Befehl definiert, ob Spieler das Kaufmenü auch außerhalb der Kaufzone nutzen können. Beachte, dass die Kaufzeit weiterhin gilt. 



**mp_death_drop_defuser**
Dieser Befehl definiert, ob Defuse-Kits beim Tod fallen gelassen werden oder nicht. 



**mp_death_drop_grenade**
Dieser Befehl definiert, welche Granate (falls überhaupt) beim Tod eines Spielers fallen gelassen wird:

- Wert: 0 - Keine Granaten fallen lassen
- Wert: 1 - Die wertvollste Granate fallen lassen



**mp_death_drop_gun**
Dieser Befehl definiert, welche Waffe beim Tod eines Spielers fallen gelassen wird. Standard ist 1 (die beste). Optionen:

- Wert: 0 - Keine Waffen fallen lassen
- Wert: 1 - Die beste Waffe fallen lassen
- Wert: 2 - Wenn der Spieler beim Tod eine Waffe in der Hand hat, wird diese fallen gelassen, sonst die wertvollste Waffe



**mp_defuser_allocation**
Dieser Befehl definiert, ob Spieler zu Beginn der Runde kostenlos einen Defuser bekommen und wenn ja, wer:

- Wert: 1 - Keine kostenlosen Defuser
- Wert: 2 - Zufällige Spieler erhalten einen Defuser
- Wert: 3 - Alle Spieler erhalten einen Defuser



**mp_force_pick_time** 

Dieser Befehl definiert die Dauer in Sekunden, die ein Spieler hat, um ein Team auszuwählen. Nach Ablauf wird automatisch ein Team zugewiesen. Standard sind 15 Sekunden.



**mp_forcecamera**

Dieser Befehl legt fest, wen Zuschauer sehen können (also wen Spieler nach dem Tod beobachten können). Optionen:

- Wert: 0 - Tote Spieler können jeden Spieler beobachten
- Wert: 1 - Tote Spieler können nur ihre Teamkollegen beobachten
- Wert: 2 - Der Bildschirm wird schwarz bis zur nächsten Runde.



**mp_free_armor**

Dieser Befehl definiert, ob Spieler zu Beginn der Runde kostenlose Rüstung und Helm erhalten:

- Wert: 0 - Deaktiviert
- Wert: 1 - Aktiviert



**mp_freezetime**

Dieser Befehl definiert, wie lange Spieler zu Beginn jeder Runde eingefroren sind. Diese Zeit erlaubt es, Ausrüstung zu kaufen und Taktiken zu besprechen. Standard sind 15 Sekunden.



**mp_friendlyfire**

Dieser Befehl definiert, ob Friendly Fire aktiviert ist. Wenn aktiviert, können Spieler ihren Teamkollegen Schaden zufügen. Standard hängt vom Spielmodus ab: Im Competitive ist Friendly Fire an, im Casual nicht.



**mp_win_panel_display_time**

Dieser Befehl definiert die Zeit (in Sekunden), wie lange das Scoreboard zwischen den Runden angezeigt wird. Standard sind 3 Sekunden.



**mp_respawn_immunitytime**

Dieser Befehl definiert, wie viele Sekunden Spieler nach dem Respawn immun sind. Wird im Deathmatch-Modus genutzt.



**mp_halftime**

Dieser Befehl definiert, ob die Teams zur Halbzeit gewechselt werden. Standard ist 1.



**mp_maxmoney**

Dieser Befehl definiert das maximale Geld, das ein Spieler haben kann.



**mp_maxrounds**

Dieser Befehl definiert die maximale Anzahl an Runden, die der Server spielt.



**mp_roundtime**

Dieser Befehl definiert, wie viele Minuten eine Runde maximal dauert, bevor sie gewonnen/verloren ist. Wenn die Runde nach dieser Zeit abgebrochen wird, gewinnt das CT-Team. Sekunden werden als Dezimalzahl angegeben, z.B. 1.92 = 1m55s.



**mp_solid_teammates**

Dieser Befehl definiert, ob man mit Teamkollegen kollidieren kann:

- Wert: 0 - Kollision deaktiviert
- Wert: 1 - Kollision aktiviert



**mp_startmoney**

Dieser Befehl definiert, wie viel Geld ein Spieler zu Beginn einer Halbzeit erhält. Standard sind $800.



**mp_timelimit**

Dieser Befehl definiert die maximale Spieldauer in Minuten. Standard ist deaktiviert (0).



**mp_warmuptime**

Dieser Befehl definiert, wie lange die Aufwärmphase vor dem eigentlichen Spiel dauert. Zeit in Sekunden.



**sv_allow_votes**

Dieser Befehl definiert, ob Abstimmungen (z.B. Timeout-Voting) erlaubt sind:

- Wert: 0 - Deaktiviert
- Wert: 1 - Aktiviert



**sv_infinite_ammo**

Dieser Befehl definiert, ob Spieler unendlich Munition haben:

- Wert: 1 - Unendlich Munition ohne Nachladen
- Wert: 2 - Unendlich Magazine, aber Nachladen ist nötig



**ammo_grenade_limit_flashbang**

Dieser Befehl definiert, wie viele Blendgranaten ein Spieler tragen kann.



**ammo_grenade_limit_total**

Dieser Befehl definiert, wie viele Granaten ein Spieler insgesamt tragen kann.





### Esport-Ready Konfiguration (ESL Configs)

Wenn du den Server für E-Sport-Zwecke nutzen willst, lohnt es sich, die von ESL bereitgestellten Configs hochzuladen. Du kannst sie auf der offiziellen ESL-Seite herunterladen: [Download](https://play.eslgaming.com/download/26251762/)

Die Configs müssen in das **cfg**-Verzeichnis hochgeladen werden und können im Spiel mit folgenden Befehlen ausgeführt werden:

```
rcon_password DeinPasswort // Login via RCON, um RCON-Befehle auszuführen
rcon exec esl5on5
```

Danach werden alle ESL-Befehlswerte geladen und das Spiel kann starten!

<InlineVoucher />