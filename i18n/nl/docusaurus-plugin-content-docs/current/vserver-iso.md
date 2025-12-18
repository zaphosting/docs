---
id: vserver-iso
title: "VPS: Mount een ISO-bestand"
description: "Ontdek hoe je jouw VPS kunt aanpassen met je favoriete ISO voor volledige controle over je serveromgeving → Leer het nu"
sidebar_label: ISO-bestand mounten
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introductie
Wil je nog meer vrijheid bij het kiezen van je systeem? Naast onze OS-templates kun je natuurlijk ook je eigen ISO’s mounten. Dit is super makkelijk met onze VPS-producten. Zo krijg je precies het besturingssysteem op je server dat jij echt wilt!

<InlineVoucher />



## Beschikbare ISO-bestanden

Naast onze vooraf geconfigureerde standaard OS-templates bieden we ook de optie om extra ISO-bestanden te mounten. Dit geeft je nog meer flexibiliteit bij het inrichten en beheren van je serveromgeving. Onze VPS-producten ondersteunen momenteel de volgende ISO-bestanden: 

<SearchableItemList items={items} />

:::info Mist er een ISO-bestand?
Wil je een specifieke ISO gebruiken die niet beschikbaar is? Neem gewoon contact op met onze support, we checken graag of we die voor je kunnen toevoegen.
:::





## ISO-bestand mounten
Om een ISO te mounten, ga je naar je VPS-beheerpanel en open je **Instellingen → ISO’s**. Selecteer het gewenste ISO-bestand, pas de opstartvolgorde aan en start je server opnieuw op. 

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

Na de reboot kun je via de VNC-client verbinding maken met je server en beginnen met het installeren en configureren van het besturingssysteem.

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning Online status of remote verbindingen na ISO mount

Na het mounten van een ISO is je server nog niet ingesteld. Daarom wordt er geen **online status** weergegeven in het panel en zijn **RDP** of **SSH-verbindingen** nog niet beschikbaar. Deze worden pas toegankelijk zodra het besturingssysteem succesvol is geïnstalleerd en geconfigureerd.

:::




## Conclusie
Gefeliciteerd, je hebt je ISO-bestand succesvol geselecteerd en gemount. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂



<InlineVoucher />