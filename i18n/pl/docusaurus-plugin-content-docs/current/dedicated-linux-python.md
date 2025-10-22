---
id: dedicated-linux-python
title: "Serwer dedykowany: Instalacja Pythona"
description: "Dowiedz się, jak zainstalować i zaktualizować środowisko uruchomieniowe Pythona na różnych dystrybucjach Linuxa, aby zapewnić bezpieczne i aktualne środowisko → Sprawdź teraz"
sidebar_label: Instalacja Pythona
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Ten poradnik pokazuje kroki instalacji środowiska uruchomieniowego Pythona oraz venv. Wszystkie polecenia musisz wykonać przez SSH. Jeśli nie wiesz, jak połączyć się z serwerem przez SSH, skorzystaj z naszego [poradnika Początkowy dostęp (SSH)](vserver-linux-ssh.md), aby dowiedzieć się więcej.

<InlineVoucher />

## Przygotowanie

Zanim zainstalujesz cokolwiek na serwerze, zalecamy uruchomić polecenie aktualizacji odpowiednie dla Twojego systemu operacyjnego, aby utrzymać serwer bezpiecznym.

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

Większość dystrybucji Linuxa ma Pythona preinstalowanego, jednak wersja może być nieaktualna lub system mógł zostać zainstalowany bez niektórych pakietów. Możesz sprawdzić, czy Python jest zainstalowany (`python3 --version`) i wykonać poniższe polecenia, aby zaktualizować lub zainstalować środowisko uruchomieniowe.

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // Sprawdź wersję
  python3 --version

  // Zaktualizuj / zainstaluj środowisko uruchomieniowe
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  // Sprawdź wersję
  python3 --version

  // Zaktualizuj środowisko uruchomieniowe
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  // Sprawdź wersję
  python3 --version

  // Zaktualizuj środowisko uruchomieniowe
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  // Sprawdź wersję
  python3 --version

  // Zaktualizuj środowisko uruchomieniowe
  sudo dnf install python3
```

</TabItem>
</Tabs>

## Uruchamianie kodu

Teraz, gdy masz Pythona zainstalowanego na serwerze, możesz zacząć uruchamiać swoje programy w Pythonie.

### Tryb interpretera

Uruchomienie polecenia `python3` uruchomi interpreter Pythona. Możesz pisać dowolny poprawny kod Pythona po prefiksie `>>>`, a zostanie on wykonany po naciśnięciu `Enter`. Interpreter możesz zamknąć, wpisując `exit()` w konsoli.

### Uruchamianie plików .py

Aby uruchomić pliki `.py`, wystarczy użyć polecenia `python3 [nazwa_pliku].py`, zamieniając `[nazwa_pliku]` na ścieżkę do pliku, który chcesz uruchomić.

:::tip
Większość programów dostępnych online można uruchomić poleceniem `python3 main.py`, ponieważ `main.py` to standardowy punkt startowy większości programów w Pythonie.
:::

## Wirtualne środowiska

Pisząc program w Pythonie, możesz potrzebować zainstalować zewnętrzne pakiety z pip. Można je zainstalować globalnie, dzięki czemu będą dostępne dla wszystkich skryptów `.py`, albo możesz stworzyć wirtualne środowisko (venv).

### Tworzenie venv

Najpierw przejdź do folderu, w którym chcesz utworzyć venv, używając `cd`, a następnie uruchom `python3 -m venv .`, co zainstaluje wymagane pliki w bieżącej lokalizacji.

### Aktywacja i dezaktywacja

Aby uruchamiać polecenia takie jak `pip install` wewnątrz venv, musisz go aktywować poleceniem `source /bin/activate`. Teraz Twoja konsola będzie działać tylko w ramach venv, a skrypty będą miały dostęp tylko do lokalnie zainstalowanych pakietów.

Gdy skończysz pracę w venv, możesz wyjść, wpisując polecenie `deactivate`.

<InlineVoucher />