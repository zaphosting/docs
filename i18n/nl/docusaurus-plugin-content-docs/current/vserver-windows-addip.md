---
id: vserver-windows-addip
title: "VPS: Extra IP-adressen instellen op Windows"
description: "Ontdek hoe je serverprestaties en veiligheid optimaliseert door meerdere IP-adressen te gebruiken voor betere service-isolatie → Leer het nu"
sidebar_label: Extra IP-adressen
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Meerdere IP-adressen op een server kunnen super handig zijn, vooral in complexe netwerkomgevingen of als je specifieke eisen hebt voor netwerkprestaties, veiligheid en beheer. Door verschillende IP-adressen toe te wijzen aan verschillende services of apps op dezelfde server, zorg je voor betere isolatie.

<InlineVoucher />


## Voorbereiding

Meerdere IP-adressen gebruiken betekent dat je serverpakket ze ook moet bevatten. Als je standaard geen extra IP-adressen hebt geboekt, moet je die eerst via een upgrade toevoegen. Daarna maak je verbinding met je server via [RDP](vserver-windows-userdp).




## Configuratie



### Info verzamelen

Eerst heb je info nodig over de beschikbare IP-adressen. Extra IP-adressen vind je terug in het serverbeheer onder IP-adressen.

![](https://screensaver01.zap-hosting.com/index.php/s/ER3d6R7T28mNSKp/preview)





### Netwerkconfiguratie openen

Er zijn verschillende manieren om bij de netwerkconfiguratie van een Windows Server te komen. Bijvoorbeeld via het Configuratiescherm onder **Netwerkcentrum**.

Open het **Configuratiescherm**, klik op **Netwerk en internet** en daarna op **Netwerkcentrum**. Ga dan naar "Adapterinstellingen wijzigen" en dubbelklik op de netwerkadapter (Ethernet 2). Dit opent de netwerkadapter, waar je de eigenschappen moet openen.

In de **Eigenschappen** van de netwerkadapter selecteer je nu **Internet Protocol versie 4 (TCP/IPv4)**. Hier zie je info over het hoofd-IP-adres, subnetmasker, standaardgateway en DNS-servers. Klik op de knop **Geavanceerd** om extra IP-adressen toe te voegen.

![](https://screensaver01.zap-hosting.com/index.php/s/KtBawR89RASs4Jc/preview)



### IP-adres(sen) toevoegen

Voeg nu het extra IP-adres toe via de **Geavanceerde TCP/IP-instellingen**. Klik op de knop **Toevoegen** onder IP-adressen en vul de velden in voor **IP-adres** en **Subnetmasker**. Vul bij IP-adres het extra IP-adres in. Het subnetmasker is 255.255.255.0.

![](https://screensaver01.zap-hosting.com/index.php/s/gsaceiYPqdiMC7x/preview)



## Afsluiting

Het IP-adres is nu succesvol ingesteld en toegevoegd. Je kunt de status van de IP-adressen checken in het serverbeheer onder **IP-adressen**. Daar zou het nieuw toegevoegde IP-adres als bereikbaar moeten staan.

![](https://screensaver01.zap-hosting.com/index.php/s/xBZGM72WX4nqXS6/preview)

<InlineVoucher />