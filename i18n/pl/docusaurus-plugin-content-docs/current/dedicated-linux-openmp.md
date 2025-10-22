---
id: dedicated-linux-openmp
title: "Serwer dedykowany: Konfiguracja Open.mp na Linux"
description: "Dowiedz się, jak zainstalować serwer dedykowany open.mp na swoim serwerze Linux, aby bezproblemowo hostować i zarządzać serwerem gier → Sprawdź teraz"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz serwer dedykowany z Linuxem i chcesz zainstalować na nim serwer dedykowany open.mp? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze Linux. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim serwerze dedykowanym? Dzięki temu w kilka kliknięć skonfigurujesz serwery gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](dedicated-linux-ssh.md).

### Tworzenie użytkownika

Zdecydowanie polecamy utworzyć osobnego użytkownika do uruchamiania wszystkich usług serwerów gier. Praca na rootcie, jak w wielu przypadkach, nie jest zalecana z różnych powodów. Jeśli masz już gotowego użytkownika, przejdź do kroków instalacji.

Użyj poniższej komendy, aby stworzyć użytkownika o nazwie `gameservers` z opcjonalnym hasłem według własnego wyboru.

```
sudo useradd -m gameservers
sudo passwd gameservers # Opcjonalne hasło
```

Gdy już zalogujesz się na serwer i masz gotowego użytkownika, przejdź do instalacji.

## Instalacja

Zaloguj się jako użytkownik `gameservers` i przejdź do katalogu domowego `home/gameservers`, aby utrzymać porządek.
```
sudo -u gameservers -s
cd ~
```

Aby zachować porządek, utwórz nowy folder dla swojego serwera open.mp i do niego przejdź.
```
mkdir OpenMP-Server && cd OpenMP-Server
```

Teraz pobierz najnowszą wersję z [repozytorium open.mp na GitHub](https://github.com/openmultiplayer/open.mp/releases). Na stronie kliknij prawym przyciskiem myszy na wersję **linux-x86** i skopiuj link. Następnie uruchom poniższą komendę, podmieniając `[link]` na skopiowany adres, aby pobrać najnowszą wersję Linux.
```
wget [link]
```

Plik `.zip` zostanie pobrany do aktualnego katalogu, czyli do nowo utworzonego folderu `OpenMP-Server`. Rozpakuj pliki poleceniem:
```
tar -xvzf open.mp-linux-x86.tar.gz
```

Pliki powinny teraz znajdować się w folderze **Server** — przejdź do niego komendą `cd Server`. W każdej chwili możesz użyć `ls`, aby zobaczyć zawartość folderu. Serwer jest gotowy, przejdź do konfiguracji.

## Konfiguracja

Na tym etapie zakończyłeś podstawową konfigurację serwera open.mp. Możesz dalej dostosować ustawienia serwera przez plik konfiguracyjny znajdujący się w katalogu serwera.

Edytuj główne parametry w pliku **config.json**:
```
nano /home/gameservers/OpenMP-Server/Server/config.json
```

Zobacz nasz poradnik Open.mp [Konfiguracja serwera](openmp-configuration.md), aby poznać wszystkie dostępne opcje i ich działanie.

## Uruchomienie i połączenie z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i uruchom plik powłoki **omp-server**.
```
/home/gameservers/OpenMP-Server/Server/omp-server
```

W terminalu powinny pojawić się logi, w tym sieciowe, co oznacza, że serwer wystartował poprawnie. Jeśli wszystko działa jak należy, serwer będzie dostępny przez direct connect i widoczny na liście serwerów. Możesz też połączyć się bezpośrednio pod adresem: `[twoj_adres_ip]:7777`.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer open.mp na swoim VPS! Kolejnym krokiem polecamy zapoznać się z naszym poradnikiem [Setup Linux Service](dedicated-linux-create-gameservice.md), który pokazuje, jak ustawić serwer dedykowany jako usługę systemową. To daje wiele korzyści, takich jak automatyczne uruchamianie serwera przy starcie, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />