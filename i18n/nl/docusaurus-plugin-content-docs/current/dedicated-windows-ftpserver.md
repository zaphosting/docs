---
id: dedicated-windows-ftpserver
title: "FTP instellen op een Windows Server - Host een Veilige Bestandoverdracht Service"
description: "Ontdek hoe je een FileZilla FTP-server op Windows instelt en beheert voor veilige bestandoverdracht en gebruikersbeheer → Leer nu meer"
sidebar_label: FTP Installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

**FTP (File Transfer Protocol)** is een netwerkprotocol dat wordt gebruikt om bestanden over een TCP/IP-netwerk te versturen. Het protocol is ontwikkeld om het eenvoudig uitwisselen van bestanden tussen systemen mogelijk te maken.

Met de **FileZilla Server** kun je zo’n FTP-server op een Windows besturingssysteem opzetten. FileZilla Server is makkelijk te installeren en configureren, en biedt tal van functies zoals het aanmaken van gebruikersaccounts, beheren van toegangsrechten en het overdragen van bestanden.



## Voorbereiding

### Download

Voor het opzetten van een FTP-server heb je de juiste software nodig. FileZilla Server is een goede optie voor Windows servers. Je kunt het hier downloaden: [FileZilla server](https://filezilla-project.org/download.php?type=server).



### Installatie

Als je het installatiebestand hebt gedownload, moet je het uitvoeren. Klik op het bestand dat je net hebt gedownload. Het volgende venster zou moeten openen: ![](https://screensaver01.zap-hosting.com/index.php/s/a2DEpaR5jD28X23/preview)



Hier kun je de te installeren pakketten selecteren. Het is echter voldoende om de vooraf geselecteerde pakketten te installeren, dus klik gewoon op **Next** en kies daarna het installatiepad:

![](https://screensaver01.zap-hosting.com/index.php/s/cN7K9Cte9tXFrF2/preview)

In dit voorbeeld wordt FileZilla Server geïnstalleerd onder **C:\Program Files (x86)\FileZilla Server**. Je kunt natuurlijk ook een eigen pad kiezen. Na het kiezen van het pad moet je aangeven hoe de FTP-server geïnstalleerd en gestart moet worden. Ook kun je de poort instellen en een administratorwachtwoord opgeven.



![](https://screensaver01.zap-hosting.com/index.php/s/WopFXcW3teFAyJK/preview)

Klik daarna weer op **Next** en in de volgende stap. Klik aan het einde op **Install** om de installatie te starten. De beheerinterface van de FileZilla FTP-server opent nu. Klik op de knop **Connect to FileZilla FTP Server**.

Er verschijnt een venster met de velden Host, Port en Password. Laat de eerste twee velden ongewijzigd en vul het administratorwachtwoord in dat je hebt ingesteld. Maak daarna verbinding door op **Ok** te klikken.



## Configuratie

### Gebruiker aanmaken

Om via FTP verbinding te maken met je server, moet je een gebruiker aanmaken.  
Klik bovenin het menu op **Server** en daarna op **Configure**.

![](https://screensaver01.zap-hosting.com/index.php/s/C5WLC8Lp8CjTjQg/preview)

Onder het menu **Users** kun je een nieuwe gebruiker toevoegen door simpelweg op **Add** te klikken:

![](https://screensaver01.zap-hosting.com/index.php/s/dbCS5yJfwqry8Dq/preview)

In dit voorbeeld is de gebruikersnaam **YourUserName**. Je kunt natuurlijk je eigen gebruikersnaam kiezen.



### Wachtwoord en Rechten

Nu de gebruiker is aangemaakt, moet je de toegang en rechten instellen. Activeer de gebruiker en stel het wachtwoord in onder de categorie **General** bij **Credentials**. We raden sterk aan om een wachtwoord te gebruiken voor de veiligheid. Kies **Require a password to log in** en stel je gewenste wachtwoord in.

![](https://screensaver01.zap-hosting.com/index.php/s/z78wpcFbYEAJYeB/preview)

Om ervoor te zorgen dat de gebruiker de juiste rechten heeft, moet je aangeven welke mappen toegankelijk zijn door op **Add** te klikken bij mount points. Je moet een virtueel pad en een native pad opgeven. In ons voorbeeld geven we aan dat de C-schijf wordt weergegeven onder \.

![](https://screensaver01.zap-hosting.com/index.php/s/iqQrjGByHpkBcJF/preview)

Rechts vind je de optie **Permissions**, waarmee je de toegangsrechten voor het opgegeven pad instelt. Wil je dat de gebruiker bestanden kan lezen en bewerken, dan is het aan te raden om **Read+Write** te kiezen.

::: danger
Voor de veiligheid geef je een gebruiker alleen toegang tot specifieke mappen.
:::

Je kunt je wijzigingen toepassen en bevestigen door op de knop **Apply** te klikken.



## Windows Firewall Uitzonderingen

Om verbinding te kunnen maken met je FTP-server, moet je de FTP-server toestaan in de Windows Firewall. Open hiervoor de firewall-instellingen via **Configuratiescherm\Systeem en Beveiliging\Windows Defender Firewall** en klik op **Een app of functie toestaan via Windows Defender Firewall**.  
Selecteer in het volgende venster de applicatie die je wilt toestaan:

![](https://screensaver01.zap-hosting.com/index.php/s/xHwQzCKokHTn424/preview)

In dit voorbeeld is het pad **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/Laz3HFb7GrLBY9w/preview)

Sluit het proces af met een klik op **OK**, nu is verbinding maken met je FTP-server mogelijk.





## Conclusie

Gefeliciteerd, je hebt de FTP-server succesvol geïnstalleerd. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂