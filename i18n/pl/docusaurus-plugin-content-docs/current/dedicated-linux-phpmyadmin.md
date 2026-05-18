---
id: dedicated-linux-phpmyadmin
title: "Konfiguracja phpMyAdmin na serwerze Linux - Zarządzaj Bazami Danych przez Interfejs WWW"
description: "Dowiedz się, jak łatwo zarządzać bazami MySQL i MariaDB dzięki webowemu interfejsowi phpMyAdmin → Sprawdź teraz"
sidebar_label: Instalacja phpMyAdmin
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

phpMyAdmin to darmowe narzędzie webowe do zarządzania bazami danych MySQL i MariaDB. Oferuje przyjazny interfejs, który pozwala tworzyć, edytować, zarządzać i usuwać bazy danych bez konieczności ręcznego wpisywania poleceń SQL.



## Instalacja phpMyAdmin przez One Click Apps Installer

phpMyAdmin możesz zainstalować bezpośrednio przez nasz **One Click Apps Installer** w panelu VPS. Po zakończeniu wstępnej konfiguracji aplikacji, otwórz katalog aplikacji, wyszukaj **phpMyAdmin** i rozpocznij wdrożenie, wybierając swój projekt, środowisko i ustawienia domeny. To szybki i wygodny sposób na uruchomienie i zarządzanie **phpMyAdmin** bez ręcznej konfiguracji w terminalu, a jednocześnie z korzyścią z integracji webowego panelu, wsparcia dla własnej domeny i automatycznego SSL tam, gdzie jest dostępne.

## Przygotowanie

Przed rozpoczęciem instalacji upewnij się, że system jest aktualny. Aktualizacje i uaktualnienia wykonasz poleceniami:

```
sudo apt update -y
sudo apt upgrade -y
```

Musisz także mieć zainstalowane PHP na swoim systemie, co jest niezbędne do działania phpMyAdmin. Jak zainstalować PHP, sprawdź w naszym [poradniku Instalacja PHP](vserver-linux-php.md).

:::warning Brakujące pakiety PHP
Jeśli brakuje niezbędnych pakietów PHP, pliki phpMyAdmin nie będą poprawnie przetwarzane i wyświetlane. 
:::

## Instalacja

Gdy przygotowanie jest zakończone, możesz rozpocząć instalację interfejsu phpMyAdmin. Najpierw otwórz katalog instalacyjny, w którym chcesz zainstalować phpMyAdmin.

Przejdź do katalogu poleceniem `cd /usr/share`. Następnie pobierz najnowszą wersję phpMyAdmin do katalogu instalacyjnego za pomocą `wget`:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
Jeśli polecenie `wget` nie jest dostępne, zainstaluj je poleceniem `sudo apt install wget -y`. 
:::

Po zakończeniu pobierania rozpakuj plik ZIP poleceniem:

```
unzip phpmyadmin.zip
```
:::warning
Jeśli polecenie `unzip` nie jest dostępne, zainstaluj je poleceniem `sudo apt install unzip -y`. 
:::

Rozpakowane archiwum możesz teraz przemianować na prostszą nazwę, usunąć plik ZIP i ustawić odpowiednie uprawnienia:

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## Konfiguracja

### Plik konfiguracyjny serwera WWW

Teraz phpMyAdmin musi zostać dodany do konfiguracji serwera WWW. Użyj `nano /etc/apache2/conf-available/phpmyadmin.conf`, aby utworzyć nowy plik konfiguracyjny Virtual Host i wklej do niego poniższą zawartość:

```
# Konfiguracja Apache dla phpMyAdmin

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# Blokada dostępu do katalogów, które nie wymagają dostępu webowego
<Directory /usr/share/phpmyadmin/templates>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/libraries>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/setup/lib>
    Require all denied
</Directory>
```

Po wprowadzeniu konfiguracji zapisz i zamknij plik za pomocą `CTRL+X`, następnie potwierdź `Y` i naciśnij `Enter`.

Nowo utworzony plik konfiguracyjny Virtual Host musi zostać aktywowany i załadowany. Wykonaj polecenia:

```
a2enconf phpmyadmin
systemctl reload apache2
```

### Utworzenie wymaganego katalogu tymczasowego

Aby phpMyAdmin działał poprawnie, trzeba utworzyć katalog tymczasowy i ustawić odpowiednie uprawnienia. Zrób to poleceniami:

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## Podsumowanie

Gratulacje, właśnie zainstalowałeś i skonfigurowałeś phpMyAdmin! Do webowego panelu dostaniesz się przez adres IP serwera i ścieżkę (`http://Adres-IP/phpmyadmin`). Jeśli masz pytania lub potrzebujesz pomocy, nasz support jest do Twojej dyspozycji codziennie! 🙂
