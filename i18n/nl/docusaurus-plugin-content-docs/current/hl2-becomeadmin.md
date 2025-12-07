---
id: hl2-becomeadmin
title: "Half-Life 2: Word admin"
description: "Ontdek hoe je administratorrechten toekent voor volledige servercontrole en betere in-game beheer → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-hl2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

Het toewijzen van administratorrechten maakt het je makkelijk om je server volledig en overzichtelijk te beheren. Als admin kun je alle beschikbare opties en functies die het spel biedt direct in-game gebruiken. Hieronder leggen we stap voor stap uit hoe je administratorrechten voor jouw server instelt.

<InlineVoucher />



## Configuratie

Om je als admin te registreren, is het verplicht om SourceMod of MetaMod te installeren. Daarnaast heb je de Steam ID van je Steam-account nodig. Die kun je op verschillende manieren achterhalen: via een externe website die deze service aanbiedt, of direct via de in-game console.


Om je SteamID via een website te vinden, open je eerst je Steam-profiel en klik je met de rechtermuisknop ergens op de pagina om de profiel-URL te kopiëren. Plak deze URL vervolgens in één van de volgende websites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

De pagina toont je SteamID en andere accountinformatie. Voor admin-registratie heb je de **SteamID32** nodig:

```
steamID32: STEAM_0:1:XXXXXX
```

Je kunt je SteamID ook in-game via de console opvragen. Start het spel, verbind met je server, open de console en typ het commando:

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

De **spelersnaam** hoeft niet overeen te komen met je Steam-accountnaam; het is alleen voor intern gebruik. Het veld `auth` geeft de authenticatiemethode aan, die altijd `steam` blijft. Bij `identity` vul je de SteamID32 in. De `flags` bepalen welke rechten de admin krijgt:

| Rechten     | Flag | Omschrijving           |
|-------------|:----:|------------------------|
| reservering | a    | Slot reservering       |
| algemeen    | b    | Basisrechten (verplicht) |
| kick        | c    | Spelers kicken         |
| ban         | d    | Spelers verbannen      |
| unban       | e    | Spelers unbannen       |
| slay        | f    | Spelers doden/slappen  |
| changemap   | g    | Map wisselen           |
| cvar        | h    | Serverwaarden aanpassen |
| config      | i    | Serverconfig uitvoeren |
| chat        | j    | Geavanceerde chatrechten |
| vote        | k    | Adminstemmen starten   |
| wachtwoord  | l    | Serverwachtwoord instellen |
| rcon        | m    | RCON-commando’s uitvoeren |
| cheats      | n    | `sv_cheats` inschakelen |
| root        | z    | Volledige toegang      |

Je kunt meerdere flags combineren (bijv. `bc` voor kickrechten). Voor volledige toegang gebruik je alleen `z`. Het adminmenu open je door `admin` in de chat te typen of `sm_admin` in de console. Met het commando `admin` in de chat of `sm_admin` in de console roep je het menu op.



## Admin Commando’s

Hieronder vind je een lijst met veelgebruikte admincommando’s die je als admin op je server kunt gebruiken.

| Commando                          | Omschrijving                                  |
| -------------------------------- | --------------------------------------------- |
| `sm_kick <speler>`               | Kickt een speler                              |
| `sm_ban <speler> <tijd> [reden]` | Bant een speler voor X minuten (0 = permanent) |
| `sm_unban <SteamID/IP>`          | Haalt een ban van een speler af               |
| `sm_slay <speler>`               | Doodt de speler direct                         |
| `sm_slap <speler> [damage]`      | Slapt de speler (optioneel met schade)        |
| `sm_map <mapnaam>`               | Wisselt naar de opgegeven map                  |
| `sm_cvar <cvar> <waarde>`        | Zet een serverconfiguratievariabele tijdens runtime |
| `sm_vote <onderwerp>`            | Start een simpele stemming                      |
| `sm_restartgame <seconden>`      | Herstart het spel na een countdown             |
| `sm_say <bericht>`               | Stuurt een bericht naar de globale chat        |



## Conclusie

Gefeliciteerd! Als je alles hebt gevolgd, heb je nu succesvol de adminrechten voor je server ingesteld. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />