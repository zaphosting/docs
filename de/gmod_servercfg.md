---
id: gmod_servercfg
title: Garry's Mod: Server.cfg Einstellungen
description: Informationen zu den Einstellungen der Datei server.cfg für deinen Garry's Mod Server von ZAP-Hosting - ZAP-Hosting.com Dokumentationen
sidebar_label: Garry's Mod Server.cfg Anpassungen
---

## Die korrekte Anpassung deiner Server.cfg

Um die server.cfg direkt zu bearbeiten wechseln wir in den "Configs"-Tab unseres Webinterfaces

![](https://screensaver01.zap-hosting.com/index.php/s/qeERFtRM2EJnJ6G/preview)

danach öffnen wir die server.cfg in unserem eingebauten Config-Editor.

![](https://screensaver01.zap-hosting.com/index.php/s/qJMDXjHP6jbZAsq/preview)

Du befindest dich nun in unserem Config-Editor und kannst die Variablen darin wie gewünscht anpassen. Achte bitte darauf das du unter Einstellungen nicht andere Werte festlegst als in der server.cfg, diese werden andernfalls überschrieben betrifft u.a. hostname, rcon_password, sv_password.

Mögliche Variablen um deinen Garry's Mod Server anzupassen:

Spawneinstellungen:
```
sbox_maxprops 150		//Stellt die maximale Anzahl der Props ein, welche ein Spieler haben kann.
sbox_maxragdolls 10		//Stellt die maximale Anzahl der Ragdolls ein, welche ein Spieler haben kann.
sbox_maxballoons 10		//Stellt die maximale Anzahl der Ballons ein, welche ein Spieler haben kann.
sbox_maxeffects 10		//Stellt die maximale Anzahl der Effects ein, welche ein Spieler haben kann. (Achtung FPS lastig)
sbox_maxdynamite 10		//Stellt die maximale Anzahl der Dynamites ein, welche ein Spieler haben kann.
sbox_maxlamps 10		//Stellt die maximale Anzahl der Lampen ein, welche ein Spieler haben kann.
sbox_maxthrusters 10	//Stellt die maximale Anzahl der Thruster ein, welche ein Spieler haben kann.
sbox_maxwheels 10		//Stellt die maximale Anzahl der Räder ein, welche ein Spieler haben kann.
sbox_maxnpcs 10			//Stellt die maximale Anzahl der NPC's ein, welche ein Spieler haben kann.
sbox_maxhoverballs 10	//Stellt die maximale Anzahl der Hoverballs ein, welche ein Spieler haben kann.
sbox_maxvehicles 10		//Stellt die maximale Anzahl der Fahrzeuge ein, welche ein Spieler haben kann.
sbox_maxbuttons 10		//Stellt die maximale Anzahl der Buttons ein, welche ein Spieler haben kann.
```

Spieleinstellungen:
```
sbox_plpldamage 0 / 1	//0 = PVP aus, 1 = PVP an
sbox_godmode	0 / 1	//0 = aus, 1 = an (Unverwundbarkeit)
sbox_noclip		0 / 1	//0 = Noclip aus, 1 = Noclip ein
sv_noclipaccelerate 3	//Definiert die Geschwindigkeit von Noclip
sv_alltalk 1			// Wenn aktiviert, kann im Voicechat jeder Spieler serverweit gehört werden.
```

Netzwerkspeziefische Einstellungen (Keine Änderung empfohlen)
```
sv_minrate 0			//Minimale Verbindungsgeschwindigkeit
sv_maxrate 10000		//Maximale Verbindungsgeschwindigkeit
sv_minupdaterrate 10	//Minimale Tickrate
sv_maxupdaterrate 66	//Maximale Tickrate
net_maxfilesize	64		//Maximale Dateigröße welche der Server direkt senden kann. (ohne FastDL)
sv_lan 0				//Definiert das es ein Online-Spiel ist.
sv_region 3				//0+1 = US, 2 = South Africa, 3 = Europe, 4 = Asia, 5 = Australia, 6 = Middle East, 7 = Africa, 255 = Worldwide
```

Sobald du alle Einstellungen vorgenommen hast welche du anpassen wolltest, muss nurnoch deine Änderung gespeichert werden.

![](https://screensaver01.zap-hosting.com/index.php/s/D4AK8RTQ3iADL64/preview)

Nach einem Serverneustart werden deine Änderungen automatisch übernommen.
