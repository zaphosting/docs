---
id: vserver-windows-ip-configuration
title: "VPS: Konfiguracja IP (Windows)"
description: "Dowiedz się, jak skonfigurować ustawienia IP na Windows VPS → Sprawdź teraz"
sidebar_label: Konfiguracja adresów IP
services:
- vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Konfiguracja adresów IP na Twoim Windows VPS pozwala kontrolować, jak serwer komunikuje się w sieci. Obejmuje to przypisywanie adresów IP, definiowanie domyślnej bramy oraz konfigurację serwerów DNS niezbędnych do łączności sieciowej.

Poprawna konfiguracja IP jest kluczowa dla serwerów uruchamiających usługi takie jak serwery gier, serwery WWW, bazy danych czy systemy zdalnego dostępu, ponieważ zapewnia stabilną komunikację sieciową i niezawodną dostępność.

:::warning Serwer niedostępny z powodu braku połączenia z internetem?
Jeśli Twój serwer stanie się niedostępny z powodu błędnej konfiguracji sieci lub braku połączenia z internetem, zdalny dostęp przez RDP może przestać działać. Skorzystaj z [konsoli VNC](vserver-vnc.md) w panelu głównym, aby połączyć się z serwerem i naprawić konfigurację sieci.
:::

<InlineVoucher />

## Przygotowanie

Przed konfiguracją adresów IP upewnij się, że masz podane następujące dane:

- adres IP, który chcesz przypisać
- maskę podsieci
- domyślną bramę
- serwery DNS

Te informacje znajdziesz w panelu głównym. Otwórz **zarządzanie VPS** i przejdź do **Adresy IP**.

## Konfiguracja

Połącz się z VPS za pomocą **Pulpitu zdalnego (RDP)**. Po połączeniu otwórz **Panel sterowania**. Przejdź do **Panel sterowania → Sieć i Internet → Centrum sieci i udostępniania**.

Kliknij po lewej stronie **Zmień ustawienia karty sieciowej**. Zobaczysz dostępne interfejsy sieciowe. Kliknij prawym przyciskiem na aktywną kartę sieciową (zazwyczaj **Ethernet**) i wybierz **Właściwości**. Na liście wybierz **Protokół internetowy w wersji 4 (TCP/IPv4)** i kliknij **Właściwości**.

![img](https://screensaver01.zap-hosting.com/index.php/s/3EpqZXg5pgWHoLK/download)

Wybierz **Użyj następującego adresu IP** i wpisz wymagane wartości:

- **Adres IP** → Twój przypisany adres IP
- **Maska podsieci** → Twoja maska podsieci
- **Brama domyślna** → Twoja brama
- **Serwery DNS →** 1.1.1.1, 8.8.8.8

Następnie skonfiguruj serwery DNS, wybierając **Użyj następujących adresów serwerów DNS** i wpisując preferowane serwery DNS. Po wpisaniu wszystkich wartości zatwierdź konfigurację przyciskiem **OK** i zamknij pozostałe okna.



## Weryfikacja

Aby sprawdzić konfigurację, otwórz **Wiersz polecenia** i wpisz:
```
ipconfig
```
![img](https://screensaver01.zap-hosting.com/index.php/s/AK8F3jppqL8xnsx/download)

To polecenie wyświetli wszystkie interfejsy sieciowe i ich aktualną konfigurację IP. Znajdź aktywną kartę sieciową i sprawdź, czy **Adres IPv4** odpowiada adresowi IP, który skonfigurowałeś wcześniej. Jeśli pojawi się poprawny adres IP, konfiguracja została pomyślnie zastosowana.





## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś ustawienia IP na swoim Windows VPS. Jeśli masz dalsze pytania lub potrzebujesz pomocy, nasz support jest dostępny codziennie, by Ci pomóc.

<InlineVoucher />