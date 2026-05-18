---
id: dedicated-linux-javascript
title: "Installera JavaScript Runtime på en Linux-server – Kör moderna webbappar smidigt"
description: "Lär dig hur du installerar och sätter upp Node.js, Deno och Bun på din server för effektiv JavaScript-runtime → Läs mer nu"
sidebar_label: Installera JavaScript
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Den här guiden visar steg för installation av Node.js, Deno och Bun. Dessa kommandon måste köras via SSH. Om du inte vet hur du ansluter till din server via SSH, kolla in vår [Initial access (SSH)](vserver-linux-ssh.md).

## Förberedelser

Innan du installerar något på servern rekommenderar vi att du kör uppdateringskommandot för ditt operativsystem för att hålla servern säker.

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

## Installation

Först måste du bestämma vilken JavaScript-runtime du vill installera. Det finns massor av resurser online som beskriver varje alternativ i detalj. Men du kan också läsa den här guiden som inkluderar grundläggande kommandon och kodexempel. Vi rekommenderar NodeJS eftersom det är en av de mest använda och populära lösningarna.

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## Installera Node.js Runtime

Du kan installera Node.js via din Linux-distributions paketmanager eller med nvm. Vi rekommenderar apt eftersom det oftast är enklast.

<Tabs>
<TabItem value="apt" label="Paketmanager" default>

Kör följande kommando för att börja installera Node.js via paketmanagern.

```
apt install nodejs -y
```

För att installera Node.js-paket till dina projekt behöver du även installera npm-paketmanagern.

```
apt install npm
```

### Uppdatera Node.js till senaste versionen

Kör `node -v` för att se vilken version av Node.js som är installerad. Det är ofta inte den senaste, så du behöver uppdatera för att få de senaste funktionerna. Lyckligtvis finns npm-paketet `n` som gör detta väldigt enkelt.

Först installerar du det med `npm install -g n` och sedan kan du köra `n [version]`, där du byter ut `[version]` mot önskad versionsnummer, för att installera vilken version av Node.js som helst.

:::tip
Det rekommenderas generellt att hålla installationen på senaste Long Term Support-versionen. Det gör du med `n lts`.
:::

</TabItem>
<TabItem value="nvm" label="nvm">

Att installera Node.js via nvm ger dig bättre kontroll över olika Node.js-versioner och deras egna paket.

Först, se till att curl är installerat och kör sedan:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Detta hämtar och kör nvm-installationsscriptet från GitHub.

:::note
Om nvm-kommandon inte fungerar efter installation, kör `source ~/.bashrc` för att ladda om bash-konfigurationen.
:::

Precis som tidigare kan du nu installera valfri Node.js-version med `nvm install v[version]`. Vill du se alla tillgängliga versioner kör du `nvm list-remote` och för att se installerade versioner kör du `nvm list`.

:::tip
Long Term Support-versionen installerar du med `nvm install --lts`
:::

</TabItem>
</Tabs>

### Köra Node.js & npm

Npm är den officiella paketmanagern för Node.js och används för att installera paket från internet.

:::note
Alla npm-paket hittar du på deras [webbplats](https://www.npmjs.com/).
:::

### Skapa ett nytt projekt

Varje gång du vill starta ett nytt Node.js-projekt skapar du en ny mapp (`mkdir [projekt-namn]`) eller går in i en tom mapp och kör `npm init` för att starta setupen. Du får fylla i lite grundläggande info för att skapa en `package.json`-fil, som är konfigurationsfilen för Node.js.

Efter initiering kan du skapa en fil som heter `index.js` och skriva kod i den. Här är ett exempel på en enkel HTTP-server på port 80 som svarar med ett testmeddelande när du går till `localhost`.

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Kör koden med `node .` och kolla resultatet genom att gå till `localhost:80` i din webbläsare.

:::tip
Installera externa paket från npm med `npm install [paket-namn]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Installera Deno Runtime

Installera Deno enkelt genom att skriva `curl -fsSL https://deno.land/install.sh | sh` i terminalen.

:::tip
Kolla vilken version som är installerad med `deno --version`.
:::

### Uppdatera Deno till senaste versionen

Uppdatera Deno med kommandot `deno upgrade`.

### Köra Deno

Skapa en fil `index.ts` och skriv lite kod. Här är ett exempel på en enkel HTTP-server på port 80 som svarar med ett testmeddelande när du går till `localhost`.

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Kör koden med `deno run --allow-net index.ts` och kolla resultatet på `localhost:80` i webbläsaren.

:::info
Deno är designat för att vara säkrare och kräver därför vissa tillstånd som `--allow-net` för att få åtkomst till vissa moduler.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Installera Bun Runtime

Bun kan installeras på två officiella sätt, via curl eller npm.

<Tabs>
<TabItem value="curl" label="curl" default>

Kör `curl -fsSL https://bun.sh/install | bash` för att installera Bun på servern.

:::tip
Vill du installera en annan version av Bun kör du `curl -fsSL https://bun.sh/install | bash -s "bun-v[version]"`
:::

</TabItem>
<TabItem value="npm" label="npm">

Om du redan har npm installerat kan du köra `npm install -g bun`.

</TabItem>
</Tabs>

### Köra Bun

Bun är byggt för att vara snabbare än andra JavaScript-motorer och har en setup som liknar Node.js. Öppna en tom mapp och kör `bun init`.

:::note
Beroende på valt språk (JS eller TS) skapar Bun en konfigurationsfil (jsconfig.json eller tsconfig.json).
:::

Skapa en fil `index.ts` och skriv lite kod. Här är ett exempel på en enkel HTTP-server på port 80 som svarar med ett testmeddelande när du går till `localhost`.

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Kör koden med `bun index.ts` och kolla resultatet på `localhost:80` i webbläsaren.

</TabItem>
</Tabs>

Följ den här guiden så har du snabbt och enkelt installerat en av de populära JavaScript-runtimes på din Linux-server.