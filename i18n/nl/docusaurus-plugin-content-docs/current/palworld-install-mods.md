---
id: palworld-install-mods
title: "Palworld: Mods Installeren"
description: "Leer hoe je Palworld mods installeert, inclusief UE4SS Palworld, Lua mods en .pak mods, op je dedicated server. -> Leer nu meer"
sidebar_label: Palworld: Mods Installeren
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Palworld ondersteunt verschillende soorten servermods, meestal `UE4SS`, `.lua` en `.pak` mods. In deze gids leer je hoe je je server voorbereidt, het juiste modtype herkent, de benodigde bestanden uploadt en je server herstart zodat de mods correct laden.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Voorbereiding

Voordat je mods installeert, moet je zeker weten dat je server en de gekozen mod compatibel zijn.

:::danger Maak Eerst Een Backup Van Je Wereld
Maak altijd een backup van je Palworld save data voordat je mods installeert. Als een mod niet compatibel is of opstartproblemen veroorzaakt, moet je mogelijk je vorige wereldstatus herstellen.
:::

Controleer eerst het volgende:

| Vereiste | Details |
| --- | --- |
| Server editie | Dedicated Palworld servers gebruiken de **Steam** versie. Mods die alleen voor de **Game Pass** versie bedoeld zijn, mogen niet gebruikt worden. |
| Mod compatibiliteit | Controleer of de modmaker expliciet vermeldt dat de mod werkt op een dedicated server. |
| Modtype | Controleer of de mod een `UE4SS`, `.lua` of `.pak` mod is. |
| Client vereiste | Sommige mods moeten zowel op de **server** als op alle **speler clients** geïnstalleerd worden. |
| Server versie | Controleer je huidige server versie voordat je een mod installeert. |

### Controleer je server versie

Om je huidige Palworld server versie te controleren, open je de serverconsole in je ZAP-Hosting game server administratie en voer je uit:

```text
info
```

Dit toont versie-informatie die je kunt vergelijken met de vereisten van de mod.

:::tip Installeer Altijd Eén Mod Tegelijk
Installeer altijd één mod tegelijk en test deze voordat je een volgende toevoegt. Dit maakt het oplossen van problemen veel makkelijker als de server niet opstart of een mod niet werkt.
:::

## Begrijp welk modtype je installeert

Palworld mods worden niet allemaal op dezelfde manier geïnstalleerd. Je moet het modtype herkennen voordat je bestanden uploadt.

| Modtype | Typische inhoud | Gebruikelijke installatiemap | Opmerkingen |
| --- | --- | --- | --- |
| `UE4SS` / `.lua` mod | Map met scripts zoals `main.lua` | `Pal/Binaries/Win64/ue4ss/Mods/` | Vereist meestal het `UE4SS` framework |
| `.pak` mod | Eén of meerdere `.pak` bestanden, soms met extra bestanden | `Pal/Content/Paks/~mods/` | Sommige mods gebruiken in plaats daarvan `Pal/Content/Paks/LogicMods/` |
| Client-side mod | Verschillend | Niet altijd op server te installeren | Alleen gebruiken als de modmaker serverondersteuning bevestigt |

:::caution Volg Het Pad Van De Modmaker
De paden in deze gids zijn de meest gebruikte locaties voor Palworld mods. Sommige mods vereisen echter een andere mappenstructuur. Volg altijd de instructies van de modmaker als die afwijken.
:::

## Toegang tot je serverbestanden in de ZAP interface

Je hebt toegang nodig tot de bestandsbeheer secties in je ZAP-Hosting game server administratie.

### Open de Configs sectie

De relevante configuratiebestanden vind je in je game server administratie onder **Configs**. Hier kun je beschikbare configuratiebestanden voor je Palworld server bekijken en aanpassen.

:::note Configs versus Mod Bestanden
Het installeren van Palworld mods gebeurt meestal niet alleen door een instelling in één configbestand te wijzigen. Meestal moet je de modbestanden uploaden naar de juiste servermappen, en sommige mods vereisen daarnaast configuratiewijzigingen in bestanden onder **Configs**.
:::

### Open de bestandsbeheerder

Om modbestanden zoals `.pak` archieven of `UE4SS` scriptmappen te uploaden, heb je ook toegang nodig tot je serverbestanden via de bestandsbeheerder in de ZAP interface.

Als een mod een eigen configuratiebestand bevat, upload dit dan precies zoals de modmaker het aanlevert en pas het alleen aan als de maker ondersteunde waarden documenteert.

## Installeer het UE4SS framework indien nodig

`UE4SS` is een modding framework dat door veel Palworld Lua en script-gebaseerde mods wordt gebruikt. Je hebt dit alleen nodig als je gekozen mod ervan afhankelijk is.

### Bevestig dat je server Windows gebruikt

`UE4SS` voor Palworld wordt meestal gebruikt met de Windows serverversie. Als je server geen Windows Palworld serveromgeving gebruikt, werken `UE4SS` mods mogelijk niet zoals verwacht.

:::info UE4SS Vereiste
Als je gekozen mod een `UE4SS` of `.lua` mod is, controleer dan eerst of het framework al aanwezig is voordat je de mod zelf uploadt.
:::

### Controleer het UE4SS installatiepad

Als `UE4SS` geïnstalleerd is, is de relevante map meestal:

```text
Pal/Binaries/Win64/ue4ss/
```

De modmap die door de meeste `UE4SS` en Lua mods wordt gebruikt is:

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

Als je ZAP-Hosting product een ingebouwde modding- of `UE4SS` optie in de serveradministratie heeft, kun je die gebruiken als die beschikbaar is. Als zo’n optie niet zichtbaar is, ga er dan niet vanuit dat die bestaat voor jouw product of servertype.

## Upload en installeer Lua of UE4SS mods

Lua en andere `UE4SS`-gebaseerde Palworld mods worden meestal als mappen verspreid, niet als één `.pak` bestand.

### Pak de mod uit op je lokale apparaat

Download het modarchief van de officiële releasepagina van de modmaker en pak het eerst uit op je computer. Upload het `.zip` of `.rar` bestand niet tenzij de maker dat expliciet aangeeft.

### Upload de modmap naar het juiste pad

Voor de meeste Lua of `UE4SS` mods upload je de uitgepakte modmap naar:

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

Een typische Lua modstructuur ziet er zo uit:

```text
Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua
```

Vervang `UploadedMod` door de daadwerkelijke mapnaam die de modmaker heeft opgegeven.

### Voorbeeldstructuur

| Item | Voorbeeldpad |
| --- | --- |
| Modmap | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/` |
| Scriptbestand | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua` |

:::caution Hernoem Bestanden Niet Zonder Toestemming
Hernoem de modmap, scriptbestanden of interne mappenstructuur niet tenzij de modmaker dat expliciet aangeeft. Veel `UE4SS` mods zijn afhankelijk van de originele structuur om correct te laden.
:::

## Upload en installeer .pak mods

`.pak` mods worden anders geïnstalleerd dan Lua of `UE4SS` scriptmods.

### Upload het `.pak` bestand

Voor de meeste Palworld `.pak` mods upload je het bestand naar:

```text
Pal/Content/Paks/~mods/
```

Voorbeeld:

```text
Pal/Content/Paks/~mods/UploadedMod.pak
```

Sommige mods geven aan dat je in plaats daarvan moet uploaden naar:

```text
Pal/Content/Paks/LogicMods/
```

### Controleer extra bestanden indien aanwezig

Sommige `.pak` mods bevatten meerdere bestanden, zoals metadata of begeleidende bestanden. Als het modarchief meerdere benodigde bestanden bevat, upload ze dan allemaal precies zoals de modmaker dat beschrijft.

| Veelvoorkomende `.pak` locatie | Gebruik |
| --- | --- |
| `Pal/Content/Paks/~mods/` | Meest gebruikte locatie voor algemene `.pak` mods |
| `Pal/Content/Paks/LogicMods/` | Gebruikt door sommige mods volgens instructies van de maker |

## Pas modconfiguratiebestanden aan indien de mod dit vereist

Sommige Palworld mods bevatten eigen configuratiebestanden die na upload aangepast moeten worden. Deze instellingen zijn niet universeel, dus de exacte bestandsnaam en waarden hangen af van de gekozen mod.

### Waar vind je het configuratiebestand

Als de mod een configbestand levert, kan dit na upload op een van deze locaties staan:

| Modtype | Mogelijke configlocatie |
| --- | --- |
| `UE4SS` / `.lua` mod | In de modmap onder `Pal/Binaries/Win64/ue4ss/Mods/[jouw_mod_naam]/` |
| `.pak` mod | Soms geen bewerkbare config; check de moddocumentatie |
| Serverconfig integratie | Soms kunnen extra instellingen via **Configs** in je ZAP serveradministratie aangepast worden |

### Wat moet je aanpassen

Pas alleen waarden aan die expliciet door de modmaker zijn gedocumenteerd. Typische voorbeelden zijn:

- modfuncties aan- of uitzetten
- multipliers of limieten instellen
- admin-only gedrag definiëren
- sleutelnaam of interne opties wijzigen die de mod gebruikt

Omdat Palworld mods geen uniforme configstructuur gebruiken, is er geen universele configuratie-instelling die voor alle mods geldt.

:::info Geen Universele Palworld Mod Config Instelling
Er is momenteel geen enkel Palworld serverconfiguratiebestand of ingebouwde configsectie die alle mods globaal activeert. In de praktijk installeer je mods door de juiste bestanden in de juiste mappen te plaatsen en alleen mod-specifieke configbestanden aan te passen als de mod die bevat.
:::

## Herstart de server en test de mod

Nadat je de modbestanden hebt geüpload en eventuele configuratiewijzigingen hebt doorgevoerd, moet je je Palworld server herstarten.

### Herstart de server

Gebruik de herstartfunctie in je ZAP-Hosting game server administratie om de service volledig opnieuw te starten.

Deze stap is nodig omdat Palworld normaal gesproken nieuw geüploade servermods pas laadt bij een herstart.

### Test de functionaliteit

Na de herstart:

1. Verbind met de server.
2. Test de modfunctie in de game.
3. Controleer de serverconsole op fouten als de mod niet werkt.
4. Verwijder de nieuw toegevoegde modbestanden als de server niet opstart of zich vreemd gedraagt.

:::tip Problemen Met Mods Oplossen
Als een mod problemen veroorzaakt, verwijder dan eerst alleen de bestanden van de laatst geïnstalleerde mod en herstart de server opnieuw. Zo controleer je snel of die mod de oorzaak is.
:::

## Snel overzicht

| Taak | Actie |
| --- | --- |
| Controleer server versie | Voer `info` uit in de serverconsole |
| UE4SS basispad | `Pal/Binaries/Win64/ue4ss/` |
| UE4SS/Lua mod pad | `Pal/Binaries/Win64/ue4ss/Mods/` |
| Veelvoorkomend Lua scriptbestand | `scripts/main.lua` |
| Veelvoorkomend `.pak` mod pad | `Pal/Content/Paks/~mods/` |
| Alternatief `.pak` pad | `Pal/Content/Paks/LogicMods/` |
| Configbestand toegang | Open **Configs** in de ZAP game server administratie |
| Laatste stap | Herstart de server |

## Conclusie

Gefeliciteerd, je hebt succesvol mods geïnstalleerd op je Palworld server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂