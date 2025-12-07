---
id: voiceserver-query
title: "Voiceserver: Access TeamSpeak Query"
description: "Upptäck hur du kan hantera din TeamSpeak-server externt med Query Login för effektiv serverkontroll och administration → Lär dig mer nu"
sidebar_label: Query Login
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Query-login för TeamSpeak ger dig tillgång till server query-gränssnittet, där du kan hantera din TeamSpeak-server externt via kommandon.

:::warning Server Admin Query Access
Våra Teamspeak Server-produkter inkluderar inte Server Admin Query-access. 
:::

<InlineVoucher />

## Inloggningsuppgifter

<Tabs>
<TabItem value="Webinterface" label="TeamSpeak Server Produkt" default>

Av säkerhetsskäl är **Server Admin Query**-inloggningen inte tillgänglig med **TeamSpeak serverprodukten**. Men om du har adminrättigheter på din Teamspeak-server kan du skapa din egen Query Login med följande steg.

:::info
Funktioner som import snapshot, ändra slots/ports och liknande är inte tillgängliga. Dessa inställningar är förinställda av oss och kan inte justeras manuellt. 
:::

För att skapa din egen Query Login klickar du på "Server Query Login" i Teamspeak-klienten under Verktyg.
Därefter anger du ett namn för inloggningen, detta blir även inloggningsnamnet t.ex. "MyQueryLogin":

![](https://screensaver01.zap-hosting.com/index.php/s/gMeQtSTkrtRzbk7/preview)

När detta bekräftats med "OK" visas ett lösenord. Detta måste sparas, det går inte att ändra senare. 

![](https://screensaver01.zap-hosting.com/index.php/s/c7W3mzRMJ4EP23E/preview)


Med de nu skapade inloggningsuppgifterna kan du ansluta t.ex. via [YaTQA](https://yat.qa). För detta behövs serverns IP, Query-porten, serverporten samt Query-inloggningsnamnet och lösenordet. 

Server IP, Query Port och Server Port kan du se på Dashboard i webbgränssnittet: 

![](https://screensaver01.zap-hosting.com/index.php/s/RGsk8wfBkoCPzA4/preview)

</TabItem>
<TabItem value="self_hosted" label="Självhostad (VPS/Dedikerad Server)">

Om Teamspeak-servern är installerad på din egen VPS eller dedikerade server via webbgränssnittet kan du använda den vanliga "Server Admin Query". Inloggningsuppgifterna hittar du i webbgränssnittet för din Teamspeak-instans. 

</TabItem>
</Tabs>

## Access Query

Fyll i de angivna/egenskapade inloggningsuppgifterna för din Query Login under Quick Connect i **YatQA**-appen och klicka sedan på **Connect-knappen**. 

![](https://screensaver01.zap-hosting.com/index.php/s/ZaBNRaQxfSjHKwT/download)

:::warning Custom Query Port Error
Som standard ska ett fel uppstå efter en första installation om du anger en annan port än standard query-porten. Detta är normalt och kan lösas så här: 

![img](https://screensaver01.zap-hosting.com/index.php/s/3mofjG5RKPM9yBW/download)
:::

## Slutsats

Du har nu lyckats ansluta till query med hjälp av YatQA. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />