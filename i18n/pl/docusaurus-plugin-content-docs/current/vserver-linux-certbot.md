---
id: vserver-linux-certbot
title: "VPS: Konfiguracja Certbot na Linux"
description: "Dowiedz się, jak zabezpieczyć swoją stronę darmowymi certyfikatami SSL za pomocą Certbot i Let's Encrypt dla bezpiecznej transmisji danych → Sprawdź teraz"
sidebar_label: Instalacja Certbot
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Certyfikaty SSL to kluczowy element internetu, zapewniający bezpieczną transmisję danych między klientem a hostem. W tym poradniku pokażemy, jak skonfigurować open-source'owe narzędzie [**Certbot**](https://certbot.eff.org/), aby uzyskać darmowe certyfikaty SSL od organizacji non-profit **Let's Encrypt**.

<InlineVoucher />

## Przygotowanie

Aby korzystać z Certbot, potrzebujesz serwera Linux oraz **domeny**, którą posiadasz. Musisz mieć dostęp do ustawień DNS domeny i **musisz** utworzyć rekord `A` w DNS wskazujący na adres IP Twojego __serwera Linux__ dla każdej domeny głównej lub subdomeny, której chcesz używać.

Certbot oferuje też dodatkowe wtyczki, które pozwalają na łatwą konfigurację certyfikatu "jednym kliknięciem" dla domen współpracujących z popularnymi serwerami www, takimi jak Nginx czy Apache. Polecamy Nginx, bo to wydajny i popularny serwer open-source. Zobacz nasz [poradnik o reverse proxy na Linux](vserver-linux-proxy.md), jeśli potrzebujesz pomocy z konfiguracją.

## Instalacja

Zacznij od instalacji open-source'owego pakietu [**Certbot**](https://certbot.eff.org/), którego użyjesz do pobrania darmowych certyfikatów SSL od **Let's Encrypt**.

```
sudo apt install certbot
```

Po instalacji Certbot możesz przejść do zamawiania certyfikatów dla swoich domen. Let's Encrypt i Certbot oferują różne wyzwania ACME do weryfikacji własności domeny.

Zalecamy korzystanie z domyślnej metody **HTTP-01**, bo pozwala na automatyczne odnawianie certyfikatów. Jeśli jednak napotkasz problemy, możesz spróbować metody **DNS-01**, która jest manualna i nie wspiera automatycznego odnawiania, bo wymaga weryfikacji przez rekord **TXT** w DNS.

:::tip Wykorzystaj wtyczki serwera www
Jeśli korzystasz z serwera www takiego jak Nginx, Apache lub własnego, polecamy przejść do sekcji **Web Server Plugins** poniżej, gdzie pokazujemy, jak używać dodatkowych wtyczek Certbot do "jednoklikowej" instalacji certyfikatu oraz zamawiania certyfikatów bez konieczności wyłączania serwera www.
:::

### Wyzwanie HTTP-01

Po instalacji Certbot możesz zamówić certyfikaty dla swoich domen. W tym przykładzie użyjemy trybu standalone, co oznacza, że Certbot uruchomi tymczasowy serwer www, aby wykonać niezbędne działania. Oznacza to, że musisz otworzyć port 80 w zaporze sieciowej i nie mieć żadnych innych serwerów lub usług działających na porcie 80, aby tymczasowy serwer mógł się uruchomić i umożliwić pobranie wyzwania (stąd nazwa `HTTP` w nazwie wyzwania).

W poniższym poleceniu użyjesz parametru `--standalone`, aby poinformować Certbot, że chcesz użyć opcji tymczasowego serwera www.

```
# Dla domen głównych
certbot certonly --standalone -d [twoja_domena_glowna] -d www.[twoja_domena_glowna]

# Dla subdomen
certbot certonly --standalone -d [twoja_subdomena]

# Interaktywna konfiguracja
certbot certonly --standalone
```

Po uruchomieniu polecenia może pojawić się interaktywna konfiguracja, w której podasz adres e-mail do komunikacji dotyczącej certyfikatu, opcjonalnie zapiszesz się na listę mailingową oraz zaakceptujesz regulamin.

Certbot wygeneruje teraz wyzwanie ACME i udostępni je przez tymczasowy serwer www. Serwery Let's Encrypt spróbują pobrać to z Twojego serwera, a po powodzeniu certyfikaty zostaną wygenerowane i zapisane w katalogu `/etc/letsencrypt/live/[twoja_domena]`.

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

Teraz możesz używać certyfikatów SSL wszędzie tam, gdzie potrzebujesz, podając lokalną ścieżkę do certyfikatów.

### Rekord TXT w DNS

Jeśli masz problemy z weryfikacją domeny przez metodę **HTTP-01**, możesz spróbować metody **DNS-01**, która wymaga utworzenia rekordu **TXT** w DNS z wartością podaną przez Let's Encrypt.

Jak wspomniano, ta metoda **nie** wspiera automatycznego odnawiania, chyba że samodzielnie skonfigurujesz infrastrukturę do zarządzania tym procesem. Dlatego zalecamy korzystanie z metody **HTTP-01**, jeśli to możliwe.

W poniższym poleceniu użyjesz parametru `--preferred-challenges`, aby wskazać Certbotowi, że chcesz użyć metody `DNS-01`.

```
# Dla domen głównych
certbot certonly --preferred-challenges dns-01 -d [twoja_domena_glowna] -d www.[twoja_domena_glowna] --manual -m [twoj_email]

# Dla subdomen
certbot certonly --preferred-challenges dns-01 -d [twoja_subdomena] --manual -m [twoj_email]

# Interaktywna konfiguracja
certbot certonly --preferred-challenges dns-01
```

Po uruchomieniu polecenia pojawi się interaktywna konfiguracja, w której podasz adres e-mail do komunikacji dotyczącej certyfikatu, opcjonalnie zapiszesz się na listę mailingową oraz zaakceptujesz regulamin.

Certbot poda Ci instrukcje, jak utworzyć rekord **TXT** w DNS z konkretną wartością. Nazwa rekordu będzie zwykle miała prefiks `_acme-challenge.` dodany do Twojej domeny (np. `_acme-challenge.zapdocs.example.com`), a wartość będzie podana w konsoli.

Po utworzeniu rekordu naciśnij Enter, aby kontynuować. Jeśli wszystko jest poprawnie ustawione i rekord się rozpropagował, certyfikaty zostaną wygenerowane i zapisane w katalogu `/etc/letsencrypt/live/[twoja_domena]`.

:::note
Bądź cierpliwy, bo zmiany w rekordach DNS mogą chwilę potrwać, zanim się rozpropagują. Zazwyczaj trwa to kilka minut, ale czasem może potrwać dłużej.
:::

Teraz możesz używać certyfikatów SSL wszędzie tam, gdzie potrzebujesz, podając lokalną ścieżkę do certyfikatów.

## Wtyczki serwera www

Certbot ma różne dodatkowe wtyczki do serwerów www, które ułatwiają zarządzanie certyfikatami, automatycznie edytując odpowiednie bloki konfiguracyjne serwera. Aby użyć wtyczki, wystarczy dodać odpowiedni parametr do polecenia `certbot`.

Obie metody korzystają z wyzwania **HTTP-01** i działają podobnie. Gdy używasz wtyczki, Certbot najpierw wyszukuje blok serwera zawierający żądaną domenę jako parametr `server_name`. Po znalezieniu Certbot generuje wyzwanie ACME i dodaje tymczasowy blok `location /.well-known/acme-challenge/...` do konfiguracji serwera.

Serwery Let's Encrypt pobierają ten plik z Twojego serwera, a po sukcesie certyfikat jest generowany, a konfiguracja serwera jest automatycznie zmieniana, aby korzystać z HTTPS (port 443) i wskazywać na nowo wygenerowany certyfikat.

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

# Interaktywna konfiguracja
certbot --nginx
```

:::tip
Jeśli chcesz wyłączyć automatyczne zmiany konfiguracji serwera przez Certbot, dodaj parametr `certonly`, np. `certbot certonly`.
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

# Interaktywna konfiguracja
certbot --apache
```

:::tip
Jeśli chcesz wyłączyć automatyczne zmiany konfiguracji serwera przez Certbot, dodaj parametr `certonly`, np. `certbot certonly`.
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Wtyczka Webroot

Jeśli korzystasz z własnego lokalnego serwera www, który nie jest oparty na popularnym oprogramowaniu, możesz użyć metody webroot, aby korzystać z własnego serwera bez konieczności jego zatrzymywania.

Aby użyć wtyczki Webroot, dodaj parametr `--webroot` do polecenia oraz `-w [ścieżka_do_twojego_serwera_www]` (czyli `--webroot-path`), wskazujący na katalog główny Twojego serwera www.

```
# Dla domen głównych
certbot --webroot -w [ścieżka_do_twojego_serwera_www] -d [twoja_domena_glowna] -d www.[twoja_domena_glowna]

# Dla subdomen
certbot --webroot -w [ścieżka_do_twojego_serwera_www] -d [twoja_subdomena]

# Interaktywna konfiguracja
certbot --webroot -w [ścieżka_do_twojego_serwera_www]
```

:::tip
Jedną z najczęstszych lokalizacji katalogu webroot jest `/var/www/html`. Możesz też użyć tej metody dla serwerów takich jak Nginx czy Apache, jeśli chcesz korzystać z serwera bez automatycznych zmian konfiguracji, które oferują natywne wtyczki.
:::

</TabItem>
</Tabs>

## Automatyczne odnawianie

W większości przypadków Certbot automatycznie konfiguruje odnawianie certyfikatów za pomocą cronjob lub systemd timer. Możesz to sprawdzić, uruchamiając polecenie testowe z parametrem `--dry-run`:

```
certbot renew --dry-run
```

:::tip
Jak wspomniano wcześniej, metoda **DNS-01** nie wspiera automatycznego odnawiania przez Certbot, chyba że samodzielnie skonfigurujesz infrastrukturę do zarządzania tym procesem. Dlatego zalecamy korzystanie z metody **HTTP-01**.
:::

Jeśli wszystko jest poprawnie skonfigurowane, test powinien zakończyć się sukcesem. Jeśli chcesz zobaczyć lub zmienić ustawienia automatycznego odnawiania, znajdziesz je w jednym z miejsc: `/etc/crontab/`, `/etc/cron.*/*` lub przez `systemctl list-timers`.

### Ręczna konfiguracja cronjob

Jeśli z jakiegoś powodu automatyczne odnawianie nie jest skonfigurowane, możesz dodać je samodzielnie przez cronjob. Otwórz edytor crontab poleceniem `crontab -e`. Jeśli robisz to pierwszy raz, zostaniesz poproszony o wybór edytora – wybierz pierwszą opcję, czyli `/bin/nano`.

W otwartym pliku nano dodaj poniższą linię, aby odnawiać certyfikaty codziennie o 6 rano czasu lokalnego:

```
0 6 * * * certbot renew
```

Zapisz plik i wyjdź z nano, używając `CTRL + X`, następnie `Y`, a na końcu `ENTER`.

## Podsumowanie

Pomyślnie skonfigurowałeś Certbot dla swoich domen, korzystając z różnych metod, takich jak standalone, webroot czy wtyczki, zapewniając swojej stronie bezpieczną transmisję danych przez HTTPS. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />