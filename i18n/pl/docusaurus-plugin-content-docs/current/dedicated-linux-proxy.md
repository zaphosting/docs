---
id: dedicated-linux-proxy
title: "Serwer dedykowany: Konfiguracja Reverse Proxy z nginx na Linuxie"
description: "Dowiedz się, jak skonfigurować bezpieczny i wydajny reverse proxy dla stron internetowych i serwerów gier, aby poprawić dostęp i ochronę → Sprawdź teraz"
sidebar_label: Reverse Proxy
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Reverse proxy to serwer działający jako pośrednik między użytkownikami końcowymi a innym serwerem. Strony internetowe i serwery gier to popularne zastosowania reverse proxy, każde z nich oferuje różne korzyści, takie jak bezpieczeństwo, łatwość dostępu i ochrona.

W tym poradniku pokażemy, jak skonfigurować reverse proxy ogólnego przeznaczenia dla stron www oraz takie dedykowane serwerom gier.

<InlineVoucher />

## Przygotowanie

Do konfiguracji reverse proxy potrzebujesz **serwera Linux**, który będzie hostował twój serwer proxy. W tym przykładzie użyjemy Ubuntu jako dystrybucji Linux, ale kroki instalacji będą bardzo podobne dla większości dystrybucji.

:::tip Zalecane parametry VPS
Dla reverse proxy dedykowanego serwerom gier zdecydowanie polecamy wykupienie wyższych prędkości sieci, zwłaszcza jeśli na serwerze jest dużo graczy. Dzieje się tak, ponieważ twój VPS będzie przesyłał surowy ruch TCP/UDP bezpośrednio między klientem (graczem) a serwerem gier. W przeciwnym razie serwer z podstawowymi parametrami i minimalnymi ulepszeniami powinien wystarczyć dla proxy związanego ze stronami www. :)
:::

Zalecamy skonfigurowanie proxy z **domeną**, którą posiadasz. Dla każdej subdomeny, której chcesz użyć, powinieneś utworzyć rekord DNS typu `A` (np. `zapdocs.example.com`), wskazujący na adres IP twojego __Linux VPS__. To właśnie tego adresu będą używać użytkownicy, aby dostać się do twojej strony lub serwera gier.

### Dostęp do VPS

Mając gotowego Linux VPS, musisz się do niego połączyć. Skorzystaj z naszego [poradnika SSH - pierwszy dostęp](vserver-linux-ssh.md), aby dowiedzieć się, jak to zrobić.

### Instalacja Nginx

Do hostowania reverse proxy użyjemy Nginx, ponieważ to bardzo wydajny i popularny serwer www open-source.

Po połączeniu się z VPS, wpisz poniższe polecenie, aby zainstalować Nginx.

```
sudo apt install nginx
```

Po instalacji musisz dostosować zaporę sieciową, aby usługa była dostępna z internetu. W tym poradniku użyjemy **zapory UFW**, ponieważ Nginx rejestruje się jako aplikacja, co ułatwia konfigurację. Więcej o UFW znajdziesz w naszym [poradniku o bezpieczeństwie Linux](vserver-linux-security-tips.md).

:::note
Jeśli korzystasz z innych zapór (np. Iptables), upewnij się, że udzieliłeś odpowiedniego dostępu Nginx, zwłaszcza na portach 80 i 443, na których działa usługa nginx.
:::

Sprawdź profile Nginx poleceniem `sudo ufw app list`. W tym przypadku wybierzemy opcję **Nginx Full**, która umożliwia dostęp do HTTP do testów i HTTPS do produkcji.

```
sudo ufw allow 'Nginx Full'
```

Po skonfigurowaniu Nginx, spróbuj otworzyć stronę w przeglądarce, aby upewnić się, że działa poprawnie. Jeśli strona testowa działa, możesz kontynuować poradnik.

```
http://[twój_adres_ip_serwera]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Dla stron internetowych

Reverse proxy dla stron www może być bardzo przydatne z wielu powodów, np. przekierowywanie do zasobów wewnętrznych serwera, takich jak instancja vaultwarden (bez konieczności podawania portu w URL), lub przekazywanie użytkownika do zewnętrznych treści, co jest przydatne do równoważenia obciążenia i ochrony.

Jedną z największych zalet jest to, że twój serwer może obsługiwać żądania z wielu źródeł/domen, a nie tylko pojedynczy serwer www działający na portach 80/443.

### Konfiguracja Nginx

Zacznij od utworzenia wpisu w katalogu Nginx dla domeny, którą wybrałeś wcześniej, zwykle będzie to subdomena, np. `zapdocs.example.com` jak w naszym przykładzie.

:::important
Upewnij się, że utworzyłeś rekord `A` wskazujący na adres IP twojego serwera proxy, zanim przejdziesz dalej. Bez tego domena i kolejne kroki nie będą działać poprawnie.
:::

Przejdź do folderu z blokami serwera poleceniem:

```
cd /etc/nginx/sites-available/
```

Następnie utwórz nowy plik konfiguracyjny. Zalecamy nazwać go nazwą domeny, aby łatwo go zidentyfikować (np. zapdocs.example.com). Zamień `[your_filename]` na wybraną nazwę pliku.

```
sudo nano [your_filename]
```

Otworzy się edytor nano, w którym wklej poniższy szablon. Musisz dostosować `[your_domain]` do domeny, którą chcesz proxyfikować, a `[your_target_server]` do serwera docelowego, do którego chcesz się łączyć.

```
upstream targetServer {
    # Dodaj serwer docelowy, do którego chcesz się połączyć. Może to być:
    # Wewnętrzne przekierowanie "localhost" (np. 127.0.0.1:9090)
    # Zewnętrzny serwer (np. 103.146.43.52:9000)
    server [your_target_server];
}

server {
    listen 80;
    listen [::]:80;

    # Domena, którą ma obsługiwać (np. zapdocs.example.com)
    server_name [your_domain];

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass_request_headers on;
        proxy_http_version 1.1;
        proxy_pass http://targetServer;
    }
}
```

Po dostosowaniu wartości zapisz plik i wyjdź z nano, używając `CTRL + X`, następnie `Y` potwierdzając i na końcu `ENTER`.

Teraz aktywuj blok serwera, tworząc dowiązanie symboliczne do katalogu aktywnego.

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

Aby sprawdzić poprawność konfiguracji, zwłaszcza składni, użyj `sudo nginx -t`. Jeśli wszystko jest OK, zrestartuj Nginx, aby zastosować zmiany.

```
systemctl reload nginx.service
```

Po restarcie spróbuj otworzyć domenę proxy w przeglądarce. Jeśli wszystko działa, powinna się załadować zawartość serwera ustawionego jako `targetServer`. W razie problemów sprawdź logi poleceniem `journalctl -f -u nginx.service`, aby znaleźć błędy.

## Dla serwerów gier

Reverse proxy dla serwerów gier może przynieść wiele korzyści, m.in. dodatkową warstwę bezpieczeństwa i stabilności przez lepszą ochronę i ograniczenie dostępu do głównego hosta.

:::tip
Większość dedykowanych serwerów gier powinna działać bez problemu z proxy TCP/UDP, które skonfigurujesz. Jednak niewielka część gier, np. BeamMP, może mieć problemy z VPN i proxy, więc testuj to indywidualnie dla każdej gry.
:::

### Konfiguracja Nginx

Do tego potrzebny jest moduł **Nginx Stream**, który nie jest domyślnie zainstalowany w standardowym Nginx.

#### Instalacja modułu Nginx stream

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt install -y libnginx-mod-stream
```
</TabItem>

<TabItem value="centos-fedora" label="CentOS & Fedora">
```bash
sudo dnf -y install nginx-mod-stream 
```
</TabItem>

</Tabs>

#### Konfiguracja stream w Nginx

Dodasz nowy blok `stream` do głównego pliku `nginx.conf`, gdzie zdefiniujesz serwer upstream i port, na którym będzie dostępny na twoim proxy.

Otwórz plik poleceniem:

```
sudo nano /etc/nginx/nginx.conf
```

Wklej do pliku poniższy szablon, który dodaje blok `stream`. Zamień `[your_target_server]` na serwer, do którego chcesz przesyłać ruch, wraz z portem (np. `:30120` dla FiveM). Podmień też `[your_port_listener]` na port, pod którym chcesz udostępnić usługę przez proxy.

```
stream {
    upstream targetServer {
        # Dodaj serwer docelowy, do którego chcesz przesyłać ruch (np. 103.146.43.52:30120)
        server [your_target_server];
    }

    server {
        # Port nasłuchu, który akceptuje i przekazuje połączenia (np. 30120)
        listen [your_port_listener];
        proxy_pass targetServer;
    }
}
```

Nginx będzie nasłuchiwał na wskazanym porcie i przekazywał cały ruch do serwera docelowego, który ustawiłeś (z proxy do prawdziwego serwera gier).

Po dostosowaniu zapisz plik i wyjdź z nano (`CTRL + X`, potem `Y` i `ENTER`).

Sprawdź poprawność konfiguracji poleceniem `sudo nginx -t`. Jeśli jest OK, zrestartuj Nginx, aby zastosować zmiany.

```
systemctl reload nginx.service
```

Po restarcie spróbuj połączyć się z serwerem gry przez domenę proxy. Jeśli wszystko działa, połączenie powinno przejść do serwera ustawionego jako `targetServer`. W razie problemów sprawdź logi `journalctl -f -u nginx.service`.

## Certyfikat SSL

Po skonfigurowaniu reverse proxy zdecydowanie polecamy dodanie certyfikatu SSL do używanych domen, aby zapewnić bezpieczne przesyłanie danych przez HTTPS. Sprawdź nasz [poradnik Instalacja Certbota](dedicated-linux-certbot.md), który krok po kroku pokazuje, jak zamówić i automatycznie odnawiać certyfikaty SSL dla twoich domen.

## Podsumowanie

Gratulacje, udało Ci się skonfigurować reverse proxy dla strony internetowej lub serwera gier (albo obu :), co przyniesie Ci wiele korzyści w zakresie bezpieczeństwa, stabilności i wydajności. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />