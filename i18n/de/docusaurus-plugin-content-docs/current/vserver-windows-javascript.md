---
id: vserver-windows-javascript
title: 'VPS: Installation von JavaScript'
description: "Entdecke, wie du Node.js, Deno und Bun auf Windows installierst, um deine JavaScript-Laufzeitumgebung effizient einzurichten → Jetzt mehr erfahren"
sidebar_label: JavaScript installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Diese Anleitung zeigt dir, wie du Node.js, Deno und Bun auf Windows installierst. Die unten beschriebenen Schritte müssen über RDP ausgeführt werden. Falls du nicht weißt, wie du dich per RDP mit deinem Server verbindest, schau dir bitte unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung an.
<InlineVoucher />

## Installation

Zuerst musst du entscheiden, welche JavaScript-Laufzeitumgebung du installieren möchtest. Es gibt viele Online-Ressourcen, die jede davon ausführlich beschreiben. Du kannst aber auch diese Anleitung lesen, da sie grundlegende Befehle und Codebeispiele enthält. Wir empfehlen Node.js, da es eine der am weitesten verbreiteten und beliebtesten Optionen ist.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js Runtime" label="Node.js" default>

## Node.js Runtime installieren

### Schritt 1: Dateien herunterladen
Öffne deinen bevorzugten Browser (ich nutze für diese Anleitung Chrome) und gehe auf [https://Node.js.org/en](https://Node.js.org/en)

![](https://screensaver01.zap-hosting.com/index.php/s/FXEML6xiCedS7Nq/preview)

Klicke jetzt auf den Button `Download Node.js (LTS)` und warte, bis der Download abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/EwjMejMYykPCQRQ/preview)

:::tip
Es wird generell empfohlen, die neueste Long Term Support (LTS) Version zu installieren.
:::

### Schritt 2: Node.js installieren
Starte den Installer durch einen Klick darauf. Nun wirst du aufgefordert, einige Einstellungen für die Installation vorzunehmen. Auf der `Willkommen`-Seite klickst du auf `Weiter`.

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

Jetzt musst du die Node.js Lizenzvereinbarung lesen und akzeptieren (Checkbox markieren) und dann auf `Weiter` klicken.

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

Anschließend wirst du nach einem Installationsort für Node.js gefragt.

:::note
Wir empfehlen, den Standard-Installationspfad zu verwenden.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

Auf der nächsten Seite kannst du auswählen, ob du einige Kernpakete von Node.js nicht installieren möchtest. Für eine normale Installation, die empfohlen wird, klickst du einfach auf `Weiter`. Du hast auch die Option, Chocolatey zu installieren, das ist aber nicht notwendig.

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### Schritt 3: Installation abschließen
Jetzt kannst du auf `Installieren` klicken und warten, bis alles eingerichtet ist. Hab Geduld, das kann eine Weile dauern. :)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

Nach Abschluss klickst du einfach auf `Fertigstellen` und kannst Node.js auf deinem Server nutzen.

### Node.js auf die neueste Version aktualisieren

Mit `node -v` kannst du die installierte Node.js-Version anzeigen lassen. Von Zeit zu Zeit solltest du prüfen, ob du die neueste LTS-Version nutzt. Um Node.js zu aktualisieren, folge einfach nochmal der [Installationsanleitung](vserver-windows-javascript.md).

### Node.js & npm nutzen

npm ist der offizielle Paketmanager von Node.js. Damit installierst du Pakete aus dem Internet.

:::tip
Alle npm-Pakete findest du auf der [Website](https://www.npmjs.com/).
:::

### Neues Projekt erstellen

Wenn du ein neues Node.js-Projekt starten willst, legst du zuerst einen neuen Ordner im Datei-Explorer an, öffnest die Eingabeaufforderung oder PowerShell darin und führst den Befehl `npm init` aus, um die Einrichtung zu starten. Dabei wirst du nach einigen Basisinfos gefragt, um eine `package.json` Datei zu erstellen. Diese ist die "Config"-Datei für Node.js.

:::tip
Unter Windows kannst du im Datei-Explorer einmal auf den aktuellen Pfad klicken, `cmd` eintippen und Enter drücken, um die Eingabeaufforderung direkt im aktuellen Ordner zu öffnen – super praktisch!
:::

Nach der Initialisierung kannst du eine neue Datei namens `index.js` erstellen und Code hineinschreiben. Als Beispiel erstellen wir einen einfachen HTTP-Server auf dem Standardport 80, der beim Zugriff über localhost eine Testnachricht zurückgibt. So sieht der Code aus:

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Du kannst den Code mit `node .` ausführen und das Ergebnis im Browser unter `localhost:80` prüfen.

![](https://screensaver01.zap-hosting.com/index.php/s/kWRi9agrzkWc4rw/preview)

:::tip
Externe Pakete von npm installierst du mit `npm install [paket-name]`.
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Deno Runtime installieren

Deno installierst du ganz einfach, indem du in einer PowerShell `irm https://deno.land/install.ps1 | iex` eingibst. Suche in der Windows-Suche nach `PowerShell`, öffne sie als Administrator und führe den Befehl aus. Folge den Anweisungen, die eventuell angezeigt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip
Mit `deno --version` kannst du die aktuell installierte Version prüfen.
:::

### Deno auf die neueste Version aktualisieren

Deno aktualisierst du einfach mit `deno upgrade`.

### Deno ausführen

Um Deno zu nutzen, erstellst du eine neue Datei `index.ts` und schreibst Code hinein. Als Beispiel bauen wir einen einfachen HTTP-Server auf Port 80, der beim Zugriff über localhost eine Testnachricht zurückgibt:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Starte den Code mit `deno run --allow-net index.ts` und öffne `localhost:80` im Browser, um das Ergebnis zu sehen.

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info
Deno wurde mit Fokus auf Sicherheit entwickelt und benötigt deshalb bestimmte Berechtigungen wie `--allow-net`, um auf manche Module zugreifen zu können.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Bun Runtime installieren

Bun bietet ebenfalls eine einfache Ein-Befehl-Installation, gibt dir aber auch die Möglichkeit, es via npm zu installieren, falls du schon Node.js benutzt hast.

<Tabs>
<TabItem value="command" label="Befehl" default>

Gib in PowerShell `irm bun.sh/install.ps1|iex` ein, um Bun auf deinem Server zu installieren.

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info
Falls auf dem Server Dateien fehlen, informiert dich Bun darüber und gibt Links zum Download der benötigten Dateien, wenn du den Installer startest.

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)
:::

</TabItem>
<TabItem value="npm" label="npm">

Wenn du npm schon installiert hast, kannst du Bun mit `npm install -g bun` installieren.

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### Bun ausführen

Bun wurde entwickelt, um schneller als andere JavaScript-Engines zu sein und hat eine ähnliche Struktur wie Node.js. Öffne ein leeres Verzeichnis und führe in der Eingabeaufforderung `bun init` aus.

:::note
Je nach gewählter Sprache (JS oder TS) erstellt Bun eine Konfigurationsdatei (jsconfig.json oder tsconfig.json).
:::

Um Bun zu nutzen, erstellst du eine neue Datei `index.ts` und schreibst Code hinein. Als Beispiel bauen wir einen einfachen HTTP-Server auf Port 80, der beim Zugriff über localhost eine Testnachricht zurückgibt:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Starte den Code mit `bun index.ts` und öffne `localhost:80` im Browser, um das Ergebnis zu sehen.

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>



## Fazit

Glückwunsch, du hast JavaScript erfolgreich auf deinem VPS installiert und eingerichtet! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />