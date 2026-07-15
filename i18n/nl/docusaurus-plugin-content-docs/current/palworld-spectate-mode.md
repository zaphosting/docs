---
id: palworld-spectate-mode
title: "Palworld: Spectate Mode"
description: "Learn how to use spectate mode in Palworld, set the required admin password, and enter spectate mode on your server. -> Learn more now"
sidebar_label: "Spectate Mode"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Spectate mode in Palworld stelt je in staat om spelers op je server te observeren zonder actief deel te nemen. In deze gids leer je hoe je admin-toegang voorbereidt, waar je de benodigde configuratie in de ZAP-Hosting interface controleert, en hoe je spectate mode in het spel in- en uitschakelt.

## Voorbereiding

Voordat je spectate mode kunt gebruiken, heb je administrator toegang nodig op je Palworld-server. Dit vereist dat er een geldige `AdminPassword` is ingesteld in je serverconfiguratie.

Als je dit nog niet hebt ingesteld, bekijk dan eerst je Palworld serverinstellingen en admin setup.

:::info Admin Toegang Vereist
Spectate mode is alleen beschikbaar voor administrators. Als je niet eerst inlogt als admin, werkt het spectate-commando niet.
:::

## Controleer de vereiste serverconfiguratie

Hoewel spectate mode zelf geen speciale instelling vereist, moet je server wel een admin-wachtwoord hebben ingesteld zodat je jezelf kunt authenticeren als administrator.

### Open het configuratiebestand in de ZAP interface

Open in de ZAP-Hosting game server webinterface de sectie **Configs**. De relevante Palworld-configuratie staat in het bestand:

`PalWorldSettings.ini`

Afhankelijk van de servertemplate en gameversie bevat dit bestand de belangrijkste serveropties, inclusief de admin-wachtwoordinstelling.



### Controleer de admin-wachtwoordinstelling

Zoek in `PalWorldSettings.ini` de sectie `OptionSettings` en controleer of de waarde `AdminPassword` is ingesteld.

Een typisch voorbeeld ziet er zo uit:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AdminPassword="[your_admin_password]")
```

Als je bestand al veel opties in één `OptionSettings=(...)` regel bevat, hoef je alleen te controleren of de `AdminPassword` aanwezig is en jouw gekozen wachtwoord bevat.

:::caution Bestaande Syntax Behouden
Verwijder geen andere bestaande waarden uit de `OptionSettings` regel. Palworld slaat vaak meerdere instellingen in dezelfde regel op, dus voeg alleen de `AdminPassword` toe of wijzig deze voorzichtig.
:::

### Configuratie referentie

| Bestand | Locatie in ZAP interface | Vereiste sleutel | Doel |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` | `AdminPassword` | Hiermee kun je jezelf authenticeren als admin en spectate mode gebruiken |

## Wijzigingen opslaan en server herstarten

Als je het `AdminPassword` in `PalWorldSettings.ini` hebt aangepast, sla het bestand op en herstart je Palworld-server via de ZAP-Hosting webinterface.

Een herstart is nodig zodat de server de bijgewerkte configuratie inlaadt.

:::note Herstart Vereist
Als je geen wijzigingen hebt aangebracht en het admin-wachtwoord al correct was ingesteld, is een herstart niet nodig voor spectate mode zelf.
:::

## Inloggen als administrator

Zodra de server online is, verbind je zoals gewoonlijk met je Palworld-server in het spel. Om spectate mode te gebruiken, moet je je authenticeren met het eerder ingestelde admin-wachtwoord.

Het exacte admin-logincommando kan verschillen afhankelijk van de huidige Palworld-implementatie en interface. Als je server handmatige admin-authenticatie vereist na het joinen, gebruik dan het ingestelde admin-wachtwoord in het juiste in-game admin-commando of admin-login prompt dat jouw serverversie ondersteunt.

:::info Over Admin Authenticatie
Huidige externe bronnen bevestigen consistent dat spectate mode adminrechten vereist en dat `AdminPassword` moet zijn ingesteld. Als jouw serverbuild een specifiek admin-logincommando gebruikt, volg dan het commandoformaat dat jouw geïnstalleerde Palworld-versie ondersteunt.
:::

## Spectate mode activeren

Zodra je bent verbonden als administrator, kun je spectate mode op een van de volgende manieren inschakelen.

### Gebruik de sneltoets

Druk op de `\` toets om spectate mode te activeren.

### Gebruik het commando

Gebruik als alternatief het volgende in-game commando:

```text
/togglespectate
```

Dit commando schakelt spectate mode aan of uit voor je huidige character sessie, mits je bent geauthenticeerd als admin.

### Spectate mode commando referentie

| Actie | Methode | Vereiste |
| --- | --- | --- |
| Spectate mode aanzetten | Druk op `\` | Adminrechten |
| Spectate mode toggelen | `/togglespectate` | Adminrechten |
| Spectate mode verlaten | Druk op `Esc` | Actieve spectate mode |

:::tip Wanneer spectate mode gebruiken
Spectate mode is handig als je spelers wilt monitoren, meldingen wilt onderzoeken of activiteit op je server wilt observeren zonder het spel te verstoren.
:::

## Spectate mode verlaten

Om spectate mode te verlaten en terug te keren naar normaal spel, druk je op `Esc`.

Indien nodig kun je ook `/togglespectate` opnieuw gebruiken om de mode uit te schakelen, afhankelijk van het gedrag van je server.

## Problemen oplossen

Als spectate mode niet werkt, controleer dan de volgende punten.

### Bevestig dat het admin-wachtwoord is ingesteld

Open `PalWorldSettings.ini` opnieuw via **Configs** en controleer of `AdminPassword` aanwezig en niet leeg is.

### Herstart na configuratiewijziging

Als je recent het configuratiebestand hebt aangepast, herstart dan de server voordat je het opnieuw test.

### Zorg dat je als admin bent geauthenticeerd

Een ingestelde `AdminPassword` is niet altijd voldoende. Je moet ook door de server worden herkend als actieve administrator tijdens je sessie.

### Controleer je toetsinvoer

Op sommige toetsenbordindelingen staat de `\` toets op een andere plek. Als de sneltoets niet reageert, gebruik dan `/togglespectate`.

:::caution Versieverschillen
Palworld ondergaat nog steeds gameplay- en serverwijzigingen. Als spectate mode of admin-gedrag op jouw server anders is, controleer dan of je server up-to-date is en of de huidige gameversie de gerelateerde commando’s of permissies heeft aangepast.
:::

## Conclusie

Gefeliciteerd, je hebt spectate mode succesvol gebruikt op je Palworld-server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂