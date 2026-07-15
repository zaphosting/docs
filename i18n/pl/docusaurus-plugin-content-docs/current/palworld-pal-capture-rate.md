---
id: palworld-pal-capture-rate
title: "Palworld: Współczynnik łapania Palów"
description: "Dowiedz się, jak zmienić współczynnik łapania Palów w Palworld, edytując ustawienie PalCaptureRate, aby ułatwić łapanie na Twoim serwerze. -> Sprawdź teraz"
sidebar_label: Palworld: Współczynnik łapania Palów
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld pozwala na dostosowanie współczynnika łapania Palów na Twoim serwerze poprzez główną konfigurację świata. W tym poradniku dowiesz się, gdzie znaleźć odpowiedni plik konfiguracyjny w panelu ZAP-Hosting, którą wartość zmienić oraz jak zastosować nowy współczynnik łapania.



## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld przez panel ZAP-Hosting oraz że serwer jest aktualnie uruchomiony i skonfigurowany.

:::info Dostęp do pliku konfiguracyjnego
W serwerach Palworld na ZAP-Hosting odpowiednie ustawienia można edytować w panelu administracyjnym serwera gier w sekcji `Configs`.
:::

## Znajdź plik konfiguracyjny Palworld

Aby zmienić współczynnik łapania Palów, musisz edytować plik `PalWorldSettings.ini`.

### Otwórz sekcję Configs

Najpierw zaloguj się do panelu ZAP-Hosting i otwórz swój serwer gier Palworld. W panelu administracyjnym serwera przejdź do `Configs`.

Znajdź tam plik o nazwie:

```ini
PalWorldSettings.ini
```

### Zidentyfikuj właściwe ustawienie

W pliku `PalWorldSettings.ini` Palworld przechowuje wiele ustawień rozgrywki w sekcji `OptionSettings`. Ustawienie odpowiedzialne za łapanie Palów to:

```ini
PalCaptureRate=[twoja_wartość]
```

Domyślnie wartość ta wynosi zwykle:

```ini
PalCaptureRate=1.000000
```

Wyższa wartość ułatwia łapanie Palów, natomiast niższa sprawia, że próby łapania są trudniejsze.

## Edytuj współczynnik łapania Palów

Gdy już otworzyłeś właściwy plik, możesz dostosować współczynnik łapania do swojego ulubionego balansu rozgrywki.

### Zmień wartość w konfiguracji

Wyszukaj w `PalWorldSettings.ini` wpis `PalCaptureRate` i zamień jego wartość na preferowany mnożnik.

Na przykład:

```ini
PalCaptureRate=2.000000
```

To podwoi współczynnik łapania w porównaniu do ustawienia domyślnego.

### Przykładowe wartości

Poniższa tabela to ogólne odniesienie:

| Wartość | Efekt |
| --- | --- |
| `1.000000` | Domyślny współczynnik łapania Palów |
| `1.500000` | Nieco łatwiejsze łapanie |
| `2.000000` | Wyraźnie łatwiejsze łapanie |
| `3.000000` | Znacznie łatwiejsze łapanie |

:::tip Zbalansowana konfiguracja
Jeśli chcesz ułatwić łapanie, ale nie sprawić, by było ono gwarantowane, wartość między `1.500000` a `2.000000` to zwykle rozsądny punkt startowy.
:::

## Zapisz i zastosuj zmiany

Po edycji wartości `PalCaptureRate` zapisz zmiany w edytorze konfiguracji ZAP-Hosting.

### Uruchom ponownie serwer

Palworld nie stosuje tego ustawienia na żywo. Po zapisaniu pliku musisz zrestartować swój serwer gier z panelu administracyjnego ZAP-Hosting, aby nowy współczynnik łapania został załadowany.

:::caution Wymagany restart
Jeśli nie zrestartujesz serwera po edycji `PalWorldSettings.ini`, nowy współczynnik łapania nie zacznie działać.
:::

## Podsumowanie ustawień konfiguracyjnych

Poniższa tabela podsumowuje ustawienie używane do tej zmiany:

| Plik | Klucz konfiguracji | Wartość domyślna | Cel | Wymagany restart |
| --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | `PalCaptureRate` | `1.000000` | Kontroluje mnożnik współczynnika łapania Palów | Tak |

## Rozwiązywanie problemów

Jeśli nowy współczynnik łapania nie działa, sprawdź poniższe punkty.

### Sprawdź format ustawienia

Upewnij się, że linia jest poprawnie zapisana i używa wartości numerycznej, na przykład:

```ini
PalCaptureRate=2.000000
```

Unikaj dodawania dodatkowych znaków lub zmiany innych wpisów w pliku.

### Potwierdź zapisanie pliku

Po edycji sprawdź, czy zmiany faktycznie zostały zapisane w `PalWorldSettings.ini` w sekcji `Configs`.

### W razie potrzeby zrestartuj ponownie

Jeśli serwer nie został poprawnie zrestartowany po zmianie, wykonaj kolejny restart z panelu administracyjnego.

:::note Ustawienie po stronie serwera
`PalCaptureRate` to ustawienie rozgrywki po stronie serwera, więc gracze zauważą nowy współczynnik dopiero po ponownym załadowaniu konfiguracji przez serwer.
:::

## Podsumowanie

Gratulacje, pomyślnie zmieniłeś współczynnik łapania Palów na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂