---
id: domain-teamspeak-redirect
title: "Domän: Ställ in TeamSpeak 3-vidarebefordran"
description: "Upptäck hur du förenklar anslutningen till din TeamSpeak 3-server med egna domäner eller subdomäner för enkel åtkomst → Lär dig mer nu"
sidebar_label: TeamSpeak 3-vidarebefordran
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
Tänk på att det alltid kan ta upp till 24 timmar innan ändringar i DNS-poster träder i kraft!
:::

## Introduktion

Du kan antingen vidarebefordra hela din domän eller bara en subdomän till din TeamSpeak 3-server.  
På så sätt behöver ingen komma ihåg den krångliga IP-adressen med siffror, utan kan enkelt ansluta till din TeamSpeak 3-server via domänen.

:::note
Som standard får **nya** TeamSpeak 3-servrar nu en `.zap.cloud`-alias med ett slumpmässigt prefix som kan användas för anslutning.
:::

<InlineVoucher />

## Använd TSDNS snabbsetup

Vi har implementerat ett nytt TSDNS-system för våra TeamSpeak 3-servrar som låter dig sätta upp en subdomän för din TeamSpeak 3-server med bara några klick! Om du inte har en domän hos oss, hoppa till nästa avsnitt för manuell DNS-konfiguration.

Börja med att gå till **Inställningar->TSDNS** i TeamSpeaks webbgränssnitt på vår hemsida. Här kan du välja en subdomän (prefix före domänen) samt antingen vår `zap-ts3.com` eller någon av dina egna domäner som du har hos oss på ditt ZAP-Hosting-konto.

:::info
För den här snabbsetup-funktionen behöver du [köpa en perfekt domän direkt hos oss](https://zap-hosting.com/en/shop/product/domain/) eller flytta din egen domän till ditt ZAP-Hosting-konto. Dessa domäner visas i TSDNS-sektionen när de är konfigurerade. Alternativt kan du använda den vanliga `zap-ts3.com` helt gratis.
:::

I vårt exempel ser du hur vi skapar en ny subdomän med `.zap.cloud`-domänen, som leder oss till vår TeamSpeak 3-server när den används.

![](https://screensaver01.zap-hosting.com/index.php/s/Mi3wK7cY639Rp3x/preview)

:::note
Observera att det kan ta upp till 3 timmar för domänen att spridas och börja fungera.
:::

## Vanlig DNS-konfiguration

För att vidarebefordra IP-adressen, skapa antingen en subdomän som pekar på IP-adressen till TeamSpeak 3-servern, eller vidarebefordra hela domänen utan subdomän.  
Det räcker om TeamSpeak 3-servern använder standardporten **9987**.  
Men om TeamSpeak 3-servern använder en annan port än standardporten krävs en extra **SRV-post** för att vidarebefordra domänen eller subdomänen till rätt port.

### SRV-tjänst

Tjänstenamnet börjar alltid med ett **understreck**.  
För en TeamSpeak 3-server är tjänsten alltid **_ts3**, utan undantag.

### SRV-protokoll

Som protokoll anger vi internetprotokollet som används för anslutningen. Här finns **UDP** och **TCP**.  
Protokollspecifikationen börjar också alltid med ett **understreck** och är antingen **_udp** eller **_tcp**.  
För en TeamSpeak 3-server används alltid **_udp**, utan undantag.

## Vidarebefordra domänen utan subdomän

För att vidarebefordra din domän till en spelserver utan att skapa en subdomän, öppna först din domän på  
instrumentpanelen och gå sedan till DNS-hantering i menyn till vänster.

![](https://puu.sh/Fuzfa/0927cbb177.png)

![](https://puu.sh/FuzhO/6f4694ab62.png)

Där ser du alla befintliga DNS-poster för din domän.  
Om du inte har skapat egna poster än kan du visa alla befintliga genom att klicka på  
den röda papperskorgen till höger.

![](https://puu.sh/Fuzm8/39f3c72fa6.png)

Klicka sedan på **Ny post** så kommer du till skapandet av en ny DNS-post.  
Som **Namn** väljer vi här domännamnet, till exempel **teamspeak-server.de**, typen är **A** och **värdet** är IP-adressen till din TeamSpeak 3-server, i detta fall **88.214.57.116**.  
Du kan låta fältet **TTL** vara orört.

![](https://screensaver01.zap-hosting.com/index.php/s/cTGTdBFrigs7HDG/preview)

När du fyllt i allt klickar du på **Spara**, posten sparas i DNS-inställningarna och visas inom  
24 timmar.

:::info
Det kan alltid ta upp till 24 timmar innan nya DNS-poster aktiveras. Tyvärr kan ingen påverka detta.
:::

## Vidarebefordra domänen med subdomän

Vill du skapa en subdomän, till exempel ts.teamspeak-server.de, gör du som i föregående exempel,  
men som **Namn** anger du subdomänen istället för domännamnet.  
Det ser ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/ocaqgX2DSdspGQ8/preview)

## Vidarebefordra domänen med port (SRV)

Om standardporten **9987** inte används måste en extra **SRV-post** skapas för att inte bara vidarebefordra domänen  
till IP-adressen utan även till rätt port.

Först skapar du antingen en **subdomän** som beskrivet ovan, eller så vidarebefordrar du domänen direkt till TeamSpeak 3-servern som beskrivet ovan, båda fungerar.

### Vidarebefordra utan subdomän

När du har vidarebefordrat din domän till IP-adressen för din TeamSpeak 3-server som beskrivet ovan, klicka på **Ny post**  
och skapa en post som ser ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/H3NGmYZHyJsCYnf/preview)

Fältet **Namn** innehåller tjänstens namn, i det här fallet vår TeamSpeak 3-server, alltså **_ts3**. Det innehåller också protokolltypen, här **_udp**, samt **domännamnet**.  
Fältet **Typ** anger vilken typ av post det är, i detta fall en **SRV-post**.  
Fältet **värde** innehåller spelporten och domänen, i detta fall **0 1234 teamspeak-server.de**, där **1234** är **spelporten** och **teamspeak-server.de** är domänen som vidarebefordras till.  
Värdet **0** är inte längre relevant och ska alltid vara kvar. Fälten **TTL** och **Prio** påverkas inte heller.

Klicka sedan på **Spara**.

:::info
Det är viktigt att en **punkt** sätts i slutet av domänen i **värde**-fältet!
:::

### Vidarebefordra med subdomän

Med en subdomän är det nästan exakt samma sak. Först skapar du en subdomän som beskrivet ovan och vidarebefordrar den till IP-adressen för din TeamSpeak 3-server. Sedan klickar du på **Ny post** och skapar en post med följande innehåll:

![](https://screensaver01.zap-hosting.com/index.php/s/aEkro3z9WBgWf8g/preview)

Fältet **Namn** innehåller tjänstens namn, alltså vår TeamSpeak 3-server, **_ts3**. Det innehåller också protokolltypen, här **_udp**, samt **domännamnet** tillsammans med **subdomänen**, som är **ts.teamspeak-server.de**.  
Fältet **Typ** anger vilken typ av post det är, i detta fall en **SRV-post**.  
Fältet **värde** innehåller porten och domänen med subdomän, i detta fall **0 1234 ts.teamspeak-server.de**, där **1234** är **porten för TeamSpeak 3-servern** och **ts.teamspeak-server.de** är domänen med subdomän som vidarebefordras till.  
Värdet **0** är inte längre relevant och ska alltid vara kvar. Fälten **TTL** och **Prio** påverkas inte.

<InlineVoucher />