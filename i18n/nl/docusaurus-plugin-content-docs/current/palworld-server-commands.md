---
id: palworld-server-commands
title: "Palworld: Palworld Server Commands"
description: "Ontdek hoe je Palworld-servers effectief beheert met ingebouwde commando's voor admincontrole en gameplay → Leer het nu"
sidebar_label: Servercommando's
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Palworld-servers worden geleverd met een set handige ingebouwde servercommando's die je zowel in-game als via je serverconsole kunt gebruiken. In deze gids duiken we in veel van deze commando's, met beschrijvingen en voorbeelden van hoe je ze gebruikt.

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/85ennn4gSYBPNYo/preview" title="Stel je PALWORLD-server in binnen ÉÉN MINUUT!" description="Snap je het beter als je dingen in actie ziet? Wij fixen het! Check onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>

<InlineVoucher />

## Admin instellen

Je moet eerst een admin-wachtwoord instellen voor je Palworld-server en jezelf in-game als admin toevoegen voordat je toegang krijgt tot de admin servercommando's in de volgende sectie.

Je stelt het admin-wachtwoord van je server in via het **Instellingen** tabblad in je serverwebinterface of via het configuratiebestand **PalWorldSettings.ini**. Zodra dit is ingesteld, kun je in-game het commando `/AdminPassword [wachtwoord]` gebruiken om jezelf als admin toe te voegen.

:::tip
We raden je sterk aan om onze [Admin instellen](palworld-admin.md) gids te bekijken. Dit is een speciale gids over dit onderwerp en geeft je meer diepgaande info over het instellen van een admin-wachtwoord en het toevoegen van gebruikers als admin.
:::

## Beschikbare commando's

In de onderstaande tabel vind je een reeks servercommando's voor Palworld, inclusief voorbeelden en beschrijvingen, die je in-game en via de serverconsole kunt gebruiken.

Waar de parameter `steamid` nodig is, kun je eenvoudig de SteamID van een speler kopiëren door twee keer met de rechtermuisknop op de spelerslijst te klikken.

:::info
Je moet eerst een admin-wachtwoord instellen en jezelf rechten geven met het commando `/AdminPassword` voordat je deze commando's kunt gebruiken. Anders krijg je een permissiefout. Lees de volgende sectie in deze gids om te begrijpen hoe je dit doet.
:::

| Commando Syntax               | Geaccepteerde Waarden | Beschrijving                                                          | 
| ---------------------------- | --------------------- | -------------------------------------------------------------------- | 
| /Shutdown [secs] [message]   | Integer, String       | Sluit de server af na het opgegeven aantal seconden, met bericht     | 
| /DoExit                      | -                     | Forceert het stoppen van de server                                  | 
| /Broadcast                   | String                | Stuurt een bericht naar alle spelers die momenteel op de server zijn | 
| /KickPlayer [steamid]        | String                | Kickt de opgegeven speler van de server                             | 
| /BanPlayer [steamid]         | String                | Bant de opgegeven speler van de server                              | 
| /TeleportToPlayer [steamid]  | String                | Teleporteer naar de opgegeven speler                                | 
| /TeleportToMe [steamid]      | String                | Teleporteer de opgegeven speler naar jou                            | 
| /ShowPlayers                 | -                     | Geeft info over alle momenteel verbonden spelers                   | 
| /Info                        | -                     | Geeft serverinformatie                                              | 
| /Save                        | -                     | Slaat de huidige werelddata op                                      |

:::note
Je kunt momenteel een speler niet in-game unbannen omdat er geen commando voor is. Je moet handmatig het bestand `banlist.txt` in je servermap aanpassen als je een speler wilt unbannen.
:::

<InlineVoucher />