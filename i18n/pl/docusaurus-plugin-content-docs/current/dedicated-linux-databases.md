---
id: dedicated-linux-databases
title: "Serwer dedykowany: Instalacja baz danych"
description: "Sprawdź, jak zainstalować i skonfigurować różne bazy danych na Ubuntu i innych dystrybucjach Linux, aby zwiększyć wydajność i bezpieczeństwo → Dowiedz się więcej już teraz"
sidebar_label: Instalacja baz danych
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Ten poradnik przedstawia kroki instalacji różnych typów baz danych. W przykładzie używany jest system operacyjny Ubuntu 20.04, jednak podane są też odpowiedniki poleceń dla innych dystrybucji Linux, które oferujemy na naszej stronie. Polecenia te należy wykonać przez SSH. Jeśli nie wiesz, jak połączyć się z serwerem przez SSH, zerknij tutaj: [Pierwszy dostęp (SSH)](vserver-linux-ssh.md).

<InlineVoucher />

## Przygotowanie

Zanim zaczniesz instalację bazy danych, najpierw upewnij się, że system jest aktualny. Aby to zrobić, zaktualizuj pakiety za pomocą menedżera pakietów systemu, używając odpowiedniego polecenia dla Twojego systemu operacyjnego:

```
// Ubuntu & Debian
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## Typy baz danych

W zależności od tego, jaką usługę bazy danych chcesz zainstalować, postępuj zgodnie z odpowiednim poradnikiem:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## Co to jest MariaDB?

MariaDB to otwartoźródłowy system zarządzania relacyjnymi bazami danych, wywodzący się z MySQL. Zapewnia lepszą wydajność, bezpieczeństwo i ciągły rozwój. MariaDB oferuje ulepszone silniki przechowywania danych, a jej architektura jest w pełni kompatybilna z MySQL. Polecamy MariaDB zamiast MySQL.

## Instalacja MariaDB

Na początek upewnij się, że instalujesz najnowszą wersję MariaDB. Niektóre starsze systemy, jak Debian 9 czy Ubuntu 18.04, nie mają domyślnie najnowszej wersji MariaDB w menedżerze pakietów, dlatego wykonując poniższe polecenie, zapewniasz pobranie najnowszej wersji.

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Po dodaniu repozytorium zaktualizuj cache menedżera pakietów, wykonując kroki opisane w sekcji przygotowanie.

:::info
Instalację repozytorium MariaDB (powyższy krok) można pominąć w nowoczesnych systemach, takich jak Ubuntu 22.04 czy Debian 11.
:::

Po skonfigurowaniu repozytorium możesz rozpocząć instalację MariaDB, instalując pakiet `mariadb-server`. Wykonaj odpowiednie polecenie dla swojego systemu:

```
// Ubuntu & Debian
sudo apt install mariadb-server

// CentOS
sudo yum install mariadb-server

// OpenSUSE
sudo zypper install mariadb

// Fedora
sudo dnf install mariadb-server
```

## Konfiguracja MariaDB

Po zakończeniu instalacji wpisz poniższe polecenie, aby rozpocząć konfigurację serwera:

```
mysql_secure_installation
```

Teraz możesz skonfigurować swój serwer MariaDB (MySQL), postępując zgodnie z instrukcjami i ustawiając hasło dla serwera. Przy następnym pytaniu możesz na razie pominąć wpis, naciskając **Enter**.

![](https://screensaver01.zap-hosting.com/index.php/s/sYDegXcMZwCoZzJ/preview)

:::info
Użytkownik root to główny użytkownik Twojego serwera MariaDB (MySQL)!
:::

Następnie zostaniesz zapytany, czy chcesz ustawić hasło dla użytkownika root — potwierdź to wpisując **y** (tak). Potem wpisz nowe hasło dla użytkownika root.

:::note
Podczas wpisywania hasła nie będzie ono widoczne na ekranie. To normalne zachowanie, a hasło zostanie zapisane. Użyj silnego hasła dla użytkownika root i przechowuj je w bezpiecznym miejscu.
:::

Teraz zostaniesz zapytany, czy chcesz usunąć anonimowych użytkowników z serwera — zdecydowanie zalecamy to zrobić ze względów bezpieczeństwa. Potwierdź wpisując **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/9rnHy9dJmezjemq/preview)

W kolejnym kroku zdecyduj, czy użytkownik root może łączyć się z serwerem zdalnie. Ze względów bezpieczeństwa zalecamy wyłączyć tę opcję, potwierdzając **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/cEozmgcXDBgaRwY/preview)

Następnie możesz potwierdzić usunięcie testowej bazy danych dostarczanej przez MariaDB (MySQL) — nie jest potrzebna i można ją bezpiecznie usunąć, potwierdź **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/kGHT3tm78dNBTRo/preview)

Na koniec konfiguracji zostaniesz zapytany, czy chcesz zaktualizować uprawnienia bazy danych. Potwierdź **y**, aby aktywować ustawione hasło dla użytkownika root:

![](https://screensaver01.zap-hosting.com/index.php/s/kGNDZkRS4QrpEfF/preview)

Twój serwer MariaDB (MySQL) jest teraz gotowy do użycia!

![](https://screensaver01.zap-hosting.com/index.php/s/nFxJoiYeCp7MYXN/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## Co to jest Redis?

Redis to magazyn struktur danych działający w pamięci RAM, głównie używany do przechowywania danych w strukturze klucz-wartość, choć obsługuje też inne formaty, takie jak listy, JSON i więcej. Charakteryzuje się ogromną szybkością, odpowiadając na zapytania w milisekundach.

## Instalacja Redis

Na początek musisz dodać repozytorium, które pozwoli zainstalować Redis. Ten krok nie jest konieczny dla wszystkich dystrybucji Linux, tylko dla wymienionych poniżej. Wykonaj polecenie odpowiadające Twojemu systemowi i wersji:

```
// Ubuntu (dowolna wersja) i Debian (tylko Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (tylko CentOS 7)
sudo yum install epel-release

// CentOS (tylko CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Po dodaniu repozytorium zaktualizuj cache menedżera pakietów, wykonując kroki opisane w sekcji przygotowanie.

:::info
Jeśli Twój system operacyjny nie jest wymieniony powyżej, możesz pominąć ten krok.
:::

Po dodaniu odpowiedniego repozytorium przejdź do instalacji pakietu Redis Server. Uruchom polecenie odpowiednie dla Twojego systemu:

```
// Ubuntu i Debian
sudo apt install redis-server

// CentOS
sudo yum install redis

// OpenSUSE
sudo zypper install redis

// Fedora
sudo dnf install redis
```

Po instalacji Twój serwer Redis jest gotowy do działania! Domyślnie działa na 127.0.0.1:6379 bez hasła.

:::caution 
Dla użytkowników Debian/Ubuntu:
Pamiętaj, aby po instalacji włączyć usługę `redis-server`, aby automatycznie startowała przy uruchomieniu serwera. Zrób to poleceniem:
```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## Co to jest MongoDB?
MongoDB to dokumentowa baza danych NoSQL, zaprojektowana z myślą o skalowalności i elastyczności dla programistów. Przechowuje dane w formacie BSON, podobnym do JSON, co pozwala na przechowywanie różnorodnych typów danych. Umożliwia korzystanie z indeksów, które skracają czas odpowiedzi, i charakteryzuje się brakiem sztywnego schematu, jak w MySQL czy SQLite, co daje dużą swobodę i szybkość działania.

## Instalacja MongoDB

Wybierz swój system operacyjny z poniższych zakładek, aby zobaczyć odpowiedni poradnik.

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Instalacja na Ubuntu & Debian

Na początek zaimportuj publiczny klucz GPG MongoDB:

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

Następnie dodaj źródło MongoDB do listy repozytoriów systemu, wykonując:

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Teraz menedżer pakietów może zainstalować MongoDB Community Edition, ale najpierw zaktualizuj repozytoria poleceniem: `sudo apt update`. Na koniec zainstaluj MongoDB:

```
sudo apt install mongodb-org
```

Twoja instalacja MongoDB powinna już działać!

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### Instalacja na CentOS & Fedora

Najpierw skonfiguruj repozytorium MongoDB dla systemów Red Hat.

Utwórz plik `/etc/yum.repos.d/mongodb-org-6.0.repo` i wklej do niego następującą zawartość:

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Teraz możesz zainstalować MongoDB. Polecenie instalacji różni się nieco między CentOS a Fedora, więc użyj odpowiedniego:

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

Twoja instalacja MongoDB powinna działać — jest to dużo prostsze niż na innych dystrybucjach Linux!

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### Instalacja na OpenSUSE

Na początek zaimportuj publiczny klucz MongoDB dla repozytorium:

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

Następnie dodaj repozytorium MongoDB, wykonując:

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

Na koniec zainstaluj najnowszą wersję MongoDB:

```
sudo zypper -n install mongodb-org
```

Twoja instalacja MongoDB powinna działać!

</TabItem>
</Tabs>

</TabItem>
</Tabs>

<InlineVoucher />