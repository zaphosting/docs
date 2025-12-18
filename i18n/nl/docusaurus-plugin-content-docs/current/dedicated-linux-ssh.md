---
id: dedicated-linux-ssh
title: "Dedicated Server: Eerste toegang via SSH"
description: "Ontdek populaire SSH-clients voor het beheren van Linux-servers zonder GUI en leer hoe je veilig verbinding maakt via SSH → Nu meer weten"
sidebar_label: Eerste toegang (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

![](https://screensaver01.zap-hosting.com/index.php/s/TYEHE38gNQoFjBx/download/ssh_connect.gif)

Linux-serverproducten worden standaard geleverd zonder grafische beheerinterface, daarom verloopt de verbinding en het beheer via een SSH-client (console). Er is een breed scala aan SSH-clients beschikbaar. Hieronder vind je een overzicht van bekende / vaak gebruikte SSH-clients. 



| SSH-Client | Ondersteunde besturingssystemen | Open-Source |                           Download                           |
| :--------: | :------------------------------: | :---------: | :----------------------------------------------------------: |
|   Putty    |        Windows, Linux             |     Ja     |               [Klik](https://www.putty.org/)                |
|   Kitty    |        Windows, Linux             |     Ja     |        [Klik](http://www.9bis.net/kitty/)                   |
| MobaXterm  |        Windows, Linux             |     Ja     |           [Klik](https://mobaxterm.mobatek.net/)            |
| SecureCRT  |     Windows, Linux, Mac           |     Nee    | [Klik](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt) |
| mRemoteNG  |           Windows                 |     Ja     |           [Klik](https://mremoteng.org/download)            |




## IP-adres & toegang

Hieronder wordt de verbinding met de Putty SSH-client uitgelegd. In het configuratievenster voer je het IP-adres van de server en de SSH-poort 22 in bij **hostname**. Daarna kan de verbinding worden gestart via de knop **Open**.



![](https://screensaver01.zap-hosting.com/index.php/s/Jp2Wn3s9kQG5t55/preview)



:::info
SSH-login via wachtwoord is standaard uitgeschakeld. Wil je inloggen met een wachtwoord, dan moet je deze optie eerst activeren onder **Toegang & Beveiliging**.
:::



![](https://screensaver01.zap-hosting.com/index.php/s/4fSRwzaq8QQLZ3o/preview)



:::info
Bij de eerste verbinding met de server verschijnt er een beveiligingsmelding van Putty, die je informeert dat er nog geen host key in het register is opgeslagen. Dit kun je bevestigen met **Yes** als je deze melding niet elke keer opnieuw wilt zien.
:::

 

Hiermee opent de SSH-console en wordt gevraagd om een **gebruikersnaam** en **wachtwoord**. De gebruikersnaam is "**root**". Het wachtwoord vind je in de webinterface onder "**Toegang & Beveiliging**" of je kunt het daar instellen.



![](https://screensaver01.zap-hosting.com/index.php/s/pG4dTmCGFyzK3dY/preview)





## Beheer via SSH

Voor optimaal gebruik van de SSH-client is het essentieel om de basiscommando’s te kennen. Hieronder vind je een overzicht met alle relevante commando’s en hun betekenis:


### Accountbeheer

| Commando |                Beschrijving                |            Syntax            |
| :------: | :----------------------------------------: | :--------------------------: |
| useradd  |          Nieuwe gebruiker aanmaken          | useradd [opties] [gebruikersnaam] |
| usermod  |      Bestaande gebruiker aanpassen       | usermod [opties] [gebruikersnaam] |
| userdel  |        Bestaande gebruiker verwijderen        | userdel [opties] [gebruikersnaam] |
| passwd   | Wachtwoord wijzigen van een gebruiker |      passwd [opties]       |



### Systeembeheer

| Commando |                         Beschrijving                         | Syntax                                       |
| :------: | :----------------------------------------------------------: | -------------------------------------------- |
|   top    | Overzicht van belasting, processen en andere info (vergelijkbaar met Taakbeheer in Windows)  | top                                          |
|   df     |            Weergave van opslaggebruik (partities)            | df -h                                        |
|   du     |          Weergave van opslaggebruik (mappen)           | du -sh *                                     |
|  free    | Geheugengebruik van het systeem, verdeeld in RAM en SWAP | free                                         |
|  kill    |  Beëindigt het proces met de opgegeven proces-ID (PID)   | kill [ID]                                    |
| killall  |        Beëindigt alle processen met de opgegeven naam        | killall [naam]                               |
|   mv     |       Verplaatst bestanden of mappen naar een andere locatie        | mv bronpad nieuwPad                        |
|  mkdir   |                    Nieuwe map aanmaken                    | mkdir mapnaam                          |
| service  |    Start, stop, herstart service en controleer status     | service dienstnaam start/stop/restart/status |
| reboot   |                      Herstart het systeem                        | reboot                                       |



### Bestandsbeheer

| Commando | Beschrijving | Syntax
| -------- | ------------------------------------------ | ---------------------------------------- |
| ls       | Toont bestanden en mappen in de directory | ls |
| cd       | Verander van directory | cd [OPTIE] DIRECTORY |
| cp       | Kopieer bestanden of mappen | cp [OPTIES] BRON BESTEMMING |
| mv       | Verplaats bestand of map | mv [OPTIE] BRON BESTEMMING |
| mkdir    | Maak nieuwe map aan | mkdir [OPTIE] MAPNAAM |
| rmdir    | Verwijder bestaande map | rmdir [OPTIE] MAPNAAM |
| find     | Doorzoek het bestandssysteem | find [OPTIES] [DIRECTORY] [ACTIES] |
| grep     | Zoek in tekstbestanden | grep [OPTIES] ZOEKPATROON [BESTAND(EN)] |



### Netwerkbeheer

| Commando | Beschrijving | Syntax
| -------- | ------------------------------------------------- | ----------------------------------------- |
| ip       | Opvragen en configureren van netwerkinterfaces | ip [OPTIES] OBJECT [COMMANDO [ARGUMENTEN]] |
| netstat  | Status van netwerkinterfaces opvragen | netstat [OPTIES] |
| nslookup | DNS-informatie opvragen | nslookup |
| ping     | Netwerkverbinding testen | ping [OPTIES] BESTEMMING |