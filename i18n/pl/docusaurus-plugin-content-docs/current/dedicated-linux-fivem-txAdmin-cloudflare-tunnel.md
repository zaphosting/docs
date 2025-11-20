---
id: dedicated-linux-fivem-txAdmin-cloudflare-tunnel
title: "Serwer dedykowany: Konfiguracja tunelu Cloudflare dla txAdmin"
description: "Dowiedz się, jak skonfigurować tunel Cloudflare dla txAdmin dla większego bezpieczeństwa → Sprawdź teraz"
sidebar_label: Tunel Cloudflare dla txAdmin
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

Jeśli chcesz podnieść poziom zabezpieczeń ponad standardową ochronę DDoS ZAP-Hosting, możesz dodatkowo zabezpieczyć swoją instancję txAdmin, korzystając z tunelu Cloudflare. Dzięki temu interfejs webowy txAdmin nie będzie już wystawiony na publiczny adres IP serwera, a dostęp do niego będzie możliwy bezpiecznie przez Twoją własną domenę. Ataki na port txAdmin są filtrowane przez Cloudflare, a Ty możesz całkowicie zablokować lokalny port bez utraty dostępu.

<InlineVoucher />

## Wymagania wstępne

Aby korzystać z tunelu Cloudflare na Linuxie, potrzebujesz serwera dedykowanego z Linuxem, działającej instalacji txAdmin, portu txAdmin oraz domeny już podpiętej do Twojego konta Cloudflare. Jeśli Twoja domena nie jest jeszcze podłączona do Cloudflare, najpierw skorzystaj z naszego [poradnika konfiguracji Cloudflare](domain-cloudflare-setup.md).

Tunel Cloudflare działa poprzez nawiązanie wychodzącego, zaszyfrowanego połączenia z Twojego serwera do Cloudflare, dzięki czemu nie musisz otwierać żadnych publicznych portów dla txAdmin.


## Konfiguracja Cloudflare

Zanim zainstalujesz cloudflared na swoim Linux vServerze, najpierw utwórz i skonfiguruj tunel bezpośrednio w panelu głównym Cloudflare.

Zaloguj się na swoje konto Cloudflare i przejdź do sekcji Zero Trust. Tam możesz stworzyć nowy tunel, który później będzie przekierowywał ruch do interfejsu txAdmin.

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Instalacja tunelu Cloudflare

Cloudflare udostępnia małe narzędzie o nazwie cloudflared. Instalacja cloudflared na Linuxie jest bardzo prosta. Najpierw pobierz i uruchom instalator dla Linuxa.

![img](https://screensaver01.zap-hosting.com/index.php/s/93TFH8xfxEEDobd/preview)

```
# Dodaj klucz GPG Cloudflare
sudo mkdir -p --mode=0755 /usr/share/keyrings
curl -fsSL https://pkg.cloudflare.com/cloudflare-public-v2.gpg | sudo tee /usr/share/keyrings/cloudflare-public-v2.gpg >/dev/null

# Dodaj repozytorium do apt
echo 'deb [signed-by=/usr/share/keyrings/cloudflare-public-v2.gpg] https://pkg.cloudflare.com/cloudflared any main' | sudo tee /etc/apt/sources.list.d/cloudflared.list

# zainstaluj cloudflared
sudo apt-get update && sudo apt-get install cloudflared
```

Po zakończeniu instalacji wykonaj podane polecenie:

```
cloudflared.exe service install eyJhIjoiMj...
```

Po uruchomieniu poleceń Twój serwer połączy się z Cloudflare przez tunel. Jeśli konfiguracja zakończy się sukcesem, status w sekcji Connectors zmieni się na **Connected**, co potwierdzi, że tunel jest aktywny i działa.

![img](https://screensaver01.zap-hosting.com/index.php/s/YWdHzTgx8B2dQJm/preview)



## Konfiguracja tunelu Cloudflare

Następnie skonfiguruj ustawienia Route Traffic. Utwórz nowy wpis subdomeny według własnego wyboru. W tym przykładzie używamy subdomeny `txAdmin`, która będzie później służyć do dostępu do interfejsu txAdmin.

Wybierz domenę, której chcesz użyć, ustaw typ usługi na **HTTP** i wpisz **localhost:port** jako URL. Zastąp port numerem portu przypisanego do Twojej instancji txAdmin. W tym przykładzie używamy portu 40500.

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning Zalecenia bezpieczeństwa
Zamiast domyślnego portu txAdmin **40120**, zalecamy użycie innego portu dla lepszego zabezpieczenia.
:::



## Konfiguracja zapory Linuxa

Aby zapobiec dostępowi do portu spoza tunelu, skonfiguruj zaporę Linuxa (iptables), tak aby dany port akceptował połączenia tylko z localhost. Ogranicz pole adresu zdalnego do 127.0.0.1. Wymusza to, że cały ruch musi pochodzić z lokalnego systemu i blokuje dostęp z zewnątrz, dzięki czemu usługa za cloudflared nie jest dostępna z sieci poza tunelem.

```
sudo iptables -A INPUT -p tcp --dport 40500 ! -s 127.0.0.1 -j DROP
```

Dzięki tej konfiguracji wszelkie próby dostępu spoza maszyny są blokowane, co zapewnia, że usługa za cloudflared nie jest dostępna spoza tunelu.



## Podsumowanie

Gdy tunel Cloudflare jest aktywny, interfejs txAdmin jest dostępny tylko przez Twoją własną domenę, a wszystkie żądania przechodzą przez Cloudflare, gdzie są filtrowane i zabezpieczone.

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

Bezpośredni dostęp do portu txAdmin przez IP serwera jest zablokowany, co całkowicie eliminuje pierwotną powierzchnię ataku. Dzięki temu txAdmin działa stabilnie, bezpiecznie i jest niezawodnie dostępny, nawet jeśli ktoś próbuje przeciążyć lub zaatakować interfejs.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />