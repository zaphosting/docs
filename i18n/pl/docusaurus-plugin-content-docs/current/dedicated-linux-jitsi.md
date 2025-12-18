---
id: dedicated-linux-jitsi
title: "Serwer dedykowany: Instalacja Jitsi Meet"
description: "Dowiedz się, jak skonfigurować i uruchomić własny, bezpieczny serwer wideokonferencji Jitsi Meet, aby łatwo i prywatnie prowadzić spotkania online → Sprawdź teraz"
sidebar_label: Instalacja Jitsi Meet
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Jitsi Meet to open source’owe oprogramowanie do wideokonferencji, dzięki któremu możesz uruchomić własne wideokonferencje na swoim serwerze. Dużą zaletą Jitsi Meet jest łatwa obsługa: potrzebujesz tylko przeglądarki (na telefonach komórkowych aplikacji Jitsi) i nie logujesz się do żadnych zewnętrznych usług. Każda wideokonferencja dostaje swój własny URL, dzięki któremu można do niej dołączyć. Jitsi Meet jest idealne do wideokonferencji nawet z osobami, które nie są zbyt obeznane z technologią.  
Uwaga: Bez dodatkowych ustawień każdy, kto wejdzie na serwer Jitsi Meet, może uruchomić własną wideokonferencję na serwerze.

## Instalacja Jitsi Meet na serwerze Debian

Poniżej pokażemy, jak zainstalować serwer Jitsi Meet na serwerze Debian. W zasadzie Jitsi Meet działa też na innych serwerach Linux, np. Ubuntu, a instalacja jest bardzo podobna.

### Przygotowania

Aby korzystać z Jitsi Meet poprawnie, powinieneś użyć własnej domeny do dostępu do serwera Jitsi. Warto stworzyć własną subdomenę dla serwera Jitsi Meet. Jako przykład używamy domeny meet.zap-testdomain.de.  
Dla domen ZAP-Hosting musisz utworzyć nowy wpis w panelu administracji DNS. W polu „Nazwa” wpisz nazwę subdomeny, a w polu „Wartość” wpisz adres IP swojego serwera. W naszym przykładzie wpiszemy „meet” w polu Nazwa, a w polu Wartość adres IP testowego serwera ZAP, na którym zainstalujemy Jitsi Meet: 185.239.239.49 (wpisz adres IP swojego serwera, nie ten przykładowy).

Dostęp do serwera Jitsi Meet przez adres IP jest możliwy, ale do certyfikatu SSL potrzebna jest domena. Bez domeny przeglądarka wyświetli ostrzeżenie o bezpieczeństwie.

Gdy subdomena jest ustawiona (zmiany mogą się propagować do 24 godzin), możesz przygotować serwer do instalacji.  
Połącz się z serwerem przez Putty lub WinSCP.  
Przed kontynuacją upewnij się, że serwer jest zaktualizowany. W razie potrzeby każdą komendę uruchamiaj z uprawnieniami superużytkownika, dodając „sudo” przed poleceniem (np. „sudo apt-get update”).

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

Ustaw następujące reguły w zaporze:

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

Po instalacji pakietu pobierz klucz GPG Jitsi i dodaj go:
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

Teraz możesz zainstalować Jitsi Meet. Zalecamy najpierw zaktualizować listę pakietów:
```
$	apt update
```
```
$	apt install jitsi-meet
```

Podczas instalacji zostaniesz poproszony o podanie nazwy hosta. Wpisz subdomenę, którą utworzyłeś dla swojego serwera Jitsi Meet. W naszym przykładzie to: meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/jHEGSQARQrDKLoz/preview)

Potwierdź „Ok”. Otworzy się nowe okno z pytaniem, czy chcesz wygenerować samopodpisany certyfikat TLS, czy użyć istniejącego. Wybierz opcję „Generate a new self-signed certificate” (Wygeneruj nowy samopodpisany certyfikat):

![](https://screensaver01.zap-hosting.com/index.php/s/QWmYp3gdXMnBdnC/preview)

Instalacja Jitsi Meet jest teraz zakończona, a jedyne co pozostaje, to pobrać certyfikat TLS.  
Zainstaluj pakiet Certbot:
```
$	apt install certbot
```

Uruchom skrypt instalujący certyfikat TLS:
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

Podczas działania skryptu zostaniesz poproszony o podanie adresu e-mail, który zostanie przesłany do letsencrypt.org. Wpisz swój e-mail i potwierdź.

Po tym Jitsi Meet powinno być w pełni zainstalowane i aktywne na Twoim serwerze. Aby sprawdzić, czy instalacja się powiodła, wpisz w przeglądarce subdomenę, którą ustawiłeś. W tym poradniku to:
```
https://meet.zap-testdomain.de
```

Jeśli strona z Jitsi Meet się załaduje, możesz od razu zacząć swoją pierwszą wideokonferencję.