---
id: gameserver-database-external-access
title: 'Gameserver: Extern databasåtkomst'
description: "Upptäck hur du hanterar ZAP-Hostings MySQL-databaser för gameservers med verktyg som Navicat eller HeidiSQL → Lär dig mer nu"
sidebar_label: Extern databasåtkomst
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

ZAP-Hosting erbjuder MySQL-databaser inkluderade för gameserver-produkterna. Dessa kan hanteras antingen internt via phpMyAdmin eller externt via MySQL-administrationsverktyg som Navicat eller HeidiSQL.

Användaruppgifterna för att komma åt databasen behövs för detta. De hittar du i gameserver-administrationen under databaser. För detta behöver du information om **server/IP**, **databas**, **användare**, **lösenord** och standardporten **3306**:

![](https://screensaver01.zap-hosting.com/index.php/s/GLG56HQ737rNC7R/preview)

<InlineVoucher />

## Förberedelse

Först och främst behöver vi en mjukvara, i det här exemplet visar vi [Navicat](https://www.chip.de/downloads/Navicat-Lite_70358373.html) eller [HeidiSQL](https://www.heidisql.com/download.php). Efter nedladdning kör du installationsfilen och följer installationsguiden. När det är klart kan programmet startas och anslutningen till databasen konfigureras.

## HeidiSQL

För att skapa anslutningen i HeidiSQL skapar vi en ny anslutning med "New".

![](https://screensaver01.zap-hosting.com/index.php/s/CgwFCeHErLAokHo/preview)

Under Hostname / IP fyller du i namnet på din databas, i vårt exempel "mysql-mariadb-5-101.zap-hosting.com". Användarnamn och lösenord hämtas också från dina uppgifter, porten lämnas på 3306.

Sen klickar du bara på "Open".

## Navicat

För att skapa anslutningen i Navicat skapar vi en ny anslutning. Under **Connection** väljer vi **MySQL**. Därefter öppnas ett nytt popup-fönster där databasinformationen ska fyllas i.

![](https://screensaver01.zap-hosting.com/index.php/s/rFBDYidqnBc4TZB/preview)

**Connection Name** används bara för att ge en översikt över databaserna och kan därför väljas fritt. All annan info hämtas från gränssnittet som beskrivet ovan. Klicka sedan på **OK** och setupen är klar. Anslutningen hittar du sedan till vänster i databasöversikten. Dubbelklicka på din databas eller högerklicka och välj "Open connection":

![](https://screensaver01.zap-hosting.com/index.php/s/Gy7jjBDHiR5n5gn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/WyqzoLaEP6yQn85/preview)

Därefter öppnas databasen med alla befintliga databastabeller. Här kan du nu modifiera eller hantera din databas på samma sätt som i phpMyAdmin, både via klick och med SQL-kommandon.
![](https://screensaver01.zap-hosting.com/index.php/s/FxDrm2K3f7YwLqS/preview)

## Slutsats

Du har nu lyckats skapa en anslutning till din databas och kan börja hantera den. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />