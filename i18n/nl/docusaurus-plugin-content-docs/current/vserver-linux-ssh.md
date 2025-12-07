---
id: vserver-linux-ssh
title: "VPS: Eerste toegang via SSH"
description: "Ontdek populaire SSH-clients voor het beheren van Linux-servers via de console en leer hoe je veilig verbinding maakt met Putty → Nu meer weten"
sidebar_label: Eerste toegang (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

![](https://screensaver01.zap-hosting.com/index.php/s/TYEHE38gNQoFjBx/download/ssh_connect.gif)

Linux-serverproducten hebben standaard geen grafische beheerinterface, daarom verloopt de verbinding en het beheer via een SSH-client (console). Er is een breed scala aan SSH-clients beschikbaar. Hieronder vind je een overzicht van bekende / vaak gebruikte SSH-clients.

| SSH-Client | Ondersteunde besturingssystemen | Open-Source |                           Download                           |
| :--------: | :------------------------------: | :---------: | :--------------------------------------------------------: |
|   Putty    |        Windows, Linux             |     Ja     |               [Klik](https://www.putty.org/)                |
|   Kitty    |        Windows, Linux             |     Ja     |        [Klik](http://www.9bis.net/kitty/)                   |
| MobaXterm  |        Windows, Linux             |     Ja     |           [Klik](https://mobaxterm.mobatek.net/)            |
| SecureCRT  |     Windows, Linux, Mac           |     Nee    | [Klik](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt) |
| mRemoteNG  |           Windows                 |     Ja     |           [Klik](https://mremoteng.org/download)            |


<InlineVoucher />

## IP-adres & toegang

Hieronder wordt uitgelegd hoe je verbinding maakt met de Putty SSH-client. In het configuratievenster voer je het IP-adres van de server en de SSH-poort 22 in bij **hostname**. Daarna kun je de verbinding starten via de knop **Open**.

![](https://screensaver01.zap-hosting.com/index.php/s/wyfbo8dENbX3T9E/preview)

:::info
SSH-login via wachtwoord is standaard uitgeschakeld. Wil je inloggen met een wachtwoord, dan moet je deze optie eerst activeren onder **Toegang & Beveiliging**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/N7ZL8MZfe55T7zR/preview)

:::info
Bij de eerste verbinding met de server verschijnt er een beveiligingsmelding van Putty, die aangeeft dat er nog geen host key in het register is opgeslagen. Bevestig dit met **Yes** als je deze melding niet elke keer wilt zien.
:::

Dit opent de SSH-console en vraagt om een **gebruikersnaam** en **wachtwoord**. De gebruikersnaam is "**root**". Het wachtwoord vind je in de webinterface onder "**Toegang & Beveiliging**" of kun je daar instellen.

![](https://screensaver01.zap-hosting.com/index.php/s/X8ykHmkYFa826aM/preview)

## Beheer via SSH

Voor optimaal gebruik van de SSH-client is het belangrijk om de basiscommando’s te kennen. Hieronder vind je een overzicht met alle relevante commando’s en hun betekenis:

### Accountbeheer

| Commando |                Beschrijving                |            Syntax            |
| :------: | :----------------------------------------: | :--------------------------: |
| useradd  |          Nieuwe gebruiker aanmaken          | useradd [opties] [gebruikersnaam] |
| usermod  |      Bestaande gebruiker aanpassen       | usermod [opties] [gebruikersnaam] |
| userdel  |        Bestaande gebruiker verwijderen        | userdel [opties] [gebruikersnaam] |
| passwd   | Wachtwoord van een gebruiker wijzigen |      passwd [opties] [gebruikersnaam]       |

### Systeembeheer

| Commando |                         Beschrijving                         | Syntax                                       |
| :------: | :----------------------------------------------------------: | -------------------------------------------- |
|   top    | Overzicht van belasting, processen en andere info (zoals Taakbeheer in Windows)  | top                                          |
|   df     |            Weergave van schijfruimtegebruik (partities)            | df -h                                        |
|   du     |          Weergave van schijfruimtegebruik (map)           | du -sh *                                     |
|  free    | Geheugengebruik van het systeem, verdeeld in RAM en SWAP   | free                                         |
|  kill    |  Beëindigt proces met opgegeven proces-ID (PID)   | kill [ID]                                    |
| killall  |        Beëindigt alle processen met opgegeven naam        | killall [naam]                               |
|   mv     |       Verplaatst bestanden of mappen naar een andere locatie        | mv bronpad nieuwPad                        |
|  mkdir   |                    Nieuwe map aanmaken                    | mkdir mapnaam                          |
| service  |    Start, stop, herstart service en controleer status     | service dienstnaam start/stop/restart/status |
| reboot   |                      Herstart het systeem                        | reboot                                       |

### Bestandsbeheer

| Commando | Beschrijving | Syntax |
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

| Commando | Beschrijving | Syntax |
| -------- | ------------------------------------------------- | ----------------------------------------- |
| ip       | Opvragen en configureren van netwerkinterfaces | ip [OPTIES] OBJECT [COMMANDO [ARGUMENTEN]] |
| netstat  | Status van netwerkinterfaces opvragen | netstat [OPTIES] |
| nslookup | DNS-informatie opvragen | nslookup |
| ping     | Netwerkverbinding testen | ping [OPTIES] BESTEMMING |

<InlineVoucher />