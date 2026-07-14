---
id: palworld-max-players
title: "Palworld: Maksymalna liczba graczy"
description: "Dowiedz się, jak zmienić maksymalną liczbę graczy w Palworld na swoim serwerze gier Palworld, edytując odpowiedni plik konfiguracyjny w panelu ZAP. -> Sprawdź teraz"
sidebar_label: Palworld: Maksymalna liczba graczy
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld pozwala kontrolować, ile osób może jednocześnie dołączyć do Twojego serwera. W tym poradniku nauczysz się, jak ręcznie zmienić maksymalną liczbę graczy, edytując odpowiedni plik konfiguracyjny w panelu administracyjnym serwera gier ZAP-Hosting.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Zanim zaczniesz, upewnij się, że masz dostęp do panelu administracyjnego swojego serwera gier Palworld w interfejsie webowym ZAP-Hosting.

:::info Dostęp do pliku konfiguracyjnego
Musisz ręcznie edytować konfigurację serwera przez sekcję **Configs** w panelu administracyjnym serwera gier. Jeśli nie wiesz, jak uzyskać dostęp do swojego serwera, najpierw otwórz go w interfejsie webowym ZAP-Hosting.
:::

## Znajdź plik konfiguracyjny Palworld

Aby zmienić maksymalną liczbę graczy, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting:

1. Otwórz swój serwer **Palworld**
2. Przejdź do **Configs**
3. Otwórz plik o nazwie `PalWorldSettings.ini`

Ten plik zawiera główne ustawienia rozgrywki i serwera, w tym maksymalną dozwoloną liczbę graczy.

:::note Poprawny plik
Do tej zmiany powinieneś edytować wyłącznie `PalWorldSettings.ini`. Jeśli na serwerze są inne pliki, nie zmieniaj w nich wartości niezwiązanych z tym ustawieniem, chyba że dokładnie wiesz, co robisz.
:::

## Zmień maksymalną liczbę graczy

W pliku `PalWorldSettings.ini` znajdź sekcję `OptionSettings` i wpis `ServerPlayerMaxNum`.

Istotne ustawienie to:

| Klucz konfiguracyjny | Opis | Wartość domyślna |
| --- | --- | --- |
| `ServerPlayerMaxNum` | Ustawia maksymalną liczbę graczy, którzy mogą dołączyć do serwera | `32` |

Przykładowy wpis wygląda tak:

```ini
ServerPlayerMaxNum=32
```

Zmień wartość na preferowany limit graczy. Na przykład, aby pozwolić na 16 graczy:

```ini
ServerPlayerMaxNum=16
```

Lub aby zachować domyślną konfigurację dla 32 graczy:

```ini
ServerPlayerMaxNum=32
```

:::caution Używaj wspieranych wartości
Serwery dedykowane Palworld zazwyczaj mają domyślnie ustawione `32` jako maksymalną liczbę graczy. Ustawienie dużo wyższej wartości może wpłynąć na stabilność lub wydajność serwera, w zależności od Twojego planu i wersji gry. Jeśli nie jesteś pewien, zacznij od niższej wartości i przetestuj serwer.
:::

## Przykład konfiguracji

W zależności od formatu pliku, ustawienie może znajdować się w dłuższej linii `OptionSettings`. W takim przypadku wystarczy zmienić wartość `ServerPlayerMaxNum`.

Przykład:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=16,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

Jeśli Twój plik ma taki format, nie usuwaj przecinków, nawiasów ani cudzysłowów z innych wpisów. Zmień tylko liczbę po `ServerPlayerMaxNum=`.

## Zapisz i zastosuj zmiany

Po zmianie wartości:

1. Zapisz plik `PalWorldSettings.ini`
2. Zrestartuj swój serwer Palworld

Restart jest wymagany, aby nowa maksymalna liczba graczy została zastosowana.

| Akcja | Wymagane |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Wykonaj dodatkowe polecenia konsoli | Nie jest wymagane żadne dodatkowe polecenie |
| Zrestartuj serwer | Tak |

:::tip Wymagany restart
Zmiany w konfiguracji `ServerPlayerMaxNum` nie są stosowane od razu podczas działania serwera. Musisz zrestartować serwer, aby Palworld załadował zaktualizowane ustawienia.
:::

## Sprawdź nowy limit graczy

Po restarcie serwer powinien korzystać z nowej maksymalnej liczby graczy.

Możesz to zweryfikować poprzez:

- sprawdzenie szczegółów serwera w panelu administracyjnym, jeśli są tam widoczne
- dołączenie do serwera z wieloma graczami
- ponowne przejrzenie konfiguracji w pliku `PalWorldSettings.ini`

Jeśli ustawienie się nie zastosowało, otwórz plik ponownie i upewnij się, że:

- `ServerPlayerMaxNum=[twoja_wartość]` jest obecne
- formatowanie pliku nie zostało uszkodzone
- serwer został w pełni zrestartowany po zapisaniu zmian

:::caution Składnia konfiguracji
Jeśli przypadkowo usuniesz przecinek, nawias lub inną wartość z linii `OptionSettings`, serwer może zignorować ustawienie lub nie załadować poprawnie konfiguracji. Edytuj plik ostrożnie i zmieniaj tylko wymaganą wartość.
:::

## Conclusion

Gratulacje, pomyślnie zmieniłeś maksymalną liczbę graczy na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!