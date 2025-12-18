---
id: dedicated-linux-password-change
title: "Serwer dedykowany: Zmień hasło root dla serwera Linux"
description: "Dowiedz się, jak bezpiecznie zmienić i zarządzać hasłem serwera przez interfejs webowy lub konsolę, aby lepiej kontrolować dostęp → Sprawdź teraz"
sidebar_label: Zmień hasło
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Interfejs webowy

Hasło można zmienić przez nasz interfejs webowy. Otwórz stronę „Dostęp i bezpieczeństwo”, którą znajdziesz po lewej stronie nawigacji.

![](https://screensaver01.zap-hosting.com/index.php/s/Kt3B9n4sGpbpn5q/preview)

Pole hasła root znajduje się tam, gdzie możesz ustawić nowe hasło.

:::info
Pamiętaj, że hasło musi mieć co najmniej 8 znaków i zawierać wielkie i małe litery (a-z/A-Z), cyfry (1-9) oraz znaki specjalne (!@=#$%&-?_;:.,). Jeśli te warunki nie są spełnione, hasło nie zostanie zastosowane na serwerze.
:::

Po wpisaniu hasła pojawi się okienko potwierdzenia, które zatwierdź przyciskiem „ok”.

![](https://screensaver01.zap-hosting.com/index.php/s/Ckc6PLB3tRY5epR/preview)

Jeśli wszystkie warunki zostaną spełnione, system potwierdzi, że hasło zostało pomyślnie zmienione.


✅ Hasło zostało zmienione.


Od teraz hasło można zobaczyć w naszym interfejsie webowym przez 3 godziny. Po tym czasie zostanie usunięte ze względów bezpieczeństwa. Aby wyświetlić hasło, kliknij ikonę oka przy polu „Hasło”.

![](https://screensaver01.zap-hosting.com/index.php/s/XfpFrGg5LyKEiRL/preview)

Pojawi się wtedy okienko z wyświetlonym hasłem.


## Konsola serwera

Hasło można też zmienić przez Konsolę serwera, niezależnie czy korzystasz z Putty czy Konsoli szeregowej.

:::info
Ważne: Ta opcja działa tylko, jeśli masz nadal dostęp do serwera.
:::

Po zalogowaniu się do konsoli, zmień hasło poleceniem „passwd”. Następnie wpisz nowe hasło ponownie, aby je potwierdzić. Jeśli oba hasła się zgadzają, konsola potwierdzi zmianę.


Jeśli hasła się nie zgadzają, konsola przerwie operację. W takim wypadku wpisz polecenie „passwd” jeszcze raz.

:::info
Ważne: Jeśli zmienisz hasło przez Konsolę, nie będzie ono widoczne przez 3 godziny w naszym interfejsie webowym w zakładce Dostęp i bezpieczeństwo.
:::


