---
id: vserver-linux-docker
title: "VPS: Instalacja Dockera"
description: "Dowiedz się, jak zainstalować Dockera na swoim serwerze Linux, aby uruchamiać izolowane aplikacje efektywnie i oszczędzać zasoby systemowe → Sprawdź teraz"
sidebar_label: Instalacja Dockera
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Wprowadzenie

Docker to lekki, open source'owy software do wirtualizacji, który pozwala na uruchamianie usług lub aplikacji w izolacji na jednym systemie. W przeciwieństwie do prawdziwych maszyn wirtualnych, nie emuluje ani nie hostuje dodatkowego systemu operacyjnego, a jedynie środowisko aplikacji w ramach systemu hosta. Dzięki temu oszczędzasz zasoby i masz niskie narzuty w porównaniu do pełnej wirtualizacji. W tym poradniku pokażemy, jak zainstalować Dockera na Twoim serwerze.

<InlineVoucher />

## Przygotowanie

Na początek musisz połączyć się ze swoim serwerem Linux przez SSH. Jeśli potrzebujesz pomocy, zerknij na nasz [Poradnik: Pierwszy dostęp (SSH)](vserver-linux-ssh.md). W tym poradniku korzystamy z Ubuntu jako dystrybucji Linux.

## Instalacja

Gdy już jesteś połączony ze swoim serwerem Linux, możesz przejść do metod instalacji. Wybierz jedną z poniższych dystrybucji Linux, aby zobaczyć odpowiednie kroki instalacji.

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

Po skonfigurowaniu kluczy, dodaj repozytorium do źródeł `apt` za pomocą poniższej komendy.

```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Teraz, gdy dodałeś repozytorium Dockera do źródeł, uruchom aktualizację `apt-get`, aby pobrać zmiany.

```
sudo apt-get update
```

Na tym etapie masz już poprawnie skonfigurowane repozytorium Dockera. Ostatnim krokiem jest instalacja pakietów Dockera. Najnowszą wersję zainstalujesz poleceniem:

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

Docker powinien być teraz zainstalowany. Na koniec uruchom i włącz usługę, aby działała.

```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

Aby sprawdzić, czy instalacja się powiodła, spróbuj uruchomić obraz **hello-world** poleceniem:

```
sudo docker run hello-world
```

Jeśli wszystko poszło dobrze, zobaczysz przyjazny komunikat powitalny z podstawowymi informacjami. Jeśli pojawią się błędy `Permission Denied`, upewnij się, że w panelu webowym włączyłeś opcję **Docker Compatibility** i zrestartowałeś serwer, jak opisano w sekcji [Przygotowanie](#przygotowanie).

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

Gratulacje, Docker jest już zainstalowany na Twoim serwerze Linux.

## Konfiguracja po instalacji

Po instalacji Dockera możesz wykonać dodatkowe ustawienia, które pozwolą Ci korzystać z Dockera bez konieczności używania `sudo` oraz automatycznie uruchamiać Dockera przy starcie serwera.

### Zarządzanie Dockerem bez Sudo

Aby nie musieć wpisywać `sudo` przed każdą komendą Dockera, stwórz grupę `docker` i dodaj do niej swojego użytkownika. To wygodne rozwiązanie, ale pamiętaj, że daje to użytkownikowi uprawnienia na poziomie root.

Utwórz grupę `docker` i dodaj do niej aktualnego użytkownika:

```
# Utwórz grupę Docker
sudo groupadd docker

# Dodaj aktualnego użytkownika do grupy Docker
sudo usermod -aG docker $USER
```

Po tym zalecamy restart serwera, aby zmiany w członkostwie grupy zostały uwzględnione. Alternatywnie możesz użyć `newgrp docker`.

Teraz sprawdź, czy możesz uruchomić komendy Dockera bez `sudo`, ponownie wykonując:

```
docker run hello-world
```

:::tip
Czasem, jeśli wcześniej uruchamiałeś Dockera z `sudo`, możesz dostać błąd dotyczący pliku konfiguracyjnego. W takim wypadku usuń katalog Dockera poleceniem `rmdir ~/.docker/` — zostanie on automatycznie odtworzony przy następnym użyciu Dockera.
:::

Jeśli komenda działa, to znaczy, że Docker jest poprawnie skonfigurowany do działania bez `sudo`.

### Automatyczne uruchamianie Dockera przy starcie

Możesz ustawić Dockera tak, aby startował automatycznie przy uruchomieniu serwera, korzystając z `systemd`, który jest standardem w większości dystrybucji Linux.

:::tip
Na Ubuntu i Debianie Docker domyślnie uruchamia się automatycznie przy starcie, więc nie musisz nic robić.
:::

Aby włączyć automatyczny start Dockera, użyj poniższych komend:

```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

Aby wyłączyć automatyczny start, zamień `enable` na `disable`. Usługami możesz też zarządzać za pomocą tych komend:

```
sudo systemctl start [nazwa_usługi]
sudo systemctl stop [nazwa_usługi]
sudo systemctl restart [nazwa_usługi]
```

## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować Dockera na swoim serwerze Linux! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />