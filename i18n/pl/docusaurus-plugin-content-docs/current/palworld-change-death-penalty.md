---
id: palworld-change-death-penalty
title: "Palworld: Zmiana kary śmierci"
description: "Dowiedz się, jak zmienić karę śmierci w Palworld, edytując konfigurację serwera, w tym wartości DeathPenalty oraz jak poprawnie zrestartować serwer. -> Sprawdź teraz"
sidebar_label: Palworld: Zmiana kary śmierci
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld pozwala kontrolować, co gracze tracą po śmierci, zmieniając ustawienie `DeathPenalty` na serwerze. W tym poradniku nauczysz się, jak edytować odpowiedni plik konfiguracyjny w panelu ZAP-Hosting i poprawnie zastosować zmianę.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Przygotowanie

Zanim zaczniesz, upewnij się, że:

- masz dostęp do swojego serwera gier Palworld w panelu ZAP-Hosting
- serwer jest wyłączony lub jesteś gotowy na jego restart po wprowadzeniu zmian
- wiesz, jaki sposób kary śmierci chcesz zastosować dla swoich graczy

:::info Dostęp do pliku konfiguracyjnego
W przypadku serwerów Palworld na ZAP-Hosting odpowiednie ustawienia można edytować w panelu administracyjnym serwera gier w sekcji **Configs**.
:::

## Otwórz plik konfiguracyjny Palworld

Aby zmienić karę śmierci, musisz edytować plik `PalWorldSettings.ini`.

### Znajdź plik w panelu ZAP-Hosting

Zaloguj się do panelu ZAP-Hosting i otwórz swój serwer gier Palworld. Następnie przejdź do sekcji **Configs** w panelu administracyjnym serwera i otwórz plik o nazwie `PalWorldSettings.ini`.

Ten plik zawiera główne wartości konfiguracyjne rozgrywki dla Twojego serwera Palworld, w tym zachowanie kary śmierci.

:::note Ręczne zmiany konfiguracji
Ustawienie kary śmierci jest zapisane bezpośrednio w pliku konfiguracyjnym. Musisz edytować tę wartość ręcznie, chyba że Twój aktualny panel wyraźnie oferuje osobne szybkie ustawienie.
:::

## Zmień wartość DeathPenalty

W pliku `PalWorldSettings.ini` znajdź sekcję `OptionSettings`, gdzie definiowane są ustawienia rozgrywki. Musisz znaleźć wpis `DeathPenalty` i zmienić jego wartość na wybraną przez siebie opcję.

### Obsługiwane wartości DeathPenalty

Obecnie Palworld używa następujących wartości dla ustawienia `DeathPenalty`:

| Wartość | Efekt |
| --- | --- |
| `None` | Gracze nie tracą nic po śmierci |
| `Item` | Gracze tracą przedmioty, ale zachowują wyposażenie |
| `ItemAndEquipment` | Gracze tracą przedmioty i wyposażenie |
| `All` | Gracze tracą przedmioty, wyposażenie oraz wszystkie Palsy w drużynie |

:::tip Wybór odpowiedniego ustawienia
Jeśli chcesz bardziej casualowe doświadczenie na serwerze, najlepszy będzie `None` lub `Item`. Jeśli chcesz domyślne przeżycie survivalowe, wybierz `All`.
:::

### Przykładowy wpis konfiguracyjny

W większości konfiguracji serwera Palworld ustawienie pojawia się jako część dłuższej linii `OptionSettings`. Na przykład:

```ini
OptionSettings=(DeathPenalty=All)
```

Aby całkowicie wyłączyć karę śmierci, zmień na:

```ini
OptionSettings=(DeathPenalty=None)
```

Jeśli Twój plik zawiera wiele ustawień w tym samym bloku `OptionSettings=(...)`, zmień tylko wartość `DeathPenalty`, pozostawiając pozostałe wpisy bez zmian. Na przykład:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DeathPenalty=ItemAndEquipment,bEnablePlayerToPlayerDamage=False)
```

W tym przypadku zamieniasz tylko `ItemAndEquipment` na wybraną wartość.

:::caution Zachowaj istniejącą składnię
Nie usuwaj przecinków, nawiasów ani innych istniejących ustawień w bloku `OptionSettings=(...)`. Nieprawidłowa składnia może uniemożliwić poprawne wczytanie konfiguracji przez serwer.
:::

## Zapisz i zastosuj zmiany

Po edycji wartości `DeathPenalty` zapisz zmiany w pliku `PalWorldSettings.ini`.

### Restart serwera

Po zapisaniu pliku zrestartuj serwer Palworld z poziomu panelu ZAP-Hosting. Restart jest konieczny, aby serwer załadował zaktualizowaną konfigurację.

| Akcja | Wymagane |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Zrestartuj serwer | Tak |
| Uruchom dodatkowe komendy konsoli | Nie |

:::info Wymagany restart
Palworld odczytuje to ustawienie z konfiguracji serwera. Nowe zachowanie po śmierci zacznie działać dopiero po pełnym restarcie serwera.
:::

## Sprawdź nowe ustawienie kary śmierci

Po restarcie serwera dołącz do gry i przetestuj zachowanie, jeśli chcesz potwierdzić zmianę.

### Co sprawdzić

W zależności od wybranej wartości zweryfikuj, czy gracze:

- zachowują wszystkie przedmioty po śmierci
- tracą tylko przedmioty z ekwipunku
- tracą przedmioty i wyposażenie
- tracą przedmioty, wyposażenie oraz Palsy z drużyny

Jeśli ustawienie nie wydaje się zmienione, ponownie otwórz `PalWorldSettings.ini` i upewnij się, że:

- wartość `DeathPenalty` jest dokładnie poprawnie napisana
- zmiana została poprawnie zapisana
- serwer został zrestartowany po edycji

:::danger Używaj dokładnych nazw wartości
Ustawienie `DeathPenalty` jest w praktyce czułe na wielkość liter w pliku konfiguracyjnym. Zawsze używaj dokładnych nazw wartości: `None`, `Item`, `ItemAndEquipment` lub `All`.
:::

## Podsumowanie

Gratulacje, pomyślnie zmieniłeś karę śmierci w Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!