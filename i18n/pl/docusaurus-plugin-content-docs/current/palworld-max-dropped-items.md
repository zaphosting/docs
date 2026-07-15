---
id: palworld-max-dropped-items
title: "Palworld: Maksymalna liczba upuszczonych przedmiotów"
description: "Dowiedz się, jak zmienić limity upuszczonych przedmiotów i ustawienia ich znikania na serwerze Palworld, edytując odpowiednie wartości w konfiguracji. -> Sprawdź teraz"
sidebar_label: "Maksymalna liczba upuszczonych przedmiotów"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld pozwala kontrolować, ile upuszczonych przedmiotów może znajdować się w świecie oraz jak długo pozostają one na ziemi, zanim znikną. W tym poradniku nauczysz się, jak edytować właściwy plik konfiguracyjny w panelu ZAP-Hosting, dostosować ustawienia upuszczonych przedmiotów i bezpiecznie zastosować zmiany.



## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld w panelu ZAP-Hosting oraz uprawnienia do edycji plików konfiguracyjnych.

:::info Wymagana ręczna konfiguracja
Ta konfiguracja odbywa się ręcznie poprzez edycję pliku konfiguracyjnego serwera Palworld. Wymagany plik znajdziesz w panelu administracyjnym serwera gier w sekcji `Configs`.
:::

## Otwórz plik konfiguracyjny Palworld

Aby zmienić limit upuszczonych przedmiotów, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting:

1. Otwórz swój serwer Palworld
2. Przejdź do `Configs`
3. Otwórz plik `PalWorldSettings.ini`

Ten plik zawiera główne wartości konfiguracyjne rozgrywki na Twoim serwerze Palworld, w tym zachowanie upuszczonych przedmiotów.

## Zmień ustawienia upuszczonych przedmiotów

Ustawienia upuszczonych przedmiotów konfiguruje się za pomocą wpisów w pliku `PalWorldSettings.ini`. Musisz dostosować odpowiednie wartości w aktywnej linii lub sekcji ustawień.

### Istotne klucze konfiguracyjne

Użyj poniższych kluczy konfiguracyjnych, aby kontrolować upuszczone przedmioty:

| Klucz konfiguracyjny | Wartość domyślna | Opis |
| --- | --- | --- |
| `DropItemMaxNum` | `3000` | Maksymalna liczba upuszczonych przedmiotów, które mogą istnieć jednocześnie w świecie |
| `DropItemAliveMaxHours` | `1.0` | Czas w godzinach, po którym upuszczone przedmioty automatycznie znikają |

### Przykładowa konfiguracja

W zależności od zawartości Twojego pliku, wartości te zwykle znajdują się w wpisie opcji Palworld. Na przykład:

```ini
OptionSettings=(DropItemMaxNum=3000,DropItemAliveMaxHours=1.000000)
```

Jeśli te klucze już istnieją w Twoim wpisie `OptionSettings`, zmień tylko wartości. Na przykład:

```ini
OptionSettings=(DropItemMaxNum=2000,DropItemAliveMaxHours=0.500000)
```

W tym przykładzie:

- `DropItemMaxNum=2000` ogranicza świat do `2000` upuszczonych przedmiotów
- `DropItemAliveMaxHours=0.500000` powoduje, że przedmioty znikają po `0.5` godziny, czyli po `30` minutach

:::note Format wartości
Ustawienia serwera Palworld często używają wartości dziesiętnych z wieloma zerami po przecinku, np. `1.000000`. Staraj się zachować styl formatowania używany w Twoim pliku.
:::

## Wybierz odpowiednie wartości

Poprawne wartości zależą od liczby graczy, aktywności serwera i generowania łupów.

### Zalecane scenariusze użycia

| Scenariusz | `DropItemMaxNum` | `DropItemAliveMaxHours` |
| --- | --- | --- |
| Mały prywatny serwer | `3000` | `1.000000` |
| Zajęty serwer multiplayer | `2000` | `0.500000` |
| Konfiguracja nastawiona na wydajność | `1000` do `1500` | `0.250000` do `0.500000` |

### Wpływ na wydajność

Niższe limity upuszczonych przedmiotów mogą poprawić wydajność serwera, szczególnie jeśli:

- wielu graczy jest aktywnych jednocześnie
- świat generuje dużą liczbę przedmiotów
- gracze często farmią, budują lub zostawiają łupy na ziemi

:::tip Popraw wydajność przez obniżenie limitów przedmiotów
Jeśli zauważysz lagi lub spadek responsywności serwera, obniżenie zarówno maksymalnej liczby upuszczonych przedmiotów, jak i czasu ich znikania może pomóc zmniejszyć bałagan w świecie i poprawić stabilność.
:::

:::caution Unikaj zbyt niskich wartości
Jeśli ustawisz wartości zbyt nisko, gracze mogą zauważyć, że przedmioty znikają zbyt szybko lub limit upuszczonych przedmiotów zostaje osiągnięty wcześniej niż oczekiwano. Testuj zmiany dokładnie po ich zastosowaniu.
:::

## Zapisz i zastosuj zmiany

Po edycji pliku `PalWorldSettings.ini` zapisz go w panelu ZAP-Hosting.

Po zapisaniu pliku zrestartuj serwer Palworld, aby nowe ustawienia dotyczące upuszczonych przedmiotów zostały załadowane.

| Akcja | Wymagane |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Zrestartuj serwer | Tak |
| Dodatkowe polecenie konsoli | Nie |

:::info Wymagany restart
Zmiany w `PalWorldSettings.ini` nie zaczną działać, dopóki nie zrestartujesz serwera Palworld.
:::

## Sprawdź nowe ustawienia

Po restarcie dołącz do serwera i obserwuj, jak zachowują się upuszczone przedmioty podczas normalnej rozgrywki.

Sprawdź, czy:

- liczba upuszczonych przedmiotów jest kontrolowana zgodnie z oczekiwaniami
- przedmioty pozostają na ziemi przez zamierzony czas
- wydajność serwera poprawiła się po zmniejszeniu ilości lub czasu życia przedmiotów

W razie potrzeby wróć do pliku `PalWorldSettings.ini` i dopracuj wartości.

## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś maksymalną liczbę upuszczonych przedmiotów oraz czas ich znikania na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂