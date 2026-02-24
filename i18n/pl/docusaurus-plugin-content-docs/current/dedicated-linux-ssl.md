---
id: dedicated-linux-ssl
title: "Konfiguracja Let's Encrypt SSL na serwerze Linux - Zabezpiecz swój serwer dedykowany przez HTTPS"
description: "Dowiedz się, jak zabezpieczyć swoją stronę darmowymi certyfikatami SSL za pomocą Certbot i Let's Encrypt dla bezpiecznego przesyłania danych → Sprawdź teraz"
sidebar_label: Instalacja certyfikatu SSL (Let's Encrypt)
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Certyfikaty SSL to kluczowy element internetu, zapewniający bezpieczne przesyłanie danych między klientem a hostem. W tym poradniku pokażemy, jak skonfigurować open-source’owe narzędzie [**Certbot**](https://certbot.eff.org/), aby uzyskać darmowe certyfikaty SSL od organizacji non-profit **Let's Encrypt**.

## Przygotowanie

Aby korzystać z Certbota, potrzebujesz serwera Linux oraz **domeny**, którą posiadasz. Musisz mieć dostęp do ustawień DNS domeny i **musisz** utworzyć rekord `A` DNS wskazujący na adres IP Twojego __serwera Linux__ dla każdej domeny głównej lub subdomeny, której chcesz używać.

Certbot ma też dodatkowe wtyczki, które pozwalają na łatwą konfigurację certyfikatu „jednym kliknięciem” dla domen współpracujących z popularnymi serwerami www, takimi jak Nginx czy Apache. Polecamy Nginx, bo to wydajny i popularny serwer open-source. Pomoc znajdziesz w naszym [poradniku o reverse proxy na Linux](dedicated-linux-proxy.md).

## Instalacja

Zacznij od instalacji open-source’owego pakietu [**Certbot**](https://certbot.eff.org/), którego użyjesz do pobrania darmowych certyfikatów od **Let's Encrypt**.

```
sudo apt install certbot
```

Po instalacji Certbota możesz przejść do zamawiania certyfikatów dla swoich domen. Let's Encrypt i Certbot oferują różne wyzwania ACME do weryfikacji własności domeny.

Zdecydowanie polecamy domyślną metodę **HTTP-01**, bo pozwala na automatyczne odnawianie certyfikatów. Jeśli jednak napotkasz problemy, możesz spróbować metody **DNS-01**, która jest manualna i nie wspiera automatycznego odnawiania, bo wymaga weryfikacji przez rekord **TXT** DNS.

:::tip Wykorzystaj wtyczki serwera www
Jeśli korzystasz z serwera www takiego jak Nginx, Apache lub własnego, polecamy przejść do sekcji **Wtyczki serwera www** poniżej, gdzie pokazujemy, jak używać dodatkowych wtyczek Certbota do „jednoklikowej” instalacji certyfikatu i zamawiania go bez wyłączania serwera.
:::

### Wyzwanie HTTP-01

Po instalacji Certbota możesz zamówić certyfikaty dla swoich domen. W tym przykładzie użyjemy trybu standalone, co oznacza, że Certbot uruchomi tymczasowy serwer www, aby wykonać niezbędne działania. Musisz więc otworzyć port 80 w zaporze i nie mieć żadnego innego serwera lub usługi działającej na porcie 80, aby tymczasowy serwer mógł wystartować i odebrać wyzwanie (stąd nazwa `HTTP` w wyzwaniu).

W poniższym poleceniu użyjesz parametru `--standalone`, aby poinformować Certbota o chęci użycia tymczasowego serwera.

```
# Dla domen głównych
certbot certonly --standalone -d [twoja_domena_glowna] -d www.[twoja_domena_glowna]

# Dla subdomen
certbot certonly --standalone -d [twoja_subdomena]

# Tryb interaktywny
certbot certonly --standalone
```

Po uruchomieniu polecenia może pojawić się interaktywna konfiguracja, w której podasz adres e-mail do komunikacji certyfikatowej, opcjonalnie zgodzisz się na listę mailingową oraz zaakceptujesz regulamin.

Certbot wygeneruje teraz wyzwanie ACME i udostępni je przez tymczasowy serwer. Serwery Let's Encrypt spróbują pobrać to z Twojego serwera, a po sukcesie certyfikaty zostaną wygenerowane i zapisane w katalogu `/etc/letsencrypt/live/[twoja_domena]`.

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

Teraz możesz używać certyfikatów SSL wszędzie tam, gdzie potrzebujesz, podając lokalną ścieżkę do certyfikatów.

### Rekord TXT DNS

Jeśli masz problemy z weryfikacją domeny przez metodę **HTTP-01**, możesz spróbować metody **DNS-01**, która wymaga utworzenia rekordu **TXT** DNS z wartością podaną przez Let's Encrypt.

Jak wspomniano, ta metoda **nie** wspiera automatycznego odnawiania, chyba że samodzielnie skonfigurujesz infrastrukturę do zarządzania tym procesem. Dlatego zalecamy korzystanie z metody **HTTP-01** tam, gdzie to możliwe.

W poniższym poleceniu użyjesz parametru `--preferred-challenges`, aby wybrać metodę `DNS-01`.

```
# Dla domen głównych
certbot certonly --preferred-challenges dns-01 -d [twoja_domena_glowna] -d www.[twoja_domena_glowna] --manual -m [twoja_domena_glowna] -m www.[twoja_domena_glowna]

# Dla subdomen
certbot certonly --preferred-challenges dns-01 -d [twoja_subdomena] --manual -m [twoja_subdomena]

# Tryb interaktywny
certbot certonly --preferred-challenges dns-01
```

Po uruchomieniu polecenia pojawi się interaktywna konfiguracja, gdzie podasz adres e-mail do komunikacji certyfikatowej, opcjonalnie zgodzisz się na listę mailingową i zaakceptujesz regulamin.

Certbot poda Ci instrukcje, jak utworzyć rekord **TXT** DNS z konkretną wartością. Nazwa rekordu będzie zwykle miała prefiks `_acme-challenge.` przed Twoją domeną (np. `_acme-challenge.zapdocs.example.com`), a wartość znajdziesz w konsoli.

Po utworzeniu rekordu naciśnij Enter, aby kontynuować. Jeśli wszystko jest poprawne i rekord się rozpropagował, certyfikaty zostaną wygenerowane i zapisane w `/etc/letsencrypt/live/[twoja_domena]`.

:::note
Bądź cierpliwy, bo zmiany w rekordach DNS mogą chwilę potrwać, zanim się rozpropagują. Zazwyczaj trwa to kilka minut, ale w rzadkich przypadkach może potrwać dłużej.
:::

Teraz możesz używać certyfikatów SSL wszędzie tam, gdzie potrzebujesz, podając lokalną ścieżkę do certyfikatów.

## Wtyczki serwera www

Certbot ma różne dodatkowe wtyczki do serwerów www, które jeszcze bardziej ułatwiają zarządzanie certyfikatami, bo automatycznie edytują odpowiednie bloki konfiguracyjne serwera. Aby użyć wtyczki, wystarczy dodać odpowiedni parametr do polecenia `certbot`.

Obie metody korzystają z wyzwania **HTTP-01** i działają podobnie. Po wybraniu wtyczki Certbot wyszuka blok serwera, który zawiera żądaną domenę jako parametr `server_name`. Następnie wygeneruje wyzwanie ACME i doda tymczasowy blok `location /.well-known/acme-challenge/...` do konfiguracji serwera.

Serwery Let's Encrypt spróbują pobrać ten plik z Twojego serwera, a po sukcesie certyfikat zostanie wygenerowany, a konfiguracja serwera zostanie automatycznie zmodyfikowana, aby korzystać z HTTPS (port 443) i wskazywać na nowo wygenerowany certyfikat.

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Wtyczka Nginx

Przed użyciem wtyczki upewnij się, że jest zainstalowana.

```
sudo apt install python3-certbot-nginx
```

Aby użyć wtyczki Nginx, dodaj parametr `--nginx` do polecenia, np.:

```
# Dla domen głównych
certbot --nginx -d [twoja_domena_glowna] -d www.[twoja_domena_glowna]

# Dla subdomen
certbot --nginx -d [twoja_subdomena]

# Tryb interaktywny
certbot --nginx
```

:::tip
Jeśli chcesz wyłączyć automatyczne „jednoklikowe” zmiany konfiguracji serwera przez Certbot, dodaj parametr `certonly`, np. `certbot certonly`.
:::

</TabItem>

<TabItem value="apache" label="Apache">

### Wtyczka Apache

Przed użyciem wtyczki upewnij się, że jest zainstalowana.

```
sudo apt install python3-certbot-apache
```

Aby użyć wtyczki Apache, dodaj parametr `--apache` do polecenia, np.:

```
# Dla domen głównych
certbot --apache -d [twoja_domena_glowna] -d www.[twoja_domena_glowna]

# Dla subdomen
certbot --apache -d [twoja_subdomena]

# Tryb interaktywny
certbot --apache
```

:::tip
Jeśli chcesz wyłączyć automatyczne „jednoklikowe” zmiany konfiguracji serwera przez Certbot, dodaj parametr `certonly`, np. `certbot certonly`.
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Wtyczka Webroot

Jeśli korzystasz z własnego lokalnego serwera www, który nie jest oparty na popularnym oprogramowaniu, możesz użyć metody webroot, aby nie musieć zatrzymywać serwera.

Aby użyć wtyczki Webroot, dodaj parametr `--webroot` do polecenia oraz `-w [ścieżka_do_twojego_serwera]` (czyli `--webroot-path`), wskazujący na katalog główny Twojego serwera www.

```
# Dla domen głównych
certbot --webroot -w [ścieżka_do_twojego_serwera] -d [twoja_domena_glowna] -d www.[twoja_domena_glowna]

# Dla subdomen
certbot --webroot -w [ścieżka_do_twojego_serwera] -d [twoja_subdomena]

# Tryb interaktywny
certbot --webroot -w [ścieżka_do_twojego_serwera]
```

:::tip
Jedna z najczęstszych lokalizacji katalogu webroot to `/var/www/html`. Możesz też użyć tej metody dla serwerów takich jak Nginx czy Apache, jeśli chcesz korzystać z serwera bez automatycznych zmian konfiguracji, które oferują natywne wtyczki.
:::

</TabItem>
</Tabs>

## Automatyczne odnawianie

W większości przypadków Certbot automatycznie ustawi odnawianie certyfikatów przez cronjob i/lub timer systemd. Możesz to sprawdzić, uruchamiając polecenie testowe z parametrem `--dry-run`:

```
certbot renew --dry-run
```

:::tip
Jak wspomniano, metoda **DNS-01** nie wspiera automatycznego odnawiania przez Certbot, chyba że samodzielnie skonfigurujesz infrastrukturę. Dlatego zalecamy korzystanie z metody **HTTP-01**.
:::

Jeśli wszystko jest OK, test powinien się powieść. Jeśli chcesz zobaczyć lub zmienić ustawienia automatycznego odnawiania, znajdziesz je w jednym z miejsc: `/etc/crontab/`, `/etc/cron.*/*` lub przez `systemctl list-timers`.

### Ręczna konfiguracja cronjob

Jeśli z jakiegoś powodu automatyczne odnawianie nie jest ustawione, możesz dodać je samodzielnie przez cronjob. Otwórz edytor crontab poleceniem `crontab -e`. Jeśli robisz to pierwszy raz, wybierz edytor, np. `/bin/nano`.

W pliku dodaj linię, która będzie odnawiać certyfikaty codziennie o 6 rano lokalnego czasu:

```
0 6 * * * certbot renew
```

Zapisz plik i wyjdź z nano przez `CTRL + X`, potwierdź `Y` i naciśnij `ENTER`.

## Podsumowanie

Udało Ci się skonfigurować Certbota dla swoich domen na różne sposoby: standalone, webroot lub przez wtyczki, zapewniając swojej stronie bezpieczne przesyłanie danych przez HTTPS. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂