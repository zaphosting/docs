---
id: factorio-mods
title: "Factorio: Instalacja Modów/DLC na Twoim serwerze Factorio"
description: "Odkryj, jak wzbogacić swoją rozgrywkę w Factorio, włączając DLC i dodając mody dla spersonalizowanego doświadczenia → Dowiedz się więcej już teraz"
sidebar_label: Instalacja Modów/DLC
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/factorio-mods.json';

## Wprowadzenie

Factorio ma natywne wsparcie dla modów, które pozwala łatwo dodać szeroką gamę modów do Twojej gry i serwera, obok zakupionych DLC. W tym poradniku omówimy proces włączania DLC oraz instalacji modów na Twoim kliencie i serwerze Factorio.

<InlineVoucher />

## Przygotowanie

Możesz odwiedzić [oficjalną stronę modów Factorio](https://mods.factorio.com/), aby przeglądać mody. Na tej stronie znajdziesz ogromną bibliotekę darmowych modów stworzonych przez społeczność, obejmujących wiele różnych kategorii.

:::tip
Upewnij się, że mody, które przeglądasz i pobierasz, są kompatybilne z wersją Twojego serwera Factorio.
:::

## Włączanie DLC

Wraz z aktualizacją Factorio 2.0 wprowadzono pierwszy DLC o nazwie Space Age. W panelu webowym pojawiła się nowa opcja konfiguracyjna, która pozwala na włączenie lub wyłączenie tego DLC.

<YouTube videoId="i9CuAsCxUsk" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BRa5saY3L76xe5F/preview" title="Aktywacja Factorio Space Age DLC" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko Ci wyjaśni. Niezależnie czy się spieszysz, czy wolisz chłonąć informacje w najbardziej angażujący sposób!"/>

Przejdź do panelu webowego swojego produktu i otwórz sekcję **Ustawienia**. Przewiń w dół i znajdź opcję **Space Age DLC**, która powinna być domyślnie włączona.

![](https://screensaver01.zap-hosting.com/index.php/s/T5G5GrEzwoxM3Xk/preview)

Przełącz tę funkcję i użyj zielonego przycisku **Zapisz** na dole strony. Teraz pomyślnie włączyłeś DLC do Factorio.

## Dodawanie i przesyłanie modów

Po pobraniu wybranych modów, musisz przesłać je na swój serwer Factorio przez FTP. Skorzystaj z naszego poradnika [Dostęp FTP](gameserver-ftpaccess.md), który pomoże Ci połączyć się z serwerem.

:::note
Serwer musi być zatrzymany przed dodaniem lub edycją modów, w przeciwnym razie zmiany mogą zostać cofnięte.
:::

Gdy będziesz gotowy, przejdź do następującego katalogu i prześlij pobrane mody w formacie `.zip`.

```
../factorio/saves/mods
```

![](https://screensaver01.zap-hosting.com/index.php/s/APFEnmg29jBCFKn/preview)

:::tip
Podczas modowania mody muszą być zsynchronizowane między klientem a serwerem. Factorio bardzo to ułatwia. Po dołączeniu do serwera po raz pierwszy po zmianie modów, gra automatycznie zaproponuje synchronizację modów.
:::

Na koniec zrestartuj serwer, aby automatycznie aktywować i zainstalować mody na Twoim serwerze Factorio. Jeśli pojawią się błędy, np. automatyczne wyłączanie serwera, sprawdź sekcję **Informacje->Dziennik zdarzeń** w panelu webowym, aby zobaczyć szczegóły. Najczęstszą przyczyną są niezgodności wersji.

## Popularne mody

Wciąż szukasz idealnych modów na swój serwer? Przejrzyj naszą starannie wyselekcjonowaną listę najpopularniejszych i polecanych modów, które wzbogacą Twoją rozgrywkę i dodadzą Twojemu serwerowi ten ostatni szlif. Znajdź inspirację i dokładnie te dodatki, które pasują do Twojego projektu.

<SearchableItemList items={items} />

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś mody na swoim serwerze Factorio. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />