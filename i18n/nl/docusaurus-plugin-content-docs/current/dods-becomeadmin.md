---
id: dods-becomeadmin
title: "Day of Defeat: Source: Word admin"
description: "Ontdek hoe je adminrechten toekent voor volledige servercontrole en effectief gamefuncties beheert → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-dods
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

Het toewijzen van administratorrechten geeft je een simpele en uitgebreide administratie met volledige controle over je server. Als admin kun je alle beschikbare opties en functies die het spel biedt direct in de game gebruiken. Hieronder leggen we stap voor stap uit hoe je adminrechten voor jouw server instelt.

<InlineVoucher />



## Configuratie

Om je als admin te registreren, is het verplicht om SourceMod of MetaMod te installeren. Daarnaast heb je de Steam ID van je Steam-account nodig. Die kun je op verschillende manieren achterhalen: via externe websites die deze service aanbieden, of direct via de in-game console.


Om je SteamID via een website te krijgen, open je eerst je Steam-profiel en klik je met de rechtermuisknop ergens op de pagina om de profiel-URL te kopiëren. Plak deze URL vervolgens in één van de volgende sites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

De pagina toont je SteamID en andere accountinfo. Voor adminregistratie heb je de **SteamID32** nodig:

```
steamID32: STEAM_0:1:XXXXXX
```

Je kunt je SteamID ook in-game via de console opvragen. Start de game, verbind met je server, open de console en typ:

```
status
```

Je ziet dan je verbindingsgegevens, inclusief je SteamID. Verbind daarna via FTP met de server en open het bestand `admins.cfg` dat je vindt in:

```
.../addons/sourcemod/configs/
```

Het bestand bevat een voorbeeld dat je kunt kopiëren en aanpassen:

```
Admins
{
	"Spelersnaam"
	{
		"auth" "steam"
		"identity" "STEAM_0:1:XXXXX"
		"flags" "abcdef"
	}
}
```

De **spelersnaam** hoeft niet overeen te komen met je Steam-accountnaam; het is puur voor intern gebruik. Het veld `auth` bepaalt de authenticatiemethode, die blijft `steam`. Bij `identity` vul je de SteamID32 in. De `flags` bepalen welke rechten de admin krijgt:

| Rechten     | Flag | Beschrijving            |
|-------------|:----:|-------------------------|
| reservering | a    | Slot reserveren         |
| algemeen    | b    | Basisrechten (verplicht)|
| kick        | c    | Spelers kicken          |
| ban         | d    | Spelers verbannen       |
| unban       | e    | Verbanning opheffen     |
| slay        | f    | Spelers doden/slappen   |
| changemap   | g    | Map wisselen            |
| cvar        | h    | Serverwaarden aanpassen |
| config      | i    | Serverconfig uitvoeren  |
| chat        | j    | Geavanceerde chatrechten|
| vote        | k    | Adminstemmen starten    |
| password    | l    | Serverwachtwoord instellen |
| rcon        | m    | RCON-commando’s uitvoeren |
| cheats      | n    | `sv_cheats` inschakelen |
| root        | z    | Volledige toegang       |

Je kunt meerdere flags combineren (bijv. `bc` voor kickrechten). Voor volledige toegang gebruik je alleen `z`. Het adminmenu open je door `admin` in de chat te typen of `sm_admin` in de console. Met het commando `admin` in de chat of `sm_admin` in de console roep je het menu op.



## Admin Commands

Hieronder vind je een lijst met veelgebruikte admincommando’s die je als admin op je server kunt gebruiken.

| Commando                          | Beschrijving                                  |
| -------------------------------- | --------------------------------------------- |
| `sm_kick <speler>`               | Kickt een speler                             |
| `sm_ban <speler> <tijd> [reden]` | Verban een speler voor X minuten (0 = permanent) |
| `sm_unban <SteamID/IP>`          | Hef een ban op                               |
| `sm_slay <speler>`               | Dood de speler direct                        |
| `sm_slap <speler> [damage]`      | Slap de speler (optioneel met schade)       |
| `sm_map <mapnaam>`               | Wissel naar de opgegeven map                 |
| `sm_cvar <cvar> <waarde>`        | Stel een serverconfiguratievariabele in runtime in |
| `sm_vote <onderwerp>`            | Start een basisstemming                       |
| `sm_restartgame <seconden>`      | Herstart het spel na een countdown           |
| `sm_say <bericht>`               | Stuur een bericht naar de globale chat       |



## Conclusie

Gefeliciteerd! Als je alles hebt gevolgd, heb je nu succesvol de adminrechten voor je server ingesteld. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />