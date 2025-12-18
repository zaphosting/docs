---
id: vserver-linux-openmp
title: "VPS: Open.mp Serwer Dedykowany Linux - Konfiguracja"
description: "Dowiedz się, jak zainstalować serwer dedykowany open.mp na swoim Linux VPS, aby bezproblemowo hostować i zarządzać serwerem gier → Sprawdź teraz"
sidebar_label: Open.mp
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz Linux VPS i chcesz zainstalować serwer dedykowany open.mp? Trafiłeś idealnie. W tym poradniku pokażemy krok po kroku, jak zainstalować tę usługę na Twoim serwerze Linux. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwala na szybkie uruchomienie serwerów gier z integracją w panelu głównym ZAP-Hosting, dosłownie kilkoma kliknięciami? Sprawdź więcej o [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](vserver-linux-ssh.md).

### Tworzenie użytkownika

Zdecydowanie polecamy utworzyć osobnego użytkownika do uruchamiania wszystkich serwerów dedykowanych gier. Praca na rootzie, jak w wielu przypadkach, nie jest zalecana z różnych względów. Jeśli masz już gotowego użytkownika, przejdź do instalacji.

Użyj poniższej komendy, aby stworzyć użytkownika o nazwie `gameservers` z opcjonalnym hasłem według własnego wyboru.

```
sudo useradd -m gameservers
sudo passwd gameservers # Opcjonalne hasło
```

Po zalogowaniu się na serwer i przygotowaniu użytkownika, przejdź do kolejnych kroków instalacji.

## Instalacja

Zaloguj się na użytkownika `gameservers` i przejdź do katalogu domowego `home/gameservers`, aby utrzymać porządek.
```
sudo -u gameservers -s
cd ~
```

Aby zachować porządek, utwórz nowy folder na serwer open.mp i do niego przejdź.
```
mkdir OpenMP-Server && cd OpenMP-Server
```

Teraz pobierz najnowszą wersję z [repozytorium open.mp na GitHub](https://github.com/openmultiplayer/open.mp/releases). Na stronie kliknij prawym przyciskiem myszy na wersję **linux-x86** i skopiuj link. Następnie użyj poniższej komendy, podmieniając `[link]` na skopiowany adres, aby pobrać najnowszy release dla Linuxa.
```
wget [link]
```

Pobierze to plik `.zip` do aktualnego katalogu, czyli do nowo utworzonego folderu `OpenMP-Server`. Rozpakuj pliki poleceniem:
```
tar -xvzf open.mp-linux-x86.tar.gz
```

Pliki powinny być teraz dostępne w folderze **Server** — przejdź do niego komendą `cd Server`. W każdej chwili możesz użyć `ls`, aby zobaczyć zawartość katalogu. Serwer jest gotowy, przejdź do konfiguracji.

## Konfiguracja

Na tym etapie masz już zainstalowany serwer open.mp. Możesz dalej konfigurować serwer przez plik konfiguracyjny znajdujący się w katalogu serwera.

Edytuj podstawowe parametry w pliku **config.json**:
```
nano /home/gameservers/OpenMP-Server/Server/config.json
```

Zobacz nasz poradnik Open.mp [Konfiguracja Serwera](openmp-configuration.md), aby poznać wszystkie dostępne opcje i ich działanie.

## Uruchamianie i łączenie się z serwerem

Czas uruchomić serwer! Przejdź do głównego katalogu gry i uruchom plik powłoki **omp-server**.
```
/home/gameservers/OpenMP-Server/Server/omp-server
```

W terminalu powinny pojawić się logi, w tym sieciowe, co oznacza, że serwer wystartował poprawnie. Jeśli wszystko pójdzie zgodnie z planem, serwer będzie dostępny przez direct connect i widoczny na liście serwerów. Możesz też połączyć się bezpośrednio pod adresem: `[twoj_adres_ip]:7777`.

## Podsumowanie

Gratulacje! Pomyślnie zainstalowałeś i skonfigurowałeś serwer open.mp na swoim VPS! Kolejnym krokiem polecamy nasz poradnik [Setup Linux Service](vserver-linux-create-gameservice.md), który pokaże Ci, jak ustawić serwer dedykowany jako usługę systemową. To daje wiele korzyści, takich jak automatyczne uruchamianie serwera przy starcie VPS, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem — jesteśmy dostępni codziennie, by Ci pomóc!

<InlineVoucher />