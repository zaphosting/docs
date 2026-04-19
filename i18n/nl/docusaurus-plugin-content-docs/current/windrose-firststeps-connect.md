---
id: windrose-firststeps-connect
title: "Windrose: Verbinden met de server"
description: "Leer hoe je verbinding maakt met je Windrose-server met de juiste uitnodigingscode en een betrouwbare serververbinding tot stand brengt zonder veelvoorkomende verbindingsproblemen -> Leer het nu"
sidebar_label: Verbinden met server
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Weet je niet zeker hoe je verbinding maakt met je **Hytale**-server of wat je nodig hebt om te beginnen? Geen zorgen, wij helpen je! We nemen je mee door alles wat je nodig hebt. Van de benodigde tools en informatie tot het daadwerkelijke verbindingsproces, inclusief belangrijke aandachtspunten voor een soepele en probleemloze verbinding. Volg onze gids en je bent zo verbonden!

## Servergegevens verkrijgen
Voordat je verbinding maakt, moet je de relevante serverinformatie ophalen uit de ZAP-Hosting game server webinterface. Voor Windrose is de belangrijkste informatie de **uitnodigingscode**.

Je vindt de uitnodigingscode in je game server beheer onder de serverconfiguratiebestanden in `InviteCode.txt`.

:::info Vereiste uitnodigingscode
Voor Windrose is de uitnodigingscode de sleutelwaarde om verbinding te maken met de server. Als je de verkeerde of een verouderde code gebruikt, kan de verbinding mislukken.
:::

De volgende informatie is handig voordat je begint:

| Informatie | Doel |
| --- | --- |
| Inhoud van `InviteCode.txt` | Nodig om verbinding te maken met de Windrose-server |
| Servernaam | Helpt je de juiste server te herkennen |
| Optioneel serverwachtwoord | Kan vereist zijn afhankelijk van je configuratie |

![](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

## Verbinding maken met de server
Zodra je de uitnodigingscode hebt, kun je rechtstreeks via het spel verbinding maken met de Windrose-server.

### Vind de uitnodigingscode in het serverbeheer
Open je ZAP-Hosting game server webinterface en ga naar het serverconfiguratiegedeelte. Zoek het bestand `InviteCode.txt` en open het.

In dit bestand vind je de actuele uitnodigingscode voor je server. Kopieer deze waarde precies zoals weergegeven.

:::note Plaatsvervangende waarden
Als je in deze gids een waarde ziet zoals `[your_invite_code]`, vervang deze dan door de daadwerkelijke code uit je eigen `InviteCode.txt`-bestand.
:::

### Sluit je aan bij de server in Windrose
Start Windrose en open het serververbinding- of multiplayer-menu van het spel. Zoek de optie waarmee je een server kunt joinen met een uitnodigingscode.

Voer de uitnodigingscode uit `InviteCode.txt` in het daarvoor bestemde veld in en bevestig de verbinding. Als je server beveiligd is, wordt je mogelijk ook gevraagd een wachtwoord in te voeren.

| Veld | Wat in te vullen |
| --- | --- |
| Uitnodigingscode | `[your_invite_code]` |
| Wachtwoord | `[your_server_password]` indien geconfigureerd |

Na het invoeren van de uitnodigingscode zou het spel verbinding moeten maken met je Windrose-server.

:::tip Code precies kopiëren
Om verbindingsproblemen te voorkomen, kopieer en plak je de uitnodigingscode bij voorkeur direct uit `InviteCode.txt`. Zelfs een kleine typefout kan een succesvolle verbinding verhinderen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/t3R6by5GrswnZsQ/download)

## Mogelijke problemen en oplossingen
Als de serververbinding niet meteen werkt, kun je hieronder de meest voorkomende oorzaken controleren.

### Uitnodigingscode werkt niet
Als de uitnodigingscode wordt afgewezen, controleer dan eerst of je de volledige inhoud van `InviteCode.txt` correct hebt gekopieerd. Zorg dat er geen extra spaties voor of na de code staan.

Het kan ook zijn dat de uitnodigingscode is gewijzigd na een serverherstart, update of configuratiewijziging. Open in dat geval `InviteCode.txt` opnieuw en gebruik de actuele waarde.

### Server is nog niet klaar
Als de server nog aan het opstarten is of de initialisatie niet heeft afgerond, kunnen spelers mogelijk niet verbinden, zelfs niet met de juiste uitnodigingscode.

Controleer de serverconsole en logs in je game server beheer om te bevestigen dat de server succesvol is gestart en volledig online is.

:::caution Wacht op volledige opstart
Probeer niet te verbinden terwijl de server nog aan het laden of herstarten is. Dit kan leiden tot mislukte verbindingspogingen, zelfs als de uitnodigingscode correct is.
:::

### Configuratie- of bestandsproblemen
Als de server onbereikbaar blijft, kan er een configuratiefout of beschadigde bestanden zijn die een correcte opstart verhinderen. Controleer in dat geval recente wijzigingen die je aan de server hebt gedaan en bekijk de logs op fouten.

Herstel indien nodig een werkende backup of maak recente configuratiewijzigingen ongedaan.

### Geen oplossing gevonden of onduidelijk
Als je na het controleren van de uitnodigingscode, serverstatus en configuratie nog steeds niet kunt verbinden, neem dan contact op met het ZAP-Hosting supportteam via de officiële [supportpagina](https://zap-hosting.com/en/customer/support/).

Geef bij het aanmaken van een ticket zoveel mogelijk details, zoals:

- Het exacte probleem dat je ervaart
- Of de server succesvol opstart
- Of de uitnodigingscode in `InviteCode.txt` zichtbaar is
- Eventuele relevante foutmeldingen uit de console of logs

## Conclusie
Gefeliciteerd, je bent succesvol verbonden met je Windrose-server met behulp van de uitnodigingscode. Voor verdere vragen of hulp kun je altijd contact opnemen met ons supportteam, dat dagelijks voor je klaarstaat! 🙂