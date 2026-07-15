---
id: palworld-player-damage-and-defense
title: "Palworld: Obrażenia i Obrona Gracza"
description: "Dowiedz się, jak zmienić ustawienia obrażeń i obrony gracza w Palworld, edytując konfigurację serwera i poprawnie dostosowując mnożniki obrażeń. -> Sprawdź teraz"
sidebar_label: Palworld: Obrażenia i Obrona Gracza
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld pozwala na dostosowanie, ile obrażeń zadaje gracz oraz ile obrażeń otrzymuje, poprzez wartości konfiguracyjne serwera. W tym poradniku nauczysz się, jak edytować odpowiedni plik konfiguracyjny na swoim serwerze gier ZAP-Hosting, zmienić mnożniki obrażeń i obrony gracza oraz poprawnie zastosować zmiany.



## Przygotowanie

Zanim zaczniesz, upewnij się, że Twój serwer Palworld jest już zainstalowany i masz dostęp do jego panelu administracyjnego.

Potrzebujesz:
- aktywnego serwera gier Palworld w ZAP-Hosting
- dostępu do panelu administracyjnego serwera gier
- uprawnień do edycji plików w sekcji `Configs`

:::info Ręczna konfiguracja wymagana
Ta konfiguracja odbywa się ręcznie poprzez edycję pliku konfiguracyjnego Palworld. Nie jest wymagane żadne dodatkowe polecenie w grze dla tych ustawień.
:::

## Otwórz właściwy plik konfiguracyjny

Aby zmienić obrażenia i obronę gracza, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting:
1. Otwórz swój serwer Palworld
2. Przejdź do `Configs`
3. Otwórz `PalWorldSettings.ini`

Ten plik zawiera główne mnożniki rozgrywki używane przez serwer dedykowany, w tym wartości dotyczące obrażeń zadawanych przez gracza i otrzymywanych przez gracza.

:::note Lokalizacja konfiguracji
Kontekst zadania potwierdza, że odpowiedni plik jest dostępny w panelu administracyjnym serwera gier w sekcji `Configs`. Jeśli układ Twojego panelu różni się nieco, poszukaj listy plików konfiguracyjnych dla swojego serwera i otwórz `PalWorldSettings.ini`.
:::

## Edytuj wartości obrażeń i obrony gracza

W pliku `PalWorldSettings.ini` musisz znaleźć następujące wpisy konfiguracyjne.

| Klucz konfiguracyjny | Funkcja | Wartość domyślna |
| --- | --- | --- |
| `PlayerDamageRateAttack` | Kontroluje, ile obrażeń zadaje gracz | `1.000000` |
| `PlayerDamageRateDefense` | Kontroluje, ile obrażeń otrzymuje gracz | `1.000000` |

Te wartości zazwyczaj znajdują się w głównym bloku opcji w pliku.

### Przykładowa konfiguracja

Użyj poniższego przykładu jako odniesienia:

```ini
PlayerDamageRateAttack=1.000000
PlayerDamageRateDefense=1.000000
```

Jeśli te wartości już istnieją, zmień tylko liczby. Jeśli Twój plik używa jednej długiej linii opcji, upewnij się, że edytujesz istniejące wpisy ostrożnie, nie usuwając przecinków, nawiasów ani sąsiednich wartości.

### Jak działają wartości

| Wartość | Efekt |
| --- | --- |
| Wyższa `PlayerDamageRateAttack` | Gracze zadają więcej obrażeń |
| Niższa `PlayerDamageRateAttack` | Gracze zadają mniej obrażeń |
| Wyższa `PlayerDamageRateDefense` | Gracze otrzymują mniej obrażeń (w zależności od logiki gry, ale generalnie jest to mnożnik obrażeń otrzymywanych) |
| Niższa `PlayerDamageRateDefense` | Gracze otrzymują więcej obrażeń |

:::caution Zrozum mnożnik obrony
`PlayerDamageRateDefense` wpływa na mnożnik obrażeń otrzymywanych przez gracza. Niższa wartość oznacza, że gracz otrzymuje więcej obrażeń, natomiast wyższa wartość zmniejsza względne zagrożenie mniej agresywnie, w zależności od balansu serwera. Zawsze testuj ustawienia po ich zmianie.
:::

## Wybierz odpowiednie wartości mnożników

Możesz dostosować ustawienia w zależności od poziomu trudności, jaki chcesz osiągnąć na swoim serwerze.

### Przykład zrównoważony

Jeśli chcesz mieć doświadczenie bliskie domyślnemu, pozostaw obie wartości na `1.000000`:

```ini
PlayerDamageRateAttack=1.000000
PlayerDamageRateDefense=1.000000
```

### Przykład łatwiejszej walki

Jeśli chcesz, aby gracze zadawali więcej obrażeń i łatwiej przeżywali, możesz zwiększyć atak i ostrożnie testować balans obrony:

```ini
PlayerDamageRateAttack=1.500000
PlayerDamageRateDefense=1.500000
```

### Przykład trudniejszej walki

Jeśli chcesz, aby gracze zadawali mniej obrażeń i otrzymywali więcej obrażeń, możesz zmniejszyć wartości:

```ini
PlayerDamageRateAttack=0.800000
PlayerDamageRateDefense=0.800000
```

:::tip Dostosowuj stopniowo
Zmieniając mnożniki, rób to małymi krokami, np. `0.1` lub `0.25`. Ułatwia to znalezienie dobrego balansu bez sprawiania, że walka będzie zbyt łatwa lub zbyt wymagająca.
:::

## Zapisz plik i zrestartuj serwer

Po edycji `PalWorldSettings.ini` zapisz plik w sekcji `Configs` w panelu ZAP-Hosting.

Po zapisaniu pliku zrestartuj swój serwer Palworld, aby nowe ustawienia obrażeń zostały załadowane.

### Wymagane działania po edycji

| Działanie | Wymagane |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Zrestartuj serwer | Tak |
| Uruchom polecenie w grze | Nie |
| Uruchom polecenie w konsoli ręcznie | Nie |

:::info Restart jest konieczny
Zmiany w `PlayerDamageRateAttack` i `PlayerDamageRateDefense` nie są stosowane poprawnie, dopóki serwer nie zostanie zrestartowany.
:::

## Zweryfikuj nowe ustawienia

Po restarcie dołącz do serwera i przetestuj walkę bezpośrednio.

Sprawdź:
- czy gracz zadaje oczekiwaną ilość obrażeń
- czy ataki przeciwników są silniejsze lub słabsze
- czy ogólny balans nadal pasuje do zamierzonej rozgrywki

Jeśli efekt nie jest taki, jak chcesz, wróć do `PalWorldSettings.ini`, ponownie dostosuj mnożniki, zapisz plik i zrestartuj serwer.

## Podsumowanie

Gratulacje, pomyślnie zmieniłeś ustawienia obrażeń i obrony gracza na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂