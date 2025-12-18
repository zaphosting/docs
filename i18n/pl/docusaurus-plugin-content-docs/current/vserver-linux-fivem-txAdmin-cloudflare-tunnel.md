---
id: vserver-linux-fivem-txAdmin-cloudflare-tunnel
title: "VPS: Konfiguracja Cloudflare Tunnel dla txAdmin"
description: "Dowiedz się, jak skonfigurować tunel Cloudflare dla txAdmin dla większego bezpieczeństwa → Sprawdź teraz"
sidebar_label: Cloudflare Tunnel dla txAdmin
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

Jeśli chcesz podjąć dodatkowe kroki zabezpieczające oprócz istniejącej ochrony DDoS ZAP-Hosting, możesz jeszcze bardziej zabezpieczyć swoją instancję txAdmin, korzystając z tunelu Cloudflare. Ta konfiguracja sprawia, że interfejs webowy txAdmin nie jest już wystawiony na publiczny adres IP serwera, lecz jest bezpiecznie dostępny przez Twoją własną domenę. Wszelkie ataki na port txAdmin są filtrowane przez Cloudflare, a Ty możesz całkowicie zablokować lokalny port bez utraty dostępu.

<InlineVoucher />

## Wymagania wstępne

Aby korzystać z tunelu Cloudflare na Linuxie, potrzebujesz VPS z Linuxem, działającej instalacji txAdmin, portu txAdmin oraz domeny już podłączonej do Twojego konta Cloudflare. Jeśli Twoja domena nie jest jeszcze podłączona do Cloudflare, najpierw skorzystaj z naszego [poradnika konfiguracji Cloudflare](domain-cloudflare-setup.md).

Tunel Cloudflare działa poprzez utworzenie wychodzącego, zaszyfrowanego połączenia z Twojego serwera do Cloudflare, więc nie musisz mieć otwartych publicznych portów dla txAdmin.


## Konfiguracja Cloudflare

Zanim zainstalujesz cloudflared na swoim Linux vServerze, najpierw utwórz i skonfiguruj tunel bezpośrednio w panelu głównym Cloudflare.

Zaloguj się na swoje konto Cloudflare i przejdź do sekcji Zero Trust. Tam możesz stworzyć nowy tunel, który później będzie przekierowywał ruch do Twojego interfejsu txAdmin.

![img](https://screensaver01.zap-hosting.com/index.php/s/KeEEZaecdbNjzPG/download)




## Instalacja Cloudflare Tunnel

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



## Konfiguracja Cloudflare Tunnel

Następnie skonfiguruj ustawienia Route Traffic. Utwórz nowy wpis subdomeny według własnego wyboru. W tym przykładzie używamy subdomeny `txAdmin`, która będzie później służyć do dostępu do interfejsu txAdmin.

Wybierz domenę, której chcesz użyć, ustaw typ usługi na **HTTP** i wpisz **localhost:port** jako URL. Zastąp port portem przypisanym do Twojej instancji txAdmin. W tym przykładzie używamy portu 40500.

![img](https://screensaver01.zap-hosting.com/index.php/s/JEJGLrd8rrPZpq2/download)

:::warning Zalecenia bezpieczeństwa
Zamiast korzystać z domyślnego portu txAdmin **40120**, zalecamy użycie innego portu dla lepszego zabezpieczenia.
:::



## Konfiguracja zapory Linux

Aby zapobiec dostępowi do portu spoza tunelu, skonfiguruj zaporę Linux (iptables), tak aby dany port akceptował połączenia tylko z localhost. Ogranicz pole adresu zdalnego do 127.0.0.1. To wymusi, że cały ruch pochodzi z lokalnego systemu i zablokuje dostęp z zewnątrz, zapewniając, że usługa za cloudflared nie jest dostępna z sieci poza tunelem.

```
sudo iptables -A INPUT -p tcp --dport 40500 ! -s 127.0.0.1 -j DROP
```

Dzięki tej konfiguracji wszelkie próby dostępu spoza maszyny zostaną zablokowane, co gwarantuje, że usługa za cloudflared nie jest dostępna spoza tunelu.



## Podsumowanie

Gdy tunel Cloudflare jest aktywny, Twój interfejs txAdmin jest dostępny tylko przez Twoją własną domenę, a wszystkie żądania przechodzą przez Cloudflare, gdzie są filtrowane i zabezpieczone.

![img](https://screensaver01.zap-hosting.com/index.php/s/qFwKn6gfeyDzPKX/preview)

Bezpośredni dostęp do portu txAdmin przez adres IP serwera jest zablokowany, co całkowicie eliminuje pierwotną powierzchnię ataku. Dzięki temu txAdmin działa stabilnie, bezpiecznie i jest niezawodnie dostępny, nawet jeśli ktoś próbuje przeciążyć lub zaatakować interfejs.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />