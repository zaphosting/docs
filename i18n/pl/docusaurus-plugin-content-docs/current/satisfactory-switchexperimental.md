---
id: satisfactory-switchexperimental
title: "Satisfactory: Wersja Eksperymentalna"
description: "Odkryj zalety i ryzyka korzystania z wersji eksperymentalnej Satisfactory, aby wcześnie dostać się do dużych aktualizacji i podkręcić swoją rozgrywkę → Dowiedz się więcej już teraz"
sidebar_label: Wersja Eksperymentalna
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Co to jest wersja eksperymentalna?
Satisfactory ma dwie wersje: standardową i eksperymentalną. Standardowa wersja jest bardziej niezawodna, stabilna i mniej podatna na błędy, bo to bardziej dopracowana wersja. Z kolei wersja eksperymentalna daje dostęp do dużych patchy jako pierwsza, zanim trafią do wersji standardowej, więc jest bardziej narażona na błędy i aktualizowana dużo częściej, ale za to możesz wypróbować największe nowości jako pierwszy!

:::info
Uwaga: Bez względu na to, którą wersję wybierzesz, zarówno twój serwer, jak i klient gry muszą mieć tę samą wersję, żeby się połączyć.
:::

<InlineVoucher />

## Jak przełączyć się na wersję eksperymentalną?
W naszym systemie wynajmu serwerów zmiana wersji serwera przez stronę jest bardzo prosta. Przed rozpoczęciem zalecamy wykonanie kopii zapasowej swoich zapisów Satisfactory, bo zmiana wersji gry usunie wszystkie pliki.

### Tworzenie kopii zapasowej zapisów
Zrobienie kopii zapasowej całego serwera gier lub zapisów jest bardzo łatwe. Przejdź na stronę produktu Satisfactory i wejdź w zakładkę `Narzędzia -> Kopie zapasowe`.

![Screenshot 2023-02-21 192618](https://screensaver01.zap-hosting.com/index.php/s/sMA9kQxoLoozsPa/preview)

Na tej stronie możesz wykonać wiele funkcji, w tym automatyczne kopie zapasowe, które są dokładniej opisane w [Kopiach zapasowych](gameserver-backups.md). Tutaj skupimy się na ręcznej kopii zapasowej.

Na górze strony kliknij zieloną ikonę + i potwierdź komunikat, aby wykonać kopię zapasową całego serwera gier na twoje miejsce kopii zapasowych ZAP.

![Screenshot 2023-02-21 193113](https://screensaver01.zap-hosting.com/index.php/s/Gf2XRLzz46WNHHE/preview)

Twoja kopia zapasowa została utworzona i możesz ją pobrać przez FTP, o czym więcej w [Dostępie przez FTP](gameserver-ftpaccess.md).

Alternatywnie możesz pobrać pliki zapisów bezpośrednio z sekcji `Menedżer zapisów` w panelu administracyjnym. Znajdziesz to w [Menedżerze zapisów](satisfactory-savegame.md).

### Przełączanie serwera gier na wersję eksperymentalną
Najpierw przejdź na stronę produktu Satisfactory i wejdź w zakładkę `Ustawienia -> Gry`.

![Screenshot 2023-02-21 191212](https://screensaver01.zap-hosting.com/index.php/s/nyksz8LjPtRGq4w/preview)

Zobaczysz sekcję `Zainstalowane gry`, gdzie są gry, które już masz zainstalowane. Jeśli wcześniej przełączałeś się między wersjami, będzie tam i możesz przejść do ostatniego kroku, by aktywować grę.

Przewiń niżej i rozwiń menu `Dostępne gry`, wpisz w polu tekstowym "Satisfactory".

![Screenshot 2023-02-21 191713](https://screensaver01.zap-hosting.com/index.php/s/CPein9Qctkwp8Yd/preview)

Kliknij zielony przycisk pobierania i potwierdź instalację w wyskakującym okienku. Rozpocznie się pobieranie wybranej wersji serwera.

![Screenshot 2023-02-21 191956](https://screensaver01.zap-hosting.com/index.php/s/C3zwiXf9THNpdDk/preview)

>Pobieranie może potrwać kilka minut. Poczekaj, aż się zakończy, zanim przejdziesz do ostatniego kroku.

Teraz obie wersje pojawią się w `Zainstalowanych grach` dla łatwiejszego przełączania się w przyszłości.

Na koniec aktywuj grę w sekcji `Zainstalowane gry`. Kliknij niebieską ikonę aktywacji gry.

:::info
Uwaga: Podczas reinstalacji wszystkie dane gry zostaną usunięte, upewnij się, że zrobiłeś kopię zapasową, jeśli jeszcze tego nie zrobiłeś.
:::

![Screenshot 2023-02-22 020606](https://screensaver01.zap-hosting.com/index.php/s/nmJ56coL946CNBG/preview)

Jeśli chcesz wrócić do wersji standardowej, wykonaj te same kroki, ale wybierz standardowy serwer gier Satisfactory podczas wyboru!

## Przełączanie klienta gry na wersję eksperymentalną
:::info
Uwaga: Bez względu na to, którą wersję wybierzesz, zarówno twój serwer, jak i klient gry muszą mieć tę samą wersję, żeby się połączyć.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
Najpierw otwórz Steam i przejdź do swojej biblioteki gier. Znajdź "Satisfactory", kliknij prawym i wybierz właściwości.

![Screenshot 2023-02-21 203108](https://screensaver01.zap-hosting.com/index.php/s/3iqTTQNQdNpX976/preview)

W nowym menu przejdź do zakładki `Beta` i wybierz `experimental`.

![Screenshot 2023-02-21 203435](https://screensaver01.zap-hosting.com/index.php/s/PnMTyGWqWd78iZa/preview)

To wszystko, teraz poczekaj aż Steam zaktualizuje grę do wybranej wersji, po czym możesz uruchomić grę i cieszyć się serwerem!
</TabItem>
<TabItem value="Epic Games" label="Epic Games">
W Epic Games przełączenie na wersję eksperymentalną jest jeszcze prostsze. Wystarczy, że w bibliotece znajdziesz grę "Satisfactory Experimental". Obie wersje gry w launcherze Epic Games są osobno widoczne w bibliotece.

To wszystko, teraz poczekaj aż Epic Games pobierze i zainstaluje grę, po czym możesz ją uruchomić i cieszyć się serwerem!

</TabItem>
</Tabs>

<InlineVoucher />