---
id: vserver-linux-ragemp
title: "VPS: Konfiguracja dedykowanego serwera RageMP na Linux"
description: "Dowiedz się, jak skonfigurować dedykowany serwer RageMP na swoim VPS z Linuxem, aby cieszyć się płynną rozgrywką multiplayer → Sprawdź teraz"
sidebar_label: RageMP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS z Linuxem i chcesz zainstalować na nim dedykowany serwer RageMP? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze Linux. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwala na łatwe uruchamianie serwerów gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting, w zaledwie kilka kliknięć? Sprawdź więcej o [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](vserver-linux-ssh.md).

### Tworzenie użytkownika

Zdecydowanie polecamy utworzyć osobnego użytkownika do uruchamiania wszystkich usług dedykowanych serwerów gier. Praca na rootzie, jak to często bywa, nie jest zalecana z wielu powodów. Jeśli masz już gotowego użytkownika, przejdź do kroków instalacji.

Użyj poniższych komend, aby stworzyć użytkownika o nazwie `gameservers` z opcjonalnym hasłem według własnego wyboru.

```
sudo useradd -m gameservers
sudo passwd gameservers # Opcjonalne hasło
```

Gdy już zalogujesz się na serwer i masz gotowego użytkownika, przejdź do instalacji.

## Instalacja

Zaloguj się na użytkownika `gameservers` i przejdź do katalogu domowego `home/gameservers`, aby zachować porządek.
```
sudo -u gameservers -s
cd ~
```

Aby utrzymać porządek, utwórz nowy folder na serwer RageMP i do niego przejdź.
```
mkdir RageMP-Server && cd RageMP-Server
```

Teraz pobierz najnowszą wersję RageMP ze strony producenta. Użyj poniższej komendy, aby pobrać ją bezpośrednio.
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

Pobierze to plik `.tar.gz` do aktualnego katalogu, czyli do nowo utworzonego folderu `RageMP-Server`. Rozpakuj pliki poleceniem:
```
tar -xvzf linux_x64.tar.gz
```

Pliki powinny teraz znajdować się w folderze **ragemp-srv**. Wejdź do niego poleceniem `cd ragemp-srv`. W każdej chwili możesz użyć `ls`, aby zobaczyć zawartość folderu. Serwer jest gotowy, przejdź do kolejnej sekcji, aby skonfigurować parametry.

## Konfiguracja

Na tym etapie zakończyłeś podstawową konfigurację serwera RageMP. Możesz dalej dostosować ustawienia serwera poprzez plik konfiguracyjny znajdujący się w katalogu serwera.

:::tip
Może być konieczne uruchomienie serwera przynajmniej raz, aby pliki konfiguracyjne zostały utworzone. Zrób to, uruchamiając plik shell: `/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`. Następnie zamknij serwer kombinacją `CTRL+C`.
:::

Edytuj główne parametry konfiguracyjne, otwierając plik **conf.json**:
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## Uruchamianie i łączenie się z serwerem

Teraz czas na start serwera. Przejdź do głównego katalogu gry i uruchom plik shell **ragemp-server**.
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

W terminalu powinny pojawić się logi, w tym sieciowe, co oznacza, że serwer wystartował poprawnie. Jeśli wszystko pójdzie zgodnie z planem, serwer będzie dostępny przez direct connect i widoczny na liście serwerów. Alternatywnie możesz połączyć się bezpośrednio pod adresem: `[twoj_adres_ip]:22005`.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer RageMP na swoim VPS! Kolejnym krokiem polecamy zapoznanie się z naszym [poradnikiem Setup Linux Service](vserver-linux-create-gameservice.md), który pokazuje, jak uruchomić swój dedykowany serwer gier jako usługę systemową. To daje wiele korzyści, takich jak automatyczne uruchamianie serwera przy starcie VPS, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji każdego dnia!

<InlineVoucher />