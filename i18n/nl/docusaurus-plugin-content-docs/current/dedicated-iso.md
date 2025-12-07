---
id: dedicated-iso
title: "Dedicated Server: Eigen ISO"
description: "Ontdek hoe je ISO-bestanden eenvoudig kunt mounten via iLO of remote console om je server efficiënt te booten → Leer het nu"
sidebar_label: Eigen ISO
services:
  - dedicated
---



import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Wil je een ISO mounten? Misschien een van onze ISO’s of liever je eigen bestand? Geen probleem. We bieden een grote selectie ISO-bestanden aan en hebben ook extra opties.

:::danger Selectie en gebruik van ISO-bestanden
Als je je eigen ISO (OS) gebruikt, die wij niet actief aanbieden, kunnen we geen garantie geven op de werking bij eventuele problemen.
:::



## Beschikbare mount-opties
Er zijn twee manieren om je eigen ISO-bestand te mounten. Het is altijd nodig om de server te herstarten om het bestand te laden. Over het algemeen zijn er geen beperkingen voor het mounten van een bestand, het is wel belangrijk dat het ISO-bestand bootable is.

## Mounten via iLO
Open je iLO Management Interface en ga naar "Virtual" Media
![](https://screensaver01.zap-hosting.com/index.php/s/myWMSi3GgyLBHXR/preview)

* Vul de URL in die verwijst naar het ISO-bestand dat je wilt gebruiken. Zorg dat de link eindigt op .iso
* Druk nu op "Insert Media"
* Klik op "Server Reset" om je systeem te herstarten.

Je ISO-bestand wordt nu geladen.

## Mounten via remote console

**HTML5 Console**
Je kunt het bestand eenvoudig zelf mounten in de remote console:
![](https://screensaver01.zap-hosting.com/index.php/s/x4EDgLZ3e3B6MMC/preview)

* Klik op het schijf-icoon
* Kies "CD/DVD"
* Kies tussen "Scripted media URL" of "Local .iso File"

Het verschil tussen "Scripted media URL" en "Local .iso File" is dat je met de eerste een ISO-bestand kunt mounten dat geüpload is naar een server/webspace, en met "Local *.iso File" direct een bestand van je eigen computer kiest, zonder het ergens te uploaden.

Als je je ISO-bestand hebt gekozen, moet je de server herstarten.


**Java Console**
Net als bij de HTML5-console wordt het ISO-bestand ook direct in de applicatie zelf gemount.
![](https://screensaver01.zap-hosting.com/index.php/s/2CdR5d5AcsG7YdH/preview)

* Open "Virtual Drives"

Het verschil tussen "Image File CD/DVD-ROM" en "URL CD/DVD-ROM" is dat je met de laatste een ISO-bestand kunt mounten dat geüpload is naar een server/webspace, en met "Image File CD/DVD-ROM" direct een bestand van je eigen computer kiest, zonder upload.

Nadat je je gewenste ISO-bestand hebt geïnjecteerd, is een server reboot vereist.


## Conclusie
Gefeliciteerd, je hebt succesvol je ISO-bestand geselecteerd en gemount. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂