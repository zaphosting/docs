---
id: vserver-linux-proxy
title: "VPS: Konfiguracja Reverse Proxy z nginx na Linuxie"
description: "Dowiedz się, jak skonfigurować bezpieczny i wydajny reverse proxy dla stron internetowych i serwerów gier, aby poprawić dostęp i ochronę → Sprawdź teraz"
sidebar_label: Reverse Proxy
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Reverse proxy to serwer działający jako pośrednik między użytkownikami końcowymi a innym serwerem. Popularnym zastosowaniem reverse proxy są strony internetowe oraz serwery gier, z różnymi korzyściami takimi jak bezpieczeństwo, łatwość dostępu i ochrona.

W tym poradniku pokażemy, jak skonfigurować uniwersalny reverse proxy dla stron www oraz taki dedykowany serwerom gier.

<InlineVoucher />

## Przygotowanie

Do konfiguracji reverse proxy potrzebujesz **serwera Linux**, który będzie hostował twój proxy. W tym przykładzie używamy Ubuntu jako dystrybucji Linuxa, ale kroki instalacji będą bardzo podobne dla większości dystrybucji.

:::tip Rekomendowane parametry VPS
Dla reverse proxy dedykowanego serwerom gier zdecydowanie polecamy wykupienie wyższych prędkości sieci, zwłaszcza jeśli na serwerze jest dużo graczy. Twój VPS będzie wtedy przesyłał surowy ruch TCP/UDP bezpośrednio między klientem (graczem) a serwerem gier. W przypadku proxy dla stron www wystarczy serwer z podstawowymi parametrami i minimalnymi ulepszeniami. :)
:::

Zalecamy konfigurację proxy na **domenie**, którą posiadasz. Dla każdej subdomeny, której chcesz użyć, powinieneś utworzyć rekord DNS typu `A` (np. `zapdocs.example.com`), wskazujący na adres IP twojego __Linux VPS__. To właśnie tego adresu będą używać użytkownicy, aby dostać się do twojej strony lub serwera gier.

### Dostęp do VPS

Mając gotowego Linux VPS, musisz się do niego połączyć. Skorzystaj z naszego [poradnika SSH - pierwszy dostęp](vserver-linux-ssh.md), aby dowiedzieć się, jak to zrobić.

### Instalacja Nginx

Do hostowania reverse proxy użyjemy Nginx, który jest wydajnym i popularnym serwerem www open-source.

Po połączeniu się z VPS, zainstaluj Nginx poleceniem:

```
sudo apt install nginx
```

Po instalacji musisz dostosować zaporę sieciową, aby usługa była dostępna z internetu. W tym poradniku używamy **zapory UFW**, ponieważ Nginx rejestruje się jako aplikacja, co ułatwia konfigurację. Więcej o UFW znajdziesz w naszym [poradniku o bezpieczeństwie Linuxa](vserver-linux-security-tips.md).

:::note
Jeśli korzystasz z innych zapór (np. Iptables), upewnij się, że zezwalasz na ruch do Nginx na portach 80 i 443, na których działa usługa.
:::

Sprawdź profile Nginx poleceniem `sudo ufw app list`. W tym przypadku wybierzemy opcję **Nginx Full**, która umożliwia dostęp HTTP do testów i HTTPS do produkcji.

```
sudo ufw allow 'Nginx Full'
```

Po konfiguracji Nginx, spróbuj otworzyć stronę w przeglądarce, aby upewnić się, że działa poprawnie. Jeśli testowa strona się wyświetla, możesz kontynuować poradnik.

```
http://[twój_adres_ip_serwera]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Dla stron internetowych

Reverse proxy dla stron www jest bardzo przydatne z wielu powodów, np. przekierowywanie do zasobów wewnętrznych serwera, takich jak instancja vaultwarden (bez konieczności podawania portu w URL), czy przekazywanie użytkownika do zewnętrznych treści, co jest przydatne przy balansowaniu obciążenia i ochronie.

Największą zaletą jest to, że twój serwer może obsługiwać żądania z wielu źródeł/domen, a nie tylko pojedynczy serwer www na portach 80/443.

### Konfiguracja Nginx

Zacznij od utworzenia wpisu w katalogu Nginx dla domeny, którą wybrałeś wcześniej, zwykle będzie to subdomena, np. `zapdocs.example.com`.

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

Otworzy się edytor nano, w którym wklej poniższy szablon. Zamień `[your_domain]` na domenę, którą chcesz proxyfikować, a `[your_target_server]` na docelowy serwer, do którego chcesz się łączyć.

```
upstream targetServer {
    # Dodaj docelowy serwer, do którego chcesz się połączyć. Może to być:
    # Wewnętrzne przekierowanie "localhost" (np. 127.0.0.1:9090)
    # Zewnętrzny serwer (np. 103.146.43.52:9000)
    server [your_target_server];
}

server {
    listen 80;
    listen [::]:80;

    # Obsługiwana domena (np. zapdocs.example.com)
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

Po dostosowaniu wartości zapisz plik i wyjdź z nano, używając `CTRL + X`, następnie `Y` i `ENTER`.

Teraz aktywuj blok serwera, tworząc dowiązanie symboliczne do katalogu aktywnych konfiguracji:

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

Sprawdź poprawność konfiguracji pod kątem składni:

```
sudo nginx -t
```

Jeśli test zakończy się sukcesem, zrestartuj Nginx, aby zastosować zmiany:

```
systemctl reload nginx.service
```

Po restarcie przetestuj dostęp do domeny w przeglądarce. Jeśli wszystko działa, powinna się załadować zawartość serwera ustawionego jako `targetServer`. W razie problemów sprawdź logi poleceniem:

```
journalctl -f -u nginx.service
```

## Dla serwerów gier

Reverse proxy dla serwerów gier jest super przydatne, bo dodaje dodatkową warstwę bezpieczeństwa i stabilności, poprawiając ochronę i ograniczając dostęp do głównego hosta.

:::tip
Większość dedykowanych serwerów gier będzie działać bez problemu z proxy TCP/UDP, które skonfigurujesz. Jednak niewielka część gier, np. BeamMP, może mieć problemy z VPN i proxy, więc testuj to indywidualnie dla każdej gry.
:::

### Konfiguracja Nginx

Do tego potrzebujesz modułu **Nginx Stream**, który nie jest domyślnie zainstalowany w standardowym Nginx.

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

Wklej do pliku poniższy szablon, zamieniając `[your_target_server]` na serwer docelowy wraz z portem (np. `:30120` dla FiveM). Zamień też `[your_port_listener]` na port, pod którym chcesz udostępnić usługę przez proxy.

```
stream {
    upstream targetServer {
        # Dodaj docelowy serwer, do którego chcesz przesyłać ruch (np. 103.146.43.52:30120)
        server [your_target_server];
    }

    server {
        # Port nasłuchu, który akceptuje i przekazuje połączenia (np. 30120)
        listen [your_port_listener];
        proxy_pass targetServer;
    }
}
```

Nginx będzie nasłuchiwał na wskazanym porcie i przesyłał cały ruch do serwera docelowego, czyli z twojego proxy do prawdziwego serwera gier.

Po dostosowaniu wartości zapisz plik i wyjdź z nano (`CTRL + X`, potem `Y` i `ENTER`).

Sprawdź poprawność konfiguracji:

```
sudo nginx -t
```

Jeśli test jest OK, zrestartuj Nginx, aby zastosować zmiany:

```
systemctl reload nginx.service
```

Po restarcie spróbuj połączyć się z serwerem gry przez domenę proxy. Jeśli wszystko działa, połączenie powinno przejść do serwera ustawionego jako `targetServer`. W razie problemów sprawdź logi:

```
journalctl -f -u nginx.service
```

## Certyfikat SSL

Po skonfigurowaniu reverse proxy zdecydowanie polecamy dodanie certyfikatu SSL do używanych domen, aby zapewnić bezpieczne przesyłanie danych przez HTTPS. Sprawdź nasz [poradnik Instalacja Certbota](dedicated-linux-certbot.md), który krok po kroku pokazuje, jak zamówić i automatycznie odnawiać certyfikaty SSL dla twoich domen.

## Podsumowanie

Gratulacje! Udało Ci się skonfigurować reverse proxy dla strony www lub serwera gier (albo obu :)), co daje Ci wiele korzyści w zakresie bezpieczeństwa, stabilności i wydajności. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />