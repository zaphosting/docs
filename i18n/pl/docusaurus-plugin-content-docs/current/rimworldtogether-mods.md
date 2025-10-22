---
id: rimworldtogether-mods
title: "RimWorld Together: Instalacja modów"
description: "Dowiedz się, jak wzbogacić swój serwer gier RimWorld Together o popularne mody dla płynnej rozgrywki online CO-OP → Sprawdź teraz"
sidebar_label: Instalacja Modów
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rimworldtogether-mods.json';

## Wprowadzenie

RimWorld Together to bardzo popularny, open-source’owy mod multiplayer, całkowicie prowadzony przez społeczność RimWorld, który umożliwia rozgrywkę online CO-OP w grze RimWorld. W tym poradniku pokażemy Ci, jak zainstalować mody na Twoim serwerze gier RimWorld Together.

<InlineVoucher />

## Zbieranie modów

Na serwer RimWorld Together możesz zainstalować szeroką gamę różnych modów do RimWorld.

Mody dzielą się na trzy typy:
- **Wymuszone mody**: są obowiązkowe, co oznacza, że klient musi je mieć, inaczej nie połączy się z serwerem.
- **Opcjonalne mody**: nie są wymagane, klient może się połączyć nawet bez nich.
- **Zakazane mody**: te mody są zbanowane, więc serwer natychmiast odrzuci połączenie klienta.

Te trzy typy pojawią się w następnej sekcji dotyczącej przesyłania modów, ponieważ mody są podzielone na trzy foldery.

### Pliki Core & DLC

RimWorld Together pozwala łatwo pobrać Pliki Core i DLC. Traktowane są one dokładnie tak samo jak każdy inny mod.

Możesz pobrać Core i DLC bezpośrednio z [RimWorld Together GitHub Repository](https://github.com/RimworldTogether/RimWorld-Together), konkretnie pobierając folder **Extras.zip**.

### Inne mody

Szeroki wybór modów do RimWorld znajdziesz, przeszukując internet. Gorąco polecamy korzystanie ze strony [Steam Workshop RimWorld](https://steamcommunity.com/app/294100/workshop/) ze względu na jej popularność i dużą ilość dostępnych modów.

Subskrybując mody bezpośrednio przez Steam Workshop, zostaną one pobrane przez klienta Steam do katalogu: `../steamapps/workshop/content/294100`.

:::tip
Jeśli nie posiadasz RimWorld na Steam, nadal możesz pobierać pliki i mody ze Steam Workshop używając SteamCMD. Zacznij od pobrania [SteamCMD ze strony Valve](https://developer.valvesoftware.com/wiki/SteamCMD) lub bezpośrednio [tutaj](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Uruchom **steamcmd.exe** i poczekaj na zakończenie instalacji. Gdy będzie gotowe, wpisz w konsoli `login anonymous`.

Teraz możesz pobierać mody, wpisując `workshop_download_item 294100 [workshop_id]`, zamieniając `[workshop_id]` na ID moda ze Steam Workshop. ID moda znajdziesz w URL, na przykład: `/?id=3230195082`.

Wszystkie mody pobrane przez SteamCMD trafią do ścieżki: `../steamapps/workshop/content/294100`.
:::

Gdy już pobierzesz mody, przejdź do następnej sekcji, gdzie wyjaśniamy, jak je przesłać na serwer gier.

:::note
Istnieją mody, które na pewno są niekompatybilne z RimWorld Together. Listę potwierdzonych [niekompatybilnych modów znajdziesz tutaj](https://github.com/RimworldTogether/RimWorld-Together/blob/development/IncompatibilityList.md).

Poza tym mogą być inne mody, które nie działają poprawnie z RimWorld Together, więc może być potrzebne trochę testów i researchu, by upewnić się, że mody działają.
:::

## Przesyłanie modów

Gdy masz już mody gotowe, zacznij od połączenia się z serwerem gier przez FTP. Przeczytaj nasz [poradnik Dostęp przez FTP](gameserver-ftpaccess.md), żeby dowiedzieć się jak to zrobić.

W swoim kliencie FTP przejdź do katalogu:
```
../rimworld-together/Mods
```

W tym katalogu zobaczysz trzy osobne foldery dla różnych typów modów. To nawiązuje do początku poprzedniej sekcji, gdzie omawialiśmy typy modów. Jeśli jeszcze tego nie czytałeś, radzimy wrócić i się z tym zapoznać, żeby wiedzieć, gdzie umieścić każdy mod.

Mając to na uwadze, otwórz foldery z pobranymi modami i jeden po drugim przesyłaj je do odpowiednich folderów kategorii modów na swoim serwerze gier.

:::note
Serwer musi być zatrzymany przed dodaniem lub edycją modów, inaczej zmiany mogą zostać cofnięte.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/3TsB3wYFzoxK3NL/preview)

## Uruchamianie serwera

Po przesłaniu wybranych modów, po prostu uruchom serwer ponownie. Przy następnym starcie serwera wszystkie dodane mody powinny zostać załadowane.

Gratulacje, pomyślnie zainstalowałeś nowe mody na swoim serwerze gier RimWorld Together!

## Popularne mody

Wciąż szukasz idealnych modów na swój serwer? Przejrzyj naszą starannie wyselekcjonowaną listę najpopularniejszych i polecanych modów, które wzbogacą Twoją rozgrywkę i dodadzą serwerowi ten ostatni szlif. Znajdź inspirację i dokładnie te dodatki, które pasują do Twojego projektu.

<SearchableItemList items={items} />

<InlineVoucher />