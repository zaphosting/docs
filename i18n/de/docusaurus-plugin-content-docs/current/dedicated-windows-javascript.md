---
id: dedicated-windows-javascript
title: 'Dedicated Server: Installation von JavaScript'
description: Informationen darüber, wie man JavaScript auf deinem Windows-Server von ZAP-Hosting.com installiert -  ZAP-Hosting.com Dokumentation
sidebar_label: JavaScript installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Diese Anleitung liefert Schritte zur Installation von Node.js, Deno und Bun unter Windows. Die unten aufgeführten Schritte müssen über RDP ausgeführt werden. Wenn du nicht weißt, wie man sich über RDP mit deinem Server verbindet, schau dir bitte unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung an.

<InlineVoucher />

## Installation

Zu Beginn musst du entscheiden, welche JavaScript-Laufzeitumgebung du installieren möchtest. Es gibt viele Online-Ressourcen, die jede davon ausführlich beschreiben. Du kannst aber auch diese Anleitung lesen, da diese grundlegende Befehle zur Nutzung und Codebeispiele enthält. Wir empfehlen die Verwendung von NodeJS, da es eine der am weitesten verbreiteten und sehr beliebten Optionen ist.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="NodeJS Runtime" label="Node.js" default>

## Node.js-Laufzeitumgebung installieren

### Schritt 1: Dateien herunterladen

Öffne den Browser deiner Wahl (in dieser Anleitung wird Chrome verwenden) und navigiere zu [https://nodejs.org/en](https://nodejs.org/en)

![Picture of Node.js.org](https://imgur.com/yGkI21n.png)

Klicke nun auf den Button `Node.js (LTS) herunterladen` und warte, bis der Download abgeschlossen ist. 

![Picture of Node.js installer downloaded](https://imgur.com/i9ZMP9L.png)

:::tip Es wird allgemein empfohlen, deine Installation auf der neuesten Langzeitunterstützungs-Version (LTS) zu halten. :::

### Schritt 2: Installation von Python
Starte den Installer, indem du darauf klickst. Nun wirst du aufgefordert, einige Einstellungen für die Installation vorzunehmen. Auf der `Willkommen`-Seite solltest du `Weiter` klicken.

![Bild des Node.js-Installationsprogramms - Erste Seite](https://imgur.com/DJzVIRM.png)

Nun musst du die Node.js-Lizenzvereinbarung lesen und akzeptieren (indem du das Kontrollkästchen markierst) und dann auf den `Weiter`-Button klicken.

![Bild des Node.js-Installationsprogramms - Vereinbarungsseite](https://imgur.com/eUfK86B.png)

Danach wirst du nach einem Installationsort für Node.js gefragt.

:::note
Wir empfehlen, den Standardinstallationsort zu verwenden.
:::

![Bild des Node.js-Installationsprogramms - Ortsseite](https://imgur.com/QUInz5M.png)

Auf der nächsten Seite kannst du dich gegen die Installation einiger Kernpakete von Node.js entscheiden. Wenn du eine normale Installation wünschst, was empfohlen wird, drücke einfach auf den `Weiter`-Button. Du hast auch die Möglichkeit, Chocolatey zu installieren, aber das ist nicht notwendig.

![Bild des Node.js-Installationsprogramms - Benutzerdefinierte Installationsseite](https://imgur.com/Ereqity.png)

### Schritt 3: Installation abschließen
Das war's, jetzt kannst du auf `Installieren` klicken und warten, bis alles eingerichtet ist. Hab Geduld, denn das kann etwas dauern. :)

![Bild des Node.js-Installationsprogramms - Installationsseite](https://imgur.com/Nxl3553.png)

Sobald die Installation abgeschlossen ist, kannst du einfach auf der letzten Seite auf `Fertigstellen` drücken und beginnen, Node.js auf deinem Server zu verwenden.

### Node.js auf die neueste Version aktualisieren

Mit `node -v` wird die installierte Version von Node.js angezeigt. Von Zeit zu Zeit solltest du überprüfen, ob du die neueste LTS-Version verwendest. Um Node.js zu aktualisieren, musst du den bereitgestellten [Installationsabschnitt](dedicated-windows-javascript.md#nodejs-laufzeitumgebung-installieren) erneut befolgen.

### Node.js & npm ausführen

npm ist der offizielle Paketmanager von Node.js. Du wirst ihn verwenden, um Pakete aus dem Internet zu installieren.

:::tip
Alle npm-Pakete findest du auf ihrer [Webseite](https://www.npmjs.com/).
:::


### Ein neues Projekt erstellen

Jedes Mal, wenn du ein neues Node.js-Projekt starten möchtest, musst du mit dem Datei-Explorer ein neues Verzeichnis dafür anlegen, die Eingabeaufforderung oder PowerShell darin öffnen und den Befehl `npm init` ausführen, um die Einrichtung zu beginnen. Dabei wirst du nach einigen grundlegenden Informationen gefragt, um eine `package.json`-Datei zu erstellen. Diese Datei wird die "Konfigurations"-Datei für das Ausführen von Node.js sein.

:::tip
Unter Windows kannst du einmal auf den aktuellen Pfad im Datei-Explorer klicken und `cmd` eingeben, dann `Enter` drücken, um die Eingabeaufforderung im aktuellen Verzeichnis zu öffnen, was die Arbeit erleichtert.

![Cmd im Verzeichnis Tipp](https://imgur.com/61sWPoe.png)
:::

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

![Node.js-App im Browser](https://imgur.com/DcaM9Dd.png)

:::tip
Das Installieren externer Pakete von npm wird mit dem Befehl `npm install [paket-name]` durchgeführt.
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Deno-Laufzeitumgebung installieren

Deno zu installieren ist so einfach, wie `irm https://deno.land/install.ps1 | iex` in einer PowerShell-Instanz einzugeben. Benutze die Windows-Suchleiste und suche nach `Powershell`. Öffne eine Eingabeaufforderung als Administrator und führe den obigen Befehl aus, wobei du allen Schritten folgst, die dir möglicherweise angezeigt werden.

![Deno-Installationsbefehl in PowerShell](https://imgur.com/gOjyave.png)

:::tip
Um die derzeit installierte Version zu überprüfen, kannst du `deno --version` ausführen.
:::

### Deno auf die neueste Version aktualisieren

Das Aktualisieren von Deno kann einfach durch Ausführen von `deno upgrade` erfolgen.

### Deno ausführen

Um Deno zu starten, musst du eine neue Datei `index.ts` erstellen und etwas Code hineinschreiben. Als Beispiel werden wir einen einfachen HTTP-Server auf dem Standardport 80 erstellen, der mit einer Testnachricht antwortet, wenn er über localhost aufgerufen wird. Dies kann unten gesehen werden.

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hallo von ZAP-Hosting Docs =)')
})
```

Jetzt kannst du den bereitgestellten Code mit dem Befehl `deno run --allow-net index.ts` ausführen und die Ergebnisse überprüfen, indem du `localhost:80` in deinem Browser aufrufst.

![Deno-App im Browser](https://imgur.com/fjBhEe7.png)

:::info
Deno wurde entwickelt, um sicherer zu sein, und erfordert daher bestimmte Berechtigungen wie `--allow-net`, um auf einige seiner Module zugreifen zu können.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Bun-Laufzeitumgebung installieren

Bun bietet ebenfalls eine sehr einfache Ein-Befehl-Installation, gibt den Nutzern jedoch auch die Möglichkeit, es über npm zu installieren, falls sie bereits Erfahrung mit NodeJS haben.

<Tabs>
<TabItem value="command" label="Befehl" default>

Das Ausführen von `irm bun.sh/install.ps1|iex` in PowerShell installiert Bun auf deinem Server.

![Bun Installationsbefehl in PowerShell](https://imgur.com/utUKgRN.png)

:::info
Dem Server könnten einige erforderliche Dateien fehlen. Bun wird dich über dieses Problem informieren und auch Links zum Herunterladen der benötigten Dateien bereitstellen, wenn du versuchst, den Installer auszuführen.

![Bun Installationsfehler in PowerShell](https://imgur.com/Sq0IHDQ.png)
:::

</TabItem>
<TabItem value="npm" label="npm">

Wenn du bereits npm installiert hast, kannst du `npm install -g bun` ausführen, um Bun zu installieren.

![Bun Installationsbefehl über npm](https://imgur.com/fUPmPoW.png)

</TabItem>
</Tabs>

### Bun ausführen

Bun wurde entwickelt, um schneller zu sein als einige andere JavaScript-Engines, und hat auch eine ähnliche Einrichtung wie Node.js. Um Bun zu starten, öffne ein leeres Verzeichnis und führe `bun init` in einer Eingabeaufforderung aus.

:::note
Je nach gewählter Sprache (JS oder TS) wird Bun eine Konfigurationsdatei erstellen (jsconfig.json oder tsconfig.json).
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

![Bun-App im Browser](https://imgur.com/wwuWP4i.png)

</TabItem>
</Tabs>



## Abschluss

Glückwunsch, du hast erfolgreich JavaScript installiert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
