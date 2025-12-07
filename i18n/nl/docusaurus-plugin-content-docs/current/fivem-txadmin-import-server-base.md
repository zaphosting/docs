---
id: fivem-txadmin-import-server-base
title: "FiveM: txAdmin Server Base importeren"
description: "Ontdek hoe je een kant-en-klare server base importeert naar je eigen server met txAdmin voor een snelle setup en naadloze integratie → Leer het nu"
sidebar_label: Server base importeren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introductie

Heb je een kant-en-klare server gevonden op het internet en wil je die uploaden naar je eigen server? Geen probleem! Met txAdmin kun je een kant-en-klare server snel en makkelijk importeren – mits je een paar belangrijke eisen en details in de gaten houdt. In deze gids laten we zien hoe je een server base importeert.



<InlineVoucher />

## Voorbereiding

Om te beginnen met de setup is het belangrijk dat je al een kant-en-klare server base van het internet hebt gedownload naar je computer en dat het bestand al uitgepakt is.

De inhoud van een server base kan verschillen afhankelijk van het type en de inhoud van de server, en de bestanden kunnen er dus ook anders uitzien. Over het algemeen zou je server base echter de volgende data moeten bevatten:

- **Serverconfiguratie - `server.cfg` (verplicht):** Het serverconfiguratiebestand bevat alle relevante commando’s en instellingen voor je server.
- **Resource map - `resource` (verplicht):** De resource map bevat alle kant-en-klare resources die in de server base gebruikt worden.
- **SQL bestand - `filenameXY.sql` (optioneel):** Dit bestand bevat de kant-en-klare database-structuur die nodig is voor gebruik en communicatie tussen de resources en de database (indien gebruikt).

De **data (`server.cfg`, `resources`)** van je gedownloade server base moet je uploaden naar je game server. Het **SQL bestand** moet geïmporteerd worden in de door ons geleverde ZAP database.

### Serverbestanden
Het uploaden van je Server Base data gebeurt via FTP. Als je nog niet precies weet hoe dat werkt, check dan deze gids: [FTP toegang](gameserver-ftpaccess.md)

Verbind met je game server via FTP en navigeer naar de `fivem` map. Maak daar een map aan voor je server base, als die er nog niet is. In dit voorbeeld gebruiken we de naam **ExampleServer** voor de server base.

![img](https://screensaver01.zap-hosting.com/index.php/s/HzDrADKgK3rqfKm/download)



Als de map is aangemaakt, moet je nu de Server Base data uploaden. Ga naar je nieuw aangemaakte map en upload de resource map en je serverconfiguratie. Het resultaat zou er zo uit moeten zien:

![img](https://screensaver01.zap-hosting.com/index.php/s/xyAZyt8W5XcxGaF/preview)

 

### Database

Als je Server Base ook een database nodig heeft, moet het meegeleverde SQL bestand geïmporteerd worden in je ZAP database. Als je nog niet weet hoe dat werkt, check dan deze gids: [SQL bestand importeren](fivem-sql-file-import.md)

Importeer je SQL bestand in je database zoals beschreven in de gids. Zorg er wel eerst voor dat je de inhoud van het SQL bestand hebt aangepast en de juiste naam van je ZAP database hebt ingevuld. Vervang daarvoor de originele waarde in het Use '...' commando met de naam van jouw ZAP database.

:::warning Check de inhoud van het SQL bestand goed voor import
Zorg ervoor dat de inhoud van het SQL bestand is aangepast en helemaal klopt voordat je het importeert. Anders krijg je de volgende foutmelding:

`Access denied for user ‘zapXXXXX-X’@’%’ to database ’originalDatabaseName’`
:::



## txAdmin setup

De voorbereiding voor het opzetten van de server is nu klaar. De verdere setup, installatie en configuratie van de server gebeurt via het setupproces in de txAdmin interface. De volgende gids legt precies uit hoe je txAdmin opent en hoe de setup werkt: [txAdmin Setup](fivem-txadmin-setup.md)



### Welkom

Bedenk een naam die je voor je project wilt gebruiken. Deze naam is niet bedoeld voor de serverlijst, maar alleen voor gebruik binnen de txAdmin interface en voor Chat/Discord berichten. Ga door naar de stap Deployment Type.

![img](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)

### Deployment Type

Bij Deployment Type kies je nu hoe je je server wilt opzetten. Je hebt de volgende opties: **Popular Recipes**, **Existing Server Data**, **Remote URL Template** en **Custom Template**. Voor jouw situatie kies je **Existing Server Data**.

![img](https://screensaver01.zap-hosting.com/index.php/s/oMSBwf6jmHMwtYn/preview)

### Paden selecteren

Vervolgens moet je het pad opgeven waar je server base staat. De mappenstructuur begint zo en moet worden aangevuld met de naam van je server base: `/home/zapXXXXX/gXXXXXXXX/fivem/ExampleServer`.

Je kunt de aangegeven mappenstructuur gewoon kopiëren en plakken zoals in de screenshot en dan de naam van je eerder aangemaakte Server Base map toevoegen. Het resultaat zou er zo uit moeten zien:

![img](https://screensaver01.zap-hosting.com/index.php/s/eDPeDzSqfMbk7Tg/download)



Klik op **Next**. Het serverconfiguratiebestand `server.cfg` zou nu herkend moeten worden. Bevestig dit en rond de setup af via de **Save & Start knop**.



## Configuratie

De kans is groot dat de server niet meteen kan starten omdat niet alle benodigde info klopt. Dit komt onder andere door verkeerde IP-adres en poort info, ontbrekende databasegegevens voor een succesvolle verbinding met de database, en een ontbrekende license key. Daarom moet je de serverconfiguratie nog even finetunen om alles werkend te krijgen.

### Servergegevens

Standaard zijn de IP-adres en poortgegevens vaak niet ingevuld of incorrect. Zorg dat de entries voor de endpoints aanwezig en correct zijn in je serverconfiguratiebestand. De syntax is als volgt:

```
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"
```

Vervang het IP-adres (0.0.0.0) en de poort (30120) met de servergegevens van jouw server. Die vind je in de game server administratie van je server.

:::warning Verkeerd IP-adres/poort
Als de info die je hebt ingevuld niet klopt, herken je dat aan de volgende foutmelding:

```
Line XX: [ZAP-Hosting] the 'endpoint_add_tcp' interface MUST be 'XXX.XXX.XXX.XXX'
Line XX: [ZAP-Hosting] the 'endpoint_add_udp' interface MUST be 'XXX.XXX.XXX.XXX'
```
:::


### Database

Om verbinding te maken met de database moet er in het serverconfiguratiebestand `server.cfg` een MySQL connectiestring met de databasegegevens staan. Die ziet er standaard zo uit:

```sql
set mysql_connection_string "mysql://username:password@dataBaseHostname/databaseName?charset=utf8mb4"
```

Of zo’n MySQL connectiestring al in je serverconfiguratie staat, hangt af van de server base die je gebruikt. Staat die er niet in of ontbreken de juiste databasegegevens, dan moet je die toevoegen en aanpassen. Je vindt de databasegegevens in de game server administratie onder Databases. Het resultaat kan er bijvoorbeeld zo uitzien:

```sql
set mysql_connection_string "mysql://zapXXXXXXX-X:yourDatabasePassword@mysql-mariadb-XX-XXX.zap-hosting.com/zapXXXXXX-X?charset=utf8mb4"
```

:::tip Keep it simpel
Wil je jezelf dit stappenplan besparen? Klik dan in de game server administratie onder instellingen onderaan de pagina op de **[Reconfigure MySQL Connection String](https://screensaver01.zap-hosting.com/index.php/s/zZSmQex6ropFK3X/preview)** knop.
:::


### Onesync

Als het `server.cfg` configuratiebestand van je Server Base info bevat over **Onesync**, moet je die verwijderen. Dit wordt namelijk via de instellingen van de txAdmin interface geregeld. Wil je het activeren? Dan vind je de optie onder **Settings ⟶ FXServer**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Y4LKM8ZRn4ZSFzp/download)

### License key

Om je server te kunnen draaien heb je een eigen license key van CFX nodig. Hoe je die maakt lees je in deze gids: [Eigen Licensekey](fivem-licensekey.md)

Voeg de license key toe aan het serverconfiguratiebestand:

```
sv_licenseKey "yourLicenseKeyGoesHere"
```



## Conclusie

Gefeliciteerd! Zodra je de bestanden succesvol hebt geüpload, de txAdmin setup hebt afgerond en de laatste aanpassingen in de serverconfiguratie hebt gedaan, kun je je server starten en lekker gamen met je server base.

<InlineVoucher />