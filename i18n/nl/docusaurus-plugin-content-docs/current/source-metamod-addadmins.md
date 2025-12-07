---
id: source-metamod-addadmins
title: Word server admin
description: "Ontdek hoe je admin wordt door je Steam ID te achterhalen en permissies in te stellen voor serverbeheer → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Word admin

Om je als admin te registreren is het essentieel om Source- / Metamod te installeren.

Daarnaast heb je de Steam ID van je Steam-account nodig. Er zijn verschillende manieren om deze te krijgen. Je kunt een externe website gebruiken die deze service aanbiedt of de gameconsole gebruiken.

<InlineVoucher />

### SteamID via website

Open eerst het profiel in Steam en klik met de rechtermuisknop ergens in het profiel. Daar kun je de Steam URL van het profiel kopiëren.

![](https://screensaver01.zap-hosting.com/index.php/s/5xbii7Kzmpa33KE/preview)

Vervolgens kun je de URL invoeren op een van de volgende websites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/wiMssSGFEXWSF9R/preview)

Daarna krijg je naast de algemene accountinformatie ook de Steam ID te zien. Je hebt hier de **Steam ID 32** nodig:

```
steamID32: STEAM_0:1:XXXXXX
```

### SteamID via gameconsole

Start het spel en verbind met je server. Open de gameconsole en gebruik het commando 'status'. Je krijgt dan de volgende output:

```
] status
Connected to XXX.XXX.XXX.XX:XXXXX
hostname: Server Hosted by ZAP-Hosting.com
version : 1.37.1.1 secure
os : Linux
type : community dedicated
map : en_dust2
players : 1 humans, 0 bots (16/0 max) (not hibernating)

# userid name uniqueid connected ping loss state rate
# 2 1 "Player name" STEAM_1:1:XXXXXXXXX 44:39 30 0 active 196608
#end
```

### Config

Verbind daarna weer met de server via FTP en open het bestand admins.cfg. Dit vind je in de map: addons/sourcemod/configs

Het bestand bevat al een voorbeeld van hoe een admin entry eruit kan zien. Je kunt dit kopiëren en vervolgens als volgt invullen:

```
Admins
{
	"Player name"
	{
		"auth" "steam"
		"identity" "STEAM_0:1:XXXXX"
		"flags" "abcdef"
	}
}
```

De **player name** hoeft **niet** overeen te komen met de naam van het Steam-account. Dit is puur voor overzicht in de config. De entry 'auth' staat voor authenticatie. Dit staat vast op Steam, dus dat hoef je niet aan te passen. Bij `identity` vul je de SteamID32 van het Steam-account in. Met `flags` geef je de rechten aan. Er zijn verschillende permissieniveaus.

| permissie | flag | gebruik |
| ------------|:----:|:--------:|
| reservering | a || slot reservering |
| algemeen | b | basisrechten (noodzakelijk) |
| kick | c || spelers kicken |
| ban | d || spelers verbannen |
| unban | e || spelers unbannen |
| slay | f || spelers doden |
| changemap | g | maps wisselen |
| cvar | h | serverwaarden aanpassen |
| config | i | serverconfig draaien |
| chat | j | uitgebreide chatrechten |
| vote | k | admin votes |
| wachtwoord | l || server wachtwoord instellen |
| rcon | m | RCON commando’s uitvoeren |
| cheats | n | sv_cheats in het spel activeren |
| root | z | volledige toegang |

Afhankelijk van welke rechten je wilt geven, schrijf je de bijbehorende flags achter elkaar. Wil je bijvoorbeeld alleen kickrechten geven, dan gebruik je de flags 'b' en 'c'. Voor volledige toegang is alleen de flag `z` nodig.

### Admin Menu gebruiken

Met het commando 'admin' in de chat of 'sm_admin' in de console open je het menu.

![](https://screensaver01.zap-hosting.com/index.php/s/jwLWXJ99XeJJGSK/preview)

<InlineVoucher />