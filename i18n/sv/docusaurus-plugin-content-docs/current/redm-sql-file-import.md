---
id: redm-sql-file-import
title: "RedM: Importera SQL-fil"
description: "Lär dig hur du korrekt importerar SQL-filer till din RedM-databas för att säkerställa att resurser fungerar och integreras i databasen → Läs mer nu"
sidebar_label: Importera SQL-fil
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Importera SQL-filer till din RedM-databas

Många resurser för RedM kräver en databas för att fungera korrekt. Därför är det viktigt att du importerar SQL-filerna som medföljer dina resurser på rätt sätt till din databas för att säkerställa att resurserna kan skapa poster i databasen och fungera som de ska.

:::info
Inte alla resurser kräver en databas för att fungera! När du laddar ner en resurs, kolla beskrivningen eller dokumentationen för att ta reda på om du behöver importera en SQL-fil.
:::

I många fall kommer en eller flera filer med filändelsen **.sql** att finnas med i nedladdningsfilerna för resursen. Dessa måste importeras till databasen.

## Förbered SQL-filen

I det här exemplet kommer vi att importera SQL-filen för RP-ramverket **RedEM**. Du bör förbereda SQL-filen för den resurs du vill importera den för. Det gör du genom att öppna mappen för din resurs som kräver en databas och hitta en fil med filändelsen **.sql**.

![](https://screensaver01.zap-hosting.com/index.php/s/QTeYKS3MrXTPi76/preview)

:::info
Innan du fortsätter med importen bör du öppna .sql-filen i en valfri textredigerare och kontrollera om följande rader finns med:

![](https://screensaver01.zap-hosting.com/index.php/s/wXLmBpmiwYp3Zzo/preview)

Om dessa finns i din .sql-fil, se till att ta bort raderna med `CREATE` och `USE` för databasen och spara filen, annars kan inte SQL-filen importeras.

Detta beror på att första raden deklarerar att en ny databas ska skapas, vilket du inte behöver eftersom din RedM-spelserver redan har en databas med ett annat namn. Den andra raden deklarerar att databasen med namnet `essentialmode` ska användas för importen, men det behöver du inte heller eftersom det redan finns en databas som du ska använda för importen.
:::

## Importera SQL-filen till din RedM-databas

Nu ska du gå till **Databas**-sektionen i din spelservers webbgränssnitt.

![](https://screensaver01.zap-hosting.com/index.php/s/mq2JdMmfiaqjtND/preview)

På databas-sidan får du tillgång till flera funktioner för att hantera din databas, inklusive möjligheter att säkerhetskopiera, skapa, hantera och mer. Vi fokuserar på att komma åt din databas, men kolla gärna in våra andra databas-guider om du vill veta mer: [Extern databasåtkomst](gameserver-database-external-access.md).

Tryck på den blå omdirigeringsikonen som tar dig till verktyget **phpmyadmin** där du enkelt kan komma åt din databas. Logga in med de uppgifter som visas på databas-sidan om du blir ombedd.

När du är inne, välj din databas från listan till vänster. Namnet på din databas börjar **alltid** med prefixet `zap`.

![](https://screensaver01.zap-hosting.com/index.php/s/Qx37APa9233B7zt/preview)

Just nu är din databas tom om du inte använt den tidigare. Nu är det dags att importera .sql-filen.

Tryck på **Importera**-knappen i toppmenyn i phpmyadmin för att öppna importmenyn.

![](https://screensaver01.zap-hosting.com/index.php/s/McfzS8DraJsXPTZ/preview)

Tryck sedan på **Bläddra...**-knappen som öppnar en filutforskare. Välj den **.sql**-fil du vill importera.

![](https://screensaver01.zap-hosting.com/index.php/s/Dk2Q2QgHzYEMCsa/preview)

:::note
Maximal filstorlek är 2MB. Har du en större SQL-fil än så bör du använda en SQL-splitter för att dela upp filen i mindre delar. Vi rekommenderar verktyget [Pinetools SQL-Splitter](https://pinetools.com/split-files) som gör detta åt dig. När du är klar kan du importera SQL-filerna som vanligt.
:::

Till sist, tryck på **Importera**-knappen längst ner på sidan för att starta importen. Om allt gick rätt till får du ett lyckat meddelande och en ny tabell skapas i din databas som du kan se i listan till vänster.

![](https://screensaver01.zap-hosting.com/index.php/s/iyobgkNtQpnNjoH/preview)

Du har nu framgångsrikt importerat en SQL-fil till din spelservers databas!

## Sammanfattning

Att importera en SQL-fil till din RedM-server är nödvändigt för att många resurser ska fungera utan problem. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />