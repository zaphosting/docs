---
id: vserver-linux-php
title: 'VPS: Instalacja PHP'
description: "Dowiedz się, jak zainstalować PHP na swoim serwerze Linux do tworzenia stron www i zoptymalizuj konfigurację pod Apache lub tryb standalone → Sprawdź teraz"
sidebar_label: Instalacja PHP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

PHP to popularny język programowania ogólnego przeznaczenia, szeroko wykorzystywany w tworzeniu stron internetowych. W tym poradniku pokażemy, jak zainstalować PHP na Twoim serwerze.

<InlineVoucher />

## Przygotowanie

Zacznij od połączenia się z serwerem przez SSH. Jeśli nie wiesz, jak to zrobić, zerknij na nasz [Poradnik: Pierwszy dostęp (SSH)](vserver-linux-ssh.md).

Po zalogowaniu zalecamy wykonanie aktualizacji systemu, aby Twój serwer był bezpieczny i miał najnowsze funkcje.

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

Są dwa główne sposoby instalacji PHP na serwerze Linux: jako standalone lub jako dodatkowy pakiet dla Apache. Jeśli korzystasz z własnego serwera www innego niż Apache lub potrzebujesz PHP do ogólnych zadań, polecamy metodę standalone. W przeciwnym razie, jeśli używasz Apache, zainstaluj PHP jako moduł Apache.

## Standalone

Użyj poniższego polecenia, aby zainstalować najnowszą wersję PHP. Jeśli chcesz zainstalować konkretną wersję, użyj flagi `-y` i podaj wersję.
```
# Najnowsza wersja
sudo apt install php

# Konkretna wersja (np. php7.4)
sudo apt -y install php[wersja]
```

Sprawdź, czy instalacja się powiodła, wpisując `php -v`. PHP zostało pomyślnie zainstalowane na Twoim serwerze. Polecamy zapoznać się z sekcją **Rozszerzenia PHP**, aby zainstalować potrzebne dodatki.

## Użycie z Apache

Na początek zainstaluj Apache, jeśli jeszcze go nie masz:
```
sudo apt install apache2
```

Po instalacji upewnij się, że zapora sieciowa pozwala na dostęp do serwera www. W tym przykładzie używamy **zapory UFW**, ponieważ Apache ma zarejestrowaną aplikację. Jeśli korzystasz z innej zapory, pozwól na ruch na porcie 80 (HTTP).
```
sudo ufw allow in "Apache"
```

Teraz Twój serwer powinien być dostępny. Sprawdź, wpisując w przeglądarce `http://[adres_IP_twojego_serwera]`.

Gdy Apache jest gotowy, zainstaluj pakiet PHP dla Apache:
```
sudo apt install php libapache2-mod-php
```

Sprawdź instalację poleceniem `php -v`. PHP zostało pomyślnie zainstalowane razem z serwerem Apache. Polecamy zapoznać się z sekcją **Rozszerzenia PHP**, aby dodać potrzebne moduły.

## Rozszerzenia PHP

PHP oferuje wiele opcjonalnych rozszerzeń, które możesz doinstalować, by rozszerzyć funkcjonalność. Aby zobaczyć listę dostępnych rozszerzeń, użyj polecenia, które wyświetli wyniki w konsoli z możliwością przewijania:

```
apt search php- | less
```

Użyj strzałek, by przewijać, a `Q`, by wyjść. Aby zainstalować rozszerzenie, użyj polecenia apt install, podając nazwę rozszerzenia. Możesz podać kilka rozszerzeń naraz, oddzielając je spacją, by przyspieszyć instalację.

```
sudo apt install [php_rozszerzenie] [...]
```

## Podsumowanie

PHP zostało pomyślnie zainstalowane na Twoim serwerze Linux. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />