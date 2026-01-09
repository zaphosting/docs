---
id: dedicated-proxmox
title: "Serwer dedykowany: Instalacja Proxmox VE"
description: "Dowiedz się, jak skonfigurować i zarządzać Proxmox VE do wirtualizacji korporacyjnej z zintegrowanymi narzędziami i wysoką dostępnością → Sprawdź teraz"
sidebar_label: Instalacja Proxmox
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Proxmox Virtual Environment to kompletna, open-source’owa platforma do zarządzania serwerami dla wirtualizacji korporacyjnej. Ściśle integruje hypervisor KVM oraz Linux Containers (LXC), funkcje software-defined storage i sieci na jednej platformie. Dzięki zintegrowanemu, webowemu interfejsowi możesz łatwo zarządzać maszynami wirtualnymi i kontenerami, wysoką dostępnością klastrów oraz narzędziami do odzyskiwania po awarii.



## Przygotowanie

Na start musisz zamontować i uruchomić instalator Proxmox VE (Virtual Environment) z pliku ISO na swoim serwerze dedykowanym. Masz dwie opcje: łatwiejszą przez webowy panel serwera dedykowanego lub bardziej czasochłonną, ręczną przez panel iLO serwera.



### Montowanie ISO przez panel webowy
Przejdź do sekcji **Initial Installation** w panelu webowym swojego serwera dedykowanego. Najpierw kliknij zielony przycisk **enable iLO**. Poczekaj chwilę, aż sekcje się odblokują. Może być potrzebne odświeżenie strony, żeby wszystko się wczytało.

![](https://screensaver01.zap-hosting.com/index.php/s/r6XNqDqQeEec7wW/preview)

Następnie wybierz z listy rozwijanej ISO **Proxmox VE**. Polecamy najnowszą wersję, żeby być na bieżąco z aktualizacjami. Teraz kliknij zielony przycisk **Insert**.

![](https://screensaver01.zap-hosting.com/index.php/s/xXfWzqtE6JMG9Ka/preview)

Na koniec musisz zrestartować serwer dedykowany, żeby uruchomić go z ISO. Zrobisz to przez przycisk restartu pod krokiem 3.



### Montowanie ISO przez iLO
Pobierz ISO Proxmox VE ze strony [Proxmox download site](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso). Następnie załaduj i zamontuj je na serwerze dedykowanym, korzystając z poradników [iLO](dedicated-ilo.md) oraz [Own ISO](dedicated-iso.md), które pokazują jak się zalogować i przesłać własne ISO.



## Konfiguracja i ustawienia

:::important
Upewnij się, że zrestartowałeś serwer po zaimportowaniu i zamontowaniu nowego ISO, zanim przejdziesz dalej.
:::

Mając zamontowane ISO, musisz z niego uruchomić serwer. Zrobisz to przez **HTML5 remote console** w panelu iLO. W panelu webowym kliknij link **Open here** pod `iLO web access`, który przeniesie Cię do panelu iLO. Zaloguj się danymi, które otrzymałeś.

:::note
Przeglądarka może wyświetlić ostrzeżenie o ryzyku bezpieczeństwa — zignoruj je i zaakceptuj, żeby kontynuować.
:::

Po zalogowaniu, w sekcji **Overview** znajdź i kliknij link **HTML5** pod `Integrated Remote Console`. Otworzy się nakładka panelu.

![](https://screensaver01.zap-hosting.com/index.php/s/HPWJ3oksyo3SdW6/preview)

Powinieneś zobaczyć ekran instalacji Proxmox. Poruszaj się za pomocą `strzałek`, `enter` i `esc`. Polecamy wybrać wersję **Graficzną** Proxmox, bo ten poradnik będzie ją opisywał.

![](https://screensaver01.zap-hosting.com/index.php/s/MGqm3EAxYc8EBQw/preview)

Poczekaj chwilę, aż instalacja ruszy dalej. Zaakceptuj EULA Proxmox przyciskiem **I agree** w prawym dolnym rogu. Na kolejnej stronie wybierz dysk docelowy dla środowiska. Jeśli masz jeden dysk, domyślne ustawienia są już dopasowane, więc po prostu kliknij **Next**.

![](https://screensaver01.zap-hosting.com/index.php/s/pZ8FiFJT6tJKFsS/preview)

:::note
Jeśli chcesz ustawić RAID (niektóre serwery dedykowane mają dwa dyski), kliknij **Options** i wybierz tryb `RAID`. Polecamy `RAID1`, który mirroruje oba dyski.

![](https://screensaver01.zap-hosting.com/index.php/s/WqiYPowiLttzoeZ/preview)
:::

W kolejnej sekcji wybierz język i układ klawiatury — powinno się wykryć automatycznie. Wypełnij i przejdź dalej.

![](https://screensaver01.zap-hosting.com/index.php/s/As4J4NzytcZFrHp/preview)

Teraz ustaw silne hasło i adres e-mail. E-mail będzie używany przez panel do wysyłania ważnych alertów i powiadomień.

:::important
Zapamiętaj hasło, bo będziesz go potrzebować przy pierwszym logowaniu do panelu po instalacji!
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QAEaygacSXNfgot/preview)

Ostatni krok to konfiguracja sieci. Wybierz dostępną kartę zarządzającą i nazwę hosta dla serwera.

![](https://screensaver01.zap-hosting.com/index.php/s/EZDzsaq4aXpP4we/preview)

Przejdź teraz do sekcji **IP-Addresses** w panelu webowym serwera dedykowanego, żeby znaleźć wolny adres IP.

![](https://screensaver01.zap-hosting.com/index.php/s/KQC4DLj6LxTX4io/preview)

Wybierz adres IP, którego chcesz użyć dla panelu Proxmox. W instalatorze wpisz adres IP, maskę sieci i bramę, korzystając z danych z panelu webowego. Jako serwer DNS wpisz `8.8.8.8` — to publiczny DNS Google.

Po uzupełnieniu kliknij **Next** i sprawdź podsumowanie ustawień. Jeśli wszystko się zgadza, kliknij **Install**, żeby kontynuować!

## Dostęp do panelu
Po zakończeniu instalacji i restarcie systemu wybierz w menu opcję **Proxmox Environment GNU/Linux** i naciśnij **Enter**. Po załadowaniu zobaczysz powitalny komunikat Proxmox w konsoli z adresem IP i linkiem do panelu, który podałeś wcześniej. Wejdź na ten adres w przeglądarce.

:::note
Przeglądarka może ponownie wyświetlić ostrzeżenie o ryzyku bezpieczeństwa — zignoruj je i zaakceptuj, żeby wejść dalej.
:::

Jeśli link nie działa, prawdopodobnie coś poszło nie tak z konfiguracją sieci podczas instalacji.

Na panelu zaloguj się użytkownikiem `root` i hasłem, które ustawiłeś podczas instalacji. Upewnij się, że **Realm** jest ustawione na `Linux PAM standard authentication`.

![](https://screensaver01.zap-hosting.com/index.php/s/iKcErA9Bx5LpB3n/preview)

Po zalogowaniu możesz zignorować komunikat o subskrypcji, klikając **OK**. I tak oto masz Proxmox VE zainstalowany na swoim serwerze dedykowanym i dostęp do panelu!



## Stwórz swoją pierwszą maszynę wirtualną
Ta sekcja pokaże Ci podstawowe kroki, jak stworzyć pierwszą maszynę wirtualną (VM) przez panel Proxmox. Przejdź do `local (panel)` i wybierz sekcję **ISO Images**. Możesz tu ręcznie wgrać plik `.iso` lub podać bezpośredni URL do pobrania ISO przez Proxmox.

![](https://screensaver01.zap-hosting.com/index.php/s/GJjxxkPAkiRM7Fw/preview)

Gdy to zrobisz, kliknij w prawym górnym rogu **Create VM**. Otworzy się nowe menu z wieloma opcjami.

Na początek skonfiguruj ogólne ustawienia. Domyślnie `Node` będzie ustawiony na domyślny (tu: `panel`). Podaj unikalne ID VM, domyślnie `100` lub wyższe, jeśli masz już VM. Dodaj nazwę dla VM — może być dowolna.

![](https://screensaver01.zap-hosting.com/index.php/s/6LmXZ26bnNY46yS/preview)

Przejdź do sekcji ustawień OS. Wybierz ISO, które wcześniej wgrałeś. Ustaw też typ i wersję systemu operacyjnego.

![](https://screensaver01.zap-hosting.com/index.php/s/QWjGQ7grR8ttaqZ/preview)

Polecamy zostawić domyślne ustawienia w sekcji System. W sekcji Dysk określ rozmiar dysku dla VM i wybierz pulę storage, domyślnie `local-lvm`. Reszta ustawień domyślnych powinna działać dobrze.

![](https://screensaver01.zap-hosting.com/index.php/s/2XJyydoZwaEMDeZ/preview)

W sekcji CPU możesz ustawić liczbę socketów i rdzeni CPU dla VM według potrzeb.

![](https://screensaver01.zap-hosting.com/index.php/s/RrWWT2wMRaQzde7/preview)

Podobnie w sekcji Pamięć RAM ustaw, ile pamięci chcesz przydzielić VM i wybierz stan ballooningu.

![](https://screensaver01.zap-hosting.com/index.php/s/DaXCsYLwWeMr9aJ/preview)

Sieć zostaw domyślnie, bo jest dobrze skonfigurowana na start. Na koniec sprawdź wszystkie ustawienia VM. Polecamy zaznaczyć opcję `Start after created`, żeby VM uruchamiała się automatycznie. Jeśli wszystko gra, kliknij **Finish**.

![](https://screensaver01.zap-hosting.com/index.php/s/EfNAZ4idcxizDsa/preview)

I gotowe! Stworzyłeś swoją pierwszą VM na panelu Proxmox! Powinna pojawić się w widoku serwera po lewej stronie panelu.





## Podsumowanie

Gratulacje, udało Ci się zainstalować Proxmox na serwerze dedykowanym. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂