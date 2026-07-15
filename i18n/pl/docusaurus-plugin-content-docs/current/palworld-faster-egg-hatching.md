---
id: palworld-faster-egg-hatching
title: "Palworld: Szybsze Wylęganie Jaj"
description: "Dowiedz się, jak skrócić czas wylęgania jaj w Palworld, edytując odpowiednią konfigurację serwera Palworld dla szybszych efektów. -> Sprawdź teraz"
sidebar_label: Palworld: Szybsze Wylęganie Jaj
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

W Palworld czas wylęgania jaj jest kontrolowany przez wartość konfiguracyjną serwera. W tym poradniku nauczysz się, jak skrócić czas wylęgania jaj na swoim serwerze gier Palworld w ZAP-Hosting, edytując odpowiedni plik konfiguracyjny i poprawnie stosując zmiany.



## Preparation

Zanim zaczniesz, upewnij się, że:

- masz dostęp do panelu administracyjnego swojego serwera gier ZAP-Hosting
- twój serwer Palworld jest dostępny w panelu administracyjnym serwera gier
- możesz edytować pliki w sekcji **Configs**

:::info Dostęp do pliku konfiguracyjnego
Dla Palworld w ZAP-Hosting odpowiednie ustawienia serwera można edytować w panelu administracyjnym serwera gier w sekcji **Configs**. Do tego zadania musisz zmodyfikować plik `PalWorldSettings.ini`.
:::

## Zrozumienie ustawienia czasu wylęgania jaj

Palworld używa ustawienia `PalEggDefaultHatchingTime`, które definiuje bazowy czas wylęgania jaj w godzinach. Niższa wartość oznacza szybsze wylęganie jaj.

Według aktualnych referencji konfiguracji serwera Palworld, domyślna wartość to `72`, co oznacza 72 godziny dla dużego jaja. Inne typy jaj skalują się względem tej wartości bazowej.

| Klucz konfiguracyjny | Wartość domyślna | Opis |
| --- | --- | --- |
| `PalEggDefaultHatchingTime` | `72.000000` | Bazowy czas wylęgania jaj w godzinach |

:::note Jak działa to ustawienie
Ta wartość wpływa na ogólny proces wylęgania jaj na twoim serwerze. Jeśli ją zmniejszysz, wylęganie będzie szybsze dla wszystkich graczy korzystających z inkubatorów.
:::

## Otwórz plik konfiguracyjny Palworld

Najpierw musisz uzyskać dostęp do właściwego pliku konfiguracyjnego w panelu ZAP-Hosting.

### Przejdź do sekcji Configs

Otwórz panel administracyjny swojego serwera gier Palworld i przejdź do sekcji **Configs**. Tam znajdź i otwórz plik o nazwie:

```ini
PalWorldSettings.ini
```

To plik zawierający wpisy konfiguracyjne rozgrywki twojego serwera Palworld, w tym ustawienie czasu wylęgania jaj.



## Edytuj czas wylęgania jaj

Po otwarciu `PalWorldSettings.ini` wyszukaj linię `OptionSettings`. Palworld przechowuje wiele ustawień rozgrywki w tej sekcji.

### Zmień odpowiedni klucz konfiguracyjny

Znajdź wpis:

```ini
PalEggDefaultHatchingTime=72.000000
```

Zmień wartość na niższą, aby przyspieszyć wylęganie jaj.

Na przykład:

```ini
PalEggDefaultHatchingTime=24.000000
```

To skróci bazowy czas wylęgania jaj z 72 godzin do 24 godzin.

### Przykładowe wartości

Możesz użyć różnych wartości w zależności od tego, jak szybko chcesz, aby jajka się wylęgały na twoim serwerze.

| Wartość | Efekt |
| --- | --- |
| `72.000000` | Domyślny czas wylęgania jaj |
| `48.000000` | Wolniejsze skrócenie, bardziej zbalansowana rozgrywka |
| `24.000000` | Znacznie szybsze wylęganie jaj |
| `12.000000` | Bardzo szybkie wylęganie jaj |
| `1.000000` | Ekstremalnie szybkie wylęganie |

:::caution Używaj realistycznych wartości
Bardzo niskie wartości mogą znacząco zmienić balans rozgrywki. Jeśli chcesz bardziej naturalny postęp, zacznij od umiarkowanej wartości, np. `24.000000` lub `48.000000`.
:::

### Przykładowy fragment konfiguracji

W zależności od twojej aktualnej konfiguracji, ustawienie pojawi się w bloku `OptionSettings`. Typowy przykład wygląda tak:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=24.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,BaseCampMaxNumInGuild=4)
```

:::tip Edytuj istniejący wpis
Jeśli klucz `PalEggDefaultHatchingTime` już istnieje, edytuj jego wartość zamiast dodawać duplikat. Duplikaty w tym samym bloku `OptionSettings` mogą spowodować ignorowanie lub nadpisanie ustawień.
:::

## Zapisz i zastosuj zmiany

Po edycji wartości zapisz plik `PalWorldSettings.ini` w panelu ZAP-Hosting.

### Uruchom ponownie serwer

Po zapisaniu pliku zrestartuj swój serwer Palworld, aby nowy czas wylęgania jaj został załadowany.

:::info Wymagany restart
Zaktualizowana konfiguracja nie zostanie zastosowana, dopóki serwer nie zostanie zrestartowany.
:::

## Ważne zachowanie dla istniejących jaj

Jeśli jajka są już w inkubacji, nowa wartość czasu wylęgania nie zaktualizuje się niezawodnie dla tych aktywnych timerów inkubacji. W praktyce powinieneś usunąć i ponownie rozpocząć inkubację tych jaj, aby zastosować nową szybkość.

| Sytuacja | Wymagana akcja |
| --- | --- |
| Nowe jajka po zmianie | Nie wymaga dodatkowych działań po restarcie |
| Jajka już inkubowane przed zmianą | Restart inkubacji tych jaj |

:::note Istniejące timery inkubacji
Jeśli zmienisz czas wylęgania jaj i nie widzisz oczekiwanego efektu, sprawdź, czy jajko nie było już inkubowane przed zmianą konfiguracji.
:::

## Conclusion

Gratulacje, udało Ci się skrócić czas wylęgania jaj na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂