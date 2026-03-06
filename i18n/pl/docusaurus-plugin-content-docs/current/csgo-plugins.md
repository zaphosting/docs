---
id: csgo-plugins
title: "CS:GO: Instalacja pluginów"
description: "Dowiedz się, jak zainstalować pluginy Sourcemod na swoim serwerze gier CS:GO i rozszerzyć rozgrywkę o niestandardowe funkcje → Sprawdź teraz"
sidebar_label: Instalacja pluginów
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## Wprowadzenie

CS:GO kontynuuje długą tradycję serwerów gier opartych na społeczności i ich personalizacji. Pluginy pozwalają właścicielom serwerów rozszerzyć rozgrywkę, dodać funkcje poprawiające komfort gry, wdrożyć niestandardowe zasady lub stworzyć całkowicie nowe tryby gry.

Dla serwerów gier CS:GO **Sourcemod** jest najpopularniejszym frameworkiem do pluginów po stronie serwera. Sourcemod współpracuje z **Metamod:Source**, który działa jako warstwa bazowa umożliwiająca pluginom integrację z silnikiem gry. Instalując oba komponenty, administratorzy serwera mogą łatwo zarządzać pluginami i rozszerzać funkcjonalność serwera.

<InlineVoucher />



## Instalacja Metamod:Source

Metamod:Source musi być zainstalowany jako pierwszy, ponieważ Sourcemod od niego zależy. Zacznij od pobrania najnowszej wersji Metamod:Source z oficjalnej strony. Rozpakuj pobrane archiwum na swoim komputerze.

W archiwum znajdziesz katalog `addons`. Prześlij ten katalog na swój serwer gier CS:GO za pomocą [FTP](gameserver-ftpaccess.md), tak aby połączył się z istniejącym katalogiem gry `../csgo/`.


Po przesłaniu plików zrestartuj serwer. Aby sprawdzić, czy Metamod działa poprawnie, otwórz konsolę serwera i wpisz następującą komendę:

```
meta version
```


Jeśli Metamod jest poprawnie zainstalowany, konsola wyświetli wersję oraz dodatkowe informacje.

<Button label="Pobierz Metamod:Source" link="https://www.metamodsource.net/downloads.php" block />



## Instalacja Sourcemod

Gdy Metamod:Source jest już zainstalowany, możesz przejść do instalacji Sourcemod. Pobierz najnowszą stabilną wersję Sourcemod z oficjalnej strony i rozpakuj archiwum. Prześlij foldery `addons` oraz `cfg` na swój serwer gier CS:GO za pomocą [FTP](gameserver-ftpaccess.md). Katalogi muszą zostać umieszczone w katalogu gry CS:GO `../csgo/`. Po przesłaniu plików zrestartuj serwer. Sourcemod zostanie automatycznie załadowany przez Metamod.

Aby potwierdzić, że Sourcemod działa, otwórz konsolę serwera i wpisz:

```
sm version
```


Jeśli instalacja przebiegła pomyślnie, serwer zwróci aktualną wersję Sourcemod oraz informacje o buildzie.

<Button label="Pobierz Sourcemod" link="https://www.sourcemod.net/downloads.php" block />



## Instalacja pluginów

Pluginy dla Sourcemod są zazwyczaj dystrybuowane jako pliki `.smx`. Te skompilowane pliki pluginów muszą zostać przesłane do katalogu `plugins` wewnątrz instalacji Sourcemod.

```
../csgo/addons/sourcemod/plugins/
```


Po przesłaniu pliku pluginu zrestartuj serwer lub przeładuj plugin bezpośrednio przez konsolę serwera, używając następującej komendy:

```
sm plugins load <pluginname>
```


Jeśli plugin nie załaduje się poprawnie, sprawdź logi serwera znajdujące się w katalogu `logs` Sourcemod pod kątem możliwych błędów.

Niektóre pluginy mogą również zawierać dodatkowe pliki konfiguracyjne. Zazwyczaj umieszcza się je w:

```
../csgo/addons/sourcemod/configs/
```


Zawsze stosuj się do instrukcji instalacji dostarczonych przez twórcę pluginu, aby zapewnić poprawne działanie.



## Popularne pluginy

<SearchableItemList items={items} />



## Podsumowanie

Jeśli wykonałeś wszystkie kroki, powinieneś mieć poprawnie zainstalowane Metamod:Source, Sourcemod oraz wybrane pluginy na swoim serwerze gier CS:GO. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />