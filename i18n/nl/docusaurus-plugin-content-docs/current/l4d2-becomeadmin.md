---
id: l4d2-becomeadmin
title: "Left 4 Dead 2: Word admin"
description: "Ontdek hoe je administratorrechten toekent voor volledige servercontrole en effectief gamefuncties beheert → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-l4d2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

Het toewijzen van administratorrechten geeft je een simpele en uitgebreide admin-ervaring met volledige controle over je server. Als admin kun je alle beschikbare opties en functies die het spel biedt direct in de game gebruiken. Hieronder leggen we stap voor stap uit hoe je administratorrechten voor jouw server instelt.

<InlineVoucher />



## Configuratie

Om je als admin te registreren, is het verplicht om SourceMod of MetaMod te installeren. Daarnaast heb je de Steam ID van je Steam-account nodig. Die kun je op verschillende manieren achterhalen: via externe websites die deze service aanbieden of direct via de in-game console.


Om je SteamID via een website te vinden, open je eerst je Steam-profiel en klik je met de rechtermuisknop ergens op de pagina om de profiel-URL te kopiëren. Plak deze URL vervolgens in een van de volgende websites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

De pagina toont je SteamID en andere accountinformatie. Voor admin-registratie heb je de **SteamID32** nodig:

```
steamID32: STEAM_0:1:XXXXXX
```

Je kunt je SteamID ook in-game via de console opvragen. Start de game, verbind met je server, open de console en typ het commando:

```
status
```

Je ziet dan je verbindingsgegevens, inclusief je SteamID. Verbind daarna via FTP met je server en open het bestand `admins.cfg` dat je vindt in:

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

De **spelernaam** hoeft niet overeen te komen met je Steam-accountnaam; het is alleen voor interne referentie. Het veld `auth` bepaalt de authenticatiemethode, die `steam` blijft. Bij `identity` vul je de SteamID32 in. De `flags` bepalen welke rechten de admin krijgt:

| Rechten    | Flag | Beschrijving               |
|------------|:----:|----------------------------|
| reservering| a    | Slot reservering            |
| generiek   | b    | Basisrechten (vereist)      |
| kick       | c    | Spelers kicken             |
| ban        | d    | Spelers verbannen          |
| unban      | e    | Verbanning opheffen        |
| slay       | f    | Spelers doden/slappen      |
| changemap  | g    | Map wisselen               |
| cvar       | h    | Serverwaarden aanpassen    |
| config     | i    | Serverconfig uitvoeren     |
| chat       | j    | Geavanceerde chatrechten   |
| vote       | k    | Admin-stemmen starten      |
| password   | l    | Serverwachtwoord instellen |
| rcon       | m    | RCON-commando’s uitvoeren  |
| cheats     | n    | `sv_cheats` inschakelen    |
| root       | z    | Volledige toegang          |

Je kunt meerdere flags combineren (bijv. `bc` voor kickrechten). Voor volledige toegang gebruik je alleen `z`. Het adminmenu open je door `admin` in de chat te typen of `sm_admin` in de console. Met het commando `admin` in de chat of `sm_admin` in de console roep je het menu op.



## Admin Commando’s

Hieronder vind je een lijst met veelgebruikte admin commando’s die je als admin op je server kunt gebruiken.

| Commando                          | Beschrijving                                  |
| -------------------------------- | --------------------------------------------- |
| `sm_kick <player>`                | Kickt een speler                              |
| `sm_ban <player> <time> [reason]`| Verban een speler voor X minuten (0 = permanent) |
| `sm_unban <SteamID/IP>`           | Hef een ban op                               |
| `sm_slay <player>`                | Dood de speler direct                        |
| `sm_slap <player> [damage]`       | Slap de speler (optioneel met schade)        |
| `sm_map <mapname>`                | Wissel naar de opgegeven map                  |
| `sm_cvar <cvar> <value>`          | Stel een serverconfiguratievariabele in runtime in |
| `sm_vote <topic>`                 | Start een basisstemming                       |
| `sm_restartgame <seconds>`        | Herstart het spel na een countdown            |
| `sm_say <message>`                | Stuur een bericht naar de globale chat        |



## Conclusie

Gefeliciteerd! Als je alles hebt gevolgd, heb je nu succesvol de adminrechten voor je server ingesteld. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />