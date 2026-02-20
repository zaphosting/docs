---
id: vserver-windows-ts6
title: "Konfiguracja Serwera TeamSpeak 6 na Windows - Wdroż Własną Platformę Głosową"
description: "Dowiedz się, jak zainstalować i zoptymalizować beta wersję TeamSpeak 6 Server dla płynnego hostingu i wydajności → Sprawdź teraz"
sidebar_label: Instalacja Serwera Teamspeak 6
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Latem 2025 TeamSpeak wypuścił **wersję beta** **TeamSpeak 6 Server**. Teraz możesz na własne oczy zobaczyć kolejną generację TeamSpeak!

Myślisz o samodzielnym hostingu tej usługi? Przeprowadzimy Cię przez każdy krok instalacji i konfiguracji oraz podpowiemy, na co zwrócić uwagę.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Wymagania wstępne

Przed instalacją **Teamspeak 6 Server** upewnij się, że Twój hosting spełnia poniższe wymagania, aby instalacja przebiegła gładko, a wydajność była optymalna.

| Sprzęt    | Minimum     | Rekomendacja ZAP-Hosting  |
| --------- | ----------- | ------------------------- |
| CPU       | 1 rdzeń vCPU| 4 rdzenie vCPU            |
| RAM       | 1 GB        | 4 GB                      |
| Miejsce na dysku | 1 GB  | 25 GB                     |



## Przygotowanie

Zanim zaczniesz konfigurację **TeamSpeak 6 Server**, przygotuj swój system. Aby mieć pewność, że działa na najnowszym oprogramowaniu i z aktualizacjami bezpieczeństwa, zawsze wykonaj najpierw aktualizacje systemu.

Dzięki temu Twój system będzie miał najnowsze łatki bezpieczeństwa i wersje oprogramowania przed dalszą instalacją.




## Instalacja
Gdy spełnisz wszystkie wymagania i przygotujesz system, możesz przejść do instalacji aplikacji Teamspeak 6 Server. Aby zainstalować TeamSpeak 6 Server, najpierw pobierz najnowszy plik release `http://teamspeak-server_win64-v6.0.0-beta6.zip/` z GitHub: [TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Następnie rozpakuj plik do wybranego katalogu. Otwórz **PowerShell** i przejdź do folderu, gdzie rozpakowałeś pliki serwera. Uruchom serwer poleceniem:

```
.\tsserver.exe
```

Przy pierwszym uruchomieniu pojawi się okno z umową licencyjną, którą musisz zaakceptować. Potem zostaną wyświetlone dane konta administratora Server Query oraz klucz uprawnień. Te informacje pojawią się tylko raz, więc koniecznie je zapisz.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

Po potwierdzeniu TeamSpeak 6 Server będzie już działał w tle i gotowy do użycia.

##### 

## Konfiguracja

Możesz też dostosować dodatkowe ustawienia **TeamSpeak 6 Server** za pomocą **argumentów wiersza poleceń**. Opcje podajesz bezpośrednio przy uruchamianiu serwera. Pełną listę dostępnych opcji znajdziesz w oficjalnej dokumentacji [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md). Przykład:

```
./tsserver --default-voice-port 9987
```



## Nawiązywanie połączenia

Gdy TeamSpeak 6 Server działa, możesz połączyć się z nim przez klienta TeamSpeak 6. Wystarczy użyć adresu IP Twojego serwera oraz odpowiedniego portu. Wprowadź te dane w kliencie, aby połączyć się z serwerem i zacząć testy.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Podsumowanie i dodatkowe materiały

Gratulacje! Właśnie zainstalowałeś i skonfigurowałeś Teamspeak 6 Server na swoim VPS/serwerze dedykowanym. Polecamy też rzucić okiem na poniższe materiały, które mogą pomóc Ci podczas dalszej konfiguracji serwera:

- [Oficjalna strona](https://teamspeak.com/en/) - Informacje i pobieranie TeamSpeak 6
- [Forum społeczności](https://community.teamspeak.com/) - Wsparcie i dyskusje użytkowników
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Zgłaszanie błędów i śledzenie problemów

Masz pytania, które tu nie zostały poruszone? Jeśli potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem – jesteśmy dostępni codziennie, by Ci pomóc! 🙂