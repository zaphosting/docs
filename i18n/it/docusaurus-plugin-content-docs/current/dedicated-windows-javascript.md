---
id: dedicated-windows-javascript
title: "Configura il Runtime JavaScript su un Server Windows - Abilita l’Esecuzione di Applicazioni Web Moderne"
description: "Scopri come installare e configurare Node.js, Deno e Bun su Windows per eseguire JavaScript in modo efficiente → Scopri di più ora"
sidebar_label: Installa JavaScript
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Questa guida ti mostra come installare Node.js, Deno e Bun su Windows. I passaggi indicati vanno eseguiti tramite RDP; se non sai come connetterti al tuo server via RDP, dai un’occhiata alla nostra guida su [Accesso Iniziale (RDP)](vserver-windows-userdp.md).



## Installazione

Per cominciare, devi scegliere quale runtime JavaScript installare. Online trovi tantissime risorse che spiegano ogni runtime nel dettaglio. Ma puoi anche seguire questa guida, che include comandi base e esempi di codice. Ti consigliamo Node.js, perché è uno dei runtime più usati e molto popolare.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js Runtime" label="Node.js" default>

## Installazione del Runtime Node.js

### Passo 1: Scaricare i file
Apri il browser che preferisci (io uso Chrome per questa guida) e vai su [https://Node.js.org/en](https://Node.js.org/en)

![](https://screensaver01.zap-hosting.com/index.php/s/FXEML6xiCedS7Nq/preview)

Clicca sul pulsante `Download Node.js (LTS)` e aspetta che il download finisca.

![](https://screensaver01.zap-hosting.com/index.php/s/EwjMejMYykPCQRQ/preview)

:::tip
Ti consigliamo di installare sempre l’ultima versione Long Term Support (LTS).
:::

### Passo 2: Installazione di Node.js
Avvia l’installer cliccandoci sopra. Ti verrà chiesto di configurare alcune impostazioni. Nella pagina `Welcome` clicca su `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

Ora leggi e accetta (spuntando la casella) il Contratto di Licenza di Node.js, poi clicca su `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

Ti verrà chiesto dove installare Node.js.

:::note
Ti consigliamo di lasciare la cartella di installazione di default.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

Nella pagina successiva puoi scegliere di non installare alcuni pacchetti core di Node.js. Se vuoi un’installazione standard, che consigliamo, clicca semplicemente su `Next`. Avrai anche l’opzione di installare Chocolatey, ma non è necessario.

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### Passo 3: Completare l’installazione
Ora clicca su `Install` e aspetta che tutto venga configurato. Abbi pazienza, potrebbe volerci un po’. :)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

Al termine, clicca su `Finish` e potrai iniziare a usare Node.js sul tuo server.

### Aggiornare Node.js all’ultima versione

Esegui `node -v` per vedere la versione installata di Node.js. Di tanto in tanto, controlla di avere l’ultima versione LTS. Per aggiornare Node.js, segui di nuovo la sezione di questa guida [Installa JavaScript](dedicated-windows-javascript.md).

### Usare Node.js & npm

npm è il package manager ufficiale di Node.js. Lo userai per installare pacchetti da internet.

:::tip
Puoi trovare tutti i pacchetti npm sul loro [sito ufficiale](https://www.npmjs.com/).
:::

### Creare un nuovo progetto

Ogni volta che vuoi iniziare un nuovo progetto Node.js, crea una nuova cartella con Esplora File, apri il Prompt dei comandi o PowerShell in quella cartella e lancia il comando `npm init` per iniziare la configurazione. Ti verranno chieste alcune informazioni base per creare il file `package.json`, che è il file di configurazione per Node.js.

:::tip
Su Windows, cliccando una volta sulla barra del percorso in Esplora File, digitando `cmd` e premendo `Invio`, aprirai il Prompt dei comandi direttamente nella cartella corrente, molto comodo.
:::

Dopo aver inizializzato il progetto, crea un file chiamato `index.js` e scrivi il codice dentro. Come esempio, creiamo un semplice server http sulla porta 80 che risponde con un messaggio di test quando accedi da localhost. Ecco il codice:

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Ciao da ZAP-Hosting Docs =)')
})

server.listen(80)
```

Ora puoi eseguire il codice con il comando `node .` e controllare il risultato andando su `localhost:80` nel browser.

![](https://screensaver01.zap-hosting.com/index.php/s/kWRi9agrzkWc4rw/preview)

:::tip
Per installare pacchetti esterni da npm usa `npm install [nome-pacchetto]`.
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Installazione del Runtime Deno

Installare Deno è facilissimo: basta scrivere `irm https://deno.land/install.ps1 | iex` in una finestra PowerShell. Cerca `Powershell` nella barra di ricerca di Windows, apri il prompt come amministratore e lancia il comando, seguendo eventuali istruzioni.

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip
Per vedere la versione installata, usa `deno --version`.
:::

### Aggiornare Deno all’ultima versione

Aggiornare Deno è semplice: esegui `deno upgrade`.

### Usare Deno

Per iniziare con Deno crea un file `index.ts` e scrivi del codice. Come esempio, creiamo un semplice server http sulla porta 80 che risponde con un messaggio di test quando accedi da localhost. Ecco il codice:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Ciao da ZAP-Hosting Docs =)')
})
```

Ora puoi eseguire il codice con `deno run --allow-net index.ts` e controllare il risultato andando su `localhost:80` nel browser.

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info
Deno è stato creato per essere più sicuro e quindi richiede permessi come `--allow-net` per accedere ad alcune sue funzionalità.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Installazione del Runtime Bun

Bun offre un’installazione super semplice con un solo comando, ma puoi anche installarlo via npm se hai già usato Node.js.

<Tabs>
<TabItem value="command" label="Comando" default>

Esegui `irm bun.sh/install.ps1|iex` in PowerShell per installare Bun sul tuo server.

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info
Il server potrebbe mancare di alcuni file necessari. Bun ti informerà e ti fornirà link per scaricarli quando provi a eseguire l’installer.

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)
:::

</TabItem>
<TabItem value="npm" label="npm">

Se hai già npm, puoi installare Bun con `npm install -g bun`.

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### Usare Bun

Bun è stato creato per essere più veloce di altri motori JavaScript, mantenendo una configurazione simile a Node.js. Per usarlo, apri una cartella vuota e lancia `bun init` nel Prompt dei comandi.

:::note
A seconda del linguaggio scelto (JS o TS), Bun creerà un file di configurazione (jsconfig.json o tsconfig.json).
:::

Per iniziare con Bun crea un file `index.ts` e scrivi del codice. Come esempio, creiamo un semplice server http sulla porta 80 che risponde con un messaggio di test quando accedi da localhost. Ecco il codice:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Ciao da ZAP-Hosting Docs =)')
  },
})
```

Ora puoi eseguire il codice con `bun index.ts` e controllare il risultato andando su `localhost:80` nel browser.

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>

## Conclusione

Complimenti, hai installato con successo JavaScript! Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂



