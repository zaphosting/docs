---
id: webspace-htaccess-discord
title: "Webspace: Ställ in Discord-vidarebefordran via domän"
description: "Upptäck hur du kan omdirigera din domän till en specifik URL med webbserverkonfiguration för smidig vidarebefordran → Lär dig mer nu"
sidebar_label: Discord-vidarebefordran
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Domäner kan som standard inte vidarebefordras direkt till en specifik URL, bara till huvudadressen för en server eller webbplats. Men för att peka på en specifik URL kan du ställa in en omdirigering via en webbserver i kombination med en `.htaccess`-fil. Detta vidarebefordrar automatiskt domänanropet till önskad mål-URL.

<InlineVoucher />



## Förberedelse

För att kunna genomföra en sådan vidarebefordran förutsätts det att du redan har en egen domän (TLD) och ett webspace-paket. Koppla domänen till ditt webspace-paket. Om du inte är säker på hur du gör detta kan du använda vårt enkla [EasyDNS](domain-easydns.md)-alternativ. 

:::warning DNS-ändringar tar tid

Ändringar i DNS-inställningarna kan ta upp till **24 timmar** innan de är helt implementerade och fungerar globalt. I vissa fall går det snabbare, men fördröjningar är normala på grund av cachelagring på olika servrar. 

:::

Så fort domänen pekar korrekt mot Webspace och är åtkomlig kan du börja konfigurera Discord-vidarebefordran. 



## Konfiguration

En `.htaccess`-fil måste skapas och konfigureras för att ställa in vidarebefordran. Gå till filhanteraren i Plesk för din domän. Klicka sedan på plustecknet för att skapa en ny mapp som du döper till `discord`.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZAJAd7EXp7yJE64/download)

Gå in i `discord`-mappen och skapa där en ny fil med namnet `.htaccess`. Öppna sedan den nyskapade filen i texteditorn. Nu lägger du till regeln för vidarebefordran. Kopiera och klistra in följande innehåll:
```
RewriteEngine On
RewriteCond %{HTTP_HOST} (www\.)?beispiel-example.de
RewriteRule (.*) https://discord.gg/A6e4jyg [R=301,L]
```

För att regeln och omdirigeringen ska fungera för din domän måste du byta ut domännamnet. Ersätt exempel-domänen `example-example.de` med din egen och spara filen. Byt även ut Discord Invite-URL:en mot den från din server. 

Nu ska du kunna nå vidarebefordran via din domän och den definierade discord-sökvägen. Strukturen ser i vårt exempel ut så här: `beispiel-example.de/discord`.

## Slutsats

Om du följt alla steg korrekt har du nu lyckats konfigurera domän-vidarebefordran till din Discord-server. Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />