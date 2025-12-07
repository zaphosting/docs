---
id: webspace-wordpress-migration
title: "Webspace: Migrera din WordPress-webbplats till ZAP-Hosting"
description: "Upptäck hur du smidigt migrerar din WordPress-sida till ZAP-Hosting Webspace och förbättrar din webbplats → Lär dig mer nu"
sidebar_label: Migration
services:
  - webspace
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Är du sugen på våra kraftfulla webspace-produkter och vill byta till oss? Då har du kommit rätt! I den här guiden går vi igenom hur du migrerar din WordPress-sida till ditt ZAP-Hosting Webspace via en WordPress-plugin.

<InlineVoucher />

## Förberedelser

Innan du fortsätter med guiden, se till att du har följande klart:
- En domän med adminåtkomst för att kunna hantera DNS-inställningar.
- Adminåtkomst till din gamla WordPress-installation.
- Ett [Webspace](https://zap-hosting.com/en/shop/product/webspace/) hos oss.

## Steg 1: Förbered Webspace

Börja med att besöka vår [Webspace](https://zap-hosting.com/en/shop/product/webspace/) produktsida och köp det webspace-paket som passar din webbplats behov. När produkten är upprättad måste du installera WordPress på den. Läs gärna vår dedikerade [Installationsguide](webspace-wordpress.md) för detaljerade instruktioner.

När WordPress är installerat på Webspace måste du koppla din domän till den. Läs även vår dedikerade [Lägg till domän](webspace-adddomain.md) guide för detaljerade instruktioner.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa3mmmQtTybNgGj/preview)


## Steg 2: Installera Migrate Guru-plugin

För att automatisera migreringen använder du WordPress-pluginen **Migrate Guru**, som är gratis och väldigt populär. Du behöver installera den på både din nya och gamla WordPress-installation.

:::tip Logga in i adminpanelen
För att logga in som admin på en WordPress-sida, öppna din webbläsare och gå till din webbplats. Lägg till `/wp-admin` i slutet av din webbplats URL (t.ex. `[din_webbplats].com/wp-admin`) och sök upp den. Du kommer då till WordPress admin-inloggningen där du loggar in med dina gamla hosting WordPress adminuppgifter.

![](https://screensaver01.zap-hosting.com/index.php/s/zwzRyGJwEJMNPGQ/preview)
:::

I din WordPress-panel, gå till kategorin **Plugins** på vänstersidan. Välj sedan **Lägg till ny plugin** och sök efter **Migrate Guru**.

När sökresultatet dyker upp, klicka på **Installera** och sedan **Aktivera**. Se till att göra detta på både den gamla och nya WordPress-installationen innan du går vidare.

När pluginen är aktiverad kommer en skärm att dyka upp där du ombeds ange din e-postadress och godkänna villkoren – fyll i detta.

![](https://screensaver01.zap-hosting.com/index.php/s/SXYGfpWJTwNyYjJ/preview)

## Steg 3: Hämta migreringsnyckeln

Med Migrate Guru installerad på båda instanserna måste du nu hämta **Migration Key** från din **nya** ZAP-Hosting WordPress-installation.

Du hittar den under **Migrate Guru** i vänstermenyn i din WordPress-panel. Kopiera nyckeln, den behövs i nästa steg.

![](https://screensaver01.zap-hosting.com/index.php/s/g3X9fMrqoWyfwtN/preview)

:::tip Säkerhetskopiera
Som extra säkerhet rekommenderar vi att du skapar en backup av din gamla WordPress-installation innan du påbörjar migreringen via pluginen. Processen orsakar normalt ingen dataförlust, men det är alltid bäst att vara på den säkra sidan.
:::

## Steg 4: Migreringsprocessen

Gå tillbaka till adminpanelen för din **gamla** WordPress-installation. Under **Migrate Guru**, klicka på **Migrate** och välj **Other Hosts** från listan.

![](https://screensaver01.zap-hosting.com/index.php/s/x6ctdxnL2mdpTt5/preview)

Klistra in migreringsnyckeln du kopierade från din nya ZAP-Hosting WordPress och klicka på **Migrate** för att starta migreringen.

:::warning
Se till att du kopierar Migration Key från din **nya** ZAP-Hosting WordPress adminpanel och klistrar in den i din **gamla** WordPress adminpanel. Gör du tvärtom riskerar du att radera data.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/7nEr2L48PKCDXrj/preview)

När du klickar på **Migrate** startar migreringen direkt efter några valideringskontroller.

Migreringen körs i bakgrunden utan driftstopp och bör vara klar inom några minuter. Ha tålamod, det beror mycket på hur stor din webbplats är. När det är klart visas en lyckad skärm.

![](https://screensaver01.zap-hosting.com/index.php/s/YHSAwLkCjWBHsHT/preview)

:::tip
Vi rekommenderar att du testar din webbplats noggrant på din nya WordPress-installation för att säkerställa att hela migreringen gick som den skulle.
:::

## Steg 5: Uppdatera domänens DNS-inställningar

När migreringen är klar är sista steget att uppdatera DNS-inställningarna på din domän för att peka den mot din nya Webspace-instans. Du behöver ändra din domäns DNS-inställningar och sätta dem till ZAP Hostings webspace IP-adress så att din WordPress-webbplats levereras från ZAP Hosting-servern.

För att hitta webspace IP-adressen, logga in på ditt webbservers webbgränssnitt på ZAP-Hosting och gå till **DNS**-sektionen. Där hittar du IP-adressen för ditt Webspace.

![](https://screensaver01.zap-hosting.com/index.php/s/pd8iQdXsd8Kaobd/preview)

När du har IP-adressen, om din domän inte ligger hos ZAP-Hosting, logga in på ditt konto hos din domänleverantör.

Hitta sektionen för **DNS-inställningar** eller liknande hos externa leverantörer. Du måste ersätta alla befintliga **A Records** som pekar mot din gamla hosting med IP-adressen till ditt ZAP Webspace.

Gör detta för alla **A Records** som fortfarande pekar på din gamla instans. När det är klart är din domän redo att fungera med din WordPress-webbplats från ZAP-Hosting.

:::info
Observera att ändringar i DNS-poster kan ta upp till 24 timmar att slå igenom. Det går oftast snabbt, men ibland kan det ta längre tid.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/P93CG3MLJc2DL3i/preview)

## Steg 6: Installera SSL-certifikat

Som sista steg rekommenderar vi att du sätter upp ett nytt SSL-certifikat för din nya webbplats på ditt ZAP-Hosting Webspace. Som standard är en domän som läggs till via webspace okrypterad.

Vi rekommenderar att du läser vår dedikerade [Skapa SSL-certifikat](webspace-plesk-ssl.md) guide för detaljerade instruktioner.

## Slutsats

Genom att följa den här guiden har du nu migrerat din gamla WordPress-webbplats till ditt nya ZAP-Hosting Webspace. Vi rekommenderar att du testar allt noggrant för att säkerställa att migreringen gick smidigt.

<InlineVoucher />