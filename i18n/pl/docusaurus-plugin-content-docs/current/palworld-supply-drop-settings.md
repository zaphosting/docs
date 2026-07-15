---
id: palworld-supply-drop-settings
title: "Palworld: Ustawienia Dostaw"
description: "Dowiedz się, jak zmienić częstotliwość dostaw w Palworld na swoim serwerze gier Palworld, edytując ręcznie ustawienie SupplyDropSpan. -> Dowiedz się więcej teraz"
sidebar_label: "Ustawienia Dostaw"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld zawiera dostawy pojawiające się w regularnych odstępach czasu, które mogą zawierać przydatne zasoby. W tym poradniku nauczysz się, jak ręcznie zmienić częstotliwość dostaw na swoim serwerze gier Palworld w ZAP-Hosting, edytując odpowiedni plik konfiguracyjny i poprawnie stosując zmiany.

## Preparation

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld przez panel główny ZAP-Hosting oraz że serwer jest aktualnie dostępny w panelu administracyjnym serwera gier.

:::info Wymagana Ręczna Konfiguracja
Ta konfiguracja odbywa się poprzez ręczną edycję pliku konfiguracyjnego serwera Palworld. Będziesz musiał otworzyć plik konfiguracyjny w sekcji **Configs** w panelu administracyjnym serwera gier.
:::

## Znajdź Plik Konfiguracyjny

Aby zmienić odstęp między dostawami, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting:

1. Otwórz swój serwer Palworld.
2. Przejdź do **Configs**.
3. Otwórz plik `PalWorldSettings.ini`.



:::note Lokalizacja Pliku Konfiguracyjnego
W ZAP-Hosting odpowiednie ustawienia Palworld dotyczące rozgrywki są zwykle zarządzane przez plik `PalWorldSettings.ini` w sekcji **Configs** panelu administracyjnego serwera. Jeśli układ twojego panelu różni się nieco, skorzystaj z dostępnej listy plików konfiguracyjnych i poszukaj dokładnie `PalWorldSettings.ini`.
:::

## Edytuj Ustawienie Dostaw

Ustawieniem odpowiadającym za częstotliwość dostaw jest `SupplyDropSpan`.

Ta wartość definiuje odstęp między dostawami w **minutach**.

### Znajdź Odpowiednią Sekcję

W pliku `PalWorldSettings.ini` ustawienia serwera Palworld są zwykle przechowywane w linii `OptionSettings`. Musisz zlokalizować istniejący blok ustawień i sprawdzić, czy `SupplyDropSpan` jest już obecne.

Jeśli jest, zmień jego wartość.

Jeśli go nie ma, dodaj je wewnątrz sekcji `OptionSettings=(...)` razem z innymi ustawieniami oddzielonymi przecinkami.

### Wpis Konfiguracyjny

Użyj następującego formatu:

```ini
SupplyDropSpan=[twoja_wartość]
```

Zamień `[twoja_wartość]` na liczbę minut, którą chcesz ustawić.

### Przykładowe Wartości

| Ustawienie | Znaczenie |
| --- | --- |
| `SupplyDropSpan=180` | Domyślny odstęp 3 godzin |
| `SupplyDropSpan=60` | Dostawy co 1 godzinę |
| `SupplyDropSpan=360` | Dostawy co 6 godzin |
| `SupplyDropSpan=30` | Bardzo częste dostawy |

Oto przykład, jak ustawienie może wyglądać wewnątrz pełnego bloku `OptionSettings`:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt",SupplyDropSpan=60)
```

:::caution Zachowaj Poprawną Składnię
Nie usuwaj przecinków, nawiasów ani innych istniejących wartości w linii `OptionSettings`. Błąd formatowania w tej linii może uniemożliwić poprawne załadowanie konfiguracji przez serwer.
:::

## Zapisz i Zastosuj Zmiany

Po edycji wartości:

1. Zapisz zmiany w pliku `PalWorldSettings.ini`.
2. Zrestartuj swój serwer Palworld z panelu administracyjnego serwera gier ZAP-Hosting.

Restart jest konieczny, ponieważ Palworld nie stosuje tego ustawienia rozgrywki na żywo podczas działania serwera.

### Czy Potrzebne Są Dodatkowe Komendy?

Nie jest zwykle wymagana żadna dodatkowa komenda w grze ani w konsoli dla tej zmiany. Restart serwera to jedyny wymagany krok, aby załadować zaktualizowaną wartość `SupplyDropSpan`.

| Akcja | Wymagane |
| --- | --- |
| Edycja `PalWorldSettings.ini` | Tak |
| Dodanie lub zmiana `SupplyDropSpan` | Tak |
| Uruchomienie dodatkowej komendy w konsoli | Nie |
| Restart serwera po zapisie | Tak |

## Sprawdź Ustawienie

Po restarcie serwera nowy odstęp między dostawami powinien być aktywny.

Ponieważ to ustawienie kontroluje czasowe zdarzenia w świecie gry, może być konieczne poczekać na kolejny cykl pojawienia się dostawy, aby w pełni potwierdzić zmianę w grze. Jeśli ustawisz krótszy odstęp, np. `60` lub `30`, weryfikacja będzie łatwiejsza.

:::tip Szybsze Testowanie Zmian
Jeśli chcesz potwierdzić działanie ustawienia bez czekania kilku godzin, tymczasowo ustaw `SupplyDropSpan=30`. Po testach możesz zmienić wartość na preferowaną na dłuższą metę.
:::

## Rozwiązywanie Problemów

### Ustawienie Nie Działa

Jeśli częstotliwość dostaw nie zmienia się, sprawdź:

- Czy `SupplyDropSpan` jest wpisane dokładnie tak, jak pokazano
- Czy wartość znajduje się w sekcji `OptionSettings=(...)`
- Czy nie brakuje przecinków lub nawiasów
- Czy po zapisaniu pliku zrestartowałeś serwer

### Serwer Ma Błędy Konfiguracji

Jeśli serwer nie uruchamia się po edycji pliku, przywróć poprzednią konfigurację i dokładnie sprawdź składnię.

:::danger Niepoprawne Formatowanie INI
Palworld przechowuje wiele ustawień rozgrywki w jednej linii `OptionSettings`. Nawet jeden błędny znak może zepsuć konfigurację. Zawsze dokładnie sprawdzaj zmiany przed zapisem.
:::

## Conclusion

Gratulacje, pomyślnie zmieniłeś ustawienia dostaw w Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂