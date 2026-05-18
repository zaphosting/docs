---
id: dedicated-linux-wordpress
title: "Konfiguracja WordPress na serwerze Linux - Uruchom swoją własną stronę lub blog"
description: "Dowiedz się, jak zainstalować WordPress na serwerze Linux z użyciem stosu LAMP, aby efektywnie tworzyć i zarządzać swoją stroną → Sprawdź teraz"
sidebar_label: Instalacja WordPress
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

WordPress to popularny system zarządzania treścią stron internetowych, wykorzystywany do tworzenia i publikowania witryn. W dzisiejszych czasach WordPress rozwinął się również w inne obszary, takie jak mailing, fora, sklepy i wiele więcej. Wspiera go prężna społeczność, która stworzyła rozbudowany ekosystem wtyczek oraz szablonów, dzięki którym każdy użytkownik może łatwo skonfigurować niemal wszystko. W tym poradniku pokażemy, jak zainstalować CMS WordPress na serwerze Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)



## Instalacja WordPress za pomocą One Click Apps Installer

WordPress możesz zainstalować bezpośrednio przez nasz **One Click Apps Installer** w panelu VPS. Po zakończeniu wstępnej konfiguracji aplikacji, otwórz katalog aplikacji, wyszukaj **WordPress** i rozpocznij wdrożenie, wybierając preferowany projekt, środowisko i ustawienia domeny. To szybki i wygodny sposób na uruchomienie i zarządzanie WordPressem bez ręcznej konfiguracji w terminalu, a jednocześnie z korzyściami takimi jak zarządzanie przez panel webowy, wsparcie dla własnej domeny i automatyczne wystawianie certyfikatów SSL tam, gdzie to możliwe.

## Przygotowanie

Zacznij od połączenia się z serwerem przez SSH. Jeśli nie wiesz jak to zrobić, zerknij na nasz [poradnik Pierwszy dostęp (SSH)](dedicated-linux-ssh.md).

:::info
W tym poradniku używamy dystrybucji Ubuntu, serwera Apache jako serwera WWW, MySQL jako bazy danych oraz PHP jako głównej zależności. To tzw. stos LAMP: Linux, Apache, MySQL i PHP.
:::

Po zalogowaniu się, zacznij od aktualizacji pakietów:
```
sudo apt update
```

Następnie zainstaluj wszystkie niezbędne zależności. Skopiuj poniższe polecenie i wklej je, aby zainstalować wszystko naraz. Bądź cierpliwy, instalacja może chwilę potrwać.
```
sudo apt install apache2 \
                 ghostscript \
                 libapache2-mod-php \
                 mysql-server \
                 php \
                 php-bcmath \
                 php-curl \
                 php-imagick \
                 php-intl \
                 php-json \
                 php-mbstring \
                 php-mysql \
                 php-xml \
                 php-zip
```

Po instalacji zależności, wykonaj kilka zalecanych kroków konfiguracyjnych, aby upewnić się, że wszystkie kluczowe komponenty stosu LAMP działają poprawnie.

### Apache & zapora sieciowa

Na początek musisz skonfigurować zaporę sieciową, aby serwer Apache mógł komunikować się z internetem i działał poprawnie. Ważne jest, aby odpowiednie reguły zapory umożliwiały dostęp do serwera WWW z internetu.

W tym przykładzie użyjemy **zapory UFW**, ponieważ Apache ma zarejestrowaną aplikację dla niej. Jeśli korzystasz z innej zapory, upewnij się, że port 80 (HTTP) jest otwarty. Więcej o zaporach w Linux znajdziesz w naszym [poradniku Zarządzanie zaporą](vserver-linux-firewall.md).

Upewnij się, że zapora UFW jest włączona i że masz regułę dla SSH.
```
# Dodaj regułę dla SSH
sudo ufw allow OpenSSH

# Włącz zaporę UFW
sudo ufw enable
```

:::caution
Pamiętaj, aby mieć regułę dla SSH, jeśli używasz zapory UFW! Bez niej **nie** połączysz się ponownie przez SSH, jeśli stracisz aktualną sesję!
:::

Teraz dodaj regułę dla Apache i sprawdź, czy reguły są aktywne.
```
# Dodaj regułę dla Apache
sudo ufw allow in "Apache Full"

# Sprawdź reguły zapory UFW
sudo ufw status
```

:::tip
Listę dostępnych profili aplikacji zobaczysz poleceniem `ufw app list`. W przykładzie `Apache Full` oznacza, że otwierane są porty HTTP (80) i HTTPS (443).
:::

Powinieneś zobaczyć reguły `Apache` i `Apache (v6)` z akcją `ALLOW`, co potwierdza, że zapora jest gotowa. Powinieneś też zobaczyć inne wcześniej dodane reguły, w tym dla SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Po otwarciu zapory dla Apache, sprawdź, czy serwer działa. W przeglądarce wpisz adres IP serwera: `http://[twoj_adres_ip]`

Jeśli działa, zobaczysz domyślną stronę powitalną. Jeśli nie, sprawdź status usługi poleceniem: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Konfiguracja MySQL

Kolejnym krokiem jest pierwsza konfiguracja MySQL. Zalecamy uruchomienie skryptu zabezpieczającego, który poprawi bezpieczeństwo Twojej instancji MySQL. To opcjonalne, ale bardzo polecane. Uruchom go poleceniem `sudo mysql_secure_installation`.

Przejdziesz przez interaktywną konfigurację. Najpierw zostaniesz zapytany o walidację haseł. Zalecamy wybrać `Y`, aby wymusić silne hasła, a następnie poziom `MEDIUM` (1) lub `STRONG` (2).

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Następnie zostaniesz zapytany o usunięcie użytkownika `anonymous` i zablokowanie zdalnego logowania root. Dla bezpieczeństwa zdecydowanie polecamy potwierdzić `Y`. Dzięki temu testowy użytkownik zostanie usunięty, a konto root będzie dostępne tylko lokalnie przez SSH, co zmniejsza ryzyko.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Na koniec zostaniesz zapytany o usunięcie bazy `test` i przeładowanie tabel uprawnień. Również potwierdź `Y`, bo baza testowa nie jest potrzebna, a przeładowanie tabel jest konieczne, by zmiany zaczęły działać.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Sprawdź, czy MySQL działa, próbując się zalogować: `sudo mysql -u root`. Jeśli się uda, zobaczysz powitalny komunikat. Wyjdź poleceniem `quit`.

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### Testowanie PHP

Na koniec upewnij się, że PHP działa poprawnie. Stwórz plik `info.php` w katalogu Apache `/var/www/html/` z zawartością wywołującą `phpinfo()`.
```
# Otwórz edytor nano w nowym pliku
nano /var/www/html/info.php

# Wklej poniższą zawartość
<?php
phpinfo();
?>
```

Zapisz plik, naciskając `CTRL+X`, potem `Y` i `Enter`.

Teraz w przeglądarce wpisz adres:
```
http://[twoj_adres_ip]/info.php
```

Powinna pojawić się strona z informacjami o PHP, co potwierdzi, że działa poprawnie.

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

Po przetestowaniu i potwierdzeniu działania kluczowych komponentów stosu LAMP, możesz przejść do instalacji WordPressa.

## Instalacja

Instalację WordPress można podzielić na trzy etapy: przygotowanie bazy danych MySQL, instalacja WordPress oraz konfiguracja przez kreatora instalacji.

### Baza danych MySQL

Na początek musisz utworzyć nową bazę danych MySQL. To ważne, bo podczas konfiguracji WordPressa będziesz potrzebować tych danych. Polecamy skorzystać z naszych przykładów.

Skopiuj poniższe polecenia, aby utworzyć bazę, tabele i użytkownika.
```
# Zaloguj się do MySQL
sudo mysql -u root

# Utwórz bazę danych
CREATE DATABASE wordpress;

# Utwórz dedykowanego użytkownika wordpress
# Zamień [twoje_haslo] na własne hasło
CREATE USER wordpress@localhost IDENTIFIED BY '[twoje_haslo]';

# Nadaj uprawnienia użytkownikowi (wklej jako jedno polecenie)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Przeładuj tabele uprawnień
FLUSH PRIVILEGES;
```

Po utworzeniu bazy i użytkownika wyjdź poleceniem `quit`. Teraz możesz przejść do instalacji WordPress.

### Instalacja WordPress

Do instalacji WordPressa polecamy pobrać oficjalną wersję z **wordpress.org**, a nie korzystać z pakietu APT, co jest rekomendowane przez sam WordPress, by uniknąć problemów.

Pobierz najnowszą wersję do katalogu tymczasowego:
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Rozpakuj archiwum, co utworzy folder `wordpress` z wszystkimi plikami.
```
tar -xvf latest.tar.gz
```

Skopiuj folder do katalogu Apache `/var/www/html/`, aby udostępnić go przez WWW. Wykonaj poniższe polecenia, które skopiują folder, utworzą katalog `uploads` i ustawią odpowiednie uprawnienia, aby grupa `www-data` miała dostęp.
```
# Skopiuj folder wordpress i zmień właściciela
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# Utwórz katalog uploads
mkdir /var/www/html/wordpress/wp-content/uploads

# Ustaw uprawnienia plików
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

Po tym WordPress powinien być zainstalowany. Wejdź w przeglądarce na adres: `http://[twoj_adres_ip]/wordpress`

### Kreator konfiguracji

W kreatorze konfiguracji możesz teraz ustawić WordPress, co jest ostatnim krokiem instalacji. Najpierw wybierz język.

Następnie skonfiguruj ustawienia bazy danych. Przygotowałeś je wcześniej w MySQL, więc użyj tych samych danych. Jeśli korzystałeś z naszych przykładów, wypełnij pola tak, zamieniając `[twoje_haslo]` na swoje hasło.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

Po tym kroku zostaniesz poproszony o uruchomienie instalacji. To ostatnia część procesu.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

Na kolejnej stronie wpisz tytuł strony, adres e-mail oraz nazwę użytkownika i hasło dla konta administratora WordPressa, którym będziesz logować się do panelu. Możesz też zdecydować o widoczności strony dla wyszukiwarek — czy ma być indeksowana, czy nie.

:::tip
Wybierz silne hasło i zapisz dane logowania, żeby nie stracić dostępu do panelu WordPress!
:::

Gdy wszystko gotowe, kliknij **Zainstaluj WordPress**, aby zakończyć instalację.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Zostaniesz przekierowany na stronę sukcesu, a następnie do strony logowania. Zaloguj się używając swoich danych, aby po raz pierwszy wejść do panelu WordPress!

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

I tak, po poprawnym logowaniu, znajdziesz się w panelu WordPress z kompletną instalacją.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować WordPress! Kolejnym krokiem **gorąco polecamy** podpięcie domeny i certyfikatu **SSL**, aby zapewnić bezpieczne przesyłanie danych i ułatwić dostęp do panelu WordPress. Zerknij na nasz [poradnik Certbot](dedicated-linux-certbot.md) ze szczególnym uwzględnieniem **wtyczki Apache** i wykonaj interaktywną konfigurację, aby szybko i łatwo wystawić certyfikat dla swojej domeny.

Na przyszłość polecamy też zapoznać się z naszymi poradnikami o [wtyczkach WordPress](webspace-wordpress-plugins.md) oraz [Elementorze dla WordPress](webspace-wordpress-elementor.md), które pokażą Ci, jak instalować wtyczki i korzystać z popularnego, przyjaznego kreatora stron Elementor.

Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂