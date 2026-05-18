---
id: webspace-plesk-ssl
title: "Webspace: Maak een SSL-certificaat aan in Plesk"
description: "Leer hoe je je website beveiligt met een SSL-certificaat in Plesk en HTTPS inschakelt voor versleutelde verbindingen."
sidebar_label: SSL-certificaat aanmaken
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introductie

Een SSL-certificaat versleutelt de verbinding tussen jouw website en je bezoekers. Zodra HTTPS is ingeschakeld, maken browsers een veilige verbinding en tonen ze een slotje in de adresbalk. Dit beschermt gevoelige data, verhoogt het vertrouwen en voorkomt dat browsers je website als onveilig markeren.

<InlineVoucher />

## Je hoofddomein beveiligen

Wanneer een domein voor het eerst wordt aangemaakt in Plesk, is het via HTTP bereikbaar en niet versleuteld. In het Plesk-paneel zie je dat er nog geen certificaat is toegewezen. Open je het domein nu in een browser, dan wordt het meestal als onveilig gemarkeerd:

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

Om de versleuteling te activeren, open je het domein in je Plesk-paneel en ga je naar **SSL/TLS-certificaten**. Het bijbehorende menu opent dan:

![img](https://screensaver01.zap-hosting.com/index.php/s/8rSr7Jt3DsjDzBY/download)

Hier kun je een gratis Let's Encrypt-certificaat aanvragen. Tijdens het aanvraagproces moet je een geldig e-mailadres invullen en de domeinnamen selecteren die beveiligd moeten worden. Meestal worden zowel het hoofddomein als de www-subdomein geselecteerd, mits de www-vermelding in je DNS-configuratie staat:

![img](https://screensaver01.zap-hosting.com/index.php/s/LTFN73ekPjtikwp/preview)

Na het bevestigen van de aanvraag met **Get it free** communiceert Plesk met Let's Encrypt en wordt het certificaat automatisch uitgegeven. Zodra het certificaat succesvol is aangemaakt, moet je HTTPS afdwingen door de permanente redirect van HTTP naar HTTPS te activeren in de hostinginstellingen:

![img](https://screensaver01.zap-hosting.com/index.php/s/BN7AMzG6MyMKb38/preview)

Na activatie worden alle bezoekers automatisch doorgestuurd naar de versleutelde HTTPS-versie van je website. Je kunt de installatie controleren door je domein met https in de browser te openen.



## Alle subdomeinen beveiligen met een wildcard-certificaat

Gebruik je meerdere subdomeinen of ben je dat van plan, dan is een wildcard-certificaat een efficiëntere oplossing. Hiermee beveilig je het hoofddomein én alle bestaande en toekomstige subdomeinen. Om een wildcard-certificaat aan te vragen, open je opnieuw het menu **SSL/TLS-certificaten**:

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

Kies de optie om een Let's Encrypt-certificaat te vernieuwen of aan te vragen. Zet de optie aan om het wildcard-domein te beveiligen:

![img](https://screensaver01.zap-hosting.com/index.php/s/ZMcdJk9wCzifBmq/preview)

Na het bevestigen van de aanvraag toont Plesk een blauwe infobox met een DNS TXT-record dat je moet aanmaken:

![img](https://screensaver01.zap-hosting.com/index.php/s/wnbNfKeTMsCdsy9/preview)

Dit TXT-record moet exact zo worden toegevoegd aan de DNS-zone van je domein. Het bevestigt het eigendom van het domein en maakt het voor Let's Encrypt mogelijk om de aanvraag te valideren. Een DNS-entry ziet er ongeveer zo uit:

![img](https://screensaver01.zap-hosting.com/index.php/s/tDtDaERR7twzaMr/preview)

:::warning DNS-propagatie vertraging
DNS-propagatie kan tot 24 uur duren voordat het TXT-record wereldwijd beschikbaar is. Tijdens deze periode kan de validatie mislukken omdat sommige DNS-servers nog verouderde info teruggeven. Als dit gebeurt, wacht dan tot het record volledig is doorgevoerd en probeer de verificatie opnieuw.
:::



Om te checken of het TXT-record correct is doorgevoerd en publiekelijk zichtbaar is, kun je een externe DNS-lookup tool gebruiken zoals de MXToolbox SuperTool:

https://mxtoolbox.com/SuperTool.aspx

Open de website en kies de optie **TXT Lookup**. Vul de volledige hostnaam in die Plesk aangeeft, meestal in het formaat `_acme-challenge.jouwdomein.com`, en start de lookup. De tool vraagt publieke DNS-servers en toont de momenteel zichtbare TXT-records.

Als de juiste verificatiewaarde precies zo wordt weergegeven als in Plesk, is de DNS-entry succesvol doorgevoerd en kan Let's Encrypt het domeineigendom valideren. Komt er geen resultaat terug of wijkt de waarde af, dan is de DNS-propagatie waarschijnlijk nog bezig. Wacht in dat geval even en herhaal de lookup later totdat de juiste entry wereldwijd zichtbaar is.

![img](https://screensaver01.zap-hosting.com/index.php/s/iFP5P8SY6oSXQBW/download)

Zodra het record zichtbaar is, ga je terug naar Plesk en start je de validatie opnieuw. Als het lukt, wordt het wildcard-certificaat uitgegeven en als beveiligd weergegeven. Vanaf dat moment worden alle nieuw aangemaakte subdomeinen automatisch beveiligd.



## Conclusie

Gefeliciteerd! Je website is nu succesvol beveiligd met SSL-encryptie. Alle data die tussen je server en bezoekers wordt verstuurd, is versleuteld, browsers herkennen je domein als betrouwbaar en HTTPS wordt automatisch afgedwongen.

Heb je nog vragen of hulp nodig? Neem dan vooral contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />