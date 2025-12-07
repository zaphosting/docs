---
id: lastoasis-createrealm
title: "Last Oasis: Skapa ett nytt Realm"
description: "Upptäck hur du skapar och autentiserar ditt eget Last Oasis-realm och oasis för smidig gameplay och serverhantering → Lär dig mer nu"
sidebar_label: Skapa Realm
services:
  - gameserver-lastoasis
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Last Oasis-servrar kräver flera steg för att autentisera sig mot den officiella sajten. I den här guiden går vi igenom hur du skapar ditt eget realm i Last Oasis och sätter upp en oasis inom ditt nya realm.

<InlineVoucher />

## Förberedelser
En av förutsättningarna för att sätta upp ett nytt realm är att generera en nyckel från den officiella sajten för att kunna verifiera och autentisera mot de officiella onlinetjänsterna.

Gå helt enkelt till [den officiella Last Oasis](https://myrealm.lastoasis.gg/) och logga in med din föredragna plattform (Steam eller Xbox).

![](https://screensaver01.zap-hosting.com/index.php/s/Z2sPJLFks9LY8cg/preview)

## Sätta upp servernyckel
När du är inloggad har du redan en **CustomerKey** som är nyckeln för din gameserver.

![](https://screensaver01.zap-hosting.com/index.php/s/DgdDoCHf7DDjZ2s/preview)

Gå till **Settings**-sektionen i din gameservers webbgränssnitt och klistra in denna kod i fältet **Customer Key**. Glöm inte att spara efter ändring.

## Sätta upp provider-nyckel
Du måste också skapa en provider-nyckel för att unikt identifiera din gameserver. Klicka på **Add Key** för att öppna menyn.

![](https://screensaver01.zap-hosting.com/index.php/s/JMQPTZrHcCxgEz2/preview)

Fyll i ett användbart namn och en beskrivning för nyckeln och tryck på **Add**.

![](https://screensaver01.zap-hosting.com/index.php/s/bfiaA2gjjjxESpM/preview)

:::tip
Vill du koppla ihop flera Oaser i ditt Realm och ha dem aktiva samtidigt? Kolla in vår guide för [Flera Oaser](lastoasis-multiple-oases.md) för att lära dig hur du aktiverar det.
:::

Gå återigen till **Settings** i ditt gameservers webbgränssnitt och klistra in denna kod i fältet **ProviderKey**. Glöm inte att spara efter ändring.

## Skapa ett Realm
Nu kan du gå vidare och skapa ett realm. På samma [officiella Last Oasis](https://myrealm.lastoasis.gg/) webbplats, gå till sektionen **Realms** och skapa ett nytt Realm.

![](https://screensaver01.zap-hosting.com/index.php/s/ydzjKZTgG4L7QpQ/preview)

Välj ett namn och fyll i eventuella extra detaljer som du vill. När du är klar, spara Realm. Detta behövs för att du ska kunna koppla upp dig mot din server.

![](https://screensaver01.zap-hosting.com/index.php/s/4rJq5r2zfHx66Qs/preview)

När du har skapat ditt Realm kan du se en översikt över hela realmet där du kan justera fler inställningar och se användbar info.

![](https://screensaver01.zap-hosting.com/index.php/s/j5egcHeicf3QPiR/preview)

## Skapa en Oasis
Sista steget är att skapa en Oasis inom ditt Realm. För varje gameserver du äger måste du skapa en separat Oasis. Om du till exempel har 2 gameservers bör du skapa en separat oasis för båda.

Tryck på **Manage**-knappen i Realm-översikten.

![](https://screensaver01.zap-hosting.com/index.php/s/GNDZ7DaeLT2qAoC/preview)

På den nya sidan väljer du en plats för din nya Oasis och trycker på **Add** för att bekräfta.

![](https://screensaver01.zap-hosting.com/index.php/s/dXKXKod6y8NE8SC/preview)

En ny ruta visas där du kan sätta ett namn och välja en karta.

![](https://screensaver01.zap-hosting.com/index.php/s/aKJmGmGQmz65Xnz/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/Hrq49c3TArdYXdG/preview)

När du bekräftat kan du äntligen trycka på **Add Oasis** för att skapa oasen och aktivera den med **Activate**-knappen.

![](https://screensaver01.zap-hosting.com/index.php/s/tfEXd4GgAMDd8sE/preview)

:::tip
Vill du koppla ihop flera Oaser i ditt Realm och ha dem aktiva samtidigt? Kolla in vår guide för [Flera Oaser](lastoasis-multiple-oases.md) för att lära dig hur du aktiverar det.
:::

Du har nu framgångsrikt satt upp ett nytt Realm och en Oasis för din Last Oasis-gameserver.

<InlineVoucher />