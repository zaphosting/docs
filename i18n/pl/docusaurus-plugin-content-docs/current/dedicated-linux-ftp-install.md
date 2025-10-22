---
id: dedicated-linux-ftp-install
title: "Serwer dedykowany: Instalacja serwera FTP"
description: "Dowiedz się, jak skonfigurować i zarządzać bezpiecznym serwerem FTP na Linuxie z FileZilla Server, aby usprawnić transfer plików i dostęp użytkowników → Sprawdź teraz"
sidebar_label: Instalacja serwera FTP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

**FTP (File Transfer Protocol)** to protokół sieciowy służący do przesyłania plików przez sieć TCP/IP. Protokół został stworzony, aby umożliwić łatwą wymianę plików między systemami. Dzięki **FileZilla Server** możesz postawić taki serwer FTP na systemie Linux. FileZilla Server jest prosty w instalacji i konfiguracji, oferując wiele funkcji, takich jak tworzenie kont użytkowników, zarządzanie prawami dostępu oraz transfer plików. W tym poradniku pokażemy, jak zainstalować i skonfigurować usługę **FileZilla Server** na serwerze Linux.

<InlineVoucher />

## Jak zainstalować serwer FTP i dodać użytkownika?

Aby dodać użytkownika FTP, najpierw musisz zainstalować serwer FTP. W tym celu połącz się z serwerem przez SSH (np. Putty).

Aby zainstalować serwer FTP, wpisz teraz polecenie **apt-get install proftpd**. Potwierdź instalację, wpisując **Y** i zatwierdź:

![](https://screensaver01.zap-hosting.com/index.php/s/MWzQMoq5yrRXP7Y/preview)

Teraz musimy jeszcze dostosować konfigurację. Wpisz polecenie **nano /etc/proftpd/proftpd.conf** i zatwierdź. Plik konfiguracyjny otworzy się w edytorze Nano:

![](https://screensaver01.zap-hosting.com/index.php/s/8X4A6MZEr27YqFf/preview)

Następujące wpisy muszą zostać dodane:

![](https://screensaver01.zap-hosting.com/index.php/s/7ykDgQeP2qTHSbm/preview)

Teraz serwer FTP musi zostać zrestartowany, aby zmiany weszły w życie. Zrób to poleceniem: **service proftpd restart**

## Jak dodać użytkownika FTP?

Aby utworzyć nowego użytkownika FTP, najpierw musimy stworzyć grupę FTP. Zrób to poleceniem **addgroup ftpuser**. Powinno to wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/eQ2yfySHYx3Wzcp/preview)

Teraz możemy dodać pierwszego użytkownika FTP poleceniami: **adduser benutzerftp -shell /bin/false -home /var/www** a następnie **adduser benutzerftp ftpuser**.

Zostaniesz poproszony o ustawienie hasła:

![](https://screensaver01.zap-hosting.com/index.php/s/4cmAAMcBaoTQ4QD/preview)

Potwierdź poprawność wpisów:

![](https://screensaver01.zap-hosting.com/index.php/s/6bNjWnr7ie3Cnty/preview)

Ostatnim krokiem jest przypisanie nowego użytkownika do grupy za pomocą **adduser benutzerftp ftpuser**:

![](https://screensaver01.zap-hosting.com/index.php/s/bj277RHHMBQtPbp/preview)

Teraz możesz połączyć się, używając ustawionych danych:

![](https://screensaver01.zap-hosting.com/index.php/s/7toWfnRSmQzGL9r/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/oHsAKpc7MHqEQCF/preview)


<InlineVoucher />