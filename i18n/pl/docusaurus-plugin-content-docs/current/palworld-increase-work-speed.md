---
id: palworld-increase-work-speed
title: "Palworld: Zwiększ prędkość pracy"
description: "Dowiedz się, jak zwiększyć prędkość pracy w Palworld, edytując ustawienie WorkSpeedRate, aby przyspieszyć pracę graczy i Pal na Twoim serwerze. -> Sprawdź teraz"
sidebar_label: "Zwiększ prędkość pracy"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld pozwala na dostosowanie szybkości wykonywania prac przez graczy i Pals na bazie poprzez zmianę wartości konfiguracyjnej serwera. W tym poradniku nauczysz się, jak zwiększyć prędkość pracy na swoim serwerze Palworld w ZAP-Hosting, edytując odpowiedni plik konfiguracyjny i poprawnie stosując zmiany.



## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do panelu administracyjnego swojego serwera gier Palworld w interfejsie ZAP-Hosting.

:::info Konfiguracja ręczna wymagana
Ta konfiguracja jest wykonywana ręcznie przez edytor konfiguracji. Musisz samodzielnie edytować plik konfiguracyjny serwera Palworld w sekcji `Configs` panelu administracyjnego serwera gier.
:::

## Otwórz plik konfiguracyjny Palworld

Aby zmienić prędkość pracy, musisz edytować plik `PalWorldSettings.ini`.

### Gdzie znaleźć plik

1. Zaloguj się na stronie ZAP-Hosting.
2. Otwórz panel administracyjny swojego serwera gier **Palworld**.
3. Przejdź do sekcji **Configs**.
4. Otwórz plik o nazwie `PalWorldSettings.ini`.

Ten plik zawiera ustawienia rozgrywki, które kontrolują współczynniki i mnożniki dla Twojego serwera Palworld.

:::note Lokalizacja pliku konfiguracyjnego
W ZAP-Hosting odpowiedni plik do tej zmiany jest dostępny bezpośrednio w panelu administracyjnym serwera gier w sekcji `Configs`. Jeśli Twój serwer pokazuje wiele plików konfiguracyjnych, upewnij się, że edytujesz `PalWorldSettings.ini`.
:::

## Zmień ustawienie prędkości pracy

Ustawieniem służącym do zwiększenia prędkości pracy jest `WorkSpeedRate`.

### Co robi to ustawienie

`WorkSpeedRate` kontroluje, jak szybko gracze i Pals wykonują zadania związane z pracą na Twojej bazie. Domyślna wartość to zazwyczaj `1.0`, co oznacza normalną prędkość.

Wyższe wartości zwiększają mnożnik prędkości:

| Klucz konfiguracyjny | Wartość domyślna | Przykładowa wartość | Efekt |
| --- | --- | --- | --- |
| `WorkSpeedRate` | `1.0` | `2.0` | Podwójna prędkość pracy |
| `WorkSpeedRate` | `1.0` | `10.0` | Bardzo szybka praca |

### Edytuj wartość

Znajdź linię `OptionSettings` w pliku `PalWorldSettings.ini`. Wpis `WorkSpeedRate` znajduje się w tym bloku ustawień.

Jeśli wpis już istnieje, zmień jego wartość. Na przykład:

```ini
WorkSpeedRate=1.000000
```

Zmień ją na wyższą, np.:

```ini
WorkSpeedRate=2.000000
```

Dla znacznie szybszego efektu możesz użyć wyższego mnożnika, np.:

```ini
WorkSpeedRate=10.000000
```

### Przykładowy fragment konfiguracji

W zależności od zawartości pliku, ustawienie może pojawić się jako część dłuższej linii `OptionSettings` podobnej do tej:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=2.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Ostrożnie edytuj istniejącą składnię
`PalWorldSettings.ini` używa ścisłego formatu. Upewnij się, że zmieniasz tylko wartość `WorkSpeedRate` i nie usuwasz przecinków, nawiasów ani cudzysłowów z otaczającej linii `OptionSettings`.
:::

## Zapisz i zrestartuj serwer

Po edycji pliku musisz zapisać zmiany i zrestartować swój serwer Palworld.

### Zastosuj zmiany

1. Zapisz zaktualizowany plik `PalWorldSettings.ini`.
2. Zrestartuj serwer gier Palworld z panelu administracyjnego ZAP-Hosting.

Restart jest konieczny, ponieważ Palworld odczytuje te ustawienia rozgrywki podczas uruchamiania serwera. Nowa wartość prędkości pracy nie zostanie poprawnie zastosowana bez restartu.

| Akcja | Wymagane |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Zrestartuj serwer | Tak |
| Dodatkowa komenda konsoli | Nie |

:::tip Zalecane testowanie
Zacznij od umiarkowanej wartości, np. `2.0`, i przetestuj efekt w grze. Bardzo wysokie wartości mogą znacznie przyspieszyć postęp, co może zaburzyć balans rozgrywki.
:::

## Sprawdź nową prędkość pracy

Gdy serwer będzie ponownie online, dołącz do swojego serwera Palworld i przetestuj zadania związane z pracą na bazie.

Powinieneś zauważyć, że gracze i Pals wykonują zadania szybciej niż wcześniej. Jeśli nie widzisz zmian, ponownie otwórz `PalWorldSettings.ini` i sprawdź, czy:

- `WorkSpeedRate` jest obecny
- wartość jest ustawiona poprawnie
- plik został poprawnie zapisany
- serwer został w pełni zrestartowany po edycji

:::note Balans rozgrywki
Zwiększenie prędkości pracy może znacząco zmienić tempo rozwoju Twojej bazy. Jeśli chcesz zachować balans, zwiększaj wartość stopniowo, zamiast ustawiać od razu bardzo wysoką prędkość.
:::

## Podsumowanie

Gratulacje, pomyślnie zwiększyłeś prędkość pracy na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!