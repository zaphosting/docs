---
id: fivem-sql-file-import
title: "FiveM: Importera SQL-fil"
description: "Förstå hur du korrekt importerar SQL-filer för att säkerställa att FiveM-resurser fungerar som de ska med din databas → Lär dig mer nu"
sidebar_label: Importera SQL-fil
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Många resurser för FiveM kräver en databas för att fungera korrekt. Därför är det viktigt att du importerar SQL-filerna som följer med dina resurser på rätt sätt till din databas, så att resurserna kan skapa poster i databasen och fungera som förväntat.

:::info
Inte alla resurser kräver en databas för att fungera! När du laddar ner en resurs, kolla beskrivningen eller dokumentationen för att ta reda på om du behöver importera en SQL-fil.
:::

I många fall kommer en eller flera filer med filändelsen **.sql** att finnas med i nedladdningsfilerna för resursen. Dessa måste importeras till databasen.

<InlineVoucher />

## Förbered SQL-filen

I det här exemplet kommer vi att importera SQL-filen för **ESX**. Du bör förbereda SQL-filen för den resurs du vill importera. Det gör du genom att öppna mappen för din resurs som kräver en databas och hitta en fil med filändelsen **.sql**.

![](https://github.com/zaphosting/docs/assets/42719082/3d2b4cd2-d98e-4b25-b606-9f451164edc9)

:::info
Innan du fortsätter med importen bör du öppna .sql-filen i en valfri textredigerare och kontrollera om följande rader finns med:

![](https://github.com/zaphosting/docs/assets/42719082/dfc43c55-9918-45e7-99eb-1f70193c0be1)

Om dessa finns i din .sql-fil, se till att ta bort raderna med `CREATE` och `USE` för databasen och spara filen, annars går det inte att importera SQL-filen.

Detta beror på att första raden deklarerar att en ny databas ska skapas, vilket du inte behöver eftersom din RedM-spelserver redan har en databas med ett annat namn. Den andra raden deklarerar att databasen med namnet `essentialmode` ska användas för importen, men det behöver du inte heller eftersom det redan finns en databas som du ska använda för importen.
:::

## Importera SQL-filen till din databas

Nu ska du gå till **Databas**-sektionen i din spelservers webbgränssnitt.

![](https://github.com/zaphosting/docs/assets/42719082/83ba522a-929e-4a90-8c9e-0badc2d779d4)

På databas-sidan får du tillgång till flera funktioner för att hantera din databas, inklusive möjligheter att säkerhetskopiera, skapa, hantera och mer. Vi fokuserar på att komma åt din databas, men kolla gärna in våra andra guider om databaser om du vill veta mer: [Extern databasåtkomst](gameserver-database-external-access.md).

Tryck på den blå omdirigeringsikonen som tar dig till verktyget **phpmyadmin** där du enkelt kan komma åt din databas. Logga in med de uppgifter som visas på databas-sidan om du blir ombedd.

När du är inne, välj din databas från listan till vänster. Namnet på din databas börjar **alltid** med prefixet `zap`.

![](https://github.com/zaphosting/docs/assets/42719082/30fa6041-b94e-4ac8-a3cd-286cca226dba)

Just nu är din databas tom om du inte använt den tidigare. Nu är det dags att importera .sql-filen.

Tryck på **Importera**-knappen i den övre navigeringsmenyn i phpmyadmin för att öppna importmenyn.

![](https://github.com/zaphosting/docs/assets/42719082/c0ca30f0-c520-4a71-843a-296064ba5761)

Tryck sedan på **Bläddra...**-knappen som öppnar en filutforskare. Välj den **.sql**-fil du vill importera.

![](https://github.com/zaphosting/docs/assets/42719082/83ba22fb-fc6c-4dbb-9c47-ad42d3a9fa66)

:::note
Maximal filstorlek är 2MB. Om din SQL-fil är större än så bör du använda en SQL-splitter för att dela upp den i mindre delar. Vi rekommenderar verktyget [Pinetools SQL-Splitter](https://pinetools.com/split-files) som gör detta åt dig. När du är klar kan du importera SQL-filerna som vanligt.
:::

Till sist, tryck på **Importera**-knappen längst ner på sidan för att starta importen. Om allt gick rätt till får du ett lyckat meddelande och en ny tabell skapas i din databas som du kan se till vänster.

![](https://github.com/zaphosting/docs/assets/42719082/5fef5d58-78f1-4b59-bc3e-1e0af2ff981b)

## Sammanfattning

Att importera en SQL-fil till din FiveM-server är nödvändigt för att många resurser ska fungera utan problem. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />