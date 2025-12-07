---
id: contribution-blogs-guidelines
title: Riktlinjer för Bloggar
description: "Upptäck hur du skapar högkvalitativa, konsekventa blogginlägg som engagerar läsare och förbättrar dina skrivkunskaper → Lär dig mer nu"
sidebar_label: Riktlinjer
---

![Blogs Banner](https://screensaver01.zap-hosting.com/index.php/s/ysxLZ26K3dSRLJQ/preview)

För att säkerställa att alla ZAP-Hosting Blogginlägg håller en jämn kvalitet och stil har vi tagit fram en rad riktlinjer som du bör följa när du skapar innehåll för vårt Blog Contribution Program. Du måste följa våra riktlinjer noggrant för att dina förslag och efterföljande utkast ska behandlas snabbt. Viktigast av allt är att detta garanterar att våra läsare får en bättre och mer konsekvent högkvalitativ upplevelse när de läser våra bloggar.

Våra riktlinjer för bloggbidrag kan delas in i några huvudsektioner, vilka är:

- Struktur
- Stil
- Formatering
- Terminologi

## Struktur

Våra blogginlägg inom vårt bidragsprogram bör följa en relativt konsekvent struktur som skapar läsarintresse och ger information och nyheter till läsaren. ZAP Contribution Team kommer att samarbeta med dig för att säkerställa att din struktur är lämplig när du skapar ett bloggföslog.

- **Sidtitel** (H1)
- **Introduktion** (H2)
- **Förberedelser** (H2)
- **Huvudämne** (H2)
- Valfritt: **Underrubrik 1** (H3)
- Valfritt: **Underrubrik 2** (H3)
- ...
- Valfritt: **Ett annat ämne** (H2)
- **Avslutning** (H2)

:::info Användning av underrubriker (H3 & H4)
Du uppmuntras att använda H3-rubriker för att skapa underavsnitt inom huvudsektioner (H2) för att ytterligare organisera större innehållsmängder i strukturerade delar. Ett exempel kan ses i sektionen **Huvudämne** ovan.

Om du använder underrubriker är det oftast vettigt att ha minst två eller fler underrubriker inom föräldrarubriken, annars brukar det inte vara meningsfullt att ha bara en underrubrik under en huvudrubrik.
:::

:::info
Tänk på att ovanstående är en ungefärlig referens. Huvuddelen av ditt blogginlägg kan ha olika rubriker beroende på vad som passar ditt innehåll, men alla blogginlägg bör konsekvent ha en titel, introduktion och avslutning runt huvudtexten.
:::

### Titlar

Titeln på ditt blogginlägg bör vara kort, tydlig och catchy för att fånga läsarens uppmärksamhet. Den ska exakt säga vad ditt blogginlägg handlar om, till exempel om det är nyheter eller tips och råd. Ett exempel på en bra titel är: **Top 10 FiveM Police Scripts**.

### Introduktion

Introduktionen till ditt blogginlägg bör vara relativt kort och koncis, vanligtvis 1-2 meningar. I innehållet ska du kortfattat beskriva ämnesområdet och viktigast av allt förklara vad blogginlägget kommer att presentera för läsaren, och informera om slutmålet.

Ett exempel på en ideal introduktion för ett blogginlägg om SteamCMD skulle vara:

- **1:a meningen**: SteamCMD är ett oumbärligt verktyg som behövs för att installera dedikerade servrar för en mängd olika spel, inklusive Palworld, Enshrouded och fler.
- **2:a meningen**: I detta blogginlägg går vi igenom första gången-setup-processen för att installera SteamCMD på din Linux-server. Vi använder Ubuntu i exemplen, men processen bör vara mycket liknande för andra distributioner.

Som i exemplet sammanfattar det kort både de relevanta ämnena i blogginlägget och presenterar det övergripande målet för läsaren.

### Förberedelser

Förberedelsedelen är användbar för att klargöra eventuella nödvändiga förutsättningar som läsaren måste uppfylla innan de kan följa blogginlägget. Det kan vara mjukvaru- eller hårdvarukrav, instruktioner för att förbereda någon mjukvara som en brandvägg eller helt enkelt guida användaren att logga in på sin server via SSH eller RDP.

Vi rekommenderar starkt att du kollar in vår [ZAP-Docs webbplats](https://zap-hosting.com/guides) för att söka efter guider som kan täcka eller relatera till de förberedelsesteg du planerar att inkludera. Om det finns en guide som täcker ett ämne, till exempel [SSH Initial Access](vserver-linux-ssh.md), bör du länka till guiden och informera läsaren att följa den innan de går vidare.

Vanliga förutsättningar för blogginlägg inkluderar:

- Nödvändig mjukvara (t.ex. Git, Node.js, Python, Docker)
- Tutorials som kan hjälpa läsaren att få grundläggande kunskap (t.ex. en annan ZAP-Docs-sida)
- Användarkonton som API:er
- Krävs inställningar (t.ex. DNS/SSL)

Ett exempel för ett blogginlägg om Reverse Proxy skulle kunna vara:
```
För att sätta upp en reverse proxy behöver du en Linux-server för att hosta din proxyserver och du bör kunna ansluta till den. Använd vår [SSH Initial Access](vserver-linux-ssh.md) guide om du behöver hjälp med detta. Du behöver också tillgång till en domän som du äger. För varje subdomän du planerar att använda bör du skapa en `A` DNS-post som pekar på IP-adressen till din Linux-server.
```

### Huvudämne

Nu är det dags att skriva huvuddelen av ditt blogginlägg. Vi rekommenderar att dela upp blogginlägget i några sektioner för att hjälpa läsaren att hålla sig engagerad i innehållet. Det finns inga strikta krav på hur dessa ska delas upp, men som tumregel bör du försöka dela upp stora mängder innehåll i några rubriker. ZAP Contributions Team hjälper dig med detta under processen.

Om ditt blogginlägg innehåller steg-för-steg-instruktioner eller tutorials kan det vara smart att inkludera stegnummer och en kort beskrivning inom huvudämnesrubriken, till exempel **Steg 1 - Skapa mappen**. Du bör kort beskriva vad läsaren gör i steget för att ge ett övergripande mål i första meningen. Mellan stegen bör du försöka skapa en kort introduktion och avslutande övergångsmeningar för att låta läsaren veta vad de gjort hittills och vad som kommer i nästa steg. Dessa övergångar ger viktig kontext för läsaren. Undvik upprepningar och använd olika uttryck för att inte upprepa stegen.

### Avslutning

Slutligen är sista sektionen avslutningen på blogginlägget. Denna del ska avsluta guiden med 1-3 meningar som förklarar vad läsaren framgångsrikt har åstadkommit, lärt sig eller ge en slutsats till en informativ guide.

Det är också vettigt att ge referenser till vidare läsning eller andra blogginlägg eller guider som användaren kan följa för att fördjupa sina kunskaper i ämnet. Du bör länka till eventuella befintliga ZAP-Docs-guider eller blogginlägg här, särskilt om de naturligt följer på från din guide.

## Stil

Stilen i skrivandet för ZAP-Hosting docs följer vår tro på att producera högkvalitativa, praktiska och lättillgängliga blogginlägg för att stödja ett brett spektrum av ämnen och hjälpa läsare på alla erfarenhetsnivåer.

### Teknisk & korrekt

Våra blogginlägg strävar efter att vara så tekniskt korrekta som möjligt och uppdaterade med den senaste branschinformationen. Genom hela blogginlägget förväntar vi oss att ge läsarna välskriven och högkvalitativ information om nya ämnen och teknologier samt tutorials som fokuserar på att läsaren lär sig ny information. Om ditt blogginlägg innehåller steg-för-steg-instruktioner eller tutorials ska varje steg ha ett tydligt syfte och förklaring, med ytterligare alternativ och/eller flaggor där det är lämpligt.

Skribenter bör alltid korrekturläsa och testa sina blogginlägg för att säkerställa att allt är tekniskt korrekt och fungerar som det ska innan utkast skickas in. ZAP Contributions Team kommer att läsa igenom och testa ditt blogginlägg där det är lämpligt för att säkerställa att det är konsekvent och faktamässigt korrekt eller diskutera förbättringar om det upptäcks fel.

:::tip
Vi rekommenderar alltid våra skribenter att köra sitt innehåll genom ett stavningskontrollverktyg för att säkerställa att stavning och grammatik är korrekt innan utkast skickas in. En användbar sida för detta är: https://languagetool.org/
:::

### Praktisk & användbar

När en läsare har läst klart ett blogginlägg ska de ha lärt sig, byggt eller satt upp något från början till slut. Våra blogginlägg syftar till att stödja läsare på alla erfarenhetsnivåer, därför ska ditt blogginlägg täcka ämnet ordentligt för att säkerställa att läsaren blir kunnig och/eller har åstadkommit något. Som skribent betyder detta att du måste täcka ditt ämne grundligt, inklusive alla nödvändiga detaljer och förutsättningar där det är lämpligt. Du bör bara skicka läsare till externa webbplatser om det inte finns någon befintlig dokumentation om detta på ZAP Docs eller om det är för att låta läsaren samla ytterligare detaljer som inte är nödvändiga för din artikel men kan vara bra för att bygga upp deras tekniska kunskap. Externa länkar ska inte leda till konkurrenters dokumentation.

### Vänlig, formell & omfattande

Vi förväntar oss att vår dokumentation är framåtblickande och vänlig för att göra den tillgänglig för alla läsare, men samtidigt formell. Genom hela ditt blogginlägg bör du sikta på en ton som är acceptabel för alla läsare, oavsett erfarenhet eller språkliga barriärer.

Eftersom dessa är blogginlägg som främst fokuserar på att stödja läsaren att lära sig och nå ett resultat, förväntar vi oss att skribenter använder andra person (t.ex. "Du behöver...") istället för första person (t.ex. "Jag tycker...") för att hålla läsaren engagerad och fokusera på dem.

Slutligen måste alla skribenter följa vår uppförandekod för att säkerställa att våra blogginlägg är acceptabla för alla oavsett ålder, etnicitet, könsidentitet, erfarenhetsnivå, nationalitet, religion, politisk tillhörighet, sexuell läggning, socioekonomisk status eller teknologival. Du måste undvika potentiellt stötande språk och annat innehåll som refererar till ovan nämnda ämnen.

## Formatering

Vår blogg är formaterad med Markdown, ett brett använt märkspråk. Använd sektionerna nedan för att förstå vilka element vi använder och hur de kan användas i dina blogginlägg.

Vi tillåter användare att använda valfria skrivverktyg för sitt innehållsskapande, men vi rekommenderar **starkt** att använda verktyget **[StackEdit](https://stackedit.io/app#)** för att skriva ditt innehåll samtidigt som du behåller all grym funktionalitet i Markdown. Du kan sedan direkt exportera detta till Google Drive eller någon fil-delningstjänst och få en länk som du kan dela med oss.

:::tip
För fler exempel och utförliga förklaringar av Markdown-funktioner, kolla in [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) som ger mer info.
:::

### Rubriker

Rubriker är en av de viktigaste formateringsalternativen för att dela upp blogginlägg på ett tydligt och logiskt sätt. Huvudtiteln består av H1-rubrik.

I våra bloggar ska H2-rubriker användas för att dela upp blogginlägget i huvudsektioner. Därefter används H3-rubriker för att dela upp huvudsektionerna i underavsnitt. Ett exempel där detta kan vara lämpligt är att dela upp en huvudsektion i flera steg för att göra det enklare att följa blogginlägget. Slutligen finns även H4-taggen som används mer sällan men har samma syfte att dela upp i underavsnitt.

:::info
Om du använder underrubriker (t.ex. H3-rubriker under huvud H2-rubriker), se till att det finns två eller fler rubriker på samma nivå inom den sektionen, annars är det felaktig användning.
:::

Här är ett snabbt exempel på hur man använder rubriker:

```
## Installation
H2 - Huvudsektion

### Ladda ner Spelfiler
H3 - Underavsnitt till H2

#### Via SteamCMD
H4 - Underavsnitt till H3

#### Manuellt via GitHub
H4 - Underavsnitt till H3

### Förbereda Konfiguration
H3 - Underavsnitt till H2

### Starta Server
H3 - Underavsnitt till H2
```

### In-line markdown

Vi använder olika in-line formateringar för att förbättra läsbarheten i våra blogginlägg och passa läsare med varierande teknisk kunskap. Läs igenom sektionen nedan för att förstå användningen av varje.

#### Fetstil

Huvudanvändningen av fetstil är att betona information. Exempel på detta inkluderar:

- Byta kontext mellan steg
- Hostnamn, inloggningsuppgifter & användarnamn
- Nyckelterminologi

Du kan enkelt använda dubbla asterisker runt texten för att göra den fet, t.ex. `**hej där**` blir **hej där**.

#### Kursiv stil

Primär användning av kursiv stil är att introducera nya tekniska nyckelord i din artikel. Till exempel, vi kommer att sätta upp en *reverse proxy* idag.

För att använda kursiv stil placerar du en enkel asterisk runt texten, t.ex. `*ZAP-Hosting - More POWER!*` blir *ZAP-Hosting - More POWER!*.

#### In-line kod

In-line kod används främst för att visa mer teknisk info som URL:er. En mer komplett lista inkluderar:

- Filnamn och sökvägar (t.ex. `C:/User/[YourName]/AppData....test.png`)
- URL:er (t.ex. `https://zap-hosting.com`)
- Portar (t.ex. `:30120`)
- Kommandon (t.ex. `ipconfig`)
- SQL-frågor (t.ex. `SELECT * FROM servers`)
- Keybinds & knapptryckningar (t.ex. `ENTER` eller `CTRL + C`)

#### Tabeller

En annan användbar markdown-funktion är tabeller. Dessa är särskilt bra när du behöver visa mycket repetitiv information, till exempel kommandon, beskrivningar och användningsområden i ett spel. Här är ett exempel på tabell:

```
| Kommando    | Beskrivning             | Användning            |
| ----------- | ----------------------- | --------------------- |
| /help       | Skickar hjälpkommando   | /help [kategori]      |
| /stop       | Stoppar servern         | /stop [true/false]    |
```

#### Kodblock

Kodblock är ett väldigt användbart Markdown-verktyg, särskilt för blogginlägg som innehåller kommandon, skript, terminalutdata med mera.

För att använda ett kodblock, använd ` ``` ` runt textblocket du vill ha i blocket. Du kan också ange språket efter första trippel-backquotes för att formatera koden korrekt. Här är ett exempel med ` ```js ` för JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Skärmdumpar

Skärmdumpar är ett superbra sätt att visuellt guida läsare genom steg och vi rekommenderar verkligen att använda dem där det passar.

Du kan använda följande syntax för att lägga till en skärmdump i ditt innehåll, byt ut `your_url` mot bildens URL:
```
![](your_url)
```

Bästa praxis är att använda en online bildhostingtjänst som [Imgur](https://imgur.com/) för att ladda upp och använda bilden i din markdown.

## Terminologi

I våra blogginlägg används en rad nyckelterminologi. Vi förväntar oss att du använder amerikansk engelska stavning för att säkerställa konsekvens i alla våra blogginlägg. Här standardiserar vi några av de vanligaste termerna.

### ZAP-Hosting produkter

När du refererar till en ZAP-Hosting-produkt ska du alltid se till att rätt namn, stavning och versalisering används. Du kan dubbelkolla detta genom att gå till [ZAP-Hostings webbplats](https://zap-hosting.com) och se hur produkten refereras på relevant produktsida.

### Användardefinierade attribut

I vissa blogginlägg kan konfigurationsalternativ för användare, hostnamn, domäner, IP-adresser och URL:er behövas, där läsaren måste använda sina egna uppgifter istället för våra platshållare.

Som standard ska du alltid använda `[your_attribute]` för att skilja på statiska element och unika element, där `[attribute]` ersätts med typen av attribut. Till exempel, när du nämner en IP ska du skriva `[your_server_ip]` i blogginlägget eller när du nämner en URL ska du skriva `http://[your_server_ip]:30120`. Detta gör det tydligt vilka attribut läsaren måste ändra baserat på sin egen konfiguration. Du bör också ge en förklaring eller notis som berättar för läsaren vilka attribut de behöver ändra när de först nämns för att säkerställa att allt är förstått.

Använd `zaphosting` som standardvärde för hostnamn, användarnamn eller databasenamn.

### Mjukvara

När du nämner mjukvara i ditt blogginlägg ska du säkerställa att du följer korrekt stavning och versalisering av mjukvarans namn. Om mjukvarans webbplats inte är konsekvent med versalisering, se till att följa samma versalisering inom en och samma artikel för att behålla konsekvens.

Du bör länka till mjukvarans officiella webbplats första gången du nämner den, om en sådan finns.