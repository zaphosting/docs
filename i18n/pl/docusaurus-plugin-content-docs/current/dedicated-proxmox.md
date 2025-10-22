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

Proxmox Virtual Environment to kompletna, open-source’owa platforma do zarządzania serwerami dla wirtualizacji korporacyjnej. Ściśle integruje hypervisor KVM oraz Linux Containers (LXC), funkcje definiowanego programowo storage i sieci, wszystko na jednej platformie. Dzięki zintegrowanemu webowemu interfejsowi możesz łatwo zarządzać maszynami wirtualnymi i kontenerami, wysoką dostępnością dla klastrów oraz narzędziami do odzyskiwania po awarii.

<InlineVoucher />

## Przygotowanie

Na początek musisz zamontować i uruchomić instalator Proxmox VE (Virtual Environment) z pliku ISO na swoim serwerze dedykowanym. Masz dwie opcje: łatwiejszą przez webowy panel serwera dedykowanego lub bardziej czasochłonną, ręczną przez panel iLO serwera.



### Montowanie ISO przez webowy panel
Przejdź do sekcji **Initial Installation** w panelu webowym swojego serwera dedykowanego. Najpierw kliknij zielony przycisk **enable iLO**. Poczekaj chwilę, aż sekcje się odblokują. Może być potrzebne odświeżenie strony, by wszystko się poprawnie załadowało.

![](https://github.com/zaphosting/docs/assets/42719082/b457f17a-0bc6-42db-91ec-a553fd456936)

Następnie wybierz z listy rozwijanej ISO **Proxmox VE**. Zalecamy użycie najnowszej wersji, by być na bieżąco z aktualizacjami. Teraz kliknij zielony przycisk **Insert**.

![](https://github.com/zaphosting/docs/assets/42719082/2b0baf71-d683-46ad-a34a-bfda9d71939d)

Na koniec musisz zrestartować serwer dedykowany, aby móc bootować z ISO. Zrobisz to przez przycisk restartu pod krokiem 3.



### Montowanie ISO przez iLO
Przygotuj plik ISO Proxmox VE, pobierając go ze strony [Proxmox download site](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso). Następnie załaduj i zamontuj go na swoim serwerze dedykowanym, korzystając z poradników [iLO](dedicated-ilo.md) oraz [Own ISO](dedicated-iso.md), które pokazują, jak się zalogować i przesłać własne ISO.



## Konfiguracja i ustawienia

:::important
Upewnij się, że po zaimportowaniu i zamontowaniu nowego ISO zrestartowałeś serwer, zanim przejdziesz dalej.
:::

Mając zamontowane ISO, musisz z niego uruchomić system. Zrobisz to przez **HTML5 remote console** w panelu iLO. W webowym panelu kliknij link **Open here** pod `iLO web access`, który przeniesie Cię do panelu iLO. Zaloguj się używając podanych danych.

:::note
Twoja przeglądarka może wyświetlić ostrzeżenie o ryzyku bezpieczeństwa — zignoruj je i zaakceptuj, by kontynuować.
:::

Po zalogowaniu, w sekcji **Overview** znajdź i kliknij link **HTML5** pod `Integrated Remote Console`. Otworzy się nakładka panelu.

![](https://github.com/zaphosting/docs/assets/42719082/3b9ce97e-f974-439b-8e57-ced05f248ef9)

Powinieneś zobaczyć ekran instalacji Proxmox. Poruszaj się za pomocą `strzałek`, `enter` i `esc`. Zalecamy wybrać wersję **Graficzną** Proxmox, bo ten poradnik będzie ją opisywał.

![](https://github.com/zaphosting/docs/assets/42719082/614218f2-df12-43ad-95fe-39026b900141)

Poczekaj chwilę, aż instalacja się rozpocznie. Zaakceptuj EULA Proxmox przyciskiem **I agree** w prawym dolnym rogu. Na kolejnej stronie wybierz dysk docelowy dla środowiska. Jeśli masz jeden dysk, domyślne ustawienia są już dopasowane, więc po prostu kliknij **Next**.

![](https://github.com/zaphosting/docs/assets/42719082/090c1f2e-20fe-48f3-b4b4-070c197f4825)

:::note
Jeśli chcesz skonfigurować RAID (niektóre serwery dedykowane mają dwa dyski), użyj przycisku **Options**, by wybrać tryb `RAID`. Polecamy `RAID1`, który mirroruje oba dyski.

![](https://github.com/zaphosting/docs/assets/42719082/44e3b6ba-07f3-4313-8d36-b185a6da8089)
:::

W kolejnej sekcji ustaw język i układ klawiatury — powinny zostać wykryte automatycznie. Wypełnij i przejdź dalej.

![](https://github.com/zaphosting/docs/assets/42719082/931e066c-9868-48d9-a638-f07c932579d2)

Teraz ustaw silne hasło i adres e-mail. E-mail będzie używany przez panel do wysyłania ważnych alertów i powiadomień.

:::important
Zapamiętaj hasło, bo będziesz go potrzebować przy pierwszym logowaniu do panelu po instalacji!
:::

![](https://github.com/zaphosting/docs/assets/42719082/617a504c-9520-4b89-93c3-81fba06e5fdc)

Ostatni krok to konfiguracja sieci. Wybierz dostępną kartę zarządzającą i nazwę hosta dla serwera.

![](https://github.com/zaphosting/docs/assets/42719082/d694a5af-20e2-4c1b-9cdb-c1a8ca684cde)

Teraz przejdź do sekcji **IP-Addresses** w panelu webowym serwera dedykowanego, aby znaleźć dostępny adres IP.

![](https://github.com/zaphosting/docs/assets/42719082/e358f264-8535-4280-a1c5-0a15f4b99ed9)

Wybierz adres IP, którego chcesz użyć dla panelu Proxmox. W instalatorze wpisz adres IP, maskę sieci i bramę, korzystając z danych z panelu. Jako serwer DNS wpisz `8.8.8.8` — to publiczny DNS Google.

Po uzupełnieniu kliknij **Next** i sprawdź podsumowanie ustawień. Jeśli wszystko się zgadza, kliknij **Install**, aby kontynuować!

## Dostęp do panelu
Po zakończeniu instalacji i restarcie systemu wybierz w menu opcję **Proxmox Environment GNU/Linux** i naciśnij **Enter**. Po załadowaniu zobaczysz powitalny komunikat Proxmox w konsoli z adresem IP i linkiem do panelu, który podałeś wcześniej. Wejdź na ten adres w przeglądarce.

:::note
Przeglądarka może ponownie wyświetlić ostrzeżenie o ryzyku bezpieczeństwa — zignoruj je i zaakceptuj, by kontynuować.
:::

Jeśli link nie działa, prawdopodobnie popełniłeś błąd w konfiguracji, najpewniej w ustawieniach sieci.

Po wejściu do panelu zaloguj się używając nazwy użytkownika `root` i hasła ustawionego podczas instalacji. Upewnij się, że **Realm** jest ustawione na `Linux PAM standard authentication`.

![](https://github.com/zaphosting/docs/assets/42719082/4072c2ac-6f5c-4350-a5df-0635b1f433c0)

Po zalogowaniu możesz zignorować komunikat o subskrypcji, klikając **OK**. I tak oto pomyślnie zainstalowałeś Proxmox VE na swoim serwerze dedykowanym i zalogowałeś się do panelu!



## Stwórz swoją pierwszą maszynę wirtualną
Ta sekcja pokaże Ci podstawowe kroki, jak stworzyć pierwszą maszynę wirtualną (VM) przez panel Proxmox. Przejdź do `local (panel)` i wybierz sekcję **ISO Images**. Możesz tu ręcznie przesłać plik `.iso` lub pozwolić Proxmox pobrać go, podając bezpośredni URL do pliku ISO.

![](https://github.com/zaphosting/docs/assets/42719082/8182bd73-690f-434f-8394-5fdca6889a74)

Gdy to zrobisz, kliknij w prawym górnym rogu przycisk **Create VM**. Otworzy się nowe menu z wieloma opcjami.

Najpierw skonfiguruj ogólne ustawienia. Domyślnie `Node` będzie ustawiony na domyślny (tu: `panel`). Musisz podać unikalne ID VM, domyślnie `100` lub kolejne, jeśli masz już inne VM. Dodaj nazwę dla swojej VM — może być dowolna.

![](https://github.com/zaphosting/docs/assets/42719082/bcd2eb41-a8fc-4a44-9abb-072f9e408d10)

Przejdź do sekcji ustawień OS. Wybierz ISO, które przesłałeś wcześniej. Ustaw też typ i wersję systemu operacyjnego.

![](https://github.com/zaphosting/docs/assets/42719082/05d51c46-5a69-4cd7-b2e6-c3472437caf9)

Zalecamy pozostawić domyślne ustawienia w sekcji System. W sekcji Dysk określ rozmiar dysku dla VM. Możesz też wybrać pulę storage, domyślnie będzie to `local-lvm`. Reszta ustawień powinna działać dobrze domyślnie.

![](https://github.com/zaphosting/docs/assets/42719082/26f11d42-8884-4bb5-b0fe-d7b4df7885a5)

Następnie w sekcji CPU możesz ustawić liczbę socketów i rdzeni CPU, które VM ma używać. Skonfiguruj to według potrzeb.

![](https://github.com/zaphosting/docs/assets/42719082/91103b8d-dadc-4305-a3fe-bf4c8f96fc27)

Podobnie w sekcji Pamięć możesz określić, ile pamięci RAM chcesz przydzielić VM i ustawić stan ballooningu.

![](https://github.com/zaphosting/docs/assets/42719082/ac0048cb-0bd4-4791-9a9f-857e5037955d)

Zalecamy pozostawić domyślne ustawienia w sekcji Sieć, bo są odpowiednio skonfigurowane na start. Na koniec sprawdź wszystkie ustawienia VM. Polecamy zaznaczyć opcję `Start after created`, aby VM uruchamiała się automatycznie po stworzeniu. Jeśli wszystko się zgadza, kliknij **Finish**.

![](https://github.com/zaphosting/docs/assets/42719082/d14a8b3d-e9bb-4feb-8049-428e84c1e917)

I tak właśnie stworzyłeś swoją pierwszą VM w panelu Proxmox! Powinna być widoczna w widoku serwera po lewej stronie panelu.





## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś Proxmox na swoim serwerze dedykowanym. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />