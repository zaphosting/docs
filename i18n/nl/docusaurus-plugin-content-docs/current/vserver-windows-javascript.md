---
id: vserver-windows-javascript
title: 'VPS: Installatie van JavaScript'
description: "Ontdek hoe je Node.js, Deno en Bun op Windows installeert om je JavaScript runtime-omgeving efficiënt op te zetten → Leer het nu"
sidebar_label: JavaScript installeren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Deze gids geeft je de stappen voor het installeren van Node.js, Deno en Bun op Windows. De onderstaande stappen moeten via RDP uitgevoerd worden. Weet je niet hoe je via RDP verbinding maakt met je server? Check dan onze [Eerste Toegang (RDP)](vserver-windows-userdp.md) gids.
<InlineVoucher />

## Installatie

Allereerst moet je kiezen welke JavaScript runtime je wilt installeren. Er zijn online veel bronnen die elk van deze runtimes uitgebreid uitleggen. Maar je kunt ook deze gids lezen, want hier vind je basiscommando’s en codevoorbeelden. Wij raden Node.js aan, omdat dit een van de meest gebruikte en populaire keuzes is.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js Runtime" label="Node.js" default>

## Node.js Runtime installeren

### Stap 1: Bestanden downloaden
Open je favoriete browser (ik gebruik Chrome voor deze gids) en ga naar [https://Node.js.org/en](https://Node.js.org/en)

![](https://screensaver01.zap-hosting.com/index.php/s/FXEML6xiCedS7Nq/preview)

Klik nu op de knop `Download Node.js (LTS)` en wacht tot het downloaden klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/EwjMejMYykPCQRQ/preview)

:::tip
Het is aan te raden om altijd de nieuwste Long Term Support (LTS) versie te gebruiken.
:::

### Stap 2: Node.js installeren
Start de installer door erop te klikken. Je krijgt nu een aantal instellingen te zien die je kunt aanpassen. Op de `Welkom` pagina klik je op `Volgende`.

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

Lees en accepteer de Node.js Licentieovereenkomst door het vakje aan te vinken en klik daarna op `Volgende`.

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

Vervolgens kies je de locatie waar Node.js geïnstalleerd moet worden.

:::note
Wij raden aan om de standaard installatielocatie te gebruiken.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

Op de volgende pagina kun je ervoor kiezen om bepaalde kernpakketten van Node.js niet te installeren. Voor een normale installatie, wat wij aanraden, klik je gewoon op `Volgende`. Je krijgt ook de optie om Chocolatey te installeren, maar dit is niet nodig.

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### Stap 3: Installatie voltooien
Klik nu op `Installeren` en wacht tot alles is ingesteld. Heb geduld, dit kan even duren. :)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

Als het klaar is, klik je op `Voltooien` en kun je Node.js op je server gaan gebruiken.

### Node.js updaten naar de nieuwste versie

Met `node -v` zie je welke versie van Node.js geïnstalleerd is. Check af en toe of je de nieuwste LTS-versie draait. Om Node.js te updaten, volg je gewoon weer de [installatiestappen](vserver-windows-javascript.md).

### Node.js & npm gebruiken

npm is de officiële package manager van Node.js. Hiermee installeer je pakketten van het internet.

:::tip
Je vindt alle npm-pakketten op hun [website](https://www.npmjs.com/).
:::

### Een nieuw project aanmaken

Wil je een nieuw Node.js-project starten? Maak dan eerst een nieuwe map aan via de Verkenner, open de Command Prompt of PowerShell in die map en voer `npm init` uit om het project op te zetten. Je wordt gevraagd wat basisinformatie in te vullen voor het aanmaken van een `package.json` bestand. Dit is het configuratiebestand voor je Node.js-project.

:::tip
In Windows kun je in de Verkenner op het pad klikken, `cmd` typen en op Enter drukken om de Command Prompt direct in die map te openen. Scheelt tijd!
:::

Na het initialiseren van het project maak je een nieuw bestand `index.js` aan en schrijf je er code in. Bijvoorbeeld een simpele http-server op poort 80 die een testbericht terugstuurt als je via localhost verbinding maakt. Zie hieronder.

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Run deze code met `node .` en check het resultaat door in je browser naar `localhost:80` te gaan.

![](https://screensaver01.zap-hosting.com/index.php/s/kWRi9agrzkWc4rw/preview)

:::tip
Externe pakketten installeren via npm doe je met `npm install [pakket-naam]`.
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Deno Runtime installeren

Deno installeren is super simpel: typ `irm https://deno.land/install.ps1 | iex` in een PowerShell-venster. Zoek via de Windows zoekbalk naar `Powershell`, open het als administrator en voer het commando uit. Volg de stappen die het script aangeeft.

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip
Check je geïnstalleerde versie met `deno --version`.
:::

### Deno updaten naar de nieuwste versie

Update Deno simpelweg met `deno upgrade`.

### Deno gebruiken

Maak een nieuw bestand `index.ts` aan en schrijf er wat code in. Bijvoorbeeld een simpele http-server op poort 80 die een testbericht terugstuurt als je via localhost verbinding maakt. Zie hieronder.

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Run de code met `deno run --allow-net index.ts` en check het resultaat via `localhost:80` in je browser.

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info
Deno is ontworpen met veiligheid in gedachten en vraagt daarom expliciete permissies zoals `--allow-net` om bepaalde modules te gebruiken.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Bun Runtime installeren

Bun heeft ook een super eenvoudige installer met één commando, maar je kunt het ook via npm installeren als je al met Node.js hebt gewerkt.

<Tabs>
<TabItem value="command" label="Command" default>

Voer `irm bun.sh/install.ps1|iex` uit in PowerShell om Bun op je server te installeren.

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info
Als er bestanden missen op je server, geeft Bun je hierover info en links om ze te downloaden tijdens het installeren.

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)
:::

</TabItem>
<TabItem value="npm" label="npm">

Heb je npm al? Dan kun je Bun installeren met `npm install -g bun`.

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### Bun gebruiken

Bun is gemaakt om sneller te zijn dan andere JavaScript-engines, met een setup die lijkt op Node.js. Open een lege map en run `bun init` in de Command Prompt.

:::note
Afhankelijk van je gekozen taal (JS of TS) maakt Bun een configbestand aan (jsconfig.json of tsconfig.json).
:::

Maak een nieuw bestand `index.ts` en schrijf er wat code in. Bijvoorbeeld een simpele http-server op poort 80 die een testbericht terugstuurt als je via localhost verbinding maakt. Zie hieronder.

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Run de code met `bun index.ts` en check het resultaat via `localhost:80` in je browser.

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>



## Conclusie

Gefeliciteerd, je hebt JavaScript succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />