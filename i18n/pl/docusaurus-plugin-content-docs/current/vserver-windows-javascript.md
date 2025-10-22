---
id: vserver-windows-javascript
title: 'VPS: Instalacja JavaScript'
description: "Dowiedz się, jak zainstalować Node.js, Deno i Bun na Windows, aby efektywnie skonfigurować środowisko uruchomieniowe JavaScript → Sprawdź teraz"
sidebar_label: Instalacja JavaScript
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Ten poradnik przedstawia kroki instalacji Node.js, Deno i Bun na Windows. Poniższe kroki muszą być wykonane przez RDP, jeśli nie wiesz, jak połączyć się z serwerem przez RDP, zerknij na nasz [Poradnik Pierwszego Dostępu (RDP)](vserver-windows-userdp.md).
<InlineVoucher />

## Instalacja

Na początek musisz zdecydować, które środowisko uruchomieniowe JavaScript chcesz zainstalować. W sieci znajdziesz mnóstwo materiałów opisujących każde z nich szczegółowo. Możesz też przeczytać ten poradnik, bo zawiera podstawowe komendy i przykłady kodu. Polecamy Node.js, bo to jedno z najpopularniejszych i najczęściej używanych rozwiązań.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js Runtime" label="Node.js" default>

## Instalacja środowiska Node.js

### Krok 1: Pobieranie plików
Otwórz przeglądarkę, której używasz (w tym poradniku korzystam z Chrome) i przejdź na [https://Node.js.org/en](https://Node.js.org/en)

![](https://screensaver01.zap-hosting.com/index.php/s/FXEML6xiCedS7Nq/preview)

Kliknij przycisk `Download Node.js (LTS)` i poczekaj na zakończenie pobierania.

![](https://screensaver01.zap-hosting.com/index.php/s/EwjMejMYykPCQRQ/preview)

:::tip
Zalecamy instalację najnowszej wersji Long Term Support (LTS).
:::

### Krok 2: Instalacja Node.js
Uruchom instalator, klikając na pobrany plik. Na stronie powitalnej kliknij `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

Przeczytaj i zaakceptuj (zaznaczając checkbox) Umowę Licencyjną Node.js, a następnie kliknij `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

Wskaż lokalizację instalacji Node.js.

:::note
Rekomendujemy pozostawienie domyślnej lokalizacji instalacji.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

Na kolejnej stronie możesz zrezygnować z instalacji niektórych pakietów Node.js. Jeśli chcesz standardową instalację, co jest zalecane, po prostu kliknij `Next`. Możesz też zainstalować Chocolatey, ale nie jest to konieczne.

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### Krok 3: Zakończenie instalacji
Teraz kliknij `Install` i poczekaj na zakończenie instalacji. Bądź cierpliwy, może to chwilę potrwać. :)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

Po zakończeniu kliknij `Finish` i zacznij korzystać z Node.js na swoim serwerze.

### Aktualizacja Node.js do najnowszej wersji

Polecenie `node -v` pokaże zainstalowaną wersję Node.js. Od czasu do czasu sprawdzaj, czy masz najnowszą wersję LTS. Aby zaktualizować Node.js, powtórz kroki z sekcji [instalacji](vserver-windows-javascript.md).

### Uruchamianie Node.js i npm

npm to oficjalny menedżer pakietów Node.js. Użyjesz go do instalowania pakietów z internetu.

:::tip
Wszystkie pakiety npm znajdziesz na ich [stronie](https://www.npmjs.com/).
:::

### Tworzenie nowego projektu

Za każdym razem, gdy chcesz zacząć nowy projekt Node.js, utwórz nowy folder w Eksploratorze plików, otwórz w nim Wiersz poleceń lub PowerShell i wpisz `npm init`, aby rozpocząć konfigurację. Zostaniesz poproszony o podanie podstawowych informacji do utworzenia pliku `package.json`, który będzie "konfigiem" projektu.

:::tip
Na Windows kliknięcie raz na ścieżkę w Eksploratorze plików, wpisanie `cmd` i naciśnięcie `Enter` otworzy Wiersz poleceń w bieżącym katalogu, co ułatwia pracę.
:::

Po inicjalizacji projektu stwórz plik `index.js` i napisz w nim kod. Jako przykład stworzymy prosty serwer http na domyślnym porcie 80, który odpowiada testową wiadomością po wejściu na localhost.

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Uruchom ten kod poleceniem `node .` i sprawdź efekt, wchodząc w przeglądarce na `localhost:80`.

![](https://screensaver01.zap-hosting.com/index.php/s/kWRi9agrzkWc4rw/preview)

:::tip
Instalacja zewnętrznych pakietów npm odbywa się przez `npm install [nazwa-pakietu]`.
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Instalacja środowiska Deno

Instalacja Deno jest prosta — wpisz `irm https://deno.land/install.ps1 | iex` w PowerShell. Wyszukaj w Windows `Powershell`, otwórz go jako administrator i uruchom powyższe polecenie, wykonując ewentualne instrukcje.

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip
Aby sprawdzić zainstalowaną wersję, wpisz `deno --version`.
:::

### Aktualizacja Deno do najnowszej wersji

Aktualizację Deno wykonasz poleceniem `deno upgrade`.

### Uruchamianie Deno

Aby uruchomić Deno, stwórz plik `index.ts` i napisz w nim kod. Przykład prostego serwera http na porcie 80, który odpowiada testową wiadomością po wejściu na localhost, wygląda tak:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Uruchom kod poleceniem `deno run --allow-net index.ts` i sprawdź efekt, wchodząc na `localhost:80` w przeglądarce.

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info
Deno został stworzony z myślą o bezpieczeństwie, dlatego wymaga podania uprawnień, np. `--allow-net` do korzystania z niektórych modułów.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Instalacja środowiska Bun

Bun oferuje prostą instalację jednym poleceniem, ale można też zainstalować go przez npm, jeśli wcześniej korzystałeś z Node.js.

<Tabs>
<TabItem value="command" label="Polecenie" default>

W PowerShell wpisz `irm bun.sh/install.ps1|iex`, aby zainstalować Bun na serwerze.

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info
Serwer może nie mieć wymaganych plików. Bun poinformuje Cię o tym i poda linki do pobrania podczas próby instalacji.

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)
:::

</TabItem>
<TabItem value="npm" label="npm">

Jeśli masz już npm, możesz zainstalować Bun poleceniem `npm install -g bun`.

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### Uruchamianie Bun

Bun został zaprojektowany jako szybszy silnik JavaScript, z podobną konfiguracją do Node.js. Otwórz pusty katalog i wpisz w Wierszu poleceń `bun init`.

:::note
W zależności od wybranego języka (JS lub TS), Bun utworzy plik konfiguracyjny (jsconfig.json lub tsconfig.json).
:::

Aby uruchomić Bun, stwórz plik `index.ts` i napisz w nim kod. Przykład prostego serwera http na porcie 80, który odpowiada testową wiadomością po wejściu na localhost, wygląda tak:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Uruchom kod poleceniem `bun index.ts` i sprawdź efekt, wchodząc na `localhost:80` w przeglądarce.

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>



## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś JavaScript na swoim VPS! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />