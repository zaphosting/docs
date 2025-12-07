---
id: contribution-guides
title: Guideprocessen
description: "Upptäck hur du bidrar med värdefulla, originella guider till ZAP-Docs och hjälper användare med tydligt, praktiskt innehåll → Lär dig mer nu"
sidebar_label: Guideprocessen
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Lär dig mer om processen för att bidra till våra ZAP-Docs på den här sidan. Processen är skriven i kronologisk ordning genom hela sidan, så vi rekommenderar att du börjar här.

## Steg 1: Föreslå innehåll

Den första delen av processen innebär att skapa en förslags-issue via vårt GitHub-repo. Du måste ge oss detaljer om de ändringar och förbättringar du planerar att göra.

Se till att din idé inte är en kopia av någon befintlig guide eller förslag och att du verkligen tror att den kommer vara användbar för nybörjare eller mer avancerade användare. Du kan se befintliga förslag genom att gå till [Issues-sidan](https://github.com/zaphosting/docs/issues?q=is%3Aissue).

:::tip
Vi rekommenderar att du går igenom våra [Riktlinjer](contribution-guides-guidelines.md) för att förstå vilken typ av innehåll och dokumentationsstil vi eftersträvar.
:::

### Vilka ämnen söker vi?

I våra guider letar vi efter ett brett spektrum av praktiska och högkvalitativa guider som täcker produkter, tjänster och open-source-programvara som finns tillgänglig via ZAP-Hosting eller relaterar till någon av våra tjänster. Om du behöver idéer eller inspiration, kolla in våra sidor i ZAP-Docs för att få en känsla för vår skrivstil och vilken typ av innehåll vi publicerar.

Som nämnts i introduktionen måste allt innehåll vara originalt för att följa upphovsrättslagar. Otillåten användning av AI/generativa verktyg och/eller annan immateriell egendom är strikt förbjuden. Våra guider syftar till att ge högkvalitativ information genom steg-för-steg-instruktioner för att säkerställa att läsaren förstår vad de gör och hur de kan göra det, med målet att utbilda och ge lösningar.

#### Lista över önskade guider

Vi har en användbar lista med grymma förslag nedan, på nya guider som du kanske vill skriva. Vissa guideämnen och förslag kan till och med ha en extra bonus som belöning. Du kan komma åt [listan manuellt här](https://docs.google.com/document/d/13R321FP6Yo3TMQZ07vMARQFlX6n_Or6RIrLpU7IsMfs/edit?usp=sharing).

<iframe width="800" height="750" src="https://docs.google.com/document/d/e/2PACX-1vRACoNJMjk3rcWyo6LDt8WCvtqB17JpdjsPW3YHpLaZJgfPxGlt4pDEnD1ezOwGW1eljWZYPSyfgrb3/pub?embedded=true"></iframe>
<br></br>

:::note
Kom ihåg, detta är bara användbara idéer, du **behöver inte** strikt skriva om dessa, dina guideförslag kan vara kreativa som nämnts tidigare.
:::

### Skicka in förslag

När du är säker på att ditt förslag passar vår dokumentation, gå till vårt [ZAP Docs GitHub-repo](https://github.com/zaphosting/docs) och öppna en issue med mallen **Contribution Suggestion**. Följ mallen och fyll i alla nödvändiga detaljer. Du kommer också bli ombedd att bekräfta att du accepterar våra villkor för bidragsprogrammet, som finns i [Contribution Terms](contribution-terms.md).

:::caution
Se till att du fyller i ditt ZAP-ID korrekt så att du får din belöning till rätt konto!
:::

När du skickat in ditt förslag siktar vi på att återkomma inom 3-5 dagar. Du får svar direkt i din GitHub-issue.

:::tip
**Problem?** Hoppa gärna in i vår [ZAP-Hosting Discord-server](https://zap-hosting.com/discord) där vi och ZAP-communityn gärna hjälper dig med frågor. Alternativt kan du kontakta oss via ett [supportärende på vår webb](https://zap-hosting.com/en/customer/support/) och referera till "Contribution Program - Guides" i ditt meddelande så vidarebefordras det till ZAP-Hosting Contributions Team.
:::

I vårt svar ger vi feedback eller detaljer vi vill justera kring ditt förslag. Om det finns problem följer vi upp direkt i din GitHub-issue.

## Steg 2: Skriva guiden

När du gör tillägg eller ändringar i vår dokumentation, följ noggrant våra [Riktlinjer](contribution-guides-guidelines.md) för att säkerställa konsekvens och hög kvalitet. I detta avsnitt går vi igenom bästa praxis och optimal arbetsflöde för att skapa nytt innehåll eller ändra befintligt. Om du är ny på GitHub, använd gärna våra korta tutorials nedan för att förstå det enklaste sättet att redigera eller skapa nytt innehåll för ZAP-Docs.

:::note
Se till att du skapat ett förslag i vårt [GitHub-repo](https://github.com/zaphosting/docs) och att det blivit godkänt av en medlem i ZAP Contribution Team innan du börjar jobba på en ny guide eller ändringar. Vi kan inte garantera belöning om processen inte följts och godkänts.
:::

**Förutsättningar:**
- [GitHub-konto](https://github.com/)

Första steget är att skapa en egen fork av ZAP-Docs-repot på GitHub. Gå till [ZAP Docs GitHub-repo](https://github.com/zaphosting/docs) och klicka på **Fork**-knappen högst upp.

![](https://screensaver01.zap-hosting.com/index.php/s/3AGoSTE7dGTsdz7/preview)

Döp repot baserat på det accepterade förslaget och bocka i `Copy the master branch only`. Klicka på skapa och vänta några sekunder tills forkningen är klar.

När du har din egen fork kan du fortsätta till nästa avsnitt för att slutföra ditt bidrag. Det finns två huvudsakliga metoder för att skapa innehåll: direkt via GitHub-webben eller genom att klona repot lokalt. Fördelen med första är att det är mer användarvänligt, medan lokal kloning låter dig testa Docusaurus live.

:::tip
För nybörjare eller de utan mycket Git-erfarenhet rekommenderar vi **Metod 1** för att skriva innehåll eftersom det är enklare, snabbare och allt görs i webbläsaren via GitHub. Det är mycket smidigare då det inte kräver lokal setup.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Metoder för att skapa guider

<Tabs>
<TabItem value="direct" label="Metod 1: Direkt via GitHub-webbplatsen" default>

Det enklaste och rekommenderade sättet att skapa innehåll är via GitHub-webben. Här visar vi hur du skapar en ny guide och redigerar en befintlig guide via GitHub.

Börja med att gå till din fork från föregående steg. När du är inne i din ZAP Docs-fork hittar du alla dokumentationsguider i mappen **docs**.

![](https://screensaver01.zap-hosting.com/index.php/s/dqptZFrSTrBBHAJ/preview)

Dokumentationsfilerna följer en enkel namngivningskonvention där första ordet refererar till guiden typ, oftast ett spel, produkt eller sektion, och följande ord till specifik sektion. Vi rekommenderar att kolla in vår live [ZAP-Docs-webbplats](https://zap-hosting.com/guides) för att hitta rätt plats för din guide. Exempelvis `dedicated-windows.md` hör till Dedicated Server-sektionen, specifikt Windows OS.

Nu måste du antingen öppna en befintlig guidefil eller skapa en ny beroende på om ditt bidrag är en uppdatering eller en ny guide. Använd rätt flik nedan för instruktioner, då en ny guide kräver lite extra filförberedelse.

<Tabs>
<TabItem value="direct_new" label="Skapa en ny guidefil" default>

I detta exempel var vårt förslag att skapa en ny guide för spelet Rust, specifikt om kommandon som spelet erbjuder. Efter att ha kollat ZAP-Docs-webben och repot ser vi att en **Rust**-sektion redan finns under spelserver-kategorin. Baserat på namngivningskonventionen och befintliga guider kan vi anta att den nya guiden ska heta `rust-commands.md`.

För att skapa en ny fil, gå till [GitHub-repot](https://github.com/zaphosting/docs), öppna mappen **docs** och välj **Add File** till höger. Välj sedan **Create new file** som öppnar en ny flik.

![](https://screensaver01.zap-hosting.com/index.php/s/xgL3QF9HzJnwARA/preview)

Högst upp i filvägen kan du ange filnamnet, i vårt exempel `rust-commands.md`.

:::info
Glöm inte `.md`-ändelsen då alla guider är i Markdown-format.
:::

Nästa steg är att lägga till viktig metadata i början av filen. Det enklaste är att öppna en annan fil som `rust-plugins.md` och kopiera metadata-taggarna högst upp. Justera sedan varje värde för att passa din nya guide, där `id` **måste** matcha filnamnet (utan `.md`).

I vårt exempel ska filen innehålla:
```
---
id: rust-commands
title: "Rust: Admin Commands"
description: "Information om admin-kommandon för Rust från ZAP-Hosting"
sidebar_label: Admin Commands
services:
  - gameserver
---
```

:::note
Vi dubbelkollar metadata under granskningen, så oroa dig inte om du stöter på problem – fortsätt bara.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/2CJFHoc5LeD4YSn/preview)

</TabItem>

<TabItem value="direct_existing" label="Redigera en befintlig guidefil" default>

I detta fall öppnar du den fil du vill redigera. Exempelvis `dedicated-linux-satisfactory.md` i `/docs`-mappen. När du öppnat filen ser du en grov förhandsvisning baserad på Markdown.

Klicka på pennikonen uppe till höger för att redigera filen direkt.

![](https://screensaver01.zap-hosting.com/index.php/s/SZTsAikipzCZcg3/preview)

</TabItem>
</Tabs>

#### Fortsätt: Skapa innehåll

När filen är redo kan du börja skriva det innehåll som godkänts i ditt förslag. Vi rekommenderar att du sparar eller committar regelbundet för att inte riskera att förlora arbete.

:::tip Säkra ditt arbete
GitHubs editor har ingen autosave, så spara eller committa ofta. Vi rekommenderar starkt att skriva i Markdown-verktyget **[StackEdit](https://stackedit.io/app#)** som låter dig spara lokalt och synka till molnet. När du är klar kan du kopiera och klistra in i GitHub och committa.
:::

Du kan använda **Preview**-knappen högst upp i redigeringsfönstret för att växla till förhandsvisning och tillbaka med **Edit**.

![](https://screensaver01.zap-hosting.com/index.php/s/4YcQo6q3iAAGYkZ/preview)

:::note Docusaurus-element
Vissa Docusaurus-specifika element som admonitions (t.ex. `:::note`, `:::tip`) eller tabs visas inte korrekt i GitHub-förhandsvisningen eftersom de inte är standard Markdown, men de funkar perfekt vid lokal testning och i produktion.
:::

:::info Följ våra riktlinjer
Se våra [Riktlinjer](contribution-guides-guidelines.md) för allt om Markdown, struktur, terminologi med mera.
:::

När du gjort dina ändringar, klicka på **Commit changes...** och fyll i en beskrivande commit-meddelande och eventuellt en längre beskrivning. Commit:a sedan ändringarna till din fork. Gå sedan till avsnittet **Submitting Content** för att skapa en Pull Request och skicka in innehållet till huvudrepo.

</TabItem>

<TabItem value="local" label="Metod 2: Lokalt via IDE (git-kloning)">

Vill du hellre skriva innehåll lokalt i en IDE eller editor som Visual Studio Code? Här visar vi hur du skapar och redigerar guider lokalt.

**Förutsättningar:**
- Valfri IDE, här använder vi [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/) eller annan Git-klient

Börja med att klona din fork. Det enklaste är via GitHub Desktop: välj **Add** → **Clone repository** och välj din fork. Du kan också göra detta direkt i IDE:n om den har Git-stöd.

![](https://screensaver01.zap-hosting.com/index.php/s/g8AwEcGa6mBrQ75/preview)

Öppna sedan repots mapp i Visual Studio Code. I vänstra **Explorer**-fliken ser du alla mappar.

Dokumentationsfilerna följer samma enkla namngivningskonvention som tidigare. Kolla gärna in vår live [ZAP-Docs-webbplats](https://zap-hosting.com/guides) för att hitta rätt sektion. Exempel: `dedicated-windows.md` är för Dedicated Server Windows.

Nu öppnar du antingen en befintlig guidefil eller skapar en ny beroende på om du uppdaterar eller skapar nytt. Använd rätt flik nedan för instruktioner, då ny guide kräver extra filförberedelse.

<Tabs>
<TabItem value="local_new" label="Skapa en ny guidefil" default>

I vårt exempel vill vi skapa en ny guide för Rusts admin-kommandon. Rust-sektionen finns redan under spelservrar. Namnet på filen blir `rust-commands.md`.

Öppna `/docs`-mappen i din IDE och skapa en ny fil med rätt namn.

:::info
Glöm inte `.md`-ändelsen.
:::

Lägg till metadata högst upp i filen. Kopiera från en annan fil som `rust-plugins.md` och ändra värdena så de passar din guide. Viktigast är att `id` matchar filnamnet (utan `.md`).

Exempel:
```
---
id: rust-commands
title: "Rust: Admin Commands"
description: "Information om admin-kommandon för Rust från ZAP-Hosting"
sidebar_label: Admin Commands
services:
  - gameserver
---
```

:::note
Vi dubbelkollar metadata vid granskning, så oroa dig inte om det strular – fortsätt bara.
:::

Sista steget för att sidan ska synas i sidomenyn i Docusaurus är att lägga till den i `sidebar.js` i rätt sektion. Rust-sektionen finns redan, sök med `CTRL+F` på rust.

Lägg till en ny rad under sista objektet med filnamnet, t.ex. `rust-commands`. Om sektionen saknas kan du följa formatet från andra sektioner för att lägga till en ny.

![](https://screensaver01.zap-hosting.com/index.php/s/TwKjWmCofG5Rs8f/preview)

:::note
Glöm inte komma (`,`) på raden innan din nya rad så syntaxen blir korrekt.
:::

</TabItem>

<TabItem value="local_existing" label="Redigera en befintlig guidefil" default>

Att redigera en befintlig fil är enkelt, du behöver inte sätta upp hela filstrukturen.

Öppna bara den guidefil du vill ändra i `/docs`-mappen och gör dina ändringar enligt ditt godkända förslag.

</TabItem>
</Tabs>

#### Fortsätt: Skapa innehåll

När filen är redo kan du börja skriva innehållet som godkänts i ditt förslag. Spara eller committa ofta för att inte riskera att förlora arbete.

Använd `CTRL+SHIFT+V` eller förhandsvisningsikonen uppe till höger i editorn för att se live-förhandsvisning av Markdown.

:::note Docusaurus-element
Vissa Docusaurus-specifika element som admonitions (t.ex. `:::note`, `:::tip`) eller tabs visas inte korrekt i GitHub-förhandsvisningen men funkar i lokal testning och produktion.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cXgQEswNsbpGMsR/preview)

:::info Följ våra riktlinjer
Se våra [Riktlinjer](contribution-guides-guidelines.md) för allt om Markdown, struktur, terminologi med mera.
:::

När du är klar pushar du en commit till din fork och skapar en Pull Request. I GitHub Desktop (eller annan Git-klient) lägger du till titel och beskrivning och pushar.

![](https://screensaver01.zap-hosting.com/index.php/s/tFdrLknnXn62sZc/preview)

Gå sedan till avsnittet **Submitting Content** för att skapa en Pull Request och skicka in innehållet till huvudrepo.

:::tip
Vi rekommenderar att du även läser det frivilliga avsnittet **Testa bygget lokalt** för att kombinera med lokal testning och skapa ett optimalt arbetsflöde. Men det är inte nödvändigt.
:::

</TabItem>
</Tabs>

### Valfritt: Testa bygget lokalt

Innan du skapar den slutgiltiga Pull Request är det bra praxis att bygga och testa lokalt för att säkerställa att allt funkar med dina ändringar. Vi rekommenderar att testa lokalt för att snabba på hanteringen av din Pull Request, men det är inte ett krav.

:::tip
Detta är **INTE** obligatoriskt, vi kör automatiskt en build när du skickar en Pull Request. Men det kan vara användbart för felsökning och live-test.
:::

:::note
Om du följt tutorialen för lokala ändringar kan du hoppa över första steget med att klona repot eftersom du redan har det.
:::

**Förutsättningar:**
- [Node.js v16.14 eller senare](https://nodejs.org/en)
- [GitHub Desktop](https://desktop.github.com/) eller [Git](https://git-scm.com/)

Börja med att klona din fork. Det enklaste är via GitHub Desktop: välj **Add** → **Clone repository** och välj din fork.

Du kan också använda Git manuellt. Skapa en ny mapp, t.ex. `Docs Test`. Öppna Git Bash i mappen (högerklicka → Git Bash på Windows). Kopiera URL:en till din fork från GitHub och kör:
```
git clone [din_url]
```

Nu har du repot klonat lokalt. Nästa steg är att ladda ner alla moduler. Gå till mappen, högerklicka och öppna en terminal (eller använd Git-fönstret). Kör:
```
npm install
```

Det kan ta en stund. När det är klart ska en `node_modules`-mapp finnas i repot. Får du fel är det troligen för att Node.js inte är installerat.

Sista steget är att köra dokumentationssajten lokalt:
```
npm start
```

När det är klart öppnas en lokal version av sajten automatiskt i din standardwebbläsare på port `3000`. Den visar exakt hur dokumentationen ser ut i produktion och du kan testa allt du vill!

När du är nöjd med ändringarna kan du gå vidare till nästa steg och skapa en Pull Request för att skicka in innehållet till huvudrepo.

## Steg 3: Skicka in innehåll

När du gjort dina bidrag som du tror följer våra riktlinjer och håller högsta standard kan du skapa en Pull Request. Gå till din fork av ZAP Docs, klicka på **Contribute** under huvudknapparna och öppna en pull request.

![](https://screensaver01.zap-hosting.com/index.php/s/GLjSno3Ltz3zFpZ/preview)

En ny sida öppnas där du kan se dina ändringar. Som standard finns en liten checklista i beskrivningen för att säkerställa att allt är gjort korrekt. Du kan ta bort den när du kollat igenom den.

Sätt en passande titel som förklarar vad du gjort. I beskrivningen, glöm inte att nämna/länka ditt förslag med `#000` och förslags-ID:t. Om du inte hittar det i menyn kan du snabbt gå till [ZAP Docs GitHub-repot](https://github.com/zaphosting/docs), gå till issues och leta upp ditt förslag och dess ID.

När titel, beskrivning och ändringar är klara kan du skapa din pull request och skicka in den till vårt repo.

![](https://screensaver01.zap-hosting.com/index.php/s/mrGm5f2WMttYzFT/preview)

Vårt system kör syntax- och kvalitetskontroller på dina ändringar. Om båda går igenom kommer ZAP-Docs-teamet att granska din Pull Request inom några dagar.

Vid granskning kan vi be dig göra några ändringar eller göra egna justeringar där vi tycker det behövs. När allt är klart godkänner vi ändringen så den kan publiceras.

## Steg 4: Publicera guideändringar & belöningsutbetalning

När vi slutligen accepterar din Pull Request efter eventuella ändringar svarar vi i din Pull Request med viktig info. Det inkluderar info om publicering av dina guideändringar och din belöningsutbetalning för att ha slutfört guiden.

:::info
Belöningen för detta bidrag beror på flera faktorer, främst kvalitet och omfattning av innehållet, samt andra kriterier som bedöms av ZAP Contribution Team. Läs mer om våra kriterier i [Rewards](contribution-rewards.md).
:::

Grattis till ditt bidrag till våra ZAP-Hosting-guider! Vi uppskattar alla dina insatser! 💚