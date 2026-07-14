---
id: palworld-enable-pvp
title: "Palworld: Włącz PvP"
description: "Dowiedz się, jak włączyć PvP w Palworld, skonfigurować zachowanie walki przy bazie oraz zastosować zalecane ustawienia PvP na swoim serwerze. -> Sprawdź teraz"
sidebar_label: Palworld: Włącz PvP
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld oferuje tryb PvP, który pozwala graczom walczyć ze sobą i zmienia sposób działania walki przy bazie oraz interakcji gildii na Twoim serwerze. W tym poradniku nauczysz się, jak ręcznie włączyć PvP, edytując odpowiedni plik konfiguracyjny w panelu administracyjnym serwera gier ZAP-Hosting oraz zastosować wymagane ustawienia.

:::caution Funkcja Testowa
PvP w Palworld jest traktowane przez twórców gry jako funkcja testowa. Opcje konfiguracyjne i zachowanie rozgrywki mogą ulec zmianie w przyszłych aktualizacjach gry.
:::

## Przygotowanie

Przed rozpoczęciem upewnij się, że:

- Masz dostęp do swojego serwera gier Palworld w panelu ZAP-Hosting
- Twój serwer jest zatrzymany lub możesz go zrestartować po wprowadzeniu zmian
- Rozumiesz, że PvP znacząco zmienia rozgrywkę, zwłaszcza w kwestii walki między graczami, obrony bazy i utraty przedmiotów po śmierci

:::info Dostęp do konfiguracji
W serwerach Palworld ZAP-Hosting odpowiedni plik konfiguracyjny znajdziesz w panelu administracyjnym serwera gier w zakładce `Configs`.
:::

## Otwórz plik konfiguracyjny Palworld

Aby włączyć PvP, musisz edytować plik `PalWorldSettings.ini`.

### Znajdź plik w panelu ZAP-Hosting

1. Zaloguj się do panelu ZAP-Hosting.
2. Otwórz swój serwer gier Palworld.
3. Przejdź do zakładki `Configs` w panelu administracyjnym serwera.
4. Otwórz plik `PalWorldSettings.ini`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note Format konfiguracji
Ustawienia serwera Palworld zazwyczaj znajdują się w sekcji `OptionSettings=(...)` w pliku `PalWorldSettings.ini`. Musisz dodać lub zmodyfikować odpowiednie klucze w tym bloku ustawień.
:::

## Włącz wymagane ustawienia PvP

Aby aktywować PvP, upewnij się, że następujące trzy ustawienia mają wartość `True` w pliku `PalWorldSettings.ini`.

### Wymagane klucze PvP

| Ustawienie | Wartość wymagana | Opis |
|---|---|---|
| `bIsPvP` | `True` | Włącza tryb PvP na serwerze |
| `bEnablePlayerToPlayerDamage` | `True` | Pozwala na bezpośrednie obrażenia między graczami |
| `bEnableDefenseOtherGuildPlayer` | `True` | Pozwala na obronę z udziałem graczy innych gildii |

### Przykładowa konfiguracja

Dodaj te wartości do linii `OptionSettings=(...)` lub zmień istniejące, jeśli już występują:

```ini
bIsPvP=True,
bEnablePlayerToPlayerDamage=True,
bEnableDefenseOtherGuildPlayer=True
```

:::tip Unikaj duplikatów kluczy
Jeśli ustawienie już istnieje w `PalWorldSettings.ini`, edytuj jego wartość zamiast dodawać ten sam klucz ponownie. Duplikaty mogą powodować nieprzewidziane zachowanie lub utrudniać diagnozę problemów.
:::

## Zalecane ustawienia PvP

Po włączeniu PvP możesz także dostosować dodatkowe ustawienia, aby uzyskać bardziej zbalansowaną rozgrywkę PvP. Poniższe wartości są często rekomendowane dla serwerów nastawionych na PvP.

### Sugerowane wartości

| Ustawienie | Zalecana wartość | Opis |
|---|---|---|
| `bAllowEnhanceStat_Health` | `False` | Blokuje przydzielanie punktów zdrowia |
| `bAllowEnhanceStat_Attack` | `False` | Blokuje przydzielanie punktów ataku |
| `bEnableFastTravel` | `True` | Pozwala na szybkie podróże |
| `bEnableFastTravelOnlyBaseCamp` | `True` | Ogranicza szybkie podróże do baz |
| `bExistPlayerAfterLogout` | `True` | Pozostawia graczy w świecie po wylogowaniu |
| `bEnableAimAssistPad` | `False` | Wyłącza wspomaganie celowania na padzie |
| `DeathPenalty` | `All` | Upuszcza wszystkie przedmioty i Pals po śmierci |
| `bCanPickupOtherGuildDeathPenaltyDrop` | `True` | Pozwala na zbieranie przedmiotów upuszczonych przez innych graczy |
| `bInvisibleOtherGuildBaseCampAreaFX` | `False` | Pokazuje obszary baz innych gildii |
| `bBuildAreaLimit` | `True` | Pomaga zapobiegać budowie w ograniczonych strefach |
| `GuildPlayerMaxNum` | `4` | Ogranicza wielkość gildii |
| `BaseCampMaxNumInGuild` | `2` | Ogranicza liczbę baz na gildię |
| `MaxBuildingLimitNum` | `1000` | Ogranicza liczbę budowli na gracza |
| `GuildRejoinCooldownMinutes` | `60` | Ustawia czas oczekiwania na ponowne dołączenie do gildii |
| `BlockRespawnTime` | `5.0` | Ustawia opóźnienie odrodzenia bazy |
| `RespawnPenaltyDurationThreshold` | `1800.0` | Czas do resetu kary za odrodzenie |
| `RespawnPenaltyTimeScale` | `2.0` | Mnożnik kary za odrodzenie po kolejnych śmierciach |

### Przykładowy blok ustawień PvP

Jeśli chcesz użyć zalecanych wartości PvP, dodaj następujące wpisy do sekcji `OptionSettings=(...)`:

```ini
bAllowEnhanceStat_Health=False,
bAllowEnhanceStat_Attack=False,
bEnableFastTravel=True,
bEnableFastTravelOnlyBaseCamp=True,
bExistPlayerAfterLogout=True,
bEnableAimAssistPad=False,
DeathPenalty=All,
bCanPickupOtherGuildDeathPenaltyDrop=True,
bInvisibleOtherGuildBaseCampAreaFX=False,
bBuildAreaLimit=True,
GuildPlayerMaxNum=4,
BaseCampMaxNumInGuild=2,
MaxBuildingLimitNum=1000,
GuildRejoinCooldownMinutes=60,
BlockRespawnTime=5.0,
RespawnPenaltyDurationThreshold=1800.0,
RespawnPenaltyTimeScale=2.0
```

## Opcjonalne ograniczenia i nagrody PvP

W zależności od tego, jak konkurencyjny ma być Twój serwer PvP, możesz także skonfigurować ograniczenia technologii i nagrody PvP.

### Ogranicz technologie szybkiego poruszania się

Możesz ograniczyć niektóre technologie związane z ruchem, ustawiając `DenyTechnologyList`.

| Ustawienie | Przykładowa wartość |
|---|---|
| `DenyTechnologyList` | `SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5` |

Przykładowy wpis:

```ini
DenyTechnologyList="SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5"
```

:::note Sprawdź istniejącą składnię
Formatowanie konfiguracji Palworld może się różnić w zależności od wersji serwera i struktury istniejącej linii `OptionSettings=(...)`. Przed zapisaniem upewnij się, że Twój wpis pasuje do stylu składni już używanego w pliku.
:::

### Konfiguracja nagród PvP

Palworld oferuje także opcje nagród związanych z zabójstwami w trybie PvP.

| Ustawienie | Opis |
|---|---|
| `bAdditionalDropItemWhenPlayerKillingInPvPMode` | Włącza dodatkowe upuszczanie przedmiotów po zabiciu gracza w PvP |
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Definiuje ID przedmiotu do upuszczenia |
| `AdditionalDropItemNumWhenPlayerKillingInPvPMode` | Ustawia ilość upuszczanych przedmiotów |
| `bDisplayPvPItemNumOnWorldMap_BaseCamp` | Pokazuje liczbę przedmiotów PvP na mapie świata dla baz |
| `bDisplayPvPItemNumOnWorldMap_Player` | Pokazuje liczbę przedmiotów PvP na mapie świata dla graczy |

Przykładowa konfiguracja:

```ini
bAdditionalDropItemWhenPlayerKillingInPvPMode=True,
AdditionalDropItemWhenPlayerKillingInPvPMode=PlayerDropItem,
AdditionalDropItemNumWhenPlayerKillingInPvPMode=1,
bDisplayPvPItemNumOnWorldMap_BaseCamp=True,
bDisplayPvPItemNumOnWorldMap_Player=True
```

:::caution Kompatybilność ID przedmiotów
Jeśli używasz niestandardowej wartości dla `AdditionalDropItemWhenPlayerKillingInPvPMode`, upewnij się, że ID przedmiotu jest poprawne dla Twojej wersji Palworld. Nieprawidłowe identyfikatory mogą spowodować, że ustawienie nie zadziała lub zostanie zignorowane.
:::

## Co się zmienia po włączeniu PvP

Po aktywowaniu PvP rozgrywka na Twoim serwerze zmienia się na kilka ważnych sposobów. Na podstawie dostępnych publicznie wskazówek dotyczących PvP w Palworld, możesz spodziewać się następujących efektów:

- Gracze mogą zadawać sobie obrażenia nawzajem
- Wejście do bazy innego gracza może spowodować, że jego Pals staną się wrogie
- Latający gracze i Pals na wierzchowcach mogą otrzymywać zwiększone obrażenia
- Przywołane Pals i Pals przy bazie mogą otrzymywać zmniejszone obrażenia
- Gracze mogą mieć dostęp do skrzyń należących do innych gildii
- Obrażenia bronią białą przeciwko budowlom innych graczy mogą być zmniejszone
- Pals przy bazie mogą bronić większy obszar
- Dozwolona odległość między sąsiednimi bazami może się zwiększyć
- Gracze mogą otrzymywać powiadomienia o ataku na ich bazę
- Budowa i naprawa mogą być ograniczone podczas ataku na bazę
- Niektóre bronie mogą mieć zmodyfikowany zasięg lub obrażenia w trybie PvP

:::danger Ostrzeżenie o wpływie na rozgrywkę
Włączenie PvP może znacząco zmienić postęp, bezpieczeństwo bazy i utrzymanie graczy na Twoim serwerze. Jeśli prowadzisz serwer publiczny, zaleca się poinformować graczy przed wprowadzeniem tych zmian.
:::

## Zapisz plik i zrestartuj serwer

Po zakończeniu edycji `PalWorldSettings.ini` zapisz plik w zakładce `Configs` w panelu ZAP-Hosting.

### Zastosuj zmiany

Aby aktywować nowe ustawienia PvP:

1. Zapisz zmiany w `PalWorldSettings.ini`.
2. Zrestartuj swój serwer Palworld z poziomu panelu administracyjnego serwera gier ZAP-Hosting.

Restart jest wymagany, aby zmiany konfiguracji zaczęły działać.

:::info Nie jest wymagane dodatkowe polecenie
Po edycji `PalWorldSettings.ini` nie jest zwykle potrzebne żadne dodatkowe polecenie w grze ani konsoli. Pełny restart serwera to jedyny wymagany krok do zastosowania nowej konfiguracji PvP.
:::

## Sprawdź, czy PvP jest aktywne

Po restarcie serwera dołącz do gry i przetestuj zachowanie w grze.

### Podstawowe sprawdzenia

Możesz zweryfikować konfigurację, sprawdzając, czy:

- Gracze mogą zadawać sobie obrażenia
- Aktywne jest zachowanie bazy związane z PvP
- Kary za śmierć i zasady łupów odpowiadają Twoim ustawieniom
- Opcjonalne ograniczenia, takie jak `DenyTechnologyList`, działają zgodnie z oczekiwaniami

Jeśli zmiany nie zostały zastosowane, ponownie otwórz `PalWorldSettings.ini` i sprawdź:

- Literówki w nazwach ustawień
- Duplikaty kluczy
- Nieprawidłowe przecinki lub formatowanie w `OptionSettings=(...)`
- Czy wartości zostały poprawnie zapisane przed restartem

## Podsumowanie

Gratulacje, pomyślnie włączyłeś PvP na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂