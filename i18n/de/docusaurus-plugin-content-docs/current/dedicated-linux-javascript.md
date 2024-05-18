---
id: dedicated-linux-javascript
title: 'Dedicated Server: Installation von JavaScript'
description: Informationen darüber, wie man JavaScript auf deinem Linux-Server von ZAP-Hosting.com installiert - ZAP-Hosting.com Dokumentation
sidebar_label: JavaScript installieren
---

## Einführung

Diese Anleitung liefert Schritte zur Installation von Node.js, Deno und Bun. Diese Befehle müssen über SSH ausgeführt werden. Wenn du nicht weißt, wie man sich über SSH mit deinem Server verbindet, schau dir bitte unsere [Erstzugriff (SSH) Anleitung](https://zap-hosting.com/guides/docs/vserver-linux-ssh) an.

## Voraussetzungen

Bevor du irgendetwas auf einem Server installierst, wird empfohlen, den Aktualisierungsbefehl, der zu deinem Betriebssystem passt, auszuführen, um deinen Server sicher zu halten.

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

Zu Beginn musst du entscheiden, welche JavaScript-Laufzeitumgebung du installieren möchtest. Es gibt viele Online-Ressourcen, die jede davon ausführlich beschreiben. Du kannst aber auch diese Anleitung lesen, da diese grundlegende Befehle zur Nutzung und Codebeispiele enthält. Wir empfehlen die Verwendung von NodeJS, da es eine der am weitesten verbreiteten und sehr beliebten Optionen ist.

<Tabs>
<TabItem value="Node.js-Laufzeitumgebung" label="Node.js" default>

## Node.js-Laufzeitumgebung installieren

Du kannst Node.js über den Paketmanager deiner Linux-Distribution oder mit nvm installieren. Wir empfehlen die Verwendung von apt, da dies in der Regel einfacher ist.

<Tabs>
<TabItem value="apt" label="Paketmanager" default>

Führe den folgenden Befehl aus, um die Installation von Node.js über den Paketmanager zu beginnen.

```
apt install nodejs -y
```


Um Node.js-Pakete für deine Projekte zu installieren, musst du auch den npm-Paketmanager installieren.

```
apt install npm
```

### Node.js auf die neueste Version aktualisieren

Mit dem Befehl `node -v` kannst du die installierte Version von Node.js anzeigen lassen. Diese ist normalerweise nicht die neueste, daher musst du sie aktualisieren, um die neuesten Funktionen zu erhalten. Glücklicherweise bietet das npm-Paket `n` eine sehr einfache Möglichkeit, dies zu tun.

Zuerst müssen wir es installieren, indem wir `npm install -g n` ausführen, und dann können wir `n [version]` ausführen, wobei `[version]` durch die gewünschte Versionsnummer ersetzt wird, um jede Version von Node.js zu installieren.

:::tip
Es wird allgemein empfohlen, deine Installation auf der neuesten Langzeitunterstützungs-Version zu halten. Dies kannst du tun, indem du `n lts` ausführst.
:::

Die Installation von Node.js über nvm bietet eine feinere Kontrolle darüber, verschiedene Node.js-Versionen zu haben, die jeweils mit ihren eigenen Paketen verbunden sind.

Stelle zunächst sicher, dass curl auf deinem System installiert ist, und führe dann den folgenden Befehl aus.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Das Ausführen dieses Befehls lädt das Installations-Skript von nvm von GitHub und führt es aus.

:::note
Falls die nvm-Befehle nach der Installation nicht funktionieren, führe bitte `source ~/.bashrc` aus, um die Bash-Konfigurationsdatei neu zu laden.
:::

Ähnlich wie bei der vorherigen Methode kannst du jetzt einen Befehl (`nvm install v[version]`) ausführen, um eine beliebige Node.js-Version zu installieren. Wenn du alle herunterladbaren Versionen sehen möchtest, kannst du `nvm list-remote` ausführen, und wenn du alle derzeit installierten Node.js-Versionen sehen möchtest, kannst du `nvm list` ausführen.

:::tip
Die Installation der Langzeitunterstützung kann mit `nvm install --lts` durchgeführt werden.
:::

</TabItem>
</Tabs>

### Node.js & npm ausführen

Npm ist der offizielle Paketmanager von Node.js. Du wirst ihn verwenden, um Pakete aus dem Internet zu installieren.

:::note
Alle npm-Pakete findest du auf ihrer [Webseite](https://www.npmjs.com/).
:::


### Ein neues Projekt erstellen

Jedes Mal, wenn du ein neues Node.js-Projekt starten möchtest, musst du ein neues Verzeichnis dafür anlegen (`mkdir [projekt-name]`) oder in einen leeren Ordner wechseln und den Befehl `npm init` ausführen, um die Einrichtung zu beginnen. Dabei wirst du nach einigen grundlegenden Informationen gefragt, um eine `package.json`-Datei zu erstellen. Diese Datei wird die "Konfigurations"-Datei für das Ausführen von Node.js sein.

Nachdem du das neue Projekt initialisiert hast, kannst du eine neue Datei namens `index.js` erstellen und darin Code schreiben. Als Beispiel werden wir einen einfachen HTTP-Server auf dem Standardport 80 erstellen, der mit einer Testnachricht antwortet, wenn er über localhost aufgerufen wird. Dies kann unten gesehen werden.


```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hallo von ZAP-Hosting Docs =)')
})

server.listen(80)
```

Jetzt kannst du den bereitgestellten Code mit dem Befehl `node .` ausführen und die Ergebnisse überprüfen, indem du `localhost:80` in deinem Browser aufrufst.

:::tip
Das Installieren externer Pakete von npm wird mit dem Befehl `npm install [paket-name]` durchgeführt.
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Deno-Laufzeitumgebung installieren

Deno zu installieren ist so einfach wie das Eingeben von `curl -fsSL https://deno.land/install.sh | sh` in deine Konsole.

:::tip
Um die derzeit installierte Version zu überprüfen, kannst du `deno --version` ausführen.
:::

### Deno auf die neueste Version aktualisieren

Das Aktualisieren von Deno kann einfach durch Ausführen von `deno upgrade` erfolgen.

### Deno ausführen

Um mit Deno zu beginnen, musst du eine neue Datei `index.ts` erstellen und etwas Code hineinschreiben. Als Beispiel werden wir einen einfachen HTTP-Server auf dem Standardport 80 erstellen, der mit einer Testnachricht antwortet, wenn er über localhost aufgerufen wird. Dies kann unten gesehen werden.

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hallo von ZAP-Hosting Docs =)')
})
```

Jetzt kannst du den bereitgestellten Code mit dem Befehl `deno run --allow-net index.ts` ausführen und die Ergebnisse überprüfen, indem du `localhost:80` in deinem Browser aufrufst.


:::info
Deno wurde entwickelt, um sicherer zu sein, und erfordert daher bestimmte Berechtigungen wie `--allow-net`, um auf einige seiner Module zugreifen zu können.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Bun-Laufzeitumgebung installieren

Bun bietet zwei offizielle Installationsmethoden, entweder über curl oder npm.


<Tabs>
<TabItem value="curl" label="curl" default>

Das Ausführen von `curl -fsSL https://bun.sh/install | bash` installiert Bun auf deinem Server.

:::tip
Um andere Versionen von Bun zu installieren, kannst du `curl -fsSL https://bun.sh/install | bash -s "bun-v[version]"` ausführen.
:::

</TabItem>
<TabItem value="npm" label="npm">

Wenn du bereits npm installiert hast, kannst du `npm install -g bun` ausführen.

</TabItem>
</Tabs>

### Bun ausführen

Bun wurde entwickelt, um schneller zu sein als einige andere JavaScript-Engines, hat jedoch eine ähnliche Einrichtung wie Node.js. Um Bun zu starten, öffne ein leeres Verzeichnis und führe `bun init` aus.


Hier ist die übersetzte Version für den Abschnitt zur Installation und Verwendung der Bun-Laufzeitumgebung:

## Bun-Laufzeitumgebung installieren

Bun bietet zwei offizielle Installationsmethoden, entweder über curl oder npm.

Das Ausführen von `curl -fsSL https://bun.sh/install | bash` installiert Bun auf deinem Server.

:::tip
Um andere Versionen von Bun zu installieren, kannst du `curl -fsSL https://bun.sh/install | bash -s "bun-v[version]"` ausführen.
:::

Wenn du bereits npm installiert hast, kannst du `npm install -g bun` ausführen.

### Bun ausführen

Bun wurde entwickelt, um schneller zu sein als einige andere JavaScript-Engines, hat jedoch eine ähnliche Einrichtung wie Node.js. Um Bun zu starten, öffne ein leeres Verzeichnis und führe `bun init` aus.

:::note
Abhängig von der gewählten Sprache (JS oder TS) erstellt Bun eine Konfigurationsdatei (jsconfig.json oder tsconfig.json).
:::

Um Bun zu starten, musst du eine neue Datei `index.ts` erstellen und etwas Code hineinschreiben. Als Beispiel werden wir einen einfachen HTTP-Server auf dem Standardport 80 erstellen, der mit einer Testnachricht antwortet, wenn er über localhost aufgerufen wird. Dies kann unten gesehen werden.


```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hallo von ZAP-Hosting Docs =)')
  },
})
```

Jetzt kannst du den bereitgestellten Code mit dem Befehl `bun index.ts` ausführen und die Ergebnisse überprüfen, indem du `localhost:80` in deinem Browser aufrufst.

</TabItem>
</Tabs>

Wenn du dieser Anleitung folgst, hast du erfolgreich eine der beliebten JavaScript-Laufzeitumgebungen auf deinem Linux-Server installiert.