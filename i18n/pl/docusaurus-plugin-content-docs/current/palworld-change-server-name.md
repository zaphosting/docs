---
id: palworld-change-server-name
title: "Palworld: Zmiana nazwy serwera"
description: "Dowiedz się, jak zmienić nazwę swojego serwera Palworld i zaktualizować nazwę wyświetlaną w przeglądarce serwerów, edytując odpowiedni plik konfiguracyjny ręcznie. -> Sprawdź teraz"
sidebar_label: Palworld: Zmiana nazwy serwera
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld używa pliku konfiguracyjnego do określenia nazwy serwera wyświetlanej w przeglądarce serwerów w grze. W tym poradniku nauczysz się, jak ręcznie zmienić wyświetlaną nazwę serwera w panelu ZAP-Hosting i poprawnie zastosować tę zmianę.



## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld w panelu ZAP-Hosting oraz uprawnienia do edycji jego plików konfiguracyjnych.

:::info Wymagana ręczna konfiguracja
Ta zmiana wymaga ręcznej edycji konfiguracji serwera Palworld. Odpowiedni plik znajdziesz w panelu administracyjnym serwera gier w sekcji `Configs`.
:::

## Otwórz plik konfiguracyjny Palworld

Aby zmienić nazwę serwera, musisz edytować plik `PalWorldSettings.ini`.

W panelu ZAP-Hosting:

1. Otwórz swój serwer gier **Palworld**.
2. Przejdź do sekcji **Configs** w panelu administracyjnym serwera.
3. Otwórz plik `PalWorldSettings.ini`.

:::note Lokalizacja pliku konfiguracyjnego
Na serwerach dedykowanych Palworld odpowiednie ustawienia zazwyczaj znajdują się w pliku `PalWorldSettings.ini`. W panelu ZAP-Hosting edytuj ten plik przez sekcję `Configs`, zamiast zmieniać ścieżki plików ręcznie.
:::

## Edytuj nazwę serwera

W pliku `PalWorldSettings.ini` znajdź sekcję `OptionSettings`. Nazwa wyświetlana w przeglądarce serwerów jest kontrolowana przez wpis `ServerName`.

Opcjonalnie możesz też ustawić opis serwera za pomocą `ServerDescription`.

### Przykładowa konfiguracja

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Opis twojego serwera Palworld")
```

Jeśli w pliku jest już dłuższa linia `OptionSettings=(...)`, wystarczy zmienić istniejące wartości `ServerName` i opcjonalnie `ServerDescription`.

### Wartości do zmiany

| Klucz konfiguracyjny | Opis | Przykładowa wartość |
| --- | --- | --- |
| `ServerName` | Nazwa wyświetlana w przeglądarce serwerów Palworld | `"zaphosting"` |
| `ServerDescription` | Opcjonalny opis wyświetlany razem z nazwą serwera | `"Publiczny serwer survival"` |

:::caution Zachowaj pozostałe ustawienia
`OptionSettings` często zawiera wiele innych ustawień serwera w jednej linii. Zmieniaj tylko wartości `ServerName` i `ServerDescription`, chyba że chcesz świadomie zmodyfikować inne opcje.
:::

## Zapisz zmiany

Po edycji wartości:

1. Zapisz plik `PalWorldSettings.ini` w sekcji **Configs**.
2. Sprawdź, czy cudzysłowy i przecinki są poprawnie sformatowane.

### Przykład istniejącej linii

Jeśli w pliku masz linię podobną do poniższej, zaktualizuj tylko odpowiedni tekst:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="Public survival server",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

## Uruchom ponownie serwer

Po zapisaniu konfiguracji musisz zrestartować swój serwer gier Palworld, aby nowa nazwa została załadowana.

### Zastosuj nową konfigurację

Skorzystaj z funkcji restartu w panelu administracyjnym serwera gier ZAP-Hosting.

| Akcja | Wymagane |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Zrestartuj serwer | Tak |
| Uruchom dodatkowe komendy konsoli | Nie |

:::tip Opóźnienie aktualizacji w przeglądarce serwerów
Po restarcie zaktualizowana nazwa serwera może nie pojawić się od razu u wszystkich graczy w przeglądarce serwerów. W razie potrzeby odczekaj kilka minut i odśwież listę serwerów.
:::

## Sprawdź nową nazwę serwera

Po restarcie serwera:

1. Uruchom Palworld.
2. Otwórz przeglądarkę serwerów multiplayer.
3. Wyszukaj nazwę, którą ustawiłeś w `ServerName`.

Jeśli nadal widzisz starą nazwę, ponownie otwórz `PalWorldSettings.ini` i upewnij się, że:
- wartość `ServerName` została poprawnie zmieniona
- plik został poprawnie zapisany
- serwer został w pełni zrestartowany po zmianie

## Podsumowanie

Gratulacje, pomyślnie zmieniłeś nazwę swojego serwera Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂