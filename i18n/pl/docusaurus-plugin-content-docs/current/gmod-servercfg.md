---
id: gmod-servercfg
title: "Garry's Mod: Ustawienia Server.cfg"
description: "Skonfiguruj ustawienia swojego serwera gier Garry's Mod, aby dostosować rozgrywkę i limity spawnów dla zoptymalizowanego doświadczenia → Dowiedz się więcej już teraz"
sidebar_label: Modyfikacja Server.cfg Garry's Mod
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Skonfiguruj swój server.cfg w Garry's Mod.

Aby zmienić server.cfg bezpośrednio przez nasz interfejs webowy, przejdź do zakładki Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/TNFHX38G5PNpqac/preview)

Następnie otwórz server.cfg w naszym wbudowanym edytorze konfiguracji.

![](https://screensaver01.zap-hosting.com/index.php/s/Pro5QoBBKSQCTdF/preview)

Jesteś teraz w naszym edytorze konfiguracji, tutaj możesz zmieniać wszystkie zmienne według uznania. Pamiętaj, aby nie mieszać ustawień między naszą zakładką Settings a server.cfg, ponieważ może to wpłynąć na: nazwę hosta, rcon_password oraz sv_password.

Możliwe zmienne do personalizacji Twojego serwera gier Garry's Mod:

Ustawienia spawnów:
```
sbox_maxprops 150		//Ustawia maksymalną liczbę propsów, które gracz może mieć.
sbox_maxragdolls 10		//Ustawia maksymalną liczbę ragdolli, które gracz może mieć.
sbox_maxballoons 10		//Ustawia maksymalną liczbę balonów, które gracz może mieć.
sbox_maxeffects 10		//Ustawia maksymalną liczbę efektów, które gracz może mieć. (Wrażliwe na FPS)
sbox_maxdynamite 10		//Ustawia maksymalną liczbę dynamitu, które gracz może mieć.
sbox_maxlamps 10		//Ustawia maksymalną liczbę lamp, które gracz może mieć.
sbox_maxthrusters 10	//Ustawia maksymalną liczbę napędów, które gracz może mieć.
sbox_maxwheels 10		//Ustawia maksymalną liczbę kół, które gracz może mieć.
sbox_maxnpcs 10			//Ustawia maksymalną liczbę NPC, które gracz może mieć.
sbox_maxhoverballs 10	//Ustawia maksymalną liczbę hoverballi, które gracz może mieć.
sbox_maxvehicles 10		//Ustawia maksymalną liczbę pojazdów, które gracz może mieć.
sbox_maxbuttons 10		//Ustawia maksymalną liczbę przycisków, które gracz może mieć.
```

Ustawienia gry:
```
sbox_plpldamage 0 / 1	//0 = PVP wyłączone, 1 = PVP włączone
sbox_godmode	0 / 1	//0 = wyłączony, 1 = włączony (tryb boga dla wszystkich graczy)
sbox_noclip		0 / 1	//0 = noclip wyłączony, 1 = noclip włączony
sv_noclipaccelerate 3	//Zmienia prędkość noclipa.
sv_alltalk 1			//Jeśli włączone, możesz rozmawiać z każdym graczem na serwerze.
```

Ustawienia sieciowe (zmiany niewskazane)
```
sv_minrate 0			//Minimalna prędkość połączenia
sv_maxrate 10000		//Maksymalna prędkość połączenia
sv_minupdaterrate 10	//Minimalny tickrate
sv_maxupdaterrate 66	//Maksymalny tickrate
net_maxfilesize	64		//Maksymalny rozmiar pliku, który można przesłać bez FastDL.
sv_lan 0				//Ustawia grę jako online.
sv_region 3				//0+1 = USA, 2 = Południowa Afryka, 3 = Europa, 4 = Azja, 5 = Australia, 6 = Bliski Wschód, 7 = Afryka, 255 = Cały świat
```

Gdy wszystko zmienisz według potrzeb, wystarczy zapisać zmiany.

![](https://screensaver01.zap-hosting.com/index.php/s/zpaddQA5EXfSRM3/preview)

Po restarcie serwera wszystkie zmiany będą aktywne.

<InlineVoucher />