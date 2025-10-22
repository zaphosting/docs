---
id: dedicated-linux-javascript
title: 'Serwer dedykowany: Instalacja JavaScript'
description: "Dowiedz się, jak zainstalować i skonfigurować Node.js, Deno oraz Bun na swoim serwerze, aby efektywnie zarządzać środowiskiem uruchomieniowym JavaScript → Sprawdź teraz"
sidebar_label: Instalacja JavaScript
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Ten poradnik pokazuje kroki instalacji Node.js, Deno i Bun. Te polecenia musisz wykonać przez SSH, jeśli nie wiesz, jak połączyć się z serwerem przez SSH, zerknij na nasz [Pierwszy dostęp (SSH)](vserver-linux-ssh.md).

<InlineVoucher />

## Przygotowanie

Zanim cokolwiek zainstalujesz na serwerze, zalecamy uruchomić polecenie aktualizacji odpowiadające Twojemu systemowi operacyjnemu, aby utrzymać serwer bezpiecznym.

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

## Instalacja

Na początek musisz zdecydować, które środowisko uruchomieniowe JavaScript chcesz zainstalować. W sieci znajdziesz mnóstwo materiałów opisujących każde z nich szczegółowo. Możesz też przeczytać ten poradnik, bo zawiera podstawowe komendy i przykłady kodu. Polecamy NodeJS, bo to jedno z najpopularniejszych i najczęściej używanych rozwiązań.

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## Instalacja środowiska Node.js

Node.js możesz zainstalować przez menedżera pakietów swojej dystrybucji Linux lub użyć nvm. My polecamy apt, bo jest zwykle prostszy.

<Tabs>
<TabItem value="apt" label="Menedżer pakietów" default>

Uruchom poniższe polecenie, aby zacząć instalację Node.js przez menedżera pakietów.

```
apt install nodejs -y
```

Aby instalować pakiety Node.js do swoich projektów, potrzebujesz też menedżera pakietów npm.

```
apt install npm
```

### Aktualizacja Node.js do najnowszej wersji

Polecenie `node -v` pokaże zainstalowaną wersję Node.js. Zwykle nie jest to najnowsza, więc warto ją zaktualizować, żeby mieć najnowsze funkcje. Na szczęście pakiet npm `n` daje bardzo łatwy sposób na to.

Najpierw zainstaluj go poleceniem `npm install -g n`, a potem możesz uruchomić `n [wersja]`, podmieniając `[wersja]` na wybraną wersję, żeby zainstalować dowolną wersję Node.js.

:::tip
Zalecamy trzymać się najnowszej wersji Long Term Support. Zrobisz to poleceniem `n lts`.
:::

</TabItem>
<TabItem value="nvm" label="nvm">

Instalacja Node.js przez nvm daje większą kontrolę nad różnymi wersjami Node.js i ich pakietami.

Najpierw upewnij się, że masz curl, a potem uruchom:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

To pobierze i uruchomi skrypt instalacyjny nvm z GitHuba.

:::note
Jeśli po instalacji nvm polecenia nie działają, uruchom `source ~/.bashrc`, żeby przeładować konfigurację bash.
:::

Podobnie jak wcześniej, możesz teraz zainstalować dowolną wersję Node.js poleceniem `nvm install v[wersja]`. Aby zobaczyć dostępne wersje, użyj `nvm list-remote`, a żeby zobaczyć zainstalowane wersje, wpisz `nvm list`.

:::tip
Instalacja Long Term Support to `nvm install --lts`
:::

</TabItem>
</Tabs>

### Uruchamianie Node.js & npm

Npm to oficjalny menedżer pakietów Node.js. Będziesz go używać do instalowania pakietów z internetu.

:::note
Wszystkie pakiety npm znajdziesz na ich [stronie](https://www.npmjs.com/).
:::

### Tworzenie nowego projektu

Za każdym razem, gdy chcesz zacząć nowy projekt Node.js, musisz utworzyć nowy katalog (`mkdir [nazwa-projektu]`) lub wejść do pustego folderu i uruchomić `npm init`, żeby rozpocząć konfigurację. Program zapyta Cię o podstawowe dane do stworzenia pliku `package.json`. To będzie "konfiguracja" do uruchamiania Node.js.

Po inicjalizacji projektu możesz stworzyć plik `index.js` i napisać w nim kod. Jako przykład stworzymy prosty serwer http na domyślnym porcie 80, który odpowiada testową wiadomością przy dostępie przez localhost. Kod wygląda tak:

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Teraz możesz uruchomić ten kod poleceniem `node .` i sprawdzić efekt, wchodząc w przeglądarce na `localhost:80`.

:::tip
Instalacja zewnętrznych pakietów npm odbywa się przez `npm install [nazwa-pakietu]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Instalacja środowiska Deno

Deno zainstalujesz bardzo prosto, wpisując w konsoli `curl -fsSL https://deno.land/install.sh | sh`.

:::tip
Aby sprawdzić zainstalowaną wersję, wpisz `deno --version`.
:::

### Aktualizacja Deno do najnowszej wersji

Aktualizacja Deno to po prostu `deno upgrade`.

### Uruchamianie Deno

Aby zacząć korzystać z Deno, stwórz plik `index.ts` i napisz w nim kod. Jako przykład stworzymy prosty serwer http na porcie 80, który odpowiada testową wiadomością przy dostępie przez localhost. Kod wygląda tak:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Teraz uruchom ten kod poleceniem `deno run --allow-net index.ts` i sprawdź efekt, wchodząc w przeglądarce na `localhost:80`.

:::info
Deno zostało stworzone z myślą o większym bezpieczeństwie, dlatego wymaga podania uprawnień, np. `--allow-net` do korzystania z niektórych modułów.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Instalacja środowiska Bun

Bun oferuje 2 oficjalne sposoby instalacji: przez curl lub npm.

<Tabs>
<TabItem value="curl" label="curl" default>

Uruchom `curl -fsSL https://bun.sh/install | bash`, aby zainstalować Bun na serwerze.

:::tip
Aby zainstalować inne wersje Bun, użyj `curl -fsSL https://bun.sh/install | bash -s "bun-v[wersja]"`
:::

</TabItem>
<TabItem value="npm" label="npm">

Jeśli masz już npm, możesz wpisać `npm install -g bun`.

</TabItem>
</Tabs>

### Uruchamianie Bun

Bun został stworzony, by być szybszym niż inne silniki JavaScript, a jednocześnie ma podobną konfigurację do Node.js. Aby zacząć, otwórz pusty katalog i wpisz `bun init`.

:::note
W zależności od wybranego języka (JS lub TS), Bun stworzy plik konfiguracyjny (jsconfig.json lub tsconfig.json).
:::

Aby uruchomić Bun, stwórz plik `index.ts` i napisz w nim kod. Jako przykład stworzymy prosty serwer http na porcie 80, który odpowiada testową wiadomością przy dostępie przez localhost. Kod wygląda tak:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Teraz uruchom ten kod poleceniem `bun index.ts` i sprawdź efekt, wchodząc w przeglądarce na `localhost:80`.

</TabItem>
</Tabs>

Dzięki temu poradnikowi pomyślnie zainstalujesz jedno z popularnych środowisk uruchomieniowych JavaScript na swoim serwerze Linux.

<InlineVoucher />