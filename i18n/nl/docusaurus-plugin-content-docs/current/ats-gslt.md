---
id: ats-gslt
title: "American Truck Simulator: Maak een GSLT aan (Steam Game Server Login Token)"
description: "Ontdek hoe je je dedicated game servers beveiligt en authenticiteit garandeert met Steam’s Game Server Login Token voor betrouwbare publieke listing en bescherming → Meer info"
sidebar_label: Maak GSLT aan
services:
  - gameserver-ats
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

De **GSLT (Game Server Login Token)** is een login token die Steam/Valve vereist voor het draaien van dedicated servers voor bepaalde games. Deze is gekoppeld aan een Steam-account en zorgt ervoor dat de server correct geverifieerd wordt.

Zonder een geldige GSLT verschijnen de betreffende servers mogelijk niet in de publieke serverlijst of kunnen ze geen gebruik maken van VAC-bescherming.

<InlineVoucher />



## Vereisten

Om een Game Server Login Token (GSLT) te gebruiken, mag je Steam-account niet beperkt, gebanned of uitgesloten zijn van de community. Het moet gekoppeld zijn aan een geverifieerde smartphone en je moet het spel dat je wilt hosten bezitten. Je kunt tot 1000 tokens per account aanmaken.

Houd er rekening mee dat je volledig verantwoordelijk bent voor je tokens. Als een token misbruikt wordt of gebanned raakt, kun je permanent de toegang tot het gekoppelde spel verliezen. Deel je tokens nooit; als je dat toch hebt gedaan, verwijder ze dan direct. Wanneer je Steam-wachtwoord wordt gereset, worden alle tokens automatisch vernieuwd. Tokens die lange tijd niet gebruikt worden, verlopen, maar kunnen altijd opnieuw worden aangemaakt.



## GSLT aanmaken
Om een Game Server Login Token aan te maken, log je in met je Steam-account en ga je naar de [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers).


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Eenmaal ingelogd kun je via het formulier op de pagina een nieuwe token aanmaken. Vul bij **App ID** de App ID `270880` in, die hoort bij **American Truck Simulator**. Zorg dat je de juiste ID invult, want de token werkt niet met een verkeerde waarde.

Bij **Memo** kun je een omschrijving toevoegen die jou helpt later te herkennen waarvoor de token bedoeld is, bijvoorbeeld de naam of functie van de server. Nadat je beide velden hebt ingevuld, klik je op **Create** om de token te genereren. De token wordt dan getoond en kan gebruikt worden in de opstartconfiguratie van je server.

![img](https://screensaver01.zap-hosting.com/index.php/s/LzDP5Gg9ntLJbTt/download)

## Serverconfiguratie

De login token moet nu toegevoegd worden aan je serverconfiguratie. Open hiervoor de beheerinterface van je game server en ga naar het onderdeel **Instellingen**. Vul de token in bij het veld **GSL Token** en sla de wijzigingen op.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Meerdere American Truck Simulator servers draaien
Als je meerdere **American Truck Simulator** servers runt, heb je voor elke server een aparte GSLT nodig. Het is <u>**niet**</u> mogelijk om meerdere game servers te draaien met één enkele GSLT.
:::



## Conclusie

De GSLT is aangemaakt en toegepast in je serverconfiguratie. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />