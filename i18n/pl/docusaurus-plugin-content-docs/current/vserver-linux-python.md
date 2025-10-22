---
id: vserver-linux-python
title: "VPS: Instalacja Pythona"
description: "Dowiedz się, jak zainstalować i zaktualizować środowisko uruchomieniowe Pythona na różnych dystrybucjach Linuxa, aby zapewnić bezpieczne i aktualne środowisko → Sprawdź teraz"
sidebar_label: Instalacja Pythona
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Ten poradnik pokazuje, jak zainstalować środowisko uruchomieniowe Pythona oraz venv. Wszystkie polecenia musisz wykonać przez SSH. Jeśli nie wiesz, jak połączyć się z serwerem przez SSH, skorzystaj z naszego [poradnika Początkowy dostęp (SSH)](vserver-linux-ssh.md), aby dowiedzieć się więcej.

<InlineVoucher />

## Przygotowanie

Zanim cokolwiek zainstalujesz na serwerze, zalecamy uruchomić polecenie aktualizacji odpowiednie dla Twojego systemu operacyjnego, aby utrzymać serwer bezpiecznym.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Instalacja

Większość dystrybucji Linuxa ma Pythona preinstalowanego, ale wersja może być nieaktualna lub system mógł zostać zainstalowany bez niektórych pakietów. Możesz sprawdzić, czy Python jest zainstalowany (`python3 --version`) i wykonać poniższe polecenia, aby zaktualizować lub zainstalować środowisko uruchomieniowe.

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // Sprawdź wersję
  python3 --version

  // Zaktualizuj / zainstaluj środowisko
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  // Sprawdź wersję
  python3 --version

  // Zaktualizuj środowisko
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  // Sprawdź wersję
  python3 --version

  // Zaktualizuj środowisko
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  // Sprawdź wersję
  python3 --version

  // Zaktualizuj środowisko
  sudo dnf install python3
```

</TabItem>
</Tabs>

## Uruchamianie kodu

Teraz, gdy masz Pythona zainstalowanego na serwerze, możesz zacząć uruchamiać swoje programy w Pythonie.

### Tryb interpretera

Polecenie `python3` uruchomi interpreter Pythona. Możesz pisać dowolny poprawny kod Pythona po prefiksie `>>>`, a zostanie on wykonany po naciśnięciu `Enter`. Interpreter zamkniesz, wpisując `exit()` w konsoli.

### Uruchamianie plików .py

Aby uruchomić pliki `.py`, użyj polecenia `python3 [nazwa_pliku].py`, zamieniając `[nazwa_pliku]` na ścieżkę do pliku, który chcesz odpalić.

:::tip
Większość programów dostępnych online uruchomisz poleceniem `python3 main.py`, bo `main.py` to standardowy punkt startowy większości projektów w Pythonie.
:::

## Wirtualne środowiska

Pisząc programy w Pythonie, możesz potrzebować zainstalować zewnętrzne pakiety przez pip. Można je zainstalować globalnie, dostępne dla wszystkich skryptów `.py`, albo utworzyć wirtualne środowisko (venv).

### Tworzenie venv

Najpierw przejdź do folderu, w którym chcesz ustawić venv, używając `cd`, a następnie uruchom `python3 -m venv .`, co zainstaluje potrzebne pliki w bieżącej lokalizacji.

### Aktywacja i dezaktywacja

Aby uruchamiać polecenia takie jak `pip install` wewnątrz venv, musisz go aktywować poleceniem `source /bin/activate`. Teraz konsola będzie działać tylko w ramach venv, a skrypty będą miały dostęp tylko do lokalnie zainstalowanych pakietów.

Po skończonej pracy w venv możesz wyjść, wpisując `deactivate`.

## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować Pythona! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest dostępny, by pomóc Ci codziennie!

<InlineVoucher />