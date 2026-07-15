---
id: palworld-set-a-password
title: "Palworld: Ustaw Hasło"
description: "Dowiedz się, jak ustawić hasło do serwera Palworld, edytując ręcznie konfigurację gry i poprawnie zastosować zmianę hasła. -> Dowiedz się więcej teraz"
sidebar_label: Palworld: Ustaw Hasło
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld pozwala zabezpieczyć Twój serwer hasłem, aby tylko uprawnieni gracze mogli dołączyć. W tym poradniku nauczysz się, jak ręcznie ustawić lub zmienić hasło serwera w konfiguracji serwera gier ZAP-Hosting i poprawnie zastosować tę zmianę.



## Preparation

Zanim zaczniesz, upewnij się, że:

- Twój serwer gier Palworld jest online w panelu głównym ZAP-Hosting
- masz dostęp do administracji serwera gier
- znasz hasło, którego chcesz użyć do dostępu do serwera

:::info Wymagana ręczna konfiguracja
W Palworld hasło można ustawić ręcznie poprzez pliki konfiguracyjne serwera. W panelu ZAP-Hosting masz dostęp do tych plików w administracji serwera gier w sekcji `Configs`.
:::

## Otwórz plik konfiguracyjny Palworld

Aby ustawić hasło na swoim serwerze Palworld, musisz edytować plik `PalWorldSettings.ini`.

### Znajdź plik w panelu ZAP-Hosting

1. Zaloguj się do panelu głównego ZAP-Hosting.
2. Otwórz administrację swojego serwera gier **Palworld**.
3. Przejdź do sekcji **Configs**.
4. Otwórz plik `PalWorldSettings.ini`.

Ten plik zawiera główne ustawienia serwera Palworld, w tym wpis kontrolujący, czy dołączenie wymaga hasła.

:::note Cel pliku konfiguracyjnego
Plik `PalWorldSettings.ini` przechowuje opcje serwera w jednej linii konfiguracyjnej, zwykle w sekcji `OptionSettings=(...)`. Musisz tam edytować wartość `ServerPassword`.
:::

## Edytuj hasło serwera

Po otwarciu `PalWorldSettings.ini` znajdź wpis `ServerPassword`.

### Wymagany wpis konfiguracyjny

Użyj następującej wartości:

```ini
ServerPassword="[twoje_hasło]"
```

Zamień `[twoje_hasło]` na hasło, które chcesz, aby gracze wpisywali podczas dołączania do serwera.

Jeśli hasło jest obecnie wyłączone, wartość może wyglądać tak:

```ini
ServerPassword=""
```

Pusta wartość oznacza, że nie jest ustawione żadne hasło do dołączenia.

### Przykład konfiguracji

W Palworld ustawienie to jest zwykle częścią bloku `OptionSettings=(...)`. Może wyglądać podobnie do tego:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="[twoje_hasło]",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Zachowaj istniejący format
Zmieniając wartość w `ServerPassword="..."` nie usuwaj przecinków, cudzysłowów, nawiasów ani innych wpisów w linii `OptionSettings=(...)`, bo może to uniemożliwić poprawne wczytanie konfiguracji przez serwer.
:::

## Odniesienie do konfiguracji

Poniższa tabela pokazuje odpowiednie ustawienie dla zmiany hasła:

| Ustawienie | Przykładowa wartość | Cel |
| --- | --- | --- |
| `ServerPassword` | `ServerPassword="[twoje_hasło]"` | Wymaga od graczy wpisania hasła przed dołączeniem do serwera |

### Rekomendacje dotyczące hasła

Przy wyborze hasła pamiętaj o tych wskazówkach:

| Rekomendacja | Wyjaśnienie |
| --- | --- |
| Używaj unikalnego hasła | Nie używaj hasła z innych kont lub usług |
| Unikaj bardzo prostych słów | Proste hasła łatwiej odgadnąć |
| Udostępniaj je tylko zaufanym graczom | Każdy z hasłem może próbować dołączyć |
| Przechowuj je bezpiecznie | Menedżer haseł pomoże Ci bezpiecznie je zapamiętać |

:::tip Wybierz silne hasło
Jeśli planujesz prywatny serwer Palworld dla znajomych lub zamkniętej społeczności, użyj silnego hasła zamiast prostego słowa czy nazwy serwera. To zmniejszy niechciane próby dołączenia.
:::

## Zapisz zmiany i zrestartuj serwer

Po edycji hasła zapisz plik w sekcji `Configs`.

### Zastosuj nowe hasło

Aby zmiana hasła zaczęła działać:

1. Zapisz zmiany w `PalWorldSettings.ini`.
2. Zrestartuj swój serwer gier Palworld.

Restart jest konieczny, ponieważ Palworld odczytuje ustawienia serwera z pliku konfiguracyjnego podczas uruchamiania. Bez restartu nowe hasło może nie zostać zastosowane.

:::info Wymagany restart
Po zmianie `ServerPassword` musisz ręcznie zrestartować serwer z panelu administracji serwera gier ZAP-Hosting, aby nowe ustawienie zostało wczytane.
:::

## Sprawdź hasło

Po zakończeniu restartu przetestuj konfigurację, dołączając do serwera z gry Palworld.

### Co sprawdzić

Podczas łączenia się upewnij się, że:

- serwer teraz wymaga hasła przed dołączeniem
- ustawione hasło działa poprawnie
- gracze bez hasła nie mogą uzyskać dostępu do serwera

Jeśli serwer nie pyta o hasło, ponownie otwórz `PalWorldSettings.ini` i sprawdź, czy:

- `ServerPassword` jest obecne w sekcji `OptionSettings=(...)`
- wartość nie jest pusta
- plik został poprawnie zapisany
- serwer został zrestartowany po zmianie

:::note Widoczność hasła
Hasło jest przechowywane w pliku konfiguracyjnym w postaci zwykłego tekstu. Upewnij się, że dostęp do administracji serwera mają tylko zaufane osoby.
:::

## Conclusion

Gratulacje, pomyślnie ustawiłeś hasło dla swojego serwera Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂