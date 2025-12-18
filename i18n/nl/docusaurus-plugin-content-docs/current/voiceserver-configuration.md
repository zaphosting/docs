---
id: voiceserver-configuration
title: "Voiceserver: Configuratie"
description: "Ontdek hoe je je Teamspeak-serverinstellingen kunt aanpassen voor een persoonlijke ervaring en geoptimaliseerd gebruikersbeheer → Leer nu meer"
sidebar_label: Serverconfiguratie
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

De Teamspeak-server kan helemaal naar wens worden ingesteld. Hieronder leggen we uit hoe je jouw server kunt configureren. We behandelen hoe je algemene instellingen zoals de servernaam, icoon, banner, gebruikersrechten, kanaal- en servergroeprechten kunt aanpassen.

<InlineVoucher />

## Algemeen

**Webinterface**

Wil je de algemene configuratie van je server via de webinterface doen? Dan vind je de opties in de Teamspeak Server Administratie onder Instellingen. De instellingenpagina ziet er zo uit:

![](https://screensaver01.zap-hosting.com/index.php/s/fLYXn5sx38BBC92/preview)


**Teamspeak Client**

Wil je de algemene configuratie van je server direct via de Teamspeak-client doen? Klik dan met de rechtermuisknop op het bovenste kanaal **TeamSpeak ]I[ Server** en klik vervolgens op **Virtuele server bewerken**.

![](https://screensaver01.zap-hosting.com/index.php/s/epQ2qzRiex9BmpE/preview)



Omdat de instellingen in de webinterface zo begrijpelijk mogelijk moeten zijn en niet alles daar aangepast kan worden, richt deze gids zich op het configureren van de Teamspeak-server via de Teamspeak-client.



### Naam

In het veld **Servernaam** kun je de naam van je Teamspeak-server bepalen. Deze naam wordt vervolgens weergegeven in de serverlijst, op de website en overal waar de servernaam getoond wordt.



### Banner

Heb je de optie eigen banner geboekt? Dan kun je je eigen banner toevoegen in het veld **Banner Gfx URL**. Het is belangrijk dat je de directe link naar de afbeelding opgeeft, anders wordt de banner niet herkend. In het veld **URL** kun je instellen waar de banner naartoe moet linken als iemand erop klikt.

:::info
Als er geen eigen banner is geboekt, wordt de banner automatisch vervangen door de standaard ZAP-banner.
:::



### Slots (gereserveerde slots)

De slots worden door ons ingesteld en kunnen niet worden aangepast. Je kunt echter wel gereserveerde slots instellen. Dit betekent dat deze gereserveerd zijn voor het geval de Teamspeak-server vol is. Gebruikers met de juiste rechten kunnen dan alsnog verbinding maken met de Teamspeak-server.



### Welkomstbericht

Hiermee kun je een welkomstbericht toevoegen naar keuze. Dit bericht wordt getoond zodra je verbinding maakt. Dit kan er bijvoorbeeld zo uitzien:

![](https://screensaver01.zap-hosting.com/index.php/s/AWFcf4HHJ7jesdc/preview)


### Beveiligingsniveau

Het vereiste beveiligingsniveau bepaalt hoe lang gebruikers nodig hebben om het beveiligingsniveau van hun identiteit te verhogen totdat die identiteit als veilig genoeg wordt beschouwd. Dit vermindert in principe de kans op spam en misbruik. Hoe hoger het beveiligingsniveau, hoe langer het duurt. Hier een overzicht van de duur:

- Niveau 0-23 - binnen enkele seconden gegenereerd
- Niveau 23-29 - binnen enkele minuten gegenereerd
- Niveau 29-34 - binnen enkele uren gegenereerd
- Niveau 35-39 - binnen enkele dagen gegenereerd
- Niveau 40-43 - binnen enkele maanden gegenereerd
- Niveau 44+ - binnen jaren gegenereerd



### Gebruikers beheren (kick, ban, banlijst, klachtenlijst)

Je kunt een kick of ban uitvoeren door met de rechtermuisknop op de gebruiker te klikken. Bij een ban worden de identiteit en het IP-adres opgeslagen in de banlijst. Die vind je onder **navigatiebalk -> extras**. Daar kun je bestaande bans ook verwijderen.

Ook vind je daar de klachtenlijst. Dit is een functie van Teamspeak waarmee gebruikers klachten kunnen indienen over andere gebruikers, de server zelf, etc. als er geen admin op de Teamspeak-server aanwezig is.



## Personaliseer

Je kunt meer kanalen en servergroepen aanmaken op je Teamspeak-server om deze verder te personaliseren. Hieronder laten we precies zien hoe je dat doet.


### Kanaal

Om meer kanalen aan te maken, klik je met de **rechtermuisknop** onder de bestaande kanalen en klik je op **Kanaal aanmaken**. Er opent een pop-upvenster. Daar kun je het kanaal configureren met opties zoals: Kanaalnaam, Wachtwoord, Icoon, Beschrijving, Kanaaltype en meer.



![](https://screensaver01.zap-hosting.com/index.php/s/Bkx2q69a5ceNiyD/preview)


### Servergroepen

Om extra servergroepen aan te maken, klik je in de **navigatiebalk** op **rechten** en ga je vervolgens naar **servergroepen**. Daar vind je een overzicht van de bestaande servergroepen, hun rechten en de toegewezen gebruikers. Onderaan de lijst met servergroepen klik je op het **plus-symbool** om een nieuwe groep aan te maken.



![](https://screensaver01.zap-hosting.com/index.php/s/QqcaaRse6kLNwPQ/preview)


## Rechten

Nu zou het duidelijk moeten zijn hoe je de algemene instellingen van de Teamspeak-server aanpast en hoe je je Teamspeak-server personaliseert door extra kanalen en servergroepen aan te maken. Hieronder behandelen we hoe je de rechten kunt aanpassen.



### Rechten: Gebruiker

De rechten van gebruikers hangen af van de toegewezen servergroepen. Standaard krijgt een gebruiker de groep **Normaal** toegewezen. Wil je meer rechten aan een gebruiker geven? Klik dan met de rechtermuisknop op de gebruiker, klik op Servergroepen en wijs de gewenste groep toe.

![](https://screensaver01.zap-hosting.com/index.php/s/sXG3qFXXJXc6Kjr/preview)

### Rechten: Kanaal

Voor elk kanaal kunnen rechten worden ingesteld. Bijvoorbeeld welke gebruikers het kanaal kunnen **betreden, abonneren, beschrijven, bekijken, wijzigen, verwijderen** en toegang hebben tot de **File Browser van het kanaal**.


![](https://screensaver01.zap-hosting.com/index.php/s/9sCRd7NgMNHy9Do/preview)



De waarde van elk veld hangt af van de servergroep. Stel dat je een extra servergroep aanmaakt genaamd **Lid** en alleen die groep toegang moet hebben tot het kanaal, dan moet de waarde overeenkomen met die van de servergroep. Heeft de servergroep bijvoorbeeld een permissiewaarde van 50, dan moet in de individuele velden **50** worden ingevuld.



### Rechten: Servergroepen

Voor servergroeprechten zijn er verschillende categorieën die je kunt aanpassen. Dit zijn onder andere:

- Algemene opties
- Groepen beheren
- Gebruikers toevoegen/verwijderen, permissiesleutels beheren
- Gebruikers beheren (verplaatsen, kick, ban)
- Kanalen beheren
- Basisinstellingen


![](https://screensaver01.zap-hosting.com/index.php/s/RxcYJCsar7C3KnM/preview)



Je kunt deze rechten naar wens aanpassen. Wil je uitgebreidere wijzigingen aan de rechten maken? Ga dan in je Teamspeak-client naar de opties, vervolgens naar Applicatie en activeer het **Geavanceerde rechten-systeem**.


<InlineVoucher />