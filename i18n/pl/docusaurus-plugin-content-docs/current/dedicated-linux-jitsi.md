---
id: dedicated-linux-jitsi
title: "Serwer dedykowany: Instalacja Jitsi Meet"
description: "Dowiedz się, jak skonfigurować i uruchomić własny bezpieczny serwer wideokonferencji Jitsi Meet, aby łatwo i prywatnie organizować spotkania online → Sprawdź teraz"
sidebar_label: Instalacja Jitsi Meet
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Jitsi Meet to open source’owe oprogramowanie do wideokonferencji, dzięki któremu możesz uruchomić własne wideokonferencje na swoim serwerze. Dużą zaletą Jitsi Meet jest łatwość obsługi: potrzebujesz tylko przeglądarki (na telefonach komórkowych aplikacji Jitsi) i nie logujesz się do żadnych zewnętrznych usług. Każda wideokonferencja otrzymuje swój własny URL do dołączenia. Jitsi Meet jest idealne do wideokonferencji nawet z osobami, które nie są zbyt doświadczone.
Uwaga: Bez dodatkowych ustawień każdy, kto połączy się z serwerem Jitsi Meet, może uruchomić własne wideokonferencje na serwerze.

<InlineVoucher />

## Instalacja Jitsi Meet na serwerze Debian

Poniżej pokazujemy, jak zainstalować serwer Jitsi Meet na serwerze Debian. W zasadzie Jitsi Meet działa też na innych serwerach Linux, np. Ubuntu, a instalacja jest bardzo podobna.

### Przygotowania

Aby korzystać z Jitsi Meet poprawnie, powinieneś użyć własnej domeny do dostępu do serwera Jitsi. Warto utworzyć własną subdomenę dla serwera Jitsi Meet. Jako przykład używamy domeny meet.zap-testdomain.de.
Dla domen ZAP-Hosting musisz utworzyć nowy wpis w panelu administracji DNS. W polu „Nazwa” wpisz nazwę subdomeny, a w polu „Wartość” adres IP twojego serwera. W naszym przykładzie wpisujemy „meet” w polu Nazwa, a adres IP testowego serwera ZAP, na którym zainstalujemy Jitsi Meet, w polu Wartość: 185.239.239.49 (wpisz adres IP swojego serwera, nie ten przykładowy)

Możesz połączyć się z serwerem Jitsi Meet przez adres IP, ale do certyfikatu SSL potrzebna jest domena. Bez domeny przeglądarka wyświetli ostrzeżenie o bezpieczeństwie.

Gdy subdomena jest ustawiona (zmiany mogą się aktywować do 24 godzin), możesz przygotować serwer do instalacji.
Połącz się z serwerem przez Putty lub WinSCP.
Przed kontynuacją upewnij się, że serwer jest zaktualizowany. W razie potrzeby każdy polecenie uruchom z uprawnieniami superużytkownika, dodając „sudo” przed poleceniem (np. „sudo apt-get update”)

```
$	apt-get update
```
```
$	apt-get upgrade
```

Jeśli na serwerze nie ma zapory sieciowej, możesz zainstalować np. UFW:
```
$	apt install ufw
```

Wykonaj następujące ustawienia zapory:

```
$	ufw allow OpenSSH
$	ufw allow 80/tcp
$	ufw allow 443/tcp
$	ufw allow 4443/tcp
$	ufw allow 10000/udp
```

Włącz zaporę:
```
$	ufw enable
```

Sprawdź status:
```
$	ufw status
```

### Instalacja Jitsi Meet

Do instalacji Jitsi Meet potrzebujesz najpierw pakietu gnupg:
```
$	apt install gnupg
```

Po instalacji pakietu pobierz klucz Jitsi-GPG i dodaj go:
```
$	wget https://download.jitsi.org/jitsi-key.gpg.key
```
```
$	apt-key add jitsi-key.gpg.key
```

Aby zainstalować Jitsi Meet, musisz dodać repozytorium Jitsi:
```
$	nano /etc/apt/sources.list.d/jitsi-stable.list
```

W edytorze dodaj następującą linię. Następnie zapisz zmiany i zamknij edytor:
```
$	deb https://download.jitsi.org stable/
```

Teraz możesz zainstalować Jitsi Meet. Zalecamy ponownie zaktualizować wszystkie pakiety:
```
$	apt update
```
```
$	apt install jitsi-meet
```

Podczas instalacji zostaniesz poproszony o podanie nazwy hosta. Wpisz subdomenę, którą utworzyłeś dla swojego serwera Jitsi Meet. W naszym przykładzie testowym to: meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/jHEGSQARQrDKLoz/preview)


Potwierdź wpisanie przyciskiem „Ok”. Otworzy się nowe okno z pytaniem, czy chcesz wygenerować samopodpisany certyfikat TLS, czy użyć istniejącego. Wybierz opcję „Generate a new self-signed certificate”:

![](https://screensaver01.zap-hosting.com/index.php/s/QWmYp3gdXMnBdnC/preview)


Instalacja Jitsi Meet jest teraz zakończona i wystarczy pobrać certyfikat TLS.
Zainstaluj pakiet Certbot:
```
$	apt install certbot
```

Uruchom skrypt instalujący certyfikat TLS:
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

Podczas działania zostaniesz poproszony o podanie adresu e-mail, który zostanie przesłany do letsencrypt.org. Wpisz adres e-mail i potwierdź.

Po tym Jitsi Meet powinno być w pełni zainstalowane i aktywne na twoim serwerze. Aby sprawdzić, czy Jitsi Meet działa poprawnie, wpisz w przeglądarce subdomenę, którą ustawiłeś. W tym poradniku to:
```
https://meet.zap-testdomain.de
```

Jeśli strona z Jitsi Meet się załaduje, możesz od razu zacząć swoją pierwszą wideokonferencję.

<InlineVoucher />