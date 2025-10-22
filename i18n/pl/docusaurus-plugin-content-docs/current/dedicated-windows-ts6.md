---
id: dedicated-windows-ts6
title: "Serwer dedykowany: Jak zainstalować serwer Teamspeak 6 na Twoim Windows serwerze dedykowanym"
description: "Dowiedz się, jak skonfigurować i zoptymalizować swój serwer TeamSpeak 6 dla najlepszej wydajności i bezpieczeństwa → Sprawdź teraz"
sidebar_label: Instalacja serwera Teamspeak 6
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Latem 2025 TeamSpeak wypuścił **wersję Beta** **serwera TeamSpeak 6**. Teraz możesz na własne oczy zobaczyć kolejną generację TeamSpeak!

Myślisz o hostingu tego serwisu na własnym serwerze? Przeprowadzimy Cię przez każdy krok instalacji i konfiguracji oraz podpowiemy, na co zwrócić uwagę.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Wymagania wstępne

Przed instalacją **serwera Teamspeak 6** upewnij się, że Twoje środowisko hostingowe spełnia poniższe wymagania, aby instalacja przebiegła gładko, a wydajność była optymalna.

| Sprzęt    | Minimum     | Rekomendacja ZAP-Hosting  |
| --------- | ----------- | ------------------------- |
| CPU       | 1 rdzeń vCPU| 4 rdzenie vCPU            |
| RAM       | 1 GB        | 4 GB                      |
| Miejsce na dysku | 1 GB  | 25 GB                     |



## Przygotowanie

Zanim zaczniesz konfigurację **serwera TeamSpeak 6**, przygotuj swój system. Aby mieć pewność, że działa na najnowszym oprogramowaniu i z aktualnymi poprawkami bezpieczeństwa, zawsze wykonaj najpierw aktualizacje systemu.

Dzięki temu Twój system będzie miał najnowsze łatki i wersje oprogramowania przed dalszymi krokami.




## Instalacja
Gdy spełnisz wszystkie wymagania i przygotujesz system, możesz przejść do instalacji aplikacji serwera Teamspeak 6. Aby zainstalować serwer TeamSpeak 6, najpierw pobierz najnowszy plik release `http://teamspeak-server_win64-v6.0.0-beta6.zip/` z GitHub: [TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Następnie rozpakuj plik do wybranego katalogu. Otwórz **PowerShell** i przejdź do folderu, gdzie rozpakowałeś pliki serwera. Uruchom serwer poleceniem:

```
.\tsserver.exe
```

Przy pierwszym uruchomieniu pojawi się okno z umową licencyjną, którą musisz zaakceptować. Po tym zostaną wyświetlone dane konta administratora Server Query oraz klucz uprawnień. Te informacje pojawią się tylko raz, więc koniecznie je zapisz w bezpiecznym miejscu.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

Po potwierdzeniu serwer TeamSpeak 6 będzie już działał w tle i gotowy do użycia.

##### 

## Konfiguracja

Możesz też dostosować dodatkowe ustawienia **serwera TeamSpeak 6** za pomocą **argumentów wiersza poleceń**. Opcje podajesz bezpośrednio przy uruchamianiu serwera. Pełną listę dostępnych opcji znajdziesz w oficjalnej dokumentacji [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md). Przykład:

```
./tsserver --default-voice-port 9987
```



## Nawiązywanie połączenia

Gdy serwer TeamSpeak 6 jest już uruchomiony, możesz połączyć się z nim za pomocą klienta TeamSpeak 6. Wystarczy, że wpiszesz adres IP swojego serwera oraz odpowiedni port. Wprowadź te dane w kliencie, aby połączyć się z serwerem i zacząć testować.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Podsumowanie i dodatkowe materiały

Gratulacje! Właśnie pomyślnie zainstalowałeś i skonfigurowałeś serwer Teamspeak 6 na swoim serwerze dedykowanym. Polecamy też rzucić okiem na poniższe materiały, które mogą Ci pomóc i wesprzeć podczas konfiguracji serwera.

- [Oficjalna strona](https://teamspeak.com/en/) - Informacje i pobieranie TeamSpeak 6
- [Forum społeczności](https://community.teamspeak.com/) - Wsparcie użytkowników i dyskusje
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Zgłaszanie błędów i śledzenie problemów

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz pomocy lub masz dodatkowe pytania, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />