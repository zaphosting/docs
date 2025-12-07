---
id: dedicated-windows-2016
title: "Dedikerad Server: Installation av Windows Server 2016"
description: "Upptäck hur du installerar och konfigurerar Windows Server på din dedikerade server för optimal prestanda och säkerhet → Lär dig mer nu"
sidebar_label: Windows Server 2016
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Här förklarar vi steg för steg hur du installerar och konfigurerar Windows Server-operativsystemet på din dedikerade server. Följ instruktionerna noggrant för att säkerställa att du sätter upp operativsystemet korrekt och använder det på bästa sätt.

:::info Windows Server 2016
Installationsstegen och demonstrationerna i denna guide baseras på Windows Server 2016 (2019-look – samma design). Äldre OS-versioner kan skilja sig i struktur och utseende, men proceduren är liknande.
:::

:::warning Nyare version tillgänglig / EOL-info

Den senaste Windows Server-versionen från Microsoft är [2025](dedicated-windows.md). Vi rekommenderar att använda den senaste versionen för långsiktiga projekt.

Support för äldre Windows Server-versioner kommer att avslutas förr eller senare. Följande datum gäller för 2016-versionen:

- Aktiv support: 2022-01-11
- Säkerhetssupport: 2027-01-12

:::

## Förberedelser
För installation och konfiguration av ett operativsystem är det först viktigt att montera motsvarande ISO-fil för operativsystemet. Det finns flera sätt att göra detta:

1. Montera via initial setup
2. Montera via iLO (Virtual Media)
3. Montera via iLO (Remote Console)

Om du inte är van vid att montera en ISO-fil än, rekommenderar vi att du kollar in vår [Initial setup](dedicated-setup.md) eller [Egen ISO](dedicated-iso.md)-guide.

## Installation
För att installera Windows Server behöver du en ISO-fil av den version du valt. I vårt webbgränssnitt kan du välja önskad Windows-version. Alternativt kan du använda en egen ISO-fil, vi har en [Egen ISO](dedicated-iso.md)-guide för det.

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

Om denna skärm visas i din remote console betyder det att ISO:n har laddats in korrekt, nu kan vi börja installationen.
Välj önskat språk och klicka på "Next" för att fortsätta.

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

Klicka på "Install now" för att starta installationsprocessen.

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windows kräver nu en produktnyckel. Ange den om du har en.

:::note
Vi säljer inte Windows-licenser, du måste köpa en nyckel själv.
:::

Du kan köpa Windows-produktnycklar från olika onlinebutiker, se till att du köper en giltig nyckel för din Windows-version eftersom det finns olika versioner.
Till exempel finns det i Windows Server 2019 två utgåvor, standard och datacenter.
Om du är osäker på vad du behöver, klicka på "I don't have a product key" – du kan alltid lägga till en nyckel senare.

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

Välj nu vilken version du vill installera.
Se till att välja rätt version, det går inte att ändra efteråt.
Välj även en version med "(Desktop Experience)" annars blir din Windows shell-baserad.
När du valt, markera versionen och fortsätt med "Next".

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

Godkänn licensvillkoren och klicka på "Next".

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Välj 'Custom' om du vill göra en ren installation av Windows. Du kan välja "Upgrade" om du vill uppgradera från t.ex. 2016 till 2019.

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

I nästa steg behöver du skapa partitioner på din dedikerade server, vanligtvis finns inga partitioner skapade än. Om det finns, markera dem och klicka på ta bort.

Du kan skapa flera mindre partitioner eller en stor. Om du skapar mindre partitioner rekommenderar vi minst 50GB för huvudpartitionen där Windows ska installeras.
Klicka på "New" för att skapa en partition.

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

Vill du ha en stor partition kan du bara klicka på "Apply". Installationen tar automatiskt den största möjliga storleken.

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windows kräver en liten systempartition, detta godkänner vi genom att klicka på "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

När du är nöjd med dina partitioner, välj den partition där Windows ska installeras och klicka på "Next".
Windows-installationen sköter resten automatiskt, detta kan ta några minuter.
Det finns inget mer att göra förrän installationen är klar.

## Konfiguration

När installationen är klar kommer Windows be dig att sätta ett lösenord.

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

Sätt ditt önskade lösenord här.

:::info
Vi rekommenderar att välja ett starkt lösenord med specialtecken.

Om du glömmer lösenordet finns det inget sätt att återställa det, så skriv ner det noga.
:::

Efter att du satt lösenordet hamnar du i Windows låsskärm.

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

För att logga in i Windows, tryck tangentkombinationen `CTRL + ALT + DELETE`. Det kan du enkelt göra via din remote console.
(Du hittar det i Java-konsolen under "Keyboard")
Logga in med ditt lösenord.

Nästa steg är att aktivera Remote Desktop så att du enkelt kan ansluta till din server.
Öppna Windows Explorer och högerklicka på "This PC".

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

Välj Egenskaper.

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

Öppna "Remote Settings".

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

Godkänn brandväggsmeddelandet med "OK" och klicka på "Apply".

Öppna nu Remote Desktop på din dator och fyll i IP-adressen från ditt ZAP-gränssnitt.
Användarnamnet är alltid Administrator och lösenordet är det du satte tidigare.

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

Du kan ignorera certifikatvarningen, kryssa i "Don't ask me again for connections to this computer".
Slutför genom att klicka på "Yes".

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

Remote Desktop-anslutningen kopplar nu upp sig mot din dedikerade server och du kan börja använda den.
Nätverksinställningarna konfigureras automatiskt via DHCP, så inga fler ändringar behövs.

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
Har du fler frågor eller problem? Vår support hjälper dig gärna!
:::

## Avslutning
Grattis, du har nu installerat Windows Server 2016 på din dedikerade server! Vid frågor eller behov av hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂