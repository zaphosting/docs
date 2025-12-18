---
id: dedicated-linux-ssl
title: "Serwer dedykowany: Utwórz certyfikat SSL (Let's Encrypt) dla serwera Linux"
description: "Dowiedz się, jak zabezpieczyć swoją stronę darmowymi certyfikatami SSL za pomocą Certbot i Let's Encrypt dla bezpiecznego przesyłania danych → Sprawdź teraz"
sidebar_label: Instalacja certyfikatu SSL (Let's Encrypt)
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Certyfikaty SSL to kluczowy element internetu, zapewniający bezpieczne przesyłanie danych między klientem a hostem. W tym poradniku pokażemy, jak skonfigurować open-source narzędzie [**Certbot**](https://certbot.eff.org/), aby uzyskać darmowe certyfikaty SSL od organizacji certyfikującej **Let's Encrypt**.



## Przygotowanie

Aby skorzystać z Certbota, potrzebujesz serwera Linux oraz **domeny**, którą posiadasz. Musisz mieć dostęp do ustawień DNS domeny i **musisz** utworzyć rekord `A` DNS wskazujący na adres IP twojego __serwera Linux__ dla każdej domeny głównej lub subdomeny, której chcesz używać.

Certbot ma też dodatkowe wtyczki, które pozwalają na łatwe „jednoklikowe” ustawienie certyfikatu dla domeny współpracującej z różnymi serwerami WWW, takimi jak Nginx czy Apache. Polecamy Nginx, bo to wydajny i popularny serwer open-source. Zobacz nasz [poradnik o reverse proxy na Linuxie](dedicated-linux-proxy.md), jeśli potrzebujesz pomocy z konfiguracją.

## Instalacja

Zacznij od instalacji open-source pakietu [**Certbot**](https://certbot.eff.org/), którego użyjesz do pobrania darmowych certyfikatów SSL od **Let's Encrypt**.

```
sudo apt install certbot
```

Po instalacji Certbota możesz przejść do zamawiania certyfikatów dla swoich domen. Let's Encrypt i Certbot oferują różne wyzwania ACME do weryfikacji własności domeny.

Zdecydowanie polecamy domyślną metodę **HTTP-01**, bo pozwala na automatyczne odnawianie certyfikatów. Jeśli jednak napotkasz problemy, możesz spróbować metody **DNS-01**, która jest manualna i nie wspiera automatycznego odnawiania, bo opiera się na weryfikacji przez rekord **TXT** DNS.

:::tip Wykorzystaj wtyczki serwera WWW
Jeśli korzystasz z serwera WWW takiego jak Nginx, Apache lub własnego, polecamy przejść do sekcji **Wtyczki serwera WWW** poniżej, gdzie pokazujemy, jak używać dodatkowych wtyczek Certbota do „jednoklikowej” instalacji certyfikatu oraz zamawiania certyfikatów bez konieczności wyłączania serwera WWW.
:::

### Wyzwanie HTTP-01

Po instalacji Certbota możesz zamówić certyfikaty dla swoich domen. W tym przykładzie użyjemy trybu standalone, co oznacza, że Certbot uruchomi tymczasowy serwer WWW, aby wykonać niezbędne działania. Oznacza to, że musisz otworzyć port 80 w zaporze sieciowej i nie mieć żadnych działających serwerów WWW lub usług na porcie 80, aby tymczasowy serwer mógł się uruchomić i umożliwić pobranie wyzwania (stąd nazwa `HTTP` w wyzwaniu).

W poniższym poleceniu użyjesz parametru `--standalone`, aby poinformować Certbota, że chcesz skorzystać z opcji tymczasowego serwera WWW.

```
# Dla domen głównych
certbot certonly --standalone -d [twoja_domena_glowna] -d www.[twoja_domena_glowna]

# Dla subdomen
certbot certonly --standalone -d [twoja_subdomena]

# Tryb interaktywny
certbot certonly --standalone
```

Po uruchomieniu polecenia może pojawić się pierwsza interaktywna konfiguracja, która poprosi o podanie adresu e-mail do komunikacji dotyczącej certyfikatu, opcjonalną listę mailingową oraz zaakceptowanie regulaminu.

Certbot wygeneruje teraz wyzwanie ACME i udostępni je przez tymczasowy serwer WWW. Serwery Let's Encrypt spróbują pobrać to z twojego serwera, a po powodzeniu certyfikaty zostaną wygenerowane i zapisane w ścieżce `/etc/letsencrypt/live/[twoja_domena]`.

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

Teraz możesz używać certyfikatów SSL tam, gdzie potrzebujesz, podając lokalną ścieżkę do certyfikatów.

### Rekord TXT DNS

Jeśli masz problemy z weryfikacją domeny metodą **HTTP-01**, alternatywnie możesz spróbować metody **DNS-01**, która polega na utworzeniu rekordu **TXT** DNS z wartością podaną przez Let's Encrypt.

Jak wspomniano wcześniej, ta metoda **nie** wspiera automatycznego odnawiania, chyba że samodzielnie skonfigurujesz infrastrukturę do zarządzania tym procesem. Dlatego zdecydowanie polecamy metodę **HTTP-01**, jeśli to możliwe.

W poniższym poleceniu użyjesz parametru `--preferred-challenges`, aby poinformować Certbota, że chcesz użyć metody `DNS-01`.

```
# Dla domen głównych
certbot certonly --preferred-challenges dns-01 -d [twoja_domena_glowna] -d www.[twoja_domena_glowna] --manual -m [twoja_domena_glowna] -m www.[twoja_domena_glowna]

# Dla subdomen
certbot certonly --preferred-challenges dns-01 -d [twoja_subdomena] --manual -m [twoja_subdomena]

# Tryb interaktywny
certbot certonly --preferred-challenges dns-01
```

Po uruchomieniu polecenia może pojawić się pierwsza interaktywna konfiguracja, która poprosi o podanie adresu e-mail do komunikacji dotyczącej certyfikatu, opcjonalną listę mailingową oraz zaakceptowanie regulaminu.

Certbot poda teraz instrukcje, jak utworzyć rekord **TXT** DNS z konkretną wartością, którą musisz użyć. Cel będzie zwykle miał postać `_acme-challenge.` poprzedzającą twoją domenę (w tym przykładzie to `_acme-challenge.zapdocs.example.com`), a wartość do ustawienia zostanie podana w konsoli.

Po utworzeniu rekordu naciśnij enter, aby kontynuować. Jeśli wszystko jest poprawne i rekord się rozpropagował, certyfikaty zostaną wygenerowane i zapisane w ścieżce `/etc/letsencrypt/live/[twoja_domena]`.

:::note
Prosimy o cierpliwość, ponieważ zmiany w rekordach DNS mogą chwilę potrwać, zanim się rozpropagują. Zazwyczaj trwa to kilka minut, ale w rzadkich przypadkach może potrwać dłużej.
:::

Teraz możesz używać certyfikatów SSL tam, gdzie potrzebujesz, podając lokalną ścieżkę do certyfikatów.

## Wtyczki serwera WWW

Certbot ma różne dodatkowe wtyczki do serwerów WWW, które jeszcze bardziej ułatwiają zarządzanie certyfikatami, bo automatycznie edytują odpowiednie bloki serwera. Aby użyć wtyczki, wystarczy dodać odpowiedni parametr do polecenia `certbot`.

Obie metody korzystają z wyzwania **HTTP-01** i działają zasadniczo tak samo. Gdy użyjesz jednej z wtyczek, Certbot najpierw znajdzie odpowiedni blok serwera, który zawiera żądaną domenę jako parametr `server_name`. Po znalezieniu Certbot wygeneruje wyzwanie ACME i doda tymczasowy blok `location /.well-known/acme-challenge/...` do konfiguracji serwera.

Serwery Let's Encrypt spróbują pobrać to z twojego serwera, a po powodzeniu certyfikat zostanie wygenerowany, a konfiguracja serwera zostanie automatycznie zmieniona, aby korzystać z HTTPS (port 443) i dodać ścieżki do nowo wygenerowanego certyfikatu.

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
Jeśli chcesz wyłączyć automatyczne „jednoklikowe” zmiany bloków serwera przez Certbot, możesz dodać parametr `certonly`, np. `certbot certonly`.
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
Jeśli chcesz wyłączyć automatyczne „jednoklikowe” zmiany bloków serwera przez Certbot, możesz dodać parametr `certonly`, np. `certbot certonly`.
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Wtyczka Webroot

Jeśli korzystasz z własnego lokalnego serwera WWW, który nie używa tradycyjnego oprogramowania, możesz chcieć użyć metody webroot, aby korzystać z własnego serwera bez konieczności jego zatrzymywania.

Aby użyć wtyczki Webroot, dodaj parametr `--webroot` do polecenia oraz `-w [ścieżka_do_twojego_serwera]` (czyli `--webroot-path`), który wskazuje na katalog główny twojego serwera WWW.

```
# Dla domen głównych
certbot --webroot -w [ścieżka_do_twojego_serwera] -d [twoja_domena_glowna] -d www.[twoja_domena_glowna]

# Dla subdomen
certbot --webroot -w [ścieżka_do_twojego_serwera] -d [twoja_subdomena]

# Tryb interaktywny
certbot --webroot -w [ścieżka_do_twojego_serwera]
```

:::tip
Jedna z najczęstszych lokalizacji webroot to `/var/www/html`. Możesz też użyć tej metody dla serwerów takich jak Nginx czy Apache, jeśli chcesz korzystać z serwera bez automatycznych zmian bloków serwera, które oferują natywne wtyczki.
:::

</TabItem>
</Tabs>

## Automatyczne odnawianie

W większości przypadków Certbot automatycznie ustawi odnawianie certyfikatów za pomocą cronjob lub timera systemd. Możesz to sprawdzić, uruchamiając polecenie testowe z parametrem `--dry-run`:

```
certbot renew --dry-run
```

:::tip
Jak wspomniano wcześniej, metoda **DNS-01** nie wspiera automatycznego odnawiania przez Certbot, chyba że samodzielnie skonfigurujesz infrastrukturę do tego celu. Dlatego zalecamy korzystanie z metody **HTTP-01**.
:::

Jeśli wszystko jest poprawnie skonfigurowane, test powinien się powieść. Jeśli chcesz zobaczyć lub zmienić ustawienia automatycznego odnawiania, znajdziesz je w jednym z miejsc: `/etc/crontab/`, `/etc/cron.*/*` lub przez `systemctl list-timers`.

### Ręczna konfiguracja cronjob

Jeśli z jakiegoś powodu automatyczne odnawianie nie jest ustawione, możesz dodać je samodzielnie przez cronjob. Otwórz edytor crontab poleceniem `crontab -e`. Jeśli robisz to pierwszy raz, zostaniesz poproszony o wybór edytora — wybierz pierwszą opcję, czyli `/bin/nano`.

Po otwarciu pliku w nano dodaj poniższą linię, aby odnawianie odbywało się codziennie o 6 rano czasu lokalnego.

```
0 6 * * * certbot renew
```

Zapisz plik i wyjdź z nano, używając `CTRL + X`, następnie `Y`, a na końcu `ENTER`.

## Podsumowanie

Pomyślnie skonfigurowałeś Certbota dla swoich domen różnymi metodami, w tym standalone, webroot lub przez wtyczki, zapewniając swojej stronie bezpieczne przesyłanie danych przez HTTPS. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂