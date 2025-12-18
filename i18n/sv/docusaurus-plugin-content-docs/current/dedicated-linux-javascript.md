---
id: dedicated-linux-javascript
title: 'Dedikerad Server: Installation av JavaScript'
description: "Upptäck hur du installerar och konfigurerar Node.js, Deno och Bun på din server för effektiv hantering av JavaScript-runtime → Lär dig mer nu"
sidebar_label: Installera JavaScript
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Den här guiden visar steg för installation av Node.js, Deno och Bun. Dessa kommandon måste köras via SSH, om du inte vet hur du ansluter till din server via SSH, ta en titt på vår [Initial access (SSH)](vserver-linux-ssh.md).

## Förberedelser

Innan du installerar något på en server rekommenderas det att köra uppdateringskommandot som passar ditt operativsystem för att hålla servern säker.

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

Först måste du bestämma vilken JavaScript-runtime du vill installera. Det finns massor av resurser online som beskriver varje alternativ i detalj. Men du kan också läsa den här guiden eftersom den inkluderar grundläggande kommandon och kodexempel. Vi rekommenderar NodeJS eftersom det är en av de mest använda och populära valen.

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## Installera Node.js Runtime

Du kan installera Node.js via din Linux-distributions paketmanager eller med nvm. Vi rekommenderar apt eftersom det oftast är enklare.

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

Att köra `node -v` visar vilken version av Node.js som är installerad. Det är oftast inte den senaste, så du behöver uppdatera för att få de senaste funktionerna. Lyckligtvis finns npm-paketet `n` som gör detta väldigt enkelt.

Först installerar vi det med `npm install -g n` och sedan kan vi köra `n [version]`, där du byter ut `[version]` mot önskad versionsnummer, för att installera vilken version av Node.js som helst.

:::tip
Det rekommenderas generellt att hålla din installation på senaste Long Term Support-versionen. Det gör du enkelt med `n lts`.
:::

</TabItem>
<TabItem value="nvm" label="nvm">

Att installera Node.js via nvm ger dig mer kontroll över att ha olika Node.js-versioner med egna paket.

Först, se till att curl är installerat på ditt system och kör sedan följande kommando.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Detta hämtar och kör nvm-installationsscriptet från GitHub.

:::note
Om nvm-kommandon inte fungerar efter installation, kör `source ~/.bashrc` för att ladda om bash-konfigurationsfilen.
:::

Precis som med tidigare metod kan du nu köra `nvm install v[version]` för att installera valfri Node.js-version. Vill du se alla tillgängliga versioner kör du `nvm list-remote` och för att se installerade versioner kör du `nvm list`.

:::tip
Installera Long Term Support-versionen med `nvm install --lts`
:::

</TabItem>
</Tabs>

### Köra Node.js & npm

Npm är den officiella paketmanagern för Node.js. Du använder den för att installera paket från internet.

:::note
Du hittar alla npm-paket på deras [webbplats](https://www.npmjs.com/).
:::

### Skapa ett nytt projekt

Varje gång du vill starta ett nytt Node.js-projekt behöver du skapa en ny mapp (`mkdir [projekt-namn]`) eller gå in i en tom mapp och köra `npm init` för att starta setupen. Det här frågar efter grundläggande info för att skapa en `package.json`-fil. Den är "konfigurationsfilen" för Node.js.

Efter att ha initierat projektet kan du skapa en fil som heter `index.js` och skriva kod i den. Som exempel skapar vi en enkel HTTP-server på standardport 80 som svarar med ett testmeddelande när du går till localhost. Koden ser ut så här:

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Nu kan du köra koden med kommandot `node .` och kolla resultatet genom att gå till `localhost:80` i din webbläsare.

:::tip
Installera externa paket från npm med `npm install [paket-namn]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Installera Deno Runtime

Att installera Deno är lika enkelt som att skriva `curl -fsSL https://deno.land/install.sh | sh` i din terminal.

:::tip
För att kolla vilken version som är installerad, kör `deno --version`.
:::

### Uppdatera Deno till senaste versionen

Uppdatera Deno enkelt med kommandot `deno upgrade`.

### Köra Deno

För att köra Deno behöver du skapa en ny fil `index.ts` och skriva lite kod i den. Som exempel skapar vi en enkel HTTP-server på port 80 som svarar med ett testmeddelande när du går till localhost. Så här ser koden ut:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Kör koden med `deno run --allow-net index.ts` och kolla resultatet på `localhost:80` i webbläsaren.

:::info
Deno är byggt för att vara säkrare och kräver därför vissa tillstånd som `--allow-net` för att få åtkomst till vissa moduler.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Installera Bun Runtime

Bun erbjuder två officiella installationssätt, antingen via curl eller npm.

<Tabs>
<TabItem value="curl" label="curl" default>

Kör `curl -fsSL https://bun.sh/install | bash` för att installera Bun på din server.

:::tip
För att installera andra versioner av Bun, kör `curl -fsSL https://bun.sh/install | bash -s "bun-v[version]"`
:::

</TabItem>
<TabItem value="npm" label="npm">

Om du redan har npm installerat kan du köra `npm install -g bun`.

</TabItem>
</Tabs>

### Köra Bun

Bun är gjort för att vara snabbare än många andra JavaScript-motorer, samtidigt som setupen liknar Node.js. För att köra Bun, öppna en tom mapp och kör `bun init`.

:::note
Beroende på valt språk (JS eller TS) skapar Bun en konfigurationsfil (jsconfig.json eller tsconfig.json).
:::

För att köra Bun behöver du skapa en ny fil `index.ts` och skriva lite kod i den. Som exempel skapar vi en enkel HTTP-server på port 80 som svarar med ett testmeddelande när du går till localhost. Så här ser koden ut:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Kör koden med `bun index.ts` och kolla resultatet på `localhost:80` i din webbläsare.

</TabItem>
</Tabs>

Genom att följa den här guiden har du nu installerat en av de populära JavaScript-runtimes på din Linux-server.