---
id: dedicated-windows-javascript
title: "JavaScript Runtime installeren op een Windows Server - Moderne Webapplicaties draaien"
description: "Ontdek hoe je Node.js, Deno en Bun op Windows installeert en instelt om JavaScript efficiënt te draaien → Leer het nu"
sidebar_label: JavaScript installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Deze gids geeft je de stappen om Node.js, Deno en Bun op Windows te installeren. De onderstaande stappen voer je uit via RDP. Weet je niet hoe je via RDP verbinding maakt met je server? Check dan onze [Eerste Toegang (RDP)](vserver-windows-userdp.md) handleiding.

## Installatie

Eerst moet je kiezen welke JavaScript runtime je wilt installeren. Er zijn online veel bronnen die elk van deze runtimes uitgebreid uitleggen. Maar deze gids helpt je ook, want hier vind je basiscommando’s en codevoorbeelden. Wij raden Node.js aan, omdat dit een van de meest gebruikte en populaire keuzes is.

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
Start de installer door erop te klikken. Je krijgt nu een paar instellingen te zien. Op de `Welcome` pagina klik je op `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

Lees en accepteer de Node.js Licentieovereenkomst door het vakje aan te vinken en klik daarna op `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

Vervolgens kies je de locatie waar Node.js geïnstalleerd moet worden.

:::note
Wij raden aan om de standaard installatielocatie te gebruiken.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

Op de volgende pagina kun je ervoor kiezen om bepaalde Node.js core pakketten niet te installeren. Voor een normale installatie, wat wij aanraden, klik je gewoon op `Next`. Je krijgt ook de optie om Chocolatey te installeren, maar dat is niet nodig.

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### Stap 3: Installatie afronden
Klik nu op `Install` en wacht tot alles is geïnstalleerd. Dit kan even duren, dus geduld! :)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

Als het klaar is, klik je op `Finish` en kun je meteen aan de slag met Node.js op je server.

### Node.js updaten naar de nieuwste versie

Met `node -v` check je welke versie van Node.js je hebt. Check regelmatig of je de nieuwste LTS versie draait. Om Node.js te updaten, volg je gewoon weer deze [JavaScript installeren](dedicated-windows-javascript.md) gids.

### Node.js & npm gebruiken

npm is de officiële package manager van Node.js. Hiermee installeer je pakketten van het internet.

:::tip
Je vindt alle npm pakketten op hun [website](https://www.npmjs.com/).
:::

### Een nieuw project starten

Wil je een nieuw Node.js project starten? Maak dan eerst een nieuwe map aan via de Verkenner, open de Command Prompt of PowerShell in die map en voer `npm init` uit om het project op te zetten. Je wordt gevraagd wat basisinfo in te vullen voor het `package.json` bestand. Dit is het configuratiebestand voor je Node.js project.

:::tip
In Windows kun je in de Verkenner op het pad klikken, `cmd` typen en op Enter drukken om de Command Prompt direct in die map te openen. Super handig!
:::

Na het initialiseren maak je een nieuw bestand `index.js` aan en schrijf je je code erin. Bijvoorbeeld een simpele http-server op poort 80 die een testbericht terugstuurt als je via localhost verbinding maakt:

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

Deno installeren is super simpel: open PowerShell en voer `irm https://deno.land/install.ps1 | iex` uit. Zoek via de Windows zoekbalk naar `Powershell`, open het als administrator en run het commando. Volg de stappen die het script aangeeft.

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip
Check je Deno versie met `deno --version`.
:::

### Deno updaten naar de nieuwste versie

Update Deno simpelweg met `deno upgrade`.

### Deno gebruiken

Maak een nieuw bestand `index.ts` en schrijf wat code. Bijvoorbeeld een simpele http-server op poort 80 die een testbericht terugstuurt als je via localhost verbindt:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Run dit met `deno run --allow-net index.ts` en check het resultaat via `localhost:80` in je browser.

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info
Deno is ontworpen met veiligheid in gedachten en vraagt daarom om expliciete permissies zoals `--allow-net` om netwerkmodules te gebruiken.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Bun Runtime installeren

Bun heeft ook een super makkelijke installer met één commando, maar je kunt het ook via npm installeren als je al met Node.js hebt gewerkt.

<Tabs>
<TabItem value="command" label="Command" default>

Voer in PowerShell `irm bun.sh/install.ps1|iex` uit om Bun op je server te installeren.

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info
Soms mist je server nog wat benodigde bestanden. Bun geeft je dan info en links om die te downloaden tijdens het installeren.

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)
:::

</TabItem>
<TabItem value="npm" label="npm">

Heb je npm al? Dan installeer je Bun met `npm install -g bun`.

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### Bun gebruiken

Bun is gemaakt om sneller te zijn dan andere JavaScript engines, met een setup die lijkt op Node.js. Open een lege map en run `bun init` in de Command Prompt.

:::note
Afhankelijk van je gekozen taal (JS of TS) maakt Bun een configbestand aan (jsconfig.json of tsconfig.json).
:::

Maak een nieuw bestand `index.ts` en schrijf wat code. Bijvoorbeeld een simpele http-server op poort 80 die een testbericht terugstuurt als je via localhost verbindt:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Run dit met `bun index.ts` en check het resultaat via `localhost:80` in je browser.

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>

## Conclusie

Gefeliciteerd, je hebt JavaScript succesvol geïnstalleerd! Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar om je te helpen! 🙂