---
id: source-metamod-plugins
title: Plugins installeren
description: "Ontdek hoe je Sourcemod-plugins effectief beheert en problemen oplost voor betere serverprestaties → Leer het nu"
sidebar_label: Plugins
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Plugins installeren

Hier leggen we uit hoe je plugins installeert. Om plugins te kunnen gebruiken, heb je Sourcemod / Metamod nodig. Instructies voor de installatie vind je hier: [Installatie](source-metamod-installation.md)



Om plugins te installeren, moet je ze via FTP uploaden. De pluginbestanden moeten in de **Plugins** map onder **../addons/sourcemod/** worden geplaatst. Afhankelijk van de complexiteit van de plugin kunnen er al config- en vertaalbestanden beschikbaar zijn. In dat geval moeten deze in de **configs** en **translations** mappen worden geüpload.



## Plugins uitschakelen / verwijderen

In de **Plugins** map vind je een submap genaamd **disabled**. Hier kun je plugins tijdelijk plaatsen die je niet wilt laten laden. Het is voldoende om het bijbehorende **.smx** bestand te verplaatsen.



Wil je een plugin permanent uitschakelen? Dan moet je de bijbehorende pluginbestanden verwijderen. De plugin wordt dan uitgeschakeld na een mapwissel of serverherstart.



## Veelvoorkomende problemen


**Waarom werkt mijn geïnstalleerde plugin niet?**

Oplossingen:

- Zorg dat aan alle vereisten is voldaan tijdens het installeren van de plugin. Sommige plugins hebben een database nodig om goed te functioneren. In dat geval moet je extra aanpassingen doen in de **database.cfg** in de configmap.
- De Source-engine wordt regelmatig geüpdatet. Een plugin die al lang geleden is uitgebracht en niet meer onderhouden wordt, kan daardoor incompatibel zijn. In dat geval is de enige optie om het Alliedmodders Forum te bezoeken voor een unofficial fix of om een alternatieve plugin te gebruiken.
- Werkt niets van het bovenstaande? Check dan de Live Console of de logbestanden. Meestal vind je daar de oorzaak van het probleem.

<InlineVoucher />