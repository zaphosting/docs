---
id: fivem-txadmin-import-server-base
title: "FiveM: txAdmin Importera serverbas"
description: "Upptäck hur du importerar en färdig serverbas till din egen server med txAdmin för snabb setup och smidig integration → Läs mer nu"
sidebar_label: Importera serverbas
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduktion

Har du hittat en färdig server på nätet och vill ladda upp den till din egen server? Inga problem! Med txAdmin kan du importera en färdig server snabbt och enkelt – förutsatt att du tar hand om några viktiga krav och detaljer. I den här guiden visar vi hur du kan importera en serverbas.



<InlineVoucher />

## Förberedelser

För att kunna starta installationsprocessen behöver du redan ha laddat ner en färdig serverbas från internet till din dator och filen ska vara uppackad. 

Innehållet i en serverbas kan skilja sig beroende på serverns typ och innehåll och filerna kan därför se olika ut. Men din serverbas bör generellt innehålla följande data: 

- **Serverkonfiguration - `server.cfg` (obligatorisk):** Serverkonfigurationsfilen innehåller alla relevanta kommandon/inställningar för din server.
- **Resource-mapp - `resource` (obligatorisk):** Resource-mappen innehåller alla färdiga resurser som används i den medföljande serverbasen.
- **SQL-fil - `filenameXY.sql` (valfri):** Denna fil innehåller den färdiga databasstrukturen som krävs för användning och kommunikation mellan resurserna och databasen (om sådan används). 

**Data (`server.cfg`, `resources`)** från din nedladdade serverbas måste laddas upp till din gameserver. **SQL-filen** måste importeras till den ZAP-databas vi tillhandahåller. 

### Serverfiler
Uppladdningen av din Serverbas-data sker via FTP. Om du inte är helt bekant med hur det fungerar, kolla in följande guide: [FTP-access](gameserver-ftpaccess.md)

Anslut till din gameserver via FTP och navigera till mappen `fivem`. Skapa en mapp för din serverbas där, om den inte redan finns. I detta exempel används namnet **ExampleServer** för den färdiga serverbasen.

![img](https://screensaver01.zap-hosting.com/index.php/s/HzDrADKgK3rqfKm/download)



När mappen är skapad ska Serverbasens data nu laddas upp. Navigera till din nyss skapade mapp och ladda upp resource-mappen och din serverkonfig. Resultatet bör se ut så här:

![img](https://screensaver01.zap-hosting.com/index.php/s/xyAZyt8W5XcxGaF/preview)

 

### Databas

Om din Serverbas även kräver användning av en databas måste den medföljande SQL-filen importeras till din ZAP-databas. Om du inte är helt säker på hur det går till, kolla in följande guide: [Importera SQL-fil](fivem-sql-file-import.md) 

Importera din SQL-fil till databasen enligt guiden. Se dock först till att du har justerat innehållet i SQL-filen och angett rätt namn på din ZAP-databas. Byt ut det ursprungliga värdet i kommandot Use '...' mot namnet på din ZAP-databas.

:::warning Dubbelkolla innehållet i SQL-filen innan import
Se till att innehållet i SQL-filen är justerat och helt korrekt innan du importerar. Annars får du följande felmeddelande: 

`Access denied for user ‘zapXXXXX-X’@’%’ to database ’originalDatabaseName’` 
:::



## txAdmin setup

Förberedelserna för att sätta upp servern är nu klara. Den fortsatta setupen, installationen och konfigurationen av servern sker nu via installationsprocessen i txAdmin-gränssnittet. Följande guide förklarar i detalj hur du kommer åt txAdmin och exakt hur setupen går till: [txAdmin Setup](fivem-txadmin-setup.md)



### Välkommen

Välj ett namn som du vill använda för ditt projekt. Detta namn är inte till för serverlistan utan används endast internt i txAdmin-gränssnittet och för Chat/Discord-meddelanden. Fortsätt till steget Deployment Type. 

![img](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)

### Deployment Type

Under Deployment Type behöver du nu välja hur du vill sätta upp din server. Du har följande alternativ: **Popular Recipes**, **Existing Server Data**, **Remote URL Template**, och **Custom Template**. För ditt fall ska du välja **Existing Server Data**.

![img](https://screensaver01.zap-hosting.com/index.php/s/oMSBwf6jmHMwtYn/preview)

### Välja sökvägar

Nästa steg är att ange sökvägen där din serverbas ligger. Mappstrukturen börjar så här och måste kompletteras med namnet på din serverbas: `/home/zapXXXXX/gXXXXXXXX/fivem/ExampleServer`.

Du kan enkelt kopiera och klistra in den angivna mappstrukturen som i skärmdumpen och sedan lägga till namnet på din tidigare skapade Serverbas-mapp. Resultatet bör se ut så här:

![img](https://screensaver01.zap-hosting.com/index.php/s/eDPeDzSqfMbk7Tg/download)



Klicka på **Next**. Serverkonfigurationsfilen `server.cfg` bör nu kännas igen. Bekräfta detta och slutför den vanliga setupen via **Save & Start-knappen**. 



## Konfiguration

Det är högst troligt att servern inte kan starta eftersom inte all nödvändig info är korrekt. Detta beror bland annat på felaktig info om serverns IP-adress och port, saknade databasuppgifter för en lyckad anslutning till databasen, samt en saknad licensnyckel. Därför krävs slutjusteringar i serverkonfigurationen för att bli klar. 

### Serverdetaljer

Som standard är IP-adress och port antingen inte angivna eller felaktiga. Se till att posterna för endpoints finns och är korrekta i din serverkonfigurationsfil. Syntaxen ser ut så här:

```
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"
```

Byt ut IP-adressen (0.0.0.0) och porten (30120) mot serverinformationen från din server. Du hittar dessa i din gameservers administration. 

:::warning Felaktig IP-adress/port
Om den info du angett inte är korrekt känner du igen det på följande felmeddelande: 

```
Line XX: [ZAP-Hosting] the 'endpoint_add_tcp' interface MUST be 'XXX.XXX.XXX.XXX'
Line XX: [ZAP-Hosting] the 'endpoint_add_udp' interface MUST be 'XXX.XXX.XXX.XXX'
```
:::


### Databas

För att din server ska kunna ansluta till databasen måste en MySQL-anslutningssträng med databasinfo anges i serverkonfigurationsfilen `server.cfg`. Den kan se ut så här som standard: 

```sql
set mysql_connection_string "mysql://username:password@dataBaseHostname/databaseName?charset=utf8mb4"
```

Om en sådan MySQL-anslutningssträng redan finns i din serverkonfiguration eller inte beror på vilken serverbas du använder. Om den inte finns eller saknar nödvändig databasinfo måste du lägga till och justera den. Du kan se databasuppgifterna i gameserver-administrationen under Databases. Resultatet kan till exempel se ut så här: 

```sql
set mysql_connection_string "mysql://zapXXXXXXX-X:yourDatabasePassword@mysql-mariadb-XX-XXX.zap-hosting.com/zapXXXXXX-X?charset=utf8mb4"
```

:::tip Keep it simple
Vill du slippa detta steg kan du även klicka på **[Reconfigure MySQL Connection String](https://screensaver01.zap-hosting.com/index.php/s/zZSmQex6ropFK3X/preview)**-knappen i gameserver-administrationen under inställningarna längst ner på sidan. 
:::


### Onesync

Om `server.cfg`-filen i din Serverbas innehåller någon info om **Onesync** måste detta tas bort. Istället hanteras det via inställningarna i txAdmin-gränssnittet. Vill du aktivera det hittar du alternativet under **Settings ⟶ FXServer**. 

![img](https://screensaver01.zap-hosting.com/index.php/s/Y4LKM8ZRn4ZSFzp/download)

### Licensnyckel 

För att driva din server behöver du en egen licensnyckel från CFX. Du kan läsa hur du skapar din egen licensnyckel i följande guide: [Egen Licensnyckel](fivem-licensekey.md)

Lägg till licensnyckeln i serverkonfigurationsfilen: 

```
sv_licenseKey "yourLicenseKeyGoesHere"
```



## Avslutning

Grattis! När du har laddat upp filerna, slutfört txAdmin-setupen och gjort de nödvändiga ändringarna i serverkonfigurationen kan du nu starta och spela på din server med din serverbas.

<InlineVoucher />