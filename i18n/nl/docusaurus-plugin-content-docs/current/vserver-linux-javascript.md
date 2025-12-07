---
id: vserver-linux-javascript
title: 'VPS: Installatie van JavaScript'
description: "Ontdek hoe je Node.js, Deno en Bun op je server installeert en configureert voor efficiënt JavaScript runtime beheer → Leer het nu"
sidebar_label: JavaScript Installeren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Deze gids geeft je stappen voor het installeren van Node.js, Deno en Bun. Deze commando’s voer je uit via SSH. Weet je niet hoe je via SSH verbinding maakt met je server? Check dan onze [Eerste toegang (SSH)](vserver-linux-ssh.md) gids.

<InlineVoucher />

## Voorbereiding

Voordat je iets installeert op een server, is het aan te raden om het update-commando van je besturingssysteem uit te voeren om je server veilig te houden.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Installatie

Eerst moet je kiezen welke JavaScript runtime je wilt installeren. Er zijn online veel bronnen die elk van deze runtimes uitgebreid beschrijven. Maar je kunt ook deze gids lezen, want die bevat basiscommando’s en codevoorbeelden. Wij raden NodeJS aan, omdat het een van de meest gebruikte en populaire keuzes is.

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## Node.js Runtime installeren

Je kunt Node.js installeren via de pakketbeheerder van je Linux-distributie of met nvm. Wij raden aan om apt te gebruiken, omdat dat meestal makkelijker is.

<Tabs>
<TabItem value="apt" label="Pakketbeheerder" default>

Voer het volgende commando uit om Node.js via de pakketbeheerder te installeren.

```
apt install nodejs -y
```

Om Node.js pakketten voor je projecten te installeren, moet je ook de npm pakketbeheerder installeren.

```
apt install npm
```

### Node.js updaten naar de nieuwste versie

Met `node -v` zie je welke versie van Node.js geïnstalleerd is. Dit is meestal niet de nieuwste, dus moet je updaten om de nieuwste features te krijgen. Gelukkig biedt het npm pakket `n` een makkelijke manier om dit te doen.

Eerst installeren we het met `npm install -g n` en daarna kun je met `n [versie]` (vervang `[versie]` door het gewenste versienummer) elke versie van Node.js installeren.

:::tip
Het is aan te raden om altijd de nieuwste Long Term Support (LTS) versie te gebruiken. Dat doe je met `n lts`.
:::

</TabItem>
<TabItem value="nvm" label="nvm">

Node.js installeren via nvm geeft je meer controle over verschillende Node.js versies met hun eigen pakketten.

Zorg eerst dat curl op je systeem staat en voer dan dit commando uit:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Dit haalt het nvm installatiescript van GitHub en voert het uit.

:::note
Als nvm-commando’s niet werken na installatie, voer dan `source ~/.bashrc` uit om je bash-configuratie te herladen.
:::

Net als bij de vorige methode kun je nu met `nvm install v[versie]` elke Node.js versie installeren. Wil je alle beschikbare versies zien, gebruik dan `nvm list-remote`. Voor de geïnstalleerde versies gebruik je `nvm list`.

:::tip
De Long Term Support versie installeer je met `nvm install --lts`
:::

</TabItem>
</Tabs>

### Node.js & npm gebruiken

Npm is de officiële pakketbeheerder van Node.js. Hiermee installeer je pakketten van het internet.

:::note
Je vindt alle npm pakketten op hun [website](https://www.npmjs.com/).
:::

### Een nieuw project aanmaken

Elke keer als je een nieuw Node.js project start, maak je een nieuwe map aan (`mkdir [project-naam]`) of ga je naar een lege map met `cd` en voer je `npm init` uit om de setup te starten. Je wordt dan gevraagd om wat basisinfo voor het aanmaken van een `package.json` bestand. Dit is het “config” bestand voor Node.js.

Na het initialiseren maak je een nieuw bestand `index.js` en schrijf je er code in. Als voorbeeld maken we een simpele http-server op poort 80 die een testbericht terugstuurt als je via localhost verbinding maakt. Zie hieronder.

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Je runt deze code met `node .` en checkt het resultaat door in je browser naar `localhost:80` te gaan.

:::tip
Externe pakketten van npm installeer je met `npm install [pakket-naam]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Deno Runtime installeren

Deno installeren is simpel: typ `curl -fsSL https://deno.land/install.sh | sh` in je console.

:::tip
Check de geïnstalleerde versie met `deno --version`.
:::

### Deno updaten naar de nieuwste versie

Deno updaten doe je met `deno upgrade`.

### Deno gebruiken

Om Deno te gebruiken maak je een nieuw bestand `index.ts` en schrijf je er code in. Als voorbeeld maken we een simpele http-server op poort 80 die een testbericht terugstuurt als je via localhost verbinding maakt. Zie hieronder.

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Je runt deze code met `deno run --allow-net index.ts` en checkt het resultaat door naar `localhost:80` te gaan in je browser.

:::info
Deno is gemaakt met veiligheid in gedachten en vraagt daarom om permissies zoals `--allow-net` om bepaalde modules te gebruiken.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Bun Runtime installeren

Bun biedt 2 officiële installatiemethoden: via curl of npm.

<Tabs>
<TabItem value="curl" label="curl" default>

Met `curl -fsSL https://bun.sh/install | bash` installeer je Bun op je server.

:::tip
Voor andere versies van Bun gebruik je `curl -fsSL https://bun.sh/install | bash -s "bun-v[versie]"`
:::

</TabItem>
<TabItem value="npm" label="npm">

Als je npm al hebt, kun je `npm install -g bun` uitvoeren.

</TabItem>
</Tabs>

### Bun gebruiken

Bun is gemaakt om sneller te zijn dan sommige andere JavaScript engines, met een setup die lijkt op Node.js. Open een lege map en voer `bun init` uit.

:::note
Afhankelijk van de gekozen taal (JS of TS) maakt Bun een configbestand aan (jsconfig.json of tsconfig.json).
:::

Om Bun te gebruiken maak je een nieuw bestand `index.ts` en schrijf je er code in. Als voorbeeld maken we een simpele http-server op poort 80 die een testbericht terugstuurt als je via localhost verbinding maakt. Zie hieronder.

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Je runt deze code met `bun index.ts` en checkt het resultaat door naar `localhost:80` te gaan in je browser.

</TabItem>
</Tabs>


## Conclusie

Gefeliciteerd, je hebt JavaScript succesvol geïnstalleerd en geconfigureerd! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />