---
id: dedicated-linux-screen
title: "Konfiguracja Screen na serwerze Linux - Zarządzaj trwałymi sesjami terminala"
description: "Dowiedz się, jak zarządzać wieloma sesjami terminala na Linuxie za pomocą Screen, by zwiększyć produktywność i utrzymać sesje → Sprawdź teraz"
sidebar_label: Instalacja Screen
services:
  - vserver
  - dedicated
---

## Wprowadzenie

Screen to terminalowy multiplexer dla systemów Unix-like, takich jak Linux. Pozwala użytkownikom zarządzać wieloma sesjami terminala w jednym oknie lub połączeniu zdalnym. W tym poradniku pokażemy, jak zainstalować Screen i podpowiemy, jak go używać, żebyś lepiej ogarnął to narzędzie.

## Przygotowanie

Zanim zainstalujesz cokolwiek na serwerze, warto wykonać aktualizację systemu, żeby Twój serwer był bezpieczny i miał najnowsze poprawki.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt update && sudo apt upgrade
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

Instalacja narzędzia screen jest prosta — wystarczy wykonać odpowiednie polecenie dla Twojej dystrybucji Linuxa:

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt install screen
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
sudo yum install screen
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
sudo zypper install screen
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
sudo dnf install screen
```

</TabItem>
</Tabs>

## Podstawowe użycie Screen

Jak wspomnieliśmy, screen pozwala tworzyć wiele sesji. Aby rozpocząć nową, wpisz poniższe polecenie, zamieniając `[name]` na dowolną nazwę, którą chcesz nadać sesji.
```
screen -S [name]
```

:::info
Pamiętaj, że polecenia w tym poradniku są czułe na wielkość liter, zwłaszcza jeśli chodzi o flagi parametrów.
:::

To otworzy nową sesję screen, w której możesz uruchomić dowolny skrypt lub program, który będzie działał nawet po zamknięciu połączenia zdalnego.

Aby wyjść z sesji screen, użyj `CTRL + A`, a potem `D` lub po prostu wpisz `exit` w konsoli.

:::tip
Możesz przeglądać wszystkie aktywne sesje/screeny poleceniem `screen -ls` lub `screen -list`.
:::

Aby wrócić do wcześniej utworzonej sesji, użyj `screen -r [name]`, co natychmiast przeniesie Cię do odpowiedniego ekranu.

## Flagi parametrów Screen

Screen ma wiele flag `-`, które pozwalają konfigurować polecenia. Najważniejsze z nich znajdziesz w tabeli poniżej.

| Flaga | Alias | Opis |
| ---- | ----- | ---- |
| -v   | | Pokazuje aktualną wersję screen |
| -S `[name]` | | Uruchamia nową sesję screen o nazwie `[name]` |
| -ls | -list | Wyświetla listę wszystkich działających sesji |
| -wipe `[name]` | | Usuwa sesje, opcjonalnie z nazwą `[name]` |
| -r `[name]` | | Ponownie dołącza do sesji o nazwie `[name]` |
| -d -r `[name]` | | Odłącza się od aktualnej sesji i dołącza do `[name]` |

:::tip
Pełną listę dostępnych parametrów zobaczysz, wpisując `screen -h`.
:::

## Zaawansowane użycie Screen

### Zarządzanie oknami

Skoro już znasz podstawy, czas poznać skróty, które ułatwią Ci poruszanie się między sesjami. W każdej sesji screen możesz tworzyć wiele oddzielnych okien do różnych zadań.

:::note 
Wszystkie skróty w tej części poradnika wykonuj po naciśnięciu `CTRL + A`.
:::

Naciśnięcie `C` tworzy nowe puste okno w bieżącym katalogu. Aby przełączać się między oknami, użyj `N` (następne), `P` (poprzednie) lub `"` i wybierz okno z listy za pomocą strzałek.

Domyślnie wszystkie okna mają tę samą nazwę (zwykle nazwę powłoki, której używasz). Aby ją zmienić, wpisz `A` i podaj nową nazwę.

Aby usunąć okno, naciśnij `K`.

#### Podział okien

Aby mieć 2 okna w układzie podzielonym, użyj `S` (poziomo) lub `|` (pionowo) i przełączaj się między nimi za pomocą `Tab`.

:::tip
Po utworzeniu podzielonego okna przejdź do niego `Tab` i wpisz `"` aby otworzyć poprzednie okno w drugim widoku podziału.
:::

Możesz dzielić okna dowolnie wiele razy, ale pamiętaj, że zużycie pamięci RAM serwera może wtedy szybko rosnąć, co jest normalne przy multitaskingu.

## Podsumowanie

Mamy nadzieję, że ten poradnik pomógł Ci ogarnąć, jak działa narzędzie screen na Linuxie. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem — jesteśmy dostępni codziennie, by Ci pomóc! 🙂