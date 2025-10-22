---
id: vserver-linux-javascript
title: 'VPS: Instalacja JavaScript'
description: "Dowiedz się, jak zainstalować i skonfigurować Node.js, Deno oraz Bun na swoim serwerze, aby efektywnie zarządzać środowiskiem uruchomieniowym JavaScript → Sprawdź teraz"
sidebar_label: Instalacja JavaScript
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Ten poradnik przedstawia kroki instalacji Node.js, Deno oraz Bun. Wszystkie polecenia należy wykonać przez SSH. Jeśli nie wiesz, jak połączyć się z serwerem przez SSH, zerknij na nasz [Poradnik: Pierwszy dostęp (SSH)](vserver-linux-ssh.md).

<InlineVoucher />

## Przygotowanie

Zanim zainstalujesz cokolwiek na serwerze, zalecamy uruchomić polecenie aktualizacji odpowiednie dla Twojego systemu operacyjnego, aby utrzymać serwer bezpiecznym.

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

Node.js możesz zainstalować przez menedżera pakietów swojej dystrybucji Linux lub użyć nvm. My polecamy apt, bo jest prostszy.

<Tabs>
<TabItem value="apt" label="Menedżer pakietów" default>

Uruchom poniższe polecenie, aby zainstalować Node.js przez menedżera pakietów.

```
apt install nodejs -y
```

Aby instalować pakiety Node.js do swoich projektów, potrzebujesz też menedżera pakietów npm.

```
apt install npm
```

### Aktualizacja Node.js do najnowszej wersji

Polecenie `node -v` pokaże zainstalowaną wersję Node.js. Zazwyczaj nie jest to najnowsza wersja, więc warto ją zaktualizować, by mieć dostęp do najnowszych funkcji. Na szczęście pakiet npm o nazwie `n` pozwala to zrobić bardzo łatwo.

Najpierw zainstaluj go poleceniem `npm install -g n`, a potem możesz zainstalować dowolną wersję Node.js poleceniem `n [wersja]`, gdzie `[wersja]` to numer wersji, którą chcesz mieć.

:::tip
Zalecamy trzymać się najnowszej wersji Long Term Support (LTS). Zrobisz to poleceniem `n lts`.
:::

</TabItem>
<TabItem value="nvm" label="nvm">

Instalacja Node.js przez nvm daje większą kontrolę nad różnymi wersjami Node.js i ich pakietami.

Najpierw upewnij się, że masz zainstalowany curl, a potem uruchom:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

To pobierze i uruchomi skrypt instalacyjny nvm z GitHuba.

:::note
Jeśli po instalacji nvm polecenia nie działają, uruchom `source ~/.bashrc`, aby przeładować konfigurację bash.
:::

Podobnie jak wcześniej, możesz teraz zainstalować dowolną wersję Node.js poleceniem `nvm install v[wersja]`. Aby zobaczyć dostępne wersje, użyj `nvm list-remote`, a aby sprawdzić zainstalowane wersje, wpisz `nvm list`.

:::tip
Instalację wersji Long Term Support wykonasz poleceniem `nvm install --lts`.
:::

</TabItem>
</Tabs>

### Uruchamianie Node.js & npm

Npm to oficjalny menedżer pakietów Node.js. Będziesz go używać do instalowania pakietów z internetu.

:::note
Wszystkie pakiety npm znajdziesz na ich [stronie](https://www.npmjs.com/).
:::

### Tworzenie nowego projektu

Za każdym razem, gdy chcesz zacząć nowy projekt Node.js, musisz utworzyć nowy katalog (`mkdir [nazwa-projektu]`) lub wejść do pustego folderu i uruchomić `npm init`, aby rozpocząć konfigurację. Program zapyta Cię o podstawowe informacje do stworzenia pliku `package.json`. To będzie plik konfiguracyjny do uruchamiania Node.js.

Po zainicjowaniu projektu możesz stworzyć plik `index.js` i napisać w nim kod. Na przykład stworzymy prosty serwer http na domyślnym porcie 80, który odpowiada testową wiadomością po wejściu na localhost. Kod wygląda tak:

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
Instalacja zewnętrznych pakietów z npm odbywa się poleceniem `npm install [nazwa-pakietu]`.
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Instalacja środowiska Deno

Instalacja Deno jest prosta — wpisz w konsoli:

```
curl -fsSL https://deno.land/install.sh | sh
```

:::tip
Aby sprawdzić zainstalowaną wersję, użyj `deno --version`.
:::

### Aktualizacja Deno do najnowszej wersji

Aktualizację Deno wykonasz poleceniem `deno upgrade`.

### Uruchamianie Deno

Aby zacząć korzystać z Deno, stwórz plik `index.ts` i napisz w nim kod. Przykładowo, stworzymy prosty serwer http na porcie 80, który odpowiada testową wiadomością po wejściu na localhost:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Uruchom ten kod poleceniem `deno run --allow-net index.ts` i sprawdź efekt, wchodząc na `localhost:80` w przeglądarce.

:::info
Deno został stworzony z myślą o bezpieczeństwie, dlatego wymaga podania uprawnień, np. `--allow-net`, aby korzystać z niektórych modułów.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Instalacja środowiska Bun

Bun oferuje 2 oficjalne metody instalacji: przez curl lub npm.

<Tabs>
<TabItem value="curl" label="curl" default>

Uruchom:

```
curl -fsSL https://bun.sh/install | bash
```

aby zainstalować Bun na serwerze.

:::tip
Aby zainstalować inną wersję Bun, użyj `curl -fsSL https://bun.sh/install | bash -s "bun-v[wersja]"`.
:::

</TabItem>
<TabItem value="npm" label="npm">

Jeśli masz już npm, możesz zainstalować Bun poleceniem:

```
npm install -g bun
```

</TabItem>
</Tabs>

### Uruchamianie Bun

Bun został stworzony, by być szybszy niż inne silniki JavaScript, a jednocześnie ma podobną konfigurację do Node.js. Aby zacząć, otwórz pusty katalog i wpisz `bun init`.

:::note
W zależności od wybranego języka (JS lub TS), Bun stworzy plik konfiguracyjny (jsconfig.json lub tsconfig.json).
:::

Aby uruchomić Bun, stwórz plik `index.ts` i napisz w nim kod. Przykład prostego serwera http na porcie 80, który odpowiada testową wiadomością po wejściu na localhost:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Uruchom ten kod poleceniem `bun index.ts` i sprawdź efekt, wchodząc na `localhost:80` w przeglądarce.

</TabItem>
</Tabs>


## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować JavaScript! Jeśli masz dalsze pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji każdego dnia!

<InlineVoucher />