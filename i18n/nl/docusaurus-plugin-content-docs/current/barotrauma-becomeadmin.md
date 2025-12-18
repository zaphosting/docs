---
id: barotrauma-becomeadmin
title: "Barotrauma: Word admin op je eigen server"
description: "Ontdek hoe je administratorrechten toekent voor volledige servercontrole en soepel beheer in-game → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-barotrauma
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toekennen van administratorrechten geeft je eenvoudige en uitgebreide controle over je server. Als admin kun je alle beschikbare opties en functies van het spel direct in-game gebruiken. Hieronder leggen we stap voor stap uit hoe je administratorrechten aan je server toevoegt.  
<InlineVoucher />

## Configuratie
Een admin toevoegen doe je via de **Clientpermissions.xml** config, die je terugvindt in de interface onder Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/oJNTozXz9YW8sjG/preview)

Je moet een nieuwe client-entry toevoegen aan de config om een nieuwe speler admin te maken. De syntax ziet er zo uit:

```xml
<Client
    name="<spelernaam>"
    steamid="<steamid>"
    permissions="<rechten>">
    <command
      name="<commandonaam>" />
  </Client>
```

De client-entry bevat de variabelen **Name, SteamID, Permissions en Command**. Deze moet je aanpassen. De naam kun je zelf kiezen, die dient alleen als overzicht. Daarna moet je de SteamID64 van je Steam-account invullen.

Je vindt deze door je Steam-profiel te openen en ergens op de pagina rechts te klikken. Kopieer daar de Steam URL van je profiel.

![](https://screensaver01.zap-hosting.com/index.php/s/C3nfdjemxkjZH5n/preview)

Vervolgens plak je die URL in één van deze websites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/asnbFc4JDifdSHn/preview)

Je krijgt dan algemene accountinfo te zien, inclusief de Steam ID. Je hebt hier de **Steam ID 64** nodig. Die voeg je toe aan de client-entry onder **SteamID**. Het resultaat ziet er zo uit:

```xml
<Client
    name="Naam"
    steamid="123456789"
    permissions="<rechten>">
    <command
      name="<commandonaam>" />
  </Client>
```

Vanaf nu ben je admin, maar je hebt nog geen specifieke rechten gekregen. Die voeg je toe door de juiste permissions en commands in te vullen. Bijvoorbeeld zo:

```xml
...
    permissions="<rechten>"> ---> permissions="ServerLog, ConsoleCommands">
...
```

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ClientPermissions> 
<Client
    name="Naam"
    steamid="123456789"
    permissions="ServerLog, ConsoleCommands">
    <command
      name="heal" />
    <command
      name="spawn" />
  </Client>
</ClientPermissions>
```

In dit voorbeeld heeft de admin toegang tot serverlogs, console, en de commands heal en spawn. Hieronder vind je een overzicht van de rechten die je kunt instellen.

## Rechten

| Rechten          | Beschrijving                                                  |
| ---------------- | ------------------------------------------------------------- |
| ManageRound      | Kan rondes starten/eindigen.                                 |
| Kick             | Kan andere spelers kicken.                                   |
| Ban              | Kan andere spelers bannen.                                   |
| Unban            | Kan bans van andere spelers verwijderen.                     |
| SelectSub        | Kan het onderzeeër kiezen.                                   |
| SelectMode       | Kan de gamemode kiezen.                                      |
| ManageCampaign   | Kan bestemming, missie kiezen en voorraden kopen in de Campaign store. |
| ConsoleCommands  | Kan console-commands gebruiken - let op, je moet ook rechten geven voor individuele commands. |
| ServerLog        | Kan serverlogs lezen.                                        |
| ManageSettings   | Kan serverinstellingen aanpassen.                            |
| ManagePermissions| Kan rechten van andere clients aanpassen.                    |
| KarmaImmunity    | Is immuun voor negatieve effecten van het karma-systeem, verliest geen karma. |
| All              | Geeft alle rechten.                                          |

## Conclusie

Gefeliciteerd, je hebt succesvol administratorrechten ingesteld! Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar om je te helpen! 🙂

<InlineVoucher />