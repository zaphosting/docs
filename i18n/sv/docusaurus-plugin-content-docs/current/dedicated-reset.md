---
id: dedicated-reset
title: "Dedikerad Server: Serveråterställning (Fabriksåterställning)"
description: "Upptäck hur du effektivt återställer din server för att återfå prestanda eller börja om från början med säker dataradering → Läs mer nu"
sidebar_label: Serveråterställning
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Din server fungerar inte som den ska längre eller vill du börja om från början men vet inte hur? Ingen fara, du kan återställa din server genom att installera om den. Den här guiden förklarar hur du gör och vad du behöver tänka på.





## Förberedelser

Innan du återställer datan på din server bör du vara medveten om att all befintlig data kommer att försvinna. Har du viktig data är det dags att säkerhetskopiera den innan du påbörjar ominstallationen. Därefter måste du bestämma exakt hur du vill återställa ditt system. 



## Återställa datan

Det finns två olika sätt att återställa datan, beroende på dina behov och situation. Nedan förklarar vi båda alternativen i detalj:

- Återställa data via RAID-konfiguration (Snabb metod)
- Återställa data via Wipe ISO (Grundlig metod)

När du återställer data via RAID-konfiguration raderas den befintliga datan logiskt och ersätts med ny data, vilket gör det till en snabb och effektiv lösning för systemåterställning.

Jämfört med detta innebär återställning med Wipe ISO flera raderingscykler som säkerställer att all data tas bort permanent och irreversibelt. Den här metoden passar bäst för en fullständig systemradering när en noggrann dataradering krävs.



### Snabb metod

Precis som vid konfiguration av RAID måste du öppna RAID-konfigurationen med `F8` under uppstarten. Öppna menyalternativet **Delete Logical Drive** i RAID-konfigurationen. Här visas den aktuella RAID-konfigurationen och hårddiskarna. Tryck på `F8` för att ta bort den befintliga RAID-konfigurationen. Detta måste bekräftas med `F3`. 

Navigera sedan tillbaka till RAID-konfigurationen och öppna menyalternativet **Create Logical Drive**. Välj nu hårddiskarna och önskad RAID-konfiguration (Raid 0/1) och skapa RAID:en genom att bekräfta med `Enter`.

Om du är osäker på hur du konfigurerar RAID på ditt system rekommenderar vi att du kollar in vår generella guide [Konfigurera RAID](dedicated-raid.md). 



### Grundlig metod

För att utföra själva återställningen måste den nödvändiga Wipe ISO:n monteras och köras. ISO-filer kan monteras antingen via iLO eller via fjärrkonsolen. Om du inte är säker på hur du gör detta, ta en titt på guiden [Egen ISO](http://localhost:3000/guides/docs/dedicated-iso).

Montera följande Wipe ISO-fil på din server och starta om den:


```
http://185.223.30.65/dedicatedisos/wipedisk.iso
```

När servern har startat om ska Wipe ISO:n automatiskt upptäckas och laddas. Anslut till din dedikerade server via en fjärrkonsol (HTML5, .NET, Java Web Start) som du föredrar.

Där ser du hur servern automatiskt kör processen och hur långt formateringen har kommit. Din server kommer att skriva över alla befintliga volymer och därmed radera all data. Beroende på SSD:ns storlek kan processen ta mellan 45 minuter och 2 timmar.

![](https://screensaver01.zap-hosting.com/index.php/s/4nfaexaqiK78t6e/preview)



:::danger
Den här processen går inte att ångra och är därför slutgiltig. Det finns inga extra säkerhetskopior som kan återställas vid behov.
Vi avråder starkt från att utföra denna process om du inte är helt säker på att du vill radera all din data.
:::



## Slutsats

Grattis, du har nu framgångsrikt raderat datan på din dedikerade server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂