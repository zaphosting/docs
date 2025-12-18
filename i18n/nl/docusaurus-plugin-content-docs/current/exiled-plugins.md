---
id: exiled-plugins
title: "SCP EXILED: Plugins installeren"
description: "Ontdek hoe je je server kunt uitbreiden en personaliseren met betrouwbare plugins voor meer functionaliteit en maatwerk → Leer het nu"
sidebar_label: Plugins Installeren
services:
  - gameserver

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/scp-plugins.json';


## Introductie

Plugins geven je de mogelijkheid om je server nog verder uit te breiden en te personaliseren. Hieronder leggen we uit waar je de meest gebruikte plugins kunt vinden en hoe je ze installeert.

<InlineVoucher />

## Voorbereiding

Eerst moet je de plugins downloaden die je op je server wilt installeren. Een breed aanbod aan EXILED-plugins vind je op hun officiële GitHub-pagina. Zodra je een plugin-repository hebt gekozen, vind je daar een releases-sectie waar je de nieuwste versie kunt downloaden. Hieronder vind je gedetailleerde instructies over hoe je dit doet.

Hoewel plugins van verschillende bronnen te downloaden zijn, raden we aan om bij vertrouwde platforms te blijven, zoals de officiële GitHub-repository, omdat deze over het algemeen het veiligst zijn. Wees altijd voorzichtig bij het toevoegen van plugins aan je server. Controleer altijd de bron, kijk wie de ontwikkelaars zijn en zorg dat je precies weet wat de plugin doet voordat je hem installeert.

Om een plugin van GitHub te downloaden, ga je eerst naar de officiële [EXILED GitHub-pagina](https://github.com/Exiled-Team) en kies je de plugin-repository die je wilt gebruiken.  
![](https://screensaver01.zap-hosting.com/index.php/s/6cCEZGEBKNnJ4o4/preview)  

Eenmaal in de plugin-repository, zoek je naar de **Releases** sectie, rechts in beeld.  
![](https://screensaver01.zap-hosting.com/index.php/s/fteeKrPYmRZknBq/preview)  

In de Releases-sectie vind je een downloadbare **.dll**-file. Klik erop om de download te starten.  
![](https://screensaver01.zap-hosting.com/index.php/s/WzB3qHEb37kkBKs/preview)  

Dat is alles! Zodra je de file hebt gedownload, kun je verder naar de installatie-instructies hieronder om te leren hoe je de **.dll** op je server zet.


## Installatie

Als je de gewenste plugins hebt gedownload, kun je beginnen met installeren. Dit doe je via **FTP**, dus je hebt een FTP-client nodig om de bestanden naar je server te uploaden. Ben je nog niet bekend met FTP en hoe het werkt? Check dan deze handleiding: [Toegang via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/pr5s8ySnpBN7qjC/preview)

De juiste plugin-map vind je hier: ```/gXXXXXX/.config/EXILED/Plugins```. Upload simpelweg de gedownloade **.dll** plugin-bestanden naar deze map. Na het uploaden zou het er ongeveer zo uit moeten zien:  

![](https://screensaver01.zap-hosting.com/index.php/s/MRJHcdGpwSb2agK/preview)

Als dit gelukt is, is de plugin-installatie afgerond. Check daarna de **live console** om te zien of de plugin succesvol is gecompileerd en geladen. De bevestiging in de console ziet er zo uit:  

![](https://screensaver01.zap-hosting.com/index.php/s/NtN6T5fPif3ngEW/preview)



## Populaire Plugins

Ben je nog op zoek naar de perfecte plugins voor je server? Blader door onze zorgvuldig samengestelde lijst met de populairste en meest aanbevolen plugins om je gameplay te verbeteren en je server die finishing touch te geven die ‘ie verdient. Laat je inspireren en vind precies de toevoegingen die bij jouw project passen.

<SearchableItemList items={items} />


## Conclusie

Als je alle stappen hebt gevolgd, zou je plugin nu succesvol geïnstalleerd moeten zijn. Heb je nog vragen of hulp nodig? Neem dan gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />