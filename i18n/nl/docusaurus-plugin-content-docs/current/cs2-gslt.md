---
id: cs2-gslt
title: "Counter-Strike 2: Maak een GSLT aan (Steam Game Server Login Token)"
description: "Ontdek hoe je je dedicated game server authenticiteit en beveiliging geeft met een Steam Game Server Login Token voor optimale serverzichtbaarheid en bescherming → Meer weten"
sidebar_label: Maak GSLT aan
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

De **GSLT (Game Server Login Token)** is een login-token die Steam/Valve vereist voor het draaien van dedicated servers voor bepaalde games. Het is gekoppeld aan een Steam-account en zorgt ervoor dat de server correct geverifieerd wordt.

Zonder een geldige GSLT verschijnen de betreffende servers mogelijk niet in de publieke serverlijst of kunnen ze geen gebruik maken van VAC-bescherming.

<InlineVoucher />



## Vereisten

Om een Game Server Login Token (GSLT) te gebruiken, mag je Steam-account niet beperkt, geblokkeerd of uitgesloten zijn van de community. Het moet gekoppeld zijn aan een geverifieerde smartphone en je moet het spel dat je wilt hosten bezitten. Je kunt tot 1000 tokens per account aanmaken.

Houd er rekening mee dat je volledig verantwoordelijk bent voor je tokens. Als een token wordt misbruikt of geblokkeerd, kun je permanent de toegang tot het gekoppelde spel verliezen. Deel je tokens nooit; als je dat toch hebt gedaan, verwijder ze dan direct. Wanneer je Steam-wachtwoord wordt gereset, worden alle tokens automatisch vernieuwd. Tokens die lange tijd niet gebruikt worden, verlopen, maar kunnen altijd opnieuw worden aangemaakt.



## GSLT aanmaken
Om een Game Server Login Token aan te maken, log je in met je Steam-account en ga je naar de [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers).


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Eenmaal ingelogd kun je een nieuwe token aanmaken via het formulier op de pagina. Vul bij **App ID** de App ID `730` in, die hoort bij **Counter-Strike 2**. Zorg dat je de juiste ID invult, want de token werkt niet met een verkeerde waarde.

Bij **Memo** kun je een beschrijving toevoegen die jij handig vindt. Zo herken je later het doel van de token, bijvoorbeeld de naam of functie van de server. Nadat je beide velden hebt ingevuld, klik je op **Create** om de token te genereren. De token wordt daarna getoond en kan gebruikt worden in de opstartconfiguratie van je server.

![img](https://screensaver01.zap-hosting.com/index.php/s/rXyykRZKBYe95qY/download)

## Serverconfiguratie

De login-token moet nu toegevoegd worden aan je serverconfiguratie. Open hiervoor de beheerinterface van je game server en ga naar het onderdeel **Instellingen**. Vul de token in bij het veld **GSL Token** en sla de wijzigingen op.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Meerdere Counter-Strike 2 servers draaien
Als je meerdere **Counter-Strike 2** servers runt, heb je voor elke server een aparte GSLT nodig. Het is <u>**niet**</u> mogelijk om meerdere game servers te draaien met één enkele GSLT.
:::



## Conclusie

De GSLT is aangemaakt en toegevoegd aan je serverconfiguratie. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />