---
id: hl2-plugins
title: "Half-Life 2: Instalacja pluginów na własnym serwerze"
description: "Dowiedz się, jak dostosować i rozbudować swój serwer gier za pomocą Sourcemod i Metamod dla lepszego zarządzania i funkcji → Sprawdź teraz"
sidebar_label: Instalacja Pluginów
services:
  - gameserver-hl2
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/hl2-plugins.json';


## Wprowadzenie

Poznaj sposób instalacji Sourcemod i Metamod oraz jak korzystać z pluginów na swoim serwerze. Obie wtyczki pozwalają na personalizację gier takich jak CS:S, CS:GO, DoD:S czy TF2 i znacznie rozszerzają dostępne opcje zarządzania serwerem.

Dzięki Sourcemod i Metamod możesz dodawać pluginy, włączać specjalne funkcje i dostosować serwer dokładnie do swoich potrzeb.

<InlineVoucher />



## Instalacja Sourcemod / Metamod

### Przygotowanie

Wymagane rozszerzenia pobierzesz z [Sourcemod](https://sourcemod.net/) oraz [Metamod](https://www.sourcemm.net/downloads.php?branch=stable). Zawsze korzystaj z najnowszych **stabilnych** wersji, aby zapewnić pełną funkcjonalność i kompatybilność.

![img](https://screensaver01.zap-hosting.com/index.php/s/STp7pRgjYS4c4yg/preview)

Potrzebujesz pakietów Linux **Sourcemod** i **Metamod**. Pobierz je z podanych źródeł. Po ściągnięciu powinieneś mieć dwa spakowane pliki. Rozpakuj je na swoim komputerze, aby uzyskać katalog addons zawierający foldery `sourcemod` i `metamod`.

![img](https://screensaver01.zap-hosting.com/index.php/s/WbxyRK8FM7GKxqt/preview)

### Instalacja

Po wykonaniu powyższych kroków możesz przejść do instalacji. Prześlij pliki na swój serwer przez FTP, korzystając z klienta FTP. Jeśli nie znasz FTP i jak działa, zajrzyj do naszego poradnika: [Dostęp przez FTP](gameserver-ftpaccess.md)

Następnie prześlij folder **addons** do głównego katalogu serwera. Struktura folderów powinna wyglądać tak:

```
/gxxxxxx/dods/dod/addons
```

![img](https://screensaver01.zap-hosting.com/index.php/s/JzWxPT3yP4zAsHz/preview)

Konfiguracja **Sourcemod** i **Metamod** jest teraz zakończona. Połącz się z serwerem w grze i wpisz w konsoli komendę ``sm version``, aby sprawdzić, czy Sourcemod i Metamod zostały poprawnie zainstalowane. Wyświetlony komunikat powinien wyglądać tak:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
```
```             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

Jeśli pojawi się komunikat **Unknown command**, to znaczy, że coś poszło nie tak podczas instalacji.



## Instalacja pluginów

### Przygotowanie

Gdy Sourcemod i Metamod są już zainstalowane i działają poprawnie, możesz zacząć dodawać pluginy. Pobierz wybrane pluginy na swój serwer z [Sourcemod](https://sourcemod.net/), gdzie znajdziesz dużą i stale rosnącą kolekcję opublikowaną przez lata. Dla każdego pluginu upewnij się, że masz plik .smx.

### Instalacja

Po pobraniu wybranych pluginów możesz przystąpić do ich instalacji. Wykonuje się to przez FTP, przesyłając pliki pluginów do katalogu:

```
../addons/sourcemod/plugins/
```


![img](https://screensaver01.zap-hosting.com/index.php/s/A6E4cQCwQnoqTKc/preview)



## Popularne pluginy
Wciąż szukasz idealnych pluginów na swój serwer? Przejrzyj naszą starannie wyselekcjonowaną listę najpopularniejszych i wysoko ocenianych pluginów, które wzbogacą rozgrywkę i dodadzą Twojemu serwerowi ten ostatni szlif. Zainspiruj się i znajdź dokładnie te dodatki, które pasują do Twojego projektu.
<SearchableItemList items={items} />


## Podsumowanie

Jeśli wykonałeś wszystkie kroki, powinieneś mieć poprawnie zainstalowane Sourcemod/Metamod oraz wybrane pluginy. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />