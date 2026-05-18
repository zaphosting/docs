---
id: webspace-plesk-ssl
title: "Webspace: Skapa ett SSL-certifikat i Plesk"
description: "Lär dig hur du säkrar din webbplats med ett SSL-certifikat i Plesk och aktiverar HTTPS för krypterade anslutningar."
sidebar_label: Skapa SSL-certifikat
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduktion

Ett SSL-certifikat krypterar anslutningen mellan din webbplats och dess besökare. När HTTPS är aktiverat upprättar webbläsare en säker anslutning och visar en hänglåsikon i adressfältet. Detta skyddar känslig data, ökar förtroendet och förhindrar att webbläsare markerar din webbplats som osäker.

<InlineVoucher />

## Säkerställ din huvuddoman

När en domän skapas i Plesk är den tillgänglig via HTTP och inte krypterad. I Plesk-panelen ser du att inget certifikat är tilldelat än. Om du öppnar domänen i en webbläsare vid detta tillfälle markeras den oftast som osäker:

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

För att aktivera kryptering, öppna domänen i din Plesk-panel och gå till **SSL/TLS-certifikat**. Motsvarande meny öppnas:

![img](https://screensaver01.zap-hosting.com/index.php/s/8rSr7Jt3DsjDzBY/download)

Härifrån kan du begära ett gratis Let's Encrypt-certifikat. Under förfrågningsprocessen måste du ange en giltig e-postadress och välja vilka domännamn som ska säkras. I de flesta fall väljs både rot-domänen och www-subdomänen, förutsatt att www-posten finns i din DNS-konfiguration:

![img](https://screensaver01.zap-hosting.com/index.php/s/LTFN73ekPjtikwp/preview)

Efter att ha bekräftat förfrågan genom att klicka på **Get it free**, kommunicerar Plesk med Let's Encrypt och utfärdar certifikatet automatiskt. När certifikatet har skapats framgångsrikt bör HTTPS tvingas genom att aktivera permanent omdirigering från HTTP till HTTPS i hosting-inställningarna:

![img](https://screensaver01.zap-hosting.com/index.php/s/BN7AMzG6MyMKb38/preview)

Efter aktivering omdirigeras alla besökare automatiskt till den krypterade HTTPS-versionen av din webbplats. Du kan verifiera installationen genom att öppna din domän med https i webbläsaren.



## Säkerställ alla subdomäner med ett wildcard-certifikat

Om du använder eller planerar flera subdomäner är ett wildcard-certifikat en smidigare lösning. Det säkrar huvuddomanen samt alla befintliga och framtida subdomäner. För att begära ett wildcard-certifikat, öppna menyn **SSL/TLS-certifikat** igen:

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

Välj alternativet för att förnya eller begära ett Let's Encrypt-certifikat. Aktivera alternativet för att säkra wildcard-domänen:

![img](https://screensaver01.zap-hosting.com/index.php/s/ZMcdJk9wCzifBmq/preview)

Efter att ha bekräftat förfrågan visar Plesk en blå informationsruta med en DNS TXT-post som måste skapas:

![img](https://screensaver01.zap-hosting.com/index.php/s/wnbNfKeTMsCdsy9/preview)

Denna TXT-post måste läggas till i DNS-zonen för din domän exakt som angivet. Den bekräftar domänägarskap och gör det möjligt för Let's Encrypt att validera förfrågan. En DNS-post ser ut ungefär så här:

![img](https://screensaver01.zap-hosting.com/index.php/s/tDtDaERR7twzaMr/preview)

:::warning DNS-propagation kan ta tid
DNS-propagation kan ta upp till 24 timmar innan TXT-posten är globalt tillgänglig. Under denna tid kan valideringen misslyckas eftersom vissa DNS-servrar fortfarande returnerar gammal information. Om detta händer, vänta tills posten har spridits helt och försök sedan verifieringen igen.
:::



För att säkerställa att TXT-posten har spridits korrekt och är offentligt tillgänglig kan du verifiera den med ett externt DNS-uppslagsverktyg som MXToolbox SuperTool:

https://mxtoolbox.com/SuperTool.aspx

Öppna sidan och välj alternativet **TXT Lookup**. Ange det fullständiga värdnamnet som Plesk gav, vanligtvis i formatet `_acme-challenge.dindoman.se`, och starta uppslaget. Verktyget frågar offentliga DNS-servrar och visar de TXT-poster som är synliga just nu.

Om rätt verifieringsvärde visas exakt som i Plesk har DNS-posten spridits framgångsrikt och Let's Encrypt kan validera domänägarskapet. Om inget resultat visas eller värdet skiljer sig kan DNS-propagationen fortfarande pågå. I så fall, vänta och upprepa uppslaget efter en stund tills rätt post syns globalt.

![img](https://screensaver01.zap-hosting.com/index.php/s/iFP5P8SY6oSXQBW/download)

När posten är synlig, gå tillbaka till Plesk och trigga valideringen igen. Om det lyckas utfärdas wildcard-certifikatet och visas som skyddat. Från och med nu kommer alla nya subdomäner automatiskt att säkras.



## Slutsats

Grattis! Din webbplats är nu framgångsrikt skyddad med SSL-kryptering. All data som skickas mellan din server och besökare är säkrad, webbläsare känner igen din domän som betrodd och HTTPS tvingas automatiskt.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />