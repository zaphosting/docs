---
id: dedicated-windows-installmysql
title: "Dedikerad Server: Installation av MySQL"
description: "Lär dig hur du sätter upp och säkrar din egen MySQL-databasserver på en Windows Dedikerad Server för pålitlig databehandling → Läs mer nu"
sidebar_label: Installera MySQL
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En MySQL-server behövs för olika applikationer och kan innehålla viktig data, till exempel för en spelserver eller en webbplats. Här förklarar vi hur du sätter upp din egen MySQL-databasserver på din Windows Dedikerade Server.



## Installation

Börja med att ansluta via Remote Desktop till din server och ladda ner den senaste versionen av MariaDB, som används för databasservern: [MariaDB Download](https://mariadb.org/download/?t=mariadb). 

Packa upp den nedladdade arkivet med WinRAR eller 7Zip och starta installationsfilen med ett dubbelklick: 

![](https://screensaver01.zap-hosting.com/index.php/s/53N4nAFHyrH4y3Q/preview)

Följ sedan installationsprocessen genom att klicka på **Next** tills du blir ombedd att skriva in root-lösenordet:

![](https://screensaver01.zap-hosting.com/index.php/s/eaPM9S8DFkyL2cK/preview)

Där kan du definiera huvudlösenordet för åtkomst till din databasserver. Se till att använda ett säkert lösenord som ingen annan känner till!

:::info
VIKTIGT! Om du vill komma åt databasen externt via Navicat, HeidiSQL eller något annat verktyg måste du aktivera alternativet **Enable access from remote machines for root user**! Av säkerhetsskäl rekommenderas detta generellt inte.
:::

Klicka sedan på **Next** tills du når slutet av installationen, där du måste klicka på **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/btHcmpYicgiraY4/preview)

Din databasserver är nu online och redo att användas!

## Konfigurering av extern åtkomst

Om du aktiverade "Enable access from remote machines for root user" under installationen måste du även öppna MySQL-porten **3306** i Windows-brandväggen. Öppna brandväggen och skapa en ny regel för detta.
Du hittar guiden för hur du vidarebefordrar portar i brandväggen här:
[Port Forwarding (Firewall)](vserver-windows-port.md)

Nu kan du nå din MySQL-server externt!



## Avslutning

Grattis, du har nu installerat MySQL-servern framgångsrikt. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂