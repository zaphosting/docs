---
id: vserver-linux-password-change
title: "VPS: Zmień hasło root na serwerze Linux"
description: "Dowiedz się, jak bezpiecznie zmienić i zarządzać hasłem serwera przez interfejs webowy lub konsolę, aby zwiększyć kontrolę dostępu → Sprawdź teraz"
sidebar_label: Zmień hasło
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Interfejs webowy

Hasło można zmienić przez nasz interfejs webowy. Otwórz stronę „Dostęp i bezpieczeństwo”, którą znajdziesz po lewej stronie nawigacji.

![](https://screensaver01.zap-hosting.com/index.php/s/9nMFt4ZAGmQEHnZ/preview)

Pole hasła root znajduje się tam, gdzie możesz ustawić nowe hasło.

:::info
Pamiętaj, że hasło musi mieć co najmniej 8 znaków i zawierać wielkie i małe litery (a-z/A-Z), cyfry (1-9) oraz znaki specjalne (!@=#$%&-?_;:.,). Jeśli te warunki nie zostaną spełnione, hasło nie zostanie zastosowane na serwerze.
:::

Po wpisaniu hasła pojawi się okienko potwierdzenia, które zatwierdź klikając „ok”.

![](https://screensaver01.zap-hosting.com/index.php/s/sybJP9oeJKY2SLr/preview)

Jeśli wszystkie warunki zostaną spełnione, system potwierdzi, że hasło zostało pomyślnie zmienione.

✅ Hasło zostało teraz zmienione.

Od teraz hasło można zobaczyć w naszym interfejsie webowym przez 3 godziny. Po tym czasie zostanie usunięte ze względów bezpieczeństwa. Aby zobaczyć hasło, kliknij ikonę oka przy polu „Hasło”.

![](https://screensaver01.zap-hosting.com/index.php/s/rFKrYA6en8Z9ypz/preview)

Pojawi się wtedy okienko z wyświetlonym hasłem.

## Konsola serwera

Hasło można też zmienić przez Konsolę serwera, niezależnie czy korzystasz z Putty czy konsoli szeregowej.

:::info
Ważne: Ta opcja jest dostępna tylko, jeśli nadal masz dostęp do serwera.
:::

Po zalogowaniu do konsoli możesz zmienić hasło poleceniem „passwd”. Następnie musisz wpisać nowe hasło jeszcze raz, aby je potwierdzić. Jeśli hasła się zgadzają, konsola potwierdzi zmianę.

Jeśli oba hasła nie będą takie same, konsola przerwie operację. W takim wypadku musisz ponownie wywołać polecenie „passwd”.

:::info
Ważne: Jeśli zmienisz hasło przez Konsolę, nie będzie ono widoczne przez 3 godziny w naszym interfejsie webowym w zakładce Dostęp i bezpieczeństwo.
:::

<InlineVoucher />