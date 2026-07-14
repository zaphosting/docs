---
id: palworld-reset-world
title: "Palworld: Wereld Resetten"
description: "Leer hoe je je Palworld game server wereld reset door de huidige save data te verwijderen en een nieuwe Palworld wereldkaart te starten op dezelfde server. -> Leer nu meer"
sidebar_label: Palworld: Wereld Resetten
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld slaat je actieve wereld op in de server save data in plaats van in een configureerbare wereldinstelling. In deze gids leer je hoe je je Palworld game server wereld op ZAP-Hosting reset door de bestaande save map te verwijderen, zodat de server bij de volgende start een nieuwe wereld genereert.

:::danger Permanente Data Verwijdering
Het resetten van je Palworld wereld verwijdert permanent de huidige wereld, inclusief spelerprogressie, bouwwerken, Pals en andere opgeslagen data in die wereld.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Zorg ervoor dat je toegang hebt tot de administratie van je Palworld game server en dat de server offline staat voordat je save bestanden verwijdert.

:::tip Maak Eerst een Backup
Als je de huidige wereld later misschien nog nodig hebt, maak dan eerst een backup. Indien beschikbaar voor jouw product, kun je de server backup functies gebruiken of handmatig de save map downloaden voordat je deze verwijdert.
:::

## Begrijp Hoe Palworld Wereld Resets Werken

Een Palworld wereld reset vereist normaal gesproken geen aanpassing van een gameplay waarde in een configuratiebestand. De actieve wereld wordt namelijk opgeslagen in de save directory van de server.

Volgens de huidige publiek beschikbare structuur van de Palworld dedicated server, bevindt de wereld save zich meestal op het volgende pad:

```text
Pal/Saved/SaveGames/0/
```

In deze map vind je doorgaans een map met een lange willekeurige hexadecimale naam, bijvoorbeeld:

```text
84B5E2264EC387DEDB43179D666031A1
```

Deze map bevat de huidige wereld save. Wanneer je deze verwijdert en de server opnieuw start, maakt Palworld automatisch een nieuwe wereld aan.

:::note Geen Config Waarde Nodig
Voor een standaard wereld reset is normaal gesproken geen extra configuratie-instelling, console commando of opstartparameter nodig. De reset wordt uitgevoerd door de bestaande save data te verwijderen.
:::

## Stop de Server

Stop je Palworld server via de ZAP-Hosting game server administratie voordat je de wereldbestanden verwijdert.

Het verwijderen van save data terwijl de server draait kan leiden tot corrupte bestanden of onvolledige verwijdering van werelddata.

:::caution Server Moet Offline Zijn
Zorg dat de server volledig gestopt is voordat je verder gaat. Als de server nog draait, kan deze bestanden opnieuw aanmaken of vergrendelen terwijl je ze bewerkt.
:::

## Open de Save Directory

Open in de ZAP-Hosting Palworld server administratie het bestandsbeheer en navigeer naar het volgende pad:

```text
Pal/Saved/SaveGames/0/
```

Afhankelijk van je productindeling kun je dit bereiken via de bestandsmanager of een vergelijkbare bestands-toegangssectie in de webinterface.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Pad Referentie

| Item | Waarde |
| --- | --- |
| Basis save pad | `Pal/Saved/SaveGames/0/` |
| Wereld map naam | Willekeurige hexadecimale map |
| Voorbeeld map | `84B5E2264EC387DEDB43179D666031A1` |
| Vereiste actie | Verwijder de wereld map |

## Verwijder de Huidige Wereld Save

Zoek in `Pal/Saved/SaveGames/0/` de map met de willekeurige hexadecimale naam. Verwijder deze map volledig.

### Wat Je Moet Verwijderen

| Map type | Vereiste actie |
| --- | --- |
| Huidige wereld save map binnen `Pal/Saved/SaveGames/0/` | Verwijderen |
| `PalworldSettings.ini` of andere config bestanden | Niet bewerken voor deze reset tenzij je ook serverinstellingen wilt wijzigen |

Als er maar één hexadecimale map in `Pal/Saved/SaveGames/0/` staat, is dat meestal de actieve wereld save. Als er meerdere mappen zijn en je weet niet zeker welke in gebruik is, raadpleeg dan eerst je serverbestanden zorgvuldig of neem contact op met support voordat je iets verwijdert.

:::info Configs Sectie Uitleg
Hoewel veel Palworld instellingen via het **Configs** gedeelte beheerd kunnen worden, wordt een wereld reset meestal niet gedaan door een configuratiebestand te bewerken. De vereiste actie is het verwijderen van de wereld save map uit de serverbestanden.
:::

## Start de Server Opnieuw

Start je Palworld server opnieuw nadat de save map is verwijderd.

Bij het opstarten genereert de server automatisch een nieuwe wereld omdat er geen eerdere wereld save beschikbaar is op de verwachte locatie.

### Extra Commando’s of Wijzigingen

| Taak | Vereist |
| --- | --- |
| Configuratiebestand bewerken | Nee |
| In-game commando uitvoeren | Nee |
| Console commando uitvoeren | Nee |
| Server herstarten of starten na verwijderen | Ja |

:::tip Eerste Opstart Kan Langer Duurden
De eerste opstart na het verwijderen van de wereld save kan iets langer duren dan normaal omdat Palworld een nieuwe wereld moet genereren.
:::

## Controleer de Reset

Verbind zodra de server weer online is en controleer of er een verse wereld is aangemaakt.

Je kunt dit meestal controleren door te letten op:

- een nieuwe spawn locatie
- geen eerder gebouwde structuren door spelers
- geen eerdere voortgang
- een nieuw gegenereerde save map in `Pal/Saved/SaveGames/0/`

Als de oude wereld nog steeds verschijnt, stop dan de server opnieuw en controleer of de juiste hexadecimale save map is verwijderd.

## Conclusion

Gefeliciteerd, je hebt je Palworld wereld succesvol gereset en een nieuwe save gestart op je bestaande server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂