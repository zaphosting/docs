---
id: dedicated-linux-php
title: 'Serwer dedykowany: Instalacja PHP'
description: "Dowiedz się, jak zainstalować PHP na swoim serwerze Linux do tworzenia stron www i zoptymalizuj konfigurację dzięki niezbędnym rozszerzeniom → Sprawdź teraz"
sidebar_label: Instalacja PHP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

PHP to popularny, uniwersalny język programowania, szeroko stosowany w tworzeniu stron internetowych. W tym poradniku pokażemy, jak zainstalować PHP na Twoim serwerze.

<InlineVoucher />

## Przygotowanie

Zacznij od połączenia się z serwerem przez SSH. Jeśli nie wiesz, jak to zrobić, zerknij na nasz [Poradnik: Pierwszy dostęp (SSH)](vserver-linux-ssh.md).

Po zalogowaniu zalecamy uruchomić polecenie aktualizacji odpowiednie dla Twojego systemu operacyjnego, aby utrzymać serwer bezpiecznym i na bieżąco z najnowszymi funkcjami.

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

Są dwa główne sposoby instalacji PHP na serwerze Linux: samodzielnie lub jako dodatkowy pakiet dla Apache. Jeśli korzystasz z własnego serwera www, który nie jest Apache, lub potrzebujesz PHP do ogólnych zadań, polecamy metodę samodzielną. W przeciwnym razie, jeśli używasz Apache, zainstaluj PHP jako pakiet dodatkowy dla Apache.

## Samodzielna instalacja

Użyj poniższego polecenia, aby zainstalować najnowszą wersję PHP. Jeśli chcesz zainstalować konkretną wersję, użyj flagi `-y` wraz z numerem wersji.
```
# Najnowsza wersja
sudo apt install php

# Konkretna wersja (np. php7.4)
sudo apt -y install php[wersja]
```

Sprawdź, czy instalacja się powiodła, wpisując `php -v`. Gratulacje, właśnie zainstalowałeś PHP na swoim serwerze. Polecamy zapoznać się z sekcją **Rozszerzenia PHP**, aby zainstalować potrzebne dodatki.

## Instalacja z Apache

Na początek zainstaluj Apache, jeśli jeszcze tego nie zrobiłeś. Wykonaj polecenie:
```
sudo apt install apache2
```

Po instalacji upewnij się, że zapora sieciowa pozwala na dostęp do serwera www z internetu. W tym przykładzie używamy **zapory UFW**, ponieważ Apache ma zarejestrowaną aplikację dla niej. Jeśli korzystasz z innej zapory, upewnij się, że port 80 (HTTP) jest otwarty.
```
sudo ufw allow in "Apache"
```

Twój serwer powinien być teraz dostępny. Sprawdź, wpisując w przeglądarce `http://[adres_IP_twojego_serwera]`.

Gdy Apache jest gotowy, zainstaluj pakiet PHP dla Apache poleceniem:
```
sudo apt install php libapache2-mod-php
```

Sprawdź instalację poleceniem `php -v`. PHP zostało pomyślnie zainstalowane razem z serwerem Apache. Zachęcamy do zapoznania się z sekcją **Rozszerzenia PHP**, aby dodać potrzebne moduły.

## Rozszerzenia PHP

PHP oferuje szeroki wybór rozszerzeń, które możesz opcjonalnie zainstalować, by rozszerzyć funkcjonalność. Aby zobaczyć listę dostępnych rozszerzeń, wpisz poniższe polecenie, które wyświetli wyniki wyszukiwania w konsoli z możliwością przewijania:
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