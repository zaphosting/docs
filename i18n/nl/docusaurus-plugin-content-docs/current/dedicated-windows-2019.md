---
id: dedicated-windows-2019
title: "Dedicated Server: Installatie van Windows Server 2019"
description: "Ontdek hoe je Windows Server installeert en configureert op je dedicated server voor optimale prestaties en veiligheid → Leer het nu"
sidebar_label: Windows Server 2019
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Hier leggen we je stap voor stap uit hoe je het Windows Server besturingssysteem installeert en configureert op je dedicated server. Volg deze instructies goed om ervoor te zorgen dat je het OS succesvol installeert en optimaal gebruikt.

:::info Windows Server 2019
De setup-stappen en demonstratie in deze handleiding zijn gebaseerd op Windows Server 2019. Oudere OS-versies kunnen qua structuur en uiterlijk verschillen, maar de procedure is vergelijkbaar.
:::

:::warning Nieuwere versie beschikbaar / EOL details

De nieuwste Windows Server versie van Microsoft is de [2025](dedicated-windows.md) versie. We raden aan om voor lange termijn projecten altijd de nieuwste versie te gebruiken.

De ondersteuning voor oudere Windows Server versies wordt op den duur stopgezet. Voor versie 2019 zijn de volgende deadlines gepland:

- Actieve ondersteuning: 09.01.2024
- Beveiligingsondersteuning: 09.01.2029

:::

## Voorbereiding
Voor de installatie en configuratie van een besturingssysteem is het belangrijk om eerst de juiste ISO van het OS te mounten. Er zijn verschillende manieren om dit te doen:

1. Mounten via de initiële setup
2. Mounten via iLO (Virtual Media)
3. Mounten via iLO (Remote Console)

Als je nog niet bekend bent met het mounten van een ISO-bestand, bekijk dan onze [Initiële setup](dedicated-setup.md) of [Eigen ISO](dedicated-iso.md) gids.

## Installatie
Om Windows Server te installeren heb je een ISO-bestand nodig. In ons webinterface kun je de gewenste Windows-versie kiezen. Je kunt ook een eigen ISO gebruiken, daarvoor hebben we een [Eigen ISO](dedicated-iso.md) handleiding.

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

Als dit scherm verschijnt in je remote console, betekent dit dat de ISO succesvol is geladen en kunnen we starten met de setup.
Kies je gewenste taal en klik op "Volgende" om door te gaan.

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

Klik op "Nu installeren" om het installatieproces te starten.

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windows vraagt nu om een productsleutel. Vul deze in als je er een hebt.

:::note
Wij verkopen geen Windows-licenties, je moet zelf een sleutel aanschaffen.
:::

Je kunt Windows productsleutels kopen bij diverse online shops. Zorg dat je een geldige sleutel koopt voor jouw Windows-versie, want er zijn verschillende versies.
Windows Server 2019 heeft bijvoorbeeld twee edities: de standaard en de Datacenter editie.
Weet je niet precies wat je nodig hebt? Klik dan op "Ik heb geen productsleutel" en voeg deze later toe.

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

Selecteer nu de versie die je wilt installeren.
Zorg dat je de juiste versie kiest, dit kun je later niet meer wijzigen.
Let ook op dat je een versie met "(Desktop Experience)" kiest, anders krijg je een shell-gebaseerde Windows.
Heb je je keuze gemaakt? Selecteer de versie en klik op "Volgende".

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

Accepteer de voorwaarden en ga verder met "Volgende".

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Kies 'Aangepast' als je een schone installatie wilt uitvoeren. Kies "Upgrade" als je bijvoorbeeld van 2016 naar 2019 wilt upgraden.

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

In de volgende stap moet je partities aanmaken op je dedicated server. Meestal zijn er nog geen partities aanwezig. Als er wel partities zijn, selecteer ze en klik op verwijderen.

Je kunt meerdere kleinere partities maken of één grote. Bij kleinere partities raden we aan om minimaal 50GB toe te wijzen aan de hoofd Windows-partitie.
Klik op "Nieuw" om een partitie aan te maken.

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

Je kunt ook gewoon op Toepassen klikken als je één grote partitie wilt. De setup kiest automatisch de maximale grootte.

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windows maakt zelf een kleine systeempartitie aan, dit accepteren we door op "OK" te klikken.

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

Als je tevreden bent met je partities, kies dan de partitie waarop Windows geïnstalleerd moet worden en klik op "Volgende".
De Windows setup doet nu alles automatisch, dit kan enkele minuten duren.
Je hoeft verder niets te doen totdat de setup klaar is.

## Configuratie

Als de setup klaar is, vraagt Windows je om een wachtwoord in te stellen.

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

Stel hier je gewenste wachtwoord in.

:::info
We raden aan een sterk wachtwoord te kiezen met speciale tekens.

Als je het wachtwoord vergeet, is er geen manier om het te herstellen, dus schrijf het goed op.
:::

Na het instellen van het wachtwoord kom je in het Windows vergrendelscherm.

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

Om in te loggen in Windows, druk je op de toetscombinatie `CTRL + ALT + DELETE`. Dit kan makkelijk via je remote console.
(Je vindt dit in de Java console onder "Keyboard")
Log nu in met je wachtwoord.

In de volgende stap moet je Remote Desktop inschakelen, zodat je makkelijk verbinding kunt maken met je server.
Open de Windows Verkenner en klik met de rechtermuisknop op "Deze pc".

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

Kies "Eigenschappen".

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

Open "Externe instellingen".

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

Accepteer de firewallmelding met "OK" en klik op "Toepassen".

Open nu Remote Desktop op je eigen computer en vul het IP-adres van je ZAP-interface in.
De gebruikersnaam is altijd Administrator en het wachtwoord is degene die je net hebt ingesteld.

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

Je kunt de certificaatwaarschuwing negeren en het vinkje zetten bij "Vraag me niet meer om verbindingen met deze computer".
Bevestig alles met "Ja".

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

Remote Desktop maakt nu verbinding met je dedicated server en je kunt aan de slag.
De netwerkconfiguratie wordt automatisch via DHCP geregeld, dus je hoeft verder niets aan te passen.

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
Heb je nog vragen of problemen? Onze support helpt je graag verder!
:::

## Afsluiting
Gefeliciteerd, je hebt Windows Server 2019 succesvol geïnstalleerd op je dedicated server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂