---
id: dedicated-windows-ip-configuration
title: "Serwer dedykowany: Konfiguracja IP (Windows)"
description: "Dowiedz się, jak skonfigurować ustawienia IP na serwerze dedykowanym z Windows → Sprawdź teraz"
sidebar_label: Konfiguracja adresów IP
services:
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Konfiguracja adresów IP na Twoim serwerze dedykowanym z Windows pozwala kontrolować, jak serwer komunikuje się w sieci. Obejmuje to przypisywanie adresów IP, definiowanie domyślnej bramy oraz konfigurację serwerów DNS niezbędnych do łączności sieciowej.

Poprawna konfiguracja IP jest kluczowa dla serwerów uruchamiających usługi takie jak serwery gier, serwery WWW, bazy danych czy systemy zdalnego dostępu, ponieważ zapewnia stabilną komunikację sieciową i niezawodną dostępność.

:::warning Serwer niedostępny z powodu braku połączenia z internetem?
Jeśli Twój serwer stanie się niedostępny z powodu błędnej konfiguracji sieci lub braku połączenia z internetem, zdalny dostęp przez RDP może przestać działać. Skorzystaj z [konsoli iLO HTML](dedicated-ilo.md#the-html5-console), aby połączyć się z serwerem i naprawić konfigurację sieci.
:::

<InlineVoucher />

## Przygotowanie

Przed konfiguracją adresów IP upewnij się, że masz pod ręką następujące dane:

- Adres IP, który chcesz przypisać
- Maska podsieci
- Domyślna brama
- Serwery DNS

Te informacje znajdziesz w panelu webowym. Otwórz **zarządzanie serwerem dedykowanym** i przejdź do sekcji **Adresy IP**.

## Konfiguracja

Połącz się z serwerem dedykowanym za pomocą **Pulpitu zdalnego (RDP)**. Po połączeniu otwórz **Panel sterowania**. Przejdź do **Panel sterowania → Sieć i Internet → Centrum sieci i udostępniania**.

Kliknij po lewej stronie **Zmień ustawienia karty sieciowej**. Zobaczysz dostępne interfejsy sieciowe. Kliknij prawym przyciskiem na aktywny adapter sieciowy (zazwyczaj **Ethernet**) i wybierz **Właściwości**. Na liście wybierz **Protokół internetowy w wersji 4 (TCP/IPv4)** i kliknij **Właściwości**.

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

To polecenie wyświetli wszystkie interfejsy sieciowe i ich aktualną konfigurację IP. Znajdź swój aktywny adapter sieciowy i sprawdź, czy **Adres IPv4** zgadza się z wcześniej skonfigurowanym adresem IP. Jeśli pojawi się poprawny adres IP, konfiguracja została pomyślnie zastosowana.





## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś ustawienia IP na swoim serwerze dedykowanym z Windows. Jeśli masz dalsze pytania lub potrzebujesz pomocy, nasz zespół wsparcia jest dostępny codziennie, aby Ci pomóc.

<InlineVoucher />