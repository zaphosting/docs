---
id: webspace-mybb
title: "Webspace: Installeer MyBB forumsoftware"
description: "Ontdek hoe je je eigen MyBB forum opzet en lanceert om een toffe online community te bouwen → Leer het nu"
sidebar_label: Installeer MyBB
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

MyBB, voorheen MyBulletinBoard, is gratis en open source forumsoftware ontwikkeld door de MyBB Group. In deze gids leggen we uit hoe je deze forumsoftware installeert op ons webspace product.

<InlineVoucher />

## Voorbereiding

Voordat je MyBB echt kunt installeren, moet je een paar dingen regelen. Denk aan het downloaden van de forumsoftware, het aanmaken van de database die je gaat gebruiken en het instellen van de mailserver (e-mailadres).

**Software**

De forumsoftware kun je downloaden van de officiële MyBB website. De download vind je hier: [MyBB](https://mybb.com/download/)

![Bildschirmfoto vom 2022-05-15 23-16-59](https://screensaver01.zap-hosting.com/index.php/s/s8kbtNFq6c79SoH/preview)

De download bevat een gecomprimeerd bestand dat je eerst op je lokale computer moet uitpakken. Binnenin vind je een map met de naam **Upload**. De inhoud hiervan heb je nodig en moet je uploaden via **FTP of File Manager**. Onder **Websites & Domeinen** bij **FTP-toegang** kun je een FTP-gebruiker aanmaken.

Open daarna de file manager in het Pleskpanel, ga naar de **httpdocs** map en upload daar de bestanden van de forumsoftware.

![en-file](https://screensaver01.zap-hosting.com/index.php/s/x9oWpWCzrtB87e7/preview)

**Database**

Vervolgens moet je de database aanmaken waarin straks alle forumgegevens worden opgeslagen. Klik hiervoor weer op **Websites & Domeinen** en daarna op **Databases**. Klik op Database toevoegen en maak een nieuwe database aan:

![en-db](https://screensaver01.zap-hosting.com/index.php/s/f3dwjM5qxQQpzd6/preview)

Klik op **OK** en de database wordt aangemaakt.

**Mailserver (e-mailadres)**

Voor het registreren van accounts op het forum heb je een mailserver met een e-mailadres nodig, zodat registratie-e-mails naar gebruikers gestuurd kunnen worden. Hoe je zo’n e-mailadres instelt, lees je hier: [E-mails versturen](webspace-plesk-sendmail.md)

## Installatie

Als je alle voorbereidingen hebt afgerond, kun je beginnen met de eigenlijke installatie van MyBB. Open hiervoor de website in je browser. Het zou er zo uit moeten zien:

![mybbinstall](https://screensaver01.zap-hosting.com/index.php/s/DzgRZMBFotTgsXZ/preview)

Tijdens de setup moet je 9 categorieën configureren. De setup checkt of aan alle vereisten is voldaan, stelt de database en forumsoftware in, enzovoorts. Eerst kies je of je anonieme statistieken naar MyBB wilt sturen. Daarna moet je akkoord gaan met de licentievoorwaarden.

Vervolgens krijg je een overzicht van de systeemvereisten te zien, zoals PHP-versie, geheugen, etc. Je webspace is standaard al zo ingesteld dat aan deze eisen wordt voldaan.

![install2](https://screensaver01.zap-hosting.com/index.php/s/fTJQGRADn5SF62C/preview)

Als er iets niet klopt, neem dan contact op met de support. Anders klik je op **Volgende** om door te gaan. Nu moet je de database configureren die je eerder hebt aangemaakt. Vul hier de databasegegevens in:

![](https://screensaver01.zap-hosting.com/index.php/s/GaRZiSizcYCMX3Z/preview)

De database wordt nu ingesteld, dit kan even duren. Daarna worden de standaarddata en thema’s geïmplementeerd. Klik hier gewoon op **Volgende**.

Daarna kom je bij de algemene instellingen. Hier kun je de naam van je website, forum, URL en meer bepalen:

![install3](https://screensaver01.zap-hosting.com/index.php/s/asEA4KqtZGaN65A/preview)

Tot slot moet je een algemene administrator account aanmaken voordat de installatie echt klaar is.

![Install4](https://screensaver01.zap-hosting.com/index.php/s/3T6NMLYyMnb4pja/preview)

Als je dit gedaan hebt en alles succesvol is ingesteld, zie je dit bericht en kun je aan de slag met je forum:

![](https://screensaver01.zap-hosting.com/index.php/s/9N2jBCbzEYe2iyn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/g9iecMjiDX4GoqP/preview)

<InlineVoucher />