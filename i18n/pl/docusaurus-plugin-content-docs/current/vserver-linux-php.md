---
id: vserver-linux-php
title: 'Konfiguracja PHP na serwerze Linux – Moc dynamicznych aplikacji webowych'
description: "Dowiedz się, jak zainstalować PHP na swoim serwerze Linux do tworzenia stron www i zoptymalizuj konfigurację pod Apache lub tryb standalone → Sprawdź teraz"
sidebar_label: Instalacja PHP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

PHP to popularny, ogólnego przeznaczenia język programowania, szeroko wykorzystywany w tworzeniu stron internetowych. W tym poradniku pokażemy Ci, jak zainstalować PHP na Twoim serwerze.

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

Są dwa główne sposoby instalacji PHP na serwerze Linux: jako standalone lub jako dodatek do Apache. Jeśli korzystasz z własnego serwera www innego niż Apache lub potrzebujesz PHP do ogólnych zadań, polecamy metodę standalone. W przeciwnym razie, jeśli używasz Apache, zainstaluj PHP jako moduł Apache.

## Standalone

Użyj poniższego polecenia, aby zainstalować najnowszą wersję PHP. Jeśli chcesz zainstalować konkretną wersję, dodaj flagę `-y` i numer wersji.
```
# Najnowsza wersja
sudo apt install php

# Konkretna wersja (np. php7.4)
sudo apt -y install php[wersja]
```

Sprawdź, czy instalacja się powiodła, wpisując `php -v`. Gratulacje, PHP jest już na Twoim serwerze! Polecamy też zajrzeć do sekcji **Rozszerzenia PHP**, aby zainstalować potrzebne dodatki.

## Korzystanie z Apache

Najpierw zainstaluj Apache, jeśli jeszcze tego nie zrobiłeś:
```
sudo apt install apache2
```

Po instalacji upewnij się, że zapora sieciowa pozwala na dostęp do serwera www. W tym przykładzie używamy **zapory UFW**, bo Apache ma gotową aplikację do niej. Jeśli masz inną zaporę, pozwól na ruch na porcie 80 (HTTP).
```
sudo ufw allow in "Apache"
```

Teraz Twój serwer powinien być dostępny. Sprawdź, wpisując w przeglądarce `http://[twój_adres_IP_serwera]`.

Gdy Apache jest gotowy, zainstaluj PHP jako moduł Apache:
```
sudo apt install php libapache2-mod-php
```

Zweryfikuj instalację poleceniem `php -v`. PHP działa teraz razem z Twoim serwerem Apache. Nie zapomnij sprawdzić sekcji **Rozszerzenia PHP**, by doinstalować potrzebne moduły.

## Rozszerzenia PHP

PHP oferuje mnóstwo opcjonalnych rozszerzeń, które możesz doinstalować, by zwiększyć funkcjonalność. Aby zobaczyć listę dostępnych rozszerzeń, wpisz:
```
apt search php- | less
```

Przewijaj strzałkami, a gdy skończysz, naciśnij `Q`, by wyjść. Aby zainstalować rozszerzenie, użyj polecenia apt install, podając nazwy rozszerzeń oddzielone spacją:
```
sudo apt install [php_rozszerzenie] [...]
```

## Podsumowanie

PHP zostało pomyślnie zainstalowane na Twoim serwerze Linux. Jeśli masz pytania lub potrzebujesz pomocy, nasz support jest dostępny codziennie i chętnie Ci pomoże! 🙂

<InlineVoucher />