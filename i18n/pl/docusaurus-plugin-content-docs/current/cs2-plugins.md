---
id: cs2-plugins
title: "CS2: Instalacja pluginów"
description: "Odkryj rozwijający się świat pluginów i projektów społecznościowych dla CS2, które wzbogacą Twoje doświadczenie w Counter-Strike → Dowiedz się więcej już teraz"
sidebar_label: Instalacja pluginów
services:
  - gameserver-cs2
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs2-plugins.json';



## Wprowadzenie

Counter-Strike 2 kontynuuje długą tradycję serwerowej personalizacji napędzanej przez społeczność. Pluginy pozwalają właścicielom serwerów gier rozszerzać rozgrywkę, dodawać funkcje poprawiające komfort, wdrażać niestandardowe zasady lub tworzyć całkowicie nowe tryby gry.

Wraz z przejściem na Source 2, ekosystem pluginów uległ znacznym zmianom. Dla CS2 **CounterStrikeSharp** stał się głównym i aktywnie rozwijanym frameworkiem do tworzenia pluginów po stronie serwera.

<InlineVoucher />



## Instalacja Metamod:Source

Metamod musi być zainstalowany jako pierwszy, ponieważ CounterStrikeSharp od niego zależy. Po pobraniu [Metamod:Source 2.x Dev Build](https://www.metamodsource.net/downloads.php?branch=dev), rozpakuj archiwum. W środku znajdziesz katalog `addons`. Ten katalog należy przesłać bezpośrednio do katalogu gry CS2 przez [FTP](gameserver-ftpaccess.md).

```
../game/csgo/
```

Po skopiowaniu plików, znajdź plik `gameinfo.gi` w `/game/csgo/`. Otwórz go w edytorze tekstu. W pliku znajdź linię zawierającą `Game_LowViolence csgo_lv`. Bezpośrednio pod nią dodaj następujący wpis:

```
Game csgo/addons/metamod
```

<Button label="Pobierz Metamod:Source" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## Instalacja CounterStrikeSharp

Gdy Metamod jest już uruchomiony, możesz zainstalować CounterStrikeSharp. CounterStrikeSharp jest dystrybuowany przez oficjalne repozytorium na GitHub i dostępny jako gotowy do użycia pakiet. Pobierz wersję CounterStrikeSharp zawierającą runtime. Rozpakuj archiwum i skopiuj zawarty katalog `addons` do tego samego katalogu gry CS2 przez [FTP](gameserver-ftpaccess.md).

```
/game/csgo/
```

Nie łącz ani nie zmieniaj nazw katalogów ręcznie. Struktura dostarczona przez archiwum musi pozostać nienaruszona. Po przesłaniu plików zrestartuj serwer. Podczas startu Metamod automatycznie załaduje CounterStrikeSharp. Aby zweryfikować instalację, otwórz konsolę serwera i wpisz:

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="Pobierz CounterStrikeSharp" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## Instalacja pluginów

Pluginy dla CounterStrikeSharp dostarczane są jako skompilowane pliki `.dll`. Pliki te umieszcza się w katalogu `plugins` w ścieżce instalacji CounterStrikeSharp.

Po skopiowaniu pluginu do tego katalogu i restarcie serwera, CounterStrikeSharp automatycznie załaduje wszystkie dostępne pluginy. Jeśli jakiś plugin nie załaduje się poprawnie, sprawdź logi serwera pod kątem błędów związanych z CounterStrikeSharp lub samym pluginem.




## Popularne pluginy

<SearchableItemList items={items} />



## Podsumowanie

Jeśli wykonałeś wszystkie kroki, powinieneś mieć poprawnie zainstalowane Metamod/CounterStrikeSharp oraz wybrane pluginy. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂




<InlineVoucher />