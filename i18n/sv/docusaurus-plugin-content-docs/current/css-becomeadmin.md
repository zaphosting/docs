---
id: css-becomeadmin
title: "Counter-Strike: Source: Bli admin"
description: "Upptäck hur du ger administratörsrättigheter för full kontroll över din server och hantera spel-funktioner effektivt → Lär dig mer nu"
sidebar_label: Bli admin
services:
  - gameserver-css
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

Att tilldela administratörsrättigheter ger dig enkel och heltäckande administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver följa för att ge administratörsrättigheter till din server beskrivs nedan.

<InlineVoucher />



## Konfiguration

För att registrera dig som admin krävs installation av SourceMod eller MetaMod. Dessutom behöver du Steam-ID:t för ditt Steam-konto. Det finns flera sätt att få tag på det: du kan antingen använda en extern webbplats som erbjuder denna tjänst eller hämta det direkt via spelets konsol.


För att få ditt SteamID via en webbplats, öppna först din Steam-profil och högerklicka var som helst på sidan för att kopiera profilens URL. Klistra sedan in denna URL på någon av följande webbplatser:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Sidan visar ditt SteamID tillsammans med annan kontoinformation. För admin-registrering behöver du **SteamID32**:

```
steamID32: STEAM_0:1:XXXXXX
```

Alternativt kan du hämta ditt SteamID i spelet via konsolen. Starta spelet, anslut till din server, öppna konsolen och skriv kommandot:

```
status
```

Detta visar dina anslutningsdetaljer, inklusive ditt SteamID. Anslut sedan till servern via FTP och öppna filen `admins.cfg` som finns i:

```
.../addons/sourcemod/configs/
```

Filen innehåller ett exempel som du kan kopiera och anpassa:

```
Admins
{
	"Spelarnamn"
	{
		"auth" "steam"
		"identity" "STEAM_0:1:XXXXX"
		"flags" "abcdef"
	}
}
```

**Spelarnamnet** behöver inte matcha ditt Steam-kontonamn; det är bara för intern referens. Fältet `auth` definierar autentiseringsmetoden, som ska vara `steam`. I `identity` anger du SteamID32. `flags` definierar vilka rättigheter admin får:

| Rättighet  | Flagga | Beskrivning |
|------------|:------:|-------------|
| reservation | a      | Platsereservation |
| generic     | b      | Grundläggande rättigheter (obligatoriskt) |
| kick        | c      | Sparka spelare |
| ban         | d      | Banna spelare |
| unban       | e      | Avbanna spelare |
| slay        | f      | Slå ihjäl eller döda spelare |
| changemap   | g      | Byta karta |
| cvar        | h      | Ändra servervärden |
| config      | i      | Köra serverkonfigurationer |
| chat        | j      | Avancerade chatträttigheter |
| vote        | k      | Starta adminomröstningar |
| password    | l      | Sätta serverlösenord |
| rcon        | m      | Köra RCON-kommandon |
| cheats      | n      | Aktivera `sv_cheats` |
| root        | z      | Full åtkomst |

Flera flaggor kan kombineras (t.ex. `bc` för kick-rättigheter). För full åtkomst används endast `z`. Du öppnar admin-menyn genom att skriva `admin` i chatten eller `sm_admin` i konsolen. Med kommandot `admin` i chatten eller `sm_admin` i konsolen kan menyn öppnas.



## Admin-kommandon

Nedan hittar du en lista med vanliga admin-kommandon som du kan använda som admin på din server.

| Kommando                           | Beskrivning                                     |
| --------------------------------- | ----------------------------------------------- |
| `sm_kick <player>`                | Sparkar en spelare                              |
| `sm_ban <player> <time> [reason]` | Bannlyser en spelare i X minuter (0 = permanent) |
| `sm_unban <SteamID/IP>`           | Avbannar en spelare                             |
| `sm_slay <player>`                | Dödar spelaren direkt                           |
| `sm_slap <player> [damage]`       | Slår spelaren (valfritt med skada)             |
| `sm_map <mapname>`                | Byter till angiven karta                        |
| `sm_cvar <cvar> <value>`          | Sätter en serverkonfigurationsvariabel i realtid |
| `sm_vote <topic>`                 | Startar en grundläggande omröstning            |
| `sm_restartgame <seconds>`        | Startar om spelet efter nedräkning              |
| `sm_say <message>`                | Skickar ett meddelande till global chat        |



## Avslutning

Grattis! Om du följt alla steg har du nu framgångsrikt konfigurerat admin-rättigheterna för din server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />