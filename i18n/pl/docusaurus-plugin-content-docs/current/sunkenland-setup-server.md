---
id: sunkenland-setup-server
title: "Sunkenland: Konfiguracja serwera Sunkenland"
description: "Dowiedz się, jak skonfigurować swój serwer gier Sunkenland, aby zapewnić płynną rozgrywkę i prawidłowe działanie → Sprawdź teraz"
sidebar_label: Konfiguracja serwera
services:
  - gameserver-sunkenland
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwery Sunkenland wymagają szybkiej konfiguracji przy pierwszym uruchomieniu, aby działały poprawnie. W tym poradniku przejdziemy przez kroki niezbędne do skonfigurowania Twojego serwera gier Sunkenland.

<InlineVoucher />

## Przygotowanie
Zanim zaczniesz, musisz uruchomić Sunkenland i stworzyć zapis świata. Upewnij się, że zapisałeś świat przed kontynuacją.

Aby później uzyskać dostęp do plików serwera, będziesz potrzebować klienta FTP, takiego jak [WinSCP](https://winscp.net/eng/index.php) lub [FileZilla](https://filezilla-project.org/), które są darmowe i open-source.

## Dostęp do lokalnych danych
Pierwszym krokiem jest dostęp do lokalnych danych zapisu gry Sunkenland.

Wciśnij `CTRL+R` na klawiaturze i wpisz w oknie Uruchamiania Windows:
```
%localappdata%low\Vector3 Studio\Sunkenland\
```

W tym miejscu znajdziesz folder `Worlds`, który zawiera wszystkie lokalne pliki zapisu gry. Wybierz ten, który chcesz hostować na serwerze, lub jeśli jest nowy, wybierz ten, który wygenerowałeś przed rozpoczęciem tego poradnika.

:::tip
Nie widzisz niczego? Upewnij się, że uruchomiłeś Sunkenland i stworzyłeś zapis świata, co powinno utworzyć nowy folder.
:::

## Wgrywanie zapisu gry
Następnie połącz się z serwerem gier przez FTP i wgraj zapis gry, który wybrałeś w poprzednim kroku.

Połącz się z serwerem za pomocą klienta FTP, używając danych dostępowych dostępnych w **Narzędzia->FTP-Browser** w panelu administracyjnym Twojego serwera gier. Skorzystaj z naszego [poradnika Dostęp przez FTP](gameserver-ftpaccess.md), jeśli potrzebujesz pomocy przy połączeniu.

Po połączeniu przejdź do folderu Sunkenland, otwórz folder "AppData", a następnie "Worlds". Wgraj tam wybrany wcześniej zapis gry.

Struktura folderów powinna wyglądać teraz tak, gdzie `Marvin's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86` to Twój własny zapis gry.
![](https://screensaver01.zap-hosting.com/index.php/s/eFg6Ek3giFM3DLs/preview)

:::important
Na tym etapie skopiuj GUID, który znajduje się na końcu nazwy zapisu świata. Będzie Ci potrzebny w kolejnym kroku, aby serwer działał poprawnie.

GUID wygląda tak:
```
ZAP-Hosting's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # Pełna nazwa świata
cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # GUID, którego potrzebujesz
```
:::

## Aktywacja serwera
Na koniec przejdź do sekcji **Ustawienia** w panelu administracyjnym Twojego serwera gier.

Znajdź opcję **World GUID** i wklej tam skopiowany wcześniej GUID.

Pamiętaj, aby kliknąć zielony przycisk **Zapisz** na dole strony. Teraz spróbuj uruchomić serwer – powinien wystartować bez problemu.

Gratulacje, właśnie skonfigurowałeś swój serwer gier Sunkenland.

<InlineVoucher />