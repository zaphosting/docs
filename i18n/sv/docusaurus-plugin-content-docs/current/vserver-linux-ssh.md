---
id: vserver-linux-ssh
title: "VPS: Första åtkomst med SSH"
description: "Utforska populära SSH-klienter för att hantera Linux-servrar via konsol och lär dig hur du ansluter säkert med Putty → Läs mer nu"
sidebar_label: Första åtkomst (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

![](https://screensaver01.zap-hosting.com/index.php/s/TYEHE38gNQoFjBx/download/ssh_connect.gif)

Linux-serverprodukter har som standard ingen grafisk administrationsgränssnitt, därför sker anslutning och hantering via en SSH-klient (konsol). Det finns ett brett utbud av SSH-klienter. Nedan hittar du en översikt över kända / ofta använda SSH-klienter. 



| SSH-klient | Stödda operativsystem | Open-Source |                           Ladda ner                           |
| :--------: | :--------------------------: | :---------: | :----------------------------------------------------------: |
|   Putty    |        Windows, Linux        |     Ja      |               [Klicka](https://www.putty.org/)                |
|   Kitty    |        Windows, Linux        |     Ja      |        [Klicka](http://www.9bis.net/kitty/)                   |
| MobaXterm  |        Windows, Linux        |     Ja      |           [Klicka](https://mobaxterm.mobatek.net/)            |
| SecureCRT  |     Windows, Linux, Mac      |    Nej     | [Klicka](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt) |
| mRemoteNG  |           Windows            |     Ja      |           [Klicka](https://mremoteng.org/download)            |


<InlineVoucher />

## IP-adress & åtkomst

Nedan förklaras anslutningen med Putty SSH-klienten. I konfigurationsfönstret anges serverns IP-adress och SSH-port 22 som **värdnamn**. Därefter kan anslutningen startas via **Open**-knappen.



![](https://screensaver01.zap-hosting.com/index.php/s/wyfbo8dENbX3T9E/preview)



:::info
SSH-inloggning med lösenord är som standard avstängt. Vill du logga in med lösenord måste du först aktivera alternativet under **Åtkomst & Säkerhet**.
:::



![](https://screensaver01.zap-hosting.com/index.php/s/N7ZL8MZfe55T7zR/preview)



:::info
När du ansluter till servern för första gången visas ett säkerhetsmeddelande från Putty som informerar om att ingen host-nyckel har sparats i registret än. Detta kan bekräftas med **Yes** om du inte vill få detta meddelande varje gång.
:::

 

Då öppnas SSH-konsolen och du uppmanas att ange **användarnamn** och **lösenord**. Användarnamnet är "**root**". Lösenordet hittar du i webbgränssnittet under "**Åtkomst & Säkerhet**" eller kan sättas där.



![](https://screensaver01.zap-hosting.com/index.php/s/X8ykHmkYFa826aM/preview)





## Administration via SSH

För att använda SSH-klienten optimalt är det viktigt att känna till grundläggande kommandon. Nedan hittar du en översikt med alla relevanta kommandon och deras betydelse:


### Användarhantering

| Kommando  |                Beskrivning                |            Syntax            |
| :-----: | :----------------------------------------: | :--------------------------: |
| useradd |          Skapa en ny användare          | useradd [options] [options] |
| usermod |      Ändra befintlig användare       | usermod [options] [options] |
| userdel |        Ta bort befintlig användare        | userdel [options] [options] |
| passwd  | Byt lösenord för en befintlig användare |      passwd [options]       |



### Systemhantering

| Kommando  |                         Beskrivning                         | Syntax                                       |
| :-----: | :----------------------------------------------------------: | -------------------------------------------- |
|   top   | Översikt över belastning, processer och annan info (likt Windows Aktivitetshanterare)  | top                                          |
|   df    |            Visa användning av lagringsenheter (partitioner)            | df -h                                        |
|   du    |          Visa lagringsanvändning (katalog)           | du -sh *                                     |
|  free   | Minnesanvändning i systemet. Uppdelat i RAM och SWAP. | free                                         |
|  kill   |  Avslutar processen med angivet process-ID (PID)   | kill [ID]                                    |
| killall |        Avslutar alla processer med angivet namn        | killall [name]                               |
|   mv    |       Flytta filer eller katalog till annan plats        | mv sourcepath newPath                        |
|  mkdir  |                    Skapa en ny katalog                    | mkdir katalognamn                          |
| service |    Starta, stoppa, starta om tjänst och kolla status     | service TjänstNamn start/stop/restart/status |
| reboot  |                      Starta om systemet                        | reboot                                       |



### Filhantering

| Kommando | Beskrivning | Syntax
| ------ | ------------------------------------------ | ---------------------------------------- |
| ls | Visa filer och mappar i katalog | ls |
| cd | byt katalog | cd [OPTION] KATALOG |
| cp | Kopiera filer eller kataloger | cp [OPTIONS] KÄLLA DESTINATION |
| mv | flytta fil eller katalog | mv [OPTION] KÄLLA DESTINATION |
| mkdir | Skapa ny katalog | mkdir [OPTION] KATALOGLNAMN |
| rmdir | Ta bort befintlig katalog | rmdir [OPTION] KATALOG
| find | sök i filsystemet | find [OPTIONS] [KATALOG] [ÅTGÄRDER] |
| grep | Sök i textfiler | grep [OPTIONS] SÖKMÖNSTER [FIL(ER)] |



### Nätverkshantering

| Kommando | Beskrivning | Syntax
| -------- | ------------------------------------------------- | ----------------------------------------- |
| ip | Fråga och konfigurera nätverksgränssnitt | ip [OPTIONS] OBJEKT [KOMMANDO [ARGUMENT]] |
| netstat | Visa status för nätverksgränssnitt | netstat [OPTIONS] |
| nslookup | Fråga DNS-information | nslookup |
| ping | Kontrollera nätverksanslutning | ping [OPTIONS] DESTINATION


<InlineVoucher />