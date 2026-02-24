---
id: dedicated-linux-openvpn
title: "Konfiguracja OpenVPN na serwerze Linux - Stwórz swoją bezpieczną infrastrukturę VPN"
description: "Dowiedz się, jak zabezpieczyć swoje połączenie internetowe i uzyskać dostęp do zablokowanych treści dzięki OpenVPN na serwerach Linux → Sprawdź teraz"
sidebar_label: Instalacja OpenVPN
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

OpenVPN to potężne i wszechstronne oprogramowanie VPN, które umożliwia bezpieczne połączenie przez Internet. To open source’owe rozwiązanie oferuje solidną i konfigurowalną technologię VPN, pozwalającą na ustanowienie zaszyfrowanego połączenia między Twoim urządzeniem a serwerem VPN. Korzystając z OpenVPN, możesz zabezpieczyć swoje połączenie internetowe, chronić swoją prywatność online oraz uzyskać dostęp do treści z ograniczeniami geograficznymi, niezależnie od tego, gdzie się znajdujesz. W tym poradniku przejdziemy przez proces instalacji i konfiguracji usługi **OpenVPN** na serwerze Linux.

## Przygotowanie

Przede wszystkim musi być aktywowany sterownik sieciowy **TUN**. Ten krok nie jest wymagany na serwerach root.
Aby to zrobić, musisz utworzyć nowy plik o nazwie **tunscript.sh** w katalogu **/usr/sbin**.

```
nano /usr/sbin/tunscript.sh 
```

Wklej następnie poniższe linie:
```
#!/bin/bash
mkdir /dev/net
mknod /dev/net/tun c 10 200
chmod 0666 /dev/net/tun
```

Zapisz plik, naciskając `CTRL+O`, potem `Y`, a na końcu `Enter`. Aby wyjść z edytora, naciśnij `CTRL+X`. Następnie wykonaj polecenie:

```
chmod +x /usr/sbin/tunscript.sh
```

Gdy to zrobisz, uruchom ``crontab -e`` i wybierz **edytor nano** [1]. Dodaj na końcu pliku tę linię:
``` @reboot /usr/sbin/tunscript.sh || exit 1 ```

Zapisz plik (`CTRL+O`), potwierdź (`Y`) i wyjdź (`CTRL+X`). Po restarcie serwera skrypt będzie uruchamiany automatycznie i możesz kontynuować.

## Instalacja

Aby zainstalować OpenVPN, wpisz w konsoli następujące polecenie:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Pojawi się dialog z pytaniem, czy chcesz używać UDP czy TCP. Polecamy UDP, więc wpisz `1` i naciśnij `Enter`. Następnie zostaniesz poproszony o podanie portu dla OpenVPN — zalecamy pozostawić domyślny port.

Kolejnym krokiem jest konfiguracja serwera DNS. Polecamy użyć Google Public DNS lub Cloudflare DNS:
```
8.8.8.8 / 8.8.4.4 - Google Public DNS
1.1.1.1 / 1.0.0.1 - Cloudflare DNS
```

Na koniec musisz podać nazwę klienta. Możesz wpisać dowolną nazwę, np. nazwę swojego urządzenia.

## Konfiguracja

### Dodawanie kolejnych klientów

Jeśli chcesz mieć wiele połączeń, warto utworzyć kilka kont. Aby dodać kolejne konto, wykonaj ponownie to polecenie:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Wybierz `1` i potwierdź. Następnie podaj nazwę klienta.

### Usuwanie klientów

Aby usunąć klienta, wpisz:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Wybierz numer klienta z listy, którego chcesz usunąć, i naciśnij `Enter`. Potwierdź usunięcie, wpisując `Y` i zatwierdź `Enter`.
Klient zostanie usunięty.

## Odinstalowanie

Jeśli nie potrzebujesz już OpenVPN, możesz go odinstalować tak:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```
Naciśnij `3` i potwierdź. Jeszcze raz potwierdź i OpenVPN zostanie odinstalowany.

## Połączenie z VPN

Do połączenia z VPN polecamy użyć **[klienta OpenVPN](https://openvpn.net/community-downloads/)**. Pobierz go na urządzenie, z którego chcesz się łączyć.

Połącz się z serwerem przez SFTP, pobierz wygenerowany plik .ovpn, a następnie usuń go z serwera. Po zainstalowaniu klienta uruchom program. Kliknij prawym przyciskiem myszy ikonę OpenVPN na pasku zadań. Wybierz 'Import file' i wskaż wcześniej pobrany plik, kliknij 'Open'. Aby się połączyć, kliknij ponownie ikonę i wybierz "Connect".

:::info
Jeśli zaimportowałeś kilka plików, wybierz klienta, którego chcesz użyć, a następnie kliknij Connect.
:::