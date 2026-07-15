---
id: palworld-change-server-type
title: "Palworld: Zmiana typu serwera"
description: "Dowiedz się, jak zmienić typ serwera Palworld między Linux a Windows, zaktualizować poprawną ścieżkę konfiguracji i prawidłowo zastosować zmianę dla kompatybilności modów. -> Sprawdź teraz"
sidebar_label: Palworld: Zmiana typu serwera
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwery Palworld mogą działać na różnych typach serwerów, zwykle Linux lub Windows, w zależności od Twojej konfiguracji wynajmu serwerów i wymagań moddingowych. W tym poradniku nauczysz się, jak zmienić typ serwera w panelu ZAP-Hosting, zidentyfikować poprawną ścieżkę pliku konfiguracyjnego oraz prawidłowo zastosować zmianę.



## Przygotowanie

Przed rozpoczęciem upewnij się, że masz dostęp do swojego serwera gier Palworld w panelu ZAP-Hosting oraz uprawnienia do zatrzymania i ponownego uruchomienia serwera.

:::info Ważne informacje o zmianie typu serwera
Zmiana typu serwera z Linux na Windows lub z Windows na Linux może wpłynąć na ścieżki plików, kompatybilność modów oraz lokalizację istniejących konfiguracji. Typ serwera Windows jest często wymagany dla niektórych modów opartych na UE4SS.
:::

:::caution Sprawdź wymagania dotyczące reinstalacji
W zależności od sposobu wdrożenia produktu Palworld na Twoim serwerze, zmiana typu serwera może wymagać reinstalacji lub ponownego wdrożenia oprogramowania. Jeśli nie widzisz takiej opcji w swoim panelu, skontaktuj się z supportem przed kontynuacją.
:::

## Co się zmienia po przełączeniu typu serwera

Zmiana typu serwera zwykle nie oznacza zmiany wartości w samej konfiguracji rozgrywki Palworld. Główna zmiana dotyczy środowiska oprogramowania serwera, które również zmienia lokalizację aktywnych plików konfiguracyjnych.

Dla Palworld głównym plikiem konfiguracyjnym jest zazwyczaj:

- `PalWorldSettings.ini`

Folder zawierający ten plik zależy od wybranego typu serwera.

| Typ serwera | Ścieżka folderu konfiguracyjnego | Główny plik konfiguracyjny |
| --- | --- | --- |
| Linux | `Pal/Saved/Config/LinuxServer/` | `PalWorldSettings.ini` |
| Windows | `Pal/Saved/Config/WindowsServer/` | `PalWorldSettings.ini` |

:::note Dlaczego to jest ważne
Jeśli edytujesz plik konfiguracyjny Linux, ale Twój serwer działa jako Windows, zmiany mogą nie zostać zastosowane, ponieważ serwer odczytuje konfigurację z folderu specyficznego dla Windows.
:::

## Zatrzymaj serwer

Przed zmianą typu serwera zatrzymaj serwer, aby uniknąć konfliktów plików i niepełnych zmian.

1. Zaloguj się do panelu serwera gier ZAP-Hosting.
2. Otwórz panel administracyjny swojego serwera Palworld.
3. Zatrzymaj serwer za pomocą dostępnych opcji sterowania.

:::tip Zalecane przed edycją
Warto wykonać kopię zapasową przed zmianą typu serwera, szczególnie jeśli korzystasz już z modów lub ręcznie edytowałeś pliki konfiguracyjne.
:::

## Zmień typ serwera w panelu ZAP-Hosting

Zmiana typu serwera odbywa się zwykle przez ustawienia produktu lub oprogramowania w panelu ZAP-Hosting, a nie przez edycję linii w `PalWorldSettings.ini`.

1. W panelu administracyjnym serwera Palworld znajdź sekcję dotyczącą oprogramowania serwera lub ustawień gry.
2. Znajdź opcję kontrolującą zainstalowany typ serwera lub wariant oprogramowania.
3. Zmień ustawienie z `Linux` na `Windows` lub odwrotnie, w zależności od potrzeb.
4. Zapisz zmianę.



:::info Nie możesz znaleźć opcji zmiany typu serwera?
Dokładna nazwa i lokalizacja tej opcji może się różnić w zależności od wersji panelu ZAP-Hosting lub generacji produktu. Jeśli nie widzisz selektora typu serwera, zmiana może wymagać reinstalacji lub pomocy supportu.
:::

## Edytuj właściwy plik konfiguracyjny

Po zmianie typu serwera musisz upewnić się, że edytujesz aktywny plik konfiguracyjny w odpowiednim folderze.

### Otwórz sekcję Konfiguracje

W panelu administracyjnym serwera gier ZAP-Hosting:

1. Otwórz swój serwer Palworld.
2. Przejdź do `Configs`.
3. Przejdź do folderu odpowiadającego wybranemu typowi serwera.

Użyj jednej z poniższych ścieżek:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

Następnie otwórz:

- `PalWorldSettings.ini`

### Zweryfikuj lub ponownie zastosuj ustawienia

Jeśli wcześniej edytowałeś ustawienia na innym typie serwera, zmiany mogą istnieć tylko w starym folderze. Porównaj obie wersje `PalWorldSettings.ini` i przenieś potrzebne wartości do aktywnego pliku.

| Co sprawdzić | Dlaczego to ważne |
| --- | --- |
| Istniejące niestandardowe ustawienia | Mogą być tylko w folderze poprzedniego typu serwera |
| Ustawienia związane z modami | Typ Windows jest często wymagany dla modów UE4SS |
| Wartości rozgrywki | Serwer odczytuje plik tylko z aktywnej ścieżki specyficznej dla systemu |

:::caution Nie zakładaj, że oba pliki są zsynchronizowane
Foldery konfiguracyjne Linux i Windows są oddzielne. Zmiana typu serwera nie gwarantuje automatycznego skopiowania Twoich ustawień między nimi.
:::

## Sprawdź wpisy konfiguracyjne

Sam typ serwera zwykle nie jest kontrolowany przez linię w `PalWorldSettings.ini`. Po zmianie typu warto jednak potwierdzić, że aktywny plik konfiguracyjny zawiera oczekiwane ustawienia.

Typowa struktura `PalWorldSettings.ini` wygląda mniej więcej tak:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,EnablePlayerToPlayerDamage=False,EnableFriendlyFire=False,EnableInvaderEnemy=True,ActiveUNKO=False,EnableAimAssistPad=True,EnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,AutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,IsMultiplay=True,IsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,EnableNonLoginPenalty=True,EnableFastTravel=True,IsStartLocationSelectByMap=True,ExistPlayerAfterLogout=False,EnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="[your_server_name]",ServerDescription="",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

Podmień placeholdery takie jak:

- `[your_server_name]` na nazwę swojego serwera
- `[your_admin_password]` na hasło administratora
- `[your_server_password]` na hasło do dołączenia, jeśli używasz
- `[your_server_ip]` na publiczny adres IP serwera, jeśli jest wymagany

:::note Nie jest wymagana specjalna komenda w pliku
Nie ma znanego wpisu w `PalWorldSettings.ini`, który przełączałby typ serwera z Linux na Windows lub odwrotnie. Ta zmiana jest obsługiwana przez środowisko serwera w panelu hostingowym.
:::

## Zastosuj zmianę

Po zmianie typu serwera i potwierdzeniu poprawnego pliku konfiguracyjnego musisz zastosować nową konfigurację.

### Uruchom ponownie serwer

Po zapisaniu zmian uruchom serwer ponownie z panelu ZAP-Hosting.

W większości przypadków zwykły restart wystarczy, jeśli typ oprogramowania serwera został już poprawnie zmieniony.

### Reinstalacja, jeśli panel tego wymaga

Niektóre wdrożenia mogą wymagać reinstalacji po zmianie typu oprogramowania. Jeśli w panelu pojawi się taka opcja, postępuj zgodnie z nią i sprawdź potem, czy:

- aktywny jest poprawny typ serwera
- używana jest właściwa ścieżka konfiguracyjna
- wartości w `PalWorldSettings.ini` są nadal obecne

:::danger Reinstalacja może nadpisać pliki
Jeśli wymagana jest reinstalacja, niestandardowe pliki lub mody mogą zostać usunięte, jeśli nie wykonasz wcześniej kopii zapasowej. Zawsze sprawdzaj swoje dane zapisu, mody i pliki konfiguracyjne przed potwierdzeniem reinstalacji.
:::

## Zweryfikuj, czy nowy typ serwera jest aktywny

Po ponownym uruchomieniu serwera potwierdź, że zmiana się powiodła.

### Potwierdź przez ścieżkę konfiguracji

Otwórz ponownie `Configs` i sprawdź, czy aktywna ścieżka pliku odpowiada wybranemu typowi serwera:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

### Potwierdź kompatybilność modów

Jeśli zmieniłeś na Windows specjalnie dla modów UE4SS, sprawdź, czy pliki modów i konfiguracja odpowiadają środowisku Windows.

### Sprawdź działanie serwera

Zweryfikuj, czy serwer uruchamia się normalnie i czy Twoje ustawienia zostały poprawnie załadowane.

| Punkt weryfikacji | Oczekiwany rezultat |
| --- | --- |
| Serwer uruchamia się poprawnie | Brak błędów startu po zmianie typu |
| Poprawna ścieżka konfiguracji | Zgodna z typem Linux lub Windows |
| Załadowane niestandardowe ustawienia | Serwer korzysta z Twojego `PalWorldSettings.ini` |
| Wsparcie modów | Możliwość użycia modów Windows, jeśli dotyczy |

## Rozwiązywanie problemów

### Opcja zmiany typu serwera jest niewidoczna

Jeśli nie możesz znaleźć ustawienia zmiany typu serwera, może to oznaczać, że opcja nie jest dostępna w Twoim obecnym panelu produktu. W takim wypadku skontaktuj się z supportem ZAP-Hosting i zapytaj, czy Twój serwer Palworld można przełączyć między Linux a Windows.

### Moje ustawienia nie zostały zastosowane po zmianie

Zwykle dzieje się tak, gdy edytowano niewłaściwą ścieżkę konfiguracji. Sprawdź, czy aktualizowałeś:

- `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`

lub

- `Pal/Saved/Config/WindowsServer/PalWorldSettings.ini`

zgodnie z aktywnym typem serwera.

### Mody nadal nie działają

Zmiana na Windows sama w sobie może nie wystarczyć do pełnej konfiguracji modów. Niektóre mody wymagają dodatkowych plików, loaderów lub ręcznych kroków instalacji poza zmianą typu serwera.

## Podsumowanie

Gratulacje, pomyślnie zmieniłeś typ serwera Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂