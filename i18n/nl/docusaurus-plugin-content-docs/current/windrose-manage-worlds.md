---
id: windrose-manage-worlds
title: "Windrose: Werelden Beheren"
description: "Leer hoe je meerdere Windrose-werelden beheert, wereldsaves wisselt en je wereldinstellingen configureert op een dedicated server met de juiste wereldstructuur. -> Leer nu meer"
sidebar_label: Werelden Beheren
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Windrose ondersteunt meerdere werelden op één dedicated server, waarbij elke wereld zijn eigen save data en `WorldDescription.json` configuratie gebruikt. In deze handleiding leer je hoe je nieuwe werelden aanmaakt, wisselt tussen bestaande werelden, ze back-upt en veilig wist.

## Voorbereiding

Zorg ervoor dat je toegang hebt tot je Windrose gameserver via de ZAP-Hosting webinterface en dat je server offline staat voordat je saves of configuraties aanpast.

:::info Vereiste Toegang
Je hebt toegang nodig tot het ZAP-Hosting gameserverbeheer, inclusief de **Bestandsbeheer**, **Configs** en **Backups** secties, om je Windrose-werelden veilig te beheren.
:::

:::caution Stop de Server Eerst
Stop altijd je server voordat je `ServerDescription.json` bewerkt, `WorldDescription.json` aanpast, wereldmappen aanmaakt of save data verwijdert. Dit voorkomt corruptie en incomplete wereldschrijfacties.
:::

## Begrijp de Windrose Wereldstructuur

Windrose slaat alle werelddata op binnen de save profielmap. De eerste wereld wordt automatisch aangemaakt wanneer je de server voor het eerst start.

De relevante structuur ziet er zo uit:

```text
R5/Saved/SaveProfiles/Default
ServerDescription.json
RocksDB
<game_version>
Worlds
World_1_ID
WorldDescription.json
World_2_ID
```

In de praktijk bevinden de wereldmappen zich hier:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Elke wereldmap is vernoemd naar zijn unieke `IslandId`. De server gebruikt deze ID intern om te bepalen welke wereld geladen moet worden.

| Bestand of Map | Doel |
| --- | --- |
| `ServerDescription.json` | Definieert de actieve serverconfiguratie, inclusief de momenteel geladen wereld |
| `RocksDB/[your_game_version]/Worlds/` | Bevat alle beschikbare wereld save mappen |
| `[your_world_id]/WorldDescription.json` | Bevat de configuratie voor een specifieke wereld |
| `WorldIslandId` | De waarde in `ServerDescription.json` die de server vertelt welke wereld te laden |

:::danger Nooit Wereldmappen Hernoemen
Je mag een wereldmap nooit handmatig hernoemen. Windrose gebruikt de mapnaam als interne `IslandId` in de RocksDB database. Hernoemen kan de wereld corrupt maken of onbruikbaar achterlaten.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Vind de Actieve Wereld

Voordat je werelden wisselt of aanmaakt, is het handig om te weten welke wereld momenteel actief is.

### Controleer de Serverconfiguratie

Open de **Configs** sectie in je gameserverbeheer en zoek `ServerDescription.json`. Als het bestand daar niet staat, gebruik dan de **Bestandsbeheer** en open `ServerDescription.json` vanuit de root van de bestandslijst.

Zoek naar het volgende veld:

```json
"WorldIslandId": "[your_world_id]"
```

Deze waarde bepaalt welke wereld de server bij het opstarten laadt.

### Controleer een Wereld-ID

Om een specifieke opgeslagen wereld te identificeren, open je het `WorldDescription.json` bestand in de wereldmap en zoek je de `IslandId` waarde.

Voorbeeld:

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "World_Example_ID",
    "WorldName": "Mijn Wereld",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

De `IslandId` in dit bestand moet exact overeenkomen met de mapnaam.

## Wissel Tussen Werelden

Als je al meerdere werelden op je server hebt, kun je wisselen door de actieve `WorldIslandId` aan te passen.

### Update de Doelwereld

Stop eerst je server via de ZAP-Hosting webinterface.

Open vervolgens `ServerDescription.json` in de **Configs** sectie of via de **Bestandsbeheer** in de root van de serverbestanden.

Zoek dit veld:

```json
"WorldIslandId": "PLAK_HIER_DE_DOEL_WERELD_ID"
```

Vervang de waarde door de `IslandId` van de wereld die je wilt laden. Je vindt die ID door het `WorldDescription.json` bestand van de doelwereld te openen.

### Opslaan en Server Herstarten

Sla het bestand op en start je server opnieuw. Windrose zal nu de geselecteerde wereld laden.

:::tip Controleer de Wereld-ID Nauwkeurig
Als de `WorldIslandId` niet exact overeenkomt met een bestaande wereldmap en de `IslandId`, kan de server de bedoelde wereld niet laden of een nieuwe aanmaken.
:::

## Maak een Nieuwe Wereld aan

Wil je meerdere werelden op één server hosten, dan kun je handmatig een nieuwe wereld aanmaken.

### Maak de Wereldmap aan

Stop eerst je server.

Open de **Bestandsbeheer** en navigeer naar:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Maak een nieuwe map met een unieke naam. Deze mapnaam wordt de nieuwe `IslandId` van de wereld.

Bijvoorbeeld:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/MijnTweedeWereld
```

### Maak het World Description Bestand aan

Maak in de nieuwe map een bestand aan met de naam `WorldDescription.json` en plak de volgende template:

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "JOUW_NIEUWE_WERELD_ID",
    "WorldName": "Mijn Tweede Wereld",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

Vervang `JOUW_NIEUWE_WERELD_ID` door jouw gekozen wereld-ID.

:::caution IDs Moeten Overeenkomen
De `IslandId` in `WorldDescription.json` moet identiek zijn aan de mapnaam. Kleine verschillen, zoals hoofdletters, kleine letters of spaties, kunnen voorkomen dat de wereld correct laadt.
:::

### Stel de Nieuwe Wereld in als Actief

Open nu `ServerDescription.json` en update de `WorldIslandId` waarde zodat deze naar je nieuwe wereld-ID verwijst.

Voorbeeld:

```json
"WorldIslandId": "MijnTweedeWereld"
```

Sla het bestand op en start de server. Windrose genereert bij het opstarten een verse nieuwe wereld.

## Maak een Back-up van een Wereld

Voordat je werelden wisselt, data wist of nieuwe instellingen test, is het verstandig een back-up van je wereldsave te maken.

### Gebruik de ZAP-Hosting Back-upfunctie

Stop eerst je server.

Open in het panel de **Backups** sectie en maak een nieuwe back-up aan. Dit is de veiligste optie als je later de volledige serverstatus wilt herstellen.

### Download de Wereldbestanden Handmatig

Wil je alleen een directe kopie van de save data, open dan de **Bestandsbeheer** en download de hele `RocksDB/` map via de zip- of downloadoptie.

Relevante pad:

```text
R5/Saved/SaveProfiles/Default/RocksDB/
```

| Back-up Methode | Aanbevolen Gebruik |
| --- | --- |
| Panel back-up | Beste voor volledige serverherstel |
| Handmatige `RocksDB/` download | Beste voor directe archivering van wereldsaves |
| Beide methodes | Beste voor belangrijke werelden of vóór een wipe |

:::note Back-up Aanbeveling
Als je meerdere werelden beheert, geeft het bewaren van zowel een panel back-up als een handmatige kopie van `RocksDB/` je de meeste flexibiliteit bij het later herstellen van een specifieke wereld.
:::

## Wis een Wereld

Wil je een wereld volledig resetten, dan kun je de save map verwijderen en de server een nieuwe laten genereren.

### Verwijder de Wereldsave

Stop je server.

Open de **Bestandsbeheer** en navigeer naar:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Verwijder de map van de wereld die je wilt wissen.

### Genereer de Wereld Opnieuw

Zorg dat `ServerDescription.json` nog steeds naar die verwijderde wereld-ID verwijst via het `WorldIslandId` veld.

Wanneer je de server opnieuw start, detecteert Windrose dat de doelwereldmap niet meer bestaat en genereert een verse wereld voor die ID.

:::danger Controleer de Juiste Map Voor Verwijderen
Het verwijderen van de verkeerde wereldmap verwijdert permanent de save data van die wereld, tenzij je een back-up hebt. Controleer de mapnaam en `IslandId` goed voordat je doorgaat.
:::

## Beheer Wereldinstellingen

Elke wereld heeft zijn eigen `WorldDescription.json`, waardoor je aparte instellingen kunt bijhouden voor verschillende werelden op dezelfde server.

### Voorbeeld Wereldconfiguratie

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "MijnTweedeWereld",
    "WorldName": "Mijn Tweede Wereld",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

### Belangrijke Waarden

| Sleutel | Beschrijving |
| --- | --- |
| `Version` | Configuratieversie die door het bestand wordt gebruikt |
| `IslandId` | Interne wereld-ID, moet overeenkomen met de mapnaam |
| `WorldName` | Weergavenaam van de wereld |
| `WorldPresetType` | Preset-type voor wereldgeneratie |
| `WorldSettings` | Extra wereldspecifieke instellingen indien ondersteund |

:::info Configuratiebeheer in het Panel
Windrose configuratiebestanden kun je beheren in je gameserverbeheer onder **Configs**. Als een bestand daar niet beschikbaar is, gebruik dan de **Bestandsbeheer** om het direct te bewerken.
:::

## Best Practices voor Meerdere Werelden

Het beheren van meerdere werelden op één server is handig voor testen, events of aparte spelersgroepen. Volg deze tips om alles overzichtelijk te houden:

- Gebruik duidelijke en unieke wereld-ID’s zoals `[your_pvp_world]` of `[your_build_world]`
- Houd de mapnaam en `IslandId` exact gelijk
- Maak een back-up voordat je een wereld wisselt of wist
- Vermijd het aanpassen van bestanden terwijl de server draait
- Documenteer welke `WorldIslandId` bij welke wereldnaam hoort

Zo voorkom je verwarring, vooral als je veel werelden beheert.

## Conclusie

Gefeliciteerd, je hebt succesvol Windrose-werelden beheerd op je server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂