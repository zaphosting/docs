---
id: fivem-locale
title: "FiveM: Byt språk / plats (flagga)"
description: "Upptäck hur du anpassar ditt FiveM-servers språk och flagga för en personlig spelupplevelse → Lär dig mer nu"
sidebar_label: Språk / plats (flagga)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

FiveM-servrar kan visas på olika språk. Detta gäller både visningen av serverns flagga i serverlistan samt språket som aktivt används på servern. Språket kan anpassas vid behov. Så du har möjligheten att välja ditt språk och landets flagga för din server.

![](https://screensaver01.zap-hosting.com/index.php/s/FJZc7pJmppG28mX/preview)

<InlineVoucher />

## Konfiguration

Konfigurationen av serverns flagga och språk görs via Locales-alternativet. Locales-konfigurationen sker via serverns config. Detta definieras av värdet i kommandot **sets locale**. Engelska och Antarktis som plats (flagga) visas som standard.

### Öppna serverns konfigurationsfil

Serverns konfigurationsfil `server.cfg` nås via txAdmin-gränssnittet under `CFG Editor`. 

![img](https://screensaver01.zap-hosting.com/index.php/s/qDsN5ggCjaaJLS5/preview)



### Hitta locale-/språkkod för ditt språk

Definitionen av språk/visning görs via locales (språkkoder/landskoder) baserat på ISO 639-1/ISO 3166-1 standarderna. Vi har sammanställt en liten lista med de mest relevanta länderna/språken nedan. Den faktiska listan är såklart betydligt större:

| Land           | Språk      | Locale |
| -------------- | ---------- | ------ |
| Tyskland       | Tyska      | de-DE  |
| USA            | Engelska   | en-US  |
| Kanada         | Engelska   | en-CA  |
| Australien     | Engelska   | en-AU  |
| Storbritannien | Engelska   | en-GB  |
| Finland        | Finska     | fi-FI  |
| Frankrike      | Franska    | fr-FR  |
| Nederländerna  | Nederländska | nl-NL  |
| Portugal       | Portugisiska | pt-PT  |
| Brasilien      | Portugisiska | pt-BR  |
| Spanien        | Spanska    | es-ES  |
| Singapore      | Engelska   | en-SG  |

:::caution 
Visningen av serverflaggan stöds generellt av alla tillgängliga länder. Dock innehåller inte alla resurser alla språk. Så se till att ditt land/språk stöds i förväg!
:::



### Justera innehållet i serverns konfigurationsfil

När konfigurationsfilen är öppen och du har koll på locale-/språkkoden kan du göra inställningen. Först måste du kolla om kommandot **sets locale** redan finns. Om inte, ser inmatningen ut så här:

```
# En giltig locale-identifierare för serverns huvudspråk.
# Exempelvis "en-US", "fr-CA", "nl-NL", "de-DE", "en-GB", "pt-BR"
sets locale "root-AQ" 
# byt gärna UT root-AQ på raden OVAN mot ett riktigt språk! :)
```

Värdet för kommandot **sets locale** är som standard **root-AQ**. Detta behöver ändras nu. Om du till exempel vill använda USA som flagga och engelska som språk, skulle du använda **en-US** som värde i det här fallet. Spara ändringen du gjort.


## Slutsats

Sista steget är att starta om servern för att säkerställa att ändringen träder i kraft. Efter det kan du ladda om serverlistan i din FiveM-klient och borde kunna se ändringen du precis gjorde. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />