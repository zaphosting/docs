---
id: dedicated-linux-ssh-server
title: "Serwer dedykowany: Instalacja SSH"
description: "Dowiedz się, jak bezpiecznie zainstalować i zarządzać serwerem SSH na Linux VPS, aby zapewnić bezpieczny dostęp zdalny i lepszą ochronę serwera → Sprawdź teraz"
sidebar_label: Instalacja SSH
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Secure Shell (SSH) to bezpieczny protokół, który umożliwia szyfrowany i bezpieczny dostęp do systemów zdalnych. Zapewnia poufność i integralność danych przesyłanych przez sieć.

W tym poradniku dowiesz się, jak zainstalować lub ponownie zainstalować serwer SSH dla różnych dystrybucji Linux, które oferujemy na naszych VPS. Większość dystrybucji Linux dostępnych na naszych VPS jest domyślnie wyposażona w serwer SSH, co oznacza, że możesz nim łatwo zarządzać przez webowy panel produktu. Zobacz, jak to zrobić, w naszym poradniku: [Pierwszy dostęp (SSH)](vserver-linux-ssh.md)

Jeśli chcesz dowiedzieć się więcej o zwiększaniu bezpieczeństwa swojego serwera, gorąco polecamy nasz poradnik [Wskazówki bezpieczeństwa](vserver-linux-security-tips.md), który przedstawia różne narzędzia i usługi pomagające jeszcze lepiej zabezpieczyć serwer.



## Instalacja

Aby rozpocząć instalację, połącz się z serwerem przez VNC. Możesz to zrobić, korzystając z [konsoli VNC](vserver-vnc.md).


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
Jeśli chcesz ponownie zainstalować serwer SSH, najpierw odinstaluj go poleceniem: `yum remove openssh`.
:::

Przed instalacją serwera SSH upewnij się, że system jest aktualny. Wykonaj polecenie:
```
yum update
```

Następnie zainstaluj serwer SSH poleceniem:
```
yum install openssh-server
```

Po zakończeniu instalacji uruchom usługę serwera SSH:
```
systemctl start sshd
```

Ustaw automatyczne uruchamianie usługi przy starcie systemu:
```
systemctl enable sshd
```

## Włączenie logowania root

Aby włączyć logowanie root, musisz edytować plik konfiguracyjny openssh. W tym poradniku użyjemy edytora "nano".

:::info
Jeśli "nano" nie jest zainstalowane, zainstaluj je poleceniem: `yum install nano`
:::

Otwórz plik konfiguracyjny poleceniem:
```
nano /etc/ssh/sshd_config 
```

Za pomocą strzałek znajdź linię:
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
Jeśli chcesz ponownie zainstalować serwer SSH, najpierw odinstaluj go poleceniem: `apt remove openssh`.
:::

Przed instalacją serwera SSH upewnij się, że system jest aktualny. Wykonaj polecenie:
```
apt update
```

Następnie zainstaluj serwer SSH poleceniem:
```
apt install openssh-server
```

Po zakończeniu instalacji uruchom usługę serwera SSH:
```
systemctl start sshd
```

Ustaw automatyczne uruchamianie usługi przy starcie systemu:
```
systemctl enable sshd
```

## Włączenie logowania root

Aby włączyć logowanie root, musisz edytować plik konfiguracyjny openssh. W tym poradniku użyjemy edytora "nano".

:::info
Jeśli nie masz jeszcze "nano", zainstaluj je poleceniem: `apt install nano`
:::

Otwórz plik konfiguracyjny poleceniem:
```
nano /etc/ssh/sshd_config 
```

Za pomocą strzałek znajdź linię:
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
Jeśli chcesz ponownie zainstalować serwer SSH, najpierw odinstaluj go poleceniem: `apt remove openssh`.
:::

Przed instalacją serwera SSH upewnij się, że system jest aktualny. Wykonaj polecenie:
```
apt update
```

Następnie zainstaluj serwer SSH poleceniem:
```
apt install openssh-server
```

Po zakończeniu instalacji uruchom usługę serwera SSH:
```
systemctl start sshd
```

Ustaw automatyczne uruchamianie usługi przy starcie systemu:
```
systemctl enable sshd
```

## Włączenie logowania root

Aby włączyć logowanie root, musisz edytować plik konfiguracyjny openssh. W tym poradniku użyjemy edytora "nano".

:::info
Jeśli nie masz jeszcze "nano", zainstaluj je poleceniem: `apt install nano`
:::

Otwórz plik konfiguracyjny poleceniem:
```
nano /etc/ssh/sshd_config 
```

Za pomocą strzałek znajdź linię:
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
Jeśli chcesz ponownie zainstalować serwer SSH, najpierw odinstaluj go poleceniem: `dnf remove openssh`.
:::

Przed instalacją serwera SSH upewnij się, że system jest aktualny. Wykonaj polecenie:
```
dnf update
```

Następnie zainstaluj serwer SSH poleceniem:
```
dnf install openssh-server
```

Po zakończeniu instalacji uruchom usługę serwera SSH:
```
systemctl start sshd
```

Ustaw automatyczne uruchamianie usługi przy starcie systemu:
```
systemctl enable sshd
```

## Włączenie logowania root

Aby włączyć logowanie root, musisz edytować plik konfiguracyjny openssh. W tym poradniku użyjemy edytora "nano".

:::info
Jeśli nie masz jeszcze "nano", zainstaluj je poleceniem: `dnf install nano`
:::

Otwórz plik konfiguracyjny poleceniem:
```
sudo nano /etc/ssh/sshd_config 
```

Za pomocą strzałek znajdź linię:
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

Teraz pomyślnie zainstalowałeś usługę SSH na swoim serwerze i możesz łączyć się z nim przez SSH.