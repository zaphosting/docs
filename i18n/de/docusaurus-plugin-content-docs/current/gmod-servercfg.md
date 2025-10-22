---
id: gmod-servercfg
title: "Garry's Mod: Server.cfg Einstellungen"
description: "Konfiguriere deine Garry's Mod Server-Einstellungen, um Gameplay und Spawn-Limits für ein optimiertes Erlebnis anzupassen → Jetzt mehr erfahren"
sidebar_label: Garry's Mod Server.cfg Anpassung
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Passe deine server.cfg in Garry's Mod an.

Um die server.cfg direkt über unser Webinterface zu ändern, gehen wir zum Configs-Tab.

![](https://screensaver01.zap-hosting.com/index.php/s/TNFHX38G5PNpqac/preview)

Danach öffnen wir die server.cfg in unserem integrierten Config-Editor.

![](https://screensaver01.zap-hosting.com/index.php/s/Pro5QoBBKSQCTdF/preview)

Du bist jetzt in unserem Config-Editor, hier kannst du alle Variablen nach Wunsch anpassen. Bitte achte darauf, die Einstellungen im Settings-Tab und in der server.cfg nicht zu vermischen, da das Auswirkungen auf Hostname, rcon_password und sv_password haben kann.

Mögliche Variablen zur Anpassung deines Garry's Mod Servers:

Spawn-Einstellungen:
```
sbox_maxprops 150		//Legt das maximale Limit an Props fest, die ein Spieler haben kann.
sbox_maxragdolls 10		//Legt das maximale Limit an Ragdolls fest, die ein Spieler haben kann.
sbox_maxballoons 10		//Legt das maximale Limit an Ballons fest, die ein Spieler haben kann.
sbox_maxeffects 10		//Legt das maximale Limit an Effekten fest, die ein Spieler haben kann. (FPS-sensitiv)
sbox_maxdynamite 10		//Legt das maximale Limit an Dynamit fest, das ein Spieler haben kann.
sbox_maxlamps 10		//Legt das maximale Limit an Lampen fest, die ein Spieler haben kann.
sbox_maxthrusters 10	//Legt das maximale Limit an Thrusters fest, die ein Spieler haben kann.
sbox_maxwheels 10		//Legt das maximale Limit an Rädern fest, die ein Spieler haben kann.
sbox_maxnpcs 10			//Legt das maximale Limit an NPCs fest, die ein Spieler haben kann.
sbox_maxhoverballs 10	//Legt das maximale Limit an Hoverballs fest, die ein Spieler haben kann.
sbox_maxvehicles 10		//Legt das maximale Limit an Fahrzeugen fest, die ein Spieler haben kann.
sbox_maxbuttons 10		//Legt das maximale Limit an Buttons fest, die ein Spieler haben kann.
```

Spiel-Einstellungen:
```
sbox_plpldamage 0 / 1	//0 = PVP aus, 1 = PVP an
sbox_godmode	0 / 1	//0 = aus, 1 = an (Godmode für alle Spieler)
sbox_noclip		0 / 1	//0 = Noclip aus, 1 = Noclip an
sv_noclipaccelerate 3	//Ändert die Geschwindigkeit von Noclip.
sv_alltalk 1			//Wenn aktiviert, kannst du mit jedem Spieler auf dem Server sprechen.
```

Netzwerkbezogene Einstellungen (Keine Änderungen empfohlen)
```
sv_minrate 0			//Niedrigste Verbindungsgeschwindigkeit
sv_maxrate 10000		//Höchste Verbindungsgeschwindigkeit
sv_minupdaterrate 10	//Niedrigste Tickrate
sv_maxupdaterrate 66	//Höchste Tickrate
net_maxfilesize	64		//Größte Dateigröße, die ohne FastDL übertragen werden kann.
sv_lan 0				//Macht das Spiel zu einem Online-Spiel.
sv_region 3				//0+1 = USA, 2 = Südafrika, 3 = Europa, 4 = Asien, 5 = Australien, 6 = Naher Osten, 7 = Afrika, 255 = Weltweit
```

Wenn du alles nach Wunsch geändert hast, musst du deine Änderungen nur noch speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/zpaddQA5EXfSRM3/preview)

Nach einem Server-Neustart sind alle Änderungen aktiv.

<InlineVoucher />