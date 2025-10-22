---
id: dedicated-linux-create-gameservice
title: "Serwer dedykowany: Skonfiguruj swój dedykowany serwer gier jako usługę Linux"
description: "Dowiedz się, jak skonfigurować i zarządzać usługami dedykowanego serwera gier na Linuxie dla płynnej automatyzacji i łatwej kontroli → Sprawdź teraz"
sidebar_label: Konfiguracja usługi Linux
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Usługi to integralna część Linuxa i odnoszą się do procesu lub aplikacji działającej w tle, będącej albo zadaniem predefiniowanym, albo zadaniem wywoływanym przez zdarzenie. To daje wiele korzyści, takich jak automatyczne uruchamianie serwera przy starcie systemu, automatyczne aktualizacje serwera, łatwe zarządzanie i dostęp do logów oraz wiele więcej! W tym poradniku przejdziemy przez proces tworzenia usługi dla Twojego dedykowanego serwera gier.

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](vserver-linux-ssh.md).

Powinieneś też skorzystać z jednego z naszych poradników dotyczących dedykowanych serwerów gier w tej sekcji, aby zainstalować i skonfigurować serwer gier na systemie Linux. W tym poradniku użyjemy jako przykładu [dedykowanego serwera gier Palworld](dedicated-linux-palworld.md), ale instrukcje można dostosować do wszystkich naszych poradników.

## Tworzenie usługi

Zacznij od utworzenia nowego pliku usługi dla dedykowanego serwera gier, który skonfigurowałeś. Zamień `[your_game]` na wybraną przez siebie nazwę. Zalecamy użycie nazwy gry, aby wszystko było przejrzyste, więc użyjemy `palworld.service`.
```
sudo nano /etc/systemd/system/[your_game].service
```

## Konfiguracja usługi

Po otwarciu edytora nano, skopiuj poniższą podstawową zawartość pliku, która jest szablonem usługi do ponownego wykorzystania. Mamy dwie wersje: jedną dla poradników korzystających ze SteamCMD, a drugą dla gier bez SteamCMD.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="steamcmd" label="Gra SteamCMD" default>

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/[your_server_folder]
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/[your_server_folder]' +login anonymous +app_update [your_game_steamid] +quit
ExecStart=/home/steam/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>

<TabItem value="regular" label="Zwykła gra">

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=gameservers
Group=gameservers
WorkingDirectory=/home/gameservers/[your_server_folder]
ExecStart=/home/gameservers/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>
</Tabs>

Rozbijmy zawartość pliku, aby lepiej zrozumieć każdy element.
- `Description`: Dowolny opis, przydatny do łatwego rozróżnienia celu usługi.
- `User`: Korzystając z naszych poradników, powinieneś mieć osobnego użytkownika `steam` dla SteamCMD lub `gameservers` dla gier bez SteamCMD. Jeśli nie, ustaw tutaj użytkownika, który ma uruchamiać usługę.
- `WorkingDirectory`: Ścieżka do głównego katalogu, który zawiera wszystko, czego usługa potrzebuje.
- `ExecStartPre` (tylko SteamCMD): Tutaj ustawiamy polecenie instalacji SteamCMD, które będzie wykonywane przy każdym restarcie serwera, aby zapewnić aktualność. Skopiuj je z odpowiedniego poradnika dedykowanego serwera gier lub ręcznie podmień wartości na te właściwe dla gry.
- `ExecStart`: To pole definiuje zadanie, które ma być uruchomione przez usługę. Ponownie, skopiuj ścieżkę z odpowiedniego poradnika lub ręcznie podmień wartości, aby wskazać plik startowy.

:::important Warstwa kompatybilności Wine
Dla gier wymagających warstwy kompatybilności **Wine**, powinieneś dodać polecenia **xvfb-run** i **wine** w parametrze `ExecStart`. Przykład dla V-Rising:
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Upewnij się również, że Twoje polecenie instalacji SteamCMD w `ExecStartPre` zawiera parametr `+@sSteamCmdForcePlatformType`, jeśli jest to konieczne, aby wymusić wersję platformy.
:::

Po dostosowaniu wszystkich wartości do swojego dedykowanego serwera gier, zapisz plik i wyjdź z nano, używając `CTRL + X`, następnie `Y`, aby potwierdzić, i na końcu `ENTER`.

Na przykładzie Palworld nasz plik będzie wyglądał tak:
```
[Unit]
Description=Palworld Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/Palworld-Server
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 +quit
ExecStart=/home/steam/Palworld-Server/PalServer.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

## Zarządzanie usługą

Po utworzeniu pliku usługi, musisz ją włączyć. W przykładzie `palworld.service`, `[your_service]` zastępujemy po prostu `palworld`.
```
sudo systemctl enable [your_service]
```

:::tip
Jeśli wprowadzisz zmiany w pliku usługi, pamiętaj, aby po nich wykonać `systemctl daemon-reload`, aby zmiany zostały zastosowane.
:::

Teraz możesz uruchomić serwer poleceniem `systemctl start`. Podobnie łatwo zatrzymasz lub zrestartujesz serwer za pomocą odpowiednich komend.
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

:::tip
Aby zobaczyć szczegóły usługi, użyj `systemctl status`. Jeśli potrzebujesz logów do debugowania, skorzystaj z `journalctl -u [your_service].service`, aby wyświetlić najnowsze logi usługi.
:::

Na koniec, jeśli chcesz wyłączyć automatyczne uruchamianie usługi przy starcie systemu, po prostu ją wyłącz.
```
sudo systemctl disable [your_service]
```

## Podsumowanie

Pomyślnie skonfigurowałeś usługę dla swojego dedykowanego serwera gier. Serwer będzie teraz automatycznie startował przy uruchomieniu serwera dedykowanego.

Nauczyłeś się też, co zawiera plik usługi oraz jak zarządzać usługą za pomocą różnych poleceń.

<InlineVoucher />