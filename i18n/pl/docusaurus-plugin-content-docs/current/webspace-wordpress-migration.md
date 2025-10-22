---
id: webspace-wordpress-migration
title: "Hosting: Migracja Twojej strony WordPress do ZAP-Hosting"
description: "Dowiedz się, jak bezproblemowo przenieść swoją stronę WordPress na hosting ZAP-Hosting i wzmocnić swoją obecność w sieci → Sprawdź teraz"
sidebar_label: Migracja
services:
  - webspace
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Chcesz skorzystać z naszego potężnego hostingu i przenieść się do nas? Nie szukaj dalej! W tym poradniku pokażemy Ci, jak przenieść swoją stronę WordPress na hosting ZAP-Hosting za pomocą wtyczki WordPress.

<InlineVoucher />

## Przygotowanie

Zanim zaczniesz, upewnij się, że masz przygotowane:
- Domenę z dostępem administracyjnym do zarządzania ustawieniami DNS.
- Dostęp administratora do starej instancji WordPress.
- Własny produkt [Hosting](https://zap-hosting.com/en/shop/product/webspace/) u nas.

## Krok 1: Przygotowanie hostingu

Najpierw odwiedź naszą stronę produktu [Hosting](https://zap-hosting.com/en/shop/product/webspace/) i wybierz plan hostingu, który najlepiej pasuje do Twojej strony. Po skonfigurowaniu produktu musisz zainstalować na nim WordPress. Szczegółowe instrukcje znajdziesz w naszym dedykowanym [poradniku instalacji](webspace-wordpress.md).

Po zainstalowaniu WordPress na hostingu, musisz podpiąć do niego swoją domenę. Ponownie, zapoznaj się z naszym poradnikiem [Dodawanie domeny](webspace-adddomain.md), gdzie znajdziesz dokładne wskazówki.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa3mmmQtTybNgGj/preview)


## Krok 2: Konfiguracja wtyczki Migrate Guru

Aby zautomatyzować proces migracji, użyjemy darmowej i popularnej wtyczki WordPress **Migrate Guru**. Musisz ją zainstalować zarówno na nowej, jak i na starej instancji WordPress.

:::tip Logowanie do panelu admina
Aby zalogować się jako administrator na stronie WordPress, otwórz przeglądarkę i przejdź do swojej strony. Dodaj `/wp-admin` na końcu adresu URL (np. `[twoja_strona].com/wp-admin`). Zostaniesz przekierowany na stronę logowania WordPress, gdzie wpisz dane administratora starego hostingu.

![](https://screensaver01.zap-hosting.com/index.php/s/zwzRyGJwEJMNPGQ/preview)
:::

W panelu WordPress przejdź do kategorii **Wtyczki** po lewej stronie. Kliknij **Dodaj nową** i w polu wyszukiwania wpisz **Migrate Guru**.

Gdy pojawi się wynik, kliknij **Zainstaluj**, a potem **Aktywuj**. Zrób to na obu instancjach WordPress przed kontynuowaniem.

Po aktywacji pojawi się ekran z prośbą o podanie adresu e-mail i zaakceptowanie regulaminu – wypełnij to.

![](https://screensaver01.zap-hosting.com/index.php/s/SXYGfpWJTwNyYjJ/preview)

## Krok 3: Pobranie klucza migracji

Po zainstalowaniu Migrate Guru na obu instancjach, musisz pobrać **Klucz migracji** z **nowej** instancji WordPress na ZAP-Hosting.

Znajdziesz go w sekcji **Migrate Guru** po lewej stronie panelu WordPress. Skopiuj ten klucz – będzie potrzebny w kolejnym kroku.

![](https://screensaver01.zap-hosting.com/index.php/s/g3X9fMrqoWyfwtN/preview)

:::tip Przygotuj kopię zapasową
Dla bezpieczeństwa zalecamy wykonanie kopii zapasowej starej instancji WordPress przed rozpoczęciem migracji przez wtyczkę. Proces nie powoduje utraty danych, ale lepiej dmuchać na zimne.
:::

## Krok 4: Proces migracji

Wróć do panelu admina swojej **starej** instancji WordPress. W sekcji **Migrate Guru** kliknij przycisk **Migrate** i wybierz z listy **Other Hosts**.

![](https://screensaver01.zap-hosting.com/index.php/s/x6ctdxnL2mdpTt5/preview)

Wklej klucz migracji, który skopiowałeś z nowej instancji WordPress ZAP-Hosting i kliknij **Migrate**, aby rozpocząć proces.

:::warning
Upewnij się, że kopiujesz Klucz migracji z **nowego** panelu admina WordPress ZAP-Hosting i wklejasz go do **starego** panelu WordPress. Odwrotne działanie spowoduje nadpisanie danych.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/7nEr2L48PKCDXrj/preview)

Po kliknięciu **Migrate** proces migracji rozpocznie się natychmiast po kilku weryfikacjach.

Migracja działa w tle bez przestojów i powinna zakończyć się w kilka minut. Cierpliwości – czas zależy od rozmiaru Twojej strony. Po zakończeniu zobaczysz ekran potwierdzający sukces.

![](https://screensaver01.zap-hosting.com/index.php/s/YHSAwLkCjWBHsHT/preview)

:::tip
Zalecamy dokładne przetestowanie strony na nowej instancji WordPress, aby upewnić się, że migracja przebiegła pomyślnie.
:::

## Krok 5: Aktualizacja ustawień DNS domeny

Po migracji ostatnim krokiem jest aktualizacja ustawień DNS domeny, aby skonfigurować ją pod nowy hosting. Musisz zmienić ustawienia DNS domeny i ustawić adres IP hostingu ZAP-Hosting, aby Twoja strona WordPress była serwowana z naszego serwera.

Aby poznać adres IP hostingu, zaloguj się do panelu webowego swojego hostingu na stronie ZAP-Hosting i przejdź do sekcji **DNS**. Znajdziesz tam adres IP hostingu.

![](https://screensaver01.zap-hosting.com/index.php/s/pd8iQdXsd8Kaobd/preview)

Mając adres IP, jeśli domena nie jest w Twoim koncie ZAP-Hosting, zaloguj się na stronie swojego dostawcy domeny.

Znajdź sekcję **Ustawienia DNS** lub podobną. Musisz zamienić istniejący **rekord A**, który wskazuje na starego dostawcę hostingu, na adres IP Twojego hostingu ZAP. 

Zrób to dla wszystkich rekordów A wskazujących na starą instancję. Po zmianie domena będzie działać z Twoją stroną WordPress na ZAP-Hosting.

:::info
Pamiętaj, że zmiany w rekordach DNS mogą się propagować do 24 godzin. Zazwyczaj dzieje się to szybciej, ale czasem może potrwać dłużej.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/P93CG3MLJc2DL3i/preview)

## Krok 6: Konfiguracja certyfikatu SSL

Na koniec zalecamy ustawienie nowego certyfikatu SSL dla Twojej strony na hostingu ZAP-Hosting. Domyślnie, po dodaniu domeny do hostingu, połączenie pozostaje niezaszyfrowane.

Szczegółowe instrukcje znajdziesz w naszym poradniku [Tworzenie certyfikatu SSL](webspace-plesk-ssl.md).

## Podsumowanie

Dzięki temu poradnikowi powinieneś bez problemu przenieść swoją starą stronę WordPress na nowy hosting ZAP-Hosting. Zalecamy dokładne przetestowanie wszystkiego, aby mieć pewność, że migracja przebiegła pomyślnie.

<InlineVoucher />