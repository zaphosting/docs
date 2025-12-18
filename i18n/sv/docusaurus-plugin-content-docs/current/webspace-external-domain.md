---
id: webspace-external-domain
title: "Webspace: Koppla extern hostad domän"
description: "Lär dig hur du kopplar din externa domän till ZAP-Hostings webspace för smidig hemsida och e-post → Läs mer nu"
sidebar_label: Koppla extern domän
services:
  - webspace
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

Har du redan en domän registrerad hos en annan leverantör och vill koppla den till din ZAP-Hosting webspace-produkt? Inga problem! För att göra detta behöver du justera DNS-inställningarna hos din domänleverantör. I den här guiden visar vi exakt vilka DNS-poster du behöver skapa för att din domän ska peka rätt till ditt webspace.

:::info Flytta din domän
Flytta din domän till ZAP-Hosting och njut av enklare hantering. Koppla din domän till ditt webspace med bara några klick och dra nytta av många extra funktioner. Lär dig hur du flyttar din domän i vår [Domänflytt](domain-transfer.md)-guide.
:::

<InlineVoucher />



## Koppla domän i Plesk

Innan du kan koppla din externa domän till ditt webspace måste du först lägga till domänen i **Plesk**. Gör detta genom att lägga till din domän under avsnittet **Hostinginställningar**. Om du är osäker på hur du gör detta kan du hitta detaljerade instruktioner i vår [Lägg till domän](https://zap-hosting.com/guides/docs/webspace-adddomain)-guide.

![img](https://screensaver01.zap-hosting.com/index.php/s/Kx7KDPEk3t6Tcbd/download)



## Konfigurera DNS-inställningarna

För att koppla din externa domän till ditt ZAP-Hosting webspace måste du först justera DNS-inställningarna hos den leverantör där din domän är registrerad. För att din hemsida och e-post ska fungera korrekt måste din domän veta vilken server den ska skicka besökare och mailtrafik till. Detta görs genom att skapa de nödvändiga DNS-posterna.

Du behöver IP-adressen till din webspace-instans för att ställa in A-posterna. Den hittar du direkt i din ZAP webspace-panel.

![img](https://screensaver01.zap-hosting.com/index.php/s/DzpqenW4FwP6fbf/download)

När du har IP-adressen kan du lägga till de nödvändiga DNS-posterna hos din domänleverantör. Det inkluderar A-poster för att peka din domän till ditt webspace, samt MX och TXT-poster för att hantera e-postleverans och domänverifiering.

För mer detaljerad info om hur de olika typerna av DNS-poster fungerar och vad de används till rekommenderar vi att du kollar in vår [Domänposter](domain-records.md)-guide.

Nedan är en tabell med alla nödvändiga DNS-poster för din setup:

| Namn                           | Typ  | Värde                          | TTL  | Prio |
| ------------------------------ | ---- | ------------------------------ | ---- | ---- |
| *                              | A    | IP-adress till webspace-instans | 3600 | 0    |
| mail                           | A    | IP-adress till webspace-instans | 3600 | 0    |
| www                            | A    | IP-adress till webspace-instans | 3600 | 0    |
| domain.tld.                    | A    | IP-adress till webspace-instans | 3600 | 0    |
| domain.tld.                    | MX   | v=DKIM1;k=rsa;p=MIIBIjA......   | 3600 | 10   |
| default._domainkey.domain.tld. | TXT  | plesk-steve.zap.cloud.          | 3600 | 0    |
| domain.tld.                    | TXT  | v=spf1 a mx ~all                | 3600 | 0    |
| _dmarc.domain.tld.             | TXT  | v=DMARC1; p=none                | 3600 | 0    |

:::warning DNS-ändringar kan ta tid

Ändringar i dina DNS-inställningar kan ta upp till 24 timmar att spridas globalt. Under denna tid kan din domän kanske inte peka direkt till ditt nya webspace eller e-posttjänster, så ha tålamod medan ändringarna slår igenom.
:::




## Slutsats
Genom att följa dessa steg konfigurerar och kopplar du din domän till ditt webspace. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂


<InlineVoucher />