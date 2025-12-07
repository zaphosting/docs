---
id: rust-firststeps-dashboard
title: "Rust: Översikt Dashboard"
description: "Upptäck hur du effektivt hanterar och optimerar din Rust-server med en tydlig översikt över alla viktiga funktioner och alternativ → Lär dig mer nu"
sidebar_label: Dashboard
services:
  - gameserver-rust
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Du är intresserad av en **Rust-server** eller äger redan en, men saknar fortfarande en komplett översikt över administrationen och hur du hittar alla nödvändiga inställningar? Speciellt i början kan det vara en utmaning. Men oroa dig inte, vi ger dig en detaljerad introduktion till administrationen av din tjänst nedan, så att du får bästa möjliga överblick.

Efter att ha gått igenom denna guide kommer du enkelt kunna hantera din server effektivt och snabbt hitta alla nödvändiga alternativ och funktioner. Här får du en strukturerad översikt som hjälper dig steg för steg att bekanta dig med serveradministrationen och utöka din kunskap på ett målinriktat sätt. På så sätt kan du säkerställa att din **Rust-server** är optimalt anpassad efter dina behov och att du får ut det mesta av de tillgängliga möjligheterna.

<YouTube videoId="kR2rgVwDdCM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/gn7pPPbLm2xmBdA/preview" title="Sätt upp Rust-server på bara EN MINUT!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Dyka ner i vår video som förklarar allt. Oavsett om du har bråttom eller bara föredrar att ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

## Produktadministration

I avsnittet **Produktadministration** hittar du alla nödvändiga sidor för att hantera din server. Alternativen för att administrera din server listas i detalj nedan.

### Dashboard

**Dashboarden** för din server är hjärtat i administrationen. All grundläggande och viktig information om din tjänst presenteras tydligt här. Det inkluderar till exempel information om plats, status, IP: Port, använd minne, pågående spel, servernamn, karta och antal tillgängliga slots. Dessutom visas även belastningen på CPU, minne och RAM.

![](https://screensaver01.zap-hosting.com/index.php/s/qA8a4KYbeJaTcQD/preview)

I dashboarden kan du också starta, stoppa eller starta om din tjänst för att ha full kontroll över dess drift. Dessutom kan du komma åt live-konsolen för att få realtidsinformation om serverns status och agera direkt vid behov.

### Statistik

Under **Statistik** får du en omfattande översikt över belastningsvärdena för din server. Där hittar du information om olika aspekter som belastningen på tillgängliga slots, CPU och minne. Du kan visa dessa data för olika tidsperioder, till exempel för de senaste **60 minuterna, 24 timmar, 3 dagar, 7 dagar** eller **30 dagar.**

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Tack vare denna information får du en bra insikt i hur din server används. Dessutom är dessa statistik ofta hjälpsamma för att identifiera möjliga prestandaproblem och begränsa deras orsaker. Till exempel kan du spåra när belastningen ökade och om detta är kopplat till vissa händelser eller förändringar. Detta är särskilt viktigt när plötsliga problem uppstår, eftersom det gör att du kan ta riktade steg för felsökning och systematisk analys av möjliga orsaker.

### DDoS Manager

Se tidigare DDoS-attacker för att bättre bedöma potentiella hot och mönster. Aktivera notiser för pågående DDoS-attacker på din server för att snabbt kunna reagera när en incident inträffar.

Beroende på serverns plats och den DDoS-skydd som finns där kan du även övervaka aktiva attacker i realtid. Detta inkluderar detaljerad trafikinsikt som visar både legitim trafik och mängden trafik som blockeras av skyddssystemen. Denna transparens hjälper dig att förstå hur skyddet fungerar och gör det möjligt att tidigt identifiera potentiella risker.

:::info Saknas åtkomst till DDoS Manager?
Användning av DDoS Manager kräver antingen en dedikerad IP-adress eller tilläggsalternativet "DDoS Manager Översikt". Om ditt nuvarande paket inte inkluderar dessa komponenter kan du när som helst lägga till dem genom att uppgradera din tjänst.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

### Tebex Shop

Med Tebex kan du göra din spelserver till cash genom att sälja virtuella varor och ranker för riktiga pengar. Det är ett kraftfullt och pålitligt verktyg designat speciellt för spelserveradministratörer som vill erbjuda en bättre spelupplevelse för sina spelare.

![](https://screensaver01.zap-hosting.com/index.php/s/TbwafKd3Kmq4WrS/preview)

Tebex är lätt att använda och erbjuder många funktioner för att anpassa och optimera din butik. Du kan skräddarsy butikens layout, lägga till betalningsalternativ och till och med starta marknadsföringskampanjer för att nå fler spelare.

Genom att klicka på bilden kan du skapa din egen spelserverbutik med Tebex. Uppstarten är snabb och enkel, så du är redo att börja sälja dina virtuella varor på nolltid.

### Loggfiler

Har du tekniska problem och är osäker på orsaken? En första möjlig lösning är att kolla **Loggfilerna**. Dessa filer innehåller mycket information om servern, som aktuella händelser, ledtrådar eller felmeddelanden.

Felmeddelanden kan särskilt hjälpa till att identifiera och förstå orsaken till ett problem bättre. Ofta kan svårigheter upptäckas och lösas genom att ta en riktad titt i loggfilerna.

:::info
Hjälper informationen inte eller förstår du den inte? Ingen fara! Vi finns dagligen tillgängliga i supporten. Skapa bara en **[Ticket](https://zap-hosting.com/en/customer/support/)** och förklara ditt problem för oss. Vi kollar på det så snabbt som möjligt och hjälper dig att lösa problemet! :)
:::

### Händelselogg

**Händelseloggen** ger dig en komplett översikt över alla aktiviteter relaterade till serveradministrationen. Här kan du när som helst se när en server startade, stoppade eller kraschade, samt när uppdateringar, backuper eller nya installationer gjordes.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Driftstörningar

Var din server offline en stund och du kan inte förklara varför? En titt i händelseloggen och loggfilerna gav heller ingen info? Det kan vara så att problemet inte ligger direkt hos din server, utan hos värdsystemet där din server körs.

Om vårt övervakningssystem upptäcker en generell störning, meddelas våra tekniker automatiskt och tar hand om problemet så snart som möjligt.

I detta avsnitt hittar du en översikt över driftstörningar på värdsystemet där din spelservertjänst körs. Mer info och den senaste versionen av vår servicestatus hittar du på vår nya [statussida](https://status.zap-hosting.com/).

## Inställningar

I avsnittet **Inställningar** hittar du alla nödvändiga sidor för att konfigurera din server. De tillgängliga alternativen för att konfigurera din server listas i detalj nedan.

### Inställningar

Under inställningar hittar du en översikt över de vanligaste inställningsalternativen för din server. Dessa inkluderar även en kort förklaring. Användningen av inställningssidan rekommenderas särskilt för nybörjare inom serveradministration.

![](https://screensaver01.zap-hosting.com/index.php/s/Ymijoa34iNWEwLb/preview)

Här kan du till exempel göra följande justeringar:

- Grundinställningar: Servernamn, Serverbeskrivning, Server-URL, Headerbild, Karta, Världsstorlek, Sparintervall, Companion, Rcon-lösenord, Server-taggar, Web RCON, EAC anticheat, Hardcore

Om du känner dig mer säker och vill göra mer precisa ändringar rekommenderar vi att använda Config Editor istället. Mer info om detta hittar du i kategorin **Configs**.

### Configs

Config-filredigeraren låter dig redigera konfigurationsfilerna direkt på webbplatsen på det klassiska sättet, utan förenklad vy. Detta alternativ gör att du kan anpassa serverns inställningar efter dina personliga preferenser.

Genom att använda editorn får du direkt tillgång till alla tillgängliga alternativ och kan anpassa dem exakt. Detta är särskilt användbart för avancerade användare som vill ha full kontroll över sina serverinställningar och vet exakt vilka ändringar de vill göra.

:::info
Har du märkt att vissa av dina ändringar delvis skrivs över? Var medveten om att vissa värden hämtas från inställningssidan. Om du vill göra dessa ändringar direkt i config måste du först inaktivera motsvarande alternativ på inställningssidan.
:::

### Spel

Under **Spel** kan du alltid byta spelvariant på ditt befintliga spel eller installera ett annat spel generellt. Spel med samma slotpris kan väljas direkt under **Tillgängliga spel**. För alla andra spel krävs först en justering av slotpriset. Mer info om detta finns i guiden [Spelbyte](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/QB82f3CSKmJgwqk/preview)

### Versioner

Under **Versioner** kan du se och hantera den aktuella versionen av din spelserver. Här kan du när som helst uppdatera till den senaste versionen eller aktivera automatiska uppdateringar för att säkerställa att din server alltid är uppdaterad.

![](https://screensaver01.zap-hosting.com/index.php/s/oxYF3tLpaa4Kz3W/preview)

Dessutom kan du aktivera e-postnotiser för automatiska uppdateringar för att hålla dig informerad om uppdateringar och alltid vara uppdaterad.

### Schemalagda uppgifter

Skapa schemalagda uppgifter som körs automatiskt vid definierade tider för att automatisera olika processer på din server. Du kan ställa in om en uppgift ska köras en gång eller upprepas vid behov. Stödda uppgiftstyper inkluderar att starta, stoppa eller starta om tjänster, starta om servern om den är online, skapa backuper eller köra egna kommandon.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Omstartsschema

Vill du schemalägga serveromstarter vid specifika tider? Omstartsschemat låter dig ställa in automatiska omstarter av din spelserver vid bestämda tider eller regelbundet.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS-inställningar

Med ZAP DNS-inställningar kan du skapa lättare att komma ihåg-adresser för din tjänst. Du kan antingen använda en subdomän av någon av våra domäner eller skapa en DNS-post på dina egna domäner och därmed få en adress som är bättre kopplad till dig som person.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Verktyg

I avsnittet **Verktyg** i din navigationspanel hittar du flera underavsnitt som hjälper dig att hantera din server. Dessa inkluderar **FTP Browser**, **Databaser** och **Backuper**. Nedan får du en detaljerad introduktion till dessa områden.

### FTP-Browser

Med **FTP Browser** får du all nödvändig info för att upprätta en anslutning till FTP-accessen. FTP-accessen ger dig direkt tillgång till filerna på din spelserver. Vi rekommenderar att använda ett externt FTP-program som **Filezilla** eller **WinSCP** för bästa användning. Om du inte är bekant med FTP kan guiden [Access via FTP](gameserver-ftpaccess.md) vara till hjälp.

![](https://screensaver01.zap-hosting.com/index.php/s/fZSYpSi4KwPos5P/preview)

**FileZilla:** FileZilla är den enklaste och mest välkända FTP-klienten. Installera bara, starta och skriv in dina inloggningsuppgifter i den övre raden som du hittar lite längre upp på denna sida. Efter ett snabbt klick på "Anslut" loggas du in direkt på servern och kan hantera filerna.

**WinSCP:** WinSCP är egentligen avsett för SCP och SFTP (de krypterade varianterna av FTP) men kan hantera FTP på samma sätt. Programmet är mer omfattande än FileZilla och passar avancerade användare.

### Databaser

Utöver våra spelserverprodukter erbjuder vi även 10 inkluderade databaser. Dessa databaser behövs till exempel när data ska sparas i en databas. Under **Databaser** kan du skapa en databas och se åtkomstuppgifterna. Du kan också aktivera backup-alternativet och importera befintliga databasbackuper.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backuper

Under **Backuper** kan du skapa både manuella och automatiska backuper för din server och dess tillhörande databas. Detta gör det enklare att återställa dina data vid problem eller dataförlust.

I inställningarna kan du ange om backuper ska skapas automatiskt och om detta ska ske dagligen eller veckovis. Dessutom kan du bestämma om de äldsta backuperna ska raderas vid behov, till exempel när lagringsutrymmet börjar ta slut.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Vi erbjuder som standard 10 GB lagringsutrymme på lagringsservern för backuper för våra spelserverprodukter. Om du behöver mer utrymme kan detta uppgraderas mot en avgift. På så sätt säkerställer du att du alltid har tillräckligt med plats för dina backuper och kan fortfarande komma åt äldre backuper vid behov.

## Fler länkar

I avsnittet **Fler länkar** hittar du ytterligare länkar som är relevanta för din produkt.

### Vanliga frågor

Avsnittet **Vanliga frågor** ger en översikt över de vanligaste frågorna från våra kunder. Här hittar du hjälpsamma svar och detaljerad info om olika ämnen för att hjälpa dig snabbt och effektivt.

### ZAP-Hosting Dokumentation

Vi erbjuder omfattande dokumentation för våra produkter som fungerar som en kunskapsbas för de vanligaste frågorna och funderingarna. Där hittar du olika guider och hjälp inom olika områden som hjälper dig att använda och hantera din produkt.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Nyheter

**Nyheter** ger dig en komplett översikt över alla meddelanden och nyheter relaterade till din tjänst. Här hittar du viktig info om olika aspekter som:

- Ändringar i tjänsten, till exempel genom uppdateringar eller nya funktioner
- Meddelanden om eventuella underhåll eller tekniska problem
- Specialerbjudanden och kampanjer som ger dig exklusiva förmåner eller rabatter
- Annan relevant info som kan påverka användningen av din tjänst

Genom att regelbundet kolla **Nyheter** håller du dig uppdaterad och kan anpassa din tjänst för att få ut det mesta av din server.

<InlineVoucher />