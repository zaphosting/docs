---
id: dedicated-linux-steamcmd
title: "Serwer dedykowany: Konfiguracja SteamCMD na Linux"
description: "Dowiedz się, jak skonfigurować SteamCMD na serwerach Linux, aby efektywnie instalować serwery gier dedykowanych → Sprawdź teraz"
sidebar_label: Konfiguracja SteamCMD
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

SteamCMD to niezbędne narzędzie do instalacji serwerów gier dedykowanych dla wielu tytułów, takich jak Palworld, Enshrouded i inne. W tym poradniku przejdziemy przez proces pierwszej konfiguracji SteamCMD na Twoim serwerze Linux. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](vserver-linux-ssh.md).

## Instalacja SteamCMD

Po uzyskaniu dostępu do serwera, musisz zainstalować **SteamCMD**, aby móc pobrać niezbędne pliki serwera gier dedykowanych. SteamCMD to wersja klienta Steam działająca w trybie **command-line (CLI)**, która pozwala łatwo pobierać różne pliki z warsztatu Steam oraz serwerów dedykowanych.

Jak zwykle w Linuxie, najlepiej najpierw zaktualizować system, uruchamiając odpowiednie polecenie dla Twojej dystrybucji:

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

Teraz musisz zainstalować kilka pakietów. Wyjaśniamy je poniżej:

- Pakiet **software-properties-common** ułatwia zarządzanie źródłami oprogramowania i dystrybucją.
- SteamCMD to narzędzie 32-bitowe, więc musisz dodać architekturę **i386**, aby system zainstalował odpowiednie biblioteki.
- Ponieważ SteamCMD jest oprogramowaniem własnościowym, potrzebujesz pakietu **multiverse** lub **non-free** w zależności od dystrybucji, gdyż zwykle nie są one domyślnie dostępne w repozytoriach.

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian i inne dystrybucje nie-Debianowe
sudo apt-add-repository non-free
```

Następnie uruchom ponownie aktualizację, aby system odczytał i zainstalował zmiany:

```
sudo apt update
```

Na koniec zainstaluj SteamCMD poleceniem. Może pojawić się monit o zaakceptowanie licencji – po prostu potwierdź, aby kontynuować.

```
sudo apt install steamcmd
```

:::tip
Możesz sprawdzić, czy instalacja SteamCMD przebiegła pomyślnie, uruchamiając `steamcmd`. Po załadowaniu powinien pojawić się prompt `Steam>`. Aby wyjść, wpisz `quit`.
:::

Gdy wszystko jest już gotowe i zainstalowane, możesz przejść do kolejnego kroku, czyli instalacji serwera gier dedykowanych za pomocą SteamCMD.

## Tworzenie użytkownika

Zdecydowanie polecamy utworzyć osobnego użytkownika do obsługi SteamCMD. Uruchamianie go na rootcie, jak w wielu przypadkach, nie jest zalecane z różnych względów bezpieczeństwa.

Użyj poniższego polecenia, aby stworzyć użytkownika o nazwie `steam` z opcjonalnym hasłem:

```
sudo useradd -m steam
sudo passwd steam # Opcjonalne hasło
```

Po utworzeniu użytkownika musisz zmodyfikować plik `.bashrc`, aby dodać dostęp do ścieżki `/usr/games`, gdzie znajduje się SteamCMD. Robi się to przez dodanie zmiennej środowiskowej PATH.

Otwórz plik w edytorze nano:

```
sudo nano /home/steam/.bashrc
```

Przewiń na koniec pliku i dodaj następującą linię:

```
export PATH="/usr/games/:$PATH"
```

Zapisz plik i wyjdź z nano, używając `CTRL + X`, następnie `Y`, a na końcu `ENTER`.

## Podsumowanie

Udało Ci się właśnie skonfigurować podstawową funkcjonalność SteamCMD na serwerze Linux. Teraz możesz przejść do instalacji zawartości Steam, logując się jako użytkownik `steam`.

Zachęcamy do sprawdzenia innych poradników w tej sekcji, które pokazują, jak instalować konkretne gry za pomocą SteamCMD, które właśnie skonfigurowałeś.