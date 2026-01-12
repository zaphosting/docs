---
id: vserver-windows-installmysql
title: "VPS: Installera MySQL"
description: "Lär dig hur du sätter upp och säkrar din egen MySQL-databasserver på en Windows VPS för pålitlig databehandling → Läs mer nu"
sidebar_label: Installera MySQL
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduktion

En MySQL-server behövs för olika applikationer och kan innehålla viktig data, till exempel för en spelserver eller en webbplats. Här förklarar vi hur du sätter upp din egen MySQL-databasserver på din Windows VPS.
<InlineVoucher />

## Installation

Börja med att ansluta via Remote Desktop till din server och ladda ner den senaste versionen av MariaDB, som används som databasserver: [MariaDB Download](https://mariadb.org/download/?t=mariadb). Packa upp den nedladdade arkivet med WinRAR eller 7Zip och starta installationsfilen med ett dubbelklick.

Följ sedan installationsprocessen genom att klicka på **Next** tills du blir ombedd att skriva in root-lösenordet:

![](https://screensaver01.zap-hosting.com/index.php/s/gMrr8aHEM2eAG22/preview)

Här kan du definiera huvudlösenordet för åtkomst till din databasserver. Se till att använda ett säkert lösenord som ingen annan känner till!

:::info
VIKTIGT! Om du vill komma åt databasen externt via Navicat, HeidiSQL eller något annat verktyg måste du aktivera alternativet **Enable access from remote machines for root user**! Av säkerhetsskäl rekommenderas detta generellt inte.
:::

Klicka sedan på **Next** tills du når slutet av installationen, där du klickar på **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/qYT3rrDrcXRb4gc/preview)

Din databasserver är nu online och redo att användas!

## Konfigurera extern åtkomst

Om du aktiverade "Enable access from remote machines for root user" under installationen måste du även öppna MySQL-porten **3306** i Windows-brandväggen. Öppna brandväggen och skapa en ny regel för detta.
Här hittar du guiden för hur du vidarebefordrar portar i brandväggen:
[Port Forwarding (Firewall)](vserver-windows-port.md)

Nu kan du nå din MySQL-server externt!



## Sammanfattning

Grattis, du har nu installerat och konfigurerat MySQL-servern på din VPS! Har du fler frågor eller problem är du alltid välkommen att kontakta vår support, som finns tillgänglig varje dag!

<InlineVoucher />