---
id: ark-rcon
title: "ARK: Survival Evolved: RCON"
description: "Ontdek hoe je ARK: Survival Evolved-servers veilig op afstand beheert en controleert zonder het spel te joinen → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol dat wordt gebruikt om gameservers op afstand te beheren. Het geeft toegang tot de serverconsole zonder directe interactie met de serveromgeving. Zo kun je admin-commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In ARK: Survival Evolved wordt RCON gebruikt om server-side commando’s uit te voeren, zoals het beheren van spelers, het wijzigen van gameplay-instellingen of het bekijken van diagnostische outputs. De verbinding is beveiligd met een wachtwoord en verloopt via een specifieke poort, toegankelijk via compatibele RCON-clients.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler verbonden hoeft te zijn met het spel**. Serveradmins kunnen ARK: Survival Evolved monitoren en aansturen via externe tools, command-line interfaces of webdashboards, wat super flexibel en handig is voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het ingeschakeld en ingesteld worden. Dit doe je door het configuratiebestand te bewerken dat je vindt onder **Configs** in het gameserver beheerpanel. In het bestand `GameUserSettings.ini` moeten de volgende regels toegevoegd of aangepast worden:

```cfg
[ServerSettings]
RCONEnabled=True
ServerAdminPassword=define-your-password
```
De toegewezen RCON-poort vind je onderaan de instellingenpagina in het Poort-overzicht en moet daar ook ingevuld worden.



## Verbinden via RCON

Om verbinding te maken met je ARK: Survival Evolved-server via RCON gebruik je de tool **ARKon**. Die kun je downloaden via deze [Steam Thread]([Steam thread](https://steamcommunity.com/app/346110/discussions/2/3417684283223117680/)). Na het downloaden en installeren op je pc maak je een nieuwe server-entry aan met de volgende info:

- Server IP-adres  
- RCON-poort
- RCON-wachtwoord 

Na het opslaan van het connectieprofiel selecteer je de server uit de lijst en maak je verbinding. Eenmaal verbonden kun je RCON-commando’s uitvoeren via de grafische interface. ARKon heeft ook extra features speciaal voor ARK: Survival Evolved, zoals:

- Real-time spelerslijst en online status  
- In-game chat monitoring en interactie  
- Snelle knoppen voor veelgebruikte admin-commando’s  
- Logging van RCON-output en commandogeschiedenis



## RCON Commando’s

Zodra je via RCON verbonden bent, kun je allerlei admin- en diagnostische commando’s uitvoeren op je ARK: Survival Evolved-server. Welke commando’s beschikbaar zijn hangt af van de game-engine, maar meestal kun je spelers beheren, status opvragen en de server aansturen.

| Commando                            | Beschrijving                                           |
|-----------------------------------|--------------------------------------------------------|
| `EnableCheats <password>`         | Zet admin-modus aan op de server (admin commando’s)    |
| `AdminCheat KickPlayer <Steam64ID>` | Kickt een speler                                     |
| `AdminCheat BanPlayer <Steam64ID>`  | Bant een speler                                        |
| `AdminCheat UnbanPlayer <playerName>` | Haalt een ban van een speler af                      |
| `AdminCheat Broadcast <message>`   | Stuurt een broadcast-bericht naar alle spelers         |
| `AdminCheat SaveWorld`            | Slaat de huidige wereldstatus op                        |
| `AdminCheat SetTimeOfDay <hh:mm>` | Zet de in-game tijd                                    |
| `AdminCheat TeleportPlayerIDToMe <playerID>` | Teleporteert een speler naar jouw locatie         |
| `cheat Slomo <factor>`            | Past de gamesnelheid aan                                |
| `AdminCheat GiveItemNum <ItemID> <quantity> <quality> 0` | Spawnt items in je inventory                |




## Conclusie

RCON is een must-have tool voor het remote beheren van ARK: Survival Evolved-servers. Het geeft snelle en directe toegang tot admin-functies, met beveiliging via wachtwoordauthenticatie. Een goede en veilige configuratie is super belangrijk om de server stabiel te houden en ongewenste toegang te voorkomen.

Heb je vragen of hulp nodig? Onze support staat dagelijks voor je klaar om je te helpen! 🙂

<InlineVoucher />