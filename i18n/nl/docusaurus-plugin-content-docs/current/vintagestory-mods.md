---
id: vintagestory-mods
title: "Vintage Story: Mods Installeren"
description: "Leer hoe je mods installeert op je Vintage Story-server om nieuwe features en gameplay-mechanics toe te voegen → Ontdek het nu"
sidebar_label: Mods Installeren
services:
- gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Mods zijn een essentieel onderdeel van de Vintage Story-ervaring en stellen server-eigenaren in staat om het spel uit te breiden met nieuwe mechanics, items, wereldgeneratie-functies of quality-of-life verbeteringen. Door mods op je server te installeren, zorg je ervoor dat alle spelers die verbonden zijn met de server kunnen profiteren van dezelfde gameplay-upgrades.

Vintage Story biedt een grote communitybibliotheek met mods, variërend van kleine tweaks tot volledige gameplay-overhauls. Veel van deze mods vind je op de officiële Vintage Story Mod Database of in communityforums.

<InlineVoucher />

## Voorbereiding

Voordat je mods installeert op je Vintage Story-server, zorg dat je de volgende stappen hebt afgerond:

- Download de gewenste mod van een betrouwbare bron zoals de Vintage Story Mod Database  
- Controleer of de mod-versie overeenkomt met de gameversie van je server  
- Stop je server voordat je nieuwe bestanden uploadt  

De meeste Vintage Story mods worden verspreid als `.zip` bestanden en moeten niet uitgepakt worden vóór de installatie.

## Installatie

Vintage Story servermods moeten direct geüpload worden naar het serverbestandssysteem. Dit doe je door verbinding te maken met de server via [FTP](gameserver-ftpaccess.md). Maak eerst verbinding met je server via een FTP-client en log in met je FTP-gegevens.

Navigeer vervolgens naar de volgende map:

```
/gxxxxxx/VintagestoryData/
```

In deze map moet je twee mappen aanmaken als ze nog niet bestaan:

```
VintagestoryData
├── Mods
└── ModConfigs
```

- **Mods** – bevat alle geïnstalleerde servermods  
- **ModConfigs** – slaat configuratiebestanden op die door mods worden aangemaakt  

Na het aanmaken van deze mappen upload je de gedownloade mod-bestanden naar de **Mods** map. Voorbeeldstructuur:

```
VintagestoryData
└── Mods
    ├── examplemod.zip
    ├── anothermod.zip
```

Vintage Story laadt automatisch alle mod-bestanden die in deze map staan bij het opstarten van de server.

## Installatie controleren

Als alle mod-bestanden zijn geüpload, ga dan terug naar je serverbeheer en start de server opnieuw op. Tijdens het opstarten detecteert de server de mods in de `Mods` map en laadt ze automatisch. Als een mod configuratie nodig heeft, kan deze na de eerste keer opstarten een nieuw configuratiebestand aanmaken in de `ModConfigs` map.

Als de server succesvol is gestart, maak dan verbinding met de server en controleer of de mod actief is. Mods verschijnen ook in de serverlogs tijdens het opstarten. Als een mod niet laadt, controleer dan het volgende:

- De mod-versie komt overeen met de server-versie  
- Alle benodigde dependencies zijn geïnstalleerd  
- Het `.zip` bestand staat in de juiste `Mods` map  

## Conclusie

Gefeliciteerd! Je hebt succesvol mods geïnstalleerd op je Vintage Story-server. Mods geven je de mogelijkheid om de gameplay uit te breiden, nieuwe mechanics toe te voegen en de ervaring voor je community te personaliseren. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />