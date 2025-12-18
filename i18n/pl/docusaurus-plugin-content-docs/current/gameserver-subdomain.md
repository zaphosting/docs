---
id: gameserver-subdomain
title: 'Serwer gier: Subdomena ZAP'
description: "Dowiedz się, jak skonfigurować i zarządzać subdomenami serwera gier dla lepszej dostępności i personalizacji → Sprawdź teraz"
sidebar_label: Subdomena Serwera Gier
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Nasze serwery gier teraz mają możliwość łatwego i szybkiego ustawienia subdomen dla Twojego serwera. W tym poradniku poznasz, jak korzystać z funkcji DNS Subdomeny dla swojego serwera, aby wygenerować subdomenę ZAP Cloud lub ustawić własną domenę do użytku.

<YouTube videoId="1fFagkzOvfo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/bbTYcXxCWXEYNrQ/preview" title="Domena ZAP Cloud dla serwerów gier" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko Ci wyjaśni. Niezależnie czy się spieszysz, czy po prostu wolisz chłonąć info w najbardziej angażujący sposób!"/>

![](https://screensaver01.zap-hosting.com/index.php/s/yJTBQ7oC926LfbT/preview)

<InlineVoucher />

## Dostępność

Funkcja subdomeny jest dostępna zarówno dla nowych, jak i obecnych klientów. Nowi klienci otrzymają automatycznie subdomenę `xxx`**.zap.cloud** podczas procesu instalacji. Obecni klienci muszą ją włączyć ręcznie w sekcji **Ustawienia->Ustawienia DNS** w panelu webowym serwera gier. Korzystanie z tej sekcji omówimy w kolejnej części.

Nie wszystkie gry są obecnie wspierane, ale cieszymy się, że funkcja jest już aktywna dla wielu popularnych tytułów, w tym FiveM, Minecraft i innych! W dłuższej perspektywie planujemy rozszerzyć tę funkcję na jak najwięcej gier. Niestety, niektóre gry technicznie uniemożliwiają dodanie tej opcji, więc dla nich w panelu webowym zobaczysz standardowo adres IP.

:::tip
Jeśli gra, którą masz zainstalowaną, nie jest obecnie wspierana, śmiało skontaktuj się z [naszym Supportem](https://zap-hosting.com/en/customer/support/), a sprawdzimy, czy możemy to dodać :)
:::

## Zarządzanie subdomenami (DNS)

Zarządzanie funkcją subdomeny na Twoim serwerze gier jest proste. Przejdź do sekcji **Ustawienia->Ustawienia DNS**, aby zacząć.

Na tej stronie możesz wykonywać różne zadania związane z darmową subdomeną ZAP Cloud oraz korzystaniem z własnych domen, które masz przypisane do konta ZAP-Hosting.

![](https://screensaver01.zap-hosting.com/index.php/s/M6SMHKJcZ3GgXQd/preview)

:::info
Obecnie możesz mieć maksymalnie 3 aktywne subdomeny na produkt (nie licząc losowo generowanej subdomeny ZAP Cloud).
:::

### Losowa subdomena ZAP Cloud

Aby wygenerować losową subdomenę ZAP Cloud, użyj przycisku **Rozwiąż subdomeny** na tej stronie ustawień.

:::info
Obecni klienci powinni również użyć tego przycisku, aby po raz pierwszy wygenerować losową subdomenę ZAP Cloud.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Lc5CCQwMtCK63nx/preview)

### Własna subdomena ZAP Cloud

Masz możliwość stworzenia własnej subdomeny ZAP Cloud, wpisując wybraną subdomenę i wybierając **.zap.cloud** z rozwijanego menu (domyślna opcja).

:::note
Jeśli pojawi się błąd, możliwe, że subdomena jest już zajęta i/lub wpisałeś zabronione słowo lub znak, które są niedozwolone, aby chronić naszych klientów.
:::

Następnie kliknij **Utwórz wpis** i powinieneś zobaczyć subdomenę na liście. Może minąć kilka minut, zanim stanie się w pełni funkcjonalna.

![](https://screensaver01.zap-hosting.com/index.php/s/odqKSyzXRLi5zRx/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yWmt4j3nWEgbN6K/preview)

### Własna domena

:::info
Aby móc używać własnej domeny do tworzenia subdomen, upewnij się, że jest ona przypisana do Twojego konta ZAP-Hosting przez [zakup na naszej stronie](https://zap-hosting.com/en/shop/product/domain/) lub transfer domeny z innego dostawcy.
:::

Tworzenie subdomeny z własną domeną przebiega tak samo jak w przypadku własnej subdomeny ZAP Cloud. Wpisz subdomenę, którą chcesz użyć i wybierz swoją domenę z rozwijanego menu.

:::note
Jeśli pojawi się błąd, możliwe, że subdomena jest już zajęta i/lub wpisałeś zabronione słowo lub znak, które są niedozwolone, aby chronić naszych klientów.
:::

Kliknij **Utwórz wpis** i powinieneś zobaczyć subdomenę na liście. Może minąć kilka minut, zanim stanie się w pełni funkcjonalna.

![](https://screensaver01.zap-hosting.com/index.php/s/Xoe8c4T9TNpby27/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/AX9yFSb3nRNoKiF/preview)

## Rozwiązywanie problemów

### Subdomena ZAP Cloud

Jeśli masz problemy z subdomenami ZAP Cloud, możesz spróbować rozwiązać je samodzielnie, przechodząc do sekcji **Ustawienia->Ustawienia DNS** i używając przycisku **Rozwiąż subdomeny** na dole strony.

![](https://screensaver01.zap-hosting.com/index.php/s/Lc5CCQwMtCK63nx/preview)

Poczekaj kilka minut, zanim sprawdzisz ponownie, czy działają poprawnie.

### Własna domena

Jeśli nie widzisz swojej własnej domeny w rozwijanym menu podczas próby utworzenia subdomeny, prawdopodobnie nie jest ona przypisana do Twojego konta ZAP-Hosting.

Upewnij się, że domena jest aktywna na Twoim koncie ZAP-Hosting, co może wymagać transferu z innych dostawców.

Jeśli nadal masz problemy z funkcją subdomeny, skontaktuj się z naszym Supportem, [tworząc zgłoszenie na naszej stronie](https://zap-hosting.com/en/customer/support/), chętnie pomożemy.

<InlineVoucher />