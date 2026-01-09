---
id: domain-teamspeak-redirect
title: "Domein: TeamSpeak 3 doorverwijzing instellen"
description: "Ontdek hoe je het verbinden met je TeamSpeak 3-server makkelijker maakt met custom domeinen of subdomeinen voor snelle toegang → Leer het nu"
sidebar_label: TeamSpeak 3 doorverwijzing
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
Houd er rekening mee dat het altijd tot 24 uur kan duren voordat wijzigingen in DNS-instellingen actief worden!
:::

## Introductie

Je kunt je hele domein of alleen een subdomein doorverwijzen naar je TeamSpeak 3-server.
Zo hoeft niemand het ingewikkelde IP-adres met cijfers te onthouden en kan iedereen simpelweg verbinden via het domein.

:::note
Standaard krijgen **nieuwe** TeamSpeak 3-servers nu een `.zap.cloud` alias met een willekeurige prefix die je kunt gebruiken om te verbinden.
:::

<InlineVoucher />

## TSDNS snelle setup gebruiken

We hebben een nieuw TSDNS-systeem voor onze TeamSpeak 3-servers geïmplementeerd, waarmee je in een paar klikken een subdomein voor je TeamSpeak 3-server kunt instellen! Heb je geen domein bij ons? Ga dan door naar de volgende sectie om handmatig DNS-records in te stellen.

Ga simpelweg naar **Instellingen->TSDNS** in de webinterface van je TeamSpeak op onze website. Hier kun je een subdomein kiezen (prefix voor het domein) en kiezen tussen ons `zap-ts3.com` domein of een van je eigen domeinen die je bij ons op je ZAP-Hosting account hebt.

:::info
Voor deze snelle setup moet je [een perfect domein direct bij ons kopen](https://zap-hosting.com/en/shop/product/domain/) of je eigen domein naar je ZAP-Hosting account verhuizen. Deze domeinen verschijnen in de TSDNS-sectie zodra ze zijn ingesteld. Je kunt ook gratis het standaard `zap-ts3.com` domein gebruiken.
:::

In ons voorbeeld zie je hoe we een nieuw subdomein aanmaken met het `.zap.cloud` domein, dat ons naar onze TeamSpeak 3-server leidt wanneer gebruikt.

![](https://screensaver01.zap-hosting.com/index.php/s/Mi3wK7cY639Rp3x/preview)

:::note
Houd er rekening mee dat het tot 3 uur kan duren voordat het domein is gepropageerd en werkt.
:::

## Reguliere DNS setup

Om het IP-adres door te verwijzen, maak je een subdomein aan dat doorverwijst naar het IP-adres van de TeamSpeak 3-server, of je verwijst het hele domein door zonder subdomein.
Dit is voldoende als de TeamSpeak 3-server de standaardpoort **9987** gebruikt.
Als de TeamSpeak 3-server echter een andere poort gebruikt dan de standaardpoort, moet er een extra **SRV-record** worden toegevoegd om het domein of subdomein naar de juiste poort door te verwijzen.

### SRV Service

De servicenaam begint altijd met een **underscore**.
Voor een TeamSpeak 3-server is de servicenaam altijd **_ts3**, zonder uitzondering.

### SRV Protocol

Als protocol geef je het internetprotocol op dat voor de verbinding wordt gebruikt. Hier zijn **UDP** en **TCP** beschikbaar.
De protocolnaam begint ook altijd met een **underscore** en is ofwel **_udp** of **_tcp**.
Voor een TeamSpeak 3-server wordt altijd **_udp** gebruikt, zonder uitzondering.

## Domein doorverwijzen zonder subdomein

Om je domein door te verwijzen naar een game server zonder een subdomein aan te maken, open je eerst je domein op het dashboard en ga je naar DNS-beheer in het menu aan de linkerkant.

![](https://puu.sh/Fuzfa/0927cbb177.png)

![](https://puu.sh/FuzhO/6f4694ab62.png)

Daar zie je alle bestaande DNS-records voor je domein.
Als je nog geen eigen records hebt aangemaakt, kun je alle bestaande records bekijken door te klikken op 
de rode prullenbak aan de rechterkant.

![](https://puu.sh/Fuzm8/39f3c72fa6.png)

Klik daarna op **Nieuw record** en je komt in het scherm om een nieuw DNS-record aan te maken.
Als **Naam** kies je hier de domeinnaam, bijvoorbeeld **teamspeak-server.de**, het **type is A** en de **waarde** is het
IP van je TeamSpeak 3-server, in dit geval **88.214.57.116**.
Het **TTL** veld kun je ongemoeid laten.

![](https://screensaver01.zap-hosting.com/index.php/s/cTGTdBFrigs7HDG/preview)

Als je alles hebt ingevuld, klik je op **Opslaan**, het record wordt opgeslagen in de DNS-instellingen en zal binnen
24 uur zichtbaar zijn.

:::info
Het kan altijd tot 24 uur duren voordat nieuwe DNS-records actief worden. Hier heeft helaas niemand invloed op.
:::

## Domein doorverwijzen met subdomein

Wil je een subdomein aanmaken, bijvoorbeeld ts.teamspeak-server.de, dan doe je dat zoals in het vorige voorbeeld,
maar bij **Naam** vul je niet de domeinnaam in, maar het subdomein.
Dat ziet er zo uit:

![](https://screensaver01.zap-hosting.com/index.php/s/ocaqgX2DSdspGQ8/preview)

## Domein doorverwijzen met poort (SRV)

Als de standaardpoort **9987** niet wordt gebruikt, moet er een extra **SRV-record** worden aangemaakt om het domein niet alleen naar het IP van de game server te verwijzen, maar ook naar de juiste poort.

Je maakt eerst een **subdomein** aan zoals hierboven beschreven, of je verwijst het domein direct door naar de TeamSpeak 3-server, beide kan.

### Doorverwijzen zonder subdomein

Nadat je je domein hebt doorgestuurd naar het IP-adres van je TeamSpeak 3-server zoals hierboven beschreven, klik je op **Nieuw record**.
Maak een record aan dat er zo uitziet:

![](https://screensaver01.zap-hosting.com/index.php/s/H3NGmYZHyJsCYnf/preview)

Het veld **Naam** bevat de servicenaam, in dit geval onze TeamSpeak 3-server, dus **_ts3**. Ook het protocoltype, hier **_udp**, en de **domeinnaam**.
Het veld **Type** geeft aan wat voor record het is, hier een **SRV** record.
Het veld **waarde** bevat de gamepoort en het domein, in dit geval **0 1234 teamspeak-server.de**, waarbij **1234** de **poort van de game** is en **teamspeak-server.de** het domein waarnaar wordt doorgestuurd.
De waarde **0** is niet relevant en blijft altijd hetzelfde. De velden **TTL** en **Prio** worden ook niet aangepast.

Klik daarna op **Opslaan**.

:::info
Let erop dat er een **punt** achter het domein in het **waarde** veld staat!
:::

### Doorverwijzen met subdomein

Met een subdomein werkt het bijna hetzelfde. Maak eerst een subdomein aan zoals hierboven beschreven en verwijs deze naar het IP-adres van je TeamSpeak 3-server. Klik dan op **Nieuw record** en maak een record aan met de volgende inhoud:

![](https://screensaver01.zap-hosting.com/index.php/s/aEkro3z9WBgWf8g/preview)

Het veld **Naam** bevat de servicenaam, hier onze TeamSpeak 3-server, dus **_ts3**. Ook het protocoltype, hier **_udp**, en de **domeinnaam** met het **subdomein**, dus **ts.teamspeak-server.de**.
Het veld **Type** geeft aan wat voor record het is, hier een **SRV** record.
Het veld **waarde** bevat de poort en het domein met subdomein, in dit geval **0 1234 ts.teamspeak-server.de**, waarbij **1234** de **poort van de TeamSpeak 3-server** is en **ts.teamspeak-server.de** het domein met subdomein waarnaar wordt doorgestuurd.
De waarde **0** is niet relevant en blijft altijd hetzelfde. De velden **TTL** en **Prio** worden ook niet aangepast.

<InlineVoucher />