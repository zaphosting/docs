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

## Przygotowanie

Na początek musisz połączyć się ze swoim serwerem Linux przez SSH. Jeśli potrzebujesz pomocy, zerknij na nasz [Poradnik: Pierwszy dostęp (SSH)](dedicated-linux-ssh.md). W tym poradniku korzystamy z Ubuntu jako dystrybucji Linux.

### Włącz kompatybilność Dockera

Musisz włączyć **Kompatybilność Dockera** w panelu webowym serwera, aby kontenery Dockera działały poprawnie, inaczej pojawią się błędy `Permission Denied`.

Przejdź do sekcji **Ustawienia** w panelu webowym serwera, włącz opcję **Kompatybilność Dockera** i zapisz zmiany.

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

Po zapisaniu zmian, koniecznie zrestartuj serwer zanim przejdziesz dalej.

## Instalacja

Po połączeniu się z serwerem Linux możesz przejść do instalacji. Wybierz swoją dystrybucję Linux z poniższych repozytoriów, aby zobaczyć odpowiednie kroki instalacji.

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

Na początek musisz dodać pakiet Dockera przez `apt` i go skonfigurować. Dzięki temu w przyszłości łatwo zainstalujesz i zaktualizujesz Dockera z repozytorium.

Użyj poniższych komend, aby dodać oficjalny klucz GPG Dockera do listy repozytoriów.
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Po skonfigurowaniu kluczy, dodaj repozytorium do źródeł `apt` poleceniem:
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Teraz, gdy dodałeś repozytorium Dockera, zaktualizuj listę pakietów:
```
sudo apt-get update
```

Na tym etapie masz już skonfigurowane repozytorium Dockera. Ostatnim krokiem jest instalacja pakietów Dockera. Zainstaluj najnowszą wersję poleceniem:
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

Docker powinien być już zainstalowany. Na koniec uruchom i włącz usługę, aby działała od startu systemu:
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

Aby sprawdzić, czy instalacja się powiodła, uruchom obraz **hello-world** poleceniem:
```
sudo docker run hello-world
```

Jeśli wszystko poszło dobrze, zobaczysz powitalną wiadomość z podstawowymi informacjami. Jeśli pojawią się błędy `Permission Denied`, upewnij się, że włączyłeś opcję **Kompatybilność Dockera** w panelu webowym i zrestartowałeś serwer, jak opisano w sekcji przygotowania.

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

Docker został pomyślnie zainstalowany na Twoim serwerze Linux.

## Konfiguracja po instalacji

Po instalacji Dockera możesz wykonać dodatkowe ustawienia, aby nie musieć używać `sudo` przy poleceniach Dockera oraz aby Docker startował automatycznie przy uruchomieniu serwera.

### Zarządzanie Dockerem bez sudo

Możesz usunąć konieczność poprzedzania wszystkich poleceń Dockera komendą `sudo`, tworząc grupę Docker i dodając do niej użytkowników. To wygodne, ale pamiętaj, że daje to użytkownikowi pośrednio uprawnienia root.

Utwórz grupę `docker` i dodaj do niej swojego aktualnego użytkownika poleceniami:
```
# Utwórz grupę Docker
sudo groupadd docker

# Dodaj aktualnego użytkownika do grupy Docker
sudo usermod -aG docker $USER
```

Po tym zalecamy restart serwera, aby zmiany w członkostwie grup zostały uwzględnione. Alternatywnie możesz użyć `newgrp docker`.

Teraz sprawdź, czy możesz uruchomić polecenie Dockera bez `sudo`, np.:
```
docker run hello-world
```

:::tip
Czasem możesz dostać błąd dotyczący pliku konfiguracyjnego, jeśli wcześniej uruchamiałeś polecenia z `sudo`. Aby to naprawić, usuń katalog Dockera poleceniem `rmdir ~/.docker/` — zostanie on automatycznie odtworzony przy następnym użyciu Dockera.
:::

Jeśli polecenie działa, to znaczy, że Docker jest poprawnie skonfigurowany do działania bez `sudo`.

### Automatyczny start Dockera przy starcie serwera

Możesz ustawić Dockera, aby startował automatycznie przy uruchomieniu serwera, korzystając z `systemd`, który jest standardem w większości dystrybucji Linux.

:::tip
Na Ubuntu i Debianie Docker domyślnie startuje automatycznie przy starcie systemu, więc nie musisz nic robić.
:::

Aby włączyć automatyczny start Dockera, użyj poleceń:
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

Analogicznie, aby wyłączyć automatyczny start, zamień `enable` na `disable`. Usługę możesz też zarządzać za pomocą innych poleceń `systemctl`, np.:
```
sudo systemctl start [nazwa_usługi]
sudo systemctl stop [nazwa_usługi]
sudo systemctl restart [nazwa_usługi]
```

## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować Dockera na swoim serwerze Linux! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!