---
id: vserver-linux-add-ip
title: "VPS: Konfiguracja adresu(-ów) IP"
description: "Dowiedz się, jak skonfigurować i zarządzać głównym oraz dodatkowymi adresami IP na systemach Debian i Ubuntu, aby zoptymalizować ustawienia sieci → Sprawdź teraz"
sidebar_label: Konfiguracja adresu(-ów) IP
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Chcesz skonfigurować swoją sieć i określić adresy IP?

<InlineVoucher />

## Konfiguracja adresu IP

W tej sekcji opisujemy, jak zdefiniować i ustawić główny adres IP.

<Tabs>
  <TabItem value="debian" label="Debian" default>

Konfiguracja sieci w Debianie odbywa się przez interfejsy sieciowe. Wykonaj polecenie `sudo nano /etc/network/interfaces`, aby otworzyć konfigurację sieci. Domyślnie zawartość pliku powinna wyglądać tak:

```
auto lo
iface lo inet loopback

allow-hotplug eth0
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

Jeśli tego jeszcze nie ma, zawartość musi wyglądać jak powyżej. Zamień placeholder adresu IP (XXX.XXX.XXX.XXX) na własny adres IP serwera, który znajdziesz w panelu administracyjnym w panelu głównym. Jako maskę podsieci użyj `255.255.255.0` (sieć klasy C) i upewnij się, że ostatni oktet bramy to tylko 1.

Zapisz zmiany, naciskając CTRL+X, a następnie potwierdź Enterem. Teraz moduł sieciowy musi zostać zrestartowany, aby nowy adres IPv4 zaczął działać, zrób to poleceniem:

```
sudo service networking restart
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

```
[Match]
Name = eth0

[Network]
Description = Interface eth0 autoconfigured by PVE
Address = 185.223.31.234/24
Gateway = 185.223.31.1
DHCP = no
IPv6AcceptRA = false
```

  </TabItem>
</Tabs>

## Konfiguracja dodatkowych adresów IP
<Tabs>
  <TabItem value="debian" label="Debian" default>

```
allow-hotplug eth0:1
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

   Placeholder

</TabItem>
</Tabs>

## Testowanie konfiguracji
Aby sprawdzić poprawność i działanie skonfigurowanego adresu IP, możesz wykonać test ping. Zrób to na przykład na swoim komputerze, otwierając wiersz poleceń (cmd.exe) i wpisując:

```
ping <twoj_adres_ip_serwera>
```

Po wykonaniu polecenia i założeniu, że adres IP został poprawnie skonfigurowany, wynik powinien wyglądać tak:

```
Pinging XXX.XXX.XXX.XX with 32 bytes of data:
Reply from XXX.XXX.XXX.XX: bytes=32 time=25ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=23ms TTL=56

Ping statistics for XXX.XXX.XXX.XX:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 22ms, Maximum = 25ms, Average = 23ms
```

## Podsumowanie

Gratulacje, udało Ci się skonfigurować swoją sieć! Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />