---
id: vserver-linux-javascript
title: 'VPS: Installation von JavaScript'
description: "Entdecke, wie du Node.js, Deno und Bun auf deinem Server installierst und einrichtest für effizientes JavaScript Runtime Management → Jetzt mehr erfahren"
sidebar_label: JavaScript installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Diese Anleitung zeigt dir die Schritte zur Installation von Node.js, Deno und Bun. Diese Befehle müssen per SSH ausgeführt werden. Falls du nicht weißt, wie du dich per SSH mit deinem Server verbindest, schau dir bitte unsere [Erstzugang (SSH)](vserver-linux-ssh.md) Anleitung an.

<InlineVoucher />

## Vorbereitung

Bevor du irgendwas auf deinem Server installierst, empfehlen wir, den Update-Befehl passend zu deinem Betriebssystem auszuführen, um deinen Server sicher und aktuell zu halten.

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

Zuerst musst du entscheiden, welche JavaScript Runtime du installieren möchtest. Es gibt viele Online-Ressourcen, die jede ausführlich beschreiben. Aber du kannst auch diese Anleitung lesen, denn sie enthält grundlegende Befehle und Code-Beispiele. Wir empfehlen NodeJS, da es eine der am weitesten verbreiteten und beliebtesten Optionen ist.

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## Node.js Runtime installieren

Du kannst Node.js über den Paketmanager deiner Linux-Distribution oder mit nvm installieren. Wir empfehlen apt, da es meistens einfacher ist.

<Tabs>
<TabItem value="apt" label="Paketmanager" default>

Führe folgenden Befehl aus, um Node.js über den Paketmanager zu installieren.

```
apt install nodejs -y
```

Um Node.js Pakete für deine Projekte zu installieren, brauchst du außerdem den npm Paketmanager.

```
apt install npm
```

### Node.js auf die neueste Version aktualisieren

Mit `node -v` kannst du die installierte Node.js Version anzeigen lassen. Das ist meistens nicht die neueste, daher solltest du sie aktualisieren, um die neuesten Features zu bekommen. Glücklicherweise bietet das npm Paket `n` eine sehr einfache Möglichkeit dafür.

Zuerst installierst du es mit `npm install -g n` und kannst dann mit `n [version]` jede gewünschte Node.js Version installieren, wobei du `[version]` durch die Versionsnummer ersetzt.

:::tip
Es wird generell empfohlen, immer die neueste Long Term Support Version zu verwenden. Das geht mit `n lts`.
:::

</TabItem>
<TabItem value="nvm" label="nvm">

Node.js über nvm zu installieren gibt dir mehr Kontrolle, da du verschiedene Node.js Versionen mit ihren eigenen Paketen verwalten kannst.

Stelle zuerst sicher, dass curl auf deinem System installiert ist, und führe dann folgenden Befehl aus:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Dieser Befehl lädt das nvm Installationsskript von GitHub und führt es aus.

:::note
Falls nvm Befehle nach der Installation nicht funktionieren, führe `source ~/.bashrc` aus, um die Bash-Konfiguration neu zu laden.
:::

Ähnlich wie bei der vorherigen Methode kannst du jetzt mit `nvm install v[version]` jede Node.js Version installieren. Mit `nvm list-remote` siehst du alle verfügbaren Versionen und mit `nvm list` alle aktuell installierten.

:::tip
Die Long Term Support Version installierst du mit `nvm install --lts`.
:::

</TabItem>
</Tabs>

### Node.js & npm nutzen

npm ist der offizielle Paketmanager von Node.js. Du nutzt ihn, um Pakete aus dem Internet zu installieren.

:::note
Alle npm Pakete findest du auf der [offiziellen Webseite](https://www.npmjs.com/).
:::

### Neues Projekt erstellen

Jedes Mal, wenn du ein neues Node.js Projekt starten willst, musst du ein neues Verzeichnis anlegen (`mkdir [projekt-name]`) oder in einen leeren Ordner wechseln und den Befehl `npm init` ausführen, um die Einrichtung zu starten. Dabei wirst du nach ein paar Basisinfos gefragt, um eine `package.json` Datei zu erstellen. Diese ist die "Config" für dein Node.js Projekt.

Nach der Initialisierung kannst du eine neue Datei namens `index.js` erstellen und Code hineinschreiben. Als Beispiel erstellen wir einen einfachen HTTP-Server auf dem Standardport 80, der beim Zugriff über localhost eine Testnachricht zurückgibt. So sieht das aus:

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Du kannst den Code mit `node .` ausführen und das Ergebnis im Browser unter `localhost:80` ansehen.

:::tip
Externe Pakete von npm installierst du mit `npm install [paket-name]`.
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Deno Runtime installieren

Deno installierst du ganz einfach mit:

```
curl -fsSL https://deno.land/install.sh | sh
```

:::tip
Um die aktuell installierte Version zu prüfen, kannst du `deno --version` ausführen.
:::

### Deno auf die neueste Version aktualisieren

Deno aktualisierst du einfach mit:

```
deno upgrade
```

### Deno nutzen

Um Deno zu starten, erstellst du eine neue Datei `index.ts` und schreibst etwas Code hinein. Als Beispiel bauen wir einen einfachen HTTP-Server auf Port 80, der beim Zugriff über localhost eine Testnachricht zurückgibt:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Starte den Code mit:

```
deno run --allow-net index.ts
```

und öffne `localhost:80` im Browser, um das Ergebnis zu sehen.

:::info
Deno wurde mit Fokus auf Sicherheit entwickelt und benötigt deshalb bestimmte Berechtigungen wie `--allow-net`, um auf manche Module zugreifen zu können.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Bun Runtime installieren

Bun bietet zwei offizielle Installationswege: via curl oder npm.

<Tabs>
<TabItem value="curl" label="curl" default>

Mit folgendem Befehl installierst du Bun auf deinem Server:

```
curl -fsSL https://bun.sh/install | bash
```

:::tip
Für andere Versionen kannst du `curl -fsSL https://bun.sh/install | bash -s "bun-v[version]"` ausführen.
:::

</TabItem>
<TabItem value="npm" label="npm">

Wenn du npm schon installiert hast, kannst du auch einfach

```
npm install -g bun
```

ausführen.

</TabItem>
</Tabs>

### Bun nutzen

Bun wurde entwickelt, um schneller als andere JavaScript Engines zu sein und hat eine ähnliche Bedienung wie Node.js. Öffne ein leeres Verzeichnis und starte mit:

```
bun init
```

:::note
Je nach gewählter Sprache (JS oder TS) erstellt Bun eine Konfigurationsdatei (jsconfig.json oder tsconfig.json).
:::

Um Bun zu starten, erstellst du eine neue Datei `index.ts` und schreibst Code hinein. Als Beispiel bauen wir einen einfachen HTTP-Server auf Port 80, der beim Zugriff über localhost eine Testnachricht zurückgibt:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Starte den Code mit:

```
bun index.ts
```

und öffne `localhost:80` im Browser, um das Ergebnis zu sehen.

</TabItem>
</Tabs>


## Fazit

Glückwunsch, du hast JavaScript erfolgreich installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />