---
id: vserver-windows-rdp-port
title: "VPS: Windows RDP-poort wijzigen"
description: "Ontdek hoe je de Windows RDP-poort verandert → Leer het nu"
sidebar_label: RDP-poort wijzigen
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Intro

Remote Desktop Protocol gebruikt standaard poort 3389. Deze poort is algemeen bekend en wordt vaak het doelwit van automatische scans. Het veranderen van de RDP-poort kan ongewenste verbindingspogingen verminderen en je basisbeveiliging verbeteren.

<InlineVoucher />



## RDP-poort wijzigen in het register

Log lokaal in op de server of via een bestaande Remote Desktop-verbinding. Open het Uitvoeren-venster met **Win + R**, typ `regedit` en bevestig om de Register-editor te openen. Navigeer naar het volgende registerpad:

```
HKEY_LOCAL_MACHINE
 └─ SYSTEM
    └─ CurrentControlSet
       └─ Control
          └─ Terminal Server
             └─ WinStations
                └─ RDP-Tcp
```

Zoek de registerwaarde genaamd **PortNumber**. Zet het waardetype op **Decimaal** en vul het gewenste nieuwe poortnummer in. We raden een poort boven 1024 aan die nog niet door een andere service wordt gebruikt. Sluit de Register-editor nadat je de wijziging hebt doorgevoerd.

## Windows Firewall-regels aanpassen

De nieuwe RDP-poort moet worden toegestaan in de Windows Firewall. Open **Windows Defender Firewall met geavanceerde beveiliging** en ga naar de binnenkomende regels.

Pas de bestaande Remote Desktop-regel aan of maak een nieuwe binnenkomende regel aan die TCP-verkeer op de nieuw ingestelde poort toestaat. Zorg dat de regel de verbinding toestaat en wordt toegepast op de benodigde netwerkprofielen.

## Service herstarten om wijzigingen door te voeren

De poortwijziging wordt pas actief na het herstarten van de Remote Desktop Services of het herstarten van het systeem. We raden aan de server volledig te herstarten om zeker te zijn dat de configuratie overal goed is doorgevoerd.

## Verbinden met de nieuwe poort

Bij het maken van een nieuwe Remote Desktop-verbinding moet je de poort expliciet opgeven door deze achter het IP-adres of de hostnaam te zetten. Bijvoorbeeld:

```
203.0.113.10:3390
```

## Conclusie

Het veranderen van de Windows RDP-poort verkleint de kans op automatische scans en ongeautoriseerde verbindingspogingen. Het proces bestaat uit het aanpassen van het Windows-register, het toestaan van de nieuwe poort in de firewall en het herstarten van het systeem of de services.

Controleer na het afronden direct of je toegang hebt en noteer de ingestelde poort om toekomstige verbindingsproblemen te voorkomen. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />