---
id: 7d2d-becomeadmin
title: "7 Days to Die: Hoe word je admin voor 7 Days to Die"
description: "Ontdek hoe je administratorrechten toewijst en beheert voor volledige servercontrole en aangepaste adminrollen → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toewijzen van administratorrechten geeft je een simpele en uitgebreide adminervaring met volledige controle over je server. Als admin kun je alle beschikbare opties en functies van het spel direct in het spel gebruiken. Hieronder leggen we stap voor stap uit hoe je administratorrechten aan je server toewijst.  
<InlineVoucher />

## Configuratie
Een admin toevoegen doe je via de **serveradmin.xml** config, die je terugvindt in de webinterface onder Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/wXpLL2qyZE2zCYa/preview)

Je vindt je SteamID64 door naar je Steam-profiel te gaan en ergens met de rechtermuisknop te klikken. Klik dan op **Steam URL kopiëren**.

![](https://screensaver01.zap-hosting.com/index.php/s/Q9WJ8GwbHCmTRPx/preview)

Open daarna één van de volgende sites en plak daar de URL van je profiel:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Hier krijg je algemene info én je Steam ID. We hebben alleen de SteamID64 nodig. Die geef je vervolgens op onder ``<admins>...</admins>``. Dat ziet er zo uit:

```
 <users>
    <user steamID="76561198021925107" name="Hint on who this user is" permission_level="0" />
  </users>
```

:::danger  Adminregel wordt niet herkend? 
Check of je de commentaartekens `<!--` en `-->` hebt verwijderd om de regel geldig te maken. Anders blijft het gewoon een comment en wordt het niet toegepast. Verwijder simpelweg de tekens aan het begin en einde van de regel om het te activeren.
:::

Het spel biedt de mogelijkheid om verschillende permissieniveaus voor admins in te stellen. Zo kun je verschillende admingroepen maken met verschillende rechten. Het niveau wordt bepaald door de ``permission_level`` optie. Die kan van 0 tot 1000 ingesteld worden. Afhankelijk van de configuratie krijgen admins toegang tot de bijbehorende rechten. Zodra dit gedaan is, zijn de adminrechten succesvol toegewezen.

## Rechten

De rechten voor alle admin-commando’s kun je instellen onder ``permissions``. Hiervoor moet je het ``permission_level`` aanpassen, net zoals bij het toevoegen van admins. Dat ziet er zo uit:

```
<permissions>
	<permission cmd="dm" permission_level="0" ></permission>
	<permission cmd="kick" permission_level="1" ></permission>
	<permission cmd="say" permission_level="1000" ></permission>
    <permission cmd="chunkcache" permission_level="1000" ></permission>
    <permission cmd="debugshot" permission_level="1000" ></permission>
    <permission cmd="debugweather" permission_level="1000" ></permission>
    <permission cmd="getgamepref" permission_level="1000" ></permission>
</permissions>
```

Een permissieniveau is een waarde tussen 0 en 1000 en bepaalt welke rechten een speler heeft. 1000 is het laagste (geen rechten) en 0 is het hoogste (volledige adminrechten). Afhankelijk van hoe je de rechten wilt instellen, pas je dit dus aan.

## Conclusie

Gefeliciteerd, je hebt de adminrechten succesvol ingesteld. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />