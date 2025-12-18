---
id: fivem-deletecache
title: "FiveM: Cache Leegmaken"
description: "Ontdek hoe het legen van de cache van je FiveM-server de prestaties verbetert en fouten oplost voor een soepelere game-ervaring → Leer nu meer"
sidebar_label: Cache Verwijderen
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

Het legen van de servercache op een FiveM-server zorgt ervoor dat tijdelijk opgeslagen bestanden worden verwijderd. Hierdoor moet de server bij de volgende start alle benodigde bestanden opnieuw downloaden of aanmaken. Dit helpt om verouderde of corrupte data te verwijderen, wat prestatieproblemen, scriptfouten, crashes of problemen met het laden van de gamewereld kan oplossen.

<InlineVoucher />

## Simpele methode

Het verwijderen van de cache op je FiveM-gameserver is echt heel makkelijk. Ga eerst naar de webinterface van je gameserver. Zoek en open de **Instellingen** sectie in de webinterface van je gameserver.



![img](https://screensaver01.zap-hosting.com/index.php/s/nizHMSk7oXCsJS4/download)



Scroll vervolgens naar beneden tot je meerdere knoppen ziet onder de **Acties** subsectie. Klik hier op de knop **Cachebestanden Verwijderen** om de cache van je gameserver te legen.

![img](https://screensaver01.zap-hosting.com/index.php/s/A2RiTo8gJiTibGR/download)

:::warning 
Dit zal je server direct herstarten om de cachebestanden te verwijderen, dus zorg dat je hierop voorbereid bent.
:::


## Alternatieve methode

Eerst moet je verbinding maken met je server via FTP. Als je niet bekend bent met FTP, raden we je aan om onze [FTP toegang](gameserver-ftpaccess.md) gids te bekijken. In de volgende stap moet je de cachemap vinden en verwijderen. Volg dit pad `/gXXXXXX/fivem/server-data/cache` om bij de cachemap te komen.

![img](https://screensaver01.zap-hosting.com/index.php/s/dfpssTy8KL7B3cK/download)

Nu hoef je alleen nog maar de cache te legen. Klik hiervoor op de **Cache** map en daarna op **Bestanden**. Selecteer nu alle mappen die in de **Cache** map staan en verwijder ze.

![img](https://screensaver01.zap-hosting.com/index.php/s/MnHpWiDmBgHa63B/download)

Start nu je FiveM-server opnieuw op zodat de wijzigingen effect krijgen. Wanneer de server opnieuw opstart, wordt de cache opnieuw opgebouwd.



## Conclusie

Als je alle stappen hebt gevolgd, heb je succesvol de cache van je server geleegd. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />