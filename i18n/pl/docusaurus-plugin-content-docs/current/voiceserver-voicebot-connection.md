---
id: voiceserver-voicebot-connection
title: "Voiceserver: Połączenie Twojego bota głosowego z serwerem głosowym"
description: "Dowiedz się, jak podłączyć swojego bota głosowego do serwerów TeamSpeak i Discord, aby zapewnić płynną komunikację i kontrolę → Sprawdź teraz"
sidebar_label: Połączenie z serwerem głosowym
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## Wprowadzenie

Chcesz podłączyć swojego bota głosowego do serwera TeamSpeak, ale nie do końca wiesz jak to zrobić? Spoko, poniżej dokładnie Ci to wyjaśnimy!



## Podłączanie bota do TeamSpeak

Aby podłączyć swojego bota głosowego do serwera TeamSpeak 3, musisz go wywołać w panelu administracyjnym. Następnie przejdź do zakładki **Serwer** po lewej stronie, jak pokazano poniżej:

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

Teraz możesz wybrać TeamSpeak pod **Serwer**, jeśli został on również zamówiony na Twoim koncie. Jeśli jest hostowany zewnętrznie, możesz tam wybrać też **Custom Teamspeak Server**.

Dane wpisujesz poniżej, zapisujesz i bot głosowy łączy się z Twoim serwerem TeamSpeak 3, oto przykład:

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## Podłączanie bota do Discord

Aby podłączyć bota głosowego do Discorda, przejdź do **Serwer**, a następnie wybierz **Discord**.

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

Musisz wtedy wpisać **Discord Bot Token** oraz **Discord Bot Client ID**. Po tym bot głosowy połączy się z Twoim serwerem Discord.


## Jak zdobyć Discord Bot Token i Client ID

Ponieważ Twój serwer Discord nie ma bezpośredniego adresu IP ani portu, musisz wykonać kilka kroków przygotowawczych, zanim użyjesz bota na serwerze Discord.


### Tworzenie aplikacji Discord

Pierwszym krokiem jest stworzenie aplikacji Discord. Twój bot zostanie do niej przypisany i będzie działał pod jej nazwą. Aby stworzyć taką aplikację, wejdź na [Discord Developer Portal](https://discord.com/developers/applications/).

Teraz kliknij **New Application**, aby utworzyć nową aplikację i nadaj jej nazwę, jak na obrazku poniżej:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Następnie kliknij **Create**, aby utworzyć aplikację. Zanotuj teraz ID aplikacji, będzie potrzebne w kolejnych krokach:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Konfiguracja bota i pobranie tokena

Podczas tworzenia aplikacji automatycznie powstaje bot. Token bota możesz łatwo uzyskać, klikając **Reset Token**. Otrzymasz wtedy token użytkownika, który warto gdzieś zapisać:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Nie udostępniaj tokena bota nikomu, aby Twój bot działał bez zakłóceń i nie stanowił zagrożenia bezpieczeństwa. Token to jak tajny klucz i nie powinien być dzielony.
:::

Na tej samej stronie przewiń trochę w dół i włącz **Presence Intent**, **Server Members Intent** oraz **Message Content Intent**, a następnie zapisz zmiany:

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### Zaproszenie bota na Discord

Aby zaprosić bota, wstaw wcześniej zanotowane Client ID w poniższy link w odpowiednie miejsce, otwórz go w przeglądarce i dodaj bota na swój serwer Discord. Powinno to wyglądać tak:

```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Konfiguracja panelu bota

Teraz wpisz wcześniej zanotowany token i Client ID w odpowiednie pola w panelu administracyjnym ZAP-Hosting i kliknij **Zapisz** na dole:

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

Następnie możesz uruchomić bota. Powinien połączyć się z Twoim serwerem Discord w około 10 sekund.


## Podsumowanie

Bot głosowy to super przydatny i fajny produkt dla wielu osób. Możesz go używać zarówno na serwerze TeamSpeak, jak i na Discordzie. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />