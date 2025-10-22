---
id: vserver-linux-ftp-install
title: "VPS: Instalacja serwera FTP"
description: "Dowiedz się, jak skonfigurować i zarządzać bezpiecznym serwerem FTP na Linuxie z FileZilla Server, aby efektywnie przesyłać pliki → Sprawdź teraz"
sidebar_label: Instalacja serwera FTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

**FTP (File Transfer Protocol)** to protokół sieciowy służący do przesyłania plików przez sieć TCP/IP. Protokół został stworzony, aby umożliwić łatwą wymianę plików między systemami. Dzięki **FileZilla Server** możesz postawić taki serwer FTP na systemie Linux. FileZilla Server jest prosty w instalacji i konfiguracji, oferując wiele funkcji, takich jak tworzenie kont użytkowników, zarządzanie prawami dostępu oraz transfer plików. W tym poradniku przejdziemy przez proces instalacji i konfiguracji usługi **FileZilla Server** na serwerze Linux.

<InlineVoucher />

## Instalacja

Aby dodać użytkownika FTP, najpierw musisz zainstalować serwer FTP. Połącz się z serwerem raz przez SSH (np. Putty).

Aby zainstalować serwer FTP, wpisz teraz polecenie **apt-get install proftpd**. Potwierdź zapytanie klawiszem **Y** i zatwierdź:

![](https://screensaver01.zap-hosting.com/index.php/s/seKtY9GBELG78in/preview)

Teraz musimy jeszcze dostosować konfigurację. Wpisz polecenie **nano /etc/proftpd/proftpd.conf** i zatwierdź. Otworzy się plik konfiguracyjny w edytorze Nano:

![](https://screensaver01.zap-hosting.com/index.php/s/J5kS2bJFjDyLpCZ/preview)

Następnie dodaj poniższe wpisy:

![](https://screensaver01.zap-hosting.com/index.php/s/TZoDZpiBQi5Yb5L/preview)

Teraz serwer FTP musi zostać zrestartowany, aby zmiany weszły w życie. Zrób to poleceniem: **service proftpd restart**

## Dodawanie użytkowników

Aby stworzyć nowego użytkownika FTP, najpierw musimy utworzyć grupę FTP. Zrób to poleceniem **addgroup ftpuser**. Powinno to wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/M2jnE6mWqQLKkme/preview)

Teraz możemy dodać pierwszego użytkownika FTP poleceniami: **adduser benutzerftp -shell /bin/false -home /var/www** a następnie **adduser benutzerftp ftpuser**.

Zostaniesz poproszony o ustawienie hasła:

![](https://screensaver01.zap-hosting.com/index.php/s/LKsops7sKTr2jXt/preview)

Potwierdź, że dane są poprawne:

![](https://screensaver01.zap-hosting.com/index.php/s/LWdMS2j7PnRQwnd/preview)

Ostatni krok to przypisanie nowego użytkownika do grupy przez **adduser benutzerftp ftpuser**:

![](https://screensaver01.zap-hosting.com/index.php/s/66fqTTttpM5BPkg/preview)

Teraz możesz połączyć się z serwerem używając ustawionych danych:

![](https://screensaver01.zap-hosting.com/index.php/s/ftccknJBSoC2pCH/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/zRsRHA3NWNCwcsj/preview)

## Podsumowanie

Gratulacje, właśnie zainstalowałeś i skonfigurowałeś FTP! Jeśli masz dalsze pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />