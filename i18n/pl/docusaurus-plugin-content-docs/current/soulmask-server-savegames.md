---
id: soulmask-server-savegames
title: "Soulmask: Zarządzanie Save'ami Soulmask"
description: "Dowiedz się, jak zarządzać i robić kopie zapasowe swoich save'ów Soulmask lokalnie i na serwerze, aby gra była bezpieczna → Sprawdź teraz"
sidebar_label: Zarządzanie Save'ami
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

W tym poradniku pokażemy, jak zarządzać swoimi save'ami Soulmask na serwerze gier, w tym jak robić kopie zapasowe lokalnych i serwerowych save'ów oraz jak je przesyłać na serwer.

<InlineVoucher />

## Przygotowanie

Aby uzyskać dostęp do plików serwera, potrzebujesz klienta FTP, np. [WinSCP](https://winscp.net/eng/index.php) lub [FileZilla](https://filezilla-project.org/), które są open-source i darmowe.

Musisz połączyć się z serwerem przez klienta FTP, używając danych logowania, które znajdziesz w **Narzędzia->FTP-Browser** w panelu administracyjnym swojego serwera gier. Skorzystaj z naszego [poradnika Dostęp przez FTP](gameserver-ftpaccess.md), jeśli potrzebujesz pomocy przy połączeniu.

## Kopia zapasowa save'a

### Lokalny save

Lokalne save'y to te, które stworzyłeś, hostując grę multiplayer lokalnie na swoim urządzeniu. Znajdziesz je w Windows Local AppData, dokładnie pod ścieżką:
```
../AppData/Local/WS/[twoje_steamid]/AutoGames
```

:::tip
Możesz szybko dostać się do tej ścieżki, naciskając jednocześnie `CTRL` + `R` i wpisując w oknie uruchamiania: `%userprofile%/appdata/local/WS/`. Kliknij **OK** i otwórz folder ze swoim SteamID, aby dotrzeć do folderu AutoGames.

![](https://screensaver01.zap-hosting.com/index.php/s/FT4J9Jdi8d8LDxq/preview)
:::

W tym miejscu zobaczysz wszystkie swoje lokalne save'y. Każdy folder jest oznaczony kodem zaproszenia do serwera, co ułatwia znalezienie właściwego świata.

### Dostęp do save'a przez FTP

Robienie kopii zapasowej save'a z serwera jest proste. Po połączeniu się z serwerem gier przez klienta FTP, przejdź do ścieżki:
```
../soulmask/WS/Saved/Worlds/Dedicated
```

Znajdziesz tam główny folder `Level01_Main`, gdzie znajduje się save serwera dedykowanego. Kliknij prawym przyciskiem na folder i wybierz **Pobierz**, aby zapisać go lokalnie na swoim urządzeniu.

:::note
Obecnie serwery dedykowane Soulmask obsługują tylko jeden save na raz, który znajduje się w głównym folderze `Level01_Main`.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Ywna6zc3BkCK6ES/preview)

### Automatyczna kopia zapasowa

Oferujemy też opcję automatycznego backupu save'a (i pliku konfiguracyjnego) bezpośrednio przez panel administracyjny. Wystarczy, że wejdziesz do **Narzędzia->Kopie zapasowe** w panelu swojego serwera gier. Tam możesz ustawić harmonogram automatycznych backupów. Dajemy Ci 10 GB darmowego miejsca na kopie zapasowe. Więcej info o backupach znajdziesz w naszym dedykowanym [poradniku Kopie zapasowe](gameserver-backups.md).

## Wgrywanie save'a

Podobnie jak przy backupie, wgrywanie save'a jest proste. Najpierw połącz się z serwerem gier przez klienta FTP i upewnij się, że serwer jest wyłączony.

:::note
Obecnie serwery dedykowane Soulmask obsługują tylko jeden save na raz, który znajduje się w głównym folderze `Level01_Main`.
:::

Następnie przejdź do ścieżki:
```
../soulmask/WS/Saved/Worlds/Dedicated/Level01_Main
```

![](https://screensaver01.zap-hosting.com/index.php/s/iWKPKw5Grg4JgPi/preview)

Przeciągnij i upuść plik **world.db** z save'a, który chcesz wgrać, i zastąp istniejący plik. Pamiętaj, aby najpierw pobrać istniejący plik z serwera, jeśli chcesz go zachować, bo po nadpisaniu zostanie utracony.

Możesz też wgrać plik ustawień rozgrywki, przechodząc do ścieżki:
```
../soulmask/WS/Saved/GameplaySettings
```

![](https://screensaver01.zap-hosting.com/index.php/s/yqXF9EaDCin5rzT/preview)

Przeciągnij i upuść plik **GameXishu.json** z save'a, który chcesz wgrać, i zastąp istniejący plik. Ponownie, pobierz istniejący plik, jeśli chcesz go zachować.

:::tip
Jeśli save, którego używasz, ma nieco inną nazwę pliku **GameXishu.json**, np. `GameXishu_2.json`, zmień nazwę pliku z powrotem na `GameXishu.json`, aby serwer dedykowany go rozpoznał.
:::

Teraz po prostu uruchom serwer ponownie, a Twój save powinien się poprawnie załadować na serwerze.

<InlineVoucher />