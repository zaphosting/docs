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

![](https://github.com/zaphosting/docs/assets/42719082/b457f17a-0bc6-42db-91ec-a553fd456936)

Następnie wybierz z listy rozwijanej ISO **Proxmox VE**. Polecamy najnowszą wersję, żeby być na bieżąco z aktualizacjami. Teraz kliknij zielony przycisk **Insert**.

![](https://github.com/zaphosting/docs/assets/42719082/2b0baf71-d683-46ad-a34a-bfda9d71939d)

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

![](https://github.com/zaphosting/docs/assets/42719082/3b9ce97e-f974-439b-8e57-ced05f248ef9)

Powinieneś zobaczyć ekran instalacji Proxmox. Poruszaj się za pomocą `strzałek`, `enter` i `esc`. Polecamy wybrać wersję **Graficzną** Proxmox, bo ten poradnik będzie ją opisywał.

![](https://github.com/zaphosting/docs/assets/42719082/614218f2-df12-43ad-95fe-39026b900141)

Poczekaj chwilę, aż instalacja ruszy dalej. Zaakceptuj EULA Proxmox przyciskiem **I agree** w prawym dolnym rogu. Na kolejnej stronie wybierz dysk docelowy dla środowiska. Jeśli masz jeden dysk, domyślne ustawienia są już dopasowane, więc po prostu kliknij **Next**.

![](https://github.com/zaphosting/docs/assets/42719082/090c1f2e-20fe-48f3-b4b4-070c197f4825)

:::note
Jeśli chcesz ustawić RAID (niektóre serwery dedykowane mają dwa dyski), kliknij **Options** i wybierz tryb `RAID`. Polecamy `RAID1`, który mirroruje oba dyski.

![](https://github.com/zaphosting/docs/assets/42719082/44e3b6ba-07f3-4313-8d36-b185a6da8089)
:::

W kolejnej sekcji wybierz język i układ klawiatury — powinno się wykryć automatycznie. Wypełnij i przejdź dalej.

![](https://github.com/zaphosting/docs/assets/42719082/931e066c-9868-48d9-a638-f07c932579d2)

Teraz ustaw silne hasło i adres e-mail. E-mail będzie używany przez panel do wysyłania ważnych alertów i powiadomień.

:::important
Zapamiętaj hasło, bo będziesz go potrzebować przy pierwszym logowaniu do panelu po instalacji!
:::

![](https://github.com/zaphosting/docs/assets/42719082/617a504c-9520-4b89-93c3-81fba06e5fdc)

Ostatni krok to konfiguracja sieci. Wybierz dostępną kartę zarządzającą i nazwę hosta dla serwera.

![](https://github.com/zaphosting/docs/assets/42719082/d694a5af-20e2-4c1b-9cdb-c1a8ca684cde)

Przejdź teraz do sekcji **IP-Addresses** w panelu webowym serwera dedykowanego, żeby znaleźć wolny adres IP.

![](https://github.com/zaphosting/docs/assets/42719082/e358f264-8535-4280-a1c5-0a15f4b99ed9)

Wybierz adres IP, którego chcesz użyć dla panelu Proxmox. W instalatorze wpisz adres IP, maskę sieci i bramę, korzystając z danych z panelu webowego. Jako serwer DNS wpisz `8.8.8.8` — to publiczny DNS Google.

Po uzupełnieniu kliknij **Next** i sprawdź podsumowanie ustawień. Jeśli wszystko się zgadza, kliknij **Install**, żeby kontynuować!

## Dostęp do panelu
Po zakończeniu instalacji i restarcie systemu wybierz w menu opcję **Proxmox Environment GNU/Linux** i naciśnij **Enter**. Po załadowaniu zobaczysz powitalny komunikat Proxmox w konsoli z adresem IP i linkiem do panelu, który podałeś wcześniej. Wejdź na ten adres w przeglądarce.

:::note
Przeglądarka może ponownie wyświetlić ostrzeżenie o ryzyku bezpieczeństwa — zignoruj je i zaakceptuj, żeby wejść dalej.
:::

Jeśli link nie działa, prawdopodobnie coś poszło nie tak z konfiguracją sieci podczas instalacji.

Na panelu zaloguj się użytkownikiem `root` i hasłem, które ustawiłeś podczas instalacji. Upewnij się, że **Realm** jest ustawione na `Linux PAM standard authentication`.

![](https://github.com/zaphosting/docs/assets/42719082/4072c2ac-6f5c-4350-a5df-0635b1f433c0)

Po zalogowaniu możesz zignorować komunikat o subskrypcji, klikając **OK**. I tak oto masz Proxmox VE zainstalowany na swoim serwerze dedykowanym i dostęp do panelu!



## Stwórz swoją pierwszą maszynę wirtualną
Ta sekcja pokaże Ci podstawowe kroki, jak stworzyć pierwszą maszynę wirtualną (VM) przez panel Proxmox. Przejdź do `local (panel)` i wybierz sekcję **ISO Images**. Możesz tu ręcznie wgrać plik `.iso` lub podać bezpośredni URL do pobrania ISO przez Proxmox.

![](https://github.com/zaphosting/docs/assets/42719082/8182bd73-690f-434f-8394-5fdca6889a74)

Gdy to zrobisz, kliknij w prawym górnym rogu **Create VM**. Otworzy się nowe menu z wieloma opcjami.

Na początek skonfiguruj ogólne ustawienia. Domyślnie `Node` będzie ustawiony na domyślny (tu: `panel`). Podaj unikalne ID VM, domyślnie `100` lub wyższe, jeśli masz już VM. Dodaj nazwę dla VM — może być dowolna.

![](https://github.com/zaphosting/docs/assets/42719082/bcd2eb41-a8fc-4a44-9abb-072f9e408d10)

Przejdź do sekcji ustawień OS. Wybierz ISO, które wcześniej wgrałeś. Ustaw też typ i wersję systemu operacyjnego.

![](https://github.com/zaphosting/docs/assets/42719082/05d51c46-5a69-4cd7-b2e6-c3472437caf9)

Polecamy zostawić domyślne ustawienia w sekcji System. W sekcji Dysk określ rozmiar dysku dla VM i wybierz pulę storage, domyślnie `local-lvm`. Reszta ustawień domyślnych powinna działać dobrze.

![](https://github.com/zaphosting/docs/assets/42719082/26f11d42-8884-4bb5-b0fe-d7b4df7885a5)

W sekcji CPU możesz ustawić liczbę socketów i rdzeni CPU dla VM według potrzeb.

![](https://github.com/zaphosting/docs/assets/42719082/91103b8d-dadc-4305-a3fe-bf4c8f96fc27)

Podobnie w sekcji Pamięć RAM ustaw, ile pamięci chcesz przydzielić VM i wybierz stan ballooningu.

![](https://github.com/zaphosting/docs/assets/42719082/ac0048cb-0bd4-4791-9a9f-857e5037955d)

Sieć zostaw domyślnie, bo jest dobrze skonfigurowana na start. Na koniec sprawdź wszystkie ustawienia VM. Polecamy zaznaczyć opcję `Start after created`, żeby VM uruchamiała się automatycznie. Jeśli wszystko gra, kliknij **Finish**.

![](https://github.com/zaphosting/docs/assets/42719082/d14a8b3d-e9bb-4feb-8049-428e84c1e917)

I gotowe! Stworzyłeś swoją pierwszą VM na panelu Proxmox! Powinna pojawić się w widoku serwera po lewej stronie panelu.





## Podsumowanie

Gratulacje, udało Ci się zainstalować Proxmox na serwerze dedykowanym. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂