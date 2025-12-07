---
id: dedicated-linux-javascript
title: 'Dedicated Server: Installatie van JavaScript'
description: "Ontdek hoe je Node.js, Deno en Bun installeert en configureert op je server voor efficiënte JavaScript runtime management → Leer het nu"
sidebar_label: JavaScript installeren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Deze gids geeft je de stappen voor het installeren van Node.js, Deno en Bun. Deze commando’s voer je uit via SSH. Weet je niet hoe je via SSH verbinding maakt met je server? Check dan onze [Eerste toegang (SSH)](vserver-linux-ssh.md).

## Voorbereiding

Voordat je iets installeert op je server, is het slim om eerst de update-commando’s van je besturingssysteem te draaien. Zo houd je je server veilig en up-to-date.

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

Eerst moet je kiezen welke JavaScript runtime je wilt installeren. Er zijn online veel bronnen die elke runtime uitgebreid uitleggen. Deze gids helpt je ook, want hier vind je basiscommando’s en codevoorbeelden. Wij raden NodeJS aan, omdat het een van de populairste en meest gebruikte runtimes is.

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## Node.js Runtime installeren

Je kunt Node.js installeren via de pakketbeheerder van je Linux-distributie of met nvm. Wij raden apt aan, omdat dat meestal het makkelijkst is.

<Tabs>
<TabItem value="apt" label="Pakketbeheerder" default>

Voer het volgende commando uit om Node.js via de pakketbeheerder te installeren.

```
apt install nodejs -y
```

Om Node.js-pakketten voor je projecten te installeren, moet je ook de npm pakketbeheerder installeren.

```
apt install npm
```

### Node.js updaten naar de nieuwste versie

Met `node -v` zie je welke versie van Node.js is geïnstalleerd. Dit is meestal niet de nieuwste, dus wil je updaten om de nieuwste features te krijgen. Gelukkig maakt het npm-pakket `n` dit super makkelijk.

Eerst installeer je het met `npm install -g n`, daarna kun je met `n [versie]` (vervang `[versie]` door het gewenste versienummer) elke versie van Node.js installeren.

:::tip
Het is aan te raden om altijd de nieuwste Long Term Support (LTS) versie te gebruiken. Dat doe je met `n lts`.
:::

</TabItem>
<TabItem value="nvm" label="nvm">

Node.js installeren via nvm geeft je meer controle over verschillende Node.js-versies met hun eigen pakketten.

Zorg eerst dat curl op je systeem staat en voer dan dit commando uit:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Dit haalt het nvm installatiescript van GitHub en voert het uit.

:::note
Werken nvm-commando’s niet direct na installatie? Voer dan `source ~/.bashrc` uit om je bash-config te herladen.
:::

Net als bij de vorige methode kun je nu met `nvm install v[versie]` elke Node.js-versie installeren. Wil je alle beschikbare versies zien? Gebruik `nvm list-remote`. Wil je zien welke versies je al hebt? Gebruik `nvm list`.

:::tip
De Long Term Support versie installeer je met `nvm install --lts`
:::

</TabItem>
</Tabs>

### Node.js & npm gebruiken

Npm is de officiële pakketbeheerder van Node.js. Hiermee installeer je pakketten van het internet.

:::note
Je vindt alle npm-pakketten op hun [website](https://www.npmjs.com/).
:::

### Een nieuw project starten

Wil je een nieuw Node.js-project starten? Maak dan een nieuwe map aan (`mkdir [project-naam]`) of ga naar een lege map en voer `npm init` uit om het project op te zetten. Je wordt gevraagd wat basisinfo in te vullen voor het `package.json` bestand. Dit is het configuratiebestand voor Node.js.

Na het initialiseren maak je een bestand `index.js` aan en schrijf je code. Bijvoorbeeld een simpele http-server op poort 80 die een testbericht terugstuurt als je via localhost verbinding maakt:

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Run deze code met `node .` en check het resultaat door in je browser naar `localhost:80` te gaan.

:::tip
Externe npm-pakketten installeer je met `npm install [pakket-naam]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Deno Runtime installeren

Deno installeren is simpel: typ `curl -fsSL https://deno.land/install.sh | sh` in je console.

:::tip
Check de geïnstalleerde versie met `deno --version`.
:::

### Deno updaten naar de nieuwste versie

Update Deno met `deno upgrade`.

### Deno gebruiken

Maak een nieuw bestand `index.ts` en schrijf wat code. Bijvoorbeeld een simpele http-server op poort 80 die een testbericht terugstuurt als je via localhost verbindt:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Run dit met `deno run --allow-net index.ts` en check het resultaat via `localhost:80` in je browser.

:::info
Deno is ontworpen met veiligheid in gedachten en vraagt daarom om permissies zoals `--allow-net` om bepaalde modules te gebruiken.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Bun Runtime installeren

Bun heeft 2 officiële installatiemethoden: via curl of npm.

<Tabs>
<TabItem value="curl" label="curl" default>

Met `curl -fsSL https://bun.sh/install | bash` installeer je Bun op je server.

:::tip
Wil je een andere versie van Bun installeren? Gebruik dan `curl -fsSL https://bun.sh/install | bash -s "bun-v[versie]"`
:::

</TabItem>
<TabItem value="npm" label="npm">

Heb je npm al? Dan installeer je Bun met `npm install -g bun`.

</TabItem>
</Tabs>

### Bun gebruiken

Bun is gemaakt om sneller te zijn dan andere JavaScript-engines, met een setup die lijkt op Node.js. Open een lege map en run `bun init`.

:::note
Afhankelijk van je gekozen taal (JS of TS) maakt Bun een configbestand aan (jsconfig.json of tsconfig.json).
:::

Maak een `index.ts` bestand en schrijf wat code, bijvoorbeeld een simpele http-server op poort 80 die een testbericht terugstuurt:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Run dit met `bun index.ts` en check het resultaat via `localhost:80` in je browser.

</TabItem>
</Tabs>

Met deze gids heb je succesvol een van de populaire JavaScript runtimes op je Linux-server geïnstalleerd.