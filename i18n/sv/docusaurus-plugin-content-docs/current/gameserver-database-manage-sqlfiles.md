---
id: gameserver-database-manage-sqlfiles
title: "Gameserver: Importera eller Exportera en SQL-fil"
description: "Upptäck hur du hanterar din gameservers databas genom att effektivt importera och exportera SQL-filer med phpMyAdmin → Lär dig mer nu"
sidebar_label: Importera/Exportera SQL-filer
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En mängd olika spel för din gameserver använder databaser för att lagra långsiktig data och fungera korrekt. Vissa spel, resurser eller mods kan ge dig en `.sql`-fil som används för att importera rätt tabeller och data till din egen databas. Att exportera din databas kan också vara användbart för att flytta din data mellan system eller helt enkelt för att manuellt säkerhetskopiera dina filer. I den här guiden går vi igenom processen för att importera och exportera SQL-filer till eller från din gameservers databas via phpMyAdmin-gränssnittet.

<InlineVoucher />

## Förberedelser

För att börja måste du komma åt din gameservers MySQL-databas, vilket du kan göra direkt via webbgränssnittet. Du bör också ha `.sql`-fil(er) redo som du vill importera till din databas.

:::tip
Vissa SQL-filer kan tvinga dig att använda ett specifikt databasenamn, vilket kan krocka med det ZAP ID-databasenamn du automatiskt får och orsaka fel.

Du kan identifiera en sådan fil genom att söka efter en `USE xxx` eller `CREATE DATABASE`-sats när du öppnar filen i en textredigerare. Om så är fallet bör du ta bort båda satserna och spara filen innan du importerar.

![](https://screensaver01.zap-hosting.com/index.php/s/DRoDqGngrS7qbQW/preview)
:::

Gå till **Verktyg->Databaser** och klicka på den blå länken för att öppna phpMyAdmin-gränssnittet. Använd inloggningsuppgifterna från din webbgränssnittssida för att logga in.

![](https://screensaver01.zap-hosting.com/index.php/s/8ix7q4tHmPnyYSy/preview)

För att lära dig mer om phpMyAdmin rekommenderar vi att du läser vår guide [Databasåtkomst](gameserver-databases-pma.md), som går djupare in på gränssnittet.

## Importera SQL-fil

När du är inloggad i phpMyAdmin-gränssnittet, välj huvuddatabasen som ska vara ditt ZAP ID. Hitta sedan fliken **Importera** i den övre navigeringsmenyn.

På den här sidan använder du knappen **Bläddra...** för att öppna en filutforskare. Leta upp SQL-filen du vill importera till din databas och öppna den.

:::note
Maximal filstorlek för din SQL-fil är 2MB. Om din fil är större rekommenderar vi att du använder en SQL-splitter som [Pinetools SQL-Splitter](https://pinetools.com/split-files) som delar upp filen i mindre delar. Dessa kan du sedan importera separat.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/TgZZBaSJJmXraZc/preview)

Du kan även justera några extra inställningar om du vill. För de flesta räcker standardvärdena, så scrolla bara ner och klicka på **Importera**.

SQL-filen bör nu vara importerad utan problem och du bör se detta i databasen genom nya tabeller, data och mer.

## Exportera SQL-fil

Att exportera din databas är en annan viktig funktion som är användbar för att enkelt flytta databaser eller göra backup. Välj återigen huvuddatabasen som ska vara ditt ZAP ID och hitta fliken **Exportera** i den övre navigeringsmenyn.

Som standard är exportmetoden **Snabb** vald, vilket automatiskt exporterar alla dina tabeller och data. Vill du anpassa vilka tabeller och data som ska exporteras väljer du **Anpassad** och justerar inställningarna efter dina önskemål. När du är klar klickar du på **Exportera** för att ladda ner en SQL-fil lokalt till din dator.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa2HakWpYGpfzfA/preview)

## Avslutning

Du har nu framgångsrikt exporterat din databas till en SQL-fil, vilket gör det enkelt att importera den igen i framtiden. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />