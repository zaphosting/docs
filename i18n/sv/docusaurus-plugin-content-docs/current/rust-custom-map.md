---
id: rust-custom-map
title: "Rust: Använd en Anpassad Karta på Din Server"
description: "Lär dig hur du konfigurerar och kör en anpassad karta på din Rust-server med inställningen Level URL → Läs mer nu"
sidebar_label: Anpassad Karta
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Anpassade kartor låter Rust-serverägare skapa unika spelupplevelser som går bortom de standardprocedurala kartorna. Många communities använder anpassade kartor för att introducera nya monument, ändrade terränglayouter, specialevent eller helt omdesignade miljöer.

Dessa kartor skapas oftast med verktyg som **RustEdit** och distribueras via plattformar som **Lone Design**, **Codefling** eller community-kartarkiv. När du har en kartfil eller en nedladdningslänk kan den konfigureras direkt i dina serverinställningar.

<InlineVoucher />



## Förberedelser

Innan du konfigurerar en anpassad karta behöver du en giltig **nedladdnings-URL för kartan**. Anpassade kartor finns vanligtvis på kartdistributionsplattformar eller tillhandahålls av kartskapare.

URL:en pekar oftast på en `.map`-fil eller ett nedladdningsbart kartpaket. Se till att länken är offentligt tillgänglig så att Rust-servern kan ladda ner den vid uppstart. Exempel på kart-URL:

```
https://example-map-host.com/maps/custommap.map
```



## Konfiguration

För att konfigurera en anpassad karta på din Rust-server, öppna din **gameserver kontrollpanel** och gå till **Inställningar**.

Hitta konfigurationsfältet som heter **Level URL**. Den här inställningen låter servern ladda ner och använda en anpassad Rust-karta vid uppstart. Klistra in din anpassade kart-URL i fältet **Level URL**. Exempel:

```
https://example-map-host.com/maps/custommap.map
```

När URL:en är inskriven, spara inställningarna i panelen. När servern startar kommer Rust automatiskt att ladda ner kartan från den angivna URL:en och använda den istället för att generera en proceduralt skapad karta.

Om din anpassade karta kräver extra konfigurationsparametrar (t.ex. specifika seeds eller världsstorlekar) så tillhandahålls dessa oftast av kartskaparen och kan behöva läggas till i serverkonfigurationen också.

Efter att ha sparat konfigurationen, **starta om servern** så att den anpassade kartan kan laddas ner och användas.



## Viktiga noteringar

Anpassade kartor måste vara kompatibla med den Rust-serverversion du kör. Om kartfilen är föråldrad eller korrupt kan servern misslyckas med att starta eller återgå till en proceduralt genererad karta.

Stora anpassade kartor kan också öka serverns uppstartstid eftersom servern måste ladda ner och förbereda kartan innan den blir tillgänglig för spelare.

Om spelare inte kan ansluta efter kartbytet, kontrollera att kart-URL:en är korrekt och åtkomlig från internet.



## Slutsats

Grattis! Du har nu framgångsrikt konfigurerat en anpassad karta för din Rust-server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />