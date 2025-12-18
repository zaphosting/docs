---
id: dedicated-linux-webserver
title: "Serwer dedykowany: Instalacja serwera WWW Nginx i Apache"
description: "Dowiedz się, jak skonfigurować i zainstalować serwery WWW Nginx lub Apache, aby efektywnie hostować swoją stronę → Sprawdź teraz"
sidebar_label: Instalacja serwera WWW
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Nginx i Apache to popularne serwisy WWW, które służą do dostarczania stron internetowych do przeglądarki użytkownika. Poniżej pokażemy Ci, jak zainstalować jeden z tych serwerów na Twoim systemie.



## Przygotowanie

Zanim zaczniesz instalację serwera WWW, musisz upewnić się, że system jest aktualny. W tym celu łączymy się z serwerem przez SSH. Jeśli nie wiesz, czym jest SSH i jak go używać, sprawdź nasz poradnik: [Pierwszy dostęp (SSH)](vserver-linux-ssh.md).

Po zalogowaniu możesz zaktualizować system za pomocą poniższych komend, w zależności od Twojego systemu operacyjnego:

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper update

// Fedora
sudo dnf upgrade --refresh
```



## Instalacja

Po przygotowaniu systemu możesz rozpocząć instalację serwera WWW. W zależności od systemu operacyjnego i wybranego serwera, wykonaj odpowiednie polecenia:



### Apache

```
// Debian
sudo apt install apache2

// Ubuntu
sudo apt install apache2

// CentOS
sudo yum install httpd

// OpenSUSE
sudo zypper install httpd

// Fedora
sudo dnf install httpd
```

Po instalacji serwera WWW możesz przesłać pliki swojej strony. Połącz się z serwerem przez FTP/SFTP, przejdź do katalogu:

```
/var/www/html/
```

i tam wrzuć swoje pliki.



### Nginx

```
// Debian
sudo apt install nginx

// Ubuntu
sudo apt install nginx

// CentOS
sudo yum install nginx

// OpenSUSE
sudo zypper install nginx

// Fedora
sudo dnf install nginx
```

Po instalacji serwera WWW możesz przesłać pliki swojej strony. Połącz się z serwerem przez FTP/SFTP, przejdź do katalogu:

```
/usr/share/nginx/html
```

i tam wrzuć swoje pliki.



## Sprawdzenie wersji

Po zakończeniu instalacji możesz sprawdzić, czy wszystko poszło OK, używając komend `apache2 -v` (Apache) lub `nginx -v` (Nginx). Powinieneś zobaczyć coś podobnego do poniższego:



### Apache

```
apache2 -v
Server version: Apache/2.4.41 (Ubuntu)
Server built:   XXXX-XX-XXTXX:XX:XX
```



### Nginx

```
nginx -V
nginx version: nginx/1.2.3
...
```

Jeśli zobaczysz taki output, to znaczy, że serwer WWW został poprawnie zainstalowany.