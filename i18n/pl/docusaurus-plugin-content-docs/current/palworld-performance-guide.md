---
id: palworld-performance-guide
title: "Palworld: Poradnik optymalizacji wydajności"
description: "Popraw wydajność serwera Palworld, zmniejsz spadki wydajności i obciążenie serwera dzięki ręcznym zmianom konfiguracji. -> Dowiedz się więcej teraz"
sidebar_label: Palworld: Poradnik optymalizacji wydajności
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Wydajność serwera Palworld może z czasem spadać, zwłaszcza na aktywnych serwerach z wieloma bazami, pracownikami, porzuconymi przedmiotami i dzikimi Palami. W tym poradniku nauczysz się, jak zoptymalizować plik `PalWorldSettings.ini` w panelu ZAP-Hosting, aby zmniejszyć obciążenie serwera i poprawić ogólną wydajność.

## Preparation

Zanim zaczniesz, potrzebujesz dostępu do administracji swojego serwera gier Palworld oraz uprawnień do edycji plików konfiguracyjnych.

:::info Wymagany dostęp
Potrzebujesz dostępu do swojego serwera Palworld w panelu administracyjnym serwera gier ZAP-Hosting. Wymagany plik konfiguracyjny znajdziesz w sekcji `Configs`.
:::

:::caution Najpierw wykonaj kopię zapasową
Dostosowanie wydajności może znacząco zmienić zachowanie rozgrywki. Przed edycją konfiguracji zaleca się wykonanie kopii zapasowej, aby w razie potrzeby móc przywrócić poprzednie ustawienia.
:::

## Otwórz plik konfiguracyjny Palworld

Aby zoptymalizować serwer, musisz edytować główny plik konfiguracyjny serwera Palworld.

1. Zaloguj się do panelu ZAP-Hosting.
2. Otwórz administrację swojego serwera gier **Palworld**.
3. Przejdź do **Configs**.
4. Otwórz plik `PalWorldSettings.ini`.



:::note Gdzie wprowadzać zmiany
Ustawienia związane z wydajnością znajdują się w pliku `PalWorldSettings.ini`. Musisz ręcznie edytować istniejące wartości opcji w tym pliku.
:::

## Zrozumienie istotnych ustawień

Kilka ustawień Palworld bezpośrednio wpływa na wydajność serwera. Niektóre wartości zmniejszają obciążenie CPU, pamięci i symulacji świata, inne pomagają ograniczyć nagromadzenie się nieaktywnych graczy lub nadmiarowych obiektów w świecie.

### Główne ustawienia wydajności

Poniższe ustawienia są najważniejsze, jeśli chcesz zmniejszyć spadki wydajności na ruchliwym serwerze.

| Ustawienie | Domyślne | Zalecana zmiana | Efekt |
|---|---:|---|---|
| `BuildObjectDeteriorationDamageRate` | `1.0` | Ustaw na `0.1` lub wyżej | Wyższe zużycie przyspiesza usuwanie opuszczonych budowli |
| `bAutoResetGuildNoOnlinePlayers` | `False` | Ustaw na `True` jeśli pasuje | Usuwa nieaktywne bazy gildii po określonym czasie |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Dostosuj według potrzeb | Określa czas nieaktywności w godzinach przed resetem gildii |
| `PalSpawnNumRate` | `1.0` | Zmniejsz | Mniej dzikich Palów, mniejsze obciążenie symulacji |
| `DropItemMaxNum` | `3000` | Zmniejsz | Ogranicza liczbę porzuconych przedmiotów w świecie |
| `DropItemAliveMaxHours` | `1.0` | Zmniejsz | Szybsze usuwanie porzuconych przedmiotów |
| `BaseCampMaxNumInGuild` | `4` | Zmniejsz | Ogranicza liczbę baz gildii |
| `ServerReplicatePawnCullDistance` | `15000.0` | Zmniejsz | Zmniejsza dystans synchronizacji Palów, redukuje obciążenie sieci i serwera |
| `BaseCampWorkerMaxNum` | `15` | Zmniejsz | Ogranicza liczbę pracujących Palów na bazę |
| `MaxBuildingLimitNum` | `0` | Ustaw wartość | Ogranicza łączną liczbę budynków na gracza |
| `bEnableInvaderEnemy` | `True` | Ustaw na `False` | Wyłącza najeźdźców, zmniejsza obciążenie |
| `bEnableFastTravel` | `True` | Ustaw na `False` jeśli potrzebne | Może zmniejszyć zacięcia spowodowane szybkim podróżowaniem |
| `bIsPvP` | `False` | Zachowaj `False` jeśli nie jest potrzebne | PvP może zwiększać obciążenie serwera na aktywnych serwerach |

### Dodatkowe ustawienia wydajności

Te ustawienia również mogą pomóc, szczególnie na większych serwerach publicznych.

| Ustawienie | Domyślne | Zalecana zmiana | Efekt |
|---|---:|---|---|
| `BaseCampMaxNum` | `128` | Zmniejsz | Ogranicza całkowitą liczbę baz na serwerze |
| `AutoSaveSpan` | `240` | Zwiększ | Zmniejsza częstotliwość automatycznych zapisów serwera |

:::tip Najpierw wybierz konserwatywne zmiany
Najlepiej zmieniać tylko kilka wartości naraz, a potem testować zachowanie serwera. Ułatwia to identyfikację, które ustawienie poprawiło wydajność, a które zbytnio wpłynęło na rozgrywkę.
:::

## Edytuj konfigurację

Palworld przechowuje opcje serwera w sekcji `OptionSettings` w pliku `PalWorldSettings.ini`. Musisz ręcznie dostosować odpowiednie wpisy.

### Przykład zoptymalizowanej konfiguracji

Poniższy przykład pokazuje konserwatywną konfigurację skupioną na wydajności. Zamień tylko wartości, które chcesz faktycznie zastosować na swoim serwerze.

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=0.800000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=False,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=2000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=64,BaseCampWorkerMaxNum=10,DropItemAliveMaxHours=0.500000,bAutoResetGuildNoOnlinePlayers=True,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=False,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,ServerReplicatePawnCullDistance=10000.000000,bEnableGuildPlayerSelect=False,BanListURL="https://api.palworldgame.com/api/banlist.txt",bAutoResetGuildNoOnlinePlayers=True,BaseCampMaxNumInGuild=3)
```

:::caution Sprawdź istniejące wpisy
Formaty konfiguracji Palworld mogą się zmieniać między aktualizacjami. Przed zapisaniem upewnij się, że edytujesz istniejącą linię `OptionSettings` w swoim pliku, zamiast tworzyć duplikaty lub sprzeczne wpisy.
:::

### Zalecane zmiany wartości

Jeśli nie chcesz zastępować całej linii, możesz edytować tylko odpowiednie wartości w swojej istniejącej konfiguracji.

| Wpis | Przykładowa wartość | Dlaczego zmienić |
|---|---:|---|
| `PalSpawnNumRate` | `0.8` | Mniej dzikich Palów |
| `DropItemMaxNum` | `2000` | Mniej bałaganu z przedmiotami |
| `DropItemAliveMaxHours` | `0.5` | Szybsze usuwanie porzuconych przedmiotów |
| `BaseCampMaxNum` | `64` | Mniej baz ogółem |
| `BaseCampMaxNumInGuild` | `3` | Ogranicza rozrost baz gildii |
| `BaseCampWorkerMaxNum` | `10` | Mniejsze obciążenie AI pracowników |
| `ServerReplicatePawnCullDistance` | `10000.0` | Mniejszy dystans replikacji |
| `bEnableInvaderEnemy` | `False` | Wyłącza obciążające najazdy |
| `bEnableFastTravel` | `False` | Unika zacięć przy szybkim podróżowaniu |
| `bAutoResetGuildNoOnlinePlayers` | `True` | Czyści nieaktywne bazy gildii |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Ustawia czas karencji nieaktywności |
| `MaxBuildingLimitNum` | `[your_limit]` | Ogranicza nadmierne budowanie |
| `bIsPvP` | `False` | Zapobiega dodatkowym obciążeniom PvP |
| `AutoSaveSpan` | `[your_value]` | Zmniejsza częstotliwość zapisu, jeśli obsługiwane w twojej konfiguracji |

:::danger Reset nieaktywnych gildii usuwa bazy
Jeśli włączysz `bAutoResetGuildNoOnlinePlayers=True`, nieaktywne gildie mogą zostać automatycznie rozwiązane po czasie ustawionym w `AutoResetGuildTimeNoOnlinePlayers`. Może to trwale usunąć bazy i budowle należące do nieaktywnych graczy.
:::

## Zapisz i zastosuj zmiany

Po edycji pliku musisz zapisać konfigurację i zrestartować serwer, aby nowe ustawienia zaczęły działać.

1. Zapisz zmiany w `PalWorldSettings.ini`.
2. Wróć do panelu administracji serwera gier.
3. Zrestartuj serwer Palworld.



:::info Wymagany restart
Po zmianie `PalWorldSettings.ini` wymagany jest restart serwera. Bez restartu serwer będzie korzystał ze starych ustawień.
:::

## Najlepsze praktyki dla długoterminowej wydajności

Ręczne zmiany konfiguracji pomagają, ale to tylko część optymalizacji serwera.

### Używaj automatycznych restartów codziennie

Codzienny restart to powszechna dobra praktyka dla serwerów Palworld, ponieważ zużycie zasobów narasta z czasem.

- Ustaw automatyczny harmonogram restartów w panelu ZAP-Hosting
- Wybierz godzinę o niskiej aktywności graczy
- Poinformuj graczy z wyprzedzeniem, jeśli masz aktywną społeczność

### Ogranicz rozwój świata

Największą przyczyną spadków wydajności na długo działających serwerach Palworld jest zwykle złożoność świata.

Aby to ograniczyć:

- zmniejsz limity baz
- zmniejsz liczbę pracowników
- ogranicz nagromadzenie porzuconych przedmiotów
- zmniejsz liczbę dzikich Palów
- ostrożnie czyść nieaktywne gildie
- rozważ ustawienie limitu budynków przez `MaxBuildingLimitNum`

### Testuj zmiany stopniowo

Nie stosuj od razu drastycznych ograniczeń, chyba że serwer jest niestabilny.

Dobry proces to:

1. Najpierw zmniejsz wartości spawnów i przedmiotów
2. Następnie ogranicz limity baz i pracowników
3. W razie potrzeby wyłącz opcjonalne funkcje generujące duże obciążenie
4. Po każdej rundzie zmian restartuj i monitoruj wydajność

:::tip Znajdź balans między wydajnością a rozgrywką
Najlepsze ustawienia zależą od typu twojego serwera. Mały prywatny serwer zwykle może mieć wyższe wartości, a duży publiczny serwer społecznościowy potrzebuje często ostrzejszych limitów, by zapobiec spadkom wydajności.
:::

## Conclusion

Gratulacje, pomyślnie zoptymalizowałeś wydajność swojego serwera Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂