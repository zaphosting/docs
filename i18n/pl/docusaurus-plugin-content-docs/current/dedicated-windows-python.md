---
id: dedicated-windows-python
title: 'Instalacja Pythona na serwerze Windows – Włącz rozwój i automatyzację'
description: "Dowiedz się, jak zainstalować i skonfigurować środowisko Python na serwerach Windows, aby efektywnie uruchamiać swoje programy Python → Sprawdź teraz"
sidebar_label: Instalacja Pythona
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Ten poradnik pokazuje, jak zainstalować środowisko uruchomieniowe Python na Windows. Poniższe kroki musisz wykonać przez RDP. Jeśli nie wiesz, jak połączyć się z serwerem przez RDP, zerknij na nasz [poradnik Pierwszy dostęp (RDP)](vserver-windows-userdp.md).



## Instalacja

### Krok 1: Pobieranie plików
Otwórz przeglądarkę, której używasz (w tym poradniku korzystam z Chrome) i przejdź na [https://www.python.org/downloads/](https://www.python.org/downloads/)

![](https://screensaver01.zap-hosting.com/index.php/s/WAET5RFn6yBfNzC/preview)

Kliknij przycisk `Download Python [wersja]` i poczekaj, aż pobieranie się zakończy.

![](https://screensaver01.zap-hosting.com/index.php/s/b8j6ZbfGWoBjpep/preview)

### Krok 2: Instalacja Pythona
Uruchom instalator, klikając na pobrany plik. Teraz pojawi się okno z ustawieniami instalacji. Upewnij się, że zaznaczyłeś opcję `Add python.exe to PATH` na dole (to ułatwi późniejsze uruchamianie Pythona) i kliknij `Install Now`.

![](https://screensaver01.zap-hosting.com/index.php/s/Z57KiQwHqP3RpPy/preview)

### Krok 3: Zakończenie instalacji
Poczekaj, aż wszystkie pliki zostaną zainstalowane. Bądź cierpliwy, może to chwilę potrwać. :)

![](https://screensaver01.zap-hosting.com/index.php/s/XA2Y3DGezb84Ek9/preview)

Po zakończeniu kliknij `Close` i możesz zacząć korzystać z Pythona na swoim serwerze.

![](https://screensaver01.zap-hosting.com/index.php/s/t7xPKRtsJ7kGRxw/preview)

## Uruchamianie kodu

Teraz, gdy masz Pythona zainstalowanego na serwerze, możesz zacząć uruchamiać swoje programy Python.

### Tryb interpretera

Wpisanie komendy `python` w Wierszu poleceń lub PowerShell uruchomi interpreter Pythona. Możesz pisać dowolny poprawny kod Python po znaku `>>>`, a po naciśnięciu `Enter` zostanie on wykonany. Interpreter zamkniesz, wpisując `exit()` lub po prostu zamykając okno konsoli.

![](https://screensaver01.zap-hosting.com/index.php/s/DskKi5Ac28ERY38/preview)

### Uruchamianie plików .py

Aby uruchomić pliki `.py`, wpisz w Wierszu poleceń lub PowerShell komendę `python3 [nazwa_pliku].py`, zamieniając `[nazwa_pliku]` na ścieżkę do pliku, który chcesz odpalić.

:::tip
Większość programów dostępnych online uruchomisz komendą `python3 main.py`, bo `main.py` to standardowy punkt startowy większości projektów Python.
:::

Możesz też po prostu otworzyć plik .py lub kliknąć go prawym przyciskiem i wybrać uruchomienie przez Pythona bezpośrednio w Windows.

## Wirtualne środowiska

Pisząc programy w Pythonie, często potrzebujesz zainstalować zewnętrzne pakiety przez pip. Możesz je zainstalować globalnie, dostępne dla wszystkich skryptów `.py`, albo stworzyć wirtualne środowisko (venv).

### Tworzenie venv

Najpierw przejdź w Eksploratorze plików do folderu, w którym chcesz utworzyć venv, a następnie uruchom `python -m venv .` – to zainstaluje potrzebne pliki w bieżącej lokalizacji.

### Aktywacja i dezaktywacja

Aby korzystać z poleceń takich jak `pip install` w venv, musisz go aktywować komendą `.\Scripts\activate`. Teraz konsola działa tylko w ramach venv, a skrypty mają dostęp tylko do lokalnie zainstalowanych pakietów.

Po skończonej pracy wyjdź z venv, wpisując `deactivate`.

![](https://screensaver01.zap-hosting.com/index.php/s/Ws5BosJzJ78s7Y9/preview)



## Podsumowanie

Gratulacje, udało Ci się zainstalować Pythona! Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem – jesteśmy dostępni codziennie, by Ci pomóc! 🙂