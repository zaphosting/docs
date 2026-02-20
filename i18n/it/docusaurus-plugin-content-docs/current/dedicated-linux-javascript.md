---
id: dedicated-linux-javascript
title: "Configura il Runtime JavaScript su un Server Linux - Abilita l’Esecuzione di Applicazioni Web Moderne"
description: "Scopri come installare e configurare Node.js, Deno e Bun sul tuo server per una gestione efficiente del runtime JavaScript → Scopri di più ora"
sidebar_label: Installa JavaScript
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Questa guida ti mostra come installare Node.js, Deno e Bun. Questi comandi vanno eseguiti via SSH; se non sai come connetterti al tuo server via SSH, dai un’occhiata al nostro [Accesso iniziale (SSH)](vserver-linux-ssh.md).

## Preparazione

Prima di installare qualsiasi cosa su un server, è consigliato eseguire il comando di aggiornamento corrispondente al tuo sistema operativo per mantenere il server sicuro.

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

## Installazione

Per cominciare, devi decidere quale runtime JavaScript installare. Online trovi tantissime risorse che spiegano ogni runtime nel dettaglio. Ma puoi anche seguire questa guida, che include comandi base e esempi di codice. Ti consigliamo NodeJS, uno dei runtime più usati e popolari.

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## Installare Node.js Runtime

Puoi installare Node.js tramite il package manager della tua distro Linux o usando nvm. Ti consigliamo apt perché è più semplice.

<Tabs>
<TabItem value="apt" label="Package Manager" default>

Esegui questo comando per iniziare l’installazione di Node.js tramite il package manager.

```
apt install nodejs -y
```

Per installare i pacchetti Node.js per i tuoi progetti, ti serve anche il package manager npm.

```
apt install npm
```

### Aggiornare Node.js all’ultima versione

Eseguendo `node -v` vedi la versione installata di Node.js. Di solito non è l’ultima, quindi dovrai aggiornarla per avere le ultime funzionalità. Fortunatamente, il pacchetto npm `n` rende tutto molto semplice.

Prima installalo con `npm install -g n`, poi esegui `n [version]`, sostituendo `[version]` con la versione che vuoi, per installare qualsiasi versione di Node.js.

:::tip
È consigliato mantenere sempre l’ultima versione Long Term Support. Puoi farlo con `n lts`.
:::

</TabItem>
<TabItem value="nvm" label="nvm">

Installare Node.js tramite nvm ti dà un controllo più preciso, permettendoti di gestire diverse versioni di Node.js con i loro pacchetti.

Prima assicurati di avere curl installato, poi esegui:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Questo scarica ed esegue lo script di installazione di nvm da GitHub.

:::note
Se dopo l’installazione i comandi nvm non funzionano, esegui `source ~/.bashrc` per ricaricare la configurazione della shell.
:::

Come prima, puoi installare qualsiasi versione con `nvm install v[version]`. Per vedere tutte le versioni disponibili, usa `nvm list-remote`. Per vedere le versioni installate, usa `nvm list`.

:::tip
Per installare la versione Long Term Support usa `nvm install --lts`
:::

</TabItem>
</Tabs>

### Usare Node.js & npm

Npm è il package manager ufficiale di Node.js. Lo userai per installare pacchetti da internet.

:::note
Puoi trovare tutti i pacchetti npm sul loro [sito ufficiale](https://www.npmjs.com/).
:::

### Creare un nuovo progetto

Ogni volta che vuoi iniziare un nuovo progetto Node.js, crea una nuova cartella (`mkdir [nome-progetto]`) o entra in una cartella vuota e lancia `npm init` per iniziare la configurazione. Ti verranno chieste alcune info base per creare il file `package.json`, che è il file di configurazione per Node.js.

Dopo aver inizializzato il progetto, crea un file chiamato `index.js` e scrivi il codice dentro. Come esempio, creiamo un semplice server http sulla porta 80 che risponde con un messaggio di test quando accedi da localhost. Ecco il codice:

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Ora puoi eseguire il codice con `node .` e vedere il risultato aprendo `localhost:80` nel browser.

:::tip
Per installare pacchetti esterni da npm usa `npm install [nome-pacchetto]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Installare Deno Runtime

Installare Deno è semplicissimo: basta scrivere `curl -fsSL https://deno.land/install.sh | sh` nel terminale.

:::tip
Per controllare la versione installata, usa `deno --version`.
:::

### Aggiornare Deno all’ultima versione

Aggiornare Deno è facile: esegui `deno upgrade`.

### Usare Deno

Per iniziare con Deno crea un file `index.ts` e scrivi un po’ di codice. Come esempio, creiamo un semplice server http sulla porta 80 che risponde con un messaggio di test quando accedi da localhost. Ecco il codice:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Ora esegui il codice con `deno run --allow-net index.ts` e apri `localhost:80` nel browser per vedere il risultato.

:::info
Deno è stato creato per essere più sicuro e richiede permessi espliciti come `--allow-net` per accedere a certi moduli.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Installare Bun Runtime

Bun offre 2 modi ufficiali per installarlo: via curl o npm.

<Tabs>
<TabItem value="curl" label="curl" default>

Esegui `curl -fsSL https://bun.sh/install | bash` per installare Bun sul server.

:::tip
Per installare versioni diverse di Bun, usa `curl -fsSL https://bun.sh/install | bash -s "bun-v[version]"`
:::

</TabItem>
<TabItem value="npm" label="npm">

Se hai già npm installato, puoi eseguire `npm install -g bun`.

</TabItem>
</Tabs>

### Usare Bun

Bun è stato creato per essere più veloce di altri motori JavaScript, mantenendo una configurazione simile a Node.js. Per usarlo, apri una cartella vuota e lancia `bun init`.

:::note
A seconda del linguaggio scelto (JS o TS), Bun creerà un file di configurazione (jsconfig.json o tsconfig.json).
:::

Per iniziare con Bun crea un file `index.ts` e scrivi un po’ di codice. Come esempio, creiamo un semplice server http sulla porta 80 che risponde con un messaggio di test quando accedi da localhost. Ecco il codice:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Ora esegui il codice con `bun index.ts` e apri `localhost:80` nel browser per vedere il risultato.

</TabItem>
</Tabs>

Seguendo questa guida, avrai installato con successo uno dei runtime JavaScript più popolari sul tuo server Linux.