---
id: dedicated-windows-nodejs
title: "Serwer dedykowany: Instalacja Node.js na Windows"
description: "Dowiedz się, jak skonfigurować Node.js do skalowalnych aplikacji w czasie rzeczywistym w prostym środowisku → Sprawdź teraz"
sidebar_label: Instalacja Node.js
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Node.js to wieloplatformowe, open-source środowisko uruchomieniowe JavaScript, które wykonuje kod JavaScript poza przeglądarką, np. na serwerach lub w narzędziach wiersza poleceń. Oparte na silniku V8, wspiera asynchroniczne, zdarzeniowe operacje I/O, co czyni je bardzo wydajnym do tworzenia skalowalnych aplikacji sieciowych i działających w czasie rzeczywistym.

Paradygmat „JavaScript wszędzie” pozwala deweloperom używać jednego języka zarówno na backendzie, jak i frontendzie.  

<InlineVoucher />

## Przygotowanie

Przed konfiguracją **Node.js** musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji oraz instalację wszystkich wymaganych zależności. Te przygotowania zapewniają stabilne środowisko i pomagają uniknąć problemów podczas lub po instalacji.

### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i z poprawkami bezpieczeństwa, zawsze wykonuj najpierw aktualizację systemu. W tym celu uruchom następujące polecenie:

```
sudo apt update && sudo apt upgrade -y
```
Zapewnia to, że Twój system ma najnowsze poprawki bezpieczeństwa i wersje oprogramowania przed dalszymi krokami.

### Instalacja zależności
Po zakończeniu aktualizacji możesz przystąpić do instalacji zależności. Node.js będzie uruchamiany na Twojej maszynie w kontenerach Docker, dlatego najpierw musisz zainstalować Dockera. Wykonaj poniższe polecenia:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Pełny poradnik instalacji i korzystania z Dockera znajdziesz w naszym [poradniku Docker](vserver-windows-docker.md).

## Instalacja

Gdy spełnione są wszystkie wymagania i przygotowania, możesz przejść do instalacji aplikacji Node.js.

Aby używać Node.js w izolowanym środowisku, najpierw pobierz oficjalny obraz oparty na Alpine. Uruchom poniższe polecenie, aby pobrać najnowszy obraz Node.js 22 na swój system, gotowy do uruchomienia kontenerów:

```
docker pull node:22-alpine
```

Następnie możesz uruchomić kontener na bazie tego obrazu i otworzyć w nim sesję powłoki. Użyj tego polecenia, aby wystartować kontener z interaktywną powłoką. Opcja `--rm` usuwa kontener automatycznie po wyjściu, dzięki czemu środowisko hosta pozostaje czyste.

```
docker run -it --rm --entrypoint sh node:22-alpine
```

Wewnątrz kontenera sprawdź wersję Node.js poleceniem `node -v`, które powinno wyświetlić `v22.19.0`. Możesz też potwierdzić wersję npm, uruchamiając

`npm -v` z oczekiwanym wynikiem `10.9.3`. To potwierdza, że obraz zawiera odpowiednie wersje Node.js i npm, gotowe do użycia.

## Konfiguracja

Po uruchomieniu kontenera Node.js warto skonfigurować podstawowe ustawienia Node.js bezpośrednio w środowisku. Popularnym rozwiązaniem jest definiowanie zmiennych środowiskowych, np.:

```
export NODE_ENV=production
```

To włącza tryb produkcyjny, aktywując optymalizacje wydajności i dostosowując logowanie. Do celów deweloperskich możesz ustawić `NODE_ENV=development`, aby korzystać z bardziej szczegółowych komunikatów o błędach i funkcji debugowania.

Ważne jest też dobrze zorganizowane drzewo projektu, zaczynając od pliku konfiguracyjnego utworzonego poleceniem:

```
npm init -y
```

To generuje plik `package.json`, który definiuje zależności, skrypty i metadane projektu. Jest to centralny plik konfiguracyjny każdej aplikacji Node.js.

Zależności instalujesz poleceniem `npm install <package>`, a zależności developerskie dodajesz przez `npm install <package> --save-dev`. Sekcja `scripts` w `package.json` pozwala definiować własne komendy, np. `npm start` lub `npm run build`, co ułatwia uruchamianie i zarządzanie projektem.

Dla bardziej zaawansowanych konfiguracji Node.js można dostosować za pomocą plików `.npmrc` lub `.nvmrc`, które pozwalają na konfigurację prywatnych rejestrów, opcji cache’owania lub wymuszanie konkretnej wersji Node.js. Dzięki temu aplikacje działają spójnie w różnych środowiskach.

## Podsumowanie i dodatkowe zasoby

Gratulacje! Udało Ci się zainstalować i skonfigurować Node.js na Twoim serwerze dedykowanym. Polecamy też zapoznać się z poniższymi zasobami, które mogą pomóc i wesprzeć Cię podczas konfiguracji serwera:

- [Node.js.com](https://Node.js.com/) – Oficjalna strona
- https://Node.js.com/help/ – Centrum pomocy Node.js (dokumentacja)

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz dalszej pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂