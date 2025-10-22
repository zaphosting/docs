---
id: dedicated-linux-javascript
title: 'Dedicated Server: Installation von JavaScript'
description: "Entdecke, wie du Node.js, Deno und Bun auf deinem Server installierst und einrichtest, um JavaScript-Runtimes effizient zu managen → Jetzt mehr erfahren"
sidebar_label: JavaScript installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Diese Anleitung zeigt dir, wie du Node.js, Deno und Bun installierst. Die Befehle müssen per SSH ausgeführt werden. Wenn du nicht weißt, wie du dich per SSH mit deinem Server verbindest, schau dir bitte unsere [Erstzugang (SSH)](vserver-linux-ssh.md) Anleitung an.

<InlineVoucher />

## Vorbereitung

Bevor du irgendwas auf deinem Server installierst, empfehlen wir, den Update-Befehl deines Betriebssystems auszuführen, um deinen Server sicher und aktuell zu halten.

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

Zuerst musst du entscheiden, welche JavaScript-Runtime du installieren möchtest. Es gibt viele Online-Ressourcen, die jede ausführlich beschreiben. Du kannst aber auch diese Anleitung lesen, da sie grundlegende Befehle und Codebeispiele enthält. Wir empfehlen NodeJS, da es eine der am weitesten verbreiteten und beliebtesten Optionen ist.

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## Node.js Runtime installieren

Node.js kannst du entweder über den Paketmanager deiner Linux-Distribution oder mit nvm installieren. Wir empfehlen apt, da es meistens einfacher ist.

<Tabs>
<TabItem value="apt" label="Paketmanager" default>

Führe folgenden Befehl aus, um Node.js über den Paketmanager zu installieren.

```
apt install nodejs -y
```

Um Node.js-Pakete für deine Projekte zu installieren, brauchst du außerdem den npm Paketmanager.

```
apt install npm
```

### Node.js auf die neueste Version aktualisieren

Mit `node -v` kannst du die installierte Node.js-Version anzeigen lassen. Das ist meistens nicht die aktuellste Version, daher solltest du updaten, um die neuesten Features zu bekommen. Glücklicherweise bietet das npm-Paket `n` eine einfache Möglichkeit dafür.

Zuerst installierst du es mit `npm install -g n` und kannst dann mit `n [version]` (ersetze `[version]` durch die gewünschte Versionsnummer) jede Node.js-Version installieren.

:::tip
Es wird generell empfohlen, immer die neueste Long Term Support (LTS) Version zu nutzen. Das machst du mit `n lts`.
:::

</TabItem>
<TabItem value="nvm" label="nvm">

Node.js mit nvm zu installieren gibt dir mehr Kontrolle, da du verschiedene Node.js-Versionen mit ihren eigenen Paketen verwalten kannst.

Stelle zuerst sicher, dass curl auf deinem System installiert ist, und führe dann folgenden Befehl aus:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Dieser Befehl lädt das nvm-Installationsskript von GitHub und führt es aus.

:::note
Falls nvm-Befehle nach der Installation nicht funktionieren, führe `source ~/.bashrc` aus, um die Bash-Konfiguration neu zu laden.
:::

Ähnlich wie beim vorherigen Verfahren kannst du jetzt mit `nvm install v[version]` jede Node.js-Version installieren. Mit `nvm list-remote` siehst du alle verfügbaren Versionen und mit `nvm list` alle installierten Versionen.

:::tip
Die Long Term Support Version installierst du mit `nvm install --lts`.
:::

</TabItem>
</Tabs>

### Node.js & npm nutzen

npm ist der offizielle Paketmanager von Node.js. Du nutzt ihn, um Pakete aus dem Internet zu installieren.

:::note
Alle npm-Pakete findest du auf der [offiziellen Webseite](https://www.npmjs.com/).
:::

### Neues Projekt erstellen

Jedes Mal, wenn du ein neues Node.js-Projekt starten willst, musst du ein neues Verzeichnis anlegen (`mkdir [projekt-name]`) oder in einen leeren Ordner wechseln und den Befehl `npm init` ausführen, um die Einrichtung zu starten. Dabei wirst du nach einigen Basisinfos gefragt, um eine `package.json` Datei zu erstellen. Diese Datei ist die "Config" für dein Node.js-Projekt.

Nach der Initialisierung kannst du eine neue Datei namens `index.js` erstellen und Code hineinschreiben. Als Beispiel erstellen wir einen einfachen HTTP-Server auf dem Standardport 80, der beim Zugriff über localhost eine Testnachricht zurückgibt. So sieht das aus:

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Du kannst den Code mit dem Befehl `node .` starten und die Ausgabe im Browser unter `localhost:80` prüfen.

:::tip
Externe Pakete von npm installierst du mit `npm install [paket-name]`.
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Deno Runtime installieren

Deno installierst du ganz einfach mit dem Befehl `curl -fsSL https://deno.land/install.sh | sh` in der Konsole.

:::tip
Um die aktuell installierte Version zu prüfen, kannst du `deno --version` ausführen.
:::

### Deno auf die neueste Version aktualisieren

Deno aktualisierst du einfach mit `deno upgrade`.

### Deno nutzen

Um Deno zu starten, erstellst du eine neue Datei `index.ts` und schreibst etwas Code hinein. Als Beispiel erstellen wir einen einfachen HTTP-Server auf Port 80, der beim Zugriff über localhost eine Testnachricht zurückgibt:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Starte den Code mit `deno run --allow-net index.ts` und prüfe das Ergebnis im Browser unter `localhost:80`.

:::info
Deno wurde mit Fokus auf Sicherheit entwickelt und benötigt daher bestimmte Berechtigungen wie `--allow-net`, um auf manche Module zugreifen zu können.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Bun Runtime installieren

Bun bietet zwei offizielle Installationswege an: über curl oder npm.

<Tabs>
<TabItem value="curl" label="curl" default>

Mit `curl -fsSL https://bun.sh/install | bash` installierst du Bun auf deinem Server.

:::tip
Für andere Versionen kannst du `curl -fsSL https://bun.sh/install | bash -s "bun-v[version]"` ausführen.
:::

</TabItem>
<TabItem value="npm" label="npm">

Wenn du npm schon installiert hast, kannst du auch `npm install -g bun` ausführen.

</TabItem>
</Tabs>

### Bun nutzen

Bun wurde entwickelt, um schneller als andere JavaScript-Engines zu sein und hat eine ähnliche Handhabung wie Node.js. Um Bun zu starten, öffne ein leeres Verzeichnis und führe `bun init` aus.

:::note
Je nach gewählter Sprache (JS oder TS) erstellt Bun eine Konfigurationsdatei (jsconfig.json oder tsconfig.json).
:::

Um Bun zu starten, erstellst du eine neue Datei `index.ts` und schreibst Code hinein. Als Beispiel erstellen wir einen einfachen HTTP-Server auf Port 80, der beim Zugriff über localhost eine Testnachricht zurückgibt:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Starte den Code mit `bun index.ts` und prüfe das Ergebnis im Browser unter `localhost:80`.

</TabItem>
</Tabs>

Wenn du dieser Anleitung folgst, hast du erfolgreich eine der beliebten JavaScript-Runtimes auf deinem Linux-Server installiert.

<InlineVoucher />