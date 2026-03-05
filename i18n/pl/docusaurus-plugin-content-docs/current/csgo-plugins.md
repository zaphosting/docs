---
id: csgo-plugins
title: "CS:GO: Instalacja pluginów"
description: "Odkryj rozwijający się świat pluginów i projektów społecznościowych do CS:GO, które wzbogacą Twoje doświadczenie w Counter-Strike → Dowiedz się więcej"
sidebar_label: Instalacja pluginów
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## Wprowadzenie

CS:GO kontynuuje długą tradycję serwerowej personalizacji napędzanej przez społeczność. Pluginy pozwalają właścicielom serwerów rozszerzyć rozgrywkę, dodać funkcje poprawiające komfort gry, wdrożyć niestandardowe zasady lub stworzyć całkowicie nowe tryby gry.

Wraz z przejściem na Source 2, ekosystem pluginów uległ znaczącym zmianom. Dla CS:GO **CounterStrikeSharp** stał się głównym i aktywnie rozwijanym frameworkiem do tworzenia pluginów po stronie serwera.

<InlineVoucher />



## Instalacja Metamod:Source

Metamod musi być zainstalowany jako pierwszy, ponieważ CounterStrikeSharp od niego zależy. Po pobraniu [Metamod:Source 2.x Dev Build](https://www.metamodsource.net/downloads.php?branch=dev), rozpakuj archiwum. W środku znajdziesz katalog `addons`. Ten katalog należy przesłać bezpośrednio do katalogu gry CS:GO przez [FTP](gameserver-ftpaccess.md).

```
../game/csgo/
```

Po skopiowaniu plików, znajdź plik `gameinfo.gi` w katalogu `/game/csgo/`. Otwórz go w edytorze tekstu. W pliku znajdź linię zawierającą `Game_LowViolence csgo_lv`. Bezpośrednio pod nią dodaj następujący wpis:

```
Game csgo/addons/metamod
```

<Button label="Pobierz Metamod:Source" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## Instalacja CounterStrikeSharp

Gdy Metamod jest już uruchomiony, można zainstalować CounterStrikeSharp. CounterStrikeSharp jest dystrybuowany przez oficjalne repozytorium GitHub i dostępny jako gotowy pakiet release. Pobierz wersję CounterStrikeSharp zawierającą runtime. Rozpakuj archiwum i skopiuj zawarty katalog `addons` do tego samego katalogu gry CS:GO przez [FTP](gameserver-ftpaccess.md).

```
/game/csgo/
```

Nie łącz ani nie zmieniaj nazw katalogów ręcznie. Struktura dostarczona przez archiwum musi pozostać nienaruszona. Po przesłaniu plików, zrestartuj serwer. Podczas uruchamiania CounterStrikeSharp zostanie automatycznie załadowany przez Metamod. Aby zweryfikować instalację, otwórz konsolę serwera i wpisz:

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="Pobierz CounterStrikeSharp" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## Instalacja pluginów

Pluginy dla CounterStrikeSharp dostarczane są jako skompilowane pliki `.dll`. Pliki te umieszcza się w katalogu `plugins` w ścieżce instalacji CounterStrikeSharp.

Po skopiowaniu pluginu do tego katalogu i restarcie serwera, CounterStrikeSharp automatycznie załaduje wszystkie dostępne pluginy. Jeśli plugin nie załaduje się poprawnie, sprawdź logi serwera pod kątem błędów związanych z CounterStrikeSharp lub samym pluginem.




## Popularne pluginy

<SearchableItemList items={items} />



## Podsumowanie

Jeśli wykonałeś wszystkie kroki, powinieneś mieć poprawnie zainstalowany Metamod/CounterStrikeSharp oraz wybrane pluginy. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂




<InlineVoucher />