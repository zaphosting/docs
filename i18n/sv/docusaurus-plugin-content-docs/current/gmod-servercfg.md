---
id: gmod-servercfg
title: "Garry's Mod: Server.cfg-inställningar"
description: "Konfigurera dina Garry's Mod-serverinställningar för att anpassa gameplay och spawn-gränser för en optimerad upplevelse → Lär dig mer nu"
sidebar_label: Garry's Mod Server.cfg Modifiering
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Konfigurera din server.cfg i Garry's Mod.

För att ändra server.cfg direkt via vårt webbgränssnitt går vi till fliken Konfigurationer.

![](https://screensaver01.zap-hosting.com/index.php/s/TNFHX38G5PNpqac/preview)

Därefter öppnar vi server.cfg i vår inbyggda Konfig-Editor.

![](https://screensaver01.zap-hosting.com/index.php/s/Pro5QoBBKSQCTdF/preview)

Du är nu i vår Konfig-Editor, här kan du ändra alla variabler som du vill. Var noga med att inte blanda inställningar mellan vår Inställningar-flik och server.cfg då detta kan påverka: hostname, rcon_password och sv_password.

Möjliga variabler för att anpassa din Garry's Mod-server:

Spawn-inställningar:
```
sbox_maxprops 150		//Sätter maxgränsen för props en spelare kan ha.
sbox_maxragdolls 10		//Sätter maxgränsen för ragdolls en spelare kan ha.
sbox_maxballoons 10		//Sätter maxgränsen för ballonger en spelare kan ha.
sbox_maxeffects 10		//Sätter maxgränsen för effekter en spelare kan ha. (FPS-känsligt)
sbox_maxdynamite 10		//Sätter maxgränsen för dynamit en spelare kan ha.
sbox_maxlamps 10		//Sätter maxgränsen för lampor en spelare kan ha.
sbox_maxthrusters 10	//Sätter maxgränsen för thrusters en spelare kan ha.
sbox_maxwheels 10		//Sätter maxgränsen för hjul en spelare kan ha.
sbox_maxnpcs 10			//Sätter maxgränsen för NPCs en spelare kan ha.
sbox_maxhoverballs 10	//Sätter maxgränsen för hoverballs en spelare kan ha.
sbox_maxvehicles 10		//Sätter maxgränsen för fordon en spelare kan ha.
sbox_maxbuttons 10		//Sätter maxgränsen för knappar en spelare kan ha.
```

Spelinställningar:
```
sbox_plpldamage 0 / 1	//0 = PVP av, 1 = PVP på
sbox_godmode	0 / 1	//0 = av, 1 = på (Godmode för alla spelare)
sbox_noclip		0 / 1	//0 = Noclip av, 1 = Noclip på
sv_noclipaccelerate 3	//Ändrar hastigheten på noclip.
sv_alltalk 1			//Om aktiverat kan du höra alla spelare på servern.
```

Nätverksrelaterade inställningar (ändras ej rekommenderas)
```
sv_minrate 0			//Lägsta anslutningshastighet
sv_maxrate 10000		//Högsta anslutningshastighet
sv_minupdaterrate 10	//Lägsta tickrate
sv_maxupdaterrate 66	//Högsta tickrate
net_maxfilesize	64		//Högsta filstorlek som kan överföras utan FastDL.
sv_lan 0				//Gör spelet till ett online-spel.
sv_region 3				//0+1 = US, 2 = Sydafrika, 3 = Europa, 4 = Asien, 5 = Australien, 6 = Mellanöstern, 7 = Afrika, 255 = Världen
```

När du har ändrat allt som du vill, behöver du bara spara dina ändringar.

![](https://screensaver01.zap-hosting.com/index.php/s/zpaddQA5EXfSRM3/preview)

Efter en serveromstart är alla ändringar aktiva.

<InlineVoucher />