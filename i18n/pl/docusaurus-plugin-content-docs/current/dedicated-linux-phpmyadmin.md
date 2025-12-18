---
id: dedicated-linux-phpmyadmin
title: "Serwer dedykowany: Instalacja phpMyAdmin"
description: "Dowiedz się, jak łatwo zarządzać bazami danych MySQL i MariaDB dzięki webowemu interfejsowi phpMyAdmin dla efektywnej administracji bazami → Sprawdź teraz"
sidebar_label: Instalacja phpMyAdmin
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

phpMyAdmin to darmowe narzędzie webowe do zarządzania bazami danych MySQL i MariaDB. Oferuje przyjazny interfejs, który pozwala tworzyć, edytować, zarządzać i usuwać bazy danych bez konieczności ręcznego wpisywania poleceń SQL.



## Przygotowanie

Przed rozpoczęciem instalacji upewnij się, że system jest aktualny. Oczekujące aktualizacje i uaktualnienia możesz wykonać za pomocą poleceń:

```
sudo apt update -y
sudo apt upgrade -y
```

Musisz także upewnić się, że masz już zainstalowane PHP na swoim systemie. Jest to niezbędne do korzystania z phpMyAdmin. Jak zainstalować PHP, znajdziesz w naszym [poradniku Instalacja PHP](dedicated-linux-php.md).

:::warning Brakujące pakiety PHP
Jeśli brakuje niezbędnych pakietów PHP, pliki phpMyAdmin nie będą poprawnie przetwarzane i wyświetlane. 
:::

## Instalacja

Jeśli przygotowania zostały zakończone, możesz rozpocząć instalację interfejsu phpMyAdmin. Najpierw otwórz katalog instalacyjny, w którym chcesz zainstalować phpMyAdmin.

Przejdź do odpowiedniego katalogu poleceniem `cd /usr/share`. Następnie pobierz najnowszą wersję phpMyAdmin do katalogu instalacyjnego za pomocą `wget`:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
Jeśli polecenie `wget` nie jest dostępne, możesz je zainstalować poleceniem `sudo apt install wget -y`. 
:::

Po zakończeniu pobierania rozpakuj plik ZIP poleceniem:

```
unzip phpmyadmin.zip
```
:::warning
Jeśli polecenie `unzip` nie jest dostępne, możesz je zainstalować poleceniem `sudo apt install unzip -y`. 
:::

Rozpakowane archiwum możesz teraz przemianować na prostszą nazwę, usunąć plik ZIP i ustawić odpowiednie uprawnienia:

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## Konfiguracja

### Plik konfiguracyjny serwera WWW

Teraz phpMyAdmin musi zostać dodany do konfiguracji serwera WWW. W tym celu utwórz nowy plik konfiguracyjny Virtual Host poleceniem `nano /etc/apache2/conf-available/phpmyadmin.conf` i wklej do niego następującą zawartość:

```
# Konfiguracja Apache dla phpMyAdmin

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# Zabroń dostępu do katalogów, które nie wymagają dostępu webowego, dla bezpieczeństwa
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

Po wklejeniu zawartości zapisz i zamknij plik za pomocą `CTRL+X`, następnie potwierdź `Y` i naciśnij `Enter`.

Nowo utworzony plik konfiguracyjny Virtual Host musi zostać aktywowany i załadowany. Wykonaj następujące polecenia:

```
a2enconf phpmyadmin
systemctl reload apache2
```

### Utworzenie wymaganego katalogu tymczasowego

Aby phpMyAdmin działał poprawnie, musisz utworzyć katalog tymczasowy i ustawić odpowiednie uprawnienia. Zrób to poleceniami:

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś phpMyAdmin. Do webowego interfejsu możesz uzyskać dostęp, wpisując adres IP i ścieżkę swojego serwera (http://Adres-IP/phpmyadmin). W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂