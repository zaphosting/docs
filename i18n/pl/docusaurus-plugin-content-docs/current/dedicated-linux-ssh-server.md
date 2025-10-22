---
id: dedicated-linux-ssh-server
title: "Serwer dedykowany: Instalacja SSH"
description: "Dowiedz się, jak bezpiecznie zainstalować i zarządzać serwerami SSH na Linux VPS, aby zapewnić bezpieczny dostęp zdalny i zwiększoną ochronę serwera → Sprawdź teraz"
sidebar_label: Instalacja SSH
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Secure Shell (SSH) to bezpieczny protokół, który umożliwia bezpieczny i szyfrowany dostęp do systemów zdalnych. Zapewnia poufność i integralność danych przesyłanych przez sieć.

W tym poradniku dowiesz się, jak zainstalować lub ponownie zainstalować serwer SSH dla różnych dystrybucji Linux, które obecnie oferujemy na naszych VPS. Większość dystrybucji Linux dostępnych na naszych VPS jest domyślnie wyposażona w serwer SSH, co oznacza, że możesz nim łatwo zarządzać przez webowy panel produktu. Możesz zobaczyć, jak to zrobić, korzystając z naszego poradnika: [Pierwszy dostęp (SSH)](vserver-linux-ssh.md)

Jeśli chcesz dowiedzieć się więcej o zwiększaniu bezpieczeństwa swojego serwera, gorąco polecamy nasz poradnik [Wskazówki dotyczące bezpieczeństwa](vserver-linux-security-tips.md), który przedstawia różne narzędzia i usługi pomagające jeszcze lepiej zabezpieczyć serwer.

<InlineVoucher />

## Instalacja

Aby rozpocząć instalację, połącz się z serwerem przez VNC. Możesz to zrobić, korzystając z [konsoli VNC](vserver-vnc.md).


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
Jeśli chcesz ponownie zainstalować serwer SSH, najpierw go odinstaluj. Zrób to poleceniem: `yum remove openssh`.
:::

Przed instalacją serwera SSH upewnij się, że system jest aktualny. Uruchom polecenie:
```
yum update
```

Następnie zainstaluj serwer SSH poleceniem:
```
yum install openssh-server
```

Po zakończeniu instalacji uruchom usługę serwera SSH poleceniem:
```
systemctl start sshd
```

Upewnij się, że usługa będzie się automatycznie uruchamiać przy starcie systemu, wykonując polecenie:
```
systemctl enable sshd
```

## Włączenie logowania root

Aby włączyć logowanie root, musisz edytować plik konfiguracyjny openssh. W tym poradniku użyjemy edytora "nano".

:::info
Jeśli "nano" nie jest zainstalowane, najpierw je zainstaluj poleceniem: `yum install nano`
:::

Otwórz plik konfiguracyjny poleceniem:
```
nano /etc/ssh/sshd_config 
```

Za pomocą klawiszy strzałek znajdź linię:
```
#PermitRootLogin prohibit-password
```

Zmień ją na:
```
PermitRootLogin yes
```

Na koniec zrestartuj serwer SSH, aby zastosować zmiany:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian">

:::info
Jeśli chcesz ponownie zainstalować serwer SSH, najpierw go odinstaluj poleceniem: `apt remove openssh`.
:::

Przed instalacją serwera SSH upewnij się, że system jest aktualny. Uruchom polecenie:
```
apt update
```

Następnie zainstaluj serwer SSH poleceniem:
```
apt install openssh-server
```

Po zakończeniu instalacji uruchom usługę serwera SSH poleceniem:
```
systemctl start sshd
```

Upewnij się, że usługa będzie się automatycznie uruchamiać przy starcie systemu, wykonując polecenie:
```
systemctl enable sshd
```

## Włączenie logowania root

Aby włączyć logowanie root, musisz edytować plik konfiguracyjny openssh. W tym poradniku użyjemy edytora "nano".

:::info
Jeśli nie masz jeszcze zainstalowanego "nano", zainstaluj je poleceniem: `apt install nano`
:::

Otwórz plik konfiguracyjny poleceniem:
```
nano /etc/ssh/sshd_config 
```

Za pomocą klawiszy strzałek znajdź linię:
```
#PermitRootLogin prohibit-password
```

Zmień ją na:
```
PermitRootLogin yes
```

Na koniec zrestartuj serwer SSH, aby zastosować zmiany:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
Jeśli chcesz ponownie zainstalować serwer SSH, najpierw go odinstaluj poleceniem: `apt remove openssh`.
:::

Przed instalacją serwera SSH upewnij się, że system jest aktualny. Uruchom polecenie:
```
apt update
```

Następnie zainstaluj serwer SSH poleceniem:
```
apt install openssh-server
```

Po zakończeniu instalacji uruchom usługę serwera SSH poleceniem:
```
systemctl start sshd
```

Upewnij się, że usługa będzie się automatycznie uruchamiać przy starcie systemu, wykonując polecenie:
```
systemctl enable sshd
```

## Włączenie logowania root

Aby włączyć logowanie root, musisz edytować plik konfiguracyjny openssh. W tym poradniku użyjemy edytora "nano".

:::info
Jeśli nie masz jeszcze zainstalowanego "nano", zainstaluj je poleceniem: `apt install nano`
:::

Otwórz plik konfiguracyjny poleceniem:
```
nano /etc/ssh/sshd_config 
```

Za pomocą klawiszy strzałek znajdź linię:
```
#PermitRootLogin prohibit-password
```

Zmień ją na:
```
PermitRootLogin yes
```

Na koniec zrestartuj serwer SSH, aby zastosować zmiany:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
Jeśli chcesz ponownie zainstalować serwer SSH, najpierw go odinstaluj poleceniem: `dnf remove openssh`.
:::

Przed instalacją serwera SSH upewnij się, że system jest aktualny. Uruchom polecenie:
```
dnf update
```

Następnie zainstaluj serwer SSH poleceniem:
```
dnf install openssh-server
```

Po zakończeniu instalacji uruchom usługę serwera SSH poleceniem:
```
systemctl start sshd
```

Upewnij się, że usługa będzie się automatycznie uruchamiać przy starcie systemu, wykonując polecenie:
```
systemctl enable sshd
```

## Włączenie logowania root

Aby włączyć logowanie root, musisz edytować plik konfiguracyjny openssh. W tym poradniku użyjemy edytora "nano".

:::info
Jeśli nie masz jeszcze zainstalowanego "nano", zainstaluj je poleceniem: `dnf install nano`
:::

Otwórz plik konfiguracyjny poleceniem:
```
sudo nano /etc/ssh/sshd_config 
```

Za pomocą klawiszy strzałek znajdź linię:
```
#PermitRootLogin prohibit-password
```

Zmień ją na:
```
PermitRootLogin yes
```

Na koniec zrestartuj serwer SSH, aby zastosować zmiany:
```
systemctl restart sshd
```
</TabItem>
</Tabs>

Teraz pomyślnie zainstalowałeś usługę SSH na swoim serwerze i możesz się z nim łączyć przez SSH.


<InlineVoucher />