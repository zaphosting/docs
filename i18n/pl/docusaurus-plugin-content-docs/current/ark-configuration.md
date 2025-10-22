---
id: ark-configuration
title: "ARK: Konfiguracja serwera"
description: "Dowiedz się, jak zoptymalizować ustawienia swojego serwera gier ARK dla lepszej rozgrywki i personalizacji → Sprawdź teraz"
sidebar_label: Konfiguracja serwera
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Konfiguracja serwera

Konfiguracja **serwera gier ARK** może u niektórych wywołać zamieszanie i bezradność. Ale jest ku temu powód. ARK oferuje mnóstwo opcji konfiguracyjnych dla gry. Dodatkowo konfiguracja odbywa się w różnych plikach konfiguracyjnych, gdzie trzeba też uważać, które komendy trafiają do którego pliku. W tym poradniku chcemy dać Ci lepszy przegląd, jak działa konfiguracja serwera gier ARK.

![](https://screensaver01.zap-hosting.com/index.php/s/oQ5BbazkfD3PjgK/preview)

<InlineVoucher />

## Różnice między plikami konfiguracyjnymi

Konfiguracja **serwera gier ARK** odbywa się przez pliki konfiguracyjne **GameUserSettings.ini** oraz **Game.ini**. Możesz je modyfikować albo przez nasz **panel główny** w zakładce **Konfiguracje**, albo przez **FTP**.

| Plik konfiguracyjny  | Panel główny                                               | FTP                                     |
| -------------------- | ---------------------------------------------------------- | --------------------------------------- |
| GameUserSettings.ini | `Administracja serwera -> Konfiguracje -> GameUserSettings.ini` | `ShooterGame/Saved/Config/LinuxServer/` |
| Game.ini             | `Administracja serwera -> Konfiguracje -> Game.ini`        | `ShooterGame/Saved/Config/LinuxServer/` |

Plik konfiguracyjny **GameUserSettings.ini** zawiera opcje zarówno dla klienta gry, jak i serwera. Opcje dla klienta gry nie są używane przez serwer. Opcje serwera znajdują się w sekcji **[ServerSettings]**, zwykle na końcu pliku. Do bardziej zaawansowanych modyfikacji, takich jak zmiana punktów engramów czy XP za poziom, wyłączanie niektórych treści lub personalizacja preferencji graczy, służy plik konfiguracyjny **Game.ini**.

## Konfiguracja

Poniżej wyjaśniamy oba pliki konfiguracyjne. Omówimy najczęściej używane komendy i jak działają.

## Konfiguracja: Mapa

ARK oferuje różne mapy, na których można grać na serwerze. Możesz wybrać, na której mapie chcesz grać, w panelu głównym w ustawieniach.

| Mapa           | Data wydania | Nazwa komendy     |
| -------------- | ------------ | ----------------- |
| The Island     | 02.06.2015   | `TheIsland`       |
| The Center     | 17.05.2016   | `TheCenter`       |
| Scorched Earth | 01.09.2016   | `ScorchedEarth_P` |
| Ragnarok       | 12.06.2017   | `Ragnarok`        |
| Aberration     | 12.12.2017   | `Aberration_P`    |
| Extinction     | 06.11.2018   | `Extinction`      |
| Valguero       | 18.06.2019   | `Valguero_P`      |
| Genesis        | 25.02.2020   | `Genesis`         |
| Crystal Isles  | 11.06.2020   | `CrystalIsles`    |

Wystarczy wpisać nazwę komendy mapy w polu **Mapa**, a zostanie ona załadowana przy następnym uruchomieniu serwera.

![](https://screensaver01.zap-hosting.com/index.php/s/93JNW5Hbpf35RTJ/preview)

## Konfiguracja: GameUserSettings.ini

### [ServerSettings]

**allowThirdPersonPlayer**

Ta komenda definiuje, czy ma być aktywowana perspektywa trzeciej osoby.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   |        0         |      0/1        |

**AllowCaveBuildingPvE**

Ta komenda definiuje, czy w trybie PVE można budować struktury w jaskiniach.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   |        0         |      0/1        |

**alwaysNotifyPlayerJoined**

Ta komenda definiuje, czy gracze otrzymują powiadomienie, gdy ktoś dołącza do serwera.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   |        0         |      0/1        |

**alwaysNotifyPlayerLeft**

Ta komenda definiuje, czy gracze otrzymują powiadomienie, gdy ktoś opuszcza serwer.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   |        0         |      0/1        |

**bAllowFlyerCarryPvE**

Ta komenda definiuje, czy gracze mogą podnosić dinozaury latającym dinozaurem.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   |        0         |      0/1        |

**bDisableStructureDecayPvE**

Ta komenda wyłącza postępującą degradację budowli graczy.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   |        0         |      0/1        |

**DayCycleSpeedScale**

Ta komenda definiuje współczynnik skalowania cyklu dnia i nocy w ARK, czyli jak często dzień zmienia się w noc i odwrotnie. Domyślna wartość 1 oznacza taką samą prędkość cyklu jak w trybie single player i na oficjalnych serwerach. Wartości poniżej 1 spowalniają cykl, powyżej 1 przyspieszają. 1 minuta czasu rzeczywistego to około 28 minut czasu gry. Aby uzyskać około 24-godzinny cykl dzień/noc w grze, użyj wartości 0.035.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**DayTimeSpeedScale**

Ta komenda definiuje skalowanie upływu czasu w ciągu dnia. Wartość określa długość dnia względem nocy (określonej przez NightTimeSpeedScale). Zmniejszenie wartości wydłuża dzień.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**NightTimeSpeedScale**

Ta komenda definiuje skalowanie upływu czasu w nocy. Wartość określa długość nocy względem dnia (określonego przez DayTimeSpeedScale). Zmniejszenie wartości wydłuża noc.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**DinoCharacterFoodDrainMultiplier**

Ta komenda definiuje zużycie jedzenia przez dinozaura. Wyższa wartość zwiększa głód (dinozaury szybciej się głodzą). Wpływa też na czas oswajania.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**DinoCharacterHealthRecoveryMultiplier**

Ta komenda definiuje regenerację zdrowia dinozaura. Wyższa wartość przyspiesza regenerację, niższa spowalnia.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**DinoCharacterStaminaDrainMultiplier**

Ta komenda definiuje, jak szybko dinozaur się męczy. Wyższa wartość przyspiesza zmęczenie, niższa spowalnia.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**DinoCountMultiplier**

Ta komenda definiuje, ile dinozaurów ma się pojawiać. Wyższa wartość zwiększa szansę na spawn, niższa zmniejsza.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**DinoDamageMultiplier**

Ta komenda definiuje, ile obrażeń zadaje dinozaur. Wyższa wartość zwiększa obrażenia, niższa zmniejsza.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**DinoResistanceMultiplier**

Ta komenda definiuje odporność dinozaura. Wyższa wartość zwiększa odporność.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**globalVoiceChat**

Ta komenda definiuje, czy globalny czat głosowy ma być włączony na serwerze.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   |        0         |      0/1       |

**HarvestAmountMultiplier**

Ta komenda definiuje ilość surowców zbieranych podczas harvestu. Wyższa wartość oznacza więcej surowców, niższa mniej.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**HarvestHealthMultiplier**

Ta komenda definiuje wytrzymałość surowców, które można zbierać. Wyższe wartości zwiększają ilość materiałów z każdego uderzenia.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**noTributeDownloads**

Ta komenda pozwala zabronić pobierania postaci z serwera.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**PreventDownloadSurvivors**

Ta komenda pozwala zapobiec pobieraniu postaci ocalałych z serwera.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**PreventDownloadItems**

Ta komenda pozwala zapobiec pobieraniu przedmiotów z serwera.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**PreventDownloadDinos**

Ta komenda pozwala zapobiec pobieraniu dinozaurów z serwera.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**PlayerCharacterFoodDrainMultiplier**

Ta komenda definiuje, jak szybko gracz się głodzi. Zwiększenie wartości powoduje szybszy głód, zmniejszenie spowalnia. Wartość 2.0 podwaja domyślną, 0.5 ją zmniejsza o połowę.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**PlayerCharacterHealthRecoveryMultiplier**

Ta komenda definiuje, jak szybko gracz się leczy. Zwiększenie wartości przyspiesza leczenie, zmniejszenie spowalnia. Wartość 2.0 podwaja domyślną, 0.5 ją zmniejsza o połowę.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**PlayerCharacterStaminaDrainMultiplier**

Ta komenda definiuje, jak szybko gracz się męczy. Zwiększenie wartości powoduje szybsze zmęczenie, zmniejszenie spowalnia. Wartość 2.0 podwaja domyślną, 0.5 ją zmniejsza o połowę.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**PlayerCharacterWaterDrainMultiplier**

Ta komenda definiuje, jak szybko gracz się spragnia. Zwiększenie wartości powoduje szybsze pragnienie, zmniejszenie spowalnia. Wartość 2.0 podwaja domyślną, 0.5 ją zmniejsza o połowę.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**PlayerDamageMultiplier**

Ta komenda definiuje, ile obrażeń zadaje gracz. Zwiększenie wartości powoduje większe obrażenia, zmniejszenie mniejsze. Wartość 2.0 podwaja domyślną, 0.5 ją zmniejsza o połowę.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**PlayerResistanceMultiplier**

Ta komenda definiuje odporność gracza. Zwiększenie wartości zwiększa odporność, zmniejszenie ją obniża. Wartość 2.0 podwaja domyślną, 0.5 ją zmniejsza o połowę.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**proximityChat**

Ta komenda definiuje, czy lokalny czat głosowy ma być włączony na serwerze.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 0 (wyłączony)    |      0/1       |

**ResourceNoReplenishRadiusPlayers**

Ta komenda definiuje odległość między graczami a surowcami, w której surowce nie odrastają. Zwiększenie wartości powiększa promień, zmniejszenie go zmniejsza. Wartość 2.0 podwaja domyślną, 0.5 ją zmniejsza o połowę.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**ResourceNoReplenishRadiusStructures**

Ta komenda definiuje odległość między strukturami a surowcami, w której surowce nie odrastają. Zwiększenie wartości powiększa promień, zmniejszenie go zmniejsza. Wartość 2.0 podwaja domyślną, 0.5 ją zmniejsza o połowę.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**ResourcesRespawnPeriodMultiplier**

Ta komenda definiuje czas odnowienia surowców. Zwiększenie wartości wydłuża czas odnowienia, zmniejszenie skraca. Wartość 2.0 podwaja domyślną, 0.5 ją zmniejsza o połowę.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**ServerAdminPassword**

Ta komenda definiuje hasło do logowania się jako admin. Więcej info znajdziesz w naszym poradniku: [Zostań adminem](ark-becomeadmin.md)

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   String   |       N/A        |    Dowolne     |

**ServerCrosshair**

Ta komenda definiuje, czy gracz ma widzieć celownik.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 0 (wyłączony)    |      0/1       |

**serverForceNoHud**

Ta komenda definiuje, czy mają być wyświetlane elementy HUD w grze.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 0 (wyłączony)    |      0/1       |

**serverHardcore**

Ta komenda definiuje, czy ma być włączony tryb hardcore (po śmierci gracz zaczyna od nowa).

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 0 (wyłączony)    |      0/1       |

**ServerPassword**

Ta komenda ustawia hasło do logowania na serwer. Jeśli dostęp ma mieć tylko wybrana grupa, możesz ustawić hasło. Domyślnie wyłączone, aktywuje się po ustawieniu hasła.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   String   |       N/A        |    Dowolne     |

**serverPVE**

Ta komenda definiuje, czy PVP jest włączone na serwerze. Jeśli wyłączone, działa tylko PVE.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 0 (wyłączony)    |      0/1       |

**ShowMapPlayerLocation**

Ta komenda definiuje, czy na mapie mają być widoczni gracze przez markery. - [Przykład](https://screensaver01.zap-hosting.com/index.php/s/XgKByRZpzgqCZif/preview)

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 0 (wyłączony)    |      0/1       |

**StructureDamageMultiplier**

Ta komenda definiuje wytrzymałość struktur. Zwiększenie wartości zwiększa odporność, zmniejszenie ją obniża. Wartość 2.0 podwaja domyślną, 0.5 ją zmniejsza o połowę.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**StructureResistanceMultiplier**

Ta komenda definiuje, ile obrażeń otrzymuje struktura podczas ataku. Zwiększenie wartości powoduje więcej obrażeń, zmniejszenie mniej. Wartość 2.0 podwaja domyślną, 0.5 ją zmniejsza o połowę.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**TamedDinoDamageMultiplier**

Ta komenda definiuje obrażenia oswojonego dinozaura podczas ataku. Zwiększenie wartości powoduje więcej obrażeń, zmniejszenie mniej. Wartość 2.0 podwaja domyślną, 0.5 ją zmniejsza o połowę.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**TamedDinoResistanceMultiplier**

Ta komenda definiuje odporność oswojonego dinozaura. Zwiększenie wartości zwiększa odporność, zmniejszenie ją obniża. Wartość 2.0 podwaja domyślną, 0.5 ją zmniejsza o połowę.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**TamingSpeedMultiplier**

Ta komenda definiuje szybkość oswajania. Zwiększenie wartości przyspiesza oswajanie, zmniejszenie spowalnia. Wartość 2.0 podwaja domyślną, 0.5 ją zmniejsza o połowę.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**XPMultiplier**

Ta komenda definiuje ilość punktów doświadczenia zdobywanych przez gracza. Zwiększenie wartości daje więcej XP, zmniejszenie mniej. Wartość 2.0 podwaja domyślną, 0.5 ją zmniejsza o połowę.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**EnablePVPGamma**

Ta komenda definiuje, czy na serwerze PVP dozwolone jest używanie gamma.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 0 (wyłączony)    |      0/1       |

**EnablePVEGamma**

Ta komenda definiuje, czy na serwerze PVE dozwolone jest używanie gamma.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 0 (wyłączony)    |      0/1       |

**SpectatorPassword**

Ta komenda definiuje hasło, które musi podać nie-admin, aby wejść w tryb obserwatora.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   String   |       N/A        |    Dowolne     |

**DifficultyOffset**

Ta komenda definiuje poziom trudności serwera. Aby obliczyć maksymalny poziom stworzenia dla danej wartości trudności, pomnóż przez 30 (bo maksymalny poziom rośnie liniowo z trudnością, a wartość 1.0 daje poziom 30). Aby obliczyć offset trudności dla maksymalnego poziomu, użyj wzoru:

```
DifficultyOffset = (Maksymalny poziom stworzenia / 30 - 0.5) / (Oficjalna trudność - 0.5)
```

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   String   |     0.50000      |    Dowolne     |

**PvEStructureDecayPeriodMultiplier**

Ta komenda definiuje czas, po którym budowle zaczynają się rozpadać. Zwiększenie wartości wydłuża czas rozpadu, zmniejszenie skraca. Wartość 2.0 podwaja domyślną, 0.5 ją zmniejsza o połowę.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**PvEStructureDecayDestructionPeriod**

Ta komenda definiuje, kiedy budowle mogą być niszczone przez innych graczy na serwerze PVE. Zwiększenie wartości wydłuża czas oczekiwania, zmniejszenie skraca. Wartość 2.0 podwaja domyślną, 0.5 ją zmniejsza o połowę.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**PvPStructureDecay**

Ta komenda definiuje, czy automatyczny rozpad budowli jest włączony na serwerze PVP.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   |        0         |      0/1       |

**DisableDinoDecayPvE**

Ta komenda wyłącza (true) lub włącza (false) automatyczne odznaczanie dinozaurów.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 0 (wyłączony)    |      0/1       |

**PvEDinoDecayPeriodMultiplier**

Ta komenda definiuje mnożnik szybkości, z jaką dinozaur jest odznaczany (wyższa wartość = szybciej, niższa = wolniej).

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**AdminLogging**

Ta komenda włącza wyświetlanie w czacie komend admina, gdy są używane przez admina w grze.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 0 (wyłączony)    |      0/1       |

**MaxTamedDinos**

Ta komenda definiuje maksymalną liczbę oswojonych dinozaurów na wyspie.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Integer   |      8300        |       ∞        |

**MaxNumbersofPlayersInTribe**

Ta komenda definiuje maksymalną liczbę graczy w plemieniu.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Integer   |        2         |       ∞        |

**KickIdlePlayersPeriod**

Ta komenda definiuje czas (w sekundach), po którym nieaktywny gracz zostanie wyrzucony z serwera.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Integer   | 1800 (sekundy)   |       ∞        |

**PerPlatformMaxStructuresMultiplier**

Ta komenda definiuje mnożnik dla struktur na platformach siodła. Używaj ostrożnie – zbyt wysokie wartości mogą mocno obniżyć wydajność.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |     1.00000      |       ∞        |

**StructureDamageRepairCooldown**

Ta komenda definiuje czas (w sekundach), po którym uszkodzona struktura może być naprawiona ponownie. (0 pozwala na naprawę bez odliczania)

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Integer   |       180        |       ∞        |

**bForceAllStructureLocking**

Ta komenda definiuje, czy wszystkie typy kontenerów mogą być zamykane.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   |        1         |      0/1       |

**bUseVSync**

Ta komenda definiuje, czy VSync ma być włączony (może minimalizować problemy z niektórymi kartami graficznymi).

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   |        0         |      0/1       |

**MaxPlatformSaddleStructureLimit**

Ta komenda definiuje maksymalną liczbę struktur na platformie siodła.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Integer   |       100        |       ∞        |

**RCONPort**

Ta komenda definiuje port RCON do logowania się przez konsolę RCON.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Integer   |       100        |       ∞        |

**AutoSavePeriodMinutes**

Ta komenda definiuje interwał (w minutach), co ile serwer ma się automatycznie zapisywać.

:::info
Ta wartość jest ustawiona na 30 minut i nie można jej zmienić.
:::

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Integer   |        30        |       ∞        |

**RCONServerGameLogBuffer**

Ta komenda definiuje, ile linii czatu ma być wyświetlanych w narzędziach RCON.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Integer   |       600        |       ∞        |

**PreventOfflinePvPInterval**

Ta komenda definiuje, ile sekund gracz musi być rozłączony, aby został uznany za faktycznie offline.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Integer   | 60 (sekundy)     |       ∞        |

**bPvPDinoDecay**

Ta komenda definiuje, czy dinozaury plemienia/gracza są chronione podczas aktywnej ochrony offline raid.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   |        1         |      0/1       |

**bPvPStructureDecay**

Ta komenda definiuje, czy struktury plemienia/gracza są chronione podczas aktywnej ochrony offline raid.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   |        1         |      0/1       |

**DisableImprintDinoBuff**

Ta komenda definiuje, czy dodatkowy bonus za wychowanie dinozaura samemu ma być wyłączony.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   |        1         |      0/1       |

**AllowAnyoneBabyImprintCuddle**

Ta komenda definiuje, czy każdy gracz może przytulać małe dinozaury.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   |        1         |      0/1       |

**OverrideOfficialDifficulty**

Ta komenda nadpisuje poziom trudności.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Integer   |        1         |      0/1       |

**TheMaxStructuresInRange**

Ta komenda definiuje maksymalną dozwoloną liczbę struktur w bliskim zasięgu.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Integer   |      10500       |       ∞        |

**PvEAllowStructuresAtSupplyDrops**

Ta komenda definiuje, czy można budować struktury w pobliżu skrzyń zaopatrzeniowych.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 0 (wyłączony)    |      0/1       |

**AutoDestroyDecayedDinos**

Ta komenda definiuje, czy dinozaury mają być od razu niszczone zamiast stawać się możliwe do przejęcia.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 0 (wyłączony)    |      0/1       |

**ClampItemSpoilingTimes**

Ta komenda ustawia wszystkie czasy psucia się przedmiotów na maksymalne wartości.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 0 (wyłączony)    |      0/1       |

**AllowCrateSpawnsOnTopOfStructures**

Ta komenda definiuje, czy skrzynie zaopatrzeniowe mogą lądować na strukturach.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 0 (wyłączony)    |      0/1       |

**PreventOfflinePvP**

Ta komenda definiuje, czy "Offline Raid Protection" ma być aktywna na serwerach PVE/PVP.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 1 (włączony)     |      0/1       |

**AllowMultipleAttachedC4**

Ta komenda pozwala na wielokrotne przyczepianie ładunków C4 do dinozaurów.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 1 (włączony)     |      0/1       |

**bPvEDisableFriendlyFire**

Ta komenda definiuje, czy friendly fire jest wyłączony w PVE.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 1 (włączony)     |      0/1       |

**ServerAutoForceRespawnWildDinosInterval**

Ta komenda definiuje czas w sekundach, po którym wymuszany jest respawn wszystkich dzikich dinozaurów. Na przykład 86400 oznacza wymuszony respawn po jednym dniu.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Integer   |      86400       |      0/1       |

**DisableWeatherFog**

Ta komenda definiuje, czy mgła na mapie ma być włączona czy wyłączona.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Boolean   | 0 (włączony)     |      0/1       |

### **[/script/engine.gamesession]**

**MaxPlayers**

Ta komenda definiuje, ile graczy może grać na serwerze jednocześnie.

| Typ danych |                  Wartość domyślna                   | Zakres wartości |
| :--------: | :-------------------------------------------------: | :-------------: |
|   Float    | Zależnie od wybranego slotu przy zamówieniu (Fixed Slots) |    10-130     |

### **[SessionSettings]**

**SessionName**

Ta komenda ustawia nazwę serwera, która będzie wyświetlana w przeglądarce serwerów, grze itd.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |  ARK #XXXXXX     |       ∞        |

### **[MessageOfTheDay]**

**Duration**

Ta komenda definiuje, jak długo wiadomość powitalna ma być wyświetlana po połączeniu.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|  Integer   |     1.00000      |      X-X       |

**Message**

Ta komenda definiuje wiadomość powitalną wyświetlaną po połączeniu gracza z serwerem.

| Typ danych | Wartość domyślna | Zakres wartości |
| :--------: | :--------------: | :-------------: |
|   Float    |      "..."       |       /        |

## Konfiguracja: Game.ini

Jak wspomniano wcześniej, bardziej rozbudowane modyfikacje można zrobić przez Game.ini. Należy do nich np. zmiana punktów engramów czy XP za poziom.

### Limit poziomu

Można zwiększyć maksymalny poziom graczy i dinozaurów. Służy do tego funkcja `LevelExperienceRampOverrides`, wprowadzona w wersji v194. Szczegółowe info i przykłady znajdziesz na forum Steam: [Extended Game Options: How to Configure your Custom ARK server](https://steamcommunity.com/app/346110/discussions/10/530646715633129364/).

Komenda jest stosowana dwukrotnie: pierwszy raz dla poziomu gracza, drugi dla poziomu dinozaura. Składnia wygląda tak:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=(
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>)
```

Nawiasy kwadratowe definiują poziomy (**LEVELVALUE**), a po znaku równości podajesz ilość XP (**Points**) potrzebną do osiągnięcia danego poziomu.

Na przykład, jeśli chcesz mieć limit 500 poziomów, wygląda to tak:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=( 
ExperiencePointsForLevel[0]=100, 
ExperiencePointsForLevel[1]=200, 
ExperiencePointsForLevel[2]=300, 
ExperiencePointsForLevel[3]=400, 
ExperiencePointsForLevel[4]=500, 
ExperiencePointsForLevel[5]=600,
... // Skrócone dla przejrzystości
ExperiencePointsForLevel[499]=50000)
```

### Punkty engramów

Przy każdym **awansie poziomu** dostajesz **punkty engramów**. Liczbę punktów engramów na poziom można zmienić od wersji v193. Składnia wygląda tak:

```
OverridePlayerLevelEngramPoints=
```

Dla każdego poziomu musisz dodać linię komendy. Na przykład, jeśli definiujesz 10 poziomów i chcesz dawać **5 punktów engramów** więcej na każdy poziom, będzie to wyglądać tak:

```
OverridePlayerLevelEngramPoints=5
OverridePlayerLevelEngramPoints=10
OverridePlayerLevelEngramPoints=15
OverridePlayerLevelEngramPoints=20
OverridePlayerLevelEngramPoints=25
OverridePlayerLevelEngramPoints=30
OverridePlayerLevelEngramPoints=35
OverridePlayerLevelEngramPoints=40
OverridePlayerLevelEngramPoints=45
OverridePlayerLevelEngramPoints=50
```

Liczba linii zależy od wcześniej ustawionego limitu poziomów.

:::info
ARK to dynamiczna gra, która regularnie się zmienia. Dotyczy to też konfiguracji serwera. Dlatego polecamy zerknąć do oficjalnej dokumentacji po więcej szczegółów: https://ark.fandom.com/wiki/Server_configuration
:::

<InlineVoucher />