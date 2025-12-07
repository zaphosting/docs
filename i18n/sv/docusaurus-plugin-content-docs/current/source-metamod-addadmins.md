---
id: source-metamod-addadmins
title: Bli serveradmin
description: "Upptäck hur du blir admin genom att få din Steam ID och ställa in rättigheter för serverhantering → Lär dig mer nu"
sidebar_label: Bli admin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Bli admin

För att kunna registrera dig som admin är installation av Source- / Metamod ett måste.

Dessutom behöver du Steam ID för ditt Steam-konto. Det finns flera sätt att få tag på detta. Antingen använder du en extern webbplats som erbjuder den tjänsten eller så använder du spelkonsolen.

<InlineVoucher />

### SteamID via webbplats

Först måste profilen öppnas i Steam och sedan högerklickar du var som helst i profilen. Där kan du kopiera Steam-URL:en för profilen.

![](https://screensaver01.zap-hosting.com/index.php/s/5xbii7Kzmpa33KE/preview)

Efter det kan URL:en anges på någon av följande webbplatser:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/wiMssSGFEXWSF9R/preview)

Därefter får du Steam ID tillsammans med allmän kontoinformation. Det är **Steam ID 32** som behövs:

```
steamID32: STEAM_0:1:XXXXXX
```

### SteamID via spelkonsol

Starta spelet och anslut till din server. Genom att öppna spelkonsolen och använda kommandot 'status' får du följande utskrift:

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

### Konfiguration

Anslut sedan till servern igen via FTP och öppna admins.cfg-konfigfilen. Den finns i följande mapp: addons/sourcemod/configs

Filen innehåller redan ett exempel på hur en admin-post kan se ut. Du kan kopiera detta och sedan skriva in det så här:

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

**Spelarnamnet** behöver **inte** matcha namnet på Steam-kontot. Det används bara för översikt i konfigurationen. Posten 'auth' står för autentisering. Här är Steam fastställt, så det behöver du inte ändra. Under `identity` skriver du in SteamID32 för Steam-kontot. Med `flags` menas rättigheterna. Det finns olika nivåer av behörigheter.

| rättighet | flagga | användning |
| ------------|:----:|:--------:|
| reservation | a || slot reservation |
| grundläggande | b | basfunktioner (nödvändigt) |
| kick | c || sparka spelare |
| ban | d || banna spelare |
| unban | e || släppa spelare |
| slay | f || slå eller döda spelare |
| changemap | g | byta karta |
| cvar | h | ändra servervärden |
| config | i | köra serverkonfigurationer |
| chat | j | avancerade chatträttigheter |
| vote | k | adminröstningar |
| password | l || sätta serverlösenord |
| rcon | m | köra RCON-kommandon |
| cheats | n | aktivera sv_cheats i spelet |
| root | z | full tillgång |

Beroende på vilka rättigheter som ska ges kan respektive flaggor skrivas efter varandra. Om du till exempel bara vill ge rättigheter att sparka, ger du flaggorna 'b' och 'c'. Vill du ge full tillgång räcker det med flaggan `z`.

### Använda Admin-menyn

Med kommandot 'admin' i chatten eller 'sm_admin' i konsolen öppnas menyn.

![](https://screensaver01.zap-hosting.com/index.php/s/jwLWXJ99XeJJGSK/preview)

<InlineVoucher />