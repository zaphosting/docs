---
id: redm-licensekey
title: "RedM: Lägg till egen licensnyckel"
description: "Upptäck hur du skapar och hanterar din egen RedM-licensnyckel för att låsa upp prenumerationsförmåner och anpassa din server → Lär dig mer nu"
sidebar_label: Egen licensnyckel
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Som standard kommer din RedM-spelserver med en automatiskt genererad licensnyckel. Att justera denna och använda din egen RedM-licensnyckel kan vara fördelaktigt av flera anledningar, bland annat för att få tillgång till dina RedM Element Club-prenumerationsförmåner som Onesync, ändra serverägare till ditt namn och mycket mer. I den här guiden går vi igenom hur du skapar och lägger till din egen licensnyckel på din RedM-spelserver.

<InlineVoucher />

## Förberedelser

För att börja skapa din nyckel måste du gå till den officiella **[Cfx.re Portal](https://portal.cfx.re/)** och logga in med ditt Cfx.re Forum-konto. Har du inget konto än kan du välja registrera dig för att skapa ett nytt.

![](https://screensaver01.zap-hosting.com/index.php/s/j5onRjCSN42dbie/preview)

:::info Ny Cfx.re Portal
Cfx.re Portal är den nya hubben för allt som rör RedM och ersätter den gamla RedM Keymaster och Patreon-lösningen. Här kan du nu hantera dina serverlicensnycklar, komma åt alla tillgångar du köpt och hantera din RedM-prenumeration – allt på ett och samma ställe.

Vi rekommenderar starkt att du läser [det officiella blogginlägget](https://forum.cfx.re/t/introducing-the-cfx-re-portal/5287316/) för info om hur du migrerar Patreon-prenumerationer till nya Cfx.re Portal för att behålla dina förmåner.
:::

## Skapa licensnyckel

När du är inloggad i portalen, gå till **Servers** i toppmenyn för att komma till huvudområdet för nyckelhantering. Detta ersätter den gamla RedM Keymaster-webbplatsen med en smidig allt-i-ett-portal. Du kan även uppdatera en licensnyckel genom att använda **Re-Activate** på den här sidan.

Klicka på **Generate Key** för att öppna registreringsprompten.

![](https://screensaver01.zap-hosting.com/index.php/s/JQ6dkNHZcBD4e4B/preview)

Skriv in ett användbart namn för nyckeln så att du lätt kan känna igen den senare. Klicka på generera när du är redo.

![](https://screensaver01.zap-hosting.com/index.php/s/3cYyRo7pgzQraz2/preview)

Nu ska du se en ny rad i tabellen med den nyckel du just genererat. Kopiera nyckeln med knapparna till höger och ha den redo för nästa steg.

![](https://screensaver01.zap-hosting.com/index.php/s/3Hd8tQqJA4xPKWk/preview)

## Lägg till nyckel på servern

Med licensnyckeln redo behöver du nu byta ut den befintliga licensnyckeln på din RedM-spelserver mot den nya. För detta måste du logga in i txAdmin-panelen för din RedM-server, som du hittar i serverns webbgränssnitt. Använd inloggningsuppgifterna som visas på sidan för att komma in i panelen.

När du är inne i txAdmin, gå till **CFG Editor** i menyn till vänster för att öppna `server.cfg`-filen. Leta upp raden med parametern `sv_licensekey` och ersätt den med din nya licensnyckel. Klicka på spara när du är klar för att bekräfta ändringarna.

![img](https://screensaver01.zap-hosting.com/index.php/s/KKQ8aRBKo9246yR/preview)

## Avslutning

När du har lagt in din egen licensnyckel, starta om servern för att börja använda den. Grattis, du har nu framgångsrikt lagt till en egen licensnyckel på din RedM-spelserver. Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />