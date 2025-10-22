---
id: dedicated-linux-ragemp
title: "Serwer dedykowany: Konfiguracja RageMP na Linux"
description: "Dowiedz się, jak zainstalować RageMP na swoim serwerze dedykowanym z Linux, aby bezproblemowo hostować i zarządzać serwerem gier → Sprawdź teraz"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz serwer dedykowany z Linux i chcesz zainstalować na nim serwer RageMP? Trafiłeś idealnie. W tym poradniku pokażemy krok po kroku, jak zainstalować tę usługę na Twoim serwerze Linux. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim serwerze dedykowanym? Dzięki temu w kilka klików skonfigurujesz serwery gier z bezpośrednią integracją z panelem głównym ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](dedicated-linux-ssh.md).

### Tworzenie użytkownika

Zdecydowanie polecamy utworzyć osobnego użytkownika do uruchamiania wszystkich usług serwerów gier. Praca na rootcie, jak to często bywa, nie jest zalecana z wielu powodów. Jeśli masz już gotowego użytkownika, przejdź do instalacji.

Użyj poniższych komend, aby stworzyć użytkownika o nazwie `gameservers` i opcjonalnie ustawić hasło.

```
sudo useradd -m gameservers
sudo passwd gameservers # Opcjonalne hasło
```

Po zalogowaniu się na serwer i przygotowaniu użytkownika, przejdź do kolejnych kroków instalacji.

## Instalacja

Zaloguj się jako użytkownik `gameservers` i przejdź do katalogu domowego, aby utrzymać porządek.
```
sudo -u gameservers -s
cd ~
```

Dla porządku utwórz nowy folder na serwer RageMP i do niego przejdź.
```
mkdir RageMP-Server && cd RageMP-Server
```

Teraz pobierz najnowszą wersję RageMP ze strony. Użyj poniższej komendy, aby pobrać ją bezpośrednio.
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

Pobierze to plik `.tar.gz` do aktualnego katalogu, czyli do nowo utworzonego folderu `RageMP-Server`. Rozpakuj pliki poleceniem:
```
tar -xvzf linux_x64.tar.gz
```

Pliki powinny być teraz dostępne w folderze **ragemp-srv**. Wejdź do niego komendą `cd ragemp-srv`. W każdej chwili możesz użyć `ls`, aby zobaczyć zawartość folderu. Serwer jest gotowy, przejdź do konfiguracji.

## Konfiguracja

Na tym etapie masz już podstawową instalację serwera RageMP. Dalszą konfigurację wykonasz w pliku konfiguracyjnym znajdującym się w katalogu serwera.

:::tip
Może być konieczne uruchomienie serwera przynajmniej raz, aby pliki konfiguracyjne zostały utworzone. Zrób to, uruchamiając plik shell: `/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`. Następnie zamknij serwer kombinacją `CTRL+C`.
:::

Podstawowe parametry konfiguracyjne edytuj w pliku **conf.json**:
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## Uruchamianie i łączenie się z serwerem

Teraz czas na start serwera. Przejdź do głównego katalogu gry i uruchom plik shell **ragemp-server**.
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

W terminalu powinny pojawić się logi, w tym sieciowe, co oznacza, że serwer wystartował poprawnie. Jeśli wszystko pójdzie zgodnie z planem, serwer będzie dostępny przez direct connect i widoczny na liście serwerów. Możesz też połączyć się bezpośrednio pod adresem: `[twoj_adres_ip]:22005`.

## Podsumowanie

Gratulacje! Pomyślnie zainstalowałeś i skonfigurowałeś serwer RageMP na swoim serwerze dedykowanym! Kolejnym krokiem polecamy nasz [poradnik Setup Linux Service](dedicated-linux-create-gameservice.md), który pokaże Ci, jak ustawić serwer gier jako usługę systemową. Dzięki temu serwer będzie się automatycznie uruchamiał przy starcie, aktualizował, a Ty zyskasz łatwy dostęp do logów i zarządzania!

Jeśli masz pytania lub problemy, nasz support jest do Twojej dyspozycji każdego dnia!

<InlineVoucher />