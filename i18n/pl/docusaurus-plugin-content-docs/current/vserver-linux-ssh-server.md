---
id: vserver-linux-ssh-server
title: "VPS: Instalacja SSH"
description: "Dowiedz się, jak bezpiecznie uzyskać dostęp i zarządzać zdalnymi serwerami Linux za pomocą SSH, aby zwiększyć ochronę danych i kontrolę nad serwerem → Sprawdź teraz"
sidebar_label: Instalacja SSH
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Wprowadzenie

Secure Shell (SSH) to bezpieczny protokół, który umożliwia bezpieczny i szyfrowany dostęp do zdalnych systemów. Zapewnia poufność i integralność danych przesyłanych przez sieci.

W tym poradniku dowiesz się, jak zainstalować lub ponownie zainstalować serwer SSH dla różnych dystrybucji Linux, które obecnie oferujemy na naszych VPS. Większość dystrybucji Linux dostępnych na naszych VPS jest domyślnie wyposażona w serwer SSH, co oznacza, że możesz nim łatwo zarządzać przez webowy panel produktu. Możesz zobaczyć, jak to zrobić, korzystając z naszego poradnika: [Pierwszy dostęp (SSH)](vserver-linux-ssh.md)

Jeśli chcesz dowiedzieć się więcej o zwiększaniu bezpieczeństwa na swoim serwerze, gorąco polecamy nasz poradnik [Wskazówki bezpieczeństwa](vserver-linux-security-tips.md), który przedstawia różne narzędzia i usługi pomagające jeszcze lepiej zabezpieczyć serwer.

<InlineVoucher />

## Instalacja

Aby rozpocząć instalację, uzyskaj dostęp do swojego serwera przez VNC. Możesz wykonać te kroki korzystając z [konsoli VNC](vserver-vnc.md).


<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
Jeśli chcesz ponownie zainstalować serwer SSH, najpierw odinstaluj go poleceniem: `yum remove openssh`.
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

Upewnij się, że usługa będzie się automatycznie uruchamiać przy starcie systemu, wykonując:
```
systemctl enable sshd
```

</TabItem>

<TabItem value="Debian" label="Debian">

:::info
Jeśli chcesz ponownie zainstalować serwer SSH, najpierw odinstaluj go poleceniem: `apt remove openssh`.
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

Upewnij się, że usługa będzie się automatycznie uruchamiać przy starcie systemu, wykonując:
```
systemctl enable sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
Jeśli chcesz ponownie zainstalować serwer SSH, najpierw odinstaluj go poleceniem: `apt remove openssh`.
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

Upewnij się, że usługa będzie się automatycznie uruchamiać przy starcie systemu, wykonując:
```
systemctl enable sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
Jeśli chcesz ponownie zainstalować serwer SSH, najpierw odinstaluj go poleceniem: `dnf remove openssh`.
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

Upewnij się, że usługa będzie się automatycznie uruchamiać przy starcie systemu, wykonując:
```
systemctl enable sshd
```
</TabItem>
</Tabs>

## Włączanie logowania root

<Tabs>

<TabItem value="CentOS" label="CentOS" default>
Aby włączyć logowanie root, musisz edytować plik konfiguracyjny openssh. W tym poradniku użyjemy edytora "nano".

:::info
Jeśli "nano" nie jest jeszcze zainstalowany, najpierw go zainstaluj poleceniem: `yum install nano`
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

Na koniec zrestartuj serwer SSH, aby zastosować zmiany, poleceniem:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian" default>
Aby włączyć logowanie root, musisz edytować plik konfiguracyjny openssh. W tym poradniku użyjemy edytora "nano".

:::info
Jeśli "nano" nie jest jeszcze zainstalowany, najpierw go zainstaluj poleceniem: `yum install nano`
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

Na koniec zrestartuj serwer SSH, aby zastosować zmiany, poleceniem:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu" default>
Aby włączyć logowanie root, musisz edytować plik konfiguracyjny openssh. W tym poradniku użyjemy edytora "nano".

:::info
Jeśli "nano" nie jest jeszcze zainstalowany, najpierw go zainstaluj poleceniem: `yum install nano`
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

Na koniec zrestartuj serwer SSH, aby zastosować zmiany, poleceniem:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora" default>
Aby włączyć logowanie root, musisz edytować plik konfiguracyjny openssh. W tym poradniku użyjemy edytora "nano".

:::info
Jeśli "nano" nie jest jeszcze zainstalowany, najpierw go zainstaluj poleceniem: `yum install nano`
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

Na koniec zrestartuj serwer SSH, aby zastosować zmiany, poleceniem:
```
systemctl restart sshd
```
</TabItem>
</Tabs>


## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś usługę SSH! Jeśli masz dalsze pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji każdego dnia! 


<InlineVoucher />