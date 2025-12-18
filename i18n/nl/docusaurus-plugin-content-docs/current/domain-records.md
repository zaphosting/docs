---
id: domain-records
title: "Domein: Domein record instellingen"
description: "Ontdek hoe je verschillende DNS-recordtypes configureert en begrijpt om je domeinbeheer te optimaliseren → Leer nu meer"
sidebar_label: Domein Records
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Domeinen kun je makkelijk instellen met allerlei verschillende DNS-recordtypes die elk hun eigen functie hebben. In deze gids behandelen we alle verschillende recordtypes en leggen we uit hoe ze werken.

<InlineVoucher />

## Configuratie

Je kunt de domeinrecords instellen in je domeinbeheer onder DNS-beheer. Klik hiervoor op de groene **Nieuwe invoer** knop. Er opent dan een popupvenster. Vanaf daar kun je nieuwe records aanmaken en configureren zoals jij wilt.

![img](https://screensaver01.zap-hosting.com/index.php/s/5qGjz8jDi4sNGcQ/download)

:::info
We gebruiken het domein **zap-hosting.com** om de verschillende DNS-recordtypes te illustreren. Gebruik in jouw geval natuurlijk je eigen domein.
:::

:::warning
Let erop dat je bij het instellen van een DNS-record een punt (.) aan het einde van het record zet om aan te geven dat de domeinnaam compleet is. Zo voorkom je misverstanden bij de toewijzing in het DNS-systeem.
:::

## Soorten DNS-records

Er zijn verschillende soorten DNS-records die elk een andere betekenis en functie hebben. Hieronder leggen we de verschillen uit.

### A Records

Een A-record wordt gebruikt om een doorverwijzing te maken van een "**sub**" of "**hoofd-domein**" naar een "**IPv4-adres**".

| Naam (Voorbeeld)   | Type | Waarde (Voorbeeld) | TTL  | Prioriteit |
| ------------------ | ---- | ------------------ | ---- | ---------- |
| zap-hosting.com.   | A    | IPv4-adres         | 1440 | 0          |



### AAAA Records

Een AAAA-record wordt gebruikt om een doorverwijzing te maken van een "**sub**" of "**hoofd-domein**" naar een "**IPv6-adres**".

| Naam (Voorbeeld)   | Type | Waarde (Voorbeeld) | TTL  | Prioriteit |
| ------------------ | ---- | ------------------ | ---- | ---------- |
| zap-hosting.com.   | AAAA | IPv6-adres         | 1440 | 0          |


### CNAME Records

Een CNAME-record wordt gebruikt om een doorverwijzing te maken van een "**subdomein**" naar een "**sub-**" of "**hoofd-domein**".

| Naam (Voorbeeld) | Type  | Waarde (Voorbeeld) | TTL  | Prioriteit |
| ---------------- | ----- | ------------------ | ---- | ---------- |
| zap-test.        | CNAME | zap-hosting.com    | 1440 | 0          |



### MX Records

Een MX-record wordt gebruikt om een doorverwijzing te maken van een "**sub-**" of "**hoofd-domein**" naar een "**domein**" of "**A-record**". Dit MX-record specificeert één of meerdere mailservers. De prioriteit bepaalt welke mailserver het liefst gebruikt wordt als er meerdere MX-records zijn. De prioriteit moet een geheel getal zijn tussen 0 en 65535, hoe lager de waarde, hoe hoger de prioriteit.

| Naam (Voorbeeld)   | Type  | Waarde (Voorbeeld)  | TTL  | Prioriteit |
| ------------------ | ----- | ------------------- | ---- | ---------- |
| zap-hosting.com.   | CNAME | mailserverxy.com    | 1440 | 0          |



### PTR Records

Een PTR-record wordt gebruikt om een doorverwijzing te maken van een "**IPv4-adres**" of "**IPv6-adres**" naar een "**sub-**" of "**hoofd-domein**". Dit PTR-record is het tegenovergestelde van het A- of AAAA-record.

| Naam (Voorbeeld)            | Type | Waarde (Voorbeeld)  | TTL  | Prioriteit |
| --------------------------- | ---- | ------------------- | ---- | ---------- |
| 1.0.0.127.in-addr.arpa.     | PTR  | zap-hosting.com.    | 1440 | 0          |



### RP Records

Een RP-record wordt gebruikt om informatie te geven over de eigenaar van het domein. Meestal wordt hiervoor een e-mailadres ingevuld waarbij het "**@**" teken vervangen wordt door een "**punt**".

| Naam (Voorbeeld) | Type | Waarde (Voorbeeld)       | TTL  | Prioriteit |
| ---------------- | ---- | ------------------------ | ---- | ---------- |
| rp.              | RP   | info.zap-hosting.com.    | 1440 | 0          |

### SRV Records

Een SRV-record wordt gebruikt om een doorverwijzing te maken van een "**sub**" of "**hoofd-domein**" naar een "**A-record**".  
SRV-records worden gebruikt voor applicaties waar geen standaardpoort wordt gebruikt en dus poortforwarding nodig is.  
De prioriteit bepaalt welke van de services het liefst gebruikt wordt als er meerdere SRV-records zijn voor dezelfde service.  
De prioriteit moet een geheel getal zijn, hoe lager de waarde, hoe hoger de prioriteit.

| Naam (Voorbeeld)   | Type | Waarde (Voorbeeld)         | TTL  | Prioriteit |
| ------------------ | ---- | -------------------------- | ---- | ---------- |
| zap-hosting.com.   | SRV  | 0 2006 zap-hosting.com.    | 1440 | 0          |

### TXT Records

Een TXT-record wordt gebruikt om tekst toe te voegen die jij zelf kiest. Op sommige systemen wordt de inhoud gebruikt om administratieve data te coderen. Dit TXT-record wordt gebruikt om SPF, DMARC en DKIM entries aan te maken.

| Naam (Voorbeeld)   | Type | Waarde (Voorbeeld) | TTL  | Prioriteit |
| ------------------ | ---- | ------------------ | ---- | ---------- |
| zap-hosting.com.   | TXT  | v=spf1 -all        | 1440 | 0          |



## Conclusie

Gefeliciteerd, je hebt je DNS-records succesvol aangemaakt en ingesteld. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />