---
id: gmod-servercfg
title: "Garry's Mod: Server.cfg instellingen"
description: "Configureer je Garry's Mod serverinstellingen om gameplay en spawnlimieten aan te passen voor een optimale ervaring → Leer nu meer"
sidebar_label: Garry's Mod Server.cfg Aanpassing
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Stel je server.cfg in bij Garry's Mod.

Om de server.cfg direct via onze webinterface aan te passen, ga je naar het Configs-tabblad.

![](https://screensaver01.zap-hosting.com/index.php/s/TNFHX38G5PNpqac/preview)

Daarna open je de server.cfg in onze ingebouwde Config-Editor.

![](https://screensaver01.zap-hosting.com/index.php/s/Pro5QoBBKSQCTdF/preview)

Je bent nu in onze Config-Editor, hier kun je alle variabelen naar wens aanpassen. Let er wel op dat je de instellingen in ons Settings-tabblad en de server.cfg niet door elkaar haalt, dit kan invloed hebben op: hostname, rcon_password en sv_password.

Mogelijke variabelen om je Garry's Mod server te customizen:

Spawninstellingen:
```
sbox_maxprops 150		//Stelt de maximale limiet in van props die een speler kan hebben.
sbox_maxragdolls 10		//Stelt de maximale limiet in van ragdolls die een speler kan hebben.
sbox_maxballoons 10		//Stelt de maximale limiet in van ballonnen die een speler kan hebben.
sbox_maxeffects 10		//Stelt de maximale limiet in van effecten die een speler kan hebben. (FPS gevoelig)
sbox_maxdynamite 10		//Stelt de maximale limiet in van dynamiet die een speler kan hebben.
sbox_maxlamps 10		//Stelt de maximale limiet in van lampen die een speler kan hebben.
sbox_maxthrusters 10	//Stelt de maximale limiet in van thrusters die een speler kan hebben.
sbox_maxwheels 10		//Stelt de maximale limiet in van wielen die een speler kan hebben.
sbox_maxnpcs 10			//Stelt de maximale limiet in van NPC's die een speler kan hebben.
sbox_maxhoverballs 10	//Stelt de maximale limiet in van hoverballs die een speler kan hebben.
sbox_maxvehicles 10		//Stelt de maximale limiet in van voertuigen die een speler kan hebben.
sbox_maxbuttons 10		//Stelt de maximale limiet in van knoppen die een speler kan hebben.
```

Game-instellingen:
```
sbox_plpldamage 0 / 1	//0 = PVP uit, 1 = PVP aan
sbox_godmode	0 / 1	//0 = uit, 1 = aan (Godmode voor alle spelers)
sbox_noclip		0 / 1	//0 = Noclip uit, 1 = Noclip aan
sv_noclipaccelerate 3	//Verandert de snelheid van noclip.
sv_alltalk 1			//Als ingeschakeld, kun je met elke speler op de server praten.
```

Netwerk-gerelateerde instellingen (wij raden geen aanpassingen aan)
```
sv_minrate 0			//Laagste verbindingssnelheid
sv_maxrate 10000		//Hoogste verbindingssnelheid
sv_minupdaterrate 10	//Laagste tickrate
sv_maxupdaterrate 66	//Hoogste tickrate
net_maxfilesize	64		//Grootste bestandsgrootte die zonder FastDL kan worden overgedragen.
sv_lan 0				//Maakt van het spel een online game.
sv_region 3				//0+1 = VS, 2 = Zuid-Afrika, 3 = Europa, 4 = Azië, 5 = Australië, 6 = Midden-Oosten, 7 = Afrika, 255 = Wereldwijd
```

Als je alles naar wens hebt aangepast, hoef je alleen nog je wijzigingen op te slaan.

![](https://screensaver01.zap-hosting.com/index.php/s/zpaddQA5EXfSRM3/preview)

Na een server reboot zijn alle wijzigingen actief.

<InlineVoucher />