---
id: fivem-licensekey
title: "FiveM: Lägg till egen licensnyckel"
description: "Lär dig hur du skapar och hanterar din egen FiveM-licensnyckel för att låsa upp prenumerationsförmåner och anpassa din server → Läs mer nu"
sidebar_label: Egen licensnyckel
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Som standard kommer din FiveM-spelserver med en automatiskt genererad licensnyckel. Att justera denna och använda din egen FiveM-licensnyckel kan vara fördelaktigt av flera anledningar, som att få tillgång till dina FiveM Element Club-prenumerationsförmåner som Onesync, ändra serverägaren till ditt namn och mycket mer. I den här guiden går vi igenom hur du skapar och lägger till din egen licensnyckel på din FiveM-spelserver.

<InlineVoucher />

## Förberedelser

För att börja skapa din nyckel måste du gå till den officiella **[Cfx.re Portal](https://portal.cfx.re/)** och logga in med ditt Cfx.re Forum-konto. Har du inget konto än kan du välja registrera dig för att skapa ett nytt.

![](https://screensaver01.zap-hosting.com/index.php/s/j5onRjCSN42dbie/preview)

:::info Ny Cfx.re Portal
Cfx.re Portal är den nya hubben för allt som rör FiveM och ersätter den gamla FiveM Keymaster och Patreon-lösningarna. Här kan du nu hantera dina serverlicensnycklar, komma åt alla tillgångar du köpt och hantera din FiveM-prenumeration – allt på ett och samma ställe.

Vi rekommenderar starkt att du läser [det officiella blogginlägget](https://forum.cfx.re/t/introducing-the-cfx-re-portal/5287316/) för info om hur du migrerar Patreon-prenumerationer till nya Cfx.re Portal för att behålla dina förmåner.
:::

## Skapa licensnyckel

När du är inloggad i portalen, gå till **Servers** i toppmenyn för att komma till huvudområdet för nyckelhantering. Detta ersätter den gamla FiveM Keymaster-webbplatsen med en smidig allt-i-ett-portal. Du kan också uppdatera en licensnyckel genom att använda **Re-Activate** på den här sidan.

Klicka på **Generate Key** för att öppna registreringsprompten.

![](https://screensaver01.zap-hosting.com/index.php/s/JQ6dkNHZcBD4e4B/preview)

Skriv in ett användbart namn för nyckeln så att du lätt kan känna igen den senare. Klicka på generate när du är redo.

![](https://screensaver01.zap-hosting.com/index.php/s/3cYyRo7pgzQraz2/preview)

Nu ska du se en ny rad i tabellen med nyckeln du just skapade. Kopiera nyckeln med knapparna till höger och ha den redo för nästa steg.

![](https://screensaver01.zap-hosting.com/index.php/s/3Hd8tQqJA4xPKWk/preview)

## Lägg till nyckel på servern

Med licensnyckeln redo måste du nu byta ut den befintliga licensnyckeln på din FiveM-spelserver mot den nya. För att göra detta behöver du gå in i txAdmin-panelen för din FiveM-server, som du hittar i serverns webbgränssnitt. Logga in med dina uppgifter från sidan.

När du är inne i txAdmin, gå till **CFG Editor** i menyn till vänster för att öppna `server.cfg`-filen. Leta upp raden med parametern `sv_licensekey` och ersätt den med din nya licensnyckel. Klicka på spara när du är klar.

![](https://screensaver01.zap-hosting.com/index.php/s/2E8j9jtykcjwF7L/preview)

## Avslutning

När du har lagt in din egna licensnyckel, starta om servern för att börja använda den. Du har nu framgångsrikt lagt till en egen licensnyckel på din FiveM-spelserver. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />