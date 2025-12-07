---
id: css-becomeadmin
title: "Counter-Strike: Source: Word admin"
description: "Ontdek hoe je administratorrechten toewijst voor volledige servercontrole en effectief beheer van gamefuncties → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-css
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

Het toewijzen van administratorrechten geeft je eenvoudige en uitgebreide administratie met volledige controle over je server. Als admin kun je alle beschikbare opties en functies die het spel biedt direct in het spel gebruiken. Hieronder vind je alle stappen die je moet doorlopen om administratorrechten voor jouw server toe te wijzen.

<InlineVoucher />



## Configuratie

Om je als admin te registreren, is de installatie van SourceMod of MetaMod verplicht. Daarnaast heb je de Steam ID van je Steam-account nodig. Er zijn verschillende manieren om deze te verkrijgen: je kunt een externe website gebruiken die deze service aanbiedt of je haalt het direct uit de in-game console.


Om je SteamID via een website te krijgen, open je eerst je Steam-profiel en klik je met de rechtermuisknop ergens op de pagina om de profiel-URL te kopiëren. Plak deze URL vervolgens in een van de volgende websites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

De pagina toont je SteamID samen met andere accountinformatie. Voor admin-registratie heb je de **SteamID32** nodig:

```
steamID32: STEAM_0:1:XXXXXX
```

Je kunt je SteamID ook in-game via de console opvragen. Start het spel, verbind met je server, open de console en typ het commando:

```
status
```

Dit toont je verbindingsgegevens, inclusief je SteamID. Verbind daarna via FTP met de server en open het bestand `admins.cfg` dat je vindt in:

```
.../addons/sourcemod/configs/
```

Het bestand bevat een voorbeeldinvoer die je kunt kopiëren en aanpassen:

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

De **spelersnaam** hoeft niet overeen te komen met je Steam-accountnaam; het is alleen voor interne referentie. Het veld `auth` bepaalt de authenticatiemethode, die `steam` blijft. Vul bij `identity` de SteamID32 in. De `flags` bepalen welke rechten de admin krijgt:

| Rechten    | Flag | Beschrijving           |
|------------|:----:|-----------------------|
| reservering| a    | Slot reservering       |
| generiek   | b    | Basisrechten (verplicht)|
| kick       | c    | Spelers kicken        |
| ban        | d    | Spelers verbannen     |
| unban      | e    | Verbanning opheffen   |
| slay       | f    | Spelers doden/slappen |
| changemap  | g    | Map wisselen          |
| cvar       | h    | Serverwaarden aanpassen|
| config     | i    | Serverconfig uitvoeren |
| chat       | j    | Geavanceerde chatrechten|
| vote       | k    | Adminstemmen starten  |
| password   | l    | Serverwachtwoord instellen|
| rcon       | m    | RCON-commando’s uitvoeren|
| cheats     | n    | `sv_cheats` inschakelen|
| root       | z    | Volledige toegang     |

Je kunt meerdere flags combineren (bijv. `bc` voor kickrechten). Voor volledige toegang gebruik je alleen `z`. Het adminmenu open je door `admin` in de chat te typen of `sm_admin` in de console. Met het commando `admin` in de chat of `sm_admin` in de console roep je het menu op.



## Admin Commando’s

Hieronder vind je een lijst met veelgebruikte admin commando’s die je als admin op je server kunt gebruiken.

| Commando                          | Beschrijving                                  |
| -------------------------------- | ---------------------------------------------|
| `sm_kick <speler>`               | Kickt een speler                             |
| `sm_ban <speler> <tijd> [reden]` | Verban een speler voor X minuten (0 = permanent) |
| `sm_unban <SteamID/IP>`          | Hef een ban op                               |
| `sm_slay <speler>`               | Doodt de speler direct                       |
| `sm_slap <speler> [schade]`      | Slapt de speler (optioneel met schade)      |
| `sm_map <mapnaam>`               | Wisselt naar de opgegeven map                |
| `sm_cvar <cvar> <waarde>`        | Zet een serverconfiguratievariabele tijdens runtime |
| `sm_vote <onderwerp>`            | Start een simpele stemming                   |
| `sm_restartgame <seconden>`      | Herstart het spel na een countdown           |
| `sm_say <bericht>`               | Stuurt een bericht naar de globale chat      |



## Conclusie

Gefeliciteerd! Als je alles hebt gevolgd, zou je nu succesvol de adminrechten voor je server moeten hebben ingesteld. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />