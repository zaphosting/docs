---
id: dedicated-ipmi
title: "Dedicated Server: Serverbeheer via IPMI"
description: "Ontdek hoe je jouw Enterprise Dedicated Server volledig beheert met IPMI voor naadloze controle en monitoring → Leer nu meer"
sidebar_label: IPMI
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Onze AMD Ryzen Dedicated Servers worden beheerd via **Supermicro IPMI**, een krachtige en bewezen out-of-band managementoplossing ontworpen voor professionele serveromgevingen. In tegenstelling tot onze Intel-gebaseerde configuraties, die gebruikmaken van HPE iLO, gebruikt het AMD Ryzen platform Supermicro hardware en biedt daarom IPMI als native beheerinterface.

Supermicro IPMI biedt volledige remote controle over je server, onafhankelijk van de status van het besturingssysteem. Je kunt het systeem aan- of uitzetten, herstarten, de hardwarestatus monitoren, sensoren bekijken en via de remote console direct op de server werken alsof je fysiek ter plaatse bent. Dit zorgt voor maximale controle, snelle reactietijden en betrouwbare administratie, zelfs in kritieke situaties.


## IPMI toegang
Open het serverdashboard van je ZAP Dedicated Server met een browser naar keuze. Daar vind je al de belangrijkste informatie over je IPMI.
Om IPMI te activeren klik je simpelweg op **IPMI activeren**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dXjjzc65gCDsDdx/preview)

Houd er rekening mee dat het een paar seconden kan duren voordat je IPMI volledig beschikbaar is. 
Wanneer het systeem de beheerinterface heeft gestart en deze toegankelijk is, zie je de inloggegevens.
Klik op het weergegeven IP-adres om IPMI te openen en log in met de inloggegevens.



## Overzicht

Benieuwd hoe de IPMI beheerinterface is opgebouwd en waar elk onderdeel voor dient? Dit overzicht introduceert de verschillende pagina’s van de interface en laat zien hoe monitoring, hardware-inzichten en remote beheer zijn georganiseerd.

Het biedt een handige startpunt om de IPMI-omgeving te verkennen en te begrijpen hoe de verschillende views samenwerken om volledige controle en inzicht over de server te geven.

### Dashboard

Geeft een samenvattend overzicht van de huidige serverstatus en belangrijke beheerfuncties. Systeeminformatie zoals hardwaremodel, BIOS-versie, BMC-firmware en operationele status wordt getoond voor snelle referentie.

Het power-gedeelte toont de huidige stroomstatus en het stroomverbruik, waardoor je direct de server aan, uit of opnieuw kunt opstarten en inzicht krijgt in het energieverbruik.

Directe toegang tot de remote console is beschikbaar vanaf deze pagina, waarmee je volledige remote keyboard-, video- en muiscontrole hebt voor taken zoals OS-installatie, troubleshooting en onderhoud, onafhankelijk van de serverstatus.

![img](https://screensaver01.zap-hosting.com/index.php/s/MK8wE2HBmKSkafM/preview)

### Systeem

#### Component Info

Toont een gedetailleerd overzicht van de geïnstalleerde hardwarecomponenten en hun huidige status. Informatie wordt gegeven over CPU, geheugenmodules, voedingen, stroomvoorziening, netwerk AOC, sensoren en koeling.

Elke sectie presenteert hardware-specifieke details zoals modelinformatie, configuratie en operationele status. Statusindicatoren maken snel duidelijk welke componenten gezond zijn en waar waarschuwingen of fouten zijn.

![img](https://screensaver01.zap-hosting.com/index.php/s/SwNfo9DkCsLSZ7n/preview)

#### Health Event Log

Lijst systeemgerelateerde gebeurtenissen die door de managementcontroller zijn geregistreerd, met een chronologische geschiedenis van hardware- en gezondheidsgerelateerde activiteiten. Items omvatten stroomgebeurtenissen, bootprocessen, sensor-drempeloverschrijdingen, temperatuurwaarschuwingen, spanningsafwijkingen en hardwarefouten.

![img](https://screensaver01.zap-hosting.com/index.php/s/GfKiZZRno6AY3Se/preview)

#### Storage Monitoring

Geeft een overzicht van de aangesloten opslagapparaten en hun huidige status. Informatie omvat gedetecteerde schijven, type interface, capaciteit en gezondheidsindicatoren zoals gerapporteerd door de controller en beschikbare sensoren.

![img](https://screensaver01.zap-hosting.com/index.php/s/wr5JCqGj7bmqizs/preview)



### Configuratie

#### Account Services

Toont een lijst van bestaande gebruikersaccounts met hun toegewezen rollen en permissieniveaus. Deze pagina is bedoeld voor informatieve doeleinden, zodat je kunt zien welke accounts toegang hebben tot de beheerinterface.

![img](https://screensaver01.zap-hosting.com/index.php/s/zic5k7yftMjBFD7/preview)

#### Notificaties

Toont de huidige configuratie voor systeemmeldingen en alarmafhandeling. Deze sectie laat zien welke gebeurtenistypen notificaties kunnen triggeren, zoals hardwarefouten, temperatuurgrenzen, stroomproblemen of sensorwaarschuwingen.

![img](https://screensaver01.zap-hosting.com/index.php/s/X46mcTArtEda3ef/preview)

#### Netwerk

Toont de netwerkconfiguratie van de beheerinterface. Dit omvat het toegewezen IP-adres, subnetmasker, gateway, MAC-adres en de huidige linkstatus van de IPMI-netwerkpoort.

![img](https://screensaver01.zap-hosting.com/index.php/s/jHfKc9fxJXEzNJs/preview)

#### Virtual Media

Maakt het gebruik van remote media images via de beheerinterface mogelijk. Hier zie je de status van aangekoppelde virtuele media zoals ISO-images of remote opslagapparaten verbonden met de server.

Virtuele media kunnen worden gebruikt om het systeem te booten, een besturingssysteem te installeren of herstel- en onderhoudstaken uit te voeren zonder fysieke toegang tot de hardware.

![img](https://screensaver01.zap-hosting.com/index.php/s/bXYMP8xne8CyRLW/preview)

#### BMC-instellingen

Toont configuratiedetails van de Baseboard Management Controller. Deze sectie geeft informatie over firmwareversie, systeemidentificatiegegevens en algemeen controllergedrag.

![img](https://screensaver01.zap-hosting.com/index.php/s/9FcXmeyfiSQWJwx/preview)

### Remote Control

Biedt toegang tot functies voor directe remote interactie met de server. Deze sectie bevat stroombeheeropties zoals aanzetten, uitzetten, resetten en netjes afsluiten.

Het dient ook als toegangspunt tot remote beheerfuncties die interactie met het systeem mogelijk maken, ongeacht de status van het besturingssysteem.

![img](https://screensaver01.zap-hosting.com/index.php/s/JWKfcCkAQSMHxFq/preview)


### Onderhoud

#### Firmwarebeheer

Geeft inzicht in het firmwareniveau van de beheeromgeving, inclusief de actieve BMC-firmware en gerelateerde componenten. Firmwareversies en hun huidige status kunnen worden bekeken om de consistentie van de beheerstack te bevestigen. Updates of wijzigingen zijn bewust niet beschikbaar voor klanten.

![img](https://screensaver01.zap-hosting.com/index.php/s/DA2HJAK8twGqYYK/preview)



#### Onderhoudslogboek

Registreert onderhoudsgerelateerde activiteiten en systeemacties uitgevoerd via de beheerinterface. Gelogde items omvatten configuratiewijzigingen, firmwarebewerkingen, resets en administratieve acties.

![img](https://screensaver01.zap-hosting.com/index.php/s/FqC3EdagiiS5zAG/preview)



## Veelvoorkomende problemen, tips & tricks

- **De server start niet op of blijft hangen tijdens POST:**
   Als de server het opstartproces niet voltooit of lijkt te blijven hangen tijdens POST, open dan de remote console om te zien bij welk punt het proces stopt. Hardware-initialisatieberichten of foutmeldingen kunnen daar zichtbaar zijn.
   Voer een power cycle uit via de stroombeheeropties door de server een paar seconden geforceerd uit te schakelen en daarna opnieuw op te starten. Als het systeem nog steeds niet opstart, neem contact op met support.

- **Remote Console opent niet of blijft zwart:**
   Controleer of de remote console sessie niet al in gebruik is door een andere verbinding. Sluit eventuele bestaande sessies en probeer opnieuw.
   Soms helpt het om de browser te verversen of de console opnieuw te openen om laadproblemen op te lossen. Als het probleem blijft, controleer dan of de server aan staat en bereikbaar is.

- **Virtual Media ISO wordt niet herkend:**
   Controleer of de ISO-bron bereikbaar is en dat het bestand direct toegankelijk is, bijvoorbeeld door de link in een browser te openen.
   Bevestig dat de virtuele media correct is aangekoppeld en herstart de server nadat je de ISO hebt toegevoegd. Controleer ook de opstartvolgorde om zeker te zijn dat virtuele CD/DVD-media prioriteit heeft.

- **De server doet lang over het opstarten:**
   Lange opstarttijden zijn normaal voor enterprise-grade hardware. Hardware-initialisatie, controllerchecks en geheugen-training kunnen enkele minuten duren, vooral na een volledige power cycle.

- **IPMI-interface is tijdelijk niet bereikbaar:**
   Na configuratiewijzigingen of langere inactiviteit kan de beheerinterface tijdelijk onbereikbaar zijn. Wacht een paar minuten en probeer het opnieuw.
   Als de toegang niet terugkomt, neem dan contact op met support om de status van de beheerinterface te controleren.



## Conclusie

Dit maakt je beheer een stuk makkelijker zodra je alles goed hebt doorgenomen. Voor verdere vragen of hulp, aarzel niet om contact op te nemen met onze support, die dagelijks voor je klaarstaat! 🙂