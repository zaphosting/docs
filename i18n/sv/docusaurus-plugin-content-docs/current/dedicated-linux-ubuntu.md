---
id: dedicated-linux-ubuntu
title: "Dedikerad Server: Installation av Ubuntu 24.04"
description: "Lär dig hur du installerar och konfigurerar Ubuntu på din dedikerade server för optimal prestanda och stabilitet → Läs mer nu"
sidebar_label: Ubuntu 24.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Här går vi igenom steg för steg hur du installerar och konfigurerar Ubuntu-operativsystemet på din dedikerade server. Följ instruktionerna noggrant för att säkerställa att du får igång operativsystemet på rätt sätt och kan använda det optimalt.



## Förberedelser

För att installera och konfigurera ett operativsystem är det först viktigt att montera rätt ISO-fil för operativsystemet. Det finns flera sätt att göra detta på:

1. Montering via initial setup
2. Montering via iLO (Virtual Media)
3. Montering via iLO (Remote Console)

Om du inte är van vid att montera ISO-filer än, kolla gärna in våra guider för [Initial setup](dedicated-setup.md) eller [Egen ISO](dedicated-iso.md).



## Installation

När ISO-filen är monterad och laddad ska servern starta installationsprocessen. Språket du vill använda för OS:et väljs i början av installationen. Välj ett av de tillgängliga språken och bekräfta med `Enter`. 

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Nästa steg är att välja och ställa in rätt tangentbordslayout för språket. Välj den layout som passar dig bäst. 

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Därefter konfigureras nätverket. Servern är som standard inställd på DHCP. Standard nätverksadapter är `eno1`. Bekräfta standardinställningarna och fortsätt. 

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

En extra proxy kan konfigureras som ett valfritt steg, men det är inte nödvändigt. Om du inte behöver det, hoppa bara över detta steg. 

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Nu definieras Ubuntu Archive Mirror (nedladdningsserver för paket). Våra dedikerade servrar finns i Tyskland, så vi rekommenderar att du väljer den tyska spegelservern för bästa möjliga nedladdningshastighet.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

Nu kan du definiera partitionerna i lagringskonfigurationen. Du kan använda en stor partition eller dela upp den om du vill. Vill du använda hela SSD:n som en enda partition väljer du `Use an entire disk` och fortsätter.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

Installationsprogrammet skapar automatiskt volymerna och du kan fortsätta genom att välja `Done`.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Innan processen startar får du en varning om att all befintlig data kommer att raderas. Bekräfta detta med `Continue`. 

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Konfigurera ditt användarkonto som du vill, du kan även använda root-kontot i slutändan genom att ändra lösenordet.
Navigera mellan alternativen med tab eller piltangenter. När du är klar, välj `Done`.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)





Det rekommenderas att installera SSH. Vill du hantera servern via SSH, välj att installera och bekräfta.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

​	Ubuntu erbjuder några standard-snaps, vill du använda några av dem, bocka i de du gillar.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

För att slutföra processen måste ISO-filen matas ut så att den inte laddas om vid omstart. Starta om servern en gång för att avsluta installationen. 

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Konfiguration



### Byta lösenord för root-användaren

Du kan enkelt byta lösenord för root-användaren. Kör `sudo su` och ange ditt lösenord. Kör sedan `sudo passwd` för att ändra lösenordet. Skriv in det nya önskade lösenordet för root. Klart, nu kan du logga in som `root`.



## Avslutning

Grattis, du har nu installerat Ubuntu 24.04 på din dedikerade server! Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂