---
id: dedicated-windows-javascript
title: 'Dedikerad Server: Installation av JavaScript'
description: "Upptäck hur du installerar och sätter upp Node.js, Deno och Bun på Windows för att köra JavaScript effektivt → Läs mer nu"
sidebar_label: Installera JavaScript
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Den här guiden visar steg för installation av Node.js, Deno och Bun på Windows. Stegen nedan måste utföras via RDP. Om du inte vet hur du ansluter till din server via RDP, kolla gärna in vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide.



## Installation

Först måste du bestämma vilken JavaScript-runtime du vill installera. Det finns massor av resurser online som beskriver varje alternativ i detalj. Men du kan också läsa den här guiden eftersom den inkluderar grundläggande kommandon och kodexempel. Vi rekommenderar Node.js eftersom det är en av de mest använda och populära valen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js Runtime" label="Node.js" default>

## Installera Node.js Runtime

### Steg 1: Ladda ner filer
Öppna din favoritwebbläsare (jag använder Chrome för den här guiden) och gå till [https://Node.js.org/en](https://Node.js.org/en)

![](https://screensaver01.zap-hosting.com/index.php/s/FXEML6xiCedS7Nq/preview)

Klicka nu på knappen `Download Node.js (LTS)` och vänta tills nedladdningen är klar.

![](https://screensaver01.zap-hosting.com/index.php/s/EwjMejMYykPCQRQ/preview)

:::tip
Det rekommenderas generellt att hålla din installation på den senaste Long Term Support (LTS)-versionen.
:::

### Steg 2: Installera Python
Starta installationsprogrammet genom att klicka på det. Nu kommer du att bli ombedd att ställa in några inställningar för installationen. På sidan `Welcome` klickar du på `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

Läs och acceptera (genom att kryssa i rutan) Node.js licensavtal och klicka sedan på `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

Därefter ska du välja var Node.js ska installeras.

:::note
Vi rekommenderar att använda standardinstallationsplatsen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

På nästa sida kan du välja bort vissa av Node.js kärnpaket. Vill du ha en normal installation, vilket rekommenderas, klicka bara på `Next`. Du får även möjlighet att installera Chocolatey, men det behövs inte.

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### Steg 3: Slutför installationen
Nu kan du klicka på `Install` och vänta medan allt installeras. Ha tålamod, det kan ta en stund. :)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

När installationen är klar klickar du på `Finish` och kan börja använda Node.js på din server.

### Uppdatera Node.js till senaste versionen

Kör `node -v` för att se vilken version av Node.js som är installerad. Då och då bör du kontrollera att du kör senaste LTS-versionen. För att uppdatera Node.js, följ samma steg i denna [Install JavaScript](dedicated-windows-javascript.md)-guide igen.

### Köra Node.js & npm

npm är den officiella paketchefen för Node.js. Du använder den för att installera paket från internet.

:::tip
Du hittar alla npm-paket på deras [webbplats](https://www.npmjs.com/).
:::

### Skapa ett nytt projekt

Varje gång du vill starta ett nytt Node.js-projekt behöver du skapa en ny mapp för det med File Explorer, öppna Kommandotolken eller PowerShell i den mappen och köra kommandot `npm init` för att starta setupen. Du kommer att bli tillfrågad om grundläggande info för att skapa en `package.json`-fil. Den filen är konfigurationsfilen för att köra Node.js.

:::tip
På Windows kan du klicka en gång på sökvägen i File Explorer, skriva `cmd` och trycka Enter för att öppna Kommandotolken direkt i den mappen – smidigt!
:::

Efter att ha initierat projektet kan du skapa en ny fil som heter `index.js` och skriva kod i den. Som exempel skapar vi en enkel HTTP-server på standardport 80 som svarar med ett testmeddelande när du går till localhost. Koden ser ut så här:

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Kör koden med kommandot `node .` och kolla resultatet genom att gå till `localhost:80` i din webbläsare.

![](https://screensaver01.zap-hosting.com/index.php/s/kWRi9agrzkWc4rw/preview)

:::tip
Installera externa paket från npm med `npm install [paket-namn]`.
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Installera Deno Runtime

Att installera Deno är lika enkelt som att skriva `irm https://deno.land/install.ps1 | iex` i en PowerShell. Sök efter `Powershell` i Windows sökfält, öppna prompten som administratör och kör kommandot. Följ eventuella instruktioner som dyker upp.

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip
För att kolla vilken version som är installerad, kör `deno --version`.
:::

### Uppdatera Deno till senaste versionen

Uppdatera Deno enkelt genom att köra `deno upgrade`.

### Köra Deno

För att köra Deno skapar du en ny fil `index.ts` och skriver lite kod i den. Som exempel skapar vi en enkel HTTP-server på port 80 som svarar med ett testmeddelande när du går till localhost. Koden ser ut så här:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Kör koden med kommandot `deno run --allow-net index.ts` och kolla resultatet på `localhost:80` i webbläsaren.

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info
Deno är byggt för att vara säkrare och kräver därför vissa tillstånd som `--allow-net` för att få åtkomst till vissa moduler.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Installera Bun Runtime

Bun erbjuder också en enkel installationskommando men ger även möjlighet att installera via npm om du redan använt Node.js.

<Tabs>
<TabItem value="command" label="Kommando" default>

Kör `irm bun.sh/install.ps1|iex` i PowerShell för att installera Bun på din server.

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info
Servern kan sakna vissa nödvändiga filer. Bun ger dig info om detta och länkar för att ladda ner dem när du försöker köra installatören.

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)
:::

</TabItem>
<TabItem value="npm" label="npm">

Om du redan har npm installerat kan du köra `npm install -g bun` för att installera Bun.

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### Köra Bun

Bun är gjort för att vara snabbare än många andra JavaScript-motorer, samtidigt som setupen liknar Node.js. För att köra Bun, öppna en tom mapp och kör `bun init` i Kommandotolken.

:::note
Beroende på valt språk (JS eller TS) skapar Bun en konfigurationsfil (jsconfig.json eller tsconfig.json).
:::

För att köra Bun skapar du en ny fil `index.ts` och skriver lite kod i den. Som exempel skapar vi en enkel HTTP-server på port 80 som svarar med ett testmeddelande när du går till localhost. Koden ser ut så här:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Kör koden med kommandot `bun index.ts` och kolla resultatet på `localhost:80` i webbläsaren.

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>

## Avslutning

Grattis, du har nu installerat JavaScript! Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂