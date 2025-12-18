---
id: fivem-txadmin-discord-bot
title: "FiveM: txAdmin Discord Bot"
description: "Dowiedz się, jak zintegrować i używać bota Discord z Twoim serwerem txAdmin, aby lepiej zarządzać serwerem FiveM → Sprawdź teraz"
sidebar_label: txAdmin Discord Bot
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Wprowadzenie
Panel txAdmin oferuje mnóstwo funkcji dla Twojego serwera FiveM, w tym integrację z botem Discord.
W tym poradniku pokażemy Ci, jak skonfigurować bota Discord i jak go używać.

<InlineVoucher />

## Przygotowanie

Aby skonfigurować bota Discord dla Twojego serwera txAdmin, najpierw musisz zalogować się do panelu txAdmin.
Dane logowania znajdziesz na stronie przeglądu serwera, tak jak tutaj:

![img](https://screensaver01.zap-hosting.com/index.php/s/69LdTK3FyNZNXid/download)

:::info

Ten poradnik wymaga, aby txAdmin był już skonfigurowany. Jeśli chcesz się dowiedzieć, jak to zrobić, zajrzyj do naszego [FiveM: txAdmin Setup](fivem-txadmin-setup.md) poradnika.

:::

## Konfiguracja

### Tworzenie aplikacji Discord

Aby skonfigurować bota z txAdmin, musisz stworzyć aplikację Discord. Twój bot zostanie do niej przypisany i będzie działał pod jej nazwą. Aby utworzyć taką aplikację, wejdź na [Discord Developer Portal](https://discord.com/developers/applications/).

Teraz utworzysz nową aplikację, klikając **New Application**, a następnie nadaj jej nazwę, jak na obrazku poniżej:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Następnie kliknij **Create**, aby utworzyć aplikację. Na kolejnych krokach zanotuj sobie ID aplikacji:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Konfiguracja bota i pobranie tokena

Podczas tworzenia aplikacji automatycznie powstaje też bot. Token bota możesz łatwo uzyskać, klikając **Reset Token**. Otrzymasz wtedy token użytkownika, który również powinieneś zapisać lub zanotować:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Nie udostępniaj tokena bota nikomu, aby Twój bot mógł działać bez zakłóceń i nie stanowił zagrożenia bezpieczeństwa. Token to jak tajny klucz i nie powinien być dzielony.
:::

Na tej samej stronie przewiń trochę w dół i włącz opcję "Server Members Intent", a następnie zapisz zmiany:

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### Zaproszenie bota na Discord

Aby zaprosić bota, musisz wstawić wcześniej zanotowane client ID w poniższy link w odpowiednie miejsce, a następnie otworzyć go w przeglądarce i dodać bota do swojego serwera Discord. Powinno to wyglądać mniej więcej tak:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Pobranie ID serwera i kanału

Aby poprawnie używać bota z txAdmin, musisz zdobyć ID serwera, na którym bot będzie działał.
Możesz to zrobić, klikając prawym przyciskiem myszy ikonę serwera w Discord i wybierając **Kopiuj ID serwera**. Zanotuj to ID.

Przykład wygląda tak:
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

Opcjonalnie możesz też ustawić kanał, na którym będą pojawiać się aktualizacje statusu, np. harmonogramy restartów. ID kanału kopiujesz tak samo, tylko klikając prawym przyciskiem na kanał.
Pamiętaj, że bot musi mieć uprawnienia do czytania i pisania na tym kanale.

:::info
Jeśli nie masz opcji kopiowania ID serwera lub kanału, musisz najpierw włączyć tryb deweloperski w ustawieniach użytkownika Discord:
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### Dostosowanie ustawień w txAdmin

Teraz możesz włączyć bota Discord w txAdmin i wprowadzić wszystkie wcześniej zapisane ID i tokeny:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### Opcjonalnie: Wysyłanie wiadomości statusu

Możesz opcjonalnie wysłać wiadomość statusu, która będzie na bieżąco aktualizować aktualny stan serwera, graczy itd.
Aby to zrobić, kliknij na kanał Discord, na którym chcesz mieć tę wiadomość i wpisz `/status add`. Upewnij się, że bot ma uprawnienia do wysyłania wiadomości na tym kanale.

Powinna powstać wiadomość podobna do tej:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

Wszystko w tej wiadomości możesz dostosować na stronie ustawień Discord w txAdmin.

## Podsumowanie

Konfiguracja bota Discord dla txAdmin pozwala łatwo wyświetlać status Twojego serwera FiveM i inne informacje na Twoim serwerze Discord. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />