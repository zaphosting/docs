---
id: fivem-proxy
title: "FiveM: Konfiguracja Reverse Proxy"
description: "Dowiedz się, jak zwiększyć bezpieczeństwo i niezawodność swojego serwera FiveM dzięki konfiguracji reverse proxy dla lepszej ochrony DDoS i wydajności → Sprawdź teraz"
sidebar_label: Reverse Proxy
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Reverse proxy to serwer działający jako pośrednik między końcowymi użytkownikami (Twoimi graczami) a Twoim serwerem FiveM. Jest to bardzo przydatne dla serwerów często atakowanych DDoS, ponieważ zapewnia dodatkową warstwę bezpieczeństwa i niezawodności, zmniejszając widoczność głównego hosta oraz oferując dodatkowe mechanizmy ochronne.

W tym poradniku przejdziemy przez proces konfiguracji reverse proxy dla Twojego serwera FiveM. W tym scenariuszu mamy dwa typy reverse proxy: connect proxy, używany dla endpointu connect, oraz server proxy, który obsługuje endpoint serwera, gdzie odbywa się surowe proxy TCP/UDP. Oba można konfigurować niezależnie od siebie.

<InlineVoucher />

## Przygotowanie

Aby skonfigurować reverse proxy, potrzebujesz **serwera Linux** (np. VPS), który będzie hostował Twój serwer proxy. W tym przykładzie użyjemy Ubuntu jako dystrybucji Linux, ale kroki instalacji będą bardzo podobne dla większości dystrybucji Linux.

:::tip Zalecane parametry VPS
Zdecydowanie polecamy zakup VPS z wyższą przepustowością sieci, jeśli planujesz skonfigurować server proxy, zwłaszcza gdy na Twoim serwerze jest dużo graczy. Dzieje się tak, ponieważ Twój VPS będzie przesyłał surowy ruch TCP/UDP bezpośrednio między klientem (graczem) a serwerem FiveM. W przeciwnym razie serwer o podstawowych parametrach i minimalnych ulepszeniach powinien wystarczyć. :)
:::

Zalecamy również skonfigurowanie proxy na **domenie**, którą posiadasz. Powinieneś utworzyć rekord `A` na domenie, której chcesz użyć (np. `zapdocs.example.com`), wskazujący na adres IP Twojego __Linux VPS__. To właśnie tej domeny będą używać gracze do łączenia się z serwerem, choć technicznie możesz też użyć adresu IP serwera proxy, jeśli chcesz.

### Dostęp do VPS

Mając gotowego Linux VPS, musisz się do niego połączyć. Skorzystaj z naszego [poradnika SSH - Pierwszy dostęp](vserver-linux-ssh.md), aby dowiedzieć się, jak to zrobić.

### Instalacja Nginx

Do hostowania reverse proxy użyjemy Nginx, który jest wydajnym i popularnym serwerem WWW open-source.

Po połączeniu się z VPS, użyj poniższego polecenia, aby zainstalować Nginx.

```
sudo apt install nginx
```

Po instalacji musisz dostosować zaporę sieciową, aby usługa była dostępna z internetu. W tym poradniku użyjemy **zapory UFW**, ponieważ Nginx rejestruje się jako aplikacja, co ułatwia konfigurację. Więcej o UFW znajdziesz w naszym [poradniku o bezpieczeństwie Linux](vserver-linux-security-tips.md).

:::note
Jeśli używasz innych zapór (np. Iptables), upewnij się, że udzieliłeś odpowiednich uprawnień dla Nginx, szczególnie na portach 80 i 443, na których działa usługa nginx.
:::

Sprawdź profile Nginx poleceniem `sudo ufw app list`. W tym przypadku wybierzemy opcję **Nginx Full**, która zapewnia dostęp do HTTP do testów i HTTPS do produkcji.

```
sudo ufw allow 'Nginx Full'
```

Po konfiguracji Nginx spróbuj otworzyć stronę w przeglądarce, aby upewnić się, że działa poprawnie. Jeśli testowa strona się wyświetla, możesz kontynuować poradnik.

```
http://[twoj_adres_ip_serwera]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Connect Proxy

Connect proxy służy do proxy endpointu connect Twojego serwera FiveM. Oznacza to, że serwer proxy będzie odbierał żądania connect i przekazywał je do głównego serwera FiveM. To świetnie maskuje prawdziwy adres IP hosta FiveM na liście serwerów, zmniejszając jego widoczność.

### Konfiguracja Nginx

Zacznij od utworzenia wpisu w katalogu Nginx dla hosta, który wybrałeś podczas konfiguracji domeny. W tym przykładzie używamy `zapdocs.example.com`.

Użyj poniższego polecenia, aby stworzyć blok serwera dla Twojej domeny, zamieniając `[your_domain]` na swoją domenę.

```
sudo nano /etc/nginx/sites-available/[your-domain]
```

Skopiuj poniższy szablon do edytora i dostosuj wartości do swojego setupu.

```
upstream backend {
    # Adres IP serwera FiveM
    server [your_fivem_serverip]:30120;
}

proxy_cache_path /srv/cache levels=1:2 keys_zone=assets:48m max_size=20g inactive=2h;

server {
    listen 80;
    listen [::]:80;

    server_name [your_domain]; # Na przykład: zapdocs.example.com

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        # Wymagane do poprawnego przekazywania nagłówków autoryzacji
        proxy_pass_request_headers on;
        # Wymagane, aby połączenia nie były natychmiast zamykane
        proxy_http_version 1.1;
        proxy_pass http://backend;
    }

    # Dodatkowy blok dla proxy z cache
    location /files/ {
        proxy_pass http://backend$request_uri;
        add_header X-Cache-Status $upstream_cache_status;
        proxy_cache_lock on;
        proxy_cache assets;
        proxy_cache_valid 1y;
        proxy_cache_key $request_uri$is_args$args;
        proxy_cache_revalidate on;
        proxy_cache_min_uses 1;
    }
}
```

Po dostosowaniu wartości zapisz plik i wyjdź z nano, używając `CTRL + X`, następnie `Y` i `ENTER`.

Teraz aktywuj blok serwera, tworząc dowiązanie symboliczne do katalogu aktywnych konfiguracji.

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

Sprawdź poprawność konfiguracji poleceniem `sudo nginx -t`. Jeśli nie ma błędów, zrestartuj Nginx, aby zastosować zmiany.

```
systemctl reload nginx.service
```

Po restarcie spróbuj otworzyć domenę reverse proxy w przeglądarce. Jeśli wszystko działa, powinna się załadować zawartość ustawiona jako parametr `targetServer`. W razie problemów sprawdź logi poleceniem `journalctl -f -u nginx.service`, aby znaleźć błędy.

### Konfiguracja FiveM

Po skonfigurowaniu proxy musisz zmienić kilka wartości w pliku `server.cfg` na swoim serwerze FiveM.

Dodaj poniższe linijki, zamieniając wartości na swoje.

```
# Zapobiega reklamowaniu serwera na liście z użyciem prawdziwego IP
set sv_forceIndirectListing true

# Sprawia, że backend listy serwerów używa Twojej domeny zamiast domyślnej (np. zapdocs.example.com)
set sv_listingHostOverride "[your_domain]"

# Lista sieci IPv4 w notacji CIDR, które mogą przekazywać 'X-Real-IP' oraz omijają limiter
set sv_proxyIPRanges "[your_proxy_serverip]/32"

# Rzeczywisty endpoint, na którym hostowany jest serwer lub jeden/multiple proxy endpointów serwera
set sv_endpoints "[your_fivem_serverip]:30120"
```

Zapisz plik i zrestartuj serwer. Po ponownym uruchomieniu domena powinna wskazywać na Twój serwer FiveM i można jej używać do łączenia się.

Sprawdź działanie, próbując otworzyć: `https://[your_domain]/info.json`. Jeśli się załaduje, connect proxy działa poprawnie.

## Server Proxy

Server proxy służy do proxy endpointu serwera FiveM, czyli bezpośrednio proxy surowych endpointów TCP/UDP i strumieni.

### Konfiguracja Nginx

Do tego użyjesz modułu **stream**, który jest częścią Nginx. Otwórz plik `nginx.conf` w nano.

```
sudo nano /etc/nginx/nginx.conf
```

Skopiuj poniższą konfigurację do głównego zakresu pliku, zamieniając wartości na swoje.

```
stream {
    upstream backend {
        server [your_fivem_serverip]:30120;
    }
    
    server {
		listen 30120;
		proxy_pass backend;
	}

	server {
		listen 30120 udp reuseport;
		proxy_pass backend;
	}
}
```

Po dostosowaniu zapisz plik i wyjdź z nano (`CTRL + X`, `Y`, `ENTER`).

Sprawdź poprawność konfiguracji poleceniem `sudo nginx -t`. Jeśli jest OK, zrestartuj Nginx.

```
systemctl reload nginx.service
```

Po restarcie spróbuj połączyć się z serwerem gier przez domenę proxy. Jeśli wszystko działa, powinieneś połączyć się z serwerem, który ustawiłeś jako `targetServer`. W razie problemów sprawdź logi `journalctl -f -u nginx.service`.

### Konfiguracja FiveM

Po konfiguracji proxy musisz zmienić wartość w pliku `server.cfg` na serwerze FiveM.

:::tip
Jeśli już ustawiłeś parametr `set sv_endpoints` przy konfiguracji Connect Proxy, możesz ten krok pominąć.
:::

Dodaj poniższą linijkę, zamieniając wartość na swoją.

```
# Rzeczywisty endpoint, na którym hostowany jest serwer lub jeden/multiple proxy endpointów serwera
set sv_endpoints "[your_fivem_serverip]:30120"
```

Zapisz plik i zrestartuj serwer. Po restarcie surowe endpointy TCP/UDP będą przesyłane przez reverse proxy.

Możesz to zweryfikować, analizując adresy IP graczy – powinny być to adresy IP Twojego serwera proxy z losowo przydzielonymi portami.

## Certyfikat SSL

Po skonfigurowaniu reverse proxy dla FiveM zdecydowanie polecamy dodanie certyfikatu SSL do używanych domen, aby zapewnić bezpieczne przesyłanie danych przez HTTPS.

Sprawdź nasz [poradnik Instalacja Certbota](dedicated-linux-certbot.md), który opisuje cały proces zamawiania i automatycznego odnawiania certyfikatów SSL dla Twoich domen.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś reverse proxy dla swojego serwera FiveM, co przynosi wiele korzyści w zakresie bezpieczeństwa, niezawodności i wydajności. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />