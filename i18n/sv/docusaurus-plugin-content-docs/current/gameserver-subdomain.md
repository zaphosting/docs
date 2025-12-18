---
id: gameserver-subdomain
title: 'Spelserver: ZAP Subdomän'
description: "Upptäck hur du sätter upp och hanterar subdomäner för din spelserver för bättre tillgänglighet och anpassning → Lär dig mer nu"
sidebar_label: Spelserver Subdomän
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Våra Spelservrar har nu möjligheten att enkelt och snabbt sätta upp subdomäner för din server. I den här guiden får du lära dig hur du använder DNS-subdomänfunktionen för din server för att skapa en ZAP Cloud-subdomän eller ställa in din egen domän för användning.

<YouTube videoId="1fFagkzOvfo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/bbTYcXxCWXEYNrQ/preview" title="ZAP Cloud-domän för Spelservrar" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som förklarar allt för dig. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

![](https://screensaver01.zap-hosting.com/index.php/s/yJTBQ7oC926LfbT/preview)

<InlineVoucher />

## Tillgänglighet

Subdomänfunktionen finns tillgänglig för både nya och befintliga kunder. Nya kunder får automatiskt en `xxx`**.zap.cloud** subdomän skapad under installationsprocessen. Befintliga kunder måste aktivera detta manuellt under **Inställningar->DNS-inställningar** i spelserverns webbpanel. Hur du använder den här sektionen går vi igenom i nästa del.

Alla spel stöds inte än, men vi är glada att det redan är aktivt för flera populära spel som FiveM, Minecraft och fler! På sikt vill vi utöka funktionen till så många spel som möjligt. Tyvärr gör vissa spel det tekniskt omöjligt att lägga till, och för dessa ser du helt enkelt IP-adressen som vanligt i webbpanelen.

:::tip
Om spelet du har installerat inte stöds just nu, tveka inte att [kontakta vårt Supportteam](https://zap-hosting.com/en/customer/support/) så kollar vi om vi kan få med det :)
:::

## Hantera Subdomäner (DNS)

Att hantera subdomänfunktionen på din spelserver är enkelt. Gå till **Inställningar->DNS-inställningar** för att börja.

På den här sidan kan du göra olika inställningar för den kostnadsfria ZAP Cloud-subdomänen samt använda dina egna domäner som du har kopplat till ditt ZAP-Hosting-konto.

![](https://screensaver01.zap-hosting.com/index.php/s/M6SMHKJcZ3GgXQd/preview)

:::info
Just nu kan du ha max 3 aktiva subdomäner per produkt (exklusive den slumpmässigt genererade ZAP Cloud-subdomänen).
:::

### Slumpmässig ZAP Cloud-subdomän

För att generera en slumpmässig ZAP Cloud-subdomän måste du använda knappen **Lös subdomäner** som finns på den här inställningssidan.

:::info
Befintliga kunder ska också använda den här knappen för att generera en slumpmässig ZAP Cloud-subdomän första gången.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Lc5CCQwMtCK63nx/preview)

### Anpassad ZAP Cloud-subdomän

Du kan skapa din egen ZAP Cloud-subdomän som passar dig, genom att helt enkelt skriva in den subdomän du vill använda och välja **.zap.cloud** från dropdown-menyn (standardval).

:::note
Om du får ett felmeddelande kan det bero på att subdomänen redan används och/eller att du har angett ett förbjudet ord eller tecken som inte är tillåtet för att skydda våra kunder.
:::

Tryck på **Skapa post** och du bör se subdomänen dyka upp i listan. Det kan ta några minuter innan den är fullt fungerande.

![](https://screensaver01.zap-hosting.com/index.php/s/odqKSyzXRLi5zRx/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yWmt4j3nWEgbN6K/preview)

### Egen Domän

:::info
För att kunna använda din egen domän för att skapa en subdomän, se till att den är kopplad till ditt ZAP-Hosting-konto genom att [köpa den på vår hemsida](https://zap-hosting.com/en/shop/product/domain/) eller överföra domänen till ditt konto från en annan leverantör.
:::

Att skapa en subdomän med din egen domän följer samma steg som för anpassad ZAP Cloud-subdomän. Skriv in subdomänen du vill använda och välj din egen domän från dropdown-menyn.

:::note
Om du får ett felmeddelande kan det bero på att subdomänen redan används och/eller att du har angett ett förbjudet ord eller tecken som inte är tillåtet för att skydda våra kunder.
:::

Tryck på **Skapa post** och du bör se subdomänen dyka upp i listan. Det kan ta några minuter innan den är fullt fungerande.

![](https://screensaver01.zap-hosting.com/index.php/s/Xoe8c4T9TNpby27/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/AX9yFSb3nRNoKiF/preview)

## Felsökning

### ZAP Cloud-subdomän

Om du har problem med ZAP Cloud-subdomänerna kan du försöka lösa det själv genom att gå till **Inställningar->DNS-inställningar** som tidigare och använda knappen **Lös subdomäner** längst ner.

![](https://screensaver01.zap-hosting.com/index.php/s/Lc5CCQwMtCK63nx/preview)

Vänta några minuter innan du kollar igen om de fungerar som de ska.

### Egen Domän

Om du inte ser din egen domän i dropdown-menyn när du försöker skapa en subdomän, beror det troligen på att den inte är kopplad till ditt ZAP-Hosting-konto.

Se till att domänen är aktiv på ditt konto, vilket kan innebära att du behöver överföra den från en annan leverantör.

Om du fortfarande har problem med någon del av subdomänfunktionen, kontakta gärna vårt Supportteam genom att [skapa ett ärende på vår hemsida](https://zap-hosting.com/en/customer/support/) så hjälper vi dig gärna.

<InlineVoucher />