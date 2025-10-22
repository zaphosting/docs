---
id: vserver-linux-nextcloud
title: "VPS: Instalacja Nextcloud"
description: "Dowiedz się, jak skonfigurować wydajny serwer Nextcloud na Linuxie dla optymalnego hostingu w chmurze → Sprawdź teraz"
sidebar_label: Instalacja Nextcloud
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Nextcloud to open source’owe rozwiązanie chmurowe i fork Owncloud, założone w 2016 roku przez byłego twórcę Owncloud, Franka Kalitscheka.

![](https://screensaver01.zap-hosting.com/index.php/s/kCndbKaFAaktERk/preview)

Aby osiągnąć optymalną wydajność, stabilność i funkcjonalność, zalecamy następującą konfigurację do hostingu serwera Nextcloud. Serwer Nextcloud nie jest kompatybilny z Windows i MacOS — przynajmniej nie bez dodatkowej wirtualizacji lub podobnych obejść.

<InlineVoucher />

## Przygotowanie

Poniższe wymagania są rekomendowane przez twórców i bazują na naszym doświadczeniu. Możesz napotkać problemy, jeśli nie spełnisz tych wymagań.

#### Sprzęt

| Komponenty     | Minimum                | Zalecane                   |
| -------------- | ---------------------- | -------------------------- |
| CPU            | 2x 1 GHz               | 4x 2+ GHz                  |
| RAM            | 512 MB                 | 4+ GB                      |
| Dysk           | 10 GB                  | 50+ GB                     |
| Przepustowość  | 100 mbit/s (upload & download) | 500 mbit/s (upload & download) Zalecane, jeśli chmura ma być używana przez wielu użytkowników |

#### Oprogramowanie

| Platforma       | Opcje                                                      |
| --------------- | ---------------------------------------------------------- |
| System operacyjny | Ubuntu (14.04, 16.04, 18.04), Debian (8,9,10), CentOS 6.5/7 |
| Baza danych     | MySQL lub MariaDB 5.5+ (zalecane), SQLite (tylko do testów i minimalnych instalacji) |
| Serwer WWW      | Apache 2.4 z `mod_php` lub `php-fpm` (zalecane)            |
| PHP             | 5.6, 7.0 (zalecane), 7.1 (zalecane), 7.2                   |

Aby zainstalować chmurę na serwerze Linux, musisz połączyć się przez klienta SSH. Jeśli nie wiesz, jak korzystać z SSH, sprawdź ten poradnik: [Pierwszy dostęp (SSH)](vserver-linux-ssh.md)

Po nawiązaniu połączenia możesz zacząć instalować niezbędne pakiety potrzebne do instalacji Nextcloud. Obejmuje to instalację serwera WWW oraz PHP.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Debian" label="Debian" default>

<br/>

**Apache (serwer WWW)**

🗄️ Debian 8/9/10:
```
sudo apt update && sudo apt -y upgrade
sudo apt -y install apache2
```

**PHP (Hypertext Preprocessor)**

🗄️ Debian 8:
```
# Krok 1: Dodanie repozytorium PHP 7.3 PPA
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Krok 2: Instalacja PHP 7.3
sudo apt -y install php7.3

# Krok 3: Instalacja rozszerzeń PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 9:
```
# Krok 1: Dodanie repozytorium PHP 7.3 PPA
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# Krok 2: Instalacja PHP 7.3
sudo apt -y install php7.3

# Krok 3: Instalacja rozszerzeń PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 10:
```
# Krok 1: Instalacja PHP 7.3
sudo apt -y install php php-common

# Krok 2: Instalacja rozszerzeń PHP 7.3
sudo apt -y install php-cli php-fpm php-json php-pdo php-mysql php-zip php-gd  php-mbstring php-curl php-xml php-pear php-bcmath
```

Sprawdź wersję PHP, aby potwierdzić działanie:
```
php -v
```

</TabItem>
<TabItem value="Ubuntu" label="Ubuntu">

<br/>

**Apache (serwer WWW)**

🗄️ Ubuntu 16.X/18.X/19.X:
```
sudo apt update && sudo apt -y upgrade
sudo apt-get -y install apache2
```

**PHP (Hypertext Preprocessor)**

🗄️ Ubuntu 16.X:
```
# Krok 1: Dodaj repozytorium PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Krok 2: Instalacja PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Krok 3: Instalacja rozszerzeń PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 18.X:
```
# Krok 1: Dodaj repozytorium PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Krok 2: Instalacja PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Krok 3: Instalacja rozszerzeń PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 19.X:
```
# Krok 1: Dodaj repozytorium PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# Krok 2: Instalacja PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# Krok 3: Instalacja rozszerzeń PHP 7.3
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

Sprawdź wersję PHP, aby potwierdzić działanie:
```
php -v
```


</TabItem>
<TabItem value="CentOS" label="CentOS">
<br/>

**Apache (serwer WWW)**

🗄️ CentOS 6:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd.service
```

🗄️ CentOS 7:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

🗄️ CentOS 8:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

**PHP (Hypertext Preprocessor)**

🗄️ CentOS 6:
```
# Krok 1: Konfiguracja repozytorium Yum
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm

# Krok 2: Instalacja PHP 7.3
yum --enablerepo=remi-php73 install php

# Krok 3: Instalacja rozszerzeń PHP 7.3
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 7:
```
# Krok 1: Konfiguracja repozytorium Yum
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

# Krok 2: Instalacja PHP 7.3
yum --enablerepo=remi-php73 install php

# Krok 3: Instalacja rozszerzeń PHP 7.3
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 8:
```
# Krok 1: Konfiguracja repozytorium Yum
dnf install dnf-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm

# Krok 2: Instalacja PHP 7.3
dnf module reset php
dnf module enable php:remi-7.3
dnf install php
```

Sprawdź wersję PHP, aby potwierdzić działanie:
```
php -v
```

</TabItem>
</Tabs>

Kolejnym krokiem jest wybór typu bazy danych do przechowywania informacji. Masz kilka opcji:


<Tabs>

<TabItem value="MariaDB" label="MariaDB" default>

<br/>
Jeśli zdecydowałeś się na ten typ bazy danych, wykonaj następujące kroki:

Instalacja pakietów:
```
sudo apt-get install mariadb-server php-mysql
```

Podczas instalacji zostaniesz poproszony o ustawienie hasła root. Jeśli nie pojawi się takie zapytanie, domyślne hasło jest puste. To nie jest bezpieczne i powinno zostać zmienione natychmiast po instalacji!

Następnie połącz się z serwerem bazy danych i utwórz wymaganą bazę danych:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Potem stwórz użytkownika, który będzie miał dostęp do bazy Nextcloud:

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'TWOJE_HASŁO_TUTAJ';
```

:::info
Nie pomijaj tego kroku, używając użytkownika root. To nie jest bezpieczne i może narazić Twoje dane na ryzyko!
:::

Na koniec nadaj uprawnienia nowemu użytkownikowi:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Po zakończeniu naciśnij Ctrl-D, aby wyjść z bazy danych i kontynuuj kolejne kroki.

</TabItem>
<TabItem value="MySQL" label="MySQL">

<br/>
Jeśli zdecydowałeś się na ten typ bazy danych, wykonaj następujące kroki:

Instalacja pakietów:
```
sudo apt-get install mysql-server php-mysql
```

Podczas instalacji zostaniesz poproszony o ustawienie hasła root. Jeśli nie pojawi się takie zapytanie, domyślne hasło jest puste. To nie jest bezpieczne i powinno zostać zmienione natychmiast po instalacji!

Następnie połącz się z serwerem bazy danych i utwórz wymaganą bazę danych:

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

Potem stwórz użytkownika, który będzie miał dostęp do bazy Nextcloud:

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'TWOJE_HASŁO_TUTAJ';
```

:::info
Nie pomijaj tego kroku, używając użytkownika root. To nie jest bezpieczne i może narazić Twoje dane na ryzyko!
:::

Na koniec nadaj uprawnienia nowemu użytkownikowi:

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

Po zakończeniu naciśnij Ctrl-D, aby wyjść z bazy danych i kontynuuj kolejne kroki.

</TabItem>
<TabItem value="PostgreSQL" label="PostgreSQL">
<br/>
Jeśli zdecydowałeś się na ten typ bazy danych, wykonaj następujące kroki:

Instalacja pakietów:
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

Podczas instalacji zostaniesz poproszony o ustawienie hasła root. Jeśli nie pojawi się takie zapytanie, domyślne hasło jest puste. To nie jest bezpieczne i powinno zostać zmienione natychmiast po instalacji!

Następnie połącz się z serwerem bazy danych i utwórz wymaganą bazę danych:

```sql
sudo -u postgres psql
CREATE DATABASE nextcloud;
```

Potem stwórz użytkownika, który będzie miał dostęp do bazy Nextcloud:

```sql
CREATE USER nextcloud with encrypted password 'TWOJE_HASŁO_TUTAJ';
```

:::info
Nie pomijaj tego kroku, używając użytkownika root. To nie jest bezpieczne i może narazić Twoje dane na ryzyko!
:::

Na koniec nadaj uprawnienia nowemu użytkownikowi:

```SQL
grant all privileges on database mydb to myuser;
FLUSH PRIVILEGES;
```

Po zakończeniu naciśnij Ctrl-D, aby wyjść z bazy danych. Następnie możesz zmodyfikować bazę PostgreSQL przez instalator webowy lub przez konfigurację **config.php**.

```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "pgsql",
  "dbname"        => "nextcloud",
  "dbuser"        => "username",
  "dbpass"        => "password",
  "dbhost"        => "localhost",
  "dbtableprefix" => "",
);
```

</TabItem>
<TabItem value="SQLite" label="SQLite">

<br/>
Jeśli zdecydowałeś się na ten typ bazy danych, wykonaj następujące kroki:

Instalacja pakietów:
```
apt-get install sqlite3 php-sqlite3
```

Utwórz nową bazę SQLite 3:
```
sqlite3 DatabaseName.db
```

Następnie bazę SQLite 3 można modyfikować przez instalator webowy lub przez konfigurację **config.php**.
```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "sqlite",
  "dbname"        => "nextcloud",
  "dbtableprefix" => "",
);
```
</TabItem>
</Tabs>

## Instalacja

Teraz możesz rozpocząć właściwą instalację Nextcloud. Pobierz i rozpakuj oprogramowanie:
```
cd /var/www/
wget https://download.nextcloud.com/server/releases/latest.zip
apt-get install unzip
unzip latest.zip
chown -R www-data:www-data nextcloud
rm latest.zip
```

Po zakończeniu tego kroku uruchom skrypt instalacyjny. Dostęp do niego jest możliwy przez przeglądarkę pod następującym adresem:

:::info
**http://domena.tld/nextcloud/** 
:::

Pojawi się konfiguracja instalatora, w której utworzysz użytkownika root i zdefiniujesz dane bazy danych:

![](https://screensaver01.zap-hosting.com/index.php/s/79kgamkS36Dgi9x/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/qJs3Sd8TiYAg6mB/preview)


## Bezpieczeństwo i ochrona

**Ostrzeżenia podczas konfiguracji**

![](https://screensaver01.zap-hosting.com/index.php/s/nat3Fekj6MRP8Nw/preview)



**Katalog danych**

Zdecydowanie zalecamy umieszczenie katalogu danych poza katalogiem web root (czyli poza /var/www). Najprościej zrobić to przy nowej instalacji. Katalog można zdefiniować podczas konfiguracji, ale musi on najpierw zostać utworzony i mieć odpowiednie uprawnienia. Dane mogą być np. przechowywane w katalogu o nazwie Cloud w katalogu domowym.


```
mkdir /home/cloud/
chown -R www-data:www-data /home/cloud/
```



**HTTPS przez certyfikat SSL (Let's Encrypt)** 

Dobra chmura powinna być dostępna tylko przez połączenie SSL. Bez szyfrowania SSL dane i informacje przesyłane są w postaci czystego tekstu. Takie dane można łatwo przechwycić i odczytać bez szyfrowania.

```
<IfModule mod_ssl.c>
<VirtualHost *:443>
 DocumentRoot "/var/www/nextcloud"
 ServerName domena.tld

 ErrorLog ${APACHE_LOG_DIR}/error.log
 CustomLog ${APACHE_LOG_DIR}/access.log combined

<Directory /var/www/nextcloud/>
 Options +FollowSymlinks
 AllowOverride All

 <IfModule mod_dav.c>
 Dav off
 </IfModule>

 SetEnv HOME /var/www/nextcloud
 SetEnv HTTP_HOME /var/www/nextcloud
 Satisfy Any

</Directory>

SSLCertificateFile /etc/letsencrypt/live/domena.tld/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/domena.tld/privkey.pem
</VirtualHost>
</IfModule>

<IfModule mod_headers.c>
     Header always set Strict-Transport-Security "max-age=15768000; preload"
 </IfModule>
```



Dodatkowo cały ruch HTTP powinien być przekierowany na HTTPS za pomocą stałego przekierowania z kodem statusu 301. Można to zrobić w Apache, konfigurując VirtualHost w ten sposób:

```
<VirtualHost *:80>
   ServerName domena.tld
   Redirect permanent / https://domena.tld/
</VirtualHost>
```


## Zarządzanie Nextcloud

Dostęp do Nextcloud jest możliwy przez przeglądarkę, a także przez smartfon i komputer za pomocą aplikacji. Źródła do pobrania znajdziesz tutaj: https://nextcloud.com/install/#install-clients

![](https://screensaver01.zap-hosting.com/index.php/s/aw6qpNE7TkwQeaP/preview)

W ustawieniach możesz po instalacji dostosować wiele opcji i przeglądać ważne informacje, takie jak logi czy aktywności. To m.in. dodatkowe ustawienia bezpieczeństwa (uwierzytelnianie dwuskładnikowe, szyfrowanie...), ustawienia wyglądu (logo, kolor, slogan, nagłówek), ustawienia dostępu i wiele więcej.

**Aplikacje**

Masz też możliwość instalacji dodatkowych aplikacji poza domyślnymi. Znajdziesz je w menu **Aplikacje**.

![](https://screensaver01.zap-hosting.com/index.php/s/wKERd24E25668kt/preview)

Dzięki takim **Aplikacjom** możesz jeszcze bardziej spersonalizować Nextcloud według własnych potrzeb.


## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś Nextcloud! Jeśli masz dalsze pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />