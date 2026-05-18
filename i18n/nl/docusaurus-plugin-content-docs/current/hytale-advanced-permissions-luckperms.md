---
id: hytale-advanced-permissions-luckperms
title: "Hytale: Geavanceerde permissies met LuckPerms"
description: "Ontdek hoe je LuckPerms installeert en configureert om geavanceerde permissies en ranks te beheren op een Hytale-server → Leer het nu"
sidebar_label: Geavanceerde Permissies
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Het beheren van permissies op een Hytale-server wordt steeds belangrijker zodra je gaat werken met staff-rollen, custom ranks of speciale perks voor spelers. Het standaard in-game permissiesysteem is prima voor basisbeheer, maar het loopt snel tegen zijn grenzen aan als je fijnmazige controle wilt over commands en functies.

**LuckPerms** biedt een krachtig en zeer aanpasbaar permissiesysteem voor Hytale-servers. Hiermee bepaal je precies welke permissies en commands verschillende spelers of groepen mogen gebruiken.

<InlineVoucher />



## LuckPerms installeren

Om LuckPerms mods te installeren, download je eerst de nieuwste LuckPerms `.jar` file.  
Na het downloaden open je je serverbeheer paneel en stop je de server om de mod veilig te uploaden.

Ga naar de **Bestanden** sectie van je server en open de `mods` map. Upload de LuckPerms `.jar` file in deze map. Voor een uitgebreide uitleg over het installeren van mods raden we je aan om de [Mods Installeren](hytale-mods) gids te bekijken.

Als het uploaden klaar is, start je de server weer op. Na het opstarten open je de serverconsole en controleer je of LuckPerms correct draait. Bij een succesvolle installatie zie je opstartberichten van LuckPerms in de console.



## Eerste permissies toekennen

Na installatie moet LuckPerms eerst geconfigureerd worden voordat je het effectief kunt gebruiken. Om permissies te beheren, moet je jezelf toestemming geven om LuckPerms-commands te gebruiken. Voer in de console of in de in-game chat het volgende commando uit:

```
lp user <spelernaam> permission set luckperms.* true
```

Dit geeft de geselecteerde speler volledige toegang tot alle LuckPerms-commands.



## De LuckPerms web editor gebruiken

LuckPerms heeft een web editor die een handige interface biedt om groepen aan te maken en permissies te beheren. Om een editor sessie te genereren, typ je:

```
lp editor
```

LuckPerms toont dan een gegenereerde editor link in de console. Open deze link in je browser om de web editor te openen.

```
[LP] Preparing a new editor session, please wait...
[LP] Click the link below to open the editor:
https://luckperms.net/editor/XXXXXXXXXX
```

![img](https://screensaver01.zap-hosting.com/index.php/s/5Cx2sGY4axZ6TBo/preview)

Kopieer in de editor de **command link** die wordt weergegeven. Ga terug naar je serverconsole en plak deze command link om vertrouwen te geven en de editor sessie met je server te verbinden.

```
/lp trusteditor XXXX-XXXX
```

Zodra de editor verbonden is, kun je gebruikers, groepen en permissies direct via de webinterface beheren. Na het aanpassen klik je op **Apply** om de configuratie op te slaan. Als LuckPerms een apply-commando geeft, kopieer dat dan en plak het in de serverconsole om de wijzigingen definitief door te voeren.



## Een admin groep aanmaken

Open de editor link in je browser en ga naar de **Groups** sectie. Maak een nieuwe groep aan via het plus-icoon en geef de groep de naam `admin`. Je kunt optioneel extra details instellen zoals displaynaam, gewicht, parent group en prefix/suffix.

![img](https://screensaver01.zap-hosting.com/index.php/s/xEWHSBkxKy5q8qr/preview)

Na het aanmaken van de groep selecteer je de `admin` groep in de editor en voeg je permissies toe. Om de groep volledige Hytale permissies te geven, voeg je toe:

```
hytale.*
```

Deze permissie geeft volledige toegang tot alle Hytale permissies. Na het toevoegen van permissies wijs je een speler toe aan de groep.  
Open in de editor de **Users** sectie, selecteer de gewenste gebruiker en voeg de `admin` groep toe onder **Parent groups**.

Klik tot slot op **Apply** om je wijzigingen op te slaan. Als daarom gevraagd wordt, plak je het apply-commando in de serverconsole.



## Veelgebruikte LuckPerms commands

LuckPerms kun je beheren via de web editor of direct met commands. De volgende commands worden vaak gebruikt voor permissiebeheer:

| Command                                                      | Beschrijving                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `/lp user <spelernaam> parent add <groep>`                   | Voegt de speler toe aan de groep.                            |
| `/lp user <spelernaam> parent remove <groep>`                | Verwijdert de speler uit de groep.                           |
| `/lp user <spelernaam> permission set <permissie>`           | Geeft de speler de permissie.                                |
| `lp user <spelernaam> permission settemp <permissie> true <duur>` | Geeft de speler een tijdelijke permissie, bijvoorbeeld `1h` voor 1 uur of `1m` voor 1 minuut. |
| `/lp user <spelernaam> permission unset <permissie>`         | Verwijdert de permissie van de speler.                       |
| `/lp group <groep> permission set <permissie>`               | Geeft de groep de permissie.                                 |
| `/lp group <groep> permission unset <permissie>`             | Verwijdert de permissie van de groep.                        |



## Conclusie

LuckPerms is een krachtige oplossing voor geavanceerd permissiebeheer op Hytale-servers. Met groepen, permissies en de web editor kun je een gestructureerd rolensysteem opzetten dat meegroeit met je community.

Eenmaal ingesteld maakt LuckPerms het makkelijk om staff ranks, speler perks en toegangscontrole te beheren, terwijl je serverbeheer overzichtelijk, consistent en performance-vriendelijk blijft.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />