---
id: cs2-configuration
title: "CS2: Server-Konfiguration"
description: "Entdecke, wie du Counter-Strike-Server mit Gamemodes, Mapgroups und GSL-Tokens für optimales Gameplay konfigurierst → Jetzt mehr erfahren"
sidebar_label: Server-Konfiguration
services:
  - gameserver-dods-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Counter-Strike-Server lassen sich sehr vielfältig konfigurieren. Grundlegende Einstellungen kannst du über die **server.cfg**-Datei und über die Einstellungsseite im Webinterface vornehmen. Die erweiterte Konfiguration erfolgt über die Gamemode-Konfigurationsdateien wie gamemode_competitive.cfg, gamemode_custom.cfg, gamemode_casual.cfg, gamemode_cooperative.cfg und so weiter.

Unter den Einstellungen kannst du den Gamemode auswählen, den du nutzen möchtest. Die Befehle dieser Config werden dann entsprechend geladen. Diese können entweder in der Gameserver-Verwaltung oder manuell per FTP unter **gXXXXXX/cs2/game/csgo/cfg/** verwaltet werden.

<InlineVoucher />

## Konfiguration



### Konfiguration über das Interface (Einstellungen)

Auf der Einstellungsseite kannst du grundlegende Einstellungen für den GSL-Token, Gametype/Gamemode, Mapgroup und mehr anpassen.

![](https://screensaver01.zap-hosting.com/index.php/s/eafHZL86Zr6QyGk/preview)



**GSL Token**

Gameserver Login Tokens (GSLTs) sind ein Verfahren, das Steam als Schutzmaßnahme eingeführt hat. Um Gameserver für bestimmte Steam-Spiele (hauptsächlich Source-Spiele) zu betreiben, ist es notwendig, einen Token zu generieren. Mehr Details findest du hier:

[GSL-Token](source-gsltoken.md)



**Gametype**

Es gibt verschiedene Gamemodes. Hier siehst du eine Liste aller verfügbaren Optionen:

- Classic Casual
- Classic Competitive
- Deathmatch
- Wingman



**Mapgroup**

Mapgroups sind Gruppen von Maps, die normalerweise einer bestimmten Kategorie entsprechen. Standardmäßig gibt es die Gruppen **mg_active, mg_allclassic**. Optional kannst du eigene erstellen. Diese müssen in der **gamemodes_server.txt** hinzugefügt werden. Die Struktur einer solchen Mapgroup ist einfach aufgebaut und sieht so aus:

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



**Startmap**

Die Startmap bestimmt, welche Map beim Startvorgang geladen wird. Wichtig ist, dass der Name der Map vollständig und korrekt geschrieben wird. Die Dateiendung ist nicht notwendig.



**Pingboost**

Pingboost ist eine Methode, das Spielgefühl durch verschiedene Techniken zu verändern, um den niedrigstmöglichen Ping zu erreichen.



### Konfiguration über server.cfg

In der **server.cfg** kannst du Einstellungen wie Servername, Rcon-Passwort und Server-Passwort ändern.

![](https://screensaver01.zap-hosting.com/index.php/s/9k98oi89CeEB3ka/preview)



**hostname**

Der Hostname definiert den Namen des Servers. Der Name wird in der Serverliste und im Scoreboard angezeigt.



**rcon_password**

Das rcon_password wird benötigt, um Serverbefehle im Spiel oder über Rcon-Tools wie HLSW auszuführen. Das funktioniert mit folgenden Befehlen:

```
rcon_password DeinPasswort
rcon command // Zum Beispiel: rcon changelevel de_dust2
```



**sv_password**

Wenn du deinen Server privat nutzen möchtest oder nur bestimmten Leuten Zugang geben willst, kannst du ein Server-Passwort setzen. Beim Verbinden mit dem Server wirst du dann nach dem Passwort gefragt.



**sv_cheats**

Bestimmte Befehle sind geschützt und können nur genutzt werden, wenn Cheats aktiviert sind. Der Befehl kann mit dem Wert 0 (deaktiviert) oder 1 (aktiviert) ein- oder ausgeschaltet werden. Geschützte Befehle sind zum Beispiel:

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 und einige mehr.



### Gamemode-spezifische Konfiguration

Wie am Anfang beschrieben, kannst du den Gamemode/Gametype, den du nutzen möchtest, im Interface auf der Einstellungsseite definieren. Danach musst du deine Einstellungen anpassen und die entsprechende Config-Datei modifizieren. In den Gamemode-Configs kannst du detaillierte Änderungen am Gameplay, Bot-Verhalten etc. vornehmen.



#### Bot-Befehle



**bot_chatter**  
Dieser Befehl definiert, was die Bots im Spiel sagen dürfen. Er kann auf off, radio, minimal oder normal gesetzt werden.



**bot_difficulty**  
Dieser Befehl definiert, wie schwer die Bots sind. Folgende Werte sind möglich:  

- 0 - leicht
- 1 - normal
- 2 - schwer
- 3 - experte



**bot_quota**  
Dieser Befehl definiert die maximale Anzahl an Bots, die auf deinem Server sein können. Der Standardwert ist 10.



**bot_quota_mode**  
Dieser Befehl definiert den Modus, mit dem die Anzahl der Bots gesteuert wird. Optionen sind: normal, fill und match. Normal ist das Standardverhalten. Fill füllt den Server mit so vielen Bots, wie unter "bot_quota" eingestellt sind. Match füllt die Spielerplätze auf. Wenn z.B. 3 Spieler verbunden sind und 10 Bots eingestellt sind, werden nur 7 Bots genutzt.




#### Geld-Befehle

**cash_player_bomb_defused**  
Dieser Befehl definiert, wie viel Geld ein Spieler für das Entschärfen einer Bombe bekommt. Du kannst nicht mehr als den maximalen Geldbetrag vergeben, der auf dem Server möglich ist.



**cash_player_bomb_planted**  
Dieser Befehl definiert, wie viel Geld ein Spieler für das Legen der Bombe erhält.



**cash_player_damage_hostage**  
Dieser Befehl definiert, wie viel Geld abgezogen oder verdient wird, wenn ein Geisel verletzt wird. Standardmäßig werden dem Spieler $30 abgezogen, wenn die Geisel verletzt wird.



**cash_player_interact_with_hostage**  
Dieser Befehl definiert, wie viel Geld für die Interaktion mit einer Geisel verdient oder verloren wird.



**cash_player_killed_enemy_default**  
Dieser Befehl definiert, wie viel Geld man für das Töten eines gegnerischen Spielers mit einer Standardwaffe bekommt oder verliert.



**cash_player_killed_enemy_factor**  
Dieser Befehl definiert, wie viel Geld man für das Töten eines gegnerischen Spielers mit einer der Hauptwaffen (Standardpistolen, Primärgewehre wie AK/M4 etc.) bekommt.



**cash_player_killed_hostage**  
Dieser Befehl definiert, wie viel Geld man für das Töten einer Geisel bekommt oder verliert.



**cash_player_killed_teammate**  
Dieser Befehl definiert, wie viel Geld man für das Töten eines Teamkollegen bekommt oder verliert.



**cash_player_rescued_hostage**  
Dieser Befehl definiert, wie viel Geld man für das sichere Retten einer Geisel im Geisel-Modus bekommt oder verliert.



**cash_team_elimination_bomb_map**  
Dieser Befehl definiert, wie viel Geld jedes Teammitglied bekommt, wenn alle 5 Gegner auf einer Bombenentschärfungskarte wie Mirage oder Dust II getötet werden.



**cash_team_elimination_hostage_map_t**  
Dieser Befehl definiert, wie viel Geld jeder Terrorist für den Gewinn einer Runde auf einer Geiselkarte durch Eliminierung bekommt.



**cash_team_elimination_hostage_map_ct**  
Dieser Befehl definiert, wie viel Geld jedes Teammitglied auf der CT-Seite bekommt, wenn alle 5 Terroristen auf einer Geiselkarte eliminiert werden.



**cash_team_hostage_alive**  
Dieser Befehl definiert, wie viel Geld verdient oder verloren wird, wenn eine Geisel die Runde überlebt.



**cash_team_hostage_interaction**  
Dieser Befehl definiert, wie viel Geld ein Spieler für die Interaktion mit einer Geisel verdient oder verliert.



**cash_team_loser_bonus**  
Dieser Befehl definiert das Startgeld, das ein Team für das Verlieren einer Runde bekommt. Dieses erhöht sich in festen Schritten, die durch einen separaten Befehl gesteuert werden.



**cash_team_loser_bonus_consecutive_rounds**  
Dieser Befehl definiert, um wie viel Geld der Verlustbonus bei aufeinanderfolgenden Niederlagen erhöht wird. Wenn dieser Wert $500 beträgt (Standardeinstellung), bedeutet das, dass jede weitere verlorene Runde dem Verliererteam $500 mehr gibt als die vorherige. Das gilt für bis zu 5 aufeinanderfolgende Niederlagen.



**cash_team_planted_bomb_but_defused**  
Dieser Befehl definiert, wie viel Geld das Terroristenteam für das Legen einer Bombe bekommt, die letztlich entschärft wird. Das **stapelt sich mit dem Rundenverlust-Bonus**. Der Standardwert ist $800.



**cash_team_rescued_hostage**  
Dieser Befehl definiert, wie viel Geld **das ganze Team** bekommt, wenn ein Spieler die Geisel rettet.



**cash_team_terrorist_win_bomb**  
Dieser Befehl definiert, wie viel Geld jeder Spieler des Terroristenteams gewinnt, wenn sie eine Runde durch die Explosion der Bombe gewinnen.



**cash_team_win_by_defusing_bomb**  
Dieser Befehl definiert, wie viel Geld das CT-Team für den Gewinn einer Runde durch Entschärfen der Bombe bekommt.



**cash_team_win_by_hostage_rescue**  
Dieser Cheat-Befehl definiert, wie viel Geld Teammitglieder gewinnen, wenn sie eine Runde durch das Retten einer Geisel gewinnen.



**cash_team_win_by_time_running_out_hostage**  
Dieser Befehl definiert, wie viel Geld das Team, das die Geiseln bewacht, gewinnt, wenn sie die Runde gewinnen, indem sie verhindern, dass Geiseln innerhalb der Zeit gerettet werden.



**cash_team_win_by_time_running_out_bomb**  
Dieser Befehl definiert, wie viel Geld die Spieler der Counter-Terroristen bekommen, wenn sie eine Runde gewinnen, weil die Zeit abgelaufen ist. Das bedeutet, dass die Terroristen keine Bombe gelegt oder nicht alle Counter-Terroristen in der vorgegebenen Zeit eliminiert haben.



#### Gameplay-Befehle



**mp_afterroundmoney**  
Dieser Befehl definiert, wie viel Geld jeder Spieler am Ende einer Runde bekommt, unabhängig von Sieg oder Niederlage. Der Standardwert ist 0 (der Gewinn-/Verlustbonus wird mit einem anderen Befehl eingestellt).



**mp_buytime**  
Dieser Befehl definiert die Zeit (in Sekunden), die Spieler nach Rundenstart haben, um Ausrüstung zu kaufen.



**mp_buy_anywhere**  
Dieser Befehl definiert, ob Spieler das Kaufmenü auch außerhalb der Kaufzone nutzen können. Beachte, dass die Kaufzeit trotzdem gilt.



**mp_death_drop_defuser**  
Dieser Befehl definiert, ob Defuse-Kits beim Tod fallen gelassen werden oder nicht.



**mp_death_drop_grenade**  
Dieser Befehl definiert, welche Granate (falls überhaupt) beim Tod eines Spielers fallen gelassen wird:

- Wert: 0 - Keine Granaten fallen lassen beim Tod
- Wert: 1 - Die wertvollste Granate fällt beim Tod



**mp_death_drop_gun**  
Dieser Befehl definiert, welche Waffe beim Tod eines Spielers fallen gelassen wird. Die Standardeinstellung ist 1 (die beste). Wähle eine der folgenden Optionen:

- Wert: 0 - Keine Waffen fallen lassen beim Tod
- Wert: 1 - Die beste Waffe fällt beim Tod
- Wert: 2 - Wenn der Spieler beim Tod eine Waffe in der Hand hat, wird diese fallen gelassen, sonst die wertvollste Waffe



**mp_defuser_allocation**  
Dieser Befehl definiert, ob Spieler zu Beginn der Runde kostenlos einen Defuser bekommen und wenn ja, wer:

- Wert: 1 - Keine kostenlosen Defuser
- Wert: 2 - Zufällige Spieler erhalten einen Defuser
- Wert: 3 - Alle Spieler erhalten einen Defuser



**mp_force_pick_time**  

Dieser Befehl definiert die Dauer in Sekunden, die ein Spieler hat, um ein Team auszuwählen. Nach Ablauf wird automatisch ein Team zugewiesen. Die Standarddauer ist 15 Sekunden.



**mp_forcecamera**

Dieser Befehl legt fest, wen Zuschauer sehen können (also wen Spieler beobachten können, wenn sie sterben). Siehe Argumentinformationen für Optionen:

- Wert: 0 - Tote Spieler können jeden Spieler beobachten
- Wert: 1 - Tote Spieler können nur ihre Teamkollegen beobachten
- Wert: 2 - Der Bildschirm wird schwarz bis zur nächsten Runde.



**mp_free_armor**

Dieser Befehl definiert, ob ein Spieler zu Beginn der Runde kostenlose Rüstung und Helm bekommt:

- Wert: 0 - Deaktiviert
- Wert: 1 - Aktiviert



**mp_freezetime**

Dieser Befehl definiert, wie lange Spieler zu Beginn jeder Runde eingefroren sind. Diese Freeze-Zeit erlaubt es, Ausrüstung zu kaufen und Taktiken zu besprechen. Standard sind 15 Sekunden.



**mp_friendlyfire**

Dieser Befehl definiert, ob Friendly Fire aktiviert oder deaktiviert ist. Wenn Friendly Fire aktiviert ist, können Spieler ihren eigenen Teamkollegen Schaden zufügen. Die Standardeinstellung hängt vom Gamemode ab. In Competitive ist Friendly Fire aktiviert, in Casual nicht.



**mp_win_panel_display_time**

Dieser Befehl definiert die Zeit (in Sekunden), wie lange das Scoreboard zwischen den Runden angezeigt wird. Standard sind 3 Sekunden.



**mp_respawn_immunitytime**

Dieser Befehl definiert, wie viele Sekunden Spieler nach dem Respawn immun sind. Dieser Befehl wird im Deathmatch-Gamemode genutzt.



**mp_halftime**

Dieser Befehl definiert, ob die Teams zur Halbzeit gewechselt werden oder nicht. Der Standardwert ist 1.



**mp_maxmoney**

Dieser Befehl definiert den maximalen Geldbetrag, den ein Spieler haben kann.



**mp_maxrounds**

Dieser Befehl definiert die maximale Anzahl an Runden, die der Server spielt.



**mp_roundtime**

Dieser Befehl definiert, wie viele Minuten eine Runde maximal dauert, bevor sie gewonnen/verloren ist. Wenn die Runde nach dieser Zeit abgebrochen wird, gewinnt das Counter-Terroristen-Team. Die Sekunden werden als Dezimalzahl angegeben, z.B. 1.92 = 1m55s.



**mp_solid_teammates**

Dieser Befehl definiert, ob du mit deinen Teamkollegen kollidieren kannst oder nicht:

- Wert: 0 - Kollision deaktiviert
- Wert: 1 - Kollision aktiviert



**mp_startmoney**

Dieser Befehl definiert, wie viel Geld ein Spieler zu Beginn einer Halbzeit bekommt. Der Standardwert ist $800.



**mp_timelimit**

Dieser Befehl definiert die maximale Spieldauer in Minuten. Standardmäßig ist das deaktiviert (auf 0 gesetzt).



**mp_warmuptime**

Dieser Befehl definiert, wie lange die Aufwärmphase vor dem eigentlichen Spiel dauert. Die Zeit wird in Sekunden angegeben.



**sv_allow_votes**

Dieser Befehl definiert, ob Abstimmungen (z.B. Timeout-Voting) erlaubt sind oder nicht:

- Wert: 0 - Deaktiviert
- Wert: 1 - Aktiviert



**sv_infinite_ammo**

Dieser Befehl definiert, ob Spieler unendlich Munition bekommen oder nicht:

- Wert: 1 - Unendlich Munition, die ohne Nachladen abgefeuert werden kann.
- Wert: 2 - Unendlich viele Munitionsmagazine. Das Magazin muss aber nachgeladen werden, wenn es leer ist.



**ammo_grenade_limit_flashbang**

Dieser Befehl definiert, wie viele Blendgranaten ein Spieler tragen kann.



**ammo_grenade_limit_total**

Dieser Befehl definiert, wie viele Granaten ein Spieler insgesamt tragen kann.

<InlineVoucher />