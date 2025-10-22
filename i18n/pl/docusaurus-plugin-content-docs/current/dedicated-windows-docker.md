---
id: dedicated-windows-docker
title: "Serwer dedykowany: Instalacja Dockera na Windows"
description: "Dowiedz się, jak wdrażać i zarządzać aplikacjami niezawodnie za pomocą kontenerów Docker, aby efektywnie skalować i aktualizować → Sprawdź teraz"
sidebar_label: Instalacja Dockera
services:
  - Serwer dedykowany
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Docker to otwarta platforma do tworzenia, dystrybucji i uruchamiania aplikacji w kontenerach. Kontener pakuje aplikację wraz ze wszystkimi jej zależnościami w ustandaryzowaną jednostkę, która może działać niezawodnie w różnych środowiskach.

Takie podejście eliminuje problemy wynikające z różnic między systemami deweloperskimi, testowymi i produkcyjnymi. Dzięki Dockerowi aplikacje można szybko wdrażać, efektywnie skalować i aktualizować bez przestojów.

Myślisz o samodzielnym hostingu tej usługi? Przeprowadzimy Cię przez każdy krok instalacji i konfiguracji oraz podpowiemy, na co zwrócić uwagę.

<InlineVoucher />

## Wymagania wstępne

Przed instalacją **Dockera** upewnij się, że Twoje środowisko hostingowe spełnia poniższe wymagania, aby zapewnić płynną instalację i optymalną wydajność.

| Sprzęt    | Minimum     | Zalecenia ZAP-Hosting     |
| --------- | ----------- | ------------------------- |
| CPU       | 1 rdzeń CPU | 4 rdzenie CPU             |
| RAM       | 4 GB        | 4 GB                      |
| Miejsce na dysku | 10 GB       | 25 GB                     |

## Instalacja

Aby zainstalować Dockera na Windows Server, pobierz i uruchom skrypt PowerShell `install-docker-ce.ps1`. Skrypt włącza funkcje systemu operacyjnego wymagane do kontenerów i instaluje środowisko Docker. Otwórz PowerShell jako administrator i wykonaj następujące polecenie:

```powershell
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/microsoft/Windows-Containers/Main/helpful_tools/Install-DockerCE/install-docker-ce.ps1" -o install-docker-ce.ps1
.\install-docker-ce.ps1
```

Skrypt włącza funkcje Windows związane z kontenerami, instaluje Docker Engine i Docker CLI oraz rejestruje usługę Docker do automatycznego uruchamiania.

![img](https://screensaver01.zap-hosting.com/index.php/s/y26fPWy63FAWJGp/download)

Podczas instalacji system zostanie zrestartowany i powinien kontynuować proces automatycznie. Po restarcie zaloguj się i uruchom ten sam skrypt ponownie, jeśli skrypt o to poprosi, aby usługa zakończyła inicjalizację. Po zakończeniu skryptu wyświetli się taki komunikat:

```
Installing Docker... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\docker.exe
Installing Docker daemon... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\dockerd.exe
Configuring the docker service...
Waiting for Docker daemon...
Successfully connected to Docker Daemon.
The following images are present on this machine:
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE

Script complete!
```

## Konfiguracja

### Uruchamianie i zatrzymywanie Dockera

Docker działa jako usługa na Windows. Po instalacji uruchamia się automatycznie. Aby sterować nią ręcznie:

```
Start-Service docker    # Uruchom usługę Docker
Stop-Service docker     # Zatrzymaj usługę Docker
Restart-Service docker  # Zrestartuj usługę Docker
```

### Uruchamianie i zatrzymywanie kontenera

Uruchom kontener za pomocą `docker run`. Przykład: serwer WWW IIS mapujący port 80 w kontenerze na port 8080 hosta:

```
docker run -d --name web -p 8080:80 mcr.microsoft.com/windows/servercore/iis:windowsservercore-ltsc2022
```

### Sprawdzanie statusu kontenera

Sprawdź status kontenera za pomocą:

```
docker ps        # Uruchomione kontenery
docker ps -a     # Wszystkie kontenery, także zatrzymane
docker inspect web   # Szczegółowe informacje
docker logs web      # Logi kontenera
```

#### Zasoby i status

```
docker stats            # Na żywo CPU/RAM/IO
```

## Podsumowanie i dodatkowe zasoby

Gratulacje! Właśnie pomyślnie zainstalowałeś i skonfigurowałeś Dockera na swoim serwerze dedykowanym. Polecamy też zapoznać się z poniższymi materiałami, które mogą pomóc Ci w dalszej konfiguracji serwera:

- [Docker.com](https://Docker.com/) - Oficjalna strona
- [docs.docker.com](https://docs.docker.com/) - Dokumentacja Dockera

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz dalszej pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂