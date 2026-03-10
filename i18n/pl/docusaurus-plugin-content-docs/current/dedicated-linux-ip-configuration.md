---
id: dedicated-linux-ip-configuration
title: "Serwer dedykowany: Konfiguracja IP (Ubuntu/Debian)"
description: "Dowiedz się, jak skonfigurować statyczny adres IP na serwerze Linux z Ubuntu lub Debianem → Sprawdź teraz"
sidebar_label: Konfiguracja adresów IP
services:
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Wprowadzenie

Konfiguracja adresów IP na Twoim serwerze dedykowanym z Linuxem pozwala kontrolować, jak serwer komunikuje się w sieci. Obejmuje to przypisywanie adresów IP, definiowanie domyślnej bramy oraz konfigurację serwerów DNS niezbędnych do łączności sieciowej.

:::warning Serwer niedostępny z powodu braku połączenia z internetem?
Jeśli Twój serwer stanie się niedostępny z powodu błędnej konfiguracji sieci lub braku połączenia z internetem, zdalny dostęp przez SSH może przestać działać. Skorzystaj z [konsoli iLO HTML](dedicated-ilo.md#the-html5-console), aby połączyć się z serwerem i naprawić konfigurację sieci.
:::

<InlineVoucher />

## Przygotowanie

Przed konfiguracją statycznego adresu IP upewnij się, że masz podane następujące informacje:

- Adres IP, który chcesz przypisać  
- Maska podsieci  
- Domyślna brama  
- Serwery DNS  

Te dane znajdziesz w panelu webowym. Wejdź do **zarządzania serwerem dedykowanym** i przejdź do sekcji **Adresy IP**.

## Konfiguracja

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Instalacje Ubuntu korzystają z **Netplan** do konfiguracji sieci. Połącz się z serwerem dedykowanym przez SSH i znajdź plik konfiguracyjny Netplan w katalogu `/etc/netplan/`. Otwórz plik konfiguracyjny:

```bash
nano /etc/netplan/50-cloud-init.yaml
```

Zmodyfikuj konfigurację, aby ustawić statyczny adres IP:
```
network:
  version: 2
  ethernets:
    eth0:
      match:
        macaddress: "bc:24:11:5f:5c:34"
      addresses:
      - "109.230.238.45/24"
      nameservers:
        addresses:
        - 8.8.8.8
        - 1.1.1.1
      set-name: "eth0"
      routes:
      - to: "default"
        via: "109.230.238.1"
```

Dopasuj poniższe wartości do swojej konfiguracji sieci:

- 109.230.238.45 → Twój statyczny adres IP  
- 109.230.238.1 → Twoja brama  
- Adresy DNS → Twoje preferowane serwery DNS  

Zapisz plik i zastosuj konfigurację:

```
sudo netplan apply
```

</TabItem> <TabItem value="debian" label="Debian">

Debian zazwyczaj korzysta z pliku konfiguracyjnego interfejsów sieciowych zamiast Netplan. Połącz się z serwerem dedykowanym przez SSH i otwórz plik konfiguracyjny interfejsów sieciowych:

```
nano /etc/network/interfaces
```

Dodaj lub zmodyfikuj konfigurację dla swojego interfejsu sieciowego. Przykładowa konfiguracja:

```bash
auto lo
iface lo inet loopback

# Główny interfejs sieciowy
allow-hotplug ens18
iface ens18 inet static
        address 134.255.219.160/24
        gateway 134.255.219.1
        # opcje dns-* są obsługiwane przez pakiet resolvconf, jeśli jest zainstalowany
        dns-nameservers 1.1.1.1
```

Dopasuj wartości do swojej konfiguracji sieci:
- address → Twój statyczny adres IP  
- netmask → Twoja maska podsieci  
- gateway → Twoja domyślna brama  
- dns-nameservers → Twoje preferowane serwery DNS  

Po zapisaniu pliku konfiguracyjnego, zrestartuj usługę sieciową:

```
systemctl restart networking
```

</TabItem> </Tabs>



## Weryfikacja

Po zastosowaniu konfiguracji warto sprawdzić, czy nowy adres IP został poprawnie przypisany. W tym celu wpisz w terminalu:

```
ip a
```

To polecenie wyświetli wszystkie **interfejsy sieciowe** dostępne w systemie wraz z ich aktualną konfiguracją. W wynikach znajdź interfejs, który konfigurowałeś, zwykle nazywa się `eth0`, `ens18` lub podobnie, w zależności od systemu.

W sekcji interfejsu poszukaj wpisu **`inet`**, który oznacza przypisany adres IPv4. W wynikach powinien pojawić się statyczny adres IP, który skonfigurowałeś, np.:

```
inet 109.230.238.45/24
```

![img](https://screensaver01.zap-hosting.com/index.php/s/TmaCRcfLgiabTBp/preview)

Jeśli poprawny adres pojawi się w wynikach, konfiguracja statycznego IP została pomyślnie zastosowana. Jeśli nowy adres IP się nie pojawia, sprawdź ponownie plik konfiguracyjny i upewnij się, że zmiany zostały poprawnie zapisane, a następnie ponownie zastosuj konfigurację.



## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś adres IP na swoim serwerze Linux. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />