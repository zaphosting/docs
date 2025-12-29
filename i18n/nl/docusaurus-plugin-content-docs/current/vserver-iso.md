---
id: vserver-iso
title: "VPS: Een ISO-bestand mounten"
description: "Ontdek hoe je jouw VPS helemaal naar wens aanpast met je favoriete ISO voor volledige controle over je serveromgeving → Leer het nu"
sidebar_label: ISO-bestand mounten
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Introductie
Wil je nog meer vrijheid bij het kiezen van je systeem? Naast onze OS-templates kun je natuurlijk ook je eigen ISO’s mounten. Super makkelijk met onze VPS-producten. Zo krijg je precies het besturingssysteem op je server dat jij echt wilt!

<InlineVoucher />



## Beschikbare ISO-bestanden

Naast onze vooraf geconfigureerde standaard OS-templates bieden we ook de optie om extra ISO-bestanden te mounten. Dit geeft je nog meer flexibiliteit bij het opzetten en beheren van je serveromgeving. Onze VPS-producten ondersteunen momenteel de volgende ISO-bestanden:

<SearchableItemList items={items} />





## Een custom ISO uploaden

Als de benodigde ISO niet in de standaardlijst staat, kun je een custom ISO toevoegen via een publieke URL. De URL moet via HTTP of HTTPS bereikbaar zijn en mag geen authenticatie of tijdsgebonden downloadlinks vereisen.

Na het invoeren van de URL in het veld **Custom ISO toevoegen** en klikken op **Upload ISO**, wordt de ISO automatisch geïmporteerd en beschikbaar voor serverinstallatie.

![img](https://screensaver01.zap-hosting.com/index.php/s/E93dLjnpnBPFiH7/preview)

Er kunnen maximaal drie custom ISO’s tegelijk opgeslagen worden. Elke geüploade ISO blijft 72 uur beschikbaar en wordt daarna automatisch verwijderd. Wil je de ISO daarna nog gebruiken, dan moet je ‘m opnieuw uploaden. Jij bent verantwoordelijk voor de inhoud, licenties en veiligheid van de aangeleverde ISO.






## ISO-bestand mounten
Om een ISO te mounten, ga je naar je VPS-beheerpanel en open je **Instellingen → ISO’s**. Kies het gewenste ISO-bestand, pas de opstartvolgorde aan en herstart je server.

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

Na de reboot kun je via de VNC-client verbinding maken met je server en beginnen met het installeren en configureren van het besturingssysteem.

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning Online status of remote verbindingen na ISO mounten

Na het mounten van een ISO is je server nog niet ingesteld. Daarom wordt er in het panel geen **online status** weergegeven en zijn **RDP** of **SSH-verbindingen** nog niet beschikbaar. Deze worden pas actief zodra het besturingssysteem succesvol is geïnstalleerd en geconfigureerd.

:::




## Conclusie
Gefeliciteerd, je hebt succesvol je ISO-bestand geselecteerd en gemount! Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂



<InlineVoucher />