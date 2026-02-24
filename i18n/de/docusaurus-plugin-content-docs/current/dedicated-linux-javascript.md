---
id: dedicated-linux-javascript
title: "JavaScript Runtime auf einem Linux Server einrichten – Moderne Webanwendungen ausführen"
description: "Entdecke, wie du Node.js, Deno und Bun auf deinem Server installierst und einrichtest für effizientes JavaScript Runtime Management → Jetzt mehr erfahren"
sidebar_label: JavaScript installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Diese Anleitung zeigt dir, wie du Node.js, Deno und Bun installierst. Die Befehle müssen per SSH ausgeführt werden. Falls du nicht weißt, wie du dich per SSH mit deinem Server verbindest, schau dir bitte unsere [Erstzugang (SSH)](vserver-linux-ssh.md) Anleitung an.



## Vorbereitung

Bevor du irgendwas auf deinem Server installierst, solltest du den Update-Befehl für dein Betriebssystem ausführen, um deinen Server sicher und aktuell zu halten.

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

Zuerst musst du entscheiden, welche JavaScript Runtime du installieren möchtest. Es gibt viele Online-Ressourcen, die jede ausführlich beschreiben. Diese Anleitung enthält auch grundlegende Befehle und Codebeispiele. Wir empfehlen NodeJS, da es eine der am weitesten verbreiteten und beliebtesten Optionen ist.

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

Um Node.js Pakete für deine Projekte zu installieren, brauchst du außerdem den npm Paketmanager.

```
apt install npm
```

### Node.js auf die neueste Version aktualisieren

Mit `node -v` kannst du die installierte Node.js Version anzeigen. Das ist meistens nicht die aktuellste, daher solltest du updaten, um die neuesten Features zu bekommen. Glücklicherweise bietet das npm Paket `n` eine einfache Möglichkeit dafür.

Zuerst installierst du es mit `npm install -g n` und kannst dann mit `n [version]` jede gewünschte Node.js Version installieren, indem du `[version]` durch die Versionsnummer ersetzt.

:::tip
Es wird empfohlen, immer die neueste Long Term Support Version zu nutzen. Das geht mit `n lts`.
:::

</TabItem>
<TabItem value="nvm" label="nvm">

Node.js mit nvm zu installieren gibt dir mehr Kontrolle, um verschiedene Node.js Versionen mit ihren eigenen Paketen zu verwalten.

Stelle zuerst sicher, dass curl auf deinem System installiert ist, und führe dann diesen Befehl aus:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Das lädt das nvm Installationsskript von GitHub und führt es aus.

:::note
Falls nvm Befehle nach der Installation nicht funktionieren, lade die Bash-Konfiguration neu mit `source ~/.bashrc`.
:::

Wie beim vorherigen Verfahren kannst du jetzt mit `nvm install v[version]` jede Node.js Version installieren. Mit `nvm list-remote` siehst du alle verfügbaren Versionen, und mit `nvm list` alle installierten Versionen.

:::tip
Die Long Term Support Version installierst du mit `nvm install --lts`.
:::

</TabItem>
</Tabs>

### Node.js & npm nutzen

npm ist der offizielle Paketmanager von Node.js. Damit installierst du Pakete aus dem Internet.

:::note
Alle npm Pakete findest du auf der [offiziellen Webseite](https://www.npmjs.com/).
:::

### Neues Projekt erstellen

Wenn du ein neues Node.js Projekt starten willst, erstellst du zuerst ein neues Verzeichnis (`mkdir [projekt-name]`) oder wechselst in einen leeren Ordner und führst `npm init` aus, um die Einrichtung zu starten. Dabei wirst du nach ein paar Basisinfos gefragt, um eine `package.json` Datei zu erstellen. Diese ist die "Config" für dein Node.js Projekt.

Nach der Initialisierung kannst du eine Datei namens `index.js` anlegen und deinen Code reinschreiben. Als Beispiel erstellen wir einen einfachen HTTP-Server auf Port 80, der beim Zugriff über localhost eine Testnachricht zurückgibt:

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Starte den Code mit `node .` und öffne `localhost:80` im Browser, um das Ergebnis zu sehen.

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
Mit `deno --version` kannst du die aktuell installierte Version prüfen.
:::

### Deno auf die neueste Version aktualisieren

Deno aktualisierst du mit:

```
deno upgrade
```

### Deno nutzen

Um Deno zu starten, legst du eine neue Datei `index.ts` an und schreibst Code rein. Als Beispiel erstellen wir einen einfachen HTTP-Server auf Port 80, der beim Zugriff über localhost eine Testnachricht zurückgibt:

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

Wenn du npm schon installiert hast, kannst du auch einfach:

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
Je nach gewählter Sprache (JS oder TS) erstellt Bun eine Config-Datei (jsconfig.json oder tsconfig.json).
:::

Um Bun zu starten, legst du eine neue Datei `index.ts` an und schreibst Code rein. Als Beispiel erstellen wir einen einfachen HTTP-Server auf Port 80, der beim Zugriff über localhost eine Testnachricht zurückgibt:

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

Wenn du dieser Anleitung folgst, hast du erfolgreich eine der beliebten JavaScript Runtimes auf deinem Linux Server installiert.