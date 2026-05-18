---
id: domain-domain-vs-subdomain
title: "Domän: Domän vs Subdomän"
description: "Upptäck hur du förenklar anslutningen till din TeamSpeak 3-server med egna domäner eller subdomäner för enkel åtkomst → Lär dig mer nu"
sidebar_label: Domän vs Subdomän
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

När du sätter upp onlinetjänster som webbplatser, spelservrar eller paneler används ofta termerna **domän** och **subdomän** lite slarvigt. Även om de hänger ihop är de olika grejer och passar för olika användningsområden.

Att förstå skillnaden mellan en domän och en subdomän hjälper dig att välja rätt struktur för ditt projekt och undvika onödig konfigurationskrångel senare.



<InlineVoucher />



## Vad är en domän

En domän är den huvudsakliga, unika adressen som identifierar en tjänst eller ett projekt på internet. Den representerar den högsta nivån av namn under en toppdomän och registreras vanligtvis via en domänregistrator. Till exempel i adressen:

```
server.example.com
panel.example.com
```

I dessa fall är `server` och `panel` subdomäner till `example.com`. Subdomäner används ofta för att separera tjänster, miljöer eller applikationer samtidigt som de är logiskt kopplade till huvuddomänen.



## Viktiga skillnader mellan domän och subdomän

En domän är en fristående adress som måste registreras separat och representerar oftast projektets huvudidentitet. En subdomän däremot är beroende av en befintlig domän och kan inte existera självständigt.

Domäner är vanligtvis kopplade till primärt innehåll eller tjänster, medan subdomäner används för att organisera eller delegera specifika funktioner, som spelservrar, kontrollpaneler, API:er eller testmiljöer.

Tekniskt sett kan subdomäner konfigureras självständigt i DNS och kan peka på helt andra servrar eller tjänster än huvuddomänen.



## När ska man använda en domän

Att använda en domän rekommenderas när du vill ha en central, lätt att komma ihåg-adress för ditt projekt eller tjänst. Domäner är perfekta för huvudsajter, officiella tjänster eller när branding och enkelhet är viktigt.

En dedikerad domän är också smart när en tjänst ska vara tydligt separerad från andra eller när den är huvudingången för användarna.



## När ska man använda en subdomän

Subdomäner passar bäst när du vill organisera flera tjänster under en och samma domän. De används ofta för spelservrar, adminpaneler, webbgränssnitt, API:er eller olika miljöer som test och staging. Med subdomäner kan du hålla relaterade tjänster samlade men ändå ha tydlig separation och flexibilitet i konfigurationen.



## Slutsats

Domäner och subdomäner har olika roller men jobbar ihop för att strukturera tjänster på internet. En domän är projektets huvudidentitet, medan subdomäner låter dig utöka och organisera tjänster under den identiteten.

Genom att välja rätt strategi kan du skapa en ren, skalbar och lättskött setup som passar dina tekniska och organisatoriska behov.



<InlineVoucher />