---
id: vserver-linux-screen
title: "VPS: Instalacja Screen"
description: "Dowiedz się, jak efektywnie zarządzać wieloma sesjami terminala na systemach Unix-like za pomocą narzędzia Screen → Sprawdź teraz"
sidebar_label: Instalacja Screen
services:
  - vserver
---

## Wprowadzenie

Screen to multiplexer terminala dla systemów operacyjnych Unix-like, takich jak Linux. Pozwala użytkownikom zarządzać wieloma sesjami terminala w jednym oknie lub połączeniu zdalnym. W tym poradniku omówimy kroki instalacji oraz podpowiemy, jak korzystać z screen, abyś mógł lepiej poznać to narzędzie.

## Przygotowanie

Zanim zainstalujesz cokolwiek na serwerze, zalecamy uruchomić polecenie aktualizacji odpowiednie dla Twojego systemu operacyjnego, aby utrzymać serwer bezpiecznym.

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

Instalacja narzędzia screen jest prosta — wystarczy uruchomić poniższe polecenie, dopasowane do Twojej dystrybucji Linux:

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

Jak wspomnieliśmy, screen pozwala tworzyć wiele sesji. Aby rozpocząć nową, wystarczy wpisać poniższe polecenie, zastępując `[name]` dowolną nazwą, którą chcesz nadać sesji.
```
screen -S [name]
```

:::info
Pamiętaj, że polecenia w tym poradniku są czułe na wielkość liter, zwłaszcza jeśli chodzi o flagi parametrów.
:::

To otworzy nową sesję screen, w której możesz uruchomić dowolny skrypt lub program, który będzie działał nawet po zamknięciu połączenia zdalnego.

Aby wyjść z sesji screen, użyj `CTRL + A`, a następnie `D` lub po prostu wpisz `exit` w konsoli.

:::tip
Możesz przeglądać wszystkie aktywne sesje/screeny za pomocą polecenia `screen -ls` lub `screen -list`.
:::

Aby wrócić do wcześniej utworzonej sesji, użyj polecenia `screen -r [name]`, które natychmiast przeniesie Cię do odpowiedniego ekranu.

## Flagi parametrów Screen

Screen ma wiele flag `-`, które możesz wykorzystać do konfiguracji poleceń. Najważniejsze z nich znajdziesz w poniższej tabeli.

| Flaga | Alias | Opis |
| ---- | ----- | ---- |
| -v   | | Pokazuje aktualną wersję screen |
| -S `[name]` | | Uruchamia nową sesję screen o nazwie `[name]` |
| -ls | -list | Wyświetla listę wszystkich uruchomionych sesji |
| -wipe `[name]` | | Usuwa sesje, opcjonalnie z nazwą `[name]` |
| -r `[name]` | | Ponownie dołącza do sesji o nazwie `[name]` |
| -d -r `[name]` | | Odłącza się od bieżącej sesji i dołącza do `[name]` |

:::tip
Pełną listę dostępnych parametrów zobaczysz, wpisując `screen -h`.
:::

## Zaawansowane użycie Screen

### Zarządzanie oknami

Skoro już znasz podstawowe komendy screen, czas poznać skróty, które ułatwią Ci nawigację między sesjami. W każdej sesji możesz tworzyć wiele oddzielnych okien do różnych zadań.

:::note 
Wszystkie skróty w tej części poradnika wykonuj po naciśnięciu `CTRL + A`.
:::

Naciśnięcie `C` utworzy nowe puste okno w bieżącym katalogu. Aby przełączać się między oknami, użyj `N` (następne), `P` (poprzednie) lub `"` i wybierz okno z listy za pomocą strzałek.

Domyślnie wszystkie okna mają tę samą nazwę (zwykle nazwę powłoki, której używasz). Aby ją zmienić, wpisz `A` i podaj nową nazwę.

Aby usunąć okno, naciśnij `K`.

#### Podział okien

Aby mieć 2 okna w układzie podzielonym, użyj `S` (poziomo) lub `|` (pionowo) i przełączaj się między nimi za pomocą `Tab`.

:::tip
Po utworzeniu podzielonego okna przejdź do niego za pomocą `Tab` i wpisz `"` aby otworzyć poprzednie okno w drugim widoku podziału.
:::

Możesz dzielić okna dowolnie wiele razy, ale pamiętaj, że zużycie pamięci RAM serwera może rosnąć wykładniczo, co jest normalne przy multitaskingu.

## Podsumowanie

Mamy nadzieję, że ten poradnik pomógł Ci zrozumieć, jak działa narzędzie screen w Linux. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂