---
id: contribution-guides-guidelines
title: Guide-riktlinjer
description: "Upptäck hur du skapar konsekvent, högkvalitativ dokumentation som förbättrar läsarens upplevelse och tydlighet → Lär dig mer nu"
sidebar_label: Riktlinjer
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

För att säkerställa att innehållet i våra ZAP-Docs alltid håller en konsekvent kvalitet och stil, har vi tagit fram en rad riktlinjer att följa när du skapar eller redigerar innehåll för vår dokumentation. Du **måste** följa våra riktlinjer noggrant för att din förslag och slutgiltiga pull request ska behandlas snabbt. Viktigast av allt är att detta garanterar att våra läsare får en bättre och mer konsekvent högkvalitativ upplevelse när de läser och följer guiderna.

Våra riktlinjer för guidebidrag är uppdelade i följande sektioner:

- Struktur
- Stil
- Formatering
- Terminologi

Vi rekommenderar att du går igenom dessa sektioner minst en gång innan du börjar skriva något innehåll. Det är också en bra plats att referera till om du är osäker på hur du ska angripa något under skapandeprocessen.

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
Du uppmuntras att använda H3-rubriker för att skapa undersektioner inom huvudsektioner (H2) för att ytterligare organisera större innehåll i strukturerade delar. Ett exempel finns i avsnittet **Huvudämne** ovan.

Du kan också använda H4-rubriker. Dessa är användbara om du vill skapa ytterligare en undersektion utan att visa den i den högra sidans innehållsförteckning. De är också bra om du behöver dela upp en H3-sektion i ännu mindre delar.

Om du använder underrubriker är det oftast vettigt att ha minst två eller fler underrubriker inom en överordnad rubrik, annars brukar det inte vara meningsfullt att bara ha en enda underrubrik under en huvudrubrik.
:::

I framtiden kommer vi att lägga till mallar med förberedda Markdown-strukturer som blir en bra startpunkt för att skapa nya sidor. Detta kommer snart.

### Titlar

Titlar för din guide bör vara korta och baserade på det övergripande målet med guiden du skrivit. Tänk noga på vad läsaren kommer att uppnå i slutet av guiden, till exempel att installera en mjukvara eller ge information om ett specifikt ämne.

Titeln ska föregås av produktkategorin som guiden hör till, vilket också bör vara där du placerat guiden i sidomenyn. Du kan enkelt kolla andra guider i samma sektion för att se deras prefix.

Ett exempel på en bra titel för en guide som rör VPS-produkten är: `VPS: SteamCMD Linux Setup`

### Introduktion

Introduktioner till din guide bör vara relativt korta och raka på sak, vanligtvis 1-2 meningar. I innehållet ska du kort beskriva ämnesområdet och viktigast av allt förklara vad guiden kommer att visa läsaren, och informera om slutmålet.

Ett exempel på en idealisk introduktion för en guide om SteamCMD är:

- **1:a meningen**: SteamCMD är ett viktigt verktyg som behövs för att installera dedikerade servrar för en mängd olika spel, inklusive Palworld, Enshrouded och fler.
- **2:a meningen**: I denna guide går vi igenom första installationen av SteamCMD på din Linux-server. Vi använder Ubuntu i exemplen, men processen bör vara liknande för andra distributioner.

Som i exemplet sammanfattar det kort både relevanta ämnen i guiden och presenterar det övergripande målet för läsaren.

### Förberedelse

Förberedelseavsnittet är bra för att klargöra eventuella nödvändiga förutsättningar som läsaren måste uppfylla innan guiden kan följas. Det kan vara mjukvaru- eller hårdvarukrav, instruktioner för att förbereda mjukvara som en brandvägg eller helt enkelt guida användaren att logga in på sin server via SSH eller RDP.

Vi rekommenderar starkt att du kollar in vår [ZAP-Docs-webbplats](https://zap-hosting.com/guides) för att söka efter guider som kan täcka eller relatera till de förberedelsesteg du planerar att inkludera. Om det finns en guide som täcker ett ämne, till exempel [SSH Initial Access](vserver-linux-ssh.md), bör du länka till den och informera läsaren att följa den innan de går vidare.

Vanliga förutsättningar för guider inkluderar:

- Nödvändig mjukvara (t.ex. Git, Node.js, Python, Docker)
- Tutorials som kan hjälpa läsaren att få grundläggande kunskap (t.ex. en annan ZAP-Docs-sida)
- Användarkonton som API:er
- Nödvändiga inställningar (t.ex. DNS/SSL)

Ett exempel för en Reverse Proxy-guide kan vara:
```
För att sätta upp en reverse proxy behöver du en Linux-server för att hosta din proxyserver och du bör kunna ansluta till den. Använd vår [SSH Initial Access](vserver-linux-ssh.md) guide om du behöver hjälp med detta. Du behöver också tillgång till en domän som du äger. För varje subdomän du planerar att använda bör du skapa en `A` DNS-post som pekar på IP-adressen till din Linux-server.
```

### Huvudämne

Nu är det dags att skriva huvuddelen av din guide. Du är varmt välkommen att använda olika H2, H3 och H4-rubriker för att strukturera guiden på ett lämpligt sätt. Det är logiskt att använda H2 för stora sektioner och dela upp dem i undersektioner med H3 och/eller H4.

I många fall, särskilt guider som täcker installationsprocessen för mjukvara, använder man ofta en **Installation**-rubrik som delas upp i olika H3-underrubriker. Om du har svårt att hitta rätt struktur, oroa dig inte – vi hjälper dig under förslagsfasen att planera en välbalanserad guide.

Inom varje sektion rekommenderas det att lägga till korta inledande och avslutande övergångsmeningar för att hela tiden informera läsaren om vad de gjort hittills och vad som kommer härnäst. Självklart gäller detta inte för sista huvudsektionen som naturligt övergår i avslutningen.

Exempel på sådana övergångsmeningar:

- **Inledande mening**: I detta avsnitt går du igenom konfigurationsprocessen för att anpassa mjukvaran efter dina önskemål.
- **Avslutande mening**: Med konfigurationen klar och filen sparad, gå vidare till nästa avsnitt för att skapa administratörskontot och börja använda mjukvaran.

Dessa övergångar ger läsaren viktig kontext och gör att guiden flyter bra. Kom ihåg att alltid använda andra person (t.ex. "Du kommer att skapa") istället för första person när du skriver innehållet och övergångarna.

### Avslutning

Slutligen är det dags för avslutningen av guiden. Denna sektion bör avsluta guiden med 1-3 meningar som förklarar vad läsaren framgångsrikt har åstadkommit och ge referenser till vidare läsning eller guider som kan hjälpa dem att fördjupa sina kunskaper.

Det är bra att länka till befintliga ZAP-Docs-guider här, särskilt om de naturligt följer på din guide. Vi rekommenderar också att ge en referens till vårt Support Team om läsaren fortfarande har problem.

Ett exempel på en bra avslutning är:
```
Du har nu framgångsrikt satt upp mjukvaran för att köra på din Linux-server! Vi rekommenderar att du kollar in våra Linux Service-guider i denna sektion för att installera fler tjänster.

För fler frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂
```

## Stil

Stilen i ZAP-Hostings dokumentation bygger på vår tro på att skapa högkvalitativa, praktiska och lättillgängliga guider som täcker många ämnen och stödjer läsare på alla erfarenhetsnivåer.

### Teknisk & korrekt

Våra artiklar ska vara så tekniskt korrekta som möjligt och uppdaterade med den senaste branschinformationen. Vi förväntar oss att artiklar inte bara låter användaren nå slutmålet att lära sig, bygga eller installera något nytt, utan också förstå vad de gjort under processen. Varje steg i en guide ska ha ett tydligt syfte och förklaring, med extra alternativ och/eller flaggor där det är relevant. Du ska alltid hålla läsaren uppdaterad om vad de gör och varför.

Skribenter bör alltid korrekturläsa och testa sina guider för att säkerställa att allt är tekniskt korrekt och fungerar som det ska innan de skickar in en pull request. ZAP-Hosting docs-teamet kommer att läsa igenom och testa din guide där det är lämpligt för att säkerställa att den är konsekvent och faktamässigt korrekt, eller diskutera förbättringar om det finns fel.

:::tip
Vi rekommenderar alltid våra skribenter att köra sitt innehåll genom ett stavningskontrollverktyg för att säkerställa att stavning och grammatik är korrekt innan pull request. En användbar sida för detta är: https://languagetool.org/
:::

### Praktisk & användbar

När en läsare har läst klart en artikel ska de ha lärt sig, byggt eller satt upp något från början till slut. Våra guider ska stödja läsare på alla nivåer, därför ska ditt bidrag täcka ämnet ordentligt och nämna alla nödvändiga detaljer inklusive förutsättningar. Som skribent ska du bara länka till externa webbplatser om det inte finns någon dokumentation om detta i ZAP-Docs eller om det är för att låta användaren samla mer information som inte är nödvändig för din artikel men kan vara bra för att bygga upp teknisk kunskap. Externa länkar ska inte leda till konkurrenters dokumentation.

### Vänlig, formell & omfattande

Vi vill att vår dokumentation ska vara framåtblickande och vänlig för att vara tillgänglig för alla läsare, men samtidigt formell. Genom hela guiden vill vi att tonen ska vara acceptabel för alla, oavsett erfarenhet eller språkliga barriärer.

Eftersom guiderna främst fokuserar på att hjälpa läsaren att lära sig och nå ett resultat, förväntar vi oss att skribenter använder andra person (t.ex. "Du behöver...") istället för första person (t.ex. "Jag tycker...") för att hålla läsaren engagerad och fokuserad.

Slutligen måste alla skribenter följa vår uppförandekod för att säkerställa att våra guider är inkluderande för alla, oavsett ålder, etnicitet, könsidentitet, erfarenhetsnivå, nationalitet, religion, politisk tillhörighet, sexuell läggning, socioekonomisk status eller teknologival. Undvik språk eller innehåll som kan uppfattas som stötande eller diskriminerande.

## Formatering

Vår dokumentation formateras med Markdown, ett populärt och enkelt markeringsspråk. Läs igenom avsnitten nedan för att förstå vilka format vi använder och hur.

:::tip
För fler exempel och utförliga förklaringar av Markdown-funktioner, kolla in [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) som ger mer info.
:::

### Rubriker

Rubriker är en av de viktigaste formateringsalternativen för att dela upp sidorna på ett logiskt och tydligt sätt. Huvudtiteln är H1, men du ska aldrig behöva använda den i texten. Istället används `title` metadata högst upp i guidefilen för detta.

I våra guider används H2 för att dela upp guiden i huvudsektioner. Därefter används H3 för att dela upp huvudsektionerna i undersektioner. Ett exempel är att dela upp en huvudsektion i flera steg för att göra guiden enklare att följa. Slutligen finns även H4 som används mer sällan men har samma syfte att dela upp i undersektioner, dock visas de inte i guideöversikten.

:::info
Om du använder underrubriker (t.ex. H3 under H2), se till att det finns två eller fler rubriker på samma nivå inom sektionen, annars är det felaktig användning.
:::

Här är ett snabbt exempel på hur man använder rubriker:

```
## Installation
H2 - Huvudsektion

### Ladda ner Spelfiler
H3 - Undersektion till H2

#### Via SteamCMD
H4 - Undersektion till H3

#### Manuellt via GitHub
H4 - Undersektion till H3

### Förbereda Konfiguration
H3 - Undersektion till H2

### Starta Server
H3 - Undersektion till H2
```

### In-line markdown

Vi använder olika in-line formateringar för att förbättra läsbarheten och passa läsare med olika teknisk nivå. Läs igenom nedanstående för att förstå användningen.

#### Fetstil

Fetstil används främst för att betona information. Exempel:

- Byta kontext mellan steg
- Hostnamn, inloggningsuppgifter & användarnamn
- Nyckelterminologi

Du kan använda dubbla asterisker runt texten, t.ex. `**hej där**` blir **hej där**.

#### Kursiv stil

Kursiv används främst för att introducera nya tekniska nyckelord i artikeln. Exempel: Vi kommer att sätta upp en *reverse proxy* idag.

Använd en asterisk runt texten, t.ex. `*ZAP-Hosting - Mer POWER!*` blir *ZAP-Hosting - Mer Power!*.

#### In-line kod

In-line kod används för att visa teknisk info som URL:er. Exempel:

- Filnamn och sökvägar (t.ex. `C:/User/[your_name]/AppData....test.png`)
- URL:er (t.ex. `https://zap-hosting.com`)
- Portar (t.ex. `:30120`)
- Kommandon (t.ex. `ipconfig`)
- SQL-frågor (t.ex. `SELECT * FROM servers`)
- Tangenttryckningar (t.ex. `ENTER` eller `CTRL + C`)

#### Tabeller

Tabeller är användbara för att visa mycket repetitiv info, t.ex. kommandon, beskrivningar och användning i ett spel. Exempel:

```
| Kommando    | Beskrivning             | Användning            |
| ----------- | ----------------------- | --------------------- |
| /help       | Skickar hjälpkommando   | /help [kategori]      |
| /stop       | Stoppar servern         | /stop [true/false]    |
```

#### Kodblock

Kodblock är superbra för guider som innehåller kommandon, skript, terminalutdata med mera.

Använd ` ``` ` runt texten du vill blocka. Du kan också ange språk efter första backticks för syntaxmarkering, t.ex. ` ```js ` för JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Användning av admonitioner

I ditt innehåll kan du använda admonitioner för att lyfta fram info under en av 5 etiketter, som beskrivs nedan.

Syntaxen är densamma, byt bara ut nyckelordet mot den typ du vill använda. Exempel:

```
:::note
Det här är en notis! Byt ut nyckelordet ovan för att ändra typ.
:::
```

#### Notis

:::note Notistitel! (Valfritt)
Använd denna för att visa extra notiser som kan vara användbara men inte direkt viktiga.
:::

#### Tips

:::tip Tipstitel! (Valfritt)
Skriv tips från erfarenhet här.
:::

#### Info

:::info Infotitel! (Valfritt)
Viktig info som användaren bör känna till.
:::

#### Varning

:::caution Varningstitel! (Valfritt)
Något i guiden som användaren bör vara försiktig med? Markera det här.
:::

#### Fara

:::danger Farotitel! (Valfritt)
Används för att lyfta fram kritisk info, t.ex. kända buggar eller föråldrade funktioner.
:::

### Skärmdumpar

Skärmdumpar är ett grymt sätt att visuellt guida läsaren genom steg och vi rekommenderar att använda dem där det passar. Se till att allt synligt i skärmdumparna är på engelska, eftersom vår dokumentation är på engelska och samma engelska skärmdumpar används för andra språk. Skärmdumpar bör ha tillräckligt hög upplösning så att allt är tydligt läsbart. Undvik små eller hårt beskurna bilder.

Använd syntaxen nedan för att lägga till en skärmdump, byt ut `your_url` mot bildens URL:

```
![](your_url)
```

Bästa praxis är att använda en tjänst som Imgur för att ladda upp och använda bilden, eller dra in bilden direkt i redigeringsfältet om du använder GitHub-webbplatsen, som automatiskt laddar upp den åt dig.

## Terminologi

I vår dokumentation används många nyckeltermer. Vi förväntar oss att du använder amerikansk-engelsk stavning för att hålla konsekvens i alla artiklar. Här standardiserar vi några vanliga termer.

### ZAP-Hosting-produkter

När du nämner en ZAP-Hosting-produkt ska du alltid använda korrekt namn, stavning och versalisering. Kolla på [ZAP-Hostings webbplats](https://zap-hosting.com) för att se hur produkten refereras på relevant produktsida.

### Användardefinierade attribut

I de flesta guider behöver läsaren använda sina egna uppgifter för saker som användare, hostnamn, domäner, IP-adresser och URL:er istället för våra platshållare.

Som standard ska du alltid använda `[your_attribute]` för att skilja statiska element från unika, där `attribute` byts ut mot typen av attribut. Exempelvis, när du nämner en IP, skriv `[your_server_ip]` i guiden eller när du nämner en URL, skriv `http://[your_server_ip]:30120`. Detta gör det tydligt vilka attribut läsaren måste ändra efter sin egen konfiguration. Du bör också ge en förklaring eller notis om vilka attribut som ska ändras när de nämns första gången så att allt är klart.

Använd `zaphosting` som standard för hostnamn, användarnamn eller databasenamn.

### Mjukvara

När du nämner mjukvara i dina guider ska du säkerställa att stavning och versalisering är korrekt. Om mjukvarans webbplats inte är konsekvent, följ samma versalisering inom en och samma artikel för att hålla konsekvens.

Länka till mjukvarans officiella webbplats första gången du nämner den, om en sådan finns.