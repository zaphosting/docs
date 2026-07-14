---
id: palworld-max-workers
title: "Palworld: Maksymalna liczba pracowników"
description: "Dowiedz się, jak zmienić maksymalną liczbę pracowników w Palworld, edytując BaseCampWorkerMaxNum, wraz z domyślnymi i bezpiecznymi limitami vanilla dla pracowników na bazę. -> Sprawdź teraz"
sidebar_label: Palworld: Maksymalna liczba pracowników
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld pozwala zmienić maksymalną liczbę pracujących Palów przypisanych do każdej bazy na Twoim serwerze. W tym poradniku nauczysz się, jak edytować odpowiedni plik konfiguracyjny w panelu administracyjnym ZAP-Hosting, dostosować wartość `BaseCampWorkerMaxNum` i poprawnie zastosować zmianę.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld przez panel administracyjny ZAP-Hosting.

:::info Wymagany dostęp do konfiguracji
Potrzebujesz dostępu do panelu administracyjnego serwera, aby otworzyć sekcję **Konfiguracje** i ręcznie edytować pliki konfiguracyjne Palworld.
:::

## Zrozumienie ustawienia maksymalnej liczby pracowników

Ustawienie w Palworld odpowiedzialne za maksymalną liczbę pracowników to `BaseCampWorkerMaxNum`. Ta opcja kontroluje, ile Palów może pracować w każdej pojedynczej bazie.

| Ustawienie | Plik konfiguracyjny | Cel | Wartość domyślna | Maksimum vanilla |
| --- | --- | --- | --- | --- |
| `BaseCampWorkerMaxNum` | `PalWorldSettings.ini` | Ustawia maksymalną liczbę pracujących Palów na bazę | `15` | `50` |

:::note Informacje o limicie vanilla
Aktualna publiczna dokumentacja wskazuje, że normalne maksymalne ograniczenie w grze to `50`. Wartości powyżej `50` zazwyczaj wymagają modów i nie są częścią standardowej konfiguracji vanilla.
:::

:::caution Wpływ na wydajność
Zwiększenie liczby pracowników może podnieść zużycie CPU i pamięci, ponieważ więcej Palów będzie aktywnych na Twoich bazach. Jeśli ustawisz wysoką wartość, monitoruj wydajność serwera po zmianie.
:::

## Otwórz plik konfiguracyjny Palworld

Aby zmienić ustawienie maksymalnej liczby pracowników, musisz edytować plik `PalWorldSettings.ini`.

### Znajdź plik w panelu ZAP-Hosting

Otwórz panel administracyjny swojego serwera gier Palworld i przejdź do:

- `Konfiguracje`
- `PalWorldSettings.ini`

To plik konfiguracyjny, w którym przechowywane są ustawienia rozgrywki Twojego serwera Palworld.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Edytuj wartość BaseCampWorkerMaxNum

Po otwarciu `PalWorldSettings.ini` znajdź linię `OptionSettings`. Ustawienia serwera Palworld są zwykle przechowywane jako pary klucz-wartość oddzielone przecinkami w tej sekcji.

### Zmień wpis konfiguracyjny

Znajdź następujący klucz:

```ini
BaseCampWorkerMaxNum=15
```

Zmień wartość na preferowaną liczbę. Na przykład, aby pozwolić na `20` pracujących Palów na bazę, wpisz:

```ini
BaseCampWorkerMaxNum=20
```

### Przykładowa konfiguracja

W zależności od Twojego pliku, ustawienie to zwykle pojawia się w dłuższym wpisie `OptionSettings` podobnym do tego:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=20,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,bHardcore=False,bPalLost=False,bRawData=False)
```

:::tip Edytuj tylko potrzebną wartość
Zmieniając tylko `BaseCampWorkerMaxNum` unikniesz przypadkowych błędów w konfiguracji i niezamierzonych zmian innych ustawień rozgrywki.
:::

## Zalecane wartości

Możesz wybrać dowolną wartość pasującą do Twojego stylu gry, o ile mieści się w obsługiwanych limitach vanilla.

| Wartość | Efekt | Rekomendacja |
| --- | --- | --- |
| `15` | Domyślny limit pracowników Palworld | Najlepsze dla standardowej rozgrywki |
| `20` do `30` | Zwiększona automatyzacja bazy | Dobry balans dla większości prywatnych serwerów |
| `40` do `50` | Bardzo wysoka liczba pracowników | Używaj tylko jeśli serwer ma wystarczające zasoby |
| Powyżej `50` | Nie jest standardowym zachowaniem vanilla | Zazwyczaj wymaga modów i nie jest zalecane bez testów |

## Zapisz i zastosuj zmiany

Po edycji wartości zapisz plik `PalWorldSettings.ini` w edytorze konfiguracji ZAP-Hosting.

### Uruchom ponownie serwer

Po zapisaniu pliku zrestartuj serwer Palworld, aby nowe ustawienie maksymalnej liczby pracowników zostało załadowane.

:::info Wymagany restart
Zmiany w `PalWorldSettings.ini` nie są stosowane natychmiast podczas działania serwera. Musisz zrestartować serwer po zapisaniu pliku.
:::

## Sprawdź nowy limit pracowników

Po restarcie serwera dołącz do swojego serwera Palworld i sprawdź jedną z baz. Powinieneś teraz móc przypisać pracujących Palów do nowego, skonfigurowanego limitu.

Jeśli zmiana nie działa, sprawdź następujące kwestie:

| Sprawdzenie | Co zweryfikować |
| --- | --- |
| Poprawny plik | Edytowałeś `PalWorldSettings.ini` |
| Poprawny klucz | `BaseCampWorkerMaxNum` jest obecny i poprawnie napisany |
| Poprawna składnia | Linia `OptionSettings` nie została uszkodzona |
| Restart wykonany | Serwer został w pełni zrestartowany po zapisie |
| Zakres wartości | Wartość mieści się w normalnym limicie vanilla `50` |

:::caution Składnia konfiguracji
Wpisy konfiguracyjne Palworld są wrażliwe na formatowanie. Jeśli przypadkowo usuniesz przecinki, nawiasy lub inne elementy linii `OptionSettings`, serwer może zignorować ustawienie lub nie załadować go poprawnie.
:::

## Podsumowanie

Gratulacje, pomyślnie zmieniłeś maksymalną liczbę pracowników na bazę na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!