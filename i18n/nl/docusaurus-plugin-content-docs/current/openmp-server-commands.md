---
id: openmp-server-commands
title: "Open.mp: Open.mp Server Commands"
description: "Ontdek hoe je Open.mp servercommando's veilig beheert met RCON-toegang en verbeter je servercontrole → Leer nu meer"
sidebar_label: Servercommando's
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Open.mp-servers worden geleverd met een set handige ingebouwde servercommando's die je zowel in-game als via je serverconsole kunt gebruiken. In deze gids duiken we in veel van deze commando's, met beschrijvingen en voorbeelden van hoe je ze gebruikt.

<InlineVoucher />

## Toegang instellen (RCON)

Om servercommando's in-game te kunnen uitvoeren, moet je de RCON-functie inschakelen. Je moet je configuratiebestand `config.json` openen en de benodigde parameters aanpassen om de functie aan te zetten en een wachtwoord toe te voegen. Gebruik onze [Serverconfiguratie](openmp-configuration.md) gids om toegang te krijgen tot je serverconfiguratiebestand.

Als je het bestand hebt geopend, zoek dan de onderstaande parameters; zet de functie aan en stel een RCON-wachtwoord in.

| Parameternaam                 | Voorbeeld                              | Beschrijving                                                                                   |
| ----------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------- | 
| rcon.enable                   | true                                  | Zet aan of uit of de RCON-functie ingeschakeld moet zijn                                      |
| rcon.password                 | ZAP-IS-AWESOME                        | Stel een wachtwoord in dat gebruikt moet worden om via clients toegang te krijgen tot RCON    |

:::info
Zorg ervoor dat je een RCON-wachtwoord hebt ingesteld in je configuratie. Zonder wachtwoord kunnen anderen makkelijk toegang krijgen tot RCON, wat super onveilig is.
:::

Als je klaar bent met aanpassen, sla het bestand op en herstart je server. De volgende keer dat je server opstart, is RCON beschikbaar en klaar voor gebruik.

:::tip
Wil je meer weten over RCON? Check dan onze [RCON](openmp-rcon.md) gids voor meer details.
:::

## Beschikbare Commando's

De onderstaande tabel bevat een reeks belangrijke servercommando's voor Open.mp, inclusief voorbeelden en beschrijvingen. Je kunt deze commando's gebruiken in-game, via de serverconsole of met een RCON-programma. Wil je alle huidige commando's zien? Bekijk dan de [open.mp server besturingsgids](https://www.open.mp/docs/server/ControllingServer) waar alle beschikbare servercommando's staan.

:::tip
Als je commando's direct via de console of een RCON-programma uitvoert, hoef je het `/rcon` voorvoegsel niet te gebruiken. Dit is alleen nodig als je de commando's **in-game** uitvoert.
:::

:::note
Zorg dat RCON is ingeschakeld, anders werken deze commando's niet in-game of via een RCON-programma.
:::

### Algemene Commando's

| Commando Syntax              | Geaccepteerde Waarden | Beschrijving                                                        | 
| ---------------------------- | --------------------- | ------------------------------------------------------------------ | 
| /rcon cmdlist                | -                     | Geeft een lijst met alle servercommando's                          | 
| /rcon varlist                | -                     | Geeft een lijst met alle huidige servervariabelen                  | 
| /rcon exit                   | -                     | Sluit de server af                                                 | 
| /rcon echo [tekst]           | String                | Stuurt een bericht naar de serverconsole (niet zichtbaar in-game) | 
| /rcon say [tekst]            | String                | Stuurt een bericht naar alle spelers in-game (verschijnt als "Admin: [tekst]") | 
| /rcon players                | -                     | Geeft info over alle momenteel verbonden spelers                   |
| /rcon reloadlog              | -                     | Laadt het serverlogbestand opnieuw                                 |

### Moderatie Commando's

| Commando Syntax              | Geaccepteerde Waarden | Beschrijving                                                        | 
| ---------------------------- | --------------------- | ------------------------------------------------------------------ | 
| /rcon kick [id]              | Integer               | Kickt de opgegeven speler van de server                            | 
| /rcon ban [id]               | Integer               | Bant de opgegeven speler van de server                             | 
| /rcon banip [ip]             | String                | Bant een IP-adres van de server                                    | 
| /rcon unbanip [ip]           | String                | Haalt een IP-adres van de banlijst af                             | 
| /rcon reloadbans             | -                     | Laadt het banbestand opnieuw                                      |

<InlineVoucher />