---
id: dedicated-windows-fivem-txAdmin-cloudflare-tunnel
title: "Serwer dedykowany: Konfiguracja tunelu Cloudflare dla txAdmin"
description: "Dowiedz się, jak skonfigurować tunel Cloudflare dla txAdmin dla większego bezpieczeństwa → Sprawdź teraz"
sidebar_label: Tunel Cloudflare dla txAdmin
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

Jeśli chcesz podnieść poziom bezpieczeństwa ponad standardową ochronę DDoS ZAP-Hosting, możesz dodatkowo zabezpieczyć swoją instancję txAdmin, korzystając z tunelu Cloudflare. Dzięki temu interfejs webowy txAdmin nie jest już wystawiony na publiczny adres IP serwera, lecz bezpiecznie dostępny przez Twoją własną domenę. Ataki na port txAdmin są filtrowane przez Cloudflare, a Ty możesz całkowicie zablokować lokalny port bez utraty dostępu.



## Wymagania wstępne

Aby korzystać z tunelu Cloudflare na Windows, potrzebujesz serwera dedykowanego z Windows, działającej instalacji txAdmin, portu txAdmin oraz domeny już podpiętej do Twojego konta Cloudflare. Jeśli Twoja domena nie jest jeszcze podłączona do Cloudflare, najpierw skorzystaj z naszego [poradnika konfiguracji Cloudflare](domain-cloudflare-setup.md).

Tunel Cloudflare działa poprzez nawiązanie wychodzącego, zaszyfrowanego połączenia z Twojego serwera do Cloudflare, dzięki czemu nie musisz otwierać publicznych portów dla txAdmin.


## Konfiguracja Cloudflare

Zanim zainstalujesz cloudflared na swoim Windows serwerze dedykowanym, najpierw utwórz i skonfiguruj tunel bezpośrednio w panelu głównym Cloudflare.

Zaloguj się na swoje konto Cloudflare i przejdź do sekcji Zero Trust. Tam możesz stworzyć nowy tunel, który będzie przekierowywał ruch do interfejsu txAdmin.

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Instalacja tunelu Cloudflare

Cloudflare udostępnia małe narzędzie o nazwie cloudflared. Instalacja cloudflared na Windows jest bardzo prosta. Najpierw pobierz [instalator Windows](https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.msi).

![img](https://screensaver01.zap-hosting.com/index.php/s/JFsdnjkcR6LrJAr/preview)

Po pobraniu pliku uruchom instalator i dokończ instalację. Po zakończeniu otwórz Wiersz polecenia jako Administrator. W tym oknie wykonaj podane polecenie:

```
cloudflared.exe service install eyJhIjoiMj...
```

Po uruchomieniu polecenia Twój serwer połączy się z Cloudflare przez tunel. Jeśli konfiguracja zakończy się sukcesem, status w sekcji Connectors zmieni się na **Connected**, co potwierdzi, że tunel jest aktywny i działa.

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## Konfiguracja tunelu Cloudflare

Następnie skonfiguruj ustawienia przekierowania ruchu (Route Traffic). Utwórz nowy wpis subdomeny według własnego wyboru. W tym przykładzie używamy subdomeny `txAdmin`, która będzie później służyć do dostępu do interfejsu txAdmin.

Wybierz domenę, której chcesz użyć, ustaw typ usługi na **HTTP** i wpisz **localhost:port** jako URL. Zastąp port numerem portu przypisanego do Twojej instancji txAdmin. W tym przykładzie używamy portu 40500.

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning Zalecenia dotyczące bezpieczeństwa
Zamiast korzystać z domyślnego portu txAdmin **40120**, zalecamy użycie innego portu dla lepszego zabezpieczenia.
:::



## Konfiguracja zapory sieciowej Windows

Aby zapobiec dostępowi do portu spoza tunelu, skonfiguruj zaporę sieciową Windows tak, aby dany port akceptował połączenia tylko z localhost. Ogranicz pole zdalnego adresu w regule do 127.0.0.1. Wymusza to, aby cały ruch pochodził z lokalnego systemu i blokuje dostęp z zewnątrz, zapewniając, że usługa za cloudflared nie jest dostępna spoza tunelu.

```
netsh advfirewall firewall add rule name="Cloudflared Local Only" dir=in action=allow protocol=TCP localport=40500 remoteip=127.0.0.1
```

Dzięki tej konfiguracji wszelkie próby dostępu spoza maszyny są blokowane, co gwarantuje, że usługa za cloudflared nie jest dostępna poza tunelem.



## Podsumowanie

Gdy tunel Cloudflare jest aktywny, interfejs txAdmin jest dostępny tylko przez Twoją własną domenę, a wszystkie żądania przechodzą przez Cloudflare, gdzie są filtrowane i zabezpieczone.

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

Bezpośredni dostęp do portu txAdmin przez adres IP serwera jest zablokowany, co całkowicie eliminuje pierwotną powierzchnię ataku. Dzięki temu txAdmin działa stabilnie, bezpiecznie i jest niezawodnie dostępny, nawet jeśli ktoś próbuje przeciążyć lub zaatakować interfejs.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />