---
id: dedicated-windows-addip
title: "Dedicated Server: Extra IP-adressen instellen op Windows"
description: "Ontdek hoe je de serverprestaties en beveiliging optimaliseert door meerdere IP-adressen effectief te gebruiken → Leer het nu"
sidebar_label: Extra IP-adressen
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Meerdere IP-adressen op een server kunnen super handig zijn, vooral in complexe netwerkomgevingen of als je specifieke eisen hebt voor netwerkprestaties, beveiliging en beheer. Door verschillende IP-adressen toe te wijzen aan verschillende services of applicaties op dezelfde server, zorg je voor betere isolatie.




## Voorbereiding

Het gebruik van meerdere IP-adressen gaat ervan uit dat jouw serverpakket ze ook bevat. Heb je standaard geen extra IP-adressen erbij geboekt? Dan moet je die eerst via een upgrade toevoegen. Daarna maak je verbinding met je server via [RDP](dedicated-windows-userdp).




## Configuratie



### Info verzamelen

Eerst heb je info nodig over de beschikbare IP-adressen. Extra IP-adressen vind je terug in het serverbeheer onder IP-adressen.

![img](https://screensaver01.zap-hosting.com/index.php/s/zAfKskX42rMSRmb/preview)





### Netwerkconfiguratie openen

Er zijn verschillende manieren om bij de netwerkconfiguratie van een Windows Server te komen. Bijvoorbeeld via het Configuratiescherm onder **Netwerkcentrum**.

Open het **Configuratiescherm**, klik op **Netwerk en internet** en daarna op **Netwerkcentrum**. Ga dan naar "Adapterinstellingen wijzigen" en dubbelklik op de netwerkadapter (Ethernet 2). Hiermee open je de netwerkadapter, waar je de eigenschappen moet openen.

In de **Eigenschappen** van de netwerkadapter selecteer je de optie **Internet Protocol versie 4 (TCP/IPv4)**. Hier zie je info over het hoofd-IP-adres, subnetmasker, standaardgateway en de DNS-servers. Klik op de knop **Geavanceerd** om extra IP-adressen toe te voegen.

![](https://screensaver01.zap-hosting.com/index.php/s/KtBawR89RASs4Jc/preview)



### IP-adres(sen) toevoegen

Nu voeg je het extra IP-adres toe via de **Geavanceerde TCP/IP-instellingen**. Klik hiervoor op de knop **Toevoegen** onder IP-adressen en vul de velden in voor **IP-adres** en **Subnetmasker**. Vul bij het IP-adres het extra IP-adres in. Het subnetmasker is 255.255.255.0.

![](https://screensaver01.zap-hosting.com/index.php/s/gsaceiYPqdiMC7x/preview)



## Afsluiting

Het IP-adres is nu succesvol ingesteld en toegevoegd. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂