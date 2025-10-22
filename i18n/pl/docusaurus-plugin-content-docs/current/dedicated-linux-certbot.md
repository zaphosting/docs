---
id: dedicated-linux-certbot
title: "Serwer dedykowany: Konfiguracja Certbot na Linux"
description: "Dowiedz się, jak zabezpieczyć swoją stronę darmowymi certyfikatami SSL za pomocą Certbot i Let's Encrypt dla bezpiecznego przesyłania danych → Sprawdź teraz"
sidebar_label: Instalacja Certbot
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Certyfikaty SSL to kluczowy element internetu, zapewniający bezpieczne przesyłanie danych między klientem a hostem. W tym poradniku pokażemy, jak skonfigurować open-source’owe narzędzie [**Certbot**](https://certbot.eff.org/), aby uzyskać darmowe certyfikaty SSL od organizacji non-profit **Let's Encrypt**.

<InlineVoucher />

## Przygotowanie

Aby korzystać z Certbot, potrzebujesz serwera Linux oraz **domeny**, którą posiadasz. Musisz mieć dostęp do ustawień DNS domeny i **musisz** utworzyć rekord `A` w DNS wskazujący na adres IP Twojego __serwera Linux__ dla każdej domeny głównej lub subdomeny, którą chcesz zabezpieczyć.

Certbot oferuje też dodatkowe wtyczki, które pozwalają na łatwą, „jednoklikową” konfigurację certyfikatu dla domen współpracujących z popularnymi serwerami WWW, takimi jak Nginx czy Apache. Polecamy Nginx, bo to szybki i popularny serwer open-source. Pomoc znajdziesz w naszym [poradniku o reverse proxy na Linux](dedicated-linux-proxy.md).

## Instalacja

Zacznij od instalacji open-source’owego pakietu [**Certbot**](https://certbot.eff.org/), który posłuży Ci do pobierania darmowych certyfikatów od **Let's Encrypt**.

```
sudo apt install certbot
```

Po instalacji Certbota możesz przejść do zamawiania certyfikatów dla swoich domen. Let's Encrypt i Certbot oferują różne wyzwania ACME do weryfikacji własności domeny.

Zalecamy korzystanie z domyślnej metody **HTTP-01**, bo pozwala na automatyczne odnawianie certyfikatów. Jeśli jednak napotkasz problemy, możesz spróbować metody **DNS-01**, która jest manualna i nie wspiera automatycznego odnawiania, bo wymaga weryfikacji przez rekord **TXT** w DNS.

:::tip Wykorzystaj wtyczki serwera WWW
Jeśli korzystasz z serwera WWW takiego jak Nginx, Apache lub własnego, polecamy przejść do sekcji **Wtyczki serwera WWW** poniżej. Pokażemy tam, jak użyć dodatkowych wtyczek Certbota do „jednoklikowej” instalacji certyfikatu oraz zamawiania certyfikatów bez konieczności wyłączania serwera WWW.
:::

### Wyzwanie HTTP-01

Po instalacji Certbota możesz zamówić certyfikaty dla swoich domen. W tym przykładzie użyjemy trybu standalone, co oznacza, że Certbot uruchomi tymczasowy serwer WWW, aby wykonać niezbędne działania. Musisz więc otworzyć port 80 w zaporze i nie mieć żadnego innego serwera lub usługi działającej na porcie 80, aby tymczasowy serwer mógł wystartować i umożliwić pobranie wyzwania (stąd nazwa `HTTP` w wyzwaniu).

W poniższym poleceniu użyjesz parametru `--standalone`, aby poinformować Certbota o chęci użycia tymczasowego serwera WWW.

```
# Dla domen głównych
certbot certonly --standalone -d [twoja_domena_glowna] -d www.[twoja_domena_glowna]

# Dla subdomen
certbot certonly --standalone -d [twoja_subdomena]

# Tryb interaktywny
certbot certonly --standalone
```

Po uruchomieniu polecenia może pojawić się interaktywna konfiguracja, w której podasz adres e-mail do komunikacji dotyczącej certyfikatu, opcjonalnie zapiszesz się na listę mailingową oraz zaakceptujesz regulamin.

Certbot wygeneruje teraz wyzwanie ACME i udostępni je przez tymczasowy serwer WWW. Serwery Let's Encrypt spróbują pobrać to wyzwanie z Twojego serwera, a po sukcesie certyfikaty zostaną wygenerowane i zapisane w katalogu `/etc/letsencrypt/live/[twoja_domena]`.

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

Teraz możesz korzystać z certyfikatów SSL wszędzie tam, gdzie potrzebujesz, podając lokalną ścieżkę do certyfikatów.

### Rekord TXT w DNS

Jeśli masz problemy z weryfikacją domeny metodą **HTTP-01**, możesz spróbować metody **DNS-01**, która wymaga utworzenia rekordu **TXT** w DNS z wartością podaną przez Let's Encrypt.

Jak wspomniano, ta metoda **nie** wspiera automatycznego odnawiania, chyba że samodzielnie skonfigurujesz infrastrukturę do zarządzania tym procesem. Dlatego zalecamy korzystać z metody **HTTP-01** tam, gdzie to możliwe.

W poniższym poleceniu użyjesz parametru `--preferred-challenges`, aby wybrać metodę `DNS-01`.

```
# Dla domen głównych
certbot certonly --preferred-challenges dns-01 -d [twoja_domena_glowna] -d www.[twoja_domena_glowna] --manual -m [twoja_domena_glowna] -m www.[twoja_domena_glowna]

# Dla subdomen
certbot certonly --preferred-challenges dns-01 -d [twoja_subdomena] --manual -m [twoja_subdomena]

# Tryb interaktywny
certbot certonly --preferred-challenges dns-01
```

Po uruchomieniu polecenia pojawi się interaktywna konfiguracja, w której podasz adres e-mail do komunikacji dotyczącej certyfikatu, opcjonalnie zapiszesz się na listę mailingową oraz zaakceptujesz regulamin.

Certbot poda Ci instrukcje, jak utworzyć rekord **TXT** w DNS z konkretną wartością. Nazwa rekordu będzie zwykle miała prefiks `_acme-challenge.` dodany do Twojej domeny (np. `_acme-challenge.zapdocs.example.com`), a wartość będzie podana w konsoli.

Po utworzeniu rekordu naciśnij Enter, aby kontynuować. Jeśli wszystko jest poprawne i rekord się rozpropagował, certyfikaty zostaną wygenerowane i zapisane w katalogu `/etc/letsencrypt/live/[twoja_domena]`.

:::note
Bądź cierpliwy, bo zmiany w rekordach DNS mogą chwilę potrwać, zanim się rozpropagują. Zazwyczaj trwa to kilka minut, ale czasem może zająć więcej czasu.
:::

Teraz możesz korzystać z certyfikatów SSL wszędzie tam, gdzie potrzebujesz, podając lokalną ścieżkę do certyfikatów.

## Wtyczki serwera WWW

Certbot ma różne dodatkowe wtyczki do serwerów WWW, które jeszcze bardziej ułatwiają zarządzanie certyfikatami, bo automatycznie edytują odpowiednie bloki konfiguracyjne serwera. Aby użyć wtyczki, wystarczy dodać odpowiedni parametr do polecenia `certbot`.

Obie metody korzystają z wyzwania **HTTP-01** i działają podobnie. Po wybraniu wtyczki Certbot wyszuka blok serwera, który zawiera żądaną domenę jako parametr `server_name`. Następnie wygeneruje wyzwanie ACME i doda tymczasowy blok `location /.well-known/acme-challenge/...` do konfiguracji serwera.

Serwery Let's Encrypt spróbują pobrać to wyzwanie z Twojego serwera, a po sukcesie certyfikat zostanie wygenerowany, a konfiguracja serwera WWW zostanie automatycznie zmodyfikowana, aby korzystać z HTTPS (port 443) i wskazywać na nowo wygenerowany certyfikat.

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Wtyczka Nginx

Przed użyciem wtyczki upewnij się, że jest zainstalowana.

```
sudo apt install python3-certbot-nginx
```

Aby skorzystać z wtyczki Nginx, dodaj parametr `--nginx` do polecenia, np.:

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

Aby skorzystać z wtyczki Apache, dodaj parametr `--apache` do polecenia, np.:

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

Jeśli korzystasz z własnego lokalnego serwera WWW, który nie jest oparty na popularnym oprogramowaniu, możesz użyć metody webroot, aby nie musieć zatrzymywać serwera.

Aby użyć wtyczki Webroot, dodaj parametr `--webroot` do polecenia oraz `-w [ścieżka_do_twojego_serwera]` (czyli `--webroot-path`), wskazujący na katalog główny Twojego serwera WWW.

```
# Dla domen głównych
certbot --webroot -w [ścieżka_do_twojego_serwera] -d [twoja_domena_glowna] -d www.[twoja_domena_glowna]

# Dla subdomen
certbot --webroot -w [ścieżka_do_twojego_serwera] -d [twoja_subdomena]

# Tryb interaktywny
certbot --webroot -w [ścieżka_do_twojego_serwera]
```

:::tip
Najczęściej spotykana lokalizacja webroot to `/var/www/html`. Możesz też użyć tej metody dla serwerów takich jak Nginx czy Apache, jeśli chcesz korzystać z serwera bez automatycznych zmian konfiguracji, które oferują natywne wtyczki.
:::

</TabItem>
</Tabs>

## Automatyczne odnawianie

W większości przypadków Certbot automatycznie ustawi odnawianie certyfikatów za pomocą cronjob lub systemd timer. Możesz to sprawdzić, uruchamiając polecenie testowe z parametrem `--dry-run`:

```
certbot renew --dry-run
```

:::tip
Jak wspomniano wcześniej, metoda **DNS-01** nie wspiera automatycznego odnawiania przez Certbot, chyba że samodzielnie skonfigurujesz infrastrukturę. Dlatego zalecamy korzystać z metody **HTTP-01**.
:::

Jeśli wszystko jest OK, test powinien się powieść. Jeśli chcesz zobaczyć lub zmienić ustawienia automatycznego odnawiania, znajdziesz je w jednym z miejsc: `/etc/crontab/`, `/etc/cron.*/*` lub przez `systemctl list-timers`.

### Ręczna konfiguracja cronjob

Jeśli z jakiegoś powodu automatyczne odnawianie nie jest ustawione, możesz dodać je samodzielnie przez cronjob. Otwórz edytor crontab poleceniem `crontab -e`. Jeśli robisz to pierwszy raz, wybierz edytor, np. `/bin/nano`.

W otwartym pliku nano dodaj linię, która będzie odnawiać certyfikaty codziennie o 6 rano lokalnego czasu:

```
0 6 * * * certbot renew
```

Zapisz plik i wyjdź z nano, używając `CTRL + X`, potem `Y`, a na końcu `ENTER`.

## Podsumowanie

Pomyślnie skonfigurowałeś Certbot dla swoich domen, korzystając z różnych metod: standalone, webroot lub wtyczek, zapewniając swojej stronie bezpieczne przesyłanie danych przez HTTPS. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />