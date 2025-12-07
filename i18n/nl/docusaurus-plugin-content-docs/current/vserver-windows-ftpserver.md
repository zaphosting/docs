---
id: vserver-windows-ftpserver
title: "VPS: FTP Installeren"
description: "Ontdek hoe je een FileZilla FTP-server op Windows instelt en beheert voor veilige bestandsoverdracht en gebruikersbeheer → Leer het nu"
sidebar_label: FTP Installeren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

**FTP (File Transfer Protocol)** is een netwerkprotocol dat wordt gebruikt om bestanden over een TCP/IP-netwerk te versturen. Het protocol is ontwikkeld om het makkelijk te maken bestanden tussen systemen uit te wisselen.

Met de **FileZilla Server** kun je zo’n FTP-server op een Windows besturingssysteem opzetten. FileZilla Server is simpel te installeren en configureren, en biedt veel functies zoals het aanmaken van gebruikersaccounts, beheren van toegangsrechten en het overzetten van bestanden.
<InlineVoucher />


## Voorbereiding

### Downloaden

Voor het opzetten van een FTP-server heb je de juiste software nodig. FileZilla Server is een goede optie voor Windows servers. Je kunt het hier downloaden: [FileZilla server](https://filezilla-project.org/download.php?type=server).



### Installatie

Als je het installatiebestand hebt gedownload, moet je het uitvoeren. Klik op het bestand dat je net hebt gedownload. Het volgende venster verschijnt: ![](https://screensaver01.zap-hosting.com/index.php/s/Qi97fYbyoKDdsi3/preview)



Hier kun je de te installeren onderdelen kiezen. Het is echter prima om de standaard geselecteerde pakketten te installeren, dus klik gewoon op **Next** en kies daarna de installatiemap:

![](https://screensaver01.zap-hosting.com/index.php/s/fsMiKt9Zjas4Rme/preview)

In dit voorbeeld wordt FileZilla Server geïnstalleerd onder **C:\Program Files (x86)\FileZilla Server**. Je kunt ook een eigen pad kiezen. Na het kiezen van de map moet je aangeven hoe de FTP-server geïnstalleerd en gestart moet worden. Ook kun je de poort instellen en een beheerderswachtwoord opgeven.



![](https://screensaver01.zap-hosting.com/index.php/s/gCoGAcGnTtLQ2P6/preview)

Klik daarna weer op **Next** en in de volgende stap op **Install** om de installatie te starten. De beheerinterface van de FileZilla FTP-server opent nu. Klik op de knop **Connect to FileZilla FTP Server**.

Er verschijnt een venster met de velden Host, Port en Password. Laat de eerste twee velden staan zoals ze zijn en vul het beheerderswachtwoord in dat je hebt ingesteld. Klik daarna op **Ok** om verbinding te maken.



## Configuratie

### Gebruiker aanmaken

Om via FTP verbinding te maken met je server, moet je een gebruiker aanmaken.  
Klik bovenin op **Server** en daarna op **Configure**.

![](https://screensaver01.zap-hosting.com/index.php/s/D7KHSrkGZEErEcH/preview)

Onder het menu **Users** kun je een nieuwe gebruiker toevoegen door op **Add** te klikken:

![](https://screensaver01.zap-hosting.com/index.php/s/mtdi4oRmR4ZDzyq/preview)

In dit voorbeeld is de gebruikersnaam **YourUserName**. Je kunt natuurlijk je eigen gebruikersnaam kiezen.



### Wachtwoord en rechten

Nu de gebruiker is aangemaakt, moet je de toegang en rechten instellen. Activeer de gebruiker en stel het wachtwoord in onder **General** bij **Credentials**. We raden sterk aan om een wachtwoord te gebruiken voor de veiligheid. Kies **Require a password to log in** en stel je gewenste wachtwoord in.

![](https://screensaver01.zap-hosting.com/index.php/s/gwkkexqXgmfXc2q/preview)

Om de juiste rechten toe te kennen, moet je aangeven welke mappen de gebruiker mag benaderen door onder mount points op **Add** te klikken. Je moet een virtueel pad en een echt pad opgeven. In ons voorbeeld koppelen we de C-schijf aan \.

![](https://screensaver01.zap-hosting.com/index.php/s/LE46PteX7eAftjQ/preview)

Rechts vind je de optie **Permissions**, waarmee je de toegangsrechten voor het opgegeven pad instelt. Wil je dat de gebruiker bestanden kan lezen en aanpassen, kies dan voor **Read+Write**.

::: danger
Voor de veiligheid geef je een gebruiker alleen toegang tot specifieke mappen.
:::

Klik op **Apply** om je wijzigingen op te slaan.



## Windows Firewall Uitzonderingen

Om verbinding te kunnen maken met je FTP-server, moet je de FileZilla Server toestemming geven in de Windows firewall. Open hiervoor de firewall-instellingen via **Configuratiescherm\Systeem en beveiliging\Windows Defender Firewall** en klik op **Een app of functie toestaan via Windows Defender Firewall**.
Selecteer in het volgende venster de applicatie die je wilt toestaan:

![](https://screensaver01.zap-hosting.com/index.php/s/aorQ7Y8gQJPSE8e/preview)

In dit voorbeeld is het pad **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/wx7p5GykbQfx8B6/preview)

Klik daarna op **OK** om af te sluiten. Je FTP-server is nu bereikbaar.


## Conclusie

Gefeliciteerd, je hebt de FTP-server succesvol geïnstalleerd en ingesteld op je VPS! Heb je nog vragen of problemen? Ons supportteam staat elke dag voor je klaar om je te helpen!

<InlineVoucher />