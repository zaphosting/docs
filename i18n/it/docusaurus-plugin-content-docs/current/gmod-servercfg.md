---
id: gmod-servercfg
title: "Garry's Mod: Impostazioni Server.cfg"
description: "Configura le impostazioni del tuo server Garry's Mod per personalizzare il gameplay e i limiti di spawn per un'esperienza ottimizzata → Scopri di più ora"
sidebar_label: Modifica Server.cfg Garry's Mod
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Configura il tuo server.cfg in Garry's Mod.

Per modificare direttamente il server.cfg tramite la nostra webinterface, vai alla scheda Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/TNFHX38G5PNpqac/preview)

Dopodiché apri il server.cfg nel nostro Config-Editor integrato.

![](https://screensaver01.zap-hosting.com/index.php/s/Pro5QoBBKSQCTdF/preview)

Ora sei nel nostro Config-Editor, qui puoi modificare tutte le variabili come preferisci. Assicurati di non mescolare le impostazioni tra la nostra scheda Settings e il server.cfg, perché potrebbe influenzare: hostname, rcon_password e sv_password.

Variabili possibili per personalizzare il tuo server Garry's Mod:

Impostazioni di spawn:
```
sbox_maxprops 150		//Imposta il limite massimo di props che un giocatore può avere.
sbox_maxragdolls 10		//Imposta il limite massimo di ragdoll che un giocatore può avere.
sbox_maxballoons 10		//Imposta il limite massimo di palloncini che un giocatore può avere.
sbox_maxeffects 10		//Imposta il limite massimo di effetti che un giocatore può avere. (Sensibile agli FPS)
sbox_maxdynamite 10		//Imposta il limite massimo di dinamite che un giocatore può avere.
sbox_maxlamps 10		//Imposta il limite massimo di lampade che un giocatore può avere.
sbox_maxthrusters 10	//Imposta il limite massimo di thruster che un giocatore può avere.
sbox_maxwheels 10		//Imposta il limite massimo di ruote che un giocatore può avere.
sbox_maxnpcs 10			//Imposta il limite massimo di NPC che un giocatore può avere.
sbox_maxhoverballs 10	//Imposta il limite massimo di hoverball che un giocatore può avere.
sbox_maxvehicles 10		//Imposta il limite massimo di veicoli che un giocatore può avere.
sbox_maxbuttons 10		//Imposta il limite massimo di pulsanti che un giocatore può avere.
```

Impostazioni di gioco:
```
sbox_plpldamage 0 / 1	//0 = PVP off, 1 = PVP on
sbox_godmode	0 / 1	//0 = off, 1 = on (Godmode per tutti i giocatori)
sbox_noclip		0 / 1	//0 = Noclip off, 1 = Noclip on
sv_noclipaccelerate 3	//Modifica la velocità del noclip.
sv_alltalk 1			//Se abilitato, puoi sentire tutti i giocatori sul server.
```

Impostazioni di rete (non consigliate modifiche)
```
sv_minrate 0			//Velocità minima di connessione
sv_maxrate 10000		//Velocità massima di connessione
sv_minupdaterrate 10	//Tickrate minimo
sv_maxupdaterrate 66	//Tickrate massimo
net_maxfilesize	64		//Dimensione massima dei file trasferibili senza FastDL.
sv_lan 0				//Imposta il gioco come online.
sv_region 3				//0+1 = US, 2 = Sud Africa, 3 = Europa, 4 = Asia, 5 = Australia, 6 = Medio Oriente, 7 = Africa, 255 = Worldwide
```

Se hai modificato tutto come vuoi, ti basta salvare le modifiche.

![](https://screensaver01.zap-hosting.com/index.php/s/zpaddQA5EXfSRM3/preview)

Dopo un riavvio del server, tutte le modifiche saranno attive.

<InlineVoucher />