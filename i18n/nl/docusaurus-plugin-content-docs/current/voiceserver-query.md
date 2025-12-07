---
id: voiceserver-query
title: "Voiceserver: Toegang tot TeamSpeak Query"
description: "Ontdek hoe je je TeamSpeak-server extern beheert via Query Login voor efficiënte servercontrole en administratie → Leer het nu"
sidebar_label: Query Login
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

De query login van TeamSpeak geeft je toegang tot de server query interface, waar je je TeamSpeak-server extern kunt beheren via commando’s.

:::warning Server Admin Query Toegang
Onze TeamSpeak Server producten bevatten geen Server Admin Query toegang. 
:::

<InlineVoucher />

## Login gegevens

<Tabs>
<TabItem value="Webinterface" label="TeamSpeak Server Product" default>

Om veiligheidsredenen is de **Server Admin Query** login niet beschikbaar bij het **TeamSpeak server product**. Heb je echter adminrechten op je Teamspeak-server, dan kun je zelf een Query Login aanmaken via de volgende stappen.

:::info
Functies zoals import snapshot, slots/poorten wijzigen en dergelijke zijn niet beschikbaar. Deze instellingen zijn door ons vooraf ingesteld en kunnen niet handmatig aangepast worden. 
:::

Om je eigen Query Login aan te maken, klik je in de Teamspeak Client onder Tools op "Server Query Login".
Vervolgens geef je een naam op voor de login, dit wordt ook de loginnaam, bijvoorbeeld "MyQueryLogin":

![](https://screensaver01.zap-hosting.com/index.php/s/gMeQtSTkrtRzbk7/preview)

Na bevestiging met "OK" verschijnt er een wachtwoord. Dit moet je opslaan, want het kan later niet meer gewijzigd worden.

![](https://screensaver01.zap-hosting.com/index.php/s/c7W3mzRMJ4EP23E/preview)

Met deze aangemaakte login gegevens kun je verbinding maken, bijvoorbeeld via [YaTQA](https://yat.qa). Hiervoor heb je het server IP, de Query poort, de server poort en de Query login naam en wachtwoord nodig.

Het Server IP, de Query Poort en de Server Poort vind je terug op het Dashboard in de webinterface:

![](https://screensaver01.zap-hosting.com/index.php/s/RGsk8wfBkoCPzA4/preview)

</TabItem>
<TabItem value="self_hosted" label="Zelf gehost (VPS/Dedicated Server)">

Als de Teamspeak-server via de webinterface op je eigen VPS of Dedicated Server is geïnstalleerd, kun je de normale "Server Admin Query" gebruiken. De login gegevens vind je in de webinterface van de Teamspeak installatie.

</TabItem>
</Tabs>

## Query Toegang

Vul de opgegeven of zelf aangemaakte login gegevens voor je Query Login in onder Quick Connect in de **YatQA** applicatie en klik daarna op de **Connect knop**.

![](https://screensaver01.zap-hosting.com/index.php/s/ZaBNRaQxfSjHKwT/download)

:::warning Fout bij Custom Query Poort
Standaard krijg je na een eerste installatie een foutmelding als je een andere poort dan de standaard query poort opgeeft. Dit is normaal en los je als volgt op:

![img](https://screensaver01.zap-hosting.com/index.php/s/3mofjG5RKPM9yBW/download)
:::

## Conclusie

Je hebt succesvol verbinding gemaakt met de query via YatQA. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />