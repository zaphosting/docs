---
id: nmrih-becomeadmin
title: "No More Room In Hell: Word admin"
description: "Ontdek hoe je administratorrechten toekent voor volledige servercontrole en soepel beheer in-game → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-nmrih
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Intro

Met administratorrechten kun je je server makkelijk en volledig beheren. Als admin heb je toegang tot alle opties en functies die het spel direct in-game biedt. Hieronder leggen we stap voor stap uit hoe je adminrechten voor je server instelt.

<InlineVoucher />



## Configuratie

Om je als admin te registreren, moet je SourceMod of MetaMod geïnstalleerd hebben. Daarnaast heb je je Steam ID nodig. Die kun je op verschillende manieren vinden: via externe websites of direct via de in-game console.


Om je SteamID via een website te vinden, open je eerst je Steam-profiel en klik je met de rechtermuisknop ergens op de pagina om de profiel-URL te kopiëren. Plak deze URL vervolgens op een van de volgende sites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

De pagina toont je SteamID en andere accountinfo. Voor adminregistratie heb je de **SteamID32** nodig:

```
steamID32: STEAM_0:1:XXXXXX
```

Je kunt je SteamID ook in-game via de console opvragen. Start het spel, verbind met je server, open de console en typ:

```
status
```

Je ziet dan je connectiegegevens, inclusief je SteamID. Verbind daarna via FTP met je server en open het bestand `admins.cfg` in:

```
.../addons/sourcemod/configs/
```

Het bestand bevat een voorbeeld dat je kunt kopiëren en aanpassen:

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

De **spelernaam** hoeft niet overeen te komen met je Steam-accountnaam; het is alleen voor intern gebruik. Het veld `auth` staat voor de authenticatiemethode en blijft `steam`. Bij `identity` vul je je SteamID32 in. De `flags` bepalen welke rechten de admin krijgt:

| Rechten     | Flag | Beschrijving           |
|-------------|:----:|-----------------------|
| reservering | a    | Slot reserveren        |
| algemeen    | b    | Basisrechten (verplicht) |
| kick        | c    | Spelers kicken         |
| ban         | d    | Spelers verbannen      |
| unban       | e    | Verbanning opheffen    |
| slay        | f    | Spelers doden/slappen  |
| changemap   | g    | Map wisselen           |
| cvar        | h    | Serverwaarden aanpassen |
| config      | i    | Serverconfig uitvoeren |
| chat        | j    | Geavanceerde chatrechten |
| vote        | k    | Adminstemmen starten   |
| password    | l    | Serverwachtwoord instellen |
| rcon        | m    | RCON-commando’s uitvoeren |
| cheats      | n    | `sv_cheats` inschakelen |
| root        | z    | Volledige toegang      |

Je kunt meerdere flags combineren (bijv. `bc` voor kickrechten). Voor volledige toegang gebruik je alleen `z`. Het adminmenu open je door `admin` in de chat te typen of `sm_admin` in de console. Met het commando `admin` in de chat of `sm_admin` in de console roep je het menu op.



## Admin Commands

Hieronder een lijst met handige admincommando’s die je op je server kunt gebruiken.

| Commando                          | Beschrijving                                  |
| -------------------------------- | --------------------------------------------- |
| `sm_kick <player>`                | Kickt een speler                             |
| `sm_ban <player> <time> [reden]` | Bant een speler voor X minuten (0 = permanent) |
| `sm_unban <SteamID/IP>`           | Haalt een ban van een speler weg             |
| `sm_slay <player>`                | Doodt de speler direct                        |
| `sm_slap <player> [damage]`       | Slapt de speler (optioneel met schade)       |
| `sm_map <mapname>`                | Wisselt naar de opgegeven map                 |
| `sm_cvar <cvar> <waarde>`          | Zet een serverconfig variabele tijdens runtime |
| `sm_vote <topic>`                 | Start een simpele stemming                    |
| `sm_restartgame <seconden>`        | Herstart het spel na een countdown            |
| `sm_say <bericht>`                | Stuurt een bericht naar de globale chat       |



## Conclusie

Gefeliciteerd! Als je alles hebt gevolgd, heb je nu adminrechten succesvol ingesteld voor je server. Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar! 🙂

<InlineVoucher />