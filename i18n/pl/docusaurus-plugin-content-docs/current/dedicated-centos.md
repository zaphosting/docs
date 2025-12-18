---
id: dedicated-centos
title: "Serwer dedykowany: Instalacja CentOS"
description: "Dowiedz się, jak poprawnie zainstalować i skonfigurować CentOS na swoim serwerze dedykowanym, aby uzyskać optymalną wydajność i bezpieczeństwo → Sprawdź teraz"
sidebar_label: Instalacja CentOS
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Poniżej znajdziesz krok po kroku, jak zainstalować i skonfigurować system operacyjny CentOS na swoim serwerze dedykowanym. Postępuj zgodnie z tymi instrukcjami, aby poprawnie ustawić system i wykorzystać go w pełni.

:::info

Poradnik opiera się na systemie CentOS 8.3. Instalacje z wcześniejszych lub nowszych wersji mogą się nieco różnić pod względem procesu.

:::



## Przygotowanie

Do instalacji i konfiguracji systemu operacyjnego najpierw ważne jest zamontowanie odpowiedniego obrazu ISO systemu. Masz kilka opcji montowania:

1. Montowanie przez konfigurację początkową
2. Montowanie przez iLO (Virtual Media)
3. Montowanie przez iLO (Remote Console)

Jeśli nie znasz jeszcze montowania plików ISO, najlepiej zajrzyj do naszego [poradnika konfiguracji początkowej](dedicated-setup.md) lub [własnego ISO](dedicated-iso.md).



## Instalacja

Gdy ISO zostanie poprawnie załadowane, serwer przejdzie do procesu instalacji.

![](https://screensaver01.zap-hosting.com/index.php/s/YFQt6Jmw5wi4QZZ/preview)

* Klawiatura  
Wybierz układ klawiatury, który preferujesz

* Czas i data  
Wybierz swoją strefę czasową

* Hasło root  
Ustaw hasło dla konta root. Może to być dowolne, ale pamiętaj, aby użyć silnego hasła i zapisać je w bezpiecznym miejscu.

* Miejsce instalacji  
Wybierz dysk SSD, na którym zostanie zainstalowany CentOS

* Sieć i nazwa hosta  
Ze względu na problem z kompatybilnością, sieć nie mogła zostać skonfigurowana na tym etapie, zrobimy to na końcu.

Gdy skonfigurujesz wszystkie ustawienia według swoich preferencji, kliknij „Rozpocznij instalację”.

![](https://screensaver01.zap-hosting.com/index.php/s/iqF8KzziQix3jyd/preview)

Po zakończeniu instalacji usuń plik ISO z serwera i kliknij „Uruchom ponownie system”.



## Konfiguracja

### Sieć

Następnie skonfigurujemy urządzenie sieciowe, co wymaga aktualizacji kilku plików. Zamontuj ten plik ISO na swoim serwerze, przez konsolę zdalną lub bezpośrednio przez iLO.

![](https://screensaver01.zap-hosting.com/index.php/s/skiKLacFGZnMwr9/preview)

```http://185.223.30.65/dedicatedisos/centos-network-554flb.iso```

Po poprawnym zamontowaniu ISO, musimy go podpiąć w systemie, aby mieć do niego dostęp.

```mount /dev/sr0 /mnt```

Plik ISO jest teraz zamontowany pod `/mnt`

```rpm -i /mnt/be2net.rpm```

Następnie zainstaluj pakiet aktualizacyjny.

```modprobe be2net```

Teraz uruchomimy aktualizację, co może potrwać kilka sekund.  
Możesz sprawdzić poleceniem `ip a s`, czy istnieje urządzenie sieciowe o nazwie `eno1`. Jeśli tak, zrestartuj system.

Po restarcie przejdź do konfiguracji urządzenia sieciowego.

```nano /etc/sysconfig/network-scripts/ifcfg-eno1```

Wprowadź do pliku następujące dane:

```
DEVICE=eno1
BOOTPROTO=dhcp
ONBOOT=yes
```

Zamknij nano, naciskając `CTRL+X`, a następnie `Y`

Teraz uruchom urządzenie sieciowe poleceniem `ifup eno1`

:::info
Twój serwer dedykowany powinien mieć teraz działające połączenie z internetem.
:::





## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś system operacyjny CentOS na swoim serwerze dedykowanym. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂