---
id: dedicated-linux-docker
title: "Konfiguracja Dockera na serwerze Linux - Uruchamiaj i zarządzaj kontenerami na swojej infrastrukturze"
description: "Dowiedz się, jak zainstalować Dockera na swoim serwerze Linux, aby efektywnie uruchamiać izolowane aplikacje i optymalizować wykorzystanie zasobów → Sprawdź teraz"
sidebar_label: Instalacja Dockera
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Wprowadzenie

Docker to lekki, open source’owy software do wirtualizacji, który pozwala uruchamiać usługi lub aplikacje w izolacji na jednym systemie. W przeciwieństwie do prawdziwych maszyn wirtualnych, nie emuluje się tu ani nie hostuje dodatkowego systemu operacyjnego, a jedynie środowisko aplikacji w ramach systemu hosta. Dzięki temu oszczędzasz zasoby i masz niskie narzuty w porównaniu do pełnej wirtualizacji. W tym poradniku pokażemy, jak zainstalować Dockera na Twoim serwerze.

## Przygotowanie

Na początek musisz połączyć się ze swoim serwerem Linux przez SSH. Jeśli potrzebujesz pomocy, zerknij na nasz [poradnik Pierwszy dostęp (SSH)](dedicated-linux-ssh.md). W tym poradniku korzystamy z Ubuntu jako dystrybucji Linux.

### Włącz kompatybilność Dockera

Musisz włączyć **Docker Compatibility** w panelu webowym swojego serwera, aby kontenery Dockera działały poprawnie. W przeciwnym razie pojawią się błędy `Permission Denied`.

Przejdź do sekcji **Ustawienia** w panelu webowym serwera, włącz opcję **Docker Compatibility** i zapisz zmiany.

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

Po zapisaniu zmian upewnij się, że zrestartujesz serwer, zanim przejdziesz dalej.

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

Po skonfigurowaniu kluczy musisz dodać repozytorium do źródeł `apt` za pomocą poniższej komendy.
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Teraz, gdy dodałeś repozytorium Dockera, zaktualizuj listę pakietów.
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

Po instalacji dodaj repozytorium Dockera i zainstaluj go poleceniem:
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

Docker powinien być już zainstalowany. Na koniec uruchom i włącz usługę, aby działała.
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

Aby sprawdzić, czy instalacja się powiodła, uruchom obraz **hello-world** poleceniem:
```
sudo docker run hello-world
```

Jeśli wszystko poszło dobrze, zobaczysz powitalną wiadomość z podstawowymi informacjami. Jeśli pojawią się błędy `Permission Denied`, upewnij się, że włączyłeś opcję **Docker Compatibility** w panelu webowym i zrestartowałeś serwer, jak opisano w sekcji przygotowawczej.

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

Docker został pomyślnie zainstalowany na Twoim serwerze Linux.

## Konfiguracja po instalacji

Po instalacji Dockera możesz wykonać dodatkowe ustawienia, aby nie musieć używać `sudo` przy każdej komendzie Dockera oraz aby Docker startował automatycznie przy uruchomieniu serwera.

### Zarządzanie Dockerem bez sudo

Możesz usunąć konieczność dodawania `sudo` do wszystkich poleceń Dockera, tworząc grupę Docker i dodając do niej użytkowników. To wygodne, ale pamiętaj, że daje to użytkownikowi pośrednio uprawnienia root.

Utwórz grupę `docker` i dodaj do niej swojego aktualnego użytkownika:
```
# Utwórz grupę Docker
sudo groupadd docker

# Dodaj aktualnego użytkownika do grupy Docker
sudo usermod -aG docker $USER
```

Po tym zalecamy restart serwera, aby zmiany w członkostwie grup zostały uwzględnione. Alternatywnie możesz użyć `newgrp docker`.

Teraz sprawdź, czy możesz uruchomić polecenia Dockera bez `sudo`, np.:
```
docker run hello-world
```

:::tip
Czasem możesz dostać błąd dotyczący pliku konfiguracyjnego, jeśli wcześniej uruchamiałeś polecenia z `sudo`. Aby to naprawić, usuń katalog Dockera poleceniem `rmdir ~/.docker/`. Katalog zostanie automatycznie utworzony przy następnym użyciu Dockera.
:::

Jeśli polecenie działa, to znaczy, że Docker działa bez potrzeby używania `sudo`.

### Automatyczny start Dockera przy uruchomieniu serwera

Możesz ustawić, aby Docker startował automatycznie przy starcie serwera, korzystając z `systemd`, który jest standardem w większości dystrybucji Linux.

:::tip
Na Ubuntu i Debianie Docker domyślnie startuje automatycznie przy uruchomieniu systemu, więc nie musisz nic robić.
:::

Aby włączyć automatyczny start Dockera, użyj:
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

Aby wyłączyć automatyczny start, zamień `enable` na `disable`. Usługą możesz też zarządzać poleceniami:
```
sudo systemctl start [nazwa_usługi]
sudo systemctl stop [nazwa_usługi]
sudo systemctl restart [nazwa_usługi]
```

## Podsumowanie

Gratulacje, właśnie zainstalowałeś i skonfigurowałeś Dockera na swoim serwerze Linux! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!