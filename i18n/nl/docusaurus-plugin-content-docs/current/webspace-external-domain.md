---
id: webspace-external-domain
title: "Webspace: Extern gehoste domein koppelen"
description: "Leer hoe je jouw externe domein koppelt aan ZAP-Hosting webspace voor een naadloze website- en e-mailfunctionaliteit → Ontdek het nu"
sidebar_label: Extern domein koppelen
services:
  - webspace
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Intro

Heb je al een domein geregistreerd bij een andere provider en wil je die koppelen aan je ZAP-Hosting webspace? Geen probleem! Je moet hiervoor de DNS-instellingen bij je domeinprovider aanpassen. In deze gids laten we je precies zien welke DNS-records je moet aanmaken zodat je domein correct naar je webspace verwijst.

:::info Transfer je domein
Transfer je domein naar ZAP-Hosting en geniet van makkelijker beheer. Koppel je domein met een paar klikken aan je webspace en profiteer van veel extra features. Leer hoe je je domein transferreert in onze [Domein Transfer](domain-transfer.md) gids.
:::

<InlineVoucher />



## Domein koppelen in Plesk

Voordat je je externe domein aan je webspace koppelt, moet je het domein eerst toevoegen in **Plesk**. Voeg je domein toe onder de sectie **Hosting Instellingen**. Weet je nog niet precies hoe? Check dan onze uitgebreide [Domein Toevoegen](https://zap-hosting.com/guides/docs/webspace-adddomain) handleiding.

![img](https://screensaver01.zap-hosting.com/index.php/s/Kx7KDPEk3t6Tcbd/download)



## DNS-instellingen configureren

Om je externe domein te koppelen aan je ZAP-Hosting webspace, moet je eerst de DNS-instellingen aanpassen bij de provider waar je domein geregistreerd staat. Voor een goed werkende website en e-mail moet je domein weten naar welke server bezoekers en mailverkeer gestuurd moeten worden. Dit regel je door de juiste DNS-records aan te maken.

Je hebt het IP-adres van je webspace nodig om de A-records in te stellen. Die vind je direct in je ZAP webspace dashboard.

![img](https://screensaver01.zap-hosting.com/index.php/s/DzpqenW4FwP6fbf/download)

Heb je het IP-adres? Dan kun je bij je domeinprovider de benodigde DNS-records toevoegen. Dit zijn A-records om je domein naar je webspace te laten wijzen, plus MX- en TXT-records voor e-mailafhandeling en domeinverificatie.

Wil je meer weten over de verschillende soorten DNS-records en wat ze doen? Check dan onze [Domein Records](domain-records.md) gids.

Hieronder een overzicht van alle benodigde DNS-records voor jouw setup:

| Naam                           | Type | Waarde                         | TTL  | Prio |
| ------------------------------ | ---- | ------------------------------ | ---- | ---- |
| *                              | A    | IP-adres van webspace instance | 3600 | 0    |
| mail                           | A    | IP-adres van webspace instance | 3600 | 0    |
| www                            | A    | IP-adres van webspace instance | 3600 | 0    |
| domain.tld.                    | A    | IP-adres van webspace instance | 3600 | 0    |
| domain.tld.                    | MX   | v=DKIM1;k=rsa;p=MIIBIjA......  | 3600 | 10   |
| default._domainkey.domain.tld. | TXT  | plesk-steve.zap.cloud.          | 3600 | 0    |
| domain.tld.                    | TXT  | v=spf1 a mx ~all                | 3600 | 0    |
| _dmarc.domain.tld.             | TXT  | v=DMARC1; p=none                | 3600 | 0    |

:::warning DNS-wijzigingen kosten tijd

DNS-wijzigingen kunnen tot 24 uur duren voordat ze wereldwijd volledig zijn doorgevoerd. Tijdens deze periode kan het zijn dat je domein nog niet direct naar je nieuwe webspace of e-mailservices verwijst. Heb dus even geduld terwijl alles wordt bijgewerkt.
:::




## Conclusie
Volg je deze stappen, dan staat je domein netjes gekoppeld aan je webspace. Heb je nog vragen of hulp nodig? Ons supportteam staat dagelijks voor je klaar om je te helpen! 🙂


<InlineVoucher />