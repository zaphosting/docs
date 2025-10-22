---
id: dedicated-linux-docker
title: "Serwer dedykowany: Instalacja Dockera"
description: "Dowiedz się, jak zainstalować Dockera na swoim serwerze Linux, aby uruchamiać izolowane aplikacje efektywnie i optymalizować wykorzystanie zasobów → Sprawdź teraz"
sidebar_label: Instalacja Dockera
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Wprowadzenie

Docker to lekki, open source'owy software do wirtualizacji, który pozwala na uruchamianie usług lub aplikacji w izolacji na jednym systemie. W przeciwieństwie do prawdziwych maszyn wirtualnych, nie emuluje się ani nie uruchamia dodatkowego systemu operacyjnego, a jedynie środowisko aplikacji w ramach systemu hosta. Dzięki temu oszczędzasz zasoby i masz niskie narzuty w porównaniu do pełnej wirtualizacji. W tym poradniku pokażemy, jak zainstalować Dockera na Twoim serwerze.

<InlineVoucher />

## Przygotowanie

Na początek musisz połączyć się ze swoim serwerem Linux przez SSH. Jeśli potrzebujesz pomocy, zerknij na nasz [Poradnik: Pierwszy dostęp (SSH)](dedicated-linux-ssh.md). W tym poradniku korzystamy z Ubuntu jako dystrybucji Linux.

### Włącz kompatybilność Dockera

Musisz włączyć **Kompatybilność Dockera** w panelu webowym serwera, aby kontenery Dockera działały poprawnie, inaczej pojawią się błędy `Permission Denied`.

Przejdź do sekcji **Ustawienia** w panelu webowym serwera, włącz opcję **Kompatybilność Dockera** i zapisz zmiany.

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

Po zapisaniu zmian upewnij się, że zrestartujesz serwer przed dalszymi krokami.

## Instalacja

Po połączeniu się z serwerem Linux możesz przejść do instalacji. Wybierz swoją dystrybucję Linux z poniższych repozytoriów, aby zobaczyć odpowiednie kroki instalacji.

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

Na początek musisz dodać pakiet Dockera za pomocą `apt` i go skonfigurować. Dzięki temu w przyszłości łatwo zainstalujesz i zaktualizujesz Dockera z repozytorium.

Użyj poniższych komend, aby dodać oficjalny klucz GPG Dockera do listy repozytoriów.
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Po skonfigurowaniu kluczy, dodaj repozytorium Dockera do źródeł `apt` za pomocą poniższej komendy.
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Po dodaniu repozytorium uruchom aktualizację `apt-get`, aby pobrać zmiany.
```
sudo apt-get update
```

Na tym etapie masz już skonfigurowane repozytorium Dockera. Ostatnim krokiem jest instalacja pakietów Dockera. Zainstaluj najnowszą wersję za pomocą poniższej komendy.
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

Na początek zainstaluj pakiet `dnf-plugins-core`, który pomaga zarządzać repozytoriami.
```
sudo dnf -y install dnf-plugins-core
```

Po instalacji dodaj repozytorium Dockera i zainstaluj go za pomocą poniższej komendy.
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

Docker powinien być teraz zainstalowany. Na koniec uruchom i włącz usługę, aby działała.
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

Aby sprawdzić, czy instalacja się powiodła, uruchom obraz **hello-world** za pomocą poniższej komendy.
```
sudo docker run hello-world
```

Jeśli wszystko poszło dobrze, zobaczysz przyjazny komunikat powitalny z podstawowymi informacjami. Jeśli pojawiają się błędy `Permission Denied`, upewnij się, że włączyłeś opcję **Kompatybilność Dockera** w panelu webowym i zrestartowałeś serwer, jak opisano w sekcji Przygotowanie.

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

Gratulacje, Docker został pomyślnie zainstalowany na Twoim serwerze Linux.

## Konfiguracja po instalacji

Po instalacji Dockera możesz wykonać dodatkową konfigurację, aby nie musieć używać `sudo` przy każdej komendzie Dockera oraz aby Docker uruchamiał się automatycznie przy starcie serwera.

### Zarządzanie Dockerem bez sudo

Możesz usunąć konieczność poprzedzania wszystkich komend Dockera poleceniem `sudo`, tworząc grupę Docker i dodając do niej użytkowników. To zwiększa wygodę, ale pamiętaj, że daje to użytkownikowi pośrednio uprawnienia root.

Utwórz grupę `docker` i dodaj do niej swojego aktualnego użytkownika za pomocą poniższych komend.
```
# Utwórz grupę Docker
sudo groupadd docker

# Dodaj aktualnego użytkownika do grupy Docker
sudo usermod -aG docker $USER
```

Po wykonaniu tych kroków zalecamy restart serwera, aby zmiany w członkostwie grup zostały uwzględnione. Alternatywnie możesz użyć `newgrp docker`.

Teraz sprawdź, czy możesz uruchamiać komendy Dockera bez `sudo`, ponownie wykonując `docker run hello-world`.

:::tip
Czasem możesz dostać błąd dotyczący pliku konfiguracyjnego, jeśli wcześniej uruchamiałeś komendy z `sudo`. Aby to naprawić, usuń katalog Dockera poleceniem `rmdir ~/.docker/` – zostanie on automatycznie odtworzony przy następnym użyciu Dockera.
:::

Jeśli komenda działa poprawnie, oznacza to, że Docker jest skonfigurowany do działania bez konieczności używania `sudo`.

### Automatyczne uruchamianie Dockera przy starcie

Możesz ustawić Dockera tak, aby uruchamiał się automatycznie przy starcie serwera, korzystając z `systemd`, który jest używany w większości dystrybucji Linux.

:::tip
Na Ubuntu i Debianie Docker domyślnie uruchamia się automatycznie przy starcie, więc nie musisz nic robić.
:::

Aby włączyć automatyczne uruchamianie Dockera, użyj poniższych komend.
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

Aby wyłączyć automatyczne uruchamianie, zamień `enable` na `disable`. Usługę możesz też zarządzać za pomocą różnych podkomend `systemctl`, np.:
```
sudo systemctl start [twoja_usługa]
sudo systemctl stop [twoja_usługa]
sudo systemctl restart [twoja_usługa]
```

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś Dockera na swoim serwerze Linux! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />