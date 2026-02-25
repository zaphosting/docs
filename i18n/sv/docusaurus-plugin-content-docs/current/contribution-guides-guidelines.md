---
id: contribution-guides-guidelines
title: Guide-riktlinjer
description: "Upptäck hur du skapar konsekvent, högkvalitativ dokumentation som förbättrar läsarens upplevelse och tydlighet → Lär dig mer nu"
sidebar_label: Riktlinjer
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

För att säkerställa att innehållet i våra ZAP-Docs alltid håller en jämn kvalitet och stil har vi tagit fram ett antal riktlinjer att följa när du skapar eller redigerar innehåll för vår dokumentation. Du **måste** följa våra riktlinjer noggrant för att din förslag och slutgiltiga pull request ska hanteras snabbt. Viktigare än så är att det säkerställer att våra läsare får en bättre och mer konsekvent högkvalitativ upplevelse när de läser och följer guiderna.

Våra riktlinjer för guidebidrag är uppdelade i följande sektioner:

- Struktur
- Stil
- Formatering
- Terminologi

Vi rekommenderar att du går igenom dessa sektioner minst en gång innan du börjar skriva något innehåll. Det är också en bra plats att återkomma till om du är osäker på hur du ska angripa något under skapandeprocessen.

## Struktur

Alla våra guider i ZAP-Docs följer en relativt konsekvent struktur som börjar med en kort introduktion tillsammans med eventuella förutsättningar eller förberedelsesteg, följt av huvudinnehållet och en kort avslutning.

Strukturen kan ibland ändras beroende på vilken typ av guide som produceras. Detta kan diskuteras med ZAP-Docs-teamet i ditt initiala förslag. Du kan se hur man använder rubriker via avsnittet om headers, det görs med vanlig traditionell Markdown.

Den struktur vi vanligtvis förväntar oss att se har följande rubriker:

- **Sidtitel** (H1) - Sätts via `title` metadata högst upp på sidan.
- **Introduktion** (H2) - Kort 1-2 meningar som förklarar ämnet för guiden och viktigast av allt vad guiden syftar till att uppnå.
- **Förberedelse** (H2) - Denna rubrik är **valfri**. Den behövs bara om det finns vissa förutsättningar eller förberedelsesteg som måste göras innan läsaren kan följa guiden. Här kan du till exempel referera till vår [SSH Initial Access](vserver-linux-ssh.md) guide om användaren måste logga in på sin server först. Eller så kan du presentera eventuella mjukvaru- och/eller hårdvarukrav. Eller ge snabba instruktioner om hur man förbereder någon mjukvara, som en brandvägg. Vi rekommenderar att du kollar in vår [ZAP-Docs-webbplats](https://zap-hosting.com/guides) för att se om det finns guider som täcker dessa steg och i så fall länkar till dem.
- **Huvudämne** (H2) - Detta är din första huvudsektion i guiden. I många fall skulle detta sannolikt vara **Installation**, följt av olika undersektioner för varje del av processen. Men det behöver inte alltid vara så, till exempel kan informationsguider ha ett annat huvudämne.
- Valfritt: **Underämne 1** (H3)
- Valfritt: **Underämne 2** (H3)
- ...
- Valfritt: **Ett annat ämne** (H2)
- **Avslutning** (H2) - Som sista del av guiden bör du avsluta med 1-3 meningar som förklarar vad läsaren framgångsrikt har åstadkommit och ge en referens till vårt Support Team om läsaren fortfarande har problem.

:::info Användning av underrubriker (H3 & H4)
Du uppmuntras att använda H3-rubriker för att skapa undersektioner inom huvudsektioner (H2) för att ytterligare organisera större innehåll i strukturerade delar. Ett exempel finns i sektionen **Huvudämne** ovan.

Du kan även använda H4-rubriker. Dessa är användbara om du vill skapa ytterligare en undersektion utan att visa den i den högra sidans innehållsförteckning. De är också bra om du behöver dela upp en H3-sektion i ännu mindre delar.

Om du använder underrubriker är det oftast vettigt att ha minst två eller fler underrubriker inom den överordnade rubriken, annars brukar det inte vara meningsfullt att ha bara en underrubrik inom en huvudrubrik.
:::

I framtiden kommer vi att lägga till mallar med förberedda Markdown-strukturer som blir en bra startpunkt för att skapa nya sidor. Detta kommer snart.

### Titlar

Titlar ska vara korta och tydligt spegla huvudsyftet med guiden. Fundera på vad läsaren ska uppnå i slutet, som att slutföra en installation, konfigurera en tjänst eller förstå ett specifikt tekniskt ämne. Resultatet ska vara direkt igenkännbart från titeln.

Varje titel måste börja med rätt produktkategori-prefix. Detta prefix ska matcha den sektion där guiden placeras i sidomenyn. Genom att granska befintliga guider i samma kategori säkerställer du konsekventa namngivningskonventioner.

Till exempel ska en guide relaterad till VPS-produkten följa en struktur som: `VPS: SteamCMD Linux Setup`.

Om en guide är skriven på ett generellt sätt och gäller lika för flera produkter, som en tjänst eller gameserver-installation som fungerar både på VPS och Dedikerade Servrar, ska produktnamnet inte ingå i titeln. I sådana fall är guiden avsiktligt produktoberoende och kräver därför inget specifikt produktprefix.

### Introduktion

Introduktionen till din guide ska vara relativt kort och koncis, vanligtvis 1-2 meningar. I innehållet bör du kort beskriva ämnesområdet och viktigast av allt förklara vad guiden kommer att visa läsaren och informera om slutmålet.

Ett exempel på en ideal introduktion för en guide om SteamCMD kan vara:

- **1:a meningen**: SteamCMD är ett viktigt verktyg som behövs för att installera dedikerade servrar för en mängd olika spel, inklusive Palworld, Enshrouded och fler.
- **2:a meningen**: I denna guide går vi igenom första installationen av SteamCMD på din Linux-server. Vi använder Ubuntu i exemplen, men processen bör vara mycket liknande för andra distributioner.

Som i exemplet sammanfattar det kort både relevanta ämnen för guiden och presenterar det övergripande målet för läsaren.

### Förberedelse

Förberedelsesektionen är användbar för att klargöra eventuella nödvändiga förutsättningar som läsaren måste uppfylla innan guiden kan följas. Det kan vara mjukvaru- eller hårdvarukrav, instruktioner för att förbereda mjukvara som en brandvägg eller helt enkelt vägleda användaren att logga in på sin server via SSH eller RDP.

Vi rekommenderar starkt att du kollar in vår [ZAP-Docs-webbplats](https://zap-hosting.com/guides) för att söka efter guider som kan täcka eller relatera till de förberedelsesteg du planerar att inkludera. Om det finns en guide som täcker ämnet, till exempel [SSH Initial Access](vserver-linux-ssh.md), bör du länka till den och informera läsaren att följa den innan de går vidare.

Vanliga förutsättningar för guider inkluderar:

- Mjukvara som krävs (t.ex. Git, Node.js, Python, Docker)
- Tutorials som kan hjälpa läsaren att få grundläggande kunskap (t.ex. en annan ZAP-Docs-sida)
- Användarkonton som API:er
- Nödvändiga inställningar (t.ex. DNS/SSL)

Ett exempel för en Reverse Proxy-guide kan vara:
```
För att sätta upp en reverse proxy behöver du en Linux-server för att hosta din proxyserver och du bör kunna ansluta till den. Använd vår [SSH Initial Access](vserver-linux-ssh.md) guide om du behöver hjälp med detta. Du behöver också tillgång till en domän som du äger. För varje subdomän du planerar att använda bör du skapa en `A` DNS-post som pekar på IP-adressen till din Linux-server.
```

### Huvudämne

Nu är det dags att skriva huvuddelen av din guide. Du är varmt välkommen att använda olika H2, H3 och H4-rubriker för att strukturera din guide på ett lämpligt sätt. Det är logiskt att använda H2-rubriker för stora sektioner och dela upp dem i undersektioner med H3 och/eller H4.

I många fall, särskilt för guider som täcker installationsprocesser, använder du sannolikt en **Installation**-rubrik som delas upp i olika H3-underrubriker. Om du har svårt att hitta rätt struktur, oroa dig inte – vi hjälper dig under förslagsfasen att planera en välbalanserad guide.

Inom varje sektion rekommenderas det att lägga till korta inledande och avslutande övergångsmeningar för att hela tiden informera läsaren om vad de gjort hittills och vad som kommer härnäst. Självklart gäller detta inte för den sista huvudsektionen som naturligt övergår i avslutningen.

Exempel på sådana meningar:

- **Inledande mening**: I denna sektion går du igenom konfigurationsprocessen för att anpassa mjukvaran efter dina önskemål.
- **Avslutande mening**: Med konfigurationen klar och filen sparad, gå vidare till nästa sektion för att skapa administratörskontot och börja använda mjukvaran.

Genom dessa övergångsmeningar får läsaren viktig kontext som gör att guiden flyter bra. Kom ihåg att alltid använda andra person (t.ex. "Du kommer att skapa") istället för första person när du skriver innehåll och övergångar.

### Avslutning

Slutligen är den sista sektionen guiden avslutning. Denna del ska avsluta guiden med 1-3 meningar som förklarar vad läsaren framgångsrikt har åstadkommit och ge referenser till vidare läsning eller guider som kan hjälpa dem att fördjupa sina kunskaper.

Det är bra att länka till befintliga ZAP-Docs-guider här, särskilt om de naturligt följer på din guide. Vi rekommenderar också att ge en referens till vårt Support Team om läsaren fortfarande har problem.

Ett exempel på en bra avslutning är:
```
Du har nu framgångsrikt satt upp mjukvaran för att köra på din Linux-server! Vi rekommenderar att du kollar in våra Linux Service-guider i denna sektion för att installera fler tjänster.

För fler frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂
```

## Stil

Stilen i ZAP-Hostings dokumentation bygger på vår tro på att producera högkvalitativa, praktiska och lättillgängliga guider som täcker ett brett spektrum av ämnen och stödjer läsare på alla erfarenhetsnivåer.

### Teknisk & korrekt

Våra artiklar ska vara så tekniskt korrekta som möjligt och uppdaterade med den senaste branschinformationen. Vi förväntar oss att artiklar inte bara låter användaren nå slutmålet att lära sig, bygga eller sätta upp något nytt, utan också att de lär sig och förstår vad de gjort under artikeln. Varje steg du skapar i en guide ska ha ett tydligt syfte och förklaring, med extra alternativ och/eller flaggor där det är lämpligt. Du ska alltid hålla läsaren uppdaterad om vad de gör och varför de gör de åtgärder som ingår i guiden.

Skribenter bör alltid korrekturläsa och testa sina guider för att säkerställa att allt är tekniskt korrekt och fungerar som det ska innan de skickar in en pull request. ZAP-Hostings dokumentationsteam kommer att läsa igenom och testa din guide där det är lämpligt för att säkerställa att den är konsekvent och faktamässigt korrekt eller diskutera förbättringar om det finns fel.

:::tip
Vi rekommenderar alltid våra skribenter att köra sitt innehåll genom ett stavningskontrollverktyg för att säkerställa att stavning och grammatik är korrekt innan du skapar en pull request. En användbar webbplats för detta är: https://languagetool.org/
:::

### Praktisk & användbar

När en läsare har läst klart en artikel ska de ha lärt sig, byggt eller satt upp något från början till slut. Våra guider ska stödja läsare på alla erfarenhetsnivåer, därför ska dina bidrag täcka ämnet grundligt för att säkerställa att läsaren blir kunnig och/eller har uppnått något. Det betyder att du som skribent måste täcka ditt ämne noggrant och nämna alla nödvändiga detaljer inklusive förutsättningar. Som skribent ska du bara länka till externa webbplatser om det inte finns någon dokumentation om detta på ZAP-Docs eller om det är för att låta användaren samla ytterligare information som inte är nödvändig för din artikel men kan vara bra för att bygga upp deras tekniska kunskap. Externa länkar ska inte leda till konkurrenters dokumentation.

### Vänlig, formell & omfattande

Vi vill att vår dokumentation ska vara framåtblickande och vänlig för att göra den tillgänglig för alla läsare, men samtidigt formell. Genom hela din guide vill vi att tonen ska vara acceptabel för alla läsare, oavsett erfarenhet eller språkliga barriärer.

Eftersom dessa guider främst fokuserar på att stödja läsaren att lära sig och nå ett resultat, förväntar vi oss att skribenter använder andra person (t.ex. "Du behöver...") istället för första person (t.ex. "Jag tycker...") för att hålla läsaren engagerad och fokuserad.

Slutligen måste alla skribenter följa vår uppförandekod för att säkerställa att våra guider är accepterande för alla oavsett ålder, etnicitet, könsidentitet, erfarenhetsnivå, nationalitet, religion, politisk tillhörighet, sexuell läggning, socioekonomisk status eller teknologival. Du måste undvika potentiellt stötande språk och annat innehåll som refererar till ovan nämnda ämnen.

## Formatering

Vår dokumentation formateras med Markdown, ett brett använt och relativt enkelt språk. Läs igenom avsnitten nedan för att förstå vilka vi använder och hur.

:::tip
För fler exempel och utförliga förklaringar av Markdown-funktioner, kolla in [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) som ger mer info.
:::

### Rubriker

Rubriker är en av de viktigaste formateringsalternativen för att dela upp sidorna på ett tydligt och logiskt sätt. Huvudtiteln är H1, men du ska aldrig behöva använda den i texten. Istället används `title` metadata högst upp i guidefilen för detta.

I våra guider ska H2-rubriker användas för att dela upp guiden i huvudsektioner. Därefter används H3 för att dela upp huvudsektionerna i undersektioner. Ett exempel är att dela upp en huvudsektion i flera steg för att göra guiden enklare att följa. Slutligen finns även H4 som används mer sällan men har samma syfte att dela upp i undersektioner, dock visas de inte i guide-strukturen.

:::info
Om du använder underrubriker (t.ex. H3 under H2), se till att det finns två eller fler rubriker på samma nivå inom sektionen, annars är det felaktig användning.
:::

Här är ett snabbt exempel på hur man använder rubriker:

```
## Installation
H2 - Huvudsektion

### Ladda ner Spelfiler
H3 - Undersektion av H2

#### Via SteamCMD
H4 - Undersektion av H3

#### Manuellt via GitHub
H4 - Undersektion av H3

### Förbereda Konfiguration
H3 - Undersektion av H2

### Starta Server
H3 - Undersektion av H2
```

### In-line markdown

Vi använder olika in-line formateringar för att förbättra läsbarheten i våra guider och passa läsare med olika teknisk nivå. Läs igenom nedanstående för att förstå användningen.

#### Fetstil

Fetstil används främst för att betona information. Exempel:

- Byta kontext mellan steg
- Hostnamn, inloggningsuppgifter & användarnamn
- Nyckelterminologi

Du kan använda dubbla asterisker runt texten, t.ex. `**hej där**` blir **hej där**.

#### Kursiv stil

Kursiv stil används främst för att introducera nya tekniska nyckelord i artikeln. Exempel: Vi kommer idag att sätta upp en *reverse proxy*.

Använd en asterisk runt texten, t.ex. `*ZAP-Hosting - Mer KRAFT!*` blir *ZAP-Hosting - Mer KRAFT!*.

#### In-line kod

In-line kod används främst för att visa teknisk info som URL:er. Exempel:

- Filnamn och sökvägar (t.ex. `C:/User/[your_name]/AppData....test.png`)
- URL:er (t.ex. `https://zap-hosting.com`)
- Portar (t.ex. `:30120`)
- Kommandon (t.ex. `ipconfig`)
- SQL-frågor (t.ex. `SELECT * FROM servers`)
- Tangentbindningar & knapptryckningar (t.ex. `ENTER` eller `CTRL + C`)

#### Tabeller

Tabeller är användbara för att visa mycket repetitiv info, t.ex. kommandon, beskrivningar och användning i ett spel. Exempel:

```
| Kommando    | Beskrivning             | Användning            |
| ----------- | ----------------------- | --------------------- |
| /help       | Skickar hjälpkommando   | /help [kategori]      |
| /stop       | Stoppar servern         | /stop [true/false]    |
```

#### Kodblock

Kodblock är väldigt användbara för guider som innehåller kommandon, skript, terminalutdata med mera.

Använd ` ``` ` runt texten du vill ha i block. Du kan även ange språk efter första trippel-backquotes för syntaxmarkering. Exempel med JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Användning av Admonitions

Admonitions används för att lyfta fram viktig info i guiden. Det finns fem typer, var och en med olika syfte.

När du använder admonitions måste en tydlig och beskrivande titel alltid anges. Titeln gör att läsaren direkt förstår kontext och vikten utan att behöva läsa hela texten först.

Syntaxen är densamma för alla typer, bara nyckelordet ändras beroende på syfte:

```
:::warning Titel
	Din text här.
:::
```

#### Note

:::note Exempel: Ytterligare information
Används för kompletterande info som kan hjälpa läsaren men inte är nödvändig för att slutföra guiden.
:::

#### Tip

:::tip Exempel: Tips för prestandaoptimering
Används för praktiska råd, bästa praxis eller effektiviseringar baserat på erfarenhet.
:::

#### Info

:::info Exempel: Krav eller viktig detalj
Används för viktig kontext som läsaren bör känna till före eller under processen.
:::

#### Caution

:::caution Exempel: Risk vid konfiguration
Används för att varna läsaren om potentiella problem eller misstag som kan uppstå under guiden.
:::

#### Danger

:::danger Exempel: Känd bugg eller föråldrad funktion
Används för kritiska varningar, inklusive kända buggar, irreversibla åtgärder, säkerhetsrisker eller föråldrade funktioner som kan orsaka allvarliga problem.
:::

### Skärmdumpar

Skärmdumpar är ett superbra sätt att visuellt guida läsaren genom stegen och vi rekommenderar att använda dem där det passar. Se till att allt innehåll i skärmdumparna är på engelska, eftersom vår dokumentation är på engelska och samma engelska skärmdumpar används för andra språk vi erbjuder i docs. Skärmdumpar bör ha tillräckligt hög upplösning så att alla element är tydligt läsbara. Undvik små eller hårt beskurna bilder.

Du kan lägga till en skärmdump med följande syntax, byt ut `your_url` mot bildens URL:

```
![](your_url)
```

Bästa praxis är att använda en tjänst som Imgur för att ladda upp och använda bilden, eller dra in bilden direkt i redigeringsfältet om du använder GitHub-webbplatsen för att skapa innehåll, då laddas den upp automatiskt.

## Terminologi

I vår dokumentation används en rad nyckeltermer. Vi förväntar oss att du använder amerikansk-engelsk stavning för att hålla konsekvens i alla artiklar. Här standardiserar vi några vanliga termer.

### ZAP-Hosting-produkter

När du refererar till en ZAP-Hosting-produkt ska du alltid säkerställa att rätt namn, stavning och versalisering används. Kolla på [ZAP-Hostings webbplats](https://zap-hosting.com) för att se hur produkten refereras på relevant produktsida.

### Användardefinierade attribut

I de flesta guider behövs konfigurationsalternativ för saker som användare, hostnamn, domäner, IP-adresser och URL:er där läsaren måste använda sina egna uppgifter istället för våra platshållare.

Som standard ska du alltid använda `[your_attribute]` för att skilja statiska element från unika, där `attribute` ersätts med typen av attribut. Till exempel, när du nämner en IP ska du skriva `[your_server_ip]` i guiden eller när du nämner en URL `http://[your_server_ip]:30120`.

Detta gör tydligt vilka attribut läsaren måste ändra baserat på sin egen konfiguration. Du bör också ge en förklaring eller notis som berättar vilka attribut som måste ändras när de nämns första gången för att allt ska vara tydligt.

Använd `zaphosting` som standard för hostnamn, användarnamn eller databasenamn.

### Mjukvara

När du nämner mjukvara i dina guider ska du säkerställa att du följer korrekt stavning och versalisering av mjukvarans namn. Om mjukvarans webbplats inte är konsekvent med versalisering, följ samma versalisering inom en och samma artikel för att behålla konsekvens.

Du bör länka till mjukvarans officiella webbplats första gången du nämner den, om en sådan finns.