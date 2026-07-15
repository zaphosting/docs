---
id: palworld-reset-server
title: "Palworld: Server Resetten"
description: "Leer hoe je je Palworld-server reset in de ZAP-webinterface, welke instellingen worden verwijderd en hoe je standaard serverdata veilig herstelt. -> Leer nu meer"
sidebar_label: "Server Resetten"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld slaat je wereld, spelersvoortgang en serverinstellingen op de game server op. In deze gids leer je hoe je je Palworld-server bij ZAP-Hosting volledig reset en opnieuw begint met een verse standaardinstallatie.

:::danger Volledige Data Verwijdering Waarschuwing
Een volledige reset verwijdert permanent je bestaande opgeslagen data, configuratiewijzigingen en alle andere serverbestanden die op de huidige installatie staan. Gebruik dit alleen als laatste redmiddel.
:::



## Voorbereiding

Zorg ervoor dat je toegang hebt tot je Palworld-game server in de ZAP-Hosting webinterface en dat je de huidige werelddata niet meer nodig hebt.

:::info Maak Eerst Een Backup Van Belangrijke Data
Wil je een kopie bewaren van je huidige wereld of configuratie? Maak dan eerst een backup voordat je verdergaat. Na de reset kan de verwijderde data normaal gesproken niet meer worden hersteld.
:::

## Begrijp wat een Palworld server reset doet

Een volledige Palworld reset is niet hetzelfde als het aanpassen van een enkele instelling in het configuratiebestand. Het herinstalleert de hele server en verwijdert de huidige serverdata.

De reset verwijdert doorgaans het volgende:

| Datatype | Verwijderd tijdens reset |
| --- | --- |
| Wereld opgeslagen data | Ja |
| Spelersvoortgang | Ja |
| Server configuratiewijzigingen | Ja |
| Geïnstalleerde mods of aangepaste bestanden | Ja |
| Standaard gamebestanden | Worden automatisch opnieuw geïnstalleerd |

Na de reset start je server met een verse installatie en standaardinstellingen.

## Controleer eerst de locatie van de configuratie

Voor normale Palworld-configuratiewijzigingen kun je de relevante bestanden vinden in je game server administratie onder `Configs`. De belangrijkste Palworld-instellingen staan meestal in het volgende bestand:

| Bestand | Doel |
| --- | --- |
| `PalWorldSettings.ini` | Hoofdconfiguratiebestand van de Palworld-server |

In de ZAP-Hosting interface vind je dit meestal via je Palworld server administratie onder `Configs`.

:::note Reset Vereist Geen Handmatige Configuratie Aanpassing
Een volledige serverreset vereist niet dat je `PalWorldSettings.ini` handmatig aanpast. Dit bestand is relevant voor normale instellingen, maar een volledige reset wordt uitgevoerd door de server te herinstalleren of te formatteren zodat alle bestanden met standaardwaarden worden aangemaakt.
:::

Als je alleen gameplay-instellingen wilt wijzigen in plaats van de hele server te verwijderen, pas dan het configuratiebestand aan in `Configs` in plaats van een volledige reset uit te voeren.

## Stop de server

Voordat je de reset start, moet je de Palworld-server volledig stoppen.

1. Log in op de ZAP-Hosting webinterface.
2. Open je Palworld-game server.
3. Stop de server via de serverbeheeropties.
4. Wacht tot de serverstatus aangeeft dat de server offline is.

:::caution Niet Resetten Terwijl De Server Draait
Als je een reset start terwijl de server nog actief is, kunnen bestanden niet goed worden verwijderd en kan opgeslagen data inconsistent worden.
:::

## Herinstalleer en reset de server

Een volledige reset van Palworld voer je uit door de server te herinstalleren met formatteer- of resetopties in de ZAP-interface.

### Open de herinstallatiefunctie

Zoek in je Palworld serverbeheer naar de herinstallatie- of resetfunctie in het serverbeheergebied.

Omdat de benamingen kunnen verschillen tussen panelversies, kan de exacte tekst iets afwijken. Bij ZAP-Hosting vind je deze functie meestal in het serverbeheer waar herinstallatie- of formatteeracties beschikbaar zijn.



### Start de volledige reset

Gebruik de beschikbare herinstallatie-optie die een volledige formatteer- of resetactie van de serverdata uitvoert.

Bevestig de actie als het paneel hierom vraagt.

:::danger Deze Actie Verwijdert Alle Serverdata
Een volledige herinstallatie of format reset verwijdert saves, configuraties en aangepaste serverbestanden. Ga alleen door als je zeker weet dat je alles wilt resetten.
:::

### Wacht tot de installatie is voltooid

Na bevestiging van de reset, wacht tot het herinstallatieproces klaar is. Afhankelijk van de panelstatus en servergrootte kan dit enkele minuten duren.

Onderbreek het proces niet terwijl de server wordt hersteld.

## Start de verse Palworld-server

Als de herinstallatie klaar is, start je de Palworld-server opnieuw via het serverbeheer.

Na het opstarten:

- wordt een nieuwe wereld opgeslagen
- worden standaard serverinstellingen gebruikt
- is eerdere spelers- en wereldvoortgang verdwenen

Indien nodig kun je nu terug naar `Configs` om je Palworld-instellingen opnieuw aan te passen in `PalWorldSettings.ini`.

## Controleer het resultaat van de reset

Na het opstarten van de server, maak verbinding en controleer of de reset succesvol was.

Controleer het volgende:

| Controle | Verwacht resultaat |
| --- | --- |
| Wereldstatus | Verse nieuwe wereld |
| Spelersdata | Geen eerdere voortgang |
| Serverinstellingen | Standaardwaarden tenzij opnieuw aangepast |
| Aangepaste bestanden of mods | Verwijderd tenzij handmatig opnieuw geïnstalleerd |

Als de oude wereld nog zichtbaar is, stop dan de server en controleer of het herinstallatieproces succesvol is afgerond in het ZAP-paneel. Als het paneel geen volledige format reset heeft uitgevoerd, moet je het proces mogelijk opnieuw zorgvuldig doorlopen.

## Serverinstellingen opnieuw configureren na de reset

Na een succesvolle reset gebruikt je Palworld-server standaardconfiguraties. Wil je de server weer aanpassen, open dan de sectie `Configs` in je game server beheer en bewerk `PalWorldSettings.ini`.

Typische taken na reset zijn:

- servernaam wijzigen
- wachtwoord instellen
- moeilijkheidsgraad of gameplaywaarden aanpassen
- aangepaste configuratiewijzigingen opnieuw toepassen
- ondersteunde mods of extra bestanden opnieuw installeren indien nodig

:::tip Pas Instellingen Voorzichtig Opnieuw Toe
Als een eerdere configuratie problemen gaf, vermijd dan om meteen alle oude instellingen terug te zetten. Pas alleen de instellingen toe die je echt nodig hebt, zo herken je makkelijker welke wijziging problemen veroorzaakt.
:::

## Configuratie referentie

De volgende tabel vat het relevante bestand en het resetgedrag samen:

| Item | Details |
| --- | --- |
| Hoofdconfiguratiebestand | `PalWorldSettings.ini` |
| ZAP-locatie voor configbewerking | `Configs` in game server beheer |
| Handmatige configwijziging nodig voor volledige reset | Nee |
| Vereiste actie voor volledige reset | Herinstalleren of formatteren/resetten van de server |
| Herstart vereist na reset | Ja, start de server opnieuw na herinstallatie |
| Extra benodigde commando’s | Geen bevestigd |

:::note Benamingen in Interface Kunnen Verschillen
De exacte benaming van de herinstallatie- of formatteeroptie kan verschillen afhankelijk van de huidige ZAP-webinterfaceversie. Kun je de resetfunctie niet vinden, neem dan contact op met de support voordat je alternatieve methodes voor het verwijderen van bestanden probeert.
:::

## Conclusie

Gefeliciteerd, je hebt je Palworld-server succesvol gereset. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂