---
id: redm-txadmin-discord-bot
title: "RedM: txAdmin Bot Discord"
description: "Skonfiguruj i zintegruj bota Discord z Twoim serwerem RedM txAdmin, aby usprawnić zarządzanie i komunikację → Dowiedz się więcej już teraz"
sidebar_label: Bot Discord txAdmin
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Wprowadzenie
Panel txAdmin oferuje mnóstwo funkcji dla Twojego serwera RedM, w tym integrację z botem Discord.
W tym poradniku pokażemy Ci, jak skonfigurować bota Discord i jak z niego korzystać.

<InlineVoucher />

## Przygotowanie

Aby skonfigurować bota Discord dla Twojego serwera txAdmin, najpierw musisz zalogować się do panelu txAdmin.
Dane logowania znajdziesz na stronie przeglądu serwera, tak jak na poniższym obrazku:

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

:::info

Ten poradnik wymaga, aby txAdmin był już skonfigurowany. Jeśli chcesz dowiedzieć się, jak to zrobić, zajrzyj do naszego [poradnika RedM: txAdmin Setup](redm-txadmin-setup.md).

:::

## Konfiguracja

### Tworzenie aplikacji Discord

Aby skonfigurować bota z txAdmin, musisz najpierw stworzyć aplikację Discord. Twój bot zostanie do niej przypisany i będzie działał pod jej nazwą. Aby utworzyć taką aplikację, wejdź na [Discord Developer Portal](https://discord.com/developers/applications/).

Teraz kliknij **New Application**, aby stworzyć nową aplikację i nadaj jej nazwę, jak na przykładzie poniżej:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Następnie kliknij **Create**, aby utworzyć aplikację. Zanotuj teraz ID aplikacji, będzie potrzebne w kolejnych krokach:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Konfiguracja bota i pobranie tokena

Podczas tworzenia aplikacji automatycznie powstaje też bot. Token bota możesz łatwo uzyskać, klikając **Reset Token**. Otrzymasz wtedy token użytkownika, który również powinieneś zapisać lub zanotować:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Nie udostępniaj tokena bota nikomu, aby Twój bot mógł działać bez zakłóceń i nie stanowił zagrożenia bezpieczeństwa. Token to jak tajny klucz i nie powinien być dzielony.
:::

Na tej samej stronie przewiń trochę w dół i włącz opcję "Server Members Intent", a następnie zapisz zmiany:

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### Zaproszenie bota na Twój Discord

Aby zaprosić bota, musisz wstawić wcześniej zanotowane ID klienta w poniższy link w odpowiednim miejscu, a następnie otworzyć go w przeglądarce i dodać bota do swojego serwera Discord. Powinno to wyglądać mniej więcej tak:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Pobieranie ID serwera i kanału

Aby bot działał poprawnie z txAdmin, musisz zdobyć ID serwera, na którym bot będzie działał.
Możesz to zrobić, klikając prawym przyciskiem myszy ikonę serwera w Discord i wybierając **Kopiuj ID serwera**. Zanotuj to ID.

Przykład, jak to powinno wyglądać:
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

Opcjonalnie możesz też ustawić kanał, na którym będą pojawiać się aktualizacje statusu, np. harmonogramy restartów. ID kanału kopiujesz tak samo, tylko klikając prawym przyciskiem na kanał.
Pamiętaj, że bot musi mieć uprawnienia do czytania i pisania na tym kanale.

:::info
Jeśli nie masz opcji kopiowania ID serwera lub kanału, musisz najpierw włączyć tryb deweloperski w ustawieniach użytkownika Discord:
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### Dostosowanie ustawień w txAdmin

Teraz możesz włączyć bota Discord w txAdmin i wpisać wszystkie wcześniej zapisane ID i tokeny:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### Opcjonalnie: Wysyłanie wiadomości statusu

Możesz opcjonalnie wysłać wiadomość statusu, która będzie na bieżąco aktualizować aktualny status serwera, graczy itd.
Aby to zrobić, wejdź na wybrany kanał Discord i wpisz `/status add`. Upewnij się, że bot ma uprawnienia do wysyłania wiadomości na tym kanale.

Powinna powstać wiadomość podobna do tej:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

Wszystko w tej wiadomości możesz dostosować na stronie ustawień Discord w txAdmin.

## Podsumowanie

Konfiguracja bota Discord dla txAdmin pozwala łatwo wyświetlać status Twojego serwera RedM i inne informacje na Twoim serwerze Discord. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />